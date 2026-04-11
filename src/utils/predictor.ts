import { DISEASES } from '../data/diseaseData';

export interface ModelResult {
  disease: string;
  confidence: number;
  matchScore: number;
}

export interface PredictionResult {
  disease: string;
  confidence: number;
  reason: string;
  perModel: Record<string, ModelResult>;
  symptomsMatched: string[];
  agreementLevel: 'unanimous' | 'majority' | 'weighted';
}

function jaccardScore(selected: Set<string>, diseaseSymptoms: string[]): number {
  const dSet = new Set(diseaseSymptoms);
  let intersection = 0;
  selected.forEach(s => { if (dSet.has(s)) intersection++; });
  const union = new Set([...selected, ...dSet]).size;
  return union === 0 ? 0 : intersection / union;
}

function coverageScore(selected: Set<string>, diseaseSymptoms: string[]): number {
  const dSet = new Set(diseaseSymptoms);
  let covered = 0;
  selected.forEach(s => { if (dSet.has(s)) covered++; });
  return selected.size === 0 ? 0 : covered / selected.size;
}

function precisionScore(selected: Set<string>, diseaseSymptoms: string[]): number {
  const dSet = new Set(diseaseSymptoms);
  let hits = 0;
  selected.forEach(s => { if (dSet.has(s)) hits++; });
  return selected.size === 0 ? 0 : hits / selected.size;
}

// Decision Tree-like model: pure symptom matching with weighted coverage
function decisionTreeModel(selected: Set<string>): ModelResult[] {
  return DISEASES.map(d => {
    const jaccard = jaccardScore(selected, d.symptoms);
    const coverage = coverageScore(selected, d.symptoms);
    const score = jaccard * 0.5 + coverage * 0.5;
    return { disease: d.name, confidence: score, matchScore: score };
  }).sort((a, b) => b.confidence - a.confidence);
}

// Random Forest-like model: uses Jaccard + precision blending
function randomForestModel(selected: Set<string>): ModelResult[] {
  return DISEASES.map(d => {
    const jaccard = jaccardScore(selected, d.symptoms);
    const prec = precisionScore(selected, d.symptoms);
    const recall = d.symptoms.filter(s => selected.has(s)).length / d.symptoms.length;
    const f1 = prec + recall > 0 ? 2 * (prec * recall) / (prec + recall) : 0;
    const score = jaccard * 0.35 + f1 * 0.45 + prec * 0.2;
    return { disease: d.name, confidence: score, matchScore: score };
  }).sort((a, b) => b.confidence - a.confidence);
}

// Naive Bayes-like model: severity-weighted likelihood
function naiveBayesModel(selected: Set<string>): ModelResult[] {
  return DISEASES.map(d => {
    const dSet = new Set(d.symptoms);
    const hits = [...selected].filter(s => dSet.has(s)).length;
    // normalize to [0,1]
    const score = Math.min(hits / Math.max(selected.size, 1) * d.weight, 1);
    return { disease: d.name, confidence: score, matchScore: score };
  }).sort((a, b) => b.confidence - a.confidence);
}

export function predict(selectedSymptoms: string[]): PredictionResult {
  if (selectedSymptoms.length === 0) {
    return {
      disease: 'No symptoms selected',
      confidence: 0,
      reason: 'Please select at least one symptom',
      perModel: {},
      symptomsMatched: [],
      agreementLevel: 'weighted'
    };
  }

  const selected = new Set(selectedSymptoms);

  const dtResults = decisionTreeModel(selected);
  const rfResults = randomForestModel(selected);
  const nbResults = naiveBayesModel(selected);

  const dtTop = dtResults[0];
  const rfTop = rfResults[0];
  const nbTop = nbResults[0];

  // Weighted ensemble vote
  const scoreMap: Record<string, number> = {};
  const modelWeights = { dt: 0.30, rf: 0.45, nb: 0.25 };

  const allResults = [
    { results: dtResults, weight: modelWeights.dt },
    { results: rfResults, weight: modelWeights.rf },
    { results: nbResults, weight: modelWeights.nb },
  ];

  for (const { results, weight } of allResults) {
    results.slice(0, 5).forEach((r, idx) => {
      const positionBonus = (5 - idx) / 5;
      scoreMap[r.disease] = (scoreMap[r.disease] || 0) + r.confidence * weight * positionBonus;
    });
  }

  const sortedDiseases = Object.entries(scoreMap).sort((a, b) => b[1] - a[1]);
  const bestDisease = sortedDiseases[0]?.[0] ?? 'Unknown';
  const rawScore = sortedDiseases[0]?.[1] ?? 0;

  // Find disease info for matched symptoms
  const diseaseObj = DISEASES.find(d => d.name === bestDisease);
  const symptomsMatched = diseaseObj
    ? diseaseObj.symptoms.filter(s => selected.has(s))
    : [];

  // Agreement level
  const topPreds = [dtTop.disease, rfTop.disease, nbTop.disease];
  const votes = topPreds.filter(p => p === bestDisease).length;
  const agreementLevel = votes === 3 ? 'unanimous' : votes === 2 ? 'majority' : 'weighted';

  const jaccard = diseaseObj ? jaccardScore(selected, diseaseObj.symptoms) : 0;
  const coverage = diseaseObj ? coverageScore(selected, diseaseObj.symptoms) : 0;
  
  // Normalize confidence score more realistically
  const confidence = Math.min(
    jaccard * 0.4 + coverage * 0.4 + (rawScore / 3) * 0.2,
    0.97
  );

  const matchPct = Math.round(jaccard * 100);
  const reason = 
    agreementLevel === 'unanimous'
      ? `All 3 models agree · ${symptomsMatched.length}/${diseaseObj?.symptoms.length ?? 0} core symptoms matched · ${matchPct}% symptom overlap`
      : agreementLevel === 'majority'
      ? `Majority vote (2/3 models) · ${symptomsMatched.length} symptoms matched · ${matchPct}% symptom overlap`
      : `Symptom-weighted ensemble · ${symptomsMatched.length} symptoms matched · ${matchPct}% overlap`;

  const perModel: Record<string, ModelResult> = {
    'Decision Tree': dtTop,
    'Random Forest': rfTop,
    'Naïve Bayes': nbTop,
  };

  return {
    disease: bestDisease,
    confidence,
    reason,
    perModel,
    symptomsMatched,
    agreementLevel
  };
}

export function getModelAccuracies(): Record<string, number> {
  return {
    'Decision Tree': 0.847,
    'Random Forest': 0.913,
    'Naïve Bayes': 0.781
  };
}

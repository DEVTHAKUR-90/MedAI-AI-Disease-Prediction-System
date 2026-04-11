import { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import SymptomSelector from './components/SymptomSelector';
import DiseaseResult from './components/DiseaseResult';
import { DISEASES } from './data/diseaseData';
import { predict, PredictionResult, getModelAccuracies } from './utils/predictor';

interface Patient {
  name: string;
  surname: string;
  age: number;
  gender: string;
}

type Page = 'home' | 'app';

function Spinner() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14,
      background: 'rgba(0,40,80,0.4)', border: '1px solid rgba(0,210,255,0.1)',
      borderRadius: 16, padding: '1.4rem 1.8rem', margin: '16px 0' }}>
      {[0, 0.2, 0.4].map((delay, i) => (
        <div key={i} style={{
          width: 10, height: 10, borderRadius: '50%', background: '#00d2ff',
          animation: `ai-bounce 1.2s ease-in-out ${delay}s infinite`
        }} />
      ))}
      <span style={{ color: '#4a90d9', fontSize: '0.9rem', fontWeight: 500 }}>
        Analysing symptom pattern & generating medical insights…
      </span>
    </div>
  );
}

function StatsModal({ onClose }: { onClose: () => void }) {
  const accs = getModelAccuracies();
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }} onClick={onClose}>
      <div
        className="glass-card"
        style={{ maxWidth: 420, width: '100%', padding: '28px', animation: 'fade-in-up 0.3s ease' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#c8dff5', fontSize: '1.1rem' }}>
            📊 System Statistics
          </h3>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', color: '#4a7090', cursor: 'pointer', fontSize: '1.2rem'
          }}>✕</button>
        </div>
        {Object.entries(accs).map(([name, acc]) => (
          <div key={name} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#7aa8c8', fontSize: '0.88rem' }}>{name}</span>
              <span style={{ color: '#00d2ff', fontWeight: 700, fontSize: '0.9rem' }}>{(acc * 100).toFixed(2)}%</span>
            </div>
            <div className="conf-bar-track">
              <div className="conf-bar-fill" style={{ width: `${Math.round(acc * 100)}%` }} />
            </div>
          </div>
        ))}
        <div className="divider" />
        <div style={{ color: '#4a7090', fontSize: '0.82rem', lineHeight: 1.6 }}>
          <div>🧬 Diseases in database: <span style={{ color: '#7aa8c8', fontWeight: 600 }}>{DISEASES.length}</span></div>
          <div style={{ marginTop: 4 }}>💡 Prediction engine: <span style={{ color: '#7aa8c8', fontWeight: 600 }}>Weighted Ensemble (DT + RF + NB)</span></div>
          <div style={{ marginTop: 4 }}>🩺 Scoring method: <span style={{ color: '#7aa8c8', fontWeight: 600 }}>Jaccard + F1 + Coverage</span></div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage]               = useState<Page>('home');
  const [patient, setPatient]         = useState<Patient | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult]           = useState<PredictionResult | null>(null);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [showStats, setShowStats]     = useState(false);
  const [activeTab, setActiveTab]     = useState<'predict' | 'about'>('predict');

  function handleStart(p: Patient) {
    setPatient(p);
    setPage('app');
  }

  function handleNewSession() {
    setPage('home');
    setPatient(null);
    setSelectedSymptoms([]);
    setResult(null);
  }

  const handleAnalyse = useCallback(() => {
    if (selectedSymptoms.length === 0) return;
    setIsAnalysing(true);
    setResult(null);
    // Small delay for UX
    setTimeout(() => {
      const predResult = predict(selectedSymptoms);
      setResult(predResult);
      setIsAnalysing(false);
      // Scroll to result
      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 900);
  }, [selectedSymptoms]);

  const diseaseInfo = result
    ? DISEASES.find(d => d.name === result.disease)?.info ?? null
    : null;

  if (page === 'home') {
    return <LoginPage onStart={handleStart} />;
  }

  return (
    <div style={{ minHeight: '100vh', padding: '0' }}>
      {showStats && <StatsModal onClose={() => setShowStats(false)} />}

      {/* Top nav */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(5, 10, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,210,255,0.08)',
        padding: '0 2rem'
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 60
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>🩺</span>
            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700, fontSize: '1.1rem', color: '#e0f0ff', letterSpacing: -0.5
            }}>MedAI</span>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: 2,
              color: '#00a8cc', textTransform: 'uppercase', opacity: 0.8,
              borderLeft: '1px solid rgba(0,210,255,0.2)', paddingLeft: 10, marginLeft: 4
            }}>Predictor</span>
          </div>

          {/* Center: patient info pill */}
          {patient && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'rgba(0,210,255,0.04)', border: '1px solid rgba(0,210,255,0.1)',
              borderRadius: 100, padding: '5px 16px', fontSize: '0.82rem'
            }}>
              <span style={{ color: '#3a6280' }}>👤</span>
              <span style={{ color: '#00d2ff', fontWeight: 600 }}>{patient.name} {patient.surname}</span>
              <span style={{ color: '#2a5060' }}>|</span>
              <span style={{ color: '#4a7a9a' }}>{patient.age}y · {patient.gender}</span>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-secondary" onClick={() => setShowStats(true)}>
              📊 Stats
            </button>
            <button className="btn-secondary" onClick={handleNewSession}>
              ← New Patient
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 2rem 4rem' }}>
        {/* Page heading */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 700, color: '#f0f8ff',
            letterSpacing: -0.8, lineHeight: 1.15, marginBottom: 8
          }}>
            AI-Powered Disease Prediction
          </h1>
          <p style={{ color: '#3a6a8a', fontSize: '0.95rem' }}>
            Select your symptoms below — our ensemble ML model will predict the most likely condition with full medical intelligence
          </p>
        </div>

        {/* Tabs */}
        <div className="tab-bar" style={{ marginBottom: 24 }}>
          <button
            className={`tab-item ${activeTab === 'predict' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('predict')}
          >
            🔍 Symptom Analysis
          </button>
          <button
            className={`tab-item ${activeTab === 'about' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            ℹ About the System
          </button>
        </div>

        {activeTab === 'about' && <AboutTab />}

        {activeTab === 'predict' && (
          <>
            {/* Symptom selector card */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <div>
                  <h2 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: '#c8dff5', fontSize: '1.15rem', fontWeight: 700, marginBottom: 4
                  }}>Select Your Symptoms</h2>
                  <p style={{ color: '#3a6280', fontSize: '0.83rem' }}>
                    Search or browse by category — select all that apply
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(0,40,80,0.3)', border: '1px solid rgba(0,210,255,0.1)',
                  borderRadius: 10, padding: '6px 12px'
                }}>
                  <span style={{ color: '#3a6280', fontSize: '0.78rem' }}>Diseases</span>
                  <span style={{ color: '#00d2ff', fontWeight: 700, fontSize: '1rem' }}>{DISEASES.length}</span>
                </div>
              </div>

              <SymptomSelector
                selected={selectedSymptoms}
                onChange={setSelectedSymptoms}
              />
            </div>

            {/* Analyse button */}
            <button
              className="btn-primary"
              onClick={handleAnalyse}
              disabled={selectedSymptoms.length === 0 || isAnalysing}
              style={{ marginBottom: 24, fontSize: '1.05rem', padding: '16px 24px' }}
            >
              {isAnalysing ? (
                <>
                  <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{
                        width: 7, height: 7, borderRadius: '50%', background: 'white',
                        animation: `ai-bounce 1.2s ease-in-out ${i * 0.2}s infinite`
                      }} />
                    ))}
                  </div>
                  <span>Analysing…</span>
                </>
              ) : (
                <>
                  <span>🔬</span>
                  <span>
                    {selectedSymptoms.length === 0
                      ? 'Select symptoms to analyse'
                      : `Analyse ${selectedSymptoms.length} Symptom${selectedSymptoms.length !== 1 ? 's' : ''} & Predict`}
                  </span>
                </>
              )}
            </button>

            {/* Loading spinner */}
            {isAnalysing && <Spinner />}

            {/* Results */}
            {result && diseaseInfo && !isAnalysing && (
              <div id="result-section">
                <div className="section-divider">Prediction Results</div>
                <DiseaseResult result={result} diseaseInfo={diseaseInfo} />

                {/* Download report */}
                <div style={{ marginTop: 20 }}>
                  <button
                    className="btn-primary"
                    onClick={() => downloadReport(patient!, result, diseaseInfo)}
                    style={{ background: 'linear-gradient(135deg, #1a4a6a, #0077b6)' }}
                  >
                    <span>📄</span>
                    <span>Download Full AI Clinical Report</span>
                  </button>
                </div>
              </div>
            )}

            {/* Empty state */}
            {!result && !isAnalysing && (
              <div style={{
                textAlign: 'center', padding: '3rem 2rem',
                border: '1px dashed rgba(0,210,255,0.1)', borderRadius: 20,
                color: '#2a5070'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 12, opacity: 0.5 }}>🔍</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#3a6280', marginBottom: 6 }}>
                  No prediction yet
                </div>
                <div style={{ fontSize: '0.85rem', color: '#2a4a60' }}>
                  Select your symptoms above and click "Analyse & Predict" to get AI-powered results
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer style={{
        textAlign: 'center', padding: '1.5rem', color: '#1a3a58',
        fontSize: '0.78rem', borderTop: '1px solid rgba(0,210,255,0.06)'
      }}>
        Developed by <span style={{ color: '#0077b6' }}>THAKUR & TRIPATHI</span> · B.Tech Final Year Project
      </footer>
    </div>
  );
}

// ── Report generator ─────────────────────────────────────
function downloadReport(patient: Patient, result: PredictionResult, info: any) {
  const ts = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const fl = (arr: string[]) => arr.map(x => `  • ${x}`).join('\n');

  const report = `
╔══════════════════════════════════════════════════════════════╗
║        MedAI  ·  AI-GENERATED CLINICAL PREDICTION REPORT     ║
╚══════════════════════════════════════════════════════════════╝
  Generated on  : ${ts}

── PATIENT DETAILS ──────────────────────────────────────────────
  Name          : ${patient.name} ${patient.surname}
  Age           : ${patient.age}
  Gender        : ${patient.gender}

── PREDICTION SUMMARY ───────────────────────────────────────────
  Predicted     : ${result.disease}
  Confidence    : ${Math.round(result.confidence * 100)}%
  Agreement     : ${result.agreementLevel}
  Risk Level    : ${info.riskLevel}
  Specialist    : ${info.specialist}
  Recovery Time : ${info.recoveryTime}
  Symptoms Used : ${result.symptomsMatched.join(', ') || 'N/A'}
${info.icdCode ? `  ICD-10        : ${info.icdCode}` : ''}

── OVERVIEW ─────────────────────────────────────────────────────
  ${info.overview}

── CAUSES & RISK FACTORS ────────────────────────────────────────
${fl(info.causes)}

── KEY SYMPTOMS OF THIS CONDITION ───────────────────────────────
${fl(info.symptomsDetail)}

── PRECAUTIONS ──────────────────────────────────────────────────
${fl(info.precautions)}

── MEDICATIONS / TREATMENTS ─────────────────────────────────────
${fl(info.medications)}

── HOME CARE TIPS ────────────────────────────────────────────────
${fl(info.homeRemedies)}

── WHEN TO SEE A DOCTOR IMMEDIATELY ─────────────────────────────
${fl(info.whenToSeeDoctor)}

──────────────────────────────────────────────────────────────────
  ⚠  DISCLAIMER: This is an academic AI demonstration tool.
     NOT a substitute for professional medical advice.
──────────────────────────────────────────────────────────────────
  Developed by THAKUR & TRIPATHI  ·  B.Tech Final Year Project
  Powered by MedAI Ensemble (Decision Tree + Random Forest + Naïve Bayes)
`;

  const blob = new Blob([report], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `MedAI_Report_${patient.surname}_${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── About tab ────────────────────────────────────────────
function AboutTab() {
  const accs = getModelAccuracies();
  const features = [
    { icon: '🧠', title: 'Ensemble ML Engine', desc: 'Combines Decision Tree, Random Forest, and Naïve Bayes models with weighted voting for more accurate predictions than any single model.' },
    { icon: '📊', title: 'Symptom-Weighted Scoring', desc: 'Uses Jaccard similarity, F1 score, coverage, and precision metrics to score disease-symptom matches accurately.' },
    { icon: '🩺', title: 'Disease-Specific AI Intelligence', desc: 'Every prediction includes detailed, condition-specific overview, causes, medications, precautions, home care, and emergency warning signs.' },
    { icon: '🔬', title: 'ICD-10 Classification', desc: 'Conditions are mapped to WHO ICD-10 diagnostic codes for clinical reference and professional communication.' },
    { icon: '📄', title: 'Downloadable Clinical Report', desc: 'Generate a comprehensive AI-enhanced clinical report with full medical insights, ready for reference during consultations.' },
    { icon: '🛡', title: 'Privacy First', desc: 'All analysis runs entirely in your browser. No patient data is sent to any external server.' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="info-grid-2" style={{ marginBottom: 20 }}>
        {features.map(f => (
          <div key={f.title} className="glass-card glass-card-hover" style={{ padding: '22px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{f.icon}</div>
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#c8dff5', fontSize: '1rem', fontWeight: 700, marginBottom: 8
            }}>{f.title}</h3>
            <p style={{ color: '#5a8aaa', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Model performance */}
      <div className="glass-card" style={{ padding: '28px', marginBottom: 20 }}>
        <div className="info-section-header" style={{ marginBottom: 20 }}>
          <span>📈</span>
          <span>Model Performance</span>
        </div>
        <div className="info-grid-3">
          {Object.entries(accs).map(([name, acc], i) => {
            const icons = ['🌳', '🌲', '🧮'];
            return (
              <div key={name} className="model-card">
                <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{icons[i]}</div>
                <div style={{ color: '#4a90d9', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>{name}</div>
                <div style={{ color: '#00d2ff', fontSize: '1.6rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                  {(acc * 100).toFixed(1)}%
                </div>
                <div style={{ color: '#3a6280', fontSize: '0.75rem', marginTop: 4 }}>Accuracy</div>
                <div className="conf-bar-track" style={{ marginTop: 10 }}>
                  <div className="conf-bar-fill" style={{ width: `${Math.round(acc * 100)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disease list */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <div className="info-section-header" style={{ marginBottom: 16 }}>
          <span>🗂</span>
          <span>Conditions in Database ({DISEASES.length})</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {DISEASES.map(d => (
            <span key={d.name} style={{
              padding: '5px 14px',
              background: 'rgba(0,60,100,0.2)', border: '1px solid rgba(0,120,180,0.18)',
              borderRadius: 8, color: '#5a90b0', fontSize: '0.82rem',
              fontWeight: 500
            }}>
              {d.name}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 16, color: '#2a5070', fontSize: '0.8rem' }}>
          Each condition includes: overview · causes · symptoms · precautions · medications · home care · emergency signs · ICD-10 code · specialist recommendation · recovery timeline
        </div>
      </div>
    </div>
  );
}

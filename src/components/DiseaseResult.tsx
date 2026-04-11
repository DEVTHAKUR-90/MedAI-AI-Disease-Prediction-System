import { useState } from 'react';
import { DiseaseInfo } from '../data/diseaseData';
import { PredictionResult, getModelAccuracies } from '../utils/predictor';
import InfoCard from './InfoCard';

interface DiseaseResultProps {
  result: PredictionResult;
  diseaseInfo: DiseaseInfo;
}

export default function DiseaseResult({ result, diseaseInfo }: DiseaseResultProps) {
  const [modelExpanded, setModelExpanded] = useState(false);
  const accs = getModelAccuracies();

  const riskClass = {
    Low: 'badge-risk-low',
    Medium: 'badge-risk-medium',
    High: 'badge-risk-high'
  }[diseaseInfo.riskLevel] ?? 'badge-risk-medium';

  const riskEmoji = { Low: '🟢', Medium: '🟡', High: '🔴' }[diseaseInfo.riskLevel] ?? '🟡';

  const confPct = Math.round(result.confidence * 100);

  const modelIcons: Record<string, string> = {
    'Decision Tree': '🌳',
    'Random Forest': '🌲',
    'Naïve Bayes': '🧮'
  };

  const agreementColors = {
    unanimous: '#34d399',
    majority: '#fbbf24',
    weighted: '#60a5fa'
  };

  return (
    <div className="animate-fade-in-up">
      {/* Main prediction card */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(145deg, rgba(0,40,80,0.65), rgba(0,10,30,0.9))',
        border: '1px solid rgba(0,210,255,0.2)',
        borderRadius: 24, padding: '2.5rem 2rem', textAlign: 'center',
        marginBottom: 20,
        boxShadow: '0 0 60px rgba(0,210,255,0.08), 0 30px 60px rgba(0,0,0,0.4)'
      }}>
        {/* Glow blob */}
        <div style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 200,
          background: 'radial-gradient(ellipse, rgba(0,210,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: 4, color: '#00d2ff', opacity: 0.7, textTransform: 'uppercase', marginBottom: 10 }}>
          AI Predicted Condition
        </div>

        <h2 className="pred-name-shimmer" style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700, marginBottom: 12, letterSpacing: -0.5
        }}>
          {result.disease}
        </h2>

        <div style={{ color: '#5a8ab8', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: 16 }}>
          {result.reason}
        </div>

        {/* Confidence meter */}
        <div style={{ maxWidth: 320, margin: '0 auto', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: '#3a6280', fontSize: '0.75rem', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Confidence Score</span>
            <span style={{ color: '#00d2ff', fontSize: '0.9rem', fontWeight: 700 }}>{confPct}%</span>
          </div>
          <div className="conf-bar-track" style={{ height: 8 }}>
            <div
              className="conf-bar-fill"
              style={{
                width: `${confPct}%`, height: 8,
                background: confPct > 70
                  ? 'linear-gradient(90deg, #0077b6, #00d2ff)'
                  : confPct > 40
                    ? 'linear-gradient(90deg, #b47700, #fbbf24)'
                    : 'linear-gradient(90deg, #7f1d1d, #f87171)'
              }}
            />
          </div>
        </div>

        {/* Agreement badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,40,80,0.4)', border: '1px solid rgba(0,210,255,0.15)',
          borderRadius: 100, padding: '5px 16px',
          color: agreementColors[result.agreementLevel], fontSize: '0.8rem', fontWeight: 600
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: agreementColors[result.agreementLevel],
            boxShadow: `0 0 6px ${agreementColors[result.agreementLevel]}`
          }} />
          {result.agreementLevel === 'unanimous' ? 'All 3 Models Agree' :
           result.agreementLevel === 'majority' ? 'Majority Vote (2/3)' :
           'Ensemble Weighted Selection'}
        </div>

        {result.symptomsMatched.length > 0 && (
          <div style={{ marginTop: 12, color: '#2a5a80', fontSize: '0.8rem' }}>
            Matched: {result.symptomsMatched.map(s => s.replace(/_/g, ' ')).join(', ')}
          </div>
        )}
      </div>

      {/* Risk / Specialist / Recovery */}
      <div className="info-grid-3" style={{ marginBottom: 14 }}>
        <div className="glass-card glass-card-hover" style={{ padding: '20px', textAlign: 'center' }}>
          <div className="info-section-header" style={{ justifyContent: 'center' }}>
            <span>{riskEmoji}</span><span>Risk Level</span>
          </div>
          <span className={riskClass}>{diseaseInfo.riskLevel}</span>
        </div>
        <div className="glass-card glass-card-hover" style={{ padding: '20px', textAlign: 'center' }}>
          <div className="info-section-header" style={{ justifyContent: 'center' }}>
            <span>👨‍⚕️</span><span>Specialist</span>
          </div>
          <div style={{ color: '#c8e8f8', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4 }}>{diseaseInfo.specialist}</div>
        </div>
        <div className="glass-card glass-card-hover" style={{ padding: '20px', textAlign: 'center' }}>
          <div className="info-section-header" style={{ justifyContent: 'center' }}>
            <span>⏱</span><span>Recovery</span>
          </div>
          <div style={{ color: '#c8e8f8', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4 }}>{diseaseInfo.recoveryTime}</div>
        </div>
      </div>

      {/* Overview */}
      <div className="glass-card glass-card-hover" style={{ padding: '22px', marginBottom: 14 }}>
        <div className="info-section-header">
          <span>📋</span>
          <span>Overview</span>
          <span className="badge-ai" style={{ marginLeft: 'auto' }}>✦ AI</span>
        </div>
        <p style={{ color: '#7aa8c8', fontSize: '0.95rem', lineHeight: 1.75 }}>{diseaseInfo.overview}</p>
        {diseaseInfo.icdCode && (
          <div style={{
            display: 'inline-block', marginTop: 12, padding: '3px 10px',
            background: 'rgba(0,80,140,0.2)', border: '1px solid rgba(0,120,200,0.2)',
            borderRadius: 6, color: '#4a7aaa', fontSize: '0.75rem', fontWeight: 600
          }}>
            ICD-10: {diseaseInfo.icdCode}
          </div>
        )}
      </div>

      {/* 2-col: symptoms | causes */}
      <div className="info-grid-2" style={{ marginBottom: 14 }}>
        <InfoCard icon="🩺" title="Key Symptoms of This Condition" items={diseaseInfo.symptomsDetail} />
        <InfoCard icon="🔬" title="Causes & Risk Factors" items={diseaseInfo.causes} />
      </div>

      {/* 2-col: precautions | medications */}
      <div className="info-grid-2" style={{ marginBottom: 14 }}>
        <InfoCard icon="🛡" title="Recommended Precautions" items={diseaseInfo.precautions} />
        <InfoCard icon="💊" title="Medications & Treatments" items={diseaseInfo.medications} />
      </div>

      {/* 2-col: home care | when to see doctor */}
      <div className="info-grid-2" style={{ marginBottom: 20 }}>
        <InfoCard icon="🏠" title="Home Care Tips" items={diseaseInfo.homeRemedies} />
        <div className="glass-card glass-card-hover" style={{ padding: '22px', border: '1px solid rgba(255,60,60,0.12)' }}>
          <div className="info-section-header">
            <span>🚨</span>
            <span style={{ color: '#f87171' }}>See a Doctor Immediately If…</span>
          </div>
          {diseaseInfo.whenToSeeDoctor.map((item, i) => (
            <div key={i} className="info-list-item">
              <div className="info-list-dot" style={{ background: '#f87171' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Model breakdown */}
      <div className="section-divider">Individual Model Decisions</div>
      <div
        className="expander-header"
        onClick={() => setModelExpanded(!modelExpanded)}
        style={{ marginBottom: modelExpanded ? 14 : 0 }}
      >
        <span>🔬 View all 3 model predictions</span>
        <span style={{ transition: 'transform 0.3s', transform: modelExpanded ? 'rotate(180deg)' : 'none' }}>▾</span>
      </div>

      {modelExpanded && (
        <div className="info-grid-3 animate-fade-in" style={{ marginTop: 12 }}>
          {Object.entries(result.perModel).map(([name, modelResult]) => {
            const conf = modelResult.confidence;
            const isTop = modelResult.disease === result.disease;
            return (
              <div key={name} className="model-card" style={{
                border: isTop ? '1px solid rgba(0,210,255,0.25)' : '1px solid rgba(255,255,255,0.06)'
              }}>
                <div style={{ color: '#4a90d9', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                  {modelIcons[name]} {name}
                </div>
                <div style={{ color: '#e0efff', fontSize: '1rem', fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>
                  {modelResult.disease}
                </div>
                <div style={{ color: '#4a90d9', fontSize: '0.78rem', marginBottom: 6 }}>
                  Confidence: {(conf * 100).toFixed(1)}%
                </div>
                <div className="conf-bar-track">
                  <div className="conf-bar-fill" style={{ width: `${Math.round(conf * 100)}%` }} />
                </div>
                <div style={{ color: '#2a5a80', fontSize: '0.72rem', marginTop: 8 }}>
                  Model Accuracy: {(accs[name] * 100).toFixed(1)}%
                </div>
                {isTop && (
                  <div style={{
                    marginTop: 8, display: 'inline-block', padding: '2px 8px',
                    background: 'rgba(0,210,255,0.1)', border: '1px solid rgba(0,210,255,0.25)',
                    borderRadius: 6, color: '#00d2ff', fontSize: '0.68rem', fontWeight: 700
                  }}>ENSEMBLE WINNER</div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Disclaimer */}
      <div style={{
        marginTop: 24,
        background: 'rgba(180,120,0,0.05)', border: '1px solid rgba(255,180,0,0.1)',
        borderRadius: 14, padding: '14px 18px', fontSize: '0.82rem', color: '#5a7a98', lineHeight: 1.65
      }}>
        <span style={{ color: '#f0c060', fontWeight: 700 }}>⚠ Disclaimer: </span>
        This is an academic AI demonstration tool and is <strong>NOT</strong> a substitute for professional medical advice. Always consult a qualified healthcare professional for diagnosis and treatment.
      </div>
    </div>
  );
}

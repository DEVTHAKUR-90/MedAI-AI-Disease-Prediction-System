import { useState } from 'react';
import HeroBadge from './HeroBadge';

interface Patient {
  name: string;
  surname: string;
  age: number;
  gender: string;
}

interface LoginPageProps {
  onStart: (patient: Patient) => void;
}

export default function LoginPage({ onStart }: LoginPageProps) {
  const [name, setName]       = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge]         = useState('');
  const [gender, setGender]   = useState('Male');
  const [error, setError]     = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !age || parseInt(age) < 1) {
      setError('Please fill in all fields correctly.');
      return;
    }
    setError('');
    onStart({ name: name.trim(), surname: surname.trim(), age: parseInt(age), gender });
  }

  const genders = ['Male', 'Female', 'Other'];

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '2rem'
    }}>
      {/* Ambient blobs */}
      <div style={{
        position: 'fixed', top: '15%', left: '10%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,180,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed', bottom: '15%', right: '10%', width: 350, height: 350,
        background: 'radial-gradient(circle, rgba(120,40,255,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ textAlign: 'center', marginBottom: '2rem', animation: 'fade-in-up 0.6s ease forwards' }}
        className="animate-fade-in-up">
        <HeroBadge text="MedAI · B.Tech Final Year Project" />
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          fontWeight: 700, color: '#f0f8ff',
          letterSpacing: -1, lineHeight: 1.1, marginBottom: 12
        }}>
          AI Disease Predictor
        </h1>
        <p style={{ color: '#3a6a8a', fontSize: '1rem', maxWidth: 420, margin: '0 auto' }}>
          3 ML models + AI-powered medical intelligence — complete disease-specific insights for every prediction
        </p>
      </div>

      {/* Login card */}
      <div className="animate-float" style={{
        width: '100%', maxWidth: 460,
        background: 'rgba(8,16,32,0.8)',
        border: '1px solid rgba(0,210,255,0.12)',
        borderRadius: 28, padding: '2.5rem',
        backdropFilter: 'blur(30px)',
        boxShadow: '0 0 0 1px rgba(0,210,255,0.04), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0,120,180,0.3), rgba(0,210,255,0.15))',
            border: '1px solid rgba(0,210,255,0.25)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', marginBottom: 10
          }}>🩺</div>
          <div style={{ color: '#5a8aaa', fontSize: '0.85rem' }}>Begin Diagnostic Session</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              placeholder="e.g. Arjun"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              placeholder="e.g. Sharma"
              value={surname}
              onChange={e => setSurname(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Age</label>
            <input
              className="form-input"
              type="number"
              placeholder="e.g. 25"
              min={1}
              max={120}
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 22 }}>
            <label className="form-label">Gender</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {genders.map(g => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  style={{
                    flex: 1, padding: '10px 4px',
                    borderRadius: 10, cursor: 'pointer',
                    fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', fontWeight: 600,
                    transition: 'all 0.25s ease',
                    background: gender === g ? 'rgba(0,180,216,0.2)' : 'rgba(0,40,80,0.3)',
                    border: gender === g ? '1px solid rgba(0,210,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
                    color: gender === g ? '#00d2ff' : '#4a7a9a',
                    boxShadow: gender === g ? '0 0 14px rgba(0,210,255,0.15)' : 'none'
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{
              background: 'rgba(255,60,60,0.08)', border: '1px solid rgba(255,80,80,0.2)',
              borderRadius: 10, padding: '10px 14px', marginBottom: 14,
              color: '#f87171', fontSize: '0.85rem'
            }}>⚠ {error}</div>
          )}

          <button type="submit" className="btn-primary">
            <span>Begin Diagnostic Session</span>
            <span style={{ fontSize: '1.1rem' }}>→</span>
          </button>
        </form>

        <div style={{
          marginTop: 20, display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexWrap: 'wrap', gap: 16
        }}>
          {[['🧠', '3 ML Models'], ['📊', '16+ Diseases'], ['✦', 'AI Insights']].map(([icon, label]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#3a6280', fontSize: '0.78rem' }}>
              <span style={{ color: '#00a8cc' }}>{icon}</span> {label}
            </div>
          ))}
        </div>
      </div>

      <p style={{
        marginTop: '2rem', color: '#1a3a58', fontSize: '0.78rem', textAlign: 'center'
      }}>
        Developed by <span style={{ color: '#0077b6' }}>THAKUR & TRIPATHI</span> · B.Tech Final Year
      </p>
    </div>
  );
}

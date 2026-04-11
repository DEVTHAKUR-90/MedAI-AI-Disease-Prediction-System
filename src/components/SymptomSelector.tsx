import { useState, useMemo } from 'react';
import { ALL_SYMPTOMS, formatSymptom } from '../data/diseaseData';

interface SymptomSelectorProps {
  selected: string[];
  onChange: (symptoms: string[]) => void;
}

const SYMPTOM_CATEGORIES: Record<string, string[]> = {
  'Fever & Chills': ['fever', 'high_fever', 'mild_fever', 'chills', 'sweating', 'night_sweats', 'cyclical_fever'],
  'Respiratory': ['cough', 'persistent_cough', 'shortness_of_breath', 'breathlessness', 'wheezing', 'chest_tightness', 'chest_pain', 'rapid_breathing', 'nocturnal_symptoms'],
  'Digestive': ['nausea', 'vomiting', 'diarrhea', 'stomach_pain', 'loss_of_appetite', 'heartburn', 'acid_regurgitation', 'bloating', 'sour_taste', 'constipation'],
  'Head & Neuro': ['headache', 'severe_headache', 'dizziness', 'confusion', 'light_sensitivity', 'sound_sensitivity', 'visual_disturbances', 'blurred_vision', 'throbbing_pain', 'neck_stiffness'],
  'Body & Muscles': ['fatigue', 'body_ache', 'muscle_pain', 'muscle_weakness', 'joint_pain', 'weakness', 'cold_hands', 'numbness_tingling', 'exercise_intolerance'],
  'Skin & Appearance': ['rash', 'itchy_rash', 'blisters', 'red_spots', 'pale_skin', 'dark_patches_skin', 'dry_skin', 'puffy_face'],
  'Urinary': ['frequent_urination', 'burning_urination', 'cloudy_urine', 'pelvic_pain', 'foul_smelling_urine', 'blood_in_urine', 'urgency_urination'],
  'Eyes, Nose, Throat': ['runny_nose', 'sneezing', 'sore_throat', 'congestion', 'watery_eyes', 'nosebleed', 'eye_pain', 'hoarseness', 'difficulty_swallowing'],
  'Cardiovascular': ['palpitations', 'slow_heart_rate', 'irregular_heartbeat', 'back_pain', 'blood_in_sputum', 'bleeding'],
  'General': ['weight_loss', 'weight_gain', 'cold_intolerance', 'depression', 'hair_loss', 'brittle_nails', 'slow_healing', 'frequent_infections', 'anemia', 'dehydration', 'chronic_cough'],
};

export default function SymptomSelector({ selected, onChange }: SymptomSelectorProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const selectedSet = new Set(selected);

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase().replace(/\s+/g, '_');
    return ALL_SYMPTOMS.filter(s =>
      s.includes(q) || formatSymptom(s).toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  function toggle(symptom: string) {
    if (selectedSet.has(symptom)) {
      onChange(selected.filter(s => s !== symptom));
    } else {
      onChange([...selected, symptom]);
    }
  }

  const displaySymptoms = filtered ??
    (activeCategory ? SYMPTOM_CATEGORIES[activeCategory] ?? ALL_SYMPTOMS : ALL_SYMPTOMS);

  return (
    <div>
      {/* Search bar */}
      <div style={{ position: 'relative', marginBottom: 14 }}>
        <span style={{
          position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
          color: '#3a6280', fontSize: '1rem', pointerEvents: 'none'
        }}>🔍</span>
        <input
          className="search-input"
          placeholder="Search symptoms… (e.g. fever, headache, cough)"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', color: '#4a7090', cursor: 'pointer', fontSize: '1rem'
            }}
          >✕</button>
        )}
      </div>

      {/* Category pills */}
      {!search && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              padding: '4px 12px', borderRadius: 8, fontSize: '0.77rem', fontWeight: 600,
              cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'all 0.2s',
              background: activeCategory === null ? 'rgba(0,180,216,0.2)' : 'rgba(0,40,80,0.2)',
              border: activeCategory === null ? '1px solid rgba(0,210,255,0.4)' : '1px solid rgba(255,255,255,0.06)',
              color: activeCategory === null ? '#00d2ff' : '#4a7a9a'
            }}
          >All</button>
          {Object.keys(SYMPTOM_CATEGORIES).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              style={{
                padding: '4px 12px', borderRadius: 8, fontSize: '0.77rem', fontWeight: 600,
                cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'all 0.2s',
                background: activeCategory === cat ? 'rgba(0,180,216,0.2)' : 'rgba(0,40,80,0.2)',
                border: activeCategory === cat ? '1px solid rgba(0,210,255,0.4)' : '1px solid rgba(255,255,255,0.06)',
                color: activeCategory === cat ? '#00d2ff' : '#4a7a9a'
              }}
            >{cat}</button>
          ))}
        </div>
      )}

      {/* Selected count */}
      {selected.length > 0 && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 10, padding: '8px 14px',
          background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,210,255,0.15)',
          borderRadius: 10
        }}>
          <span style={{ color: '#00d2ff', fontSize: '0.85rem', fontWeight: 600 }}>
            ✓ {selected.length} symptom{selected.length !== 1 ? 's' : ''} selected
          </span>
          <button
            onClick={() => onChange([])}
            style={{
              background: 'none', border: 'none', color: '#4a7090',
              cursor: 'pointer', fontSize: '0.78rem', fontFamily: 'Outfit, sans-serif'
            }}
          >Clear all</button>
        </div>
      )}

      {/* Symptom chips */}
      <div style={{
        maxHeight: 260, overflowY: 'auto', padding: '6px 2px',
        display: 'flex', flexWrap: 'wrap', gap: 7,
        scrollbarWidth: 'thin'
      }}>
        {displaySymptoms.length === 0 ? (
          <div style={{ color: '#3a6280', fontSize: '0.9rem', padding: '20px 0' }}>
            No symptoms found for "{search}"
          </div>
        ) : (
          displaySymptoms.map(symptom => {
            const isSelected = selectedSet.has(symptom);
            return (
              <button
                key={symptom}
                onClick={() => toggle(symptom)}
                className={`symptom-chip ${isSelected ? 'symptom-chip-selected' : 'symptom-chip-unselected'}`}
              >
                {isSelected && <span style={{ fontSize: '0.7rem' }}>✓</span>}
                {formatSymptom(symptom)}
              </button>
            );
          })
        )}
      </div>

      {/* Selected chips preview */}
      {selected.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ color: '#2a5a78', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
            Selected Symptoms
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {selected.map(s => (
              <span
                key={s}
                className="symptom-chip symptom-chip-selected"
                onClick={() => toggle(s)}
              >
                {formatSymptom(s)}
                <span style={{ marginLeft: 4, opacity: 0.7, fontSize: '0.75rem' }}>✕</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

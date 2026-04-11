export default function HeroBadge({ text }: { text: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      background: 'rgba(0,210,255,0.06)', border: '1px solid rgba(0,210,255,0.2)',
      borderRadius: 100, padding: '6px 20px', fontSize: '0.75rem', fontWeight: 700,
      color: '#00d2ff', letterSpacing: 3, textTransform: 'uppercase' as const,
      marginBottom: 14
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%', background: '#00d2ff',
        boxShadow: '0 0 8px #00d2ff, 0 0 16px rgba(0,210,255,0.5)',
        animation: 'pulse-dot 2s ease-in-out infinite', display: 'inline-block'
      }} />
      {text}
    </div>
  );
}

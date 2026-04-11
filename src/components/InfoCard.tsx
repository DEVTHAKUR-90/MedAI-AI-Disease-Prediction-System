interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
  badge?: boolean;
  className?: string;
}

export default function InfoCard({ icon, title, items, badge = false, className = '' }: InfoCardProps) {
  return (
    <div className={`glass-card glass-card-hover animate-fade-in-up ${className}`}
      style={{ padding: '22px', height: '100%' }}>
      <div className="info-section-header">
        <span>{icon}</span>
        <span>{title}</span>
        {badge && (
          <span className="badge-ai" style={{ marginLeft: 'auto' }}>
            <span style={{ fontSize: 8 }}>✦</span> AI
          </span>
        )}
      </div>
      <div>
        {items.map((item, i) => (
          <div key={i} className="info-list-item">
            <div className="info-list-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

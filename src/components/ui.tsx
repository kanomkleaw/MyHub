import type { ReactNode } from 'react';

export function Hero({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <div className="hero-title">{title}</div>
        <div className="hero-copy">{description}</div>
      </div>
      {actions ? <div className="hero-actions">{actions}</div> : null}
    </section>
  );
}

export function StatCard({ label, value, tone = 'info' }: { label: string; value: string; tone?: 'info' | 'success' | 'warning' | 'danger' }) {
  return (
    <article className="stat-card">
      <div className={`badge ${tone}`}>{label}</div>
      <div className="stat-value">{value}</div>
    </article>
  );
}

export function SurfaceCard({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-title">{title}</div>
        {description ? <div className="card-description">{description}</div> : null}
      </div>
      <div className="card-body">{children}</div>
    </article>
  );
}

export function ListBlock({ items }: { items: Array<{ title: string; meta: string; badge?: { label: string; tone: 'info' | 'success' | 'warning' | 'danger' } }> }) {
  return (
    <div className="list">
      {items.map((item) => (
        <div className="list-item" key={item.title}>
          <div>
            <div className="list-title">{item.title}</div>
            <div className="helper">{item.meta}</div>
          </div>
          {item.badge ? <div className={`badge ${item.badge.tone}`}>{item.badge.label}</div> : null}
        </div>
      ))}
    </div>
  );
}

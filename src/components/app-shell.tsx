import Link from 'next/link';
import type { ReactNode } from 'react';
import { Bell, Sparkles } from 'lucide-react';
import { navigationByScope, type ExportRoute } from '@/lib/data';

type AppShellProps = {
  route: ExportRoute;
  children: ReactNode;
};

export function AppShell({ route, children }: AppShellProps) {
  const navGroups = navigationByScope;

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">KK</div>
          <div>
            <div className="brand-title">KKPFG HR</div>
            <div className="brand-subtitle">Next.js export starter</div>
          </div>
        </div>

        {navGroups.map((group) => (
          <div className="nav-section" key={group.label}>
            <div className="nav-label">{group.label}</div>
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.href === route.href ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="sidebar-profile">
          <div className="profile-card">
            <div className="profile-avatar">AK</div>
            <div>
              <div style={{ fontWeight: 700 }}>Anan Kittipong</div>
              <div className="brand-subtitle">Senior Operations Analyst</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="page-main">
        <header className="topbar">
          <div>
            <div className="topbar-title">{route.title}</div>
            <div className="topbar-subtitle">{route.summary}</div>
          </div>
          <div className="topbar-actions">
            <button className="button ghost" type="button">
              <Bell size={16} /> Alerts
            </button>
            <button className="button secondary" type="button">
              <Sparkles size={16} /> Assistant
            </button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

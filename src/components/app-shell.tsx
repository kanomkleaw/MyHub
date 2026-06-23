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

        {/* 🚀 ส่วนที่แก้ไข: ปรับปรุงโครงสร้าง Navigation ให้ดึงหัวข้อหมวดหมู่แยกออกมาจากลิงก์อย่างถูกต้อง */}
        <div className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
          {navGroups.map((group) => (
            <div className="nav-section" key={group.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {/* หัวข้อหมวดหมู่สีจางตัวพิมพ์ใหญ่ */}
              <div className="nav-label" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-muted, #888)', padding: '0 0.75rem', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
                {group.label.toUpperCase()}
              </div>
              
              {/* รายการเมนูในหมวดหมู่นั้นๆ */}
              {group.items.map((item) => {
                // ตรวจสอบสถานะว่าเมนูนี้เป็นเมนูที่กำลังเปิดอยู่ (Active) หรือไม่
                const isActive = item.href === route.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={isActive ? 'nav-link active' : 'nav-link'}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

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

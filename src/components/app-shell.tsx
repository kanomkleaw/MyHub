import Link from 'next/link';
import type { ReactNode } from 'react';
import { Bell, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import * as Icons from 'lucide-react'; // ดึงไอคอนทั้งหมดมาเลือกใช้แบบไดนามิกตามข้อมูลใน data.ts
import { navigationByScope, type ExportRoute } from '@/lib/data';

type AppShellProps = {
  route: ExportRoute;
  children: ReactNode;
};

export function AppShell({ route, children }: AppShellProps) {
  const navGroups = navigationByScope;

  return (
    <div className="page-shell" style={{ backgroundColor: '#f4f7f9' }}>
      {/* ปรับแต่ง Sidebar ให้เป็นโทนสว่าง สะอาด สบายตา มินิมอล */}
      <aside className="sidebar" style={{ backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0', color: '#334155', width: '260px' }}>
        <div className="brand" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
          <div className="brand-mark" style={{ backgroundColor: '#0284c7', color: '#fff' }}>KK</div>
          <div>
            <div className="brand-title" style={{ color: '#0f172a' }}>KKPFG HR</div>
            <div className="brand-subtitle" style={{ color: '#64748b' }}>Next.js export starter</div>
          </div>
        </div>

        {/* เมนูแบบ Compact วางระยะห่างและไอคอนให้สบายตาตามแบบ */}
        <div className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1, overflowY: 'auto', padding: '1rem 0.5rem' }}>
          {navGroups.map((group) => (
            <div className="nav-section" key={group.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {/* ชื่อกลุ่มย่อย เช่น My workspace, Services */}
              <div className="nav-label" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569', padding: '0 0.75rem', marginBottom: '0.5rem' }}>
                {group.label}
              </div>
              
              {group.items.map((item) => {
                const isActive = item.href === route.href;
                
                // จับคู่ชื่อไอคอนจากสตริงใน data.ts ให้เป็น Component จริง
                const IconComponent = (Icons as any)[(item as any).icon || 'FileText'];

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={isActive ? 'nav-link active' : 'nav-link'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '0.375rem',
                      color: isActive ? '#0284c7' : '#475569',
                      backgroundColor: isActive ? '#e0f2fe' : 'transparent',
                      fontWeight: isActive ? 600 : 400,
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {IconComponent && <IconComponent size={18} strokeWidth={1.5} />}
                      <span>{item.label}</span>
                    </div>
                    
                    {/* ลูกศรเปิด-ปิดสำหรับเมนูดร็อปดาวน์ด้านล่าง */}
                    {(item as any).isDropdown && (
                      isActive ? <ChevronUp size={16} color="#94a3b8" /> : <ChevronDown size={16} color="#94a3b8" />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="sidebar-profile" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
          <div className="profile-card">
            <div className="profile-avatar">AK</div>
            <div>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>Anan Kittipong</div>
              <div className="brand-subtitle" style={{ color: '#64748b' }}>Senior Operations Analyst</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="page-main">
        <header className="topbar" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
          <div>
            <div className="topbar-title" style={{ color: '#0f172a' }}>{route.title}</div>
            <div className="topbar-subtitle" style={{ color: '#64748b' }}>{route.summary}</div>
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

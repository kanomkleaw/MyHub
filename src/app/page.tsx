import { AppShell } from '@/components/app-shell';
import { routes } from '@/lib/data';
import { Bell, Clock, ClipboardList, FileText, Headphones, BookOpen, Megaphone, GraduationCap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const route = routes['/'];

export default function HomePage() {
  return (
    <AppShell route={route}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '2rem' }}>
        
        {/* --- Requires Your Attention Section --- */}
        <section>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#ef4444' }}>⚠</span> Requires Your Attention
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            
            {/* Row 1: Alerts */}
            <AlertCard icon={<Bell size={16} />} title="Mandatory Training Reminder" date="Feb 1, 2026" />
            <AlertCard icon={<Bell size={16} />} title="Hello World" date="Jan 30, 2026" />
            <AlertCard icon={<Bell size={16} />} title="New Remote Work Policy" date="Jan 15, 2026" />

            {/* Row 2: Overdue Tasks */}
            <AlertCard icon={<Clock size={16} />} title="Overdue: Cybersecurity Basics" date="Due: Feb 20, 2026" action="Complete Now" />
            <AlertCard icon={<Clock size={16} />} title="Overdue: Time Management" date="Due: Mar 15, 2026" action="Complete Now" />
            <AlertCard icon={<Clock size={16} />} title="Overdue: Diversity & Inclusion" date="Due: Apr 15, 2026" action="Complete Now" />
            
          </div>
        </section>

        {/* --- Quick Actions Section --- */}
        <section>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <ActionCard icon={<ClipboardList size={28} color="#0d9488" />} title="New Request" href="/requests/new" />
            <ActionCard icon={<FileText size={28} color="#0d9488" />} title="Submit Claim" href="/claims/new" />
            <ActionCard icon={<Headphones size={28} color="#0d9488" />} title="HR Assistant" href="/assistant" />
            <ActionCard icon={<BookOpen size={28} color="#0d9488" />} title="Directory" href="/directory" />
          </div>
        </section>

        {/* --- Bottom Grid Section --- */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          
          {/* Announcements */}
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#0f172a' }}>
                <Megaphone size={18} color="#0d9488" /> Announcements
              </h3>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#0f172a', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                View All <ChevronRight size={16} />
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ListItem icon={<span style={{color: '#ef4444'}}>⚠</span>} title="Mandatory Training Reminder" date="Feb 1, 2026 • Employee" badge="Critical" badgeLabel="Requires Read" />
              <ListItem icon={<span style={{color: '#ef4444'}}>⚠</span>} title="Hello World" date="Jan 30, 2026 • Manager" badge="Critical" />
              <ListItem icon={<Bell size={16} color="#64748b"/>} title="HR System Maintenance" date="Jan 18, 2026 • HR user" />
            </div>
          </div>

          {/* Training & Tasks */}
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#0f172a' }}>
                <GraduationCap size={18} color="#0d9488" /> Training & Tasks
              </h3>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#0f172a', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                View All <ChevronRight size={16} />
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ListItem icon={<Clock size={16} color="#ef4444"/>} title="Cybersecurity Basics" date="Due: Feb 20, 2026" tag1="Required" tag2="In Progress" isRed />
              <ListItem icon={<Clock size={16} color="#ef4444"/>} title="Time Management" date="Due: Mar 15, 2026" tag1="Required" tag2="In Progress" isRed />
              <ListItem icon={<Clock size={16} color="#ef4444"/>} title="Diversity & Inclusion" date="Due: Apr 15, 2026" tag2="In Progress" isRed />
            </div>
          </div>

        </section>

      </div>
    </AppShell>
  );
}

// --- Helper Components for Home Page ---

function AlertCard({ icon, title, date, action }: any) {
  return (
    <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '0.5rem', padding: '1rem', color: '#b91c1c' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, marginBottom: '0.25rem' }}>
        {icon} <span>{title}</span>
      </div>
      <div style={{ fontSize: '0.85rem', opacity: 0.8, paddingLeft: '1.5rem', marginBottom: action ? '1rem' : '0' }}>{date}</div>
      {action && (
        <button style={{ marginLeft: '1.5rem', padding: '0.4rem 1rem', backgroundColor: '#fff', border: '1px solid #fca5a5', borderRadius: '0.375rem', color: '#ef4444', fontWeight: 500, fontSize: '0.85rem', cursor: 'pointer' }}>
          {action}
        </button>
      )}
    </div>
  );
}

function ActionCard({ icon, title, href }: any) {
  return (
    <Link href={href} style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textDecoration: 'none', color: '#0f172a', transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ padding: '1rem', backgroundColor: '#f0fdfa', borderRadius: '50%' }}>{icon}</div>
      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{title}</span>
    </Link>
  );
}

function ListItem({ icon, title, date, badge, badgeLabel, tag1, tag2, isRed }: any) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: isRed ? '#fef2f2' : '#f1f5f9' }}>
          {icon}
        </div>
        <span style={{ fontWeight: 500, color: '#0f172a', fontSize: '0.95rem' }}>{title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
        <span style={{ color: isRed ? '#ef4444' : '#64748b' }}>{date}</span>
        {badge && <span style={{ backgroundColor: '#ef4444', color: '#fff', padding: '0.1rem 0.5rem', borderRadius: '1rem', fontWeight: 600, fontSize: '0.75rem' }}>{badge}</span>}
        {badgeLabel && <span style={{ border: '1px solid #cbd5e1', color: '#475569', padding: '0.1rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem' }}>{badgeLabel}</span>}
        {tag1 && <span style={{ backgroundColor: '#e2e8f0', color: '#334155', padding: '0.2rem 0.6rem', borderRadius: '0.375rem', fontWeight: 500 }}>{tag1}</span>}
        {tag2 && <span style={{ backgroundColor: '#ccfbf1', color: '#0f766e', padding: '0.2rem 0.6rem', borderRadius: '0.375rem', fontWeight: 500 }}>{tag2}</span>}
      </div>
    </div>
  );
}

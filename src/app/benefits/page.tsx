import { AppShell } from '@/components/app-shell';
import { routes } from '@/lib/data';
import { Heart, Stethoscope, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

const route = routes['/benefits'];

export default function BenefitsPage() {
  return (
    <AppShell route={route}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '2rem' }}>
        
        {/* --- Top Stat Cards --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <StatProgressCard icon={<Heart size={20} color="#0d9488" />} title="Medical Deductible" value="$1,250" total="/$3,000" percent="41%" />
          <StatProgressCard icon={<Stethoscope size={20} color="#0d9488" />} title="Out of Pocket Max" value="$2,800" total="/$8,000" percent="35%" />
          <StatSimpleCard icon={<DollarSign size={20} color="#b45309" />} title="FSA Balance" value="$1,960" subtitle="Healthcare FSA remaining" iconBg="#fef3c7" />
          <StatSimpleCard icon={<TrendingUp size={20} color="#475569" />} title="401(k) Balance" value="$52,340" subtitle="8% contribution + 6% match" iconBg="#f1f5f9" />
        </div>

        {/* --- Fake Tabs --- */}
        <div style={{ display: 'flex', backgroundColor: '#f8fafc', padding: '0.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', gap: '0.5rem' }}>
          <Tab active>♡ Medical</Tab>
          <Tab>🦷 Dental</Tab>
          <Tab>👁 Vision</Tab>
          <Tab>⛨ Life</Tab>
          <Tab>🔗 FSA</Tab>
          <Tab>📈 401(k)</Tab>
        </div>

        {/* --- Main Details Grid --- */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          
          {/* Left: Active Plan Details */}
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a' }}>Premium Health Plan</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>BlueCross BlueShield</p>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#f0fdfa', color: '#0d9488', border: '1px solid #ccfbf1', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 500 }}>
                <CheckCircle size={14} /> Active
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>👥 Coverage Level</span>
                <span style={{ fontWeight: 500, color: '#0f172a' }}>Employee + Family</span>
              </div>
              <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📅 Effective Date</span>
                {/* อัปเดตข้อมูลเป็นปี 2026 ตามบริบทปัจจุบัน */}
                <span style={{ fontWeight: 500, color: '#0f172a' }}>2026-01-01</span>
              </div>
            </div>

            <h4 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Annual Limits</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ProgressBar label="Individual Deductible" current="$1,250" total="$3,000" percent="41%" />
              <ProgressBar label="Out of Pocket Maximum" current="$2,800" total="$8,000" percent="35%" />
            </div>
          </div>

          {/* Right: Copays */}
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.25rem' }}>Copays</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Your cost per visit</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <CopayRow label="Primary Care Visit" price="$25" />
              <CopayRow label="Specialist Visit" price="$50" />
              <CopayRow label="Emergency Room" price="$150" />
            </div>
          </div>

        </div>
      </div>
    </AppShell>
  );
}

// --- Helper Components for Benefits Page ---

function StatProgressCard({ icon, title, value, total, percent }: any) {
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ backgroundColor: '#f0fdfa', padding: '0.75rem', borderRadius: '0.5rem' }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>{title}</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{value} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#94a3b8' }}>{total}</span></div>
        <div style={{ width: '100%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: percent, height: '100%', backgroundColor: '#0d9488' }}></div>
        </div>
      </div>
    </div>
  );
}

function StatSimpleCard({ icon, title, value, subtitle, iconBg }: any) {
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ backgroundColor: iconBg, padding: '0.75rem', borderRadius: '0.5rem' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>{title}</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>{value}</div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{subtitle}</div>
      </div>
    </div>
  );
}

function Tab({ active, children }: any) {
  return (
    <div style={{ flex: 1, textAlign: 'center', padding: '0.5rem', backgroundColor: active ? '#fff' : 'transparent', borderRadius: '0.5rem', boxShadow: active ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', fontWeight: active ? 600 : 500, color: active ? '#0f172a' : '#64748b', fontSize: '0.9rem', cursor: 'pointer' }}>
      {children}
    </div>
  );
}

function ProgressBar({ label, current, total, percent }: any) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
        <span style={{ color: '#475569' }}>{label}</span>
        <span style={{ fontWeight: 600, color: '#0f172a' }}>{current} <span style={{ color: '#94a3b8', fontWeight: 400 }}>/ {total}</span></span>
      </div>
      <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: percent, height: '100%', backgroundColor: '#0d9488' }}></div>
      </div>
    </div>
  );
}

function CopayRow({ label, price }: any) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
      <span style={{ color: '#475569', fontWeight: 500 }}>{label}</span>
      <span style={{ fontWeight: 600, color: '#0f172a' }}>{price}</span>
    </div>
  );
}

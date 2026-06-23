"use client"; // 🚀 เพิ่มคำสั่งนี้เพื่อให้หน้าเว็บทำงานแบบ Interactive กดสลับแท็บได้

import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { routes } from '@/lib/data';
import { Heart, Stethoscope, DollarSign, TrendingUp, CheckCircle, Info } from 'lucide-react';

const route = routes['/benefits'];

export default function BenefitsPage() {
  // 🚀 สร้าง State สำหรับเก็บว่าตอนนี้ผู้ใช้กดแท็บไหนอยู่ (ค่าเริ่มต้นคือ Medical)
  const [activeTab, setActiveTab] = useState('Medical');

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

        {/* --- Interactive Tabs --- */}
        <div style={{ display: 'flex', backgroundColor: '#f8fafc', padding: '0.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', gap: '0.5rem' }}>
          <Tab active={activeTab === 'Medical'} onClick={() => setActiveTab('Medical')}>♡ Medical</Tab>
          <Tab active={activeTab === 'Dental'} onClick={() => setActiveTab('Dental')}>🦷 Dental</Tab>
          <Tab active={activeTab === 'Vision'} onClick={() => setActiveTab('Vision')}>👁 Vision</Tab>
          <Tab active={activeTab === 'Life'} onClick={() => setActiveTab('Life')}>⛨ Life</Tab>
          <Tab active={activeTab === 'FSA'} onClick={() => setActiveTab('FSA')}>🔗 FSA</Tab>
          <Tab active={activeTab === '401k'} onClick={() => setActiveTab('401k')}>📈 401(k)</Tab>
        </div>

        {/* --- Dynamic Main Details Grid --- */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          
          {/* 🟢 เงื่อนไข: ถ้ากดแท็บ Medical */}
          {activeTab === 'Medical' && (
            <>
              <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a' }}>Premium Health Plan</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>BlueCross BlueShield</p>
                  </div>
                  <BadgeActive />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <InfoBox label="Coverage Level" value="Employee + Family" />
                  <InfoBox label="Effective Date" value="2026-01-01" />
                </div>
                <h4 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Annual Limits</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <ProgressBar label="Individual Deductible" current="$1,250" total="$3,000" percent="41%" />
                  <ProgressBar label="Out of Pocket Maximum" current="$2,800" total="$8,000" percent="35%" />
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.25rem' }}>Copays</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Your cost per visit</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <CopayRow label="Primary Care Visit" price="$25" />
                  <CopayRow label="Specialist Visit" price="$50" />
                  <CopayRow label="Emergency Room" price="$150" />
                </div>
              </div>
            </>
          )}

          {/* 🟢 เงื่อนไข: ถ้ากดแท็บ Dental */}
          {activeTab === 'Dental' && (
            <>
              <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a' }}>Comprehensive Dental Plan</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Delta Dental</p>
                  </div>
                  <BadgeActive />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <InfoBox label="Coverage Level" value="Employee Only" />
                  <InfoBox label="Effective Date" value="2026-01-01" />
                </div>
                <h4 style={{ fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Annual Limits</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <ProgressBar label="Annual Maximum Benefit" current="$450" total="$1,500" percent="30%" />
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.25rem' }}>Coverage Breakdown</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Company coverage percentage</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <CopayRow label="Preventive Care (ขูดหินปูน)" price="100%" />
                  <CopayRow label="Basic Care (อุดฟัน)" price="80%" />
                  <CopayRow label="Major Care (รักษารากฟัน)" price="50%" />
                </div>
              </div>
            </>
          )}

          {/* 🟢 เงื่อนไข: ถ้ากดแท็บ Vision */}
          {activeTab === 'Vision' && (
            <>
              <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a' }}>Vision Care Plus</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>VSP Vision Care</p>
                  </div>
                  <BadgeActive />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <InfoBox label="Coverage Level" value="Employee + Family" />
                  <InfoBox label="Next Eye Exam Info" value="Eligible in Aug 2026" />
                </div>
                <div style={{ backgroundColor: '#f0fdfa', border: '1px solid #ccfbf1', padding: '1rem', borderRadius: '0.5rem', color: '#0f766e', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Info size={20} />
                  <span>สิทธิ์การตัดแว่นหรือคอนแทคเลนส์ของคุณสามารถใช้ได้ 1 ครั้ง ต่อ 1 ปีปฏิทิน (กรอบแว่นวงเงินสูงสุด $150)</span>
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.25rem' }}>Copays</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <CopayRow label="WellVision Exam" price="$15" />
                  <CopayRow label="Prescription Glasses" price="$25" />
                  <CopayRow label="Contact Lens Exam" price="Up to $60" />
                </div>
              </div>
            </>
          )}

          {/* 🟢 เงื่อนไข: กรณีที่กดแท็บอื่นๆ ที่ยังไม่ได้ทำข้อมูลลงลึก */}
          {['Life', 'FSA', '401k'].includes(activeTab) && (
            <div style={{ gridColumn: '1 / -1', backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <Info size={32} style={{ margin: '0 auto 1rem auto', color: '#94a3b8' }} />
              <h3 style={{ fontWeight: 600, color: '#0f172a', fontSize: '1.25rem' }}>ข้อมูลส่วนนี้เตรียมเปิดใช้งานเร็วๆ นี้</h3>
              <p>ระบบกำลังดึงข้อมูลสวัสดิการหมวดหมู่ {activeTab} เข้าสู่แอปพลิเคชัน</p>
            </div>
          )}

        </div>
      </div>
    </AppShell>
  );
}

// --- Helper Components ---

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

// 🚀 อัปเดต Tab ให้รับฟังก์ชัน onClick เพื่อตอบสนองการคลิกได้
function Tab({ active, onClick, children }: any) {
  return (
    <div 
      onClick={onClick}
      style={{ flex: 1, textAlign: 'center', padding: '0.5rem', backgroundColor: active ? '#fff' : 'transparent', borderRadius: '0.5rem', boxShadow: active ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', fontWeight: active ? 600 : 500, color: active ? '#0f172a' : '#64748b', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s' }}
    >
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

function BadgeActive() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#f0fdfa', color: '#0d9488', border: '1px solid #ccfbf1', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 500 }}>
      <CheckCircle size={14} /> Active
    </span>
  );
}

function InfoBox({ label, value }: any) {
  return (
    <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: '#475569', fontSize: '0.9rem' }}>{label}</span>
      <span style={{ fontWeight: 500, color: '#0f172a' }}>{value}</span>
    </div>
  );
}

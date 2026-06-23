import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { DashboardCharts } from '@/components/dashboard-charts';
import { Hero, ListBlock, StatCard, SurfaceCard } from '@/components/ui';
import { routes } from '@/lib/data';
import { PlusCircle, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const route = routes["/benefits"];

export default function Page() {
  return (
    <AppShell route={route}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* 1. Header & Call to Action */}
        <Hero
          eyebrow="Benefits & Entitlements"
          title="สวัสดิการและสิทธิ์การเบิกจ่ายของคุณ"
          description="ตรวจสอบวงเงินคงเหลือ ประวัติการส่งเคลมเงิน และสิทธิประโยชน์ต่างๆ ของคุณได้ครบจบในที่เดียว"
          actions={
            <Link className="button" href="/claims/new" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PlusCircle size={16} /> ยื่นเรื่องเคลมใหม่
            </Link>
          }
        />

        {/* 2. Stat Cards ภาพรวมเร็วๆ */}
        <div className="stats-grid">
          <StatCard label="วงเงินคงเหลือ (OPD)" value="THB 25,000" tone="success" />
          <StatCard label="รายการเคลมเดือนนี้" value="2 รายการ" tone="info" />
          <StatCard label="อยู่ระหว่างพิจารณา" value="1 รายการ" tone="warning" />
          <StatCard label="สิทธิ์ฟิตเนสประจำเดือน" value="ใช้แล้ว" tone="success" />
        </div>

        {/* 3. ส่วนแสดงกราฟเปรียบเทียบวงเงิน */}
        <div className="grid-2">
          <SurfaceCard 
            title="กราฟวิเคราะห์การใช้งานสวัสดิการปี 2026" 
            description="สัดส่วนวงเงินที่ใช้ไป (Used) เทียบกับวงเงินคงเหลือ (Remaining)"
          >
            <div style={{ height: '280px', marginTop: '1rem' }}>
              {/* ใช้ Component กราฟของโปรเจกต์มาเรนเดอร์ในโหมดวิเคราะห์ของ Employee */}
              <DashboardCharts variant="employee" />
            </div>
          </SurfaceCard>

          {/* 4. สรุปโควตาสิทธิประโยชน์แบบละเอียด */}
          <SurfaceCard title="รายละเอียดสิทธิ์และวงเงินคงเหลือ" description="แจกแจงสิทธิ์แยกตามหมวดหมู่การรักษาและไลฟ์สไตล์">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              
              <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem' }}>
                  <span>ค่ารักษาพยาบาลผู้ป่วยนอก (OPD)</span>
                  <span style={{ color: '#0284c7' }}>THB 25,000 / 40,000</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '62.5%', height: '100%', backgroundColor: '#0284c7' }}></div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>ใช้ไปแล้ว 37.5% (คงเหลือ THB 25,000)</div>
              </div>

              <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem' }}>
                  <span>เงินสนับสนุนฟิตเนส & สุขภาพ</span>
                  <span style={{ color: '#16a34a' }}>THB 1,500 / 1,500</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#16a34a' }}></div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>โควตารอบปัจจุบันเต็มจำนวน (ได้รับสนับสนุนรายเดือน)</div>
              </div>

              <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.5rem' }}>
                  <span>วงเงินดูแลสุขภาพจิต (Mental Wellbeing)</span>
                  <span style={{ color: '#ea580c' }}>2 / 4 เซสชันค้างอยู่</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '50%', height: '100%', backgroundColor: '#ea580c' }}></div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>ใช้บริการไปแล้ว 2 เซสชัน คงเหลือสิทธิ์อีก 2 ครั้ง</div>
              </div>

            </div>
          </SurfaceCard>
        </div>

        {/* 5. Claim Transactions Table ตารางประวัติการเคลมและสถานะ */}
        <SurfaceCard 
          title="ประวัติการส่งเคลมสวัสดิการล่าสุด (Claim Transactions)" 
          description="ติดตามสถานะ ใบเสร็จ และรายละเอียดการเบิกเงินเรียลไทม์"
        >
          <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569', fontWeight: 600 }}>
                  <th style={{ padding: '0.75rem 1rem' }}>เลขที่คำร้อง</th>
                  <th style={{ padding: '0.75rem 1rem' }}>ประเภทรายการ</th>
                  <th style={{ padding: '0.75rem 1rem' }}>วันที่ยื่นเรื่อง</th>
                  <th style={{ padding: '0.75rem 1rem' }}>จำนวนเงิน</th>
                  <th style={{ padding: '0.75rem 1rem' }}>สถานะ</th>
                  <th style={{ padding: '0.75rem 1rem' }}>หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                
                <tr style={{ borderBottom: '1px solid #e2e8f0', hover: { backgroundColor: '#f8fafc' } }}>
                  <td style={{ padding: '1rem', fontWeight: 500, color: '#0f172a' }}>CLM-2026-004</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileText size={16} color="#64748b" />
                      <span>Medical Reimbursement (ค่าหวัดอักเสบ)</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b' }}>11 มิ.ย. 2026</td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>THB 2,450</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.85rem', fontWeight: 500, backgroundColor: '#fef3c7', color: '#d97706' }}>
                      <Clock size={14} /> Pending Review
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.85rem' }}>รอฝ่ายบุคคลตรวจสอบใบเสร็จ</td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 500, color: '#0f172a' }}>CLM-2026-003</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileText size={16} color="#64748b" />
                      <span>Gym & Fitness Monthly Subsidy</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b' }}>06 มิ.ย. 2026</td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>THB 1,500</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.85rem', fontWeight: 500, backgroundColor: '#dcfce7', color: '#16a34a' }}>
                      <CheckCircle size={14} /> Approved & Paid
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.85rem' }}>โอนเงินเข้าบัญชีพนักงานแล้ว</td>
                </tr>

                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 500, color: '#0f172a' }}>CLM-2026-001</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileText size={16} color="#64748b" />
                      <span>Dental Care (ขูดหินปูนประจำปี)</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b' }}>20 พ.ค. 2026</td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>THB 1,200</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.85rem', fontWeight: 500, backgroundColor: '#dcfce7', color: '#16a34a' }}>
                      <CheckCircle size={14} /> Approved & Paid
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.85rem' }}>ปิดเคสสมบูรณ์</td>
                </tr>

              </tbody>
            </table>
          </div>
        </SurfaceCard>

      </div>
    </AppShell>
  );
}

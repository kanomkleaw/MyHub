import { AppShell } from '@/components/app-shell';
import { routes } from '@/lib/data';
import { SurfaceCard } from '@/components/ui';

// 🚀 แก้ไขจุดนี้: เปลี่ยนให้ชี้ไปที่ /assistant ให้ถูกต้อง
const route = routes["/assistant"];

export default function AssistantPage() {
  // 🚀 แก้ไขจุดนี้: เปลี่ยนให้เรนเดอร์เนื้อหาของ /assistant
  return <AppShell route={route}>{renderContent("/assistant")}</AppShell>;
}

function renderContent(pathname: string) {
  switch (pathname) {
    case '/assistant':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <SurfaceCard title="Virtual HR Assistant AI" description="ถาม-ตอบ สวัสดิการ ระเบียบข้อบังคับ และนโยบายบริษัทได้ตลอด 24 ชั่วโมง">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '400px', overflowY: 'auto', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#f8fafc', marginTop: '1rem' }}>
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#fff', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', maxWidth: '80%' }}>
                สวัสดีค่ะคุณอนันต์ วันนี้ต้องการตรวจสอบสิทธิ์การเบิกสวัสดิการ หรือต้องการรับลิงก์ส่งคำร้องตัวไหนแจ้งบอทได้เลยนะคะ! 🤖
              </div>
              <div style={{ alignSelf: 'flex-end', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '0.75rem 1rem', borderRadius: '0.75rem', maxWidth: '80%' }}>
                วงเงิน OPD ของฉันในปี 2026 นี้เหลืออยู่เท่าไหร่ครับ?
              </div>
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#fff', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', maxWidth: '80%' }}>
                จากการตรวจสอบ วงเงินสิทธิ์การเบิกผู้ป่วยนอก (OPD) ของคุณคงเหลือ <strong>THB 25,000</strong> จากโควตาเต็ม THB 40,000 ค่ะ สามารถกดไปที่แท็บ Benefits ด้านซ้ายมือเพื่อดูตารางแยกรายการได้เลยค่ะ
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input className="input" placeholder="พิมพ์คำถามของคุณที่นี่..." style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} />
              <button className="button" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', cursor: 'pointer' }}>ส่งข้อความ</button>
            </div>
          </SurfaceCard>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SurfaceCard title="หัวข้อยอดฮิต (Quick Topics)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>
                <button style={{ textAlign: 'left', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: '#fff', cursor: 'pointer', color: '#334155', fontWeight: 500 }}>🩺 ตรวจสอบการเบิกค่าทันตกรรม</button>
                <button style={{ textAlign: 'left', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: '#fff', cursor: 'pointer', color: '#334155', fontWeight: 500 }}>🏖️ ยอดวันลาพักร้อนสะสม</button>
                <button style={{ textAlign: 'left', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.375rem', backgroundColor: '#fff', cursor: 'pointer', color: '#334155', fontWeight: 500 }}>📄 ขอเอกสารรับรองเงินเดือน</button>
              </div>
            </SurfaceCard>
          </div>
        </div>
      );
    default:
      return null;
  }
}

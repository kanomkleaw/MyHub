import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { DashboardCharts } from '@/components/dashboard-charts';
import { Hero, ListBlock, StatCard, SurfaceCard } from '@/components/ui';
import { routes } from '@/lib/data';

const route = routes["/policies"];

export default function Page() {
  return <AppShell route={route}>{renderContent("/policies")}</AppShell>;
}

function renderContent(pathname: string) {
  // ดึงไอคอนมาใช้สำหรับตกแต่งหน้าจอต่างๆ
  const { 
    User, Mail, Phone, MapPin, Briefcase, Calendar, Shield, 
    FileText, CheckCircle, Clock, AlertTriangle, Plus, Search,
    GraduationCap, Award, BookOpen, Send, Check, X, ShieldAlert, List
  } = require('lucide-react');

  switch (pathname) {
    case '/':
      // --- หน้า Home (ยึดตามดีไซน์สวยงามที่เราทำไว้) ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '0.75rem', padding: '1rem', color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertTriangle size={18} />
            <div><strong>Requires Attention:</strong> คุณมีคอร์สเรียนกฎเกณฑ์ความปลอดภัยไซเบอร์ที่เกินกำหนดชำระ และมีนโยบายไฮบริดจ์เวิร์คใหม่ที่ต้องกดรับทราบ</div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <Link href="/requests/new" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#0f172a' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#f0fdfa', borderRadius: '50%', color: '#0d9488' }}><Send size={24} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>New Request</span>
            </Link>
            <Link href="/claims/new" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#0f172a' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#f0fdfa', borderRadius: '50%', color: '#0d9488' }}><FileText size={24} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Submit Claim</span>
            </Link>
            <Link href="/assistant" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#0f172a' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#f0fdfa', borderRadius: '50%', color: '#0d9488' }}><Headphones size={24} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>HR Assistant</span>
            </Link>
            <Link href="/directory" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#0f172a' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#f0fdfa', borderRadius: '50%', color: '#0d9488' }}><BookOpen size={24} /></div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Directory</span>
            </Link>
          </div>
        </div>
      );

    case '/profile':
      // --- หน้า My Profile (จัดเรียงข้อมูลพนักงานเป็นสัดส่วนชัดเจน) ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: '#0284c7', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyInContent: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 600 }}>AK</div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Anan Kittipong</h2>
              <p style={{ color: '#64748b', margin: '0.25rem 0 0.5rem 0' }}>Senior Operations Analyst • Corporate Strategy</p>
              <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 500 }}>พนักงานประจำ (Full-time)</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SurfaceCard title="ข้อมูลการติดต่อ">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={16} color="#64748b" /> <span>anan.k@kkpfg.com</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={16} color="#64748b" /> <span>+66 81 234 5678</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={16} color="#64748b" /> <span>อาคารสำนักงานใหญ่ กรุงเทพฯ</span></div>
              </div>
            </SurfaceCard>
            <SurfaceCard title="ข้อมูลตำแหน่งและการจ้างงาน">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Briefcase size={16} color="#64748b" /> <span>ฝ่ายกลยุทธ์องค์กร (Corporate Strategy)</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Calendar size={16} color="#64748b" /> <span>วันที่เริ่มงาน: 15 มีนาคม 2022</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><User size={16} color="#64748b" /> <span>ผู้บังคับบัญชา: Pimchanok S. (HRBP)</span></div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      );

    case '/claims':
      // --- หน้าประวัติรายการเคลมทั้งหมด ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>รายการเบิกสวัสดิการของคุณ</div>
            <Link href="/claims/new" className="button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Plus size={16} /> ยื่นใบเบิกเงิน</Link>
          </div>
          <SurfaceCard title="ประวัติการเคลมเงินปี 2026">
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569', textAlign: 'left', fontWeight: 600 }}>
                    <th style={{ padding: '0.75rem' }}>ID รายการ</th>
                    <th style={{ padding: '0.75rem' }}>ประเภท</th>
                    <th style={{ padding: '0.75rem' }}>วันที่ยื่น</th>
                    <th style={{ padding: '0.75rem' }}>ยอดเงิน</th>
                    <th style={{ padding: '0.75rem' }}>สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>CLM-9421</td>
                    <td style={{ padding: '1rem' }}>ค่ารักษาพยาบาล (OPD)</td>
                    <td style={{ padding: '1rem' }}>11 มิ.ย. 2026</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>THB 2,450</td>
                    <td style={{ padding: '1rem' }}><span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.85rem' }}>Pending Review</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>CLM-9310</td>
                    <td style={{ padding: '1rem' }}>ค่าฟิตเนสรายเดือน</td>
                    <td style={{ padding: '1rem' }}>06 มิ.ย. 2026</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>THB 1,500</td>
                    <td style={{ padding: '1rem' }}><span style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.85rem' }}>Approved</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SurfaceCard>
        </div>
      );

    case '/claims/new':
    case '/requests/new':
      // --- หน้าฟอร์มส่งข้อมูล (Claims / Requests New) ---
      return (
        <SurfaceCard title={pathname.includes('claim') ? "ยื่นเรื่องเบิกเงินสวัสดิการใหม่" : "สร้างคำร้องบริการ HR ใหม่"}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', color: '#334155' }}>หัวข้อคำร้อง / เรื่องที่ต้องการติดต่อ</label>
              <input className="input" placeholder="ระบุชื่อเรื่อง เช่น ขอเบิกค่ารักษาพยาบาลประจำเดือน" style={{ width: '100%' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', color: '#334155' }}>หมวดหมู่หลัก</label>
                <select className="select" style={{ width: '100%' }}>
                  <option>สวัสดิการสุขภาพ (Medical)</option>
                  <option>การทำงานและอุปกรณ์ (Workplace)</option>
                  <option>เอกสารรับรอง (HR Certificates)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', color: '#334155' }}>จำนวนเงิน (หากเป็นใบเบิกเงิน)</label>
                <input className="input" type="number" placeholder="0.00" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', color: '#334155' }}>รายละเอียดเพิ่มเติม</label>
              <textarea className="textarea" placeholder="พิมพ์รายละเอียดหรือเหตุผลความจำเป็นที่นี่..." style={{ width: '100%', minHeight: '100px' }}></textarea>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', color: '#334155' }}>แนบไฟล์หลักฐาน (ใบเสร็จ / เอกสารประกอบ)</label>
              <div style={{ border: '2px dashed #cbd5e1', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center', backgroundColor: '#f8fafc', color: '#64748b', cursor: 'pointer' }}>
                <Plus size={24} style={{ margin: '0 auto 0.5rem auto' }} /> กดที่นี่เพื่ออัปโหลดไฟล์ PDF หรือรูปภาพใบเสร็จ
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button className="button" style={{ flex: 1 }}>ส่งคำร้องเข้าสู่ระบบ</button>
              <button className="button ghost" style={{ flex: 1 }}>บันทึกร่างเก็บไว้</button>
            </div>
          </div>
        </SurfaceCard>
      );

    case '/training':
      // --- หน้า Training & Learning Portal ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <StatCard label="คอร์สที่ต้องเรียนให้จบ" value="1 คอร์ส" tone="danger" />
            <StatCard label="คอร์สที่เรียนสำเร็จแล้ว" value="4 คอร์ส" tone="success" />
            <StatCard label="ชั่วโมงสะสมรวม" value="12.5 ชม." tone="info" />
          </div>
          <SurfaceCard title="คอร์สอบรมของคุณประจำปี 2026">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #fca5a5', backgroundColor: '#fef2f2', borderRadius: '0.5rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#991b1b' }}>Cybersecurity Foundation 2026</div>
                  <div style={{ fontSize: '0.85rem', color: '#b91c1c' }}>กำหนดส่งภายใน: วันนี้ • วิชาบังคับขององค์กร</div>
                </div>
                <Link href="/training/compliance-foundation" className="button" style={{ backgroundColor: '#ef4444', color: '#fff' }}>เริ่มเรียนทันที</Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>Effective Time Management</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>สถานะ: เรียนจบแล้วเมื่อ 14 พ.ค. 2026</div>
                </div>
                <span style={{ color: '#16a34a', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Award size={16} /> ได้รับใบเซอร์แล้ว</span>
              </div>
            </div>
          </SurfaceCard>
        </div>
      );

    case '/directory':
      // --- หน้าค้นหารายชื่อพนักงาน (Directory) ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', backgroundColor: '#fff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
              <Search size={18} color="#94a3b8" />
              <input placeholder="ค้นหาชื่อพนักงาน, ตำแหน่ง หรือแผนกงาน..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.95rem' }} />
            </div>
            <button className="button" style={{ padding: '0.5rem 1.5rem' }}>ค้นหา</button>
          </div>
          <SurfaceCard title="รายชื่อติดต่อด่วนในองค์กร">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>Pimchanok S.</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>HR Business Partner (ดูแลทีม Strategy)</div>
                </div>
                <a href="mailto:pimchanok.s@kkpfg.com" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 500 }}>pimchanok.s@kkpfg.com</a>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>Narin T.</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Benefits Manager (ดูแลงานกองทุนและสวัสดิการ)</div>
                </div>
                <a href="mailto:narin.t@kkpfg.com" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 500 }}>narin.t@kkpfg.com</a>
              </div>
            </div>
          </SurfaceCard>
        </div>
      );

    case '/assistant':
      // --- หน้า Virtual HR Assistant Stream ---
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <SurfaceCard title="Virtual HR Assistant AI" description="ถาม-ตอบ สวัสดิการ ระเบียบข้อบังคับ และนโยบายบริษัทได้ตลอด 24 ชั่วโมง">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '350px', overflowY: 'auto', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#f8fafc', marginTop: '1rem' }}>
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#fff', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', maxWidth: '80%' }}>
                สวัสดีค่ะคุณอนันต์ วันนี้ต้องการตรวจสอบสิทธิ์การเบิกสวัสดิการ หรือต้องการรับลิงก์ส่งคำร้องตัวไหนแจ้งบอทได้เลยนะคะ! 🤖
              </div>
              <div style={{ alignSelf: 'flex-end', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '0.75rem 1rem', borderRadius: '0.75rem', maxWidth: '80%' }}>
                วงเงิน OPD ของฉันในปี 2026 นี้เหลืออยู่เท่าไหร่ครับ?
              </div>
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#fff', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', maxWidth: '80%' }}>
                จากการตรวจสอบ วงเงินสิทธิ์การเบิกผู้ป่วยนอก (OPD) ของคุณคงเหลือ **THB 25,000** จากโควตาเต็ม THB 40,000 ค่ะ สามารถกดคลิกดูตารางแยกรายการได้ที่หน้าสวัสดิการเลยค่ะ
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input className="input" placeholder="พิมพ์คำถามของคุณที่นี่..." style={{ flex: 1 }} />
              <button className="button">ส่งคำถาม</button>
            </div>
          </SurfaceCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SurfaceCard title="หัวข้อยอดฮิต">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <button style={{ textAlign: 'left', padding: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', backgroundColor: '#fff', cursor: 'pointer' }}>• การเบิกค่าทันตกรรม</button>
                <button style={{ textAlign: 'left', padding: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', backgroundColor: '#fff', cursor: 'pointer' }}>• การลาพักร้อนสะสม</button>
                <button style={{ textAlign: 'left', padding: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', backgroundColor: '#fff', cursor: 'pointer' }}>• ดาวน์โหลดหนังสือรับรองเงินเดือน</button>
              </div>
            </SurfaceCard>
          </div>
        </div>
      );

    case '/manager':
    case '/team':
      // --- หน้าจอของกลุ่ม Manager Hub ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <StatCard label="รอผู้จัดการอนุมัติ (Pending)" value="2 รายการ" tone="warning" />
            <StatCard label="จำนวนลูกทีมทั้งหมด" value="3 คน" tone="info" />
            <StatCard label="อัตราการผ่านอบรมทีม" value="85%" tone="success" />
            <StatCard label="วันลาพักร้อนทีมสัปดาห์นี้" value="0 คน" tone="success" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SurfaceCard title="รายการรออนุมัติจากคุณ (Approvals Queue)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
                  <div style={{ fontWeight: 600 }}>เบิกเงินค่าเดินทางต่างจังหวัด</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>ผู้ยื่น: Ploy C. • ยอดเงิน: THB 3,200</div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <button className="button" style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Check size={14} /> อนุมัติ</button>
                    <button className="button ghost" style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><X size={14} /> ปฏิเสธ</button>
                  </div>
                </div>
              </div>
            </SurfaceCard>
            <SurfaceCard title="รายชื่อสมาชิกในทีมและสถานะ">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', borderBottom: '1px solid #f1f5f9' }}>
                  <div><strong>Ploy C.</strong> <span style={{ color: '#64748b', fontSize: '0.85rem' }}>(Analyst)</span></div>
                  <span style={{ color: '#16a34a', fontSize: '0.85rem', fontWeight: 500 }}>● อบรมครบถ้วน</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', borderBottom: '1px solid #f1f5f9' }}>
                  <div><strong>Than K.</strong> <span style={{ color: '#64748b', fontSize: '0.85rem' }}>(Coordinator)</span></div>
                  <span style={{ color: '#d97706', fontSize: '0.85rem', fontWeight: 500 }}>● มีคอร์สค้างเรียน</span>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      );

    case '/hr-admin/policies':
    case '/hr-admin/announcements':
    case '/hr-admin/service-categories':
    case '/hr-admin/support-queue':
      // --- หน้าจอของกลุ่ม HR Admin Portal ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a' }}>HR Administration Panel Console</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
            <SurfaceCard title="เคสในระบบ Support Workload ล่าสุด">
              <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left', fontSize: '0.9rem', color: '#475569' }}>
                      <th style={{ padding: '0.5rem' }}>ID เคส</th>
                      <th style={{ padding: '0.5rem' }}>ผู้ส่งเรื่อง</th>
                      <th style={{ padding: '0.5rem' }}>เรื่องยื่น</th>
                      <th style={{ padding: '0.5rem' }}>ความสำคัญ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: 500 }}>TK-1007</td>
                      <td style={{ padding: '0.75rem 0.5rem' }}>Somchai D.</td>
                      <td style={{ padding: '0.75rem 0.5rem' }}>สอบถามกองทุนสำรองเลี้ยงชีพ</td>
                      <td style={{ padding: '0.75rem 0.5rem' }}><span style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '0.1rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.8rem' }}>High Escalation</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SurfaceCard>
            <SurfaceCard title="สรุปงานแอดมิน">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                <div>• เคสคงค้างในคิวทั้งหมด: <strong>17 เคส</strong></div>
                <div>• ปิดเคสสำเร็จแล้ววันนี้: <strong>9 เคส</strong></div>
                <div>• นโยบายที่รออัปเดต: <strong>3 ฉบับ</strong></div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      );

    case '/admin/role-mappings':
    case '/admin/hr-assignments':
    case '/admin/access-control':
    case '/admin/audit-logs':
      // --- หน้าจอของกลุ่ม Super Admin Governance Control ---
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ShieldAlert size={36} color="#0284c7" />
            <div>
              <h3 style={{ margin: 0, fontWeight: 600 }}>Super Admin Security Console</h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>ใช้ควบคุมบทบาทผู้ใช้งาน (Privileged Accounts), ระบบ Microsoft Entra ID Mappings และตรวจสอบบันทึกธุรกรรมความปลอดภัย (Audit Trails)</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SurfaceCard title="บัญชีผู้ใช้ที่ได้รับสิทธิ์พิเศษ (Privileged Users)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', fontSize: '0.95rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: '#f1f5f9', borderRadius: '0.25rem', display: 'flex', justifyContent: 'space-between' }}><span>1. Administrator Main System</span> <strong>Active</strong></div>
                <div style={{ padding: '0.5rem', backgroundColor: '#f1f5f9', borderRadius: '0.25rem', display: 'flex', justifyContent: 'space-between' }}><span>2. HR Support Lead Account</span> <strong>Active</strong></div>
              </div>
            </SurfaceCard>
            <SurfaceCard title="คำแนะนำการ Hardening สำหรับระบบจริง">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', fontSize: '0.85rem', color: '#475569' }}>
                <div>✔ <strong>Microsoft Entra ID Connection:</strong> แนะนำให้สลับไปใช้ NextAuth หรือระบบไลบรารี MSAL สำหรับทำระบบล็อกอินจริง</div>
                <div>✔ <strong>Azure Endpoint Protection:</strong> ย้ายฟังก์ชันเบิกจ่ายข้อมูลหลังบ้านไปซ่อนไว้ภายใต้ระบบ API Gateway ที่ล็อกสิทธิ์ Token</div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      );

    default:
      return <SurfaceCard title="Route not configured">This export route is ready to be expanded.</SurfaceCard>;
  }
}

function formContent({ title, description }: { title: string; description: string }) {
  return (
    <SurfaceCard title={title} description={description}>
      <div className="form-grid">
        <input className="input" placeholder="Subject" />
        <select className="select" defaultValue="general">
          <option value="general">General category</option>
          <option value="benefits">Benefits</option>
          <option value="documents">Documents</option>
        </select>
        <textarea className="textarea" placeholder="Describe the request"></textarea>
        <div className="button-row">
          <button className="button" type="button">Submit</button>
          <button className="button ghost" type="button">Save draft</button>
        </div>
      </div>
    </SurfaceCard>
  );
}

function detailContent({ title, summary, tone }: { title: string; summary: string; tone: 'info' | 'success' | 'warning' | 'danger' }) {
  return (
    <div className="grid-2">
      <SurfaceCard title={title} description={summary}>
        <ListBlock items={[{ title: 'Status', meta: summary, badge: { label: tone === 'danger' ? 'Critical' : tone === 'warning' ? 'Pending' : 'Active', tone } }, { title: 'Owner', meta: 'Operations or HR reviewer' }, { title: 'Next step', meta: 'Prepared for future workflow wiring' }]} />
      </SurfaceCard>
      <SurfaceCard title="Timeline" description="Starter timeline block for future API events.">
        <ListBlock items={[{ title: 'Submitted by employee', meta: '11 Jun 2026 • 09:18' }, { title: 'Assigned to operations', meta: '11 Jun 2026 • 10:03' }, { title: 'Awaiting action', meta: 'Current step' }]} />
      </SurfaceCard>
    </div>
  );
}

function policyListContent() {
  return (
    <>
      <Hero eyebrow="Policies" title="Policy library" description="Critical and acknowledged policy views with room for secure document services later." />
      <SurfaceCard title="Policies">
        <ListBlock items={[{ title: 'Code of conduct', meta: 'Compliance • updated 18 Jun 2026', badge: { label: 'Pending', tone: 'danger' } }, { title: 'Travel and expense policy', meta: 'Finance • updated 10 Jun 2026', badge: { label: 'Acknowledged', tone: 'success' } }, { title: 'Hybrid work handbook', meta: 'Workplace • updated 20 Jun 2026', badge: { label: 'Critical', tone: 'warning' } }]} />
      </SurfaceCard>
    </>
  );
}

function directoryContent() {
  return (
    <SurfaceCard title="People and HR contacts" description="Directory starter ready for Entra profile data or API-backed people services.">
      <ListBlock items={[{ title: 'Pimchanok S.', meta: 'HR Business Partner • pimchanok.s@example.com' }, { title: 'Narin T.', meta: 'Benefits Operations • narin.t@example.com' }, { title: 'Kanya P.', meta: 'Learning & Development • kanya.p@example.com' }]} />
    </SurfaceCard>
  );
}

function assistantContent() {
  return (
    <div className="chat-layout">
      <SurfaceCard title="Virtual HR Assistant" description="Conversational shell prepared for real assistant integrations later.">
        <div className="chat-stream">
          <div className="chat-row assistant"><div className="mini-avatar">AI</div><div className="chat-bubble">Hello! I can help with benefits, policies, training, claims, and HR routing.</div></div>
          <div className="chat-row user"><div className="chat-bubble">How do I submit a medical claim?</div><div className="mini-avatar">AK</div></div>
          <div className="chat-row assistant"><div className="mini-avatar">AI</div><div className="chat-bubble">Open the claims flow, choose Medical, attach context, and submit. This exported app is ready for API-backed assistant services later.</div></div>
        </div>
      </SurfaceCard>
      <SurfaceCard title="Quick topics" description="Extend with real knowledge, routing, or copilot services.">
        <ListBlock items={[{ title: 'Benefits & insurance', meta: 'Health, dental, reimbursement' }, { title: 'Time off & leave', meta: 'PTO, sick leave, special leave' }, { title: 'Company policies', meta: 'Guidelines and procedures' }]} />
      </SurfaceCard>
    </div>
  );
}

function teamContent() {
  return (
    <>
      <Hero eyebrow="Manager hub" title="Team overview" description="Roster, approvals, compliance, and sentiment in a more deployable web-app structure." />
      <div className="stats-grid">
        <StatCard label="Team size" value="3" tone="info" />
        <StatCard label="Pending approvals" value="2" tone="warning" />
        <StatCard label="Overdue items" value="1" tone="danger" />
        <StatCard label="Sentiment" value="Positive" tone="success" />
      </div>
      <div className="grid-2">
        <SurfaceCard title="Team roster"><ListBlock items={[{ title: 'Ploy C.', meta: 'Operations Analyst', badge: { label: 'On track', tone: 'success' } }, { title: 'Than K.', meta: 'Project Coordinator', badge: { label: 'Needs review', tone: 'warning' } }, { title: 'Mint R.', meta: 'Business Analyst', badge: { label: 'On leave', tone: 'info' } }]} /></SurfaceCard>
        <DashboardCharts variant="manager" />
      </div>
    </>
  );
}

function operationsContent({ pathname }: { pathname: string }) {
  const titles: Record<string, string> = {
    '/hr-admin/policies': 'Policy administration',
    '/hr-admin/announcements': 'Announcement queue',
    '/hr-admin/service-categories': 'Service category setup',
    '/hr-admin/support-queue': 'Support queue',
    '/hr-admin/tickets/ticket-1007': 'Ticket details',
  };

  return (
    <>
      <Hero eyebrow="HR operations" title={titles[pathname]} description="Admin-ready operational screen for a standalone Next.js deployment path." />
      <div className="grid-2">
        <SurfaceCard title="Operational workload"><ListBlock items={[{ title: 'Open items', meta: '17 active records', badge: { label: 'In progress', tone: 'warning' } }, { title: 'Escalations', meta: '3 high-priority items', badge: { label: 'Critical', tone: 'danger' } }, { title: 'Resolved today', meta: '9 completed items', badge: { label: 'Resolved', tone: 'success' } }]} /></SurfaceCard>
        <DashboardCharts variant="operations" />
      </div>
    </>
  );
}

function adminContent({ pathname }: { pathname: string }) {
  const titles: Record<string, string> = {
    '/admin/role-mappings': 'Role mappings',
    '/admin/hr-assignments': 'HR assignments',
    '/admin/access-control': 'Access control',
    '/admin/audit-logs': 'Audit logs',
  };

  return (
    <>
      <Hero eyebrow="Super admin" title={titles[pathname]} description="Governance-friendly admin views prepared for secure expansion with Microsoft SSO and Azure APIs." />
      <div className="grid-2">
        <SurfaceCard title="Control summary">
          <ListBlock items={[{ title: 'Privileged users', meta: '14 mapped users', badge: { label: 'Reviewed', tone: 'success' } }, { title: 'Pending changes', meta: '3 access requests', badge: { label: 'Pending', tone: 'warning' } }, { title: 'Audit coverage', meta: 'Export and role events tracked', badge: { label: 'Secured', tone: 'info' } }]} />
        </SurfaceCard>
        <SurfaceCard title="Deployment guidance" description="Recommended next steps for production hardening.">
          <ListBlock items={[{ title: 'Microsoft Entra ID', meta: 'Use NextAuth or MSAL for SSO' }, { title: 'Azure backend', meta: 'Move data and workflow APIs behind secure endpoints' }, { title: 'Authorization', meta: 'Add route middleware and server-side session checks' }]} />
        </SurfaceCard>
      </div>
    </>
  );
}

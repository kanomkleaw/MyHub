import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { DashboardCharts } from '@/components/dashboard-charts';
import { Hero, ListBlock, StatCard, SurfaceCard } from '@/components/ui';
import { routes } from '@/lib/data';

const route = routes["/team"];

export default function Page() {
  return <AppShell route={route}>{renderContent("/team")}</AppShell>;
}

function renderContent(pathname: string) {
  switch (pathname) {
    case '/':
      return (
        <>
          <Hero
            eyebrow="Employee dashboard"
            title="A premium employee experience, ready to leave Power Apps"
            description="This exported Next.js project is structured for standalone deployment, richer UI evolution, Microsoft SSO integration, and Azure-backed APIs while keeping the app's main flows recognizable."
            actions={
              <>
                <Link className="button" href="/requests/new">New request</Link>
                <Link className="button ghost" href="/claims/new">Submit claim</Link>
              </>
            }
          />
          <div className="stats-grid">
            <StatCard label="Open requests" value="2" tone="warning" />
            <StatCard label="Pending acknowledgments" value="1" tone="danger" />
            <StatCard label="Training due" value="1" tone="warning" />
            <StatCard label="Wellbeing score" value="88%" tone="success" />
          </div>
          <div className="grid-2">
            <SurfaceCard title="Priority items" description="Critical announcements, overdue training, and policy tasks.">
              <ListBlock
                items={[
                  { title: 'Hybrid work guideline refreshed', meta: 'Critical announcement • 20 Jun 2026', badge: { label: 'Critical', tone: 'danger' } },
                  { title: 'Compliance foundation overdue', meta: 'Due today • required module', badge: { label: 'Overdue', tone: 'warning' } },
                  { title: 'Code of conduct acknowledgment pending', meta: 'Compliance task', badge: { label: 'Pending', tone: 'info' } },
                ]}
              />
            </SurfaceCard>
            <DashboardCharts variant="employee" />
          </div>
        </>
      );
    case '/profile':
      return (
        <>
          <Hero eyebrow="Employee profile" title="Anan Kittipong" description="Senior Operations Analyst with core profile data, role metadata, and HR ownership." />
          <div className="grid-2">
            <SurfaceCard title="Contact information">
              <ListBlock
                items={[
                  { title: 'Email', meta: 'anan.k@example.com' },
                  { title: 'Phone', meta: '+66 81 234 5678' },
                  { title: 'Organization unit', meta: 'Corporate Strategy' },
                ]}
              />
            </SurfaceCard>
            <SurfaceCard title="Employment details">
              <ListBlock
                items={[
                  { title: 'Corporate title', meta: 'Senior Operations Analyst' },
                  { title: 'Role', meta: 'Employee' },
                  { title: 'HR contact', meta: 'Pimchanok S. • HR Business Partner' },
                ]}
              />
            </SurfaceCard>
          </div>
        </>
      );
    case '/benefits':
      return (
        <>
          <Hero eyebrow="Benefits" title="Benefit plans and entitlements" description="Card-based benefits overview with room for richer API-connected content later." />
          <div className="grid-3">
            <SurfaceCard title="Health coverage" description="Medical reimbursement and dependent support."><ListBlock items={[{ title: 'Annual outpatient allowance', meta: 'THB 25,000 remaining' }, { title: 'Dependent coverage', meta: '1 dependent enrolled' }]} /></SurfaceCard>
            <SurfaceCard title="Wellness" description="Fitness and wellbeing support."><ListBlock items={[{ title: 'Gym subsidy', meta: 'THB 1,500 per month' }, { title: 'Mental wellbeing sessions', meta: '2 sessions remaining' }]} /></SurfaceCard>
            <SurfaceCard title="Retirement & savings" description="Long-term savings support."><ListBlock items={[{ title: 'Provident fund', meta: 'Company match up to 6%' }, { title: 'Latest statement', meta: 'Available for May 2026' }]} /></SurfaceCard>
          </div>
        </>
      );
    case '/claims':
      return (
        <>
          <Hero eyebrow="Claims" title="Reimbursement claims" description="Claim list with quick access to create, review, and extend into real workflows." actions={<Link className="button" href="/claims/new">New claim</Link>} />
          <div className="stats-grid">
            <StatCard label="Open claims" value="2" tone="warning" />
            <StatCard label="Approved this month" value="1" tone="success" />
            <StatCard label="Awaiting documents" value="1" tone="danger" />
            <StatCard label="Paid amount" value="THB 2.4k" tone="info" />
          </div>
          <SurfaceCard title="Claim list"><ListBlock items={[{ title: 'Medical reimbursement', meta: '11 Jun 2026 • receipt review in progress', badge: { label: 'Pending', tone: 'warning' } }, { title: 'Travel expense Bangkok', meta: '06 Jun 2026 • finance approved', badge: { label: 'Approved', tone: 'success' } }]} /></SurfaceCard>
        </>
      );
    case '/claims/new':
      return <formContent title="Submit claim" description="Frontend starter form for a future API-connected claim workflow." />;
    case '/claims/sample-claim':
      return <detailContent title="Medical reimbursement" summary="THB 2,450 • submitted 11 Jun 2026" tone="warning" />;
    case '/policies':
      return <policyListContent />;
    case '/policies/code-of-conduct':
      return <detailContent title="Code of conduct" summary="Critical compliance policy requiring acknowledgment" tone="danger" />;
    case '/training':
      return (
        <>
          <Hero eyebrow="Training" title="Training assignments" description="Required learning, completion state, and future LMS integration points." />
          <div className="grid-2">
            <SurfaceCard title="Assignments"><ListBlock items={[{ title: 'Compliance foundation', meta: 'Due today • required', badge: { label: 'Overdue', tone: 'danger' } }, { title: 'Cybersecurity essentials', meta: 'Due in 4 days', badge: { label: 'In progress', tone: 'info' } }]} /></SurfaceCard>
            <DashboardCharts variant="employee" />
          </div>
        </>
      );
    case '/training/compliance-foundation':
      return <detailContent title="Compliance foundation" summary="eLearning + quiz" tone="danger" />;
    case '/directory':
      return <directoryContent />;
    case '/requests':
      return (
        <>
          <Hero eyebrow="Requests" title="Service requests" description="Current employee service requests with extendable workflow states." actions={<Link className="button" href="/requests/new">New request</Link>} />
          <SurfaceCard title="My requests"><ListBlock items={[{ title: 'Employment certificate', meta: 'Document request • waiting for HR assignment', badge: { label: 'Pending', tone: 'warning' } }, { title: 'Address update', meta: 'Profile change • completed by shared services', badge: { label: 'Completed', tone: 'success' } }]} /></SurfaceCard>
        </>
      );
    case '/requests/new':
      return <formContent title="Submit request" description="Service request starter form prepared for backend API integration." />;
    case '/requests/employment-certificate':
      return <detailContent title="Employment certificate" summary="Document request submitted 14 Jun 2026" tone="warning" />;
    case '/assistant':
      return <assistantContent />;
    case '/manager':
      return (
        <>
          <Hero eyebrow="Manager summary" title="Manager dashboard" description="Approvals, team risk, and action signals for people leaders." actions={<Link className="button" href="/team">Open team view</Link>} />
          <div className="stats-grid">
            <StatCard label="Approvals due" value="4" tone="warning" />
            <StatCard label="Open cases" value="2" tone="info" />
            <StatCard label="Overdue training" value="1" tone="danger" />
            <StatCard label="Sentiment" value="Positive" tone="success" />
          </div>
          <DashboardCharts variant="manager" />
        </>
      );
    case '/team':
      return <teamContent />;
    case '/team/ploy-ch':
      return <detailContent title="Ploy C." summary="Operations Analyst • Team member detail" tone="success" />;
    case '/hr-admin/policies':
    case '/hr-admin/announcements':
    case '/hr-admin/service-categories':
    case '/hr-admin/support-queue':
    case '/hr-admin/tickets/ticket-1007':
      return <operationsContent pathname={pathname} />;
    case '/admin/role-mappings':
    case '/admin/hr-assignments':
    case '/admin/access-control':
    case '/admin/audit-logs':
      return <adminContent pathname={pathname} />;
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

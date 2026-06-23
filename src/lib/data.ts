export type ExportRoute = {
  href: string;
  title: string;
  summary: string;
  audience: 'employee' | 'manager' | 'hr-admin' | 'super-admin';
};

// 🚀 ข้อมูลเมนูแบบจัดกลุ่มย่อย มีไอคอน และรองรับดรอปดาวน์ตามที่คุณต้องการ
export const navigationByScope = [
  {
    label: 'My workspace',
    items: [
      { href: '/', label: 'Home', icon: 'Home' },
      { href: '/profile', label: 'My Profile', icon: 'User' },
      { href: '/benefits', label: 'Benefits', icon: 'Heart' },
      { href: '/claims', label: 'Claims', icon: 'FileText' },
    ],
  },
  {
    label: 'Services',
    items: [
      { href: '/training', label: 'Learning', icon: 'GraduationCap' },
      { href: '/directory', label: 'Directory', icon: 'Users' },
      { href: '/requests', label: 'Requests', icon: 'Send' },
      { href: '/assistant', label: 'Assistant', icon: 'MessageSquare' },
    ],
  },
  {
    label: 'Leadership',
    items: [
      { href: '/manager', label: 'Manager Hub', icon: 'UserCheck' },
      { href: '/hr-admin/policies', label: 'HR Admin', icon: 'Briefcase', isDropdown: true },
      { href: '/admin/role-mappings', label: 'Admin Panel', icon: 'Settings', isDropdown: true },
    ],
  },
] as const;

// 🔒 ตัวแปร routes ตัวเดิมของระบบที่หน้าเพจต่างๆ เรียกใช้ (ห้ามหายเด็ดขาด)
export const routes: Record<string, ExportRoute> = {
  '/': { href: '/', title: 'Employee dashboard', summary: 'Primary self-service home for employees.', audience: 'employee' },
  '/profile': { href: '/profile', title: 'My Profile', summary: 'Employee profile, role, dates, and HR contact.', audience: 'employee' },
  '/benefits': { href: '/benefits', title: 'My Benefits', summary: 'Benefits summary and plan cards.', audience: 'employee' },
  '/claims': { href: '/claims', title: 'My Claims', summary: 'Reimbursement claims and status overview.', audience: 'employee' },
  '/claims/new': { href: '/claims/new', title: 'New Claim', summary: 'Create and submit a reimbursement claim.', audience: 'employee' },
  '/claims/sample-claim': { href: '/claims/sample-claim', title: 'Claim Details', summary: 'Claim timeline and reviewer status.', audience: 'employee' },
  '/policies': { href: '/policies', title: 'HR Policies', summary: 'Policy library and acknowledgment state.', audience: 'employee' },
  '/policies/code-of-conduct': { href: '/policies/code-of-conduct', title: 'Policy Details', summary: 'Detailed policy content and acknowledgment CTA.', audience: 'employee' },
  '/training': { href: '/training', title: 'My Training', summary: 'Training assignments and compliance view.', audience: 'employee' },
  '/training/compliance-foundation': { href: '/training/compliance-foundation', title: 'Training Details', summary: 'Training detail and launch module flow.', audience: 'employee' },
  '/directory': { href: '/directory', title: 'Directory', summary: 'People and HR contacts directory.', audience: 'employee' },
  '/requests': { href: '/requests', title: 'My Requests', summary: 'Employee HR requests and status list.', audience: 'employee' },
  '/requests/new': { href: '/requests/new', title: 'New Request', summary: 'Create a new HR service request.', audience: 'employee' },
  '/requests/employment-certificate': { href: '/requests/employment-certificate', title: 'Request Details', summary: 'Request timeline and assignment state.', audience: 'employee' },
  '/assistant': { href: '/assistant', title: 'HR Assistant', summary: 'Conversational HR assistant shell.', audience: 'employee' },
  '/manager': { href: '/manager', title: 'Manager Summary', summary: 'Approvals, risks, and team signals.', audience: 'manager' },
  '/team': { href: '/team', title: 'My Team', summary: 'Manager team hub with roster and compliance.', audience: 'manager' },
  '/team/ploy-ch': { href: '/team/ploy-ch', title: 'Team Member', summary: 'Team member detail and manager actions.', audience: 'manager' },
  '/hr-admin/policies': { href: '/hr-admin/policies', title: 'HR Policies Admin', summary: 'Policy ownership and acknowledgment monitoring.', audience: 'hr-admin' },
  '/hr-admin/announcements': { href: '/hr-admin/announcements', title: 'Announcements Admin', summary: 'Scheduled and published internal announcements.', audience: 'hr-admin' },
  '/hr-admin/service-categories': { href: '/hr-admin/service-categories', title: 'Service Categories', summary: 'HR routing categories and templates.', audience: 'hr-admin' },
  '/hr-admin/support-queue': { href: '/hr-admin/support-queue', title: 'Support Queue', summary: 'HR support work queue and ticket state.', audience: 'hr-admin' },
  '/hr-admin/tickets/ticket-1007': { href: '/hr-admin/tickets/ticket-1007', title: 'Ticket Details', summary: 'HR ticket detail and escalation context.', audience: 'hr-admin' },
  '/admin/role-mappings': { href: '/admin/role-mappings', title: 'Role Mappings', summary: 'User role mapping governance panel.', audience: 'super-admin' },
  '/admin/hr-assignments': { href: '/admin/hr-assignments', title: 'HR Assignments', summary: 'Coverage assignment and workload balancing.', audience: 'super-admin' },
  '/admin/access-control': { href: '/admin/access-control', title: 'Access Control', summary: 'Security configuration and access model.', audience: 'super-admin' },
  '/admin/audit-logs': { href: '/admin/audit-logs', title: 'Audit Logs', summary: 'Audit trails and export governance.', audience: 'super-admin' },
};

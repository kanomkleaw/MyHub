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

import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Employees',
    path: '/employees',
    icon: <Icon icon="clarity:employee-group-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Add Employee', path: '/employees/addEmployee' },
      { title: 'All Employees', path: '/employees/allEmployees' },
    ],
  },
  {
    title: 'Students',
    path: '/students',
    icon: <Icon icon="ph:student-light" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Add Student', path: '/students/addStudent' },
      { title: 'All Student', path: '/students/allStudent' },
    ],
  },
  {
    title: 'Parents',
    path: '/messages',
    icon: <Icon icon="raphael:parent" width="24" height="24" />,
  },

  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

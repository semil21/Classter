import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Classes',
    path: '/class',
    icon: <Icon icon="simple-icons:googleclassroom" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Add New Class', path: '/class/newClass' },
      { title: 'All Classes', path: '/class/allClasses' },
    ],
  },
  {
    title: 'Teacher',
    path: '/teacher',
    icon: <Icon icon="mdi:teacher" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Add New Teacher', path: '/employees/addTeacher' },
      { title: 'Teachers List', path: '/employees/allTeachers' },
    ],
  },
  {
    title: 'Students',
    path: '/students',
    icon: <Icon icon="ph:student-light" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Add New Student', path: '/students/addStudent' },
      { title: 'Student List', path: '/students/allStudent' },
    ],
  },

  {
    title: 'Parents',
    path: '/parents',
    icon: <Icon icon="raphael:parent" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Add New Parent', path: '/parents/addNewParent' },
      { title: 'Parents List', path: '/parents/parentsList' },
    ],
  },
  {
    title: 'Fee Details',
    path: '/feeDetail',
    icon: (
      <Icon
        icon="material-symbols:collections-bookmark-sharp"
        width="24"
        height="24"
      />
    ),
    submenu: true,
    subMenuItems: [
      { title: 'Add Fee Structure', path: '/feeDetail/addFees' },
      { title: 'Fee Structures ', path: '/feeDetail/feeStructure' },
    ],
  },
  // icon for fee collection
  // <Icon icon="fluent-mdl2:payment-card" width="24" height="24" />
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

export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Distributor',
    url: '/distributor',
    icon: 'fa fa-sitemap',
    children: [
      {
        name: 'Add Distributor',
        url: '/distributor/adddistributor',
        icon: 'fa fa-plus-circle'
      },
      {
        name: 'Manage Distributor',
        url: '/distributor/managedistributor',
        icon: 'fa fa-th-large'
      },
    ]
  },
  {
    name: 'Companies',
    url: '/companies',
    icon: 'fa fa-building',
    children: [
      {
        name: 'Add Company',
        url: '/companies/addcompany',
        icon: 'fa fa-plus-circle',
      },
      {
        name: 'Manage Company',
        url: '/companies/managecompany',
        icon: 'fa fa-th'
      },
      {
        name: 'Bulk Upload',
        url: '/companies/companybulkupload',
        icon: 'fa fa-upload'
      },
    ]
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'fa fa-users',
    children: [
      {
        name: 'Add User',
        url: '/users/adduser',
        icon: 'fa fa-plus-circle'
      },
      {
        name: 'Manage User',
        url: '/users/manageuser',
        icon: 'fa fa-user'
      },
      {
        name: 'Bulk Upload',
        url: '/users/userbulkupload',
        icon: 'fa fa-upload'
      },
    ]
  },
  {
    name: 'Access',
    url: '/access',
    icon: 'fa fa-dot-circle-o',
    children: [
      {
        name: 'Send',
        url: '/access/accesssend',
        icon: 'fa fa-long-arrow-left'
      },
      {
        name: 'Receive',
        url: '/access/accessreceive',
        icon: 'fa fa-long-arrow-right'
      },
    ]
  },
  {
    name: 'Group',
    url: '/group',
    icon: 'fa fa-table',
    children: [
      {
        name: 'Create Group',
        url: '/group/creatgroup',
        icon: 'fa fa-table'
      },
      {
        name: 'Bulkupload',
        url: '/group/groupbulkupload',
        icon: 'fa fa-upload'
      },
    ]
  },
  {
    name: 'Inventory',
    url: '/inventory',
    icon: 'fa fa-th-large',
    children: [
      {
        name: 'Add Product',
        url: '/inventory/addproduct',
        icon: 'fa fa-plus-circle'
      },
      {
        name: 'Manage Product',
        url: '/inventory/manageproduct',
        icon: 'fa fa-th-large'
      },
    ]
  },
  {
    name: 'Events',
    url: '/events/addevents',
    icon: 'fa fa-calendar',
    badge: {
      variant: 'info',
      text: 'NEW',
    }
    // children: [
    //   {
    //     name: 'Add Events',
    //     url: '/events/addevents',
    //     icon: 'fa fa-plus-circle'
    //   },
    // ]
  },
  {
    name: 'Setup Devices',
    url: '/setupdevices',
    icon: 'fa fa-desktop',
    children: [
      {
        name: 'Add Devices',
        url: '/setupdevices/adddevices',
        icon: 'fa fa-plus-circle'
      },
      {
        name: 'Manage Devices',
        url: '/setupdevices/managedevices',
        icon: 'fa fa-th-large'
      },
    ]
  },
  {
    name: 'Sales',
    url: '/sales',
    icon: 'fa fa-signal',
    children: [
      {
        name: 'Add Order',
        url: '/sales/addorder',
        icon: 'fa fa-cart-plus'
      },
      {
        name: 'Order History',
        url: '/sales/orderhistory',
        icon: 'fa fa-history'
      },
    ]
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'fa fa-cogs',
    children: [
      {
        name: 'License',
        url: '/settings/license',
        icon: 'fa fa-list-alt'
      }
    ]
  },
  {
    name: 'Reports',
    url: '/charts',
    icon: 'fa fa-file-text-o'
  },
  {
    name: 'Logout',
    url: '/logout',
    icon: 'fa fa-sign-out'
  },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];

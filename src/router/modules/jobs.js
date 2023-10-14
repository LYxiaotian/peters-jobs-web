// 导入组件
const Layout = () => import('@/layout/index.vue')
const addCustomer = () => import('@/views/job/addCustomer.vue')
const customers = () => import('@/views/job/customers.vue')
const customReminds = () => import('@/views/job/customRemind.vue')

// 导出该组件
export default([
  {
    path: "/custom",
    component: Layout,
    name: 'customer',
    meta: {
      title: '客户管理',
    },
    icon: 'Location',
    children: [
      {
        path: '/add',
        name: 'addCustomer',
        component: addCustomer,
        meta: {
          title: '添加客户信息',
        },
        hidden: false
      },
      {
        path: '/getCustomers',
        name: 'customers',
        component: customers,
        meta: {
          title: '我的客户列表',
        },
        hidden: false
      }
    ]
  },{
    path: "/custom_remind",
    component: Layout,
    name: 'reminds',
    meta: {
      title: '提醒列表',
    },
    icon: 'Location',
    children: [
      {
        path: '/getCustomReminds',
        name: 'customReminds',
        component: customReminds,
        meta: {
          title: '工作提醒列表',
        },
        hidden: false
      }
    ]
  },{
    path: "/custom",
    component: Layout,
    name: 'Customer',
    meta: {
      title: '系统设置',
    },
    icon: 'Location'
  }
])
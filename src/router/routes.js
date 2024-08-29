
const routes = [
  {
    path: '/supply',
    children:[
      { path:'', component: () => import('layouts/SupplyLyt.vue') },
      { path:':oid', component: () => import('layouts/Supply.vue') }
    ]
  },
  {
    path: '/checkout',
    children:[
      { path:'', component: () => import('layouts/CheckoutLyt.vue') },
      { path:':oid', component: () => import('layouts/Checkout.vue') }
    ]
  },
  {
    path: '/checkin',
    children:[
      // { path:'', component: () => import('layouts/CheckInLyt.vue') },
      { path:':oid', component: () => import('layouts/CheckInLyt.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLyt.vue'),
  },
  {
    path: '/entries',
    component: () => import('layouts/Entries.vue'),
    children:[
      { path:'/compare', component: () => import('pages/Comparativo/Compare.vue') },
      { path:'/automate', component: () => import('pages/Automatico/Automate.vue') }
    ]
  },

  {
    path: '/texas',
    component: () => import('layouts/Texas/Index.vue'),
    // children:[
      // { path:'/compare', component: () => import('pages/Comparativo/Compare.vue') },
      // { path:'/automate', component: () => import('pages/Automatico/Automate.vue') }
    // ]
  },
]

export default routes

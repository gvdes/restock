
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
]

export default routes

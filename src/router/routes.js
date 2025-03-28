
const routes = [
  {
    path: '/barcode',
    children:[
      { path:'', component: () => import('layouts/CBcompare.vue'),name:'Revision CB' },
      { path:':id', component: () => import('layouts/checkCB.vue') },

    ]
  },
  {
    path: '/supply',
    children:[
      { path:'', component: () => import('layouts/SupplyLyt.vue'),name:'Surtido' },
      { path:':oid', component: () => import('layouts/Supply.vue') }
    ]
  },
  {
    path: '/',
    children:[
      { path:'', component: () => import('layouts/Launcher.vue') },
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
    component: () => import('layouts/DashboardLyt.vue'),name:'dashboard',
  },

  {
    path: '/entries',
    component: () => import('layouts/Entries.vue'),
    name:'Reporte',
    children:[
      { path:'/compare', component: () => import('pages/Comparativo/Compare.vue') },
      { path:'/automate', component: () => import('pages/Automatico/Automate.vue') },
      { path:'/texas', component: () => import('pages/Automatico/Texcoco.vue') },
      { path:'/report', component: () => import('pages/Comparativo/Report.vue') },
      // { path:'/stocks', component: () => import('pages/Stocks/Stocks.vue') },
      { path:'/stocks', component: () => import('pages/modification/modificatio.vue') },

    ]
  },

  // {
  //   path: '/texas',
  //   component: () => import('layouts/Texas/Index.vue'),
  //   // children:[
  //     // { path:'/compare', component: () => import('pages/Comparativo/Compare.vue') },
  //     // { path:'/automate', component: () => import('pages/Automatico/Automate.vue') }
  //   // ]
  // },
]

export default routes

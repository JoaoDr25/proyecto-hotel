const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('pages/PageIndex.vue') },
      { path: 'habitaciones', name: 'habitaciones', component: () => import('pages/PageHabitaciones.vue') },
      { path: 'deportes', name: 'deportes', component: () => import('pages/PageDeportes.vue') },
      { path: 'gastronomia', name: 'gastronomia', component: () => import('pages/PageGastronomia.vue') },
      { path: 'servicios', name: 'servicios', component: () => import('pages/PageServicios.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes


var routes = [
  import HomePage from '../pages/home';
  import DashboardPage from '../pages/dashboard';
 {
    path: '/',
    component: DashboardPage,
  },
  {
    path: '/login/',
    // component: LoginPage, // Assuming component will be added later
  },
  {
    path: '/dashboard/', component: DashboardPage,
  },
  {
    path: '/opportunities/',
  },
  {
    path: '/add-opportunity/',
  },
  {
    path: '/modify-opportunity/',
  },
  {
    path: '/user-setup/',
    component: UserSetupPage,
  },
  {
    path: '/app-setup/',
    component: AppSetupPage,
  },
  {
    path: '/opportunities-workflow/',
    component: OpportunitiesWorkflowPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;

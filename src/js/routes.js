
var routes = [
 import OpportunitiesPage from '../pages/opportunities';
 import AddOpportunityPage from '../pages/add-opportunity';
 import ModifyOpportunityPage from '../pages/modify-opportunity';
 import NotFoundPage from '../pages/404.jsx';
 import LoginPage from '../pages/login';
 import DashboardPage from '../pages/dashboard';
import PerformancePage from '../pages/performance';
 import UserSetupPage from '../pages/user-setup.jsx';
 import AppSetupPage from '../pages/app-setup.jsx';
 import OpportunitiesWorkflowPage from '../pages/opportunities-workflow.jsx';
 import AboutThisAppPage from '../pages/about-this-app.jsx';
import MonthlyTargetPage from '../pages/monthly-target';
import PerformanceReportPage from '../pages/performance-report';
  {
    path: '/',
    component: DashboardPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
 {
    path: '/dashboard/', component: DashboardPage,
  },
  {
    path: '/opportunities/',
    component: OpportunitiesPage,
  },
  {
    path: '/add-opportunity/',
    component: AddOpportunityPage,
  },
  {
    path: '/modify-opportunity/',
    component: ModifyOpportunityPage,
  },
 {
    path: '/performance/',
 component: PerformancePage,
  },
 {
    path: '/monthly-target/',
 component: MonthlyTargetPage,
  },
 {
    path: '/performance-report/',
 component: PerformanceReportPage,
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
    path: '/about-this-app/',
 component: AboutThisAppPage,
  },
];

export default routes;

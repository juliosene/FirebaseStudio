// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
// New page imports
import OpportunitiesPage from '../pages/opportunities.jsx';
import AddNewOpportunityPage from '../pages/add-new-opportunity.jsx';
import ModifyOpportunityPage from '../pages/modify-opportunity.jsx';
import PerformancePage from '../pages/performance.jsx';
import MonthlyTargetDefinitionPage from '../pages/monthly-target-definition.jsx';
import PerformanceReportPage from '../pages/performance-report.jsx';
import AboutThisAppPage from '../pages/about-this-app.jsx';

import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.jsx';

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));


const leftPanel = f7.panel.create({
  el: '.panel-left',
  resizable: true,
  visibleBreakpoint: 960,
  on: {
    open() {
      console.log('Left panel open');
    },
    close() {
      console.log('Left panel close');
    },
  },
});



const menuItems = [
  {
    title: 'User Setup',
    icon: 'person-fill',
    path: '/user-setup/',
  },
  {
    title: 'App Setup',
    icon: 'gear-fill',
    path: '/app-setup/',
  },
  {
    title: 'Opportunities Workflow',
    icon: 'list-task',
    path: '/opportunities-workflow/',
  },
  {
    title: 'About This App',
    icon: 'info-circle-fill',
    path: '/about-app/',
  },
];

const menuList = document.getElementById('left-menu-list');

menuItems.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="${item.path}" class="panel-close list-button">${item.title} <i class="f7-icons">${item.icon}</i></a>`;
  menuList.appendChild(listItem);
});
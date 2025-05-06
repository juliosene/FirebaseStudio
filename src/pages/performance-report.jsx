import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

const PerformanceReportPage = () => {
  return (
    <Page>
      <Navbar title="Performance Report" />
      <Block>
        <p>This is the Performance Report Page.</p>
        <p>Here you will see the details about the performance report.</p>
      </Block>
    </Page>
  );
};

export default PerformanceReportPage;
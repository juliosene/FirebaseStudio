import React from 'react';
import { Page, Navbar, Link, Block } from 'framework7-react';

const PerformancePage = () => {
  return (
    <Page>
      <Navbar title="Performance Page" />
      <Block strong>
        <p>Welcome to the Performance Page.</p>
        <p>
          <Link href="/monthly-target/">Go to Monthly Target Definition Page</Link>
        </p>
        <p>
          <Link href="/performance-report/">Go to Performance Report Page</Link>
        </p>
      </Block>
    </Page>
  );
};

export default PerformancePage;
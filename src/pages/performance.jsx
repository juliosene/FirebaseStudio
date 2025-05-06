jsx
import React from 'react';
import {
  Page,
  List,
  ListItem,
  BlockTitle,
} from 'framework7-react';

const PerformancePage = () => {
  return (
    <Page>
      <BlockTitle>Performance</BlockTitle>
      <List mediaList>
        <ListItem title="Monthly Target" link="/monthly-target/"/>
        <ListItem title="Performance Report" link="/performance-report/"/>
      </List>
    </Page>
  );
};
export default PerformancePage;
import React from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';

const AddNewOpportunityPage = () => {
  return (
    <Page>
      <Navbar title="Add New Opportunity" />
      <Block strong>
        <p>This is the Add New Opportunity page.</p>
        <p>You can add a new opportunity here.</p>
      </Block>
    </Page>
  );
};

export default AddNewOpportunityPage;
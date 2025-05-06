import React from 'react';
import { Page, Navbar, Link, Block } from 'framework7-react';

const OpportunitiesPage = () => {
  return (
    <Page>
      <Navbar title="Opportunities" />
      <Block strong>
        <p>
          <Link href="/add-opportunity/">Add New Opportunity</Link>
        </p>
        <p>
          <Link href="/modify-opportunity/">Modify an Opportunity</Link>
        </p>
      </Block>
    </Page>
  );
};

export default OpportunitiesPage;
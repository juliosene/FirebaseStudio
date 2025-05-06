import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

const AboutThisAppPage = () => {
  return (
    <Page>
      <Navbar title="About This App" />
      <Block>
        <p>This is the About This App page.</p>
        <p>Here you can add information about your application, such as version details, contact information, or a brief description of its purpose.</p>
      </Block>
    </Page>
  );
};

export default AboutThisAppPage;
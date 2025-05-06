import React from 'react';
import {
  Page,
  Block,
  Navbar
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Firebase7</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
 <NavTitleLarge>Dashboard</NavTitleLarge>
    </Navbar>

    {/* Page content */}
  </Page>
);
export default HomePage;
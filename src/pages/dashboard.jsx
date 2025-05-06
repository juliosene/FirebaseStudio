jsx
import React from 'react';
import {
  Page,
  Block,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  NavTitleLarge,
  Link
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
    <Block>Hello world</Block>
    {/* Page content */}
    <div>
      hello
    </div>
    <div>world</div>
  </Page>
);
export default HomePage;
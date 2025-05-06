import React, { useState, useEffect } from 'react';
import { getDevice }  from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';

import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'Firebase7', // App name
      theme: 'auto', // Automatic theme detection
      colors: {
        primary: '#294516',
      },
      darkMode: true,


      // App store
      store: store,
      // App routes
      routes: routes,

      // Register service worker (only on production build)
      serviceWorker: process.env.NODE_ENV ==='production' ? {
        path: '/service-worker.js',
      } : {},

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova,
        scrollIntoViewCentered: device.cordova,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
  };
  const alertLoginData = () => {
  }
  f7ready(() => {
 // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>

        {/* Left panel with cover effect*/}
        <Panel left cover dark>
          <View>
            <Page>
              <Navbar title="Menu"/>
              <List strongIos dividersIos outlineIos>
                <ListItem link="/user-setup/" title="User Setup" view="#view-dashboard" panelClose icon="f7:person_fill"></ListItem>
                <ListItem link="/app-setup/" title="App Setup" view="#view-dashboard" panelClose icon="f7:gear_fill"></ListItem>
                <ListItem link="/opportunities-workflow/" title="Opportunities Workflow" view="#view-dashboard" panelClose icon="f7:list_task"></ListItem>
                <ListItem link="/about-this-app/" title="About This App Page" view="#view-dashboard" panelClose></ListItem>
              </List>
              <Block>
                Left Menu List
              </Block>
            </Page>
          </View>
        </Panel>


 {/* Views container */}
        <Views className="safe-areas">

 {/* Dashboard View */}
 <View id="view-dashboard" main url="/dashboard/" />

 {/* Top toolbar for main navigation */}
 <Toolbar top>
            <Link iconIos="f7:house_fill" iconMd="material:home" text="Home" href="/dashboard/"/>
            <Link iconIos="f7:square_list_fill" iconMd="material:business_center" text="Opportunities" href="/opportunities/"/>
            <Link iconIos="f7:chart_bar_fill" iconMd="material:assessment" text="Performance" href="/performance/"/>
          </Toolbar>

        </Views>

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;
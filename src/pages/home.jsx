import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListInput,
  Button,
  f7
} from 'framework7-react';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, you would validate credentials here
    console.log('Attempting login with:', username, password);
    // For now, just navigate to the dashboard on button click
    f7.views.main.router.navigate('/dashboard/');
  };

  return (
    <Page noNavbar noToolbar noSwipeback loginScreen>
    {/* Top Navbar */}
    {/* Page content */}
    <BlockTitle>Login</BlockTitle>
    <List form>
      <ListInput type="text" name="username" placeholder="Your username" value={username} onInput={(e) => setUsername(e.target.value)}></ListInput>
      <ListInput type="password" name="password" placeholder="Your password" value={password} onInput={(e) => setPassword(e.target.value)}></ListInput>
    </List>
    <Block>
      <Button fill onClick={handleLogin}>Sign In</Button>
    </Block>
      </Page>
  );
};
export default HomePage;
    <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
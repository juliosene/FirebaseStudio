jsx
import React, { useState } from 'react';
import {
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  f7
} from 'framework7-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
    
  };

  return (
    <LoginScreen id="my-login-screen">
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
        <ListButton title="Sign In" onClick={handleSignIn} />
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </List>
    </LoginScreen>
  );
};

export default LoginPage;
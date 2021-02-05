import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link, } from "@material-ui/core";
import api, { apikeys } from "../services/api";

type ILoginStatus = { isLoggedIn: boolean, isError: boolean, error: Error | undefined };

export const Login = () => {
  const [email, setEmail] = useState('a@a.com');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<ILoginStatus>({ isLoggedIn: false, isError: false, error: undefined });
  const handleSubmit = () => {
    api.login(email, password).then(res => {
      const { token } = res;
      setLoginStatus(e => ({ isLoggedIn: true, isError: false, error: undefined }));
      apikeys.accessToken = token;
      console.log(token);

    }).catch((e) => {
      setLoginStatus({ isLoggedIn: false, isError: true, error: e });
    })
  };

  if (loginStatus.isLoggedIn)
    return <Redirect to='/showlists' />

  const submitEnabled = () => !(email && password);

  const handlePasswordKeyDown: React.KeyboardEventHandler = (e) => { e.key === 'Enter' && submitEnabled && handleSubmit() }

  return (
    <div>
      <form>
        <TextField
          style={{ margin: 5 }}
          type="email"
          label="Email"
          name="username"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <br />

        <TextField
          style={{ margin: 5 }}
          type="password"
          label="Password"
          name="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handlePasswordKeyDown}
          required
          autoFocus
        />
        <br />
        <Button style={{ margin: 5 }} variant="outlined" onClick={handleSubmit} disabled={submitEnabled()} >Login</Button>
        <br />
        {loginStatus.isError && <div>{loginStatus.error?.toString()}</div>}
      </form>
    </div>

  );
}
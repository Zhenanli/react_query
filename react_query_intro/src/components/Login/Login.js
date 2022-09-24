import { useRef, useState, useEffect } from 'react';
// import AuthContext from './context/AuthProvider';
import React from 'react';

import { Button, Form, Stack, TextInput } from '@carbon/react';
// import axios from './api/axios';
// const LOGIN_URL = '/auth';

const Login = () => {
  //   const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async e => {
    e.preventDefault();
    setUser('');
    setPwd('');
    setSuccess(true);
    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   //console.log(JSON.stringify(response));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ user, pwd, roles, accessToken });
    //   setUser('');
    //   setPwd('');
    //   setSuccess(true);
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('Missing Username or Password');
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorized');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
    // }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive">
            {errMsg}
          </p>
          <h3>Sign In</h3>

          <Form onSubmit={handleSubmit}>
            <Stack gap={7}>
              <TextInput
                helperText="Key in username to login"
                id="username"
                required
                warnText="username required to login"
                invalidText="Invalid error message."
                labelText="Username"
                placeholder="username@email.com"
                ref={userRef}
                onChange={e => setUser(e.target.value)}
                value={user}
              />
              <Button
                className="login-button"
                kind="primary"
                tabIndex={0}
                type="submit">
                Login
              </Button>

              {/* <InlineNotification
                  actionButtonLabel="login-button"
                  ariaLabel="closes notification"
                  onClose={function noRefCheck() {}}
                  onCloseButtonClick={function noRefCheck() {}}
                  statusIconDescription="Login result"
                  subtitle="successfully"
                  title="Login"
                /> */}
            </Stack>
          </Form>

          {/* <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form> */}
        </section>
      )}
    </>
  );
};

export default Login;

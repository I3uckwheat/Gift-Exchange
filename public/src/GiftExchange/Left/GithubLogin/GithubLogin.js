import React from 'react';
import githubImg from './github-logo.png';

import Classes from './GithubLogin.css';

const GithubLogin = props => (
  <a href="/api/auth/github" className={Classes.GithubLogin}>
    <img src={githubImg} className={Classes.GithubLogin}/>
  </a>
);

export default GithubLogin;

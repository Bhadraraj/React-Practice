import React, { useState } from 'react';

import LogoutButton   from './LogoutButton';
import LoginButton from './LoginButton'
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const Greeting = ({ isLoggedIn }) => {
    return <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h2>;
  };

  const LoginButton = ({ onClick }) => {
    return <button onClick={onClick}>Login</button>;
  };

  const LogoutButton = ({ onClick }) => {
    return <button onClick={onClick}>Logout</button>;
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default LoginControl;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Get access to history object

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here, if successful navigate to the MapPage
    // For now, just navigate without authentication
    history.push('/map'); // Navigate to the '/map' route
  };

  const formStyles = {
    backgroundImage: 'url("https://1.bp.blogspot.com/-2pislkIdd1Q/XZzWrCwK0eI/AAAAAAAD5GU/h2gvG7-1IZ8_sSZ0MXM1Ol6jEkGAAy94ACLcBGAsYHQ/s1600/55.png")',
    backgroundImage:'fit',
    backgroundRepeat: 'no-repeat',
    padding: '100px',
    borderRadius: '5px',
    maxWidth: '2000px',
    margin: 'auto',
  };

  const inputStyles = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyles = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          style={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={inputStyles}
        />
      </div>
      <button type="submit" style={buttonStyles}>Login</button>
    </form>
  );
};

export default LoginForm;

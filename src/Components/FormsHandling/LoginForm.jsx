import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError,setUserError]=useState("")
  const [passError,setPassError]=useState("")

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if(!username ){
      setUserError("This field is required")      
    }
    if(!password){
      setPassError('Password is required')      
    }
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            
          />
          {userError&& <p style={{color:"red",width:'100%',textAlign:'right'}}>{userError}</p> }
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            
          />
           {passError&& <p style={{color:"red",width:'100%',textAlign:'right'}}>{passError}</p> }
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: 'black',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Login
        </button>
        <div style={{marginTop:'30px'}}>
        {username&&<h3>Name:{username}</h3>}
       {password && <h3>Password: {password}</h3>}
       </div>
      </form>
    </div>
  );
};

export default LoginForm;

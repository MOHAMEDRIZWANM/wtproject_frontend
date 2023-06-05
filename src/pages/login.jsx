import React, { useState} from 'react';
import "../css/login.css"
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
function LoginPage() {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate=useNavigate();


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://laptopservice.onrender.com/user/${email}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(res => res.json())
          .then(data => {
            if(data?.email===email){
                navigate('/home');
            }
            else{
                alert('Not found');
            }
            console.log(data)
          })
          .catch(err => console.log(err));
    };

    return (

        <div id="login-container">
            <h1>Login</h1>
            <form className='lo'>
                <label for="usermail">Usermail:</label>
                <input type="text" name="username" required placeholder='Email' onChange={handleUsernameChange}/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required  placeholder='Password' onChange={handlePasswordChange}/>
                    <a href="#">Forgot password?</a><br/><br/>
                    <div className='gap'>
                    <input type="submit" value="Login" onClick={handleSubmit}/>
                    <Link to ="/sign"><input type='button' value="Singin"/></Link>
                    </div>
             </form>
            </div>

    );
}

export default LoginPage

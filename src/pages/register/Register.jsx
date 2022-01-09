import './register.css';

const Register = () => {
    return (
        <div className='register'>
            <span className="loginTitle">Register</span>
            <form className='registerForm'>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder='enter your username...'/>
                <label>Email</label>
                <input type="email" className="registerInput" placeholder='enter your email...'/>
                <label>password</label>
                <input type="password" className="registerInput" placeholder='enter your password...'/>
                <button className="loginButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}

export default Register

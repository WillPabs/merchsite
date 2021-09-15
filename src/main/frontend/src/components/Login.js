const Login = () => {
    return (
        <div className="login-form">
            <form>
                <h2>Sign In</h2>
                <div className="login-form-control">
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="login-form-control">
                    <input 
                        type="text"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <input type="submit" value="Login" className="submit"/>
            </form>
        </div>
    )
}

export default Login
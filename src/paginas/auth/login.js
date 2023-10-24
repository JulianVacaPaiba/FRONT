import React from "react";
import { Link } from "react-router-dom";
const Login=() =>{
    return(
      <center>
    <div className="login-box">
  <div className="login-logo">
  <div class="card-header text-center">
    <Link to={"#"}><b>INICIA</b>  SESION</Link>
</div>
  </div>
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienvenidos por favor inicia secion</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <Link to={"#"}>I forgot my password</Link>
      </p>
      <p className="mb-0">
        <Link to={"#"} className="text-center">Register a new membership</Link>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</center>
)
}
export default Login;
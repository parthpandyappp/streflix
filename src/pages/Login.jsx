import { useState } from "react";
import { useAuth } from "../contexts";
import { loginHandler } from "../helper-functions";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { boolFunc } = useAuth();
  const navigate = useNavigate();
  const [pass, setPass] = useState("gkool");
  const [email, setEmail] = useState("gkool@neog.camp");

  return (
    <div className="center-hv">
      <div className="auth-form">
        <form
          onSubmit={(e) => loginHandler(e, boolFunc, email, pass, navigate)}
        >
          <h2>Login</h2>
          <div className="inp-unit">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value="johnsangram@gkool.com"
              placeholder="johnsangram@gkool.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inp-unit">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              value="thisismyloginimplementation"
              placeholder="**********"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="inp-unit">
            <button className="btn btn-primary login-btn">Login</button>
            <div className="text-center">
              <input type="checkbox" id="rem-me" name="rem-me" />
              <label htmlFor="rem-me">Remember me</label>
            </div>
          </div>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup" className="underline">
                {" "}
                Sign up?
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export { Login };

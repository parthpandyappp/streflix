import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="center-hv">
      <div className="auth-form">
        <form>
          <h2>Sign up</h2>
          <div className="inp-unit">
            <label htmlFor="email">Name</label>
            <input type="text" name="email" placeholder="johnsangram" />
          </div>
          <div className="inp-unit">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnsangram@gkool.com"
            />
          </div>
          <div className="inp-unit">
            <label htmlFor="email">Password</label>
            <input type="password" name="email" placeholder="**********" />
          </div>

          <div className="inp-unit">
            <label htmlFor="email">Confirm Password</label>
            <input type="password" name="Password" placeholder="**********" />
          </div>

          <div className="inp-unit">
            <button className="btn btn-primary login-btn">Sign Up</button>
          </div>
          <p>
            Already have an account?
            <span>
              <Link to="/login" className="underline">
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export { Signup };

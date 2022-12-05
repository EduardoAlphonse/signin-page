export default function App() {
  return (
    <div>
      <main>
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>

        <div>
          <form>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter your email" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter your email" />
            </label>

            <div>
              <label>
                <input type="checkbox" name="rememberLogin" />
                <span>Remember for 30 days</span>
              </label>

              <a href="#">Forgot password</a>
            </div>

            <button type="submit">Sign In</button>
          </form>
          <button>Sign in with Google</button>

          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </main>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

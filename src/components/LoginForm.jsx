import React, { useState } from "react";

function LoginForm({ login }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default LoginForm;

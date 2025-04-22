import React from "react";

function Welcome({ user, logout, setUserInfo }) {
  const updateInfo = () => {
    const email = prompt("Nhập email mới:");
    if (email) {
      setUserInfo({ email });
    }
  };

  return (
    <div className="welcome">
      <h2>Chào mừng, {user.name}!</h2>
      {user.email && <p>Email: {user.email}</p>}
      <button onClick={updateInfo}>Cập nhật email</button>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}

export default Welcome;

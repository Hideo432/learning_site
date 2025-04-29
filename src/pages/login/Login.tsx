import { useState } from "react";
import "./login.css";
import LoginComponent from "../../components/loginComponent/LoginComponent";
import RegisterComponent from "../../components/register/Register";

type Status = "login" | "register";

export default function Login() {
  const [loginStatus, setLoginStatus] = useState<Status>("login");
  const loginBtn = () => {
    setLoginStatus("login");
  };
  const registerBtn = () => {
    setLoginStatus("register");
  };
  return (
    <section className="login-section">
      <aside className="login-section-aside">
        <img src="/src/assets/images/login-img.png" alt="" />
      </aside>
      <main className="login-section-main">
        <p style={{ marginLeft: 139, paddingBottom: 24, paddingTop: 107 }}>
          Welcome to lorem
        </p>
        <div
          style={{
            marginLeft: 53,
            backgroundColor: "#49BBBD60",
            width: 329,
            height: 59,
            display: "flex",
            justifyContent: "center",
            gap: 96,
            position: "relative",
            borderRadius: 30,
          }}
        >
          <span
            className={`login_span-activeBtn ${
              loginStatus === "register" ? "login-button-r" : null
            }`}
          ></span>

          <button onClick={() => loginBtn()} className="login-toggle-btn">
            Login
          </button>

          <button onClick={() => registerBtn()} className="login-toggle-btn">
            Register
          </button>
        </div>
        {loginStatus === "login" ? (
          <LoginComponent></LoginComponent>
        ) : (
          <RegisterComponent></RegisterComponent>
        )}
      </main>
    </section>
  );
}

import { useState } from "react";

export default function RegisterComponent() {
  const [hidePassword, setHidePassword] = useState(true);
  const hidePasswordFunc = () => {
    return setHidePassword(!hidePassword);
  };
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-form">
      <p
        style={{
          marginBottom: 42,
          color: "#5B5B5B",
          fontSize: 16,
          lineHeight: 2,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
        industry.
      </p>
      <label className="login_form-label" htmlFor="user-email">
        Email Address
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInterval(() => {
            setEmail(e.target.value);
          }, 1000);
        }}
        className="login-input"
        id="user-email"
        type="text"
        placeholder="Enter your Email Address"
      ></input>
      <label className="login_form-label" htmlFor="user-name">
        User name
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInterval(() => {
            setLogin(e.target.value);
          }, 1000);
        }}
        className="login-input"
        id="user-name"
        type="text"
        placeholder="Enter your User name"
      ></input>
      <label className="login_form-label" htmlFor="user-password">
        Password
      </label>
      <div style={{ position: "relative" }}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInterval(() => {
              setPassword(e.target.value);
            }, 1000);
          }}
          className="login-input"
          id="user-password"
          type={`${hidePassword === true ? "password" : "text"}`}
          placeholder="Enter your Password"
        ></input>
        <img
          style={{
            position: "absolute",
            top: 20,
            right: 28,
            width: 18,
            height: 15.5,
          }}
          onClick={() => hidePasswordFunc()}
          src={`${
            hidePassword === true
              ? "/src/assets/icons/hidePassword.png"
              : "/src/assets/icons/showPassword.svg"
          }`}
          alt=""
        />
      </div>
      <div style={{ position: "relative" }}>
        <button className="login-loginBtn">Login</button>
      </div>
    </form>
  );
}

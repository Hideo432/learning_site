import { useEffect, useState } from "react";

export default function LoginComponent() {
  const [hidePassword, setHidePassword] = useState(true);
  const hidePasswordFunc = () => {
    return setHidePassword(!hidePassword);
  };
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [loginRem, setLoginRem] = useState(false);
  const rememberLogin = (password: string, userName: string) => {
    if ((password && login) !== null || "") {
      localStorage.setItem("password", password);
      localStorage.setItem("userName", userName);
      console.log(localStorage.getItem("password"));
      console.log(localStorage.getItem("userName"));
    } else {
      console.log("err");
    }
  };
  useEffect(() => {
    console.log(login, password);
  }, [login, password]);
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

      <label className="login_form-label" htmlFor="user-name">
        User name
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setLogin(e.target.value);
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
            setPassword(e.target.value);
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <span>
            <input
              id="checkbox-input"
              className="custom-checkbox-input"
              type="checkbox"
            ></input>
            <label
              onClick={() => {
                setLoginRem(!loginRem);
                if (loginRem !== false) {
                  rememberLogin;
                } else null;
              }}
              className="custom-checkBox-label"
              htmlFor="checkbox-input"
            ></label>
          </span>
          <p
            style={{
              position: "relative",
              left: 30,
              fontWeight: 400,
              lineHeight: 2.4,
              fontSize: 12,
            }}
          >
            Remember me
          </p>
        </div>
        <p style={{ fontWeight: 400, lineHeight: 2.4, fontSize: 12 }}>
          Forgot password?
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <button className="login-loginBtn">Login</button>
      </div>
    </form>
  );
}

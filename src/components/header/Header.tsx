import { Link } from "react-router-dom";
import "./header.css";
import { BLOG, CAREERS, COURSES, HOMEPAGE, LOGIN } from "../../paths/Paths";
import { useEffect, useState } from "react";
type Theme = "blue" | "white";
interface Props {
  fon: Theme;
}

export default function Header({ fon }: Props) {
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");
  const [signIn, setSignIn] = useState(false);
  useEffect(() => {
    fetch("/src/db/user.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const { login, picture } = data[0];
        setUserName(login);
        setImg(picture);
        setSignIn(true);
        console.log(login);
      });
  }, []);
  return (
    <header
      className={`header ${
        fon != "white" ? "noFon text-white" : "fon text-light_black"
      }`}
    >
      <div className="logo">
        <img
          src={`${
            fon != "white"
              ? "/src/assets/icons/logo_white.png"
              : "/src/assets/icons/logo_black.png"
          }`}
          className="img__logo"
        ></img>
      </div>
      <nav className="nav">
        <div className="nav__tools">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                style={{
                  textDecoration: "none",
                  color: `${fon == "blue" ? "#fff" : "#000"}`,
                }}
                to={HOMEPAGE}
              >
                home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{
                  textDecoration: "none",
                  color: `${fon == "blue" ? "#fff" : "#000"}`,
                }}
                to={COURSES}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  textDecoration: "none",
                  color: `${fon == "blue" ? "#fff" : "#000"}`,
                }}
                to={CAREERS}
              >
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  textDecoration: "none",
                  color: `${fon == "blue" ? "#fff" : "#000"}`,
                }}
                to={BLOG}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  textDecoration: "none",
                  color: `${fon == "blue" ? "#fff" : "#000"}`,
                }}
                to={COURSES}
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
        {signIn === false ? (
          <div className="login">
            <Link
              style={{ textDecoration: "none" }}
              to={LOGIN}
              className="login-btn"
            >
              Login
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={LOGIN}
              className="signUp-btn"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div>
            <div>
              <img src={img} alt="" />
            </div>
            <span>{userName}</span>
          </div>
        )}
      </nav>
    </header>
  );
}

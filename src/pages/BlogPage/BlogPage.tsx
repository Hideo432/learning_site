import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { COLORS } from "../../colors";
import "./blogPage.css";
import { Link } from "react-router-dom";
import { COURSES } from "../../paths/Paths";
import BlogList from "./blog-list/BlogList";
export default function BlogPage() {
  return (
    <section className="blogPage_section">
      <Header fon={"white"}></Header>
      <div className="blogPage_wrapper">
        <div style={{ display: "flex", gap: 176, marginBottom: 88 }}>
          <div>
            <p style={{ fontSize: 24 }}>
              By user in{" "}
              <span style={{ color: `${COLORS.blue}`, fontWeight: 600 }}>
                inspiration
              </span>
            </p>
            <p
              style={{
                color: `${COLORS.violet}`,
                fontSize: 44,
                fontWeight: 600,
                lineHeight: 1.3,
                paddingBottom: 14,
                paddingTop: 24,
              }}
            >
              Why Swift UI Should Be on the Radar of Every Mobile <br />{" "}
              Developer
            </p>
            <p
              style={{
                fontSize: 24,
                color: `${COLORS.lightGray}`,
                lineHeight: 1.4,
                paddingBottom: 25,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </p>
            <Link to={COURSES}>
              <button style={{ cursor: "pointer" }} className="blog_button">
                Start learning now
              </button>
            </Link>
          </div>
          <img
            style={{
              maxWidth: "auto",
              maxHeight: 527,
            }}
            src="/src/assets/images/mainNewsImg.png"
          ></img>
        </div>{" "}
        <BlogList></BlogList>
      </div>

      <Footer></Footer>
    </section>
  );
}

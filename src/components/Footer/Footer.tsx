import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div
        style={{ display: "flex", paddingBottom: 95, justifyContent: "center" }}
      >
        <img
          className="footer-logo"
          src="/src/assets/icons/logo_white.png"
          alt=""
        />
        <span className="footer-span"></span>
        <span
          style={{
            marginLeft: 30,
            letterSpacing: 2,
            fontSize: 22,
            fontWeight: 600,
            color: "#ffffff",
            position: "relative",
            top: 20,
          }}
        >
          Virtual Class
          <br /> for Zoom
        </span>
      </div>
      <p
        style={{
          color: "#B2B3CF",
          fontSize: 26,
          fontWeight: 600,
          paddingBottom: 20,
          letterSpacing: 2,
        }}
      >
        Subscribe to get our Newsletter
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          position: "relative",
        }}
      >
        <input
          placeholder="Your Email"
          className="footer-email-input "
          type="text"
        />
        <button className="footer-btn">Subscribe</button>
      </div>
      <ul
        style={{
          paddingTop: 99,
          display: "flex",
          justifyContent: "center",
          color: "#B2B3CF",
          position: "relative",
          fontSize: 22,
          letterSpacing: 2,
        }}
      >
        <li>Careers</li>
        <span className="footer-ul-span"></span>
        <li>Privacy Policy</li>
        <span className="footer-ul-span"></span>
        <li> Terms & Conditons</li>
      </ul>
      <p
        style={{
          color: "#B2B3CF",
          fontSize: 22,
          letterSpacing: 2,
          paddingTop: 20,
        }}
      >
        © 2021 Class Technologies Inc.{" "}
      </p>
    </footer>
  );
}

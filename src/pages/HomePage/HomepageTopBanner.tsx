export default function HomePageTopBanner() {
  return (
    <div className="homaPage__top-banner">
      <div style={{ paddingTop: 191 }}>
        <p
          style={{
            fontSize: 54,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.3,
          }}
        >
          <span style={{ color: "#F48C06" }}>Studying</span> Online is now
          <br /> much easier
        </p>
        <p
          style={{
            color: "#ffffff",
            fontSize: 24,
            paddingTop: 58,
            paddingBottom: 58,
          }}
        >
          TOTC is an interesting platform that will teach <br /> you in more an
          interactive way
        </p>
        <div style={{ display: "flex", gap: 30 }}>
          <button
            className="homePage__top-banner_btn"
            style={{ backgroundColor: "#ffffff30", color: "#ffffff" }}
          >
            Join for free
          </button>
          <button className="homePage__top-banner__play_button"></button>
          <p style={{ position: "relative", top: 30, fontSize: 24 }}>
            Watch how it works
          </p>
        </div>
      </div>
      <div>
        <img
          style={{ position: "relative" }}
          src="/src/assets/images/girl.png"
        ></img>
        <div className="calendar__banner">
          <img
            className="calendar__banner__img"
            src="/src/assets/icons/calendar.png"
          ></img>
          <div style={{ lineHeight: 1.2 }}>
            <p style={{ fontSize: 24, fontWeight: 600, color: "#595959" }}>
              250k
            </p>
            <p style={{ fontSize: 20, color: "#595959" }}>Assisted Student</p>
          </div>
        </div>
        <div className="classes__banner">
          <div style={{ position: "relative" }}>
            <img
              src="/src/assets/images/user.png"
              className="classes__banner__img"
            ></img>
            <span className="classes__banner__online"></span>
          </div>
          <div className="classes__banner__details">
            <p style={{ fontSize: 24, fontWeight: 600, color: "#595959" }}>
              User Experience Class
            </p>
            <p style={{ fontSize: 20, color: "#595959", paddingBottom: 19 }}>
              Today at 12.00 PM
            </p>
            <button className="classes__banner_btn">Join Now</button>
          </div>
        </div>
        <div className="mail__banner">
          <img
            className="mail__banner_img"
            src="/src/assets/icons/email.png"
          ></img>
          <div>
            <p style={{ fontSize: 24, fontWeight: 600, color: "#595959" }}>
              Congratulations
            </p>
            <p style={{ fontSize: 20, color: "#595959", paddingBottom: 19 }}>
              Your admission comple
            </p>
          </div>
        </div>
        <div className="graph__banner">
          <img src="/src/assets/icons/graph.png"></img>
        </div>
      </div>
    </div>
  );
}

export default function HomePageMeeting() {
  return (
    <section className="meeting__section">
      <h2 style={{ fontSize: 36, textAlign: "center", paddingBottom: 20 }}>
        <b style={{ color: "#2F327D", fontWeight: 600 }}>Our</b>
        <b style={{ color: "#00CBB8", fontWeight: 600 }}> Features</b>
      </h2>
      <p
        style={{
          fontSize: 24,
          color: "#696984",
          textAlign: "center",
          paddingBottom: 100,
        }}
      >
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className="meeting__element-container">
        <div style={{ width: 658 }}>
          <div className="meeting__call__block">
            <span className="big-circle-green"></span>
            <span className="small-circle-blue"></span>
            <span className="big-circle-purple"></span>
            <span className="small-circle-red"></span>
            <span className="centre-circle"></span>
            <div>
              <div
                style={{ position: "relative" }}
                className="meeting__call-element"
              >
                <div className="meeting__call-window">
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                  <span className="circle3"></span>
                </div>

                <div
                  style={{
                    position: "relative",
                    top: 50,
                    paddingLeft: 45,
                  }}
                >
                  <img
                    className="meeting_img"
                    src="/src/assets/images/meeting1.png"
                  ></img>
                  <div className="meeting__call-buttons">
                    <button
                      style={{ backgroundColor: "#3465E1" }}
                      className="meeting__call-button box-shadow-btn"
                    >
                      Present
                    </button>
                    <button
                      style={{ backgroundColor: "#E13468" }}
                      className="meeting__call-button incoming-call-effect"
                    >
                      <img
                        className="phone__icon"
                        src="/src/assets/icons/phone.png"
                      ></img>
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="meeting__otherUsers-element">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 25,
                }}
              >
                <img
                  style={{
                    width: 166.37,
                    height: 160.83,
                  }}
                  className="meeting__otherUsers-img "
                  src="/src/assets/images/meeting2.png"
                  alt=""
                />

                <img
                  style={{
                    width: 166.37,
                    height: 160.83,
                  }}
                  className="meeting__otherUsers-img "
                  src="/src/assets/images/meeting3.png"
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    width: 202,
                    height: 195.27,
                    position: "relative",
                    bottom: 36,
                    borderRadius: 15,
                  }}
                  className="meeting__otherUsers-img"
                  src="/src/assets/images/meeting4.png"
                  alt=""
                />
                <img
                  style={{
                    width: 240,
                    height: 232,
                    position: "relative",

                    borderRadius: 15,
                  }}
                  className="meeting__otherUsers-img "
                  src="/src/assets/images/meeting5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="meeting__ui-element">
          <p
            style={{
              color: "#2F327D",
              fontSize: 40,
            }}
          >
            A{" "}
            <b
              style={{
                color: "#00CBB8",
              }}
            >
              user interface
            </b>{" "}
            designed <br />
            for the classroom
          </p>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              position: "relative",
            }}
          >
            <li
              style={{
                display: "flex",
                gap: 42,
                position: "relative",
                top: 51,
              }}
            >
              <span className="meeting__ui-imgContainer">
                <img
                  src="/src/assets/icons/items1.png"
                  className="meeting__ui-img"
                ></img>
              </span>
              <p className="meeting__ui-text">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </li>
            <li
              style={{
                display: "flex",
                gap: 42,
                position: "relative",
                top: 51,
              }}
            >
              <span className="meeting__ui-imgContainer">
                <img
                  src="/src/assets/icons/items2.png"
                  className="meeting__ui-img"
                ></img>
              </span>
              <p className="meeting__ui-text">
                TA’s and presenters can be moved to the front of the class.
              </p>
            </li>
            <li
              style={{
                display: "flex",
                gap: 42,
                position: "relative",
                top: 51,
              }}
            >
              <span className="meeting__ui-imgContainer">
                <img
                  src="/src/assets/icons/users_icon.png"
                  className="meeting__ui-img"
                ></img>
              </span>
              <p className="meeting__ui-text">
                Teachers can easily see all students and class data at one time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

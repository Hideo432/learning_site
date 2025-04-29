import "./discussionsBlock.css";
export default function DiscussionBlock() {
  return (
    <div className="discussionBlock__container">
      <div>
        <img src="/src/assets/images/group106.png" alt="" />
      </div>
      <div style={{ width: 540 }}>
        <p
          style={{ position: "relative", marginTop: 108 }}
          className="main-text"
        >
          One-on-One <br />
          <b className="blue-text">Discussions</b>
        </p>
        <p className="sub-text">
          Teachers and teacher assistants can talk with
          <br /> students privately without leaving the Zoom
          <br /> environment.
        </p>
      </div>
    </div>
  );
}

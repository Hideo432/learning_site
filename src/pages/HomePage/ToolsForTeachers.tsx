export default function ToolsForTeachers() {
  return (
    <div
      className="toolsForTeachers__container"
      style={{ position: "relative", marginTop: 251 }}
    >
      <div
        style={{
          position: "relative",
          width: 568,
          marginTop: 189,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <img
          style={{
            position: "absolute",
            left: 340,
            top: 144,
            zIndex: 1,
            width: 38,
            height: 55,
          }}
          src="/src/assets/icons/handPrint.png"
        ></img>
        <p className="main-text">
          <b style={{ color: "#00CBB8" }}>Tools</b> For Teachers
          <br /> And Learners
        </p>
        <p
          style={{
            zIndex: 3,
          }}
          className="sub-text"
        >
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <div>
        <img src="/src/assets/images/girl_withBackround.png"></img>
      </div>
    </div>
  );
}

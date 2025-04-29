export default function ManagementBlock() {
  return (
    <div className="managementBlock__container">
      <div
        style={{
          width: 645,
          display: "flex",
          flexDirection: "column",
          gap: 19,
        }}
      >
        <p
          style={{ position: "relative", marginTop: 153 }}
          className="main-text"
        >
          <b className="blue-text">Class Management</b>
          <br /> Tools for Educators
        </p>
        <p className="sub-text">
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>

      <div>
        <img src="/src/assets/images/group124.png"></img>
      </div>
    </div>
  );
}

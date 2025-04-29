export default function HomePageMaterials() {
  return (
    <div style={{ paddingBottom: 160 }} className="homepage__materials">
      <div className="homepage__materials__text">
        <p style={{ fontSize: 44, fontWeight: 600, paddingBottom: 20 }}>
          <b style={{ color: "#2F327D" }}>What is</b>
          <b style={{ color: "#00CBB8" }}> TOTC</b>
        </p>

        <p style={{ fontSize: 24, color: "#696984", paddingBottom: 77 }}>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      <div className="homepage__materials__container">
        <div className="homepage__materials__img__wrapper">
          <img
            src="/src/assets/images/instructors.png"
            className="homepage__materials__img"
          ></img>
          <div className="homepage__materials__inner-text">
            <p style={{ color: "#ffffff", textAlign: "center", fontSize: 32 }}>
              FOR INSTRUCTORS
            </p>
            <button className="homepage__materials__btn">
              Start a class today
            </button>
          </div>
        </div>
        <div className="homepage__materials__img__wrapper">
          <img
            src="/src/assets/images/students.png"
            className="homepage__materials__img"
          ></img>
          <div className="homepage__materials__inner-text">
            <p style={{ color: "#ffffff", textAlign: "center", fontSize: 32 }}>
              FOR STUDENTS
            </p>
            <button className="homepage__materials__btn">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

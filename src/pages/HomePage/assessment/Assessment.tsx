import "./assessment.css";
export default function Assessmetnt() {
  return (
    <section className="assessment_container">
      <section className="assessment_block-left ">
        <div style={{ display: "flex", gap: 30, paddingBottom: 32 }}>
          <span className="assessment-line"></span>
          <p className="deep_blue-text" style={{ letterSpacing: "3px" }}>
            TESTIMONIAL
          </p>
        </div>

        <p style={{ fontSize: 60, fontWeight: 600 }} className="deep_blue-text">
          What They Say?
        </p>
        <p
          style={{ fontSize: 26, paddingTop: 29, letterSpacing: 1.5 }}
          className="gray-text"
        >
          TOTC has got more than 100k positive ratings from our users around the
          world.{" "}
        </p>
        <p
          style={{ fontSize: 26, paddingTop: 26, letterSpacing: 1.5 }}
          className="gray-text"
        >
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p
          style={{
            fontSize: 26,
            paddingTop: 45,
            paddingBottom: 44,
            letterSpacing: 1.5,
          }}
          className="gray-text"
        >
          Are you too? Please give your assessment
        </p>
        <button
          className="assessment-btn turquoise-text"
          style={{ fontSize: 22 }}
        >
          Write your assessment
          <span className="assessment-btn-link">
            <img
              style={{ width: 25, height: 15 }}
              src="/src/assets/icons/arrow-left-2.png"
            ></img>
          </span>
        </button>
      </section>
      <section className="assessment_right-block ">
        <span className="assesment_span-arrow"></span>
        <img
          style={{ position: "relative", marginRight: 189 }}
          src="/src/assets/images/assessment-girl-img.png"
          alt=""
        ></img>
        <div className="assessment_review">
          <span className="assessment_span-left"></span>
          <span className="assessment_span"></span>
          <p
            className="gray-text"
            style={{
              fontSize: 22,
              lineHeight: "180%",
              letterSpacing: "2%",
              width: 534,
              paddingTop: 41,
            }}
          >
            "Thank you so much for your help. It's exactly what I've been
            looking for. You won't regret it. It really saves me time and
            effort. TOTC is exactly what our business has been lacking."
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 19,
            }}
          >
            <p style={{ lineHeight: 2, fontSize: 24 }}>Gloria Rose</p>
            <div
              style={{
                paddingRight: 44,
                display: "flex",
                gap: 17,
                flexDirection: "column",
              }}
            >
              <img src="/src/assets/icons/rating.png" alt="rating" />
              <p className="light_gray-text">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

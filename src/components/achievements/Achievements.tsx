import "./achievements.css";
interface Props {
  studentsCount: number;
  totalSuccess: number;
  mainQ: number;
  chiefExp: number;
  exp: number;
}
export default function Achiviements({
  studentsCount,
  totalSuccess,
  mainQ,
  chiefExp,
  exp,
}: Props) {
  return (
    <div className="achievements__block">
      <div className="acievements__text">
        <h1 style={{ fontSize: 48, fontWeight: 600, paddingBottom: 16 }}>
          Our Success
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.5 }}>
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec
          <br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare
          tristique vel nisl orci.
        </p>
      </div>
      <div className="achievements__details">
        <div className="achievements__details__item">
          <p className="acievements__details__info">{studentsCount}K+</p>
          <p style={{ fontSize: 32, textAlign: "center", color: "#010514" }}>
            Students
          </p>
        </div>
        <div className="achievements__details__item">
          <p className="acievements__details__info"> {totalSuccess}%</p>
          <p style={{ fontSize: 32, textAlign: "center" }}>Total success</p>
        </div>
        <div className="achievements__details__item">
          <p className="acievements__details__info">{mainQ}</p>
          <p style={{ fontSize: 32, textAlign: "center" }}>Main questions </p>
        </div>
        <div className="achievements__details__item">
          <p className="acievements__details__info">{chiefExp}</p>
          <p style={{ fontSize: 32, textAlign: "center" }}>Chief experts</p>
        </div>
        <div className="achievements__details__item">
          <p className="acievements__details__info">{exp}</p>
          <p style={{ fontSize: 32, textAlign: "center" }}>
            Years of experience
          </p>
        </div>
      </div>
    </div>
  );
}

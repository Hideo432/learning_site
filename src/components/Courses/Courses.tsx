import { Link } from "react-router-dom";
import "./courses.css";
import CourseItem from "../coursesItem/CoursesItem";

interface Props {
  courseTitle: string;

  icon: string;
  coursesList: any[];
}
export default function Courses({
  courseTitle,

  icon,
  coursesList,
}: Props) {
  const colors = [
    "#FF6F00",
    "#FF8374",
    "#B45A1B",
    "#FFB300",
    "#C583FF",
    "#00A8FF",
    "#C583FF",
    "#00A8FF",
    "#6DB4A7",
    "#308598",
  ];

  const courses = coursesList.map((item, index) => {
    return (
      <CourseItem
        id={item.id}
        key={index}
        title={item.title}
        description={item.description}
        price={item.price}
        rating={item.rating}
        image={item.image}
        color={colors[index]}
        position={3 * (index * 90)}
      ></CourseItem>
    );
  });
  return (
    <div style={{ height: 540 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          marginTop: 111,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 17,
            fontWeight: 600,
          }}
        >
          <img src={icon}></img>
          <p style={{ fontSize: 28 }}>{courseTitle}</p>
        </div>{" "}
        <div>
          <Link
            style={{ fontSize: 24, color: "#00BCD4", textDecoration: "none" }}
            to={"#"}
          >
            SEE ALL
          </Link>
        </div>
      </div>

      <div style={{ display: "flex" }}> {courses} </div>
    </div>
  );
}

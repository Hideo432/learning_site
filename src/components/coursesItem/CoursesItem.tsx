import { useState } from "react";
import { Link } from "react-router-dom";
import "./courses.css";
import Rating from "../rating/Rating";
interface Props {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  color: string;
  position: number;
  id: number;
}

export default function CourseItem({
  id,
  title,
  description,
  price,
  rating,
  image,
  color,
  position,
}: Props) {
  const [active, setActive] = useState(0);
  return (
    <section
      className="coursesItem__container"
      onMouseOver={() => {
        setActive(id);
      }}
      style={{
        backgroundColor: "#97979730",
        position: "relative",
        right: position,
      }}
    >
      <div className="coursesItem__outer">
        <div className="coursesItem__inner">
          <p
            className="coursesItem__title"
            style={{
              textAlign: "center",
              backgroundColor: `${color}`,
              color: "#ffffff",
              fontSize: 24,
              borderRadius: 24,
              lineHeight: 2.5,
              width: 319,
              height: 62,
            }}
          >
            {title}
          </p>
          <div
            className="courseItem__exetened"
            style={{ border: `2px solid ${color}` }}
          >
            <img className="courseItem__exetened-img" src={image} alt="" />
            <div>
              <p
                style={{ lineHeight: 2 }}
                className="courseItem__exetened-title"
              >
                {title}
              </p>
              <p className="courseItem__exetened-description">{description}</p>
              <div style={{ position: "absolute", bottom: 28 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {<Rating totalRating={rating}></Rating>}{" "}
                  <p style={{ fontWeight: 600, fontSize: 25 }}>${price}</p>
                </div>
                <div style={{ position: "relative", paddingTop: 25 }}>
                  <Link style={{ cursor: "pointer" }} to={"/homepage"}>
                    <button
                      style={{ cursor: "pointer" }}
                      className="courseItem__exetened-btn"
                    >
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

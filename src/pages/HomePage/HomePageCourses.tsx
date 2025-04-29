import { useState, useEffect } from "react";
import Courses from "../../components/Courses/Courses";

export default function HomePageCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const path = "/src/db/courses.json";
  useEffect(() => {
    fetch(path)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Сеть не ответила должным образом");
        }
        return response.json();
      })
      .then((fetchedData) => {
        setCourses(fetchedData); // Обновление состояния с полученными данными
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);
  return (
    <div className="homePageCourses__container">
      <p style={{ fontSize: 40, fontWeight: 600 }}>Explore Course</p>
      <p style={{ fontSize: 24 }}>fdsf sdfdf ssdfsd dsfsdfsd sdfs</p>

      <Courses
        coursesList={courses}
        icon="/src/assets/icons/palette.png"
        courseTitle="Lorem Ipsum"
      ></Courses>
      <Courses
        coursesList={courses}
        icon="/src/assets/icons/globe.png"
        courseTitle="Quisque a Consequat"
      ></Courses>
      <Courses
        coursesList={courses}
        icon="/src/assets/icons/medal.png"
        courseTitle="Aenean Facilisis"
      ></Courses>
    </div>
  );
}

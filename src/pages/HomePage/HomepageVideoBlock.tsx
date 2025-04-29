import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Link } from "react-router-dom";
export default function HomePageVideoBlock() {
  return (
    <section className="homepage__video_container">
      <div style={{ position: "relative" }}>
        <span className="homepage__video-circleBig"></span>
        <span className="homepage__video-circleSmall"></span>
        <p
          style={{
            lineHeight: 1.5,
            fontSize: 36,
            fontWeight: 600,
            color: "#2F327D",
            paddingBottom: 30,
            paddingTop: 64,
          }}
        >
          Everything you can do in a physical classroom,
          <b style={{ color: "#00CBB8" }}> you can do with TOTC</b>
        </p>
        <p
          style={{
            color: "#696984",
            fontSize: 24,
            letterSpacing: 1.9,
            paddingBottom: 30,
            lineHeight: 1.5,
          }}
        >
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </p>
        <Link style={{ fontSize: 22, color: "#696984" }} to={"/#"}>
          Learn more
        </Link>
      </div>
      <VideoPlayer></VideoPlayer>
    </section>
  );
}

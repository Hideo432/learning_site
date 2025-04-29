import Achiviements from "../../components/achievements/Achievements";
import "./homePage.css";

import HomePageTopBanner from "./HomepageTopBanner";
import HomePageBenefits from "./homePagebenefits/HomePageBenefits";

import HomePageMeeting from "./HomePageMeeting";
import ToolsForTeachers from "./ToolsForTeachers";
import QuizzesTests from "./QuizzesTests";
import ManagementBlock from "./ManagementBlock";
import DiscussionBlock from "./discussionsBlock/DiscussionsBlock";
import Courses from "./HomePageCourses";
import HomePageVideoBlock from "./HomepageVideoBlock";
import Assessmetnt from "./assessment/Assessment";
import HomePageNewsBlock from "../HomepageNewsBlock/HomePageNewsBlock";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";

export default function HomePage() {
  return (
    <div className="HomePage__container">
      <Header fon={"blue"}></Header>
      <HomePageTopBanner></HomePageTopBanner>
      <Achiviements
        studentsCount={15}
        totalSuccess={75}
        mainQ={35}
        chiefExp={26}
        exp={16}
      ></Achiviements>
      <HomePageBenefits></HomePageBenefits>
      <HomePageVideoBlock></HomePageVideoBlock>
      <HomePageMeeting></HomePageMeeting>
      <ToolsForTeachers></ToolsForTeachers>
      <QuizzesTests></QuizzesTests>
      <ManagementBlock></ManagementBlock>
      <DiscussionBlock></DiscussionBlock>
      <button className="seeFeatures">See more features</button>
      <Courses></Courses>
      <Assessmetnt></Assessmetnt>
      <HomePageNewsBlock></HomePageNewsBlock>
      <Footer></Footer>
    </div>
  );
}

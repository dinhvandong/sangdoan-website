import React from "react";
import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import Banner from "../components/Banner";
import Service from "../components/Service";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import MakeWeConnect from "../components/MakeWeConnect";
import Experience from "../components/Experience";
import TechnologyIndex from "../components/TechnologyIndex";
import FromOurBlog from "../components/FromOurBlog";

const Header = () => {
  return (
    <div className="flex flex-col lg:w-full md:w-full sm:w-auto xs:w-[320px]">
      <TopBar />
      <MenuBar />
      <Banner />
      <Service />
      <About />
      <WhyChooseUs />
      <MakeWeConnect/>
      <Experience/>
      {/* <TechnologyIndex/> */}
      <FromOurBlog/>
    </div>
  );
};

export default Header;

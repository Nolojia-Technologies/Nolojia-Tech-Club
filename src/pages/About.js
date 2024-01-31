import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import NavbarThree from "../components/NavbarThree";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import FooterThree from "../components/FooterThree";
import CounterAreaTwo from "../components/CounterAreaTwo";
import ContactAreaOne from "../components/ContactAreaOne";
import NavBar from "../components/NavBar";
import FooterOne from "../components/FooterOne";


const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"How It Works"} />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Work Process One */}
      {/* <WorkProcessOne /> */}

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default About;

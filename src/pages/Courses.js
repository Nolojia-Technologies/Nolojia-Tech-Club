import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import CoursesAreaOne from "../components/CoursesAreaOne";

const Courses = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Courses"} />

      {/* Service Area One */}
      <CoursesAreaOne />

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default Courses;

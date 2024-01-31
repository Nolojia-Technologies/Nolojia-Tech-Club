import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamDetailsGroup from "../components/TeamDetailsGroup";
import NavbarThree from "../components/NavbarThree";
import FooterThree from "../components/FooterThree";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default TeamDetails;

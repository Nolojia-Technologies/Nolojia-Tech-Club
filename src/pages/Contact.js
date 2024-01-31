import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default Contact;

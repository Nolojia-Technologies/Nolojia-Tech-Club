import React from "react";
import AboutAreaFour from "../components/AboutAreaFour";
import BannerFour from "../components/BannerFour";
import BlogAreaFour from "../components/BlogAreaFour";
import BrandAreaOne from "../components/BrandAreaOne";
import CareerAreaOne from "../components/CareerAreaOne";
import ContactAreaFour from "../components/ContactAreaFour";
import CounterAreaFour from "../components/CounterAreaFour";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import ProjectAreaOne from "../components/ProjectAreaOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import TeamAreaTwo from "../components/TeamAreaTwo";
import TestimonialThree from "../components/TestimonialThree";
import ServiceAreaFive from "../components/ServiceAreaFive";

const HomeFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Banner Four */}
      <BannerFour />

      {/* About Area Four */}
      <AboutAreaFour />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* FAQ Area Two */}
      <FaqAreaOne />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Career Area One */}
      <CareerAreaOne />

      {/* Project Area One */}
      <ProjectAreaOne />

      {/* Testimonial Three
      <TestimonialThree /> */}

      {/* Counter Area Four */}
      <CounterAreaFour />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Contact Area Four */}
      <ContactAreaFour />

      {/* Blog Area Four */}
      {/* <BlogAreaFour /> */}

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default HomeFour;

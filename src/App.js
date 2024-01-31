import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import React from "react";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import HomeFour from "./pages/HomeFour";
import HomeOne from "./pages/HomeOne";
import HomeThree from "./pages/HomeThree";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
// import ReactWhatsapp from 'react-whatsapp';
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/index-2' element={<HomeTwo />} />
        <Route exact path='/index-3' element={<HomeThree />} /> */}
        <Route index element={<HomeOne />} />
        <Route exact path='/courses' element={<Courses />} />
        {/* <Route exact path='/index-5' element={<HomeFive />} /> */}
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route
          exact
          path='/case-study-details'
          element={<CaseStudyDetails />}
        />
        <Route exact path='/contact' element={<Contact />} />
        {/* <Route exact path='/service' element={<Service />} /> */}
        <Route exact path='/service' element={<ServiceDetails />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />
        <Route exact path='/tech-club' element={<HomeOne />} />
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
      {/* <ReactWhatsapp className="whatsapp_float" number="254793903930" message="Hello, I need to enquire on your products." /> */}
    </BrowserRouter>
  );
}

export default App;

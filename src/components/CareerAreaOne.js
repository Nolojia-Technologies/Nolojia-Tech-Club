import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CareerAreaOne = () => {
  return (
    <>
      {/* career area start */}
      <div className='career-section pd-top-120 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  The Power Of <span>Software</span> The Simplicity Of Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className='career-wrap-area'>
            <nav>
              <div
                className='nav nav-tabs career-nav-tab'
                id='nav-tab'
                role='tablist'
              >
                <button
                  className='nav-link active'
                  id='nav-mission-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-mission'
                  type='button'
                  role='tab'
                  aria-controls='nav-mission'
                  aria-selected='true'
                >
                  Mission
                </button>
                <button
                  className='nav-link'
                  id='nav-vision-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-vision'
                  type='button'
                  role='tab'
                  aria-controls='nav-vision'
                  aria-selected='false'
                >
                  Vision
                </button>
                <button
                  className='nav-link'
                  id='nav-career-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-career'
                  type='button'
                  role='tab'
                  aria-controls='nav-career'
                  aria-selected='false'
                >
                  Careers
                </button>
                <button
                  className='nav-link'
                  id='nav-solution-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-solution'
                  type='button'
                  role='tab'
                  aria-controls='nav-solution'
                  aria-selected='false'
                >
                  Solutions
                </button>
              </div>
            </nav>
            <div className='tab-content' id='nav-tabContent'>
              <div
                className='tab-pane fade show active'
                id='nav-mission'
                role='tabpanel'
                aria-labelledby='nav-mission-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/mission.jpg' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Our Mission</h3>
                      <p className='mb-3'>
                      A daily commitment to serve our clients through passion, knowledge, and excellence.
                      </p>
                      <div className='row'>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Quality
                            </li>
                            <li>
                              <FaCheckCircle /> Innovative
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Outstanding
                            </li>
                            <li>
                              <FaCheckCircle /> Exceptional
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-vision'
                role='tabpanel'
                aria-labelledby='nav-vision-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/vision.jpg' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Our Vision</h3>
                      <p className='mb-3'>
                      To be known and recommended for optimising and streamlining businesses by using digital and technical innovation.
                      </p>
                      <div className='row'>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Technological Impact
                            </li>
                            <li>
                              <FaCheckCircle /> Business Advancement
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Digital Marketing
                            </li>
                            <li>
                              <FaCheckCircle /> Startups Surpport
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-career'
                role='tabpanel'
                aria-labelledby='nav-career-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/careers.jpg' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Software Developer</h3>
                      <p className='mb-3'>
                        Become a proffesional software developer through Nolojia. Become a great Graphics Designer and great Animation Creator.
                      </p>
                      <div className='row'>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Software Developer
                            </li>
                            <li>
                              <FaCheckCircle /> Robotics
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Graphics Designer
                            </li>
                            <li>
                              <FaCheckCircle /> Animator
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-solution'
                role='tabpanel'
                aria-labelledby='nav-solution-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/solution.jpg' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>The software development</h3>
                      <p className='mb-3'>
                        A software company is a business that designs, develops,
                        and sells software products to individuals and
                        organizations. These companies use a variety of
                        programming languages and technologies to create custom
                        software solutions for a wide range of industries
                      </p>
                      <div className='row'>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Web & App Development
                            </li>
                            <li>
                              <FaCheckCircle /> Digital Marketing
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> POS Systems & E-commerce
                            </li>
                            <li>
                              <FaCheckCircle /> Animation & Motion Graphics
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* career area start */}
    </>
  );
};

export default CareerAreaOne;

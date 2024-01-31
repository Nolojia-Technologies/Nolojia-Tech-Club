import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>Our Courses</h6>
                <h2 className='title'>
                  Unlocking Your Potential With Tech Knowledge
                </h2>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/web.png' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/courses'>Web Development</Link>
                  </h5>
                  <p className='mb-0'>
                  Learn modern Web Development fundamentals as well as advanced topics. Start today.
                  </p>
                  <Link className='btn btn-border-base' to='/courses'>
                      Enroll Now
                  </Link>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/app.png' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/courses'>Mobile App Development</Link>
                  </h5>
                  <p className='mb-0'>
                  Learn how to design, build, and publish iOS and Android mobile apps from scratch using a variety of tools.
                  </p>
                  <Link className='btn btn-border-base' to='/courses'>
                      Enroll Now
                  </Link>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/ai.png' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/courses'>Artificial Inteligence</Link>
                  </h5>
                  <p className='mb-0'>
                  Learn Artificial Intelligence & Machine Learning taught by experienced instructors in the industry.
                  </p>
                  <Link className='btn btn-border-base' to='/courses'>
                      Enroll Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none'>
              <div className='service-thumb service-middle-section align-self-end'>
                <img src='assets/img/courses.jpg' alt='img' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/robot.png' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/courses'>Robotics</Link>
                  </h5>
                  <p className='mb-0'>
                  Choose from a wide range of Robotics courses offered from top skilled and industry leaders.
                  </p>
                  <Link className='btn btn-border-base' to='/courses'>
                      Enroll Now
                  </Link>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/animation.png' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/courses'>Animation & Graphics</Link>
                  </h5>
                  <p className='mb-0'>
                    Learn Graphics Design, Digital Media, and Animation, both 2D & 3D. We equip you with best skills available.
                  </p>
                  <Link className='btn btn-border-base' to='/courses'>
                      Enroll Now
                  </Link>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/marketing.png' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/courses'>Digital Marketing</Link>
                  </h5>
                  <p className='mb-0'>
                  Learn digital marketing course. Master Digital Marketing Strategies That Drive. Stand Out.
                  </p>
                  <Link className='btn btn-border-base' to='/courses'>
                      Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;

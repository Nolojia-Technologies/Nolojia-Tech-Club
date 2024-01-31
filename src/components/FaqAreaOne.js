import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className='container'>
          <div className='row pd-top-120'>
            <div
              className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner pt-lg-3'>
                <img
                  className='main-img'
                  src='assets/img/faq.jpg'
                  alt='img'
                />
                <img
                  className='animate-img-bottom-right top_image_bounce'
                  src='assets/img/about/5.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-xl-7 col-lg-6'
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h6 className='sub-title'>How It Works</h6>
                <h2 className='title'>
                  How <span>Nolojia Tech Club</span> Works.
                </h2>
                <p className='content'>
                Welcome to Nolojia Tech Club! We're thrilled to introduce your child to the exciting world of coding. 
                Our program is designed to provide a comprehensive and engaging learning experience for kids. Here's how it works:
                </p>
              </div>
              <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      1. Introduction to Coding:
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Our program begins with a user-friendly introduction to coding concepts. 
                    We understand that not all students may have prior experience, so we start 
                    with the basics. We introduce coding languages in a fun and interactive
                     way, ensuring that every child feels comfortable and excited to learn.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      2. Customized Curriculum:
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    We believe in catering to the unique needs and interests of each student. 
                    Our curriculum is carefully crafted to be adaptable, allowing us to tailor 
                    the learning experience to different age groups, skill levels, and interests. 
                    This ensures that every child can progress at their own pace while staying engaged and motivated.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      3. Hands-On Projects:
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Learning by doing is at the core of our approach. Students don't just 
                    memorize code; they apply their knowledge by working on hands-on projects. 
                    These projects range from simple games to more complex applications, 
                    allowing students to see the real-world impact of their coding skills. 
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      4. Qualified Instructors:
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Our team of experienced and passionate instructors is dedicated to making
                     coding accessible and enjoyable for every student. They bring a wealth of 
                     knowledge and enthusiasm to each session, fostering a positive learning environment.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      5. Progress Tracking:
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Parents and teachers can monitor their students' progress through our user-friendly tracking system. 
                    We provide regular updates on completed projects, skills acquired, and areas for improvement. 
                    This transparency ensures that everyone involved in a child's education is informed and can offer support where needed. 
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      6. Flexible Learning Environments:
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Whether it's in the classroom, within an estate setting, or through one-on-one sessions, 
                    our program adapts to different learning environments. We believe that coding should be
                     accessible to all, and our flexible approach reflects this commitment. 
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      7. Community Engagement:
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    We encourage a sense of community among our students. Periodic coding challenges, 
                    group projects, and events foster collaboration, allowing kids to learn not only 
                    from instructors but also from their peers. 
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      8. Parent and Teacher Support:
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    We value the partnership between parents, teachers, and our program. Regular communication 
                    channels are established to keep everyone informed and involved in a child's coding journey. 
                    Workshops and resources are also provided to help parents and teachers support their students in their coding endeavors. 
                    </div>
                  </div>
                </div>
              </div>
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h2 className='title'>
                  Get <span>Started</span> Today!
                </h2>
                <p className='content'>
                Join us in empowering the next generation with valuable coding skills. Contact us to schedule a demo, or enroll your child in one of our coding programs.
                </p>
                <p className='mt-3'>
                    <FaPhoneAlt /> (+254) 746-816097
                  </p>
                  <p className='mt-2'>
                    <FaWhatsapp /> (+254) 746-816097
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;

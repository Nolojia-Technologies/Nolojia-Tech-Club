import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          
            {/* <div
              className='col-lg-6 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.png'
                  alt='img'
                />
              </div>
            </div> */}
            <div
              
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT CODING</h6>
                <h2 className='title'>
                  Why learn coding at an early age?
                </h2>
                <p className='content mb-4'>
                  Learning coding at an early age can offer several benefits for children and young learners:
                </p>
                
                  
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> <b>Cognitive development:</b> Coding involves problem-solving, logic, and critical thinking. 
                        Learning to code can enhance cognitive skills, including attention to detail, pattern recognition, and algorithmic thinking.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Creativity: </b>Coding allows individuals to express their creativity by building and designing their 
                        own projects. It encourages them to think creatively to solve problems and create unique solutions.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Early exposure to technology: </b>In today's digital age, technology plays a significant role in various
                         aspects of life. Learning to code provides early exposure to technology and helps children understand how the devices and 
                         applications they use work.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Career opportunities:</b> As technology continues to advance, there is an increasing demand for individuals
                         with coding skills. Learning to code at an early age can give children a head start in developing skills that are valuable 
                         in many professions.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Understanding the digital world:</b> Coding helps individuals understand how software and applications 
                        function. This understanding is crucial in a world where technology is an integral part of daily life.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Problem-solving skills: </b>Coding involves breaking down problems into smaller, manageable parts 
                        and finding systematic solutions. These problem-solving skills are transferable to various areas of life and are beneficial 
                        in academic and professional pursuits.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Promotes perseverance and resilience: </b>Coding often involves trial and error. Encountering and overcoming
                         challenges in coding helps build perseverance and resilience, teaching children that it's okay to make mistakes and 
                         encouraging them to keep trying until they find a solution.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Collaboration and teamwork:</b> Coding projects often require collaboration, especially in real-world 
                        scenarios. Learning to work with others on coding projects fosters teamwork and communication skills.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Introduction to computational thinking:</b> Learning to code introduces the principles of computational
                         thinking, which involves breaking down complex problems, recognizing patterns, and designing algorithms. These skills are 
                         valuable not only in programming but also in various academic subjects.
                      </li>
                      <li>
                        <FaCheckCircle /> <b>Early introduction to STEM (Science, Technology, Engineering, and Mathematics): </b>Coding is a fundamental
                         skill in STEM fields. Learning to code at an early age can spark interest in these disciplines, potentially leading to further
                          exploration and study in STEM-related subjects.
                      </li>
                    </ul>
                  
                  
                
                <p className='content'>
                It's crucial to remember that the purpose of teaching children to code at a young age is to provide them useful skills and a basis for 
                comprehending the increasingly digital world they live in, rather than necessarily turning every child into a professional programmer.
                </p>
                {/* <Link className='btn btn-border-base' to='/about'>
                  Discover More <FaPlus />
                </Link> */}
              </div>
            </div>
          
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;

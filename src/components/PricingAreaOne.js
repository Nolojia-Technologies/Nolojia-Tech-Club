import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingAreaOne = () => {
  return (
    <>
      {/* Pricing Area One start */}
      <div className='pricing-area bg-gray pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>Pricing plan</h6>
            <h2 className='title'>
              Best plans for our <span>Courses</span>
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner style-3'>
              <h2 className='mb-3'>
                  $20 <sub>/month</sub>
                </h2>
                <h5>One-on-One</h5>
                <ul>
                  <li>
                    <b>Class Duration: </b>2 hours
                  </li>
                  <li>
                    <b>Number of Students: </b>1
                  </li>
                  <li>
                    <b>Frequency: </b>Once a Week
                  </li>
                  <li>
                    <FaCheck />
                    100 % personalized learning
                  </li>
                  <li>
                    <FaCheck />
                    Chat with the instructor
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited self-paced courses
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Progress reports
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    International competitions
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Building portfolio
                  </li>
                </ul>
                <a
                  className='btn btn-black border-radius border-radius-0 w-100'
                  target="_blank"
                  href='https://wa.me/254746816097?text=*One-on-one*%20%20(Please%20add%20your%20message%20after%20this.)'
                >
                  Enroll
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner style-3 price-active'>
                <h2 className='mb-3'>
                  $35 <sub>/student</sub>
                </h2>
                <h5>School Clubs</h5>
                <ul>
                  <li>
                    <b>Duration: </b>1 Semester/Term
                  </li>
                  <li>
                    <b>Class Duration: </b>1 hours
                  </li>
                  <li>
                    <b>Number of Students: </b>Minimum 10
                  </li>
                  <li>
                    <b>Frequency: </b>Once a Week
                  </li>
                  <li>
                    <FaCheck />
                    100 % personalized learning
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited self-paced courses
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Progress reports
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    International competitions
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Building portfolio
                  </li>
                </ul>
                <a
                  className='btn btn-black border-radius border-radius-0 w-100'
                  target="_blank"
                  href='https://wa.me/254746816097?text=*School%20Clubs*%20%20(Please%20add%20your%20message%20after%20this.)'
                >
                  Enroll
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner style-3'>
                <h2 className='mb-3'>
                  $19 <sub>/month</sub>
                </h2>
                <h5>Estate Group Clubs</h5>
                <ul>
                  <li>
                    <b>Class Duration: </b>1 hours
                  </li>
                  <li>
                    <b>Number of Students: </b>Minimum 10
                  </li>
                  <li>
                    <b>Frequency: </b>Once a Week
                  </li>
                  <li>
                    <FaCheck />
                    100 % personalized learning
                  </li>
                  <li>
                    <FaCheck />
                    Chat with the instructor
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited self-paced courses
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Progress reports
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    International competitions
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    Building portfolio
                  </li>
                </ul>
                <a
                  className='btn btn-black border-radius border-radius-0 w-100'
                  target="_blank"
                  href='https://wa.me/254746816097?text=*Estate%20Group%20Clubs*%20%20(Please%20add%20your%20message%20after%20this.)'
                >
                  Enroll
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;

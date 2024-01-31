import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaTwo = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/12.png")' }}
      >
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>MEET OUR EXPERTS</h6>
            <h2 className='title text-white'>
              Your Professional <span>Success</span> Partners
            </h2> 
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/shaund.jpg' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to='#'>Shaun Daniel</Link>
                    </h5>
                    <p>CEO & Founder</p>
                    <ul className='team-social-inner mt-3 mb-1'>
                      <li>
                        <a target="blank" href='https://www.facebook.com/shaun.daniel.353'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a target="blank" href='https://www.linkedin.com/in/shaun-daniel-machua-44a528216?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwIWWQYrpT3uqjr32OsQUNg%3D%3D'>
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/joshua.jpg' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to='#'>Joshua Kithinji</Link>
                    </h5>
                    <p>CTO & Co-Founder</p>
                    <ul className='team-social-inner mt-3 mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a target="blank" href='https://www.linkedin.com/in/joshua-kithinji-b75a96221?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3XptjAmuRKGkDdv7cMeNhA%3D%3D'>
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/mercy.jpg' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to='#'>Mercy Charity</Link>
                    </h5>
                    <p>Human Resource Manager</p>
                    <ul className='team-social-inner mt-3 mb-1'>
                      <li>
                        <a target="blank" href='https://www.facebook.com/chacha.mercie.9'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a target="blank" href='https://www.linkedin.com/in/mercy-charity-6a46b7234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrYNd2H3CSBWZ8S0gYnqKLQ%3D%3D'>
                          <FaLinkedin />
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaTwo;

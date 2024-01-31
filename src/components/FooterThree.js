import React, { useRef } from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";





const FooterThree = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_ndy1i4a", //YOUR_SERVICE_ID
        "template_ikdg2mh", //YOUR_TEMPLATE_ID
        form.current,
        "RRBM7Vhig0aZEqHGN" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ================== Footer Two Start ==================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <footer className='footer-area bg-black mt-0 pd-top-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='assets/img/tech-club.png' alt='img' />
                  </Link>
                </div>
                <div className='details'>
                  <p>
                    Activating Future Information
                  </p>
                  <p>Follow us on our social medias</p>
                  <ul className='social-media'>
                    <li>
                      <a target="blank" href='https://www.facebook.com/nolojia'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a target="blank" href='https://www.linkedin.com/in/nolojia-school-054493268?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWQzcl2C%2FQ%2BOw20zRdzKPnw%3D%3D'>
                        <FaLinkedin />
                      </a>
                    </li>
                    {/* <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li> */}
                    <li>
                      <a target="blank" href='https://www.instagram.com/_nolojia/'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a target="blank" href='https://www.tiktok.com/@_nolojia'>
                        <FaTiktok />
                      </a>
                    </li>
                    <li>
                      <a target="blank" href='https://www.youtube.com/@nolojia6079'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 offset-xl-2 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Other Services</h4>
                <ul>
                  <li>
                    <Link 
                    target="_blank"
                    to='https://www.nolojia.tech/'>
                      <FaChevronRight /> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                    target="_blank" 
                    to='https://www.nolojia.tech/'>
                      <FaChevronRight /> Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link
                    target="_blank" 
                    to='https://www.nolojia.tech/'>
                      <FaChevronRight /> Animation & Design{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                    target="_blank" 
                    to='https://www.nolojia.tech/'>
                      <FaChevronRight /> Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                    target="_blank" 
                    to='https://www.nolojia.tech/'>
                      <FaChevronRight /> Sytems Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 offset-xl-1 col-md-6'>
              <div className='widget widget_about'>
                <h4 className='widget-title'>Subscribe</h4>
                <div className='details'>
                  <p>
                    Subscribe to our weekly updates on new courses, events, and many more.
                  </p>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className='subscribe mt-4'>
                      <input 
                      id="email"
                      name="user_email"
                      type='email' 
                      placeholder='E-mail'
                      required />
                      <button
                        type="submit"
                        value="send"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom bg-gray-black'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Nolojia 2024 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a>
                  <Link to=''>Terms &amp; Conditions</Link>
                </a>
                <a>
                  <Link to=''>Privacy Policy</Link>
                </a>
                <a>
                  <Link to='/contact'>Contact Us</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterThree;

import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import courseList from "../scripts/courseList";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

const ServiceAreaOne = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchNames = ['Mobile App Development', 'Web App Development', 'Robotics', 
    'Artificial Intelignece', 'Animation', 'Graphics Design', 'Digital Marketing'];
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>OUR COURSES</h6>
            <h2 className='title'>
              Your Partner In <span>Technological</span> Courses
            </h2>
          </div>
          <div className='row'>
            {courseList.slice(0, 8).map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img style={{width: 55}} src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className="service-title">
                      <Link to='/service-details'>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link variant="primary" onClick={handleShow} className='btn btn-border-base'>
                      Enroll Now <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll For A Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Select Course"
                autoFocus
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="+25470000000"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>More information</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit Now
          </Button>
        </Modal.Footer>
      </Modal>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaOne;

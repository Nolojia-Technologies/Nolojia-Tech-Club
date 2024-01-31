import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>OUR SIMPLE PROCESS</h6>
            <h2 className='title'>
              Scratch <span>Paths According To</span> Your Child's Interests.
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/little.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Little Explorer</p>
                  <h5 className='mb-3'>Basic computer skills</h5>
                  <p className='content'>
                  1. Drag & Drop, Sequencing <br/>
                  2. Loops <br/>
                  3. First story project
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/project.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Project Master</p>
                  <h5 className='mb-3'>Simple projects</h5>
                  <p className='content'>
                  1. Math in Scratch <br/>
                  2. Conditionals <br/>
                  3. Add-ons <br/>
                  4. Functioning blocks
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/game.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Game Developer</p>
                  <h5 className='mb-3'>Develope Software</h5>
                  <p className='content'>
                  1. Nesting conditionals <br/>
                  2. Scripting blocks <br/>
                  3. Scratch built-in extentions
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/expert.png' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Scratch Expert</p>
                  <h5 className='mb-3'>Shop software</h5>
                  <p className='content'>
                  1. Bank ATM project <br/>
                  2. Screen scrolling effect <br />
                  3. Chatbot using API <br />
                  4. PictoBlox integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;

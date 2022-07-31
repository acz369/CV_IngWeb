import React from 'react';

const Experience = () => (
  <main>
    <div className='flex flex-col h-full'>
      <h3 className='text-orange-400 text-lg font-bold'>EXPERIENCE</h3>
      <div className='grid-cols-3'>
        <div className='grid grid-cols-2 gap-3'>
          <div>
            <h6>UdeA – Ude@, Programming assistant</h6>
            <p className='italic'>Aug 2020 – May 2021</p>
            <p>
              I developed websites with WordPress and PHP,creating user
              experiences based on analysisand design. I worked on the design of
              viewsand styles for the websites.
            </p>
          </div>
          <div>
            <h6>UdeA – Library,Programming assistant</h6>
            <p className='italic'>May 2021 – Sept 2021</p>
            <p>
              I used to work with web development, usingtools like React,
              JavaScript, docker, MySQL, forthe management of the library
              system, I helpwith the design of views for a better userexperience
              and a more friendly environment.
            </p>
          </div>
          <div>
            <h6>Bootcamp DevOps</h6>
            <p className='italic'>Nov 2021 - Dec 2021</p>
            <p>
              Development and completion proposed by theDevCo company on DevOps
              culture.
            </p>
          </div>
          <div>
            <h6>ConfigureID</h6>
            <p className='italic'>Mar 2022 - Currently</p>
            <p>
              Implementation of web pages for customers with 3D models of the
              customers products, creating new experiences for the users with a
              full personalization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Experience;

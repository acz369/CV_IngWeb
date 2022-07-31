import React from 'react';

const Courses = () => (
  <main>
    <div className='flex flex-col h-full pb-20'>
      <h3 className='text-orange-400 text-lg font-bold'>COURSES</h3>
      <div className='grid grid-cols-2'>
        <div>
          <h6>Web development Bootcamp</h6>
          <p>Dr. Angela Yu</p>
          <p>Udemy</p>
        </div>
        <div>
          <h6>JavaScript Moderno</h6>
          <p>Juan Pablo de la Torre</p>
          <p>Udemy</p>
        </div>
      </div>
    </div>
  </main>
);

export default Courses;

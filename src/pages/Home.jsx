/* eslint-disable no-restricted-imports */
import Courses from 'components/Courses';
import Experience from 'components/Experience';
import Languages from 'components/Languages';
import React from 'react';
import {
  BsLinkedin,
  BsGithub,
  BsTelephone,
  BsEnvelopeFill,
  BsGlobe,
} from 'react-icons/bs';
import perfil from '../public/perfil.jpg';

const Home = () => (
  <main>
    <div className='flex flex-col h-full m-4'>
      <h3 className='text-orange-400 text-lg font-bold'>ABOUT ME</h3>
      <div className='gap-8 columns-3xs'>
        <img src={perfil} className='round-img' alt='circular perfil.' />
        <p className='text-black'>
          I am a computer science student, passionate and knowledgeable about
          web development and design, I have worked with tools like React and
          Angular on the front end. I also like robotics a lot.
        </p>
        <p className='text-black'>
          I am a responsible person, with initiative to develop new ideas,
          ability to work in a team, easy adaptability, punctual and
          disciplined.
        </p>
      </div>
      <h3 className='text-orange-400 text-lg font-bold'>ACADEMIC STUDIES</h3>
      <h6>University of Antioquia</h6>
      <p>Computer Science</p>
      <p className='italic'>Jun 2017 - currently</p>
      <div>
        <Experience />
      </div>
      <div>
        <Languages />
      </div>
      <div>
        <Courses />
      </div>
    </div>
    <footer className='bg-orange-400 text-orange-200 text-center '>
      <div className='grow grid grid-cols-5 grid-rows-1 gap-3 place-items-center pt-1 text-white'>
        <a href='tel:+123456789'>
          <BsTelephone />
        </a>
        <a href='https://acz369.github.io/'>
          <BsGlobe />
        </a>
        <a href='mailto:andrea.calderon.zuluaga@gmail.com'>
          <BsEnvelopeFill />
        </a>
        <a href='https://www.linkedin.com/in/andrea-calderon-zuluaga-a7509219a/'>
          <BsLinkedin />
        </a>
        <a href='https://acz369.github.io/'>
          <BsGithub />
        </a>
      </div>
      <p className='text-center'>© Copyright</p>
      <p className='text-center'>2022</p>
    </footer>
  </main>
);

export default Home;

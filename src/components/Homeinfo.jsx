import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box p-1 max-w-xs mx-auto bg-white shadow-md rounded-md">
    <p className="font-medium text-sm text-center mb-0.5">{text}</p> {/* Smaller text */}
    <Link to={link} className="neo-brutalism-white neo-btn inline-flex items-center justify-center text-xs py-0.5 px-1.5">
      {btnText}
      <img src={arrow} alt="arrow icon" className="ml-2 w-2 h-2 object-contain" /> {/* Smaller button and icon */}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-1 px-2 text-white mx-2">
      Hi, I am <span className="font-semibold">Shambhavee Shukla</span>👋
      <br />
      An aspiring Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="I love exploring and stepping out of my comfort zone, and I'm a huge Harry Potter fan! Want to know more?"
      link="/about"
      btnText="Learn more"
    />
  ),
  3:(
    <InfoBox
      text="I've been involved in a variety of projects. Interested in hearing about them?"
      link="/projects"
      btnText="Visit my Body of Work"
    />
  ),
  4: (
    <InfoBox
      text="Would you like to dive deeper into my journey?"
      link="/contact"
      btnText="Let’s connect"
    />
  )
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;

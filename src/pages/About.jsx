import React from 'react';
import { skills } from '../constants'; // Ensure you import correctly
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-3xl md:text-4xl">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Shambhavee</span>
      </h1>

      <div className="mt-5 flex-col gap-3 text-slate-500">
        <p>A passionate third-year Computer Science student currently pursuing my Bachelor of Technology at Graphic Era University. With a strong foundation in programming and a keen interest in Software Development, I thrive on transforming ideas into reality through code.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20 relative">
              <div className="btn-back rounded-xl absolute inset-0 bg-gray-200 hover:bg-gray-300 transition duration-200" />
              <div className="btn-front rounded-xl flex justify-center items-center relative z-10">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="mt-2 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex-col gap-3 text-slate-500">
          <p>Open for SDE Roles.</p>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;

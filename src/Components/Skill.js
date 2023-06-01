import React from 'react';
import Front from './Images/Front.png';
import Rjs from './Images/React.png';
import CssFrame from './Images/CssFrames.png';
import Java from './Images/Java.png';

const Skill = () => {
  return (
    <div className="bg-violet-950 py-10 sm:py-10 lg:py-16">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="w-full flex justify-center text-2xl font-bold text-white lg:text-3xl">MY SKILLS</h2>
        </div>
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <div className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src={Front} loading="lazy" alt="Frontend" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-100">FRONTEND SKILLS</span>
              <a href="/" className="text-lg font-bold text-gray-200 lg:text-xl">HTML - CSS - JS</a>
            </div>
          </div>
          <div>
            <div className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-900 shadow-lg lg:mb-3">
              <img src={Rjs} loading="lazy" alt="React" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-100">REACT</span>
              <a href="/" className="text-lg font-bold text-gray-200 lg:text-xl">REACT JS</a>
            </div>
          </div>
          <div>
            <div className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src={CssFrame} loading="lazy" alt="CSS Frameworks" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-100">CSS FRAMEWORKS</span>
              <a href="/" className="text-lg font-bold text-gray-200 lg:text-xl">TAILWIND AND BOOTSTRAP</a>
            </div>
          </div>
          <div>
            <div className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src={Java} loading="lazy" alt="Java" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-100">JAVA</span>
              <a href="/" className="text-lg font-bold text-gray-200 lg:text-xl">DATA STRUCTURE AND ALGORITHM</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;

import React from 'react';
import Front from './Images/Front.png';
import Rjs from './Images/React.png';
import CssFrame from './Images/CssFrames.png'
import Java from './Images/Java.png';

const Skill = () => {
  return (
    <div class="bg-violet-950 py-10 sm:py-10 lg:py-16">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-6 flex items-end justify-between gap-4">
      <h2 class="w-full flex justify-center text-2xl font-bold text-white lg:text-3xl">MY SKILLS</h2>
 </div>
    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      <div>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src={Front} loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <span class="text-gray-100">FRONTEND SKILLS</span>
          <a href="#" class="text-lg font-bold text-gray-200  lg:text-xl">HTML - CSS - JS</a>
        </div>
      </div>

      <div>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-900 shadow-lg lg:mb-3">
          <img src={Rjs} loading="lazy" alt="Photo by engin akyurt" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <span class="text-gray-100">REACT</span>
          <a href="#" class="text-lg font-bold text-gray-200 lg:text-xl">REACT JS</a>
        </div>
      </div>
 
  
      <div>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src={CssFrame} loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <span class="text-gray-100">CSS FRAMEWORKS</span>
          <a href="#" class="text-lg font-bold text-gray-200  lg:text-xl">TAILWIND AND BOOTSTRAP</a>
        </div>
      </div>

      <div>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src={Java} loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <span class="text-gray-100">JAVA</span>
          <a href="#" class="text-lg font-bold text-gray-200  lg:text-xl">DATA STRUCTURE AND ALGORITHM</a>
        </div>
      </div>
    
    </div>
  </div>
</div>
    
  );
}

export default Skill;

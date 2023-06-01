import React from 'react';
import Front from './Images/chromeex.jfif';
import Blackjack from './Images/blackjack.png'
import Passcount from './Images/passcount.png'
import Datentime from './Images/datentime.png'
import Soon from './Images/giphy.gif'

const Projects = () => {
  return (
    <div >
      <section className="text-white body-font bg-violet-950">
  <div className="container px-5 py-32 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">My Big and Small projects </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">These are some tiny projects that I have designed and constructed using some of the abilities I have so far learned.</p>
    </div>
    <div className="flex flex-wrap -m-4 ">


      <div className="xl:w-1/3 md:w-1/2 p-4">
        <a href="https://github.com/mohitsaxenaa/Chrome-ex" >
        <div className="border border-gray-200 p-6 rounded-lg">
        <img src={Front} loading="lazy" alt="" class="w-1/2 object-cover object-center transition duration-200 group-hover:scale-110" />
          <h2 className="text-lg text-white font-medium title-font mb-2">CHROME EXTENSION</h2>
          <p className="leading-relaxed text-base">This Is The Chrome Extension I Made By Using Javascript</p>
        </div>
        </a>
      </div>

    
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <a href="https://mohitsaxenaa.github.io/blackjack.github.io/">
        <div className="border border-gray-200 p-6 rounded-lg">
        <img src={Blackjack} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <h2 className="text-lg text-white font-medium title-font mb-2">BLACK JACK GAME</h2>
          <p className="leading-relaxed text-base">This Is The Blackjack Game I Also Made By Using Javascript</p>
        </div>
      </a>
      </div>


      <div className="xl:w-1/3 md:w-1/2 p-4">
      <a href="https://mohitsaxenaa.github.io/passengercounter.github.io/">
        <div className="border border-gray-200 p-6 rounded-lg">
        <div className="h-1/2">
        <img src={Passcount} loading="lazy" alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">PASSENGER COUNTER</h2>
          <p className="leading-relaxed text-base">This Helps To Count Passenger.</p>
        </div>
      </a>
      </div>


      <div className="xl:w-1/3 md:w-1/2 p-4">
      <a href="https://mohitsaxenaa.github.io/workingclock.github.io/">
        <div className="border border-gray-200 p-6 rounded-lg"> 
        <img src={Datentime} loading="lazy" alt="" class="h-1/2  object-cover object-center transition duration-200 group-hover:scale-110" />
          <h2 className="text-lg text-white font-medium title-font mb-2">DATE AND TIME</h2>
          <p className="leading-relaxed text-base">I Made This Using JavasScript realtime date and time</p>
        </div>
      </a>
      </div>


      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
        <img src={Soon} loading="lazy" alt="" class="w-1/2 object-cover object-center transition duration-200 group-hover:scale-110" />
          <h2 className="text-lg text-white font-medium title-font mb-2">SOON UPDATING MORE</h2>
          <p className="leading-relaxed text-base"></p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">         
        <img src={Soon} loading="lazy" alt="" class="w-1/2 object-cover object-center transition duration-200 group-hover:scale-110" />
          <h2 className="text-lg text-white font-medium title-font mb-2">SOON UPDATING MORE</h2>
          <p className="leading-relaxed text-base"></p>
        </div>
      </div>
    </div>
 </div>
</section>
    </div>
  )
}

export default Projects

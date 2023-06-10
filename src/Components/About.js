import React from 'react'

const About = () => {
  return (
    <section className="text-gray-400 bg-black body-font overflow-hidden">
      <h1 className="flex justify-center pt-10 text-5xl underline">MY EDUCATION</h1>
  <div className="flex justify-center px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-800 w-full">





      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white">BTECH</span>
          <span className="mt-1 text-gray-500 text-sm">2024</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2"><br/>DELHI TECHNICAL CAMPUS</h2>
          <p className="leading-relaxed">AFFILIATED TO GGSIPU, GREATER NOIDA</p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white">CLASS 12TH</span>
          <span className="mt-1 text-gray-500 text-sm">2020</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2"><br/>MATA GUJRI PUBLIC SCHOOL</h2>
          <p className="leading-relaxed"> SCORED 78%</p>
        </div>
      </div>


      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white">CLASS 10TH</span>
          <span className="mt-1 text-gray-500 text-sm">2018</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2"><br/>SUMMER FIELDS SCHOOL</h2>
          <p className="leading-relaxed"> SCORED 84%</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About

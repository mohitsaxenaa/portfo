import React from 'react'
import Profile from './Images/Profile.jpg'
// import Profile from './Images/DP2.png'
import Resume from './Assets/Resume.pdf'

const Home = () => {
  return (
    <>
    <section className="text-gray-200 bg-black body-font w-full h-2xl  ">
  <div className=" mx-auto  flex px-16 py-20 flex-col items-center ">
    <div className="lg:flex-grow flex flex-col  items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">Welcome to my Portfolio</h1>
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">MOHIT SAXENA
        <br className="hidden lg:inline-block"/>
      </h2>
      <img className="w object-cover object-center rounded" alt="hero" src={Profile}/>
      <p className="m-10 w-full leading-relaxed">I am a Fourth-year student pursuing Computer Science Engineering from Delhi Technical Campus, Greater Noida. I am enthusiastic about connecting with people and constantly learning new things. Recently, I have been focusing on frontend development and am currently acquiring skills in React JS, a popular JavaScript library for building user interfaces.

Additionally, I am actively studying Data Structures and Algorithms using JAVA, which is essential knowledge for efficient programming and problem-solving. My goal is to become a full-stack developer, as I find it
Fascinating to be able to create every aspect of a website, from the frontend to the backend.
</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">DOWNLOAD CV</button> */}
        <button className="ml-4 inline-flex text-gray-200 bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          <a href={Resume} download="resume">
          DOWNLOAD CV
          </a>
          </button>
      </div>
    </div>
 
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    </div>
  </div>


</section>



    </>
  )
}

export default Home

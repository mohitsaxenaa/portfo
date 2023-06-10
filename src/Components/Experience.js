import React from 'react';
import Logo from './Images/Logo.png';

const Experience = () => {
  return (
    <div>
      <section className="bg-black text-gray-200 body-font overflow-hidden">
        <h1 className="flex justify-center pt-10 text-5xl underline">MY EXPERIENCE</h1>
        <div className="container px-5 py-24 pb-32 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="bg-slate-50 rounded-2xl p-12 md:w-1/2 flex flex-col items-start border">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">WEB DEVELOPMENT</span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">S AND S LEGAL PARTNERS AND ASSOCIATES</h2>
              <p className="leading-relaxed mb-8 text-gray-600">This law firm gave me and my team the opportunity to design and construct a website, which is an ideal chance for new freelancers. I acquired knowledge of frontend technologies including HTML, CSS, JavaScript, and GitHub as a result. It was enjoyable working with them to build the UI/UX design for this site prior to its creation.</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a href="https://sslegalpartners.com/" className="text-indigo-500 inline-flex items-center">VISIT SITE
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <a className="inline-flex items-center" href="/#">
                <img alt="blog" src={Logo} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">SWATI SAXENA AND PRANAV SINGH</span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">ADVOCATES</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;

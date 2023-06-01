import React from 'react'

const Footer = () => {
  return (
    <div>
      
<footer className=" dark:bg-violet-900">
    <div className="flex justify-center flex-col w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
   
    <ul className="flex justify-center  mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/mohitsaxenaa/" className="mr-4 hover:underline md:mr-6 ">LINKEDIN</a>
        </li>
        <li>
            <a href="https://twitter.com/mohitsaxenaa" className="mr-4 hover:underline md:mr-6">TWITTER</a>
        </li>
        <li>
            <a href="https://github.com/mohitsaxenaa" className="mr-4 hover:underline md:mr-6">GITHUB</a>
        </li>
        <li>
            <a href="https://wa.me/8448122704" className="hover:underline">WHATSAPP</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer

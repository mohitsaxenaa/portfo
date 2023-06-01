import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c3wnw5q', 'template_0qw3p9l', form.current, 'O86Y6_HcONbs4gn8D')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        alert('message send successfully');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    // <div className="flex justify-center items-center h-screen">
    //   <form ref={form} onSubmit={sendEmail} className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
    //     <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
    //     <div className="mb-4">
    //       <label htmlFor="user_name" className="block mb-2 font-medium">Name</label>
    //       <input type="text" name="user_name" id="user_name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="user_email" className="block mb-2 font-medium">Email</label>
    //       <input type="email" name="user_email" id="user_email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="user_number" className="block mb-2 font-medium">Phone Number</label>
    //       <input type="number" name="user_number" id="user_number" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="message" className="block mb-2 font-medium">Message</label>
    //       <textarea name="message" id="message" rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
    //     </div>
    //     <button type="submit" value="Send" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
    //   </form>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-violet-950">
    <form ref={form} onSubmit={sendEmail} className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <div className="mb-4">
        <label htmlFor="user_name" className="block mb-2 font-medium">Name</label>
        <input type="text" name="user_name" id="user_name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="user_email" className="block mb-2 font-medium">Email</label>
        <input type="email" name="user_email" id="user_email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="user_number" className="block mb-2 font-medium">Phone Number</label>
        <input type="number" name="user_number" id="user_number" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-medium">Message</label>
        <textarea name="message" id="message" rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <button type="submit" value="Send" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
    </form>
  </div>
  );
};

export default Contact;


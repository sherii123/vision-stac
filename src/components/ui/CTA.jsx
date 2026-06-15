import React from 'react'

function CTA() {
  return (
    <section className="text-gray-600 body-font bg-blue-100 ">
  <div className="container px-5 py-20 mx-auto flex items-center md:flex-row flex-col">

    {/* Content */}
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 w-full md:w-auto md:text-left text-center">
      <h2 className="text-indigo-600 tracking-widest font-semibold mb-2">
        AVAILABLE FOR WORK
      </h2>

      <h1 className="md:text-4xl text-3xl font-bold text-gray-900">
        Let's Build Something Amazing Together
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        I'm a  Web Developer specializing in React.js,
        JavaScript, and Tailwind CSS. Whether you need a portfolio,
        business website, or modern web application, I'd love to help.
      </p>
    </div>

    {/* Buttons */}
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-wrap gap-4">

      <a
        href="./assets/download cv.pdf"
        download
        className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
      >
        Download CV
      </a>

      

    </div>
  </div>
</section>
  )
}

export default CTA

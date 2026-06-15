import React from 'react'

function Hero() {
  return (

<section id="home" className="bg-conic from-blue-400 to-sky-400 to-50%">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

    
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">

      <p className="text-indigo-600 font-semibold mb-2">
        Hello, I'm
      </p>

      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
       Sehrish
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Web Developer
      </h2>

      <p className="mb-8 leading-relaxed text-gray-600">
        I build modern, responsive and user-friendly websites using
        React.js, Tailwind CSS and JavaScript. Passionate about creating
        clean UI/UX experiences and scalable web applications.
      </p>

      

        
      

      
      <div className="flex flex-wrap gap-3 mt-8">
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          React.js
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          JavaScript
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          Tailwind CSS
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          HTML & CSS
        </span>
      </div>
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
      <img
        className="object-cover object-centre mask-linear-from-<number>  shadow-lg  "
        alt=""
        src="https://img.magnific.com/free-photo/front-view-young-lady-showing-right-side-with-her-document_140725-37617.jpg?semt=ais_hybrid&w=740&q=80"
        
      />
    </div>

  </div>
</section>

  )
}

export default Hero

import React from 'react'

function Blog() {
  return (
    <section id="projects" className="text-gray-600 body-font bg-linear-to-r from-indigo-200 to-teal-300">
      <div className="container px-5 py-24 mx-auto">


        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-widest">
            MY WORK
          </h2>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Featured Projects
          </h1>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Here are some projects I've built using React.js, JavaScript,
            Tailwind CSS, and modern web technologies.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

            <img
              className="lg:h-48 md:h-36 w-full object-cover"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/82724568-5cab-4c56-9f46-7a435a8701e3?w=433&cf_fit=scale-down&q=85&format=auto&s=ed136646e5216751f55abdc4cbaa332bf878fb2b09f72ac94d7ea9a8453ae274"
              alt="Portfolio Website"
            />

            <div className="p-6">
              <h2 className="text-xs font-semibold text-indigo-600 mb-2">
                REACT • TAILWIND CSS
              </h2>

              <h1 className="text-xl font-bold text-gray-900 mb-3">
                Portfolio Website
              </h1>

              <p className="leading-relaxed mb-4">
                A modern responsive portfolio website showcasing projects,
                skills, and contact information.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4 md:w-1/3">
        <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

          <img
            className="lg:h-48 md:h-36 w-full object-cover"
            src="https://img.magnific.com/free-vector/flat-design-online-shopping-landing-page-template_23-2148532676.jpg?semt=ais_hybrid&w=740&q=80"
            alt="E-Commerce Website"
          />

          <div className="p-6">
            <h2 className="text-xs font-semibold text-indigo-600 mb-2">
              REACT • API
            </h2>

            <h1 className="text-xl font-bold text-gray-900 mb-3">
              E-Commerce Store
            </h1>

            <p className="leading-relaxed mb-4">
              An online shopping platform with product filtering,
              cart management, and responsive design.
            </p>


          
        </div>
      </div>
</div>

      <div className="p-4 md:w-1/3">
        <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

          <img
            className="lg:h-48 md:h-36 w-full object-cover"
            src="https://www.shutterstock.com/image-vector/weather-forecast-app-template-mobile-260nw-2607710345.jpg"
            alt="Weather App"
          />

          <div className="p-6">
            <h2 className="text-xs font-semibold text-indigo-600 mb-2">
              JAVASCRIPT • API
            </h2>

            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Weather App
            </h1>

            <p className="leading-relaxed mb-4">
              Real-time weather forecasting application using external
              APIs and responsive UI design.
            </p>

           </div>
          </div>
        </div>
      
    </section>
  )
}

export default Blog

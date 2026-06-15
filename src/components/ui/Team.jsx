import React from 'react'

function Team() {
  return (
    <section id="about" className="text-gray-600 body-font bg-yellow-200">
  <div className="container px-5 py-24 mx-auto">

    {/* Heading */}
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-indigo-600 font-semibold tracking-widest">
        ABOUT ME
      </h2>

      <h1 className="text-4xl font-bold text-gray-900 mt-2">
        Who I Am
      </h1>

      <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600 mt-4">
        I am a passionate Frontend Web Developer focused on building modern,
        responsive, and high-performance web applications using React.js,
        Tailwind CSS, and JavaScript.
      </p>
    </div>

    {/* Profile Cards (skills/personality highlights) */}
    <div className="flex flex-wrap -m-4">

      {/* Card 1 */}
      <div className="p-4 lg:w-1/2 w-full">
        <div className="h-full flex sm:flex-row flex-col items-center sm:items-start text-center sm:text-left bg-gray-50 p-6 rounded-xl">

          

          <div className="sm:pl-6">
            <h2 className="text-xl font-bold text-gray-900">
              Sehrish
            </h2>

            <h3 className="text-indigo-600 mb-3">
              Full stack Web Developer
            </h3>

            <p className="text-gray-600 mb-4">
              I love turning ideas into interactive and responsive web
              applications. I focus on clean UI, reusable components,
              and performance optimization.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                React.js
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 (Skills / Focus) */}
      <div className="p-4 lg:w-1/2 w-full">
        <div className="h-full bg-gray-50 p-6 rounded-xl">

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What I Do Best
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Build responsive websites & web apps</li>
            <li>✔ Create modern UI with Tailwind CSS</li>
            <li>✔ Develop React.js single page applications</li>
            <li>✔ Optimize performance & user experience</li>
          </ul>

          
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Team

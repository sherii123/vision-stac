import React from 'react'

function Stats() {
  return (
    <section className="text-gray-600 body-font bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <div className="container px-5 py-24 mx-auto">

    {/* Heading */}
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-indigo-600 font-semibold tracking-widest">
        MY ACHIEVEMENTS
      </h2>

      <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4">
        Turning Ideas Into Real Projects
      </h1>

      <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600">
        I focus on building modern, responsive, and high-performance web applications
        using React.js, Tailwind CSS, and JavaScript.
      </p>
    </div>

    {/* Stats */}
    <div className="flex flex-wrap -m-4 text-center">

      {/* Projects */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border border-gray-200 bg-white px-4 py-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-indigo-600 text-4xl mb-3">🚀</div>
          <h2 className="title-font font-bold text-3xl text-gray-900">
            5+
          </h2>
          <p className="leading-relaxed">Projects Completed</p>
        </div>
      </div>

      {/* Experience */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border border-gray-200 bg-white px-4 py-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-indigo-600 text-4xl mb-3">💼</div>
          <h2 className="title-font font-bold text-3xl text-gray-900">
            6+ Months
          </h2>
          <p className="leading-relaxed">Learning Experience</p>
        </div>
      </div>

      {/* Skills */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border border-gray-200 bg-white px-4 py-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-indigo-600 text-4xl mb-3">⚡</div>
          <h2 className="title-font font-bold text-3xl text-gray-900">
            3+
          </h2>
          <p className="leading-relaxed">Technologies</p>
        </div>
      </div>

      {/* Clients */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border border-gray-200 bg-white px-4 py-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-indigo-600 text-4xl mb-3">🤝</div>
          <h2 className="title-font font-bold text-3xl text-gray-900">
            2+
          </h2>
          <p className="leading-relaxed">Happy Clients</p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Stats

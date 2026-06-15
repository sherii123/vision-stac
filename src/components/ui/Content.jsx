import React from 'react'

function Content() {
  return (
    <section id="skills" className="text-gray-600 body-font bg-conic from-blue-400 to-sky-400 to-50%">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
        Skills & Expertise
      </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        I build modern, responsive, and user-friendly web applications using
        the latest technologies and best development practices.
      </p>
    </div>

    <div className="flex flex-wrap -m-4">

      {/* Frontend */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-lg text-gray-900 font-semibold mb-2">
            Frontend Development
          </h2>
          <p className="leading-relaxed text-base">
            Building responsive user interfaces with React.js, Tailwind CSS,
            JavaScript, and modern UI frameworks.
          </p>
        </div>
      </div>

      {/* Backend */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-lg text-gray-900 font-semibold mb-2">
            Backend Development
          </h2>
          <p className="leading-relaxed text-base">
            Developing secure APIs and server-side applications using Node.js,
            Express.js, and MongoDB.
          </p>
        </div>
      </div>

      {/* Full Stack */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-lg text-gray-900 font-semibold mb-2">
            Full Stack Projects
          </h2>
          <p className="leading-relaxed text-base">
            Creating complete MERN stack applications from UI design to
            database integration and deployment.
          </p>
        </div>
      </div>

      {/* Responsive Design */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-lg text-gray-900 font-semibold mb-2">
            Responsive Design
          </h2>
          <p className="leading-relaxed text-base">
            Ensuring websites work seamlessly across desktops, tablets, and
            mobile devices.
          </p>
        </div>
      </div>

      {/* Performance */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-lg text-gray-900 font-semibold mb-2">
            Performance Optimization
          </h2>
          <p className="leading-relaxed text-base">
            Improving website speed, SEO, accessibility, and overall user
            experience.
          </p>
        </div>
      </div>

      {/* Deployment */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-lg text-gray-900 font-semibold mb-2">
            Deployment & Maintenance
          </h2>
          <p className="leading-relaxed text-base">
            Deploying applications on Vercel, Netlify, and cloud platforms with
            continuous updates and support.
          </p>
        </div>
      </div>

    </div>

    
  </div>
</section>
  )
}

export default Content

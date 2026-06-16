import React from 'react'

function Blog() {
  return (
    <section id="projects" class="text-gray-600 body-font bg-sky-500/70">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="text-center mb-12">
      <h2 class="text-sm text-indigo-500 tracking-widest font-medium">
        MY WORK
      </h2>
      <h1 class="text-4xl font-bold text-gray-900">
        Featured Projects
      </h1>
      <p class="mt-4 text-gray-500">
        A collection of projects showcasing my skills in web development,
        UI/UX design, and modern technologies.
      </p>
    </div>

    <div class="flex flex-wrap -m-4">

     
      <div class="p-4 md:w-1/3">
        <div class="h-full border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://cdn.dribbble.com/userupload/23744972/file/original-f09ad4491cf30c1628e68083ad7d12ad.jpg?resize=400x0"
            alt="E-Commerce Website"
          />

          <div class="p-6">
            <h2 class="tracking-widest text-xs font-medium text-indigo-500 mb-1">
              React • Tailwind • Node.js
            </h2>

            <h1 class="text-xl font-semibold text-gray-900 mb-3">
              E-Commerce Website
            </h1>

            <p class="leading-relaxed mb-4">
              A fully responsive e-commerce platform with authentication,
              shopping cart, payment integration, and admin dashboard.
            </p>

            
          </div>
        </div>
      </div>

     
      <div class="p-4 md:w-1/3">
        <div class="h-full border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://i.ytimg.com/vi/RroDdybvu5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJ9Z8bCU10U3JtCLkhXNErdirz6A"
            alt="Portfolio Website"
          />

          <div class="p-6">
            <h2 class="tracking-widest text-xs font-medium text-indigo-500 mb-1">
              Next.js • Tailwind CSS
            </h2>

            <h1 class="text-xl font-semibold text-gray-900 mb-3">
              Personal Portfolio
            </h1>

            <p class="leading-relaxed mb-4">
              A modern portfolio website featuring animations, responsive
              layouts, project showcases, and contact functionality.
            </p>

            
          </div>
        </div>
      </div>

      
      <div class="p-4 md:w-1/3">
        <div class="h-full border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://stastic.ui4free.com/public/images/task-management-web-app-design-figma-template_1657335020.jpg"
            alt="Task Management App"
          />

          <div class="p-6">
            <h2 class="tracking-widest text-xs font-medium text-indigo-500 mb-1">
              MERN Stack
            </h2>

            <h1 class="text-xl font-semibold text-gray-900 mb-3">
              Task Management App
            </h1>

            <p class="leading-relaxed mb-4">
              A productivity application with task tracking, authentication,
              team collaboration, and real-time updates.
            </p>

            
            </div>
          </div>
        </div>
      </div>

    </div>
 
</section>
  )
}

export default Blog

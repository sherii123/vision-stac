import React from 'react'

function Features() {
  return (
    <section class="text-gray-600 body-font bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-4xl text-3xl font-bold title-font text-center text-gray-900 mb-20">
      What I Do
      <br class="hidden sm:block"/>
      Services & Expertise
    </h1>

    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

      
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg font-semibold mb-2">
            Web Development
          </h2>
          <p class="leading-relaxed text-base">
            Building responsive, fast, and modern websites using React,
            Next.js, Tailwind CSS, and JavaScript. Focused on performance
            and user experience.
          </p>
          
            
          
        </div>
      </div>

      
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg font-semibold mb-2">
            UI/UX Design
          </h2>
          <p class="leading-relaxed text-base">
            Designing clean, user-friendly interfaces that create engaging
            digital experiences while maintaining accessibility and
            consistency.
          </p>
          
          
        </div>
      </div>

      
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg font-semibold mb-2">
            Freelance Solutions
          </h2>
          <p class="leading-relaxed text-base">
            Helping businesses and startups transform ideas into digital
            products with scalable, maintainable, and high-quality code.
          </p>
          
            
          
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Features

import React from 'react'


export default function Footer() {
  return (
    
      <footer class="text-grey-300 body-font bg-radial-[at_25%_25%] from-white to-zinc-900 to-100%">
  <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-wrap md:text-left text-center">

      
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-300 tracking-widest text-sm mb-4">
          ABOUT ME
        </h2>
        <p class="text-black text-sm leading-relaxed">
          Passionate Web Developer focused on creating modern,
          responsive, and user-friendly web applications.
        </p>
      </div>

      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-sm mb-4">
          QUICK LINKS
        </h2>
        <nav class="list-none">
          <li><a href="#home" class="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" class="hover:text-indigo-600">About</a></li>
          <li><a href="#projects" class="hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" class="hover:text-indigo-600">Contact</a></li>
        </nav>
      </div>

      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-sm mb-4">
          SKILLS
        </h2>
        <nav class="list-none">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
        </nav>
      </div>

      
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-sm mb-4">
          CONTACT ME
        </h2>

        <div class="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email"
            class="w-full bg-white rounded border border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />

          <button
            class="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded">
            Let's Connect
          </button>
        </div>

        <p class="text-black text-sm mt-3">
          Available for web developer and full-time opportunities.
        </p>
      </div>

    </div>
  </div>

 
  <div class="">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">

     
      <a class="flex title-font font-medium items-center text-gray-900">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
          S
        </div>
        <span class="ml-3 text-xl">Sehrish</span>
      </a>

     
      <p class="text-sm text-black sm:ml-6 sm:mt-0 mt-4">
        © 2026 Sehrish. All Rights Reserved.
      </p>

      
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

        <a href="https://github.com/yourusername"
           target="_blank"
           class="text-black hover:text-sky-500">
          GitHub
        </a>

        <a href="https://linkedin.com/in/yourusername"
           target="_blank"
           class="ml-4 text-black hover:text-blue-600">
          LinkedIn
        </a>

        <a href="https://twitter.com/yourusername"
           target="_blank"
           class="ml-4 text-black hover:text-sky-500">
          Twitter
        </a>

      </span>

    </div>
  </div>
</footer>
    
  )
}



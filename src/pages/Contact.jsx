import React from 'react'

function Contact() {
  return (
    <section id="contact" class="text-gray-600 body-font relative">

<div className="absolute inset-0 bg-gray-300">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809.235553545633!2d74.36230859373879!3d31.424655397031536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907a85a4b6f13%3A0x88e72edcf3aaf52!2sPolice%20Station%20-%20Nishter%20Colony!5e0!3m2!1sen!2s!4v1781453144939!5m2!1sen!2s"
    title="Google Map"
    style={{
      filter: "grayscale(1) contrast(1.2) opacity(0.4)",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">


  <h2 class="text-gray-900 text-2xl font-bold mb-2">
    Contact Me
  </h2>

  <p class="leading-relaxed mb-5 text-gray-600">
    Have a project in mind or looking for a web developer? Feel free to
    send me a message. I'll get back to you as soon as possible.
  </p>

  <div class="relative mb-4">
    <label for="name" class="leading-7 text-sm text-gray-600">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3"/>
  </div>

  <div class="relative mb-4">
    <label for="email" class="leading-7 text-sm text-gray-600">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3"/>
  </div>

  <div class="relative mb-4">
    <label for="message" class="leading-7 text-sm text-gray-600">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none"></textarea>
  </div>

  <button
    class="text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    Send Message
  </button>

  <p class="text-sm text-gray-500 mt-4 text-center">
    Available for web projects and full-time opportunities.
  </p>

</div>


  </div>
</section>

    
  )
}

export default Contact

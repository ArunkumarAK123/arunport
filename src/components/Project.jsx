import React from 'react';
import me from '../assets/me.jpeg';

const Home = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
      style={{
        backgroundImage: `url(${me})`,
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg text-center max-w-2xl shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm Arun 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I'm a passionate Frontend Developer focused on building clean, responsive web interfaces using React, Tailwind CSS, and modern JavaScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
        {/* Optional Socials */}
        <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-600">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-gray-900"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-blue-700"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

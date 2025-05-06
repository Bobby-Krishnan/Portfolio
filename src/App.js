import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="p-4 shadow bg-white sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Bobby Krishnan</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold mb-2">Hi, I'm Bobby Krishnan</h2>
        <p className="text-lg max-w-xl">
          I'm a computer science student and developer passionate about building modern web apps and solving real-world problems through code.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="mb-2">
            I love building web and software projects that make life easier, cleaner, or more fun. I’m particularly interested in full-stack development, UI/UX, and open source.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
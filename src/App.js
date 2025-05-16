import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="font-sans bg-[#F5F9FF] text-[#1E293B]">
      {/* Navbar */}
      <nav className="p-4 shadow bg-[#012169] sticky top-0 z-10 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Bobby Krishnan</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-[#0076C8]">About</a>
            <a href="#projects" className="hover:text-[#0076C8]">Projects</a>
            <a href="#contact" className="hover:text-[#0076C8]">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#F5F9FF] to-white">
        <h2 className="text-5xl font-extrabold text-[#012169] mb-4">Hi, I'm Bobby Krishnan</h2>
        <p className="text-lg max-w-xl leading-relaxed">
          If you can't do what you imagine, then what is imagination to you?
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-2xl font-bold mb-8 text-[#012169]">Projects</h3>

          {/* AI Section */}
          <h4 className="text-xl font-semibold mb-4"> Artificial Intelligence</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Tilt className="p-6 bg-white rounded-2xl shadow transition-transform">
              <h4 className="text-xl font-semibold">Shrinx</h4>
              <p className="mt-2 text-sm">
              A CLI tool that compresses token-heavy chat logs into semantically equivalent formats, reducing LLM context size and API costs while improving performance across agent and memory pipelines.
              </p>
              <p className="mt-2 text-sm text-gray-600 italic">
              Technologies: Python, Docker, Hugging Face Transformers, WizardLM (via LLaMA.cpp), JSON/JSONL, CLI, FastAPI (planned)
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href="https://github.com/Bobby-Krishnan/Shrinx"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <div className="mt-4">
              <iframe
              src="https://www.youtube.com/embed/UWKTfc2K8ek"
              title="Shrinx Demo"
              width="100%"
              height="315"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
              ></iframe>
                </div>
              </div>
            </Tilt>
          </div>
    

          {/* Finance Section */}
          <h4 className="text-xl font-semibold mb-4"> Finance</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Tilt className="p-6 bg-white rounded-2xl shadow transition-transform">
              <h4 className="text-xl font-semibold">IMC Prosperity 3 – Team Saturn</h4>
              <p className="mt-2 text-sm">
                IMC's Global algorithmic trading competition by IMC. Placed #116 worldwide and #33 in the U.S. out of 12,620 participants.
              </p>
              <p className="mt-2 text-sm text-gray-600 italic">
                Technologies: Python, NumPy, jsonpickle, custom trading simulator
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href="https://github.com/Bobby-Krishnan/IMC-Prosperity-3"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </Tilt>

            <Tilt className="p-6 bg-white rounded-2xl shadow transition-transform">
              <h4 className="text-xl font-semibold">Stock Price Forecasting Model</h4>
              <p className="mt-2 text-sm">
                An LSTM-based predictive model for forecasting stock price trends.
              </p>
              <p className="mt-2 text-sm text-gray-600 italic">
                Technologies: Python, Streamlit, pandas, NumPy, Keras, matplotlib
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href="https://github.com/Bobby-Krishnan/Stock-Trend-Indicator"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </Tilt>
          </div>

          {/* Games Section */}
          <h4 className="text-xl font-semibold mb-4"> Games</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Tilt className="p-6 bg-white rounded-2xl shadow transition-transform">
              <h4 className="text-xl font-semibold">ThinkFast</h4>
              <p className="mt-2 text-sm">
                A fast-paced mental math game featuring solo and real-time multiplayer modes. I have a high score of 146 with the default settings.
              </p>
              <p className="mt-2 text-sm text-gray-600 italic">
                Technologies: React, Vite, Firebase, React Router
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href="https://github.com/Bobby-Krishnan/ThinkFast"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://thinkfast-df319.web.app/"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </Tilt>

            <Tilt className="p-6 bg-white rounded-2xl shadow transition-transform">
              <h4 className="text-xl font-semibold">Kai's Ascent</h4>
              <p className="mt-2 text-sm">
                A retro-inspired 2D side-scrolling action platformer built in Unity.
              </p>
              <p className="mt-2 text-sm text-gray-600 italic">
                Technologies: Unity, C#, Tilemap System, Animator, Input System
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href="https://github.com/Bobby-Krishnan/Kai-s-Ascent"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://bobby-krishnan.itch.io/kais-ascent"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </Tilt>

            <Tilt className="p-6 bg-white rounded-2xl shadow transition-transform">
              <h4 className="text-xl font-semibold">Gambler’s Ruin Game</h4>
              <p className="mt-2 text-sm">
                A 2D Old West-themed action platformer developed in Unity.
              </p>
              <p className="mt-2 text-sm text-gray-600 italic">
                Technologies: Unity, C#
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href="https://github.com/Bobby-Krishnan/Gambler-s-Ruin-Game"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://bobby-krishnan.itch.io/gamblers-ruin"
                  className="text-[#0076C8] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#012169]">Get In Touch</h3>
          <p className="mb-6 text-[#1E293B]">
            I'm always open to discussing new projects, collaborations, or opportunities. Feel free to reach out!
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:Abhishek.Krishnan@duke.edu" className="text-[#0076C8] hover:underline">
              Abhishek.Krishnan@duke.edu
            </a>
          </p>
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/abhishekkrishnan04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0076C8] hover:text-[#00539B]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Bobby-Krishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E293B] hover:text-black"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

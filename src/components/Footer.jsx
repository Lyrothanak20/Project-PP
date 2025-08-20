import React from "react";
import FloatingParticle from "./FloatingParticle";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Github } from "lucide-react"; 

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800">
      <FloatingParticle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + intro */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-2">
              <BookOpenIcon className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                BOOKSHOW
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your gateway to infinite worlds. Discover, read and escape into
              stories that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Explore
            </h3>
            <ul className="space-y-3">
              {["Trending", "New Releases", "Genres", "Authors"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-300 text-sm transition-colors flex items-center justify-center sm:justify-start group"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Powered By
            </h3>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {["React", "Tailwind", "Vite", "GoogleAPI"].map((tech) => (
                <span
                  className="px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyan-300 transition-all"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/Lyrothanak20/Project-PP.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 text-sm transition-colors flex items-center justify-center sm:justify-start group"
                >
                  <Github className="h-5 w-5 mr-2 text-gray-400 group-hover:text-cyan-300 transition-colors" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

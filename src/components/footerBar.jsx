import { FaXTwitter, FaGithub } from 'react-icons/fa6';

function Footer() {

  return (

    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          <div>
            <div className="flex items-center mb-4">
              <svg
                className="h-8 w-8 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18V5l12-2v13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="ml-2 text-xl font-bold font-playfair text-white/70">
                Midnight Blues
              </span>
            </div>
            <p className="font-inter text-sm text-gray-400">
              Discover the best 30-second music snippets, explore artists and albums in a
              beautiful dark-themed experience.
            </p>
          </div>

          <div className="md:flex md:justify-center">
            <div>
              <h3 className="font-inter text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="font-inter text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="font-inter text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About Dev
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:justify-end space-x-4 mt-8 md:mt-0">

            <a
              href="https://x.com/White_nvm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/Aayushman-nvm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 font-inter">© 2025 Midnight Blues. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;

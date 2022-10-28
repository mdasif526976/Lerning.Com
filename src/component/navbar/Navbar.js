import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const { user, signOunt } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Lerning.Com
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catagoris"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <ul className=" items-center hidden space-x-8 lg:flex">
          {user?.uid ? <>
            <li>
              <Link
                to=""
                onClick={signOunt}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded  hover:bg-sky-700 hover:text-white focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Log out
              </Link>
            </li>
            <li>
              <div className="tooltip tooltip-bottom flex space-x-5" data-tip={user?.displayName}>
                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500
      ring-gray-700 ring-offset-gray-800" src={user?.photoURL} />

              </div>
            </li>
          </> : <>
            <li>
              <Link
                to="/login"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide text-gray-700  hover:bg-sky-700 hover:text-white px-6 py-4 rounded  transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded  hover:bg-sky-700 hover:text-white focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>

          </>

          }
          <li>
            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
              <span>Dark</span>
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" />
                <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
              </span>
            </label>
          </li>

        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-500 focus:bg-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="tooltip tooltip-bottom flex space-x-5" data-tip={user?.displayName}>
              <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500
      ring-gray-700 ring-offset-gray-800" src={user?.photoURL} />
            </div>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 z-40 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Lerning.Com"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Lerning.Com
                      </span>
                    </Link>
                  </div>
                  <div>
                   
                   <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    > 
                
                    <div className="tooltip tooltip-bottom flex space-x-5" data-tip={user?.displayName}>
                      <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500
                       ring-gray-700 ring-offset-gray-800" src={user?.photoURL} />
      
</div>
                          
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4 bg-white-300 ">
                  <li>
                    <Link
                      to="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide  text-gray-700 transition-colors duration-100 py-2 px-28 rounded hover:text-white hover:bg-sky-500"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catagoris"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-white hover:bg-sky-500 py-2 px-28 rounded"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-white hover:bg-sky-500 py-2 px-28 rounded"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-white hover:bg-sky-500 py-2 px-28 rounded"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/login"
                      aria-label="Sign in"
                      title="Sign in"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-white hover:bg-sky-500 py-2 px-28 rounded"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-white hover:bg-sky-500 py-2 px-28 rounded"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={signOunt}
                      to=''
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-white hover:bg-sky-500 py-2 px-28 rounded"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      LogOut
                    </Link>
                  </li>
                  <li>
                    <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                      <span>Dark</span>
                      <span className="relative">
                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                        <div className="w-10 h-6 rounded-full shadow-inner checked:bg-green-500  dark:bg-gray-400 peer- checked:dark:bg-violet-400"></div>
                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                      </span>
                    </label>
                  </li>
                </ul>
              </nav>
            </div>
            </div>
          )}
      </div>
    </div>
    </div >
  );
};

export default Navbar;
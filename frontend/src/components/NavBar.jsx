import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
          <nav className="w-full h-14 shadow-xl bg-gray-200">
            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 ">
              <Link to="/">
                <div>Whisked Away</div>
              </Link>
              <div>
                <ul className="hidden sm:flex">
                  <Link to='/recipes'>
                    <li className="ml-10 uppercase text-xl">Recipes</li>
                  </Link>
                  <Link to='/tips'>
                    <li className="ml-10 uppercase text-xl">Tips</li>
                  </Link>
                  <Link to='/contact'>
                    <li className="ml-10 uppercase text-xl">Contact</li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
}

export default NavBar
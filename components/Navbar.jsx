"use client";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import { useClerk, UserButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useAppContext();
  const { openSignIn } = useClerk(); 

  return (
    <nav className="flex justify-center items-center h-screen"> 
      <ul className="flex flex-col items-center gap-4"> 
        <li>
          {user ? (
            <div className="flex justify-center"> 
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="flex items-center gap-2 transition px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              <span>My Account</span>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
"use client";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import { useClerk, UserButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBookOpen, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useAppContext();
  const { openSignIn } = useClerk();
  const router = useRouter();

  return (
    <nav className="flex justify-center items-center">
      <ul className="hidden md:flex items-center gap-6">

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Our Course"
                labelIcon={<FontAwesomeIcon icon={faBookOpen} />}
                onClick={() => router.push("/ourcourse")}
              />
              <UserButton.Action
                label="My Orders"
                labelIcon={<FontAwesomeIcon icon={faShoppingBag} />}
                onClick={() => router.push("/myorder")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <FontAwesomeIcon icon={faUser} />
            Account
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

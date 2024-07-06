import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProfileIcon = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const dropdownRef = useRef(null);

  const letterColors = {
    A: "#FF5733",
    B: "#33FF57",
    C: "#3357FF",
    D: "#FF33A1",
    E: "#FF8F33",
    F: "#57FF33",
    G: "#33A1FF",
    H: "#A133FF",
    I: "#FF5733",
    J: "#33FF57",
    K: "#3357FF",
    L: "#FF33A1",
    M: "#FF8F33",
    N: "#57FF33",
    O: "#33A1FF",
    P: "#A133FF",
    Q: "#FF5733",
    R: "#33FF57",
    S: "#3357FF",
    T: "#FF33A1",
    U: "#FF8F33",
    V: "#57FF33",
    W: "#33A1FF",
    X: "#A133FF",
    Y: "#FF5733",
    Z: "#33FF57",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeDropdown);
    } else {
      document.removeEventListener("mousedown", closeDropdown);
    }

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);

  const firstLetter = name && name.charAt(0).toUpperCase();
  const backgroundColor = letterColors[firstLetter] || "#000"; 

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {user.profilePhoto ? (
          <div
            style={{
              backgroundImage: `url(${user.profilePhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid white",
              marginRight: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {firstLetter || "?"}
          </div>
        )}
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-white">{username}</span>
        </div>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/notifications">Notifications</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/reviews">Reviews</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/network">Network</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/find-friends">Find friends</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
              <Link to="/settings">Settings</Link>
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
              onClick={onLogout}
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;

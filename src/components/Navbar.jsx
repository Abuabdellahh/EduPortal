import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaGraduationCap,
  FaUserCircle,
  FaBell,
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaQuestionCircle,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", icon: FaHome, text: "Home" },
    { to: "/tutorials", icon: FaBook, text: "Tutorials" },
    { to: "/courses", icon: FaGraduationCap, text: "Courses" },
    { to: "/week-one", icon: FaCalendarAlt, text: "Week One" },
    { to: "/calendar", icon: FaCalendarAlt, text: "Calendar" },
    { to: "/help", icon: FaQuestionCircle, text: "Help Center" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } shadow-lg`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaGraduationCap className="text-3xl text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              EduPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.to)
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <link.icon
                  className={isActive(link.to) ? "text-blue-600" : ""}
                />
                <span>{link.text}</span>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <FaBell />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaUserCircle className="text-xl" />
              <span>Profile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                isActive(link.to)
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <link.icon />
              <span>{link.text}</span>
            </Link>
          ))}
          <div className="border-t pt-2">
            <button className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <FaUserCircle />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

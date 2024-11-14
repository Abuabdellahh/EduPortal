import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaClock,
  FaStar,
  FaUserFriends,
  FaBookmark,
  FaFilter,
  FaSort,
  FaThLarge,
  FaList,
} from "react-icons/fa";

const TutorialCard = ({ tutorial }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={tutorial.image}
          alt={tutorial.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FaBookmark
            className={isBookmarked ? "text-blue-600" : "text-gray-400"}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="text-white text-sm font-medium px-2 py-1 bg-blue-600 rounded-full">
            {tutorial.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FaClock className="mr-1" />
              {tutorial.duration}
            </span>
            <span className="flex items-center">
              <FaStar className="mr-1 text-yellow-400" />
              {tutorial.rating}
            </span>
            <span className="flex items-center">
              <FaUserFriends className="mr-1" />
              {tutorial.students}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={tutorial.instructor.avatar}
              alt={tutorial.instructor.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-600">
              {tutorial.instructor.name}
            </span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <FaPlay />
            <span>Start</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Tutorials = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");

  const tutorials = [
    {
      id: 1,
      title: "Modern JavaScript Fundamentals",
      description: "Master the basics of JavaScript with practical examples",
      image: "https://source.unsplash.com/random/800x600?javascript",
      category: "JavaScript",
      duration: "2h 30m",
      rating: 4.8,
      students: 1234,
      instructor: {
        name: "Sarah Johnson",
        avatar: "https://source.unsplash.com/random/100x100?woman",
      },
    },
    // Add more tutorials here
  ];

  const categories = ["all", "javascript", "python", "react", "node", "design"];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Featured Tutorials</h1>
            <p className="text-gray-600">Learn from expert-curated tutorials</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <FaThLarge />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border-none bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <FaSort className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-none bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Tutorial Grid */}
        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-6`}
        >
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Load More Tutorials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;

import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaBook,
  FaVideo,
  FaUserGraduate,
  FaClock,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [recentSearches] = useState([
    "JavaScript Basics",
    "React Hooks",
    "Web Development",
  ]);

  const categories = [
    { id: "all", name: "All", icon: FaSearch },
    { id: "courses", name: "Courses", icon: FaBook },
    { id: "tutorials", name: "Tutorials", icon: FaVideo },
    { id: "instructors", name: "Instructors", icon: FaUserGraduate },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for courses, tutorials, or topics..."
                className="w-full p-4 pl-12 pr-40 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />

              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FaFilter />
                  <span>Filters</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <category.icon />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Recent Searches */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(search)}
                  className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 bg-white p-6 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <option>All Levels</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <option>Any Duration</option>
                    <option>0-2 Hours</option>
                    <option>2-5 Hours</option>
                    <option>5+ Hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <select className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <option>Any Rating</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                    <option>2+ Stars</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                  Reset Filters
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

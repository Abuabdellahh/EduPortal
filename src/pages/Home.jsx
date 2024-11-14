import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaRocket,
  FaClock,
  FaStar,
  FaUserGraduate,
  FaCalendarAlt,
  FaTrophy,
  FaChartLine,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`bg-white p-6 rounded-xl shadow-lg ${color}`}
  >
    <div className="flex items-center space-x-4">
      <Icon className="text-3xl" />
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

const CourseCard = ({ course }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-2">
        <span className={`px-2 py-1 rounded-full text-xs ${course.levelColor}`}>
          {course.level}
        </span>
        <span className="text-gray-500 text-sm">{course.duration}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-600">
            {course.instructor.name}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-400" />
          <span className="font-bold">{course.rating}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { icon: FaBook, title: "Courses", value: "125+", color: "text-blue-600" },
    {
      icon: FaUserGraduate,
      title: "Students",
      value: "12K+",
      color: "text-green-600",
    },
    {
      icon: FaCertificate,
      title: "Certificates",
      value: "8K+",
      color: "text-purple-600",
    },
    { icon: FaTrophy, title: "Awards", value: "15+", color: "text-yellow-600" },
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn full-stack web development from scratch",
      image: "https://source.unsplash.com/random/800x600?coding",
      level: "Intermediate",
      levelColor: "bg-yellow-100 text-yellow-800",
      duration: "12 weeks",
      rating: 4.9,
      instructor: {
        name: "John Doe",
        avatar: "https://source.unsplash.com/random/100x100?portrait",
      },
    },
    // Add more courses here
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Unlock Your Learning Potential
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Access world-class education and transform your career with our
              expert-led courses
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Featured Courses */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-gray-600">Explore our most popular courses</p>
        </div>

        {/* Course Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {["all", "development", "design", "business"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8">
            Join thousands of students already learning with us
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaPlayCircle,
  FaBook,
  FaQuestion,
  FaListAlt,
  FaTasks,
  FaYoutube,
  FaFile,
  FaDownload,
  FaLock,
  FaClock,
  FaStar,
  FaCode,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const AccordionItem = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div className="border rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between ${
          isOpen ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center space-x-3">
          <Icon
            className={`text-xl ${isOpen ? "text-white" : "text-blue-600"}`}
          />
          <span className="font-semibold text-lg">{title}</span>
        </div>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>▼</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-white">{children}</div>
      </motion.div>
    </motion.div>
  );
};

const VideoItem = ({ title, duration, youtubeId, isLocked }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => !isLocked && setShowVideo(!showVideo)}
            className="relative"
          >
            <FaPlayCircle
              className={`text-2xl ${
                isLocked ? "text-gray-400" : "text-blue-600"
              }`}
            />
            {isLocked && (
              <FaLock className="absolute -top-1 -right-1 text-xs text-gray-500" />
            )}
          </button>
          <div>
            <h4 className="font-medium">{title}</h4>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FaClock />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="mt-2 aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

const WeekOne = () => {
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [todos, setTodos] = useState([
    { id: 1, text: "Review HTML basics", priority: "high" },
    { id: 2, text: "Complete CSS exercises", priority: "medium" },
    { id: 3, text: "Practice JavaScript", priority: "low" },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const toggleTask = (taskId) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          priority: "medium",
        },
      ]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl pt-20">
      {/* Week Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Week 1: Web Development Skills
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <span>5 hours content</span>
          </div>
          <div className="flex items-center">
            <FaStar className="mr-2 text-yellow-400" />
            <span>4.9 Rating</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-6">
        <AccordionItem title="Class Notes" icon={FaBook} defaultOpen={true}>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Key Learning Objectives:</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>HTML5 Structure and Semantics</li>
                <li>CSS3 Styling and Layouts</li>
                <li>JavaScript Fundamentals</li>
                <li>Responsive Design Principles</li>
              </ul>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FaFile className="text-blue-600" />
                <span>Complete Week 1 Notes</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <FaDownload />
                <span>Download</span>
              </button>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Required Videos" icon={FaYoutube}>
          <div className="space-y-2">
            <VideoItem
              title="HTML Fundamentals"
              duration="15:30"
              youtubeId="qz0aGYrrlhU"
            />
            <VideoItem
              title="CSS Basics"
              duration="20:45"
              youtubeId="1PnVor36_40"
            />
            <VideoItem
              title="JavaScript Introduction"
              duration="18:20"
              youtubeId="W6NZfCO5SIk"
              isLocked={true}
            />
          </div>
        </AccordionItem>

        <AccordionItem title="Questions Asked in Class" icon={FaQuestion}>
          <div className="space-y-4">
            {[
              {
                question: "What is the difference between HTML and HTML5?",
                answer:
                  "HTML5 introduces semantic elements, better multimedia support, and improved form controls.",
              },
              {
                question: "How do CSS flexbox and grid differ?",
                answer:
                  "Flexbox is one-dimensional for rows/columns, while Grid is two-dimensional for complex layouts.",
              },
              {
                question: "What are JavaScript promises?",
                answer:
                  "Promises handle asynchronous operations with success and error handling capabilities.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-blue-600">Q: {item.question}</p>
                <p className="mt-2 text-gray-600">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem title="Checklist" icon={FaListAlt}>
          <div className="space-y-2">
            {[
              "Set up development environment",
              "Complete HTML exercises",
              "Practice CSS layouts",
              "Write basic JavaScript code",
              "Submit weekly assignment",
            ].map((task, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={completedTasks.has(index)}
                  onChange={() => toggleTask(index)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                />
                <span
                  className={
                    completedTasks.has(index)
                      ? "line-through text-gray-500"
                      : ""
                  }
                >
                  {task}
                </span>
              </label>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem title="Todo List" icon={FaTasks}>
          <div className="space-y-4">
            <form onSubmit={addTodo} className="flex items-center space-x-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new task..."
                className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </form>

            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        todo.priority === "high"
                          ? "bg-red-500"
                          : todo.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                    <span>{todo.text}</span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default WeekOne;

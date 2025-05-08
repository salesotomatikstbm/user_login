// /app/ourcourse/page.jsx
"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
const OurCoursePage = () => {
  return (
    
    <div className="p-8">
            <Navbar/>
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faBookOpen} className="text-blue-600" />
        Our Courses
      </h1>
      <p className="text-gray-700 mb-6">
        Explore our courses and choose the right path for your learning.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Sample course cards */}
        {["Web Development", "JavaScript Basics", "React Mastery"].map((course, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{course}</h2>
            <p className="text-sm text-gray-600">
              Learn about {course.toLowerCase()} with interactive lessons.
            </p>
            <button className="mt-4 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoursePage;

import React, { useState } from "react";
import SearchIcon from "../assets/search.svg";

const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and React to build modern web apps.",
    instructor: "Prof. Sharma",
    image: "https://images.unsplash.com/photo-1523475496153-3d6cc3000f4c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Data Structures",
    description: "Understand algorithms, linked lists, stacks, queues, and trees.",
    instructor: "Dr. Verma",
    image: "https://images.unsplash.com/photo-1537432376769-00a53c6b9333?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Computer Networks",
    description: "Dive into TCP/IP, routing, DNS, and network security fundamentals.",
    instructor: "Prof. Iyer",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d159e9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Database Systems",
    description: "Master SQL, relational databases, and data modeling techniques.",
    instructor: "Dr. Banerjee",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
  },
];

function Courses() {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", marginLeft: "64px", minHeight: "100vh" }}>
      {/* Header */}
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Courses
      </h1>
      <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem" }}>
        Browse all available courses. Use the search bar to quickly find what you need.
      </p>

      {/* Search Bar */}
      <div style={{ position: "relative", width: "350px", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.6rem 1rem 0.6rem 2.5rem",
            width: "100%",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          style={{
            position: "absolute",
            left: "0.8rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "1rem",
            height: "1rem",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Courses Grid */}
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              style={{
                width: "280px",
                background: "#fff",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={course.image}
                alt={course.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  {course.title}
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.5rem" }}>
                  {course.description}
                </p>
                <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#777" }}>
                  Instructor: {course.instructor}
                </p>
                <button
                  style={{
                    marginTop: "0.8rem",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "0.5rem",
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
                >
                  Enroll
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "1rem", color: "#999" }}>No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;

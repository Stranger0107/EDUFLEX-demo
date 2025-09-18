import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import profilePic from "../assets/Profile.jpg"; // ✅ use local image

function User() {
  // Dummy user data
  const user = {
    name: "Aditya Choudhary",
    year: "3rd Year, Computer Engineering",
    profilePic: profilePic,
    courses: [
      "Computer Networks",
      "Database Management",
      "Operating Systems",
      "Web Development",
      "Machine Learning",
    ],
    pendingAssignments: 2,
  };

  // Dummy progress data for chart
  const progressData = [
    { name: "Completed", value: 70 },
    { name: "Remaining", value: 30 },
  ];

  const COLORS = ["#28a745", "#ccc"];

  const assignments = [
    { title: "Math Homework", due: "2025-09-20" },
    { title: "History Essay", due: "2025-09-25" },
  ];

  return (
    <div style={{ padding: "2rem", marginLeft: "5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
        User Profile
      </h1>

      {/* Profile Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2rem",
          background: "#fff",
          padding: "1rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={user.profilePic}
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginRight: "1.5rem",
          }}
        />
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>{user.name}</h2>
          <p style={{ fontSize: "1rem", color: "#555" }}>{user.year}</p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Courses Enrolled: <strong>{user.courses.length}</strong>
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Pending Assignments: <strong>{user.pendingAssignments}</strong>
          </p>
        </div>
      </div>

      {/* Graph + Assignments */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Progress Overview */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#fff",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>Progress Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={progressData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                dataKey="value"
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pending Assignments */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#fff",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>Pending Assignments</h3>
          {assignments.length === 0 ? (
            <p>No pending assignments 🎉</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {assignments.map((a, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.8rem",
                    marginBottom: "0.8rem",
                    background: "#f9f9f9",
                    borderRadius: "0.5rem",
                  }}
                >
                  <strong>{a.title}</strong>
                  <p style={{ margin: 0, color: "#555" }}>Due: {a.due}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Courses List */}
      <div
        style={{
          background: "#fff",
          padding: "1rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Enrolled Courses</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {user.courses.map((course, index) => (
            <li
              key={index}
              style={{
                padding: "0.8rem",
                marginBottom: "0.8rem",
                background: "#f9f9f9",
                borderRadius: "0.5rem",
              }}
            >
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default User;

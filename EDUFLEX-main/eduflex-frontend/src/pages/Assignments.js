import React, { useState } from "react";

function Assignments() {
  const [filter, setFilter] = useState("all");

  const assignments = [
    { title: "Math Homework", status: "pending", due: "2025-09-20" },
    { title: "Science Project", status: "submitted", due: "2025-09-10" },
    { title: "History Essay", status: "pending", due: "2025-09-25" },
  ];

  const filteredAssignments =
    filter === "all"
      ? assignments
      : assignments.filter((a) => a.status === filter);

  return (
    <div style={{ padding: "2rem", marginLeft: "5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Assignments
      </h1>

      {/* Filter buttons */}
      <div style={{ marginBottom: "1.5rem" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            background: filter === "all" ? "#007bff" : "#fff",
            color: filter === "all" ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("pending")}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            background: filter === "pending" ? "#ffc107" : "#fff",
            color: filter === "pending" ? "#000" : "#000",
            cursor: "pointer",
          }}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("submitted")}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            background: filter === "submitted" ? "#28a745" : "#fff",
            color: filter === "submitted" ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          Submitted
        </button>
      </div>

      {/* Assignments List */}
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {filteredAssignments.map((assignment, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              borderRadius: "1rem",
              padding: "1rem",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {assignment.title}
            </h2>
            <p style={{ marginBottom: "0.3rem", color: "#555" }}>
              Status:{" "}
              <span
                style={{
                  color:
                    assignment.status === "pending" ? "#ffc107" : "#28a745",
                  fontWeight: "bold",
                }}
              >
                {assignment.status}
              </span>
            </p>
            <p style={{ color: "#555" }}>Due: {assignment.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;

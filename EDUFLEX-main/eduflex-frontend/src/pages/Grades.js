import React from "react";

function Grades() {
  const grades = [
    { course: "Mathematics", grade: "A", score: "92%" },
    { course: "Science", grade: "B+", score: "85%" },
    { course: "History", grade: "A-", score: "88%" },
    { course: "English", grade: "B", score: "80%" },
  ];

  return (
    <div style={{ padding: "2rem", marginLeft: "5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        Grades
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5", textAlign: "left" }}>
            <th style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
              Course
            </th>
            <th style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
              Grade
            </th>
            <th style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g, index) => (
            <tr key={index}>
              <td style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
                {g.course}
              </td>
              <td
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid #eee",
                  fontWeight: "bold",
                  color: g.grade.startsWith("A") ? "#28a745" : "#ffc107",
                }}
              >
                {g.grade}
              </td>
              <td style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
                {g.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;

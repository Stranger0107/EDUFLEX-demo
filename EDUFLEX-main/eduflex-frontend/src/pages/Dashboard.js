import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/search.svg";

const cardsData = [
  {
    title: "Courses",
    description: "View and manage all your enrolled courses.",
    image:
      "https://images.unsplash.com/photo-1579645899072-e14c6b840afa?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Assignments",
    description: "Check pending and submitted assignments.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Grades",
    description: "Track your performance and progress.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
  },
];

function Dashboard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const mapNumberRange = (n, a, b, c, d) =>
      ((n - a) * (d - c)) / (b - a) + c;

    const initCard = (card) => {
      const cardContent = card.querySelector(".card__content");
      const gloss = card.querySelector(".card__gloss");

      requestAnimationFrame(() => {
        gloss.classList.add("card__gloss--animatable");
      });

      card.addEventListener("mousemove", (e) => {
        const pointerX = e.clientX;
        const pointerY = e.clientY;
        const cardRect = card.getBoundingClientRect();

        const halfWidth = cardRect.width / 2;
        const halfHeight = cardRect.height / 2;

        const cardCenterX = cardRect.left + halfWidth;
        const cardCenterY = cardRect.top + halfHeight;

        const deltaX = pointerX - cardCenterX;
        const deltaY = pointerY - cardCenterY;

        const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max(halfWidth, halfHeight);

        const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);
        const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
        const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);

        cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
        gloss.style.transform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(2.4)`;
        gloss.style.opacity = `${mapNumberRange(
          distanceToCenter,
          0,
          maxDistance,
          0,
          0.6
        )}`;
      });

      card.addEventListener("mouseleave", () => {
        cardContent.style = null;
        gloss.style.opacity = 0;
      });
    };

    document.querySelectorAll(".card").forEach((cardEl) => initCard(cardEl));
  }, []);

  const filteredCards = cardsData.filter(
    (card) =>
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", marginLeft: "5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Dashboard
      </h1>

      {/* Search Bar */}
      <div style={{ position: "relative", width: "300px", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search cards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem 1rem 0.5rem 2.5rem", // leave space for SVG
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

      {/* Cards */}
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => {
              if (card.title === "Courses") navigate("/courses");
              if (card.title === "Assignments") navigate("/assignments");
              if (card.title === "Grades") navigate("/grades");
            }}
            style={{
              position: "relative",
              width: "250px",
              height: "300px",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              cursor: "pointer",
              background: "#fff",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="card__content" style={{ width: "100%", height: "100%" }}>
              <div
                className="card__gloss"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.6), transparent)",
                  opacity: 0,
                  pointerEvents: "none",
                  transition: "opacity 0.3s ease",
                }}
              ></div>
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  margin: "0.5rem",
                }}
              >
                {card.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  margin: "0.5rem",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

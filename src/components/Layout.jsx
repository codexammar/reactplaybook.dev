import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Layout({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);

  // Extract concept slug if on a concept page
  const isConceptPage = location.pathname.startsWith("/concept/");
  const slug = isConceptPage ? location.pathname.split("/")[2] : null;

  // Reset children to retrigger animation
  useEffect(() => {
    setDisplayChildren(null);
    const timeout = setTimeout(() => setDisplayChildren(children), 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header
        style={{
          position: "sticky",
          top: "1rem",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem 2rem",
          marginBottom: "2rem",
          width: "calc(100% - 4rem)", // 👈 full width minus body padding
          marginInline: "auto",
          borderRadius: "1rem",
          background: "var(--secondary)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left: Logo / Site Title */}
        <div style={{ flex: "1 1 150px" }}>
          <Link
            to="/"
            className="nav-button"
            style={{
              fontWeight: "bold",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            }}
          >
            ReactPlaybook.dev
          </Link>
        </div>

        {/* Center: Breadcrumb / Title */}
        <div
          style={{
            flex: "2 1 200px",
            textAlign: "center",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          }}
        >
          {isConceptPage ? (
            <span>
              Concept: <strong>{slug}</strong>
            </span>
          ) : (
            <span>React Concept Index</span>
          )}
        </div>

        {/* Right: Navigation Buttons */}
        <div style={{ flex: "1 1 150px", textAlign: "right" }}>
          <button
            onClick={toggleTheme}
            className="nav-button"
            title="Toggle dark mode"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <main style={{ paddingInline: "2rem", maxWidth: "1000px", marginInline: "auto" }}>
        <div key={location.pathname} className="page-enter">
          <div
            style={{
              background: "var(--secondary)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            {displayChildren}
          </div>
        </div>
      </main>
    </>
  );
}

export default Layout;

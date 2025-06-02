import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Layout({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const { theme, toggleTheme } = useTheme();

  const isConceptPage = location.pathname.startsWith("/concept/");
  const slug = isConceptPage ? location.pathname.split("/")[2] : null;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDisplayChildren(null);
    const timeout = setTimeout(() => setDisplayChildren(children), 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

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
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: isMobile ? "0.8rem 0rem" : "1rem 2rem",
          marginBottom: "2rem",
          width: isMobile ? "calc(100% - 0.3rem)" : "calc(100% - 4rem)",
          marginInline: "auto",
          borderRadius: "1rem",
          background: "var(--secondary)",
          boxShadow: theme === "dark"
            ? "0 4px 12px rgba(0, 0, 0, 0.4)"
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Left: Logo */}
        <div style={{ flex: "1 1 auto", whiteSpace: "nowrap" }}>
          <Link
            to="/"
            className="nav-button"
            style={{
              fontWeight: "bold",
              fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
            }}
          >
            ReactPlaybook.dev
          </Link>
        </div>

        {/* Center: Breadcrumb */}
        {!isMobile && (
          <div
            style={{
              flex: "1 1 auto",
              textAlign: "center",
              fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
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
        )}

        {/* Right: Theme Toggle */}
        <div style={{ flex: "1 1 auto", textAlign: "right", whiteSpace: "nowrap" }}>
          <button
            onClick={toggleTheme}
            className="nav-button"
            title="Toggle dark mode"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <main
        style={{
          paddingInline: "2rem",
          maxWidth: "1000px",
          marginInline: "auto",
          marginTop: isMobile ? "1.5rem" : "0rem", // 👈 push down only on mobile
        }}
      >
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

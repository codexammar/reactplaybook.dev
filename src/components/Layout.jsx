import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  // Extract concept slug if on a concept page
  const isConceptPage = location.pathname.startsWith("/concept/");
  const slug = isConceptPage ? location.pathname.split("/")[2] : null;

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
            width: "calc(100% - 4rem)",          // 👈 full width minus body padding
            marginInline: "auto",                // 👈 centers it horizontally
            borderRadius: "1rem",
            background: "var(--secondary)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
        >
        {/* Left: Logo / Site Title */}
        <div style={{ flex: "1 1 150px" }}>
            <Link to="/" className="nav-button"
            style={{
                fontWeight: "bold",
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)"
            }}
            >
            ReactPlaybook.dev
            </Link>
        </div>

        {/* Center: Breadcrumb / Title */}
        <div style={{
            flex: "2 1 200px",
            textAlign: "center",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)"
        }}>
            {isConceptPage ? (
            <span>Concept: <strong>{slug}</strong></span>
            ) : (
            <span>React Concept Index</span>
            )}
        </div>

        {/* Right: Navigation Buttons */}
        <div style={{ flex: "1 1 150px", textAlign: "right" }}>
            {/* Dark mode toggle or placeholder for now */}
        </div>
        </header>

      <main>{children}</main>
    </>
  );
}

export default Layout;

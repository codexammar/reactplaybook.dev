import { useEffect } from "react";
import { Link } from "react-router-dom";
import { concepts } from "../config";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "ReactPlaybook.dev";
  }, []); // ← runs once when Home mounts

  return (
    <>
      <div style={{
        marginBottom: "2rem",
        padding: "1.5rem",
        borderRadius: "1rem",
        background: "var(--secondary)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)"
      }}>
        <h2 style={{ marginBottom: "0.5rem" }}>👋 Welcome to ReactPlaybook.dev</h2>
        <p>
          This is a self-documented portfolio built by me (<strong>Syed Ammar Ali</strong>) to demonstrate hands-on proficiency
          in both foundational and advanced React concepts. These include <code>useState</code>, <code>useEffect</code>,
          <code>useRef</code>, <code>useMemo</code>, and more.
        </p>
        <p>
          It's inspired by the <em>Meta React Developer Certification</em> curriculum and aims to be a clean,
          interactive reference for anyone reviewing my work or learning React themselves.
        </p>
      </div>

      <div className="concept-grid">
        {concepts.map((concept) => (
          <Link to={`/concept/${concept.slug}`} key={concept.slug} className="concept-card">
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;

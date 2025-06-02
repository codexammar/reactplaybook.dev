import { useEffect } from "react";
import { Link } from "react-router-dom";
import { concepts } from "../config";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "ReactPlaybook.dev";
  }, []); // ← runs once when Home mounts

  return (
    <div className="concept-grid">
      {concepts.map((concept) => (
        <Link to={`/concept/${concept.slug}`} key={concept.slug} className="concept-card">
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import { concepts } from "../config";

function Home() {
  return (
    <section>
      <h2>React Concepts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {concepts.map((concept) => (
          <li key={concept.slug} style={{ marginBottom: "1rem" }}>
            <Link to={`/concept/${concept.slug}`}>
              <strong>{concept.title}</strong>
            </Link>
            <p style={{ margin: 0 }}>{concept.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
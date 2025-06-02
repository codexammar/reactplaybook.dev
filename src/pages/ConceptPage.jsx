import { useParams } from "react-router-dom";
import { concepts } from "../config";

function ConceptPage() {
  const { slug } = useParams();
  const concept = concepts.find((c) => c.slug === slug);

  if (!concept) {
    return <h2>Concept not found</h2>;
  }

  const DemoComponent = concept.component;

  return (
    <div>
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
      <DemoComponent />
    </div>
  );
}

export default ConceptPage;

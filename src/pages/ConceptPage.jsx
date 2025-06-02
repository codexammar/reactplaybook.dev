import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { concepts } from "../config";

function ConceptPage() {
  const { slug } = useParams();
  const concept = concepts.find((c) => c.slug === slug);

  useEffect(() => {
    if (concept?.titleSuffix) {
      document.title = `ReactPlaybook.dev | ${concept.titleSuffix}`;
    } else {
      document.title = "ReactPlaybook.dev";
    }
  }, [slug]);

  if (!concept) return <h2>Concept not found.</h2>;

  const DemoComponent = concept.component;

  return (
    <div>
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
      <hr style={{ margin: "1rem 0" }} />
      <DemoComponent />
    </div>
  );
}

export default ConceptPage;

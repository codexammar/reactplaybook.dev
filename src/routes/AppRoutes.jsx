import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConceptPage from "../pages/ConceptPage";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concept/:slug" element={<ConceptPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
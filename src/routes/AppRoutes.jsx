import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConceptPage from "../pages/ConceptPage";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/concept/:slug" element={<Layout><ConceptPage /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default AppRoutes;
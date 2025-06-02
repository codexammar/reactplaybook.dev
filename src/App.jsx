import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/reactplaybook.dev">
      <main>
        <h1>ReactPlaybook.dev</h1>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
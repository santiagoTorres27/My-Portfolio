import "./App.scss";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="project/:projectId"
              element={<ProjectDetail />}
            ></Route>
            {/* <Route path="/*" element={<Navigate to="/My-Portfolio" />}></Route> */}
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;

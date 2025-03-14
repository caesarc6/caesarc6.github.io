import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // redirect,
} from "react-router-dom";
import Navbar from "./navbar";
import { Experience } from "./pages/experience";
import { About } from "./pages/about";
import { Resume } from "./pages/resume";
import { Home } from "./pages/home";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div style={{ justifySelf: "center" }}>
          <Router>
            <Navbar />
            <div className="title"></div>
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              {/* timlein route */}
              {/* <Route path="/timeline" element={<CustomizedTimeline />} /> */}
            </Routes>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

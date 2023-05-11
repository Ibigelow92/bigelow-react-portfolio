// 45:51

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
// import resume from "../assets/tech-resume.jpg"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </Router>
      </div>
  );
}

export default App;
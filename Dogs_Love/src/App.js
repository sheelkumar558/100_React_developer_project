import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PuppPage from "./components/PuppPage";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puppPage/:breed_name" element={<PuppPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
import AddNewPage from "./pages/AddNewPage/AddNewPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="bg-gray-100 h-screen scroll-smooth"
      style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
    >
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="item/:id" element={<AddNewPage />} />
          <Route path="settings/" element={<Settings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

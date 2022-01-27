import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
import LoginPage from "./pages/Login/LoginPage";
import AddNewPage from "./pages/AddNewPage/AddNewPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
  return (
    <div
      className="h-screen"
      style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
    >
      <Router>
        <Routes>
          <Route exact path="login" element={<LoginPage />} />

          {/* <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="item/:id" element={<AddNewPage />} />
            <Route path="settings/" element={<Settings />} />
          </Route> */}

          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="item/:id"
            element={
              <PrivateRoute>
                <AddNewPage />
              </PrivateRoute>
            }
          />

          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

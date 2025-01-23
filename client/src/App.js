import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";
import SignUpPage from "./pages/abc/SignUpPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <HomePage />
            } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

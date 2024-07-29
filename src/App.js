import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import NotFound from "./components/NotFound";
import AuthRoute from "./utils/AuthRoute";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<AuthRoute element={<Home />} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

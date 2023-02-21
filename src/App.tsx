import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import { LoginForm } from "./components/login/LoginForm";
import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";
import { SideBar } from "./components/sidebar/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;

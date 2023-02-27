import { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";
import { ProtectRoutes } from "./privateRouting/ProtectRoutes";
import { PersistLogin } from "./api/utils/persistLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route element={<PersistLogin />}>
            <Route element={<ProtectRoutes />}>
              <Route
                path="/dashboard"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                  </Suspense>
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;

import { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";
import { ProtectRoutes } from "./privateRouting/ProtectRoutes";
import { PersistLogin } from "./api/utils/persistLogin";
import { Toaster } from "react-hot-toast";
import { Diary } from "./pages/Diary";
import { FriendsPage } from "./pages/Friends";
import { PendingRequests } from "./pages/PendingRequests";
import { TestLoginPage } from "./pages/TestLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<TestLoginPage />}></Route>
          <Route element={<PersistLogin />}>
            {/* @ts-ignore */}
            <Route element={<ProtectRoutes />}>
              <Route
                path="/dashboard"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                  </Suspense>
                }
              ></Route>
              <Route path="/diary" element={<Diary />}></Route>
              <Route path="/friends" element={<FriendsPage />}></Route>
              <Route path="/requests" element={<PendingRequests />}></Route>
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </RecoilRoot>
  );
}

export default App;

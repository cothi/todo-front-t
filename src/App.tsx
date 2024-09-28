import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import AuthCallback from "./pages/Home/AuthCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kakao/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;

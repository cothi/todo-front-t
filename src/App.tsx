import { Route, Routes } from 'react-router-dom';

import AuthCallback from './pages/Home/AuthCallback';
import Login from './pages/Home/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/kakao/callback" element={<AuthCallback />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;

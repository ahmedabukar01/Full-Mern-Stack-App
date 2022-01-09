import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Sitting from "./pages/sittings/Sitting";
import Write from "./pages/write/Write";
import Topbar from "./TopBar/Topbar";

function App() {
  const user = false;
  
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Sitting /> : <Register />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/register" element = {user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

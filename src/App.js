import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from "./login/Login";
import Register from "./register/Register";
import Messages from "./messages/Messages";

function App() {
  const [users, setUsers] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/messages" element={<Messages users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

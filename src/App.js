import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from "./login/Login";
import Register from "./register/Register";
import Messages from "./messages/Messages";

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/messages" element={<Messages users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from 'react';
import Background from "../background/Background.js"
import ChatSection from "../chatSection/ChatSection.js";
import Conversations from "../conversations/Conversations.js";
import NewChatModal from "../newChatModal/newChatModal.js";
import { useNavigate } from "react-router-dom";

function isNotRegistered(currentUser) {
    return Object.keys(currentUser).length === 0;
}

function Messages({users, setUsers, currentUser, setCurrentUser}) {
    let navigate = useNavigate();

    useEffect(() => {
        if (isNotRegistered(currentUser)) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    function logout() {
        setCurrentUser('');
        navigate('/login');
    }

    return (
        <>
            <Background />
            <button type="submit" className="btn btn-primary logout-btn" onClick={logout}>Logout</button>

            <NewChatModal users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />

            <div className="messages-container">
                <Conversations users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <ChatSection users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </div>
        </>
    );
}

export default Messages;
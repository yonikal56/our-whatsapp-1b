import Background from "../background/Background.js"
import ChatSection from "../chatSection/ChatSection.js";
import Conversations from "../conversations/Conversations.js";
import NewChatModal from "../newChatModal/newChatModal.js";
import { useNavigate } from "react-router-dom";

function Messages({setCurrentUser}) {
    let navigate = useNavigate();

    function logout() {
        setCurrentUser('');
        navigate('/');
    }

    return (
        <>
            <Background />
            <button type="submit" className="btn btn-primary logout-btn" onClick={logout}>Logout</button>

            <NewChatModal />

            <div className="container-fluid messages-container">
                <div className="row">
                    <Conversations />
                    <ChatSection />
                </div>
            </div>
        </>
    );
}

export default Messages;
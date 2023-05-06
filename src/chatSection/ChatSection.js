import Chat from "../chat/Chat";
import ChatFooter from "../chatFooter/ChatFooter";

function ChatSection() {
    return (
        <div className="col-lg-9 col-md-8 col-12" id="messages-section">
            <Chat />
            <ChatFooter />
        </div>
    );
}

export default ChatSection;
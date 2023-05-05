import ChatHeader from "../chatHeader/ChatHeader";
import Message from "../message/Message";

function Chat() {
    return (
        <>
            <ChatHeader name="Eliyahu" img="photos/Eliyahu.png" />
            <main className="messages">
                <div className="real-messages">
                    <Message text="I need to tell you both something" time="10:30" side="left" />
                    <Message text="Don't tell to Yuval" time="10:31" side="right" />
                </div>
            </main>
        </>
    );
}

export default Chat;
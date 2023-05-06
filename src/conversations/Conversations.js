import Conversation from "../conversation/Conversation";
import ConversationsHeader from "../conversationsHeader/ConversationsHeader";

function Conversations() {
    return (
        <div className="col-lg-3 col-md-4 col-12" id="conversations-section">
            <ConversationsHeader />
            <main className="conversations">
                <Conversation name="Yonatan" time="27/04/23 10:31" message="it went awfull - 99" img="photos/Yontan.png" />
                <Conversation name="Eliyahu" time="26/04/23 23:14" message="don't tell to Yuval" img="photos/Eliyahu.png" current="True" />
                <Conversation name="Yuval" time="26/04/23 22:50" message="love you mate" img="photos/Yuval.png" />
            </main>
        </div>
    );
}

export default Conversations;
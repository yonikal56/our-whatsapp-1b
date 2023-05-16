import React from 'react';
import Conversation from "../conversation/Conversation";
import ConversationsHeader from '../conversationsHeader/ConversationsHeader';

function Conversations({currentUser, setCurrentUser}) {
    debugger;
    const conversationsData = currentUser && currentUser.friends ? currentUser.friends : [];

    const handleConversationClick = (conversation) => {
        setCurrentUser({
            ...currentUser,
            currFriend: currentUser.friends.find(friend => friend.name === conversation.name),
        });
    };

    return (
        <div id="conversations-section">
            <ConversationsHeader currentUser={currentUser}/>
            <main className="conversations">
                {conversationsData.length > 0 && conversationsData.map((conversation, index) => (
                    <div key={index} onClick={() => handleConversationClick(conversation)}>
                        <Conversation
                            name={conversation.name ? conversation.name : ""}
                            time={conversation.messages && conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1].time : ""}
                            message={conversation.messages && conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1].text : ""}
                            img={conversation.image}
                            current={currentUser.currFriend.name === conversation.name}
                        />
                    </div>
                ))}
            </main>
        </div>
    );
}

export default Conversations;
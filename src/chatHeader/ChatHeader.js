function ChatHeader({name, img}) {
    return (
        <header className="right-header">
            <div className="media">
                <img className="avatar" src={img} alt="avatar" />
                <div className="media-body">
                    {name}
                </div>
            </div>
        </header>
    );
}

export default ChatHeader;
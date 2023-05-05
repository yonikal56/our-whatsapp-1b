function ChatFooter() {
    return (
        <footer className="footer">
            <div className="input-group ">
                <input type="text" className="form-control" placeholder="Write a message"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary footer-btn" type="button">Send</button>
                </div>
            </div>
        </footer>
    );
}

export default ChatFooter;
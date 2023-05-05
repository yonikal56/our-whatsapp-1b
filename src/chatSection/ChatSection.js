function ChatSection({ type: formType, labelText: labelText, inputText: inputText }) {
    return (
        <div className="col-lg-9 col-md-8 col-12" id="messages-section">
            <header className="right-header">
                <div className="media">
                    <img className="avatar" src="photos/Eliyahu.png" alt="avatar" />
                    <div className="media-body">
                        Eliyahu
                    </div>
                </div>
            </header>
            <main className="messages">
                <div className="real-messages">
                    <div className="message message-left">
                        <div className="text">I need to tell you both something</div>
                        <div className="time">10:30</div>
                    </div>
                    <div className="message message-right">
                        <div className="text">Don't tell to Yuval</div>
                        <div className="time">10:31</div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="input-group ">
                    <input type="text" className="form-control" placeholder="Write a message"
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary footer-btn" type="button">Send</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ChatSection;
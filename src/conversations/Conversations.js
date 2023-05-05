function Conversations({ type: formType, labelText: labelText, inputText: inputText }) {
    return (
        <div className="col-lg-3 col-md-4 col-12" id="conversations-section">
            <header className="left-header">
                <div className="media">
                    <img className="avatar" src="photos/no_img.png" alt="avatar" />
                    <div className="icon">
                        <svg data-bs-toggle="modal" data-bs-target="#newModal" width="32" height="32"
                            className="bi bi-person-add" viewBox="0 0 16 16">
                            <path
                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                            <path
                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                        </svg>
                    </div>
                </div>
            </header>
            <main className="conversations">
                <div className="media">
                    <img className="avatar" src="photos/Yontan.png" alt="avatar" />
                    <div className="media-body">
                        <div className="name">Yonatan </div>
                        <div className="time">26/04/23 22:50</div>
                        <div className="last-msg">it went awfull - 99</div>
                    </div>
                </div>
                <div className="media current-conversation">
                    <img className="avatar" src="photos/Eliyahu.png" alt="avatar" />
                    <div className="media-body">
                        <div className="name">Eliyahu </div>
                        <div className="time">27/04/23 10:31</div>
                        <div className="last-msg">don't tell to Yuval</div>
                    </div>
                </div>
                <div className="media">
                    <img className="avatar" src="photos/Yuval.png" alt="avatar" />
                    <div className="media-body">
                        <div className="name">Yuval </div>
                        <div className="time">26/04/23 23:14</div>
                        <div className="last-msg">love you mate</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Conversations;
# Our Whatsapp

This project is a simple and user-friendly web-based messaging application that allows users to communicate with each other in real-time.
It features a clean and modern interface, with support for user registration, authentication, and profile management.

## Getting Started

To set up the project on your local machine, follow these steps:

1. Clone the repository to your computer.
2. Ensure you have a web browser installed to run the HTML and the CSS files.
3. Write this following lined in your cmd:
<pre>
git clone https://github.com/yonikal56/our-whatsapp-1b
cd our-whatsapp-1b
npm install
npm start
</pre>
5. Register a new account or log in with an existing one.

Please note that this project is a front-end prototype only.
All the data is saves in local storage and you can't really communicate **yet** with other users.

## Features

- User registration and login, with validation based on the registerd users list
- Denaying access to the messages page if there is no registerd user
- Data of the users + friends + messages is saved in the local storage, so even after a refresh - the data stays valid
- Responsive design
- Add friends, send them messages and display the messages in their chat
- Move between chats
- Displaying time and last messages + user photo and friends photo.


## Dirs & Files 

### review

The project is mostly a js code (React) and in this section we will review the main components:

- `App.js`: Initiate the users data with the local storage and handles the routing of the main pages
- `login`: Handles the login page. A very simple page but integrative with the local storage.
- `register`: Handles the register page. All the fileds are getting validation by a set of rules we decided.
- `special pages`: Manages attempts to access the app from url's that is not possible.
- `messages`: Handles the message page.
- `conversations`: Handles the conversations components in the messages page.
- `chatSection`: Handles the chatSection components in the message page.
- `background`: Manage general guidelines of the different pages background.
- `Users`: stores a util functions to manage the data.
- `photos`: We save here the used photos for the project.

### hirarchy

- public
  - css
    - bootstrap.min.css
  - photos
 
- src
  - Users
  - background
  - chatSection
  - conversations
  - form
  - login
  - messages
  - register
  - special pages
  - App.js

## Future Enhancements

- Implement a back-end server for user authentication, registration, and messaging.
- Add support for group chats and private messaging.
- Add support for multimedia messages, such as images and videos.

import { useMemo,useEffect, useRef } from 'react';

export function AddUser(users, setUsers, userName, password, name, picture){
    debugger;
    const newUser = {
        username: userName,
        password: password,
        image: picture,
        name: name,
        friends: [],
        currFriend : "",
    };
    const updatedUsers = { ...users, [userName]: newUser };
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
}

export function setCurr(curr, setCurrentUser) {
    setCurrentUser(curr);
    localStorage.setItem('currentUser', JSON.stringify(curr));
}

export function AddFriend(users, setUsers, currentUser, setCurrentUser, friendsName) {
    debugger;
    const profilePicture = 'photos/no_img.png';
    const newFriend = {
        name: friendsName,
        image: profilePicture,
        messages: []
    };

    let newCurrUser = { ...currentUser };
    if (!Array.isArray(newCurrUser.friends)) {
        newCurrUser.friends = [];
    }

    newCurrUser.friends.push(newFriend);
    newCurrUser.currFriend = newFriend;
    setCurrentUser(newCurrUser);
    localStorage.setItem('currentUser', JSON.stringify(newCurrUser));

    let updatedUsers = { ...users };
    updatedUsers[newCurrUser.username] = newCurrUser;
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
}

export function AddMessage(users, setUsers, currentUser, setCurrentUser,  friendsName, msg) {
    const newMsg = {
        text: msg.text,
        time: msg.time,
        sender: msg.sender,
    }
    let newCurrUser = { ...currentUser };
    newCurrUser.friends.find(friend => friend.name === friendsName).messages.push(newMsg);
    setCurrentUser(newCurrUser);
    localStorage.setItem('currentUser', JSON.stringify(newCurrUser));

    let updatedUsers = { ...users };
    updatedUsers[newCurrUser.username] = newCurrUser;
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
};



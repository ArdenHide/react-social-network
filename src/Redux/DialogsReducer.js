import React from "react";
const UPDATE_NEW_MESSAGE_INPUT = 'UPDATE-NEW-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

function DialogsReducer(state, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_INPUT:
            state.newMessage = action.newMessage;
            return state;

        case SEND_MESSAGE:
            let newMessageItem = {
                id: state.messagesData.length + 1,
                message: action.newMessage
            };
            state.messagesData.push(newMessageItem);
            return state;

        default:
            return state;
    }
}

export default DialogsReducer;
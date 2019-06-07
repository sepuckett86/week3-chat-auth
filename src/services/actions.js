import { messagesByRoomRef } from './firebase.js';

export function getChatRef(roomKey, messageKey) {
    const chatRef = messagesByRoomRef
        .child(roomKey)
        .child(messageKey);
    return chatRef;
}
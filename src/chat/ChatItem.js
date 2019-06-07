import Component from '../Component.js';
import { messagesByRoomRef } from '../services/firebase.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chat = this.props.chat;
        const chatRoom = this.props.chatRoom;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            messagesByRoomRef
                .child(chatRoom.key)
                .child(chat.key)
                .remove();
        });

        return dom;
    }
    renderTemplate() {
        const chat = this.props.chat;
        const photoUrl = chat.photoUrl || './assets/blank-profile-picture.png';
        const date = new Date(chat.date);
        return /*html*/ `
            <li>
                <div class="chat-info">
                    <img class="chat-pic" src="${photoUrl}">
                    <span>${chat.displayName}</span>
                </div>
                <p class="chat-message">${chat.message}</p>
                <p class="chat-date">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
                <button>X</button>
            </li>
        `;
    }
}

export default ChatItem;
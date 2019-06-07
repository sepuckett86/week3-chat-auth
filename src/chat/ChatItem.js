import Component from '../Component.js';
import { messagesByRoomRef, auth } from '../services/firebase.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chat = this.props.chat;
        const chatRoom = this.props.chatRoom;

        if(chat.uid === auth.currentUser.uid) {
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                messagesByRoomRef
                    .child(chatRoom.key)
                    .child(chat.key)
                    .remove();
            });
        }

        return dom;
    }

    renderTemplate() {
        const chat = this.props.chat;
        const user = this.props.user;

        const photoUrl = user.photoURL || './assets/blank-profile-picture.png';
        // const date = new Date(chat.date);
        const momentDate = moment(chat.date);
        const removeButton = chat.uid === auth.currentUser.uid ? `<button>X</button>` : '';
        return /*html*/ `
            <li>
                <div class="chat-info">
                    <img class="chat-pic" src="${photoUrl}">
                    <span>${user.displayName}</span>
                </div>
                <p class="chat-message">${chat.message}</p>
                <p class="chat-date">${momentDate.fromNow()}</p>
                ${removeButton}
            </li>
        `;
    }
}

export default ChatItem;
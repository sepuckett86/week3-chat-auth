import Component from '../Component.js';
import { messagesByRoomRef, auth } from '../services/firebase.js';

class ChatInput extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRoom = this.props.chatRoom;

        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();

            // this generates a random key and assigns to returned ref
            const chatRef = messagesByRoomRef.child(chatRoom.key).push();

            const chat = {
                key: chatRef.key,
                message: input.value,
                uid: auth.currentUser.uid, // id of who said this
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                date: new Date().toISOString()
            };

            chatRef.set(chat).then(() => {
                input.value = '';
            });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <form id="chat-input-form">
                <h3>Enter a message:</h3>
                <input type="text">
                <button>Submit</button>
            </form>
        `;
    }
}

export default ChatInput;
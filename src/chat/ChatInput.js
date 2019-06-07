import Component from '../Component.js';
import { messagesByRoomRef, auth } from '../services/firebase.js';

class ChatInput extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRoom = this.props.chatRoom;

        const textarea = dom.querySelector('textarea');

        dom.addEventListener('submit', event => {
            event.preventDefault();

            // this generates a random key and assigns to returned ref
            const chatRef = messagesByRoomRef.child(chatRoom.key).push();

            const date = Date();

            const chat = {
                key: chatRef.key,
                message: textarea.value,
                uid: auth.currentUser.uid, // id of who said this
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                date: date
            };

            chatRef.set(chat).then(() => {
                textarea.value = '';
            });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <form>
                <h3>Enter a message:</h3>
                <textarea type="text"></textarea>
                <button>Submit</button>
            </form>
        `;
    }
}

export default ChatInput;
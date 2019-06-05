import Component from '../Component.js';
import { chatRoomRef, auth } from '../services/firebase.js';

class RoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const room = this.props.room;

        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            if(room.owner === auth.currentUser.uid) {
                chatRoomRef
                    .child(room.key)
                    .remove();
            } else {
                alert('You are not the owner, so you cannot delete this chat room');
            }
        });

        return dom;
    }
    renderTemplate() {
        const room = this.props.room;

        return /*html*/ `
            <li>
                <a href="./">
                    <p>${room.name}</p>
                </a>
                <button>Delete Room</button>
            </li>
        `;
    }
}

export default RoomItem;
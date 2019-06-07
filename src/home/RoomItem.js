import Component from '../Component.js';
import { chatRoomRef, auth } from '../services/firebase.js';

class RoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const room = this.props.room;
        const isOwner = room.owner === auth.currentUser.uid;

        if(isOwner) {
            const button = dom.querySelector('button');

            button.addEventListener('click', () => {
                chatRoomRef
                    .child(room.key)
                    .remove();
            });
        }
        
        return dom;
    }

    renderTemplate() {
        const room = this.props.room;
        const isOwner = room.owner === auth.currentUser.uid;

        if(isOwner) {
            return /*html*/ `
            <li>
                <a href="./chat.html?key=${room.key}">
                    ${room.name}
                </a> - Created by you!
                <button>Delete Room</button>
            </li>
        `; 
        } else {
            return /*html*/ `
                <li>
                    <a href="./chat.html?key=${room.key}">
                        ${room.name}
                    </a> - Created by someone else.
                </li>
            `;
        }
    }
}

export default RoomItem;
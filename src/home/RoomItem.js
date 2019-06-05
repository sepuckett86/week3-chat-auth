import Component from '../Component.js';
import { chatRoomRef } from '../services/firebase.js';

class RoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const room = this.props.room;

        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            chatRoomRef
                .child(room.key)
                .remove();
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
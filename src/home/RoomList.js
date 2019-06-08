import Component from '../Component.js';
import RoomItem from './RoomItem.js';
import { usersRef } from '../services/firebase.js';

class RoomList extends Component {
    render() {
        const dom = this.renderDOM();

        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const roomItem = new RoomItem({ room, creator: '' });
            const roomDOM = roomItem.render();
            dom.appendChild(roomDOM);

            usersRef
                .child(room.owner)
                .on('value', snapshot => {
                    const value = snapshot.val();
                    roomItem.update({ creator: value.displayName });
                });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <ul id="room-list">
                <p>Choose a chat room!</p>
            </ul>
        `;
    }
}

export default RoomList;
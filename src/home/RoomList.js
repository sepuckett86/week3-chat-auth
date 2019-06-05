import Component from '../Component.js';
import RoomItem from './RoomItem.js';

class RoomList extends Component {
    render() {
        const dom = this.renderDOM();

        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const roomItem = new RoomItem({ room });
            const roomDOM = roomItem.render();

            dom.appendChild(roomDOM);
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
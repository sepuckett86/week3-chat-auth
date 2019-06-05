import Component from '../Component.js';

class RoomList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul id="room-list">
                <p>Choose a chat room!</p>
                <li>
                    <a href="./">
                        <p>Room Name</p>
                    </a>
                    <button>Delete Room</button>
                </li>
                <li>
                    <a href="./">
                        <p>Room Name</p>
                    </a>
                </li>
            </ul>
        `;
    }
}

export default RoomList;
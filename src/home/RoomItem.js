import Component from '../Component.js';

class RoomItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <a href="./">
                    <p>Room Name</p>
                </a>
                <button>Delete Room</button>
            </li>
        `;
    }
}

export default RoomItem;
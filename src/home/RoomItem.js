import Component from '../Component.js';

class RoomItem extends Component {
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
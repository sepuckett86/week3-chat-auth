import Component from '../Component.js';

class AddRoom extends Component {
    renderTemplate() {
        return /*html*/ `
            <form id="add-room-form">
                <p>Add a Chat Room!</p>
                <label>
                    Topic
                    <input type="text">
                </label>
            </form>
        `;
    }
}

export default AddRoom;
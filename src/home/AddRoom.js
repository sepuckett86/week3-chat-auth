import Component from '../Component.js';
import { auth, chatRoomRef } from '../services/firebase.js';

class AddRoom extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');


        dom.addEventListener('submit', event => {
            event.preventDefault();
            
            // this generates a random key and assigns to returned ref
            const roomRef = chatRoomRef.push();

            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: input.value
            };

            roomRef.set(room).then(() => {
                input.value = '';
            });
        });

        

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <form id="add-room-form">
                <p>Add a Chat Room!</p>
                <label>
                    Topic
                    <input type="text">
                </label>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddRoom;
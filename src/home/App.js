import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import RoomList from './RoomList.js';

import { chatRoomRef } from '../services/firebase.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();

        const roomList = new RoomList({ rooms: [] });
        const roomListDOM = roomList.render();

        dom.prepend(headerDOM);
        main.appendChild(addRoomDOM);
        main.appendChild(roomListDOM);

        chatRoomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const rooms = value ? Object.values(value) : [];
                roomList.update({ rooms });
            });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;
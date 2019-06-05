import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import RoomList from './RoomList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();

        const roomList = new RoomList();
        const roomListDOM = roomList.render();

        dom.prepend(headerDOM);
        main.appendChild(addRoomDOM);
        main.appendChild(roomListDOM);

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
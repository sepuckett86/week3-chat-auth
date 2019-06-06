import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from './ChatList.js';
import QUERY from '../utils/QUERY.js';
import { chatRoomRef } from '../services/firebase.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const query = window.location.search;
        const key = QUERY.parse(query).key;

        let name = '';

        chatRoomRef
            .child(key)
            .once('value', snapshot => {
                const value = snapshot.val();
                name = value.name;
                chatList.update({ name });
            });

        const chatList = new ChatList({ name });
        const chatListDOM = chatList.render();

        dom.prepend(headerDOM);
        main.appendChild(chatListDOM);

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

export default ChatApp;
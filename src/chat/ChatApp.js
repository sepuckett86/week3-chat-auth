import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from './ChatList.js';
import ChatInput from './ChatInput.js';
import ChatTitle from './ChatTitle.js';

import QUERY from '../utils/QUERY.js';

import { chatRoomRef, messagesByRoomRef } from '../services/firebase.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const query = window.location.search;
        const key = QUERY.parse(query).key;

        if(!key) {
            window.location = './';
        }

        const chatTitle = new ChatTitle({ title: 'Chat Room' });
        const chatTitleDOM = chatTitle.render();
        
        const chatInput = new ChatInput();
        const chatInputDOM = chatInput.render();

        const chatList = new ChatList({ chats: [], chatRoom: {} });
        const chatListDOM = chatList.render();

        // Get Title of Chat Room
        chatRoomRef
            .child(key)
            .on('value', snapshot => {
                const chatRoom = snapshot.val();
                chatTitle.update({ title: chatRoom.name });
                chatInput.update({ chatRoom });
                chatList.update({ chatRoom });
            });

        // Get Messages
        messagesByRoomRef
            .child(key)
            .on('value', snapshot => {
                const value = snapshot.val();
                const chats = value ? Object.values(value) : [];
                chatList.update({ chats });
            });

        dom.prepend(headerDOM);

        main.appendChild(chatTitleDOM);
        main.appendChild(chatListDOM);
        main.appendChild(chatInputDOM);

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
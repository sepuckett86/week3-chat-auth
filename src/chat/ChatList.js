import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();

        const chats = this.props.chats;
        const chatRoom = this.props.chatRoom;

        chats.forEach(chat => {
            const chatItem = new ChatItem({ chat, chatRoom });
            const chatItemDOM = chatItem.render();
            dom.appendChild(chatItemDOM);
        });

        dom.scrollTop = dom.scrollHeight;
        
        return dom;
    }    

    renderTemplate() {
        return /*html*/ `
            <ul class="chat-list">
            </ul>
        `;
    }
}

export default ChatList;
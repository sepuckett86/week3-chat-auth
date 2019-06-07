import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();

        const chats = this.props.chats;
        const reversedChats = chats.slice().reverse();

        reversedChats.forEach(chat => {
            const chatItem = new ChatItem({ chat });
            const chatItemDOM = chatItem.render();
            dom.appendChild(chatItemDOM);
        });

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
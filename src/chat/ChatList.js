import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();

        const chats = this.props.chats;

        chats.forEach(chat => {
            const chatItem = new ChatItem({ chat });
            const chatItemDOM = chatItem.render();
            dom.appendChild(chatItemDOM);
        });

        return dom;
    }    

    renderTemplate() {
        const name = this.props.name || '';
        return /*html*/ `
            <ul class="chat-list">
                <h2>Room: ${name}</h2>
            </ul>
        `;
    }
}

export default ChatList;
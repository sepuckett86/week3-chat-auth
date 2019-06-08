import Component from '../Component.js';
import ChatItem from './ChatItem.js';
import { usersRef } from '../services/firebase.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();

        const chats = this.props.chats;
        const chatRoom = this.props.chatRoom;

        chats.forEach(chat => {
            const chatItem = new ChatItem({ chat, chatRoom, user: {} });
            const chatItemDOM = chatItem.render();
            dom.appendChild(chatItemDOM);
            
            usersRef
                .child(chat.uid)
                .on('value', snapshot => {
                    const value = snapshot.val();
                    chatItem.update({ user: value });
                });
            
        });

        setTimeout(() => {
            dom.scrollTop = dom.scrollHeight;
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
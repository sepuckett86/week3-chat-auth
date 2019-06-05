import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();

        const chatItem = new ChatItem();
        const chatItemDOM = chatItem.render();

        dom.appendChild(chatItemDOM);

        return dom;
    }    

    renderTemplate() {
        return /*html*/ `
            <ul class="chat-list">
            <li>
                <div class="chat-info">
                    <img class="chat-pic" src="./assets/blank-profile-picture.png">
                    <span>Name</span>
                </div>
                <p>Chat message goes here. It's really cool!</p>
            </li>
            <li>
                <div class="chat-info">
                    <img class="chat-pic" src="./assets/blank-profile-picture.png">
                    <span>Name</span>
                </div>
                <p>Chat message goes here. It's really cool!</p>
            </li>
            </ul>
        `;
    }
}

export default ChatList;
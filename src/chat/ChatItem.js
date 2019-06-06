import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        const chat = this.props.chat;
        const photoUrl = chat.photoUrl || './assets/blank-profile-picture.png';
        return /*html*/ `
            <li>
                <div class="chat-info">
                    <img class="chat-pic" src="${photoUrl}">
                    <span>${chat.name}</span>
                </div>
                <p>${chat.message}</p>
            </li>
        `;
    }
}

export default ChatItem;
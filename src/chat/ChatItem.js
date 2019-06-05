import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <div class="chat-info">
                    <img class="chat-pic" src="./assets/blank-profile-picture.png">
                    <span>Name Here Super</span>
                </div>
                <p>Chat message goes here. It's really cool!</p>
            </li>
        `;
    }
}

export default ChatItem;
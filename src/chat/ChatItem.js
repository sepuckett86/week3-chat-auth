import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <img class="chat-pic" src="./assets/blank-profile-picture.png">
                <span>Name</span>
                <p>Chat message goes here. It's really cool!</p>
            </li>
        `;
    }
}

export default ChatItem;
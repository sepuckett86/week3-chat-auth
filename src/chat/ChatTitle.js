import Component from '../Component.js';

class ChatTitle extends Component {
    renderTemplate() {
        const title = this.props.title;
        return /*html*/ `
            <h2>${title}</h2>
        `;
    }
}

export default ChatTitle;
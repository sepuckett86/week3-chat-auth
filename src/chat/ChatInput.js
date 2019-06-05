import Component from '../Component.js';

class ChatInput extends Component {
    renderTemplate() {
        return /*html*/ `
            <form>
                <input type="text">
                <button>Submit</button>
            </form>
        `;
    }
}

export default ChatInput;
import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from '../chat/ChatList.js';
// import ChatInput from '../chat/ChatInput.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const chatList = new ChatList();
        const chatListDOM = chatList.render();

        dom.prepend(headerDOM);
        main.appendChild(chatListDOM);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;
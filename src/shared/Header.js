import Component from '../Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>ChatAPP</h1>
            </header>
        `;
    }
}

export default Header;
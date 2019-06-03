import Component from '../Component.js';
import Profile from './Profile.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        const profileDOM = profile.render();

        dom.appendChild(profileDOM);
        
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>ChatAPP</h1>
            </header>
        `;
    }
}

export default Header;
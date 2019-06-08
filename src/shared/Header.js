import Component from '../Component.js';
import Profile from './Profile.js';

import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        const profileDOM = profile.render();

        dom.appendChild(profileDOM);
        
        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <header>
                <a href="./"><h1>ChatAPP</h1></a>
            </header>
        `;
    }
}

export default Header;
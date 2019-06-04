import Component from '../Component.js';

import { auth } from '../services/firebase.js';

class Profile extends Component {
    render() {
        const dom = this.renderDOM();

        const user = this.props.user;

        if(!user) {
            return dom;
        }

        const button = dom.querySelector('button');
        
        button.addEventListener('click', () => {
            auth.signOut();
        });

        return dom;
    }

    renderTemplate() {
        const user = this.props.user;
        if(!user) {
            return `<div id="profile">Not logged in</div>`;
        }
        const photoURL = user.photoURL || './assets/blank-profile-picture.png';
        return /*html*/ `
            <div id="profile"></div>
                <img id="profile-image" src="${photoURL}">
                <div id="profile-info">
                    <span>${user.displayName}</span>
                    <button>Log Out</button>
                </div>
            </div>
        `;
    }
}

export default Profile;
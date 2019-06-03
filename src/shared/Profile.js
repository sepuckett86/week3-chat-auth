import Component from '../Component.js';

class Profile extends Component {
    renderTemplate() {
        return /*html*/ `
            <div id="profile">
                <img id="profile-image" src="./assets/blank-profile-picture.png">
                <div id="profile-info">
                    <span>Name</span>
                    <button>Log Out</button>
                </div>
            </div>
        `;
    }
}

export default Profile;
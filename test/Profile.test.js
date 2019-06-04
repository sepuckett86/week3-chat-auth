import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile');

test('renders profile html', assert => {
    // Arrange
    const user = {
        displayName: 'Name',
        photoURL: './assets/blank-profile-picture.png'
    };
    const expected = /*html*/ `
        <div id="profile">
            <img id="profile-image" src="./assets/blank-profile-picture.png">
            <div id="profile-info">
                <span>Name</span>
                <button>Log Out</button>
            </div>
        </div>
    `;
    // Act
    const profile = new Profile({ user });
    const actual = profile.renderTemplate();

    // Assert
    assert.htmlEqual(actual, expected);
});
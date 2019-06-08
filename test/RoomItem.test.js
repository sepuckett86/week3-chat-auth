import RoomItem from '../src/home/RoomItem.js';
import { auth } from '../src/services/firebase.js';

const test = QUnit.test;

test('returns html for li if user created room', assert => {
    // Arrange
    const room = {
        name: 'Cats',
        key: 'KEY',
        owner: auth.currentUser.uid
    };

    const expected = /*html*/ `
        <li>
            <a href="./chat.html?key=KEY>">
                <p>Cats</p>
            </a>
            <p>Created by you!</p>
            <button>Delete Room</button>
        </li>
    `;

    // Act
    const roomItem = new RoomItem({ room });
    const actual = roomItem.renderTemplate();

    // Assert
    assert.htmlEqual(actual, expected);
});
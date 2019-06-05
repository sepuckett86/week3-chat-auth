import RoomItem from '../src/home/RoomItem.js';

const test = QUnit.test;

test('returns html for li', assert => {
    // Arrange
    const room = {
        name: 'Cats'
    };

    const expected = /*html*/ `
        <li>
            <a href="./">
                <p>Cats</p>
            </a>
            <button>Delete Room</button>
        </li>
    `;

    // Act
    const roomItem = new RoomItem({ room });
    const actual = roomItem.renderTemplate();

    // Assert
    assert.htmlEqual(actual, expected);
});
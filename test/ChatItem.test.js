import ChatItem from '../src/chat/ChatItem.js';

const test = QUnit.test;

QUnit.module('ChatItem');

test('returns html for chat item', assert => {
    // Arrange
    const chat = {
        message: 'what user said',
        uid: 123, // id of who said this
        displayName: 'name of user who said this',
        photoURL: null,
        date: 'date'
    };

    const expected = /*html*/ `
        <li>
            <div class="chat-info">
                <img class="chat-pic" src="./assets/blank-profile-picture.png">
                <span>name of user who said this</span>
            </div>
            <p>what user said</p>
            <p>date</p>
        </li>
    `;

    // Act
    const chatItem = new ChatItem({ chat });
    const actual = chatItem.renderTemplate();
    
    // Assert
    assert.htmlEqual(actual, expected);
});
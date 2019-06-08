import { app } from '../src/services/firebase.js'; 

import './html-equal.js';

import './hash-storage.test.js';
import './html-equal.test.js';
import './html-to-DOM.test.js';

import './Profile.test.js';
// import './RoomItem.test.js';
// import './ChatItem.test.js';

QUnit.done(() => {
    app.delete();
}); 
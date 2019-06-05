const config = {
    apiKey: 'AIzaSyCirbHe8ia2eTP1K1SInTaqMI3-55ZSv1I',
    authDomain: 'chat-room-b.firebaseapp.com',
    databaseURL: 'https://chat-room-b.firebaseio.com',
    projectId: 'chat-room-b',
    storageBucket: 'chat-room-b.appspot.com',
    messagingSenderId: '373045659010',
    appId: '1:373045659010:web:fbb45bbb0a806f26'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();

window.db = db;
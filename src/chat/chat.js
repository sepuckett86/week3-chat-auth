import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import ChatApp from './ChatApp.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new ChatApp();
    root.appendChild(app.render());
});

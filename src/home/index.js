import '../utils/check-auth.js';
import App from './App.js';

const root = document.getElementById('app');

const app = new App();
const appDOM = app.render();

root.appendChild(appDOM);
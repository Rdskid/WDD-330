import {createHTML} from './hikes.js';
const myHikes = new createHTML();
window.addEventListener('load', () => {
    myHikes.createHTML();
});
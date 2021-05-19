import {createHTML} from '../js/hikes.js';
const myHikes = new createHTML('hikesList');
window.addEventListener('load', () => {
    myHikes.createHTML();
});
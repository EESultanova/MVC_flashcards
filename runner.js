const FlashCards = require('./mvc.js');
const fileName = process.argv.slice(2);
const game = new FlashCards(fileName);
game.controller();

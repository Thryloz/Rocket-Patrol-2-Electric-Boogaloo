// Jim Lee
// 5 hours 
// 1. 5pts Bonus ship     1 hour, actually really simple
// 2. 5pts Mouse control  2 hours, of reading phaser docs
// 3. 3pts Timer Display  2 hours, took way too long trying to get it to display only seconds
// 4. 

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

let game = new Phaser.Game(config);

let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;

//keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT;
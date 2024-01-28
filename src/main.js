// Jim Lee
// 6 hours 
// 1. 5pts Bonus ship       1 hour, actually really simple
// 2. 3pts Timer Display    2 hours, took way too long trying to get it to display only seconds
// 3. 5pts Mouse control    2 hours, of reading phaser docs
// 4. 5pts Particle Emitter 30 mins, much faster now that I know where to look
// 5. 1pt  Speed up         10 mins, it's like 8 more lines

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
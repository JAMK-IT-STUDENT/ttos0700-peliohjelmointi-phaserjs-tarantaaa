var demo = {}, highMax = 719, highMin = 880, centerX = 1500 / 2, centerY = 800, runner, rabbit, speed = 6, scalingCount = 2;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        //game.load.image('runner', 'assets/sprites/female_runner.png');
        game.load.spritesheet('rabbitsheet', 'assets/spritesheets/rabbitrun5.png', 82, 57);
        game.load.image('rabbit', 'assets/sprites/rabbit.png');
        game.load.image('desert', 'assets/backgrounds/desert_BG.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        addStateEventListeners();
        game.world.setBounds(0, 0, 2958, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var desertBG = game.add.sprite(0, 0, 'desert');
        
        rabbit = game.add.sprite(20, 20, 'rabbit');
        rabbit.scale.setTo(0.6, 0.6);
        
        runner = game.add.sprite(centerX, centerY - 40, 'rabbitsheet');
        runner.anchor.setTo(0.5, 0.5);
        runner.scale.setTo(scalingCount, scalingCount);
        game.physics.enable(runner);
        runner.body.collideWorldBounds = true;
        runner.animations.add('run', [0, 1, 2]);
        
        
        game.camera.follow(runner);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            runner.scale.setTo(scalingCount, scalingCount);
            runner.x += speed;
            runner.animations.play('run', 6, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            runner.scale.setTo(-scalingCount, scalingCount);
            runner.x -= speed;
            runner.animations.play('run', 6, true);
        }
        else{
            runner.animations.stop('run');
            runner.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            runner.y -= speed;
            if(runner.y < highMax){
                runner.y = highMax;
            }
            
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            runner.y += speed;
            if(runner.y > highMin){
                runner.y = highMin;
            }
        }
    }
};

function changeState(i, stateNum){
    console.log('state' + stateNum);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}
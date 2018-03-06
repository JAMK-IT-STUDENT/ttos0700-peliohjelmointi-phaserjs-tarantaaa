demo.state1 = function(){};

var cursors, vel=500, rocks, dunes;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('dland_tileset', 'assets/tilemaps/dland_tileset.png');
        game.load.image('dunes_tileset', 'assets/tilemaps/dunes_tileset.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        addStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('dunes_tileset');
        map.addTilesetImage('dland_tileset');
        
        dunes = map.createLayer('dunes');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(3, 11, true, 'rocks');
        
        runner = game.add.sprite(200, 200, 'rabbitsheet');
        game.physics.enable(runner);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(runner, rocks);
        
        if(cursors.up.isDown){
            runner.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            runner.body.velocity.y = vel;
        }
        else{
            runner.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            runner.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            runner.body.velocity.x = vel;
        }
        else{
            runner.body.velocity.x = 0;
        }
    }
};
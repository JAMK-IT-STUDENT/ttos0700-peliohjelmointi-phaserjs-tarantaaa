demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('dland_tileset', 'assets/tilemaps/dland_tileset.png');
        game.load.image('dunes_tileset', 'assets/tilemaps/dunes_tileset.png');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('dunes_tileset');
        map.addTilesetImage('dland_tileset');
        
        var dunes = map.createLayer('dunes');
        var rocks = map.createLayer('rocks');
        
    },
    update: function(){}
};
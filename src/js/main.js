var g = ga(352, 640, setup, [
    'spritesheet.json',
    'spritesheet.png',
    'levelStart.json'
]);

var sceneInit, sceneGame, player;

function setup() {
    setupUI(g);
    sceneInit = g.group();
    sceneInit.visible = false; // Straight to the game!
    sceneGame = g.group();
    // sceneGame.visible = false;

    g.player = g.sprite([
        "h_d.png",
        "h_r.png",
        "h_u.png"
    ]);
    g.player.x = 16*8;
    g.player.y = 16*17;
    sceneGame.addChild(g.player);

    g.cLevel = g.makeTiledWorld(
        "levelStart.json",
        "spritesheet.png"
    );

    // Controls for Desktop
    g.keyboard(32).release = () => { step(1) }; // Space
    g.keyboard(87).release = () => { step(2) }; // W
    g.keyboard(68).release = () => { step(3) }; // D
    g.keyboard(83).release = () => { step(4) }; // S
    g.keyboard(65).release = () => { step(5) }; // A
}

function step(i) {
    if (i == 1) { // Attack
    } else {
        var pVw = g.hitTestTile(g.player, g.cLevel.getObject("Tile Layer 1").data, 22, g.cLevel, "every");
        if (pVw.hit) console.log("hit!");
        unitGo(g.player, i);
    }
}

function unitGo(u, i) {
    if (i == 2) { // Go North
        u.show(2);
        u.y -= 16;
    } else if (i == 3) { // Go East
        u.show(1);
        u.scaleX = 1;
        u.x += 16;
    } else if (i == 4) { // Go South
        u.show(0);
        u.y += 16;
    } else if (i == 5) { // Go West
        u.show(1);
        u.scaleX = -1;
        u.x -= 16;
    }
}

//Start the Ga engine.
g.start();
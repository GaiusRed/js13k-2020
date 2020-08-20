function setupUI(){
    g.sceneUI = g.group()
    g.sceneUI.addChild(g.text("404 BLADES", "16px Impact", "white", 16, 16));

    g.data = {};
    g.data.lvl = g.text("", "16px Impact", "white", 16*17, 16);
    g.sceneUI.addChild(g.data.lvl);

    resetUI();
}

function resetUI(){
    g.data.lvl.content = "Level 000";
}
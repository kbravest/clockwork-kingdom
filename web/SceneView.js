var SceneView = function(model) {
    this.model = model;
    
    this.hexCollectionView = null;
    this.actorView = null;
    
    this.init();
};

SceneView.prototype = new createjs.Container();
SceneView.prototype.constructor = SceneView;
SceneView.prototype.Container_init = SceneView.prototype.initialize;

SceneView.prototype.init = function() {
    this.Container_init(); //call parent constructor
    
    // Create Hex View    
    this.hexCollectionView = new HexCollectionView(this.model.hexCollection);
    this.addChild(this.hexCollectionView);
    this.hexCollectionView.render();
    this.hexCollectionView.onHexClickCallback = this.onHexClick.bind(this);
    
    // Create Actor View
    this.actorView = new ActorView(this.model.actor);
    this.addChild(this.actorView);
    this.actorView.render();
};

SceneView.prototype.onHexClick = function(hexView) {
    this.model.actor.setHex(hexView.model);

    this.actorView.animate();
};

SceneView.prototype.onMouseMove = function(x, y) {
    this.hexCollectionView.onMouseMove(x, y);
};
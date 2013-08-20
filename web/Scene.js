var Scene = function() {
    this.hexCollection = null;
    this.actor = null;
    
    this.init();
};

Scene.prototype.init = function() {
    this.hexCollection = new HexCollection(10, 10);
    this.hexCollection.setDimensions(0, 0, 1200, 800);
    
    this.actor = new Actor();
    var hex = this.hexCollection.getHex(5, 1);
    this.actor.setHex(hex);    
};
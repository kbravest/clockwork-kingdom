var FREQ_PER_SECOND = 15;

var App = function() {
    this.stage = null;
    this.scene = null;
    this.sceneView = null;
    
    this.init();
};

App.prototype.init = function() {
    this.stage = new createjs.Stage("demoCanvas");
    window.stage = this.stage;
    
    // Create model
    this.scene = new Scene();
    
    // Create view
    this.sceneView = new SceneView(this.scene);
    this.stage.addChild(this.sceneView);
    
    // Mouse move
    this.stage.mouseMoveOutside = true;
    
    var self = this;
    this.stage.onMouseMove = function(e) {
        //console.log("stageX/Y: "+e.stageX+","+e.stageY); // always in bounds
        //console.log("rawX/Y: "+e.rawX+","+e.rawY); // could be < 0, or > width/height
        
        self.sceneView.onMouseMove(e.stageX, e.stageY);
    }
    
    // Start timer
    createjs.Ticker.addEventListener('tick', this.tick.bind(this));
    createjs.Ticker.setFPS(60);
};

App.prototype.tick = function(e) {
    // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
    //circle.x += e.delta/1000*100;
    // this will log a steadily increasing value:
    //console.log("total time: "+createjs.Ticker.getTime());
    
    this.stage.update();
};

var app = new App();
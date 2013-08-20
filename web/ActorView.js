var ActorView = function(model) {
    this.model = model;
    
    this.init();
};

ActorView.prototype = new createjs.BitmapAnimation();
ActorView.prototype.constructor = ActorView;
ActorView.prototype.BitmapAnimation_init = ActorView.prototype.initialize;
    
ActorView.prototype.init = function() {
    var spriteSheet = new createjs.SpriteSheet(this.model.spriteSheetData);
    this.BitmapAnimation_init(spriteSheet); //call parent constructor
    
    this.gotoAndPlay('right');
    this.animate();
};

ActorView.prototype.render = function() {
    this.x = this.model.x;
    this.y = this.model.y;
    this.regX = this.model.regX;
    this.regY = this.model.regY;
    this.scaleX = this.model.scale;
    this.scaleY = this.model.scale;
};

ActorView.prototype.animate = function() {
    var point = this.model.getHex().getCenter();
    
    createjs.Tween.get(
            this.model, 
            {override: true }
        )
        .to(
            {
                x: point.x,
                y: point.y
            }, 
            400,
            createjs.Ease.quadOut
        )
        .addEventListener('change', this.render.bind(this));   
};
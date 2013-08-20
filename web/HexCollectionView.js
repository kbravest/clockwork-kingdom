var HexCollectionView = function(model) {
    this.model = model;
    this.onHexClickCallback = null;
    
    this.init();
};

HexCollectionView.prototype = new createjs.Container();
HexCollectionView.prototype.constructor = HexCollectionView;
HexCollectionView.prototype.Container_init = HexCollectionView.prototype.initialize;

HexCollectionView.prototype.init = function() {
    this.Container_init(); //call parent constructor
    
    var hexes = this.model.getHexes();
    var i = 0;
    var length = hexes.length;
    for (; i < length; i++) {
        var model = hexes[i];
        var hexView = new HexView(model);
        this.addChild(hexView);

        
        hexView.x = Math.random() * 1000;
        hexView.y = Math.random() * 1000;
        createjs.Tween.get(hexView, {override: true })
            .wait(hexView.model.q * 10 + hexView.model.r * 10)
            .to(
                {
                    x: hexView.model.x,
                    y: hexView.model.y
                }, 
                400,
                createjs.Ease.backOut
            )
            //.addEventListener('change', this.updateCache.bind(this)) 
        
        /*
        hexView.scaleX = -1;
        createjs.Tween.get(hexView, {override: true })
            .wait(hexView.model.q * 10 + hexView.model.r * 10)
            .to(
                {
                    scaleX : 1
                },
                400,
                createjs.Ease.backOut
            )
            //.addEventListener('change', this.updateCache.bind(this))
        */
    }
    
    window.setTimeout(this.onIntroComplete.bind(this), 800);
    //this.addEventListener('mousemove', this.onMouseMoveHandler.bind(this));
    
};

HexCollectionView.prototype.onMouseMove = function() {
    console.log(123);
};

HexCollectionView.prototype.onIntroComplete = function() {
    this.setCache();
    window.stage.enableMouseOver(FREQ_PER_SECOND);
};

HexCollectionView.prototype.render = function() {
    this.x = this.model.x;
    this.y = this.model.y;
    
    for (var i = 0; i < this.children.length; i++) {
        var hexView = this.children[i];
        hexView.render();
    };
};

HexCollectionView.prototype.onHexClick = function(hexView) {
    if (this.onHexClickCallback) {
        this.onHexClickCallback(hexView);
    }
};

HexCollectionView.prototype.onMouseMove = function(x, y) {
    var hex = this.model.getHexAtPoint(x, y);
    if (hex != null) {
        hex.isHover = true;
        hex.view.render();
    }
};

HexCollectionView.prototype.setCache = function() {
    this.cache(this.model.x, this.model.y, this.model.width, this.model.height);
};

HexCollectionView.prototype.refreshCache = function() {
    if (this.cacheCanvas != null) {
        this.updateCache();
    }
};
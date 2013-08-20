var HexView = function(model) {
    this.model = model;
    
    this.shape = null;
    this.text = null;
    
    this.init();
};

HexView.prototype = new createjs.Container();
HexView.prototype.constructor = HexView;
HexView.prototype.Container_init = HexView.prototype.initialize;

HexView.prototype.init = function() {
    this.Container_init(); //call parent constructor

    this.shape = new createjs.Shape();
    this.addChild(this.shape);
    
    this.text = new createjs.Text();
    this.text.text = this.model.q + ', ' + this.model.r;
    this.text.font = '20px Arial';
    this.text.color = '#ff7700';
    this.addChild(this.text);
    
    this.x = this.model.x;
    this.y = this.model.y;
    //this.regX = this.model.regX;
    //this.regY = this.model.regY;
    //this.addEventListener('mouseover', this.onMouseOverHandler.bind(this));
    //this.addEventListener('mouseout', this.onMouseOutHandler.bind(this));
    this.addEventListener('click', this.onClickHandler.bind(this));
    
    this.model.view = this; //blah
};

HexView.prototype.onMouseOverHandler = function(e) {
    var model = this.model;
    
    if (model.isHover === false) {
        model.isHover = true;
        this.render();
    }
};

HexView.prototype.onMouseOutHandler = function(e) {
    var model = this.model;
    if (model.isHover === true) {
        model.isHover = false;
        this.render();
    }
};

HexView.prototype.onClickHandler = function(e) {
    this.parent.onHexClick(this);
};

HexView.prototype.render = function() {
    var model = this.model;
    
    var fillColor;
    if (model.isHover) {
        fillColor = 'rgba(0,255,0,1)';
    } else {
        fillColor = 'rgba(0,255,255,1)';
    }
    
    this.shape.graphics
        .clear()
        .beginStroke("rgba(0,0,0,1)")
        .beginFill(fillColor)
        .moveTo(model.p0.x, model.p0.y)
        .lineTo(model.p1.x, model.p1.y)
        .lineTo(model.p2.x, model.p2.y)
        .lineTo(model.p3.x, model.p3.y)
        .lineTo(model.p4.x, model.p4.y)
        .lineTo(model.p5.x, model.p5.y)
        .lineTo(model.p0.x, model.p0.y)
        .endStroke();

    //this.x = this.model.x;
    //this.y = this.model.y;

    this.text.x = this.model.width / 2;
    this.text.y = this.model.height / 2;
    
    this.refreshCache();
};

HexView.prototype.refreshCache = function() {
    this.parent.refreshCache();
};
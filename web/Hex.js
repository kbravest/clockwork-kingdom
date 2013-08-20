var Hex = function(q, r) {
    this.q = q;
    this.r = r;
    this.x = 0;
    this.y = 0;
    this.regX = 0;
    this.regY = 0;
    this.centerX = 0;
    this.centerY = 0;
    this.width = 0;
    this.height = 0;
    this.isHover = false;
    
    this.p0 = null;
    this.p1 = null;
    this.p2 = null;
    this.p3 = null;
    this.p4 = null;
    this.p5 = null;
    
    this.init();
};

Hex.prototype.init = function() {
   
};

Hex.prototype.updateDimensions = function(width, height) {
    this.width = width;
    this.height = height;
    
    var halfWidth = this.width / 2;
    var portionHeight = this.height / 4;
    
    this.p0 = { x: halfWidth, y: 0 };
    this.p1 = { x: width, y: portionHeight };
    this.p2 = { x: width, y: height - portionHeight };
    this.p3 = { x: halfWidth, y: height };
    this.p4 = { x: 0, y: height - portionHeight };
    this.p5 = { x: 0, y: portionHeight };
    
    this.x = (this.q * this.width) + (this.r * halfWidth);
    this.y = (this.r * this.height) - (this.r * portionHeight);
    this.regX = this.width / 2;
    this.regY = this.height;
    this.centerX = this.x + this.width / 2; //TODO: use localToGlobal here
    this.centerY = this.y + this.height / 2;
};

Hex.prototype.getCenter = function() {
    var x = this.centerX;
    var y = this.centerY + (this.height / 8);
    return { x: x, y: y };
};
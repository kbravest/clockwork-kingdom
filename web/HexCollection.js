var HexCollection = function(rowCount, colCount) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.hexHash = null;
    this.hexArray = null;
    this.activeHex = null;
    
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    
    this.init();
};

HexCollection.prototype.init = function() {
    this.hexHash = {};
    this.hexArray = [];
    
    for (var r = 0; r < this.rowCount; r++) {
        this.hexHash[r] = {};
        
        var offset = Math.floor(r / 2);
        var qMin = -offset;
        var qMax = this.colCount - offset;
        
        for (var q = qMin; q < qMax; q++) {
            var hex = new Hex(q, r);
            this.hexHash[r][q] = hex;
            this.hexArray.push(hex);
        }
    }
};

HexCollection.prototype.getHexes = function() {
    return this.hexArray;
};

HexCollection.prototype.setDimensions = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    this.updateDimensions();
};

HexCollection.prototype.getHexWidth = function() {
    var hexWidth = Math.floor(this.width / (this.rowCount + 0.5));
    return hexWidth;
};

HexCollection.prototype.getHexHeight = function() {
    var hexHeight = Math.floor(this.height / this.colCount);
    return hexHeight;
};

HexCollection.prototype.updateDimensions = function() {
    var hexWidth = this.getHexWidth();
    var hexHeight = this.getHexHeight();
    
    for (var i = 0; i < this.hexArray.length; i++) {
        var hex = this.hexArray[i];
        hex.updateDimensions(hexWidth, hexHeight);
    }
};

HexCollection.prototype.getHex = function(q, r) {
    var hex = this.hexHash[r][q];
    return hex;
};

HexCollection.prototype.setActive = function(q, r) {
    this.activeHex = this.getHex(q, r);
    return this.activeHex;
};

HexCollection.prototype.getHexAtPoint = function(x, y) {
    var x = x - this.x;
    var y = y - this.y
    
    console.log(x, y, this.width, this.height);
    
    if (x < 0 || x > this.width) {
        return null;
    } else if (y < 0 || y > this.height) {
        return null;
    }
    
    var x1 = this.x;
    var x2 = this.x + this.width;
    var y1 = this.y;
    var y2 = this.y + this.height;
    
    var hexWidth = this.getHexWidth();
    var hexHeight = this.getHexHeight() / 2;
       
    //var q = (1/3 * Math.sqrt(3) * x - 1/3 * y) / size;
    //var r = 2/3 * y / size;   
    
    var q = Math.floor(x / hexWidth);
    var r = Math.floor((y * 2/3) / hexHeight);
    
    console.log(r, q)
    
    //var hex = this.getHex(q, r);
    
    var hex = this.getHex(q,r);
    return hex;
};
var Actor = function() {
    this.q = 0;
    this.r = 0;
    this.x = 0;
    this.y = 0;
    this.regX = 0;
    this.regY = 0;
    this.width = 32;
    this.height = 32;
    this.scale = 2;
    this.spriteSheetData = null;

    this.init();
};

Actor.prototype.init = function() {
    this.regX = this.width / 2;
    this.regY = this.height;
    
    this.spriteSheetData = {
         images: ['character.png'],
         frames: {
            width: this.width,
            height: this.height
        },
         animations: {
            down: {
                frames: [0,1,2],
                frequency: 4
            },
            left: {
                frames: [3,4,5],
                frequency: 4
            },
            right: {
                frames: [6,7,8],
                frequency: 4
            }
        }
    };
};

Actor.prototype.setHex = function(hex) {
    this.hex = hex;
};

Actor.prototype.getHex = function() {
    return this.hex;
};
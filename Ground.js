/**
 * 游戏广场oGround
 * init : 初始化广场
 * remove ： 删除小方格
 * addSqure ： 添加小方格
 */
var oGround = new Ground(BASE_X_PONIT, BASE_Y_PONIT, XLEN * SQUREWIDTH, YLEN * SQUREWIDTH);

oGround.init = function () {
    this.viewContent.style.position = 'absolute';
    this.viewContent.style.left = this.x + 'px';
    this.viewContent.style.top = this.y + 'px';
    this.viewContent.style.width = this.width + 'px';
    this.viewContent.style.height = this.height + 'px';
    this.viewContent.style.backgroundColor = '#f00';
    document.body.appendChild(this.viewContent);
    this.squreTable = [];
    for (var y = 0; y < YLEN; y++) {
        this.squreTable[y] = new Array(XLEN);
        for (var x = 0; x < XLEN; x++) {
            if (x === 0 || y === 0 || x === XLEN - 1 || y === YLEN - 1 ){ 
                var newSqure =  SqureFactory.createSqure('Stone', x , y, '#000');
                
            } else {
                var newSqure = SqureFactory.createSqure('Fool', x, y, 'orange');
                
            }
            this.squreTable[y][x] = newSqure;
            this.viewContent.appendChild(newSqure.viewContent);
        }
    }
   
}
oGround.remove = function (x, y) {
        
    this.viewContent.removeChild(this.squreTable[y][x].viewContent);
    this.squreTable[y][x] = null;
}
oGround.addSqure = function (obj) {
    this.squreTable[obj.y][obj.x] = obj;
    this.viewContent.appendChild(obj.viewContent);
}
oGround.init();
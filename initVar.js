/**
 * XLEN :  一行有多少方块
 * YLEN :  一列有多少方块
 * SQUREWIDTH : 一个方块的大小
 */
var XLEN = 30,
    YLEN = 30,
    SQUREWIDTH = 10;
/**
 * 游戏场景的位置
 */
var BASE_X_PONIT = 200;
var BASE_Y_PONIT = 100;
/**
 * 运动方向
 */
var DIRE = {
    LEFT : {
        X : -1,
        Y : 0,
    },
    RIGHT : {
        X : 1,
        Y : 0,
    },
    DOWN : {
        X : 0,
        Y : 1,
    },
    UP : {
        X : 0,
        Y : -1
    }
    
}

/**
 * 运动的时间间隔
 */
var INTERVAL = 300;

/**
 * 方块的集合
 */
// var 

Squre.prototype.touch = function (){ 
    console.log('hahahh');
};
/**
 * 
 * @param {number} x left偏移量
 * @param {number} y top偏移量
 * @param {number} width 方块宽度
 * @param {number} height 方块高度
 * @param {number} dom 在页面中所映射的元素
 * 
 */

function Squre (x, y, width, height, dom) {
    this.x = x;
    this.height = height;
    this.y = y;
    this.width = width;
    this.viewContent = dom ||document.createElement('div');
}

Squre.prototype.upDate = function (x,y) {
    this.x = x;
    this.y = y;
    this.viewContent.style.left = x * SQUREWIDTH + 'px'
    this.viewContent.style.top = y * SQUREWIDTH + 'px'
} 

/**
 * 子对象
 */
var Fool = toos.extends(Squre); 
var SnakeBody = toos.extends(Squre); 
var Stone = toos.extends(Squre);
var Food = toos.single(Squre);  
var SnakeHead = toos.single(Squre); 
var Snake = toos.single(); 
var Ground = toos.single(Squre);  
//游戏进程管理
var Game = toos.single();




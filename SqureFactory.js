/**
 * 抽象工厂模式
 *  createSqure ： 创建对象的接口
    SqureFactory.prototype[type] ： 子工厂构造函数;
    init  : 为子工厂构造的对象添加初始化样式
 * 
 */
function SqureFactory () {

}
SqureFactory.createSqure = function (type, x, y, color) {
    if (SqureFactory.prototype[type] === 'undefined'){ 
        throw 'SqureFactory.prototype[type] is not defined';
    }
    if (SqureFactory.prototype[type].prototype__proto__ != SqureFactory.prototype) {
       
        SqureFactory.prototype[type].prototype = new SqureFactory();
    }
    var newSqure = new SqureFactory.prototype[type](x, y, color);
    return newSqure;
}
SqureFactory.prototype.init = function (obj, color, msg){
    obj.viewContent.style.position = 'absolute';
    obj.viewContent.style.width = obj.width + 'px';
    obj.viewContent.style.height = obj.height + 'px';
    obj.viewContent.style.left = obj.x * SQUREWIDTH + 'px';
    obj.viewContent.style.top = obj.y * SQUREWIDTH + 'px' ;
    obj.viewContent.style.backgroundColor = color ;
    obj.touch = function () {
        return msg;
    }
 }

SqureFactory.prototype.Fool = function (x, y, color) {
    var oFool = new Fool(x, y, SQUREWIDTH, SQUREWIDTH);
    this.init(oFool, color, 'move');
    return oFool;
}
SqureFactory.prototype.SnakeBody = function (x, y, color) {
    var oSnakeBody = new SnakeBody(x, y, SQUREWIDTH, SQUREWIDTH);
    this.init(oSnakeBody, color, 'die');
    return oSnakeBody;
}
SqureFactory.prototype.Stone = function (x, y, color) {
    var oStone = new Stone(x, y, SQUREWIDTH, SQUREWIDTH);
    this.init(oStone, color, 'die');
    return oStone;
}
SqureFactory.prototype.Food = function (x, y, color) {
    var oFood = new Food(x, y, SQUREWIDTH, SQUREWIDTH);
    this.init(oFood, color, 'eat');
    oFood.upDate(x , y);
    return oFood;
}
SqureFactory.prototype.SnakeHead = function (x, y, color) {
    var oSnakeHead = new SnakeHead(x, y, SQUREWIDTH, SQUREWIDTH);
    this.init(oSnakeHead, color, 'die');
    oSnakeHead.upDate(x , y);
    return oSnakeHead;
}

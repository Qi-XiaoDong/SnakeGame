/**
 * 创建游戏逻辑
 */
var btn = document.getElementById('state');

var ogame = new Game();
ogame.timer = null;
ogame.score = 0;
ogame.init = function () {
    oGround.init();
    oSnake.init(oGround);
    createFood();
    document.onkeydown = function (e){ 
        e = e || window.event;
        if (e.keyCode === 37 && oSnake.dire !== DIRE.RIGHT) {
            oSnake.dire = DIRE.LEFT;
        } else if (e.keyCode === 38 && oSnake.dire !== DIRE.DOWN) {
            oSnake.dire = DIRE.UP;
        } else if (e.keyCode === 39 && oSnake.dire !== DIRE.LEFT) {
            oSnake.dire = DIRE.RIGHT;
        }else if (e.keyCode === 40 && oSnake.dire !== DIRE.UP) {
            oSnake.dire = DIRE.DOWN;
        }
    }
}

ogame.state = function () {
    this.timer = setInterval(function () {
        oSnake.move(oGround)
    }, INTERVAL)
}
ogame.over = function (){
    clearInterval(this.timer);
    alert('游戏得分'+ this.score);
   
}

/**
 * 创建食物
 */
function createFood (){ 
    var x = null;
    var y = null;
    var flag = true; 
    while (flag) {
        // x y  范围为1 - 28
        // 范围随机数 Mat
          var x = randomNum(1, XLEN - 1);
          var y = randomNum(1, YLEN - 1);
          var ok = true;
          for (var node = oSnake.head;node;node = node.next) {
            if (x === node.x && y === node.y) {
                //现在随机的位置在蛇的身上，
                ok = false;
                break;
            }
          }
          if (ok){
              // 表示现在的位置不再蛇身上，就可以退出while循环
              flag = false;
          }
    }
    // 创建食物
    var oFood = SqureFactory.createSqure('Food', x , y, 'red');
    oGround.remove(oFood.x, oFood.y);
    oGround.addSqure(oFood);


}
/**
 * 产生随机的位置
 * @param {*} min 
 * @param {*} max 
 */
function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

ogame.init();
btn.onclick = function () {
    ogame.state()
}
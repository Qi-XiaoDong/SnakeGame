var oSnake = new Snake();
oSnake.head = null;
oSnake.tail = null;
/**
 * 初始化一条蛇
 */
oSnake.init = function (ground) {
    var oSnakeHead = SqureFactory.createSqure('SnakeHead', 3, 1, 'yellow');
    oSnake.head = oSnakeHead;
    ground.remove(3,1)
    ground.addSqure(oSnakeHead);

    var oSnakeBody1 = SqureFactory.createSqure('SnakeBody',2, 1, 'blue');
    ground.remove(2,1)
    ground.addSqure(oSnakeBody1);

    var oSnakeBody2 = SqureFactory.createSqure('SnakeBody',1, 1, 'blue');
    oSnake.tail = oSnakeBody2;
    ground.remove(1,1);
    ground.addSqure(oSnakeBody2);

    // 链表产生关系
    oSnakeHead.last = null;
    oSnakeHead.next = oSnakeBody1;

    oSnakeBody1.last = oSnakeHead;
    oSnakeBody1.next = oSnakeBody2;

    oSnakeBody2.last = oSnakeBody1;
    oSnakeBody2.next = null;
    // 默认方向
    this.dire = DIRE.DOWN;
}

// 
oSnake.stateMsg = {
    move  : function (oSnake, squre, ground, tag) {
// 创建新蛇尾       
        var newBody = SqureFactory.createSqure('SnakeBody', oSnake.head.x, oSnake.head.y, 'blue');
        
        newBody.next = oSnake.head.next;
        newBody.next.last = newBody;
        newBody.last = null;
        
        ground.remove(oSnake.head.x, oSnake.head.y);
        ground.addSqure(newBody);
//创建新蛇头
        var newHead = SqureFactory.createSqure('SnakeHead', squre.x, squre.y, 'yellow');
        
        newHead.next = newBody;
        newHead.last = null;
        newBody.last = newHead;

        ground.remove(squre.x, squre.y);
        ground.addSqure(newHead);
        oSnake.head = newHead;
// 如果吃到食物 tag===true 就不删除蛇尾，否则删掉蛇尾
        if  (!tag) {
            var newFool = SqureFactory.createSqure('Fool', oSnake.tail.x, oSnake.tail.y, 'orange');
            ground.remove(oSnake.tail.x, oSnake.tail.y);
            ground.addSqure(newFool);
            oSnake.tail = oSnake.tail.last;
        }
        

    },

    eat : function (oSnake, squre, ground){ 
        this.move(oSnake, squre, ground, true);
        createFood()
        ogame.score ++;
    },

    die : function (oSnake, squre, ground){
        
        ogame.over();
    }

}

oSnake.move = function (ground) {
        var nextX = this.head.x + this.dire.X;
        var nextY = this.head.y + this.dire.Y;

        var squre = ground.squreTable[nextY][nextX];
        if (typeof squre.touch === 'function') { 
            this.stateMsg[squre.touch()](this, squre, ground);
        }
        
}



















function event ( elem, type, handle ) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false );
    }else if (elem.attchEvent) {
        elem.attchEvent('on' + type , function ( ) {
            handle.call(elem);
        })
    }
}
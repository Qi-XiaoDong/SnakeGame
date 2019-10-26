toos = {
    // 继承原型属性
    inherit : (function () {
        var Temp = function () {} ;
        return function (Target, Origin) {
            Temp.prototype = Origin.prototype;
            Target.prototype = new Temp();
            Target.prototype.constructor = Target;
        }
    })(),

    extends : function (Origin) {
        var Result = function () {
            Origin.apply(this, arguments);
        }
        this.inherit(Result, Origin);
        return Result;
    },
    // 单例
    single : function (Origin) {
        var singleResult = (function (){ 
            var instence ;
            return function () {
                if (typeof instence === 'object'){
                    return instence;
                }
                Origin && Origin.apply(this, arguments);
                instence = this;
            }
        })();
        Origin && this.inherit(singleResult, Origin);
        return singleResult;
    }
}



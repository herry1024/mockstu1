/**
 * Created by guoyi on 2016-6-6.
 */
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;

    this.sayHello = function () {
        console.log('hello' + this.name);
    };
    this.toString = function () {
        return this.name;
    }
}
Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}
// 添加继承
// util.inherits(Sub, Base);

var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// // objSub.sayHello();
// console.log(objSub);

// 将任意对象转换为字符串对象
console.log(util.inspect(objBase));
console.log(util.inspect(objBase,true));
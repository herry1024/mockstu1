var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
    console.log('Listener1', arg1, arg2);
})
emitter.on('someEvent1', function (arg1, arg2, arg3) {
    console.log('Listener2', arg1, arg2, arg3);
})
emitter.addListener('someEvent3',function (arg1,arg2) {
    console.log('Listen3',arg1,arg2);
})
var callbock = function () {
    console.log("someone callback");
}
//只会监听一次，只打印一次
// emitter.once('someEvent3', callbock);
// emitter.emit('someEvent', 1990, 1991, 1993);
// emitter.removeListener('someEvent1', callbock());
//
//
// // emitter.removeAllListeners();
// emitter.emit('someEvent1', 1994, 1995, 1996);
// emitter.emit('someEvent', 1997, 1998, 1999);

emitter.emit('someEvent3',1,2);




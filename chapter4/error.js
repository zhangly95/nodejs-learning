var events = require('events');
var emmiter = new events.EventEmitter;

emmiter.on('error',function(arg1,arg2){
    console.log('listenter1',arg1,arg2)
})

emmiter.emit('error','byvoid',1991);
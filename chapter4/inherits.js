var util = require('util');

function Base(){
    this.name= 'base';
    this.time='1991';
    this.sayhello = function(){
        console.log('hello'+this.name)
    };
}

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name='sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayhello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayhello();
console.log(objSub);


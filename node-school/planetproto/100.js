// JS 中的每一个函数，都有一个特殊的属性：prototype。
// 它指向这个函数的原型对象
// __proto__属性和prototype属性，是两个不同的属性
// 前者存在在实例上，后者存在在函数上，但都是指向了原型对象
// [obj].__proto__ == Fn.prototype

// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first

function Robot (){

}

var robby = new Robot();
var cranky = new Robot();

Robot.prototype.parts = [];
Robot.prototype.capabilities = [];

// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must 
//    also have 'fly' without adding to it directly, so this property has to be 
//    shared

robby.parts = [];
robby.parts.push('core');
robby.capabilities.push('fly');

// -> Claim the result of robby.parts
claim(robby.parts, ['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
};

// 使用对象字面量创建对象，是最简单的一种方式
// -> Create an object called 'robot' using an object literal
// -> robot should have a property 'smart' with value true
var robot = {
	smart: true
};

// -> Claim the result robot.smart
claim(robot.smart, true);

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	robot: robot
};


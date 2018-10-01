// 使用 new 关键字新建一个对象时，发生的一系列事：
// 1.在内存中开辟一片空间，存储新对象
// 2.将 this 关键字指向新开辟的内存，成为了一个指针
// 3.按照构造函数，初始化对象
// 4.返回 this（即，返回新对象）
// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

function Robot(){

}

function Vehicle(){
	return {};
}


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
};

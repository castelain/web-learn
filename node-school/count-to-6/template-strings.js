// 模板字符串：用反引号包起来的字符串就叫做模板字符串
// 模板字符串允许字符串插值、允许多行文本
let name = process.argv[2];
let greeting = `Hello, ${name}!
Your name lowercased is "${(name).toLowerCase()}".`;
console.log(greeting);
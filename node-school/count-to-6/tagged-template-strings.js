// 模板字符串上可以被打上标记
// 标记的功能类似与一个函数
// tag`string1${arg}string2`  =>  tag([string1,string2],arg)
// fn`Hello ${you}! You're looking ${adjective} today!`
// => fn(["Hello ", "! You're looking ", " today!"], you, adjective);

function html(...args) {
    return `${args[0][0]
        .replace('\&','&amp;')
        .replace('\'','&apos;')
        .replace('\"','&quot;')}${args[1]} ${args[0][1]} ${args[2]
        .replace('<','&lt;')
        .replace('>','&gt;')
    }`;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
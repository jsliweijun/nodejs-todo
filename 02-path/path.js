const path = require('path');

// 全局变量 __dirname  __filename
console.log(__dirname); // 当前文件目录的剧对路径  code/nodejs-todo/01-path
console.log(__filename); // 当前文件的绝对路径   /code/nodejs-todo/01-path/path.js

// 路径
let p = '/code/nodejs-todo/01-path/path.js';
let d = '/code/nodejs-todo/01-path/';

// basename()
console.log(path.basename(p)); // path.js  文件名称
console.log(path.basename(p, '.js')); // path ，ext 扩展名 参数可以去除返回值中的扩展名。
console.log(path.basename(d)); // 01-path  目录名称， 最后一部分，不带最后一个 / 路径分割符

// dirname()  返回上一级目录名
console.log(' dirname --------');
console.log(path.dirname(p)); // code/nodejs-todo/01-path
console.log(path.dirname(d)); // /code/nodejs-todo

console.log('  extname() --------');
console.log(path.extname(p)); // .js
console.log(path.extname(d)); // 空串 ‘’

console.log('  isAbsolute() --------');
console.log(path.isAbsolute('/a/b/c/d')); // ./  a/b/  这些为 false
console.log(path.isAbsolute(d)); // true

console.log('  join([...paths]) 拼接路径片段 --------');
console.log(path.join(__dirname, 'aa', 'bb', 'index.js')); // 通常这样路径，当前文件是在项目的根目录下
console.log(path.join(__dirname, '/aa/cc', 'bb/', '/index.js')); // 通常这样路径，当前文件是在项目的根目录下
console.log(path.join('', '/')); //  返回 /  根目录
console.log(path.join('', 'aa/cc')); //  返回 aa/cc 根目录
console.log(path.join()); //  返回 .  当前目录

console.log('path.resolve()   路径或路径片段的序列解析为绝对路径。');
console.log(path.resolve('a', 'b', 'c')); // /Users/code/nodejs-todo/a/b/c  解析为绝对路径
console.log(path.resolve('/a', '/b', '/c')); // /c  解析为绝对路径
console.log(path.resolve('a', '/b', 'c')); // /b/c  解析为绝对路径  从 右往左拼接，只要有根路径形成绝对路径后，就不要了
console.log(path.resolve('/a', 'b', 'c')); // /c  解析为绝对路径

console.log('--parse(path) 解析路径中的重要信息--');
console.log(path.parse(p));
// {
//     root: '/',
//     dir: '/code/nodejs-todo/01-path',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }

console.log('--- 格式化路径对象，将对象信息转化成字符串  format(obj)');
let obj = {
    root: '/',
    dir: '/code/node/path',
    base: 'test.js'
};
console.log(path.format(obj)); // /code/node/path/test.js
let obj1 = {
    dir: '/code/node/path', // 如果提供 pathObject.dir，则忽略 pathObject.root
    base: 'test.js', // 如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name
    name: 'test1.js'
};
console.log(path.format(obj1)); // /code/node/path/test.js

console.log('规范化 path  解析 ..  . 这些路径  , 末尾分割符没被去掉');
console.log(path.normalize('/a/b/d//c/e/./')); // /a/b/d/c/e
console.log(path.normalize('/a/b/d//c/e/..')); // /a/b/d/c
console.log(path.normalize('/a/b/d//c/e/../a.txt')); // /a/b/d/c/a.txt    .. 会返回上一级目录
console.log(path.normalize('/a/b/d///c/e/./a.txt/')); // /a/b/d/c/e/a.txt   /// 多个分割符会被处理掉

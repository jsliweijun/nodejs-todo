// 直接将文件内容读到 内存中，小文件使用ok
// fs.readFile() 函数缓冲整个文件。 为了最小化内存成本，在可能的情况下优先通过 fs.createReadStream() 进行流式传输。

const { readFile } = require('fs');
const path = require('path');

// path 相对路径前面不能是 ./,  相对路径直接写文件名即可。
function fn1() {
    // 报错，相对路径直接写文件名
    readFile('./data.json', (err, data) => {
        console.log(err);
        console.log(data);
    });
}

// path 使用绝对路径
function fn2() {
    readFile(path.join(__dirname, 'data.json'), (err, data) => {
        console.log(err);
        //console.log(data); // 数据默认是 buffer 形式，需要转化成 字符串
        console.log(data.toString());
    });
}

// readFile 可以传递第2个参数，字符串 编码类型， 对象 {encoding,flag,signal}
function fn3() {
    readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.toString());
    });
}
fn3();

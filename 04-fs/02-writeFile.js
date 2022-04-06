// 将内容写入到文件中
const { writeFile } = require('fs');

function fn1() {
    let content = '12312312312312写入成功';
    // path, data, cb
    writeFile('test1.txt', content, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('写入成功');
    });
}
// fn1();

function fn2() {
    let str = '11111111';
    // path  data, encode/option  cb
    writeFile('test2.txt', str, utf8, (err) => {});
}

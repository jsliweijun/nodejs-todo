// 删除文件 : 传入路径， 不能删除目录。

const { unlink } = require('fs');

function fn1() {
    unlink('testunlink.txt', (err) => {
        if (err) {
            throw err;
        }
    });
}
fn1();

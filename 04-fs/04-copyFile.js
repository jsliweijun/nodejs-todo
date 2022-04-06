// 拷贝文件
const { copyFile } = require('fs');

function fn1() {
    copyFile('test1.txt', 'test2.txt', (err) => {
        if (err) {
            throw err;
        }
        console.log('复制成功');
    });
}
fn1();

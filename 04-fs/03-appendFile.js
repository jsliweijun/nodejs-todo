// 追加方式写入数据

const { appendFile } = require('fs');

function fn1() {
    let data = 'appendFile data';

    appendFile('test1.txt', data, (err) => {
        if (err) {
            throw err;
        }
        console.log('追加数据成功');
    });
}

fn1();

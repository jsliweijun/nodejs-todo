// 使用 open close write read 通过 buffer 实现大文件拷贝功能。

const { open, write, close, read } = require('fs');
const { Buffer } = require('buffer');

function copyFile(src, dest, cb) {
    let buf = Buffer.alloc(5);
    let readOffset = 0;
    open(src, (err, rfd) => {
        open(dest, 'w', (err, wfd) => {
            function next() {
                // 每次读都重上一次读完索引往后读，读到没内容为止
                read(rfd, buf, 0, 5, readOffset, (err, readBytes) => {
                    // 读到的内容，读到最后读不到内容了就是退出
                    if (!readBytes) {
                        close(rfd, () => {});
                        close(wfd, () => {});
                        console.log('拷贝完成');
                        return;
                    }
                    readOffset += readBytes;
                    // 没有指定写时在文件的哪个位置，默认是在最后写入
                    write(wfd, buf, 0, readBytes, (err, byte) => {
                        console.log('写入成功');
                        next();
                    });
                });
            }
            next();
        });
    });
}

copyFile('bigFile.txt', 'newBigFile.txt');

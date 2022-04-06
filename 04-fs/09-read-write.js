// 大文件读写，避免直接将数据读写到内存中，通过缓冲区和流的方式读写文件
// 在进行 读写时，需要先打开文件。
// 这里的读写 是将文件的内容读到 buffer ， 或者将 buffer 的内容 写出到指定路径下。

// 两个形式的函数
// read(fd,buffer,offset,length,position,cb)
// read(fd,options,cb)

const { open, read, close, write } = require('fs');
const { Buffer } = require('buffer');

let buf = Buffer.alloc(5); // 开辟一个 长度为 5 的缓冲区

function myRead() {
    open('bigFile.txt', (err, fd) => {
        // 通过 fd 读取内容到 buffer 中
        read(fd, buf, 0, 5, 0, (err, byteRead, buffer) => {
            console.log(byteRead);
            console.log(buffer.toString());
        });
    });
}

// 将缓冲区的内容写入到指定文件中
// 将 buffer 写入 fd(文件描述符) 指定的文件。
// write(fd,buffer，offset,length,position,cb)
// write(fd,string,position,encoding,cb)
function myWrite() {
    let buf = Buffer.from('1234567890');

    // 打开时需要设置 写
    open('newBigFile.txt', 'w', (err, fd) => {
        write(fd, buf, 0, 3, 0, (err, byteWritten, buffer) => {
            console.log(byteWritten);
            console.log(buffer.toString());
        });
    });
}

myWrite();

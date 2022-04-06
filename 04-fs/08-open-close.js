// 文件打开/关闭 功能为了能进行将文件通过缓冲区的方式进行读写文件，减少对内存的占用。
// https://www.developerastrid.com/assembly/the-role-of-assembly-language-to-open-and-close-files/
// 应用程序对文件操作，需要操作系统帮助，open 方法就是让操作系统帮忙
// 打开是指为文件建立相应的信息区和缓冲区,关闭即是撤销文件信息区和缓冲区,使文件指针变量不再指向该文。

// 异步地打开文件。
// 关闭文件描述符。
const { open, close } = require('fs');

function fn1() {
    // fd 文件描述符 (fd),用于 close(fd,()=>{}) 传入
    open('bigFile.txt', (err, fd) => {
        console.log(fd);

        // 关闭打开的文件
        close(fd, (err) => {
            console.log('关闭文件');
        });
    });
}
fn1();

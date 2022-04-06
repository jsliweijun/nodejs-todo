// 对文件进行监控，当文件发生改变时，触发回调函数
// 监视 filename 的变化。 每次访问文件时都会调用回调 listener。

const { watchFile } = require('fs');

function fn1() {
    // curr  是当前最新的文件对象， fs.Stats 信息
    watchFile('test1.txt', (curr, prev) => {
        console.log(curr);
        console.log(curr.mtime); // 2022-04-06T08:11:40.543Z
        console.log(prev.mtime); // 2022-04-06T07:49:45.219Z
    });
}
fn1();

/**
 * 
 * Stats {
  dev: 16777222,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 23708027,
  size: 55,
  blocks: 8,
  atimeMs: 1649232804039.8433,
  mtimeMs: 1649232802735.1072,
  ctimeMs: 1649232802735.1072,
  birthtimeMs: 1649230792144.8132,
  atime: 2022-04-06T08:13:24.040Z,
  mtime: 2022-04-06T08:13:22.735Z,
  ctime: 2022-04-06T08:13:22.735Z,
  birthtime: 2022-04-06T07:39:52.145Z
}
 * 
 * 
 */

// 实现将 md 文件内容读取到转化和生成为 html 内容进行展示。
// 通过 temp + md + css =》 html 进行展示
const { readFile, writeFile, watchFile } = require('fs');
const path = require('path');
const marked = require('marked'); // 将 md 转化成 htmlStr
const browserSync = require('browser-sync'); // 用于启动浏览器执行 html 文件

const temp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 1000px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 750px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            {{style}}
        </style>
    </head>
    <body>
        <div class="markdown-body">
            {{content}}
        </div>
    </body>
    </html>
`;

const mdPath = path.join(__dirname, 'index.md');
const cssPath = path.join(__dirname, 'github.css');
const indexHtmlPath = path.join(__dirname, 'index.html');

// readFile(mdPath, 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     // 将 md 内容转化成字符串
//     let mdStr = marked(data);
//     readFile(cssPath, (err, data) => {
//         if (err) {
//             throw err;
//         }
//         // 将 md ，css 放入到 temp 模版中
//         let newStr = temp.replace('{{content}}', mdStr).replace('{{style}}', data);
//         // 将 temp 生产 html 文件
//         writeFile(indexHtmlPath, newStr, (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log('创建 index.html 成功');
//         });
//     });
// });

// 监控 index.md 的变化
watchFile(mdPath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        readFile(mdPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            // 将 md 内容转化成字符串
            let mdStr = marked(data);
            readFile(cssPath, (err, data) => {
                if (err) {
                    throw err;
                }
                // 将 md ，css 放入到 temp 模版中
                let newStr = temp.replace('{{content}}', mdStr).replace('{{style}}', data);

                // 将 temp 生产 html 文件
                writeFile(indexHtmlPath, newStr, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('创建 index.html 成功');
                });
            });
        });
    }
});

// 执行创建好的 html

browserSync.init({
    browser: '',
    server: __dirname,
    watch: true,
    index: 'index.html'
});

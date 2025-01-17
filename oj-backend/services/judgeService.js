const { exec } = require('child_process');

function judgeCode(submission) {
    // 假设 submission 包含代码和题目输入
    const { code, input } = submission;

    // 将代码写入文件
    const codeFile = 'submission.js';
    require('fs').writeFileSync(codeFile, code);

    // 执行代码并捕获输出
    exec(`node ${codeFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        // 处理输出
        console.log(`Output: ${stdout}`);
        // 这里可以添加与题目输出的比较逻辑
    });
}

module.exports = { judgeCode }; 
const readline = require('readline');

/**
 * @param inputNum 输入次数, 默认值： 1
 * @param separator 传入参数的分隔符， 默认值： 空格
 * @constructor
 * @description 函数返回一个promise对象，使用then关键字获取数据
 */

const IO = function ({inputNum = 1, separator = ' '} = {}) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    try {
      /**
       * @description 根据用户的输入，将每次输入的结果保存在result数组中，直到用户指定的输入次数结束，返回每次输入数据组成的数组
       * @type {Array}
       */

      const result = [];

      rl.on('line', data => {
        const inputs = data.trim().split(separator);

        if (inputNum !== 0) {
          result.push(inputs);
          inputNum --;
        }
        if (inputNum === 0) {
          resolve(result);
          rl.close();
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {IO};
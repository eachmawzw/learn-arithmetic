/**
 * Created by Administrator on 2017/11/6.
 */

const {IO} = require('./utils');

IO({inputNum: 1}).then(res => {
  let result = res[0];
  // 得到输入的数组
  for (let i = 0; i < result.length/2; i ++) {
    let temp = result[i];
    result[i] = result[result.length - i - 1];
    result[result.length - i - 1] = temp;
  }
  console.log(result);
});
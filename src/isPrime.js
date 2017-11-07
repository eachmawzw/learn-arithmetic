/**
 * Created by Administrator on 2017/11/6.
 */

const {IO} = require('./utils');

// 算法：判断一个数是否为素数

// 定义：素数是从2开始的数，且素数只能被自身和1整除

// 思路：定义除数x,整数N在x到x^2范围内，如果整数不能被x整除，则说明整数N是素数

IO().then(res => {
  let N = parseInt(res[0]);

  if (isNaN(N) || N < 2) return console.error('请输入大于2的正整数！');

  for (let i = 2; i*i <= N; i ++) {
    if (N % i === 0) {
      return console.log(N + '可以被' + i + '整除，' + N + '不是素数！');
    }
  }
  return console.log(N + '是素数！');
});
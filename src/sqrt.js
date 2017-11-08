/**
 * Created by Administrator on 2017/11/7.
 */

// 算法：使用牛顿迭代法求一个数的平方根

// 概念：参考https://www.zhihu.com/question/20690553

// 公式：x[n + 1] = x[n] - f(x[n])/f'(x[n])

// 思路1：由牛顿迭代法得到的根（x[n]）的平方会越来越接近传入值（N），当x[n]与N的差小于精度（e）时，就认为x[n]是N的平方根 

// 思路2: 随机选取一个猜测值（x），假设这个猜测值为传入值（N）的根，则有x + N/x = N，如果x + N/x与传入值差别小于精度（e）,就认为x是N的平方根，否则，定义x与N/x的平均数为新的猜测值，递归这个操作

// 结论：经过多次测试，发现两种方法效率差不多，而且发现一个问题，当取到某个特定数值而导致迭代后的数始终大于定义的精度，通过把精度定为e乘以当前迭代的x1数值解决！

const {IO} = require('./utils');

IO().then(res => {
  // 求数N的平方根
  let N = parseInt(res[0]);

  // 思路1方法
  method1(N);

  // 思路2方法
  method2(N);
});

// 实现（思路1）:

function method1 (N) {
  console.log('method1')
  let startTime = Date.now();
  // 定义精度e
  let e = 1e-10;
  // 定义x为要求的平方根，x0为迭代起点，容易得到曲线方程为f(x) = x0^2 - N
  // 则f'(x) = 2*x0
  // 定义切线方程 x1 = x0 - f(x)/f'(x)
  let x0 = 0;
  let x1 = 1;
  // 计算迭代次数
  let time = 0;
  while(Math.abs(x0 - x1) > e*x1) {
    time ++;
    x0 = x1;
    x1 = x0 - (x0*x0 - N)/(2*x0);
  }
  console.log(`思路1:正整数${N}的平方根为${x1},迭代次数为${time}，耗时${Date.now() - startTime}ms`);
}


// 实现（思路2）:

function method2 (N) {
  console.log('method2')
  let startTime = Date.now();
  // 随机定义一个猜测值
  let x1 = 1;

  // 定义精度
  const e = 1e-10;
  let time = 0;

  while (Math.abs(x1 - N/x1) > e*x1) {
    time ++;
    // x1 = (x1 + x0/x1)/2;  书上的
    x1 = (x1 + N/x1)/2;
  }

  console.log(`思路2:正整数${N}的平方根为${x1},迭代次数为${time}，耗时${Date.now() - startTime}ms`);
}



/**
 * Created by Administrator on 2017/11/8.
 */

// 算法：二分查找法

// 概念：判断一个数组索引（键）在指定数组的键列表中是否存在。取数组的中间值，如果这个中间值比传入值小，说明要找的值在数组的后半部分，反之在数组前半部分

// 注意：指定的数组必须是有序的，要么排序从大到小，要么从小到大

// 实现：

const {IO} = require('./utils');

let whiteList = [2, 4, 6, 8, 10];

IO().then(res => {
  let inputArr = res[0].map(item => parseInt(item));

  console.log('在白名单中存在的数有：');
  inputArr.forEach(item => {
    let find = rank(item);
    if (find !== -1) console.log(whiteList[find]);
  });
});


function rank (key) {
  let l = m = 0;
  let r = whiteList.length - 1;
  while (l <= r) {
    m = l + Math.ceil((r - l)/2);
    if (whiteList[m] > key) {
      r = m - 1;
    } else if (whiteList[m] < key) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return -1;
}


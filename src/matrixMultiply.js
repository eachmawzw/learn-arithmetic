/**
 * Created by Administrator on 2017/11/6.
 */

// 定义两个3✖3的矩阵
const matrixA = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
const matrixB = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

const matrixC = [[], [], []];

const N = matrixA.length;
for(let i = 0; i < N; i ++) {
  for (let j = 0; j < N; j ++) {
    matrixC[i][j] = 0;
    for (let k = 0; k < N; k ++) {
      matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
    }
  }
}

console.log(matrixC);
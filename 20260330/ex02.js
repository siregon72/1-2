const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 한수선언 옛날
// function aa(){}
// 함수선언 es2015 새로나온 방법
// const aa = ()=>{}

rl.question("숫자입력", (data) => {
  let num = 1;
  for ( ; num < 10;num = num+1) {
    console.log(`${data} * ${num} = ${data * num}`);
  }
  rl.close();
});

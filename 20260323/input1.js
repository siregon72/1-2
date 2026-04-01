const readline = require("readline");

// console.log(readline);
// console.log(process.stdin);
// console.log(process.stdout);
// console.log(process);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("입력하세요", function (ans) {
  console.log(ans);
  if (ans % 2 == 0) {
    console.log("ans는 짝수");
  } else {
    console.log("ans는 홀수");
  }
  rl.close();
});

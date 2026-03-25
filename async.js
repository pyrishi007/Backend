// // JS Sync
/* 
This sync task doesnt wait, it works line by line this is nature of JS 
which is why JS is "SYNCHRONUS SINGLE THREDED LANGUAGE"
 - It will block the main thread
*/

// console.log(1);  sync task
// console.log(2);  sync task
// console.log(3);  sync task

// JS  Async
/*
Its never gonna block the main thread
it preorities the task in the queue 
 */
// console.log(1); //sync task
// setTimeout(() => {
//   console.log(2); //async task
// });
// console.log(3); // sync task


async function task1() {
  await new Promise(res => setTimeout(res, 2000)); // 2s
  console.log("Task 1 done");
}

async function task2() {
  await new Promise(res => setTimeout(res, 3000)); // 3s
  console.log("Task 2 done");
}

async function task3() {
  await new Promise(res => setTimeout(res, 5000)); // 5s
  console.log("Task 3 done");
}

console.time("total");
await Promise.all([task1(), task2(), task3()]);
console.timeEnd("total"); // ~5 seconds ✅
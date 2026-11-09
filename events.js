
/*
Function => CB => Callback Function 
process.on(EventName, Callback Function)
*/
function doSomething() {
    console.log("doing!")
}

// Function =>ES6 (JS 2015)
// Anonymous Arrow Function:
//  (code) => {
//   console.log(`About to exit with code: ${code}`);
// }

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

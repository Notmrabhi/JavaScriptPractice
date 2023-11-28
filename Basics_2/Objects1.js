const myKey = Symbol("hell");

const myObj = {
  name: "abhi",
  email: "abhishek@google.com",
  [myKey]: "myname",
  phonnum: 3456789,
  lastseen: ["sunday", "monday"],
  userid: "notmrabhi"
};

// if (typeof myObj[myKey] === "symbol") {
//   console.log("myKey is a symbol");
// } else {
//   console.log("myKey is not a symbol");
// }

// Object.freeze(myObj)

myObj.email = "amshi@gmail.com"

// console.log(myObj)

myObj.greeting = function() {
  console.log(`hy ${myObj.name}`)
}
console.log(myObj.greeting())


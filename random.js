function test() {
  //test.nickname = "Super function"
  console.log(this.nickname)
  return () => {
    console.log(this.nickname)
    return function() {
      console.log(this)
    }
  }
}

//console.log(test.name)
test.nickname = "Super test"
//console.log(test.nickname) // Super test
test.call(test)()() // Super test
// After all, functions are objects, too...
test()()() // undefined, undefined, object.window, as expected

/*

function test(callback) {
  callback(this)
}

test.nickname = "Little test"

function log() {
  console.log(this.nickname, typeof this, this.hasOwnProperty("nickname"))

}

test(log.bind(test))

*/

Object.prototype.log = function() {
  console.log(this)
}

function pack() {
  return "good"
}

"sebas".log()
pack.log()

/*

function foo() {
  this.a = 2;
  this.bar();
}

function bar() {
  console.log("No")
  console.log(this.a);
}

let test = foo.bind(foo)
foo.bar = bar.bind(foo)
test()
foo.bar.call(foo)

*/

console.log(test.hasOwnProperty("nickname"))

/*******************************************/

let test = {
  log() {
    function loggy() {
      console.log(this)
    }
    const arrow = () => console.log(this)
    loggy()
    arrow()
  }
}

test.log.bind(test)()

/************************** DIFFERENT */

let test = [1, 2, 3, 4, 5]

/*
for (let item in test) {
  console.log([item, test[item]])
}
*/

function log(array, callback, target) {
  const boundCallback = target ? callback.bind(target) : callback
  for (let element of array) {
    boundCallback()
  }
}

// log(test, function(element) {console.log(element)}, [1, 2, 3])
log(test, function(element) {console.log(this)}, [1, 2, 3])

*/



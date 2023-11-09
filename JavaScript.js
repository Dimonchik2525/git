let url = 'https://jsonplaceholder.org/posts'

function* gen(n) {
   let previous = n
   for (let i = 0; i < 1000; i++) {
      yield previous * 16807 % 2147483647
      previous = previous * 16807 % 2147483647
   }
}

/*let generator = gen(1);
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())*/

/*let obj = {
   name: 'dima',
   age: 22
}

for (let item of Object.entries(obj)) {
   console.log(item)
}
let arr = Object.entries(obj)
console.log(arr)
let newObj = Object.fromEntries(arr)
console.log(newObj)*/

function work(a, b) {
   console.log(a + b)
}

function spy(func) {
   function wrapper(...x) {
      wrapper.calls.push(x)
      func.apply(this, x)
   }
   wrapper.calls = []
   return wrapper
}
work = spy(work)
work(1, 2)
work(1, 3)
work(1, 4)
console.log(work.calls)








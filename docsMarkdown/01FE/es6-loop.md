# ES6循环使用手册
::: details 目录
[[toc]]
:::

> 数组的循环 对象的循环 备查

## Array. 1: filter() 方法

* 实例1：返回大于18的数组字

> 返回数组 ages 中所有元素都大于 18 的元素:

```js
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
```
输出结果为: 32,33,40

> **定义和用法**

* filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
* **注意：** filter() 不会对空数组进行检测。
* **注意：** filter() 不会改变原始数组。

> **语法**
```js
array.filter(function(currentValue,index,arr), thisValue)
```

> **参数说明**

| 参数         | 描述                                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| function     | 必须。函数，数组中的每个元素都会执行这个函数                                                                   |
| currentValue | 必须。当前元素的值                                                                                             |
| index        | 可选。当前元素的索引值                                                                                         |
| arr          | 可选。当前元素属于的数组对象                                                                                   |
| thisValue    | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined" |

> **技术细节**

| 参数             | 描述                                                                     |
| ---------------- | ------------------------------------------------------------------------ |
| 返回值：         | 返回数组，包含了符合条件的所有元素。如果没有符合条件的元素则返回空数组。 |
| JavaScript 版本: | 1.6                                                                      |

> **更多实例**

* 返回数组 ages 中所有元素都大于输入框指定数值的元素:

```js
<p>最小年龄: <input type="number" id="ageToCheck" value="18"></p>
<button onclick="myFunction()">点我</button>

<p>所有大于指定数组的元素有？ <span id="demo"></span></p>

<script>
var ages = [32, 33, 12, 40];

function checkAdult(age) {
    return age >= document.getElementById("ageToCheck").value;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
</script>
```

## Array. 2: forEach

> **语法**
```js
array.forEach(function(currentValue, index, arr), thisValue)
```
> **特性**
* 单纯的循环数组的每个数据

## Array. 3: for循环

> **代码**
```js
for (var num =1; num<=10; num++) {
    document.write(num+" <br />"); //1 2 3 4 5 6 7 8 9 10 
}
```

## Array. 4: map()循环
map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
> 注意：是返回一个新数组，而不会改变原数组。
```js
var numbers = [1, 2, 3];
 
numbers.map(function (n) { 
     return n + 1; 
}); 
// [2, 3, 4] 
 
numbers // [1, 2, 3]
```

map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。

```js
[1, 2, 3].map(function(elem, index, arr) { 
    return elem * index; 
}); 
// [0, 2, 6]
```

此外，map()循环还可以接受第二个参数，用来绑定回调函数内部的this变量，将回调函数内部的this对象，指向第二个参数，间接操作这个参数（一般是数组）。

```js
var arr = ['a', 'b', 'c'];
 
[1, 2].map(function (e) {
    return this[e];
}, arr)
 // ['b', 'c']
 ```

## Array. 5: some()，every()循环遍历
::: tip
some()，every()循环遍历，统计数组是否满足某个条件
:::

* 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。
* 它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。
* some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。

```js
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```
而every方法则相反，所有成员的返回值都是true，整个every方法才返回true，否则返回false。两相比较，some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false.

```js
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```

这两个方法在实际开发中，大有可用之处。比如在判定用户是否勾选了不可操作的数据，或者是否勾选了一条可以操作的数据可以使用这两个方法遍历循环数组。

## Array. 6: reduce()，reduceRight()

> `reduce`方法和`reduceRight`方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。

```js
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```
> reduce方法和reduceRight方法的第一个参数都是一个函数。该函数接受以下四个参数。

* 累积变量，total 默认为数组的第一个成员
* 当前变量，value 默认为数组的第二个成员
* 当前位置 index（从0开始）
* 原数组 arr 这四个参数之中，只有前两个是必须的，后两个则是可选的。

> 如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数。

```js
[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
```

上面的第二个参数相当于设定了默认值，处理空数组时尤其有用，可避免一些空指针异常。

由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员。

```js
function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}
 
findLongest(['aaa', 'bb', 'c']) // "aaa"
```
上面代码中，reduce的参数函数会将字符长度较长的那个数组成员，作为累积值。这导致遍历所有成员之后，累积值就是字符长度最长的那个成员

## Object. 7: for-in遍历

* for-in 循环主要用于遍历对象
* for()中的格式：for(keys in zhangsan){}
* keys表示obj对象的每一个键值对的键！！所有循环中，需要使用obj[keys]来取到每一个值！！！
* for-in 循环，遍历时不仅能读取对象自身上面的成员属性，也能延续原型链遍历出对象的原型属性
* 所以，可以使用hasOwnProperty判断一个属性是不是对象自身上的属性。
* obj.hasOwnProperty(keys)==true 表示这个属性是对象的成员属性，而不是原先属性

```js
//声明一个Peson类
function Person(){
    this.name = "张三";
    this.age = 14;
    this.func1 = function(){
        
    }
}
//实例化这个类
var zhangsan = new Person();
//使用for-in遍历这个对象
for(keys in zhangsan){
    console.log(zhangsan[keys])
}
```

## Object. 8: Object.values()

Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

::: tip
Object.values(obj)
:::

```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys
// the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { 
  getFoo: { value: function() { return this.foo; } }
});

my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

## Object. 9: Object.keys遍历属性

`Object.keys` 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名，且只返回可枚举的属性

```js
var obj = {
  p1: 123,
  p2: 456
};
 
Object.keys(obj) // ["p1", "p2"]
```

## Object. 10: Object.getOwnPropertyNames()遍历属性

`Object.getOwnPropertyNames` 方法与 `Object.keys` 类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。但它能返回不可枚举的属性。

```js
var a = ['Hello', 'World'];
 
Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]
```

## ArrObj. 11: for-of循环(ES6)

* 全能循环 得value值
* ES6 借鉴 C++、Java、C# 和 Python 语言，引入了for...of循环，作为遍历所有数据结构的统一的方法。

::: tip
* 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
* for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
:::

```js
var arr = ['a', 'b', 'c', 'd'];

for (let a in arr) {
  console.log(a); // 0 1 2 3
}

for (let a of arr) {
  console.log(a); // a b c d
}
```

上面代码表明，for...in循环读取键名，for...of循环读取键值。如果要通过for...of循环，获取数组的索引，可以借助数组实例的entries方法和keys方法

> **与其他遍历语法的比较**

**for...in循环有几个缺点**
1. 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
2. for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
3. 某些情况下，for...in循环会以任意顺序遍历键名。
> for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

**for...of循环**
1. 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
2. 不同于forEach方法，它可以与break、continue和return配合使用。
3. 提供了遍历所有数据结构的统一操作接口。
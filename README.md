1) What is the difference between `null` and `undefined`?

=> 1. null একটি বিশেষ মান যা developer ইচ্ছাকৃতভাবে কোন variable এ "কিছু নেই" এইটা বুঝাতে চায়। Example:
 let b = null;
console.log(b); //null
undefined হচ্ছে যখন একটি variable declare করা হয় কিন্তু কোন মান দেয়া হয় না।এটা js নিজেই set করে তাই undefined show করে। Example:
let a;
console.log(a); //undefined 

2.What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

=> map() মূল অ্যারের প্রতিটি এলিমেন্টের উপর একটি ফাংশন প্রয়োগ করে,একটি নতুন অ্যারে রিটার্ন করে ৷ Example:
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

forEach()প্রতিটি এলিমেন্টের জন্য ফাংশন চালায়,কোনো নতুন অ্যারে রিটার্ন করে না শুধু প্রিন্ট করবে ৷ Example: 
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); //[2, 4, 6]

3. What is the difference between `==` and `===`?

=> ( = = ) শুধু মান তুলনা করে আর টাইপ আলাদা হলে টাইপ কনভার্শন করে ৷ টাইপ কনভার্শন হলো এক ধরনের ডেটাকে অন্য ধরনের ডেটায় রূপান্তর করা ৷ Example: console.log(5 == '5');   // true
(===) মান এবং টাইপ দুটোই তুলনা করে এবং টাইপ আলাদা হলে সরাসরি false return করে ৷
Example:
console.log(5 === '5');  // false

4. What is the significance of `async`/`await` in fetching API data?

=> async/await হচ্ছে asynchronous কোডকে synchronous এর মতো করে লেখা যায়। Promise handle করা সহজ হয়। এর ফলে কোড পড়তে সহজ হয়,Callback hell এড়ানো যায়,Error handling সহজ হয় (try...catch দিয়ে)৷
Callback hell হলো এমন অবস্থা যেখানে বহু nested callback ব্যবহারের কারণে কোড জটিল ও অগোছালো হয়ে যায়।


5. Explain the concept of Scope in JavaScript (Global, Function, Block).

=> Scope হলো একটি ভেরিয়েবলের অ্যাক্সেসযোগ্যতার সীমা মানে কোথা থেকে ভেরিয়েবল ব্যবহার করা যাবে।
 Global Scope হলো ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা ভেরিয়েবল যা পুরো প্রোগ্রামে ব্যবহার করা যায় ৷
 Function Scope হলো ফাংশনের ভিতরে ডিক্লেয়ার করা ভেরিয়েবল যা শুধুমাত্র সেই ফাংশনের ভিতরে ব্যবহারযোগ্য
 Block Scope হলো {} ব্লকের ভিতরে let বা const দিয়ে ডিক্লেয়ার করা ভেরিয়েবল যা শুধুমাত্র সেই ব্লকের ভিতরে কাজ করে ৷



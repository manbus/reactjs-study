function sayHello (){
  console.log("helloworld");
};

// export default function(){
//   console.log("world hello");
// }

//let 没有变量声明提升
export let name = "lisi";
export let age = 20;

export default sayHello;

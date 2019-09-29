let demo = document.querySelector("#demo");
let string = `我是你爹
接下来要加css样式
body{
    color:red;
}
`;
string = string.replace(
  /\n/g,
  "<br>"
); /*replace是将js
中的一些文件格式转换成html中的某些格式，如这里就是将js中空格/n变成html中的空格
<br>，使用/\n/g是可以将所有的空格转换，否则只转换第一个
但是运行的时候会发现每行最后一个会有一个>，无法解决，说明此路不通*/
let n = 0;
demo.innerHTML = string.substring(
  0,
  n
); /*进行修改的时候，
每次都要重新的在这句话前面加一个逻辑，
应该想一个办法可以实现直接让其在step里面，这样一改所有都改了。*/
/*setInterval(() => {
  n = n + 1;
  demo.innerHTML = n;
}, 1000);*/
/*3000毫秒=3s,且setimeout这个闹钟只会运行一次，后来要再运行要设置成setinterval,
            但是老手会用递归的timeout来实现*/
let step = () => {
  setTimeout(() => {
    n = n + 1;
    demo.innerHTML = string.substring(0, n); //会把前面所有的都打出来
    if (n < string.length) {
      /*不知道判断条件是n+1还是n或者其他什么
        ，只要都试一次就好*/
      step();
    } //可自由控制其的开始与结束，只需要加一个n的限制条件
  }, 100);
};
step();

let html = document.querySelector("#html");
let string = `/*我是菜鸡
接下来要加css样式*/



[id="bagua"] {
height: 200px;
width: 200px;
border-radius: 100px;
background: black;
position: fixed;
top:0;
right:0;
overflow: hidden;
animation: x 5s linear infinite;
box-shadow: 0px 0px 3px 4px rgba(247, 214, 214, 0.75);
}

#bagua > :nth-child(1) {
background: white;
height: 200px;
width: 100px;
position: absolute;
}

#bagua > :nth-child(2) {
background: white;
height: 100px;
width: 100px;
position: absolute;
left: 50px;
border-radius: 50px;
}

#bagua > :nth-child(3) {
background: black;
height: 100px;
width: 100px;
position: absolute;
left: 50px;
border-radius: 50px;
bottom: 0px;
}

#bagua > :nth-child(4) {
background: white;
height: 50px;
width: 50px;
position: absolute;
left: 75px;
border-radius: 25px;
bottom: 35px;
}

#bagua > :nth-child(5) {
background: black;
height: 50px;
width: 50px;
position: absolute;
left: 65px;
border-radius: 25px;
top: 35px;
}
@keyframes x {
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
  }
  
`;
let style = document.querySelector("#style");
let string2 = "";
let n = 0;
console.log(string);
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;"; //html里面空格的表示
    } else {
      string2 += string[n];
    }
    // string2 += "<br>"===string2=string2+"<br>"
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //自动让页面滚到底部
    html.scrollTo(0, 99999); //
    if (n + 1 < string.length) {
      n += 1;
      /*不知道判断条件是n+1还是n或者其他什么
        ，只要都试一次就好*/
      step();
    } //可自由控制其的开始与结束，只需要加一个n的限制条件*/
  }, 0);
};
step();
/*程序员三大难题：
1. 要不要加1
2. 怎么命名
3. 缓存失效
只有一个方法：试，试出来就可了*/

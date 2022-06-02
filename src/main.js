let html = document.querySelector('#html');
let style = document.querySelector('#style');//可通过修改这个来修改css的样式
let n = 0;
let string = `/* 你好，我是一名前端程序猿
这里我画一个太极图
用以展示一下我的前端功底
首先我要准备一个div */
#div1{
    border: 3px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
 *注意看好了
 *首先，把div变成一个圆 */
#div1{
    border-radius: 50%;
    border:none;
}
/* 八卦是阴阳形成的
一黑一白 */
#div1{
    background: #000000;
    background: linear-gradient(to left, #000000 50%, #FCFEFF 0%);
}
/* 加上太极图的两仪 */
#div1::before{
           content: '';
           display: block;
           width: 100px;
           height: 100px;
           box-sizing: border-box;
           left: 50%;
           top: 0;
           transform: translateX(-50%);
           position: relative;
           border-radius: 50%;
           background: #FFFFFF;
           background: radial-gradient(circle farthest-corner at center center, #FFFFFF 25%, #000000 0%);

}
#div1::after{
           content: '';
           display: block;
           width: 100px;
           height: 100px;
           box-sizing: border-box;
           left: 50%;
           button: 0;
           transform: translateX(-50%);
           position: relative;
           border-radius: 50%;
           background: #000000;
           background: radial-gradient(circle farthest-corner at center center, #000000 25%, #FFFFFF 0%);
}
`;
let string2 = ''; //缓存我们想要显示在屏幕上的结果的
html.innerHTML = string.substring(0,n);
let step = () => { 
    setTimeout(() => {
        if (string[n] === '\n') { //是回车就把回车改为换行
            string2 += '<br>';
        } else if (string[n] === ' ') {//把空格换成转移字符
            string2 += '&nbsp;' 
        } 
        else {//不是回车就直接添加到string2
            string2 += string[n];
        }   
        html.innerHTML = string2;//string包含<br>和&nbsp;
        style.innerHTML = string.substring(0, n);//string.substring(0,n)不包含<br>和&nbsp;
        window.scrollTo(0, 9999) //设置页面跟随生成内容滚动
        html.scrollTo(0,9999)//设置移动端自动滚动
        //n不是最后一个就继续执行
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
        
    }, 50);
}
step()
var o1=document.getElementById("colorinput");
o1.onchange=()=>{
document.body.style.backgroundColor=o1.value;
localStorage.setItem("color",o1.value);
};
var o2=document.getElementById("timehour");
function MyTime(){
    var date=new Date();
    o2.innerHTML=`<span>${date.getHours()}</span>:<span>${date.getMinutes()}</span>:<span>${date.getSeconds()}</span>`;
}
setInterval(MyTime,1*1000);
onload=()=>{
o1.value=localStorage.getItem("color");
document.body.style.backgroundColor=localStorage.getItem("color");
};
document.body.style.height=screen.height;
addEventListener("load",MyTime);
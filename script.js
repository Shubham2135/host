document.getElementById("parent").innerHTML=("something else");
// document.getElementById("parent").style.backgroundColor=("red");
// document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center");
document.getElementsByClassName("exercise")[0].innerHTML=("I am Shubham Khadka");
document.getElementsByClassName("exercise")[0].style.cssText=("background-color:red; color:white; text-align:center");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 19 years old");

document.getElementsByClassName("exercise")[2].style.cssText=("background-color:red; color:white; text-align:center");
document.getElementsByTagName("h1")[0].style.cssText=("text-align:center; text-transform:uppercase;");
document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transform:uppercase;");
document.getElementsByTagName("h1")[2].style.cssText=("text-align:center; text-transform:uppercase;");

document.querySelector("h2").innerHTML=("I am shubham");
document.querySelector("#hi").innerHTML=("I am shubham");
document.querySelector(".hey").innerHTML=("I am shubham");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("Hi universe!!!");
}

    // function myfunction(){
    //     document.open();
    //     document.write("<h1>Hello wolrd</h1>");
    //     document.close();
    // }

function myfunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write("<h1>hello world</h1>");
    myWindow.document.close();
}

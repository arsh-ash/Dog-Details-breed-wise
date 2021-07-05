
var selectbox=document.getElementById("selectbox");

var xhrRequest=new XMLHttpRequest();

xhrRequest.onload=function(){
var parsed=JSON.parse(xhrRequest.response);

for(let prop in parsed.message){
let breed=prop;
var option=document.createElement("option");
var optiontext=document.createTextNode(breed);
option.appendChild(optiontext);
// var selectbox=document.getElementById("selectbox");
selectbox.appendChild(option);
}

};
xhrRequest.open("Get","https://dog.ceo/api/breeds/list/all",true);
xhrRequest.send();

var getimg=document.getElementById("btn");
getimg.addEventListener("click",function(){
var breedname=selectbox.value;
var xhrRequest=new XMLHttpRequest();
xhrRequest.onload=function(){
var obj=JSON.parse(xhrRequest.response);
let imgurl=obj.message;
var url=imgurl[0];
// var random=Math.random();
// random=random*99;
// random=Math.floor(random);
// random=random+1;
// var randomurl=imgurl[random];
// console.log(randomurl);
 var imgtag=document.getElementById("boxx");
 imgtag.setAttribute("src",url);
}
xhrRequest.open("get",`https://dog.ceo/api/breed/${breedname}/images`,true);
xhrRequest.send();
});

var nextbtn=document.getElementById("nextbtn");
nextbtn.addEventListener("click",function(){
var breedname=selectbox.value;
var xhrRequest=new XMLHttpRequest();
xhrRequest.onload=function(){
var obj=JSON.parse(xhrRequest.response);
let imgurl=obj.message;
var len=imgurl.length;
var random=Math.random();
random=random*len;
random=Math.floor(random);
random=random+1;
var randomurl=imgurl[random];
var imgtag=document.getElementById("boxx");
imgtag.setAttribute("src",randomurl);

}
xhrRequest.open("get",`https://dog.ceo/api/breed/${breedname}/images`,true);
xhrRequest.send();
});

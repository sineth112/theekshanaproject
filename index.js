var randomNumber = Math.floor(Math.random()*16)+1;
var randomNumberimage = "box" + randomNumber+".png";
var randomImagesrc = "images/"+randomNumberimage;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImagesrc);

var randomNumber2 = Math.floor(Math.random()*16)+1;
var randomNumberimage2 ="box"+randomNumber2+".png";
var randomImagesrc2 = "images/"+randomNumberimage2;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImagesrc2);

var randomNumber3 = Math.floor(Math.random()*16)+1;
var randomNumberimage3 ="box"+randomNumber3+".png";
var randomImagesrc3 = "images/"+randomNumberimage3;
var image3 = document.querySelectorAll("img")[2]
image3.setAttribute("src",randomImagesrc3);

var randomNumber4 = Math.floor(Math.random()*16)+1;
var randomNumberimage4 ="box"+randomNumber4+".png";
var randomImagesrc4 = "images/"+randomNumberimage4;
var image4 = document.querySelectorAll("img")[3]
image4.setAttribute("src",randomImagesrc4);
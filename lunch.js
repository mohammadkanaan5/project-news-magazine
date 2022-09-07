

// 'js/mian.js'
var slider_img = document.querySelector('.slider-img');
var images = ['139507211903292718929464.jpg', 'images (6).jfif', 'images (4).jfif', 'images (9).jfif', 'images (11).jfif'];
var i = 0;
setInterval(next,1000)

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}
 
function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var slider_img1 = document.querySelector('.slider-img1');
var images1 = ['20210515235848947.jpg','35944781_303.jpg','imag2es.jfif','images.jfif','QzEhV.jpeg'];
var i = 0;
setInterval(next1,2000)

function prev1(){

	if(i <= 0) i = images1.length;	
	i--;
	return setImg1();			 
}

function next1(){

	if(i >= images1.length-1) i = -1;
	i++;
	return setImg1();			 
}
function setImg1(){
	return slider_img1.setAttribute('src', "images1/"+images1[i]);
	
}
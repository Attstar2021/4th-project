// to zoom picture from gallery.html and make it viewable 
var imageViewOne = document.getElementById("picture1");
var imageViewTwo =document.getElementById("picture2");
var imageViewThree =document.getElementById("picture3")
var imageViewFour =document.getElementById("picture4")
var imageViewFive =document.getElementById("picture5")
var imageViewSix =document.getElementById("picture6")




var imgOne =document.getElementById("media1");
var imgTwo =document.getElementById("media2");
var imgThree =document.getElementById("media3");
var imgFour =document.getElementById("media4");
var imgFive =document.getElementById("media5");
var imgSix =document.getElementById("media6");




var captionTextOne = document.getElementById("caption1");
var captionTextTwo = document.getElementById("caption2");
var captionTextThree = document.getElementById("caption3");
var captionTextFour = document.getElementById("caption4");
var captionTextFive = document.getElementById("caption5");
var captionTextSix = document.getElementById("caption6");




var image_01 = document.getElementById("img1");
var image_02 = document.getElementById("img2");
var image_03 = document.getElementById("img3");
var image_04 = document.getElementById("img4");
var image_05 = document.getElementById("img5");
var image_06 = document.getElementById("img6");



/** function for images' view */


imgOne.onclick = function() {
    imageViewOne.style.display = "block";
    image_01.src = this.src;
    captionTextOne.innerHTML = this.alt;
}

imgTwo.onclick = function() {
    imageViewTwo.style.display = "block";
    image_02.src = this.src;
    captionTextTwo.innerHTML = this.alt;
}

imgThree.onclick = function() {
    imageViewThree.style.display = "block";
    image_03.src = this.src;
    captionTextThree.innerHTML = this.alt;
}

imgFour.onclick = function() {
    imageViewFour.style.display = "block";
    image_04.src = this.src;
    captionTextFour.innerHTML = this.alt;
}

imgFive.onclick = function() {
    imageViewFive.style.display = "block";
    image_05.src = this.src;
    captionTextFive.innerHTML = this.alt;
}

imgSix.onclick = function() {
    imageViewSix.style.display = "block";
    image_06.src = this.src;
    captionTextSix.innerHTML = this.alt;
}



/**function to close view */
var span = document.getElementsByClassName("close")[0];
var span_01 = document.getElementsByClassName("close")[0];
var span_02 = document.getElementsByClassName("close")[0];
var span_03 = document.getElementsByClassName("close")[0];
var span_04 = document.getElementsByClassName("close")[0];
var span_05 = document.getElementsByClassName("close")[0];

span.onclick = function(){
    imageViewOne.style.display = "none";
    
}

span_01.onclick = function(){
    imageViewTwo.style.display = "none";
    
}
span_02.onclick = function(){
    imageViewThree.style.display = "none";
    
}
/**Second image */

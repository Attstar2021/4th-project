// to zoom picture from gallery.html and make it viewable 
var imageViewOne = document.getElementById("picture1");
var imageViewTwo =document.getElementById("picture2");
var imageViewThree =document.getElementById("picture3")




var imgOne =document.getElementById("media1");
var imgTwo =document.getElementById("media2");
var imgThree =document.getElementById("media3");




var captionTextOne = document.getElementById("caption1");
var captionTextTwo = document.getElementById("caption2");
var captionTextThree = document.getElementById("caption3");




var image_01 = document.getElementById("img1");
var image_02 = document.getElementById("img2");
var image_03 = document.getElementById("img2");


var span = document.getElementsByClassName("close")[0];
var span_01 = document.getElementsByClassName("close01")[0];

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



/**function to close view */

span.onclick = function(){
    imageViewOne.style.display = "none";
    
}

span_01.onclick = function(){
    imageViewTwo.style.display = "none";
    
}
/**Second image */

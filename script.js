// global variable
var image;
// var canvas = null;
// image = document.getElementById("canva");



function loadImage() {

    var element = document.getElementById("input");
    image = new SimpleImage(element);
    var canvas = document.getElementById("canva");
    image.drawTo(canvas);
    alert('Select a Image to Filter');

}

function grayscaleFilter() {
    alert("gray");
}

function redFilter() {
    alert('red');
}

function blurFilter() {
    alert("blur");
}

function resetOriginal() {
    alert("reset to original done");
}
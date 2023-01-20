// global variable
var element = document.getElementById("input");
var canvas = document.getElementById("canva");
var image = null;
var number = 43;


function loadImage() {

    image = new SimpleImage(element);
    image.drawTo(canvas);
    // alert('Select a Image to Filter');

}

function grayscaleFilter() {


    for (var pix of image.values()) {

        var avg = pix.getRed() + pix.getGreen() + pix.getBlue();
        pix.setRed(avg);
        pix.setGreen(avg);
        pix.setBlue(avg);

    }
    image.drawTo(canva);
    // alert("gray ");
}

function redFilter() {

    for (var pix of image.values()) {

        pix.setRed(200);
    }
    image.drawTo(canva);
    // alert('red');
}

function fadeFilter() {
    for (var pix of image.values()) {
        var red = pix.getRed();
        var green = pix.getGreen();
        var blue = pix.getBlue();
        var x = pix.getX();
        var y = pix.getY();

        if (x % 2 != 0 || y % 2 != 0) {
            pix.setRed(255);
            pix.setBlue(255);
            pix.setGreen(255);
        }
    }
    image.drawTo(canva);
    // alert("fade");
}


function fil01Filter() {
    for (var pix of image.values()) {
        var red = pix.getRed();
        var green = pix.getGreen();
        var blue = pix.getBlue();
        var x = pix.getX();
        var y = pix.getY();

        if (x % 2 != 0 || y % 2 != 0) {
            pix.setRed(red + 100);
            pix.setBlue(blue + 100);
            pix.setGreen(green + 100);
        }
    }
    image.drawTo(canva);
    // alert("Filter 01");
}

function resetOriginal() {
    image = new SimpleImage(element);
    image.drawTo(canvas);
    // alert("reset to original done");
}

function clearCanvas() {
    canva.getContext("2d").clearRect(0, 0, canva.width, canva.height);
    canva.getContext("2d").clearRect(0, 0, canva.width, canva.height);

}
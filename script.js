// global variable
var element = document.getElementById("input");
var canvas = document.getElementById("can");
var image = null;
var number = null;
var grayImg = null;
var redImg = null;
var fadeImg = null;
var rainImg = null;
var windImg = null;
var blurImg = null;


function loadImage() {

    image = new SimpleImage(element);
    image.drawTo(canvas);
    grayImg = new SimpleImage(element);
    redImg = new SimpleImage(element);
    fadeImg = new SimpleImage(element);
    rainImg = new SimpleImage(element);
    windImg = new SimpleImage(element);
    blurImg = new SimpleImage(element);
    // alert('Select a Image to Filter');


}
//Check if Image is Uploaded
function checkLoaded() {
    if (image == null || !image.complete()) {
        alert("Image is not loaded.");
    } else {
        return image;
    }
}

//Gray Filter

function grayscaleFilter() {


    for (var pix of grayImg.values()) {

        var avg = pix.getRed() + pix.getGreen() + pix.getBlue();
        pix.setRed(avg);
        pix.setGreen(avg);
        pix.setBlue(avg);

    }
    grayImg.drawTo(can);
    // alert("gray ");
}

// Red filter
function redFilter() {

    for (var pix of redImg.values()) {

        pix.setRed(200);
    }
    redImg.drawTo(can);
    // alert('red');
}

//Fade filter
function fadeFilter() {
    for (var pix of fadeImg.values()) {
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
    fadeImg.drawTo(can);
    // alert("fade");
}

//Rainbow Filter

function rainbowFilter() {
    for (var pixel of rainImg.values()) {
        var y = pixel.getY();
        var height = rainImg.getHeight();
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (y < height * (1 / 7)) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
            if (avg >= 128) {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y < height * (2 / 7) && y > height * (1 / 7)) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0.8 * avg);
                pixel.setBlue(0);
            }
            if (avg >= 128) {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y < height * (3 / 7) && y > height * (2 / 7)) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            }
            if (avg >= 128) {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y < height * (4 / 7) && y > height * (3 / 7)) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            }
            if (avg >= 128) {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y < height * (5 / 7) && y > height * (4 / 7)) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            }
            if (avg >= 128) {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }
        if (y < height * (6 / 7) && y > height * (5 / 7)) {
            if (avg < 128) {
                pixel.setRed(0.8 * avg);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            }
            if (avg >= 128) {
                pixel.setRed(1.2 * avg - 51);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }
        if (y > height * (6 / 7)) {
            if (avg < 128) {
                pixel.setRed(1.6 * avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6 * avg);
            }
            if (avg >= 128) {
                pixel.setRed(0.4 * avg + 153);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(0.4 * avg + 153);
            }
        }
    }
}

function makeRainbow() {
    if (checkLoaded(rainImg)) {
        rainbowFilter();
        rainImg.drawTo(can);
    }
}




//Window filter


function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    return pixel;
}

function windowPaneFilter() {
    for (var pixel of windImg.values()) {
        var W = windImg.getWidth();
        var H = windImg.getHeight();
        var X = pixel.getX();
        var Y = pixel.getY();
        if (X < 10 || X >= W - 10) {
            setBlack(pixel);
        }
        if (Y < 10 || Y >= H - 10) {
            setBlack(pixel);
        }
        if (X >= (W * 1 / 2) - 5 && X < (W * 1 / 2) + 5) {
            setBlack(pixel);
        }
        if (Y >= (H * 1 / 2) - 5 && Y < (H * 1 / 2) + 5) {
            setBlack(pixel);
        }
        if (X >= (W * 1 / 4) - 5 && X < (W * 1 / 4) + 5) {
            setBlack(pixel);
        }
        if (X >= (W * 3 / 4) - 5 && X < (W * 3 / 4) + 5) {
            setBlack(pixel);
        }
        if (X >= 10 && X < (W * 1 / 4) - 5 && Y >= 10 && Y < (H * 1 / 2) - 5) {

            pixel.setRed(255);
            pixel.setGreen(255);
        }
        if (X >= (W * 1 / 2) + 5 && X < (W * 3 / 4) - 5 && Y >= 10 && Y < (H * 1 / 2) - 5) {
            pixel.setBlue(255);
        }
        if (X >= (W * 1 / 4) + 5 && X < (W * 1 / 2) - 5 && Y >= (H * 1 / 2) + 5 && Y < H - 10) {
            pixel.setRed(255);

        }
        if (X >= (W * 3 / 4) + 5 && X < W - 10 && Y >= (H * 1 / 2) + 5 && Y < H - 10) {
            pixel.setGreen(255);

        }
    }
    windImg.drawTo(can);
}

function makeWindow() {
    if (checkLoaded(windImg)) {
        windowPaneFilter();
    }
}


//Blur filter Logic
function blurFilter() {
    var newImg = new SimpleImage(blurImg.getWidth(), blurImg.getHeight());
    for (var pixel of blurImg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (Math.random() < 0.5) {
            newImg.setPixel(x, y, pixel);
        } else {
            var random = Math.floor(Math.random() * 23 - 11);
            var newX = random + x;
            var newY = random + y;
            if (newX > 0 && newX <= blurImg.getWidth() - 1) {
                if (newY > 0 && newY <= blurImg.getHeight() - 1) {
                    var newPixel = blurImg.getPixel(newX, newY);
                    newImg.setPixel(x, y, newPixel);
                }
            }
        }
    }
    newImg.drawTo(can);
}

function makeBlur() {
    if (checkLoaded(blurImg)) {
        blurFilter();
    }
}

function resetOriginal() {
    image = new SimpleImage(element);
    image.drawTo(can);
    // alert("reset to original done");
}

function clearCanvas() {
    can.getContext("2d").clearRect(0, 0, can.width, can.height);


}
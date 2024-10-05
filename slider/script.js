var img_array = [
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1677594334053-afe4b41aa0a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

];

// Assigning poistion from list
var position = {
    left: img_array[0],
    middle: img_array[1],
    right: img_array[2],
}

// mainCount variable represents the index of image in img_array which is at middle
var mainCount = 1;

// A boolean variable to see if animation is running or not
var animationRunnung = false;

function makeDotsSlider() {
    for (i = 0; i < img_array.length; i++) {
        document.getElementById("dot-slider").innerHTML += `<span class="dot" id="dot${i}" onclick="goTo(this.id.slice(3));"></span>`;
    }
}

function initiateSlider() {
    // Apending position to images
    document.getElementById("left").src = position["left"];
    document.getElementById("middle").src = position["middle"];
    document.getElementById("right").src = position["right"];

    document.getElementById("left").style.animation = "";
    document.getElementById("middle").style.animation = "";
    document.getElementById("right").style.animation = "";
}

function slide(dir = "right", animation = true) {
    mainCount = dir == "right" ? ++mainCount : --mainCount;
    // mainCount = rectify(mainCount);

    // refresh the dots (which one is active and which one not)
    refreshDots();

    position.left = img_array[rectify(mainCount - 1)];
    position.middle = img_array[rectify(mainCount)];
    position.right = img_array[rectify(mainCount + 1)];

    // alert(mainCount);
    // Waiting for animate to be completed

    var animationTime = 2.1;
    var slideTime = 2;

    if (animation) {
        animationRunnung = true;
        if (dir == "right") {
            document.getElementById("middle").style.animation = "middle-image-moves-to-left " + animationTime + "s ease-in";
            document.getElementById("right").style.animation = "right-image-moves-to-middle " + animationTime + "s ease-in";
            document.getElementById("left").style.animation = "left-image-moves-to-transparent " + slideTime + "s ease-in";
        } else {
            document.getElementById("middle").style.animation = "middle-image-moves-to-right " + animationTime + "s ease-in";
            document.getElementById("left").style.animation = "left-image-moves-to-middle " + animationTime + "s ease-in";
            document.getElementById("right").style.animation = "right-image-moves-to-transparent " + slideTime + "s ease-in";
        }

        setTimeout(initiateSlider, 1100);
    }
    else {
        initiateSlider();
    }
}


var picit = document.getElementById("pi");
function nextp() {
    var temp;
    if (parseInt(picit.style.left) != -2100) {
        temp = parseInt(picit.style.left) - 300;
    }
    else {
        temp = -600;
    }
    picit.style.left = temp + "px";

}
function prep() {
    var temp;
    if (parseInt(picit.style.left) != 0) {
        temp = parseInt(picit.style.left) + 300;
    }
    else {
        temp = -1500;
    }
    picit.style.left = temp + "px";
}
var timer = null;
        function autoPlay () {
            timer = setInterval(function () {
                prep();
            },2000);
        }
        autoPlay();

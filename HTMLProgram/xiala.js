var caidan = document.getElementById("caidan");
var more = document.getElementById("more");
function la() {
    caidan.style.visibility="visible";
}
function shou() {
    caidan.style.visibility="hidden";
}
caidan.onmouseleave = function() {
    shou();
}
more.onmouseover = function() {
    la();
}
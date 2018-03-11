var yijian = document.getElementById("yijian");
yijian.onclick = function () {
    hide();
}
function hide() {

    var liuyanban = document.getElementById("liuyanban");
    if (liuyanban.style.visibility == "hidden") {
        liuyanban.style.visibility = "visible";
    }
    else {
        liuyanban.style.visibility = "hidden";
    }
}
var myname = document.getElementById("myname");
var mycontent = document.getElementById("mycontent");
var kuang = document.getElementById("kuang");
function addit() {
    var time = new Date().getTime().toString();
    var data = '<td>' + myname.value + '</td><td>' + mycontent.value + '</td>';
    localStorage.setItem(time,data);
    loadit();
}
function loadit() {

    var tablestr = "<table border='1'>";
    tablestr += "<tr><td>序号</td><td>时间</td><td>账号</td><td>内容</td></tr>";
    for (var i = 0; i < localStorage.length; i++) {
        var values = localStorage.getItem(localStorage.key(i));
        var date = new Date();
        date.setTime(localStorage.key(i));
        var datestr = date.toGMTString();
        var index = i + 1;
        tablestr += '<tr><td>' + index + '</td><td>' + datestr + "</td>" + values + '</tr>';
    }
    tablestr += "</table>";
    kuang.innerHTML = tablestr;
}
function clearit() {
    localStorage.clear();
    loadit();
}
var butone = document.getElementById("butone");
var buttwo = document.getElementById("buttwo");
var butthr = document.getElementById("butthr");
butone.onclick = function () {
    
    addit();
}
buttwo.onclick = function () {
    loadit();
}
butthr.onclick = function () {
    clearit();
}
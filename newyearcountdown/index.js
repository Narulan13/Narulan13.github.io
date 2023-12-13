function clock() {
    var current = new Date();
    var newyear = new Date(current.getFullYear() + 1, 0 , 1, 0, 0);
    var diff = newyear - current;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff % 86400000 / 3600000); 
    var m = Math.floor((diff % 3600000)/ 60000);
    var s = Math.floor((diff % 60000)/1000);
    document.getElementById("days").innerHTML =  d;
    document.getElementById("h").innerHTML =  h;
    document.getElementById("m").innerHTML =  m;
    document.getElementById("s").innerHTML =  s;
}
setInterval(clock, 1000);


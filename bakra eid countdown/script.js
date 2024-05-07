// Date.getTime()

var hours = document.getElementById("Hours")
var min = document.getElementById("Minutes")
var sec = document.getElementById("seconds")



setInterval(function () {

    var now = new Date();
    var bd = new Date("6/17/2024");  //mm/dd/yyyy
    var milleseconds = now.getTime();
    var bdMillseconds = bd.getTime();
    var diff = bdMillseconds - milleseconds;

    console.log("milleseconds=>", diff);
   var inSeconds = ("seconds=>", Math.round(diff / 1000));
   var inMinutes = ("minutes=>", Math.round(diff / 1000 / 60));
   var inHours = ("hours=>", Math.round(diff / 1000 / 60 / 60));
   var inDays = ("day=>", Math.round(diff / 1000 / 60 / 60 / 24));
  

    hours.innerHTML = inHours;
    min.innerHTML = inMinutes;
    sec.innerHTML = inSeconds 

}, 1000);

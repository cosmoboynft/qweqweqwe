
function clock() {
  var d = new Date();

  function getMonth(date) {
    var month_num = d.getMonth() + 1;
    return month_num < 10 ? '0' + month_num : '' + month_num;
  }
  var day = d.getDate();
  var d = new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  d = new Date(utc);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

  var N_D = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  if (day <= 9) day = "0" + day;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;


  date_time = "<span>" + month[d.getMonth()]+ " " + day + "</span>";
  date_time2 = "<span>" + hours + ":" + minutes + "</span>";
  if (document.layers) {
     document.layers.doc_time.document.write(date_time);
     document.layers.doc_time.document.close();
  }
  else document.getElementById("doc_time").innerHTML = date_time;
  document.getElementById("doc_time2").innerHTML = date_time2;
  setTimeout("clock()", 1000);
}

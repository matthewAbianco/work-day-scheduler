let text9am = $("#9amText")
let text10am = $("#9amText")
let text11am = $("#9amText")
let text12am = $("#9amText")
let text1pm = $("#9amText")
let text2pm = $("#9amText")
let text3pm = $("#9amText")
let text4pm = $("#9amText")
let text5pm = $("#9amText")

let btn9am = $("#9amBtn")
let btn10am = $("#9amBtn")
let btn11am = $("#9amBtn")
let btn12am = $("#9amBtn")
let btn1pm = $("#9amBtn")
let btn2pm = $("#9amBtn")
let btn3pm = $("#9amBtn")
let btn4pm = $("#9amBtn")
let btn5pm = $("#9amBtn")






// save button 


















// clock at top of page
$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1);
// clock at top of page end
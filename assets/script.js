// hour box
let time9am = $('#9amTime');
let time9am = $('#10amTime');
let time9am = $('#11amTime');
let time9am = $('#12amTime');
let time9am = $('#1pmTime');
let time9am = $('#2pmTime');
let time9am = $('#3pmTime');
let time9am = $('#4pmTime');
let time9am = $('#5pmTime');

//hour box end

// text area
let text9am = $("#9amText");
let text10am = $("#10amText");
let text11am = $("#11amText");
let text12am = $("#12amText");
let text1pm = $("#1pmText");
let text2pm = $("#2pmText");
let text3pm = $("#3pmText");
let text4pm = $("#4pmText");
let text5pm = $("#5pmText");
// text area end

// save button 
let btn9am = $("#9amBtn");
let btn10am = $("#10amBtn");
let btn11am = $("#11amBtn");
let btn12am = $("#12amBtn");
let btn1pm = $("#1amBtn");
let btn2pm = $("#2amBtn");
let btn3pm = $("#3amBtn");
let btn4pm = $("#4amBtn");
let btn5pm = $("#5amBtn");
// save button end

var currentTime = parseInt(moment().format("HH"));

function timeCheck {

    if
}




// clock at top of page
$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1);
// clock at top of page end
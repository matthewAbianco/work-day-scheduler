
$(document).ready(function() {
// hour box
let time9am = $('#9amTime');
let time10am = $('#10amTime');
let time11am = $('#11amTime');
let time12am = $('#12amTime');
let time1pm = $('#1pmTime');
let time2pm = $('#2pmTime');
let time3pm = $('#3pmTime');
let time4pm = $('#4pmTime');
let time5pm = $('#5pmTime');
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
let btn1pm = $("#1pmBtn");
let btn2pm = $("#2pmBtn");
let btn3pm = $("#3pmBtn");
let btn4pm = $("#4pmBtn");
let btn5pm = $("#5pmBtn");
// save button end

// measures the current time by each hour, so we can compare it to the data value of "data-time"
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);

function checkTime() {

    if (parseInt(time9am.attr('data-time')) < currentTime) {
        text9am.removeClass('past present future');
        text9am.addClass('past');

    } else if (parseInt(time9am.attr('data-time')) === currentTime) {
        text9am.removeClass('past present future');
        text9am.addClass('present');


    } else {

        text9am.removeClass('past present future');
        text9am.addClass('future');
    }
    
    checktime();
};


// clock at top of page
$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1);

checkTime();
});
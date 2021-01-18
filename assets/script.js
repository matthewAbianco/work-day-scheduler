
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

// measures time by the hour and makes an integer out of it, so the integer value can be used below
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);

// clock at top of page
$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}
setInterval(update, 1);

// checks what the current time is and compares it against the 'parseInt
function checkTime() {

// 9 am time check
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
    
// 10 am time check
    if (parseInt(time10am.attr('data-time')) < currentTime) {
        text10am.removeClass('past present future');
        text10am.addClass('past');

    } else if (parseInt(time10am.attr('data-time')) === currentTime) {
        text10am.removeClass('past present future');
        text10am.addClass('present');


    } else {

        text10am.removeClass('past present future');
        text10am.addClass('future');
    }
    
// 11 am time check  
    if (parseInt(time11am.attr('data-time')) < currentTime) {
        text11am.removeClass('past present future');
        text11am.addClass('past');

    } else if (parseInt(time11am.attr('data-time')) === currentTime) {
        text11am.removeClass('past present future');
        text11am.addClass('present');


    } else {

        text11am.removeClass('past present future');
        text11am.addClass('future');
    }    

// 12 am time check
    if (parseInt(time12am.attr('data-time')) < currentTime) {
        text12am.removeClass('past present future');
        text12am.addClass('past');

    } else if (parseInt(time12am.attr('data-time')) === currentTime) {
        text12am.removeClass('past present future');
        text12am.addClass('present');


    } else {

        text12am.removeClass('past present future');
        text12am.addClass('future');
    }

// 1 pm time check
    if (parseInt(time1pm.attr('data-time')) < currentTime) {
        text1pm.removeClass('past present future');
        text1pm.addClass('past');

    } else if (parseInt(time1pm.attr('data-time')) === currentTime) {
        text1pm.removeClass('past present future');
        text1pm.addClass('present');


    } else {

        text1pm.removeClass('past present future');
        text1pm.addClass('future');
    }
        
// 2 pm time check
    if (parseInt(time2pm.attr('data-time')) < currentTime) {
        text2pm.removeClass('past present future');
        text2pm.addClass('past');

    } else if (parseInt(time2pm.attr('data-time')) === currentTime) {
        text2pm.removeClass('past present future');
        text2pm.addClass('present');


    } else {

        text2pm.removeClass('past present future');
        text2pm.addClass('future');
    }
    
// 3 pm time check
    if (parseInt(time3pm.attr('data-time')) < currentTime) {
        text3pm.removeClass('past present future');
        text3pm.addClass('past');

    } else if (parseInt(time3pm.attr('data-time')) === currentTime) {
        text3pm.removeClass('past present future');
        text3pm.addClass('present');


    } else {

        text3pm.removeClass('past present future');
        text3pm.addClass('future');
    }

// 4 pm time check
    if (parseInt(time4pm.attr('data-time')) < currentTime) {
        text4pm.removeClass('past present future');
        text4pm.addClass('past');

    } else if (parseInt(time4pm.attr('data-time')) === currentTime) {
        text4pm.removeClass('past present future');
        text4pm.addClass('present');


    } else {

        text4pm.removeClass('past present future');
        text4pm.addClass('future');
    }
        
// 5 pm time check
    if (parseInt(time5pm.attr('data-time')) < currentTime) {
        text5pm.removeClass('past present future');
        text5pm.addClass('past');

    } else if (parseInt(time5pm.attr('data-time')) === currentTime) {
        text5pm.removeClass('past present future');
        text5pm.addClass('present');


    } else {

        text5pm.removeClass('past present future');
        text5pm.addClass('future');
    }
};



checkTime();

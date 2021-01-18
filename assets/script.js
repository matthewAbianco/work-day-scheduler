
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

text9am.val(localStorage.getItem('9am'));
text10am.val(localStorage.getItem('10am'));
text11am.val(localStorage.getItem('11am'));
text12am.val(localStorage.getItem('12am'));
text1pm.val(localStorage.getItem('1pm'));
text2pm.val(localStorage.getItem('2pm'));
text3pm.val(localStorage.getItem('3pm'));
text4pm.val(localStorage.getItem('4pm'));
text5pm.val(localStorage.getItem('5pm'));

// 9 am save button
nineAmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("9am", JSON.stringify(text9am));
});

// 10 am save button
tenAmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("10am", text10am);
});
// 11 am button
elevenAmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("11am", text11am);
});

//12 am button
twelveAmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("12am", text12am);
});

//1 pm button
onePmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("1pm", text1pm);
});

// 2 pm button
twoPmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("2pm", text2pm);
});

// 3 pm button
threePmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("3pm", text3pm);
});

//4 pm button
fourPmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("4pm", JSON.stringify(textfourpm));
});

//5 pm button
nineAmBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("5pm", textfivepm);
});










// measures time by the hour and makes an integer out of it, so the integer value can be
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);

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


// clock at top of page
$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1);

checkTime();

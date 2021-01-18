
//clock at top of page
$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1);
//clock at top of page end
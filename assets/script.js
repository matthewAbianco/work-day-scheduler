$('#currentDay');

function update() {
  $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1);
// h2 "segment saved" feedback
$('#saved').hide();
// Selects all divs with class of row. Jquery object that looks like an array.
let hourDivs = $('.row');
// Use dayjs to display current day
let todayDate = dayjs().format('MMMM D, YYYY');
$('#currentDay').text(todayDate)
// Use day js to determine current hour 
let currentHour = parseInt(dayjs().format('HH'));
// Each button w/ class "saveBtn" will save inputs to localStorage and trigger feedback
$('.saveBtn').click(function () {
  let descriptionValue = $(this).siblings('.description').val();
  let key = $(this).parent().data('hour');
  localStorage.setItem(key, descriptionValue);
  $('#saved').fadeIn().delay(2000).fadeOut(1000)
})
// Each item inside of the jquery object will be populated with values found inside localStorage.
hourDivs.each(function () {
  let retrievalKey = $(this).data('hour')
  let valueRetrieved = localStorage.getItem(retrievalKey)
  $(this).find('.description').val(valueRetrieved);
  // This refers to the object inside the hourDivs object. Each will use current hour to be assigned a past, present or future class. 
  let hour = parseInt($(this).data('hour'));
  if (hour > currentHour) {
    $(this).addClass('future');
  } else if (hour < currentHour) {
    $(this).addClass('past');
  } else {
    $(this).addClass('present');
  }
});
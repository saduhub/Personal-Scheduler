// Jquery object that looks like an array
$('#saved').hide();

let hourDivs = $('.row');

let todayDate = dayjs().format('MMMM D, YYYY');
$('#currentDay').text(todayDate)

let currentHour = parseInt(dayjs().format('HH'));

$('.saveBtn').click(function () {
  let descriptionValue = $(this).siblings('.description').val();
  console.log(descriptionValue);
  let key = $(this).parent().data('hour');
  localStorage.setItem(key, descriptionValue);

  $('#saved').fadeIn().delay(5000).fadeOut(1000)
})

// each item inside of the jquery "array"
hourDivs.each(function () {
  let retrievalKey = $(this).data('hour')
  let valueRetrieved = localStorage.getItem(retrievalKey)
  $(this).find('.description').val(valueRetrieved);


  // this refers to the obeject inside the "array"
  let hour = parseInt($(this).data('hour'));
  if (hour > currentHour) {
    $(this).addClass('future');
  } else if (hour < currentHour) {
    $(this).addClass('past');
  } else {
    $(this).addClass('present');
  }
});
// compare current hour to parsed text belonging to div and set if statement that will change the class attribute to match past, present or future.
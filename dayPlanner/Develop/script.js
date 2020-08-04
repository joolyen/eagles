$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".time-block").each(function(){

    var currentTime = moment().format('HH');

    if($(this).attr('id') === currentTime){
        $(this).addClass('present');
    }
    else if ($(this).attr('id') >= currentTime) {
        $(this).addClass('past');
    }
    else {
        $(this).addClass('future');
    }
});

$('.saveBtn').on('click', function(event){
     var details = localStorage.getItem($(this));
     console.log(details);
 });




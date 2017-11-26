



var table, form;
table = $('#pixel_canvas');
form = $("#sizePicker");

function makeGrid(){
    var table;
    table = $('#pixel_canvas');
    table.empty();//clears previous table if existing
    const columnVal = $('#input_height').val();
    const rowVal = $('#input_width').val();
    for (x = 0; x < columnVal; x++){
        table.append('<tr></tr>');
        for (y = 0; y < rowVal; y++){
            table.children().last().append('<td></td>');
        }
    }
}

    table.on('click','td',function(){
    var cellColor;
    cellColor = $('#colorPicker').val();
    $(this).attr('bgcolor', cellColor);
});

    form.submit(function(event) {
    event.preventDefault();
    makeGrid();
});
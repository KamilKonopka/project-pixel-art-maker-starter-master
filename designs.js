// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var rows, columns, tableRows, tableColumns;
    rows = $('#input_width').val();
    columns = $('#input_height').val();
    for (i = 0; i < rows; i++){
        for (y = 0; y < columns; y++){
            $('#pixel_canvas').appendChild('<td>' + columns[i] + '</td>');
        }
        $('#pixel_canvas').prependChild('<tr>' + rows[i] + '</tr>');
    }

}
$('#button').on('click', makeGrid());
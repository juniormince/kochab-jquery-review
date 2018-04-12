// our very first callball function
$( document ).ready(onReady);

    console.log('jQuery intro lecture');

function onReady() {
    console.log('jQuery is ready');
    $('h1').addClass('funny');
    $('h1').css('color', 'red'); //direct from css (style) ranks higher than class

    // getters and setters
    console.log($('h2').text()); //get text value of h2
    $('h2').text('you have been set!!');
    console.log($('h2').text()); //order adds new text in console log -- jQuery only cares about the DOM as it is at the latest moment

    // inputs (also, getter and setter)
    $('#nameInput').val( 'bree' );
    console.log($('#nameInput').val());

    // events
    // event handler
    $('#addPersonButton').on('click', function() { //anonymous call back function
        console.log($('#nameInput').val());
        let name= $('#nameInput').val();
        $('#nameList').append('<li>' + name + ' ' + '<button class="deleteButton">delete</button></li>' + '</li>');

    });

    $('#nameList').on('click', '.deleteButton', function() {
        console.log('delete button was clicked');
        $(this).parent().remove();
    });
    
    $('#secondButton').on('click', function() {
        console.log('i was clicked');
    });


}

const img = document.getElementById('dog')

function getDog(){
    $.getJSON("https://dog.ceo/api/breeds/image/random", function( data ) {
        $(".json pre").html(JSON.stringify(data, null, 4));
        img['src'] = data.message;
    });
}
document.getElementById('button').addEventListener("click", function(){
    getDog();
});

$(document).ready(function() {
    getDog();
});
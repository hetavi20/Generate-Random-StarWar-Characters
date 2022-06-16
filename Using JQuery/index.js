$(document).ready(function() {

    $("#bt").on("click", function() {
        const rNum = Math.ceil(Math.random() * 80)
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${rNum}.json`, function(data) {
            $(".pimg").attr("src", data['image']);
            console.log(data['image'])
            $("#pname").text(data['name']);
            $("#pid").text(data['id']);
            $("#pheight").text(data['height'] + " Meter");
            // $("#pmass").text(data['mass'] + " KG");
            $("#pgender").text(data['gender']);

        })

        $("#d").css("display", "block")
    })

});
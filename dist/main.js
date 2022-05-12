const teamSerach = function () {
    let teamName = $("#team-input").val()

    $.get(`/teams/${teamName}`, function (players) {

        console.log(players);

        const source = $('#player-template').html()
        const template = Handlebars.compile(source);
        const newHTML = template({players})
        $('.players-container').append(newHTML)  

    })
} 

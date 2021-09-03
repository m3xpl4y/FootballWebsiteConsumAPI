//let urlTeams = "http://api.football-data.org/v2/teams/19/matches";
let urlTeams = "https://api.football-data.org/v2/teams/19/matches?status=SCHEDULED";
//var urlTeams = "https://api.football-data.org/v2/competitions/BL1/matches?status=FINISHED";
let token = "e55fd5458fb54892ae0bd92659f71457";

function loadScheduledGames(){

    var source = document.getElementById("games-template").innerHTML;
    var template = Handlebars.compile(source);

    fetch(urlTeams, {
        method: "GET",
        headers: {
            "x-auth-token": token,
        }
    })
    .then(response => response.json())
        .then(function(data){
            let html = "";
            console.log(data);
            data.matches.forEach(match => {
                html += template(match);
            }); 
            document.getElementById("scheduled").innerHTML = html;
        })
        .catch(function(err){
            console.log(err);
        });
}

loadScheduledGames();
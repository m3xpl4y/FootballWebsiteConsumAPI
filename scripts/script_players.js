let urlPlayers = "https://api.football-data.org/v2/teams/";
let token = "e55fd5458fb54892ae0bd92659f71457";

function loadPlayers(id){

    var source = document.getElementById("player-template").innerHTML;
    var template = Handlebars.compile(source);
    fetch(urlPlayers + id, {
        method: "GET",
        headers: {
            "x-auth-token": token,
        }
    })
    .then(response => response.json())
        .then(function(data){
            let html = "";
            data.squad.forEach(element => {
                html += template(element);
                console.log(element);
            }); 
            document.getElementById("teams").innerHTML = html;
        })
        .catch(function(err){
            console.log(err);
        });
}

document.getElementById("team_id").addEventListener("click", function() {

    let id = document.getElementById("team-id").getAttribute("value");

    loadPlayers(id);

})
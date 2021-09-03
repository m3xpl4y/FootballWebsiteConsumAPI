let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams?season=2021";
let token = "e55fd5458fb54892ae0bd92659f71457";

function loadAllTeams(){

    var source = document.getElementById("team-template").innerHTML;
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
            data.teams.forEach(element => {
                html += template(element);
            }); 
            document.getElementById("teams").innerHTML = html;
        })
        .catch(function(err){
            console.log(err);
        });
}

loadAllTeams();
let urlPlayers = "https://api.fooball-data.org/v2/players/44";
let token = "e55fd5458fb54892ae0bd92659f71457";

function loadPlayers(){
    var source = document.getElementById("player-template").innerHTML;
    var template = Handlebars.compile(source);
    fetch(urlPlayers, {
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
            document.getElementById("players").innerHTML = html;
        })
        .catch(function(err){
            console.log(err);
        });
}
loadPlayers();
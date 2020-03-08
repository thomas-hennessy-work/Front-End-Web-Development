"use strict";

fetch('https://api.opendota.com/api/teams/2586976').then(
  function(response_OG){
    return response_OG.json();
  }
).then(function(OG_info){
  console.log(OG_info);
  document.getElementById("OG-name").innerHTML = OG_info.name;
  document.getElementById("OG-logo").setAttribute("src", OG_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/2586976/players').then(
  function(response_OG_players){
    return response_OG_players.json();
  }
).then(function(players){
    const activeOG = players.filter(players => players.is_current_team_member == true);
    console.log(activeOG);
    document.getElementById("OG-member-0").innerHTML = activeOG[0].name;
    document.getElementById("OG-member-1").innerHTML = activeOG[1].name;
    document.getElementById("OG-member-2").innerHTML = activeOG[2].name;
    document.getElementById("OG-member-3").innerHTML = activeOG[3].name;
    document.getElementById("OG-member-4").innerHTML = activeOG[4].name;
})

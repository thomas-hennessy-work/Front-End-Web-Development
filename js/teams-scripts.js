"use strict";

//OG calls
//Calling API to obtain team information
fetch('https://api.opendota.com/api/teams/2586976').then(
  function(response_OG){
    return response_OG.json();
  }
).then(function(OG_info){
  //Obtaining team name and changing HTML in table
  document.getElementById("OG-name").innerHTML = OG_info.name;
  //Obtaining the source of the teams logo and changing the src attribute to the one obtained from the API
  document.getElementById("OG-logo").setAttribute("src", OG_info.logo_url);
})

//Calling API to obtain the list of team members
fetch('https://api.opendota.com/api/teams/2586976/players').then(
  function(response_OG_players){
    return response_OG_players.json();
  }
).then(function(players_OG){
  //Filtering the list of team members to obtain the active members
    const active_OG = players_OG.filter(players => players.is_current_team_member == true);
    //Chaning the html of the table to display the team members name
    for (var i = 0; i < 5; i++){
      document.getElementById("OG-member-"+i).innerHTML = active_OG[i].name;
    }

})


//Team secret calls
fetch('https://api.opendota.com/api/teams/1838315').then(
  function(response_Secret){
    return response_Secret.json();
  }
).then(function(Secret_info){
  document.getElementById("Secret-name").innerHTML = Secret_info.name;
  document.getElementById("Secret-logo").setAttribute("src", Secret_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/1838315/players').then(
  function(response_Secret_players){
    return response_Secret_players.json();
  }
).then(function(players_Secret){
    const active_Secret = players_Secret.filter(players_Secret => players_Secret.is_current_team_member == true);
    for (var i = 0; i < 5; i++){
      document.getElementById("Secret-member-"+i).innerHTML = active_Secret[i].name;
    }
})


//Fnatic calls
fetch('https://api.opendota.com/api/teams/350190').then(
  function(response_Fnatic){
    return response_Fnatic.json();
  }
).then(function(Fnatic_info){
  document.getElementById("Fnatic-name").innerHTML = Fnatic_info.name;
  document.getElementById("Fnatic-logo").setAttribute("src", Fnatic_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/350190/players').then(
  function(response_Fnatic_players){
    return response_Fnatic_players.json();
  }
).then(function(players_Fnatic){
    const active_Fnatic = players_Fnatic.filter(players_Fnatic => players_Fnatic.is_current_team_member == true);
    for (var i = 0; i < 5; i++){
      document.getElementById("Fnatic-member-"+i).innerHTML = active_Fnatic[i].name;
    }
})


//Team Liquid calls
fetch('https://api.opendota.com/api/teams/2163').then(
  function(response_Liquid){
    return response_Liquid.json();
  }
).then(function(Liquid_info){
  document.getElementById("Liquid-name").innerHTML = Liquid_info.name;
  document.getElementById("Liquid-logo").setAttribute("src", Liquid_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/2163/players').then(
  function(response_Liquid_players){
    return response_Liquid_players.json();
  }
).then(function(players_Liquid){
    const active_Liquid = players_Liquid.filter(players_Liquid => players_Liquid.is_current_team_member == true);
    for (var i = 0; i < 5; i++){
      document.getElementById("Liquid-member-"+i).innerHTML = active_Liquid[i].name;
    }
})


//TNC calls
fetch('https://api.opendota.com/api/teams/2108395').then(
  function(response_TNC){
    return response_TNC.json();
  }
).then(function(TNC_info){
  document.getElementById("TNC-name").innerHTML = TNC_info.name;
  document.getElementById("TNC-logo").setAttribute("src", TNC_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/2108395/players').then(
  function(response_TNC_players){
    return response_TNC_players.json();
  }
).then(function(players_TNC){
    const active_TNC = players_TNC.filter(players_TNC => players_TNC.is_current_team_member == true);
    for (var i = 0; i < 5; i++){
      document.getElementById("TNC-member-"+i).innerHTML = active_TNC[i].name;
    }
})


// calls EG
fetch('https://api.opendota.com/api/teams/39').then(
  function(response_EG){
    return response_EG.json();
  }
).then(function(EG_info){
  document.getElementById("EG-name").innerHTML = EG_info.name;
  document.getElementById("EG-logo").setAttribute("src", EG_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/39/players').then(
  function(response_EG_players){
    return response_EG_players.json();
  }
).then(function(players_EG){
    const active_EG = players_EG.filter(players_EG => players_EG.is_current_team_member == true);
    for (var i = 0; i < 5; i++){
      document.getElementById("EG-member-"+i).innerHTML = active_EG[i].name;
    }
})


//Alliance calls
fetch('https://api.opendota.com/api/teams/111474').then(
  function(response_Alliance){
    return response_Alliance.json();
  }
).then(function(Alliance_info){
  document.getElementById("Alliance-name").innerHTML = Alliance_info.name;
  document.getElementById("Alliance-logo").setAttribute("src", Alliance_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/111474/players').then(
  function(response_Alliance_players){
    return response_Alliance_players.json();
  }
).then(function(players_Alliance){
    const active_Alliance = players_Alliance.filter(players_Alliance => players_Alliance.is_current_team_member == true);
    for (var i = 0; i < 5; i++){
      document.getElementById("Alliance-member-"+i).innerHTML = active_Alliance[i].name;
    }
})

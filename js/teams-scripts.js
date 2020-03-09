"use strict";

//OG calls
//Calling API to obtain team information
fetch('https://api.opendota.com/api/teams/2586976').then(
  function(response_OG){
    return response_OG.json();
  }
).then(function(OG_info){
  console.log(OG_info);
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
    console.log(active_OG);
    //Chaning the html of the table to display the team members name
    document.getElementById("OG-member-0").innerHTML = active_OG[0].name;
    document.getElementById("OG-member-1").innerHTML = active_OG[1].name;
    document.getElementById("OG-member-2").innerHTML = active_OG[2].name;
    document.getElementById("OG-member-3").innerHTML = active_OG[3].name;
    document.getElementById("OG-member-4").innerHTML = active_OG[4].name;
})


//Team secret calls
fetch('https://api.opendota.com/api/teams/1838315').then(
  function(response_Secret){
    return response_Secret.json();
  }
).then(function(Secret_info){
  console.log(Secret_info);
  document.getElementById("Secret-name").innerHTML = Secret_info.name;
  document.getElementById("Secret-logo").setAttribute("src", Secret_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/1838315/players').then(
  function(response_Secret_players){
    return response_Secret_players.json();
  }
).then(function(players_Secret){
    const active_Secret = players_Secret.filter(players_Secret => players_Secret.is_current_team_member == true);
    console.log(active_Secret);
    document.getElementById("Secret-member-0").innerHTML = active_Secret[0].name;
    document.getElementById("Secret-member-1").innerHTML = active_Secret[1].name;
    document.getElementById("Secret-member-2").innerHTML = active_Secret[2].name;
    document.getElementById("Secret-member-3").innerHTML = active_Secret[3].name;
    document.getElementById("Secret-member-4").innerHTML = active_Secret[4].name;
})


//Fnatic calls
fetch('https://api.opendota.com/api/teams/350190').then(
  function(response_Fnatic){
    return response_Fnatic.json();
  }
).then(function(Fnatic_info){
  console.log(Fnatic_info);
  document.getElementById("Fnatic-name").innerHTML = Fnatic_info.name;
  document.getElementById("Fnatic-logo").setAttribute("src", Fnatic_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/350190/players').then(
  function(response_Fnatic_players){
    return response_Fnatic_players.json();
  }
).then(function(players_Fnatic){
    const active_Fnatic = players_Fnatic.filter(players_Fnatic => players_Fnatic.is_current_team_member == true);
    console.log(active_Fnatic);
    document.getElementById("Fnatic-member-0").innerHTML = active_Fnatic[0].name;
    document.getElementById("Fnatic-member-1").innerHTML = active_Fnatic[1].name;
    document.getElementById("Fnatic-member-2").innerHTML = active_Fnatic[2].name;
    document.getElementById("Fnatic-member-3").innerHTML = active_Fnatic[3].name;
    document.getElementById("Fnatic-member-4").innerHTML = active_Fnatic[4].name;
})


//Team Liquid calls
fetch('https://api.opendota.com/api/teams/2163').then(
  function(response_Liquid){
    return response_Liquid.json();
  }
).then(function(Liquid_info){
  console.log(Liquid_info);
  document.getElementById("Liquid-name").innerHTML = Liquid_info.name;
  document.getElementById("Liquid-logo").setAttribute("src", Liquid_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/2163/players').then(
  function(response_Liquid_players){
    return response_Liquid_players.json();
  }
).then(function(players_Liquid){
    const active_Liquid = players_Liquid.filter(players_Liquid => players_Liquid.is_current_team_member == true);
    console.log(active_Liquid);
    document.getElementById("Liquid-member-0").innerHTML = active_Liquid[0].name;
    document.getElementById("Liquid-member-1").innerHTML = active_Liquid[1].name;
    document.getElementById("Liquid-member-2").innerHTML = active_Liquid[2].name;
    document.getElementById("Liquid-member-3").innerHTML = active_Liquid[3].name;
    document.getElementById("Liquid-member-4").innerHTML = active_Liquid[4].name;
})


//TNC calls
fetch('https://api.opendota.com/api/teams/2108395').then(
  function(response_TNC){
    return response_TNC.json();
  }
).then(function(TNC_info){
  console.log(TNC_info);
  document.getElementById("TNC-name").innerHTML = TNC_info.name;
  document.getElementById("TNC-logo").setAttribute("src", TNC_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/2108395/players').then(
  function(response_TNC_players){
    return response_TNC_players.json();
  }
).then(function(players_TNC){
    const active_TNC = players_TNC.filter(players_TNC => players_TNC.is_current_team_member == true);
    console.log(active_TNC);
    document.getElementById("TNC-member-0").innerHTML = active_TNC[0].name;
    document.getElementById("TNC-member-1").innerHTML = active_TNC[1].name;
    document.getElementById("TNC-member-2").innerHTML = active_TNC[2].name;
    document.getElementById("TNC-member-3").innerHTML = active_TNC[3].name;
    document.getElementById("TNC-member-4").innerHTML = active_TNC[4].name;
})


// calls EG
fetch('https://api.opendota.com/api/teams/39').then(
  function(response_EG){
    return response_EG.json();
  }
).then(function(EG_info){
  console.log(EG_info);
  document.getElementById("EG-name").innerHTML = EG_info.name;
  document.getElementById("EG-logo").setAttribute("src", EG_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/39/players').then(
  function(response_EG_players){
    return response_EG_players.json();
  }
).then(function(players_EG){
    const active_EG = players_EG.filter(players_EG => players_EG.is_current_team_member == true);
    console.log(players_EG);
    document.getElementById("EG-member-0").innerHTML = active_EG[0].name;
    document.getElementById("EG-member-1").innerHTML = active_EG[1].name;
    document.getElementById("EG-member-2").innerHTML = active_EG[2].name;
    document.getElementById("EG-member-3").innerHTML = active_EG[3].name;
    document.getElementById("EG-member-4").innerHTML = active_EG[4].name;
})


//Alliance calls
fetch('https://api.opendota.com/api/teams/111474').then(
  function(response_Alliance){
    return response_Alliance.json();
  }
).then(function(Alliance_info){
  console.log(Alliance_info);
  document.getElementById("Alliance-name").innerHTML = Alliance_info.name;
  document.getElementById("Alliance-logo").setAttribute("src", Alliance_info.logo_url);
})

fetch('https://api.opendota.com/api/teams/111474/players').then(
  function(response_Alliance_players){
    return response_Alliance_players.json();
  }
).then(function(players_Alliance){
    const active_Alliance = players_Alliance.filter(players_Alliance => players_Alliance.is_current_team_member == true);
    console.log(active_Alliance);
    document.getElementById("Alliance-member-0").innerHTML = active_Alliance[0].name;
    document.getElementById("Alliance-member-1").innerHTML = active_Alliance[1].name;
    document.getElementById("Alliance-member-2").innerHTML = active_Alliance[2].name;
    document.getElementById("Alliance-member-3").innerHTML = active_Alliance[3].name;
    document.getElementById("Alliance-member-4").innerHTML = active_Alliance[4].name;
})

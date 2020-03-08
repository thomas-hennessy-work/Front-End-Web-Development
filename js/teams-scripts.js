"use strict";

// Promise.all([
//   fetch('https://api.opendota.com/api/teams/2586976'),
//   fetch('https://api.opendota.com/api/teams/2586976/players')
// ])
//   .then (responses => {
//     return responses.map(async function (response) {
//       console.log(await response.json());
//     });
//   }).then (data => {
//     let [teams,players] = data;
//     console.log(teams);
//     console.log(players);
//
//
//     // activePlayers = players.filter(item => {return item.is_current_team_member == true});
//     //
//     // console.log(activePlayers);
//   }).catch(error => {
//     console.log(error);
//   });

fetch('https://api.opendota.com/api/teams/2586976').then(
  function(response_OG){
    return response_OG.json();
  }
).then(function(teams){
  console.log(teams);
})

fetch('https://api.opendota.com/api/teams/2586976/players').then(
  function(response_OG_players){
    return response_OG_players.json();
  }
).then(function(players){
    const activeOG = players.filter(players => players.is_current_team_member == true);
    console.log(activeOG);
})

// async function fetchData(url = '',){
//   const response = await fetch(url, {
//     method: 'get',
//   });
//   return await responce.json();
// }
//
// fetch('https://api.opendota.com/api/teams/2586976')
//   .then((team) => {
//     console.log(team);
//   });

// Request.open('GET', 'https://api.opendota.com/api/teams/2586976/players', true);
// Request.onload = function(){
//   var ogPlayerData = JSON.parse(this.response);
//
//   if(Request.status >= 200 && Request.status < 400){
//     ogPlayerData.forEach(player => {
//       console.log(ogPlayerData.name);
//       console.log(ogPlayerData.acount_id);
//       console.log(ogPlayerData.games_played);
//       console.log(ogPlayerData.wins);
//     });
//   }
//   else{
//     console.log('error');
//   }
//
// }
// Request.send();

//OG ID = 2586976
//PSG.LGD ID = 15
//Team Secret ID = 1838315
//TNC Predator = 2108395
//Newbee ID = 6214538
//Alliance ID = 111474
//Team Liquid ID = 2163

// "use strict";
//
// var Request = new XMLHttpRequest();
//
// Request.open('GET', 'https://api.opendota.com/api/teams/2586976', true);
// Request.onload = function(){
//   var ogData = JSON.parse(this.response);
//
//   if(Request.status >= 200 && Request.status < 400){
//     console.log(ogData.tag);
//     console.log(ogData.team_id);
//     console.log(ogData.wins);
//     console.log(ogData.losses);
//   }
//   else{
//     console.log('error');
//   }
//
// }
// Request.send();



//Able to call multiple API's
Promise.all([
  fetch('https://api.opendota.com/api/teams/2586976'),
  fetch('https://api.opendota.com/api/teams/2586976/players')
])
  .then(function (responses) {
    return responses.map(function (response) {
      return response.json();
    });
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.log(error);
  });



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

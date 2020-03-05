"use strict";

var Request = new XMLHttpRequest();

Request.open('GET', 'https://api.opendota.com/api/teams', true);
Request.onload = function(){
  var ogData = JSON.parse(this.response);

  if(Request.status >= 200 && Request.status < 400){
    ogData.forEach(teamInfo => {
      console.log(teamInfo.tag);
      console.log(teamInfo.team_id);
    });

  }
  else{
    console.log('error');
  }

}
Request.send();

//OG ID = 2586976
//PSG.LGD ID = 15
//Team Secret ID = 1838315
//TNC Predator = 2108395
//Newbee ID = 6214538
//Alliance ID = 111474
//Team Liquid ID = 2163

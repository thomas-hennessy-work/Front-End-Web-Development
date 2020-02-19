"use strict";

//navigation images
const arena = document.getElementById('Location');
const team = document.getElementById('team');
const game = document.getElementById('game');

//ellements related to location
const arena_more = document.getElementById('Location_more');
const location_container = document.getElementById('Location_container')
const location_discription = document.getElementById('Location_discription');

//Ellements related to team
const team_more = document.getElementById('Team_more');
const team_container = document.getElementById('Team_container')
const team_discription = document.getElementById('Team_discription');

const arena_click = () => {
  //ask how to put the transitions for both ways in to css
  team.style.transition = "all 2s";
  game.style.transition = "all 2s";
  arena.classList.toggle("Location-click-location");
  team.classList.toggle("click-right");
  game.classList.toggle("click-right");
  arena_more.classList.toggle("Location-click-more_info");
  location_container.classList.toggle('Location-click-container');
  location_discription.classList.toggle('Location-click-discription');
}

const team_click = () => {
  arena.style.transition = "all 2s";
  team.style.transition = "all 2s"
  game.style.transition = "all 2s";
  team.classList.toggle("Team-click-team");
  arena.classList.toggle("click-left");
  game.classList.toggle("click-right");
  team_more.classList.toggle("Team-click-more_info");
  team_container.classList.toggle("Team-click-container");
  team_discription.classList.toggle('Team-click-discription');
  location_discription.classList.toggle('Team-click-location-discription');
}

arena.addEventListener("click", arena_click);
team.addEventListener("click", team_click);

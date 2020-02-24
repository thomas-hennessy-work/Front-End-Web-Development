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

const game_more = document.getElementById('Game_more');
const game_container = document.getElementById('Game_container');
const game_discritpion = document.getElementById('Game_discription');

const arena_click = () => {
  //ask how to put the transitions for both ways in to css
  team.style.transition = "all 2s";
  game.style.transition = "all 2s";
  arena.classList.toggle("Location-click-location");
  team.classList.toggle("click-right");
  game.classList.toggle("click-right");
  arena_more.classList.toggle("more-info-appear");
  location_discription.classList.toggle('appear-discription');
}

const team_click = () => {
  arena.style.transition = "all 2s";
  team_container.style.transition = "all 2s"
  game.style.transition = "all 2s";
  team_container.classList.toggle("Team-click-team");
  arena.classList.toggle("click-left");
  game.classList.toggle("click-right");
  team_more.classList.toggle("more-info-appear");
  team_discription.classList.toggle('appear-discription');
  location_discription.classList.toggle('remove-discription');
}

const game_click = () => {
  arena.style.transition = "all 2s";
  team.style.transition = "all 2s";
  game_container.style.transition = "all 2s";
  game_container.classList.toggle("Game-click-game");
  arena.classList.toggle("click-left");
  team.classList.toggle("click-left");
  game_more.classList.toggle("more-info-appear");
  game_discritpion.classList.toggle("appear-discription");
  location_discription.classList.toggle('remove-discription');
  team_discription.classList.toggle('remove-discription');
}

arena.addEventListener("click", arena_click);
team.addEventListener("click", team_click);
game.addEventListener("click", game_click);

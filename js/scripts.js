"use strict";

//navigation images
const arena = document.getElementById('Location');
const team = document.getElementById('team');
const game = document.getElementById('game');

//ellements related to location
const arena_more = document.getElementById('Location-more');
const arena_container = document.getElementById('Location-container')
const arena_discription = document.getElementById('Location-discription');

//Ellements related to team
const team_more = document.getElementById('Team-more');
const team_container = document.getElementById('Team-container')
const team_discription = document.getElementById('Team-discription');

//Elements related to game
const game_more = document.getElementById('Game-more');
const game_container = document.getElementById('Game-container');
const game_discritpion = document.getElementById('Game-discription');

const arena_click = () => {
  arena_container.classList.toggle("image-click-arena");
  arena.classList.toggle("remove-grayscale");
  team_container.classList.toggle("click-left");
  game_container.classList.toggle("click-left");
  arena_more.classList.toggle("more-info-appear");
  arena_discription.classList.toggle('appear-discription');
}

const team_click = () => {
  team_container.classList.toggle("image-click-team");
  team.classList.toggle("remove-grayscale");
  arena_container.classList.toggle("click-left");
  game_container.classList.toggle("click-left");
  team_more.classList.toggle("more-info-appear");
  team_discription.classList.toggle('appear-discription');
  arena_discription.classList.toggle('remove-discription');
}

const game_click = () => {
  game_container.classList.toggle("image-click-game");
  game.classList.toggle("remove-grayscale");
  arena_container.classList.toggle("click-left");
  team_container.classList.toggle("click-left");
  game_more.classList.toggle("more-info-appear");
  game_discritpion.classList.toggle("appear-discription");
  arena_discription.classList.toggle('remove-discription');
  team_discription.classList.toggle('remove-discription');
}

arena.addEventListener("click", arena_click);
team.addEventListener("click", team_click);
game.addEventListener("click", game_click);

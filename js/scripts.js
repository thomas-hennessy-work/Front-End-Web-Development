"use strict";

//navigation images
const arena = document.getElementById('Location');
const team = document.getElementById('team');
const game = document.getElementById('game');

//Appear on location click
const arena_more = document.getElementById('Location_more');
const location_container = document.getElementById('Location_container')
const location_discription = document.getElementById('Location_discription');

const arena_click = () => {
  //ask how to put the transitions for both ways in to css
  team.style.transition = "all 2s";
  game.style.transition = "all 2s";
  arena.classList.toggle("Location-click-location");
  team.classList.toggle("Location-click-others");
  game.classList.toggle("Location-click-others");
  arena_more.classList.toggle("Location-click-more_info");
  location_container.classList.toggle('Location-click-container');
  location_discription.classList.toggle('Location-click-discription');
}

const team_click = () => {
  arena.style.transition = "all 2s";
  game.style.transition = "all 2s";
}

arena.addEventListener("click", arena_click);
team.addEventListener("click", team_click);

"use strict";

const arena = document.getElementById('Location');
const team = document.getElementById('team');
const game = document.getElementById('game');
const arena_more = document.getElementById('Location_more');
const location_container = document.getElementById('Location_container')

const arena_click = () => {
  team.style.transition = "all 2s";
  game.style.transition = "all 2s";
  arena.classList.toggle("Location-click-location");
  team.classList.toggle("Location-click-others");
  game.classList.toggle("Location-click-others");
  arena_more.classList.toggle("Location-click-more_info");
  location_container.classList.toggle('Location-click-container')
}

arena.addEventListener("click", arena_click);

const arena = document.getElementById('Location');
const team = document.getElementById('team');
const game = document.getElementById('game');

const arena_click = () => {
  team.style.transition = "all 2s";
  game.style.transition = "all 2s";
  arena.classList.toggle("Location-click-location");
  team.classList.toggle("Location-click-team");
  game.classList.toggle("Location-click-game");
}

arena.addEventListener("click", arena_click);

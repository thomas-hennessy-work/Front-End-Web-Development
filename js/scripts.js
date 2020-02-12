const Location = document.getElementsById('Location');
const Team = document.getElementsById('team');

const image1_click = () => {
  for(i in Team) {
    Team[i].classList.toggle("alternateStyle");
  }
  document.getElementsById("team").classList.toggle('alternateStyle');
}

Location.addEventListener("click", image1_click);

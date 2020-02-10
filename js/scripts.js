console.log("hello");
dog1.addEventListener("click", image1_click);

function image1_click(){
<<<<<<< Updated upstream
  var img2 = document.getElementsByClassName('dog2');
  //var img3 = document.getElementsByClassName('dog3');

  var pos = 0;
  var time = setInterval(frame, 3);

  pos++;
  img2.style.left = pos + 'px';
}
=======
  //var img2 = document.getElementsByClassName('dog2');
  //img2.className = "alternate";
  document.getElementsById("dog2").setAttribute("class", "dog2-alternate");
>>>>>>> Stashed changes

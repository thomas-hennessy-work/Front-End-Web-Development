console.log("hello");
dog1.addEventListener("click", image1_click);

function image1_click(){
  var img2 = document.getElementsByClassName('dog2');
  //var img3 = document.getElementsByClassName('dog3');

  var pos = 0;
  var time = setInterval(frame, 3);

  pos++;
  img2.style.left = pos + 'px';
}

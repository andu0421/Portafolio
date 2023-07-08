
  var buttons = document.getElementsByClassName("experience__botao--demo1");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var videoContainer = document.getElementById("contenedorVideo");
      var video = document.createElement("video");
      video.src = this.getAttribute("data-video");
      video.controls = true;
      video.autoplay = true;
      videoContainer.innerHTML = "";
      videoContainer.appendChild(video);
    });
  }


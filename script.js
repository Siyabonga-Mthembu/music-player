let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

      song.onloadedmetadata = function(){
        progress.max = song.duration;
        progress.value = song.currentTime;
      }

      function playPause() {
          if(ctrlIcon.classList.contains("fa-pause")){
            song.pause();
            ctrlIcon.classlist.remove("fa-pause");
            ctrlIcon.classlist.add("fa-play");
          }
          else{
            song.play();           
            ctrlIcon.classlist.add("fa-pause");
            ctrlIcon.classlist.remove("fa-play");
          }

         }

         progress.onchange = function(){
          song.play();
           song.currentTime = progress.value;
           ctrlIcon.classlist.add("fa-pause");
            ctrlIcon.classlist.remove("fa-play");}
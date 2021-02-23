// lyrics functions

const player = document.querySelector('.player')
const lyrics = document.querySelector('.lyrics')
const lines = lyrics.textContent.trim().split('\n')

lyrics.removeAttribute('style')
lyrics.innerText = ''

let syncData = []

lines.map((line, index) => {
    const [time, text] = line.trim().split('|')
    syncData.push({'start': time.trim(), 'text': text.trim()})
})

player.addEventListener('timeupdate', () => {
    syncData.forEach((item) => {
        console.log(item)
        if (player.currentTime >= item.start) lyrics.innerText = item.text
    })
})

// end of lyrics funtions






// time update funtions

var x = document.getElementById("player");


setInterval(function(){

    if((x.currentTime>0.02)&&(x.currentTime<65)){
      x.currentTime = 65;
            }

    if((x.currentTime>65)&&(x.currentTime<103)){
      document.getElementById("mtopic").innerHTML = '<h3>නමස්කාරය</h3>';
      document.getElementById("mtopic").style="background-color:#8C00DC;";
      document.getElementById("namaskaraya").style="background-color:#8C00DC; border-radius:12px; border: solid 2px white;" ;
            }
    else{
      document.getElementById("namaskaraya").style=" " ;
    }

            





        });

// end of time update funtions







// left slidebar funtions


function namaskaraya() { 
    document.getElementById('player').style.visibility='visible';
  x.currentTime = 65;
  x.play();
  console.log(x.currentTime); 
} 


// end of left sidebar funtions




// keys funtions - spacebar

var audio = document.querySelector('audio');

if (audio) {

  window.addEventListener('keydown', function (event) {

    var key = event.which || event.keyCode;

    if (key === 32) { // spacebar

      // eat the spacebar, so it does not scroll the page
      event.preventDefault();

      audio.paused ? audio.play() : audio.pause();
      
    }

  });
}



// keys funtions - arrows keys

var theAudio = document.getElementById("player");
  document.onkeydown = function(event) {
      switch (event.keyCode) {
         case 37:
              event.preventDefault();
              
              vid_currentTime = theAudio.currentTime;
              theAudio.currentTime = vid_currentTime - 5;
            break;
         
         case 39:
              event.preventDefault();
              
              vid_currentTime = theAudio.currentTime;
              theAudio.currentTime = vid_currentTime + 5;
            break;
         
      }
  };








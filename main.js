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
      document.getElementById("namaskaraya").style="background-color:#8C00DC; border-radius:12px; border: solid 3px white;" ;
            }
    else{
      document.getElementById("namaskaraya").style=" " ;
    }

    if((x.currentTime>103)&& (x.currentTime<128)){
      document.getElementById("mtopic").innerHTML = '<h3>බුදුගුණ සිහි කිරීම</h3>';
      document.getElementById("mtopic").style="background-color:green;"; 
      document.getElementById("buduguna").style="background-color:green; border-radius:12px; border: solid 3px white;" ;
            }
    else{
      document.getElementById("buduguna").style=" " ;
    }

    if((x.currentTime>128)&& (x.currentTime<145)){
      document.getElementById("mtopic").innerHTML = '<h3>දහම්ගුණ සිහි කීරීම</h3>';
      document.getElementById("mtopic").style="background-color:#E86D0C;";
      document.getElementById("dahamguna").style="background-color:#E86D0C; border-radius:12px; border: solid 3px white;";     
            }
    else{
      document.getElementById("dahamguna").style=" "; 
    }

    if((x.currentTime>145)&& (x.currentTime<211)){
      document.getElementById("mtopic").innerHTML = '<h3>සඟගුණ සිහි කිරීම</h3>';
      document.getElementById("mtopic").style="background-color:#C60303;" ;
      document.getElementById("sagaguna").style="background-color:#C60303; border-radius:12px; border: solid 3px white;";   
              }
    else{
      document.getElementById("sagaguna").style=" ";
    }

    if((x.currentTime>211)&& (x.currentTime<574)){
        document.getElementById("mtopic").innerHTML = '<h3>රතන සූත්‍රය</h3>';
        document.getElementById("mtopic").style="background-color:#803232;";
        document.getElementById("rathanasutta").style="background-color:#803232; border-radius:12px; border: solid 3px white;";     
              }
    else{
        document.getElementById("rathanasutta").style=" ";  
    }

    if((x.currentTime>582.5)&&(x.currentTime<1340)){
      x.currentTime = 1408.5;
            }
    if((x.currentTime>1340)&&(x.currentTime<1408.4)){
      x.currentTime = 572;
        }

      if((x.currentTime>1408)&& (x.currentTime<1552)){
        document.getElementById("mtopic").innerHTML = '<h3>කරණීයමෙත්ත සූත්‍රය</h3>';
        document.getElementById("mtopic").style="background-color:#d41973;";
        document.getElementById("meththasutta").style="background-color:#d41973; border-radius:12px; border: solid 3px white;";     
              }
    else{
        document.getElementById("meththasutta").style=" ";  
    }
            








        });
// end of time update funtions





// left slidebar funtions


function namaskaraya() { 
    document.getElementById('player').style.visibility='visible';
  x.currentTime = 65;
  x.play();
  
} 

function buduguna() { 
  document.getElementById('player').style.visibility='visible';
x.currentTime = 104;
x.play();
console.log(x.currentTime); 
} 

function dahamguna() { 
  document.getElementById('player').style.visibility='visible';
x.currentTime = 128.7;
x.play();
console.log(x.currentTime); 
} 

function sagaguna() { 
  document.getElementById('player').style.visibility='visible';
x.currentTime = 145.1;
x.play();
console.log(x.currentTime); 
} 

function rathanasutta() { 
  document.getElementById('player').style.visibility='visible';
x.currentTime = 212;
x.play();
console.log(x.currentTime); 
} 

function meththasutta() { 
  document.getElementById('player').style.visibility='visible';
x.currentTime = 1408.5;
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


// end of keys funtions





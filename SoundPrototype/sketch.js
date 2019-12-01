let song;
let button;
let loaded;


function preload() {
  song = loadSound('aqua.mp3', loaded);
}

function setup() {
  createCanvas(200, 200);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  song.setVolume(0.3);
}

function togglePlaying(){
  if (!song.isPlaying()){
    song.play();
    song.setVolume(0.3);
    button.html("pause")
  }else{
    song.pause();
    button.html("play");
  }
  }
  song.play();

}
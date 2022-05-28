const rings = document.getElementById("rings");
const song = document.getElementsByClassName("song");
const playBtn = document.querySelector(".playBtn");
const stopBtn = document.querySelector(".stopBtn");
const button = document.querySelector("button");
const Play = document.getElementById("Play");
const Stop = document.getElementById("Stop");
const blue = document.getElementById("blue");
const sphere = document.body.querySelector(".img1");


function start()
{
// .addEventListener("click", scene1());

//top sphere animation
let angle = Math.PI / 2;
let animateBlue = (time, lastTime) => {
  if (lastTime != null) {
    angle += (time - lastTime) * -0.0005;
  }
  blue.style.top = Math.sin(angle) * -100 + "px"; //how large the radius is (y coordinate)
  blue.style.left = Math.cos(angle) * -100 + "px"; //in relation to x coordinate
  requestAnimationFrame((newTime) => animateBlue(newTime, time));
};
requestAnimationFrame(animateBlue);

//text animation
     const text = document.querySelector(".fancy"); //selected class.
        const strText = text.textContent; //This is giving the contens of the class selected, so iNess...ect
        const splitText = strText.split(""); //split is a method.
        text.textContent = ""; // this stops h1 from repeating.



        for (let i = 0; i < splitText.length; i++) {
            text.innerHTML += "<span>" + splitText[i] + "</span>" //each letter is split and span tags are added. 

        }

        let char = 0; //start time
        let timer = setInterval(onTick, 60); //50 milliseconds


        function onTick() {
            const span = text.querySelectorAll("span")[char];
        span.classList.add("fade"); // this is going to add the class fade to each span or letter starting at [char]
        char++
        if (char === splitText.length) {
            complete(); // function is called here from below.
        return;
            }
        }

        function complete() {
            clearInterval(timer); //clearInterval is a JS method to stop time.
        timer = null;
        }
   
}
start()


//music player-->


function scene1(){
const audio = new Audio("/music/drops of jupiter.mp3");

let playMusic = () => {
  console.log("clicked");
  
  playBtn.classList.toggle("stop");
  playBtn.style.display = "none";
  stopBtn.classList.toggle("stop");
  
  audio.play();
};

playBtn.addEventListener("click", playMusic);

let stopMusic = () => {
  console.log("pause");
 
  stopBtn.classList.toggle("stop");
  playBtn.style.display = "block";
  audio.pause()
};

stopBtn.addEventListener("click", stopMusic);
function createSquare() {
  const section = document.querySelector("section");
  const square = document.createElement("span");
  var size = Math.random() * -100;

  square.style.width = 10 + size + "px";
  square.style.height = 10 + size + "px";

  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";

  section.appendChild(square);
}
setInterval(createSquare, 100);

}
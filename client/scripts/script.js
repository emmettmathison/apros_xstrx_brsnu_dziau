let circle = document.getElementById("circle");
let skyCloudsFast = document.getElementById("sky-clouds-fast");
let skyCloudsSlow = document.getElementById("sky-clouds-slow");
let skyCloudsBackwardsFast = document.getElementById(
  "sky-clouds-backwards-fast"
);
let skyCloudsBackwardsSlow = document.getElementById(
  "sky-clouds-backwards-slow"
);
let water1Fast = document.getElementById("water1-fast");
let water1Slow = document.getElementById("water1-slow");
let tsiolkovsky = document.getElementById("tsiolkovsky");
let triton = document.getElementById("triton");

let skyCloudsSlowVideo = document.getElementById("sky-clouds-slow-video");
let skyCloudsBackwardsSlowVideo = document.getElementById(
  "sky-clouds-backwards-slow-video"
);
let waterSlowVideo = document.getElementById("water1-forwards-slow");

skyCloudsSlowVideo.playbackRate = 0.5;
skyCloudsBackwardsSlowVideo.playbackRate = 0.5;
waterSlowVideo.playbackRate = 0.5;

let skyCloudsFastAudio = document.getElementById("sky-clouds-fast-audio");
let skyCloudsSlowAudio = document.getElementById("sky-clouds-slow-audio");
let tritonAudio = document.getElementById("triton-audio");
let skyCloudsBackwardsFastAudio = document.getElementById(
  "sky-clouds-backwards-fast-audio"
);
let skyCloudsBackwardsSlowAudio = document.getElementById(
  "sky-clouds-backwards-slow-audio"
);
let tsiolkovskyAudio = document.getElementById("tsiolkovsky-audio");
let water1FastAudio = document.getElementById("water1-fast-audio");
let water1SlowAudio = document.getElementById("water1-slow-audio");

let audioArray = [
  skyCloudsFastAudio,
  skyCloudsSlowAudio,
  tritonAudio,
  skyCloudsBackwardsFastAudio,
  skyCloudsBackwardsSlowAudio,
  tsiolkovskyAudio,
  water1FastAudio,
  water1SlowAudio,
];

let videoArray = [
  skyCloudsFast,
  skyCloudsSlow,
  triton,
  skyCloudsBackwardsFast,
  skyCloudsBackwardsSlow,
  tsiolkovsky,
  water1Fast,
  water1Slow,
];

let displayValue;
let displayIndex;
let displayIndeces = [];

$(tsiolkovsky).css({ "min-width": 1.5 * $(circle).width });

let getDisplayValue = function () {
  displayValue = Math.floor(Math.random() * 8);
};
// returns a random number between 1 and 8 which will decide how many videos/sounds we display

let getDisplayIndex = function () {
  displayIndex = Math.floor(Math.random() * 8);
};
// returns random number which will function as the index value/s of the video/s we display

$(circle).on("click", function () {
  for (let i = 0; i < videoArray.length; i++) {
    $(videoArray[i]).css({ opacity: ".001%" });
  }
  audioArray.forEach((audio) => {
    audio.pause();
  });
  // reset

  getDisplayValue();
  for (let i = 0; i <= displayValue; i++) {
    getDisplayIndex();
    displayIndeces.push(displayIndex);
  }
  // create array of random index values between 0 and videoArray.length
  console.log(displayIndeces);
  for (let i = 0; i <= displayIndeces.length - 1; i++) {
    $(videoArray[displayIndeces[i]]).css({ opacity: "25%" });
    $(audioArray[displayIndeces[i]])[0].play();
    console.log(displayIndeces[i]);
  }
  // make images at index values visible

  displayIndeces.splice(0, displayIndeces.length);
  // clear the array
});

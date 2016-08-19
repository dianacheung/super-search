// setup the audio object
var audioElement = document.createElement('audio');

var source1 = document.createElement('source');
source1.type= 'audio/mpeg';
source1.src= 'D2.mp3';
audioElement.appendChild(source1);

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "playSound"){
          audioElement.load;
          audioElement.play();
      }
});
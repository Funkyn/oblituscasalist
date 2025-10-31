const backThumbnail = document.querySelector(".thumbnailImage")
const getModeID = sessionStorage.getItem("modeID")
const titleDesc = document.querySelector(".displayName")
const trivia = document.querySelector("#trv")
const info = document.querySelector("#inf")
const selfimposed = document.querySelector("#sic")
console.log("loaded mode "+ getModeID)
backThumbnail.style.backgroundImage = "url(assets/rnwhu.png)"

var json = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "data.json",
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  });
  return json;
})(); 
//^ get data.json
const parsedJSON = JSON.parse(JSON.stringify(json));
//^ convert to table
console.log(parsedJSON[0].thumbnail)


function youtube_parser(url3){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url3.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

backThumbnail.style.backgroundImage =  "url("+"https://img.youtube.com/vi/" + youtube_parser(parsedJSON[getModeID].thumbnail) + "/maxresdefault.jpg"+")"
var text_to_change = titleDesc.childNodes[0];
text_to_change.nodeValue = "#" + getModeID + " - " + parsedJSON[getModeID].title

var text_to_change = selfimposed.childNodes[0];
text_to_change.nodeValue = parsedJSON[getModeID].selfimposed

var text_to_change = info.childNodes[0];
text_to_change.nodeValue = parsedJSON[getModeID].info

var text_to_change = trivia.childNodes[0];
text_to_change.nodeValue = parsedJSON[getModeID].trivia

function getID(btn) {
  console.log(btn.id)
  sessionStorage.setItem("modeID",btn.id)
  window.location.href = 'details.html'
  window.open(parsedJSON[getModeID].thumbnail, '_blank').focus();
}
function pressedList(val) {
    if (val == 0) {
        window.location.href = 'index.html'
    }
     if (val == 1) {
        
        
    }
}

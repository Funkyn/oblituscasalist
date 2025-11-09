const mainbox_ = document.getElementById("modebox")
const titleAsset = document.getElementById("title_")
const number = document.getElementById("number")
const gameversionAsset = document.getElementById("ver")
const tagsvariant  = document.getElementById("variant__")
const thumbnail_ = document.getElementById("thumbnailPrimary")
const selectedmode = 1


var test = 0
var toggle = 0




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
console.log(parsedJSON[0].title)


function youtube_parser(url3){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url3.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function applyAttributes(id___,title___,tags___,thumbnail___,gamever___) {
    thumbnail_.style.backgroundImage =  "url("+"https://img.youtube.com/vi/" + youtube_parser(thumbnail___) + "/0.jpg"+")"
    var text_to_change = titleAsset.childNodes[0];
    text_to_change.nodeValue = title___;
    text_to_change = number.childNodes[0];
    text_to_change.nodeValue = "#" + id___;
    text_to_change = tagsvariant.childNodes[0];
    text_to_change.nodeValue = tags___;
   text_to_change = gameversionAsset.childNodes[0];
   text_to_change.nodeValue = gamever___;
    console.log("https://img.youtube.com/vi/" + youtube_parser(thumbnail___) + "/sddefault.jpg")
   
    //$('thumbnailPrimary').css( "background-image",url("https://img.youtube.com/vi/" + youtube_parser(thumbnail___) + "/0.jpg"));
}
function tickChange(a) {
 // If the checkbox is checked, display the output text

 $("#chk").hide()
 $("#lding").show()
 
  toggle = toggle + 1
  if (toggle == 2) {
    toggle = 0
  }
  //console.log(toggle)
  displaymodes(true,toggle)
   for (let i = 1; i <= 28; i++) {
      if (parsedJSON[i].private == 0) {
        $("#" + i ).hide();
      }
      
    }
  setTimeout(function(){
    //do what you need here
    $("#chk").show()
    $("#lding").hide()
    for (let i = 1; i <= 28; i++) {
      if (parsedJSON[i].private == 0) {
        $("#" + i ).show()
      } else {
         $("#" + i ).hide()
      }
      
    }
}, 500);
}
function getID(btn) {
  console.log(btn.id)
  sessionStorage.setItem("modeID",btn.id)
  //window.location.href = 'details.html'
}
  //

function displaymodes(include,generate) {
  console.log("toggle is" + generate)
  for (let i = 1; i <= 28; i++) {
    
    
    if (generate == 3) {
      applyAttributes(i,parsedJSON[i].title,parsedJSON[i].tags,parsedJSON[i].thumbnail,parsedJSON[i].gamever);


          var containerClone = $('#modebox').clone().appendTo($('.container'));
          
          var uniqueID = i
          console.log(i)
          containerClone.attr('id',uniqueID)
    };
  }
    if (generate == 1) {
        console.log("aaaaaaaaaaaaa")
        test = 0
        for (let i = 1; i <= 28; i++) {
          
          if (parsedJSON[i].private == 1) {
            console.log("a/ " +  i)
            $("#" + i ).hide()
            
          } else {
            test = test + 1
            $("#" + i + " > #number").contents().first().replaceWith("#" + test);
            
            

          };
          $("#" + test).children("#main").text("bingus")
        }} else {
            console.log("a")
              console.log("aaabbbbbbbbbbbbbaaaaaaaaaa")
              test = 0
              for (let i = 1; i <= 28; i++) {
                $("#" + i + " > #number").contents().first().replaceWith("#" + i);
                if (parsedJSON[i].private == 1) {
                  console.log("b/ " +  i)
                  
                  
                } else {
                  test = test + 1
                 
                  
                  

                };
                 $("#" + i).show()
               
              }
        }
        
        
 
}
displaymodes(true,3)

$("#modebox").hide();
//mainbox_.remove(); //remove the temp mode



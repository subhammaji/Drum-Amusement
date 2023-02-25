// let button = document.getElementById("mybutton1");
// button.addEventListener("click", playSound);


// function playSound() {
//     const sound = new Audio();
//     // sound.play();
//     Audio.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
//   }
 
var noofdrum = document.querySelectorAll(".drum").length;

for(var i=0; i< noofdrum; i++)
{
    // document.getElementById("button/drum").style.color = "green";
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //    alert("Hey!!!Stop Fucking Click on Me");

       var buttonInnerHTML = this.innerHTML;
       makesound(buttonInnerHTML);
    
//        switch(buttonInnerHTML)
//        {
//         case "w":
//             var audio = new Audio("music1.mp3")
//             audio.play();
//             break;
//         case "a":
//             var audio = new Audio("music2.mp3")
//             audio.play();break;
//         case "s":
//             var audio = new Audio("music3.mp3")
//             audio.play();
//             break;
//         case "d":
//             var audio = new Audio("music4.mp3")
//             audio.play();
//             break;
//         case "j":
//             var audio = new Audio("music5.mp3")
//             audio.play();
//             break;
//         case "k":
//             var audio = new Audio("music6.mp3")
//             audio.play();
//             break;
//         case "l":
//             var audio = new Audio("music7.mp3")
//             audio.play();
//             break;

// default:
//     console.log(buttonInnerHTML);

//        }
    // this.style.color = blue;
    });


    //Now try for keyboard input keys which after pressing gives sound.
    
}


document.addEventListener("keypress", function(event)
{
    // alert("key was pressed.");
    makesound(event.key);
    
});
function makesound(key)
{
    switch(key)
    {
     case "w":
         var audio = new Audio("music1.mp3")
         audio.play();
         break;
     case "a":
         var audio = new Audio("music2.mp3")
         audio.play();break;
     case "s":
         var audio = new Audio("music3.mp3")
         audio.play();
         break;
     case "d":
         var audio = new Audio("music4.mp3")
         audio.play();
         break;
     case "j":
         var audio = new Audio("music5.mp3")
         audio.play();
         break;
     case "k":
         var audio = new Audio("music6.mp3")
         audio.play();
         break;
     case "l":
         var audio = new Audio("music7.mp3")
         audio.play();
         break;

      default:
        console.log(buttonInnerHTML);

    }
 // this.style.color = blue;
 }

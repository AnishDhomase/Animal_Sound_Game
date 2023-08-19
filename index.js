var numberOfSounds=document.querySelectorAll(".btn").length;


for(var i=0 ; i<numberOfSounds ; i++)
{

    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var innerHtml=this.textContent;
        makeSound(innerHtml);
    });
}



document.addEventListener("keydown",function(event){
    makeSound(event.key);
});



function makeSound(key){
    switch (key) {
    
        case "c":
            var sound= new Audio("cock.mp3");
            sound.play();
            break;

        case "d":
            var sound= new Audio("donkey.mp3");
            sound.play();
            break;

        case "h":
            var sound= new Audio("horse.mp3");
            sound.play();
            break;
    
        case "s":
            var sound= new Audio("sheep.mp3");
            sound.play();
            break;
    
        default:
            break;
    } 
}

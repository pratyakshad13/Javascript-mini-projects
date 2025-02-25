let start = document.getElementById('start');
let stop = document.getElementById('stop');



function randomColorGenerator(){
    let possibleValues = "0123456789ABCDEF";
    let ourColor ="#";
    for( let i = 0 ; i < 6 ; i++){
        ourColor += possibleValues[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = ourColor;
    
}

let ourFunc;

start.addEventListener('click',function(){
    ourFunction = setInterval(randomColorGenerator,1000);
})

stop.addEventListener('click',function(){
    clearInterval(ourFunction);
})

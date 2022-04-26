
let second = 0
let minutes = 0
let hours = 0
let interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    } else {
        return(digit)
    }
}

function start(){
   watch()
   interval = setInterval(watch,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    second = 0
    minutes = 0
    document.getElementById('watch').innerHTML = '00:00:00'
}


function watch() {
   second++
   if(second==60){
       min++
       sec=0
       if(minutes==60){
           minutes = 0
           hours++
       }
   }
   document.getElementById('watch').innerHTML = twoDigits(hours)+':'+ twoDigits(minutes)+':'+ twoDigits(second)
}
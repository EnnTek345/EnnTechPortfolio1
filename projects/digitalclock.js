function timer(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    document.getElementById('hour').innerHTML=h +  "<small>hr</small>";
    document.getElementById('min').innerHTML=m + "<small>min</small>";
    document.getElementById('sec').innerHTML=s + "<small>secs</small>";

    if(h>12){
        document.getElementById('hour').innerHTML=h-12 + "<small>hr</small>";
        meridian.innerHTML='<sup>pm</sup>'
    }
    else{
        meridian.innerHTML='<sup>am</sup>'
    }
}

setInterval(timer)
let cl = console.log


    let seconds = '00'
    let tens = '00'
    const timeTens = document.getElementById("tens")
    const timeSeconds = document.getElementById('seconds')
    const btnStart = document.getElementById('button-start')
    const btnStop = document.getElementById('button-stop')
    const btnReset = document.getElementById('button-reset')
    let Interval;

    btnStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }

    btnStop.onclick = function(){
        clearInterval(Interval)
    }


    btnReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        timeTens.innerHTML = tens;
        timeSeconds.innerHTML = seconds
    }



    function startTimer(){
       tens++;
       if(tens <= 9){
        timeTens.innerHTML = "0" + tens
       }
       if(tens > 9) {
        timeTens.innerHTML = tens
       }
       if(tens >99){
        cl("seconds")
        seconds++
        timeSeconds.innerHTML = "0" + seconds
        tens = 0
        timeTens.innerHTML = "0" + 0
       }
       if(seconds > 9){
        timeSeconds.innerHTML = seconds
       }
    }





























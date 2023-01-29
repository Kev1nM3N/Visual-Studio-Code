function video (seconds){
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1){
        timerMinutes = `0` + timerMinutes
    }

    if (timerSeconds.toString().length === 1){
        timerSeconds = `0` + timerSeconds
    }

    return timerMinutes + `:` + timerSeconds
}

console.log(video(300))
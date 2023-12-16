

let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
// let twelveH = document.querySelector("#twelveH")
// let twentyFourH = document.querySelector("#twentyFourH")

// let is24hr = true;
// let is12hr = false;


// function buttonSelected() {
//     if (is24hr) {
//         twentyFourH.style.backgroundColor = "rgba(0, 128, 0, 0.845)"
//         twelveH.style.backgroundColor = "rgb(131, 128, 128)"
//     }
//     else if (is12hr) {
//         twelveH.style.backgroundColor = "rgba(0, 128, 0, 0.845)"
//         twentyFourH.style.backgroundColor = "rgb(131, 128, 128)"

//         updateClock24Hrs()
//         setInterval(updateClock24Hrs, 1000)
//     }
// }

// twelveH.addEventListener('click', () => {


// })

// twentyFourH.addEventListener('click', () => {

//     twentyFourH.style.backgroundColor = "rgba(0, 128, 0, 0.845)"
//     twelveH.style.backgroundColor = "rgb(131, 128, 128)"
//     updateClock24Hrs()
//     setInterval(updateClock, 1000)
// })


function updateClock24Hrs() {
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let second = currentTime.getSeconds()

    if (hour < 10) {
        hours.innerHTML = `0${hour}`
    }
    else {
        hours.innerHTML = hour
    }

    if (minute < 10) {
        minutes.innerHTML = `0${minute}`
    }
    else {
        minutes.innerHTML = minute
    }

    if (second < 10) {
        seconds.innerHTML = `0${second}`
    }
    else {
        seconds.innerHTML = second
    }
}

updateClock24Hrs()
setInterval(updateClock24Hrs, 1000)
// this will repeatedly run the update clock function after every once second.
// buttonSelected()


let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")


function updateClock() {
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let second = currentTime.getSeconds()

    hours.innerHTML = hour
    minutes.innerHTML = minute
    seconds.innerHTML = second
}

updateClock()
setInterval(updateClock, 1000) // this will repeatedly run the update clock fucntion after every once second.

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const chrismasDate = '25 December 2021';

function countdown(){
    const xMasDate = new Date(chrismasDate);
    const currentDate = new Date();

    const totalSeconds = (xMasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24 ;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

// initial 
countdown();

setInterval(countdown, 1000);

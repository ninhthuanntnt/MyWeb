let startLoveDate = moment("2022/05/03 00:00:00");

let loveCounterYearEl = document.querySelector("#love-counter-year");
let loveCounterMonthEl = document.querySelector("#love-counter-month");
let loveCounterWeekEl = document.querySelector("#love-counter-week");
let loveCounterDayEl = document.querySelector("#love-counter-day");
let loveCounterHourEl = document.querySelector("#love-counter-hour");
let loveCounterMinuteEl = document.querySelector("#love-counter-minute");
let loveCounterSecondEl = document.querySelector("#love-counter-second");
let totalLoveDaysEl = document.querySelector("#total-love-days");
let startLoveDayEl = document.querySelector("#start-love-date");

startLoveDayEl.textContent = startLoveDate.format("YYYY-MM-DD");

// setInterval(() => {
//     let currentDate = moment("2023/05/04 14:00:00");
//     let dateDiff = currentDate.diff(startLoveDate);
//     let durationInLove = moment.duration(dateDiff);
//
//     let yearInLove = durationInLove.get('year');
//     let monthInLove = durationInLove.get('month');
//     let weekInLove = durationInLove.get('week');
//     let dayInLove = durationInLove.get('day') - weekInLove * 7;
//     let hourInLove = durationInLove.get('hour');
//     let minuteInLove = durationInLove.get('minute');
//     let secondInLove = durationInLove.get('second');
//
//     loveCounterYearEl.textContent = yearInLove;
//     loveCounterMonthEl.textContent = monthInLove;
//     loveCounterWeekEl.textContent = weekInLove;
//     loveCounterDayEl.textContent = "" + dayInLove;
//     loveCounterHourEl.textContent = hourInLove;
//     loveCounterMinuteEl.textContent = minuteInLove;
//     loveCounterSecondEl.textContent = secondInLove;
//
//     totalLoveDaysEl.textContent = Math.floor(dateDiff / 86400000);
// }, 500);


// Idea was replace by using moment() =))
//

setInterval(() => {
    let currentDate = moment();
    let yearInLove = currentDate.get('year') - startLoveDate.get('year');
    let monthInLove = 0;
    let weekInLove = 0;
    let dayInLove = 0;
    let hourInLove = 0;
    let minuteInLove = 0;
    let secondInLove = 0;


    if (startLoveDate.get('month') > currentDate.get('month')) {
        yearInLove -= 1;
        monthInLove = (12 - startLoveDate.get('month')) + currentDate.get('month');
    } else {
        monthInLove = currentDate.get('month') - startLoveDate.get('month');
    }


    let startLoveDateDay = startLoveDate.get('date');
    let currentDateDay = currentDate.get('date');
    let remainDiff = 0;

    if (currentDateDay < startLoveDateDay) {
        if (monthInLove == 0) {
            yearInLove -= 1;
            monthInLove = 11;
        }

        let tempStartDate = moment(currentDate).subtract(1, 'months');
        tempStartDate.date(startLoveDateDay)
        tempStartDate.hour(startLoveDate.get('hour'))
        tempStartDate.minute(startLoveDate.get('minute'))
        tempStartDate.second(startLoveDate.get('second'))

        let dateDiff = currentDate.diff(tempStartDate);
        dayInLove = dateDiff / 86400000;

        remainDiff = dateDiff - dayInLove;
    } else {
        let tempStartDate = moment(currentDate);
        tempStartDate.date(startLoveDateDay)
        tempStartDate.hour(startLoveDate.get('hour'))
        tempStartDate.minute(startLoveDate.get('minute'))
        tempStartDate.second(startLoveDate.get('second'))

        let dateDiff = currentDate.diff(tempStartDate);
        dayInLove = dateDiff / 86400000;

        remainDiff = dateDiff - dayInLove;
    }

    let remainDuration = moment.duration(remainDiff);

    dayInLove = Math.floor(dayInLove);
    hourInLove = remainDuration.get('hour')
    minuteInLove = remainDuration.get('minute')
    secondInLove = remainDuration.get('second')
    weekInLove = Math.floor(dayInLove / 7);
    dayInLove = dayInLove - weekInLove * 7;

    loveCounterYearEl.textContent = yearInLove;
    loveCounterMonthEl.textContent = monthInLove;
    loveCounterWeekEl.textContent = weekInLove;
    loveCounterDayEl.textContent = "" + dayInLove;
    loveCounterHourEl.textContent = hourInLove;
    loveCounterMinuteEl.textContent = minuteInLove;
    loveCounterSecondEl.textContent = secondInLove;
    totalLoveDaysEl.textContent = Math.floor(currentDate.diff(startLoveDate) / 86400000);
}, 500);
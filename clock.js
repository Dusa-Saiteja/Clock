
console.log(window.getHours);

function displayDateAndTime(){

    let curDateObj = new Date();

    let curHours = curDateObj.getHours();
    if(curHours>12){
        document.getElementById("slot").innerHTML = "PM"
    }
    else{
        document.getElementById("slot").innerHTML = "AM"
    }

    
    let curMins = curDateObj.getMinutes();
    let curSecs = curDateObj.getSeconds();

    let curDate= curDateObj.getDate();
    let curMonth= curDateObj.getMonth()+1;
    let curYear = curDateObj.getFullYear();

    let curDay = curDateObj.getDay();

    switch(curDay){
        case 0 : curDay = "SUNDAY";
        break;

        case 1 : curDay = "MONDAY";
        break;

        case 2 : curDay = "TUESDAY";
        break;

        case 3 : curDay = "WEDNESDAY";
        break;

        case 4 : curDay = "THURSDAY";
        break;

        case 5 : curDay = "FRIDAY";
        break;

        case 6 : curDay = "SATURDAY";
        break;

    }

    document.getElementById("hours").innerHTML = curHours;
    document.getElementById("mins").innerHTML = curMins;
    document.getElementById("secs").innerHTML = curSecs;

    document.getElementById("date").innerHTML =  curDate;
    document.getElementById("month").innerHTML = curMonth;
    document.getElementById("year").innerHTML = curYear;

    document.getElementById("day").innerHTML = curDay;


}
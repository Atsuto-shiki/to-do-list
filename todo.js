const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const showCountdown = document.getElementsByClassName('realtime_countdown');
const currentTime = document.getElementsByClassName('current_time');
let data = [];
let currentNum = 1;
function updata() {
    console.log(data);
    for (let i = 0; i < data.length; i++ ) {
        console.log( data[i] );

    };
};
setInterval(updata,1000);


const addTasks = (task) => {
    const innerHTML = showCountdown;
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    const countItem = document.createElement('div');
    const deleteButton = document.createElement('button');
    showItem.innerHTML = task;
    showItem.appendChild(countItem);
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
    showItem.appendChild(deleteButton);
    countItem.innerHTML =
    `<p class="realtime_countdown">
      <input type="text" id="userYear" maxlength="4">年<br>
      <input type="text" id="userMonth" maxlength="2">月<br>
      <input type="text" id="userDate" maxlength="2">日<br>
      <input type="text" id="userHour" maxlength="2">時<br>
      <input type="text" id="userMin" maxlength="2">分<br>
      <input type="text" id="userSec" maxlength="2">秒<br>
      <input type="button" id="countButton" value="上記の日時までカウントダウンする" onclick="showCountdown();">
    </p>`
    countButton.addEventListener('click', evt => {
        evt.preventDefault();
        const listYear = countItem.querySelector("#userYear");
        const listMonth = countItem.querySelector("#userMonth");
        const listDate = countItem.querySelector("#userDate");
        const listHour = countItem.querySelector("#userHour");
        const listMin = countItem.querySelector("#userMin");
        const listSec = countItem.querySelector("#userSec");
        countItem.id = currentNum;
        data.push({
            id: currentNum,
            keepYear: listYear.value,
            keepMonth: listMonth.value,
            keepDate: listDate.value,
            keepHour: listHour.value,
            keepMin: listMin.value,
            keepSec: listSec.value
        });
        currentNum++;
        countStart(countItem);
    });
};


taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});

window.onload = function() {
    const showClock1 = () => {
        var nowdate = new Date();
        const nowYear = nowdate.getFullYear();
        const nowMon = nowdate.getMonth() + 1;
        const nowDate = nowdate.getDate();
        const nowHour = nowdate.getHours();
        const nowMin = nowdate.getMinutes();
        const nowSec = nowdate.getSeconds();
        let msg = nowYear + "年" + "   " + nowMon + "/" + nowDate + "  " + nowHour + "時"+ nowMin + "分" + nowSec + "秒";
        const currentDiv = document.getElementById("div1");
        currentDiv.innerHTML = msg;
        console.log(msg);
    };
    setInterval(showClock1,1000);
}

'use strict';

function countdown(due){
    const now = new Date();
    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest/1000) % 60;
    const min = Math.floor(rest/1000/60) % 60;
    const hours = Math.floor(rest/1000/60/60) % 24;
    const count = [hours, min, sec];
    return count;
}

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));


function recalc() {
    console.log(countdown(goal));
    const counter = countdown(goal);
    const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒`;
    document.getElementById('timer').textContent = time;
    refresh();
}

function refresh() {
    setTimeout(recalc, 1000);
}

recalc();

const countStart = (countItem) => {
    const listYear = countItem.querySelector("#userYear");
    const valueYear = listYear.value;
    const listMonth = countItem.querySelector("#userMonth");
    const valueMonth = listMonth.value;
    const listDate = countItem.querySelector("#userDate");
    const valueDate = listDate.value;
    const listHour = countItem.querySelector("#userHour");
    const valueHour = listHour.value;
    const listMin = countItem.querySelector("#userMin");
    const valueMin = listMin.value;
    const listSec = countItem.querySelector("#userSec");
    const valueSec = listSec.value;
    let today = new Date();
    const purpose = new Date(valueYear, valueMonth - 1, valueDate, valueHour, valueMin, valueSec);
    const object = purpose - today;
    const objectSec = Math.floor(object/1000) % 60;
    const objectMin = Math.floor(object/1000/60) % 60;
    const objectHour = Math.floor(object/1000/60/60) % 24;
    const objectDate = Math.floor(object/1000/60/60/24) % 30;
    const objectMonth = Math.floor(object/1000/60/60/24/30) % 12;
    const objectYear = Math.floor(object/1000/60/60/24/30/12);
    countItem.innerHTML = `残り時間  ${objectYear}年 ${objectMonth}ヶ月 ${objectDate}日 ${objectHour}時間${objectMin}分${objectSec}秒`
};


const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
};








const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const showCountdown = document.getElementsByClassName('realtime_countdown');
const currentTime = document.getElementsByClassName('current_time');

const addTasks = (task) => {
    const innerHTML = showCountdown;
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    const countItem = document.createElement('div');
    const deleteButton = document.createElement('button');
    showItem.appendChild(countItem);
    showItem.appendChild(deleteButton);
    listItem.innerHTML = task;
    countItem.innerHTML =
    `<p class="realtime_countdown">
      <input type="text" id="userYear" maxlength="2">年<br>
      <input type="text" id="userMonth" maxlength="2">月<br>
      <input type="text" id="userDate" maxlength="2">日<br>
      <input type="text" id="userHour" maxlength="2">時<br>
      <input type="text" id="userMin" maxlength="2">分<br>
      <input type="text" id="userSec" maxlength="2">秒<br>
      <input type="button" id="countButton" value="上記の日時までカウントダウンする" onclick="showCountdown();">
    </p>`
    var got_element = countItem.querySelector("#countButton");
    const countButton = got_element;
    countButton.addEventListener('click', evt => {
        evt.preventDefault();
        countStart(countItem);
        const list_elementYear = countItem.querySelector("#userYear");
        const list_elementMonth = countItem.querySelector("#userMonth");
        const list_elementDate = countItem.querySelector("#userDate");
        const list_elementHour = countItem.querySelector("#userHour");
        const list_elementMin = countItem.querySelector("#userMin");
        const list_elementSec = countItem.querySelector("#userSec");
        const countDown = list_elementYear.querySelector("#countButton");

    });
    listItem.appendChild(countItem);
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
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
    const list_elementYear = countItem.querySelector("#userYear");
    const valueElementYear = list_elementYear.value;
    const list_elementMonth = countItem.querySelector("#userMonth");
    const valueElementMonth = list_elementMonth.value;
    const list_elementDate = countItem.querySelector("#userDate");
    const valueElementDate = list_elementDate.value;
    const list_elementHour = countItem.querySelector("#userHour");
    const valueElementHour = list_elementHour.value;
    const list_elementMin = countItem.querySelector("#userMin");
    const valueElementMin = list_elementMin.value;
    const list_elementSec = countItem.querySelector("#userSec");
    const valueElementSec = list_elementSec.value;
    countItem.innerHTML = `${valueElementYear}年${valueElementMonth}月${valueElementDate}日${valueElementHour}時間${valueElementMin}分${valueElementSec}秒`;
};

const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
};








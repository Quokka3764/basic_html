const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")
const goButton = document.getElementById("goButton");
const stopButton = document.getElementById("stopButton");


let intervalId = 0
// 시계가 움직이는 동작을 만들었을때 그 동작에 대한 ID를 저장하는변수
// 이 동작에 대한 ID를 저장하면 이 ID를 토대로 동작을 멈추게도 할수있고 다시 시작하게도 가능

const getTime = () => {
    let now = new Date();
    timeDiv.textContent = now;
    let year = now.getFullYear();
    let month = now.getMonth() + 1; //0번째부터 시작하기때문에 +1을 해줘야 1월부터 카운트됨
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    month = month < 10 ? `0${month}` : month
    year = year < 10 ? `0${year}` : year
    date = date < 10 ? `0${date}` : date
    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second

    todayDiv.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`
};


function startClock(){
    intervalId = getTime();
    intervalId = setInterval(getTime, 1000);
    console.log(intervalId);
};

function stopClock(){
    clearInterval(intervalId);
    
};

goButton.onclick = function (){
    startClock();
};

stopButton.onclick = function(){
    stopClock();
};

startClock();

// function 다시 정리하기
// return 썻을때 뭐가 달라지는지 다시 알아오기.
// return 어디에 필요한지, 안써도 되는지.
//식별자
//setTimeOut setInterval 사용법 제대로 알아오기 (로직 전부 이해해오라는뜻 아님).
//콜백함수는 정의부터 모르는것까지 제대로 알아서 캡쳐해오자.
//배열의 index를 접근하는 방법 & swap하는 테크닉이 필요하다.

//function 공부한 내용 유튜브내용 갭쳐 & 정리해서 개념정립하기. 그리고 형한테 알려주기.

const start = document.getElementById('start');
const rezult = document.getElementById('rezult');
const allRezult = document.getElementById('all-rezult');
const clear = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const clickMe = document.getElementById('click-me');

// Get nickname and validate it
const playStart = start.addEventListener('click', function () {
  const nickname = document.getElementById('nickname').value;
  try {
    if (!nickname) {
      throw new Error();
    } else {
      clickCount(nickname);
    }
  } catch (err) {
    alert('Emty nickname');
  }
});

// Count clicks
let clickCount = function (uname) {
  let click = 0;
  let countTime = 5000;
  clickMe.addEventListener('click', function () {
    click += 1;
  });
  setTimeout(function () {
    alert(`Clicked ${click} times`);
    let maxRes = sessionStorage.getItem('sessionClicks');
    if (click > maxRes) {
      sessionStorage.setItem('sessionClicks', `${click}`);
      localStorage.setItem(`${uname}`, `${click}`);
    }
  }, countTime);

  return clickCount;
};

// Best rezult
let bestRezult = function bestSessionResults() {
  if (sessionStorage.length === 0) {
    return alert(`Best result is: 0`);
  } else {
    let sessionBestRes = sessionStorage.getItem('sessionClicks');
    return alert(`Best result is: ${sessionBestRes}`);
  }
};
rezult.addEventListener('click', bestRezult);

// Best result for all time
let allBestRezult = function allLocalResults() {
  if (localStorage.length === 0) {
    return alert(`Best result for the whole time is: 0`);
  } else {
    let scores = [];
    for (let i = 0; localStorage.length > i; i++) {
      scores.push(parseInt(localStorage.getItem(localStorage.key(i))));
    }

    let maxScoreNumb = Math.max.apply(null, scores);
    let maxScoreName = localStorage.key(scores.indexOf(maxScoreNumb));

    return alert(
      `Best result for the whole time is: ${maxScoreNumb} by ${maxScoreName}`
    );
  }
};
allRezult.addEventListener('click', allBestRezult);

// Clear Best rezult
let clearResult = function clearSessionResult() {
  sessionStorage.clear();
  return alert(`Best result is cleared`);
};
clear.addEventListener('click', clearResult);

// Best result for all time
let clearAllResult = function clearLocalResult() {
  localStorage.clear();
  return alert(`Best result for the whole time is cleared`);
};
clearAll.addEventListener('click', clearAllResult);

let timer = 1;
const timeTip = document.querySelector(".time-tip");
const interval = setInterval(function () {
  timeTip.innerHTML = `${timer}秒后自动进入面试环节...`;
  timer--;
  if (timer === -1) {
    clearInterval(interval);
    location.href = "/copywriting";
  }
}, 1000);

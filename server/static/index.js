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
window.addEventListener(
  "hashchange",
  function (res) {
    const hash = location.hash.substring(1);
    switch (hash) {
      case "/copywriting":
        $.ajax({
          url: "http://127.0.0.1:3300/copywriting/index",
          method: "GET",
          success: function (copyWritingData) {
            $.ajax({
              url: "./pages/copywritingCopy.html",
              method: "GET",
              dataType: "html",
              success: function (data) {
                document.body.innerHTML = data;
                $(".copywriting").html(copyWritingData);
              },
            });
          },
        });

        break;
      case "/accept":
        $.ajax({
          url: "./pages/accept.html",
          method: "GET",
          dataType: "html",
          success: function (data) {
            document.body.innerHTML = data;
          },
        });
        break;
      case "/finished":
        $.ajax({
          url: "./pages/finished.html",
          method: "GET",
          dataType: "html",
          success: function (data) {
            document.body.innerHTML = data;
          },
        });
        break;
      default:
        break;
    }
  },
  false
);
function handleClick() {
  window.location.href = "#/accept";
}
function acceptHandle(e) {
  $(e).attr("disabled", true);
  $(e).html("提交中...");

  const data = {};
  const requiredResult = Array.from($("#accept-form")[0]).every((item) => {
    if (!$(item).val()) {
      $(item).addClass("required");
      return false;
    }
    data[$(item).attr("name")] = $(item).val();
    return true;
  });
  if (requiredResult) {
    $.ajax({
      url: "http://127.0.0.1:3300/acceptChallenge/postForm",
      method: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (data) {
        $(e).attr("disabled", false);
        $(e).html("提交成功");
        $.ajax({
          url: "./components/tip.html",
          method: "GET",
          dataType: "html",
          success: function (tipDom) {
            $("body").append(tipDom);
            let message = data.message;
            if (data.code === 200) {
              $(".globl-tip").addClass("success");
              message += "，提交成功,3秒后自动跳转到完成挑战页";
            } else if (data.code === 201) {
              $(".globl-tip").addClass("error");
              message = `
                  <span>${message}</span>
                  <a href="#/finished">点击跳转到挑战页面</a>
                `;
            }
            $(".globl-tip").html(message);
            $(".globl-tip").show();
            const timer = setTimeout(() => {
              $(".globl-tip").hide();
              if (data.code === 200) {
                window.location.href = "#/finished";
              }
            }, 3000);
          },
        });
      },
    });
  }
}

function finishedHandle(e) {
  $(e).attr("disabled", true);
  $(e).html("提交中...");
  const data = {};
  const requiredResult = Array.from($("#finished-form")[0]).every((item) => {
    if (!$(item).val()) {
      $(item).addClass("required");
      return false;
    }
    data[$(item).attr("name")] = $(item).val();
    return true;
  });
  if (requiredResult) {
    $.ajax({
      url: "http://127.0.0.1:3300/finished/postForm",
      method: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (data) {
        $(e).attr("disabled", false);
        $(e).html("挑战成功");
        $.ajax({
          url: "./components/tip.html",
          method: "GET",
          dataType: "html",
          success: function (tipDom) {
            $("body").append(tipDom);
            if (data.code === 200) {
              $(".globl-tip").addClass("success");
            } else if (data.code === 201) {
              $(".globl-tip").addClass("error");
            }
            $(".globl-tip").html(data.message);
            $(".globl-tip").show();
            const timer = setTimeout(() => {
              $(".globl-tip").hide();
              clearTimeout(timer);
            }, 3000);
          },
        });
      },
    });
  }
}

function inputChange(e) {
  if ($(e).val()) {
    $(e).removeClass("required");
  }
}
function emailChange(e) {
  const val = $(e).val();
  const reg = /^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if (val) {
    if (reg.test(val)) {
      $(e).removeClass("required");
      $(".required-tip").hide();
    } else {
      $(".required-tip").show();
      $(e).addClass("required");
    }
  }
}

// $.ajax({
//   url: "http://127.0.0.1:3300/acceptChallenge/postForm",
//   method: "POST",
//   data: JSON.stringify({
//     user_id: "555555",
//     email: "123456@qq.com",
//   }),
//   contentType: "application/json",
//   success: function (data) {
//     console.log(data);
//   },
// });

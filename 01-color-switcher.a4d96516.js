const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,timerColorChange=setInterval(e,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,clearInterval(timerColorChange)}));
//# sourceMappingURL=01-color-switcher.a4d96516.js.map

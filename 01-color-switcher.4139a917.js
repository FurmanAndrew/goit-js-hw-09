!function(){var t,n={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function e(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}n.startBtn.addEventListener("click",(function(){n.startBtn.disabled=!0,t=setInterval(e,1e3)})),n.stopBtn.addEventListener("click",(function(){n.startBtn.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.4139a917.js.map

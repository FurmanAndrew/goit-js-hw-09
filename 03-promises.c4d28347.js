!function(){function e(e,n){var t=Math.random()>.3;return new Promise((function(o,u){setTimeout((function(){t&&o("Fulfilled promise ".concat(e," in ").concat(n,"ms")),u("Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}var n={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};n.form.addEventListener("submit",(function(t){t.preventDefault();for(var o=Number(n.delay.value),u=Number(n.step.value),c=Number(n.amount.value),r=[],a=o,m=1;m<=c;m+=1){var i=e(m,a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));r.push(i),a+=u}}))}();
//# sourceMappingURL=03-promises.c4d28347.js.map
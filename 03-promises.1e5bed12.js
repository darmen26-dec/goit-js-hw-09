!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("6JpON");function a(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=n.currentTarget.elements,r=t.delay,o=t.step,u=t.amount;if(r.value<0||o.value<0||u.value<0)e(i).Notify.warning("Please enter correct number!");else for(var l=0;l<u.value;l++){var c=l+1,f=Number(r.value)+o.value*l;a(c,f).then((function(n){var t=n.position,r=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.position,r=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))}))}n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.1e5bed12.js.map
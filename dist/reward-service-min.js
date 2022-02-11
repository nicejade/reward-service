/*!
 * reward-service-min.js v1.1.0
 * (c) 2020-2022  nicelinks.site
 */
"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t):e}function o(n){var t="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,o)}function o(){return r(n,arguments,l(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a(o,n)})(n)}function r(n,t,e){return(r=i()?Reflect.construct:function(n,t,e){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(n,o));return e&&a(r,e.prototype),r}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var c=document.createElement("template"),s=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(u,o(HTMLElement));var r,s,d,p,f,m=(r=u,s=i(),function(){var n,t=l(r);if(s){var o=l(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return e(this,n)});function u(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),n=m.call(this),c.innerHTML='\n  <style>\n  #reward-modal-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n    transform: scale(0.88);\n    will-change: transform;\n    margin: 1rem auto;\n  }\n  .modal-div {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 50%;\n    max-width: 360px;\n    min-width: 300px;\n    border: 1px solid #e9e9e9;\n    border-radius: 8px;\n    box-shadow: 0 0 5px #999;\n    background:#FFF;\n    padding: 10px;\n    text-align: center;\n  }\n  .reward-title {\n    margin: 0;\n    font-size: 1.8rem;\n  }\n  @media phonemax{\n    .modal-div{\n      min-width: 320px;\n    }\n  }\n  .reward-img-div{\n    width: 50%;\n    height: 50%;\n    margin: auto;\n  }\n  .reward-qr-img{\n    display: block;\n    width: 0%;\n    min-width: 1px !important;\n    height: 0%;\n    border: none;\n    transition:width 2s, height 2s;\n    -moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */\n    -webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */\n    -o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */\n  }\n  .reward-img-div .active{\n    display: block;\n    width: 100%;\n    height: 50%;\n    border-radius: 1em;\n    border: 1px solid #f22;\n  }\n  .reward-tip, .reward-thx{\n    margin: 5px auto;\n  }\n  .reward-thx{\n    color: #999999;\n  }\n  .reward-tip{\n    text-align: center;\n    color: #d1d1d1;\n    font-size: 12px;\n    line-height: 18px;\n  }\n  .close-modal{\n      position: absolute;\n      right: 5%;\n      top: 3%;\n      background-size: 100% 100%;\n      width: 1.314rem;\n      height: 1.314rem;\n  }\n  .close-modal:before,.close-modal:after{\n      position: absolute;\n      width: 141.41%;\n  }\n  .close-modal:before{\n      content: \'\';\n      top: 0;\n      display: block;\n      height: 0;\n      border-bottom: 2px solid #111111;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      -webkit-transform-origin: left;\n  }\n  .close-modal:after{\n      content: \'\';\n      top: 0;\n      left: 100%;\n      display: block;\n      height: 0;\n      border-bottom: 2px solid #111111;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      -webkit-transform-origin: left;\n  }\n  .hide{\n    display: none;\n  }\n  .platform-choice {\n    width: 320px;\n    margin: 10px auto 0;\n  }\n  \n  .platform-choice .platform-item {\n    width: 160px;\n    height: 28px;\n    position: relative;\n    float: left;\n  }\n  \n  .platform-choice .platform-item-single {\n    float: none;\n    margin: 0 auto;\n  }\n  \n  .platform-choice .platform-item .platform-radio {\n    position: absolute;\n    opacity: 0;\n    z-index: 10;\n    left: -3px;\n    top: 4px;\n  }\n  \n  .platform-choice .platform-item .platform-radio-box {\n    width: 16px;\n    height: 16px;\n    background: url(\'https://image.nicelinks.site/radio2.jpeg\');\n    display: block;\n    float: left;\n    margin-right: 15px;\n  }\n  \n  .platform-choice .platform-item .platform-checked {\n    background: url(\'https://image.nicelinks.site/radio1.jpeg\');\n  }\n  \n  .platform-choice .platform-logo {\n    width: 112px;\n    height: 28px;\n    display: inline-block;\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    float: left;\n  }\n\n  .platform-choice .alipay {\n    background-image: url(\'https://image.nicelinks.site/alipay.jpeg\');\n  }\n  \n  .platform-choice .weichat {\n    background-image: url(\'https://image.nicelinks.site/wechat.jpeg\');\n  }  \n  </style>\n \n  <div id="reward-modal-container">\n    <div class="modal-div">\n      <h1 class=\'reward-title\'>倾情打赏</h1>\n      <a href="javascript:;" aria-label="Close Modal" class="close-modal" id="close-modal"></a>\n      <p class="reward-thx">感谢您的支持，我将继续努力！</p>\n      <div class="reward-img-div">\n        <img class="reward-qr-img weichat active" src="//image.nicelinks.site/weixin_pay.jpg" alt="微信赞助" />\n        <img class="reward-qr-img alipay" src="//image.nicelinks.site/zhifubao_pay.jpg" alt="支付宝赞助" />\n      </div>\n      <div id="reward-jade-moudle" node-type="platform-choice" class="platform-choice clearfix">\n        <div class="platform-item">\n          <span node-type="check-platform" data-id="weichat" class="platform-radio-box platform-checked"></span>\n          <span class="platform-logo weichat"></span>\n        </div>\n        <div class="platform-item">\n          <span node-type="check-platform" data-id="alipay" class="platform-radio-box"></span>\n          <span class="platform-logo alipay"></span>\n        </div>\n      </div>\n      <p class="reward-tip">\n        提醒：打赏金额将直接进此方账号，无法退款，请您谨慎操作。\n      </p>\n    </div>\n  </div>\n',n._shadowRoot=n.attachShadow({mode:"closed"}),n._shadowRoot.appendChild(c.content.cloneNode(!0)),n.initEvents(),n}return d=u,(p=[{key:"initEvents",value:function(){var n=this;this._shadowRoot.querySelector("#close-modal").onclick=this.onCloseClick.bind(this),this.radioBoxs=this._shadowRoot.querySelectorAll(".platform-radio-box"),this.radioBoxs.forEach((function(t){t.onclick=n.onRadioBoxClick.bind(n)})),this.rewardModal=this._shadowRoot.querySelector("#reward-modal-container")}},{key:"onCloseClick",value:function(n){this.rewardModal.style.display="none"}},{key:"onRadioBoxClick",value:function(n){console.log("月黑见渔灯，孤光一点萤：%c 再接再厉。","font-weight: 600;color: #20a0ff");var t=n.currentTarget.dataset.id;this._shadowRoot.querySelectorAll(".reward-qr-img").forEach((function(n){n.classList.remove("active")})),this._shadowRoot.querySelector(".reward-img-div .".concat(t)).classList.add("active"),this.radioBoxs.forEach((function(n){n.classList.remove("platform-checked")})),n.currentTarget.className="platform-radio-box platform-checked"}}])&&t(d.prototype,p),f&&t(d,f),u}();window.customElements.define("reward-service",s);

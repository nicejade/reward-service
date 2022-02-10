const template = document.createElement('template')

const getInnerHTML = that => {
  return `
  <style>
  #reward-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
    z-index:9999;
    color: #130c0e;
  }
  .modal-div {
    width: 46%;
    border: 1px solid #e9e9e9;
      border-radius: 8px;
      position: fixed;
      box-shadow: 0 0 5px #999;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
      background:#FFF;
    padding: 20px;
    text-align: center;
  }
  @media phonemax{
    .modal-div{
      min-width: 320px;
    }
  }
  .reward-img-div{
    width: 50%;
    height: 50%;
    margin: auto;
  }
  .reward-qr-img{
    display: block;
    width: 0%;
    min-width: 1px !important;
    height: 0%;
    border: none;
    transition:width 2s, height 2s;
    -moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
    -webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
    -o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */
  }
  .reward-img-div .active{
    display: block;
    width: 100%;
    height: 50%;
    border-radius: 1em;
    border: 1px solid #f22;
  }
  .reward-text-div, .reward-tip-p, .reward-img-div, .reward-thx-p{
    margin-top: 15px;
  }
  .reward-thx-p{
    color: #999;
  }
  .reward-tip-p{
    text-align: center;
    color: #d1d1d1;
    font-size: 12px;
    line-height: 18px;
  }
  #open-reward-modal{
    display: block;
    margin: 0% auto 1% auto;
    width: 7em;
      height: 2.3em;
      font-size: 1.2em;
      line-height: 2.3;
      color: #f2f2f2;
    background-color: #ed1941;
    text-decoration: none;
    text-align: center;
    border-radius: 2em;
  }
  #open-reward-modal:hover{
    transition: all 1s;
    color: #ffd400;
    background-color: #f00;
  }
  .close-modal{
      position: absolute;
      right: 5%;
      top: 3%;
      background-size: 100% 100%;
      width: 1.5em;
      height: 1.5em;
  }
  .close-modal:before,.close-modal:after{
      position: absolute;
      width: 141.41%;
  }
  .close-modal:before{
      content: '';
      top: 0;
      display: block;
      height: 0;
      border-bottom: 2px solid #111111;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform-origin: left;
  }
  .close-modal:after{
      content: '';
      top: 0;
      left: 100%;
      display: block;
      height: 0;
      border-bottom: 2px solid #111111;
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      -webkit-transform-origin: left;
  }
  .hide{
    display: none;
  }

  .platform-choice {
    width:320px;
    margin: 25px auto 0;
  }
  
  .platform-choice .platform-item {
    width: 160px;
    height: 28px;
    position: relative;
    float: left;
  }
  
  .platform-choice .platform-item-single {
    float: none;
    margin: 0 auto;
  }
  
  .platform-choice .platform-item .platform-radio {
    position: absolute;
    opacity: 0;
    z-index: 10;
    left: -3px;
    top: 4px;
  }
  
  .platform-choice .platform-item .platform-radio-box {
    width: 16px;
    height: 16px;
    background: url('https://lovejade.oss-cn-shenzhen.aliyuncs.com/radio2.jpg');
    display: block;
    float: left;
    margin-top: 5px;
    margin-right: 14px;
  }
  
  .platform-choice .platform-item .platform-checked {
    background: url('https://lovejade.oss-cn-shenzhen.aliyuncs.com/radio1.jpg');
  }
  
  .platform-choice .platform-logo {
    width: 112px;
    height: 28px;
    display: inline-block;
    background-position: 0 0;
    background-repeat: no-repeat;
    float: left;
  }

  .platform-choice .alipay {
    background-image: url('https://lovejade.oss-cn-shenzhen.aliyuncs.com/alipay.jpg');
  }
  
  .platform-choice .weichat {
    background-image: url('https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat.jpg');
  }  
  </style>
 
  <a href="javascript:;" aria-label="Open Reward" id="open-reward-modal">打赏</a>
  <div id="reward-modal-container">
      <div class="modal-div">
        <h1 class='reward-title-h1'>倾情打赏</h1>
        <a href="javascript:;" aria-label="Close Modal" class="close-modal" id="close-modal"></a>
        <p class="reward-thx-p">感谢您的支持，我将继续努力！</p>
        <div class="reward-img-div">
          <img class="reward-qr-img weichat active" src="//image.nicelinks.site/weixin_pay.jpg" alt="微信赞助" />
          <img class="reward-qr-img alipay" src="//image.nicelinks.site/zhifubao_pay.jpg" alt="支付宝赞助" />
        </div>

        <div id="reward-jade-moudle" node-type="platform-choice" class="platform-choice clearfix">
          <div class="platform-item">
            <span node-type="check-platform" data-id="weichat" class="platform-radio-box platform-checked"></span>
            <span class="platform-logo weichat"></span>
          </div>
          <div class="platform-item">
            <span node-type="check-platform" data-id="alipay" class="platform-radio-box"></span>
            <span class="platform-logo alipay"></span>
          </div>
        </div>

        <div class="reward-text-div">扫码打赏，建议金额1-10元</div>
        <p class="reward-tip-p">
          提醒：打赏金额将直接进此方账号，无法退款，请您谨慎操作。
        </p>
      </div>
  </div>
`
}

class RewardService extends HTMLElement {
  constructor() {
    super()

    template.innerHTML = getInnerHTML(this)
    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.initEvents()
  }

  initEvents() {
    this._shadowRoot.querySelector('#open-reward-modal').onclick = this.onOpenRewardClick.bind(this)
    this._shadowRoot.querySelector('#close-modal').onclick = this.onCloseClick.bind(this)
    this.radioBoxs = this._shadowRoot.querySelectorAll('.platform-radio-box')
    this.radioBoxs.forEach(item => {
      item.onclick = this.onRadioBoxClick.bind(this)
    })
    this.rewardModal = this._shadowRoot.querySelector('#reward-modal-container')
  }
  onOpenRewardClick(elem) {
    this.rewardModal.style.display = 'flex'
  }
  onCloseClick(elem) {
    this.rewardModal.style.display = 'none'
  }
  onRadioBoxClick(event) {
    const currentChoiceId = event.currentTarget.dataset.id
    // deal with qrcode img
    const qrImgs = this._shadowRoot.querySelectorAll('.reward-qr-img')
    qrImgs.forEach(item => {
      item.classList.remove('active')
    })
    const cureentNode = this._shadowRoot.querySelector(`.reward-img-div .${currentChoiceId}`)
    cureentNode.classList.add('active')

    // deal with radio boxs
    this.radioBoxs.forEach(item => {
      item.classList.remove('platform-checked')
    })
    event.currentTarget.className = "platform-radio-box platform-checked"
  }
}

window.customElements.define('reward-service', RewardService)

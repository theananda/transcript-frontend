<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <router-link
              :to="{ name: 'home' }">
              <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
              မူလစာမျက်နှာသို့ပြန်သွားရန်
            </router-link>
            <div class="mdl-layout-spacer"></div>
            <button id="about-menu"
                    class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons mdl-color-text--orange">info</i>
            </button>

            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                for="about-menu">
                <li class="mdl-menu__item">
                    <router-link :to="{ name: 'about' }">စီမံကိန်းအကြောင်း</router-link>
                </li>
                <li class="mdl-menu__item">
                    <router-link :to="{ name: 'info' }">အချက်အလက်ရရှိနိုင်မှု အခြေအနေ</router-link>
                </li>
                <li class="mdl-menu__item">
                    <router-link :to="{ name: 'faq' }">ဝက်ဘ်ဆိုဒ်အသုံးပြုပုံ</router-link>
                </li>
                <li class="mdl-menu__item">
                    <router-link :to="{ name: 'history' }">လွှတ်တော်သမိုင်း မှတ်တမ်း</router-link>
                </li>
            </ul>
          </div>
        </header>
        <main class="mdl-layout__content transcript_page">
            <div class="content_wrapper">
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--12-col">
                        
                        <h2>ဝက်ဘ်ဆိုဒ် အချက်အလက်ရရှိနိုင်မှု နောက်ဆုံးအခြေအနေ</h2>
                        <span>၂၄ ဇန်နဝါရီ ၂၀၂၀</span>

                        <p>
                        လက်ရှိအချိန်မှာ ပြည်ထောင်စုအဆင့် လွှတ်တော်တွေဖြစ်တဲ့ ပြည်သူ့လွှတ်တော်နဲ့ အမျိုးသားလွှတ်တော်တို့ရဲ့ ဒုတိယသက်တမ်း (၂၀၁၆-၂၀၂၁) မှတ်တမ်းတွေကိုသာ ၂၀၁၉ ခုနှစ်အကုန်ကာလအထိ ဖော်ပြနိုင်ပါသေးတယ်။ ရှာဖွေမှုမပြုလုပ်နိုင်တဲ့ PDF အဖြစ် ရရှိနိုင်တဲ့ တရားဝင် မှတ်တမ်းတွေကို ပြည်သူ့လွှတ်တော် တရားဝင်ဝက်ဘ်ဆိုဒ် (pyithu.hluttaw.mm)  နဲ့ အမျိုးသားလွှတ်တော် တရားဝင်ဝက်ဘ်ဆိုဒ် (amyotha.hluttaw.mm) တို့ကနေ ရယူထားပါတယ်။ လွှတ်တော်နှစ်ရပ်ပေါင်း  ပြည်ထောင်စုလွှတ်တော်ရဲ့ အစည်းအဝေးမှတ်တမ်းကိုတော့ ဖော်ပြနိုင်ခြင်းမရှိသေးပါ။ ဒုတိယအဆင့်အနေနဲ့ လွှတ်တော်တွေရဲ့ ပထမသက်တမ်း (၂၀၁၁-၂၀၁၆) မှတ်တမ်းတွေကိုပါ နောက်တစ်ဆင့်မှာ ဆက်လက်ဖော်ပြမှာ ဖြစ်ပါတယ်။ 
                        </p>
                        
                        <h4>ဝက်ဘ်ဆိုဒ်တွင် မရနိုင်သည့် အချက်အလက်များ။</h4>
                        <table>
                            <tr>
                                <th>လွှတ်တော်</th>
                                <th>ပုံမှန်အစည်းအဝေး</th>
                                <th>အစည်းအဝေးရက်အရေအတွက်</th>
                                <th>အာနန္ဒာဝက်ဘ်ဆိုဒ်တွင် ရရှိနိုင်သည့် အစည်းအဝေးရက်အရေအတွက်</th>
                                <th>အချက်အလက်ရယူချိန် အခြေအနေ (ဒီဇင်ဘာ ၃၊ ၂၀၁၉)</th>
                            </tr>
                            <tr>
                                <td>ပြည်သူ့လွှတ်တော်</td>
                                <td>2</td>
                                <td>47</td>
                                <td>46</td>
                                <td>ပြည်သူ့လွှတ်တော်ဝက််ဘ်ဆိုဒ်တွင် ၃၆ ရက်မြောက်နေ့မှတ်တမ်း မရှိ</td>
                            </tr>
                            <tr>
                                <td>ပြည်သူ့လွှတ်တော်</td>
                                <td>7</td>
                                <td>33</td>
                                <td>32</td>
                                <td>ပြည်သူ့လွှတ်တော်ဝက််ဘ်ဆိုဒ်တွင် ၃၃ ရက်မြောက်နေ့မှတ်တမ်း မရှိ</td>
                            </tr>
                            <tr>
                                <td>ပြည်သူ့လွှတ်တော်</td>
                                <td>14</td>
                                <td>18</td>
                                <td>10</td>
                                <td>ပြည်သူ့လွှတ်တော်ဝက််ဘ်ဆိုဒ်တွင် အစည်းအဝေး ၁၀ ရက်စာသာရှိ    </td>
                            </tr>
                            <tr>
                                <td>အမျိုးသားလွှတ်တော်</td>
                                <td>7</td>
                                <td>33</td>
                                <td>32</td>
                                <td>အမျိုးသားလွှတ်တော်ဝက်ဘ်ဆိုဒ်တွင် ၃၃ ရက်မြောက်နေ့မှတ်တမ်းမရှိ    </td>
                            </tr>
                            <tr>
                                <td>အမျိုးသားလွှတ်တော်</td>
                                <td>10</td>
                                <td>17</td>
                                <td>1</td>
                                <td>အချက်အလက် ရယူချိန်တွင် အမျိုးသားလွှတ်တော်ဝက်ဘ်ဆိုဒ်တွင် တစ်ဖိုင်သာရှိသေး    </td>
                            </tr>
                            <tr>
                                <td>အမျိုးသားလွှတ်တော်</td>
                                <td>13</td>
                                <td>23</td>
                                <td>0</td>
                                <td>အမျိုးသားလွှတ်တော်ဝက်ဘ်ဆိုဒ်တွင် မရှိသေး    </td>
                            </tr>
                            <tr>
                                <td>အမျိုးသားလွှတ်တော်</td>
                                <td>14</td>
                                <td>18</td>
                                <td>0</td>
                                <td>အမျိုးသားလွှတ်တော်ဝက်ဘ်ဆိုဒ်တွင် မရှိသေး    </td>
                            </tr>
                        </table>

                        <h5>နောက်ထပ်လေ့လာစရာများ</h5>
                        <ul>
                            <li>
                                <router-link :to="{ name: 'about' }">စီမံကိန်းအကြောင်း</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'faq' }">ဝက်ဘ်ဆိုဒ်အသုံးပြုပုံ</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'history' }">လွှတ်တော်သမိုင်း မှတ်တမ်း</router-link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <site-footer></site-footer>
        </main>
    </div>
</template>

<script>

import SiteFooter from '@/components/partials/Footer'

export default {
    name: 'Info',
    components: {
      'site-footer' : SiteFooter
    },
    data() {
        return {}
    }
}
    
</script>
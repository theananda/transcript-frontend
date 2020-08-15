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
                    class="mdl-button mdl-js-button mdl-color-text--orange">
              <i class="material-icons">info</i> <span class="mdl-layout--large-screen-only">စီမံကိန်းအကြောင်း</span>
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
                        <span>၁၄ သြဂုတ် ၂၀၂၀</span>

                        <p>
                        လက်ရှိအချိန်မှာ ပြည်ထောင်စုအဆင့် လွှတ်တော်တွေဖြစ်တဲ့ ပြည်သူ့လွှတ်တော်နဲ့ အမျိုးသားလွှတ်တော်တို့ရဲ့ ပထမသက်တမ်း (၂၀၁၀ – ၂၀၁၆) နှင့် ဒုတိယသက်တမ်း မှတ်တမ်းများကို ၂၀၂၀ ခုနှစ် နှစ်လယ်ကာလအထိ ဖော်ပြနိုင်ပါသေးတယ်။ ရှာဖွေမှုမပြုလုပ်နိုင်တဲ့ PDF အဖြစ် ရရှိနိုင်တဲ့ တရားဝင် မှတ်တမ်းတွေကို ပြည်သူ့လွှတ်တော် တရားဝင်ဝက်ဘ်ဆိုဒ် (pyithu.hluttaw.mm) ၊ အမျိုးသားလွှတ်တော် တရားဝင်ဝက်ဘ်ဆိုဒ် (amyotha.hluttaw.mm) နဲ့ ပြည်ထောင်စုလွှတ်တော် တရားဝင်ဝက်ဘ်ဆိုဒ် (pyidaungsu.hluttaw.mm) တို့ကနေ ရယူထားပါတယ်။ လွှတ်တော်နှစ်ရပ်ပေါင်း ပြည်ထောင်စုလွှတ်တော်ရဲ့ ဒုတိယအကြိမ် လွှတ်တော်သက်တမ်း၏ အစည်းအဝေးမှတ်တမ်းကို ဖော်ပြထားနိုင်သေးပြီး ပထမသက်တမ်း (၂၀၁၁-၂၀၁၆) မှတ်တမ်းတွေကိုပါ နောက်တစ်ဆင့်မှာ ဆက်လက်ဖော်ပြမှာ ဖြစ်ပါတယ်။ 
                        </p>
                        
                        <table>
                            <tr>
                                <th>လွှတ်တော်သက်တမ်း</th>
                                <th>လွှတ်တော်</th>
                                <th>အစည်းအဝေးရက် စုစုပေါင်း</th>
                                <th>ရရှိနိုင်သည့် မှတ်တမ်းအရေအတွက်</th>
                            </tr>
                            <tr>
                                <td>၂</td>
                                <td>ပြည်ထောင်စုလွှတ်တော်</td>
                                <td>၂၃၂</td>
                                <td>၂၃၂</td>
                            </tr>
                            <tr>
                                <td>၂</td>
                                <td>အမျိုးသားလွှတ်တော်</td>
                                <td>၃၆၂</td>
                                <td>၃၆၁</td>
                            </tr>
                            <tr>
                                <td>၂</td>
                                <td>ပြည်သူ့လွှတ်တော်</td>
                                <td>၃၈၉</td>
                                <td>၃၈၇</td>
                            </tr>
                            <tr>
                                <td>၁</td>
                                <td>ပြည်ထောင်စုလွှတ်တော်</td>
                                <td>ဝ</td>
                                <td>ဝ</td>
                            </tr>
                            <tr>
                                <td>၁</td>
                                <td>အမျိုးသားလွှတ်တော်</td>
                                <td>၄၂၁</td>
                                <td>၄၀၂</td>
                            </tr>
                            <tr>
                                <td>၁</td>
                                <td>ပြည်သူ့လွှတ်တော်</td>
                                <td>၄၄၆</td>
                                <td>၄၃၃</td>
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
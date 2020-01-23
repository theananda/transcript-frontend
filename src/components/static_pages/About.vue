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
                        <h2>စီမံကိန်းအကြောင်း</h2>

                        <p>လွှတ်တော်အစည်းအဝေးမှတ်တမ်း ဝက်ဘ်ဆိုဒ်ဟာ မြန်မာနိုင်ငံရဲ့ လွှတ်တော်တွေမှာ ဆွေးနွေးသမျှ မှတ်တမ်းတွေကို ပွင့်လင်းသတင်းအချက်အလက် ပုံစံအဖြစ် ပြောင်းလဲပြီး အများပြည်သူ အလွယ်တကူ ပြန်လည်အသုံးပြုနိုင်စေဖို့ ရည်ရွယ်ပါတယ်။ အရေးကြီးတဲ့ နိုင်ငံရေးဆုံးဖြတ်ချက်တွေကို ချမှတ်ရတဲ့ လွှတ်တော်တွေမှာ ပြည်သူတွေ ရွေးကောက်တင်မြှောက်ထားတဲ့ ကိုယ်စားလှယ်တွေ ဘာတွေ ဆွေးနွေးတယ်၊ ဘယ်လိုရှူထောင့်တွေက ဆွေးနွေးတယ်ဆိုတာကို အပြည့်အစုံ သိရှိနိုင်ခြင်းကနေတစ်ဆင့် ပိုမိုဓမ္မဓိဌာန်ကျတဲ့ နိုင်ငံရေးဆွေးနွေးမှုတွေ ပေါ်ပေါက်လာမယ်၊ ပိုမိုဓမ္မဓိဌာန်ကျတဲ့ နိုင်ငံရေးဆိုင်ရာ ရွေးချယ်မှုတွေကို ပြုလုပ်နိုင်ကြလိမ့်မယ်၊ ဒီနည်းနဲ့ပဲ မြန်မာ့ ဒီမိုကရေစီ အသွင်ကူးပြောင်းမှုမှာ တစ်တပ်တစ်အား ပါဝင်အကျိုးပြုနိုင်မယ်လို့ အာနန္ဒာက မျှော်လင့်ပါတယ်။ </p>

                        <p>ဒီစီမံကိန်းကို Open Data for Development Asia က ပံ့ပိုးကူညီပေးခဲ့တဲ့ လုပ်ငန်းခွင် သုတေသန စီမံကိန်းတစ်ခုရဲ့ ရလဒ်တစ်ခု ဖြစ်ပါတယ်။ </p>

                        <h2>စီမံကိန်းကို အဓိကအကောင်အထည်ဖော်ခဲ့သူများ</h2>

                        <p>
                            <strong>ဉာဏ်လင်းမြင့် (Data Scientist)</strong> က လွှတ်တော်အစည်းအဝေးမှတ်တမ်းတွေကို လွှတ်တော်ဝက်ဒ်ဆိုဒ်တွေကနေတစ်ဆင့် ရယူပြီး သန့်ရှင်းပြီးသား ပွင့်လင်းသတင်းအချက်အလက် ပုံစံအဖြစ် ပြောင်းလဲခဲ့ပါတယ်။     
                        </p>
                        
                        <p>
                            <strong>လီကျားလိ (Web Developer)</strong> က ဝက်ဘ်ဆိုဒ်ရေးဆွဲပြီး လွှတ်တော်အစည်းအဝေးမှတ်တမ်းတွေကို အလွယ်တကူ ရှာဖွေနိုင်စေရန် ဆောင်ရွက်ခဲ့သည်။     
                        </p>

                        <p>
                            <strong>ထင်ကျော်အေး</strong> က လွှတ်တော်အစည်းအဝေးမှတ်တမ်းများ၏ စုဖွဲ့ပုံနဲ့ ပတ်သက်ပြီး အကြံပေးအဖြစ် ဆောင်ရွက်ခဲ့ပါတယ်။     
                        </p>

                        <p>
                            <strong>ဆုမွန်ကို</strong> က စီမံကိန်းအတွက် ဘဏ္ဍာရေးနဲ့ စီမံခန့်ခွဲမှုဆိုင်ရာ ထောက်ပံ့မှု ပြုလုပ်ခဲ့ပါတယ်။     
                        </p>

                        <h5>နောက်ထပ်လေ့လာစရာများ</h5>
                        <ul>
                            <li>
                                <router-link :to="{ name: 'info' }">အချက်အလက်ရရှိနိုင်မှု အခြေအနေ</router-link>
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
    name: 'About',
    components: {
      'site-footer' : SiteFooter
    },
    data() {
        return {}
    }
}
    
</script>
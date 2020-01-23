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
        <main class="mdl-layout__content">
            <div class="content_wrapper">

              <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1bZ_x9PxR4V-xIE7R-LnEN8WJJmG7oSbXMP9nxJCnJBU&font=Default&lang=my&initial_zoom=2&height=750' width='100%' height='750' frameborder='0'></iframe>
              
              <div class="mdl-grid">
                  <div class="mdl-cell mdl-cell--12-col">

                      <h5>နောက်ထပ်လေ့လာစရာများ</h5>
                      <ul>
                          <li>
                              <router-link :to="{ name: 'about' }">စီမံကိန်းအကြောင်း</router-link>
                          </li>
                          <li>
                              <router-link :to="{ name: 'info' }">အချက်အလက်ရရှိနိုင်မှု အခြေအနေ</router-link>
                          </li>
                          <li>
                              <router-link :to="{ name: 'faq' }">ဝက်ဘ်ဆိုဒ်အသုံးပြုပုံ</router-link>
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
    name: 'History',
    components: {
      'site-footer' : SiteFooter
    },
    data() {
        return {}
    }
}
    
</script>
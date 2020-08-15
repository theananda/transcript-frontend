<template>
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
          <iconify-icon data-icon="ic:baseline-info" width="1.5rem" height="1.5rem" style="color: #ff6e40;"></iconify-icon> <span class="mdl-layout--large-screen-only">စီမံကိန်းအကြောင်း</span>
        </button>

        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
            for="about-menu">
            <li class="mdl-menu__item" v-for="menu in menu_items">
                <router-link :to="{ name: menu.route }">{{ menu.text }}</router-link>
            </li>
        </ul>
      </div>
    </header>
</template>

<script>

export default {
    name: 'StaticHeader',
    data() {
        return {
            'menu_items' : [
                {
                    'route' : 'about',
                    'text' : 'စီမံကိန်းအကြောင်း'
                },
                {
                    'route' : 'info',
                    'text' : 'အချက်အလက်ရရှိနိုင်မှု အခြေအနေ'
                },
                {
                    'route' : 'faq',
                    'text' : 'ဝက်ဘ်ဆိုဒ်အသုံးပြုပုံ'
                },
                {
                    'route' : 'history',
                    'text' : 'လွှတ်တော်သမိုင်း မှတ်တမ်း'
                }
            ]
        }
    }
}

</script>
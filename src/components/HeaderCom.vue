<template>
  <header class="header">
      <div class="header__title">Let’s Book with us!</div>

      <div class="header__user" @click="menu = !menu">
          <div class="header__user--profile"></div>
          <div class="header__user--name">Robert Fox</div>
          <img src="@/assets/imgs/bottom.svg" alt="">
          <div class="header__user--menu" v-show="menu">
              <router-link to="/setting">Sozlama</router-link>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            menu:false
        }
    },
}
</script>

<style lang="scss">
@import '../styles/components/header.scss';
</style>
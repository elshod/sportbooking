<template>
  <div :class="`list__col `" @click="toggle">
    <router-link to="/" class="list__box" :style="{
        backgroundImage: `url('https://i.pinimg.com/564x/d1/67/e9/d167e993d22e40f8e619ff6f7636c8f9.jpg')`
    }">
      <div class="list__box--title">Lamora Hotel</div>
      <div class="d-flex justify-content-between">
          <div class="list__box--type">Futbol</div>
          <div class="list__box--price">25 000 so'm dan</div>
      </div>

    </router-link>
  </div>
</template>

<script>
export default {

  methods: {
    toggle(){
      this.$store.dispatch('setModalToggle',true)
    }
  }
}
</script>

<style lang="scss">

</style>
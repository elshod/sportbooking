<template>
  <div :class="`modal ${viewToggle?'active':''}`"
    @click.self="closeModal"
    >
      <div class="modal__box">
        <div class="modal__title">
            <button @click="closeModal">
                <img src="@/assets/imgs/back.svg" alt="">
            </button>
          <span>Batafsil</span>
        </div>
        <div class="modal__scroll">

      
      <div class="modal__slide">
          <div class="slide" :style="{
              backgroundImage: `url('https://i.pinimg.com/736x/6b/ff/81/6bff8177637a59c3d3d635e1cb1deb53.jpg')`
            }"></div>
      </div>
        <div class="modal__stitle">
          Lamora Hotel
          <div class="modal__promo">Top Sales</div>
        </div>
        <div class="modal__address">Bali, Indonesia</div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="modal__rating">
                <img src="@/assets/imgs/star.svg" alt="">
                <b>4.9</b> (22 Reviews)
            </div>
            <div class="modal__price">
                <span>25 000</span> so'm dan
            </div>
        </div>
        <div class="modal__ltitle">Xususiyatlari</div>
        <div class="modal__params d-flex align-items-center ">
            <div class="modal__params--item">
                <img src="@/assets/imgs/user.svg" alt="">
                22 ta odam
            </div>
            <div class="modal__params--item">
                <img src="@/assets/imgs/field.svg" alt="">
                50 m<sup>2</sup>
            </div>
        </div>
        <div class="modal__ltitle">Tasnifi</div>
        <p>Featuring an outdoor swimming pool and a fitness
        centre, Lamora offers accomodation and good...</p>
        <div class="modal__booking mt-2">
            <input type="text" placeholder="Telefon raqam">
            <button>Band qilish</button>
        </div>
        </div>
      </div>

  </div>
</template>

<script>

export default {
    data() {
        return {
            mapToggle:false
        }
    },
    components: { 

    },
      computed:{
        viewToggle(){
            return this.$store.getters.getViewToggle
        }
    },
    methods: {
        closeModal(){
            this.$store.dispatch('setViewToggle',false)
        }
    },
}
</script>

<style lang="scss">

@import '../../styles/components/modal.scss';
</style>
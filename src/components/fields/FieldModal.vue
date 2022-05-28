<template>
  <div :class="`modal ${modalToggle?'active':''}`"
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
        <Splide 
            :options="{ 
                perPage: 3,
                autoplay:true,
                interval: 4000,
                gap:16,
                arrows:false,
                wheel:true,
                type:'loop',
                direction:'ttb',
                height:'250px'
                }" >
                <SplideSlide v-for="item of 10" :key="item">
                    <field-item/>        
                </SplideSlide>
                
        </Splide>
        </div>
      </div>

  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import FieldItem from './FieldItem.vue';
export default {
    data() {
        return {
            mapToggle:false
        }
    },
    components: { 
        FieldItem, 
        Splide,
        SplideSlide 
    },
      computed:{
        modalToggle(){
            return this.$store.getters.getModalToggle
        }
    },
    methods: {
        closeModal(){
            this.$store.dispatch('setModalToggle',false)
        }
    },
}
</script>

<style lang="scss">

@import '../../styles/components/modal.scss';
</style>
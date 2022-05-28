<template>
    <div class="list">
        <div class="list__top">
            <div class="list__title">Komplekslar</div>
            <div class="list__filtrs">
                <button>Top</button>
                <button>Yangi</button>
            </div>
            <button class="list__filter">
                <img src="@/assets/imgs/filter.svg" alt="">
                Saralash
            </button>
        </div>
            <Splide :options="{ 
                type:'slide',
                perPage: 4,
                autoplay:true,
                interval: 4000,
                gap:16,
                wheel:true
                }" >
                <SplideSlide v-for="item of 10" :key="item">
                    <list-item/>        
                </SplideSlide>
                
            </Splide>
            

    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ListItem from './ListItem.vue'
export default {
  components: { 
    ListItem, 
    Splide,
    SplideSlide },

}
</script>

<style lang="scss">
@import '../../styles/components/list.scss';
</style>
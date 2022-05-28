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
        <div class="row">
            <list-item/>
            <list-item/>
            <list-item/>
            <list-item/>
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  components: { ListItem },

}
</script>

<style lang="scss">
@import '../../styles/components/list.scss';
</style>
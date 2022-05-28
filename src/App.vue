<template>
  <div class="main">
    <SideBarVue/>
    <div class="wrapper">
      <HeaderCom/>
      <SearchCom/>
      <div class="scroll">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarVue from './components/SideBar.vue'
import HeaderCom from './components/HeaderCom.vue'
import SearchCom from './components/searchCom.vue'
export default {
  components:{
    SideBarVue,
    HeaderCom,
    SearchCom
}
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>

<template>
  <div class="main">
    <SideBarVue/>
    <div class="wrapper">
      <HeaderCom/>
      <SearchCom/>
      <router-view/>
      <FieldModal/>
      <ViewModal/>
    </div>
  </div>
</template>

<script>
import SideBarVue from './components/SideBar.vue'
import HeaderCom from './components/HeaderCom.vue'
import SearchCom from './components/searchCom.vue'
import FieldModal from './components/fields/FieldModal.vue'
import ViewModal from './components/fields/ViewModal.vue'
export default {
  components:{
    SideBarVue,
    HeaderCom,
    SearchCom,
    FieldModal,
    ViewModal
}
}
</script>

<style lang="scss">
@import './styles/main.scss';

</style>

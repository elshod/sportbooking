<template>
  <div class="home">
    <ListCom/>
    <FieldList/>
  </div>
</template>

<script>
import ListCom from '@/components/list/ListCom.vue';
import FieldList from '../components/fields/FieldList.vue';


export default {
  components: {
    ListCom,
    FieldList
}
}
</script>

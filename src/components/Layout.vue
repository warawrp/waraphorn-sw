<template>
  <div class="d-flex flex-column flex-md-row" >
    <sidebar/>
    <div class="container-fluid">
        <slot></slot>
        <FooterCustom/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import FooterCustom from './FooterCustom.vue';
export default{
    components:{
        Sidebar,
        FooterCustom
    }
}
</script>

<style scoped>
.container-fluid{
 padding: 0;
 width: 100vw;
}
</style>
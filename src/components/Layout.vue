<template>
  <div class="d-flex " >
    <div class="d-none d-lg-block">
      <sidebar/>
    </div>
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
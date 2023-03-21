<script>
import CardEcommerce from '../components/card/CardEcommerce.vue'
import CardNFT from '../components/card/CardNFT.vue'
import Header from '../components/Header.vue'
import HeaderContent from '../components/HeaderContent.vue'


export default {
  components:{
    CardEcommerce,
    HeaderContent,
    Header,
    CardNFT
  }
}
</script>

<template>
  <Header title="Portforio"></Header>
  <div class="container-fluid d-grid gap-3 ">
    <CardEcommerce/>
    <CardNFT/>
  </div>
</template>



<style scoped>
.container-fluid{
  width:calc(100% - 20px);
  margin: 0 10px ;
  padding: 0 20px;
  border-radius: 10px;
}


@media screen and (min-width: 1200px) {
  .container-fluid{
    width:calc(100% - 100px);
    margin: 0 50px ;
    padding: 0 30px;
  }

}
</style>
<template>
  <div class="row cardPort d-flex flex-row" >
    <div class="col-12 col-md-5 order-md-2">
      <img src="../../assets/img/nft.png" alt="">
    </div>
    <div class="col-12 col-md-7 order-md-1">
      <div class="contentPort my-lg-4">
        <div class="d-flex flex-column flex-sm-row justify-content-between justify-content-md-start gap-md-2 align-items-sm-center headerPort" >
          <h6>{{ title }}</h6>
          <small class="mt-2 mt-sm-0" >Out source</small>
        </div>
        <ul class="mt-2 mt-md-3" >
          <li v-for="(item,index) in des" :key="index">{{ item }}</li>
        </ul>
        <small class="mt-lg-4" >Customer</small>
        <div class="logoPort mt-2 d-flex flex-wrap gap-2 gap-sm-4 align-items-center justify-content-center justify-content-md-start">
          <img src="../../assets/img/logo/epic.png" height="40" alt="">
          <img src="../../assets/img/logo/bluewolf.png" height="40" alt="">
          <img src="../../assets/img/logo/cannabis.png" height="20" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"NFT Marketplace",
      des:["การซื้อ-ขายสินทรัพย์ดิจิตอล","การชำระเงินผ่าน Metamask"]
    }
  }
}
</script>

<template>
  <div class="row cardPort d-flex flex-row" >
    <div class="col-12 col-md-5">
      <img src="../../assets/img/ecommerce.png" alt="">
    </div>
    <div class="col-12 col-md-7">
      <div class="contentPort my-lg-4">
        <div class="d-flex flex-column flex-sm-row justify-content-between justify-content-md-start gap-md-2 align-items-sm-center headerPort" >
          <h6>{{ title }}</h6>
          <small class="mt-2 mt-sm-0" >Out source</small>
        </div>
        <ul class="mt-2 mt-md-3"  >
          <li v-for="(item,index) in des" :key="index">{{ item }}</li>
        </ul>
        <small class="mt-lg-4" >Customer</small>
        <div class="logoPort mt-2 d-flex flex-wrap gap-2 gap-sm-4 align-items-center justify-content-center justify-content-md-start">
          <img src="../../assets/img/logo/medix.png" height="40" alt="">
          <img src="../../assets/img/logo/affee.png" height="20" alt="">
          <img src="../../assets/img/logo/reborn.png" height="20" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"E-commerce Website",
      des:["เปิดร้านค้าออนไลน์","การซื้อ-ขายสินค้าผ่านเครือข่ายอินเทอร์เน็ต","การสมัครสมาชิกผ่านระบบออนไลน์","การแจ้งชำระเงิน","รีวิวสินค้าและบริการ","ระบบคำนวณค่าขนส่งอัตโนมัติ"]
    }
  }
}
</script>
<template>
  <aside>
    <div class="d-none d-lg-block" >
      <div class="d-flex flex-column align-items-center mt-4 gap-3 ">
        <h5>Waraphorn Srijiw</h5>
        <img src="../assets/img/img.png" alt="profile">
        <small class="text-center" >
            Hi, my name is Waraphorn Srijiw <br>
            and I'm a Front-end Developer <br> 
            and UX/UI Designer.<br>
            Welcome to my personal website!
        </small>
      </div>
      <hr>
      <small >My Status</small>
      <div class="mt-2 d-flex gap-1 flex-wrap">
        <span class="pill danger" >กำลังหางาน</span>
        <span class="pill defualt" >FullTime</span>
        <span class="pill defualt" >WFH</span>
        <span class="pill defualt" >Work Hybrid</span>
      </div>
      <hr>
    </div>
    <div class="box gap-4 gap-md-2 gap-lg-1  " >
      <div class="d-lg-none">
        <div  data-bs-toggle="modal" data-bs-target="#user">
          <SidebarMenu menu="My" icon="user.svg" />
        </div>
      </div>
      <div v-for="item in menus"  :key="item.id" >
        <router-link  :to="item.url" >
          <SidebarMenu 
          :id="item.id" 
          :menu="item.menu" 
          :icon="item.icon" 
          :url="item.url" />
        </router-link>
      </div>
      <a href="https://github.com/warawrp/waraphorn-sw" target="_blank" >
        <div class="d-none d-lg-block" >
          <SidebarMenu menu="Code on Github" icon="github.svg" />
        </div>
        <div class="d-lg-none">
          <SidebarMenu menu="Code" icon="github.svg" />
        </div>
      </a>
    </div>
  </aside>
  <!-- <div class="modal-dialog modal-dialog-centered">
    test modal
  </div> -->
  <div class="modal" tabindex="-1" id="user">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="close" data-bs-dismiss="modal" aria-label="Close">
              <img src="../assets/icons/close.svg" alt="">
            </div>
              <div class="d-flex flex-column align-items-center mt-4 gap-3 ">
              <h5>Waraphorn Srijiw</h5>
              <small class="text-center" >
                  Hi, my name is Waraphorn Srijiw <br>
                  and I'm a Front-end Developer <br> 
                  and UX/UI Designer.<br>
                  Welcome to my personal website!
              </small>
            </div>
            <hr>
            <small class="text-center d-block w-100" >My Status</small>
            <div class="mt-2 d-flex gap-1 flex-wrap justify-content-center">
              <span class="pill danger" >กำลังหางาน</span>
              <span class="pill defualt" >FullTime</span>
              <span class="pill defualt" >WFH</span>
              <span class="pill defualt" >Work Hybrid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue'


export default {
  data(){
    return{
      menus:[
        { id:1, menu:"Portforio", icon:"home.svg", url:"/"},
        { id:2, menu:"Resume", icon:"document.svg", url:"/resume"},
      ]
    }
  },
 components:{
  SidebarMenu
 }
}
</script>

<style scoped>
.close img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg) brightness(104%) contrast(104%);
}

aside{
  height: fit-content;
  background-color:var(--primary);
  color: #fff;
  overflow-y: auto;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3 !important;
} 

.box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
}

/* MD */
@media only screen and (min-width: 768px){
    aside{
      width: fit-content;
      height: 100vh;
      top: 0;
      left: 0;
      bottom: 0;
    } 

    .box{
      height:calc(100% - 10px);
      flex-direction: column;
      
    }
}

/* LG */
@media only screen and (min-width: 992px){
    aside{
      height: 100vh;
      width: 300px;
      padding: 10px;
      top: 0;
      left: 0;
      bottom: 0;
  } 

    .box{
      flex-direction: column;
      height: fit-content;
    }
}


img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    filter: grayscale(80%);
}



</style>
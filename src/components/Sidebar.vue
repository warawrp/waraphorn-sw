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
              Welcome to my personal website!</small>
      </div>
      <hr>
    </div>
    <div class="box gap-4 gap-md-2 gap-lg-1  " >
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

.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
}

aside{
  height: 100vh;
  width: 300px;
  background-color:var(--primary);
  color: #fff;
  overflow-y: auto;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
} 

/* MD */
@media screen and (max-width: 960px){
    aside{
        width: fit-content;
        padding: 5px 0 5px 5px;
    } 

    .box{
      height: 100vh;
    }
}

/* sm */
@media screen and (max-width: 540px){
    aside{
      width: 100vw;
      height: fit-content;
      padding: 10px;
      top: 0;
      left: 0;
  } 

    .box{
      flex-direction: row;
      height: fit-content;
    }
}

img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
}



</style>
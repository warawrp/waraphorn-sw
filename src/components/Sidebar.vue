<template>
  <aside>
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
    <div class="d-grid" >
      <!-- <router-link to="/">
        <sidebar-menu id="portforio" menu="Portforio" icon="home.svg" @addActive="addClass" @click="menu('portforio')" />
      </router-link>
      <router-link  to="/Resume" >
        <SidebarMenu id="resume" menu="Resume" icon="document.svg"  @addActive="addClass" @click="menu('resume')" />
      </router-link> -->
      <div class="d-grid gap-1" >
        <div v-for="item in menus"  :key="item.id" >
          <router-link  :to="item.url" >
            <SidebarMenu 
            :id="item.id" 
            :menu="item.menu" 
            :icon="item.icon" 
            v-model:isActive="item.isActive"
            @addClass="add" />
          </router-link>
        </div>
        <a href="https://github.com/warawrp/waraphorn-sw" target="_blank" >
          <SidebarMenu menu="Code" icon="home.svg" />
        </a>
      </div>
    </div>
    
    
  </aside>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue'


export default {
  data(){
    return{
      menus:[
        { id:1, menu:"Portforio", icon:"home.svg", url:"/", isActive:true },
        { id:2, menu:"Resume", icon:"document.svg", url:"/resume", isActive:false },
      ]
    }
  },
 components:{
  SidebarMenu
 },
 methods:{
  add(id,url,currentRouteName){
    this.menus = this.menus.map(e => {
      if(e.id == id){
        return {...e,isActive:true}
      }else{
        return {...e,isActive:false}
      }
    })
    console.log(this.menus);
  },
 },
}
</script>

<style scoped>

@media screen and (min-width: 960px){
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
}

img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
}



</style>
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
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    
  </aside>
</template>

<script>
export default {

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
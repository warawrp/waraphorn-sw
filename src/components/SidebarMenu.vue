<template>
        <div class="d-flex gap-3 align-item-center">
          <img  :src="getIcon()">
          <p>{{ menu }}</p>
          <span>{{ id }} {{ newid }}</span>
        </div>
</template>

<script>
export default {
 props:{
    menu:String,
    icon:String,
    
 },
 methods:{
    getIcon(){
        return new URL (`../assets/icons/${this.icon}`,import.meta.url)
    },
 }
}
</script>

<style scoped >
div{
  opacity: 50%;
  padding: 10px 20px;
  border-radius: 6px;
}
div:hover , div .active{
  opacity: 100%;
  background-color: var(--primary-hover);
}

img{
  width: 20px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg) brightness(104%) contrast(104%);
}

p{
  color: var(--white);
  margin: 0;
}

span{
  color: white;
}

</style>
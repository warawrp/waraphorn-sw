<template>
     <div class="d-flex gap-2" >
        <img :src="getImg()" alt="" width="15">
        <small>{{ text }}</small>
    </div>
</template>

<script>
export default {
    props:{
        text:String,
        icon:String
    },
    methods:{
        getImg(){
            return new URL(`../assets/icons/${this.icon}`, import.meta.url)
        }
    }
}
</script>

<style scoped>
img{
    filter: invert(99%) sepia(54%) saturate(0%) hue-rotate(189deg) brightness(113%) contrast(100%);
}

small{
  font-weight: lighter;
  color: var(--white);
}
</style>
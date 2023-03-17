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
    filter: invert(15%) sepia(27%) saturate(657%) hue-rotate(180deg) brightness(91%) contrast(100%);
}

small{
  font-weight: lighter;
}
</style>
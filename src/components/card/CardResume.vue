<template>
  <div>
    <div class="d-flex flex-column flex-sm-row align-items-md-center justify-content-between" >
        <p class="title">{{ title }}</p>
        <small class="mb-2 mb-md-0" >{{subtitle}}</small>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        subtitle:String,
    }
}
</script>

<style scoped >
.title{
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary);
    margin-bottom: 5px;
}

small{
    color: var(--grey);
    font-size: 14px;
    font-weight: lighter;
}

@media screen and (min-width: 960){
    .title{
      font-size: 18px;
    }
  }




</style>
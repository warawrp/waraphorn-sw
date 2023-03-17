<template>
   <div class="my-4">
    <h5>{{ title }}</h5>
   </div>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>

<style scoped >
div{
    border-left: 5px solid var(--primary);
}



h5{
    padding: 0 0 0 10px;
    color: var(--primary);
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 960){
    h5{
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
</style>
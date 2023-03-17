<template>
  <header class="d-flex flex-column align-items-center gap-2" >
    <h2>{{ title }}</h2>
    <slot name="sub-title"></slot>
  </header>
</template>

<script>
export default {
  props:{
    title:String
  }
}
</script>

<style scoped>
  header{
    padding: 30px;
    text-align: center;
    background-color: var(--lightgrey);
  }

  

</style>
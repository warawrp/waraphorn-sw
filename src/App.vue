<script >
import Layout from "./components/Layout.vue";


export default {
  components:{
    Layout,
  },
}
</script>

<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<style scoped>
.container-fluid{
  width:calc(100% - 20px);
  margin: 10px;
  background-color: var(--lightgrey);
  padding: 20px;
  box-shadow: 0 0 50px #b8b7b759;
}

h2{
  color: var(--primary);
  margin-bottom: 0;
  font-weight: bolder;
  font-size: 20px;
}

h6{
  font-weight: lighter;
  font-size: 16px;
}

p{
  margin-bottom: 0;
}


@media screen and (min-width: 1200px) {
  .header-line{
    border-left: 1px solid var(--grey) ;
  }

  h2{
    font-size: 26px;
    letter-spacing: 2px;
  }

  h6{
    font-size: 18px;
  }

  .container-fluid{
    width:calc(100% - 100px);
    margin: 50px;
    padding: 30px;
  }

  p{
      white-space: nowrap;
  }

}
</style>

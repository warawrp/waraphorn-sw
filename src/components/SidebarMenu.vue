<template>
        <div>
          <div class="d-flex flex-column flex-lg-row gap-lg-3  justify-content-lg-start align-items-lg-center box" :class="{ active: url == this.$route.path}">
            <img class="mx-auto mx-lg-0"  :src="getIcon()">
            <p class="d-none d-md-block" >{{ menu }}</p>
          </div>
        </div>
</template>

<script>
export default {
  props:{
      id:{
        type: Number
      },
      menu:{
        type: String
      },
      icon:{
        type: String
      },
      url:{
        type: String
      }
  },
  methods:{
      getIcon(){
          return new URL (`../assets/icons/${this.icon}`,import.meta.url)
      }
  }
}
</script>

<style scoped >
.box{
  opacity: 50%;
  border-radius: 6px;
  padding: 8px;
}

p{
    font-size: 10px;
    text-align: center;
    width: 40px;
    color: var(--white);
    margin: 0;
  }

/* MD */
@media only screen and (min-width: 992px){
  .box{
    padding: 5px 8px 5px 5px;
  }
  p{
    font-size: 16px;
    width: fit-content;
  }

}

.box:hover , .box.active{
  opacity: 100%;
  background-color: var(--primary-hover);
}

img{
  width: 20px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg) brightness(104%) contrast(104%);
}


</style>
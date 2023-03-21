<template>
        <div @click="addClass(id)" >
          <div class="d-flex gap-3 align-item-center box" :class="{ active: url == this.$route.path}">
            <img  :src="getIcon()">
            <p>{{ menu }}</p>
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
  padding: 10px 20px;
  border-radius: 6px;
}
.box:hover , .box.active{
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

</style>
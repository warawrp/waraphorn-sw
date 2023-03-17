<template>
        <button class="btn-primary d-flex align-items-center gap-2 form-control">
            <div v-if="icon!= 0 " >
                <img class="mb-1" :src="getImg()">
            </div>
            <p>{{ text }}</p>
        </button>
    
</template>

<script>
export default {
    props:{
        text:String,
        icon:{
            String,
            default: 0
        }
    },
    methods:{
        getImg(){
            return new URL (`../assets/icons/${this.icon}`, import.meta.url)
        }
    }
}
</script>

<style scoped>
.btn-primary{
  background-color: var(--warning);
  border-radius: 4px;
  border: none;
  color: var(--white);
  padding: 5px 10px 3px;
}

.btn-primary:hover{
  background-color: var(--warning-hover);
}

.btn-primary:focus {
  outline: none !important;
}

img{
  width: 20px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg) brightness(104%) contrast(104%);
}

p{
    padding: 0;
    margin: 0;
}
</style>
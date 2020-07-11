<template>
    <div>
      <van-uploader v-model="fileList" multiple :after-read="afterRead"  :max-count="2"/>
    </div>
</template>

<script>
    export default {
        name: "imgloader",
      data(){
          return {
            fileList: [],
          }
      },
      methods:{
        afterRead(file){
          console.log(file);
        }
      }

    }
</script>

<style scoped>

</style>

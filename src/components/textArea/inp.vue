<template>
  <div class="text">
    <div>
      <slot name="text"></slot>
    </div>
    <div class="scroll-div" >
      <textarea rows="" class="scroll-bt-inp" :style="{height:hig}"   v-model="ouou" @input="dianji" >
      </textarea>
    </div>
  </div>
</template>

<script>

  export default {
    name: "inp",
    components:{

    },
    props:{
      hig:{
        type:String,
        default(){
          return '100px'
        }
      }
    },
    data(){
      return {
        ouou:""
      }
    },

    methods:{
      dianji(){

        this.$emit('dianji',this.ouou)
      }
    }
  }
</script>

<style scoped>
  .text
  {
    width: 93%;
  }
  .scroll-div
  {
    width: 100%;

    margin-top: 5px;

    padding: 0;
  }
  .scroll-bt-inp
  {

    font-size: 16px;
    width: 100%;
    border: 0;
    border-radius: 5px;


    background-color: #F0F2F3;
  }
  .active{
    background: red;
  }


</style>

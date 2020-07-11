<template>
  <div class="data-kk">
    <div class="data-dd">
      <div v-for="(item,index) in com" class="data-div" :class="{active:index==count}" @click="dataitem(index)">
        <div>
          <div>{{item.name}}</div>
          <div>{{item.datatime}}</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: "data",
    components:{

    },
    props:{
      com:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        count:0
      }
    },
    methods:{
      dataitem(index){
        this.count=index
      }
    }
  }
</script>

<style scoped>
  .data-kk{
    width: 100%;

  }
  .data-dd{
    width: 100%;
    overflow-x: auto;
    white-space:nowrap;
    margin: 10px auto;
  }
  .data-div{
    display: inline-block;
    width: 19%;
    color: #626262;
    font-size: 14px;
    text-align: center;
  }
  .active{
    color: #ff5777;
  }

</style>

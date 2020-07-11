<template>
  <van-tabs>
    <van-tab v-for="(item,index) in comt" :key="index" :title="item.week">
      <div class="vtab">
        <div v-for="(ing,mba) in item.times" class="vtab-item">
          <div class="vtab-item-it" @click="additem(index,mba)" :class="ing.isConfig==true?'active':''" >
            {{ ing.time }}
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
    export default {
        name: "vantab",
      props:{
          comt:{
            type:Array,
            default() {
              return [];
            }
          }
      },
      methods:{
          additem(index,mba){
           // console.log(index,mba);
            this.$emit('additem',{index,mba})

          }
      }
    }
</script>

<style scoped>
  .vtab
  {
    width: 95%;
    margin: 5px auto;

    display: flex;

    flex-flow: wrap;

  }
  .vtab-item
  {
    height: 25px;
    width: 25%;
    margin: 5px 0;
    text-align: center;

    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vtab-item-it{
    width: 95%;
    height: 100%;
    border: 1px solid #EEEEEE;

  }
  .active{
    border: 1px solid #ff5777;
  }


</style>

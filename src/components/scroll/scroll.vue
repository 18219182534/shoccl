<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "scrool",
    props:{
      scrollnum:{
        type:Number,
        default(){
          return 0
        }
      },
      pullingload:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.scrollnum,
        pullUpLoad:this.pullingload
      })
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit("scroll",position)
      }),
        this.scroll.on('pullingUp',() => {
          // console.log(position);
          this.$emit("pullingUp")
        }),
        this.scroll.on('touchEnd',(position) => {
          this.$emit('touchEnd',position)
        })
    },
    methods:{
      To(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishpullup(){
        this.scroll.finishPullUp()
      },
      imgload(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>

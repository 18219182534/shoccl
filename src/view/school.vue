<template>
  <div id="school">
    <tabber class="school-tb">
      <div slot="center">创建预约课</div>
    </tabber>
    <scroll class="school-ziliao">


        <inp @dianji="vvv" class="xxx" hig="100px" ref="title">
          <div slot="text">标题</div>
        </inp>
        <inp @dianji="vvv" class="xxx" hig="100px" ref="target">
          <div slot="text">学习目标</div>
        </inp>
        <inp @dianji="vvv" class="xxx" hig="40px" ref="price">
          <div slot="text">每分钟/元</div>
        </inp>
        <inp @dianji="vvv" class="xxx" hig="40px" ref="min_minute">
          <div slot="text">几分钟起预约</div>
        </inp>
        <div class="data-time">
          <div >挑选时间</div>
          <vtab :comt="comt" @additem="additem"></vtab>
        </div>
      <button @click="chongzhi">充值</button>
      <div class="data-time">
        <div >上传图片</div>
        <imgloader ref="pic"></imgloader>
      </div>
      <button @click="zhibo">直播</button>

<div>
  <ul>
    <li v-for="item in str">
      <div>{{item.dbt}}</div>
      <div>{{item.tp}}</div>
      <div>{{item.xbt}}</div>
    </li>


  </ul>
</div>



    </scroll>
  </div>
</template>

<script>
  import tabber from "../components/tabber/tabber";
  import scroll from "../components/scroll/scroll";
 import inp from "../components/textArea/inp";
 import comtent from "../components/textArea/comtent";
 import imgloader from "../components/textArea/imgloader";
 import vtab from "../components/textArea/vantab";
    export default {
        name: "school",
      components:{
        tabber,
        scroll,
        inp,
        comtent,
        imgloader,
        vtab
      },
      data(){
          return {
            kkk:'123',
            study:"",
            comt: [],
            add:{}

          }
      },
      created() {
        this.$http.get('/v2/api/appoint/get-config?token=KG5yGgp%2FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg',
          {
          params:{
            app_version:'2.6.1',//版本号
            device:'android',//设备类型
            language:'en',//语言
            //token:'KG5yGgp%2FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg'
            // KG5yGgp%252FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg
            // title:this.$refs.title.ouou,//标题
            // target:this.$refs.target.ouou,//预约课目标
            // price:this.$refs.price.ouou,//每分钟价格
            // min_minute:this.$refs.min_minute.ouou,//最小预约时间
            // pic:this.$refs.pic.fileList,//图片
            // time_arr: ,//时间
          }
       }
        ).then(res =>{
          //console.log(res.data.data.config.days);
         // console.log(res);
          this.comt.push(...res.data.data.config.days)
          console.log(this.comt);
          console.log(this.comt[0].times[0].isConfig);
        })
      },
      methods:{
        dianji(){
          //console.log(this.$refs.abc.value.length);
        },
        vvv(ouou){
          //console.log(ouou);
        },
        additem(mba){
          //console.log(mba);
         // console.log(this.comt[mba.index].times[mba.mba].isConfig);
          this.comt[mba.index].times[mba.mba].isConfig=!this.comt[mba.index].times[mba.mba].isConfig
        },
        chongzhi(){
          for (let i=0;i<this.comt.length;i++)
          {
             // this.comt[i].param_date=[1,2,3,4,5]

            //console.log(this.comt[i].param_date);
            //this.add.push( this.comt[i].param_date)
            //console.log(this.add);
            let str=""
            for (let j=0;j<this.comt[i].times.length;j++)
            {


            if (this.comt[i].times[j].isConfig==true)
            {

              str+=this.comt[i].times[j].time+","




            }
              //this.add[this.comt[i].param_date]=str

            }
            if (str.length > 0) {
              str = str.substr(0, str.length - 1);
              this.add[this.comt[i].param_date]=str


            }
           // console.log(str);



          }
          console.log(this.add);
          this.$http.get('/v2/api/appoint/save-config?token=KG5yGgp%2FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg',
            {
              params:{
                app_version:'2.6.1',//版本号
                device:'android',//设备类型
                language:'en',//语言
                //token:'KG5yGgp%2FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg'
                // KG5yGgp%252FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg
                 title:this.$refs.title.ouou,//标题
                 target:this.$refs.target.ouou,//预约课目标
                 price:this.$refs.price.ouou,//每分钟价格
                 min_minute:this.$refs.min_minute.ouou,//最小预约时间
                 //pic:this.$refs.pic.fileList,//图片
                 time_arr: this.add,//时间
              }
            }
          ).then(res =>{
            //console.log(res.data.data.config.days);
            // console.log(res);
            //this.comt.push(...res.data.data.config.days)
            //console.log(this.comt);
           // console.log(this.comt[0].times[0].isConfig);
            console.log(res)
          })
  },
        zhibo(){
            this.$http.post("/v2/api/live/open-live?token=KG5yGgp%2FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg",{

                app_version:'2.6.1',//版本号
                device:'android',//设备类型
                language:'en',//语言
                //token:'KG5yGgp%2FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg'
                // KG5yGgp%252FIxZNUw1EM2YLXlk8eAAxTkAzHj16VH9bZC0iOVh0aUVpXg
                live_title:this.$refs.title.ouou,//标题
              pic:"../assets/img/logo.png",

                // price:this.$refs.price.ouou,//每分钟价格
                // min_minute:this.$refs.min_minute.ouou,//最小预约时间
                // //pic:this.$refs.pic.fileList,//图片
                // time_arr: this.add,//时间
                appoint_time:"2020-07-09 17:20:00"

            }).then(res=>{
              console.log(res);
            })
        }

      }
    }
</script>

<style scoped>


  #school{
    position: relative;
    height:100vh;
  }
  .school-ziliao
  {
    position: absolute;
    top:44px;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
  }
  .school-tb
  {

    position: fixed;
    z-index: 99;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;

  }

  .xxx{
    margin: 10px auto ;

  }
  .data-time
  {
    width: 93%;
    margin: 10px auto;
  }

</style>

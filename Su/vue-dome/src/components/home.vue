<template>
    <div id="home">
         <Header/>
         <Tab/>
         <Over/>
         <List/>
         <div class="footer">
              <span @click="changeFlag"><i class="icon iconfont icon-jia"></i>发起任务</span>
         </div>
         <transition name="show">
             <div class="shade" v-show="flag">
             <div class="hea" @click="changeFLag"></div>
             <div class="foot"><span @click="application(0)">加班</span><span @click="application(1)">休假</span></div>
         </div>
         </transition>

    </div>
    
</template>
<script>
import Header from "./header"
import Tab from "./tab"
import Over from "./over"
import List from "./list"
import {mapActions} from "vuex"
export default {
    name:'home',
    props:{

    },
    components:{
         Header,
         Tab,
         Over,
         List
    },
    data(){
        return {
              flag:false,
              list:[
                  {type:'overtime'},{type:'vacation'}
              ]
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(["getUser","getList"]),
         changeFlag(){
               this.flag=true;
          },
        changeFLag(){
               this.flag=false;
          },
        application(i){
             this.$router.push({path:`/applicationn/${this.list[i].type}`})
        }  
    },
    created(){
          this.getUser()
          this.getList()
    },
    mounted(){
         
    }
}
</script>
<style  lang="scss">
@import "../scss/common.scss";
@import "../fonts/iconfont.css";
#home,.shade{
    width:100%;
    height:100%;
  display: flex;
  flex-direction: column;
}




.iconfont{
   font-size: pxTorem(18px); 
}
.footer{
    background: red;
    color:white;
    text-align: center;
    border-radius: pxTorem(30px);
    line-height: pxTorem(40px);
    border:1px solid #ccc;
    width:pxTorem(120px);
    height:pxTorem(40px);
    position:fixed;
    right:pxTorem(20px);
    bottom: pxTorem(20px);
}
.shade{
   
    position:fixed;
    top:0;
    left:0;
  
   .hea{
        flex:1;
         background: black;
         filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;
   }
   .foot{
       width:100%;
       height:pxTorem(120px);
       display: flex;
       background: white;
       span{
           font-size: pxTorem(18px);
           text-align: center;
           line-height: pxTorem(120px);
           flex:1;
           .iconfont{
   font-size: pxTorem(18px); 
}
       }
   }
}

.show-enter-active {
    transition: all .3s ease;
    }
.show-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.show-enter, .show-leave-to{
  transform: translateY(10px);
  opacity: 0;
}


</style>
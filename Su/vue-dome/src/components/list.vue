<template>
         <ul class="list">
             <li v-for="(item,index) in list" :key="index" @click="liClick(item.applicationNumber,item.list_type)">
                <span><b>{{item.applicationNumber}}</b> <b></b>  <b>待审批</b></span>
                <span><b>申请人:<a>{{item.nickname}}</a></b><b>加班类型 <a>{{Change(item.type,item.list_type)}}</a></b></span>
                <span><b>加班日期:<a>{{new Date(item.startTime).toLocaleDateString()}}</a></b>  <p>加班时数 <a>{{Time(item.startTime,item.endTime)}}</a></p></span>
             </li>
         </ul> 
</template>
<script>
import {mapState,mapMutations} from "vuex"

export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
         ...mapState(["list","num"])
    },
    methods:{
          liClick(s,ss){
                this.$router.push({path:`/details/${ss}/${s}`})
          },
          Time(start,end){
              var  st =  new Date(new Date(start).toGMTString())*1;
              var  en =  new Date(new Date(end).toGMTString())*1;
              var ne = (en-st)/1000/60/60/24
               ne=   ne.toFixed(1)
              return ne
          },
          Change(i,ii){
           if(ii ==="overtime"){
               switch (i) {
                   case 1:
                       return "双休日"
                   case 2:
                       return "节假日"
                   case 3:
                       return "工作日"            
                       
                   default:  "不知道了"
                       break;
               }}else{
                    switch (i) {
                   case 1:
                       return "年假"
                   case 2:
                       return "休假"   

                   default:  "不知道了"
                       break;
               }
               } 
          }
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../scss/common.scss";
@import "../fonts/iconfont.css";
.list{
    flex:1;
    overflow-y:scroll;
    li{
        font-size:pxTorem(18px);
        width:100%;
        height:pxTorem(90px);
        border-bottom: pxTorem(2px) solid #ccc;
        display: flex;
        flex-direction: column;
        span{
            flex:1;
            display: flex;
            margin-top:pxTorem(10px); 
            b{
                
                font-size:pxTorem(14px);
                margin-left: pxTorem(8px);
                flex:1;
            }
            p{
                font-size:pxTorem(14px);
                width:pxTorem(120px);
            }
        }
    }
}
</style>
<template>
    <div class="details">
       <div class="hed">
            <span @click="$router.back()"><i class="icon iconfont icon-xiangzuo"></i></span>
             <span>{{Change()}}</span>  
             <span></span>
       </div>
       <div class="Top">
        <div class="head_portrait"><img :src=Details.avatar></div>
          <div class="qk">

            <div class="left">
             <li><span>申请人姓名</span> <span>{{Details.nickname}}</span></li>
             <li><span>直接主管</span><span>{{Details.nickname}}</span></li>
            </div> 
             <span><i class="icon iconfont icon-angle-right"></i></span>
          </div>
       </div>
         <div class="apped">
            <div class="application">
               <li><span><h2>申请信息</h2></span><span></span></li>
               <li><span><b>{{Change()}}日期*</b></span><span>{{new Date(Details.startTime).toLocaleDateString()}}</span></li>
               <li><span><b>{{Change()}}类型</b></span><span>{{Changee(Details.type,Details.list_type)}}</span></li>
               <li><span><b>{{Change()}}起始时间*</b></span><span>{{new Date(Details.startTime).toLocaleString()}}</span></li>
               <li><span><b>{{Change()}}截止时间</b></span><span>{{new Date(Details.endTime).toLocaleString()}}</span></li>
               <li><span><b>共计时间</b></span><span>{{Time(Details.startTime,Details.endTime)}}</span></li>
          </div>
          <div class="apple">
               <span>加班事由<b>*</b></span>
               <li>{{Details.describes}}</li>
          </div>
          <div class="foot">
               <span>审批历史</span>
               <span @click="$router.back()">退回</span>
               <span>提交</span>
           </div> 
          <div class="uploading">
               <li>上传附件</li><br>
               <ul>
                  <li v-for="(item,index) in Details.annex" :key="index">
                  <img :src="`http://localhost:3000`+item">
               </li>
               </ul>
              
              
          </div>  
         </div>  
    </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           text:'',
           uid:'',
           start:''
        }
    },
    computed:{
          ...mapState(["Details"])
    },
    methods:{
           ...mapActions(["getDetails"]),
            Change(){
                 if(this.text=="overtime"){
                     return "加班申请表"
                 }else{
                     return "休假申请表"
                 }  
            },
        Changee(i,ii){
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
               
          },
             Time(start,end){
              var  st =  new Date(new Date(start).toGMTString())*1;
              var  en =  new Date(new Date(end).toGMTString())*1;
              var ne = (en-st)/1000/60/60/24
               ne=   ne.toFixed(1)
              return ne
          }, 


    },
    created(){
         this.text=this.$route.params.type
         this.uid=this.$route.params.id;
         this.getDetails({uid:this.uid,text:this.text})
         
    },
    mounted(){

    }
}
</script>
<style lang="scss">
 @import "../scss/common.scss";
@import "../fonts/iconfont.css";
*{
    padding: 0;
    margin:0;
     list-style: none;
    }
body,html,#app{
    width:100%;
    height:100%;
}


.details{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .hed{
        height:pxTorem(50px);
        display: flex;
        background: green;
        span{
            text-align: center;
            line-height: pxTorem(50px);
            font-size: pxTorem(18px);
            color:white;
            font-weight: 800;
            flex:1;
            i{
            font-size: pxTorem(18px);
            color:white;
            }
        }
    }
    .Top{
       background: green;
       height:pxTorem(80px);
       width:100%;
       display: flex;
       .head_portrait{
           padding-left:pxTorem(10px);
           padding-top:pxTorem(10px);
           width:pxTorem(60px);
           height:pxTorem(60px);
           text-align: center;
           line-height: pxTorem(80px);
           img{
               width:100%;
               height:100%;
               border-radius: 50%;
           }
       }
       .qk{
           flex:1;
           display: flex;
         .left{
             flex:1;
            display: flex;
            height:pxTorem(80px);
            flex-direction: column;
            li{
              height:pxTorem(40px);
              width:100%;   
               display: flex;  
                span{
                    color:white;
                    line-height: pxTorem(40px);
                   flex: 1;
                }
            } 
         }  
          span{
             width:pxTorem(100px);
             height:pxTorem(80px); 
             text-align: center;
            
             i{
                  line-height: pxTorem(80px);
                 color:white;
                 font-size: pxTorem(25px)
             }
          } 
       }
      

    }

    .apped{
        width:100%;
        flex:1;
        overflow-y:scroll;
        
    } 
    .application{
       margin: pxTorem(20px);
       width:90%;
        border-radius: pxTorem(10px);
        display: flex;
        flex-direction: column;
        background: white;
          box-shadow: #ccc pxTorem(-2px) pxTorem(-2px) pxTorem(10px) pxTorem(10px);
       li{
           flex:1;
           height:pxTorem(60px);
           line-height: pxTorem(60px);
           display: flex;
           span{
               flex:1;
               text-align: center;
               h2{
                  font-size: pxTorem(18px); 
               }
               b{
                  color:#ccc; 
               }
           }
       }

    }
    .apple{
       margin: pxTorem(20px);
       width:90%;
       height:pxTorem(120px);
        display: flex;
        border-radius: pxTorem(10px);
        flex-direction: column;
        background: white;
         box-shadow: #ccc pxTorem(-2px) pxTorem(-2px) pxTorem(10px) pxTorem(10px);
       span{
          width:100%;
          height:pxTorem(40px);
          border-bottom: 1px solid #CCC;
          line-height: pxTorem(40px);
          font-size: pxTorem(20px);
          padding-left:pxTorem(10px);
          b{
              color:red;

          }
       }
       li{
           padding-left:pxTorem(10px);
           flex:1;
       }
     } 
   .foot{
      width:100%;
      height:pxTorem(50px);
      line-height:pxTorem(50px);
      position: fixed;
      left:0;
      bottom: 0;
      display: flex;
      span:nth-child(1){
          width:pxTorem(80px);
          text-align: center;
         background: #ffffff;
         color:#ccc;
      }
      span:nth-child(2){
          background: black;
          color:white;
          width:30%;
          height:pxTorem(50px);
          text-align: center;
      }
      span:nth-child(3){
          height:pxTorem(50px);
          background: green;
          color:white;
         flex:1;
          text-align: center;
      }
   }
   .uploading{
       margin: pxTorem(20px);
       width:90%;
       height:pxTorem(150px);
        display: flex;
        border-radius: pxTorem(10px);
        flex-direction: column;
        background: white;
         box-shadow: #ccc pxTorem(-2px) pxTorem(-2px) pxTorem(10px) pxTorem(10px);
         ul{
             width:100%;
             height:pxTorem(50px);
             display: flex;
         }
         li{
             width:pxTorem(80px); 
             height:pxTorem(50px);
             display: inline-block;
             line-height: pxTorem(50px);
             font-size: pxTorem(18px);
             padding-left:pxTorem(10px);
         }
         img{
            margin-left:pxTorem(10px);
           width:100%;
           height:100%;
         }
   }

}
</style>
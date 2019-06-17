<template>
    <div class="applicationn">
       <div class="hed">
            <span @click="$router.back()"><i class="icon iconfont icon-xiangzuo"></i></span>
             <span>{{Change()}}</span>  
             <span></span>
       </div>
       <div class="Top">
        <div class="head_portrait"><img :src=User.avatar></div>
          <div class="qk">

            <div class="left">
             <li><span>申请人姓名</span> <span>{{User.nickname}}</span></li>
             <li><span>直接主管</span><span>{{User.nickname}}</span></li>
            </div> 
             <span><i class="icon iconfont icon-angle-right"></i></span>
          </div>
       </div>
         <div class="apped">
            <div class="application">
               <li><span><h2>申请信息</h2></span><span> </span></li>
               <li><span><b>{{Change()}}日期*</b></span><span>
                   
                            <div class="block">
                           <span class="demonstration"></span> 
                            <el-date-picker
                            v-model="time"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                   </span></li>
               <li><span><b>{{Change()}}类型</b></span><span>
                    <select  class="lx" @change="ch">
                        <option v-for="(item,index) in chang()" :key="index" >{{item.name}}</option>
                    </select>
                   </span></li>
               <li><span><b>{{Change()}}起始时间*</b></span><span>
                            <div class="block">
                                <span class="demonstration"></span>
                                <el-date-picker
                                v-model="startTime"
                                type="datetime"
                                placeholder="选择日期时间" @input="changee">
                                </el-date-picker>
                            </div>
                   </span></li>
               <li><span><b>{{Change()}}截止时间</b></span><span>
                           <div class="block">
                                <span class="demonstration"></span>
                                <el-date-picker
                                v-model="endTime"
                                type="datetime"
                                placeholder="选择日期时间" @input="changee"  >
                                </el-date-picker>
                            </div>
                   </span></li>
               <li><span><b>共计时间</b></span><span> {{total}}   </span></li>
          </div>
          <div class="apple">
               <span>加班事由<b>*</b></span>
               <li><input type="text" v-model="thing"></li>
          </div>
          <div class="foot">
               <span @click="$router.back()">取消</span>
               <span @click="btn">提交</span>
           </div> 
          <div class="uploading">
               <input type="file"   @input="file" />
               <ul>
               <li v-for="(item,index) in userfile" :key="index">
                  <img :src="`http://localhost:3000`+item" alt="">
                  <b @click="userfile.splice(index,1)">X</b>
               </li>
                </ul>
          </div>  
         </div>  
         <El/>
    </div>
</template>
<script>
import El from "./el-alert"
import {mapActions,mapState} from "vuex"
import api from "../api/index"
export default {
    props:{

    },
    components:{
        El
    },
    data(){
        return {
          thing:'',
           type:"",
           value: '',
           time:'',
           over:[{name:"双休日",id:1},{name:"节假日",id:2},{name:"工作日",id:3}],
           vaca:[{name:"年假",id:1},{name:"调休",id:2}],
           startTime:'',
           endTime:'',
           total:'',
           userfile:[],
           id:0
        }
    },
    computed:{
          ...mapState(["User"]),

    },
    methods:{
            Change(){
                 if(this.$route.params.type=="overtime"){
                     this.type=0;
                     return "加班申请表"
                 }else{
                     this.type=1;
                     return "休假申请表"
                 }  
            },
            chang(){
                switch (this.type) {
                    case 0:
                         return this.over
                        break;
                    case 1:
                        return this.vaca
                    
                }
            },
             changee(){
                 if(this.startTime=='' || this.endTime==""){
                     return this.total=0
                 }else{
                      var start=new Date(new Date(this.startTime).toGMTString())*1;
                      var end=new Date(new Date(this.endTime).toGMTString())*1;
                         if(start<end){
                             var ne = (end-start)/1000/60/60/24
                           ne=ne.toFixed(1)
                        this.total=ne
                         }else{
                              this.$alert("求求你当个人吧")
                         }
                       
                 }

            },
            file(e){

              const file =e.target.files[0]
       if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(e.target.value)) {  
            alert("图片类型必须是.gif,jpeg,jpg,png中的一种");  
            e.target.value=""
            
        }else{
              const formdata = new FormData();
              formdata.append("file",file);
              console.log(formdata);
              api.upload(formdata).then(res=>{
                  console.log(res.data.url)
                 const  url= res.data.url
                 console.log(url)
                  this.userfile.push(url)
              }) 

        } 
           
            },
            ch(e){
                const li=this.chang();
               const id=li.filter(res=>res.name==e.target.value)[0].id
               this.id=id;
            },
            btn(){
                const  list={
                    type:this.$route.params.type,
                    data:{
                    annex:this.userfile,
                    describe:this.thing,
                    endTime:this.endTime,
                    startTime:this.startTime,
                    type: this.id ,
                }
                }
                 console.log(list.type);
                 console.log(list.data.type);
               api.apply(list).then(res=>{
                     alert("提交完成")
                     window.location.href="http://localhost:8080"

               }) 


            }
             


    },
    created(){

         
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


.applicationn{
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
          background:white;
          color:green;
          width:30%;
          height:pxTorem(50px);
          text-align: center;
      }
      span:nth-child(2){
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
             flex:1;
             width:100%;
             display: flex;
         }
         li{
             width:pxTorem(70px);
             height:pxTorem(70px);
             display: inline-block;
             height:pxTorem(50px);
             line-height: pxTorem(50px);
             font-size: pxTorem(18px);
             padding-left:pxTorem(10px);
             padding-top:pxTorem(10px);
             position: relative;
         }
         img{
            
            width:100%;
            height:100%; 
         }
         b{
             width:pxTorem(20px);
             height:pxTorem(20px);
             display: block;
             background: red;
             text-align: center;
             line-height: pxTorem(20px);
             font-size: pxTorem(16px);
             border-radius: 50%;
             color:white;
            position: absolute;
            top:0;
            right:pxTorem(-10px); 
         }
   }

}
.block{
    font-size: pxTorem(18px);
}

             select {
                width:pxTorem(80px);
                height:pxTorem(30px); 
                font-size:pxTorem(14px); 
                text-align: center;
                option{
                    text-align: center;
                     font-size:pxTorem(12px); 
                }
             }
</style>
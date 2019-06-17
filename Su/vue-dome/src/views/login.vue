<template>
    <div id="login">
        <div class="heade">
         <p><i class="icon iconfont icon-guanbi-01"></i></p>
         <h2>欢迎来到星享俱乐部</h2>
        </div>
       <div class="bttton">
            <input type="number"  placeholder="手机号码" v-model="phone" >
            <input type="password" placeholder="密码" v-model="psd" > 
             <button @click="loade">登录/注册</button>
       </div>
       <div class="foote">
             <a href="">使用账号密码登录</a>
             <p>使用以下方式进行账户注册/登录</p>
             <span>
               <i class="icon iconfont icon-taobao1"></i>  
               <i class="icon iconfont icon-zhifubao1"></i>  
             </span>
       </div>
    </div>
</template>
<script> 
import api from "../api/index"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
                  phone:'',
                  psd:''
        }
    },
    computed:{
         
        
    },
    methods:{
             loade(){
                 const data={
                     phone:this.phone,
                     password:this.psd
                 }
               api.getLogin(data).then(res=>{
                  window.localStorage.setItem("token",res.data.token) 
                   this.$router.back();
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
 #login{
    width:100%;
    height:100%;
  display: flex;
  flex-direction: column;
}
.heade{
    width:100%;
    height:pxTorem(100px);
    box-shadow: #ccc pxTorem(8px) pxTorem(8px) pxTorem(8px) 0;
    p{
        margin-left:pxTorem(10px);
       font-size: pxTorem(25px); 
        
        .icon-guanbi-01{
            font-size: pxTorem(18px);
            font-weight: 800;
        }
    }
    h2{  
         margin-left:pxTorem(10px);
         font-size: pxTorem(30px); 
         font-weight: 800;
    }
}
.bttton{
    margin-bottom: pxTorem(50px);
    input{
       width:90%;
       margin-left:pxTorem(18px);
       height:pxTorem(60px); 
       font-size: pxTorem(20px);
       border-bottom: pxTorem(1px) solid #ccc;
    }
    button{
        width:pxTorem(250px);
        height:pxTorem(40px);
        font-size: pxTorem(18px);
        margin-top:pxTorem(40px);
        margin-left:pxTorem(60px);
        border-radius: pxTorem(40px);
        color:white;
        font-weight: 800;border:0;

    }
}
.foote{
    flex:1;
    width:100%;
    display: flex;
    flex-direction: column;
    a{
        width:100%;
       height:pxTorem(50px);
       line-height: pxTorem(50px);
       text-align: center; 
       color:green;
    }
    p{
        margin-top:pxTorem(50px);
        width:100%;
        height:pxTorem(60px);
        text-align: center;
    }
    span{
        color:#ccc;
        flex:1;
        text-align: center;
    }
    i{
        font-size: pxTorem(50px);
    }
    .icon-taobao1{
        color:orange;
    }
     .icon-zhifubao1{
        color:skyblue;
    }
}
 



</style>
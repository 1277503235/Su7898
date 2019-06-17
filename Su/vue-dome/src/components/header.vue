<template>
        <div class="header">
             <a><i class="icon iconfont icon-xiangzuo"></i></a>
             <span>加班/休假</span>  
             <a><i class="icon iconfont icon-zixun"></i> <i class="icon iconfont icon-fangdajing"></i></a>
         </div>
</template>
<script>
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

    },
    methods:{

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
.header{
    i{
       font-size: pxTorem(20px); 
    }
   width:100%;
   height:pxTorem(40px);
   display:flex;
   line-height: pxTorem(40px);
   span{
       text-align: center;
       flex:1;
       font-size: pxTorem(20px);
       font-weight: 800;
   }
   a{
       font-size: pxTorem(18px);
       font-weight: 800;
       text-align: center;
      width:pxTorem(120px);
      height:pxTorem(40px); 
      display: flex;
      i{
          flex:1;
      }
   }
}
</style>
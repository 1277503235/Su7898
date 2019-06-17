<template>
     <ul class="tab">
            <li v-for="item in list" :key="item.id"  @click="IndexChange(item.id)" >
                <a :class="{activ: item.id==index }"><i :class="'icon iconfont ' +item.icon"></i></a><br/>
                <span>{{item.name}}</span>
            </li>

        </ul>
</template>
<script>
import {mapMutations,mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {  
                  index:0,
                  list:[
                      {
                          name:'待处理',
                          icon:"icon-05",
                          id:0
                      },
                      {
                          name:'已发起',
                          icon:"icon-07",
                          id:1
                      },{
                          name:'已处理',
                          icon:"icon-xuanzhong-01",
                          id:2
                      }
                  ]
        }
    },
    computed:{
            
    },
    methods:{
          ...mapMutations(["Shan"]),
          ...mapActions(["getList"]),
         
           IndexChange(i){
               console.log(i)
                this.index=i
                this.Shan(i)
                this.getList()
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

.tab{
    height:pxTorem(80px);
    width:100%;
    display: flex;
    
    border-bottom: pxTorem(1px) solid darkgrey;
    box-shadow: #ccc pxTorem(8px) pxTorem(8px) pxTorem(8px) 0;
      i{
           font-size: pxTorem(20px); 
           
           }
    li{
       font-size: pxTorem(16px); 
       padding:pxTorem(20px);
       flex:1;
       text-align: center;  
       
      a{
       color:#ccc;
      }
       .activ{
           color:#000;
       }
         
        

    }
       
      
    
   
}

</style>
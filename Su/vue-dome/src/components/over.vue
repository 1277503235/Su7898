<template>
          <div class="over">
             <span></span>
             <li>
                <span v-for="item in list" :key='item.id' :class="{btn: item.id==index }" @click="changes(item.id,item.dd)">{{item.name}}</span>
             </li>  
             <span>
                <a>icon批</a>
                <a @click="order">icon 排</a>
             </span>
          </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
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
                      name:'加班',
                      id:'0' ,
                      dd:"overtime"
                   },
                   {
                       name:"休假",
                       id:'1',
                       dd:"vacation"
                   }
               ]   
        }
    },
    computed:{
        
    },
    methods:{
          ...mapMutations(["Chan"]),
          ...mapActions(["getList"]),

           changes(ii,dd){ 
               console.log(dd);
               this.index=ii;  
               this.Chan(dd) 
               this.getList()
           },
           order(){
               this.$router.push({path:'/order'})
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

.over{
  width:100%;
  height:pxTorem(60px);
  margin-top: pxTorem(30px);  
  display: flex;
  line-height: pxTorem(60px);
  span{
      flex:1;
  }   
  li{
     line-height:pxTorem(30px);
     text-align: center;
     width:pxTorem(200px);
     height:pxTorem(60px);
     display: flex;
     span{
      flex:1;
      border:1px solid #ccc;
     }
     
     span:first-child{
          margin-top:pxTorem(15px);
          margin-left:pxTorem(10px);
          margin-bottom:pxTorem(15px);
          border-radius: pxTorem(20px) 0 0 pxTorem(20px);
      }
       span:nth-child(2){
          margin-top:pxTorem(15px);
          margin-right:pxTorem(10px);
          margin-bottom:pxTorem(15px);
          border-radius:  0 pxTorem(20px) pxTorem(20px) 0 ;
      }
      .btn {
          background: red;
          color:white;
      }
  }
    a{
        color:black;
    } 
}
</style>
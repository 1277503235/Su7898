import Vue from "vue"
import Vuex from "vuex"
import api from "../api/index"
Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        data:{
            page:1, 
            pageSize:10,
            create_at :0,
            type:"overtime",
            status:0,
         },
         User:"",
         list:[],
         Details:[]


    },
    mutations:{
     setUser(state,res){
        state.User=res
     },
     setList(state,red){
         state.list=red
         console.log(state.list)
     },
     Chan(state,dd){
         state.data.type=dd
     },
     Shan(state,dx){
        state.data.status =dx
     },
     setDetails(state,de){
         state.Details=de
     }

         
       
    },
    actions:{
        getUser({commit}){
            api.getUser().then(res=>{
                commit("setUser",res.data.data)
            })

     },
     getList(context){
         var date=context.state.data  
        api.getList(date).then(res=>{
            context.commit("setList",res.data.data)
        })
   
 },
    getDetails(context,data){
        console.log(data)
        api.getDetails(data).then(res=>{
            console.log(res.data.data)
            context.commit("setDetails",res.data.data)
        })

    }




    }
   


})
export default store
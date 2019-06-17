  import request from "../utils/request"

   const api={
          // 是否登录
         getUser:()=>request.get("/api/user/info"),
         // 登录验证
         getLogin:(data)=> request.post("/api/login",data),
          // 数据
         getList:(date)=> request.get("/api/task/list",{...date}),
         // 详情
         getDetails:(data)=>request.get(`/api/apply/${data.text}`,{applicationNumber:data.uid}),
        // 上传图片
         upload:(data)=>request.post("/api/upload",data),   
          // 提交 
         apply:(data)=>request.post(`/api/apply/${data.type}`,data.data)
         } 

         export default api
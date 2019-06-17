import elAlert from "../components/el-alert.vue";
export default {
    install(Vue){
      const AlertClass=Vue.extend(elAlert); //组件类
      Vue.prototype.$alert=(text)=>{
        const AlertComponent= new AlertClass({
          propsData:{
            text
          }
        })  //组件实例
      AlertComponent.$mount()
      document.body.appendChild(AlertComponent.$el)
      }
    }
  }
  
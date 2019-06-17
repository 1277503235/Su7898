<template>
    <div>
       排序
       {{User}}
       {{list}}
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

        }
    },
    computed:{
          ...mapState(["User","list"])
    },
    methods:{
         ...mapActions(["getUser","getList"])
    },
    created(){
         this.getUser();
         this.getList();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
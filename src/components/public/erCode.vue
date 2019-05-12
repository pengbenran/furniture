<template>
    <div class="NavMask" v-if="isMark">
      <div class="Maskbg" @click="closeMark"></div>
      <div class="MaskImg">
        <img src="../../assets/images/home/qc.png" alt="..."/>
      </div>
    </div>
</template>
<script>
export default {
     data () {
        return {
          isMark:false
        }
    },
    methods:{
      openMark(){
        this.isMark=true
      },
      closeMark(){
        this.isMark=false
      }
    }
}
</script>
<style scoped>
.Maskbg{background: rgba(204, 204, 204, 0.5);width: 100%;height: 100%;}
.NavMask{position:fixed;align-items: center;justify-content: center;top:0;left: 0;width: 100%;height: 100%;}
.MaskImg{
      position: absolute;
      width:36%;
      overflow: hidden;
      left: 32%;
      top: 20%;
}
.MaskImg img{width: 100%;}

</style>

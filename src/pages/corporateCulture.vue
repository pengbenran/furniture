<template>
  <div class="containt">
    <Header/>
    <!--header end-->

    <div class="main">
       <div class="mainWarp">
         <strong>企业实力</strong>
         <div class="info">
           你可能曾经这么想过，如果我一个小时可以挣100块，
           那我每天多工作一小时是不是就可以多挣100块，于是我在拼命加班，挣那个加班费，或者接些私活，熬夜挣个辛苦钱。
           现在千万不要有这种想法了，你拼了命加班，一天也不会超过24小时，更何况大部分公司是没有加班费的。不要再去接那些私活了，
           你接的私活基本都是那些你驾轻就熟的，做了一遍又一遍，并不会有什么提升。你要开始思考怎么提升你的单位时间价值，让你的一小时可以挣更多的钱。
         </div>
       </div>
    </div>
    <!--main end-->

   <Footer/>
   <!--footer end-->
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
export default {
  name: 'corporateCulture',
  components:{Header,Footer},
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>
.main{background-image: url('../../static/corporateCulture/bg.png');height: 1050px;background-size: cover;}
.mainWarp{height: 600px;width: 999px;background: rgba(255, 255, 255, 0.45);}
</style>

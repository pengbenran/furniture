<template>
  <div class="container-fluid CaseOur magTop">
    <div class="row">
        <div class="col-xs-12 col-lg-6">
          <img src="static/images/home/company.png" alt="...">
        </div>
        <div class="col-xs-12 col-lg-6 CaseWarp">
          <div class="CaseOurPos">
            <strong>OUR CMPANY</strong>
            <div class="info">发源于1995年，是大自然家具环保恐惧前段时间，看到群里一些小伙伴面试的时候被面试官问到这类题目。平时大家开发vue项目的时候，相信大部分人都是使用 vue-cli
                  脚手架生成的项目架构，然后 npm run install 安装依赖，npm run serve启动项目然后就开始写业务代码了前段时间，看到群里一些小伙伴面试的时候被面试官问到这类题目。平时大家开发vue项目的时候，相信大部分人都是使用 vue-cli脚手架生成的项目架
                  构，然后 npm run install 安装依赖，npm run serve启动项目然后就开始写业务代码了</div>  
          </div>
          <div class="CaseBnt">
            <button type="button" class="btn btnMore">More+</button>
          </div>
        </div>
      </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.CaseOur{
  width: 80%;
  text-align: left;
}
.magTop{margin-top: 100px;}
.CaseOur img{width: 100%;}
.CaseOur strong{font-size: 60px;font-weight: bold;font-family: 'STHeiti'}
.CaseOur .info{font-size: 14px;font-weight: bold;font-family: 'STHeiti';letter-spacing:1px;}
.btnMore{border:1px solid #0e887a;color: #0e887a;background: #fff;padding: 5px 75px;font-family: "Microsoft YaHei";font-weight: bold;float: right;margin-top: 30px;}

</style>

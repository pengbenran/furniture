<template>
  <div class="container-fluid CaseOur magTop">
    <div class="row">
        <div class="col-xs-12 col-lg-6 scroll opacity" data-animation="fadeInLeft">
          <img src="static/images/home/company.png" alt="...">
        </div>
        <div class="col-xs-12 col-lg-6 CaseWarp scroll opacity" data-animation="fadeInRight">
          <div class="WarpInfo">
          <div class="CaseOurPos">
              <strong>OUR CMPANY</strong>
              <div class="info">以促进人们的居家愉悦和生活品质为愿景，我们公司运用地板与家居产品制
造领域的专业经验，旨在让消费者享有高品质绿色家居生活。
为树立健全的绿化、环保意识，公司在生活公益方面身体力行，
为了向全社会普及绿色、健康的生活方式。</div>  
            </div>
            <div class="CaseBnt">
              <button type="button" class="btn btnMore">More+</button>
            </div>
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
.magTop{margin-top: 200px;}
.CaseWarp{display: flex;align-items: center;}
.CaseOurPos{padding-left: 87px;box-sizing: border-box;}
.CaseOur img{width: 100%;}
.CaseOur strong{display: inline-block;margin-bottom: 1.5rem;font-size: 60px;font-weight: bold;font-family: 'STHeiti'}
.CaseOur .info{font-size: 14px;font-weight: bold;font-family: 'STHeiti';letter-spacing:1px;}
.btnMore{border:1px solid #0e887a;color: #0e887a;background: #fff;padding: 5px 75px;font-family: "Microsoft YaHei";font-weight: bold;float: right;margin-top: 30px;}

</style>

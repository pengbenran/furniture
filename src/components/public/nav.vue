<template>
   <div>
    <header class="header">
        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light inav">
        <a class="navbar-brand" href="/"><h1><img src="../../assets/logo.png" alt="七音"></h1></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto nav-ul">
            <li class="nav-item"><a class="nav-link" href="/">首页</a></li>
            <li class="nav-item"><a id="gsns" class="nav-link" href="#homeCase">企业文化</a></li>
            <li class="nav-item"><a class="nav-link" href="#Plugin">新闻中心</a></li>
            <li class="nav-item"><a class="nav-link" href="#advantage">产品中心</a></li>
            <li class="nav-item"><a class="nav-link" href="#wxcase">销售中心</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">服务中心</a></li>
            <li class="nav-item"><a class="nav-link" href="#ueji">设计中心</a></li>
            <li class="nav-item"><a class="nav-link" href="#zhaoshang">招商加盟</a></li>
        </ul>
        </div>
        </nav>
        </div>
    </header>
<!--header end-->
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header{position: absolute;top: 0;left: 0;width: 100%;z-index: 999;}
.navbar-nav .nav-link{color:#fff;font-family:'STFangsong';}
</style>

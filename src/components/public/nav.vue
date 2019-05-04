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
            <li class="nav-item"><router-link class="nav-link" to='/'>首页</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/corporateCulture' >企业文化</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/'>新闻中心</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/'>产品中心</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/'>销售中心</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/'>服务中心</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/'>设计中心</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/'>招商加盟</router-link></li>
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
.header{position: absolute;top: 0;left: 0;width: 100%;z-index: 999;padding: 0 150px;}
.navbar-nav .nav-link{color:#fff;font-family:'STFangsong';margin:0 40px;}
</style>

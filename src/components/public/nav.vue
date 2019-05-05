<template>
    <header class="header">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light inav">
                <div class="logo"><img src="../../assets/logo.png" alt="七音" class="d-block w-100"></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto nav-ul">
                        <li class="nav-item"><router-link class="nav-link" to='/'>首页</router-link></li>
                        <li class="nav-item dropdown" @click="ClickNav"><router-link class="nav-link" to='/corporateCulture' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">企业文化</router-link>
                            <span class="NavPos" :class="ShowNav?'SpanShow':'SpanHide'"></span>
                            <div class="dropdown-menu NavMenu" aria-labelledby="navbarDropdown">
                                <div class="row">
                                    <div class="col-md-3 List">
                                        <span><label>地板</label></span>
                                        <ul>
                                            <li>强化地板</li>
                                            <li>实木地板</li>
                                            <li>进口地板</li>
                                            <li>强化地板</li>
                                            <li>强化地板</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3 List"><span><label>实木家具</label></span>
                                     <ul>
                                            <li>强化地板</li>
                                            <li>实木地板</li>
                                            <li>进口地板</li>
                                            <li>强化地板</li>
                                            <li>强化地板</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3 List"><span><label>软装</label></span></div>
                                    <div class="col-md-3 List"><span><label>整体家庭</label></span></div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to='/newsCenter'>新闻中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/productCenter'>产品中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/salesCenter'>销售中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/serviceCenter'>服务中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/Designer'>设计中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/Join'>招商加盟</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    data () {
        return {
           ShowNav:false
        }
    },
    methods:{
        ClickNav(){
           this.ShowNav = !this.ShowNav;
           console.log(this.ShowNav ,"你好世界")
        }
    }
}
</script>
<style scoped>
.header{position: fixed;top: 0;left: 0;width: 100%;z-index: 999;}
.navbar-nav .nav-link{color:#fff;font-family:'STFangsong';padding: 0 10px;box-sizing: border-box;}
.navbar-nav .nav-link:hover{ 
 color: #379589;
 background-color: transparent !important;
}
.navbar-nav .nav-link:focus{
  color: #379589;
  background-color: transparent !important; 
}
.SpanShow{display: block;}
.SpanHide{display: none;}

.inav .NavMenu{background: rgba(255, 255, 255, 0.35);border-radius: 4px;color: #fff;}
.NavPos{position: absolute;left: 42%;top: 2.7rem;width:0;height:0;border-width:0 10px 10px;border-style:solid;border-color:transparent transparent rgba(255, 255, 255, 0.35);margin-top: -10px;}
.inav .logo{width: 123px;}
.inav .dropdown-menu{min-width:max-content;}
.inav .NavMenu .List{padding: 0}
.inav .NavMenu .List span{display: block;width: 8rem;text-align: center;}
.inav .NavMenu label{display: inline-block;border-bottom: 1px solid #fff;}
.inav .NavMenu .List ul{list-style: none;padding: 0;}
.inav .NavMenu .List li{text-align: center;font-size: .9rem;margin-bottom: .4rem;}
</style>

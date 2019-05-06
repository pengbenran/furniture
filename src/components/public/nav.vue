<template>
    <header class="header">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light inav" :class="isScroll?'socllo':''">
                <div class="logo"><img src="../../assets/logo.png" alt="七音" class="d-block w-100"></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto nav-ul">
                        <li class="nav-item"><router-link class="nav-link" :class="curretIndex==1?'selectOn':''" to='/'>首页</router-link></li>
                        <li class="nav-item ">
                            <router-link class="nav-link" to='/corporateCulture' :class="curretIndex==2?'selectOn':''">
                            企业文化
                            </router-link>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to='/newsCenter' :class="curretIndex==3?'selectOn':''">新闻中心</router-link></li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link" to='/productCenter' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :class="curretIndex==4?'selectOn':''">
                                <div @mouseenter.self="enter()" @mouseleave.self="leave()">产品中心</div>
                                <span class="NavPos" :class="ShowNav?'SpanShow':'SpanHide'"></span>
                                <div class="dropdown-menu NavMenu" :class="ShowNav?'show':''" aria-labelledby="navbarDropdown" @mouseenter.self="mouseEnter()" @mouseleave.self="mouseLeave()">
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
                                        <div class="col-md-3 List"><span><label>实木家具</label></span></div>
                                        <div class="col-md-3 List"><span><label>软装</label></span></div>
                                        <div class="col-md-3 List"><span><label>整体家庭</label></span></div>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to='/'>销售中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/serviceCenter' :class="curretIndex==6?'selectOn':''">服务中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/Designer' :class="curretIndex==7?'selectOn':''">设计中心</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to='/Join' :class="curretIndex==8?'selectOn':''">招商加盟</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    props: ['curretIndex','isScroll'],
    data () {
        return {
           ShowNav:false,
        }
    },
    methods:{
        ClickNav(){
            console.log(this.ShowNav ,"你好世界")
        //    this.ShowNav = !this.ShowNav;
        },
        enter(){//鼠标进入
          this.ShowNav = true;
        },
        leave(){//鼠标出去
          let that=this
          // setTimeout(function(res){
          //   that.ShowNav = false;
          // },1000)   
        },
        mouseEnter(){
            console.log('我进来了');
           this.ShowNav = true; 
        },
        mouseLeave(){
            let that=this
            setTimeout(function(res){
                that.ShowNav = false;
            },1000)  
        }
    }
}
</script>
<style scoped>
.header{position: fixed;top: 0;left: 0;width: 100%;z-index: 999;}
.navbar-nav .nav-link{font-family:'STFangsong';padding: 0 20px;box-sizing: border-box;}
.navbar-nav .nav-link:hover{ 
 color: #379589;
 background-color: transparent !important;
}
.navbar-nav .selectOn{color:#379589;}
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
.socllo{background: #fff;}
@media (max-width: 768px) { 
    .inav .logo{width: 80px;}
}
@media (max-width: 375px) { 
    .inav .logo{width: 50px;}
}
</style>

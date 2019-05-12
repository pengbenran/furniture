<template>
    <header class="header">
            <nav class="navbar navbar-expand-lg navbar-light inav">
                <div class="logo"><img src="../../assets/logo.png" alt="七音" class="d-block w-100"></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto nav-ul">
                        <!-- <li class="nav-item" v-for="(item,index) in navDate"></li> -->
                         <li class="nav-item" v-for="(item,index) in navDate" :class="curretIndex==index?'selectOn':''" @click="jumpTo(item.jumpUrl)"  @mouseenter.self="enter(index)" @mouseleave.self="leave(index)">
                            {{item.navName}}
                            <div class="menuConent" v-if="index==3&&ShowNav">
                              <div class="upIcon"></div>
                              <ul class="childNavUl"  @mouseenter.self="mouseEnter()" @mouseleave.self="mouseLeave()">
                                <li class="childNavli" v-for="(innerItem,innerIndex) in item.childNav" @click.stop="jumpToKind('/productKind')">
                                  <span>{{innerItem.childNavName}}</span> 
                                  <ul>
                                    <li v-for="(innerTwoItem,innerTwoIndex) in innerItem.childtwoNav">{{innerTwoItem.name}}</li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div class="menuConent" v-if="index==4&&ShowNav2">
                              <div class="upIcon"></div>
                              <ul class="childNav2" @mouseenter.self="mouseEnter()" @mouseleave.self="mouseLeave()">
                                <li><a target="_blank" href="https://item.taobao.com/item.htm?id=549469471881&ali_refid=a3_430673_1006:1106029645:N:bStCjpXiZdyzwB%2F%2BY1%2BBsA%3D%3D:73bfc8d40aafa9017bf2615044aee5dc&ali_trackid=1_73bfc8d40aafa9017bf2615044aee5dc&spm=a2e15.8261149.07626516002.7" >淘宝店铺</a></li>
                                <li>微店</li>
                                <li @click.stop="ShowQc">微信小程序</li>
                              </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
</template>
<script>
export default {
    props: ['curretIndex','isScroll'],
    data () {
        return {
           ShowNav:false,
           ShowNav2:false,
           MaskShow:false,
           timer:'',
           navDate:[
           {
            navName:'首页',
            jumpUrl:'/',
            childNav:[]
           },
           {
            navName:'企业文化',
            jumpUrl:'/corporateCulture',
            childNav:[]
           },
           {
            navName:'新闻中心',
            jumpUrl:'/newsCenter',
            childNav:[]
           },
           {
            navName:'产品中心',
            jumpUrl:'/productCenter',
            childNav:[
            {childNavName:'地板',
             jumpUrl:'/productKind',
             childtwoNav:
               [{name:'强化地板'},{name:'实木地板'},{name:'进口地板'},{name:'地暖专用'}]
            },
            {childNavName:'实木家具', 
            jumpUrl:'/productKind',
            childtwoNav:
               [{name:'木门'},{name:'衣橱柜'},{name:'沙发'},{name:'桌椅'}]
            },
            {childNavName:'软装',
            jumpUrl:'/productKind',
             childtwoNav:
               [{name:'窗帘'},{name:'墙纸'}]
            },
            {childNavName:'整体家装',
            jumpUrl:'/productKind',
            childtwoNav:
               [{name:'轻北欧风'},{name:'精致北欧风'},{name:'经典北欧风'}]
            }
            ]
           },
           {
            navName:'销售中心',
            jumpUrl:'/',
            childNav:[]
           },
           {
            navName:'服务中心',
            jumpUrl:'/serviceCenter',
            childNav:[]
           },
           {
            navName:'设计中心',
            jumpUrl:'/Designer',
            childNav:[]
           },
           {
            navName:'招商加盟',
            jumpUrl:'/Join',
            childNav:[]
           },
           ]
        }
    },
    methods:{
        jumpTo(url){
            this.$router.push({
                path:url
            })
        //    this.ShowNav = !this.ShowNav;
        },
        jumpToKind(url){
           this.$router.push({
                path:url
            }) 
       },
        enter(index){//鼠标进入
          if(index==3){
            this.ShowNav = true;
          } 
          else if(index==4){
            this.ShowNav2=true
          }   
        },
        leave(index){//鼠标出去
          let that=this
          that.timer=setTimeout(function(res){
            if(index==3){
              that.ShowNav = false;
            }
            else if(index==4){
              that.ShowNav2=false;
            }
          },150)   
        },
        mouseEnter(){
          let that=this
          clearTimeout(that.timer);
        },
        mouseLeave(){
            let that=this
            that.ShowNav = false;  
            that.ShowNav2=false;
        },

        //显示二维码
        ShowQc(){
            this.$emit('openMark')
        },
        HideMask(){
            this.MaskShow = !this.MaskShow;
        }

    }
}
</script>
<style scoped>
.header{position:absolute;top: 0;left: 7.8%;width: 84.4%;z-index: 999;}
.navbar-nav .nav-item{font-family:'STFangsong';box-sizing: border-box;position: relative;color: #fff;font-size: 20px;font-weight: bold;}
.navbar-nav .nav-item .menuConent{position: relative;}
.navbar-nav .nav-item .menuConent .upIcon{position: absolute; border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent transparent #fff transparent;
  opacity: 0.35;
  width: 0px;
 height: 0px;top: -10px;left: 15px;}

.navbar-nav .nav-item:hover{ 
 color: #0e887a;
 cursor:default ;
 background-color: transparent !important;
}
.navbar-nav .selectOn{color:#0e887a;}

.navbar-nav .nav-item .childNavUl{list-style: none;display:-webkit-box;position: absolute;top:10px;left: 0;background: rgba(255, 255, 255, 0.35);border-radius: 4px;padding:0;color: #fff;padding:25px;box-sizing: border-box;}

.navbar-nav .nav-item .childNav2{
   list-style: none;position: absolute;top:10px;left: 0;background: rgba(255, 255, 255, 0.35);border-radius: 4px;padding:25px;color: #fff;box-sizing: border-box;
}
.navbar-nav .nav-item .childNav2 li{width: 120px;text-align: center;line-height: 40px;color: #fff;font-size: 18px;}
.navbar-nav .nav-item .childNav2 li a{color: #fff;}
.navbar-nav .nav-item .childNav2 li:hover{color: #379589;}

.navbar-nav .nav-item .childNavUl .childNavli{width: 120px;font-size: 18px;}
.navbar-nav .nav-item .childNavUl .childNavli span{border-bottom: 2px solid #ddd;}
.navbar-nav .nav-item .childNavUl .childNavli:hover{ color: #0e887a;}
.navbar-nav .nav-item .childNavUl .childNavli ul{list-style: none;padding:0;text-align: center;line-height: 40px;font-size: 16px; color: #fff;}
.navbar-nav .nav-item .childNavUl .childNavli ul li:hover{color: #0e887a;}

.SpanShow{display: block;}
.SpanHide{display: none;}

#navbarSupportedContent{width: 78%;flex-grow: 0;}
#navbarSupportedContent .nav-ul{width: 100%;justify-content: space-around;}
.inav{display: flex;justify-content: space-between;}
.inav .NavMenu{background: rgba(255, 255, 255, 0.35);border-radius: 4px;color: #fff;}
.NavPos{position: absolute;left: 42%;top: 2.7rem;width:0;height:0;border-width:0 10px 10px;border-style:solid;border-color:transparent transparent rgba(255, 255, 255, 0.35);margin-top: -10px;}
.inav .logo{width: 123px;}
.inav .dropdown-menu{min-width:max-content;}
.inav .NavMenu .List{padding: 0}
.inav .NavMenu .List span{display: block;width: 8rem;text-align: center;}
.inav .NavMenu label{display: inline-block;border-bottom: 1px solid #fff;}
.inav .NavMenu .List ul{list-style: none;padding: 0;}
.inav .NavMenu .List li{text-align: center;font-size: .9rem;margin-bottom: .4rem;}
@media (max-width: 768px) { 
    .inav .logo{width: 80px;}
}
@media (max-width: 375px) { 
    .inav .logo{width: 50px;}
}
</style>

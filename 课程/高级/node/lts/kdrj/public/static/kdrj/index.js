Fengs.add("kdrj/index",function(s,i,a){i(".core-banner").slide({titCell:".core-num ul",mainCell:".core-bnr",effect:"fade",prevCell:".prev_pic",nextCell:".next_pic",autoPlay:!0,interTime:5e3,delayTime:1e3,autoPage:!0}),i(".core-banner").hover(function(){i(this).find(".prev_pic,.next_pic").fadeTo("show",.2)},function(){i(this).find(".prev_pic,.next_pic").hide()}),i(".prev_pic,.next_pic").hover(function(){i(this).fadeTo("show",.5)},function(){i(this).fadeTo("show",.2)}),i(".lease").slide({mainCell:".lease-bd ul",autoPage:!0,effect:"fold",autoPlay:!0,delayTime:1200,interTime:4e3}),i(".commodity-left ul li").hover(function(){i(this).addClass("hover")},function(){i(this).removeClass("hover")}),i(".commodity-right ul li").hover(function(){i(this).addClass("hover")},function(){i(this).removeClass("hover")});var l={init:function(){var s=this;s._classify(),s._gongg(),s._brand(),s._hot(),s._new()},_classify:function(){var s="/kd/product_type";a.s({url:s,type:"jsonp",data:{"do":"all"},success:function(s){if(console.log(s),0!==s.sududa.all){var a=s.sududa.taobao.types.type,l=s.sududa.taobao.special.data;if(s.status&&-9==s.status)console.log("签名不能为空");else{for(var t="",e=0;e<l.length;e++){t='<li class="product">                                    <div class="product-fl">                                    <i class="core-icon'+(e+1)+' fl"></i>                                    <span class="fl">'+l[e].name+'</span>                                    </div>                                    <div class="subcate">                                    <div class="subcate-cont">                                    <h3>'+l[e].name+'</h3>                                    <div class="xq">                                    <div class="xq-cont">                                    <dl>';for(var d=0;d<l[e].list.length;d++)t+='<dd class="xq-dd">                                            <a href="/spfl/cdity.jsp?id='+l[e].list[d].i+"&sorts=&is="+l[e].id+"&js="+d+'" target="_blank">'+l[e].list[d].name+"</a>                                            </dd>";i("#core-nav .core-tit").append(t)}for(var c="",e=0;e<a.length;e++){c='<li class="product">                                    <div class="product-fl">                                    <i class="core-icon'+(e+1)+' fl"></i>                                    <span class="fl">'+a[e].name+'</span>                                    </div>                                    <div class="subcate">                                    <div class="subcate-cont">                                    <h3>'+a[e].name+'</h3>                                    <div class="xq">                                    <div class="xq-cont">                                    <dl>';for(var d=0;d<a[e].list.l.length;d++)c+='<dd class="xq-dd">                                            <a href="/spfl/cdity.jsp?id='+a[e].list.l[d].i+"&sorts=&is="+a[e].id+"&js="+d+'" target="_blank">'+a[e].list.l[d].n+"</a>                                            </dd>";for(var d=0;d<a[e].list.l.length;d++)c+='<div class="tp-with tp-xiewa" style="display: none;"><a><img src="'+a[e].list.l[d].g+'"></a></div>';i("#core-nav .core-tit").append(c)}i(".core-tit li").each(function(s){3==s&&i(this).addClass("product-ic4"),4==s&&i(this).addClass("product-ic5"),5==s&&i(this).addClass("product-ic6"),6==s&&i(this).addClass("product-ic7"),7==s&&i(this).addClass("product-ic8"),8==s&&i(this).addClass("product-ic9"),9==s&&i(this).addClass("product-ic10"),10==s&&i(this).addClass("product-ic11"),11==s&&i(this).addClass("product-ic12"),12==s&&i(this).addClass("product-ic13")}),i("#core-nav .core-tit").slide({type:"menu",titCell:".product",targetCell:".subcate",delayTime:0,triggerTime:10,defaultPlay:!1,returnDefault:!0}),i(".core-tit li").find(".xq-dd:first a").css("color","#f40"),i(".core-tit li").find(".xq-dd").hover(function(){i(this).find("a").css("color","#f40"),i(this).siblings().find("a").css("color","")}),i(".core-tit li.product").each(function(){var s=i(this).find(".xq .xq-cont .tp-with").clone();i(this).find(".xq .xq-cont dl").append('<div class="tj123"></div>'),i(this).find(".xq .xq-cont .tj123").append(s),i(this).find(".xq .xq-cont dl .tj123 .tp-with").first().show(),i(this).find(".xq .xq-cont dl .xq-dd").hover(function(){i(this).addClass("selected").siblings().removeClass("selected");var s=i(this).index();i(this).parent().find(".tj123 .tp-with").eq(s).show().siblings().hide()})})}}},error:function(s){console.log(s)}})},_gongg:function(){var s="/es/announce_list";a.s({url:s,type:"jsonp",data:{username:"junsheng@sududa.com"},success:function(s){if(0!==s.sududa.all){var a=s.sududa.list.l;if(s.status&&-9==s.status)console.log("签名不能为空");else{var l="";i(".adlet-r").html("");var l='<i class="adlet-icon2 fl"></i>                            <div class="adlet-bd fl adlet-ts">                            <ul></ul>                            </div>';i(".adlet-r").append(l),i(".adlet-ts ul").html("");for(var t=0;t<a.length;t++){var e="<li>"+a[t].i+"</li>";i(".adlet-ts ul").append(e)}i(".adlet-fs").FontScroll({time:5e3,num:1}),i(".adlet-ts").FontScrol2({time:5e3,num:1})}}},error:function(s){console.log(s)}})},_brand:function(){var s="/kd/product_type";a.s({url:s,type:"jsonp",data:{username:"junsheng@sududa.com","do":"brand"},success:function(s){if(0!==s.sududa.all){var a=s.sududa.brand.li;if(s.status&&-9==s.status)console.log("签名不能为空");else{i(".brand-right ul").html("");for(var l=0;l<a.length;l++){var t='<li>                                        <a target="_blank" href="/brand/brand.jsp?id='+a[l].i+"&sorts=&js="+l+'">                                        <img src="'+a[l].m+'">                                        </a>                                        </li>';i(".brand-right ul").append(t)}i(".brand-right ul").last().append("<li><a></a></li>")}}},error:function(s){console.log(s)}})},_hot:function(){var s="kd/product_list";a.s({url:s,type:"jsonp",data:{username:"junsheng@sududa.com","do":"hot"},success:function(s){if(0!==s.sududa.all){var a=s.sududa.list.l;if(s.status&&-9==s.status)console.log("签名不能为空");else{i(".today-cont").html("");for(var l=0;15>l;l++){a[l].style.li=""==a[l].style.li?[]:a[l].style.li,i.isArray(a[l].style.li)||(a[l].style.li=[a[l].style.li]);var t='<div class="today-hr">                                        <div class="today-pin"></div>                                        <div class="today-hvr">                                        <div class="today-leptn">                                        <div class="today-lt"></div>                                        <div class="heading">                                        <div class="heading-cont">                                        <p class="heading-c1">基础版：<i>¥</i><i class="num">'+a[l].style.li[0].c2+"</i></p>                                        <p>高级版：<i>¥</i><i>"+a[l].style.li[0].c+"</i></p>                                        <p>财富版：<i>¥</i><i>"+a[l].style.li[0].c3+'</i></p>                                        </div>                                        </div>                                        <div class="caption">                                        <div class="caption-mar">                                        <a href="javascript:void(0);" class="caption-l fl">                                        <i class="fl"></i>                                        <span class="fl">加入购物车</span>                                        </a>                                        <a href="javascript:void(0);" class="caption-r fr">铺货</a>                                        </div>                                        </div>                                        </div>                                        <div class="today-top">                                        <img class="today-img" src="'+a[l].m+'" height="228" width="228">                                        </div>                                        <div class="today-btn">                                        <div class="xiqin">                                        <p class="xiqin-one">                                        <span class="fl">'+a[l].i+'</span>                                        <i class="ic1 fl"></i>                                        <i class="ic2 fl"></i>                                        <i class="ic3 fl"></i>                                        <i class="ic4 fl"></i>                                        </p>                                        <p class="xiqin-two"><a href="javascript:void(0);">'+a[l].t+'</a></p>                                        <p class="xiqin-three">                                        <i class="j1">¥</i><i class="j2">'+a[l].style.li[0].c+'</i>                                        </p>                                        <p class="xiqin-four">市场价：'+a[l].style.li[0].p+"</p>                                        </div>                                        </div>                                        </div>                                        </div>";i(".today-cont").append(t)}i(".today-cont").slide({type:"menu",titCell:".today-hvr",targetCell:".today-leptn",delayTime:0,triggerTime:10,defaultPlay:!1,returnDefault:!0})}}},error:function(s){console.log(s)}})},_new:function(){var s="kd/product_list";a.s({url:s,type:"jsonp",data:{username:"junsheng@sududa.com","do":"new"},success:function(s){if(0!==s.sududa.all){var a=s.sududa.list.l;if(s.status&&-9==s.status)console.log("签名不能为空");else{i(".newest-cont").html("");for(var l=0;15>l;l++){a[l].style.li=""==a[l].style.li?[]:a[l].style.li,i.isArray(a[l].style.li)||(a[l].style.li=[a[l].style.li]);var t='<div class="newest-hr">                                        <div class="newest-pin"></div>                                        <div class="newest-hvr">                                        <div class="newest-leptn">                                        <div class="newest-lt"></div>                                        <div class="heading">                                        <div class="heading-cont">                                        <p class="heading-c1">基础版：<i>¥</i><i class="num">'+a[l].style.li[0].c2+"</i></p>                                        <p>高级版：<i>¥</i><i>"+a[l].style.li[0].c+"</i></p>                                        <p>财富版：<i>¥</i><i>"+a[l].style.li[0].c3+'</i></p>                                        </div>                                        </div>                                        <div class="caption">                                        <div class="caption-mar">                                        <a href="javascript:void(0);" class="caption-l fl">                                        <i class="fl"></i>                                        <span class="fl">加入购物车</span>                                        </a>                                        <a href="javascript:void(0);" class="caption-r fr">铺货</a>                                        </div>                                        </div>                                        </div>                                        <div class="newest-top">                                        <img class="newest-img" src="'+a[l].m+'" height="228" width="228">                                        </div>                                        <div class="newest-btn">                                        <div class="xiqin">                                        <p class="xiqin-one">                                        <span class="fl">'+a[l].i+'</span>                                        <i class="ic1 fl"></i>                                        <i class="ic2 fl"></i>                                        <i class="ic3 fl"></i>                                        <i class="ic4 fl"></i>                                        </p>                                        <p class="xiqin-two"><a href="javascript:void(0);">'+a[l].t+'</a></p>                                        <p class="xiqin-three">                                        <i class="j1">¥</i><i class="j2">'+a[l].style.li[0].c+'</i>                                        </p>                                        <p class="xiqin-four">市场价：'+a[l].style.li[0].p+"</p>                                        </div>                                        </div>                                        </div>                                        </div>";i(".newest-cont").append(t)}i(".newest-cont").slide({type:"menu",titCell:".newest-hvr",targetCell:".newest-leptn",delayTime:0,triggerTime:10,defaultPlay:!1,returnDefault:!0})}}},error:function(s){console.log(s)}})}};l.init()},["./req","jquery/cookie","common/md5","kdrj/utils/popBox"]);
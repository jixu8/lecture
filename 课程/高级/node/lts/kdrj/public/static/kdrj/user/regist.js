Fengs.add("kdrj/user/regist",function(s,t,r){var i={regFn:function(){function s(){var s="/es/reg",i=t("#loginForm #l_username").val(),n=t("#loginForm #l_pass").val(),o=r.pass(n);console.log(o),r.s({url:s,type:"jsonp",data:{username:i,client:"47",pass:o},success:function(s){alert(1==s.sududa.status?"注册成功！":0==s.sududa.status?"用户已经存在":"注册出错误请重新输入注册信息！")},error:function(s){console.log(s)}})}this.aInpt=t("#l_username,#l_pass,#re_l_pass"),this.aInpt.val(""),t.browser.msie&&Number(t.browser.version)<=9&&this.pointtxt();var i=!1;this.aInpt.blur(function(){switch(this.id){case"l_username":o.name(t(this));break;case"l_pass":o.password(t(this));break;case"re_l_pass":o.passwords(t(this))}}).focus(function(){function s(s){var r,i,n,o,e=t(s).val(),a=e.length;if(0==a)return 1;if(a>16&&t(s).val(e.match(/.{16}/g)[0]),r=/\d/.test(e),i=/[a-z]/.test(e),n=/\W|[A-Z]/.test(e),o=r+i+n,6>a)return 1;if(a>=6&&7>=a){if(1==o)return 1;if(o>=2)return 2}if(a>7&&16>=a){if(1==o)return 1;if(2==o)return 2;if(3==o)return 3}}"l_pass"==this.id&&t(this).keyup(function(){var r=t(this),i=s(r),n=r.siblings(".a_span").show();1==i?n.removeClass("st2 st3").addClass("st1"):2==i?n.removeClass("st1 st3").addClass("st2"):3==i&&n.removeClass("st1 st2").addClass("st3")})});{var n=t(".sel_login"),o={name:function(s){var r=s.val(),n=t(".error_text");e.Email.test(r)?(setTimeout(function(){t(".error_text").fadeOut(200)},3e3),n.show().find(".error_regist_m1").css("background-position","top"),i=!0):(n.show().find(".error_regist_m1").css("background-position","bottom"),i=!1)},password:function(s){var r=s.val(),n=t(".error_text");return r.length<6||r.length>16?(s.siblings(".stren").hide(),n.show().find(".error_regist_m2").css("background-position","bottom"),i=!1,!1):(n.show().find(".error_regist_m2").css("background-position","top"),i=!0,!0)},passwords:function(s){var r=s.val(),n=t("#l_pass").val(),o=t(".error_text");r==n&&this.password(t("#re_l_pass"))?(o.show().find(".error_regist_m3").css("background-position","top"),i=!0):(o.show().find(".error_regist_m3").css("background-position","bottom"),i=!1)}},e={Email:/^[^\W|0]\w+@\w+(\.[a-z]{2,3}){1,2}$/};t("#regBox span")}t('#loginForm input[type="submit"]').click(function(){t("#l_username,#l_pass,#re_l_pass").blur(),i&&(n.is(".sel")?s():alert("请勾选条款"))})},pointtxt:function(){for(var s=t(".reg_ul").find(".li_input"),r=["用户名 (邮箱)","设置密码 (6-16)","确认密码","请输入图片中的验证码"],i=0;i<s.length;i++)s.eq(i).append("<font class='point'>"+r[i]+"</font>");s.find(".point").click(function(){t(this).siblings("input").focus()}),this.aInpt.focus(function(){var s=t(this).val();""==s&&t(this).siblings(".point").hide()}).blur(function(){var s=t(this).val();""==s&&t(this).siblings(".point").show()})}};i.regFn()},["kdrj/req","jquery/cookie","common/md5"]);
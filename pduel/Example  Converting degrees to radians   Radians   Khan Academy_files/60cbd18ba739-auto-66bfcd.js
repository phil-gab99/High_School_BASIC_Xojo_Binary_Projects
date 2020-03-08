KAdefine("javascript/nav-package/khan-nav.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-affix.js")
require("../../third_party/javascript-khansrc/jQuery-slimScroll/slimScroll.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.position.js")
var $=require("jquery")
var Modernizr=require("../../third_party/javascript-khansrc/Modernizr/modernizr.js")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var settings,$scrollable,$affixable,isTouch,scrollRegionOffset
var affixit=function(a){a=a||{}
var e=a.navSel||settings.navSel
var r,t
var l="nav-container"
if($("."+l,e).length===0){var i=$("<div>",{"class":l})
$(e).wrapInner(i)}$affixable=$("."+l)
var o=$affixable.parent()
r=o.data("nav-offset-top")||o.offset().top
t=o.data("nav-offset-bot")||$("#footer").height()
settings.bottomDistance=t
settings.topDistance=r
$(window).off(".affix")
$affixable.removeData("affix").removeClass("affix affix-top affix-bottom")
$affixable.affix({offset:{top:r,bottom:t}})}
var getScrollableHeight=function(){var a=$(window).height()
var e=$(settings.navContainerSel).height()
var r=$(settings.scrollHeaderSel).height()
var t
if(a>=e){$affixable.addClass("affix-static")
return e-r}$affixable.removeClass("affix-static")
if($(".affix").length){t=a-r}else{var l=a-scrollRegionOffset
var i=e-r
t=Math.min(l,i)
var o=function(){var a=$(document).height()-$(document).scrollTop()-$(window).height()
if($(window).scrollTop()>settings.topDistance&&a<=settings.bottomDistance){$affixable.removeClass("affix affix-top").addClass("affix-bottom")}}
_.delay(o,1e3)}return t}
var resizeScrollable=function(){var a=$scrollable.parent()
var e=getScrollableHeight()+"px"
var r=e<a.height()
if(isTouch){$scrollable.parent().add($scrollable).animate({height:e},185,"easeInOutCubic",function(){$scrollable.trigger("scroll")})}else{$scrollable.slimScroll({height:e,duration:185,easing:"easeInOutCubic"}).promise().done(function(){$scrollable.trigger("scroll")})
if(r&&$(".active.tab-link").length){var t=$(".active.tab-link").parent().position().top-10
a.slimScroll({scrollTo:t})}}}
var revealShadow=function(){var a={top:"/images/round-shadow.png",bottom:"/images/round-shadow-bottom.png"}
var e=$("<div>",{"class":"js-nav-shadow"})
var r=$(e).clone().addClass("bottom")
var t=$("<img>",{src:a.top})
var l=$("<img>",{src:a.bottom})
e.append(t)
r.append(l)
var i=function(){var a=$scrollable.get(0).scrollHeight
var e=$scrollable.outerHeight()
var r=$scrollable.scrollTop()
var t=a-r-e
var l=r<=10?r-10:0
var i
if(a<=e){i=-10}else{i=t<=10?t-10:0}$(".js-nav-shadow img").css({top:l})
$(".js-nav-shadow.bottom img").css({bottom:i,top:"auto"})}
$scrollable.parent().append(e).append(r).end().on("scroll",i)
i()}
var setupScroll=function(){if(isTouch){var a=$("<div/>",{"class":"js-touch-scroll"})
$scrollable.wrap(a)}else{$scrollable.slimScroll({allowPageScroll:false,color:"#666",distance:"5px",height:"300px",size:"8px",railOpacity:.3,wheelStep:8})}}
var init=function(a){a=a||{}
settings={scrollSel:"[data-khan-scroll]",navSel:"[data-khan-nav]",scrollHeaderSel:".topic-nav-header",navContainerSel:".tutorial-content"}
$.extend(settings,a)
isTouch=Modernizr.touchevents
$scrollable=$(settings.scrollSel)
$affixable=$(settings.navSel)
scrollRegionOffset=$scrollable.length?$scrollable.offset().top:0
var e=_.debounce(resizeScrollable,600)
if($affixable.length){affixit()
$affixable.on("resize",e)}if($scrollable.length){setupScroll()
revealShadow()
$(window).on("resize",e)
resizeScrollable()}$(KA).on("initNav",init)}
module.exports={init:init}
});
KAdefine("third_party/javascript-khansrc/jQuery-slimScroll/slimScroll.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
__KA_require("../jqueryui/jquery.ui.draggable.js");
(function($){jQuery.fn.extend({slimScroll:function(e){var t={wheelStep:20,width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:false,railVisible:false,railColor:"#333",railOpacity:"0.2",railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:false,scroll:0,scrollTo:null,duration:false,easing:"swing"}
var i=ops=$.extend(t,e)
this.each(function(){var t,r,a,s,o,l,n="<div></div>",u=30,c=false,h=parseInt(i.wheelStep),f=i.width,p=i.height,d=i.size,g=i.color,v=i.position,w=i.distance,m=i.start,H=i.opacity,b=i.alwaysVisible,y=i.railVisible,x=i.railColor,S=i.railOpacity,C=i.allowPageScroll,I=i.scroll,M=i.scrollTo,D=i.duration,T=i.easing
var j=$(this)
if(j.parent().hasClass("slimScrollDiv")){O=j.parent().find(".slimScrollBar")
B=j.parent().find(".slimScrollRail")
if(I){E(j.scrollTop()+parseInt(I),false,true)}if(e.height&&p){if(D){var k=$(j).add($(j).parent())
k.animate({height:p},D,T).css({"min-height":""})}else{j.parent().css("height",p)
j.css("height",p)}L()}if(M){j.promise().done(function(){L()
var e=parseInt(M)
E(e,false,false,true)})}return}var z=$(n).addClass(i.wrapperClass).css({position:"relative",overflow:"hidden",width:f,height:p})
j.css({overflow:"hidden",width:f,height:p})
var B=$(n).addClass(i.railClass).css({width:d,height:"100%",position:"absolute",top:0,display:b&&y?"block":"none","border-radius":d,background:x,opacity:S,zIndex:90})
var O=$(n).addClass(i.barClass).css({background:g,width:d,position:"absolute",top:0,opacity:H,display:b?"block":"none","border-radius":d,BorderRadius:d,MozBorderRadius:d,WebkitBorderRadius:d,zIndex:99})
var R=v=="right"?{right:w}:{left:w}
B.css(R)
O.css(R)
j.wrap(z)
j.parent().append(O)
j.parent().append(B)
O.draggable({axis:"y",containment:"parent",start:function(){a=true},stop:function(){a=false
W()},drag:function(e){E(0,$(this).position().top,false)}})
B.hover(function(){P()},function(){W()})
O.hover(function(){r=true},function(){r=false})
j.hover(function(){t=true
P()
W()},function(){t=false
W()})
var V=function(e){if(!t){return}var e=e||window.event
var i=0
if(e.wheelDelta){i=-e.wheelDelta/120}if(e.detail){i=e.detail/3}E(i,true)
if(e.preventDefault&&!c){e.preventDefault()}if(!c){e.returnValue=false}}
function E(e,t,i,r){var a=e
if(t){a=parseInt(O.css("top"))+e*h/100*O.outerHeight()
var s=j.outerHeight()-O.outerHeight()
a=Math.min(Math.max(a,0),s)
if(e>0){a=Math.ceil(a)}else{a=Math.floor(a)}O.css({top:a+"px"})}l=parseInt(O.css("top"))/(j.outerHeight()-O.outerHeight())
a=l*(j[0].scrollHeight-j.outerHeight())
if(i){a=e
var o=a/j[0].scrollHeight*j.outerHeight()
O.css({top:o+"px"})}if(r){var n=j[0].scrollHeight-j.outerHeight()
a=e>n?n:e
var u=a/n
var o=u*(j.outerHeight()-O.outerHeight())
O.css({top:o+"px"})}j.scrollTop(a)
P()
W()}var Q=function(){if(window.addEventListener){this.addEventListener("DOMMouseScroll",V,false)
this.addEventListener("mousewheel",V,false)}else{document.attachEvent("onmousewheel",V)}}
Q()
function L(){o=Math.max(j.outerHeight()/j[0].scrollHeight*j.outerHeight(),u)
O.css({height:o+"px"})}L()
function P(){L()
clearTimeout(s)
c=C&&l==~~l
if(o>=j.outerHeight()){c=true
return}O.stop(true,true).fadeIn("fast")
if(y){B.stop(true,true).fadeIn("fast")}}function W(){if(!b){s=setTimeout(function(){if(!r&&!a){O.fadeOut("slow")
B.fadeOut("slow")}},1e3)}}if(m=="bottom"){O.css({top:j.outerHeight()-O.outerHeight()})
E(0,true)}else if(typeof m=="object"){E($(m).position().top,null,true)
if(!b){O.hide()}}})
return this}})
jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery)
});

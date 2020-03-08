KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-affix.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
!function($){"use strict"
var t=function(t,f){this.options=$.extend({},$.fn.affix.defaults,f)
this.$window=$(window).on("scroll.affix.data-api",$.proxy(this.checkPosition,this)).on("click.affix.data-api",$.proxy(function(){setTimeout($.proxy(this.checkPosition,this),1)},this))
this.$element=$(t)
this.checkPosition()}
t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return
var t=$(document).height(),f=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,n=o.bottom,e=o.top,s="affix affix-top affix-bottom",a
if(typeof o!="object")n=e=o
if(typeof e=="function")e=o.top()
if(typeof n=="function")n=o.bottom()
a=this.unpin!=null&&f+this.unpin<=i.top?false:n!=null&&i.top+this.$element.height()>=t-n?"bottom":e!=null&&f<=e?"top":false
if(this.affixed===a)return
this.affixed=a
this.unpin=a=="bottom"?i.top-f:null
this.$element.removeClass(s).addClass("affix"+(a?"-"+a:""))}
var f=$.fn.affix
$.fn.affix=function(f){return this.each(function(){var i=$(this),o=i.data("affix"),n=typeof f=="object"&&f
if(!o)i.data("affix",o=new t(this,n))
if(typeof f=="string")o[f]()})}
$.fn.affix.Constructor=t
$.fn.affix.defaults={offset:0}
$.fn.affix.noConflict=function(){$.fn.affix=f
return this}
$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var t=$(this),f=t.data()
f.offset=f.offset||{}
f.offsetBottom&&(f.offset.bottom=f.offsetBottom)
f.offsetTop&&(f.offset.top=f.offsetTop)
t.affix(f)})})}(window.jQuery)
});

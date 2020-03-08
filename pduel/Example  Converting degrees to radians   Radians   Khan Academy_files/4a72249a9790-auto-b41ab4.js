KAdefine("javascript/shared-package/jquery.delayload.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
$.fn.inView=function(e){var r=$(this)
if(!r.is(":visible")){return false}var a=$(window).height()
var t=window.pageYOffset||document.documentElement.scrollTop
var n=r.offset().top
e=e||0
if(t+a+e>n){return true}return false}
$.fn.delayLoad=function(e,r){var a=$(this)
if(a.data("delayed-bgimage")&&a.css("background-image")==="none"&&a.inView(e)){_.defer(function(){a.css("background-image","url("+a.data("delayed-bgimage")+")")})
return true}if(a.data("delayed-src")&&(!a.attr("src")||a.attr("src")==="about:blank")&&a.inView(e)){_.defer(function(){a.attr("src",a.data("delayed-src"))})
return true}if(_.isFunction(r)&&a.inView(e)&&!a.data("hasAppended")){a.data("hasAppended",true)
_.defer(function(){r(a)})
return true}return false}
});

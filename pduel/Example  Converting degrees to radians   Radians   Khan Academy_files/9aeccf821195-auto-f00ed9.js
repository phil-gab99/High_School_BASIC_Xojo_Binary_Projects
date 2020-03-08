KAdefine("javascript/shared-package/nav-footer.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var _=require("underscore")
require("./jquery.delayload.js")
var KA=require("./ka.js")
var NavFooter={init:function(){if(!KA.isMobileCapable){var e=$("footer li.heading:first-child")
e.addClass("footer-scroll-cue")
e.on("click",function(){var e=$(document).height()-$(window).height()
$("html, body").animate({scrollTop:e},360,"easeInOutCubic")})}var r=function(e){$("#footer [data-delayed-src]").each(function(){if($(this).delayLoad(e)){$(window).off("scroll.load-footer-image")}})}
$(window).on("scroll.load-footer-image",_.throttle(function(){r(200)},300))
r()}}
module.exports=NavFooter
});

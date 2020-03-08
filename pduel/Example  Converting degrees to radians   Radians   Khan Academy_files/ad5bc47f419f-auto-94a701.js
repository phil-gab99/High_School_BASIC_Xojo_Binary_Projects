KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.core.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function($,t){var e=0,i=/^ui-id-\d+$/
$.ui=$.ui||{}
if($.ui.version){return}$.extend($.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})
$.fn.extend({_focus:$.fn.focus,focus:function(t,e){return typeof t==="number"?this.each(function(){var i=this
setTimeout(function(){$(i).focus()
if(e){e.call(i)}},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t
if($.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test($.css(this,"position"))&&/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}else{t=this.parents().filter(function(){return/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!t.length?$(document):t},zIndex:function(e){if(e!==t){return this.css("zIndex",e)}if(this.length){var i=$(this[0]),n,r
while(i.length&&i[0]!==document){n=i.css("position")
if(n==="absolute"||n==="relative"||n==="fixed"){r=parseInt(i.css("zIndex"),10)
if(!isNaN(r)&&r!==0){return r}}i=i.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++e}})},removeUniqueId:function(){return this.each(function(){if(i.test(this.id)){$(this).removeAttr("id")}})}})
function n(t,e){var i,n,s,o=t.nodeName.toLowerCase()
if("area"===o){i=t.parentNode
n=i.name
if(!t.href||!n||i.nodeName.toLowerCase()!=="map"){return false}s=$("img[usemap=#"+n+"]")[0]
return!!s&&r(s)}return(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||e:e)&&r(t)}function r(t){return $.expr.filters.visible(t)&&!$(t).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden"}).length}$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(t){return function(e){return!!$.data(e,t)}}):function(t,e,i){return!!$.data(t,i[3])},focusable:function(t){return n(t,!isNaN($.attr(t,"tabindex")))},tabbable:function(t){var e=$.attr(t,"tabindex"),i=isNaN(e)
return(i||e>=0)&&n(t,!i)}})
if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(e,i){var n=i==="Width"?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),s={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight}
function o(t,e,i,r){$.each(n,function(){e-=parseFloat($.css(t,"padding"+this))||0
if(i){e-=parseFloat($.css(t,"border"+this+"Width"))||0}if(r){e-=parseFloat($.css(t,"margin"+this))||0}})
return e}$.fn["inner"+i]=function(e){if(e===t){return s["inner"+i].call(this)}return this.each(function(){$(this).css(r,o(this,e)+"px")})}
$.fn["outer"+i]=function(t,e){if(typeof t!=="number"){return s["outer"+i].call(this,t)}return this.each(function(){$(this).css(r,o(this,t,true,e)+"px")})}})}if(!$.fn.addBack){$.fn.addBack=function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}}if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=function(t){return function(e){if(arguments.length){return t.call(this,$.camelCase(e))}else{return t.call(this)}}}($.fn.removeData)}$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
$.support.selectstart="onselectstart"in document.createElement("div")
$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}})
$.extend($.ui,{plugin:{add:function(t,e,i){var n,r=$.ui[t].prototype
for(n in i){r.plugins[n]=r.plugins[n]||[]
r.plugins[n].push([e,i[n]])}},call:function(t,e,i){var n,r=t.plugins[e]
if(!r||!t.element[0].parentNode||t.element[0].parentNode.nodeType===11){return}for(n=0;n<r.length;n++){if(t.options[r[n][0]]){r[n][1].apply(t.element,i)}}}},hasScroll:function(t,e){if($(t).css("overflow")==="hidden"){return false}var i=e&&e==="left"?"scrollLeft":"scrollTop",n=false
if(t[i]>0){return true}t[i]=1
n=t[i]>0
t[i]=0
return n}})})(jQuery)
});

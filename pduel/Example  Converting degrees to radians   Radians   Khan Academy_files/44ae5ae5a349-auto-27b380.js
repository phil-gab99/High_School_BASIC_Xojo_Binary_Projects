KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.draggable.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
__KA_require("./jquery.ui.core.js");
__KA_require("./jquery.ui.widget.js");
__KA_require("./jquery.ui.mouse.js");
(function($,t){$.widget("ui.draggable",$.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled")
this._mouseDestroy()},_mouseCapture:function(t){var e=this.options
if(this.helper||e.disabled||$(t.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(t)
if(!this.handle){return false}$(e.iframeFix===true?"iframe":e.iframeFix).each(function(){$("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css($(this).offset()).appendTo("body")})
return true},_mouseStart:function(t){var e=this.options
this.helper=this._createHelper(t)
this.helper.addClass("ui-draggable-dragging")
this._cacheHelperProportions()
if($.ui.ddmanager){$.ui.ddmanager.current=this}this._cacheMargins()
this.cssPosition=this.helper.css("position")
this.scrollParent=this.helper.scrollParent()
this.offset=this.positionAbs=this.element.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
$.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.originalPosition=this.position=this._generatePosition(t)
this.originalPageX=t.pageX
this.originalPageY=t.pageY
e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt)
if(e.containment){this._setContainment()}if(this._trigger("start",t)===false){this._clear()
return false}this._cacheHelperProportions()
if($.ui.ddmanager&&!e.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,t)}this._mouseDrag(t,true)
if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,t)}return true},_mouseDrag:function(t,e){this.position=this._generatePosition(t)
this.positionAbs=this._convertPositionTo("absolute")
if(!e){var i=this._uiHash()
if(this._trigger("drag",t,i)===false){this._mouseUp({})
return false}this.position=i.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}if($.ui.ddmanager){$.ui.ddmanager.drag(this,t)}return false},_mouseStop:function(t){var e,i=this,s=false,o=false
if($.ui.ddmanager&&!this.options.dropBehaviour){o=$.ui.ddmanager.drop(this,t)}if(this.dropped){o=this.dropped
this.dropped=false}e=this.element[0]
while(e&&(e=e.parentNode)){if(e===document){s=true}}if(!s&&this.options.helper==="original"){return false}if(this.options.revert==="invalid"&&!o||this.options.revert==="valid"&&o||this.options.revert===true||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,o)){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(i._trigger("stop",t)!==false){i._clear()}})}else{if(this._trigger("stop",t)!==false){this._clear()}}return false},_mouseUp:function(t){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})
if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,t)}return $.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(t){var e=!this.options.handle||!$(this.options.handle,this.element).length?true:false
$(this.options.handle,this.element).find("*").addBack().each(function(){if(this===t.target){e=true}})
return e},_createHelper:function(t){var e=this.options,i=$.isFunction(e.helper)?$(e.helper.apply(this.element[0],[t])):e.helper==="clone"?this.element.clone().removeAttr("id"):this.element
if(!i.parents("body").length){i.appendTo(e.appendTo==="parent"?this.element[0].parentNode:e.appendTo)}if(i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))){i.css("position","absolute")}return i},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if($.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var t=this.offsetParent.offset()
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft()
t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var t=this.element.position()
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options
if(s.containment==="parent"){s.containment=this.helper[0].parentNode}if(s.containment==="document"||s.containment==="window"){this.containment=[s.containment==="document"?0:$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,s.containment==="document"?0:$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(s.containment==="document"?0:$(window).scrollLeft())+$(s.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(s.containment==="document"?0:$(window).scrollTop())+($(s.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(s.containment)&&s.containment.constructor!==Array){e=$(s.containment)
i=e[0]
if(!i){return}t=$(i).css("overflow")!=="hidden"
this.containment=[(parseInt($(i).css("borderLeftWidth"),10)||0)+(parseInt($(i).css("paddingLeft"),10)||0),(parseInt($(i).css("borderTopWidth"),10)||0)+(parseInt($(i).css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt($(i).css("borderLeftWidth"),10)||0)-(parseInt($(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt($(i).css("borderTopWidth"),10)||0)-(parseInt($(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
this.relative_container=e}else if(s.containment.constructor===Array){this.containment=s.containment}},_convertPositionTo:function(t,e){if(!e){e=this.position}var i=t==="absolute"?1:-1,s=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,o=/(html|body)/i.test(s[0].tagName)
return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*i}},_generatePosition:function(t){var e,i,s,o,n=this.options,r=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=/(html|body)/i.test(r[0].tagName),l=t.pageX,h=t.pageY
if(this.originalPosition){if(this.containment){if(this.relative_container){i=this.relative_container.offset()
e=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else{e=this.containment}if(t.pageX-this.offset.click.left<e[0]){l=e[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<e[1]){h=e[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>e[2]){l=e[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>e[3]){h=e[3]+this.offset.click.top}}if(n.grid){s=n.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY
h=e?s-this.offset.click.top>=e[1]||s-this.offset.click.top>e[3]?s:s-this.offset.click.top>=e[1]?s-n.grid[1]:s+n.grid[1]:s
o=n.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX
l=e?o-this.offset.click.left>=e[0]||o-this.offset.click.left>e[2]?o:o-this.offset.click.left>=e[0]?o-n.grid[0]:o+n.grid[0]:o}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging")
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null
this.cancelHelperRemoval=false},_trigger:function(t,e,i){i=i||this._uiHash()
$.ui.plugin.call(this,t,[e,i])
if(t==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return $.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}})
$.ui.plugin.add("draggable","connectToSortable",{start:function(t,e){var i=$(this).data("ui-draggable"),s=i.options,o=$.extend({},e,{item:i.element})
i.sortables=[]
$(s.connectToSortable).each(function(){var e=$.data(this,"ui-sortable")
if(e&&!e.options.disabled){i.sortables.push({instance:e,shouldRevert:e.options.revert})
e.refreshPositions()
e._trigger("activate",t,o)}})},stop:function(t,e){var i=$(this).data("ui-draggable"),s=$.extend({},e,{item:i.element})
$.each(i.sortables,function(){if(this.instance.isOver){this.instance.isOver=0
i.cancelHelperRemoval=true
this.instance.cancelHelperRemoval=false
if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(t)
this.instance.options.helper=this.instance.options._helper
if(i.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false
this.instance._trigger("deactivate",t,s)}})},drag:function(t,e){var i=$(this).data("ui-draggable"),s=this
$.each(i.sortables,function(){var o=false,n=this
this.instance.positionAbs=i.positionAbs
this.instance.helperProportions=i.helperProportions
this.instance.offset.click=i.offset.click
if(this.instance._intersectsWith(this.instance.containerCache)){o=true
$.each(i.sortables,function(){this.instance.positionAbs=i.positionAbs
this.instance.helperProportions=i.helperProportions
this.instance.offset.click=i.offset.click
if(this!==n&&this.instance._intersectsWith(this.instance.containerCache)&&$.contains(n.instance.element[0],this.instance.element[0])){o=false}return o})}if(o){if(!this.instance.isOver){this.instance.isOver=1
this.instance.currentItem=$(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true)
this.instance.options._helper=this.instance.options.helper
this.instance.options.helper=function(){return e.helper[0]}
t.target=this.instance.currentItem[0]
this.instance._mouseCapture(t,true)
this.instance._mouseStart(t,true,true)
this.instance.offset.click.top=i.offset.click.top
this.instance.offset.click.left=i.offset.click.left
this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left
this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top
i._trigger("toSortable",t)
i.dropped=this.instance.element
i.currentItem=i.element
this.instance.fromOutside=i}if(this.instance.currentItem){this.instance._mouseDrag(t)}}else{if(this.instance.isOver){this.instance.isOver=0
this.instance.cancelHelperRemoval=true
this.instance.options.revert=false
this.instance._trigger("out",t,this.instance._uiHash(this.instance))
this.instance._mouseStop(t,true)
this.instance.options.helper=this.instance.options._helper
this.instance.currentItem.remove()
if(this.instance.placeholder){this.instance.placeholder.remove()}i._trigger("fromSortable",t)
i.dropped=false}}})}})
$.ui.plugin.add("draggable","cursor",{start:function(){var t=$("body"),e=$(this).data("ui-draggable").options
if(t.css("cursor")){e._cursor=t.css("cursor")}t.css("cursor",e.cursor)},stop:function(){var t=$(this).data("ui-draggable").options
if(t._cursor){$("body").css("cursor",t._cursor)}}})
$.ui.plugin.add("draggable","opacity",{start:function(t,e){var i=$(e.helper),s=$(this).data("ui-draggable").options
if(i.css("opacity")){s._opacity=i.css("opacity")}i.css("opacity",s.opacity)},stop:function(t,e){var i=$(this).data("ui-draggable").options
if(i._opacity){$(e.helper).css("opacity",i._opacity)}}})
$.ui.plugin.add("draggable","scroll",{start:function(){var t=$(this).data("ui-draggable")
if(t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"){t.overflowOffset=t.scrollParent.offset()}},drag:function(t){var e=$(this).data("ui-draggable"),i=e.options,s=false
if(e.scrollParent[0]!==document&&e.scrollParent[0].tagName!=="HTML"){if(!i.axis||i.axis!=="x"){if(e.overflowOffset.top+e.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity){e.scrollParent[0].scrollTop=s=e.scrollParent[0].scrollTop+i.scrollSpeed}else if(t.pageY-e.overflowOffset.top<i.scrollSensitivity){e.scrollParent[0].scrollTop=s=e.scrollParent[0].scrollTop-i.scrollSpeed}}if(!i.axis||i.axis!=="y"){if(e.overflowOffset.left+e.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity){e.scrollParent[0].scrollLeft=s=e.scrollParent[0].scrollLeft+i.scrollSpeed}else if(t.pageX-e.overflowOffset.left<i.scrollSensitivity){e.scrollParent[0].scrollLeft=s=e.scrollParent[0].scrollLeft-i.scrollSpeed}}}else{if(!i.axis||i.axis!=="x"){if(t.pageY-$(document).scrollTop()<i.scrollSensitivity){s=$(document).scrollTop($(document).scrollTop()-i.scrollSpeed)}else if($(window).height()-(t.pageY-$(document).scrollTop())<i.scrollSensitivity){s=$(document).scrollTop($(document).scrollTop()+i.scrollSpeed)}}if(!i.axis||i.axis!=="y"){if(t.pageX-$(document).scrollLeft()<i.scrollSensitivity){s=$(document).scrollLeft($(document).scrollLeft()-i.scrollSpeed)}else if($(window).width()-(t.pageX-$(document).scrollLeft())<i.scrollSensitivity){s=$(document).scrollLeft($(document).scrollLeft()+i.scrollSpeed)}}}if(s!==false&&$.ui.ddmanager&&!i.dropBehaviour){$.ui.ddmanager.prepareOffsets(e,t)}}})
$.ui.plugin.add("draggable","snap",{start:function(){var t=$(this).data("ui-draggable"),e=t.options
t.snapElements=[]
$(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var e=$(this),i=e.offset()
if(this!==t.element[0]){t.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})}})},drag:function(t,e){var i,s,o,n,r,a,l,h,f,c,p=$(this).data("ui-draggable"),d=p.options,g=d.snapTolerance,u=e.offset.left,m=u+p.helperProportions.width,v=e.offset.top,P=v+p.helperProportions.height
for(f=p.snapElements.length-1;f>=0;f--){r=p.snapElements[f].left
a=r+p.snapElements[f].width
l=p.snapElements[f].top
h=l+p.snapElements[f].height
if(!(r-g<u&&u<a+g&&l-g<v&&v<h+g||r-g<u&&u<a+g&&l-g<P&&P<h+g||r-g<m&&m<a+g&&l-g<v&&v<h+g||r-g<m&&m<a+g&&l-g<P&&P<h+g)){if(p.snapElements[f].snapping){p.options.snap.release&&p.options.snap.release.call(p.element,t,$.extend(p._uiHash(),{snapItem:p.snapElements[f].item}))}p.snapElements[f].snapping=false
continue}if(d.snapMode!=="inner"){i=Math.abs(l-P)<=g
s=Math.abs(h-v)<=g
o=Math.abs(r-m)<=g
n=Math.abs(a-u)<=g
if(i){e.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top}if(s){e.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top}if(o){e.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left}if(n){e.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left}}c=i||s||o||n
if(d.snapMode!=="outer"){i=Math.abs(l-v)<=g
s=Math.abs(h-P)<=g
o=Math.abs(r-u)<=g
n=Math.abs(a-m)<=g
if(i){e.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top}if(s){e.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top}if(o){e.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left}if(n){e.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left}}if(!p.snapElements[f].snapping&&(i||s||o||n||c)){p.options.snap.snap&&p.options.snap.snap.call(p.element,t,$.extend(p._uiHash(),{snapItem:p.snapElements[f].item}))}p.snapElements[f].snapping=i||s||o||n||c}}})
$.ui.plugin.add("draggable","stack",{start:function(){var t,e=this.data("ui-draggable").options,i=$.makeArray($(e.stack)).sort(function(t,e){return(parseInt($(t).css("zIndex"),10)||0)-(parseInt($(e).css("zIndex"),10)||0)})
if(!i.length){return}t=parseInt($(i[0]).css("zIndex"),10)||0
$(i).each(function(e){$(this).css("zIndex",t+e)})
this.css("zIndex",t+i.length)}})
$.ui.plugin.add("draggable","zIndex",{start:function(t,e){var i=$(e.helper),s=$(this).data("ui-draggable").options
if(i.css("zIndex")){s._zIndex=i.css("zIndex")}i.css("zIndex",s.zIndex)},stop:function(t,e){var i=$(this).data("ui-draggable").options
if(i._zIndex){$(e.helper).css("zIndex",i._zIndex)}}})})(jQuery)
});

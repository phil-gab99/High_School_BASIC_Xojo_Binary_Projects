KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.position.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function($,t){$.ui=$.ui||{}
var i,e=Math.max,o=Math.abs,l=Math.round,n=/left|center|right/,f=/top|center|bottom/,s=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,h=/%$/,p=$.fn.position
function c(t,i,e){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?e/100:1)]}function a(t,i){return parseInt($.css(t,i),10)||0}function d(t){var i=t[0]
if(i.nodeType===9){return{width:t.width(),height:t.height(),offset:{top:0,left:0}}}if($.isWindow(i)){return{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}}if(i.preventDefault){return{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}}return{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}$.position={scrollbarWidth:function(){if(i!==t){return i}var e,o,l=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=l.children()[0]
$("body").append(l)
e=n.offsetWidth
l.css("overflow","scroll")
o=n.offsetWidth
if(e===o){o=l[0].clientWidth}l.remove()
return i=e-o},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),e=t.isWindow?"":t.element.css("overflow-y"),o=i==="scroll"||i==="auto"&&t.width<t.element[0].scrollWidth,l=e==="scroll"||e==="auto"&&t.height<t.element[0].scrollHeight
return{width:o?$.position.scrollbarWidth():0,height:l?$.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=$(t||window),e=$.isWindow(i[0])
return{element:i,isWindow:e,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:e?i.width():i.outerWidth(),height:e?i.height():i.outerHeight()}}}
$.fn.position=function(t){if(!t||!t.of){return p.apply(this,arguments)}t=$.extend({},t)
var i,h,g,u,m,w,W=$(t.of),v=$.position.getWithinInfo(t.within),y=$.position.getScrollInfo(v),b=(t.collision||"flip").split(" "),H={}
w=d(W)
if(W[0].preventDefault){t.at="left top"}h=w.width
g=w.height
u=w.offset
m=$.extend({},u)
$.each(["my","at"],function(){var i=(t[this]||"").split(" "),e,o
if(i.length===1){i=n.test(i[0])?i.concat(["center"]):f.test(i[0])?["center"].concat(i):["center","center"]}i[0]=n.test(i[0])?i[0]:"center"
i[1]=f.test(i[1])?i[1]:"center"
e=s.exec(i[0])
o=s.exec(i[1])
H[this]=[e?e[0]:0,o?o[0]:0]
t[this]=[r.exec(i[0])[0],r.exec(i[1])[0]]})
if(b.length===1){b[1]=b[0]}if(t.at[0]==="right"){m.left+=h}else if(t.at[0]==="center"){m.left+=h/2}if(t.at[1]==="bottom"){m.top+=g}else if(t.at[1]==="center"){m.top+=g/2}i=c(H.at,h,g)
m.left+=i[0]
m.top+=i[1]
return this.each(function(){var n,f,s=$(this),r=s.outerWidth(),p=s.outerHeight(),d=a(this,"marginLeft"),w=a(this,"marginTop"),x=r+d+a(this,"marginRight")+y.width,T=p+w+a(this,"marginBottom")+y.height,L=$.extend({},m),P=c(H.my,s.outerWidth(),s.outerHeight())
if(t.my[0]==="right"){L.left-=r}else if(t.my[0]==="center"){L.left-=r/2}if(t.my[1]==="bottom"){L.top-=p}else if(t.my[1]==="center"){L.top-=p/2}L.left+=P[0]
L.top+=P[1]
if(!$.support.offsetFractions){L.left=l(L.left)
L.top=l(L.top)}n={marginLeft:d,marginTop:w}
$.each(["left","top"],function(e,o){if($.ui.position[b[e]]){$.ui.position[b[e]][o](L,{targetWidth:h,targetHeight:g,elemWidth:r,elemHeight:p,collisionPosition:n,collisionWidth:x,collisionHeight:T,offset:[i[0]+P[0],i[1]+P[1]],my:t.my,at:t.at,within:v,elem:s})}})
if(t.using){f=function(i){var l=u.left-L.left,n=l+h-r,f=u.top-L.top,c=f+g-p,a={target:{element:W,left:u.left,top:u.top,width:h,height:g},element:{element:s,left:L.left,top:L.top,width:r,height:p},horizontal:n<0?"left":l>0?"right":"center",vertical:c<0?"top":f>0?"bottom":"middle"}
if(h<r&&o(l+n)<h){a.horizontal="center"}if(g<p&&o(f+c)<g){a.vertical="middle"}if(e(o(l),o(n))>e(o(f),o(c))){a.important="horizontal"}else{a.important="vertical"}t.using.call(this,i,a)}}s.offset($.extend(L,{using:f}))})}
$.ui.position={fit:{left:function(t,i){var o=i.within,l=o.isWindow?o.scrollLeft:o.offset.left,n=o.width,f=t.left-i.collisionPosition.marginLeft,s=l-f,r=f+i.collisionWidth-n-l,h
if(i.collisionWidth>n){if(s>0&&r<=0){h=t.left+s+i.collisionWidth-n-l
t.left+=s-h}else if(r>0&&s<=0){t.left=l}else{if(s>r){t.left=l+n-i.collisionWidth}else{t.left=l}}}else if(s>0){t.left+=s}else if(r>0){t.left-=r}else{t.left=e(t.left-f,t.left)}},top:function(t,i){var o=i.within,l=o.isWindow?o.scrollTop:o.offset.top,n=i.within.height,f=t.top-i.collisionPosition.marginTop,s=l-f,r=f+i.collisionHeight-n-l,h
if(i.collisionHeight>n){if(s>0&&r<=0){h=t.top+s+i.collisionHeight-n-l
t.top+=s-h}else if(r>0&&s<=0){t.top=l}else{if(s>r){t.top=l+n-i.collisionHeight}else{t.top=l}}}else if(s>0){t.top+=s}else if(r>0){t.top-=r}else{t.top=e(t.top-f,t.top)}}},flip:{left:function(t,i){var e=i.within,l=e.offset.left+e.scrollLeft,n=e.width,f=e.isWindow?e.scrollLeft:e.offset.left,s=t.left-i.collisionPosition.marginLeft,r=s-f,h=s+i.collisionWidth-n-f,p=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,c=i.at[0]==="left"?i.targetWidth:i.at[0]==="right"?-i.targetWidth:0,a=-2*i.offset[0],d,g
if(r<0){d=t.left+p+c+a+i.collisionWidth-n-l
if(d<0||d<o(r)){t.left+=p+c+a}}else if(h>0){g=t.left-i.collisionPosition.marginLeft+p+c+a-f
if(g>0||o(g)<h){t.left+=p+c+a}}},top:function(t,i){var e=i.within,l=e.offset.top+e.scrollTop,n=e.height,f=e.isWindow?e.scrollTop:e.offset.top,s=t.top-i.collisionPosition.marginTop,r=s-f,h=s+i.collisionHeight-n-f,p=i.my[1]==="top",c=p?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,a=i.at[1]==="top"?i.targetHeight:i.at[1]==="bottom"?-i.targetHeight:0,d=-2*i.offset[1],g,u
if(r<0){u=t.top+c+a+d+i.collisionHeight-n-l
if(t.top+c+a+d>r&&(u<0||u<o(r))){t.top+=c+a+d}}else if(h>0){g=t.top-i.collisionPosition.marginTop+c+a+d-f
if(t.top+c+a+d>h&&(g>0||o(g)<h)){t.top+=c+a+d}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments)
$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments)
$.ui.position.fit.top.apply(this,arguments)}}};(function(){var t,i,e,o,l,n=document.getElementsByTagName("body")[0],f=document.createElement("div")
t=document.createElement(n?"div":"body")
e={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"}
if(n){$.extend(e,{position:"absolute",left:"-1000px",top:"-1000px"})}for(l in e){t.style[l]=e[l]}t.appendChild(f)
i=n||document.documentElement
i.insertBefore(t,i.firstChild)
f.style.cssText="position: absolute; left: 10.7432222px;"
o=$(f).offset().left
$.support.offsetFractions=o>10&&o<11
t.innerHTML=""
i.removeChild(t)})()})(jQuery)
});

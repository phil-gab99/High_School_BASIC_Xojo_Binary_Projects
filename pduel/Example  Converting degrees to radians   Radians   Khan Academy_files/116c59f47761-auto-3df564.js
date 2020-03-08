KAdefine("javascript/shared-package/user-progress-cache.jsx", function(require, module, exports) {
var _=require("underscore")
var SELECTORS_PER_RULE=20
var progressByStatus
var statusByKey
function insertCSSIntoHead(e){if(!e.length){return}var t=document.createElement("style")
t.type="text/css"
if(t.styleSheet){t.styleSheet.cssText=e}else{t.appendChild(document.createTextNode(e))}var r=document.getElementsByTagName("head")[0]
r.appendChild(t)}function cssWithProgress(e){var t=[]
var r=e.started
for(var s=0;s<r.length;s+=SELECTORS_PER_RULE){var o=r.slice(s,s+SELECTORS_PER_RULE)
t.push(o.map(function(e){return"."+e}).join(","))
t.push("{background-position:center;}")
t.push(o.map(function(e){return"."+e+" .pipe.completed"}).join(","))
t.push("{display:block;}")}var n=e.complete
for(var s=0;s<n.length;s+=SELECTORS_PER_RULE){var o=n.slice(s,s+SELECTORS_PER_RULE)
t.push(o.map(function(e){return"."+e}).join(","))
t.push("{background-position:bottom;}")
t.push(o.map(function(e){return"."+e+" .pipe.completed"}).join(","))
t.push("{display:block;}")}return t.join("")}var UserProgressCache={init:function(e){if(progressByStatus){throw new Error("Double-initialization of UserProgressCache")}progressByStatus=e
statusByKey={}
e.started.forEach(function(e){statusByKey[e]="started"})
e.complete.forEach(function(e){statusByKey[e]="complete"})
var t=cssWithProgress(e)
insertCSSIntoHead(t)},getStatusForProgressKey:function(e){if(!progressByStatus){throw new Error("UserProgressCache not yet initialized")}return _.has(statusByKey,e)?statusByKey[e]:"unstarted"}}
module.exports=UserProgressCache
});

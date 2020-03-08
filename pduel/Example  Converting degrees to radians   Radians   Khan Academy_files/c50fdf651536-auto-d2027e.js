(function(e){var r=function(a,n){var i=r._makeRequire(a)
r._moduleDefinitions[a]=function(){if(!r._moduleCache[a]){var t=r._moduleCache[a]={exports:{}}
n.call(e,i,t,t.exports)}}}
r._moduleCache={}
r._moduleDefinitions={}
function a(e,a){var n=c(e)
while(r._filenameRewriteMap[n]){n=c(u(n)+"/"+r._filenameRewriteMap[n])}if(!r._moduleCache[n]){var i=r._moduleDefinitions[n]
if(i){i()}else{if(a){return null}else{throw new Error("Cannot find module '"+n+"'.")}}}return r._moduleCache[n]}var n=function(e,r){var a
if(r.charAt(0)==="."){a=u(e)+"/"+r}else{var n=/\.jsx?$/.test(r)?"":"/index.js"
a="javascript/node_modules/"+r+n}return a}
var i=/^package!(.*\.css)$/
r._makeRequire=function(e){var t=function(r){if(!r){throw new Error("Missing argument to require.")}var i=a(n(e,r))
return i.exports}
t.ifLoadedLegacy=function(r){var i=a(n(e,r),true)
return i&&i.exports}
t.async=function(t,o){if(!Array.isArray(t)){throw new Error("First arg to require.async must be an Array.")}var u=[]
var f=[]
var s=false
for(var l=0;l<t.length;l++){var p=i.exec(t[l])
if(p){u.push(p[1])
s=true
continue}else if(s){throw new Error("package! arguments must be at the end.")}var h=c(n(e,t[l]))
if(!r._pathToPackageMap[h]){throw new Error("No package registered for "+h)}if(!r._moduleDefinitions.hasOwnProperty(h)){u.push(r._pathToPackageMap[h])}f.push(h)}if(!window.PackageManager){throw new Error("PackageManager not loaded")}window.PackageManager.require.apply(window.PackageManager,u).then(function(){var e=[]
for(var r=0;r<f.length;r++){e.push(a(f[r]).exports)}o&&o.apply(null,e)})}
t.withVars=t
return t}
r.require=r._makeRequire("")
r._filenameRewriteMap={}
r.updateFilenameRewriteMap=function(e){for(var a in e){if(e.hasOwnProperty(a)){r._filenameRewriteMap[a]=e[a]}}}
r._pathToPackageMap={}
r.updatePathToPackageMap=function(e){for(var a in e){if(e.hasOwnProperty(a)){r._pathToPackageMap[a]=e[a]}}}
if(e.KAdefine!=null){throw new Error("Attempting to initialize KAdefine twice -- only one package "+"per page should include ka-define.js.")}e.KAdefine=r
var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
var o=function(e){return t.exec(e).slice(1)}
var u=function(e){var r=o(e),a=r[0],n=r[1]
if(!a&&!n){return"."}if(n){n=n.substr(0,n.length-1)}return a+n}
var f=function(e,r){var a=0
for(var n=e.length-1;n>=0;n--){var i=e[n]
if(i==="."){e.splice(n,1)}else if(i===".."){e.splice(n,1)
a++}else if(a){e.splice(n,1)
a--}}if(r){for(;a--;a){e.unshift("..")}}return e}
var s=function(e){return e.charAt(0)==="/"}
var c=function(e){var r=s(e),a=e.substr(-1)==="/"
var n=e.split("/")
var i=[]
for(var t=0;t<n.length;t++){var o=n[t]
if(!!o){i.push(n[t])}}e=f(i,!r).join("/")
if(!e&&!r){e="."}if(e&&a){e+="/"}return(r?"/":"")+e}})(this)
;
KAdefine("javascript/corelibs-package/react-config-prod.js", function(require, module, exports) {
window.React.initializeTouchEvents(true)
});
KAdefine("javascript/mobile-shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-utils.js", function(require, module, exports) {
"use strict"
var _=require("underscore")
var ExerciseProgressConstants=require("./exercise-progress-constants.js")
function getCountPerLevel(e){var r={}
_.each(ExerciseProgressConstants.LEVEL_NAMES,function(e){r[e]=0})
_.each(e,function(e){r[e.state]++})
return r}function getProgressPercentage(e,r){var s=r["mastery3"]*4+r["mastery2"]*3+r["mastery1"]*2+r["practiced"]*1+r["unstarted"]*0
var t=r["mastery3"]*4+r["mastery2"]*4+r["mastery1"]*4+r["practiced"]*4+r["unstarted"]*4
return Math.floor(100*s/t)}var progressCompare=function(e,r){return ExerciseProgressConstants.LEVEL_VALUES[e]-ExerciseProgressConstants.LEVEL_VALUES[r]}
var ExerciseProgressUtils={getCountPerLevel:getCountPerLevel,getProgressPercentage:getProgressPercentage,progressCompare:progressCompare}
module.exports=ExerciseProgressUtils
});
KAdefine("javascript/node_modules/backbone/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/backbone-src/backbone.js")
});
KAdefine("javascript/node_modules/icu/index.js", function(require, module, exports) {
module.exports=require.withVars("../../../third_party/javascript-khansrc/localeplanet/icu.{{lang}}.js")
});
KAdefine("javascript/node_modules/jquery/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/jquery/jquery.js")
});
KAdefine("javascript/node_modules/react/index.js", function(require, module, exports) {
module.exports=require.withVars("../../../third_party/javascript-khansrc/react-compiled/react.{{dev_or_prod}}.js")
});
KAdefine("javascript/node_modules/underscore/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/underscore/underscore.js")
});
KAdefine("javascript/shared-package/analytics.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var KA=require("./ka.js")
var KAConsole=require("./console.js")
var VisitTracking=require("./visit-tracking.js")
var escapeRegex=require("./regex-util.js").escapeRegex
var getNow=Date.now||function(){return+new Date}
var diffMS=function(t,e,a){var n=e-t
if(a){return n}return Math.round(n)}
var diffS=function(t,e,a){var n=diffMS(t,e,true)/1e3
if(a){return n}return Math.round(n)}
var NORMALIZE_PATH_RULES=[{firstPart:"profile",partsToExtract:[{index:1,token:":username"}]},{firstPart:"mission",partsToExtract:[{index:1,token:":missionSlug"},{index:3,token:":taskId"}]}]
var getNormalizedPathParams=function(t){var e=t.toLowerCase().replace(/(\/+$|^\/)/g,"")
var a=e.split("/")
if(!a.length){return{}}var n=_.find(NORMALIZE_PATH_RULES,function(t){return a[0]===t.firstPart})
if(!n){return{}}var r={}
_.chain(n.partsToExtract).filter(function(t){return a.length>t.index}).each(function(t){r["Path Token "+t.token]=a[t.index]
a[t.index]=t.token})
_.extend(r,{"Path Normalized":"/"+a.join("/")})
return r}
var analyticsStore={persistData:{timestamp:0,events:{},trackingProperties:{}},loadAndSendPersistData:function(){if(!window.mixpanelEnabled){return}if(window.sessionStorage){var t=null
try{t=$.parseJSON(sessionStorage.getItem("ka_analytics"))}catch(e){return}if(!t||!t.timestamp){return}var a=getNow()
if(diffS(t.timestamp,a,true)<60){this.persistData=t
_.each(t.events,this._sendEvent,this)}}},addEvent:function(t){if(!window.mixpanelEnabled){return $.when()}this.persistData.events[t.id]=t
this._storePersistData()
return this._sendEvent(t)},_sendEvent:function(t){var e=$.Deferred()
window.mixpanel.push(["track",t.name,t.parameters,_(function(a,n){if(a===1||a.status===1){delete this.persistData.events[t.id]
this._storePersistData()
KAConsole.log("Successfully sent event "+t.id)
e.resolve()}else{KAConsole.log("Failed to send event "+t.id,a.error)
e.reject()}}).bind(this)])
return e.promise()},_storePersistData:function(){if(window.sessionStorage){this.persistData.timestamp=getNow()
var t=JSON.stringify(this.persistData)
sessionStorage.setItem("ka_analytics",t)}},setTrackingProperty:function(t,e){if(!window.mixpanelEnabled){return}this.persistData.trackingProperties[t]=e
this._storePersistData()},getTrackingProperty:function(t){return this.persistData.trackingProperties[t]}}
var currentPath=null
var currentTrackingActivity=null
var eventQueue=[]
var Analytics={init:function(){currentPath=window.location.pathname
if(!window.mixpanelEnabled){return}analyticsStore.loadAndSendPersistData()
$(window).unload(function(){Analytics._trackActivityEnd(getNow())})
$("body").on("click","a",function(t){var e=$(this).attr("data-tag")
if(e){var a=$(this).attr("href")
Analytics.trackSingleEvent("Link Click",{"Link Tag":e,Href:a})}})
_.each(eventQueue,function(t){this.trackSingleEvent(t.name,t.parameters)},this)
setTimeout(function(){Analytics._trackActivityEnd(getNow())
currentPath=null},4*60*60*1e3)},trackInitialPageLoad:function(t){var e=diffMS(t,getNow())
var a=document.referrer.split("/")[2]
var n=/^([0-9a-z-]+\.)*khanacademy\.org$/
var r=n.test(a)
var i=!r
this.trackPageView({"Load Time (ms)":e,"Loading Type":"Server-side","Is Referrer KA":r},i)},handleRouterNavigation:function(){VisitTracking.trackVisit()
if(currentPath&&currentPath!==window.location.pathname){currentPath=window.location.pathname
ga("send","pageview",currentPath)
if(window.mixpanelEnabled){Analytics.trackPageView({"Loading Type":"Client-side"})}}},trackPageView:function(t,e){var a=getNow()
if(e){analyticsStore.setTrackingProperty("Session Start",a)
analyticsStore.setTrackingProperty("Session Pages",1)}else{var n=analyticsStore.getTrackingProperty("Session Pages")
if(n){analyticsStore.setTrackingProperty("Session Pages",n+1)}}this.trackActivityBegin("Page View",t)},trackActivityBegin:function(t,e){if(!window.mixpanelEnabled||!currentPath){return null}var a=getNow()
this._trackActivityEnd(a)
e._startTime=a
_.extend(e,{Path:currentPath},getNormalizedPathParams(currentPath),window.AnalyticsSuperProps)
currentTrackingActivity={id:t+a,name:t,parameters:e}
KAConsole.log("Started tracking activity "+(t+a))
return currentTrackingActivity},trackActivityEnd:function(t){if(!window.mixpanelEnabled){return}if(t===currentTrackingActivity){this._trackActivityEnd(getNow())
this.trackPageView({})}},_trackActivityEnd:function(t){if(!currentTrackingActivity){return}var e=currentTrackingActivity
var a=diffS(e.parameters._startTime,t)
_.extend(e.parameters,{"Duration (s)":a})
delete e.parameters._startTime
var n=analyticsStore.getTrackingProperty("Session Start")
if(n){var r=diffS(n,t)
var i=analyticsStore.getTrackingProperty("Session Pages")
_.extend(e.parameters,{"Session Time (s)":r,"Session Page Number":i})}KAConsole.log("Stopped tracking activity "+e.name+" after "+a+" sec.")
analyticsStore.addEvent(e)
currentTrackingActivity=null},trackSingleEvent:function(t,e){if(!window.mixpanelEnabled){return $.when()}e=e||{}
if(!currentPath){eventQueue.push({name:t,parameters:e})
return $.when()}_.extend(e,{Path:currentPath},getNormalizedPathParams(currentPath),window.AnalyticsSuperProps)
var a=getNow()
var n={id:t+a,name:t,parameters:e}
KAConsole.log("Tracking single event "+(t+a))
return analyticsStore.addEvent(n)},reportTiming:function(t,e){if(!window.performance||!window.performance.timing){return}var a=window.performance.timing
var n=a.navigationStart
var r=a.redirectEnd-a.redirectStart
var i=a.domainLookupEnd-a.domainLookupStart
var s=a.connectEnd-a.connectStart
var c=a.responseStart-a.requestStart
var o=a.responseEnd-a.responseStart
var l=a.domContentLoadedEventStart-a.responseEnd
var d=a.domContentLoadedEventEnd-a.domContentLoadedEventStart
var u=a.domContentLoadedEventEnd-n
var m=require("./ka-client-timing.js")
var v=a.domContentLoadedEventStart
var f={}
if(m.clientHasResourceTimingAPI()){var g=m.getResourceEntries(/\.js$|\.css$/)
f["net"]=m.wallTime(g,v)
if(typeof KA!=="undefined"){var p=new RegExp("^https?://"+escapeRegex(KA.staticHost)+"/.+\\.(?:css|js)$")
var k=m.getResourceEntries(p)
switch(KA.staticHost){case"cdn.kastatic.org":f["cloudflare_jscss_net"]=m.wallTime(k,v)
break
case"fastly.kastatic.org":f["fastly_jscss_net"]=m.wallTime(k,v)
break
case"maxcdn.kastatic.org":f["maxcdn_jscss_net"]=m.wallTime(k,v)
break
case"www.khanacademy.org":f["ka_jscss_net"]=m.wallTime(k,v)
break
default:f["kastatic_jscss_net"]=m.wallTime(k,v)
break}}}var w=""
if(KA.usingAutoPackages){w="_autopkg"}else if(KA.usingSpdy){w="_spdy"}else{w="_http"}var h={}
var y={}
y["stats.time.client.redirect_ms"+w]=r
y["stats.time.client.dns_ms"+w]=i
y["stats.time.client.connect_ms"+w]=s
y["stats.time.client.request_ms"+w]=c
y["stats.time.client.response_ms"+w]=o
y["stats.time.client.document_ms"+w]=l
y["stats.time.client.content_loaded_ms"+w]=d
y["stats.time.client.start_to_content_loaded_ms"+w]=u
if(f){y["stats.time.client.resource_net_ms"+w]=f["net"]
y["stats.time.client.resource_ms"+w]=f["total"]
if(f["cloudflare_jscss_net"]!=null){y["stats.time.client.cloudflare_jscss_net_ms"+w]=f["cloudflare_jscss_net"]}if(f["fastly_jscss_net"]!=null){y["stats.time.client.fastly_jscss_net_ms"+w]=f["fastly_jscss_net"]}if(f["maxcdn_jscss_net"]!=null){y["stats.time.client.maxcdn_jscss_net_ms"+w]=f["maxcdn_jscss_net"]}if(f["ka_jscss_net"]!=null){y["stats.time.client.ka_jscss_net_ms"+w]=f["ka_jscss_net"]}if(f["kastatic_jscss_net"]!=null){y["stats.time.client.kastatic_jscss_net_ms"+w]=f["kastatic_jscss_net"]}}$.post("/api/internal/elog",_.extend(h,y,{_request_id:t,_graphite_key_prefix:e,_graphite_keys:_.keys(y).join()}))}}
module.exports=Analytics
});
KAdefine("javascript/shared-package/api-action-results.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var jQuery=require("jquery")
var KA=require("./ka.js")
var NotificationsLoader=require("./notifications-loader.js")
var Cookies=require("./cookies.js")
var APIActionResults={init:function(){this.hooks=[]
$(document).ajaxComplete(function(e,xhr,settings){if(xhr&&xhr.getResponseHeader("X-KA-API-Version-Mismatch")){apiVersionMismatch()}if(xhr&&xhr.getResponseHeader("X-KA-API-Response")&&xhr.responseText){if(xhr.responseText.indexOf("action_results")===-1&&xhr.responseText.indexOf("actionResults")===-1){return}var result
try{eval("result = "+xhr.responseText)}catch(err){return}if(result){var action=result["action_results"]||result["actionResults"]
if(action){APIActionResults.respondToAction(action)}}}})
jQuery.ajaxSetup({beforeSend:function(e,r){if(typeof KA!=="undefined"&&KA.language&&r&&r.url&&!/[?&]lang=/.test(r.url)&&(r.url.indexOf("/api/")>-1||r.url.indexOf("/profile/graph")>-1||r.url.indexOf("/goals/new")>-1||r.url.indexOf("/khan-exercises/exercises/")>-1)){r.url=r.url+(/\?/.test(r.url)?"&":"?")+"lang="+KA.language}if(r&&r.url&&r.url.indexOf("/api/")>-1){if(r.cache===undefined&&!/[\?&]v=/.test(r.url)){var t=jQuery.now(),i=r.url.replace(/([?&])_=[^&]*/,"$1_="+t)
r.url=i+(i===r.url?(/\?/.test(r.url)?"&":"?")+"_="+t:"")}var o=Cookies.readCookie("fkey")
if(o){e.setRequestHeader("X-KA-FKey",o)}else{apiVersionMismatch()
if(r.error){r.error()}return false}}}})},toCamelCase:function(e){return e.replace(/_([a-z])/g,function(e,r){return r.toUpperCase()})},respondToAction:function(e){$(APIActionResults.hooks).each(function(r,t){if(typeof e[t.prop]!=="undefined"){t.fxn(e[t.prop])}})},register:function(e,r){this.hooks[this.hooks.length]={prop:e,fxn:r}
this.hooks[this.hooks.length]={prop:APIActionResults.toCamelCase(e),fxn:r}}}
var apiVersionMismatch=function(){NotificationsLoader.loadUrgent({class_:["ApiVersionMismatchNotification"]})}
APIActionResults.addDefaultHooks=function(){if(window.ScratchpadUI&&ScratchpadUI.trusted&&window!==top){return}APIActionResults.register("notifications_added",_.bind(NotificationsLoader.loadFromAPI,NotificationsLoader))
APIActionResults.register("user_profile",function(e){var r={}
for(var t in e){if(e.hasOwnProperty(t)){r[APIActionResults.toCamelCase(t)]=e[t]}}e=r
KA.setUserProfile(e)
var i=require("../shared-package/nav-header.js")
i.renderUserDropdown()
i.renderNotificationsDropdown()})}
module.exports=APIActionResults
});
KAdefine("javascript/shared-package/autolink.js", function(require, module, exports) {
var regex=/\b(?:(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>&]+|&amp;|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’&]))/gi
var Autolink={autolink:function(t,e){return t.replace(regex,function(t){if(!/^https?:\/\//.test(t)){t="http://"+t}var r=e?'rel="nofollow"':""
return"<a "+r+' href="'+t+'">'+t+"</a>"})}}
module.exports=Autolink
});
KAdefine("javascript/shared-package/bigbingo.js", function(require, module, exports) {
var $=require("jquery")
var BigBingo={markConversions:function(n){return $.post("/api/internal/bigbingo/mark_conversions",{conversion_ids:n.join(",")})},markConversion:function(n){return this.markConversions([n])},abTest:function(n){return $.post("/api/internal/bigbingo/ab_test",{experiment_id:n})}}
window.BigBingo=BigBingo
module.exports=BigBingo
});
KAdefine("javascript/shared-package/bind-signup-link.js", function(require, module, exports) {
var _=require("underscore")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var launchSignupInModal=require("./launch-signup-in-modal.js")
var bindSignupLink=function(n,i,e){if(!KA.isPhantom()&&!e){return}if(Cookies.readCookie("u13")){return}if(window.location.pathname==="/signup"){return}if(!n||n.length===0){return}n.on("click",function(n){if(i){i()}launchSignupInModal()
n.preventDefault()}).on("mouseenter",_.once(function(n){require.async(["../login-package/login.js","../login-package/signup.js","../login-package/signup-modal.jsx","package!login.css"],function(){})}))}
module.exports=bindSignupLink
});
KAdefine("javascript/shared-package/console.js", function(require, module, exports) {
var KAConsole={_oldMessages:[],_flushOldMessages:function(){for(var s=0,o=this._oldMessages.length;s<o;s++){this.log.apply(this,this._oldMessages[s])}this._oldMessages=[]},_logToBuffer:function(){this._oldMessages.push(arguments)},_logOrPreserve:function(){if(window.console){this.enable()
this.log.apply(this,arguments)}else{this._logToBuffer.apply(this,arguments)}},_logCompatible:function(){if(!window.console){return}if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.call(console.log,null,arguments)}},enable:function(){if(window.console){if(console.log.bind){this.log=console.log.bind(console)}else{this.log=this._logCompatible}this._flushOldMessages()}else{this.log=this._logOrPreserve}},disable:function(){this.log=this._logToBuffer},init:function(s){if(s){this.enable()}else{this.disable()}}}
module.exports=KAConsole
});
KAdefine("javascript/shared-package/cookies.js", function(require, module, exports) {
var createCookie=function(e,o,r,a){var i
if(r){var t=new Date
t.setTime(t.getTime()+r*24*60*60*1e3)
i="; expires="+t.toGMTString()}else{i=""}if(a){a="; domain="+a}else{a=""}document.cookie=e+"="+o+i+a+"; path=/"}
var readCookie=function(e){var o=e+"="
var r=document.cookie.split(";")
for(var a=0;a<r.length;a++){var i=r[a]
while(i.charAt(0)===" "){i=i.substring(1,i.length)}if(i.indexOf(o)===0){return i.substring(o.length,i.length)}}return null}
var eraseCookie=function(e,o){createCookie(e,"",-1,o)}
var areCookiesEnabled=function(){createCookie("detectCookiesEnabled","KhanAcademy")
if(readCookie("detectCookiesEnabled")==null){return false}eraseCookie("detectCookiesEnabled")
return true}
module.exports={createCookie:createCookie,readCookie:readCookie,eraseCookie:eraseCookie,areCookiesEnabled:areCookiesEnabled}
});
KAdefine("javascript/shared-package/eduorg-models.js", function(require, module, exports) {
var Backbone=require("backbone")
var AffiliationModel=Backbone.Model.extend({url:"/api/internal/user/profile/affiliations",defaults:{eduorgKeyId:"",eduorgName:"",eduorgPostalCode:"",eduorgLocationText:"",role:null}})
var Affiliations=Backbone.Collection.extend({model:AffiliationModel})
exports.AffiliationModel=AffiliationModel
exports.Affiliations=Affiliations
});
KAdefine("javascript/shared-package/facebookutil.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var icu=require("icu")
var Analytics=require("../shared-package/analytics.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var LocalStore=require("./local-store.js")
var FacebookUtil={init:function(){if(!KA.FB_APP_ID){return}window.fbAsyncInit=function(){FB.init({version:"v2.0",appId:KA.FB_APP_ID,status:false,cookie:true,xfbml:true,oauth:true})
if(FacebookUtil.isUsingFbLogin()){FB.getLoginStatus(function(e){if(e.authResponse){FacebookUtil.fixMissingCookie(e.authResponse)}else{Cookies.eraseCookie("fbl")}})}FB.Event.subscribe("auth.login",function(e){FacebookUtil.setFacebookID(e.authResponse.userID)})
FB.Event.subscribe("xfbml.render",function(e){var o=$("#facepile-holder")
var i=22
if(o.height()<=i*1.5){return}o.animate({opacity:1,duration:200,easing:"easeInOutCubic"})
Analytics.trackSingleEvent("Load Facepile")})
FacebookUtil.fbReadyDeferred_.resolve()}
$("#user-info").on("click","#page_logout",function(e){var o=window.location.hostname
if(o.indexOf("local.")===0){o=o.substring(6)}var i=FacebookUtil.isUsingFbLogin()
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbl")
if(i){try{FB.logout(function(){window.location=$("#page_logout").attr("href")})
return false}catch(t){window.location=$("#page_logout").attr("href")}}})
if(FacebookUtil.isUsingFbLogin()){FacebookUtil.loadFb()}},fbLoadStarted_:false,loadFb:function(){if(this.fbLoadStarted_){return}this.fbLoadStarted_=true
var e=document.createElement("script")
e.src=document.location.protocol+"//connect.facebook.net/"+icu.getLocale().replace(/-/g,"_")+"/sdk.js"
var o=document.getElementById("fb-root")
if(o){o.appendChild(e)}},fbReadyDeferred_:new $.Deferred,runOnFbReady:function(e){this.loadFb()
this.fbReadyDeferred_.done(e)},isUsingFbLoginCached_:undefined,facebookID:undefined,getFacebookID:function(){if(KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()){return FacebookUtil.facebookID||LocalStore.get("facebookID")}return null},setFacebookID:function(e){FacebookUtil.facebookID=e
LocalStore.set("facebookID",e)},isUsingFbLogin:function(){if(FacebookUtil.isUsingFbLoginCached_===undefined){FacebookUtil.isUsingFbLoginCached_=!!Cookies.readCookie("fbl")}return FacebookUtil.isUsingFbLoginCached_},markUsingFbLogin:function(){Cookies.createCookie("fbl",true,30)},setPublishStreamPermission:function(e){var o=LocalStore.get("fbPublishStream")
if(!o){o={}}var i=FacebookUtil.getFacebookID()
if(i){if(e){o[i]=true}else{delete o[i]}LocalStore.set("fbPublishStream",o)}},hasPublishStreamPermission:function(){var e=LocalStore.get("fbPublishStream")
if(e&&e[FacebookUtil.getFacebookID()]){return true}return false},fixMissingCookie:function(e){if(Cookies.readCookie("fbsr_"+KA.FB_APP_ID)){return}if(e&&e.signedRequest){Cookies.createCookie("fbsr_"+KA.FB_APP_ID,e.signedRequest)}}}
module.exports=FacebookUtil
});
KAdefine("javascript/shared-package/generic-dialog.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(t,a,l,e,i){l=l||t.helpers
var s="",n,o,r,h,f=this,c="function",d=l.helperMissing,p=void 0,u=this.escapeExpression
function v(t,a){var e="",i,s
e+='\n    <div class="modal-footer">\n        '
r=l.buttons
i=r||t.buttons
s=l.each
h=f.program(2,m,a)
h.hash={}
h.fn=h
h.inverse=f.noop
i=s.call(t,i,h)
if(i||i===0){e+=i}e+="\n    </div>\n    "
return e}function m(t,a){var e="",i,s
e+="\n            "
r=l.buttonColor
i=r||t.buttonColor
s=l["if"]
h=f.program(3,b,a)
h.hash={}
h.fn=h
h.inverse=f.program(5,g,a)
i=s.call(t,i,h)
if(i||i===0){e+=i}e+="\n        "
return e}function b(t,a){var e="",i
e+='\n                <a class="generic-button simple-button '
r=l.buttonColor
i=r||t.buttonColor
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"buttonColor",{hash:{}})}e+=u(i)+'" href="javascript:void(0)" data-id="'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+'">'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+"</a>\n            "
return e}function g(t,a){var e="",i
e+='\n                <a class="generic-button simple-button" href="javascript:void(0)" data-id="'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+'">'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+"</a>\n            "
return e}s+='<div class="generic-dialog modal hide">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
r=l.title
n=r||a.title
if(typeof n===c){n=n.call(a,{hash:{}})}else if(n===p){n=d.call(a,"title",{hash:{}})}s+=u(n)+'</h2>\n    </div>\n    <div class="modal-body">\n        <p>'
r=l.message
n=r||a.message
if(typeof n===c){n=n.call(a,{hash:{}})}else if(n===p){n=d.call(a,"message",{hash:{}})}if(n||n===0){s+=n}s+="</p>\n    </div>\n    "
r=l.buttons
n=r||a.buttons
o=l["if"]
h=f.program(1,v,i)
h.hash={}
h.fn=h
h.inverse=f.noop
n=o.call(a,n,h)
if(n||n===0){s+=n}s+="\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/shared-package/handlebars-extras.js", function(require, module, exports) {
var $=require("jquery")
var Handlebars=require("handlebars")
var _=require("underscore")
var icu=require("icu")
var Autolink=require("./autolink.js")
var KA=require("./ka.js")
var i18n=require("./i18n.js").i18n
Handlebars.registerHelper("opttr",function(e){var r=[]
_.each(e.hash,function(e,t){if(e!==null&&e!==undefined){r.push(t+'="'+Handlebars.Utils.escapeExpression(e)+'"')}})
return new Handlebars.SafeString(r.join(" "))})
Handlebars.registerHelper("debug",function(e,r){console.log("Handlebars debug: ",e)})
Handlebars.registerHelper("repeat",function(e,r){var t=r.fn
var n=""
for(var a=0;a<e;a++){n=n+t(this)}return n})
Handlebars.registerHelper("eachWithMidpoint",function(e,r){var t=[]
var n=r.fn
if(e){var a=Math.floor((e.length+1)/2)
for(var i=0;i<e.length;i++){e[i]["midpoint"]=i===a
t.push(n(e[i]))}}return t.join("")})
var serialCommafy=function(e,r){if(!_.isArray(e)){return r}var t=e.length
if(t===0){return r}else if(t===1){return e[0].toString()}else if(t===2){return $._("%(item1)s and %(item2)s",{item1:e[0].toString(),item2:e[1].toString()})}else{return $._("%(items_with_commas)s, and %(last_item)s",{items_with_commas:e.slice(0,t-1).join(", "),last_item:e[t-1].toString()})}}
Handlebars.registerHelper("serialCommafy",serialCommafy)
Handlebars.registerHelper("_",i18n.handlebars_underscore)
Handlebars.registerHelper("i18nDoNotTranslate",i18n.handlebars_do_not_translate)
Handlebars.registerHelper("ngettext",i18n.handlebars_ngettext)
Handlebars.registerHelper("reverseEach",function(e,r){var t=""
for(var n=e.length-1;n>=0;n--){t+=r(e[n])}return t})
var getPartial=function(e,r){return KAdefine.require("./javascript/"+e+"-package/"+r+".handlebars")}
Handlebars.registerHelper("invokePartial",function(e,r,t){return getPartial(e,r)(t.hash)})
var origInvokePartial=Handlebars.VM.invokePartial
Handlebars.VM.invokePartial=function(e,r){var t=Array.prototype.slice.apply(arguments)
if(e===undefined){var n=r.split("_")
if(n.length>=2){var a=n[0]
var i=n.slice(1).join("_")
t[0]=getPartial(a,i)}}return origInvokePartial.apply(this,t)}
Handlebars.registerHelper("multiply",function(e,r){return e*r})
Handlebars.registerHelper("toLoginRedirectHref",function(e){return"/login?continue="+encodeURIComponent(e)})
Handlebars.registerHelper("commafy",function(e){return icu.getIntegerFormat().format(e)})
Handlebars.registerHelper("ellipsis",function(e,r){var t=e.replace(/<([^>]+)>/g,function(e,r){return r})
if(t.length>r){return t.substr(0,r-3)+"..."}else{return t}})
var formatTimestamp_=function(e,r,t){var n=60*parseInt(r,10)+parseInt(t,10)
return"<span class='youTube' data-seconds='"+n+"'>"+e+"</span>"}
var formatContent=function(e,r){e=Handlebars.Utils.escapeExpression(e)
var t=/(\d{1,3}):([0-5]\d)/g
e=e.replace(t,formatTimestamp_)
var n=/[\n]/g
e=e.replace(n,"<br>")
e=e.replace(/(\W|^)_(\S.*?\S)_(\W|$)/g,function(e,r,t,n){return r+"<em>"+t+"</em>"+n})
e=e.replace(/(\W|^)\*(\b.*?\b)\*(\W|$)/g,function(e,r,t,n){return r+"<b>"+t+"</b>"+n})
e=e.replace(/&#x60;&#x60;&#x60;(.*?)&#x60;&#x60;&#x60;/gm,function(e,r){r=r.replace(/^\s*(<br>)+/,"")
r=r.replace(/(<br>)+\s*$/,"")
return"<pre><code>"+r+"</code></pre>"})
e=e.replace(/&#x60;(.*?)&#x60;/g,function(e,r){return"<code>"+r+"</code>"})
e=Autolink.autolink(e,r)
return e}
Handlebars.registerHelper("formatContent",function(e,r){return new Handlebars.SafeString(formatContent(e,!!(r&&r.hash.nofollow)))})
Handlebars.registerHelper("formatEvalAnswer",function(e,r){var t=$($.parseHTML(e))
var n=$.makeArray(t.filter("li:not(.pass)"))
var a=$("<div class='eval-guideline'>")
$("<div class='eval-title'>").text(n.length===0?$._("This project has passed evaluation."):$._("This project needs more work.")).appendTo(a)
var i=t.filter(".overall-eval-info").text()
var s=formatContent(i,true)
if(i.length>0){var o=$("<div class='more-info'>")
o.append($("<strong>").text($._("From the evaluator:"))).append($("<div>").html(s)).appendTo(a)}if(n.length>0){$("<div class='failed-objectives'>").append($("<strong>").text($._("The following objectives need more work:"))).appendTo(a)
var l=$("<ul class='styled-list'>").appendTo(a)
n.map(function(e,r){var t=$(e).find("div")
var n=formatContent(t.text(),true)
var a=t.text().length>0?$("<div class='objective-more-info'>").html(n):[]
t.empty()
var i=$("<li></li>")
i.append($("<strong>").text($(e).text())).append(a)
i.appendTo(l)})}return new Handlebars.SafeString(a[0].outerHTML)})
Handlebars.registerHelper("arrayLength",function(e){return e.length})
Handlebars.registerHelper("ifLoggedIn",function(e){if(KA.getUserProfile()&&!KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("ifPhantom",function(e){if(!KA.getUserProfile()||KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("urlencode",function(e){return encodeURIComponent(e)})
Handlebars.registerHelper("formatTimestamp",function(e){var r=e/1e3
var t=parseInt(r)%60
if(t<10){t="0"+t}return parseInt(r/60)+":"+t})
Handlebars.registerHelper("videoOrigin",function(){return window.location.origin})
Handlebars.registerHelper("youtubeLoadPolicyParam",function(e){if(["S4iQ46ISqRQ","yC3vsJJIcE0","yIQUhXa-n-M","v_OfFmMRvOc","G7WyEp8gHs0","765X_PAxhAw","CDmJL-VNlaM","u7dhn-hBHzQ","AuX7nPBqDts","aNqG4ChKShI","b22tMEc6Kko","27Kp7HJYj2c","9Ek61w1LxSc","DqeMQHomwAU","VidnbCEOGdg","9DxrF6Ttws4","gM95HHI4gLk"].indexOf(e)!==-1){return"&iv_load_policy=3"}else{return""}})
var stripProtocol=function(e){if(!e){return e}if(e.indexOf("http://")===0){return e.substring(5)}else if(e.indexOf("https://")===0){return e.substring(6)}return e}
Handlebars.registerHelper("stripProtocol",stripProtocol)
module.exports={formatContent:formatContent,serialCommafy:serialCommafy,stripProtocol:stripProtocol}
});
KAdefine("javascript/shared-package/header-topic-browser.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
require("../../third_party/javascript-khansrc/jQuery-menu-aim/jquery.menu-aim.js")
var KA=require("../shared-package/ka.js")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var dropExtraAjaxValues=function(e,r,a){return e}
var fetchMissionPercentages=_.once(function(){return $.when($.ajax({url:"/api/internal/user/missions/progress_info?casing=camel"}).then(dropExtraAjaxValues),$.ajax({url:"/api/internal/user/dashboard_options?casing=camel"}).then(dropExtraAjaxValues)).then(function(e,r){var a={}
e.forEach(function(e){var o=ExerciseProgressUtils.getCountPerLevel(e.progressInfo)
var n=ExerciseProgressUtils.getProgressPercentage(r,o)
a[e.slug]=n})
return a})})
function fetchAndDisplayMissionPercentages(){var e=$(".topic-browser-menu")
var r=e.find("[data-mission-slug] .topic-browser-mission-percentage")
var a=KA.getUserProfile()
if(!a||a.get("isPhantom")){r.hide()
return}fetchMissionPercentages().then(function(e){r.each(function(){var r=$(this).closest("[data-mission-slug]").data("missionSlug")
if(e[r]!=null){$(this).text("("+e[r]+"%)")}})})}var HeaderTopicBrowser={init:function(){this.initDropdownBehavior($("#top-header").find(".dropdown-toggle"))
$(".nav-subheader .topic-browser-menu").menuAim({submenuSelector:".has-submenu",activate:function(e){var r=$(e)
var a=$(".hover-active")
if(r.hasClass("has-submenu")){a.removeClass("hover-active")
var o="wide-learn-menu-background-container"
var n=$("."+o)
if(n.hasClass("on-welcome")){o+=" on-welcome"}o+=" "+r.data("domainSlug")
$(".wide-learn-menu-background-container").removeClass().addClass(o)}else{a.filter(function(){return!$(this).hasClass("has-submenu")}).removeClass("hover-active")}r.addClass("hover-active")}})},_$activeDropdown:null,closeTopLevelDropdown:function(){if(this._$activeDropdown){this._$activeDropdown.dropdown("close")
this._$activeDropdown=null}},initDropdownBehavior:function(e){e=e.not("[data-hasDropdownBehavior]")
e.dropdown().on("close",function(e){var r=$(e.target).parents(".watch-link")
var a=r.length!==0
if(a){if(r.hasClass("on-welcome-and-close")||!r.hasClass("on-welcome")){$(".wide-learn-menu-background-container").hide().removeClass().addClass("wide-learn-menu-background-container")
r.find(".dropdown-menu").find(".hover-active").removeClass("hover-active")}}}).on("open",function(e){HeaderTopicBrowser.closeTopLevelDropdown()
HeaderTopicBrowser._$activeDropdown=$(e.target)
var r=$(e.target).parents(".watch-link")
var a=r.length!==0
if(a){$(".topic-browser-menu").find(".level0.math").addClass("hover-active")
var o="math"
if(r.hasClass("on-welcome")){o+=" on-welcome"}$(".wide-learn-menu-background-container").show().addClass(o)
fetchAndDisplayMissionPercentages()}}).end().siblings(".dropdown-menu").click(function(e){e.stopPropagation()}).end().attr("data-hasDropdownBehavior",true).attr("role","button").attr("aria-haspopup","true")}}
module.exports=HeaderTopicBrowser
});
KAdefine("javascript/shared-package/i18n.js", function(require, module, exports) {
var Jed=require("../../third_party/javascript-khansrc/jed/jed.js")
var _=require("underscore")
var jQuery=require("jquery")
var defaultLang="en"
var plural_forms={af:"nplurals=2; plural=(n != 1)",ar:"nplurals=6; plural= n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5",az:"nplurals=2; plural=(n != 1)",bg:"nplurals=2; plural=(n != 1)",ca:"nplurals=2; plural=(n != 1)",cs:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",da:"nplurals=2; plural=(n != 1)",de:"nplurals=2; plural=(n != 1)",el:"nplurals=2; plural=(n != 1)",en:"nplurals=2; plural=(n != 1)","es-ES":"nplurals=2; plural=(n != 1)",fi:"nplurals=2; plural=(n != 1)",fr:"nplurals=2; plural=(n > 1)",he:"nplurals=2; plural=(n != 1)",hi:"nplurals=2; plural=(n!=1)",hu:"nplurals=2; plural=(n != 1)",it:"nplurals=2; plural=(n != 1)",ja:"nplurals=1; plural=0",ko:"nplurals=1; plural=0",nl:"nplurals=2; plural=(n != 1)",no:"nplurals=2; plural=(n != 1)",pl:"nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","pt-BR":"nplurals=2; plural=(n != 1)","pt-PT":"nplurals=2; plural=(n != 1)",ro:"nplurals=3; plural=(n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2)",ru:"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","si-LK":"nplurals=2; plural=(n != 1)",sk:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",sr:"nplurals=4; plural=n==1? 3 : n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","sv-SE":"nplurals=2; plural=(n != 1) ",tr:"nplurals=1; plural=0",uk:"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","ur-PK":"nplurals=2; plural=(n != 1)",vi:"nplurals=1; plural=0",xh:"nplurals=2; plural=(n != 1)","zh-CN":"nplurals=1; plural=0","zh-TW":"nplurals=1; plural=0"}
var getPluralForm=function(n){return plural_forms[n]||plural_forms[defaultLang]}
var i18n=new Jed({})
i18n.options.locale_data={}
var interpolationMarker=/%\(([\w_]+)\)s/g
var interpolateStringToArray=function(n,l){l=l||{}
var r=n.split(interpolationMarker)
for(var a=1;a<r.length;a+=2){var u=l[r[a]]
r[a]=_.isUndefined(u)?"%("+r[a]+")s":u}return r}
jQuery._=function(n,l){if(typeof n==="object"&&n.messages){n=n.messages[0]}return interpolateStringToArray(n,l).join("")}
window.$_=function(n,l){if(arguments.length!==2||!_.isString(l)){return"<$_> must have exactly one child, which must be a string"}return interpolateStringToArray(l,n)}
window.$i18nDoNotTranslate=function(n,l){return l}
jQuery.ngettext=function(n,l,r,a){var u=n
var e=u.lang||defaultLang
if(!i18n.options.locale_data[e]){i18n.options.locale_data[e]={"":{domain:e,lang:e,plural_forms:getPluralForm(e)}}}if(typeof u==="object"){a=r
r=l
n=u.messages[0]
i18n.options.locale_data[e][n]=[null].concat(u.messages)}a=a||{}
a.num=a.num||r
return jQuery._(i18n.dngettext(e,n,l,r),a)}
jQuery.ngetpos=function(n,l){l=l||"en"
return Jed.PF.compile(getPluralForm(l))(n)}
jQuery.isSingular=function(n,l){return jQuery.ngetpos(n,l)===0}
jQuery.i18nDoNotTranslate=jQuery._
i18n.handlebars_underscore=function(n){return n.fn(this)}
i18n.handlebars_do_not_translate=function(n){return n.fn(this)}
i18n.handlebars_ngettext=function(n,l,r,a){if(typeof l!=="string"){a=l
l="en"
r=0}this.num=this.num||n
return jQuery.ngetpos(n)===r?a.fn(this):a.inverse(this)}
window.i18n=i18n
module.exports={i18n:i18n,$_:$_,$i18nDoNotTranslate:$i18nDoNotTranslate}
});
KAdefine("javascript/shared-package/ka-client-timing.js", function(require, module, exports) {
var _=require("underscore")
var KAClientTiming={clientHasResourceTimingAPI:function(){return Boolean(window.performance&&typeof window.performance.getEntriesByType==="function")},getResourceEntries:function(e){if(!this.clientHasResourceTimingAPI()||!window.performance.timing){return[]}var r=window.performance.getEntriesByType("resource")
if(e){r=_.filter(r,function(r){return e.test(r.name)})}var n=window.performance.timing.navigationStart
return _.map(r,function(e){return{name:e.name,startTime:n+e.startTime,endTime:n+e.startTime+e.duration}})},wallTime:function(e,r){r=r||Number.MAX_VALUE
e=_.sortBy(e,"startTime")
var n=0
var i=0
var t=0
_.each(e,function(e){var a=e.startTime
var o=e.endTime
if(o>r){return}if(a<=t){t=Math.max(t,o)}else{n+=t-i
i=a
t=o}})
n+=t-i
return Math.round(n)}}
module.exports=KAClientTiming
});
KAdefine("javascript/shared-package/ka.js", function(require, module, exports) {
var _=require("underscore")
var KA=_.extend(window.KA||{},{userProfileModel_:null,getUserProfile:function(){var e=require("./profile-model.js")
if(KA.userProfileData_&&!KA.userProfileModel_){KA.userProfileModel_=new e(KA.userProfileData_)}return KA.userProfileModel_},setUserProfile:function(e){var r=require("./profile-model.js")
if(!KA.userProfileModel_){KA.userProfileModel_=new r(e)}KA.userProfileModel_.set(e)
return KA.userProfileModel_},getGlobalPermissions:function(){var e=KA.getUserProfile()
return e&&e.get("globalPermissions")||[]},isPhantom:function(){var e=KA.getUserProfile()
return!e||e.get("isPhantom")},isDeveloper:function(){var e=KA.getUserProfile()
return e&&e.get("isDeveloper")}})
module.exports=KA
});
KAdefine("javascript/shared-package/launch-signup-in-modal.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var launchSignupInModal=function(){require.async(["../login-package/login.js","../login-package/signup.js","../login-package/signup-modal.jsx","package!login.css"],function(n,e,a){a=React.createFactory(a)
var i=$("#modal-signup-container")
if(i.length===0){i=$('<div id="modal-signup-container">').appendTo("body")}React.unmountComponentAtNode(i[0])
React.render(a({onFacebookClick:e._signupFacebook,onGoogleClick:e._signupGoogle,onSubmit:e.submitSignup,onMount:n.initBirthdayPicker,ensureValidBirthdate:n.ensureBirthdateValid_}),i[0])})}
module.exports=launchSignupInModal
});
KAdefine("javascript/shared-package/local-store.js", function(require, module, exports) {
window.LocalStore={version:4,keyPrefix:"ka",cacheKey:function(e){if(!e){throw new Error("Attempting to use LocalStore without a key")}return[this.keyPrefix,this.version,e].join(":")},get:function(e){if(!this.isEnabled()){return undefined}try{var t=window.localStorage[LocalStore.cacheKey(e)]
if(t){return JSON.parse(t)}}catch(r){}return null},set:function(e,t){if(!this.isEnabled()){throw new Error("LocalStore is not enabled")}var r=JSON.stringify(t),o=LocalStore.cacheKey(e)
try{window.localStorage[o]=r}catch(i){LocalStore.clearAll()}},del:function(e){if(!this.isEnabled()){return}var t=this.cacheKey(e)
if(t in window.localStorage){delete window.localStorage[t]}},isEnabled:function(){var e,t=String(+new Date)
try{window.sessionStorage[t]=t
e=window.sessionStorage[t]===t
window.sessionStorage.removeItem(t)
return e}catch(r){return false}},clearAll:function(){if(!this.isEnabled()){return}try{var e=0
while(e<localStorage.length){var t=localStorage.key(e)
if(t.indexOf(LocalStore.keyPrefix+":")===0){delete localStorage[t]}else{e++}}}catch(r){}}}
module.exports=LocalStore
});
KAdefine("javascript/shared-package/location-model.js", function(require, module, exports) {
var Backbone=require("backbone")
var _=require("underscore")
var LocationModel=Backbone.Model.extend({defaults:{lastModified:"",displayText:"",city:"",state:"",country:"",googlePlacesId:"",postalCode:"",latLng:{lat:null,lng:null}},setToDefault:function(){this.set(_.clone(this.defaults))}})
module.exports=LocationModel
});
KAdefine("javascript/shared-package/nav-header.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var _=require("underscore")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
require("./i18n.js")
var HeaderTopicBrowser=require("../shared-package/header-topic-browser.js")
var KA=require("./ka.js")
var bindSignupLink=require("./bind-signup-link.js")
var ResponsiveNavMenu=React.createFactory(require("../shared-package/responsive-nav-menu.jsx"))
var updateDocumentTitle=require("./update-document-title.js")
var NavHeader={_renderedUserDropdown:false,_renderedNotificationsDropdown:false,searchBox:null,activeMission:null,searchBoxGuider:null,init:function(e){this._userDropdownContext=_.extend({showSignUpToSave:true,showSettings:false},e)
bindSignupLink($(".sign-up-link"))
updateDocumentTitle()
var r=$("#search-box input")
r.one("mouseover focus keydown touchstart",function(){this.renderSearchBox()}.bind(this))
var i=$(".responsive-nav-menu")
if(i.length){React.render(ResponsiveNavMenu({domains:e.domains,profileModel:KA.getUserProfile(),loginUrl:e.loginUrl,logoutUrl:e.logoutUrl}),i[0])
var o=$(".navbar-toggle-menu")
o.click(function(){i.slideToggle({duration:300,easing:"easeOutCubic"})
o.toggleClass("navbar-menu-open")})}},renderSearchBox:function(){require.async(["../typeahead-package/search-bar.jsx","../typeahead-package/build-mission-source.js","../typeahead-package/search-source.js","../typeahead-package/suggestion-source.js","package!typeahead.css"],function(e,r,i,o){e=React.createFactory(e)
var n=false
var a=""
var t=0
var s=0
var c=!this.searchBox
var d=$._("Search for subjects, skills, and videos")
if(c){var u=$("#search-box input")
n=u.is(":focus")
a=u.val()
if(a===d){a=""}t=u[0].selectionStart
s=u[0].selectionEnd}var h={searchSuggestion:o,search:i}
if(this.activeMission){h["mission"]=r(this.activeMission)}this.searchBox=React.render(e({placeholder:$._("Search for subjects, skills, and videos"),dataSources:h,initiallyFocused:n,initialQuery:a,initialSelectionStart:t,initialSelectionEnd:s,guider:this.searchBoxGuider,onFocus:function(){return this.hideSearchGuider()}.bind(this)}),$("#search-box")[0])}.bind(this))},setActiveMission:function(e){this.activeMission=e
if(this.searchBox){this.renderSearchBox()}},showSearchGuider:function(){$("html, body").animate({scrollTop:0},function(){require.async(["../react-guiders-package/guider.jsx"],function(e){e=React.createFactory(e)
var r
if(this.activeMission){var i=this.activeMission.get("translatedTitle")
r=$._("You can search all of Khan Academy here to "+"find what you want to learn. If you choose a "+"skill from %(missionTitle)s, it will be added "+"to your learning dashboard and opened here.",{missionTitle:i})}if(!r){r=$._("Remember you can always search all of "+"Khan Academy if what you're looking for "+"is elsewhere.")}var o=$("#search-box")[0].getBoundingClientRect()
this.searchBoxGuider=e({boundingBox:o,position:6,content:React.DOM.div({className:"dashboard-search-callout"},r),onDismissed:function(){return this.hideSearchGuider()}.bind(this)})
this.renderSearchBox()}.bind(this))}.bind(this))},hideSearchGuider:function(){this.searchBoxGuider=null
this.renderSearchBox()},_userDropdownContext:null,renderNotificationsDropdown:function(){if(this._renderedNotificationsDropdown){return}var e=KA.getUserProfile(),r=e?e.get("countBrandNewNotifications"):0
$("#user-notifications").html(require("./notifications-dropdown.handlebars")({count:r}))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
this._renderedNotificationsDropdown=true},renderUserDropdown:function(e){if(this._renderedUserDropdown){return}if(!this._userDropdownContext){return}var r=KA.getUserProfile()
if(!r){return}e=e||{}
var i=r.isPhantom()
if(i){r.set("nickname",$._("Unclaimed points"))}var o=require("./user-dropdown.handlebars"),n={isPhantom:i,avatarSrc:r.get("avatarSrc"),nickname:r.get("nickname")}
_.extend(this._userDropdownContext,n,e)
if(!this._userDropdownContext["profileRoot"]){this._userDropdownContext["profileRoot"]=r.get("profileRoot")}$("#user-info").html(o(this._userDropdownContext))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
bindSignupLink($("#user-info .signup-to-claim"),function(){HeaderTopicBrowser.closeTopLevelDropdown()})
this._renderedUserDropdown=true}}
module.exports=NavHeader
});
KAdefine("javascript/shared-package/notifications-dropdown.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,o,i,e,l){i=i||n.helpers
var a="",s,t,r,c,f=this,u="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,g=i.blockHelperMissing
function m(n,o){return"Notifications"}function v(n,o){var e="",l
e+=" ("
r=i["_"]
l=r||n["_"]
c=f.program(4,b,o)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===u){l=l.call(n,c)}else{l=g.call(n,l,c)}if(l||l===0){e+=l}e+=")"
return e}function b(n,o){var e="",l
r=i.count
l=r||n.count
if(typeof l===u){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"count",{hash:{}})}e+=d(l)+" new"
return e}function y(n,o){return"brand-new"}function w(n,o){return'style="display:none;"'}function _(n,o){return"Notifications"}function k(n,o){return"No notifications. You can get back to learning!"}a+='<span class="dropdown">\n    <a class="user-notifications-toggle dropdown-toggle nav-link user-notification" href="#" title="'
r=i["_"]
s=r||o["_"]
c=f.program(1,m,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}r=i.count
s=r||o.count
t=i["if"]
c=f.program(3,v,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(o,s,c)
if(s||s===0){a+=s}a+='">\n        <span aria-hidden="true">\n        <i class="icon-bell-alt icon-large '
r=i.count
s=r||o.count
t=i["if"]
c=f.program(6,y,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(o,s,c)
if(s||s===0){a+=s}a+='">\n            <span class="notification-bubble" '
r=i.count
s=r||o.count
t=i.unless
c=f.program(8,w,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(o,s,c)
if(s||s===0){a+=s}a+=">"
r=i.count
s=r||o.count
if(typeof s===u){s=s.call(o,{hash:{}})}else if(s===h){s=p.call(o,"count",{hash:{}})}a+=d(s)+'</span>\n        </i>\n        <i class="icon-caret-down"></i>\n        </span>\n    </a>\n    <ul class="outer-dropdown-menu dropdown-menu unloaded">\n        <li class="notifications-heading">'
r=i["_"]
s=r||o["_"]
c=f.program(10,_,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+='</li>\n        <li class="antiscroll-wrap">\n            <ul class="inner-dropdown-menu antiscroll-inner dropdown-menu no-submenus">\n                <li class="loading"><img src="/images/throbber.gif"></li>\n                <li class="empty" style="display: none;"><div>'
r=i["_"]
s=r||o["_"]
c=f.program(12,k,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+="</div></li>\n            </ul>\n        </li>\n    </ul>\n</span>\n"
return a})
module.exports=t
});
KAdefine("javascript/shared-package/notifications-loader.js", function(require, module, exports) {
var $=require("jquery")
var updateDocumentTitle=require("./update-document-title.js")
var load=function(n){require.async(["../notifications-package/notifications.js","package!notifications.css"],n)}
var NotificationsLoader={_loaded:false,init:function(){$("#user-info").on("open","#user-notifications",function(n){NotificationsLoader.load()
NotificationsLoader.clearBrandNewCount()}).on("click",".user-notifications-toggle",function(n){return false})},load:function(){if(this._loaded){return}load(function(n){n.load()})
this._loaded=true},loadFromAPI:function(n){load(function(t){var e=n["readable"],o=n["urgent"],i=n["continueUrl"]
if(e.length){t.renderFromAPI(e)
NotificationsLoader.incrementBrandNewCount(e.length)}if(o.length){t.renderUrgent(o[0],i)}})},loadUrgent:function(n,t){load(function(e){e.renderUrgent(n,t)})},clearBrandNewCount:function(){var n=$(".notification-bubble")
if(parseInt(n.text())!==0){$(".notification-bubble").text("0").hide().parents(".icon").removeClass("brand-new")
updateDocumentTitle({noteCount:0})
load(function(n){n.clearBrandNewCount()})}},incrementBrandNewCount:function(n){var t=$(".notification-bubble")
var e=parseInt(t.text())+n
t.text(e).show().parents(".icon-bell-alt").addClass("brand-new")
updateDocumentTitle({noteCount:e})}}
module.exports=NotificationsLoader
});
KAdefine("javascript/shared-package/package-manager.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var KA=require("./ka.js")
var staticUrl=function(e){return KA.staticUrl(e).replace(/^https?:/,window.location.protocol)}
var PACKAGE_STATE_DEFINED=1
var PACKAGE_STATE_LOADING=2
var PACKAGE_STATE_LOADED=3
var PACKAGE_STATE_EXECUTED=4
var PACKAGE_LEVEL_NOT_SET=-2
var PACKAGE_LEVEL_CALCULATING=-1
var _packagesByName={}
function _Package(e,a,t){"use strict"
this.$_Package_name=e
this.$_Package_url=staticUrl(a)
this.$_Package_dependencyNames=t
this.$_Package_content=null
this.$_Package_state=PACKAGE_STATE_DEFINED
this.$_Package_fetchingPromise=null
this.$_Package_level=PACKAGE_LEVEL_NOT_SET}_Package.prototype.$_Package_getDependencies=function(){"use strict"
return this.$_Package_dependencyNames.map(function(e){return _Package.get(e)})}
_Package.prototype.$_Package_getTransitiveDependencies=function(){"use strict"
var e={}
var a=[this]
while(a.length>0){var t=a.shift()
if(e.hasOwnProperty(t.$_Package_name)){continue}e[t.$_Package_name]=t
t.$_Package_getDependencies().forEach(function(e){return a.push(e)})}return _.values(e)}
_Package.prototype.$_Package_getLevel=function(){"use strict"
if(this.$_Package_level===PACKAGE_LEVEL_NOT_SET){this.$_Package_level=PACKAGE_LEVEL_CALCULATING
var e=this.$_Package_getDependencies()
if(e.length===0){this.$_Package_level=0}else{var a=e.map(function(e){return e.$_Package_getLevel()}).filter(function(e){return e!==PACKAGE_LEVEL_CALCULATING})
this.$_Package_level=_.max(a)+1}}return this.$_Package_level}
_Package.prototype.markExecuted=function(){"use strict"
this.$_Package_state=PACKAGE_STATE_EXECUTED
var e=$.Deferred()
e.resolve()
this.$_Package_fetchingPromise=e.promise()}
_Package.prototype.$_Package_fetch=function(){"use strict"
if(this.$_Package_state>=PACKAGE_STATE_LOADING){return this.$_Package_fetchingPromise}var e=$.Deferred()
this.$_Package_fetchingPromise=e.promise()
$(document).ready(function(){$.ajax({type:"GET",url:this.$_Package_url,dataType:"html"}).then(function(a){this.$_Package_content=a
this.$_Package_state=PACKAGE_STATE_LOADED
e.resolve()}.bind(this))}.bind(this))
this.$_Package_state=PACKAGE_STATE_LOADING
return this.$_Package_fetchingPromise}
_Package.prototype.isExecuted=function(){"use strict"
return this.$_Package_state===PACKAGE_STATE_EXECUTED}
_Package.prototype.$_Package_execute=function(){"use strict"
if(this.isExecuted()){return}if(this.$_Package_content===null){throw new Error("_Package "+name+" cannot be executed without content.")}var e=this.$_Package_name.slice(this.$_Package_name.lastIndexOf(".")+1)
if(e==="js"){this.$_Package_executeJs()}else if(e==="css"){this.$_Package_injectCss()}else{throw new Error("Unknown package extension "+e)}this.$_Package_state=PACKAGE_STATE_EXECUTED}
_Package.prototype.fetchAndExecute=function(){"use strict"
var e=_.sortBy(this.$_Package_getTransitiveDependencies(),function(e){return e.$_Package_getLevel()})
return $.when.apply($.when,e.map(function(e){return e.$_Package_fetch()})).then(function(){e.forEach(function(e){return e.$_Package_execute()})})}
_Package.prototype.$_Package_executeJs=function(){"use strict"
var e=this.$_Package_content
var a=this.$_Package_url
$.globalEval(e+"\n//# sourceURL="+a+"\n")}
_Package.prototype.$_Package_injectCss=function(){"use strict"
var e=document.getElementsByTagName("head")[0]||document.documentElement
var a=document.createElement("style")
a.setAttribute("data-href",this.$_Package_url)
a.setAttribute("data-package-name",this.$_Package_name)
if(a.styleSheet){a.styleSheet.cssText=this.$_Package_content}else{var t=document.createTextNode(this.$_Package_content)
a.appendChild(t)}e.appendChild(a)}
_Package.get=function(e){"use strict"
var a=_packagesByName[e]
if(!a){throw new Error("Could not find package with name "+e)}return a}
_Package.define=function(e,a,t){"use strict"
if(!_Package.isDefined(e)){_packagesByName[e]=new _Package(e,a,t)}}
_Package.isDefined=function(e){"use strict"
return _packagesByName.hasOwnProperty(e)}
window.PackageManager=window.PackageManager||{}
PackageManager.init=function(){if(PackageManager._q){PackageManager.markExecuted.apply(PackageManager,PackageManager._q)
delete PackageManager._q}if(KA.IS_DEV_SERVER){$(document).ready(function(){var e=[]
var a=[]
_.each(_packagesByName,function(t,n){if(t.isExecuted()){var c=_.last(n.split("."))
if(c==="js"){e.push(n)}else{a.push(n)}}})
console.info("[PackageManager] %d initial JS package(s): %s",e.length,e.join(", "))
console.info("[PackageManager] %d initial CSS package(s): %s",a.length,a.join(", "))})}}
var logDynamicRequire=function(){var e=[]
var a=_.debounce(function(){console.info("[PackageManager] dynamically loading %d package(s): %s",e.length,e.join(", "))
e=[]},100)
return function(t){e.push(t)
a()}}()
PackageManager.require=function(){var e=Array.prototype.slice.call(arguments,0)
return $.when.apply($.when,e.map(function(e){if(KA.IS_DEV_SERVER){logDynamicRequire(e)}return _Package.get(e).fetchAndExecute()}))}
var toBeMarkedExecuted={}
PackageManager.markExecuted=function(){var e=Array.prototype.slice.call(arguments,0)
e.forEach(function(e){if(_Package.isDefined(e)){_Package.get(e).markExecuted()}else{toBeMarkedExecuted[e]=true}})}
PackageManager.registerDynamic=function(e){var a=e.name
var t=e.url
var n=e.dependencies||[]
_Package.define(a,t,n)
if(toBeMarkedExecuted[a]){_Package.get(a).markExecuted()
delete toBeMarkedExecuted[a]}}
PackageManager.registerManifests=function(e){(e["javascript"]||[]).forEach(PackageManager.registerDynamic);(e["stylesheets"]||[]).forEach(PackageManager.registerDynamic)}
module.exports=PackageManager
});
KAdefine("javascript/shared-package/pageutil.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var moment=require("moment")
require("./i18n.js")
var BigBingo=require("./bigbingo.js")
var NotificationsLoader=require("./notifications-loader.js")
var DemoNotifications={show:function(){NotificationsLoader.loadUrgent({class_:["DemoNotification"]})
$(".show-demo-dialog").click(function(e){e.preventDefault()
var o=e.target.href||"/"
o="/logout?continue="+encodeURIComponent(o)
popupGenericMessageBox({title:"Leaving Demo",message:$._("The Demo allows you to view coach and student reports for a demo account. Navigating out of the demo area will log you out of the demo account."),buttons:[{title:"Cancel",action:hideGenericMessageBox},{title:"Leave demo",action:function(){hideGenericMessageBox
window.location=o},buttonColor:"green"}]})})}}
var parseISO8601=function(e){var o=e.split("T"),r=o[0].split("-"),t=o[1].split("Z"),s=t[0].split(":"),i=s[2].split("."),n=Number(s[0]),a=new Date
a.setUTCFullYear(Number(r[0]))
a.setUTCMonth(Number(r[1])-1)
a.setUTCDate(Number(r[2]))
a.setUTCHours(Number(n))
a.setUTCMinutes(Number(s[1]))
a.setUTCSeconds(Number(i[0]))
if(i[1]){a.setUTCMilliseconds(Number(i[1]))}return a}
var toISO8601=function(e){return moment(e).utc().format().replace("+00:00","Z")}
var CSSMenus={active_menu:null,init:function(){$(".noscript").removeClass("noscript")
$(document).delegate(".css-menu > ul > li","click",function(){if(CSSMenus.active_menu){CSSMenus.active_menu.removeClass("css-menu-js-hover")}if(CSSMenus.active_menu&&this===CSSMenus.active_menu[0]){CSSMenus.active_menu=null}else{CSSMenus.active_menu=$(this).addClass("css-menu-js-hover")}})
$(document).bind("click focusin",function(e){if(CSSMenus.active_menu&&$(e.target).closest(".css-menu").length===0){CSSMenus.active_menu.removeClass("css-menu-js-hover")
CSSMenus.active_menu=null}})
$(document).delegate(".css-menu a",{focus:function(e){$(e.target).addClass("css-menu-js-hover").closest(".css-menu > ul > li").addClass("css-menu-js-hover")},blur:function(e){$(e.target).removeClass("css-menu-js-hover").closest(".css-menu > ul > li").removeClass("css-menu-js-hover")}})}}
var Throbber={jElement:null,show:function(e,o){if(!Throbber.jElement){Throbber.jElement=$("<img style='display:none;' src='/images/throbber.gif' class='throbber'/>")
$(document.body).append(Throbber.jElement)}if(!e.length){return}var r=e.offset()
var t=r.top+e.height()/2-8
var s=o?r.left-16-4:r.left+e.width()+4
Throbber.jElement.css("top",t).css("left",s).css("z-index",2e3).css("display","")},hide:function(){if(Throbber.jElement){Throbber.jElement.css("display","none")}}}
var ProgressLoadingView=Backbone.View.extend({initialize:function(){this.render()},render:function(){this.$el.html('<div class="loading-progress-bar ui-progressbar ui-widget ui-widget-content ui-corner-all"><div class="ui-progressbar-value ui-widget-header ui-corner-left ui-corner-right"></div></div>')}})
var temporaryDetachElement=function(e,o,r){var t,s
t=e.next()
if(t.length>0){s=function(){e.insertBefore(t)}}else{t=e.parent()
s=function(){e.appendTo(t)}}e.detach()
var i=o.call(r||this,e)
s()
return i}
var messageBox=null
var popupGenericMessageBox=function(e){if(messageBox){$(messageBox).modal("hide").remove()}e=_.extend({buttons:[{title:"OK",action:hideGenericMessageBox}]},e)
var o=require("./generic-dialog.handlebars")
messageBox=$(o(e)).appendTo(document.body).modal({keyboard:true,backdrop:true,show:true}).get(0)
if(e.width){$(messageBox).css({width:e.width+"px","margin-left":-.5*e.width+"px"})}_.each(e.buttons,function(e){$('.generic-button[data-id="'+e.title+'"]',$(messageBox)).click(e.action)})}
var hideGenericMessageBox=function(){if(messageBox){$(messageBox).modal("hide")}messageBox=null}
var isLoadedFromBrowserCache=function(){if(isLoadedFromBrowserCache.memoized==null){isLoadedFromBrowserCache.memoized=$("#page_loaded_from_browser_cache").val()==="1"
$("#page_loaded_from_browser_cache").val("1")}return isLoadedFromBrowserCache.memoized}
var bookmarkMe=function(e,o){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(document.title,window.location.href,"")}else if(window.external&&window.external.AddFavorite){window.external.AddFavorite(location.href,document.title)}else if(window.opera&&window.print){this.title=document.title
return true}else{var r=e||$._("Press Command + D to bookmark this page.")
var t=o||$._("Press CTRL + D to bookmark this page.")
if(navigator.userAgent.toLowerCase().indexOf("mac")!==-1){alert(r)}else{alert(t)}}}
module.exports={BigBingo:BigBingo,CSSMenus:CSSMenus,DemoNotifications:DemoNotifications,ProgressLoadingView:ProgressLoadingView,Throbber:Throbber,bookmarkMe:bookmarkMe,hideGenericMessageBox:hideGenericMessageBox,isLoadedFromBrowserCache:isLoadedFromBrowserCache,parseISO8601:parseISO8601,toISO8601:toISO8601,popupGenericMessageBox:popupGenericMessageBox,temporaryDetachElement:temporaryDetachElement}
});
KAdefine("javascript/shared-package/profile-model.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("./i18n.js")
var KA=require("./ka.js")
var ProfileModel=Backbone.Model.extend({defaults:{affiliations:[],avatarName:"darth",avatarSrc:"/images/darth.png",backgroundName:"",backgroundSrc:"",bio:"",userLocation:null,countVideosCompleted:0,dateJoined:"",email:"",isCoachingLoggedInUser:false,isParentOfLoggedInUser:false,isActivityAccessible:false,nickname:"",points:0,username:"",isDataCollectible:false,isSelf:false,isPublic:false,isCreator:false,isCurator:false,isPublisher:false,followRequiresApproval:true,canModifyCoaches:true},url:"/api/internal/user/profile",isPhantom:function(){return this.get("isPhantom")},isCurrentUser:function(){return KA.getUserProfile()&&KA.getUserProfile().get("userKey")===this.get("userKey")},initialize:function(e,t){Backbone.Model.prototype.initialize.call(this,e,t)
this._ensureAttrsAreSubmodels()
var i=_.map(ProfileModel.SUBMODEL_ATTRS,function(e){return"change:"+e}).join(" ")
this.on(i,this._ensureAttrsAreSubmodels,this)},locationFormatted:function(){var e=this.get("userLocation")
return e&&e.get("displayText")||""},usernameFormatted:function(){var e=this.get("username")
return e?"@"+e:""},_ensureAttrsAreSubmodels:function(e){var t=require("../shared-package/eduorg-models.js").AffiliationModel
var i=require("../shared-package/eduorg-models.js").Affiliations
var s=require("../shared-package/location-model.js")
var a={}
var r=this.get("userLocation")
if(!(r instanceof s)){a["userLocation"]=new s(r)}var n=this.get("affiliations")
if(!n||!n.length){n=[new t]}if(!(n instanceof i)){a["affiliations"]=new i(n)}this.set(a,{silent:true})},isPrivate:function(){return this.get("isActivityAccessible")===false&&this.get("isPublic")===false},isActivityAccessible:function(){return this.get("isActivityAccessible")},getIdentifier:function(){return this.get("username")||this.get("email")},isEditable:function(){return this.get("isSelf")&&!this.isPhantom()},isFullyEditable:function(){return this.isEditable()&&this.get("isDataCollectible")},isSal:function(){return this.get("username")==="sal"},toJSON:function(){var e=ProfileModel.__super__.toJSON.call(this)
_.each(ProfileModel.COMPUTED_ATTRS,function(t){e[t]=this[t].call(this)},this)
_.each(ProfileModel.SUBMODEL_ATTRS,function(t){e[t]=this.get(t).toJSON()},this)
return e},getIfUndefined:function(e,t){if(e&&e[t]!==undefined){return e[t]}return this.get(t)},save:function(e,t){t=t||{}
t.contentType="application/json"
t.data=JSON.stringify({userKey:this.getIfUndefined(e,"userKey"),avatarName:this.getIfUndefined(e,"avatarName"),bio:this.getIfUndefined(e,"bio"),backgroundName:this.getIfUndefined(e,"backgroundName"),nickname:$.trim(this.getIfUndefined(e,"nickname")),username:this.getIfUndefined(e,"username"),isPublic:this.getIfUndefined(e,"isPublic"),userLocation:this.getIfUndefined(e,"userLocation"),affiliations:this.getIfUndefined(e,"affiliations")})
var i=t.success
t.success=function(e,t){e.trigger("savesuccess")
if(i){i(e,t)}}
Backbone.Model.prototype.save.call(this,e,t)},storeState:function(){var e=this.toJSON()
this._storedAttrs=_.omit(e,ProfileModel.COMPUTED_ATTRS)},restoreState:function(){var e=_.omit(this._storedAttrs,ProfileModel.SUBMODEL_ATTRS)
this.set(e)
var t=_.pick(this._storedAttrs,ProfileModel.SUBMODEL_ATTRS)
_.each(t,function(e,t){this.get(t).set(e)},this)},fetchFull:function(){if(this.get("includesUserDataInfo")){var e=new $.Deferred
return e.resolve().promise()}return $.ajax({type:"GET",url:"/api/internal/user/profile",data:{casing:"camel",userKey:this.get("userKey")},dataType:"json",success:function(e){if(e){this.set(e)}}.bind(this)})},parse:function(e,t){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}Backbone.Model.prototype.parse.call(this,e,t)},validateNickname:function(e){this.trigger("validate:nickname",$.trim(e).length>0)},validateUsername:function(e){if(e===this.get("username")){this.trigger("validate:username")
return}e=e.toLowerCase().replace(/\./g,"")
if(/^[a-z][a-z0-9]{2,}$/.test(e)){$.ajax({url:"/api/internal/user/username_available",type:"GET",data:{username:e},dataType:"json",success:_.bind(this.onValidateUsernameResponse_,this)})}else{var t=""
if(e.length<3){t=$._("Too short.")}else if(/^[^a-z]/.test(e)){t=$._("Start with a letter.")}else{t=$._("Letters and numbers only.")}this.trigger("validate:username",t,false)}},onValidateUsernameResponse_:function(e){var t=e?$._("Looks good!"):$._("Not available.")
this.trigger("validate:username",t,e)}},{COMPUTED_ATTRS:["isEditable","isFullyEditable","isSal","locationFormatted","usernameFormatted"],SUBMODEL_ATTRS:["userLocation","affiliations"]})
module.exports=ProfileModel
});
KAdefine("javascript/shared-package/regex-util.js", function(require, module, exports) {
var _=require("underscore")
function escapeRegex(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function accentInsensitive(e){e=escapeRegex(e)
var a=function(e){return accentedAndNormalRegexChars[e.toUpperCase()]||e}
e=e.replace(/\S/g,a)
return e}var accentedChars={A:"àá",E:"èéÉ",I:"í",O:"ò-ö",U:"ùü"}
var accentedAndNormalRegexChars=_.object(_.map(accentedChars,function(e,a){return[a,"["+a+a.toLowerCase()+e+"]"]}))
var accentedRegexChars=_.object(_.map(accentedChars,function(e,a){return[a,"["+e+"]"]}))
var accentedCharRegexes={}
_.each(accentedRegexChars,function(e,a){accentedCharRegexes[a.toLowerCase()]=new RegExp(e,"g")})
var anyAccentNeedles=_.values(accentedRegexChars).join("|")
var anyAccentedCharRegex=new RegExp(anyAccentNeedles)
module.exports={escapeRegex:escapeRegex,accentInsensitive:accentInsensitive,accentedCharRegexes:accentedCharRegexes,anyAccentedCharRegex:anyAccentedCharRegex}
});
KAdefine("javascript/shared-package/request-animation-frame.js", function(require, module, exports) {
var vendors=["ms","moz","webkit","o"]
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"]}var lastTime=0
if(!window.requestAnimationFrame){window.requestAnimationFrame=function(e,n){var i=Date.now()
var a=Math.max(0,16-(i-lastTime))
var t=window.setTimeout(function(){e(Date.now())},a)
lastTime=i+a
return t}}
});
KAdefine("javascript/shared-package/responsive-nav-menu.jsx", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var React=require("react")
var $_=require("../shared-package/i18n.js").$_
var ReactCSSTransitionGroup=React.addons.CSSTransitionGroup
var domainObjectPropType=React.PropTypes.shape({translatedTitle:React.PropTypes.string.isRequired,identifier:React.PropTypes.string.isRequired,href:React.PropTypes.string,children:React.PropTypes.arrayOf(React.PropTypes.shape({identifier:React.PropTypes.string.isRequired,translatedTitle:React.PropTypes.string.isRequired,href:React.PropTypes.string}))})
var transformDomainIntoSubgroups=function(e){var t=e.identifier
if(t==="math"){var n=e.childrenByGradeLevel
return _.chain(["grades","secondary","foundations"]).map(function(e){var t=n[e]
if(t){return{identifier:e,title:t.header,children:t.children}}}).filter(_.identity).value()}else if(t==="humanities"){return[{identifier:"other-humanities",title:$._("Humanities"),children:e.otherHumanitiesChildren},{identifier:"art-history",title:$._("Art history"),children:e.artHistoryChildren}]}else if(t==="partner-content"){return[{identifier:"museum",title:$._("Museums"),children:e.museumChildren},{identifier:"other-partner-content",title:$._("Partners"),children:e.otherPartnerContentChildren}]}else{return[{identifier:e.identifier,title:$._("Subjects"),children:e.children}]}}
var NavMenuSection=React.createClass({displayName:"NavMenuSection",propTypes:{domain:domainObjectPropType},getInitialState:function(){return{open:false}},handleSectionTitleClick:function(){this.setState({open:!this.state.open})},render:function(){var e=this.props.domain
var t=e&&!!e.children.length
var n=transformDomainIntoSubgroups(e)
var a=_.map(n,function(e){var t=_.map(e.children,function(e){return React.createElement("li",{key:e.identifier},React.createElement("a",{href:e.href,className:"nav-section-content-text"},e.translatedTitle))})
return React.createElement("li",{key:e.identifier,className:"domain-subgroup"},React.createElement("div",{className:"domain-subgroup-title"},e.title),React.createElement("ul",null,t))})
var i=null
if(t){var r=React.addons.classSet({"nav-section-icon":true,"icon-angle-right":true,"nav-section-opened":this.state.open})
i=React.createElement("i",{className:r})}return React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title "+e.identifier,href:t?null:e.href,onClick:this.handleSectionTitleClick},e.translatedTitle,i),React.createElement(ReactCSSTransitionGroup,{transitionName:"nav-section"},t&&this.state.open&&React.createElement("ul",{key:e.identifier,className:"nav-section-contents "+e.identifier},a)))}})
var ResponsiveNavMenu=React.createClass({displayName:"ResponsiveNavMenu",propTypes:{domains:React.PropTypes.arrayOf(domainObjectPropType),profileModel:React.PropTypes.object,loginUrl:React.PropTypes.string.isRequired,logoutUrl:React.PropTypes.string.isRequired},render:function(){var e=this.props.profileModel
var t=!!e&&!e.isPhantom()
var n=this.props.domains.map(function(e){return React.createElement(NavMenuSection,{key:e.identifier,domain:e})})
return React.createElement("div",null,React.createElement("ul",null,!t&&React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title login-link",href:this.props.loginUrl},$_(null,"Log in / Sign up"))),n,!t&&[React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title informational-link",href:"/about"},$_(null,"About"))),React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title informational-link",href:"/donate"},$_(null,"Donate")))],t&&[React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title profile-link",href:e.get("profileRoot")},$_(null,"Profile"))),React.createElement("li",{className:"nav-menu-section"},React.createElement("a",{className:"nav-section-title informational-link",href:this.props.logoutUrl},$_(null,"Log out")))]))}})
module.exports=ResponsiveNavMenu
});
KAdefine("javascript/shared-package/site-infra.js", function(require, module, exports) {
var $=require("jquery")
require("../../third_party/javascript-khansrc/raven-js/raven.js")
require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
require("../../third_party/javascript-khansrc/Modernizr/modernizr.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.touch-punch.js")
var KA=require("./ka.js")
$.migrateMute=!KA.IS_DEV_SERVER
var _=require("underscore")
require("../../third_party/javascript-khansrc/es5-shim/function-prototype-bind-polyfill.js")
require("./request-animation-frame.js")
require("./handlebars-extras.js")
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
require("../../third_party/javascript-khansrc/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js")
require("./ka.js")
var APIActionResults=require("./api-action-results.js")
var CSSMenus=require("./pageutil.js").CSSMenus
var FacebookUtil=require("./facebookutil.js")
var KAConsole=require("./console.js")
var NotificationsLoader=require("./notifications-loader.js")
var PackageManager=require("./package-manager.js")
var Social=require("./social.js")
var TypeaheadLoader=require("./typeahead-loader.js")
var VisitTracking=require("./visit-tracking.js")
var SiteInfra={_initSearch:function(){$(".search-form .search-input").placeholder()
$(".search-input").closest("form").submit(function(r){return!!$.trim($(this).find(".search-input").val())})},_initUserDropdown:function(){$("#user-info").on("userUpdate",function(){$(this).find(".dropdown-toggle").dropdown("ontouchstart"in window?null:"hover")}).trigger("userUpdate")},_onDomReady:function(){if(window._qf){$.each(window._qf,function(r,i){$(i)})}NotificationsLoader.init()
APIActionResults.addDefaultHooks()
Social.init()
CSSMenus.init()
TypeaheadLoader.init()
this._initSearch()
this._initUserDropdown()
VisitTracking.trackVisit()},_setBlurOnEsc:function(){$(document).delegate("input.blur-on-esc","keyup",function(r,i){if(i&&i.silent){return}if(r.which===27){$(r.target).blur()}})},_setupLoginLinkRedirect:function(){$(document).on("click",'[href="/login"]',function(r){if(KA.loginUrl){window.location.assign(KA.loginUrl)
r.preventDefault()}})},init:_.once(function(){this._setBlurOnEsc()
this._setupLoginLinkRedirect()
KAConsole.init(KA.IS_DEV_SERVER)
PackageManager.init()
APIActionResults.init()
FacebookUtil.init()
$(this._onDomReady.bind(this))})}
module.exports=SiteInfra
});
KAdefine("javascript/shared-package/social.js", function(require, module, exports) {
var $=require("jquery")
require("./i18n.js")
var FacebookUtil=require("./facebookutil.js")
var Social={init:function(){$("body").on("click",".twitterShare",function(){Social.openTwitterPopup(this.href)
return false})},prepFacebook:function(){FacebookUtil.runOnFbReady(function(){})},facebookShare:function(e,t,a){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:t,picture:a,caption:"www.khanacademy.org"})})
return false},facebookVideo:function(e,t,a){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:"http://www.khanacademy.org/"+a,picture:"http://www.khanacademy.org/images/handtreehorizontal_facebook.png",caption:"www.khanacademy.org",description:t,message:$._("I just learned about %(title)s on Khan Academy",{title:e})})})
return false},formatMailtoUrl:function(e){var t=e.subject
var a=e.body
var o="mailto:"+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(a)
return o.replace(/\s/g,"+")},emailBadge:function(e,t){return Social.formatMailtoUrl({subject:$._("I just earned the %(badge)s badge on Khan Academy!",{badge:t}),body:$._("Check it out at %(url)s.",{url:e})})},openTwitterPopup:function(e){var t=550,a=370,o=($(window).width()-t)/2,n=($(window).height()-a)/2,r="status=1"+",width="+t+",height="+a+",top="+n+",left="+o
window.open(e,"twitter",r)},formatTwitterShareUrl:function(e){var t=e.url
var a=e.text
var o="http://twitter.com/intent/tweet?"+"url="+encodeURIComponent(t)+"&text="+encodeURIComponent(a)+"&related=khanacademy:Khan Academy"
return o.replace(/\s/g,"+")},twitterBadge:function(e,t){return Social.formatTwitterShareUrl({url:e,text:$._("I just earned the %(badge)s badge on @khanacademy! Check it out at",{badge:t})})}}
module.exports=Social
});
KAdefine("javascript/shared-package/typeahead-loader.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var KA=require("./ka.js")
var suggestionsDeferred=null
var requireSuggestions=function(){if(!suggestionsDeferred){var e="/api/internal/search/suggestions_index?v=1"
suggestionsDeferred=$.getJSON(e)}return suggestionsDeferred}
var loadJavaScript=function(){require.async(["../typeahead-package/search-bar.jsx","../typeahead-package/build-mission-source.js","package!typeahead.css"],function(){})}
var init=function(){if(!KA.INITIALIZED){return}_.delay(function(){loadJavaScript()
requireSuggestions()},2e3)}
module.exports={init:init}
});
KAdefine("javascript/shared-package/update-document-title.js", function(require, module, exports) {
var $=require("jquery")
require("./i18n.js")
var KA=require("./ka.js")
var updateDocumentTitle=function(e){var t=KA.getUserProfile()
if(e&&typeof e.pageName!=="undefined"){KA.currentPageName=e.pageName+" | "+$._("Khan Academy")}if(e&&t&&typeof e.noteCount!=="undefined"){t.set("countBrandNewNotifications",e.noteCount)}var n=t?t.get("countBrandNewNotifications"):0,a=KA.currentPageName
document.title=n>0?"("+n+") "+a:a}
module.exports=updateDocumentTitle
});
KAdefine("javascript/shared-package/user-dropdown.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,a,o,e,r){o=o||n.helpers
var i="",l,s,f,t,c=this,h="function",p=o.helperMissing,u=void 0,d=this.escapeExpression,g=o.blockHelperMissing
function m(n,a){var e="",r
e+='<a class="nav-link log-in-link" href="'
f=o.loginUrl
r=f||n.loginUrl
if(typeof r===h){r=r.call(n,{hash:{}})}else if(r===u){r=p.call(n,"loginUrl",{hash:{}})}e+=d(r)+'">'
f=o["_"]
r=f||n["_"]
t=c.program(2,_,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="</a>"
return e}function _(n,a){return"Log in"}function v(n,a){return"with-coach-links"}function w(n,a){var e="",r
e+='\n        <li><a href="'
f=o.signUpUrl
r=f||n.signUpUrl
if(typeof r===h){r=r.call(n,{hash:{}})}else if(r===u){r=p.call(n,"signUpUrl",{hash:{}})}e+=d(r)+'" class="name-dropdown__link primary signup-to-claim">'
f=o["_"]
r=f||n["_"]
t=c.program(7,k,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="</a></li>\n        "
return e}function k(n,a){return"Sign up to claim your points"}function y(n,a){return"Profile"}function S(n,a){var e="",r
e+='\n            <li><a href="/?learn=1" class="name-dropdown__link dropdown-learning-home-link">\n                '
f=o["_"]
r=f||n["_"]
t=c.program(12,U,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n            </a></li>\n        "
return e}function U(n,a){return"Learning home"}function L(n,a){var e="",r,i
e+='\n            <li><a href="/coach/dashboard" class="name-dropdown__link your-students-link students-dropdown-link">\n                '
f=o.hasStudents
r=f||n.hasStudents
i=o["if"]
t=c.program(15,C,a)
t.hash={}
t.fn=t
t.inverse=c.program(18,H,a)
r=i.call(n,r,t)
if(r||r===0){e+=r}e+='\n            </a></li>\n\n            <li><a href="/parent" class="name-dropdown__link name-dropdown__separator">\n            '
f=o.hasChildren
r=f||n.hasChildren
i=o["if"]
t=c.program(21,R,a)
t.hash={}
t.fn=t
t.inverse=c.program(24,A,a)
r=i.call(n,r,t)
if(r||r===0){e+=r}e+="\n            </a></li>\n        "
return e}function C(n,a){var e="",r
e+="\n                    "
f=o["_"]
r=f||n["_"]
t=c.program(16,b,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n                "
return e}function b(n,a){return"Your students"}function H(n,a){var e="",r
e+="\n                    "
f=o["_"]
r=f||n["_"]
t=c.program(19,P,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n                "
return e}function P(n,a){return"Add students"}function R(n,a){var e="",r
e+="\n                "
f=o["_"]
r=f||n["_"]
t=c.program(22,x,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n            "
return e}function x(n,a){return"Your children"}function A(n,a){var e="",r
e+="\n                "
f=o["_"]
r=f||n["_"]
t=c.program(25,M,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n            "
return e}function M(n,a){return"Add children"}function T(n,a){var e="",r
e+='\n        <li><a href="/settings/account" class="name-dropdown__link">'
f=o["_"]
r=f||n["_"]
t=c.program(28,Y,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="</a></li>\n        "
return e}function Y(n,a){return"Settings"}function q(n,a){return"Help"}function z(n,a){return"Log out"}f=o.isPhantom
l=f||a.isPhantom
s=o["if"]
t=c.program(1,m,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='<span\n    id="user-notifications">'
i+='</span>\n\n<span class="name-dropdown dropdown">\n    <a href="#" class="username_and_notification dropdown-toggle">\n        <img class="user-avatar" src="'
f=o.avatarSrc
l=f||a.avatarSrc
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"avatarSrc",{hash:{}})}i+=d(l)+'" alt="">\n        <span class="user-name">'
f=o.nickname
l=f||a.nickname
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"nickname",{hash:{}})}i+=d(l)+'</span>\n        <i class="icon-caret-down" aria-hidden="true"></i>\n    </a>\n\n    <ul class="dropdown-menu no-submenus username-dropdown '
f=o.showCoachingLinks
l=f||a.showCoachingLinks
s=o["if"]
t=c.program(4,v,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='">\n\n        '
f=o.showSignUpToSave
l=f||a.showSignUpToSave
s=o["if"]
t=c.program(6,w,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='\n\n        <li><a href="'
f=o.profileRoot
l=f||a.profileRoot
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"profileRoot",{hash:{}})}i+=d(l)+'" class="name-dropdown__link name-dropdown__separator">'
f=o["_"]
l=f||a["_"]
t=c.program(9,y,r)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof l===h){l=l.call(a,t)}else{l=g.call(a,l,t)}if(l||l===0){i+=l}i+="</a></li>\n\n        "
f=o.showLearningHome
l=f||a.showLearningHome
s=o["if"]
t=c.program(11,S,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+="\n\n        "
f=o.showCoachingLinks
l=f||a.showCoachingLinks
s=o["if"]
t=c.program(14,L,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+="\n\n        "
f=o.showSettings
l=f||a.showSettings
s=o["if"]
t=c.program(27,T,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='\n\n        <li><a href="https://khanacademy.zendesk.com" class="name-dropdown__link name-dropdown__separator">'
f=o["_"]
l=f||a["_"]
t=c.program(30,q,r)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof l===h){l=l.call(a,t)}else{l=g.call(a,l,t)}if(l||l===0){i+=l}i+='</a></li>\n\n        <!-- Facebook\'s JS logout requires the page_logout ID -->\n        <li><a id="page_logout" href="'
f=o.logoutUrl
l=f||a.logoutUrl
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"logoutUrl",{hash:{}})}i+=d(l)+'" class="name-dropdown__link">'
f=o["_"]
l=f||a["_"]
t=c.program(32,z,r)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof l===h){l=l.call(a,t)}else{l=g.call(a,l,t)}if(l||l===0){i+=l}i+="</a></li>\n    </ul>\n</span>\n"
return i})
module.exports=t
});
KAdefine("javascript/shared-package/visit-tracking.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var BigBingo=require("./bigbingo.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var getSeconds=function(e){var i=new Date
if(e){i=new Date(e)}return Math.floor(+i/1e3)}
var returnVisitTime=60*60*3
var keepCookieFor=365*2
var frequency=60*30
var VisitTracking={_serverPageLoadTime:null,_browserPageLoadTime:null,_init:_.once(function(){VisitTracking._serverPageLoadTime=KA.currentServerTime()
VisitTracking._browserPageLoadTime=getSeconds()}),trackVisit:function(){if(!KA.INITIALIZED||!Cookies.areCookiesEnabled()){return}VisitTracking._init()
var e=KA.getUserID()
var i=encodeURIComponent(e)
var r=getSeconds()
var o=r-VisitTracking._browserPageLoadTime
var n=VisitTracking._serverPageLoadTime+o
function t(){Cookies.createCookie("return_visits_"+i,n,keepCookieFor)}function a(){var i=""
if(!e){i="pre_phantom"}else if(KA.getUserProfile().isPhantom()){i="phantom"}else{i="logged_in"}var o=["return_visit",i+"_return_visit"]
var n=KA.getUserProfile()
if(n&&!n.attributes.isPhantom){var a=getSeconds(n.attributes.dateJoined)
if(r-a<60*60*24*7){o.push("logged_in_return_visit_7_day")}}if(n&&n.attributes.isChildAccount){$.post("/api/internal/user/mark_bingo_conversion_for_parent",{conversion_id:"child_return_visit"})}BigBingo.markConversions(o)
t()}var s=+Cookies.readCookie("return_visits_"+i)
if(!s){t()
return}var u=n-s
if(u>returnVisitTime){_.delay(a,3e4)}else if(u>frequency){t()}}}
module.exports=VisitTracking
});
KAdefine("third_party/javascript-khansrc/Modernizr/modernizr.js", function(__KA_require, __KA_module, __KA_exports) {
(function(e,n,t){var r=[]
var i=[]
var o={_version:"v3.0.0pre",_config:{classPrefix:"modernizr-",enableClasses:true,usePrefixes:true},_q:[],on:function(e,n){setTimeout(function(){n(this[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}}
var s=function(){}
s.prototype=o
s=new s
function a(e,n){return typeof e===n}function f(){var e
var n
var t
var o
var f
var l
var u
for(var d in i){e=[]
n=i[d]
if(n.name){e.push(n.name.toLowerCase())
if(n.options&&n.options.aliases&&n.options.aliases.length){for(t=0;t<n.options.aliases.length;t++){e.push(n.options.aliases[t].toLowerCase())}}}o=a(n.fn,"function")?n.fn():n.fn
for(f=0;f<e.length;f++){l=e[f]
u=l.split(".")
if(u.length===1){s[u[0]]=o}else if(u.length===2){if(s[u[0]]&&!(s[u[0]]instanceof Boolean)){s[u[0]]=new Boolean(s[u[0]])}s[u[0]][u[1]]=o}r.push((o?"":"no-")+u.join("-"))}}}var l=n.documentElement
function u(e){var n=l.className
var t=s._config.classPrefix||""
var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)")
n=n.replace(r,"$1"+t+"js$2")
if(s._config.enableClasses){n+=" "+t+e.join(" "+t)
l.className=n}}var d=o._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[]
o._prefixes=d
var c=function(){return n.createElement.apply(n,arguments)}
function p(){var e=n.body
if(!e){e=c("body")
e.fake=true}return e}function v(e,n,t,r){var i="modernizr"
var o
var s
var a
var f
var u=c("div")
var d=p()
if(parseInt(t,10)){while(t--){a=c("div")
a.id=r?r[t]:i+(t+1)
u.appendChild(a)}}o=["­",'<style id="s',i,'">',e,"</style>"].join("")
u.id=i;(!d.fake?u:d).innerHTML+=o
d.appendChild(u)
if(d.fake){d.style.background=""
d.style.overflow="hidden"
f=l.style.overflow
l.style.overflow="hidden"
l.appendChild(d)}s=n(u,e)
if(d.fake){d.parentNode.removeChild(d)
l.style.overflow=f
l.offsetHeight}else{u.parentNode.removeChild(u)}return!!s}var m=o.testStyles=v
s.addTest("touchevents",function(){var t
if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch){t=true}else{var r=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("")
m(r,function(e){t=e.offsetTop===9})}return t})
var h="Webkit Moz O ms"
var y=o._config.usePrefixes?h.split(" "):[]
o._cssomPrefixes=y
var g=o._config.usePrefixes?h.toLowerCase().split(" "):[]
o._domPrefixes=g
function x(e,n){return!!~(""+e).indexOf(n)}function C(e,n){return function(){return e.apply(n,arguments)}}function w(e,n,t){var r
for(var i in e){if(e[i]in n){if(t===false)return e[i]
r=n[e[i]]
if(a(r,"function")){return C(r,t||n)}return r}}return false}var _={elem:c("modernizr")}
s._q.push(function(){delete _.elem})
var b={style:_.elem.style}
s._q.unshift(function(){delete b.style})
function S(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function T(n,r){var i=n.length
if("CSS"in e&&"supports"in e.CSS){while(i--){if(e.CSS.supports(S(n[i]),r)){return true}}return false}else if("CSSSupportsRule"in e){var o=[]
while(i--){o.push("("+S(n[i])+":"+r+")")}o=o.join(" or ")
return v("@supports ("+o+") { #modernizr { position: absolute; } }",function(n){return(e.getComputedStyle?getComputedStyle(n,null):n.currentStyle)["position"]=="absolute"})}return t}function j(e,n,r,i){i=a(i,"undefined")?false:i
if(!a(r,"undefined")){var o=T(e,r)
if(!a(o,"undefined")){return o}}var s,f,l,u
if(!b.style){s=true
b.modElem=c("modernizr")
b.style=b.modElem.style}function d(){if(s){delete b.style
delete b.modElem}}for(f in e){l=e[f]
u=b.style[l]
if(!x(l,"-")&&b.style[l]!==t){if(!i&&!a(r,"undefined")){try{b.style[l]=r}catch(p){}if(b.style[l]!=u){d()
return n=="pfx"?l:true}}else{d()
return n=="pfx"?l:true}}}d()
return false}function z(e,n,t,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+y.join(o+" ")+o).split(" ")
if(a(n,"string")||a(n,"undefined")){return j(s,n,r,i)}else{s=(e+" "+g.join(o+" ")+o).split(" ")
return w(s,n,t)}}o.testAllProps=z
function P(e,n,r){return z(e,t,t,n,r)}o.testAllProps=P
s.addTest("flexbox",P("flexBasis","1px",true))
s.addTest("flexboxtweener",P("flexAlign","end",true))
f()
u(r)
delete o.addTest
delete o.addAsyncTest
for(var k=0;k<s._q.length;k++){s._q[k]()}e.Modernizr=s})(this,document)
__KA_module.exports = Modernizr;
this.Modernizr = Modernizr;
});
KAdefine("third_party/javascript-khansrc/backbone-src/backbone.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../underscore/underscore.js");
(function(){var t=this
var e=t.Backbone
var i=[]
var r=i.push
var s=i.slice
var n=i.splice
var a
if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0"
var h=t._
if(!h&&typeof require!=="undefined")h=require("underscore")
a.$=t.jQuery||t.Zepto||t.ender||t.$
a.noConflict=function(){t.Backbone=e
return this}
a.emulateHTTP=false
a.emulateJSON=false
var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this
this._events||(this._events={})
var r=this._events[t]||(this._events[t]=[])
r.push({callback:e,context:i,ctx:i||this})
return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this
var r=this
var s=h.once(function(){r.off(t,s)
e.apply(this,arguments)})
s._callback=e
return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f
if(!this._events||!l(this,"off",t,[e,i]))return this
if(!t&&!e&&!i){this._events={}
return this}a=t?[t]:h.keys(this._events)
for(o=0,u=a.length;o<u;o++){t=a[o]
if(n=this._events[t]){this._events[t]=r=[]
if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c]
if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this
var e=s.call(arguments,1)
if(!l(this,"trigger",t,e))return this
var i=this._events[t]
var r=this._events.all
if(i)c(i,e)
if(r)c(r,arguments)
return this},stopListening:function(t,e,i){var r=this._listeners
if(!r)return this
var s=!e&&!i
if(typeof e==="object")i=this
if(t)(r={})[t._listenerId]=t
for(var n in r){r[n].off(e,i,this)
if(s)delete this._listeners[n]}return this}}
var u=/\s+/
var l=function(t,e,i,r){if(!i)return true
if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u)
for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true}
var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2]
switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx)
return
case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n)
return
case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a)
return
case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h)
return
default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}}
var f={listenTo:"on",listenToOnce:"once"}
h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={})
var n=e._listenerId||(e._listenerId=h.uniqueId("l"))
s[n]=e
if(typeof i==="object")r=this
e[t](i,r,this)
return this}})
o.bind=o.on
o.unbind=o.off
h.extend(a,o)
var d=a.Model=function(t,e){var i
var r=t||{}
e||(e={})
this.cid=h.uniqueId("c")
this.attributes={}
h.extend(this,h.pick(e,p))
if(e.parse)r=this.parse(r,e)||{}
if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e)
this.changed={}
this.initialize.apply(this,arguments)}
var p=["url","urlRoot","collection"]
h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c
if(t==null)return this
if(typeof t==="object"){s=t
i=e}else{(s={})[t]=e}i||(i={})
if(!this._validate(s,i))return false
n=i.unset
o=i.silent
a=[]
u=this._changing
this._changing=true
if(!u){this._previousAttributes=h.clone(this.attributes)
this.changed={}}c=this.attributes,l=this._previousAttributes
if(this.idAttribute in s)this.id=s[this.idAttribute]
for(r in s){e=s[r]
if(!h.isEqual(c[r],e))a.push(r)
if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true
for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this
if(!o){while(this._pending){this._pending=false
this.trigger("change",this,i)}}this._pending=false
this._changing=false
return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={}
for(var i in this.attributes)e[i]=void 0
return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed)
return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false
var e,i=false
var r=this._changing?this._previousAttributes:this.attributes
for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null
return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=this
var i=t.success
t.success=function(r){if(!e.set(e.parse(r,t),t))return false
if(i)i(e,r,t)
e.trigger("sync",e,r,t)}
M(this,t)
return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes
if(t==null||typeof t==="object"){r=t
i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false
i=h.extend({validate:true},i)
if(!this._validate(r,i))return false
if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true
var o=this
var u=i.success
i.success=function(t){o.attributes=a
var e=o.parse(t,i)
if(i.wait)e=h.extend(r||{},e)
if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i)
o.trigger("sync",o,t,i)}
M(this,i)
s=this.isNew()?"create":i.patch?"patch":"update"
if(s==="patch")i.attrs=r
n=this.sync(s,this,i)
if(r&&i.wait)this.attributes=a
return n},destroy:function(t){t=t?h.clone(t):{}
var e=this
var i=t.success
var r=function(){e.trigger("destroy",e,e.collection,t)}
t.success=function(s){if(t.wait||e.isNew())r()
if(i)i(e,s,t)
if(!e.isNew())e.trigger("sync",e,s,t)}
if(this.isNew()){t.success()
return false}M(this,t)
var s=this.sync("delete",this,t)
if(!t.wait)r()
return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||R()
if(this.isNew())return t
return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true
t=h.extend({},this.attributes,t)
var i=this.validationError=this.validate(t,e)||null
if(!i)return true
this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}))
return false}})
var v=["keys","values","pairs","invert","pick","omit"]
h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.attributes)
return h[t].apply(h,e)}})
var g=a.Collection=function(t,e){e||(e={})
if(e.url)this.url=e.url
if(e.model)this.model=e.model
if(e.comparator!==void 0)this.comparator=e.comparator
this._reset()
this.initialize.apply(this,arguments)
if(t)this.reset(t,h.extend({silent:true},e))}
var m={add:true,remove:true,merge:true}
var y={add:true,merge:false,remove:false}
h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t]
e||(e={})
var i,r,s,n
for(i=0,r=t.length;i<r;i++){n=this.get(t[i])
if(!n)continue
delete this._byId[n.id]
delete this._byId[n.cid]
s=this.indexOf(n)
this.models.splice(s,1)
this.length--
if(!e.silent){e.index=s
n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m)
if(e.parse)t=this.parse(t,e)
if(!h.isArray(t))t=t?[t]:[]
var i,s,a,o,u,l
var c=e.at
var f=this.comparator&&c==null&&e.sort!==false
var d=h.isString(this.comparator)?this.comparator:null
var p=[],v=[],g={}
for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue
if(u=this.get(a)){if(e.remove)g[u.cid]=true
if(e.merge){u.set(a.attributes,e)
if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a)
a.on("all",this._onModelEvent,this)
this._byId[a.cid]=a
if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true
this.length+=p.length
if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true})
if(e.silent)return this
for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e)
return this},reset:function(t,e){e||(e={})
for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models
this._reset()
this.add(t,h.extend({silent:true},e))
if(!e.silent)this.trigger("reset",this,e)
return this},push:function(t,e){t=this._prepareModel(t,e)
this.add(t,h.extend({at:this.length},e))
return t},pop:function(t){var e=this.at(this.length-1)
this.remove(e,t)
return e},unshift:function(t,e){t=this._prepareModel(t,e)
this.add(t,h.extend({at:0},e))
return t},shift:function(t){var e=this.at(0)
this.remove(e,t)
return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0
return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[]
return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator")
t||(t={})
if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t)
return this},sortedIndex:function(t,e,i){e||(e=this.comparator)
var r=h.isFunction(e)?e:function(t){return t.get(e)}
return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=t.success
var i=this
t.success=function(r){var s=t.reset?"reset":"set"
i[s](r,t)
if(e)e(i,r,t)
i.trigger("sync",i,r,t)}
M(this,t)
return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{}
if(!(t=this._prepareModel(t,e)))return false
if(!e.wait)this.add(t,e)
var i=this
var r=e.success
e.success=function(s){if(e.wait)i.add(t,e)
if(r)r(t,s,e)}
t.save(null,e)
return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0
this.models=[]
this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this
return t}e||(e={})
e.collection=this
var i=new this.model(t,e)
if(!i._validate(t,e)){this.trigger("invalid",this,t,e)
return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection
t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return
if(t==="destroy")this.remove(e,r)
if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)]
if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}})
var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"]
h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.models)
return h[t].apply(h,e)}})
var w=["groupBy","countBy","sortBy"]
h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)}
return h[t](this.models,r,i)}})
var b=a.View=function(t){this.cid=h.uniqueId("view")
this._configure(t||{})
this._ensureElement()
this.initialize.apply(this,arguments)
this.delegateEvents()}
var x=/^(\S+)\s*(.*)$/
var E=["model","collection","el","id","attributes","className","tagName","events"]
h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove()
this.stopListening()
return this},setElement:function(t,e){if(this.$el)this.undelegateEvents()
this.$el=t instanceof a.$?t:a.$(t)
this.el=this.$el[0]
if(e!==false)this.delegateEvents()
return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this
this.undelegateEvents()
for(var e in t){var i=t[e]
if(!h.isFunction(i))i=this[t[e]]
if(!i)continue
var r=e.match(x)
var s=r[1],n=r[2]
i=h.bind(i,this)
s+=".delegateEvents"+this.cid
if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t)
h.extend(this,h.pick(t,E))
this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"))
if(this.id)t.id=h.result(this,"id")
if(this.className)t["class"]=h.result(this,"className")
var e=a.$("<"+h.result(this,"tagName")+">").attr(t)
this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}})
a.sync=function(t,e,i){var r=k[t]
h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON})
var s={type:r,dataType:"json"}
if(!i.url){s.url=h.result(e,"url")||R()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json"
s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded"
s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST"
if(i.emulateJSON)s.data._method=r
var n=i.beforeSend
i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r)
if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i))
e.trigger("request",e,o,i)
return o}
var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"}
a.ajax=function(){return a.$.ajax.apply(a.$,arguments)}
var S=a.Router=function(t){t||(t={})
if(t.routes)this.routes=t.routes
this._bindRoutes()
this.initialize.apply(this,arguments)}
var T=/\((.*?)\)/g
var H=/(\(\?)?:\w+/g
var A=/\*\w+/g
var I=/[\-{}\[\]+?.,\\\^$|#\s]/g
h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t)
if(h.isFunction(e)){i=e
e=""}if(!i)i=this[e]
var r=this
a.history.route(t,function(s){var n=r._extractParameters(t,s)
r.execute(i,n)
r.trigger.apply(r,["route:"+e].concat(n))
r.trigger("route",e,n)
a.history.trigger("route",r,e,n)})
return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,e){a.history.navigate(t,e)
return this},_bindRoutes:function(){if(!this.routes)return
this.routes=h.result(this,"routes")
var t,e=h.keys(this.routes)
while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(T,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/]+)"}).replace(A,"(.*?)")
return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1)
return h.map(i,function(t){return t?decodeURIComponent(t):null})}})
var N=a.History=function(){this.handlers=[]
h.bindAll(this,"checkUrl")
if(typeof window!=="undefined"){this.location=window.location
this.history=window.history}}
var P=/^[#\/]|\s+$/g
var O=/^\/+|\/+$/g
var C=/msie [\w.]+/
var j=/\/$/
N.started=false
h.extend(N.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/)
return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname
var i=this.root.replace(j,"")
if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(P,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started")
N.started=true
this.options=h.extend({},{root:"/"},this.options,t)
this.root=this.options.root
this._wantsHashChange=this.options.hashChange!==false
this._wantsPushState=!!this.options.pushState
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
var e=this.getFragment()
var i=document.documentMode
var r=C.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7)
this.root=("/"+this.root+"/").replace(O,"/")
if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow
this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e
var s=this.location
var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true)
this.location.replace(this.root+this.location.search+"#"+this.fragment)
return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(P,"")
this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl)
clearInterval(this._checkUrlInterval)
N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment()
if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false
if(this.iframe)this.navigate(e)
this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t)
var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e)
return true}})
return i},navigate:function(t,e){if(!N.started)return false
if(!e||e===true)e={trigger:e}
t=this.getFragment(t||"")
if(this.fragment===t)return
this.fragment=t
var i=this.root+t
if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace)
if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close()
this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"")
t.replace(r+"#"+e)}else{t.hash="#"+e}}})
a.history=new N
var U=function(t,e){var i=this
var r
if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e)
var s=function(){this.constructor=r}
s.prototype=i.prototype
r.prototype=new s
if(t)h.extend(r.prototype,t)
r.__super__=i.prototype
return r}
d.extend=g.extend=S.extend=b.extend=N.extend=U
var R=function(){throw new Error('A "url" property or function must be specified')}
var M=function(t,e){var i=e.error
e.error=function(r){if(i)i(t,r,e)
t.trigger("error",t,r,e)}}}).call(this)
__KA_module.exports = Backbone;
this.Backbone = Backbone;
});
KAdefine("third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
!function($){"use strict"
var t=".dropdown-toggle",o=function(t,o){if(o==="hover"&&!Modernizr.touch){$(t).on("mouseenter",function(){$(this).dropdown("open")}).parent().on("mouseleave",function(){$(this).find(".dropdown-toggle").dropdown("close")}).find(".caret").on("click",function(){$(this).parent().dropdown("toggle")
return false})}else{$(t).on("click.dropdown.data-api",this.toggle)}}
o.prototype={constructor:o,toggle:function(t){var n=$(this),e=n.attr("data-target"),r,a
if(!e){e=n.attr("href")
e=e&&e.replace(/.*(?=#[^\s]*$)/,"")}r=$(e)
r.length||(r=n.parent())
a=r.hasClass("open")
if(a){o.prototype.close.call(this)}else{o.prototype.open.call(this)}return false},open:function(){var t=$(this)
if(t.hasClass("caret")){t=t.parent()}t.trigger("open").parent().addClass("open")},close:function(){var t=$(this)
t.trigger("close").parent().removeClass("open")}}
function n(o){$(t).each(function(t,n){if($(n).hasClass("no-auto-close")&&$(o.target).closest($(n).parent()).length>0){return}$(n).trigger("close").parent().removeClass("open")})}$.fn.dropdown=function(t){return this.each(function(){var n=$(this),e=n.data("dropdown")
if(!e){n.data("dropdown",e=new o(this,t))}if(typeof t=="string"){var r=e[t]
if(r){r.call(this)}}})}
$.fn.dropdown.Constructor=o
$(function(){$("html").on("click.dropdown.data-api",n)})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
__KA_require("./bootstrap-transition.js");
!function($){"use strict"
var t=function(t,e){this.options=e
this.$element=$(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",$.proxy(this.hide,this))
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)}
t.prototype={constructor:t,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var t=this,e=$.Event("show")
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var e=$.support.transition&&t.$element.hasClass("fade")
if(!t.$element.parent().length){t.$element.appendTo(document.body)}t.$element.show()
if(e){t.$element[0].offsetWidth}t.$element.addClass("bootstrap-modal").addClass("in").attr("aria-hidden",false)
t.enforceFocus()
e?t.$element.one($.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault()
var e=this
t=$.Event("hide")
this.$element.trigger(t)
if(!this.isShown||t.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off("focusin.modal")
this.$element.removeClass("in").removeClass("bootstrap-modal").attr("aria-hidden",true)
$.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this
$(document).off("focusin.bs.modal").on("focusin.bs.modal",function(e){if(t.$element[0]!==e.target&&!$(e.target).parents(".bootstrap-modal").length){t.$element.focus()}})},escape:function(){var t=this
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&t.hide()})}else if(!this.isShown){this.$element.off("keyup.dismiss.modal")}},hideWithTransition:function(){var t=this,e=setTimeout(function(){t.$element.off($.support.transition.end)
t.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(e)
t.hideModal()})},hideModal:function(){var t=this
this.$element.hide()
this.backdrop(function(){t.removeBackdrop()
t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null},backdrop:function(t){var e=this,i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var o=$.support.transition&&i
this.$backdrop=$('<div class="modal-backdrop '+i+'" />').appendTo(document.body)
this.$backdrop.click(this.options.backdrop=="static"?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this))
if(o)this.$backdrop[0].offsetWidth
this.$backdrop.addClass("in")
if(!t)return
o?this.$backdrop.one($.support.transition.end,t):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one($.support.transition.end,t):t()}else if(t){t()}}}
var e=$.fn.modal
$.fn.modal=function(e){return this.each(function(){var i=$(this),o=i.data("modal"),s=$.extend({},$.fn.modal.defaults,i.data(),typeof e=="object"&&e)
if(!o)i.data("modal",o=new t(this,s))
if(typeof e=="string")o[e]()
else if(s.show)o.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=t
$.fn.modal.noConflict=function(){$.fn.modal=e
return this}
$(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var e=$(this),i=e.attr("href"),o=$(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=o.data("modal")?"toggle":$.extend({remote:!/#/.test(i)&&i},o.data(),e.data())
t.preventDefault()
o.modal(s).one("hide",function(){e.focus()})})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-transition.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
!function($){"use strict"
$(function(){$.support.transition=function(){var n=function(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i
for(i in t){if(n.style[i]!==undefined){return t[i]}}}()
return n&&{end:n}}()})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/es5-shim/function-prototype-bind-polyfill.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var t=Array.prototype
var n=t.slice
function r(){}if(!Function.prototype.bind){Function.prototype.bind=function o(t){var o=this
if(typeof o!=="function"){throw new TypeError("Function.prototype.bind called on incompatible "+o)}var e=n.call(arguments,1)
var i=function(){if(this instanceof u){var r=o.apply(this,e.concat(n.call(arguments)))
if(Object(r)===r){return r}return this}else{return o.apply(t,e.concat(n.call(arguments)))}}
var a=Math.max(0,o.length-e.length)
var p=[]
for(var c=0;c<a;c++){p.push("$"+c)}var u=Function("binder","return function("+p.join(",")+"){return binder.apply(this,arguments)}")(i)
if(o.prototype){r.prototype=o.prototype
u.prototype=new r
r.prototype=null}return u}}})()
});
KAdefine("third_party/javascript-khansrc/handlebars/handlebars.runtime.js", function(require, module, exports) {
var Handlebars={}
Handlebars.VERSION="1.0.beta.5"
Handlebars.helpers={}
Handlebars.partials={}
Handlebars.registerHelper=function(e,r,n){if(n){r.not=n}this.helpers[e]=r}
Handlebars.registerPartial=function(e,r){this.partials[e]=r}
Handlebars.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new Error("Could not find property '"+e+"'")}})
var toString=Object.prototype.toString,functionType="[object Function]"
Handlebars.registerHelper("blockHelperMissing",function(e,r){var n=r.inverse||function(){},t=r.fn
var a=""
var i=toString.call(e)
if(i===functionType){e=e.call(this)}if(e===true){return t(this)}else if(e===false||e==null){return n(this)}else if(i==="[object Array]"){if(e.length>0){for(var s=0,l=e.length;s<l;s++){a=a+t(e[s])}}else{a=n(this)}return a}else{return t(e)}})
Handlebars.registerHelper("each",function(e,r){var n=r.fn,t=r.inverse
var a=""
if(e&&e.length>0){for(var i=0,s=e.length;i<s;i++){a=a+n(e[i])}}else{a=t(this)}return a})
Handlebars.registerHelper("if",function(e,r){var n=toString.call(e)
if(n===functionType){e=e.call(this)}if(!e||Handlebars.Utils.isEmpty(e)){return r.inverse(this)}else{return r.fn(this)}})
Handlebars.registerHelper("unless",function(e,r){var n=r.fn,t=r.inverse
r.fn=t
r.inverse=n
return Handlebars.helpers["if"].call(this,e,r)})
Handlebars.registerHelper("with",function(e,r){return r.fn(e)})
Handlebars.registerHelper("log",function(e){Handlebars.log(e)})
Handlebars.Exception=function(e){var r=Error.prototype.constructor.apply(this,arguments)
for(var n in r){if(r.hasOwnProperty(n)){this[n]=r[n]}}this.message=r.message}
Handlebars.Exception.prototype=new Error
Handlebars.SafeString=function(e){this.string=e}
Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}
var r=/&(?!\w+;)|[<>"'`]/g
var n=/[&<>"'`]/
var t=function(r){return e[r]||"&amp;"}
Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()}else if(e==null||e===false){return""}if(!n.test(e)){return e}return e.replace(r,t)},isEmpty:function(e){if(typeof e==="undefined"){return true}else if(e===null){return true}else if(e===false){return true}else if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true}else{return false}}}})()
Handlebars.VM={template:function(e){var r={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(e,r,n){var t=this.programs[e]
if(n){return Handlebars.VM.program(r,n)}else if(t){return t}else{t=this.programs[e]=Handlebars.VM.program(r)
return t}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop}
return function(n,t){t=t||{}
return e.call(r,Handlebars,n,t.helpers,t.partials,t.data)}},programWithDepth:function(e,r,n){var t=Array.prototype.slice.call(arguments,2)
return function(n,a){a=a||{}
return e.apply(this,[n,a.data||r].concat(t))}},program:function(e,r){return function(n,t){t=t||{}
return e(n,t.data||r)}},noop:function(){return""},invokePartial:function(e,r,n,t,a,i){var s={helpers:t,partials:a,data:i}
if(e===undefined){throw new Handlebars.Exception("The partial "+r+" could not be found")}else if(e instanceof Function){return e(n,s)}else if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+r+" could not be compiled when running in runtime-only mode")}else{a[r]=Handlebars.compile(e)
return a[r](n,s)}}}
Handlebars.template=Handlebars.VM.template
if(typeof module!=="undefined"){module.exports=Handlebars}
this.Handlebars = Handlebars;
});
KAdefine("third_party/javascript-khansrc/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(jQuery)}})(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var e=/^https?:\/\//i
var t=/^get|post$/i
var n=new RegExp("^"+location.protocol,"i")
$.ajaxTransport("* text html xml json",function(o,r,s){if(!o.crossDomain||!o.async||!t.test(o.type)||!e.test(o.url)||!n.test(o.url)){return}var a=null
return{send:function(e,t){var n=""
var s=(r.dataType||"").toLowerCase()
a=new XDomainRequest
if(/^\d+$/.test(r.timeout)){a.timeout=r.timeout}a.ontimeout=function(){t(500,"timeout")}
a.onload=function(){var e="Content-Length: "+a.responseText.length+"\r\nContent-Type: "+a.contentType
var n={code:200,message:"success"}
var o={text:a.responseText}
try{if(s==="html"||/text\/html/i.test(a.contentType)){o.html=a.responseText}else if(s==="json"||s!=="text"&&/\/json/i.test(a.contentType)){try{o.json=$.parseJSON(a.responseText)}catch(r){n.code=500
n.message="parseerror"}}else if(s==="xml"||s!=="text"&&/\/xml/i.test(a.contentType)){var i=new ActiveXObject("Microsoft.XMLDOM")
i.async=false
try{i.loadXML(a.responseText)}catch(r){i=undefined}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){n.code=500
n.message="parseerror"
throw"Invalid XML: "+a.responseText}o.xml=i}}catch(c){throw c}finally{t(n.code,n.message,o,e)}}
a.onprogress=function(){}
a.onerror=function(){t(500,"error",{text:a.responseText})}
if(r.data){n=$.type(r.data)==="string"?r.data:$.param(r.data)}a.open(o.type,o.url)
a.send(n)},abort:function(){if(a){a.abort()}}}})})
});
KAdefine("third_party/javascript-khansrc/jQuery-menu-aim/jquery.menu-aim.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function($){$.fn.menuAim=function(t){this.each(function(){e.call(this,t)})
return this}
function e(e){var t=$(this),n=null,i=[],r=null,u=null,o=$.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:$.noop,exit:$.noop,activate:$.noop,deactivate:$.noop,exitMenu:$.noop},e)
var f=3,l=300
var a=function(e){i.push({x:e.pageX,y:e.pageY})
if(i.length>f){i.shift()}}
var c=function(){if(u){clearTimeout(u)}if(o.exitMenu(this)){if(n){o.deactivate(n)}n=null}}
var s=function(){if(u){clearTimeout(u)}o.enter(this)
x(this)},v=function(){o.exit(this)}
var h=function(e){if(e.target.getAttribute("href")==="#"){e.preventDefault()}m(this)}
var m=function(e){if(e===n){return}if(n){o.deactivate(n)}o.activate(e)
n=e}
var x=function(e){var t=y()
if(t){u=setTimeout(function(){x(e)},t)}else{m(e)}}
var y=function(){if(!n||!$(n).is(o.submenuSelector)){return 0}var e=t.offset(),u={x:e.left,y:e.top-o.tolerance},f={x:e.left+t.outerWidth(),y:u.y},a={x:e.left,y:e.top+t.outerHeight()+o.tolerance},c={x:e.left+t.outerWidth(),y:a.y},s=i[i.length-1],v=i[0]
if(!s){return 0}if(!v){v=s}if(v.x<e.left||v.x>c.x||v.y<e.top||v.y>c.y){return 0}if(r&&s.x===r.x&&s.y===r.y){return 0}function h(e,t){return(t.y-e.y)/(t.x-e.x)}var m=f,x=c
if(o.submenuDirection==="left"){m=a
x=u}else if(o.submenuDirection==="below"){m=c
x=a}else if(o.submenuDirection==="above"){m=u
x=f}var y=h(s,m),p=h(s,x),b=h(v,m),d=h(v,x)
if(y<b&&p>d){r=s
return l}r=null
return 0}
t.mouseleave(c).find(o.rowSelector).mouseenter(s).mouseleave(v).click(h)
$(document).mousemove(a)}})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jed/jed.js", function(__KA_require, __KA_module, __KA_exports) {
(function(t,e){var r=Array.prototype,n=Object.prototype,i=r.slice,s=n.hasOwnProperty,a=r.forEach,l={}
var o={forEach:function(t,e,r){var n,i,o
if(t===null){return}if(a&&t.forEach===a){t.forEach(e,r)}else if(t.length===+t.length){for(n=0,i=t.length;n<i;n++){if(n in t&&e.call(r,t[n],n,t)===l){return}}}else{for(o in t){if(s.call(t,o)){if(e.call(r,t[o],o,t)===l){return}}}}},extend:function(t){this.forEach(i.call(arguments,1),function(e){for(var r in e){t[r]=e[r]}})
return t}}
var h=function(t){this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}}},domain:"messages"}
this.options=o.extend({},this.defaults,t)
this.textdomain(this.options.domain)
if(t.domain&&!this.options.locale_data[this.options.domain]){throw new Error("Text domain set to non-existent domain: `"+t.domain+"`")}}
h.context_delimiter=String.fromCharCode(4)
function u(t){return h.PF.compile(t||"nplurals=2; plural=(n != 1);")}function c(t,e){this._key=t
this._i18n=e}o.extend(c.prototype,{onDomain:function(t){this._domain=t
return this},withContext:function(t){this._context=t
return this},ifPlural:function(t,e){this._val=t
this._pkey=e
return this},fetch:function(t){if({}.toString.call(t)!="[object Array]"){t=[].slice.call(arguments)}return(t&&t.length?h.sprintf:function(t){return t})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),t)}})
o.extend(h.prototype,{translate:function(t){return new c(t,this)},textdomain:function(t){if(!t){return this._textdomain}this._textdomain=t},gettext:function(t){return this.dcnpgettext.call(this,e,e,t)},dgettext:function(t,r){return this.dcnpgettext.call(this,t,e,r)},dcgettext:function(t,r){return this.dcnpgettext.call(this,t,e,r)},ngettext:function(t,r,n){return this.dcnpgettext.call(this,e,e,t,r,n)},dngettext:function(t,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcngettext:function(t,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},pgettext:function(t,r){return this.dcnpgettext.call(this,e,t,r)},dpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},dcpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},npgettext:function(t,r,n,i){return this.dcnpgettext.call(this,e,t,r,n,i)},dnpgettext:function(t,e,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcnpgettext:function(t,e,r,n,i){n=n||r
t=t||this._textdomain
i=typeof i=="undefined"?1:i
var s
if(!this.options){s=new h
return s.dcnpgettext.call(s,undefined,undefined,r,n,i)}if(!this.options.locale_data){throw new Error("No locale data provided.")}if(!this.options.locale_data[t]){throw new Error("Domain `"+t+"` was not found.")}if(!this.options.locale_data[t][""]){throw new Error("No locale meta information provided.")}if(!r){throw new Error("No translation key found.")}if(typeof i!="number"){i=parseInt(i,10)
if(isNaN(i)){throw new Error("The number that was passed in is not a number.")}}var a=e?e+h.context_delimiter+r:r,l=this.options.locale_data,o=l[t],c=o[""].plural_forms||(l.messages||this.defaults.locale_data.messages)[""].plural_forms,f=u(c)(i)+1,p,d
if(!o){throw new Error("No domain named `"+t+"` could be found.")}p=o[a]
if(!p||f>=p.length){if(this.options.missing_key_callback){this.options.missing_key_callback(a)}d=[null,r,n]
return d[u(c)(i)+1]}d=p[f]
if(!d){d=[null,r,n]
return d[u(c)(i)+1]}return d}})
var f=function(){function t(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function e(t,e){for(var r=[];e>0;r[--e]=t){}return r.join("")}var r=function(){if(!r.cache.hasOwnProperty(arguments[0])){r.cache[arguments[0]]=r.parse(arguments[0])}return r.format.call(null,r.cache[arguments[0]],arguments)}
r.format=function(r,n){var i=1,s=r.length,a="",l,o=[],h,u,c,p,d,y
for(h=0;h<s;h++){a=t(r[h])
if(a==="string"){o.push(r[h])}else if(a==="array"){c=r[h]
if(c[2]){l=n[i]
for(u=0;u<c[2].length;u++){if(!l.hasOwnProperty(c[2][u])){throw f('[sprintf] property "%s" does not exist',c[2][u])}l=l[c[2][u]]}}else if(c[1]){l=n[c[1]]}else{l=n[i++]}if(/[^s]/.test(c[8])&&t(l)!="number"){throw f("[sprintf] expecting number but found %s",t(l))}if(typeof l=="undefined"||l===null){l=""}switch(c[8]){case"b":l=l.toString(2)
break
case"c":l=String.fromCharCode(l)
break
case"d":l=parseInt(l,10)
break
case"e":l=c[7]?l.toExponential(c[7]):l.toExponential()
break
case"f":l=c[7]?parseFloat(l).toFixed(c[7]):parseFloat(l)
break
case"o":l=l.toString(8)
break
case"s":l=(l=String(l))&&c[7]?l.substring(0,c[7]):l
break
case"u":l=Math.abs(l)
break
case"x":l=l.toString(16)
break
case"X":l=l.toString(16).toUpperCase()
break}l=/[def]/.test(c[8])&&c[3]&&l>=0?"+"+l:l
d=c[4]?c[4]=="0"?"0":c[4].charAt(1):" "
y=c[6]-String(l).length
p=c[6]?e(d,y):""
o.push(c[5]?l+p:p+l)}}return o.join("")}
r.cache={}
r.parse=function(t){var e=t,r=[],n=[],i=0
while(e){if((r=/^[^\x25]+/.exec(e))!==null){n.push(r[0])}else if((r=/^\x25{2}/.exec(e))!==null){n.push("%")}else if((r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))!==null){if(r[2]){i|=1
var s=[],a=r[2],l=[]
if((l=/^([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(l[1])
while((a=a.substring(l[0].length))!==""){if((l=/^\.([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(l[1])}else if((l=/^\[(\d+)\]/.exec(a))!==null){s.push(l[1])}else{throw"[sprintf] huh?"}}}else{throw"[sprintf] huh?"}r[2]=s}else{i|=2}if(i===3){throw"[sprintf] mixing positional and named placeholders is not (yet) supported"}n.push(r)}else{throw"[sprintf] huh?"}e=e.substring(r[0].length)}return n}
return r}()
var p=function(t,e){e.unshift(t)
return f.apply(null,e)}
h.parse_plural=function(t,e){t=t.replace(/n/g,e)
return h.parse_expression(t)}
h.sprintf=function(t,e){if({}.toString.call(e)=="[object Array]"){return p(t,[].slice.call(e))}return f.apply(this,[].slice.call(arguments))}
h.prototype.sprintf=function(){return h.sprintf.apply(this,arguments)}
h.PF={}
h.PF.parse=function(t){var e=h.PF.extractPluralExpr(t)
return h.PF.parser.parse.call(h.PF.parser,e)}
h.PF.compile=function(t){function e(t){return t===true?1:t?t:0}var r=h.PF.parse(t)
return function(t){return e(h.PF.interpreter(r)(t))}}
h.PF.interpreter=function(t){return function(e){var r
switch(t.type){case"GROUP":return h.PF.interpreter(t.expr)(e)
case"TERNARY":if(h.PF.interpreter(t.expr)(e)){return h.PF.interpreter(t.truthy)(e)}return h.PF.interpreter(t.falsey)(e)
case"OR":return h.PF.interpreter(t.left)(e)||h.PF.interpreter(t.right)(e)
case"AND":return h.PF.interpreter(t.left)(e)&&h.PF.interpreter(t.right)(e)
case"LT":return h.PF.interpreter(t.left)(e)<h.PF.interpreter(t.right)(e)
case"GT":return h.PF.interpreter(t.left)(e)>h.PF.interpreter(t.right)(e)
case"LTE":return h.PF.interpreter(t.left)(e)<=h.PF.interpreter(t.right)(e)
case"GTE":return h.PF.interpreter(t.left)(e)>=h.PF.interpreter(t.right)(e)
case"EQ":return h.PF.interpreter(t.left)(e)==h.PF.interpreter(t.right)(e)
case"NEQ":return h.PF.interpreter(t.left)(e)!=h.PF.interpreter(t.right)(e)
case"MOD":return h.PF.interpreter(t.left)(e)%h.PF.interpreter(t.right)(e)
case"VAR":return e
case"NUM":return t.val
default:throw new Error("Invalid Token found.")}}}
h.PF.extractPluralExpr=function(t){t=t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
if(!/;\s*$/.test(t)){t=t.concat(";")}var e=/nplurals\=(\d+);/,r=/plural\=(.*);/,n=t.match(e),i={},s
if(n.length>1){i.nplurals=n[1]}else{throw new Error("nplurals not found in plural_forms string: "+t)}t=t.replace(e,"")
s=t.match(r)
if(!(s&&s.length>1)){throw new Error("`plural` expression not found: "+t)}return s[1]}
h.PF.parser=function(){var t={trace:function r(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function n(t,e,r,i,s,a,l){var o=a.length-1
switch(s){case 1:return{type:"GROUP",expr:a[o-1]}
break
case 2:this.$={type:"TERNARY",expr:a[o-4],truthy:a[o-2],falsey:a[o]}
break
case 3:this.$={type:"OR",left:a[o-2],right:a[o]}
break
case 4:this.$={type:"AND",left:a[o-2],right:a[o]}
break
case 5:this.$={type:"LT",left:a[o-2],right:a[o]}
break
case 6:this.$={type:"LTE",left:a[o-2],right:a[o]}
break
case 7:this.$={type:"GT",left:a[o-2],right:a[o]}
break
case 8:this.$={type:"GTE",left:a[o-2],right:a[o]}
break
case 9:this.$={type:"NEQ",left:a[o-2],right:a[o]}
break
case 10:this.$={type:"EQ",left:a[o-2],right:a[o]}
break
case 11:this.$={type:"MOD",left:a[o-2],right:a[o]}
break
case 12:this.$={type:"GROUP",expr:a[o-1]}
break
case 13:this.$={type:"VAR"}
break
case 14:this.$={type:"NUM",val:Number(t)}
break}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function i(t,e){throw new Error(t)},parse:function s(t){var e=this,r=[0],n=[null],i=[],s=this.table,a="",l=0,o=0,h=0,u=2,c=1
this.lexer.setInput(t)
this.lexer.yy=this.yy
this.yy.lexer=this.lexer
if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={}
var f=this.lexer.yylloc
i.push(f)
if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError
function p(t){r.length=r.length-2*t
n.length=n.length-t
i.length=i.length-t}function d(){var t
t=e.lexer.lex()||1
if(typeof t!=="number"){t=e.symbols_[t]||t}return t}var y,g,x,m,_,b,k={},w,E,P,v
while(true){x=r[r.length-1]
if(this.defaultActions[x]){m=this.defaultActions[x]}else{if(y==null)y=d()
m=s[x]&&s[x][y]}t:if(typeof m==="undefined"||!m.length||!m[0]){if(!h){v=[]
for(w in s[x])if(this.terminals_[w]&&w>2){v.push("'"+this.terminals_[w]+"'")}var F=""
if(this.lexer.showPosition){F="Parse error on line "+(l+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+this.terminals_[y]+"'"}else{F="Parse error on line "+(l+1)+": Unexpected "+(y==1?"end of input":"'"+(this.terminals_[y]||y)+"'")}this.parseError(F,{text:this.lexer.match,token:this.terminals_[y]||y,line:this.lexer.yylineno,loc:f,expected:v})}if(h==3){if(y==c){throw new Error(F||"Parsing halted.")}o=this.lexer.yyleng
a=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
y=d()}while(1){if(u.toString()in s[x]){break}if(x==0){throw new Error(F||"Parsing halted.")}p(1)
x=r[r.length-1]}g=y
y=u
x=r[r.length-1]
m=s[x]&&s[x][u]
h=3}if(m[0]instanceof Array&&m.length>1){throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+y)}switch(m[0]){case 1:r.push(y)
n.push(this.lexer.yytext)
i.push(this.lexer.yylloc)
r.push(m[1])
y=null
if(!g){o=this.lexer.yyleng
a=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
if(h>0)h--}else{y=g
g=null}break
case 2:E=this.productions_[m[1]][1]
k.$=n[n.length-E]
k._$={first_line:i[i.length-(E||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(E||1)].first_column,last_column:i[i.length-1].last_column}
b=this.performAction.call(k,a,o,l,this.yy,m[1],n,i)
if(typeof b!=="undefined"){return b}if(E){r=r.slice(0,-1*E*2)
n=n.slice(0,-1*E)
i=i.slice(0,-1*E)}r.push(this.productions_[m[1]][0])
n.push(k.$)
i.push(k._$)
P=s[r[r.length-2]][r[r.length-1]]
r.push(P)
break
case 3:return true}}return true}}
var e=function(){var t={EOF:1,parseError:function e(t,r){if(this.yy.parseError){this.yy.parseError(t,r)}else{throw new Error(t)}},setInput:function(t){this._input=t
this._more=this._less=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
return this},input:function(){var t=this._input[0]
this.yytext+=t
this.yyleng++
this.match+=t
this.matched+=t
var e=t.match(/\n/)
if(e)this.yylineno++
this._input=this._input.slice(1)
return t},unput:function(t){this._input=t+this._input
return this},more:function(){this._more=true
return this},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length)
return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match
if(t.length<20){t+=this._input.substr(0,20-t.length)}return(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput()
var e=new Array(t.length+1).join("-")
return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true
var t,e,r,n
if(!this._more){this.yytext=""
this.match=""}var i=this._currentRules()
for(var s=0;s<i.length;s++){e=this._input.match(this.rules[i[s]])
if(e){n=e[0].match(/\n.*/g)
if(n)this.yylineno+=n.length
this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-1:this.yylloc.last_column+e[0].length}
this.yytext+=e[0]
this.match+=e[0]
this.matches=e
this.yyleng=this.yytext.length
this._more=false
this._input=this._input.slice(e[0].length)
this.matched+=e[0]
t=this.performAction.call(this,this.yy,this,i[s],this.conditionStack[this.conditionStack.length-1])
if(t)return t
else return}}if(this._input===""){return this.EOF}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function r(){var t=this.next()
if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function n(t){this.conditionStack.push(t)},popState:function i(){return this.conditionStack.pop()},_currentRules:function s(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function a(t){this.begin(t)}}
t.performAction=function l(t,e,r,n){var i=n
switch(r){case 0:break
case 1:return 20
break
case 2:return 19
break
case 3:return 8
break
case 4:return 9
break
case 5:return 6
break
case 6:return 7
break
case 7:return 11
break
case 8:return 13
break
case 9:return 10
break
case 10:return 12
break
case 11:return 14
break
case 12:return 15
break
case 13:return 16
break
case 14:return 17
break
case 15:return 18
break
case 16:return 5
break
case 17:return"INVALID"
break}}
t.rules=[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./]
t.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:true}}
return t}()
t.lexer=e
return t}()
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=h}exports.Jed=h}else{if(typeof define==="function"&&define.amd){define("jed",function(){return h})}t["Jed"]=h}})(this)
__KA_module.exports = Jed;
this.Jed = Jed;
});
KAdefine("third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function(e,t,n){var r={}
e.migrateWarnings=[]
if(!e.migrateMute&&t.console&&console.log){console.log("JQMIGRATE: Logging is active")}if(e.migrateTrace===n){e.migrateTrace=true}e.migrateReset=function(){r={}
e.migrateWarnings.length=0}
function a(n){if(!r[n]){r[n]=true
e.migrateWarnings.push(n)
if(t.console&&console.warn&&!e.migrateMute){console.warn("JQMIGRATE: "+n)
if(e.migrateTrace&&console.trace){console.trace()}}}}function i(t,n,r,i){if(Object.defineProperty){try{Object.defineProperty(t,n,{configurable:true,enumerable:true,get:function(){a(i)
return r},set:function(e){a(i)
r=e}})
return}catch(o){}}e._definePropertyBroken=true
t[n]=r}if(document.compatMode==="BackCompat"){a("jQuery is not compatible with Quirks Mode")}var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},f=/^(?:input|button)$/i,l=/^[238]$/,d=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i
i(e,"attrFn",o||{},"jQuery.attrFn is deprecated")
e.attr=function(t,r,i,u){var c=r.toLowerCase(),g=t&&t.nodeType
if(u){if(s.length<4){a("jQuery.fn.attr( props, pass ) is deprecated")}if(t&&!l.test(g)&&(o?r in o:e.isFunction(e.fn[r]))){return e(t)[r](i)}}if(r==="type"&&i!==n&&f.test(t.nodeName)&&t.parentNode){a("Can't change the 'type' of an input or button in IE 6/7/8")}if(!e.attrHooks[c]&&d.test(c)){e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r)
return i===true||typeof i!=="boolean"&&(a=t.getAttributeNode(r))&&a.nodeValue!==false?r.toLowerCase():n},set:function(t,n,r){var a
if(n===false){e.removeAttr(t,r)}else{a=e.propFix[r]||r
if(a in t){t[a]=true}t.setAttribute(r,r.toLowerCase())}return r}}
if(p.test(c)){a("jQuery.fn.attr('"+c+"') may use property instead of attribute")}}return s.call(e,t,r,i)}
e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase()
if(n==="button"){return u.apply(this,arguments)}if(n!=="input"&&n!=="option"){a("jQuery.fn.attr('value') no longer gets properties")}return t in e?e.value:null},set:function(e,t){var n=(e.nodeName||"").toLowerCase()
if(n==="button"){return c.apply(this,arguments)}if(n!=="input"&&n!=="option"){a("jQuery.fn.attr('value', val) no longer sets properties")}e.value=t}}
var g,h,v=e.fn.init,m=e.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/
e.fn.init=function(t,n,r){var i
if(t&&typeof t==="string"&&!e.isPlainObject(n)&&(i=y.exec(t))&&i[1]){if(t.charAt(0)!=="<"){a("$(html) HTML strings must start with '<' character")}if(n&&n.context){n=n.context}if(e.parseHTML){return v.call(this,e.parseHTML(e.trim(t),n,true),n,r)}}return v.apply(this,arguments)}
e.fn.init.prototype=e.fn
e.parseJSON=function(e){if(!e&&e!==null){a("jQuery.parseJSON requires a valid JSON string")
return null}return m.apply(this,arguments)}
e.uaMatch=function(e){e=e.toLowerCase()
var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[]
return{browser:t[1]||"",version:t[2]||"0"}}
if(!e.browser){g=e.uaMatch(navigator.userAgent)
h={}
if(g.browser){h[g.browser]=true
h.version=g.version}if(h.chrome){h.webkit=true}else if(h.webkit){h.safari=true}e.browser=h}i(e,"browser",e.browser,"jQuery.browser is deprecated")
e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(true,t,this)
t.superclass=this
t.fn=t.prototype=this()
t.fn.constructor=t
t.sub=this.sub
t.fn.init=function r(a,i){if(i&&i instanceof e&&!(i instanceof t)){i=t(i)}return e.fn.init.call(this,a,i,n)}
t.fn.init.prototype=t.fn
var n=t(document)
a("jQuery.sub() is deprecated")
return t}
e.ajaxSetup({converters:{"text json":e.parseJSON}})
var b=e.fn.data
e.fn.data=function(t){var r,i,o=this[0]
if(o&&t==="events"&&arguments.length===1){r=e.data(o,t)
i=e._data(o,t)
if((r===n||r===i)&&i!==n){a("Use of jQuery.fn.data('events') is deprecated")
return i}}return b.apply(this,arguments)}
var w=/\/(java|ecma)script/i,j=e.fn.andSelf||e.fn.addBack
e.fn.andSelf=function(){a("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()")
return j.apply(this,arguments)}
if(!e.clean){e.clean=function(t,n,r,i){n=n||document
n=!n.nodeType&&n[0]||n
n=n.ownerDocument||n
a("jQuery.clean() is deprecated")
var o,s,u,c,f=[]
e.merge(f,e.buildFragment(t,n).childNodes)
if(r){u=function(e){if(!e.type||w.test(e.type)){return i?i.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e)}}
for(o=0;(s=f[o])!=null;o++){if(!(e.nodeName(s,"script")&&u(s))){r.appendChild(s)
if(typeof s.getElementsByTagName!=="undefined"){c=e.grep(e.merge([],s.getElementsByTagName("script")),u)
f.splice.apply(f,[o+1,0].concat(c))
o+=c.length}}}}return f}}var x=e.event.add,Q=e.event.remove,k=e.event.trigger,N=e.fn.toggle,C=e.fn.live,S=e.fn.die,T="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",H=new RegExp("\\b(?:"+T+")\\b"),M=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){if(typeof t!=="string"||e.event.special.hover){return t}if(M.test(t)){a("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return t&&t.replace(M,"mouseenter$1 mouseleave$1")}
if(e.event.props&&e.event.props[0]!=="attrChange"){e.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(e.event.dispatch){i(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}e.event.add=function(e,t,n,r,i){if(e!==document&&H.test(t)){a("AJAX events should be attached to document: "+t)}x.call(this,e,A(t||""),n,r,i)}
e.event.remove=function(e,t,n,r,a){Q.call(this,e,A(t)||"",n,r,a)}
e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0)
a("jQuery.fn.error() is deprecated")
e.splice(0,0,"error")
if(arguments.length){return this.bind.apply(this,e)}this.triggerHandler.apply(this,e)
return this}
e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n)){return N.apply(this,arguments)}a("jQuery.fn.toggle(handler, handler...) is deprecated")
var r=arguments,i=t.guid||e.guid++,o=0,s=function(n){var a=(e._data(this,"lastToggle"+t.guid)||0)%o
e._data(this,"lastToggle"+t.guid,a+1)
n.preventDefault()
return r[a].apply(this,arguments)||false}
s.guid=i
while(o<r.length){r[o++].guid=i}return this.click(s)}
e.fn.live=function(t,n,r){a("jQuery.fn.live() is deprecated")
if(C){return C.apply(this,arguments)}e(this.context).on(t,this.selector,n,r)
return this}
e.fn.die=function(t,n){a("jQuery.fn.die() is deprecated")
if(S){return S.apply(this,arguments)}e(this.context).off(t,this.selector||"**",n)
return this}
e.event.trigger=function(e,t,n,r){if(!n&&!H.test(e)){a("Global events are undocumented and deprecated")}return k.call(this,e,t,n||document,r)}
e.each(T.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this
if(t!==document){e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,true)})
e._data(this,n,e.guid++)}return false},teardown:function(){if(this!==document){e.event.remove(document,n+"."+e._data(this,n))}return false}}})})(jQuery,window)
});
KAdefine("third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
new function($){var t=!!("placeholder"in document.createElement("input"))
$.fn.placeholder=function(a){if(t){return this}a=a||{}
var i=a.dataKey||"placeholderValue"
var e=a.attr||"placeholder"
var r=a.className||"placeholder"
var n=a.values||[]
var s=a.blockSubmit||false
var l=a.blankSubmit||false
var o=a.onSubmit||false
var u=a.value||""
var f=a.cursor_position||0
return this.filter(":input").each(function(t){$.data(this,i,n[t]||$(this).attr(e))}).each(function(){if($.trim($(this).val())==="")$(this).addClass(r).val($.data(this,i))}).focus(function(){if($.trim($(this).val())===$.data(this,i))$(this).removeClass(r).val(u)
if($.fn.setCursorPosition){$(this).setCursorPosition(f)}}).blur(function(){if($.trim($(this).val())===u)$(this).addClass(r).val($.data(this,i))}).each(function(t,a){if(s)new function(t){$(t.form).submit(function(){return $.trim($(t).val())!=$.data(t,i)})}(a)
else if(l)new function(t){$(t.form).submit(function(){if($.trim($(t).val())==$.data(t,i))$(t).removeClass(r).val("")
return true})}(a)
else if(o)new function(t){$(t.form).submit(o)}(a)})}}(jQuery)
});
KAdefine("third_party/javascript-khansrc/jquery/jquery.js", function(__KA_require, __KA_module, __KA_exports) {
(function(e,t){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=e.document?t(e,true):function(e){if(!e.document){throw new Error("jQuery requires a window with a document")}return t(e)}}else{t(e)}})(typeof window!=="undefined"?window:this,function(e,t){var n=[]
var i=n.slice
var r=n.concat
var o=n.push
var s=n.indexOf
var a={}
var u=a.toString
var f=a.hasOwnProperty
var l={}
var c=e.document,p="2.1.1",d=function(e,t){return new d.fn.init(e,t)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,g=/^-ms-/,m=/-([\da-z])/gi,y=function(e,t){return t.toUpperCase()}
d.fn=d.prototype={jquery:p,constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return e!=null?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e)
t.prevObject=this
t.context=this.context
return t},each:function(e,t){return d.each(this,e,t)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice}
d.extend=d.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,u=arguments.length,f=false
if(typeof s==="boolean"){f=s
s=arguments[a]||{}
a++}if(typeof s!=="object"&&!d.isFunction(s)){s={}}if(a===u){s=this
a--}for(;a<u;a++){if((e=arguments[a])!=null){for(t in e){n=s[t]
i=e[t]
if(s===i){continue}if(f&&i&&(d.isPlainObject(i)||(r=d.isArray(i)))){if(r){r=false
o=n&&d.isArray(n)?n:[]}else{o=n&&d.isPlainObject(n)?n:{}}s[t]=d.extend(f,o,i)}else if(i!==undefined){s[t]=i}}}}return s}
d.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return d.type(e)==="function"},isArray:Array.isArray,isWindow:function(e){return e!=null&&e===e.window},isNumeric:function(e){return!d.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){if(d.type(e)!=="object"||e.nodeType||d.isWindow(e)){return false}if(e.constructor&&!f.call(e.constructor.prototype,"isPrototypeOf")){return false}return true},isEmptyObject:function(e){var t
for(t in e){return false}return true},type:function(e){if(e==null){return e+""}return typeof e==="object"||typeof e==="function"?a[u.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=d.trim(e)
if(e){if(e.indexOf("use strict")===1){t=c.createElement("script")
t.text=e
c.head.appendChild(t).parentNode.removeChild(t)}else{n(e)}}},camelCase:function(e){return e.replace(g,"ms-").replace(m,y)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,o=e.length,s=v(e)
if(n){if(s){for(;r<o;r++){i=t.apply(e[r],n)
if(i===false){break}}}else{for(r in e){i=t.apply(e[r],n)
if(i===false){break}}}}else{if(s){for(;r<o;r++){i=t.call(e[r],r,e[r])
if(i===false){break}}}else{for(r in e){i=t.call(e[r],r,e[r])
if(i===false){break}}}}return e},trim:function(e){return e==null?"":(e+"").replace(h,"")},makeArray:function(e,t){var n=t||[]
if(e!=null){if(v(Object(e))){d.merge(n,typeof e==="string"?[e]:e)}else{o.call(n,e)}}return n},inArray:function(e,t,n){return t==null?-1:s.call(t,e,n)},merge:function(e,t){var n=+t.length,i=0,r=e.length
for(;i<n;i++){e[r++]=t[i]}e.length=r
return e},grep:function(e,t,n){var i,r=[],o=0,s=e.length,a=!n
for(;o<s;o++){i=!t(e[o],o)
if(i!==a){r.push(e[o])}}return r},map:function(e,t,n){var i,o=0,s=e.length,a=v(e),u=[]
if(a){for(;o<s;o++){i=t(e[o],o,n)
if(i!=null){u.push(i)}}}else{for(o in e){i=t(e[o],o,n)
if(i!=null){u.push(i)}}}return r.apply([],u)},guid:1,proxy:function(e,t){var n,r,o
if(typeof t==="string"){n=e[t]
t=e
e=n}if(!d.isFunction(e)){return undefined}r=i.call(arguments,2)
o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}
o.guid=e.guid=e.guid||d.guid++
return o},now:Date.now,support:l})
d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){a["[object "+t+"]"]=t.toLowerCase()})
function v(e){var t=e.length,n=d.type(e)
if(n==="function"||d.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||t===0||typeof t==="number"&&t>0&&t-1 in e}var x=function(e){var t,n,i,r,o,s,a,u,f,l,c,p,d,h,g,m,y,v,x,w="sizzle"+-new Date,b=e.document,T=0,C=0,k=at(),N=at(),E=at(),S=function(e,t){if(e===t){c=true}return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length
for(;t<n;t++){if(this[t]===e){return t}}return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B=W.replace("w","w#"),I="\\["+R+"*("+W+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+R+"*\\]",_=":("+W+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|"+".*"+")\\)|)",z=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),X=new RegExp("^"+R+"*,"+R+"*"),U=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),V=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),Y=new RegExp(_),G=new RegExp("^"+B+"$"),Q={ID:new RegExp("^#("+W+")"),CLASS:new RegExp("^\\.("+W+")"),TAG:new RegExp("^("+W.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+_),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,et=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,nt=/'|\\/g,it=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),rt=function(e,t,n){var i="0x"+t-65536
return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,i&1023|56320)}
try{O.apply(L=F.call(b.childNodes),b.childNodes)
L[b.childNodes.length].nodeType}catch(ot){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,i=0
while(e[n++]=t[i++]){}e.length=n-1}}}function st(e,t,i,r){var o,a,f,l,c,h,y,v,T,C
if((t?t.ownerDocument||t:b)!==d){p(t)}t=t||d
i=i||[]
if(!e||typeof e!=="string"){return i}if((l=t.nodeType)!==1&&l!==9){return[]}if(g&&!r){if(o=et.exec(e)){if(f=o[1]){if(l===9){a=t.getElementById(f)
if(a&&a.parentNode){if(a.id===f){i.push(a)
return i}}else{return i}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(f))&&x(t,a)&&a.id===f){i.push(a)
return i}}}else if(o[2]){O.apply(i,t.getElementsByTagName(e))
return i}else if((f=o[3])&&n.getElementsByClassName&&t.getElementsByClassName){O.apply(i,t.getElementsByClassName(f))
return i}}if(n.qsa&&(!m||!m.test(e))){v=y=w
T=t
C=l===9&&e
if(l===1&&t.nodeName.toLowerCase()!=="object"){h=s(e)
if(y=t.getAttribute("id")){v=y.replace(nt,"\\$&")}else{t.setAttribute("id",v)}v="[id='"+v+"'] "
c=h.length
while(c--){h[c]=v+yt(h[c])}T=tt.test(e)&&gt(t.parentNode)||t
C=h.join(",")}if(C){try{O.apply(i,T.querySelectorAll(C))
return i}catch(k){}finally{if(!y){t.removeAttribute("id")}}}}}return u(e.replace(z,"$1"),t,i,r)}function at(){var e=[]
function t(n,r){if(e.push(n+" ")>i.cacheLength){delete t[e.shift()]}return t[n+" "]=r}return t}function ut(e){e[w]=true
return e}function ft(e){var t=d.createElement("div")
try{return!!e(t)}catch(n){return false}finally{if(t.parentNode){t.parentNode.removeChild(t)}t=null}}function lt(e,t){var n=e.split("|"),r=e.length
while(r--){i.attrHandle[n[r]]=t}}function ct(e,t){var n=t&&e,i=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||D)-(~e.sourceIndex||D)
if(i){return i}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase()
return n==="input"&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase()
return(n==="input"||n==="button")&&t.type===e}}function ht(e){return ut(function(t){t=+t
return ut(function(n,i){var r,o=e([],n.length,t),s=o.length
while(s--){if(n[r=o[s]]){n[r]=!(i[r]=n[r])}}})})}function gt(e){return e&&typeof e.getElementsByTagName!==j&&e}n=st.support={}
o=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?t.nodeName!=="HTML":false}
p=st.setDocument=function(e){var t,r=e?e.ownerDocument||e:b,s=r.defaultView
if(r===d||r.nodeType!==9||!r.documentElement){return d}d=r
h=r.documentElement
g=!o(r)
if(s&&s!==s.top){if(s.addEventListener){s.addEventListener("unload",function(){p()},false)}else if(s.attachEvent){s.attachEvent("onunload",function(){p()})}}n.attributes=ft(function(e){e.className="i"
return!e.getAttribute("className")})
n.getElementsByTagName=ft(function(e){e.appendChild(r.createComment(""))
return!e.getElementsByTagName("*").length})
n.getElementsByClassName=Z.test(r.getElementsByClassName)&&ft(function(e){e.innerHTML="<div class='a'></div><div class='a i'></div>"
e.firstChild.className="i"
return e.getElementsByClassName("i").length===2})
n.getById=ft(function(e){h.appendChild(e).id=w
return!r.getElementsByName||!r.getElementsByName(w).length})
if(n.getById){i.find["ID"]=function(e,t){if(typeof t.getElementById!==j&&g){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}}
i.filter["ID"]=function(e){var t=e.replace(it,rt)
return function(e){return e.getAttribute("id")===t}}}else{delete i.find["ID"]
i.filter["ID"]=function(e){var t=e.replace(it,rt)
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id")
return n&&n.value===t}}}i.find["TAG"]=n.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==j){return t.getElementsByTagName(e)}}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e)
if(e==="*"){while(n=o[r++]){if(n.nodeType===1){i.push(n)}}return i}return o}
i.find["CLASS"]=n.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==j&&g){return t.getElementsByClassName(e)}}
y=[]
m=[]
if(n.qsa=Z.test(r.querySelectorAll)){ft(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>"
if(e.querySelectorAll("[msallowclip^='']").length){m.push("[*^$]="+R+"*(?:''|\"\")")}if(!e.querySelectorAll("[selected]").length){m.push("\\["+R+"*(?:value|"+M+")")}if(!e.querySelectorAll(":checked").length){m.push(":checked")}})
ft(function(e){var t=r.createElement("input")
t.setAttribute("type","hidden")
e.appendChild(t).setAttribute("name","D")
if(e.querySelectorAll("[name=d]").length){m.push("name"+R+"*[*^$|!~]?=")}if(!e.querySelectorAll(":enabled").length){m.push(":enabled",":disabled")}e.querySelectorAll("*,:x")
m.push(",.*:")})}if(n.matchesSelector=Z.test(v=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector)){ft(function(e){n.disconnectedMatch=v.call(e,"div")
v.call(e,"[s!='']:x")
y.push("!=",_)})}m=m.length&&new RegExp(m.join("|"))
y=y.length&&new RegExp(y.join("|"))
t=Z.test(h.compareDocumentPosition)
x=t||Z.test(h.contains)?function(e,t){var n=e.nodeType===9?e.documentElement:e,i=t&&t.parentNode
return e===i||!!(i&&i.nodeType===1&&(n.contains?n.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false}
S=t?function(e,t){if(e===t){c=true
return 0}var i=!e.compareDocumentPosition-!t.compareDocumentPosition
if(i){return i}i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1
if(i&1||!n.sortDetached&&t.compareDocumentPosition(e)===i){if(e===r||e.ownerDocument===b&&x(b,e)){return-1}if(t===r||t.ownerDocument===b&&x(b,t)){return 1}return l?P.call(l,e)-P.call(l,t):0}return i&4?-1:1}:function(e,t){if(e===t){c=true
return 0}var n,i=0,o=e.parentNode,s=t.parentNode,a=[e],u=[t]
if(!o||!s){return e===r?-1:t===r?1:o?-1:s?1:l?P.call(l,e)-P.call(l,t):0}else if(o===s){return ct(e,t)}n=e
while(n=n.parentNode){a.unshift(n)}n=t
while(n=n.parentNode){u.unshift(n)}while(a[i]===u[i]){i++}return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0}
return r}
st.matches=function(e,t){return st(e,null,null,t)}
st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d){p(e)}t=t.replace(V,"='$1']")
if(n.matchesSelector&&g&&(!y||!y.test(t))&&(!m||!m.test(t))){try{var i=v.call(e,t)
if(i||n.disconnectedMatch||e.document&&e.document.nodeType!==11){return i}}catch(r){}}return st(t,d,null,[e]).length>0}
st.contains=function(e,t){if((e.ownerDocument||e)!==d){p(e)}return x(e,t)}
st.attr=function(e,t){if((e.ownerDocument||e)!==d){p(e)}var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):undefined
return o!==undefined?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null}
st.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
st.uniqueSort=function(e){var t,i=[],r=0,o=0
c=!n.detectDuplicates
l=!n.sortStable&&e.slice(0)
e.sort(S)
if(c){while(t=e[o++]){if(t===e[o]){r=i.push(o)}}while(r--){e.splice(i[r],1)}}l=null
return e}
r=st.getText=function(e){var t,n="",i=0,o=e.nodeType
if(!o){while(t=e[i++]){n+=r(t)}}else if(o===1||o===9||o===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=r(e)}}}else if(o===3||o===4){return e.nodeValue}return n}
i=st.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(it,rt)
e[3]=(e[3]||e[4]||e[5]||"").replace(it,rt)
if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase()
if(e[1].slice(0,3)==="nth"){if(!e[3]){st.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"))
e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){st.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
if(Q["CHILD"].test(e[0])){return null}if(e[3]){e[2]=e[4]||e[5]||""}else if(n&&Y.test(n)&&(t=s(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t)
e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(it,rt).toLowerCase()
return e==="*"?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "]
return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&k(e,function(e){return t.test(typeof e.className==="string"&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=st.attr(i,e)
if(r==null){return t==="!="}if(!t){return true}r+=""
return t==="="?r===n:t==="!="?r!==n:t==="^="?n&&r.indexOf(n)===0:t==="*="?n&&r.indexOf(n)>-1:t==="$="?n&&r.slice(-n.length)===n:t==="~="?(" "+r+" ").indexOf(n)>-1:t==="|="?r===n||r.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,i,r){var o=e.slice(0,3)!=="nth",s=e.slice(-4)!=="last",a=t==="of-type"
return i===1&&r===0?function(e){return!!e.parentNode}:function(t,n,u){var f,l,c,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a
if(m){if(o){while(g){c=t
while(c=c[g]){if(a?c.nodeName.toLowerCase()===y:c.nodeType===1){return false}}h=g=e==="only"&&!h&&"nextSibling"}return true}h=[s?m.firstChild:m.lastChild]
if(s&&v){l=m[w]||(m[w]={})
f=l[e]||[]
d=f[0]===T&&f[1]
p=f[0]===T&&f[2]
c=d&&m.childNodes[d]
while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if(c.nodeType===1&&++p&&c===t){l[e]=[T,d,p]
break}}}else if(v&&(f=(t[w]||(t[w]={}))[e])&&f[0]===T){p=f[1]}else{while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if((a?c.nodeName.toLowerCase()===y:c.nodeType===1)&&++p){if(v){(c[w]||(c[w]={}))[e]=[T,p]}if(c===t){break}}}}p-=r
return p===i||p%i===0&&p/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e)
if(r[w]){return r(t)}if(r.length>1){n=[e,e,"",t]
return i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length
while(s--){i=P.call(e,o[s])
e[i]=!(n[i]=o[s])}}):function(e){return r(e,0,n)}}return r}},pseudos:{not:ut(function(e){var t=[],n=[],i=a(e.replace(z,"$1"))
return i[w]?ut(function(e,t,n,r){var o,s=i(e,null,r,[]),a=e.length
while(a--){if(o=s[a]){e[a]=!(t[a]=o)}}}):function(e,r,o){t[0]=e
i(t,null,o,n)
return!n.pop()}}),has:ut(function(e){return function(t){return st(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1}}),lang:ut(function(e){if(!G.test(e||"")){st.error("unsupported lang: "+e)}e=e.replace(it,rt).toLowerCase()
return function(t){var n
do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){n=n.toLowerCase()
return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1)
return false}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return!i.pseudos["empty"](e)},header:function(e){return K.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t
return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()==="text")},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[n<0?n+t:n]}),even:ht(function(e,t){var n=0
for(;n<t;n+=2){e.push(n)}return e}),odd:ht(function(e,t){var n=1
for(;n<t;n+=2){e.push(n)}return e}),lt:ht(function(e,t,n){var i=n<0?n+t:n
for(;--i>=0;){e.push(i)}return e}),gt:ht(function(e,t,n){var i=n<0?n+t:n
for(;++i<t;){e.push(i)}return e})}}
i.pseudos["nth"]=i.pseudos["eq"]
for(t in{radio:true,checkbox:true,file:true,password:true,image:true}){i.pseudos[t]=pt(t)}for(t in{submit:true,reset:true}){i.pseudos[t]=dt(t)}function mt(){}mt.prototype=i.filters=i.pseudos
i.setFilters=new mt
s=st.tokenize=function(e,t){var n,r,o,s,a,u,f,l=N[e+" "]
if(l){return t?0:l.slice(0)}a=e
u=[]
f=i.preFilter
while(a){if(!n||(r=X.exec(a))){if(r){a=a.slice(r[0].length)||a}u.push(o=[])}n=false
if(r=U.exec(a)){n=r.shift()
o.push({value:n,type:r[0].replace(z," ")})
a=a.slice(n.length)}for(s in i.filter){if((r=Q[s].exec(a))&&(!f[s]||(r=f[s](r)))){n=r.shift()
o.push({value:n,type:s,matches:r})
a=a.slice(n.length)}}if(!n){break}}return t?a.length:a?st.error(e):N(e,u).slice(0)}
function yt(e){var t=0,n=e.length,i=""
for(;t<n;t++){i+=e[t].value}return i}function vt(e,t,n){var i=t.dir,r=n&&i==="parentNode",o=C++
return t.first?function(t,n,o){while(t=t[i]){if(t.nodeType===1||r){return e(t,n,o)}}}:function(t,n,s){var a,u,f=[T,o]
if(s){while(t=t[i]){if(t.nodeType===1||r){if(e(t,n,s)){return true}}}}else{while(t=t[i]){if(t.nodeType===1||r){u=t[w]||(t[w]={})
if((a=u[i])&&a[0]===T&&a[1]===o){return f[2]=a[2]}else{u[i]=f
if(f[2]=e(t,n,s)){return true}}}}}}}function xt(e){return e.length>1?function(t,n,i){var r=e.length
while(r--){if(!e[r](t,n,i)){return false}}return true}:e[0]}function wt(e,t,n){var i=0,r=t.length
for(;i<r;i++){st(e,t[i],n)}return n}function bt(e,t,n,i,r){var o,s=[],a=0,u=e.length,f=t!=null
for(;a<u;a++){if(o=e[a]){if(!n||n(o,i,r)){s.push(o)
if(f){t.push(a)}}}}return s}function Tt(e,t,n,i,r,o){if(i&&!i[w]){i=Tt(i)}if(r&&!r[w]){r=Tt(r,o)}return ut(function(o,s,a,u){var f,l,c,p=[],d=[],h=s.length,g=o||wt(t||"*",a.nodeType?[a]:a,[]),m=e&&(o||!t)?bt(g,p,e,a,u):g,y=n?r||(o?e:h||i)?[]:s:m
if(n){n(m,y,a,u)}if(i){f=bt(y,d)
i(f,[],a,u)
l=f.length
while(l--){if(c=f[l]){y[d[l]]=!(m[d[l]]=c)}}}if(o){if(r||e){if(r){f=[]
l=y.length
while(l--){if(c=y[l]){f.push(m[l]=c)}}r(null,y=[],f,u)}l=y.length
while(l--){if((c=y[l])&&(f=r?P.call(o,c):p[l])>-1){o[f]=!(s[f]=c)}}}}else{y=bt(y===s?y.splice(h,y.length):y)
if(r){r(null,s,y,u)}else{O.apply(s,y)}}})}function Ct(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],u=s?1:0,l=vt(function(e){return e===t},a,true),c=vt(function(e){return P.call(t,e)>-1},a,true),p=[function(e,n,i){return!s&&(i||n!==f)||((t=n).nodeType?l(e,n,i):c(e,n,i))}]
for(;u<o;u++){if(n=i.relative[e[u].type]){p=[vt(xt(p),n)]}else{n=i.filter[e[u].type].apply(null,e[u].matches)
if(n[w]){r=++u
for(;r<o;r++){if(i.relative[e[r].type]){break}}return Tt(u>1&&xt(p),u>1&&yt(e.slice(0,u-1).concat({value:e[u-2].type===" "?"*":""})).replace(z,"$1"),n,u<r&&Ct(e.slice(u,r)),r<o&&Ct(e=e.slice(r)),r<o&&yt(e))}p.push(n)}}return xt(p)}function kt(e,t){var n=t.length>0,r=e.length>0,o=function(o,s,a,u,l){var c,p,h,g=0,m="0",y=o&&[],v=[],x=f,w=o||r&&i.find["TAG"]("*",l),b=T+=x==null?1:Math.random()||.1,C=w.length
if(l){f=s!==d&&s}for(;m!==C&&(c=w[m])!=null;m++){if(r&&c){p=0
while(h=e[p++]){if(h(c,s,a)){u.push(c)
break}}if(l){T=b}}if(n){if(c=!h&&c){g--}if(o){y.push(c)}}}g+=m
if(n&&m!==g){p=0
while(h=t[p++]){h(y,v,s,a)}if(o){if(g>0){while(m--){if(!(y[m]||v[m])){v[m]=q.call(u)}}}v=bt(v)}O.apply(u,v)
if(l&&!o&&v.length>0&&g+t.length>1){st.uniqueSort(u)}}if(l){T=b
f=x}return y}
return n?ut(o):o}a=st.compile=function(e,t){var n,i=[],r=[],o=E[e+" "]
if(!o){if(!t){t=s(e)}n=t.length
while(n--){o=Ct(t[n])
if(o[w]){i.push(o)}else{r.push(o)}}o=E(e,kt(r,i))
o.selector=e}return o}
u=st.select=function(e,t,r,o){var u,f,l,c,p,d=typeof e==="function"&&e,h=!o&&s(e=d.selector||e)
r=r||[]
if(h.length===1){f=h[0]=h[0].slice(0)
if(f.length>2&&(l=f[0]).type==="ID"&&n.getById&&t.nodeType===9&&g&&i.relative[f[1].type]){t=(i.find["ID"](l.matches[0].replace(it,rt),t)||[])[0]
if(!t){return r}else if(d){t=t.parentNode}e=e.slice(f.shift().value.length)}u=Q["needsContext"].test(e)?0:f.length
while(u--){l=f[u]
if(i.relative[c=l.type]){break}if(p=i.find[c]){if(o=p(l.matches[0].replace(it,rt),tt.test(f[0].type)&&gt(t.parentNode)||t)){f.splice(u,1)
e=o.length&&yt(f)
if(!e){O.apply(r,o)
return r}break}}}}(d||a(e,h))(o,t,!g,r,tt.test(e)&&gt(t.parentNode)||t)
return r}
n.sortStable=w.split("").sort(S).join("")===w
n.detectDuplicates=!!c
p()
n.sortDetached=ft(function(e){return e.compareDocumentPosition(d.createElement("div"))&1})
if(!ft(function(e){e.innerHTML="<a href='#'></a>"
return e.firstChild.getAttribute("href")==="#"})){lt("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}})}if(!n.attributes||!ft(function(e){e.innerHTML="<input/>"
e.firstChild.setAttribute("value","")
return e.firstChild.getAttribute("value")===""})){lt("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue}})}if(!ft(function(e){return e.getAttribute("disabled")==null})){lt(M,function(e,t,n){var i
if(!n){return e[t]===true?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}})}return st}(e)
d.find=x
d.expr=x.selectors
d.expr[":"]=d.expr.pseudos
d.unique=x.uniqueSort
d.text=x.getText
d.isXMLDoc=x.isXML
d.contains=x.contains
var w=d.expr.match.needsContext
var b=/^<(\w+)\s*\/?>(?:<\/\1>|)$/
var T=/^.[^:#\[\.,]*$/
function C(e,t,n){if(d.isFunction(t)){return d.grep(e,function(e,i){return!!t.call(e,i,e)!==n})}if(t.nodeType){return d.grep(e,function(e){return e===t!==n})}if(typeof t==="string"){if(T.test(t)){return d.filter(t,e,n)}t=d.filter(t,e)}return d.grep(e,function(e){return s.call(t,e)>=0!==n})}d.filter=function(e,t,n){var i=t[0]
if(n){e=":not("+e+")"}return t.length===1&&i.nodeType===1?d.find.matchesSelector(i,e)?[i]:[]:d.find.matches(e,d.grep(t,function(e){return e.nodeType===1}))}
d.fn.extend({find:function(e){var t,n=this.length,i=[],r=this
if(typeof e!=="string"){return this.pushStack(d(e).filter(function(){for(t=0;t<n;t++){if(d.contains(r[t],this)){return true}}}))}for(t=0;t<n;t++){d.find(e,r[t],i)}i=this.pushStack(n>1?d.unique(i):i)
i.selector=this.selector?this.selector+" "+e:e
return i},filter:function(e){return this.pushStack(C(this,e||[],false))},not:function(e){return this.pushStack(C(this,e||[],true))},is:function(e){return!!C(this,typeof e==="string"&&w.test(e)?d(e):e||[],false).length}})
var k,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,E=d.fn.init=function(e,t){var n,i
if(!e){return this}if(typeof e==="string"){if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3){n=[null,e,null]}else{n=N.exec(e)}if(n&&(n[1]||!t)){if(n[1]){t=t instanceof d?t[0]:t
d.merge(this,d.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:c,true))
if(b.test(n[1])&&d.isPlainObject(t)){for(n in t){if(d.isFunction(this[n])){this[n](t[n])}else{this.attr(n,t[n])}}}return this}else{i=c.getElementById(n[2])
if(i&&i.parentNode){this.length=1
this[0]=i}this.context=c
this.selector=e
return this}}else if(!t||t.jquery){return(t||k).find(e)}else{return this.constructor(t).find(e)}}else if(e.nodeType){this.context=this[0]=e
this.length=1
return this}else if(d.isFunction(e)){return typeof k.ready!=="undefined"?k.ready(e):e(d)}if(e.selector!==undefined){this.selector=e.selector
this.context=e.context}return d.makeArray(e,this)}
E.prototype=d.fn
k=d(c)
var S=/^(?:parents|prev(?:Until|All))/,j={children:true,contents:true,next:true,prev:true}
d.extend({dir:function(e,t,n){var i=[],r=n!==undefined
while((e=e[t])&&e.nodeType!==9){if(e.nodeType===1){if(r&&d(e).is(n)){break}i.push(e)}}return i},sibling:function(e,t){var n=[]
for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}})
d.fn.extend({has:function(e){var t=d(e,this),n=t.length
return this.filter(function(){var e=0
for(;e<n;e++){if(d.contains(this,t[e])){return true}}})},closest:function(e,t){var n,i=0,r=this.length,o=[],s=w.test(e)||typeof e!=="string"?d(e,t||this.context):0
for(;i<r;i++){for(n=this[i];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(s?s.index(n)>-1:n.nodeType===1&&d.find.matchesSelector(n,e))){o.push(n)
break}}}return this.pushStack(o.length>1?d.unique(o):o)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return s.call(d(e),this[0])}return s.call(this,e.jquery?e[0]:e)},add:function(e,t){return this.pushStack(d.unique(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}})
function D(e,t){while((e=e[t])&&e.nodeType!==1){}return e}d.each({parent:function(e){var t=e.parentNode
return t&&t.nodeType!==11?t:null},parents:function(e){return d.dir(e,"parentNode")},parentsUntil:function(e,t,n){return d.dir(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return d.dir(e,"nextSibling")},prevAll:function(e){return d.dir(e,"previousSibling")},nextUntil:function(e,t,n){return d.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return d.dir(e,"previousSibling",n)},siblings:function(e){return d.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return d.sibling(e.firstChild)},contents:function(e){return e.contentDocument||d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,i){var r=d.map(this,t,n)
if(e.slice(-5)!=="Until"){i=n}if(i&&typeof i==="string"){r=d.filter(i,r)}if(this.length>1){if(!j[e]){d.unique(r)}if(S.test(e)){r.reverse()}}return this.pushStack(r)}})
var A=/\S+/g
var L={}
function q(e){var t=L[e]={}
d.each(e.match(A)||[],function(e,n){t[n]=true})
return t}d.Callbacks=function(e){e=typeof e==="string"?L[e]||q(e):d.extend({},e)
var t,n,i,r,o,s,a=[],u=!e.once&&[],f=function(c){t=e.memory&&c
n=true
s=r||0
r=0
o=a.length
i=true
for(;a&&s<o;s++){if(a[s].apply(c[0],c[1])===false&&e.stopOnFalse){t=false
break}}i=false
if(a){if(u){if(u.length){f(u.shift())}}else if(t){a=[]}else{l.disable()}}},l={add:function(){if(a){var n=a.length;(function s(t){d.each(t,function(t,n){var i=d.type(n)
if(i==="function"){if(!e.unique||!l.has(n)){a.push(n)}}else if(n&&n.length&&i!=="string"){s(n)}})})(arguments)
if(i){o=a.length}else if(t){r=n
f(t)}}return this},remove:function(){if(a){d.each(arguments,function(e,t){var n
while((n=d.inArray(t,a,n))>-1){a.splice(n,1)
if(i){if(n<=o){o--}if(n<=s){s--}}}})}return this},has:function(e){return e?d.inArray(e,a)>-1:!!(a&&a.length)},empty:function(){a=[]
o=0
return this},disable:function(){a=u=t=undefined
return this},disabled:function(){return!a},lock:function(){u=undefined
if(!t){l.disable()}return this},locked:function(){return!u},fireWith:function(e,t){if(a&&(!n||u)){t=t||[]
t=[e,t.slice?t.slice():t]
if(i){u.push(t)}else{f(t)}}return this},fire:function(){l.fireWith(this,arguments)
return this},fired:function(){return!!n}}
return l}
d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){r.done(arguments).fail(arguments)
return this},then:function(){var e=arguments
return d.Deferred(function(n){d.each(t,function(t,o){var s=d.isFunction(e[t])&&e[t]
r[o[1]](function(){var e=s&&s.apply(this,arguments)
if(e&&d.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[o[0]+"With"](this===i?n.promise():this,s?[e]:arguments)}})})
e=null}).promise()},promise:function(e){return e!=null?d.extend(e,i):i}},r={}
i.pipe=i.then
d.each(t,function(e,o){var s=o[2],a=o[3]
i[o[1]]=s.add
if(a){s.add(function(){n=a},t[e^1][2].disable,t[2][2].lock)}r[o[0]]=function(){r[o[0]+"With"](this===r?i:this,arguments)
return this}
r[o[0]+"With"]=s.fireWith})
i.promise(r)
if(e){e.call(r,r)}return r},when:function(e){var t=0,n=i.call(arguments),r=n.length,o=r!==1||e&&d.isFunction(e.promise)?r:0,s=o===1?e:d.Deferred(),a=function(e,t,n){return function(r){t[e]=this
n[e]=arguments.length>1?i.call(arguments):r
if(n===u){s.notifyWith(t,n)}else if(!--o){s.resolveWith(t,n)}}},u,f,l
if(r>1){u=new Array(r)
f=new Array(r)
l=new Array(r)
for(;t<r;t++){if(n[t]&&d.isFunction(n[t].promise)){n[t].promise().done(a(t,l,n)).fail(s.reject).progress(a(t,f,u))}else{--o}}}if(!o){s.resolveWith(l,n)}return s.promise()}})
var H
d.fn.ready=function(e){d.ready.promise().done(e)
return this}
d.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){d.readyWait++}else{d.ready(true)}},ready:function(e){if(e===true?--d.readyWait:d.isReady){return}d.isReady=true
if(e!==true&&--d.readyWait>0){return}H.resolveWith(c,[d])
if(d.fn.triggerHandler){d(c).triggerHandler("ready")
d(c).off("ready")}}})
function O(){c.removeEventListener("DOMContentLoaded",O,false)
e.removeEventListener("load",O,false)
d.ready()}d.ready.promise=function(t){if(!H){H=d.Deferred()
if(c.readyState==="complete"){setTimeout(d.ready)}else{c.addEventListener("DOMContentLoaded",O,false)
e.addEventListener("load",O,false)}}return H.promise(t)}
d.ready.promise()
var F=d.access=function(e,t,n,i,r,o,s){var a=0,u=e.length,f=n==null
if(d.type(n)==="object"){r=true
for(a in n){d.access(e,t,a,n[a],true,o,s)}}else if(i!==undefined){r=true
if(!d.isFunction(i)){s=true}if(f){if(s){t.call(e,i)
t=null}else{f=t
t=function(e,t,n){return f.call(d(e),n)}}}if(t){for(;a<u;a++){t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)))}}}return r?e:f?t.call(e):u?t(e[0],n):o}
d.acceptData=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType}
function P(){Object.defineProperty(this.cache={},0,{get:function(){return{}}})
this.expando=d.expando+Math.random()}P.uid=1
P.accepts=d.acceptData
P.prototype={key:function(e){if(!P.accepts(e)){return 0}var t={},n=e[this.expando]
if(!n){n=P.uid++
try{t[this.expando]={value:n}
Object.defineProperties(e,t)}catch(i){t[this.expando]=n
d.extend(e,t)}}if(!this.cache[n]){this.cache[n]={}}return n},set:function(e,t,n){var i,r=this.key(e),o=this.cache[r]
if(typeof t==="string"){o[t]=n}else{if(d.isEmptyObject(o)){d.extend(this.cache[r],t)}else{for(i in t){o[i]=t[i]}}}return o},get:function(e,t){var n=this.cache[this.key(e)]
return t===undefined?n:n[t]},access:function(e,t,n){var i
if(t===undefined||t&&typeof t==="string"&&n===undefined){i=this.get(e,t)
return i!==undefined?i:this.get(e,d.camelCase(t))}this.set(e,t,n)
return n!==undefined?n:t},remove:function(e,t){var n,i,r,o=this.key(e),s=this.cache[o]
if(t===undefined){this.cache[o]={}}else{if(d.isArray(t)){i=t.concat(t.map(d.camelCase))}else{r=d.camelCase(t)
if(t in s){i=[t,r]}else{i=r
i=i in s?[i]:i.match(A)||[]}}n=i.length
while(n--){delete s[i[n]]}}},hasData:function(e){return!d.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){if(e[this.expando]){delete this.cache[e[this.expando]]}}}
var M=new P
var R=new P
var W=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,B=/([A-Z])/g
function I(e,t,n){var i
if(n===undefined&&e.nodeType===1){i="data-"+t.replace(B,"-$1").toLowerCase()
n=e.getAttribute(i)
if(typeof n==="string"){try{n=n==="true"?true:n==="false"?false:n==="null"?null:+n+""===n?+n:W.test(n)?d.parseJSON(n):n}catch(r){}R.set(e,t,n)}else{n=undefined}}return n}d.extend({hasData:function(e){return R.hasData(e)||M.hasData(e)},data:function(e,t,n){return R.access(e,t,n)},removeData:function(e,t){R.remove(e,t)},_data:function(e,t,n){return M.access(e,t,n)},_removeData:function(e,t){M.remove(e,t)}})
d.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes
if(e===undefined){if(this.length){r=R.get(o)
if(o.nodeType===1&&!M.get(o,"hasDataAttrs")){n=s.length
while(n--){if(s[n]){i=s[n].name
if(i.indexOf("data-")===0){i=d.camelCase(i.slice(5))
I(o,i,r[i])}}}M.set(o,"hasDataAttrs",true)}}return r}if(typeof e==="object"){return this.each(function(){R.set(this,e)})}return F(this,function(t){var n,i=d.camelCase(e)
if(o&&t===undefined){n=R.get(o,e)
if(n!==undefined){return n}n=R.get(o,i)
if(n!==undefined){return n}n=I(o,i,undefined)
if(n!==undefined){return n}return}this.each(function(){var n=R.get(this,i)
R.set(this,i,t)
if(e.indexOf("-")!==-1&&n!==undefined){R.set(this,e,t)}})},null,t,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){R.remove(this,e)})}})
d.extend({queue:function(e,t,n){var i
if(e){t=(t||"fx")+"queue"
i=M.get(e,t)
if(n){if(!i||d.isArray(n)){i=M.access(e,t,d.makeArray(n))}else{i.push(n)}}return i||[]}},dequeue:function(e,t){t=t||"fx"
var n=d.queue(e,t),i=n.length,r=n.shift(),o=d._queueHooks(e,t),s=function(){d.dequeue(e,t)}
if(r==="inprogress"){r=n.shift()
i--}if(r){if(t==="fx"){n.unshift("inprogress")}delete o.stop
r.call(e,s,o)}if(!i&&o){o.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks"
return M.get(e,n)||M.access(e,n,{empty:d.Callbacks("once memory").add(function(){M.remove(e,[t+"queue",n])})})}})
d.fn.extend({queue:function(e,t){var n=2
if(typeof e!=="string"){t=e
e="fx"
n--}if(arguments.length<n){return d.queue(this[0],e)}return t===undefined?this:this.each(function(){var n=d.queue(this,e,t)
d._queueHooks(this,e)
if(e==="fx"&&n[0]!=="inprogress"){d.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=d.Deferred(),o=this,s=this.length,a=function(){if(!--i){r.resolveWith(o,[o])}}
if(typeof e!=="string"){t=e
e=undefined}e=e||"fx"
while(s--){n=M.get(o[s],e+"queueHooks")
if(n&&n.empty){i++
n.empty.add(a)}}a()
return r.promise(t)}})
var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
var z=["Top","Right","Bottom","Left"]
var X=function(e,t){e=t||e
return d.css(e,"display")==="none"||!d.contains(e.ownerDocument,e)}
var U=/^(?:checkbox|radio)$/i;(function(){var e=c.createDocumentFragment(),t=e.appendChild(c.createElement("div")),n=c.createElement("input")
n.setAttribute("type","radio")
n.setAttribute("checked","checked")
n.setAttribute("name","t")
t.appendChild(n)
l.checkClone=t.cloneNode(true).cloneNode(true).lastChild.checked
t.innerHTML="<textarea>x</textarea>"
l.noCloneChecked=!!t.cloneNode(true).lastChild.defaultValue})()
var V=typeof undefined
l.focusinBubbles="onfocusin"in e
var Y=/^key/,G=/^(?:mouse|pointer|contextmenu)|click/,Q=/^(?:focusinfocus|focusoutblur)$/,J=/^([^.]*)(?:\.(.+)|)$/
function K(){return true}function Z(){return false}function et(){try{return c.activeElement}catch(e){}}d.event={global:{},add:function(e,t,n,i,r){var o,s,a,u,f,l,c,p,h,g,m,y=M.get(e)
if(!y){return}if(n.handler){o=n
n=o.handler
r=o.selector}if(!n.guid){n.guid=d.guid++}if(!(u=y.events)){u=y.events={}}if(!(s=y.handle)){s=y.handle=function(t){return typeof d!==V&&d.event.triggered!==t.type?d.event.dispatch.apply(e,arguments):undefined}}t=(t||"").match(A)||[""]
f=t.length
while(f--){a=J.exec(t[f])||[]
h=m=a[1]
g=(a[2]||"").split(".").sort()
if(!h){continue}c=d.event.special[h]||{}
h=(r?c.delegateType:c.bindType)||h
c=d.event.special[h]||{}
l=d.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&d.expr.match.needsContext.test(r),namespace:g.join(".")},o)
if(!(p=u[h])){p=u[h]=[]
p.delegateCount=0
if(!c.setup||c.setup.call(e,i,g,s)===false){if(e.addEventListener){e.addEventListener(h,s,false)}}}if(c.add){c.add.call(e,l)
if(!l.handler.guid){l.handler.guid=n.guid}}if(r){p.splice(p.delegateCount++,0,l)}else{p.push(l)}d.event.global[h]=true}},remove:function(e,t,n,i,r){var o,s,a,u,f,l,c,p,h,g,m,y=M.hasData(e)&&M.get(e)
if(!y||!(u=y.events)){return}t=(t||"").match(A)||[""]
f=t.length
while(f--){a=J.exec(t[f])||[]
h=m=a[1]
g=(a[2]||"").split(".").sort()
if(!h){for(h in u){d.event.remove(e,h+t[f],n,i,true)}continue}c=d.event.special[h]||{}
h=(i?c.delegateType:c.bindType)||h
p=u[h]||[]
a=a[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)")
s=o=p.length
while(o--){l=p[o]
if((r||m===l.origType)&&(!n||n.guid===l.guid)&&(!a||a.test(l.namespace))&&(!i||i===l.selector||i==="**"&&l.selector)){p.splice(o,1)
if(l.selector){p.delegateCount--}if(c.remove){c.remove.call(e,l)}}}if(s&&!p.length){if(!c.teardown||c.teardown.call(e,g,y.handle)===false){d.removeEvent(e,h,y.handle)}delete u[h]}}if(d.isEmptyObject(u)){delete y.handle
M.remove(e,"events")}},trigger:function(t,n,i,r){var o,s,a,u,l,p,h,g=[i||c],m=f.call(t,"type")?t.type:t,y=f.call(t,"namespace")?t.namespace.split("."):[]
s=a=i=i||c
if(i.nodeType===3||i.nodeType===8){return}if(Q.test(m+d.event.triggered)){return}if(m.indexOf(".")>=0){y=m.split(".")
m=y.shift()
y.sort()}l=m.indexOf(":")<0&&"on"+m
t=t[d.expando]?t:new d.Event(m,typeof t==="object"&&t)
t.isTrigger=r?2:3
t.namespace=y.join(".")
t.namespace_re=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
t.result=undefined
if(!t.target){t.target=i}n=n==null?[t]:d.makeArray(n,[t])
h=d.event.special[m]||{}
if(!r&&h.trigger&&h.trigger.apply(i,n)===false){return}if(!r&&!h.noBubble&&!d.isWindow(i)){u=h.delegateType||m
if(!Q.test(u+m)){s=s.parentNode}for(;s;s=s.parentNode){g.push(s)
a=s}if(a===(i.ownerDocument||c)){g.push(a.defaultView||a.parentWindow||e)}}o=0
while((s=g[o++])&&!t.isPropagationStopped()){t.type=o>1?u:h.bindType||m
p=(M.get(s,"events")||{})[t.type]&&M.get(s,"handle")
if(p){p.apply(s,n)}p=l&&s[l]
if(p&&p.apply&&d.acceptData(s)){t.result=p.apply(s,n)
if(t.result===false){t.preventDefault()}}}t.type=m
if(!r&&!t.isDefaultPrevented()){if((!h._default||h._default.apply(g.pop(),n)===false)&&d.acceptData(i)){if(l&&d.isFunction(i[m])&&!d.isWindow(i)){a=i[l]
if(a){i[l]=null}d.event.triggered=m
i[m]()
d.event.triggered=undefined
if(a){i[l]=a}}}}return t.result},dispatch:function(e){e=d.event.fix(e)
var t,n,r,o,s,a=[],u=i.call(arguments),f=(M.get(this,"events")||{})[e.type]||[],l=d.event.special[e.type]||{}
u[0]=e
e.delegateTarget=this
if(l.preDispatch&&l.preDispatch.call(this,e)===false){return}a=d.event.handlers.call(this,e,f)
t=0
while((o=a[t++])&&!e.isPropagationStopped()){e.currentTarget=o.elem
n=0
while((s=o.handlers[n++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(s.namespace)){e.handleObj=s
e.data=s.data
r=((d.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u)
if(r!==undefined){if((e.result=r)===false){e.preventDefault()
e.stopPropagation()}}}}}if(l.postDispatch){l.postDispatch.call(this,e)}return e.result},handlers:function(e,t){var n,i,r,o,s=[],a=t.delegateCount,u=e.target
if(a&&u.nodeType&&(!e.button||e.type!=="click")){for(;u!==this;u=u.parentNode||this){if(u.disabled!==true||e.type!=="click"){i=[]
for(n=0;n<a;n++){o=t[n]
r=o.selector+" "
if(i[r]===undefined){i[r]=o.needsContext?d(r,this).index(u)>=0:d.find(r,this,null,[u]).length}if(i[r]){i.push(o)}}if(i.length){s.push({elem:u,handlers:i})}}}}if(a<t.length){s.push({elem:this,handlers:t.slice(a)})}return s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button
if(e.pageX==null&&t.clientX!=null){n=e.target.ownerDocument||c
i=n.documentElement
r=n.body
e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0)
e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)}if(!e.which&&o!==undefined){e.which=o&1?1:o&2?3:o&4?2:0}return e}},fix:function(e){if(e[d.expando]){return e}var t,n,i,r=e.type,o=e,s=this.fixHooks[r]
if(!s){this.fixHooks[r]=s=G.test(r)?this.mouseHooks:Y.test(r)?this.keyHooks:{}}i=s.props?this.props.concat(s.props):this.props
e=new d.Event(o)
t=i.length
while(t--){n=i[t]
e[n]=o[n]}if(!e.target){e.target=c}if(e.target.nodeType===3){e.target=e.target.parentNode}return s.filter?s.filter(e,o):e},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==et()&&this.focus){this.focus()
return false}},delegateType:"focusin"},blur:{trigger:function(){if(this===et()&&this.blur){this.blur()
return false}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&d.nodeName(this,"input")){this.click()
return false}},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,i){var r=d.extend(new d.Event,n,{type:e,isSimulated:true,originalEvent:{}})
if(i){d.event.trigger(r,null,t)}else{d.event.dispatch.call(t,r)}if(r.isDefaultPrevented()){n.preventDefault()}}}
d.removeEvent=function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}
d.Event=function(e,t){if(!(this instanceof d.Event)){return new d.Event(e,t)}if(e&&e.type){this.originalEvent=e
this.type=e.type
this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&e.returnValue===false?K:Z}else{this.type=e}if(t){d.extend(this,t)}this.timeStamp=e&&e.timeStamp||d.now()
this[d.expando]=true}
d.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=K
if(e&&e.preventDefault){e.preventDefault()}},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=K
if(e&&e.stopPropagation){e.stopPropagation()}},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=K
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()}this.stopPropagation()}}
d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj
if(!r||r!==i&&!d.contains(i,r)){e.type=o.origType
n=o.handler.apply(this,arguments)
e.type=t}return n}}})
if(!l.focusinBubbles){d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e),true)}
d.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=M.access(i,t)
if(!r){i.addEventListener(e,n,true)}M.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=M.access(i,t)-1
if(!r){i.removeEventListener(e,n,true)
M.remove(i,t)}else{M.access(i,t,r)}}}})}d.fn.extend({on:function(e,t,n,i,r){var o,s
if(typeof e==="object"){if(typeof t!=="string"){n=n||t
t=undefined}for(s in e){this.on(s,t,n,e[s],r)}return this}if(n==null&&i==null){i=t
n=t=undefined}else if(i==null){if(typeof t==="string"){i=n
n=undefined}else{i=n
n=t
t=undefined}}if(i===false){i=Z}else if(!i){return this}if(r===1){o=i
i=function(e){d().off(e)
return o.apply(this,arguments)}
i.guid=o.guid||(o.guid=d.guid++)}return this.each(function(){d.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r
if(e&&e.preventDefault&&e.handleObj){i=e.handleObj
d(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler)
return this}if(typeof e==="object"){for(r in e){this.off(r,t,e[r])}return this}if(t===false||typeof t==="function"){n=t
t=undefined}if(n===false){n=Z}return this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n){return d.event.trigger(e,t,n,true)}}})
var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,it=/<|&#?\w+;/,rt=/<(?:script|style|link)/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,at=/^true\/(.*)/,ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ft={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
ft.optgroup=ft.option
ft.tbody=ft.tfoot=ft.colgroup=ft.caption=ft.thead
ft.th=ft.td
function lt(e,t){return d.nodeName(e,"table")&&d.nodeName(t.nodeType!==11?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ct(e){e.type=(e.getAttribute("type")!==null)+"/"+e.type
return e}function pt(e){var t=at.exec(e.type)
if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function dt(e,t){var n=0,i=e.length
for(;n<i;n++){M.set(e[n],"globalEval",!t||M.get(t[n],"globalEval"))}}function ht(e,t){var n,i,r,o,s,a,u,f
if(t.nodeType!==1){return}if(M.hasData(e)){o=M.access(e)
s=M.set(t,o)
f=o.events
if(f){delete s.handle
s.events={}
for(r in f){for(n=0,i=f[r].length;n<i;n++){d.event.add(t,r,f[r][n])}}}}if(R.hasData(e)){a=R.access(e)
u=d.extend({},a)
R.set(t,u)}}function gt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return t===undefined||t&&d.nodeName(e,t)?d.merge([e],n):n}function mt(e,t){var n=t.nodeName.toLowerCase()
if(n==="input"&&U.test(e.type)){t.checked=e.checked}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}d.extend({clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(true),u=d.contains(e.ownerDocument,e)
if(!l.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!d.isXMLDoc(e)){s=gt(a)
o=gt(e)
for(i=0,r=o.length;i<r;i++){mt(o[i],s[i])}}if(t){if(n){o=o||gt(e)
s=s||gt(a)
for(i=0,r=o.length;i<r;i++){ht(o[i],s[i])}}else{ht(e,a)}}s=gt(a,"script")
if(s.length>0){dt(s,!u&&gt(e,"script"))}return a},buildFragment:function(e,t,n,i){var r,o,s,a,u,f,l=t.createDocumentFragment(),c=[],p=0,h=e.length
for(;p<h;p++){r=e[p]
if(r||r===0){if(d.type(r)==="object"){d.merge(c,r.nodeType?[r]:r)}else if(!it.test(r)){c.push(t.createTextNode(r))}else{o=o||l.appendChild(t.createElement("div"))
s=(nt.exec(r)||["",""])[1].toLowerCase()
a=ft[s]||ft._default
o.innerHTML=a[1]+r.replace(tt,"<$1></$2>")+a[2]
f=a[0]
while(f--){o=o.lastChild}d.merge(c,o.childNodes)
o=l.firstChild
o.textContent=""}}}l.textContent=""
p=0
while(r=c[p++]){if(i&&d.inArray(r,i)!==-1){continue}u=d.contains(r.ownerDocument,r)
o=gt(l.appendChild(r),"script")
if(u){dt(o)}if(n){f=0
while(r=o[f++]){if(st.test(r.type||"")){n.push(r)}}}}return l},cleanData:function(e){var t,n,i,r,o=d.event.special,s=0
for(;(n=e[s])!==undefined;s++){if(d.acceptData(n)){r=n[M.expando]
if(r&&(t=M.cache[r])){if(t.events){for(i in t.events){if(o[i]){d.event.remove(n,i)}else{d.removeEvent(n,i,t.handle)}}}if(M.cache[r]){delete M.cache[r]}}}delete R.cache[n[R.expando]]}}})
d.fn.extend({text:function(e){return F(this,function(e){return e===undefined?d.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=e}})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=lt(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=lt(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,i=e?d.filter(e,this):this,r=0
for(;(n=i[r])!=null;r++){if(!t&&n.nodeType===1){d.cleanData(gt(n))}if(n.parentNode){if(t&&d.contains(n.ownerDocument,n)){dt(gt(n,"script"))}n.parentNode.removeChild(n)}}return this},empty:function(){var e,t=0
for(;(e=this[t])!=null;t++){if(e.nodeType===1){d.cleanData(gt(e,false))
e.textContent=""}}return this},clone:function(e,t){e=e==null?false:e
t=t==null?e:t
return this.map(function(){return d.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length
if(e===undefined&&t.nodeType===1){return t.innerHTML}if(typeof e==="string"&&!rt.test(e)&&!ft[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>")
try{for(;n<i;n++){t=this[n]||{}
if(t.nodeType===1){d.cleanData(gt(t,false))
t.innerHTML=e}}t=0}catch(r){}}if(t){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
this.domManip(arguments,function(t){e=this.parentNode
d.cleanData(gt(this))
if(e){e.replaceChild(t,this)}})
return e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,true)},domManip:function(e,t){e=r.apply([],e)
var n,i,o,s,a,u,f=0,c=this.length,p=this,h=c-1,g=e[0],m=d.isFunction(g)
if(m||c>1&&typeof g==="string"&&!l.checkClone&&ot.test(g)){return this.each(function(n){var i=p.eq(n)
if(m){e[0]=g.call(this,n,i.html())}i.domManip(e,t)})}if(c){n=d.buildFragment(e,this[0].ownerDocument,false,this)
i=n.firstChild
if(n.childNodes.length===1){n=i}if(i){o=d.map(gt(n,"script"),ct)
s=o.length
for(;f<c;f++){a=n
if(f!==h){a=d.clone(a,true,true)
if(s){d.merge(o,gt(a,"script"))}}t.call(this[f],a,f)}if(s){u=o[o.length-1].ownerDocument
d.map(o,pt)
for(f=0;f<s;f++){a=o[f]
if(st.test(a.type||"")&&!M.access(a,"globalEval")&&d.contains(u,a)){if(a.src){if(d._evalUrl){d._evalUrl(a.src)}}else{d.globalEval(a.textContent.replace(ut,""))}}}}}}return this}})
d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){var n,i=[],r=d(e),s=r.length-1,a=0
for(;a<=s;a++){n=a===s?this:this.clone(true)
d(r[a])[t](n)
o.apply(i,n.get())}return this.pushStack(i)}})
var yt,vt={}
function xt(t,n){var i,r=d(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:d.css(r[0],"display")
r.detach()
return o}function wt(e){var t=c,n=vt[e]
if(!n){n=xt(e,t)
if(n==="none"||!n){yt=(yt||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement)
t=yt[0].contentDocument
t.write()
t.close()
n=xt(e,t)
yt.detach()}vt[e]=n}return n}var bt=/^margin/
var Tt=new RegExp("^("+_+")(?!px)[a-z%]+$","i")
var Ct=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)}
function kt(e,t,n){var i,r,o,s,a=e.style
n=n||Ct(e)
if(n){s=n.getPropertyValue(t)||n[t]}if(n){if(s===""&&!d.contains(e.ownerDocument,e)){s=d.style(e,t)}if(Tt.test(s)&&bt.test(t)){i=a.width
r=a.minWidth
o=a.maxWidth
a.minWidth=a.maxWidth=a.width=s
s=n.width
a.width=i
a.minWidth=r
a.maxWidth=o}}return s!==undefined?s+"":s}function Nt(e,t){return{get:function(){if(e()){delete this.get
return}return(this.get=t).apply(this,arguments)}}}(function(){var t,n,i=c.documentElement,r=c.createElement("div"),o=c.createElement("div")
if(!o.style){return}o.style.backgroundClip="content-box"
o.cloneNode(true).style.backgroundClip=""
l.clearCloneStyle=o.style.backgroundClip==="content-box"
r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute"
r.appendChild(o)
function s(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute"
o.innerHTML=""
i.appendChild(r)
var s=e.getComputedStyle(o,null)
t=s.top!=="1%"
n=s.width==="4px"
i.removeChild(r)}if(e.getComputedStyle){d.extend(l,{pixelPosition:function(){s()
return t},boxSizingReliable:function(){if(n==null){s()}return n},reliableMarginRight:function(){var t,n=o.appendChild(c.createElement("div"))
n.style.cssText=o.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0"
n.style.marginRight=n.style.width="0"
o.style.width="1px"
i.appendChild(r)
t=!parseFloat(e.getComputedStyle(n,null).marginRight)
i.removeChild(r)
return t}})}})()
d.swap=function(e,t,n,i){var r,o,s={}
for(o in t){s[o]=e.style[o]
e.style[o]=t[o]}r=n.apply(e,i||[])
for(o in t){e.style[o]=s[o]}return r}
var Et=/^(none|table(?!-c[ea]).+)/,St=new RegExp("^("+_+")(.*)$","i"),jt=new RegExp("^([+-])=("+_+")","i"),Dt={position:"absolute",visibility:"hidden",display:"block"},At={letterSpacing:"0",fontWeight:"400"},Lt=["Webkit","O","Moz","ms"]
function qt(e,t){if(t in e){return t}var n=t[0].toUpperCase()+t.slice(1),i=t,r=Lt.length
while(r--){t=Lt[r]+n
if(t in e){return t}}return i}function Ht(e,t,n){var i=St.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function Ot(e,t,n,i,r){var o=n===(i?"border":"content")?4:t==="width"?1:0,s=0
for(;o<4;o+=2){if(n==="margin"){s+=d.css(e,n+z[o],true,r)}if(i){if(n==="content"){s-=d.css(e,"padding"+z[o],true,r)}if(n!=="margin"){s-=d.css(e,"border"+z[o]+"Width",true,r)}}else{s+=d.css(e,"padding"+z[o],true,r)
if(n!=="padding"){s+=d.css(e,"border"+z[o]+"Width",true,r)}}}return s}function Ft(e,t,n){var i=true,r=t==="width"?e.offsetWidth:e.offsetHeight,o=Ct(e),s=d.css(e,"boxSizing",false,o)==="border-box"
if(r<=0||r==null){r=kt(e,t,o)
if(r<0||r==null){r=e.style[t]}if(Tt.test(r)){return r}i=s&&(l.boxSizingReliable()||r===e.style[t])
r=parseFloat(r)||0}return r+Ot(e,t,n||(s?"border":"content"),i,o)+"px"}function Pt(e,t){var n,i,r,o=[],s=0,a=e.length
for(;s<a;s++){i=e[s]
if(!i.style){continue}o[s]=M.get(i,"olddisplay")
n=i.style.display
if(t){if(!o[s]&&n==="none"){i.style.display=""}if(i.style.display===""&&X(i)){o[s]=M.access(i,"olddisplay",wt(i.nodeName))}}else{r=X(i)
if(n!=="none"||!r){M.set(i,"olddisplay",r?n:d.css(i,"display"))}}}for(s=0;s<a;s++){i=e[s]
if(!i.style){continue}if(!t||i.style.display==="none"||i.style.display===""){i.style.display=t?o[s]||"":"none"}}return e}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=kt(e,"opacity")
return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var r,o,s,a=d.camelCase(t),u=e.style
t=d.cssProps[a]||(d.cssProps[a]=qt(u,a))
s=d.cssHooks[t]||d.cssHooks[a]
if(n!==undefined){o=typeof n
if(o==="string"&&(r=jt.exec(n))){n=(r[1]+1)*r[2]+parseFloat(d.css(e,t))
o="number"}if(n==null||n!==n){return}if(o==="number"&&!d.cssNumber[a]){n+="px"}if(!l.clearCloneStyle&&n===""&&t.indexOf("background")===0){u[t]="inherit"}if(!s||!("set"in s)||(n=s.set(e,n,i))!==undefined){u[t]=n}}else{if(s&&"get"in s&&(r=s.get(e,false,i))!==undefined){return r}return u[t]}},css:function(e,t,n,i){var r,o,s,a=d.camelCase(t)
t=d.cssProps[a]||(d.cssProps[a]=qt(e.style,a))
s=d.cssHooks[t]||d.cssHooks[a]
if(s&&"get"in s){r=s.get(e,true,n)}if(r===undefined){r=kt(e,t,i)}if(r==="normal"&&t in At){r=At[t]}if(n===""||n){o=parseFloat(r)
return n===true||d.isNumeric(o)?o||0:r}return r}})
d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,i){if(n){return Et.test(d.css(e,"display"))&&e.offsetWidth===0?d.swap(e,Dt,function(){return Ft(e,t,i)}):Ft(e,t,i)}},set:function(e,n,i){var r=i&&Ct(e)
return Ht(e,n,i?Ot(e,t,i,d.css(e,"boxSizing",false,r)==="border-box",r):0)}}})
d.cssHooks.marginRight=Nt(l.reliableMarginRight,function(e,t){if(t){return d.swap(e,{display:"inline-block"},kt,[e,"marginRight"])}})
d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){var i=0,r={},o=typeof n==="string"?n.split(" "):[n]
for(;i<4;i++){r[e+z[i]+t]=o[i]||o[i-2]||o[0]}return r}}
if(!bt.test(e)){d.cssHooks[e+t].set=Ht}})
d.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,r,o={},s=0
if(d.isArray(t)){i=Ct(e)
r=t.length
for(;s<r;s++){o[t[s]]=d.css(e,t[s],false,i)}return o}return n!==undefined?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return Pt(this,true)},hide:function(){return Pt(this)},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()}return this.each(function(){if(X(this)){d(this).show()}else{d(this).hide()}})}})
function Mt(e,t,n,i,r){return new Mt.prototype.init(e,t,n,i,r)}d.Tween=Mt
Mt.prototype={constructor:Mt,init:function(e,t,n,i,r,o){this.elem=e
this.prop=n
this.easing=r||"swing"
this.options=t
this.start=this.now=this.cur()
this.end=i
this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=Mt.propHooks[this.prop]
return e&&e.get?e.get(this):Mt.propHooks._default.get(this)},run:function(e){var t,n=Mt.propHooks[this.prop]
if(this.options.duration){this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start
if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{Mt.propHooks._default.set(this)}return this}}
Mt.prototype.init.prototype=Mt.prototype
Mt.propHooks={_default:{get:function(e){var t
if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=d.css(e.elem,e.prop,"")
return!t||t==="auto"?0:t},set:function(e){if(d.fx.step[e.prop]){d.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[d.cssProps[e.prop]]!=null||d.cssHooks[e.prop])){d.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}}
Mt.propHooks.scrollTop=Mt.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}}
d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}}
d.fx=Mt.prototype.init
d.fx.step={}
var Rt,Wt,$t=/^(?:toggle|show|hide)$/,Bt=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),It=/queueHooks$/,_t=[Yt],zt={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=Bt.exec(t),o=r&&r[3]||(d.cssNumber[e]?"":"px"),s=(d.cssNumber[e]||o!=="px"&&+i)&&Bt.exec(d.css(n.elem,e)),a=1,u=20
if(s&&s[3]!==o){o=o||s[3]
r=r||[]
s=+i||1
do{a=a||".5"
s=s/a
d.style(n.elem,e,s+o)}while(a!==(a=n.cur()/i)&&a!==1&&--u)}if(r){s=n.start=+s||+i||0
n.unit=o
n.end=r[1]?s+(r[1]+1)*r[2]:+r[2]}return n}]}
function Xt(){setTimeout(function(){Rt=undefined})
return Rt=d.now()}function Ut(e,t){var n,i=0,r={height:e}
t=t?1:0
for(;i<4;i+=2-t){n=z[i]
r["margin"+n]=r["padding"+n]=e}if(t){r.opacity=r.width=e}return r}function Vt(e,t,n){var i,r=(zt[t]||[]).concat(zt["*"]),o=0,s=r.length
for(;o<s;o++){if(i=r[o].call(n,t,e)){return i}}}function Yt(e,t,n){var i,r,o,s,a,u,f,l,c=this,p={},h=e.style,g=e.nodeType&&X(e),m=M.get(e,"fxshow")
if(!n.queue){a=d._queueHooks(e,"fx")
if(a.unqueued==null){a.unqueued=0
u=a.empty.fire
a.empty.fire=function(){if(!a.unqueued){u()}}}a.unqueued++
c.always(function(){c.always(function(){a.unqueued--
if(!d.queue(e,"fx").length){a.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[h.overflow,h.overflowX,h.overflowY]
f=d.css(e,"display")
l=f==="none"?M.get(e,"olddisplay")||wt(e.nodeName):f
if(l==="inline"&&d.css(e,"float")==="none"){h.display="inline-block"}}if(n.overflow){h.overflow="hidden"
c.always(function(){h.overflow=n.overflow[0]
h.overflowX=n.overflow[1]
h.overflowY=n.overflow[2]})}for(i in t){r=t[i]
if($t.exec(r)){delete t[i]
o=o||r==="toggle"
if(r===(g?"hide":"show")){if(r==="show"&&m&&m[i]!==undefined){g=true}else{continue}}p[i]=m&&m[i]||d.style(e,i)}else{f=undefined}}if(!d.isEmptyObject(p)){if(m){if("hidden"in m){g=m.hidden}}else{m=M.access(e,"fxshow",{})}if(o){m.hidden=!g}if(g){d(e).show()}else{c.done(function(){d(e).hide()})}c.done(function(){var t
M.remove(e,"fxshow")
for(t in p){d.style(e,t,p[t])}})
for(i in p){s=Vt(g?m[i]:0,i,c)
if(!(i in m)){m[i]=s.start
if(g){s.end=s.start
s.start=i==="width"||i==="height"?1:0}}}}else if((f==="none"?wt(e.nodeName):f)==="inline"){h.display=f}}function Gt(e,t){var n,i,r,o,s
for(n in e){i=d.camelCase(n)
r=t[i]
o=e[n]
if(d.isArray(o)){r=o[1]
o=e[n]=o[0]}if(n!==i){e[i]=o
delete e[n]}s=d.cssHooks[i]
if(s&&"expand"in s){o=s.expand(o)
delete e[i]
for(n in o){if(!(n in e)){e[n]=o[n]
t[n]=r}}}else{t[i]=r}}}function Qt(e,t,n){var i,r,o=0,s=_t.length,a=d.Deferred().always(function(){delete u.elem}),u=function(){if(r){return false}var t=Rt||Xt(),n=Math.max(0,f.startTime+f.duration-t),i=n/f.duration||0,o=1-i,s=0,u=f.tweens.length
for(;s<u;s++){f.tweens[s].run(o)}a.notifyWith(e,[f,o,n])
if(o<1&&u){return n}else{a.resolveWith(e,[f])
return false}},f=a.promise({elem:e,props:d.extend({},t),opts:d.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Rt||Xt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=d.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing)
f.tweens.push(i)
return i},stop:function(t){var n=0,i=t?f.tweens.length:0
if(r){return this}r=true
for(;n<i;n++){f.tweens[n].run(1)}if(t){a.resolveWith(e,[f,t])}else{a.rejectWith(e,[f,t])}return this}}),l=f.props
Gt(l,f.opts.specialEasing)
for(;o<s;o++){i=_t[o].call(f,e,l,f.opts)
if(i){return i}}d.map(l,Vt,f)
if(d.isFunction(f.opts.start)){f.opts.start.call(e,f)}d.fx.timer(d.extend(u,{elem:e,anim:f,queue:f.opts.queue}))
return f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}d.Animation=d.extend(Qt,{tweener:function(e,t){if(d.isFunction(e)){t=e
e=["*"]}else{e=e.split(" ")}var n,i=0,r=e.length
for(;i<r;i++){n=e[i]
zt[n]=zt[n]||[]
zt[n].unshift(t)}},prefilter:function(e,t){if(t){_t.unshift(e)}else{_t.push(e)}}})
d.speed=function(e,t,n){var i=e&&typeof e==="object"?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t}
i.duration=d.fx.off?0:typeof i.duration==="number"?i.duration:i.duration in d.fx.speeds?d.fx.speeds[i.duration]:d.fx.speeds._default
if(i.queue==null||i.queue===true){i.queue="fx"}i.old=i.complete
i.complete=function(){if(d.isFunction(i.old)){i.old.call(this)}if(i.queue){d.dequeue(this,i.queue)}}
return i}
d.fn.extend({fadeTo:function(e,t,n,i){return this.filter(X).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=d.isEmptyObject(e),o=d.speed(t,n,i),s=function(){var t=Qt(this,d.extend({},e),o)
if(r||M.get(this,"finish")){t.stop(true)}}
s.finish=s
return r||o.queue===false?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop
delete e.stop
t(n)}
if(typeof e!=="string"){n=t
t=e
e=undefined}if(t&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,r=e!=null&&e+"queueHooks",o=d.timers,s=M.get(this)
if(r){if(s[r]&&s[r].stop){i(s[r])}}else{for(r in s){if(s[r]&&s[r].stop&&It.test(r)){i(s[r])}}}for(r=o.length;r--;){if(o[r].elem===this&&(e==null||o[r].queue===e)){o[r].anim.stop(n)
t=false
o.splice(r,1)}}if(t||!n){d.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=M.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=d.timers,s=i?i.length:0
n.finish=true
d.queue(this,e,[])
if(r&&r.stop){r.stop.call(this,true)}for(t=o.length;t--;){if(o[t].elem===this&&o[t].queue===e){o[t].anim.stop(true)
o.splice(t,1)}}for(t=0;t<s;t++){if(i[t]&&i[t].finish){i[t].finish.call(this)}}delete n.finish})}})
d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t]
d.fn[t]=function(e,i,r){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(Ut(t,true),e,i,r)}})
d.each({slideDown:Ut("show"),slideUp:Ut("hide"),slideToggle:Ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})
d.timers=[]
d.fx.tick=function(){var e,t=0,n=d.timers
Rt=d.now()
for(;t<n.length;t++){e=n[t]
if(!e()&&n[t]===e){n.splice(t--,1)}}if(!n.length){d.fx.stop()}Rt=undefined}
d.fx.timer=function(e){d.timers.push(e)
if(e()){d.fx.start()}else{d.timers.pop()}}
d.fx.interval=13
d.fx.start=function(){if(!Wt){Wt=setInterval(d.fx.tick,d.fx.interval)}}
d.fx.stop=function(){clearInterval(Wt)
Wt=null}
d.fx.speeds={slow:600,fast:200,_default:400}
d.fn.delay=function(e,t){e=d.fx?d.fx.speeds[e]||e:e
t=t||"fx"
return this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})};(function(){var e=c.createElement("input"),t=c.createElement("select"),n=t.appendChild(c.createElement("option"))
e.type="checkbox"
l.checkOn=e.value!==""
l.optSelected=n.selected
t.disabled=true
l.optDisabled=!n.disabled
e=c.createElement("input")
e.value="t"
e.type="radio"
l.radioValue=e.value==="t"})()
var Jt,Kt,Zt=d.expr.attrHandle
d.fn.extend({attr:function(e,t){return F(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}})
d.extend({attr:function(e,t,n){var i,r,o=e.nodeType
if(!e||o===3||o===8||o===2){return}if(typeof e.getAttribute===V){return d.prop(e,t,n)}if(o!==1||!d.isXMLDoc(e)){t=t.toLowerCase()
i=d.attrHooks[t]||(d.expr.match.bool.test(t)?Kt:Jt)}if(n!==undefined){if(n===null){d.removeAttr(e,t)}else if(i&&"set"in i&&(r=i.set(e,n,t))!==undefined){return r}else{e.setAttribute(t,n+"")
return n}}else if(i&&"get"in i&&(r=i.get(e,t))!==null){return r}else{r=d.find.attr(e,t)
return r==null?undefined:r}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(A)
if(o&&e.nodeType===1){while(n=o[r++]){i=d.propFix[n]||n
if(d.expr.match.bool.test(n)){e[i]=false}e.removeAttribute(n)}}},attrHooks:{type:{set:function(e,t){if(!l.radioValue&&t==="radio"&&d.nodeName(e,"input")){var n=e.value
e.setAttribute("type",t)
if(n){e.value=n}return t}}}}})
Kt={set:function(e,t,n){if(t===false){d.removeAttr(e,n)}else{e.setAttribute(n,n)}return n}}
d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Zt[t]||d.find.attr
Zt[t]=function(e,t,i){var r,o
if(!i){o=Zt[t]
Zt[t]=r
r=n(e,t,i)!=null?t.toLowerCase():null
Zt[t]=o}return r}})
var en=/^(?:input|select|textarea|button)$/i
d.fn.extend({prop:function(e,t){return F(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[d.propFix[e]||e]})}})
d.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,o,s=e.nodeType
if(!e||s===3||s===8||s===2){return}o=s!==1||!d.isXMLDoc(e)
if(o){t=d.propFix[t]||t
r=d.propHooks[t]}if(n!==undefined){return r&&"set"in r&&(i=r.set(e,n,t))!==undefined?i:e[t]=n}else{return r&&"get"in r&&(i=r.get(e,t))!==null?i:e[t]}},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||en.test(e.nodeName)||e.href?e.tabIndex:-1}}}})
if(!l.optSelected){d.propHooks.selected={get:function(e){var t=e.parentNode
if(t&&t.parentNode){t.parentNode.selectedIndex}return null}}}d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this})
var tn=/[\t\r\n\f]/g
d.fn.extend({addClass:function(e){var t,n,i,r,o,s,a=typeof e==="string"&&e,u=0,f=this.length
if(d.isFunction(e)){return this.each(function(t){d(this).addClass(e.call(this,t,this.className))})}if(a){t=(e||"").match(A)||[]
for(;u<f;u++){n=this[u]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(tn," "):" ")
if(i){o=0
while(r=t[o++]){if(i.indexOf(" "+r+" ")<0){i+=r+" "}}s=d.trim(i)
if(n.className!==s){n.className=s}}}}return this},removeClass:function(e){var t,n,i,r,o,s,a=arguments.length===0||typeof e==="string"&&e,u=0,f=this.length
if(d.isFunction(e)){return this.each(function(t){d(this).removeClass(e.call(this,t,this.className))})}if(a){t=(e||"").match(A)||[]
for(;u<f;u++){n=this[u]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(tn," "):"")
if(i){o=0
while(r=t[o++]){while(i.indexOf(" "+r+" ")>=0){i=i.replace(" "+r+" "," ")}}s=e?d.trim(i):""
if(n.className!==s){n.className=s}}}}return this},toggleClass:function(e,t){var n=typeof e
if(typeof t==="boolean"&&n==="string"){return t?this.addClass(e):this.removeClass(e)}if(d.isFunction(e)){return this.each(function(n){d(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var t,i=0,r=d(this),o=e.match(A)||[]
while(t=o[i++]){if(r.hasClass(t)){r.removeClass(t)}else{r.addClass(t)}}}else if(n===V||n==="boolean"){if(this.className){M.set(this,"__className__",this.className)}this.className=this.className||e===false?"":M.get(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,i=this.length
for(;n<i;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(tn," ").indexOf(t)>=0){return true}}return false}})
var nn=/\r/g
d.fn.extend({val:function(e){var t,n,i,r=this[0]
if(!arguments.length){if(r){t=d.valHooks[r.type]||d.valHooks[r.nodeName.toLowerCase()]
if(t&&"get"in t&&(n=t.get(r,"value"))!==undefined){return n}n=r.value
return typeof n==="string"?n.replace(nn,""):n==null?"":n}return}i=d.isFunction(e)
return this.each(function(n){var r
if(this.nodeType!==1){return}if(i){r=e.call(this,n,d(this).val())}else{r=e}if(r==null){r=""}else if(typeof r==="number"){r+=""}else if(d.isArray(r)){r=d.map(r,function(e){return e==null?"":e+""})}t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()]
if(!t||!("set"in t)||t.set(this,r,"value")===undefined){this.value=r}})}})
d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value")
return t!=null?t:d.trim(d.text(e))}},select:{get:function(e){var t,n,i=e.options,r=e.selectedIndex,o=e.type==="select-one"||r<0,s=o?null:[],a=o?r+1:i.length,u=r<0?a:o?r:0
for(;u<a;u++){n=i[u]
if((n.selected||u===r)&&(l.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){t=d(n).val()
if(o){return t}s.push(t)}}return s},set:function(e,t){var n,i,r=e.options,o=d.makeArray(t),s=r.length
while(s--){i=r[s]
if(i.selected=d.inArray(i.value,o)>=0){n=true}}if(!n){e.selectedIndex=-1}return o}}}})
d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t)){return e.checked=d.inArray(d(e).val(),t)>=0}}}
if(!l.checkOn){d.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value}}})
d.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})
d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}})
var rn=d.now()
var on=/\?/
d.parseJSON=function(e){return JSON.parse(e+"")}
d.parseXML=function(e){var t,n
if(!e||typeof e!=="string"){return null}try{n=new DOMParser
t=n.parseFromString(e,"text/xml")}catch(i){t=undefined}if(!t||t.getElementsByTagName("parsererror").length){d.error("Invalid XML: "+e)}return t}
var sn,an,un=/#.*$/,fn=/([?&])_=[^&]*/,ln=/^(.*?):[ \t]*([^\r\n]*)$/gm,cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pn=/^(?:GET|HEAD)$/,dn=/^\/\//,hn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,gn={},mn={},yn="*/".concat("*")
try{an=location.href}catch(vn){an=c.createElement("a")
an.href=""
an=an.href}sn=hn.exec(an.toLowerCase())||[]
function xn(e){return function(t,n){if(typeof t!=="string"){n=t
t="*"}var i,r=0,o=t.toLowerCase().match(A)||[]
if(d.isFunction(n)){while(i=o[r++]){if(i[0]==="+"){i=i.slice(1)||"*";(e[i]=e[i]||[]).unshift(n)}else{(e[i]=e[i]||[]).push(n)}}}}}function wn(e,t,n,i){var r={},o=e===mn
function s(a){var u
r[a]=true
d.each(e[a]||[],function(e,a){var f=a(t,n,i)
if(typeof f==="string"&&!o&&!r[f]){t.dataTypes.unshift(f)
s(f)
return false}else if(o){return!(u=f)}})
return u}return s(t.dataTypes[0])||!r["*"]&&s("*")}function bn(e,t){var n,i,r=d.ajaxSettings.flatOptions||{}
for(n in t){if(t[n]!==undefined){(r[n]?e:i||(i={}))[n]=t[n]}}if(i){d.extend(true,e,i)}return e}function Tn(e,t,n){var i,r,o,s,a=e.contents,u=e.dataTypes
while(u[0]==="*"){u.shift()
if(i===undefined){i=e.mimeType||t.getResponseHeader("Content-Type")}}if(i){for(r in a){if(a[r]&&a[r].test(i)){u.unshift(r)
break}}}if(u[0]in n){o=u[0]}else{for(r in n){if(!u[0]||e.converters[r+" "+u[0]]){o=r
break}if(!s){s=r}}o=o||s}if(o){if(o!==u[0]){u.unshift(o)}return n[o]}}function Cn(e,t,n,i){var r,o,s,a,u,f={},l=e.dataTypes.slice()
if(l[1]){for(s in e.converters){f[s.toLowerCase()]=e.converters[s]}}o=l.shift()
while(o){if(e.responseFields[o]){n[e.responseFields[o]]=t}if(!u&&i&&e.dataFilter){t=e.dataFilter(t,e.dataType)}u=o
o=l.shift()
if(o){if(o==="*"){o=u}else if(u!=="*"&&u!==o){s=f[u+" "+o]||f["* "+o]
if(!s){for(r in f){a=r.split(" ")
if(a[1]===o){s=f[u+" "+a[0]]||f["* "+a[0]]
if(s){if(s===true){s=f[r]}else if(f[r]!==true){o=a[0]
l.unshift(a[1])}break}}}}if(s!==true){if(s&&e["throws"]){t=s(t)}else{try{t=s(t)}catch(c){return{state:"parsererror",error:s?c:"No conversion from "+u+" to "+o}}}}}}}return{state:"success",data:t}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:an,type:"GET",isLocal:cn.test(sn[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?bn(bn(e,d.ajaxSettings),t):bn(d.ajaxSettings,e)},ajaxPrefilter:xn(gn),ajaxTransport:xn(mn),ajax:function(e,t){if(typeof e==="object"){t=e
e=undefined}t=t||{}
var n,i,r,o,s,a,u,f,l=d.ajaxSetup({},t),c=l.context||l,p=l.context&&(c.nodeType||c.jquery)?d(c):d.event,h=d.Deferred(),g=d.Callbacks("once memory"),m=l.statusCode||{},y={},v={},x=0,w="canceled",b={readyState:0,getResponseHeader:function(e){var t
if(x===2){if(!o){o={}
while(t=ln.exec(r)){o[t[1].toLowerCase()]=t[2]}}t=o[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return x===2?r:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
if(!x){e=v[n]=v[n]||e
y[e]=t}return this},overrideMimeType:function(e){if(!x){l.mimeType=e}return this},statusCode:function(e){var t
if(e){if(x<2){for(t in e){m[t]=[m[t],e[t]]}}else{b.always(e[b.status])}}return this},abort:function(e){var t=e||w
if(n){n.abort(t)}C(0,t)
return this}}
h.promise(b).complete=g.add
b.success=b.done
b.error=b.fail
l.url=((e||l.url||an)+"").replace(un,"").replace(dn,sn[1]+"//")
l.type=t.method||t.type||l.method||l.type
l.dataTypes=d.trim(l.dataType||"*").toLowerCase().match(A)||[""]
if(l.crossDomain==null){a=hn.exec(l.url.toLowerCase())
l.crossDomain=!!(a&&(a[1]!==sn[1]||a[2]!==sn[2]||(a[3]||(a[1]==="http:"?"80":"443"))!==(sn[3]||(sn[1]==="http:"?"80":"443"))))}if(l.data&&l.processData&&typeof l.data!=="string"){l.data=d.param(l.data,l.traditional)}wn(gn,l,t,b)
if(x===2){return b}u=l.global
if(u&&d.active++===0){d.event.trigger("ajaxStart")}l.type=l.type.toUpperCase()
l.hasContent=!pn.test(l.type)
i=l.url
if(!l.hasContent){if(l.data){i=l.url+=(on.test(i)?"&":"?")+l.data
delete l.data}if(l.cache===false){l.url=fn.test(i)?i.replace(fn,"$1_="+rn++):i+(on.test(i)?"&":"?")+"_="+rn++}}if(l.ifModified){if(d.lastModified[i]){b.setRequestHeader("If-Modified-Since",d.lastModified[i])}if(d.etag[i]){b.setRequestHeader("If-None-Match",d.etag[i])}}if(l.data&&l.hasContent&&l.contentType!==false||t.contentType){b.setRequestHeader("Content-Type",l.contentType)}b.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+yn+"; q=0.01":""):l.accepts["*"])
for(f in l.headers){b.setRequestHeader(f,l.headers[f])}if(l.beforeSend&&(l.beforeSend.call(c,b,l)===false||x===2)){return b.abort()}w="abort"
for(f in{success:1,error:1,complete:1}){b[f](l[f])}n=wn(mn,l,t,b)
if(!n){C(-1,"No Transport")}else{b.readyState=1
if(u){p.trigger("ajaxSend",[b,l])}if(l.async&&l.timeout>0){s=setTimeout(function(){b.abort("timeout")},l.timeout)}try{x=1
n.send(y,C)}catch(T){if(x<2){C(-1,T)}else{throw T}}}function C(e,t,o,a){var f,y,v,w,T,C=t
if(x===2){return}x=2
if(s){clearTimeout(s)}n=undefined
r=a||""
b.readyState=e>0?4:0
f=e>=200&&e<300||e===304
if(o){w=Tn(l,b,o)}w=Cn(l,w,b,f)
if(f){if(l.ifModified){T=b.getResponseHeader("Last-Modified")
if(T){d.lastModified[i]=T}T=b.getResponseHeader("etag")
if(T){d.etag[i]=T}}if(e===204||l.type==="HEAD"){C="nocontent"}else if(e===304){C="notmodified"}else{C=w.state
y=w.data
v=w.error
f=!v}}else{v=C
if(e||!C){C="error"
if(e<0){e=0}}}b.status=e
b.statusText=(t||C)+""
if(f){h.resolveWith(c,[y,C,b])}else{h.rejectWith(c,[b,C,v])}b.statusCode(m)
m=undefined
if(u){p.trigger(f?"ajaxSuccess":"ajaxError",[b,l,f?y:v])}g.fireWith(c,[b,C])
if(u){p.trigger("ajaxComplete",[b,l])
if(!--d.active){d.event.trigger("ajaxStop")}}}return b},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,undefined,t,"script")}})
d.each(["get","post"],function(e,t){d[t]=function(e,n,i,r){if(d.isFunction(n)){r=r||i
i=n
n=undefined}return d.ajax({url:e,type:t,dataType:r,data:n,success:i})}})
d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}})
d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})}
d.fn.extend({wrapAll:function(e){var t
if(d.isFunction(e)){return this.each(function(t){d(this).wrapAll(e.call(this,t))})}if(this[0]){t=d(e,this[0].ownerDocument).eq(0).clone(true)
if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this
while(e.firstElementChild){e=e.firstElementChild}return e}).append(this)}return this},wrapInner:function(e){if(d.isFunction(e)){return this.each(function(t){d(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=d(this),n=t.contents()
if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=d.isFunction(e)
return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!d.nodeName(this,"body")){d(this).replaceWith(this.childNodes)}}).end()}})
d.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0}
d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)}
var kn=/%20/g,Nn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,jn=/^(?:input|select|textarea|keygen)/i
function Dn(e,t,n,i){var r
if(d.isArray(t)){d.each(t,function(t,r){if(n||Nn.test(e)){i(e,r)}else{Dn(e+"["+(typeof r==="object"?t:"")+"]",r,n,i)}})}else if(!n&&d.type(t)==="object"){for(r in t){Dn(e+"["+r+"]",t[r],n,i)}}else{i(e,t)}}d.param=function(e,t){var n,i=[],r=function(e,t){t=d.isFunction(t)?t():t==null?"":t
i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(t===undefined){t=d.ajaxSettings&&d.ajaxSettings.traditional}if(d.isArray(e)||e.jquery&&!d.isPlainObject(e)){d.each(e,function(){r(this.name,this.value)})}else{for(n in e){Dn(n,e[n],t,r)}}return i.join("&").replace(kn,"+")}
d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements")
return e?d.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!d(this).is(":disabled")&&jn.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!U.test(e))}).map(function(e,t){var n=d(this).val()
return n==null?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}})
d.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var An=0,Ln={},qn={0:200,1223:204},Hn=d.ajaxSettings.xhr()
if(e.ActiveXObject){d(e).on("unload",function(){for(var e in Ln){Ln[e]()}})}l.cors=!!Hn&&"withCredentials"in Hn
l.ajax=Hn=!!Hn
d.ajaxTransport(function(e){var t
if(l.cors||Hn&&!e.crossDomain){return{send:function(n,i){var r,o=e.xhr(),s=++An
o.open(e.type,e.url,e.async,e.username,e.password)
if(e.xhrFields){for(r in e.xhrFields){o[r]=e.xhrFields[r]}}if(e.mimeType&&o.overrideMimeType){o.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!n["X-Requested-With"]){n["X-Requested-With"]="XMLHttpRequest"}for(r in n){o.setRequestHeader(r,n[r])}t=function(e){return function(){if(t){delete Ln[s]
t=o.onload=o.onerror=null
if(e==="abort"){o.abort()}else if(e==="error"){i(o.status,o.statusText)}else{i(qn[o.status]||o.status,o.statusText,typeof o.responseText==="string"?{text:o.responseText}:undefined,o.getAllResponseHeaders())}}}}
o.onload=t()
o.onerror=t("error")
t=Ln[s]=t("abort")
try{o.send(e.hasContent&&e.data||null)}catch(a){if(t){throw a}}},abort:function(){if(t){t()}}}}})
d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){d.globalEval(e)
return e}}})
d.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET"}})
d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(i,r){t=d("<script>").prop({async:true,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove()
n=null
if(e){r(e.type==="error"?404:200,e.type)}})
c.head.appendChild(t[0])},abort:function(){if(n){n()}}}}})
var On=[],Fn=/(=)\?(?=&|$)|\?\?/
d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||d.expando+"_"+rn++
this[e]=true
return e}})
d.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=t.jsonp!==false&&(Fn.test(t.url)?"url":typeof t.data==="string"&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Fn.test(t.data)&&"data")
if(a||t.dataTypes[0]==="jsonp"){r=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback
if(a){t[a]=t[a].replace(Fn,"$1"+r)}else if(t.jsonp!==false){t.url+=(on.test(t.url)?"&":"?")+t.jsonp+"="+r}t.converters["script json"]=function(){if(!s){d.error(r+" was not called")}return s[0]}
t.dataTypes[0]="json"
o=e[r]
e[r]=function(){s=arguments}
i.always(function(){e[r]=o
if(t[r]){t.jsonpCallback=n.jsonpCallback
On.push(r)}if(s&&d.isFunction(o)){o(s[0])}s=o=undefined})
return"script"}})
d.parseHTML=function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t
t=false}t=t||c
var i=b.exec(e),r=!n&&[]
if(i){return[t.createElement(i[1])]}i=d.buildFragment([e],t,r)
if(r&&r.length){d(r).remove()}return d.merge([],i.childNodes)}
var Pn=d.fn.load
d.fn.load=function(e,t,n){if(typeof e!=="string"&&Pn){return Pn.apply(this,arguments)}var i,r,o,s=this,a=e.indexOf(" ")
if(a>=0){i=d.trim(e.slice(a))
e=e.slice(0,a)}if(d.isFunction(t)){n=t
t=undefined}else if(t&&typeof t==="object"){r="POST"}if(s.length>0){d.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments
s.html(i?d("<div>").append(d.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])})}return this}
d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length}
var Mn=e.document.documentElement
function Rn(e){return d.isWindow(e)?e:e.nodeType===9&&e.defaultView}d.offset={setOffset:function(e,t,n){var i,r,o,s,a,u,f,l=d.css(e,"position"),c=d(e),p={}
if(l==="static"){e.style.position="relative"}a=c.offset()
o=d.css(e,"top")
u=d.css(e,"left")
f=(l==="absolute"||l==="fixed")&&(o+u).indexOf("auto")>-1
if(f){i=c.position()
s=i.top
r=i.left}else{s=parseFloat(o)||0
r=parseFloat(u)||0}if(d.isFunction(t)){t=t.call(e,n,a)}if(t.top!=null){p.top=t.top-a.top+s}if(t.left!=null){p.left=t.left-a.left+r}if("using"in t){t.using.call(e,p)}else{c.css(p)}}}
d.fn.extend({offset:function(e){if(arguments.length){return e===undefined?this:this.each(function(t){d.offset.setOffset(this,e,t)})}var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument
if(!o){return}t=o.documentElement
if(!d.contains(t,i)){return r}if(typeof i.getBoundingClientRect!==V){r=i.getBoundingClientRect()}n=Rn(o)
return{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}},position:function(){if(!this[0]){return}var e,t,n=this[0],i={top:0,left:0}
if(d.css(n,"position")==="fixed"){t=n.getBoundingClientRect()}else{e=this.offsetParent()
t=this.offset()
if(!d.nodeName(e[0],"html")){i=e.offset()}i.top+=d.css(e[0],"borderTopWidth",true)
i.left+=d.css(e[0],"borderLeftWidth",true)}return{top:t.top-i.top-d.css(n,"marginTop",true),left:t.left-i.left-d.css(n,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||Mn
while(e&&(!d.nodeName(e,"html")&&d.css(e,"position")==="static")){e=e.offsetParent}return e||Mn})}})
d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n
d.fn[t]=function(r){return F(this,function(t,r,o){var s=Rn(t)
if(o===undefined){return s?s[n]:t[r]}if(s){s.scrollTo(!i?o:e.pageXOffset,i?o:e.pageYOffset)}else{t[r]=o}},t,r,arguments.length,null)}})
d.each(["top","left"],function(e,t){d.cssHooks[t]=Nt(l.pixelPosition,function(e,n){if(n){n=kt(e,t)
return Tt.test(n)?d(e).position()[t]+"px":n}})})
d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){d.fn[i]=function(i,r){var o=arguments.length&&(n||typeof i!=="boolean"),s=n||(i===true||r===true?"margin":"border")
return F(this,function(t,n,i){var r
if(d.isWindow(t)){return t.document.documentElement["client"+e]}if(t.nodeType===9){r=t.documentElement
return Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])}return i===undefined?d.css(t,n,s):d.style(t,n,i,s)},t,o?i:undefined,o,null)}})})
d.fn.size=function(){return this.length}
d.fn.andSelf=d.fn.addBack
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return d})}var Wn=e.jQuery,$n=e.$
d.noConflict=function(t){if(e.$===d){e.$=$n}if(t&&e.jQuery===d){e.jQuery=Wn}return d}
if(typeof t===V){e.jQuery=e.$=d}return d})
__KA_module.exports = jQuery;
this.jQuery = jQuery;
this.$ = $;
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
jQuery.effects||function($,e){var t="ui-effects-"
$.effects={effect:{}};(function(e,t){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},a={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},o={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},f=s.support={},u=e("<p>")[0],l,c=e.each
u.style.cssText="background-color:rgba(1,1,1,.5)"
f.rgba=u.style.backgroundColor.indexOf("rgba")>-1
c(a,function(e,t){t.cache="_"+e
t.props.alpha={idx:3,type:"percent",def:1}})
function d(e,t,n){var r=o[t.type]||{}
if(e==null){return n||!t.def?null:t.def}e=r.floor?~~e:parseFloat(e)
if(isNaN(e)){return t.def}if(r.mod){return(e+r.mod)%r.mod}return 0>e?0:r.max<e?r.max:e}function h(t){var n=s(),r=n._rgba=[]
t=t.toLowerCase()
c(i,function(e,i){var s,o=i.re.exec(t),f=o&&i.parse(o),u=i.space||"rgba"
if(f){s=n[u](f)
n[a[u].cache]=s[a[u].cache]
r=n._rgba=s._rgba
return false}})
if(r.length){if(r.join()==="0,0,0,0"){e.extend(r,l.transparent)}return n}return l[t]}s.fn=e.extend(s.prototype,{parse:function(n,r,i,o){if(n===t){this._rgba=[null,null,null,null]
return this}if(n.jquery||n.nodeType){n=e(n).css(r)
r=t}var f=this,u=e.type(n),p=this._rgba=[]
if(r!==t){n=[n,r,i,o]
u="array"}if(u==="string"){return this.parse(h(n)||l._default)}if(u==="array"){c(a.rgba.props,function(e,t){p[t.idx]=d(n[t.idx],t)})
return this}if(u==="object"){if(n instanceof s){c(a,function(e,t){if(n[t.cache]){f[t.cache]=n[t.cache].slice()}})}else{c(a,function(t,r){var i=r.cache
c(r.props,function(e,t){if(!f[i]&&r.to){if(e==="alpha"||n[e]==null){return}f[i]=r.to(f._rgba)}f[i][t.idx]=d(n[e],t,true)})
if(f[i]&&e.inArray(null,f[i].slice(0,3))<0){f[i][3]=1
if(r.from){f._rgba=r.from(f[i])}}})}return this}},is:function(e){var t=s(e),n=true,r=this
c(a,function(e,i){var s,a=t[i.cache]
if(a){s=r[i.cache]||i.to&&i.to(r._rgba)||[]
c(i.props,function(e,t){if(a[t.idx]!=null){n=a[t.idx]===s[t.idx]
return n}})}return n})
return n},_space:function(){var e=[],t=this
c(a,function(n,r){if(t[r.cache]){e.push(n)}})
return e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=a[r],f=this.alpha()===0?s("transparent"):this,u=f[i.cache]||i.to(f._rgba),l=u.slice()
n=n[i.cache]
c(i.props,function(e,r){var i=r.idx,s=u[i],a=n[i],f=o[r.type]||{}
if(a===null){return}if(s===null){l[i]=a}else{if(f.mod){if(a-s>f.mod/2){s+=f.mod}else if(s-a>f.mod/2){s-=f.mod}}l[i]=d((a-s)*t+s,r)}})
return this[r](l)},blend:function(t){if(this._rgba[3]===1){return this}var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba
return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e})
if(n[3]===1){n.pop()
t="rgb("}return t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){if(e==null){e=t>2?1:0}if(t&&t<3){e=Math.round(e*100)+"%"}return e})
if(n[3]===1){n.pop()
t="hsl("}return t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop()
if(t){n.push(~~(r*255))}return"#"+e.map(n,function(e){e=(e||0).toString(16)
return e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}})
s.fn.parse.prototype=s.fn
function p(e,t,n){n=(n+1)%1
if(n*6<1){return e+(t-e)*n*6}if(n*2<1){return t}if(n*3<2){return e+(t-e)*(2/3-n)*6}return e}a.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),a=Math.min(t,n,r),o=s-a,f=s+a,u=f*.5,l,c
if(a===s){l=0}else if(t===s){l=60*(n-r)/o+360}else if(n===s){l=60*(r-t)/o+120}else{l=60*(t-n)/o+240}if(o===0){c=0}else if(u<=.5){c=o/f}else{c=o/(2-f)}return[Math.round(l)%360,c,u,i==null?1:i]}
a.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,a=2*r-s
return[Math.round(p(a,s,t+1/3)*255),Math.round(p(a,s,t)*255),Math.round(p(a,s,t-1/3)*255),i]}
c(a,function(n,i){var a=i.props,o=i.cache,f=i.to,u=i.from
s.fn[n]=function(n){if(f&&!this[o]){this[o]=f(this._rgba)}if(n===t){return this[o].slice()}var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,h=this[o].slice()
c(a,function(e,t){var n=l[i==="object"?e:t.idx]
if(n==null){n=h[t.idx]}h[t.idx]=d(n,t)})
if(u){r=s(u(h))
r[o]=h
return r}else{return s(h)}}
c(a,function(t,i){if(s.fn[t]){return}s.fn[t]=function(s){var a=e.type(s),o=t==="alpha"?this._hsla?"hsla":"rgba":n,f=this[o](),u=f[i.idx],l
if(a==="undefined"){return u}if(a==="function"){s=s.call(this,u)
a=e.type(s)}if(s==null&&i.empty){return this}if(a==="string"){l=r.exec(s)
if(l){s=u+parseFloat(l[2])*(l[1]==="+"?1:-1)}}f[i.idx]=s
return this[o](f)}})})
s.hook=function(t){var n=t.split(" ")
c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,a,o=""
if(r!=="transparent"&&(e.type(r)!=="string"||(i=h(r)))){r=s(i||r)
if(!f.rgba&&r._rgba[3]!==1){a=n==="backgroundColor"?t.parentNode:t
while((o===""||o==="transparent")&&a&&a.style){try{o=e.css(a,"backgroundColor")
a=a.parentNode}catch(u){}}r=r.blend(o&&o!=="transparent"?o:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(u){}}}
e.fx.step[n]=function(t){if(!t.colorInit){t.start=s(t.elem,n)
t.end=s(t.end)
t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})}
s.hook(n)
e.cssHooks.borderColor={expand:function(e){var t={}
c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e})
return t}}
l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var t=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,t){$.fx.step[t]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr){jQuery.style(e.elem,t,e.end)
e.setAttr=true}}})
function r(e){var t,n,r=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,i={}
if(r&&r.length&&r[0]&&r[r[0]]){n=r.length
while(n--){t=r[n]
if(typeof r[t]==="string"){i[$.camelCase(t)]=r[t]}}}else{for(t in r){if(typeof r[t]==="string"){i[t]=r[t]}}}return i}function i(e,t){var r={},i,s
for(i in t){s=t[i]
if(e[i]!==s){if(!n[i]){if($.fx.step[i]||!isNaN(parseFloat(s))){r[i]=s}}}}return r}if(!$.fn.addBack){$.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}$.effects.animateClass=function(e,n,s,a){var o=$.speed(n,s,a)
return this.queue(function(){var n=$(this),s=n.attr("class")||"",a,f=o.children?n.find("*").addBack():n
f=f.map(function(){var e=$(this)
return{el:e,start:r(this)}})
a=function(){$.each(t,function(t,r){if(e[r]){n[r+"Class"](e[r])}})}
a()
f=f.map(function(){this.end=r(this.el[0])
this.diff=i(this.start,this.end)
return this})
n.attr("class",s)
f=f.map(function(){var e=this,t=$.Deferred(),n=$.extend({},o,{queue:false,complete:function(){t.resolve(e)}})
this.el.animate(this.diff,n)
return t.promise()})
$.when.apply($,f.get()).done(function(){a()
$.each(arguments,function(){var e=this.el
$.each(this.diff,function(t){e.css(t,"")})})
o.complete.call(n[0])})})}
$.fn.extend({_addClass:$.fn.addClass,addClass:function(e,t,n,r){return t?$.effects.animateClass.call(this,{add:e},t,n,r):this._addClass(e)},_removeClass:$.fn.removeClass,removeClass:function(e,t,n,r){return arguments.length>1?$.effects.animateClass.call(this,{remove:e},t,n,r):this._removeClass.apply(this,arguments)},_toggleClass:$.fn.toggleClass,toggleClass:function(t,n,r,i,s){if(typeof n==="boolean"||n===e){if(!r){return this._toggleClass(t,n)}else{return $.effects.animateClass.call(this,n?{add:t}:{remove:t},r,i,s)}}else{return $.effects.animateClass.call(this,{toggle:t},n,r,i)}},switchClass:function(e,t,n,r,i){return $.effects.animateClass.call(this,{add:t,remove:e},n,r,i)}})})();(function(){$.extend($.effects,{version:"1.10.1",save:function(e,n){for(var r=0;r<n.length;r++){if(n[r]!==null){e.data(t+n[r],e[0].style[n[r]])}}},restore:function(n,r){var i,s
for(s=0;s<r.length;s++){if(r[s]!==null){i=n.data(t+r[s])
if(i===e){i=""}n.css(r[s],i)}}},setMode:function(e,t){if(t==="toggle"){t=e.is(":hidden")?"show":"hide"}return t},getBaseline:function(e,t){var n,r
switch(e[0]){case"top":n=0
break
case"middle":n=.5
break
case"bottom":n=1
break
default:n=e[0]/t.height}switch(e[1]){case"left":r=0
break
case"center":r=.5
break
case"right":r=1
break
default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper")){return e.parent()}var t={width:e.outerWidth(true),height:e.outerHeight(true),"float":e.css("float")},n=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:e.width(),height:e.height()},i=document.activeElement
try{i.id}catch(s){i=document.body}e.wrap(n)
if(e[0]===i||$.contains(e[0],i)){$(i).focus()}n=e.parent()
if(e.css("position")==="static"){n.css({position:"relative"})
e.css({position:"relative"})}else{$.extend(t,{position:e.css("position"),zIndex:e.css("z-index")})
$.each(["top","left","bottom","right"],function(n,r){t[r]=e.css(r)
if(isNaN(parseInt(t[r],10))){t[r]="auto"}})
e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}e.css(r)
return n.css(t).show()},removeWrapper:function(e){var t=document.activeElement
if(e.parent().is(".ui-effects-wrapper")){e.parent().replaceWith(e)
if(e[0]===t||$.contains(e[0],t)){$(t).focus()}}return e},setTransition:function(e,t,n,r){r=r||{}
$.each(t,function(t,i){var s=e.cssUnit(i)
if(s[0]>0){r[i]=s[0]*n+s[1]}})
return r}})
function n(e,t,n,r){if($.isPlainObject(e)){t=e
e=e.effect}e={effect:e}
if(t==null){t={}}if($.isFunction(t)){r=t
n=null
t={}}if(typeof t==="number"||$.fx.speeds[t]){r=n
n=t
t={}}if($.isFunction(n)){r=n
n=null}if(t){$.extend(e,t)}n=n||t.duration
e.duration=$.fx.off?0:typeof n==="number"?n:n in $.fx.speeds?$.fx.speeds[n]:$.fx.speeds._default
e.complete=r||t.complete
return e}function r(e){if(!e||typeof e==="number"||$.fx.speeds[e]){return true}return typeof e==="string"&&!$.effects.effect[e]}$.fn.extend({effect:function(){var e=n.apply(this,arguments),t=e.mode,r=e.queue,i=$.effects.effect[e.effect]
if($.fx.off||!i){if(t){return this[t](e.duration,e.complete)}else{return this.each(function(){if(e.complete){e.complete.call(this)}})}}function s(t){var n=$(this),r=e.complete,s=e.mode
function a(){if($.isFunction(r)){r.call(n[0])}if($.isFunction(t)){t()}}if(n.is(":hidden")?s==="hide":s==="show"){a()}else{i.call(n[0],e,a)}}return r===false?this.each(s):this.queue(r||"fx",s)},_show:$.fn.show,show:function(e){if(r(e)){return this._show.apply(this,arguments)}else{var t=n.apply(this,arguments)
t.mode="show"
return this.effect.call(this,t)}},_hide:$.fn.hide,hide:function(e){if(r(e)){return this._hide.apply(this,arguments)}else{var t=n.apply(this,arguments)
t.mode="hide"
return this.effect.call(this,t)}},__toggle:$.fn.toggle,toggle:function(e){if(r(e)||typeof e==="boolean"||$.isFunction(e)){return this.__toggle.apply(this,arguments)}else{var t=n.apply(this,arguments)
t.mode="toggle"
return this.effect.call(this,t)}},cssUnit:function(e){var t=this.css(e),n=[]
$.each(["em","px","%","pt"],function(e,r){if(t.indexOf(r)>0){n=[parseFloat(t),r]}})
return n}})})();(function(){var e={}
$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}})
$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4
while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}})
$.each(e,function(e,t){$.easing["easeIn"+e]=t
$.easing["easeOut"+e]=function(e){return 1-t(1-e)}
$.easing["easeInOut"+e]=function(e){return e<.5?t(e*2)/2:1-t(e*-2+2)/2}})})()}(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.mouse.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
__KA_require("./jquery.ui.widget.js");
(function($,e){var t=false
$(document).mouseup(function(){t=false})
$.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this
this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(true===$.data(t.target,e.widgetName+".preventClickEvent")){$.removeData(t.target,e.widgetName+".preventClickEvent")
t.stopImmediatePropagation()
return false}})
this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(e){if(t){return}this._mouseStarted&&this._mouseUp(e)
this._mouseDownEvent=e
var s=this,i=e.which===1,o=typeof this.options.cancel==="string"&&e.target.nodeName?$(e.target).closest(this.options.cancel).length:false
if(!i||o||!this._mouseCapture(e)){return true}this.mouseDelayMet=!this.options.delay
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=this._mouseStart(e)!==false
if(!this._mouseStarted){e.preventDefault()
return true}}if(true===$.data(e.target,this.widgetName+".preventClickEvent")){$.removeData(e.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(e){return s._mouseMove(e)}
this._mouseUpDelegate=function(e){return s._mouseUp(e)}
$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
e.preventDefault()
t=true
return true},_mouseMove:function(e){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button){return this._mouseUp(e)}if(this._mouseStarted){this._mouseDrag(e)
return e.preventDefault()}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==false
this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)}return!this._mouseStarted},_mouseUp:function(e){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
if(this._mouseStarted){this._mouseStarted=false
if(e.target===this._mouseDownEvent.target){$.data(e.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.touch-punch.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
__KA_require("./jquery.ui.mouse.js");
(function($){$.support.touch="ontouchend"in document
if(!$.support.touch){return}var e=$.ui.mouse.prototype,t=e._mouseInit,o
function u(e,t){if(e.originalEvent.touches.length>1){return}e.preventDefault()
var o=e.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents")
u.initMouseEvent(t,true,true,window,1,o.screenX,o.screenY,o.clientX,o.clientY,false,false,false,false,0,null)
e.target.dispatchEvent(u)}e._touchStart=function(e){var t=this
if(o||!t._mouseCapture(e.originalEvent.changedTouches[0])){return}o=true
t._touchMoved=false
u(e,"mouseover")
u(e,"mousemove")
u(e,"mousedown")}
e._touchMove=function(e){if(!o){return}this._touchMoved=true
u(e,"mousemove")}
e._touchEnd=function(e){if(!o){return}u(e,"mouseup")
u(e,"mouseout")
if(!this._touchMoved){u(e,"click")}o=false}
e._mouseInit=function(){var e=this
e.element.bind("touchstart",$.proxy(e,"_touchStart")).bind("touchmove",$.proxy(e,"_touchMove")).bind("touchend",$.proxy(e,"_touchEnd"))
t.call(e)}})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.widget.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function($,t){var e=0,i=Array.prototype.slice,n=$.cleanData
$.cleanData=function(t){for(var e=0,i;(i=t[e])!=null;e++){try{$(i).triggerHandler("remove")}catch(s){}}n(t)}
$.widget=function(t,e,i){var n,s,o,r,a={},u=t.split(".")[0]
t=t.split(".")[1]
n=u+"-"+t
if(!i){i=e
e=$.Widget}$.expr[":"][n.toLowerCase()]=function(t){return!!$.data(t,n)}
$[u]=$[u]||{}
s=$[u][t]
o=$[u][t]=function(t,e){if(!this._createWidget){return new o(t,e)}if(arguments.length){this._createWidget(t,e)}}
$.extend(o,s,{version:i.version,_proto:$.extend({},i),_childConstructors:[]})
r=new e
r.options=$.widget.extend({},r.options)
$.each(i,function(t,i){if(!$.isFunction(i)){a[t]=i
return}a[t]=function(){var n=function(){return e.prototype[t].apply(this,arguments)},s=function(i){return e.prototype[t].apply(this,i)}
return function(){var t=this._super,e=this._superApply,o
this._super=n
this._superApply=s
o=i.apply(this,arguments)
this._super=t
this._superApply=e
return o}}()})
o.prototype=$.widget.extend(r,{widgetEventPrefix:s?r.widgetEventPrefix:t},a,{constructor:o,namespace:u,widgetName:t,widgetFullName:n})
if(s){$.each(s._childConstructors,function(t,e){var i=e.prototype
$.widget(i.namespace+"."+i.widgetName,o,e._proto)})
delete s._childConstructors}else{e._childConstructors.push(o)}$.widget.bridge(t,o)}
$.widget.extend=function(e){var n=i.call(arguments,1),s=0,o=n.length,r,a
for(;s<o;s++){for(r in n[s]){a=n[s][r]
if(n[s].hasOwnProperty(r)&&a!==t){if($.isPlainObject(a)){e[r]=$.isPlainObject(e[r])?$.widget.extend({},e[r],a):$.widget.extend({},a)}else{e[r]=a}}}}return e}
$.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e
$.fn[e]=function(o){var r=typeof o==="string",a=i.call(arguments,1),u=this
o=!r&&a.length?$.widget.extend.apply(null,[o].concat(a)):o
if(r){this.each(function(){var i,n=$.data(this,s)
if(!n){return $.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}if(!$.isFunction(n[o])||o.charAt(0)==="_"){return $.error("no such method '"+o+"' for "+e+" widget instance")}i=n[o].apply(n,a)
if(i!==n&&i!==t){u=i&&i.jquery?u.pushStack(i.get()):i
return false}})}else{this.each(function(){var t=$.data(this,s)
if(t){t.option(o||{})._init()}else{$.data(this,s,new n(o,this))}})}return u}}
$.Widget=function(){}
$.Widget._childConstructors=[]
$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(t,i){i=$(i||this.defaultElement||this)[0]
this.element=$(i)
this.uuid=e++
this.eventNamespace="."+this.widgetName+this.uuid
this.options=$.widget.extend({},this.options,this._getCreateOptions(),t)
this.bindings=$()
this.hoverable=$()
this.focusable=$()
if(i!==this){$.data(i,this.widgetFullName,this)
this._on(true,this.element,{remove:function(t){if(t.target===i){this.destroy()}}})
this.document=$(i.style?i.ownerDocument:i.document||i)
this.window=$(this.document[0].defaultView||this.document[0].parentWindow)}this._create()
this._trigger("create",null,this._getCreateEventData())
this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName))
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled")
this.bindings.unbind(this.eventNamespace)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(e,i){var n=e,s,o,r
if(arguments.length===0){return $.widget.extend({},this.options)}if(typeof e==="string"){n={}
s=e.split(".")
e=s.shift()
if(s.length){o=n[e]=$.widget.extend({},this.options[e])
for(r=0;r<s.length-1;r++){o[s[r]]=o[s[r]]||{}
o=o[s[r]]}e=s.pop()
if(i===t){return o[e]===t?null:o[e]}o[e]=i}else{if(i===t){return this.options[e]===t?null:this.options[e]}n[e]=i}}this._setOptions(n)
return this},_setOptions:function(t){var e
for(e in t){this._setOption(e,t[e])}return this},_setOption:function(t,e){this.options[t]=e
if(t==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(t,e,i){var n,s=this
if(typeof t!=="boolean"){i=e
e=t
t=false}if(!i){i=e
e=this.element
n=this.widget()}else{e=n=$(e)
this.bindings=this.bindings.add(e)}$.each(i,function(i,o){function r(){if(!t&&(s.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?s[o]:o).apply(s,arguments)}if(typeof o!=="string"){r.guid=o.guid=o.guid||r.guid||$.guid++}var a=i.match(/^(\w+)\s*(.*)$/),u=a[1]+s.eventNamespace,d=a[2]
if(d){n.delegate(d,u,r)}else{e.bind(u,r)}})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return(typeof t==="string"?n[t]:t).apply(n,arguments)}var n=this
return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t)
this._on(t,{mouseenter:function(t){$(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){$(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t)
this._on(t,{focusin:function(t){$(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){$(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t]
i=i||{}
e=$.Event(e)
e.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase()
e.target=this.element[0]
s=e.originalEvent
if(s){for(n in s){if(!(n in e)){e[n]=s[n]}}}this.element.trigger(e,i)
return!($.isFunction(o)&&o.apply(this.element[0],[e].concat(i))===false||e.isDefaultPrevented())}}
$.each({show:"fadeIn",hide:"fadeOut"},function(t,e){$.Widget.prototype["_"+t]=function(i,n,s){if(typeof n==="string"){n={effect:n}}var o,r=!n?t:n===true||typeof n==="number"?e:n.effect||e
n=n||{}
if(typeof n==="number"){n={duration:n}}o=!$.isEmptyObject(n)
n.complete=s
if(n.delay){i.delay(n.delay)}if(o&&$.effects&&$.effects.effect[r]){i[t](n)}else if(r!==t&&i[r]){i[r](n.duration,n.easing,s)}else{i.queue(function(e){$(this)[t]()
if(s){s.call(i[0])}e()})}}})})(jQuery)
});
KAdefine("third_party/javascript-khansrc/localeplanet/icu.en.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var t={am_pm:["AM","PM"],day_name:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],era:["BC","AD"],era_name:["Before Christ","Anno Domini"],month_name:["January","February","March","April","May","June","July","August","September","October","November","December"],month_short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],order_full:"MDY",order_long:"MDY",order_medium:"MDY",order_short:"MDY"}
var e={decimal_separator:".",grouping_separator:",",minus:"-"}
var n={SHORT_PADDED_CENTURY:function(t){if(t){return(t.getMonth()+101+"").substring(1)+"/"+(t.getDate()+101+"").substring(1)+"/"+t.getFullYear()}},SHORT:function(t){if(t){return t.getMonth()+1+"/"+t.getDate()+"/"+(t.getFullYear()+"").substring(2)}},SHORT_NOYEAR:function(t){if(t){return t.getMonth()+1+"/"+t.getDate()}},SHORT_NODAY:function(t){if(t){return t.getMonth()+1+" "+(t.getFullYear()+"").substring(2)}},MEDIUM:function(e){if(e){return t.month_short[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}},MEDIUM_NOYEAR:function(e){if(e){return t.month_short[e.getMonth()]+" "+e.getDate()}},MEDIUM_WEEKDAY_NOYEAR:function(e){if(e){return t.day_short[e.getDay()]+" "+t.month_short[e.getMonth()]+" "+e.getDate()}},LONG_NODAY:function(e){if(e){return t.month_name[e.getMonth()]+" "+e.getFullYear()}},LONG:function(e){if(e){return t.month_name[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}},FULL:function(e){if(e){return t.day_name[e.getDay()]+","+" "+t.month_name[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}}}
window.icu=window.icu||new Object
var r=window.icu
r.getCountry=function(){return""}
r.getCountryName=function(){return""}
r.getDateFormat=function(t){var e={}
e.format=n[t]
return e}
r.getDateFormats=function(){return n}
r.getDateFormatSymbols=function(){return t}
r.getDecimalFormat=function(t){var n={}
n.format=function(n){var r=n<0?Math.abs(n).toFixed(t):n.toFixed(t)
var a=r.split(".")
s=a[0]
var o=a[1]
var u=/(\d+)(\d{3})/
while(u.test(s)){s=s.replace(u,"$1"+e["grouping_separator"]+"$2")}return(n<0?e["minus"]:"")+s+e["decimal_separator"]+o}
return n}
r.getDecimalFormatSymbols=function(){return e}
r.getIntegerFormat=function(){var t={}
t.format=function(t){var n=t<0?Math.abs(t).toString():t.toString()
var r=/(\d+)(\d{3})/
while(r.test(n)){n=n.replace(r,"$1"+e["grouping_separator"]+"$2")}return t<0?e["minus"]+n:n}
return t}
r.getLanguage=function(){return"en"}
r.getLanguageName=function(){return"English"}
r.getLocale=function(){return"en"}
r.getLocaleName=function(){return"English"}})()
__KA_module.exports = icu;
this.icu = icu;
});
KAdefine("third_party/javascript-khansrc/moment-khansrc/min/lang/en.js", function(require, module, exports) {
require("../../moment.js");
});
KAdefine("third_party/javascript-khansrc/moment-khansrc/moment.js", function(require, module, exports) {
(function(t){var e,n="2.0.0",i=Math.round,s,r={},a=typeof module!=="undefined"&&module.exports,u=/^\/?Date\((\-?\d+)/i,o=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,f=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,d=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,h=/\d\d?/,c=/\d{1,3}/,l=/\d{3}/,_=/\d{1,4}/,m=/[+\-]?\d{1,6}/,y=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,M=/Z|[\+\-]\d\d:?\d\d/i,D=/T/i,p=/[\+\-]?\d+(\.\d{1,3})?/,Y=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,g="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],T=/([\+\-]|\d\d)/gi,v="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),k={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},S={},F="DDD w W M D d".split(" "),b="M D H h m s w W".split(" "),H={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return x(this.year()%100,2)},YYYY:function(){return x(this.year(),4)},YYYYY:function(){return x(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return x(~~(this.milliseconds()/10),2)},SSS:function(){return x(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+"
if(t<0){t=-t
e="-"}return e+x(~~(t/60),2)+":"+x(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+"
if(t<0){t=-t
e="-"}return e+x(~~(10*t/6),4)},X:function(){return this.unix()}}
function L(t,e){return function(n){return x(t.call(this,n),e)}}function O(t){return function(e){return this.lang().ordinal(t.call(this,e))}}while(F.length){s=F.pop()
H[s+"o"]=O(H[s])}while(b.length){s=b.pop()
H[s+s]=L(H[s],2)}H.DDDD=L(H.DDD,3)
function z(){}function C(t){U(this,t)}function A(t){var e=this._data={},n=t.years||t.year||t.y||0,i=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,r=t.days||t.day||t.d||0,a=t.hours||t.hour||t.h||0,u=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,f=t.milliseconds||t.millisecond||t.ms||0
this._milliseconds=f+o*1e3+u*6e4+a*36e5
this._days=r+s*7
this._months=i+n*12
e.milliseconds=f%1e3
o+=Z(f/1e3)
e.seconds=o%60
u+=Z(o/60)
e.minutes=u%60
a+=Z(u/60)
e.hours=a%24
r+=Z(a/24)
r+=s*7
e.days=r%30
i+=Z(r/30)
e.months=i%12
n+=Z(i/12)
e.years=n}function U(t,e){for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}return t}function Z(t){if(t<0){return Math.ceil(t)}else{return Math.floor(t)}}function x(t,e){var n=t+""
while(n.length<e){n="0"+n}return n}function W(t,e,n){var i=e._milliseconds,s=e._days,r=e._months,a
if(i){t._d.setTime(+t+i*n)}if(s){t.date(t.date()+s*n)}if(r){a=t.date()
t.date(1).month(t.month()+r*n).date(Math.min(a,t.daysInMonth()))}}function P(t){return Object.prototype.toString.call(t)==="[object Array]"}function V(t,e){var n=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),s=0,r
for(r=0;r<n;r++){if(~~t[r]!==~~e[r]){s++}}return s+i}z.prototype={set:function(t){var e,n
for(n in t){e=t[n]
if(typeof e==="function"){this[n]=e}else{this["_"+n]=e}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var n,i,s,r
if(!this._monthsParse){this._monthsParse=[]}for(n=0;n<12;n++){if(!this._monthsParse[n]){i=e([2e3,n])
s="^"+this.months(i,"")+"|^"+this.monthsShort(i,"")
this._monthsParse[n]=new RegExp(s.replace(".",""),"i")}if(this._monthsParse[n].test(t)){return n}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t]
if(!e&&this._longDateFormat[t.toUpperCase()]){e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)})
this._longDateFormat[t]=e}return e},meridiem:function(t,e,n){if(t>11){return n?"pm":"PM"}else{return n?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t]
return typeof n==="function"?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,i){var s=this._relativeTime[n]
return typeof s==="function"?s(t,e,n,i):s.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"]
return typeof n==="function"?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return ne(t,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}}
function E(t,e){e.abbr=t
if(!r[t]){r[t]=new z}r[t].set(e)
return r[t]}function J(t){if(!t){return e.fn._lang}if(!r[t]&&a){require("./lang/"+t)}return r[t]}function N(t){if(t.match(/\[.*\]/)){return t.replace(/^\[|\]$/g,"")}return t.replace(/\\/g,"")}function I(t){var e=t.match(o),n,i
for(n=0,i=e.length;n<i;n++){if(H[e[n]]){e[n]=H[e[n]]}else{e[n]=N(e[n])}}return function(s){var r=""
for(n=0;n<i;n++){r+=typeof e[n].call==="function"?e[n].call(s,t):e[n]}return r}}function X(t,e){var n=5
function i(e){return t.lang().longDateFormat(e)||e}while(n--&&f.test(e)){e=e.replace(f,i)}if(!S[e]){S[e]=I(e)}return S[e](t)}function j(t){switch(t){case"DDDD":return l
case"YYYY":return _
case"YYYYY":return m
case"S":case"SS":case"SSS":case"DDD":return c
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return y
case"X":return p
case"Z":case"ZZ":return M
case"T":return D
case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return h
default:return new RegExp(t.replace("\\",""))}}function R(t,e,n){var i,s,r=n._a
switch(t){case"M":case"MM":r[1]=e==null?0:~~e-1
break
case"MMM":case"MMMM":i=J(n._l).monthsParse(e)
if(i!=null){r[1]=i}else{n._isValid=false}break
case"D":case"DD":case"DDD":case"DDDD":if(e!=null){r[2]=~~e}break
case"YY":r[0]=~~e+(~~e>68?1900:2e3)
break
case"YYYY":case"YYYYY":r[0]=~~e
break
case"a":case"A":n._isPm=(e+"").toLowerCase()==="pm"
break
case"H":case"HH":case"h":case"hh":r[3]=~~e
break
case"m":case"mm":r[4]=~~e
break
case"s":case"ss":r[5]=~~e
break
case"S":case"SS":case"SSS":r[6]=~~(("0."+e)*1e3)
break
case"X":n._d=new Date(parseFloat(e)*1e3)
break
case"Z":case"ZZ":n._useUTC=true
i=(e+"").match(T)
if(i&&i[1]){n._tzh=~~i[1]}if(i&&i[2]){n._tzm=~~i[2]}if(i&&i[0]==="+"){n._tzh=-n._tzh
n._tzm=-n._tzm}break}if(e==null){n._isValid=false}}function q(t){var e,n,i=[]
if(t._d){return}for(e=0;e<7;e++){t._a[e]=i[e]=t._a[e]==null?e===2?1:0:t._a[e]}i[3]+=t._tzh||0
i[4]+=t._tzm||0
n=new Date(0)
if(t._useUTC){n.setUTCFullYear(i[0],i[1],i[2])
n.setUTCHours(i[3],i[4],i[5],i[6])}else{n.setFullYear(i[0],i[1],i[2])
n.setHours(i[3],i[4],i[5],i[6])}t._d=n}function B(t){var e=t._f.match(o),n=t._i,i,s
t._a=[]
for(i=0;i<e.length;i++){s=(j(e[i]).exec(n)||[])[0]
if(s){n=n.slice(n.indexOf(s)+s.length)}if(H[e[i]]){R(e[i],s,t)}}if(t._isPm&&t._a[3]<12){t._a[3]+=12}if(t._isPm===false&&t._a[3]===12){t._a[3]=0}q(t)}function G(t){var e,n,i,s=99,r,a,u
while(t._f.length){e=U({},t)
e._f=t._f.pop()
B(e)
n=new C(e)
if(n.isValid()){i=n
break}u=V(e._a,n.toArray())
if(u<s){s=u
i=n}}U(t,i)}function K(t){var e,n=t._i
if(Y.exec(n)){t._f="YYYY-MM-DDT"
for(e=0;e<4;e++){if(w[e][1].exec(n)){t._f+=w[e][0]
break}}if(M.exec(n)){t._f+=" Z"}B(t)}else{t._d=new Date(n)}}function Q(e){var n=e._i,i=u.exec(n)
if(n===t){e._d=new Date}else if(i){e._d=new Date(+i[1])}else if(typeof n==="string"){K(e)}else if(P(n)){e._a=n.slice(0)
q(e)}else{e._d=n instanceof Date?new Date(+n):new Date(n)}}function te(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function ee(t,e,n){var s=i(Math.abs(t)/1e3),r=i(s/60),a=i(r/60),u=i(a/24),o=i(u/365),f=s<45&&["s",s]||r===1&&["m"]||r<45&&["mm",r]||a===1&&["h"]||a<22&&["hh",a]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",i(u/30)]||o===1&&["y"]||["yy",o]
f[2]=e
f[3]=t>0
f[4]=n
return te.apply({},f)}function ne(t,n,i){var s=i-n,r=i-t.day()
if(r>s){r-=7}if(r<s-7){r+=7}return Math.ceil(e(t).add("d",r).dayOfYear()/7)}function ie(t){var n=t._i,i=t._f
if(n===null||n===""){return null}if(typeof n==="string"){t._i=n=J().preparse(n)}if(e.isMoment(n)){t=U({},n)
t._d=new Date(+n._d)}else if(i){if(P(i)){G(t)}else{B(t)}}else{Q(t)}return new C(t)}e=function(t,e,n){return ie({_i:t,_f:e,_l:n,_isUTC:false})}
e.utc=function(t,e,n){return ie({_useUTC:true,_isUTC:true,_l:n,_i:t,_f:e})}
e.unix=function(t){return e(t*1e3)}
e.duration=function(t,n){var i=e.isDuration(t),s=typeof t==="number",r=i?t._data:s?{}:t,a
if(s){if(n){r[n]=t}else{r.milliseconds=t}}a=new A(r)
if(i&&t.hasOwnProperty("_lang")){a._lang=t._lang}return a}
e.version=n
e.defaultFormat=g
e.lang=function(t,n){var i
if(!t){return e.fn._lang._abbr}if(n){E(t,n)}else if(!r[t]){J(t)}e.duration.fn._lang=e.fn._lang=J(t)}
e.langData=function(t){if(t&&t._lang&&t._lang._abbr){t=t._lang._abbr}return J(t)}
e.isMoment=function(t){return t instanceof C}
e.isDuration=function(t){return t instanceof A}
e.fn=C.prototype={clone:function(){return e(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return e.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){if(this._isValid==null){if(this._a){this._isValid=!V(this._a,(this._isUTC?e.utc(this._a):e(this._a)).toArray())}else{this._isValid=!isNaN(this._d.getTime())}}return!!this._isValid},utc:function(){this._isUTC=true
return this},local:function(){this._isUTC=false
return this},format:function(t){var n=X(this,t||e.defaultFormat)
return this.lang().postformat(n)},add:function(t,n){var i
if(typeof t==="string"){i=e.duration(+n,t)}else{i=e.duration(t,n)}W(this,i,1)
return this},subtract:function(t,n){var i
if(typeof t==="string"){i=e.duration(+n,t)}else{i=e.duration(t,n)}W(this,i,-1)
return this},diff:function(t,n,i){var s=this._isUTC?e(t).utc():e(t).local(),r=(this.zone()-s.zone())*6e4,a,u
if(n){n=n.replace(/s$/,"")}if(n==="year"||n==="month"){a=(this.daysInMonth()+s.daysInMonth())*432e5
u=(this.year()-s.year())*12+(this.month()-s.month())
u+=(this-e(this).startOf("month")-(s-e(s).startOf("month")))/a
if(n==="year"){u=u/12}}else{a=this-s-r
u=n==="second"?a/1e3:n==="minute"?a/6e4:n==="hour"?a/36e5:n==="day"?a/864e5:n==="week"?a/6048e5:a}return i?u:Z(u)},from:function(t,n){return e.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(t){return this.from(e(),t)},calendar:function(){var t=this.diff(e().startOf("day"),"days",true),n=t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"
return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var t=this.year()
return t%4===0&&t%100!==0||t%400===0},isDST:function(){return this.zone()<e([this.year()]).zone()||this.zone()<e([this.year(),5]).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return t==null?e:this.add({d:t-e})},startOf:function(t){t=t.replace(/s$/,"")
switch(t){case"year":this.month(0)
case"month":this.date(1)
case"week":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}if(t==="week"){this.day(0)}return this},endOf:function(t){return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(t,n){n=typeof n!=="undefined"?n:"millisecond"
return+this.clone().startOf(n)>+e(t).startOf(n)},isBefore:function(t,n){n=typeof n!=="undefined"?n:"millisecond"
return+this.clone().startOf(n)<+e(t).startOf(n)},isSame:function(t,n){n=typeof n!=="undefined"?n:"millisecond"
return+this.clone().startOf(n)===+e(t).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return e.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var n=i((e(this).startOf("day")-e(this).startOf("year"))/864e5)+1
return t==null?n:this.add("d",t-n)},isoWeek:function(t){var e=ne(this,1,4)
return t==null?e:this.add("d",(t-e)*7)},week:function(t){var e=this.lang().week(this)
return t==null?e:this.add("d",(t-e)*7)},lang:function(e){if(e===t){return this._lang}else{this._lang=J(e)
return this}}}
function se(t,n){e.fn[t]=e.fn[t+"s"]=function(t){var e=this._isUTC?"UTC":""
if(t!=null){this._d["set"+e+n](t)
return this}else{return this._d["get"+e+n]()}}}for(s=0;s<v.length;s++){se(v[s].toLowerCase().replace(/s$/,""),v[s])}se("year","FullYear")
e.fn.days=e.fn.day
e.fn.weeks=e.fn.week
e.fn.isoWeeks=e.fn.isoWeek
e.duration.fn=A.prototype={weeks:function(){return Z(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(t){var e=+this,n=ee(e,!t,this.lang())
if(t){n=this.lang().pastFuture(e,n)}return this.lang().postformat(n)},lang:e.fn.lang}
function re(t){e.duration.fn[t]=function(){return this._data[t]}}function ae(t,n){e.duration.fn["as"+t]=function(){return+this/n}}for(s in k){if(k.hasOwnProperty(s)){ae(s,k[s])
re(s.toLowerCase())}}ae("Weeks",6048e5)
e.lang("en",{ordinal:function(t){var e=t%10,n=~~(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th"
return t+n}})
if(a){module.exports=e}if(typeof ender==="undefined"){this["moment"]=e}if(typeof define==="function"&&define.amd){define("moment",[],function(){return e})}}).call(this)
this.moment = moment;
require("./min/lang/en.js");
});
KAdefine("third_party/javascript-khansrc/raven-js/raven.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
if(window.KA_ENABLE_RAVENJS){!function(e){function n(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function t(e){return"undefined"==typeof e}var r={},i=e.TraceKit,o=[].slice,c="?"
r.noConflict=function(){return e.TraceKit=i,r},r.wrap=function(e){function n(){try{return e.apply(this,arguments)}catch(n){throw r.report(n),n}}return n},r.report=function(){function t(e){l(),p.push(e)}function i(e){for(var n=p.length-1;n>=0;--n)p[n]===e&&p.splice(n,1)}function c(e,t){var i=null
if(!t||r.collectWindowErrors){for(var c in p)if(n(p,c))try{p[c].apply(null,[e].concat(o.call(arguments,2)))}catch(a){i=a}if(i)throw i}}function a(e,n,t){var i=null
if(h)r.computeStackTrace.augmentStackTraceWithInitialElement(h,n,t,e),i=h,h=null,g=null
else{var o={url:n,line:t}
o.func=r.computeStackTrace.guessFunctionName(o.url,o.line),o.context=r.computeStackTrace.gatherContext(o.url,o.line),i={mode:"onerror",message:e,url:document.location.href,stack:[o],useragent:navigator.userAgent}}return c(i,"from window.onerror"),s?s.apply(this,arguments):!1}function l(){f!==!0&&(s=e.onerror,e.onerror=a,f=!0)}function u(n){var t=o.call(arguments,1)
if(h){if(g===n)return
var i=h
h=null,g=null,c.apply(null,[i,null].concat(t))}var a=r.computeStackTrace(n)
throw h=a,g=n,e.setTimeout(function(){g===n&&(h=null,g=null,c.apply(null,[a,null].concat(t)))},a.incomplete?2e3:0),n}var s,f,p=[],g=null,h=null
return u.subscribe=t,u.unsubscribe=i,u}(),r.computeStackTrace=function(){function i(n){function t(){try{return new e.XMLHttpRequest}catch(n){return new e.ActiveXObject("Microsoft.XMLHTTP")}}if(!r.remoteFetching)return""
try{var i=t()
return i.open("GET",n,!1),i.send(""),i.responseText}catch(o){return""}}function o(e){if(!n(b,e)){var t="";-1!==e.indexOf(document.domain)&&(t=i(e)),b[e]=t?t.split("\n"):[]}return b[e]}function a(e,n){var r,i=/function ([^(]*)\(([^)]*)\)/,a=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,l="",u=10,s=o(e)
if(!s.length)return c
for(var f=0;u>f;++f)if(l=s[n-f]+l,!t(l)){if(r=a.exec(l))return r[1]
if(r=i.exec(l))return r[1]}return c}function l(e,n){var i=o(e)
if(!i.length)return null
var c=[],a=Math.floor(r.linesOfContext/2),l=a+r.linesOfContext%2,u=Math.max(0,n-a-1),s=Math.min(i.length,n+l-1)
n-=1
for(var f=u;s>f;++f)t(i[f])||c.push(i[f])
return c.length>0?c:null}function u(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function s(e){return u(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function f(e,n){for(var t,r,i=0,c=n.length;c>i;++i)if((t=o(n[i])).length&&(t=t.join("\n"),r=e.exec(t)))return{url:n[i],line:t.substring(0,r.index).split("\n").length,column:r.index-t.lastIndexOf("\n",r.index)-1}
return null}function p(e,n,t){var r,i=o(n),c=new RegExp("\\b"+u(e)+"\\b")
return t-=1,i&&i.length>t&&(r=c.exec(i[t]))?r.index:null}function g(n){for(var t,r,i,o,c=[e.location.href],a=document.getElementsByTagName("script"),l=""+n,p=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,g=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,h=0;h<a.length;++h){var d=a[h]
d.src&&c.push(d.src)}if(i=p.exec(l)){var m=i[1]?"\\s+"+i[1]:"",v=i[2].split(",").join("\\s*,\\s*")
t=u(i[3]).replace(/;$/,";?"),r=new RegExp("function"+m+"\\s*\\(\\s*"+v+"\\s*\\)\\s*{\\s*"+t+"\\s*}")}else r=new RegExp(u(l).replace(/\s+/g,"\\s+"))
if(o=f(r,c))return o
if(i=g.exec(l)){var x=i[1]
if(t=s(i[2]),r=new RegExp("on"+x+"=[\\'\"]\\s*"+t+"\\s*[\\'\"]","i"),o=f(r,c[0]))return o
if(r=new RegExp(t),o=f(r,c))return o}return null}function h(e){if(!e.stack)return null
for(var n,t,r=/^\s*at (?:((?:\[object object\])?\S+) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,i=/^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,o=e.stack.split("\n"),u=[],s=/^(.*) is undefined$/.exec(e.message),f=0,g=o.length;g>f;++f){if(n=i.exec(o[f]))t={url:n[3],func:n[1]||c,args:n[2]?n[2].split(","):"",line:+n[4],column:n[5]?+n[5]:null}
else{if(!(n=r.exec(o[f])))continue
t={url:n[2],func:n[1]||c,line:+n[3],column:n[4]?+n[4]:null}}!t.func&&t.line&&(t.func=a(t.url,t.line)),t.line&&(t.context=l(t.url,t.line)),u.push(t)}return u[0]&&u[0].line&&!u[0].column&&s&&(u[0].column=p(s[1],u[0].url,u[0].line)),u.length?{mode:"stack",name:e.name,message:e.message,url:document.location.href,stack:u,useragent:navigator.userAgent}:null}function d(e){for(var n,t=e.stacktrace,r=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,i=t.split("\n"),o=[],c=0,u=i.length;u>c;c+=2)if(n=r.exec(i[c])){var s={line:+n[1],column:+n[2],func:n[3]||n[4],args:n[5]?n[5].split(","):[],url:n[6]}
if(!s.func&&s.line&&(s.func=a(s.url,s.line)),s.line)try{s.context=l(s.url,s.line)}catch(f){}s.context||(s.context=[i[c+1]]),o.push(s)}return o.length?{mode:"stacktrace",name:e.name,message:e.message,url:document.location.href,stack:o,useragent:navigator.userAgent}:null}function m(t){var r=t.message.split("\n")
if(r.length<4)return null
var i,c,u,p,g=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,h=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,d=/^\s*Line (\d+) of function script\s*$/i,m=[],v=document.getElementsByTagName("script"),x=[]
for(c in v)n(v,c)&&!v[c].src&&x.push(v[c])
for(c=2,u=r.length;u>c;c+=2){var w=null
if(i=g.exec(r[c]))w={url:i[2],func:i[3],line:+i[1]}
else if(i=h.exec(r[c])){w={url:i[3],func:i[4]}
var y=+i[1],E=x[i[2]-1]
if(E&&(p=o(w.url))){p=p.join("\n")
var b=p.indexOf(E.innerText)
b>=0&&(w.line=y+p.substring(0,b).split("\n").length)}}else if(i=d.exec(r[c])){var k=e.location.href.replace(/#.*$/,""),S=i[1],C=new RegExp(s(r[c+1]))
p=f(C,[k]),w={url:k,line:p?p.line:S,func:""}}if(w){w.func||(w.func=a(w.url,w.line))
var R=l(w.url,w.line),O=R?R[Math.floor(R.length/2)]:null
w.context=R&&O.replace(/^\s*/,"")===r[c+1].replace(/^\s*/,"")?R:[r[c+1]],m.push(w)}}return m.length?{mode:"multiline",name:t.name,message:r[0],url:document.location.href,stack:m,useragent:navigator.userAgent}:null}function v(e,n,t,r){var i={url:n,line:t}
if(i.url&&i.line){e.incomplete=!1,i.func||(i.func=a(i.url,i.line)),i.context||(i.context=l(i.url,i.line))
var o=/ '([^']+)' /.exec(r)
if(o&&(i.column=p(o[1],i.url,i.line)),e.stack.length>0&&e.stack[0].url===i.url){if(e.stack[0].line===i.line)return!1
if(!e.stack[0].line&&e.stack[0].func===i.func)return e.stack[0].line=i.line,e.stack[0].context=i.context,!1}return e.stack.unshift(i),e.partial=!0,!0}return e.incomplete=!0,!1}function x(e,n){for(var t,i,o,l=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,u=[],s={},f=!1,h=x.caller;h&&!f;h=h.caller)if(h!==w&&h!==r.report){if(i={url:null,func:c,line:null,column:null},h.name?i.func=h.name:(t=l.exec(h.toString()))&&(i.func=t[1]),o=g(h)){i.url=o.url,i.line=o.line,i.func===c&&(i.func=a(i.url,i.line))
var d=/ '([^']+)' /.exec(e.message||e.description)
d&&(i.column=p(d[1],o.url,o.line))}s[""+h]?f=!0:s[""+h]=!0,u.push(i)}n&&u.splice(0,n)
var m={mode:"callers",name:e.name,message:e.message,url:document.location.href,stack:u,useragent:navigator.userAgent}
return v(m,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),m}function w(e,n){var t=null
n=null==n?0:+n
try{if(t=d(e))return t}catch(r){if(E)throw r}try{if(t=h(e))return t}catch(r){if(E)throw r}try{if(t=m(e))return t}catch(r){if(E)throw r}try{if(t=x(e,n+1))return t}catch(r){if(E)throw r}return{mode:"failed"}}function y(e){e=(null==e?0:+e)+1
try{throw new Error}catch(n){return w(n,e+1)}return null}var E=!1,b={}
return w.augmentStackTraceWithInitialElement=v,w.guessFunctionName=a,w.gatherContext=l,w.ofCaller=y,w}(),r.remoteFetching||(r.remoteFetching=!0),r.collectWindowErrors||(r.collectWindowErrors=!0),(!r.linesOfContext||r.linesOfContext<1)&&(r.linesOfContext=7),e.TraceKit=r}(window),function(e,n){"use strict"
function t(e,n){var t,r
n=n||{},e="raven"+e.substr(0,1).toUpperCase()+e.substr(1),document.createEvent?(t=document.createEvent("HTMLEvents"),t.initEvent(e,!0,!0)):(t=document.createEventObject(),t.eventType=e)
for(r in n)n.hasOwnProperty(r)&&(t[r]=n[r])
if(document.createEvent)document.dispatchEvent(t)
else try{document.fireEvent("on"+t.eventType.toLowerCase(),t)}catch(i){}}function r(e){for(var n=A.exec(e),t={},r=6;r--;)t[j[r]]=n[r]||""
return t}function i(e){return"undefined"==typeof e}function o(e){return"function"==typeof e}function c(e){return"string"==typeof e}function a(e,n){var t,r
if(i(e.length))for(t in e)e.hasOwnProperty(t)&&n.call(null,t,e[t])
else if(r=e.length)for(t=0;r>t;t++)n.call(null,t,e[t])}function l(){if(_)return _
var e=["sentry_version=4","sentry_client=raven-js/"+T.VERSION]
return b&&e.push("sentry_key="+b),_="?"+e.join("&")}function u(e,n){var r=[]
e.stack&&e.stack.length&&a(e.stack,function(e,n){var t=s(n)
t&&r.push(t)}),t("handle",{stackInfo:e,options:n}),p(e.name,e.message,e.url,e.lineno,r,n)}function s(e){if(e.url){var n,t={filename:e.url,lineno:e.line,colno:e.column,"function":e.func||"?"},r=f(e)
if(r){var i=["pre_context","context_line","post_context"]
for(n=3;n--;)t[i[n]]=r[n]}return t.in_app=!(!R.includePaths.test(t.filename)||/(Raven|TraceKit)\./.test(t["function"])||/raven\.(min\.)js$/.test(t.filename)),t}}function f(e){if(e.context&&R.fetchContext){for(var n=e.context,t=~~(n.length/2),r=n.length,o=!1;r--;)if(n[r].length>300){o=!0
break}if(o){if(i(e.column))return
return[[],n[t].substr(e.column,50),[]]}return[n.slice(0,t),n[t],n.slice(t+1)]}}function p(e,n,t,r,i,o){var c,a
n&&(R.ignoreErrors.test(n)||(i&&i.length?(c={frames:i},t=t||i[0].filename):t&&(c={frames:[{filename:t,lineno:r}]}),R.ignoreUrls&&R.ignoreUrls.test(t)||(!R.whitelistUrls||R.whitelistUrls.test(t))&&(a=r?n+" at "+r:n,d(g({exception:{type:e,value:n},stacktrace:c,culprit:t,message:a},o)))))}function g(e,n){return n?(a(n,function(n,t){e[n]=t}),e):e}function h(){var e={url:document.location.href,headers:{"User-Agent":navigator.userAgent}}
return document.referrer&&(e.headers.Referer=document.referrer),e}function d(e){v()&&(e=g({project:k,logger:R.logger,site:R.site,platform:"javascript",request:h()},e),e.tags=g(R.tags,e.tags),e.extra=g(R.extra,e.extra),e.tags||delete e.tags,e.extra||delete e.extra,E&&(e.user=E),o(R.dataCallback)&&(e=R.dataCallback(e)),(!o(R.shouldSendCallback)||R.shouldSendCallback(e))&&m(e))}function m(e){var n=new Image,r=y+l()+"&sentry_data="+encodeURIComponent(JSON.stringify(e))
n.onload=function(){t("success",{data:e,src:r})},n.onerror=n.onabort=function(){t("failure",{data:e,src:r})},n.src=r}function v(){return C?y?!0:(e.console&&console.error&&console.error("Error: Raven has not been configured."),!1):!1}function x(e){for(var n=[],t=e.length;t--;)n[t]=c(e[t])?e[t].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"):e[t].source
return new RegExp(n.join("|"),"i")}var w,y,E,b,k,S=e.Raven,C=!(!e.JSON||!e.JSON.stringify),R={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,tags:{},extra:{}},O=TraceKit.noConflict()
O.remoteFetching=!1
var _,T={VERSION:"1.1.0",TraceKit:O,afterLoad:function(){var n=e.RavenConfig
n&&this.config(n.dsn,n.config).install()},noConflict:function(){return e.Raven=S,T},config:function(e,n){var t=r(e),i=t.path.lastIndexOf("/"),o=t.path.substr(1,i)
return n&&a(n,function(e,n){R[e]=n}),R.ignoreErrors.push("Script error."),R.ignoreErrors.push("Script error"),R.ignoreErrors=x(R.ignoreErrors),R.ignoreUrls=R.ignoreUrls.length?x(R.ignoreUrls):!1,R.whitelistUrls=R.whitelistUrls.length?x(R.whitelistUrls):!1,R.includePaths=x(R.includePaths),b=t.user,k=~~t.path.substr(i+1),y="//"+t.host+(t.port?":"+t.port:"")+"/"+o+"api/"+k+"/store/",t.protocol&&(y=t.protocol+":"+y),R.fetchContext&&(O.remoteFetching=!0),R.linesOfContext&&(O.linesOfContext=R.linesOfContext),O.collectWindowErrors=!!R.collectWindowErrors,T},install:function(){return v()?(O.report.subscribe(u),T):void 0},context:function(e,t,r){return o(e)&&(r=t||[],t=e,e=n),T.wrap(e,t).apply(this,r)},wrap:function(e,t){function r(){for(var n=[],r=arguments.length;r--;)n[r]=T.wrap(e,arguments[r])
try{return t.apply(this,n)}catch(i){throw T.captureException(i,e),i}}if(i(t)&&!o(e))return e
if(o(e)&&(t=e,e=n),!o(t))return t
if(t.__raven__)return t
for(var c in t)t.hasOwnProperty(c)&&(r[c]=t[c])
return r.__raven__=!0,r},uninstall:function(){return O.report.unsubscribe(u),T},captureException:function(e,n){if(c(e))return T.captureMessage(e,n)
w=e
try{O.report(e,n)}catch(t){if(e!==t)throw t}return T},captureMessage:function(e,n){return d(g({message:e},n)),T},setUser:function(e){return E=e,T},lastException:function(){return w}},j="source protocol user host port path".split(" "),A=/^(?:(\w+):)?\/\/(\w+)@([\w\.]+)(?::(\d+))?(\/.*)/
T.afterLoad(),e.Raven=T,"function"==typeof define&&define.amd&&define("raven",[],function(){return T.noConflict()})}(window),function(e,n,t){"use strict"
if(t){var r=t.event.add
t.event.add=function(e,i,o,c,a){var l
return o.handler?(l=o.handler,o.handler=n.wrap(o.handler)):(l=o,o=n.wrap(o)),o.guid=l.guid?l.guid:l.guid=t.guid++,r.call(this,e,i,o,c,a)}
var i=t.fn.ready
t.fn.ready=function(e){return i.call(this,n.wrap(e))}
var o=t.ajax
t.ajax=function(e,r){var i,c=["complete","error","success"]
for("object"==typeof e&&(r=e,e=void 0),r=r||{};i=c.pop();)t.isFunction(r[i])&&(r[i]=n.wrap(r[i]))
try{return o.call(this,e,r)}catch(a){throw n.captureException(a),a}}}}(this,Raven,window.jQuery),function(e,n){"use strict"
var t=function(t){var r=e[t]
e[t]=function(){var e=[].slice.call(arguments),t=e[0]
return"function"==typeof t&&(e[0]=n.wrap(t)),r.apply?r.apply(this,e):r(e[0],e[1])}}
t("setTimeout"),t("setInterval")}(this,Raven)
var tags={}
if(window.KA){tags.version=KA.version}Raven.config("https://0d3382554dd24dc998a5937351b12379@app.getsentry.com/15744",{tags:tags,ignoreErrors:["top.GLOBALS","originalCreateNotification","canvas.contentDocument","MyApp_RemoveAllHighlights","http://tt.epicplay.com","Can't find variable: ZiteReader","jigsaw is not defined","ComboSearch is not defined","http://loading.retry.widdit.com/","atomicFindClose","fb_xd_fragment","bmi_SafeAddOnload","EBCallBackMessageReceived","conduitPage","Script error."],ignoreUrls:[/graph\.facebook\.com/i,/connect\.facebook\.net\/en_US\/all\.js/i,/eatdifferent\.com\.woopra-ns\.com/i,/static\.woopra\.com\/js\/woopra\.js/i,/extensions\//i,/^chrome:\/\//i,/127\.0\.0\.1:4001\/isrunning/i,/webappstoolbarba\.texthelp\.com\//i,/metrics\.itunes\.apple\.com\.edgesuite\.net\//i]})
Raven.install()}else{window.Raven=null}
__KA_module.exports = Raven;
});
KAdefine("third_party/javascript-khansrc/react-compiled/react.prod.js", function(__KA_require, __KA_module, __KA_exports) {
!function(e){function t(n){if(r[n])return r[n].exports
var o=r[n]={exports:{},id:n,loaded:!1}
return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.reactWebpackJsonp
window.reactWebpackJsonp=function(i,a){for(var s,u,l=0,c=[];l<i.length;l++)u=i[l],o[u]&&c.push.apply(c,o[u]),o[u]=0
for(s in a)e[s]=a[s]
for(n&&n(i,a);c.length;)c.shift().call(null,t)
a[0]&&(r[0]=0,t(0))}
var r={},o={0:0}
return t.e=function(e,n){if(0===o[e])return n.call(null,t)
if(void 0!==o[e])o[e].push(n)
else{o[e]=[n]
var r=document.getElementsByTagName("head")[0],i=document.createElement("script")
i.type="text/javascript",i.charset="utf-8",i.src=t.p+""+e+"."+({0:"react",1:"react-art"}[e]||e)+".prod.js",r.appendChild(i)}},t.m=e,t.c=r,t.p="",t(0)}([function(e,t,n){window.React=n(115)},function(e){"use strict"
var t=function(e,t,n,r,o,i,a,s){if(!e){var u
if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[n,r,o,i,a,s],c=0
u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw u.framesToPop=1,u}}
e.exports=t},function(e){function t(e){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined")
for(var t=Object(e),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var o=arguments[r]
if(null!=o){var i=Object(o)
for(var a in i)n.call(i,a)&&(t[a]=i[a])}}return t}e.exports=t},function(e,t,n){"use strict"
var r=n(47),o=n(20),i=(n(5),{key:!0,ref:!0}),a=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i}
a.prototype._isReactElement=!0,a.createElement=function(e,t,n){var s,u={},l=null,c=null
if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key
for(s in t)t.hasOwnProperty(s)&&!i.hasOwnProperty(s)&&(u[s]=t[s])}var p=arguments.length-2
if(1===p)u.children=n
else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2]
u.children=d}if(e.defaultProps){var h=e.defaultProps
for(s in h)"undefined"==typeof u[s]&&(u[s]=h[s])}return new a(e,l,c,o.current,r.current,u)},a.createFactory=function(e){var t=a.createElement.bind(null,e)
return t.type=e,t},a.cloneAndReplaceProps=function(e,t){var n=new a(e.type,e.key,e.ref,e._owner,e._context,t)
return n},a.isValidElement=function(e){var t=!(!e||!e._isReactElement)
return t},e.exports=a},,function(e){var t=function(){}
e.exports=t},function(e){"use strict"
var t=!("undefined"==typeof window||!window.document||!window.document.createElement),n={canUseDOM:t,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen,isInWorker:!t}
e.exports=n},function(e,t,n){"use strict"
var r=n(29),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o}
e.exports=a},function(e,t,n){"use strict"
function r(){m(x.ReactReconcileTransaction&&C)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=x.ReactReconcileTransaction.getPooled()}function i(e,t,n){r(),C.batchedUpdates(e,t,n)}function a(e,t){return e._mountDepth-t._mountDepth}function s(e){var t=e.dirtyComponentsLength
m(t===v.length),v.sort(a)
for(var n=0;t>n;n++){var r=v[n]
if(r.isMounted()){var o=r._pendingCallbacks
if(r._pendingCallbacks=null,r.performUpdateIfNecessary(e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r)}}}function u(e,t){return m(!t||"function"==typeof t),r(),C.isBatchingUpdates?(v.push(e),void(t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]))):void C.batchedUpdates(u,e,t)}function l(e,t){m(C.isBatchingUpdates),y.enqueue(e,t),g=!0}var c=n(44),p=n(14),d=(n(20),n(16)),f=n(36),h=n(2),m=n(1),v=(n(5),[]),y=c.getPooled(),g=!1,C=null,E={initialize:function(){this.dirtyComponentsLength=v.length},close:function(){this.dirtyComponentsLength!==v.length?(v.splice(0,this.dirtyComponentsLength),D()):v.length=0}},b={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},_=[E,b]
h(o.prototype,f.Mixin,{getTransactionWrappers:function(){return _},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,x.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return f.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o)
var D=d.measure("ReactUpdates","flushBatchedUpdates",function(){for(;v.length||g;){if(v.length){var e=o.getPooled()
e.perform(s,null,e),o.release(e)}if(g){g=!1
var t=y
y=c.getPooled(),t.notifyAll(),c.release(t)}}}),M={injectReconcileTransaction:function(e){m(e),x.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){m(e),m("function"==typeof e.batchedUpdates),m("boolean"==typeof e.isBatchingUpdates),C=e}},x={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:u,flushBatchedUpdates:D,injection:M,asap:l}
e.exports=x},function(e){var t=function(e){var t
for(t in e)if(e.hasOwnProperty(t))return t
return null}
e.exports=t},function(e,t,n){"use strict"
var r=n(34),o=n(12),i=n(1),a={getDOMNode:function(){return i(this.isMounted()),r.isNullComponentID(this._rootNodeID)?null:o.getNode(this._rootNodeID)}}
e.exports=a},function(e,t,n){"use strict"
function r(e){var t=e._owner||null
return t&&t.constructor&&t.constructor.displayName?" Check the render method of `"+t.constructor.displayName+"`.":""}function o(e,t,n){for(var r in t)t.hasOwnProperty(r)&&N("function"==typeof t[r])}function i(e,t){var n=A.hasOwnProperty(t)?A[t]:null
U.hasOwnProperty(t)&&N(n===I.OVERRIDE_BASE),e.hasOwnProperty(t)&&N(n===I.DEFINE_MANY||n===I.DEFINE_MANY_MERGED)}function a(e){var t=e._compositeLifeCycleState
N(e.isMounted()||t===L.MOUNTING),N(null==h.current),N(t!==L.UNMOUNTING)}function s(e,t){if(t){N(!g.isValidFactory(t)),N(!m.isValidElement(t))
var n=e.prototype
t.hasOwnProperty(P)&&k.mixins(e,t.mixins)
for(var r in t)if(t.hasOwnProperty(r)&&r!==P){var o=t[r]
if(i(n,r),k.hasOwnProperty(r))k[r](e,o)
else{var a=A.hasOwnProperty(r),s=n.hasOwnProperty(r),u=o&&o.__reactDontBind,l="function"==typeof o,d=l&&!a&&!s&&!u
if(d)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[r]=o,n[r]=o
else if(s){var f=A[r]
N(a&&(f===I.DEFINE_MANY_MERGED||f===I.DEFINE_MANY)),f===I.DEFINE_MANY_MERGED?n[r]=c(n[r],o):f===I.DEFINE_MANY&&(n[r]=p(n[r],o))}else n[r]=o}}}}function u(e,t){if(t)for(var n in t){var r=t[n]
if(t.hasOwnProperty(n)){var o=n in k
N(!o)
var i=n in e
N(!i),e[n]=r}}}function l(e,t){return N(e&&t&&"object"==typeof e&&"object"==typeof t),O(t,function(t,n){N(void 0===e[n]),e[n]=t}),e}function c(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments)
return null==n?r:null==r?n:l(n,r)}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}var d=n(19),f=n(47),h=n(20),m=n(3),v=(n(49),n(34)),y=n(144),g=n(28),C=n(78),E=n(16),b=n(79),_=n(81),D=(n(80),n(8)),M=n(2),x=n(37),N=n(1),T=n(29),w=n(9),O=(n(38),n(96)),R=n(61),P=(n(5),w({mixins:null})),I=T({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),S=[],A={mixins:I.DEFINE_MANY,statics:I.DEFINE_MANY,propTypes:I.DEFINE_MANY,contextTypes:I.DEFINE_MANY,childContextTypes:I.DEFINE_MANY,getDefaultProps:I.DEFINE_MANY_MERGED,getInitialState:I.DEFINE_MANY_MERGED,getChildContext:I.DEFINE_MANY_MERGED,render:I.DEFINE_ONCE,componentWillMount:I.DEFINE_MANY,componentDidMount:I.DEFINE_MANY,componentWillReceiveProps:I.DEFINE_MANY,shouldComponentUpdate:I.DEFINE_ONCE,componentWillUpdate:I.DEFINE_MANY,componentDidUpdate:I.DEFINE_MANY,componentWillUnmount:I.DEFINE_MANY,updateComponent:I.OVERRIDE_BASE},k={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)s(e,t[n])},childContextTypes:function(e,t){o(e,t,_.childContext),e.childContextTypes=M({},e.childContextTypes,t)},contextTypes:function(e,t){o(e,t,_.context),e.contextTypes=M({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?c(e.getDefaultProps,t):t},propTypes:function(e,t){o(e,t,_.prop),e.propTypes=M({},e.propTypes,t)},statics:function(e,t){u(e,t)}},L=T({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null}),U={construct:function(){d.Mixin.construct.apply(this,arguments),C.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this.context=null,this._compositeLifeCycleState=null},isMounted:function(){return d.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==L.MOUNTING},mountComponent:E.measure("ReactCompositeComponent","mountComponent",function(e,t,n){d.Mixin.mountComponent.call(this,e,t,n),this._compositeLifeCycleState=L.MOUNTING,this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.context=this._processContext(this._currentElement._context),this.props=this._processProps(this.props),this.state=this.getInitialState?this.getInitialState():null,N("object"==typeof this.state&&!Array.isArray(this.state)),this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=x(this._renderValidatedComponent(),this._currentElement.type),this._compositeLifeCycleState=null
var r=this._renderedComponent.mountComponent(e,t,n+1)
return this.componentDidMount&&t.getReactMountReady().enqueue(this.componentDidMount,this),r}),unmountComponent:function(){this._compositeLifeCycleState=L.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._renderedComponent.unmountComponent(),this._renderedComponent=null,d.Mixin.unmountComponent.call(this)},setState:function(e,t){N("object"==typeof e||null==e),this.replaceState(M({},this._pendingState||this.state,e),t)},replaceState:function(e,t){a(this),this._pendingState=e,this._compositeLifeCycleState!==L.MOUNTING&&D.enqueueUpdate(this,t)},_processContext:function(e){var t=null,n=this.constructor.contextTypes
if(n){t={}
for(var r in n)t[r]=e[r]}return t},_processChildContext:function(e){{var t=this.getChildContext&&this.getChildContext()
this.constructor.displayName||"ReactCompositeComponent"}if(t){N("object"==typeof this.constructor.childContextTypes)
for(var n in t)N(n in this.constructor.childContextTypes)
return M({},e,t)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.constructor.displayName
for(var i in e)if(e.hasOwnProperty(i)){var a=e[i](t,i,o,n)
if(a instanceof Error){r(this)}}},performUpdateIfNecessary:function(e){var t=this._compositeLifeCycleState
if(t!==L.MOUNTING&&t!==L.RECEIVING_PROPS&&(null!=this._pendingElement||null!=this._pendingState||this._pendingForceUpdate)){var n=this.context,r=this.props,o=this._currentElement
null!=this._pendingElement&&(o=this._pendingElement,n=this._processContext(o._context),r=this._processProps(o.props),this._pendingElement=null,this._compositeLifeCycleState=L.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(r,n)),this._compositeLifeCycleState=null
var i=this._pendingState||this.state
this._pendingState=null
var a=this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(r,i,n)
a?(this._pendingForceUpdate=!1,this._performComponentUpdate(o,r,i,n,e)):(this._currentElement=o,this.props=r,this.state=i,this.context=n,this._owner=o._owner)}},_performComponentUpdate:function(e,t,n,r,o){var i=this._currentElement,a=this.props,s=this.state,u=this.context
this.componentWillUpdate&&this.componentWillUpdate(t,n,r),this._currentElement=e,this.props=t,this.state=n,this.context=r,this._owner=e._owner,this.updateComponent(o,i),this.componentDidUpdate&&o.getReactMountReady().enqueue(this.componentDidUpdate.bind(this,a,s,u),this)},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&d.Mixin.receiveComponent.call(this,e,t)},updateComponent:E.measure("ReactCompositeComponent","updateComponent",function(e,t){d.Mixin.updateComponent.call(this,e,t)
var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent()
if(R(r,o))n.receiveComponent(o,e)
else{var i=this._rootNodeID,a=n._rootNodeID
n.unmountComponent(),this._renderedComponent=x(o,this._currentElement.type)
var s=this._renderedComponent.mountComponent(i,e,this._mountDepth+1)
d.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a,s)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState
N(this.isMounted()||t===L.MOUNTING),N(t!==L.UNMOUNTING&&null==h.current),this._pendingForceUpdate=!0,D.enqueueUpdate(this,e)},_renderValidatedComponent:E.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var e,t=f.current
f.current=this._processChildContext(this._currentElement._context),h.current=this
try{e=this.render(),null===e||e===!1?(e=v.getEmptyComponent(),v.registerNullComponentID(this._rootNodeID)):v.deregisterNullComponentID(this._rootNodeID)}finally{f.current=t,h.current=null}return N(m.isValidElement(e)),e}),_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(e)){var t=this.__reactAutoBindMap[e]
this[e]=this._bindAutoBindMethod(y.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this,n=e.bind(t)
return n}},F=function(){}
M(F.prototype,d.Mixin,C.Mixin,b.Mixin,U)
var B={LifeCycle:L,Base:F,createClass:function(e){var t=function(){}
t.prototype=new F,t.prototype.constructor=t,S.forEach(s.bind(null,t)),s(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),N(t.prototype.render)
for(var n in A)t.prototype[n]||(t.prototype[n]=null)
return g.wrapFactory(m.createFactory(t))},injection:{injectMixin:function(e){S.push(e)}}}
e.exports=B},function(e,t,n){"use strict"
function r(e){var t=E(e)
return t&&A.getID(t)}function o(e){var t=i(e)
if(t)if(T.hasOwnProperty(t)){var n=T[t]
n!==e&&(_(!u(n,t)),T[t]=e)}else T[t]=e
return t}function i(e){return e&&e.getAttribute&&e.getAttribute(N)||""}function a(e,t){var n=i(e)
n!==t&&delete T[n],e.setAttribute(N,t),T[t]=e}function s(e){return T.hasOwnProperty(e)&&u(T[e],e)||(T[e]=A.findReactNodeByID(e)),T[e]}function u(e,t){if(e){_(i(e)===t)
var n=A.findReactContainerForID(t)
if(n&&g(n,e))return!0}return!1}function l(e){delete T[e]}function c(e){var t=T[e]
return t&&u(t,e)?void(S=t):!1}function p(e){S=null,v.traverseAncestors(e,c)
var t=S
return S=null,t}var d=n(24),f=n(26),h=(n(20),n(3)),m=n(28),v=n(27),y=n(16),g=n(89),C=n(53),E=n(93),b=n(37),_=n(1),D=n(61),M=(n(5),m.wrapCreateElement(h.createElement)),x=v.SEPARATOR,N=d.ID_ATTRIBUTE_NAME,T={},w=1,O=9,R={},P={},I=[],S=null,A={_instancesByReactRootID:R,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){var o=t.props
return A.scrollMonitor(n,function(){e.replaceProps(o,r)}),e},_registerComponent:function(e,t){_(t&&(t.nodeType===w||t.nodeType===O)),f.ensureScrollValueMonitoring()
var n=A.registerContainer(t)
return R[n]=e,n},_renderNewRootComponent:y.measure("ReactMount","_renderNewRootComponent",function(e,t,n){var r=b(e,null),o=A._registerComponent(r,t)
return r.mountComponentIntoNode(o,t,n),r}),render:function(e,t,n){_(h.isValidElement(e))
var o=R[r(t)]
if(o){var i=o._currentElement
if(D(i,e))return A._updateRootComponent(o,e,t,n)
A.unmountComponentAtNode(t)}var a=E(t),s=a&&A.isRenderedByReact(a),u=s&&!o,l=A._renderNewRootComponent(e,t,u)
return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=M(e,t)
return A.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n)
return _(r),A.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=r(e)
return t&&(t=v.getReactRootIDFromNodeID(t)),t||(t=v.createReactRootID()),P[t]=e,t},unmountComponentAtNode:function(e){var t=r(e),n=R[t]
return n?(A.unmountComponentFromNode(n,e),delete R[t],delete P[t],!0):!1},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===O&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=v.getReactRootIDFromNodeID(e),n=P[t]
return n},findReactNodeByID:function(e){var t=A.findReactContainerForID(e)
return A.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1
var t=A.getID(e)
return t?t.charAt(0)===x:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(A.isRenderedByReact(t))return t
t=t.parentNode}return null},findComponentRoot:function(e,t){var n=I,r=0,o=p(t)||e
for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var s=A.getID(a)
s?t===s?i=a:v.isAncestorIDOf(s,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,_(!1)},getReactRootID:r,getID:o,setID:a,getNode:s,purgeID:l}
A.renderComponent=C("ReactMount","renderComponent","render",this,A.render),e.exports=A},function(e){function t(e){return function(){return e}}function n(){}n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,n){"use strict"
var r=n(1),o=function(e){var t=this
if(t.instancePool.length){var n=t.instancePool.pop()
return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this
if(n.instancePool.length){var r=n.instancePool.pop()
return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this
if(r.instancePool.length){var o=r.instancePool.pop()
return r.call(o,e,t,n),o}return new r(e,t,n)},s=function(e,t,n,r,o){var i=this
if(i.instancePool.length){var a=i.instancePool.pop()
return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},u=function(e){var t=this
r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e
return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=u,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:s}
e.exports=d},function(e,t,n){"use strict"
function r(e){return i.markNonLegacyFactory(o.createFactory(e))}var o=n(3),i=(n(49),n(28)),a=n(96),s=a({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r)
e.exports=s},function(e){"use strict"
function t(e,t,n){return n}var n={enableMeasure:!1,storedMeasure:t,measure:function(e,t,n){return n},injection:{injectMeasure:function(e){n.storedMeasure=e}}}
e.exports=n},,function(e,t,n){"use strict"
function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=n(24),i=n(54),a=n(97),s=(n(5),a(function(e){return i(e)+'="'})),u={createMarkupForID:function(e){return s(o.ID_ATTRIBUTE_NAME)+i(e)+'"'},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return""
var n=o.getAttributeName[e]
return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?i(n):s(n)+i(t)+'"'}return o.isCustomAttribute(e)?null==t?"":s(e)+i(t)+'"':null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t]
if(i)i(e,n)
else if(r(t,n))this.deleteValueForProperty(e,t)
else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n)
else{var a=o.getPropertyName[t]
o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t]
if(n)n(e,void 0)
else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t])
else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r)
o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}}
e.exports=u},function(e,t,n){"use strict"
var r=n(3),o=n(78),i=n(8),a=n(2),s=n(1),u=n(29),l=u({MOUNTED:null,UNMOUNTED:null}),c=!1,p=null,d=null,f={injection:{injectEnvironment:function(e){s(!c),d=e.mountImageIntoNode,p=e.unmountIDFromEnvironment,f.BackendIDOperations=e.BackendIDOperations,c=!0}},LifeCycle:l,BackendIDOperations:null,Mixin:{isMounted:function(){return this._lifeCycleState===l.MOUNTED},setProps:function(e,t){var n=this._pendingElement||this._currentElement
this.replaceProps(a({},n.props,e),t)},replaceProps:function(e,t){s(this.isMounted()),s(0===this._mountDepth),this._pendingElement=r.cloneAndReplaceProps(this._pendingElement||this._currentElement,e),i.enqueueUpdate(this,t)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement
this._pendingElement=r.cloneAndReplaceProps(n,a({},n.props,e)),i.enqueueUpdate(this,t)},construct:function(e){this.props=e.props,this._owner=e._owner,this._lifeCycleState=l.UNMOUNTED,this._pendingCallbacks=null,this._currentElement=e,this._pendingElement=null},mountComponent:function(e,t,n){s(!this.isMounted())
var r=this._currentElement.ref
if(null!=r){var i=this._currentElement._owner
o.addComponentAsRefTo(this,r,i)}this._rootNodeID=e,this._lifeCycleState=l.MOUNTED,this._mountDepth=n},unmountComponent:function(){s(this.isMounted())
var e=this._currentElement.ref
null!=e&&o.removeComponentAsRefFrom(this,e,this._owner),p(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=l.UNMOUNTED},receiveComponent:function(e,t){s(this.isMounted()),this._pendingElement=e,this.performUpdateIfNecessary(t)},performUpdateIfNecessary:function(e){if(null!=this._pendingElement){var t=this._currentElement,n=this._pendingElement
this._currentElement=n,this.props=n.props,this._owner=n._owner,this._pendingElement=null,this.updateComponent(e,t)}},updateComponent:function(e,t){var n=this._currentElement;(n._owner!==t._owner||n.ref!==t.ref)&&(null!=t.ref&&o.removeComponentAsRefFrom(this,t.ref,t._owner),null!=n.ref&&o.addComponentAsRefTo(this,n.ref,n._owner))},mountComponentIntoNode:function(e,t,n){var r=i.ReactReconcileTransaction.getPooled()
r.perform(this._mountComponentIntoNode,this,e,t,r,n),i.ReactReconcileTransaction.release(r)},_mountComponentIntoNode:function(e,t,n,r){var o=this.mountComponent(e,n,0)
d(o,t,r)},isOwnedBy:function(e){return this._owner===e},getSiblingByRef:function(e){var t=this._owner
return t&&t.refs?t.refs[e]:null}}}
e.exports=f},function(e){"use strict"
var t={current:null}
e.exports=t},function(e,t,n){"use strict"
function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n
var r=this.constructor.Interface
for(var o in r)if(r.hasOwnProperty(o)){var i=r[o]
this[o]=i?i(n):n[o]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1
this.isDefaultPrevented=s?a.thatReturnsTrue:a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=n(14),i=n(2),a=n(13),s=n(58),u={type:null,target:s,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null}
i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent
e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface
for(var t in e)this[t]=null
this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=u,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype)
i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),e.exports=r},,,function(e,t,n){"use strict"
function r(e,t){return(e&t)===t}var o=n(1),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},u=e.DOMMutationMethods||{}
e.isCustomAttribute&&s._isCustomAttributeFunctions.push(e.isCustomAttribute)
for(var l in t){o(!s.isStandardName.hasOwnProperty(l)),s.isStandardName[l]=!0
var c=l.toLowerCase()
if(s.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l]
s.getPossibleStandardName[p]=l,s.getAttributeName[l]=p}else s.getAttributeName[l]=c
s.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,s.getMutationMethod[l]=u.hasOwnProperty(l)?u[l]:null
var d=t[l]
s.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),s.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),s.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),s.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),s.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),s.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),s.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!s.mustUseAttribute[l]||!s.mustUseProperty[l]),o(s.mustUseProperty[l]||!s.hasSideEffects[l]),o(!!s.hasBooleanValue[l]+!!s.hasNumericValue[l]+!!s.hasOverloadedBooleanValue[l]<=1)}}},a={},s={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<s._isCustomAttributeFunctions.length;t++){var n=s._isCustomAttributeFunctions[t]
if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e]
return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i}
e.exports=s},function(e,t,n){"use strict"
function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n]
return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o)
i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r)
o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function s(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function u(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,s)}var p=n(7),d=n(30),f=n(52),h=n(55),m=p.PropagationPhases,v=d.getListener,y={accumulateTwoPhaseDispatches:u,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l}
e.exports=y},function(e,t,n){"use strict"
function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=n(7),i=n(30),a=n(72),s=n(145),u=n(87),l=n(2),c=n(60),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},s,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),s=a.registrationNameDependencies[e],u=o.topLevelTypes,l=0,p=s.length;p>l;l++){var d=s[l]
i.hasOwnProperty(d)&&i[d]||(d===u.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",n):d===u.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",n)),i[u.topBlur]=!0,i[u.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=u.refreshScrollValues
v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners})
e.exports=v},function(e,t,n){"use strict"
function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function s(e){return e?e.substr(0,e.lastIndexOf(f)):""}function u(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e
for(var n=e.length+h,r=n;r<t.length&&!o(t,r);r++);return t.substr(0,r)}function l(e,t){var n=Math.min(e.length,t.length)
if(0===n)return""
for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a
else if(e.charAt(a)!==t.charAt(a))break
var s=e.substr(0,r)
return d(i(s)),s}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t)
var l=a(t,e)
d(l||a(e,t))
for(var c=0,p=l?s:u,f=e;;f=p(f,t)){var h
if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break
d(c++<m)}}var p=n(84),d=n(1),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1)
return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t)
i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:u,isAncestorIDOf:a,SEPARATOR:f}
e.exports=v},function(e,t,n){"use strict"
function r(e,t){if("function"==typeof t)for(var n in t)if(t.hasOwnProperty(n)){var r=t[n]
if("function"==typeof r){var o=r.bind(t)
for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i])
e[n]=o}else e[n]=r}}var o=(n(20),n(1)),i=(n(38),n(5),{}),a={},s={}
s.wrapCreateFactory=function(e){var t=function(t){return"function"!=typeof t?e(t):t.isReactNonLegacyFactory?e(t.type):t.isReactLegacyFactory?e(t.type):t}
return t},s.wrapCreateElement=function(e){var t=function(t){if("function"!=typeof t)return e.apply(this,arguments)
var n
return t.isReactNonLegacyFactory?(n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):t.isReactLegacyFactory?(t._isMockFunction&&(t.type._mockedReactClassConstructor=t),n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):t.apply(null,Array.prototype.slice.call(arguments,1))}
return t},s.wrapFactory=function(e){o("function"==typeof e)
var t=function(){return e.apply(this,arguments)}
return r(t,e.type),t.isReactLegacyFactory=i,t.type=e.type,t},s.markNonLegacyFactory=function(e){return e.isReactNonLegacyFactory=a,e},s.isValidFactory=function(e){return"function"==typeof e&&e.isReactLegacyFactory===i},s._isLegacyCallWarningEnabled=!0,e.exports=s},function(e,t,n){"use strict"
var r=n(1),o=function(e){var t,n={}
r(e instanceof Object&&!Array.isArray(e))
for(t in e)e.hasOwnProperty(t)&&(n[t]=t)
return n}
e.exports=o},function(e,t,n){"use strict"
var r=n(72),o=n(45),i=n(52),a=n(55),s=n(1),u={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e)
n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){s(!n||"function"==typeof n)
var r=u[t]||(u[t]={})
r[e]=n},getListener:function(e,t){var n=u[t]
return n&&n[e]},deleteListener:function(e,t){var n=u[t]
n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,n,o){for(var a,s=r.plugins,u=0,l=s.length;l>u;u++){var c=s[u]
if(c){var p=c.extractEvents(e,t,n,o)
p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l
l=null,a(e,c),s(!l)},__purge:function(){u={}},__getListenerBank:function(){return u}}
e.exports=d},function(e,t,n){"use strict"
var r=n(18),o=n(45),i=n(74),a=n(19),s=n(11),u=n(47),l=n(20),c=n(3),p=(n(49),n(15)),d=n(48),f=n(143),h=n(27),m=n(28),v=n(12),y=n(51),g=n(16),C=n(82),E=n(150),b=n(85),_=n(2),D=n(53),M=n(98)
f.inject()
var x=c.createElement,N=c.createFactory
x=m.wrapCreateElement(x),N=m.wrapCreateFactory(N)
var T=g.measure("React","render",v.render),w={Children:{map:i.map,forEach:i.forEach,count:i.count,only:M},DOM:p,PropTypes:C,initializeTouchEvents:function(e){o.useTouchEvents=e},createClass:s.createClass,createElement:x,createFactory:N,constructAndRenderComponent:v.constructAndRenderComponent,constructAndRenderComponentByID:v.constructAndRenderComponentByID,render:T,renderToString:E.renderToString,renderToStaticMarkup:E.renderToStaticMarkup,unmountComponentAtNode:v.unmountComponentAtNode,isValidClass:m.isValidFactory,isValidElement:c.isValidElement,withContext:u.withContext,__spread:_,renderComponent:D("React","renderComponent","render",this,T),renderComponentToString:D("React","renderComponentToString","renderToString",this,E.renderToString),renderComponentToStaticMarkup:D("React","renderComponentToStaticMarkup","renderToStaticMarkup",this,E.renderToStaticMarkup),isValidComponent:D("React","isValidComponent","isValidElement",this,c.isValidElement)}
"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({Component:a,CurrentOwner:l,DOMComponent:d,DOMPropertyOperations:r,InstanceHandles:h,Mount:v,MultiChild:y,TextComponent:b})
w.version="0.12.0-rc1",e.exports=w},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(21),i=n(58),a={view:function(e){if(e.view)return e.view
var t=i(e)
if(null!=t&&t.window===t)return t
var n=t.ownerDocument
return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}}
o.augmentClass(r,a),e.exports=r},function(e,t,n){"use strict"
var r=n(90),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}}
e.exports=o},function(e,t,n){"use strict"
function r(){return l(s),s()}function o(e){c[e]=!0}function i(e){delete c[e]}function a(e){return c[e]}var s,u=n(3),l=n(1),c={},p={injectEmptyComponent:function(e){s=u.createFactory(e)}},d={deregisterNullComponentID:i,getEmptyComponent:r,injection:p,isNullComponentID:a,registerNullComponentID:o}
e.exports=d},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(32),i=n(87),a=n(57),s={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button
return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}}
o.augmentClass(r,s),e.exports=r},function(e,t,n){"use strict"
var r=n(1),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,s,u){r(!this.isInTransaction())
var l,c
try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,s,u),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n]
try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction())
for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],s=this.wrapperInitData[n]
try{o=!0,s!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,s),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(u){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}}
e.exports=i},function(e,t,n){"use strict"
function r(e,t){var n
return n="string"==typeof e.type?o.createInstanceForTag(e.type,e.props,t):new e.type(e.props),n.construct(e),n}{var o=(n(5),n(3),n(28),n(77))
n(34)}e.exports=r},function(e,t,n){"use strict"
function r(e){o(e&&!/[^a-z0-9_]/.test(e))}var o=n(1)
e.exports=r},,,,,,function(e,t,n){"use strict"
function r(){this._callbacks=null,this._contexts=null}var o=n(14),i=n(2),a=n(1)
i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts
if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null
for(var n=0,r=e.length;r>n;n++)e[n].call(t[n])
e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),e.exports=r},function(e,t,n){"use strict"
function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs
if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o])
else n&&t(e,n,r)}function s(e,t,n){e.currentTarget=m.Mount.getNode(n)
var r=t(e,n)
return e.currentTarget=null,r}function u(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs
if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n
return null}function c(e){var t=l(e)
return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs
h(!Array.isArray(t))
var r=t?t(e,n):null
return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=n(7),h=n(1),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,y={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:s,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1}
e.exports=y},function(e,t,n){"use strict"
function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function s(e){this.props.checkedLink.requestChange(e.target.checked)}var u=n(82),l=n(1),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t){return!e[t]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),s):e.props.onChange}}
e.exports=p},function(e,t,n){"use strict"
var r=n(2),o={current:{},withContext:function(e,t){var n,i=o.current
o.current=r({},i,e)
try{n=t()}finally{o.current=i}return n}}
e.exports=o},function(e,t,n){"use strict"
function r(e){e&&(g(null==e.children||null==e.dangerouslySetInnerHTML),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=f.findReactContainerForID(e)
if(o){var i=o.nodeType===x?o.ownerDocument:o
b(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){O.call(w,e)||(g(T.test(e)),w[e]=!0)}function a(e){i(e),this._tag=e,this.tagName=e.toUpperCase()}var s=n(71),u=n(24),l=n(18),c=n(10),p=n(19),d=n(26),f=n(12),h=n(51),m=n(16),v=n(2),y=n(54),g=n(1),C=(n(60),n(9)),E=(n(38),d.deleteListener),b=d.listenTo,_=d.registrationNameModules,D={string:!0,number:!0},M=C({style:null}),x=1,N={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},T=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,w={},O={}.hasOwnProperty
a.displayName="ReactDOMComponent",a.Mixin={mountComponent:m.measure("ReactDOMComponent","mountComponent",function(e,t,n){p.Mixin.mountComponent.call(this,e,t,n),r(this.props)
var o=N[this._tag]?"":"</"+this._tag+">"
return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t)+o}),_createOpenTagMarkupAndPutListeners:function(e){var t=this.props,n="<"+this._tag
for(var r in t)if(t.hasOwnProperty(r)){var i=t[r]
if(null!=i)if(_.hasOwnProperty(r))o(this._rootNodeID,r,i,e)
else{r===M&&(i&&(i=t.style=v({},t.style)),i=s.createMarkupForStyles(i))
var a=l.createMarkupForProperty(r,i)
a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">"
var u=l.createMarkupForID(this._rootNodeID)
return n+" "+u+">"},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML
if(null!=t){if(null!=t.__html)return t.__html}else{var n=D[typeof this.props.children]?this.props.children:null,r=null!=n?null:this.props.children
if(null!=n)return y(n)
if(null!=r){var o=this.mountChildren(r,e)
return o.join("")}}return""},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&p.Mixin.receiveComponent.call(this,e,t)},updateComponent:m.measure("ReactDOMComponent","updateComponent",function(e,t){r(this._currentElement.props),p.Mixin.updateComponent.call(this,e,t),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e)}),_updateDOMProperties:function(e,t){var n,r,i,a=this.props
for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===M){var s=e[n]
for(r in s)s.hasOwnProperty(r)&&(i=i||{},i[r]="")}else _.hasOwnProperty(n)?E(this._rootNodeID,n):(u.isStandardName[n]||u.isCustomAttribute(n))&&p.BackendIDOperations.deletePropertyByID(this._rootNodeID,n)
for(n in a){var l=a[n],c=e[n]
if(a.hasOwnProperty(n)&&l!==c)if(n===M)if(l&&(l=a.style=v({},l)),c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="")
for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l
else _.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(u.isStandardName[n]||u.isCustomAttribute(n))&&p.BackendIDOperations.updatePropertyByID(this._rootNodeID,n,l)}i&&p.BackendIDOperations.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t){var n=this.props,r=D[typeof e.children]?e.children:null,o=D[typeof n.children]?n.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,a=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html,s=null!=r?null:e.children,u=null!=o?null:n.children,l=null!=r||null!=i,c=null!=o||null!=a
null!=s&&null==u?this.updateChildren(null,t):l&&!c&&this.updateTextContent(""),null!=o?r!==o&&this.updateTextContent(""+o):null!=a?i!==a&&p.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,a):null!=u&&this.updateChildren(u,t)},unmountComponent:function(){this.unmountChildren(),d.deleteAllListeners(this._rootNodeID),p.Mixin.unmountComponent.call(this)}},v(a.prototype,p.Mixin,a.Mixin,h.Mixin,c),e.exports=a},function(e,t,n){"use strict"
function r(){var e=d.current
return e&&e.constructor.displayName||void 0}function o(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,a("react_key_warning",'Each child in an array should have a unique "key" prop.',e,t))}function i(e,t,n){y.test(e)&&a("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",t,n)}function a(e,t,n,o){var i=r(),a=o.displayName,s=i||a,u=h[e]
if(!u.hasOwnProperty(s)){u[s]=!0,t+=i?" Check the render method of "+i+".":" Check the renderComponent call using <"+a+">."
var l=null
n._owner&&n._owner!==d.current&&(l=n._owner.constructor.displayName,t+=" It was passed a child from "+l+"."),t+=" See http://fb.me/react-warning-keys for more information.",f(e,{component:s,componentOwner:l}),console.warn(t)}}function s(){var e=r()||""
m.hasOwnProperty(e)||(m[e]=!0,f("react_object_map_children"))}function u(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n]
c.isValidElement(r)&&o(r,t)}else if(c.isValidElement(e))e._store.validated=!0
else if(e&&"object"==typeof e){s()
for(var a in e)i(a,e[a],t)}}function l(e,t,n,r){for(var o in t)if(t.hasOwnProperty(o)){var i
try{i=t[o](n,o,e,r)}catch(a){i=a}i instanceof Error&&!(i.message in v)&&(v[i.message]=!0,f("react_failed_descriptor_type_check",{message:i.message}))}}var c=n(3),p=n(81),d=n(20),f=n(38),h={react_key_warning:{},react_numeric_key_warning:{}},m={},v={},y=/^\d+$/,g={createElement:function(e){var t=c.createElement.apply(this,arguments)
if(null==t)return t
for(var n=2;n<arguments.length;n++)u(arguments[n],e)
var r=e.displayName
return e.propTypes&&l(r,e.propTypes,t.props,p.prop),e.contextTypes&&l(r,e.contextTypes,t._context,p.context),t},createFactory:function(e){var t=g.createElement.bind(null,e)
return t.type=e,t}}
e.exports=g},function(e,t,n){"use strict"
function r(e){return i(document.documentElement,e)}var o=n(140),i=n(89),a=n(90),s=n(91),u={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=s()
return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=s(),n=e.focusedElem,o=e.selectionRange
t!==n&&r(n)&&(u.hasSelectionCapabilities(n)&&u.setSelection(n,o),a(n))},getSelection:function(e){var t
if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd}
else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange()
n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e)
return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end
if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)
else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange()
i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}}
e.exports=u},function(e,t,n){"use strict"
function r(e,t,n){m.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:v.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){m.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){m.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){m.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function s(){m.length&&(l.BackendIDOperations.dangerouslyProcessChildrenUpdates(m,v),u())}function u(){m.length=0,v.length=0}var l=n(19),c=n(76),p=n(177),d=n(37),f=n(61),h=0,m=[],v=[],y={Mixin:{mountChildren:function(e,t){var n=p(e),r=[],o=0
this._renderedChildren=n
for(var i in n){var a=n[i]
if(n.hasOwnProperty(i)){var s=d(a,null)
n[i]=s
var u=this._rootNodeID+i,l=s.mountComponent(u,t,this._mountDepth+1)
s._mountIndex=o,r.push(l),o++}}return r},updateTextContent:function(e){h++
var t=!0
try{var n=this._renderedChildren
for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r)
this.setTextContent(e),t=!1}finally{h--,h||(t?u():s())}},updateChildren:function(e,t){h++
var n=!0
try{this._updateChildren(e,t),n=!1}finally{h--,h||(n?u():s())}},_updateChildren:function(e,t){var n=p(e),r=this._renderedChildren
if(n||r){var o,i=0,a=0
for(o in n)if(n.hasOwnProperty(o)){var s=r&&r[o],u=s&&s._currentElement,l=n[o]
if(f(u,l))this.moveChild(s,a,i),i=Math.max(s._mountIndex,i),s.receiveComponent(l,t),s._mountIndex=a
else{s&&(i=Math.max(s._mountIndex,i),this._unmountChildByName(s,o))
var c=d(l,null)
this._mountChildByNameAtIndex(c,o,a,t)}a++}for(o in r)!r.hasOwnProperty(o)||n&&n[o]||this._unmountChildByName(r[o],o)}},unmountChildren:function(){var e=this._renderedChildren
for(var t in e){var n=e[t]
n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r){var o=this._rootNodeID+t,i=e.mountComponent(o,r,this._mountDepth+1)
e._mountIndex=n,this.createChild(e,i),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t]}}}
e.exports=y},function(e,t,n){"use strict"
function r(e,t){if(o(null!=t),null==e)return t
var n=Array.isArray(e),r=Array.isArray(t)
return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=n(1)
e.exports=r},function(e,t,n){function r(e,t,n,r,o){return o}n(2),n(5)
e.exports=r},function(e){"use strict"
function t(e){return r[e]}function n(e){return(""+e).replace(o,t)}var r={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},o=/[&><"']/g
e.exports=n},function(e){"use strict"
var t=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}
e.exports=t},function(e){"use strict"
function t(e){var t,n=e.keyCode
return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}e.exports=t},function(e){"use strict"
function t(e){var t=this,n=t.nativeEvent
if(n.getModifierState)return n.getModifierState(e)
var o=r[e]
return o?!!n[o]:!1}function n(){return t}var r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
e.exports=n},function(e){"use strict"
function t(e){var t=e.target||e.srcElement||window
return 3===t.nodeType?t.parentNode:t}e.exports=t},function(e,t,n){"use strict"
function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=n(6),i=null
e.exports=r},function(e,t,n){"use strict"
function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1
var n="on"+e,r=n in document
if(!r){var a=document.createElement("div")
a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=n(6)
i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),e.exports=r},function(e){"use strict"
function t(e,t){return e&&t&&e.type===t.type&&e.key===t.key&&e._owner===t._owner?!0:!1}e.exports=t},,,,,,,,,function(e){"use strict"
function t(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var n={columnCount:!0,fillOpacity:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},r=["Webkit","ms","Moz","O"]
Object.keys(n).forEach(function(e){r.forEach(function(r){n[t(r,e)]=n[e]})})
var o={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},i={isUnitlessNumber:n,shorthandPropertyExpansions:o}
e.exports=i},function(e,t,n){"use strict"
var r=n(70),o=n(6),i=(n(170),n(175)),a=n(181),s=n(97),u=(n(5),s(function(e){return a(e)})),l="cssFloat"
o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat")
var c={createMarkupForStyles:function(e){var t=""
for(var n in e)if(e.hasOwnProperty(n)){var r=e[n]
null!=r&&(t+=u(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style
for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o])
if("float"===o&&(o=l),a)n[o]=a
else{var s=r.shorthandPropertyExpansions[o]
if(s)for(var u in s)n[u]=""
else n[o]=""}}}}
e.exports=c},function(e,t,n){"use strict"
function r(){if(s)for(var e in u){var t=u[e],n=s.indexOf(e)
if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t
var r=t.eventTypes
for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e
var r=e.phasedRegistrationNames
if(r){for(var o in r)if(r.hasOwnProperty(o)){var s=r[o]
i(s,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=n(1),s=null,u={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!s),s=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1
for(var n in e)if(e.hasOwnProperty(n)){var o=e[n]
u.hasOwnProperty(n)&&u[n]===o||(a(!u[n]),u[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig
if(t.registrationName)return l.registrationNameModules[t.registrationName]||null
for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]]
if(r)return r}return null},_resetEventPlugins:function(){s=null
for(var e in u)u.hasOwnProperty(e)&&delete u[e]
l.plugins.length=0
var t=l.eventNameDispatchConfigs
for(var n in t)t.hasOwnProperty(n)&&delete t[n]
var r=l.registrationNameModules
for(var o in r)r.hasOwnProperty(o)&&delete r[o]}}
e.exports=l},function(e,t,n){"use strict"
function r(e){e.remove()}var o=n(26),i=n(52),a=n(55),s=n(1),u={trapBubbledEvent:function(e,t){s(this.isMounted())
var n=o.trapBubbledEvent(e,t,this.getDOMNode())
this._localEventListeners=i(this._localEventListeners,n)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}}
e.exports=u},function(e,t,n){"use strict"
function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e
o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e
var i=r.getPooled(t,n)
d(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function s(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n)
if(a){var s=o.mapFunction.call(o.mapContext,t,r)
i[n]=s}}function u(e,t,n){if(null==e)return e
var r={},o=a.getPooled(r,t,n)
return d(e,s,o),a.release(o),r}function l(){return null}function c(e){return d(e,l,null)}var p=n(14),d=n(101),f=(n(5),p.twoArgumentPooler),h=p.threeArgumentPooler
p.addPoolingTo(r,f),p.addPoolingTo(a,h)
var m={forEach:i,map:u,count:c}
e.exports=m},function(e,t,n){"use strict"
var r=n(168),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e)
return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME)
n=n&&parseInt(n,10)
var i=r(e)
return i===n}}
e.exports=o},function(e,t,n){"use strict"
var r=n(29),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null})
e.exports=o},function(e,t,n){"use strict"
function r(e,t,n){var r=s[e]
return null==r?(i(a),new a(e,t)):n===e?(i(a),new a(e,t)):new r.type(t)}var o=n(2),i=n(1),a=null,s={},u={injectGenericComponentClass:function(e){a=e},injectComponentClasses:function(e){o(s,e)}},l={createInstanceForTag:r,injection:u}
e.exports=l},function(e,t,n){"use strict"
var r=n(176),o=n(1),i={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){o(i.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){o(i.isValidOwner(n)),n.refs[t]===e&&n.detachRef(t)},Mixin:{construct:function(){this.refs=r},attachRef:function(e,t){o(t.isOwnedBy(this))
var n=this.refs===r?this.refs={}:this.refs
n[e]=t},detachRef:function(e){delete this.refs[e]}}}
e.exports=i},function(e,t,n){"use strict"
function r(e){return function(t,n,r){t[n]=t.hasOwnProperty(n)?e(t[n],r):r}}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=c[n]
r&&c.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var i=n(2),a=n(13),s=n(1),u=n(184),l=(n(5),r(function(e,t){return i({},t,e)})),c={children:a,className:r(u),style:l},p={TransferStrategies:c,mergeProps:function(e,t){return o(i({},e),t)},Mixin:{transferPropsTo:function(e){return s(e._owner===this),o(e.props,this.props),e}}}
e.exports=p},function(e){"use strict"
var t={}
e.exports=t},function(e,t,n){"use strict"
var r=n(29),o=r({prop:null,context:null,childContext:null})
e.exports=o},function(e,t,n){"use strict"
function r(e){function t(t,n,r,o,i){if(o=o||b,null!=n[r])return e(n,r,o,i)
var a=g[i]
return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):void 0}var n=t.bind(null,!1)
return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i)
if(a!==e){var s=g[o],u=v(i)
return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}}return r(t)}function i(){return r(E.thatReturns())}function a(e){function t(t,n,r,o){var i=t[n]
if(!Array.isArray(i)){var a=g[o],s=m(i)
return new Error("Invalid "+a+" `"+n+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<i.length;u++){var l=e(i,u,r,o)
if(l instanceof Error)return l}}return r(t)}function s(){function e(e,t,n,r){if(!y.isValidElement(e[t])){var o=g[r]
return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}}return r(e)}function u(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=g[o],a=e.name||b
return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return
var s=g[o],u=JSON.stringify(e)
return new Error("Invalid "+s+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i)
if("object"!==a){var s=g[o]
return new Error("Invalid "+s+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var u in i)if(i.hasOwnProperty(u)){var l=e(i,u,r,o)
if(l instanceof Error)return l}}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i]
if(null==a(t,n,r,o))return}var s=g[o]
return new Error("Invalid "+s+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=g[r]
return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i)
if("object"!==a){var s=g[o]
return new Error("Invalid "+s+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var l=e[u]
if(l){var c=l(i,u,r,o)
if(c)return c}}}return r(t,"expected `object`")}function h(e){switch(typeof e){case"number":case"string":return!0
case"boolean":return!e
case"object":if(Array.isArray(e))return e.every(h)
if(y.isValidElement(e))return!0
for(var t in e)if(!h(e[t]))return!1
return!0
default:return!1}}function m(e){var t=typeof e
return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e)
if("object"===t){if(e instanceof Date)return"date"
if(e instanceof RegExp)return"regexp"}return t}var y=n(3),g=n(80),C=n(53),E=n(13),b="<<anonymous>>",_=s(),D=d(),M={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:u,node:D,objectOf:c,oneOf:l,oneOfType:p,shape:f,component:C("React.PropTypes","component","element",this,_),renderable:C("React.PropTypes","renderable","node",this,D)}
e.exports=M},function(e,t,n){"use strict"
function r(){this.listenersToPut=[]}var o=n(14),i=n(26),a=n(2)
a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e]
i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),e.exports=r},function(e){"use strict"
var t={injectCreateReactRootIndex:function(e){n.createReactRootIndex=e}},n={createReactRootIndex:null,injection:t}
e.exports=n},function(e,t,n){"use strict"
var r=n(18),o=n(19),i=n(3),a=n(2),s=n(54),u=function(){}
a(u.prototype,o.Mixin,{mountComponent:function(e,t,n){o.Mixin.mountComponent.call(this,e,t,n)
var i=s(this.props)
return t.renderToStaticMarkup?i:"<span "+r.createMarkupForID(e)+">"+i+"</span>"},receiveComponent:function(e){var t=e.props
t!==this.props&&(this.props=t,o.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}})
var l=function(e){return new i(u,null,null,null,null,e)}
l.type=u,e.exports=l},function(e,t,n){"use strict"
var r=n(31),o=n(153),i=n(2),a=n(88),s=n(13),u=r.createClass({displayName:"ReactTransitionGroup",propTypes:{component:r.PropTypes.any,childFactory:r.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:s.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillReceiveProps:function(e){var t=o.getChildMapping(e.children),n=this.state.children
this.setState({children:o.mergeChildMappings(n,t)})
var r
for(r in t){var i=n&&n.hasOwnProperty(r)
!t[r]||i||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(r in n){var a=t&&t.hasOwnProperty(r)
!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidUpdate:function(){var e=this.keysToEnter
this.keysToEnter=[],e.forEach(this.performEnter)
var t=this.keysToLeave
this.keysToLeave=[],t.forEach(this.performLeave)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0
var t=this.refs[e]
t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e]
t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e]
var n=o.getChildMapping(this.props.children)
n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0
var t=this.refs[e]
t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e]
t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e]
var n=o.getChildMapping(this.props.children)
if(n&&n.hasOwnProperty(e))this.performEnter(e)
else{var r=i({},this.state.children)
delete r[e],this.setState({children:r})}},render:function(){var e={}
for(var t in this.state.children){var n=this.state.children[t]
n&&(e[t]=a(this.props.childFactory(n),{ref:t}))}return r.createElement(this.props.component,this.props,e)}})
e.exports=u},function(e,t,n){"use strict"
var r=n(94),o={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var e=r(window)
o.currentScrollLeft=e.x,o.currentScrollTop=e.y}}
e.exports=o},function(e,t,n){"use strict"
function r(e,t){var n=i.mergeProps(t,e.props)
return!n.hasOwnProperty(s)&&e.props.hasOwnProperty(s)&&(n.children=e.props.children),o.createElement(e.type,n)}var o=n(3),i=n(79),a=n(9),s=(n(5),a({children:null}))
e.exports=r},function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=n(183)
e.exports=r},function(e){"use strict"
function t(e){try{e.focus()}catch(t){}}e.exports=t},function(e){function t(){try{return document.activeElement||document.body}catch(e){return document.body}}e.exports=t},function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),s.hasOwnProperty(e)||(a.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",s[e]=!a.firstChild),s[e]?d[e]:null}var o=n(6),i=n(1),a=o.canUseDOM?document.createElement("div"):null,s={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},u=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:u,option:u,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p}
e.exports=r},function(e){"use strict"
function t(e){return e?e.nodeType===n?e.documentElement:e.firstChild:null}var n=9
e.exports=t},function(e){"use strict"
function t(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}e.exports=t},function(e){"use strict"
function t(e){return e&&("INPUT"===e.nodeName&&n[e.type]||"TEXTAREA"===e.nodeName)}var n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
e.exports=t},function(e){"use strict"
function t(e,t,r){if(!e)return null
var o={}
for(var i in e)n.call(e,i)&&(o[i]=t.call(r,e[i],i,e))
return o}var n=Object.prototype.hasOwnProperty
e.exports=t},function(e){"use strict"
function t(e){var t={}
return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e.call(this,n)}}e.exports=t},function(e,t,n){"use strict"
function r(e){return i(o.isValidElement(e)),e}var o=n(3),i=n(1)
e.exports=r},function(e,t,n){"use strict"
var r=n(6),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){e.innerHTML=t}
if(r.canUseDOM){var s=document.createElement("div")
s.innerHTML=" ",""===s.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML=""+t
var n=e.firstChild
1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}e.exports=a},function(e){"use strict"
function t(e,t){if(e===t)return!0
var n
for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1
for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1
return!0}e.exports=t},function(e,t,n){"use strict"
function r(e){return f[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(h,r)}function a(e){return"$"+i(e)}function s(e,t,n){return null==e?0:m(e,"",0,t,n)}var u=n(3),l=n(27),c=n(1),p=l.SEPARATOR,d=":",f={"=":"=0",".":"=1",":":"=2"},h=/[=.:]/g,m=function(e,t,n,r,i){var s,l,f=0
if(Array.isArray(e))for(var h=0;h<e.length;h++){var v=e[h]
s=t+(t?d:p)+o(v,h),l=n+f,f+=m(v,s,l,r,i)}else{var y=typeof e,g=""===t,C=g?p+o(e,0):t
if(null==e||"boolean"===y)r(i,null,C,n),f=1
else if("string"===y||"number"===y||u.isValidElement(e))r(i,e,C,n),f=1
else if("object"===y){c(!e||1!==e.nodeType)
for(var E in e)e.hasOwnProperty(E)&&(s=t+(t?d:p)+a(E)+d+o(e[E],0),l=n+f,f+=m(e[E],s,l,r,i))}}return f}
e.exports=s},,,,,,,,,,,,,,function(e,t,n){e.exports=n(155)},function(e,t,n){"use strict"
function r(){var e=window.opera
return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}var i=n(7),a=n(25),s=n(6),u=n(164),l=n(9),c=s.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||r()),p=32,d=String.fromCharCode(p),f=i.topLevelTypes,h={beforeInput:{phasedRegistrationNames:{bubbled:l({onBeforeInput:null}),captured:l({onBeforeInputCapture:null})},dependencies:[f.topCompositionEnd,f.topKeyPress,f.topTextInput,f.topPaste]}},m=null,v=!1,y={eventTypes:h,extractEvents:function(e,t,n,r){var i
if(c)switch(e){case f.topKeyPress:var s=r.which
if(s!==p)return
v=!0,i=d
break
case f.topTextInput:if(i=r.data,i===d&&v)return
break
default:return}else{switch(e){case f.topPaste:m=null
break
case f.topKeyPress:r.which&&!o(r)&&(m=String.fromCharCode(r.which))
break
case f.topCompositionEnd:m=r.data}if(null===m)return
i=m}if(i){var l=u.getPooled(h.beforeInput,n,r)
return l.data=i,m=null,a.accumulateTwoPhaseDispatches(l),l}}}
e.exports=y},function(e,t,n){var r=n(1),o={addClass:function(e,t){return r(!/\s/.test(t)),t&&(e.classList?e.classList.add(t):o.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return r(!/\s/.test(t)),t&&(e.classList?e.classList.remove(t):o.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?o.addClass:o.removeClass)(e,t)},hasClass:function(e,t){return r(!/\s/.test(t)),e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}}
e.exports=o},function(e,t,n){"use strict"
function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=D.getPooled(w.change,R,e)
E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){O=e,R=t,O.attachEvent("onchange",o)}function s(){O&&(O.detachEvent("onchange",o),O=null,R=null)}function u(e,t,n){return e===T.topChange?n:void 0}function l(e,t,n){e===T.topFocus?(s(),a(t,n)):e===T.topBlur&&s()}function c(e,t){O=e,R=t,P=e.value,I=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(O,"value",k),O.attachEvent("onpropertychange",d)}function p(){O&&(delete O.value,O.detachEvent("onpropertychange",d),O=null,R=null,P=null,I=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value
t!==P&&(P=t,o(e))}}function f(e,t,n){return e===T.topInput?n:void 0}function h(e,t,n){e===T.topFocus?(p(),c(t,n)):e===T.topBlur&&p()}function m(e){return e!==T.topSelectionChange&&e!==T.topKeyUp&&e!==T.topKeyDown||!O||O.value===P?void 0:(P=O.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function y(e,t,n){return e===T.topClick?n:void 0}var g=n(7),C=n(30),E=n(25),b=n(6),_=n(8),D=n(21),M=n(60),x=n(95),N=n(9),T=g.topLevelTypes,w={change:{phasedRegistrationNames:{bubbled:N({onChange:null}),captured:N({onChangeCapture:null})},dependencies:[T.topBlur,T.topChange,T.topClick,T.topFocus,T.topInput,T.topKeyDown,T.topKeyUp,T.topSelectionChange]}},O=null,R=null,P=null,I=null,S=!1
b.canUseDOM&&(S=M("change")&&(!("documentMode"in document)||document.documentMode>8))
var A=!1
b.canUseDOM&&(A=M("input")&&(!("documentMode"in document)||document.documentMode>9))
var k={get:function(){return I.get.call(this)},set:function(e){P=""+e,I.set.call(this,e)}},L={eventTypes:w,extractEvents:function(e,t,n,o){var i,a
if(r(t)?S?i=u:a=l:x(t)?A?i=f:(i=m,a=h):v(t)&&(i=y),i){var s=i(e,t,n)
if(s){var c=D.getPooled(w.change,s,o)
return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}}
e.exports=L},function(e){"use strict"
var t=0,n={createReactRootIndex:function(){return t++}}
e.exports=n},function(e,t,n){"use strict"
function r(e){switch(e){case g.topCompositionStart:return E.compositionStart
case g.topCompositionEnd:return E.compositionEnd
case g.topCompositionUpdate:return E.compositionUpdate}}function o(e,t){return e===g.topKeyDown&&t.keyCode===m}function i(e,t){switch(e){case g.topKeyUp:return-1!==h.indexOf(t.keyCode)
case g.topKeyDown:return t.keyCode!==m
case g.topKeyPress:case g.topMouseDown:case g.topBlur:return!0
default:return!1}}function a(e){this.root=e,this.startSelection=c.getSelection(e),this.startValue=this.getText()}var s=n(7),u=n(25),l=n(6),c=n(50),p=n(161),d=n(59),f=n(9),h=[9,13,27,32],m=229,v=l.canUseDOM&&"CompositionEvent"in window,y=!v||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11,g=s.topLevelTypes,C=null,E={compositionEnd:{phasedRegistrationNames:{bubbled:f({onCompositionEnd:null}),captured:f({onCompositionEndCapture:null})},dependencies:[g.topBlur,g.topCompositionEnd,g.topKeyDown,g.topKeyPress,g.topKeyUp,g.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:f({onCompositionStart:null}),captured:f({onCompositionStartCapture:null})},dependencies:[g.topBlur,g.topCompositionStart,g.topKeyDown,g.topKeyPress,g.topKeyUp,g.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:f({onCompositionUpdate:null}),captured:f({onCompositionUpdateCapture:null})},dependencies:[g.topBlur,g.topCompositionUpdate,g.topKeyDown,g.topKeyPress,g.topKeyUp,g.topMouseDown]}}
a.prototype.getText=function(){return this.root.value||this.root[d()]},a.prototype.getData=function(){var e=this.getText(),t=this.startSelection.start,n=this.startValue.length-this.startSelection.end
return e.substr(t,e.length-n-t)}
var b={eventTypes:E,extractEvents:function(e,t,n,s){var l,c
if(v?l=r(e):C?i(e,s)&&(l=E.compositionEnd):o(e,s)&&(l=E.compositionStart),y&&(C||l!==E.compositionStart?l===E.compositionEnd&&C&&(c=C.getData(),C=null):C=new a(t)),l){var d=p.getPooled(l,n,s)
return c&&(d.data=c),u.accumulateTwoPhaseDispatches(d),d}}}
e.exports=b},function(e,t,n){"use strict"
function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o,i=n(122),a=n(76),s=n(59),u=n(1),l=s()
o="textContent"===l?function(e,t){e.textContent=t}:function(e,t){for(;e.firstChild;)e.removeChild(e.firstChild)
if(t){var n=e.ownerDocument||document
e.appendChild(n.createTextNode(t))}}
var c={dangerouslyReplaceNodeWithMarkup:i.dangerouslyReplaceNodeWithMarkup,updateTextContent:o,processUpdates:function(e,t){for(var n,s=null,l=null,c=0;n=e[c];c++)if(n.type===a.MOVE_EXISTING||n.type===a.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID
u(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=i.dangerouslyRenderMarkup(t)
if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m])
for(var v=0;n=e[v];v++)switch(n.type){case a.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex)
break
case a.MOVE_EXISTING:r(n.parentNode,s[n.parentID][n.fromIndex],n.toIndex)
break
case a.TEXT_CONTENT:o(n.parentNode,n.textContent)
break
case a.REMOVE_NODE:}}}
e.exports=c},function(e,t,n){"use strict"
function r(e){return e.substring(1,e.indexOf(" "))}var o=n(6),i=n(173),a=n(13),s=n(92),u=n(1),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){u(o.canUseDOM)
for(var t,n={},p=0;p<e.length;p++)u(e[p]),t=r(e[p]),t=s(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p]
var d=[],f=0
for(t in n)if(n.hasOwnProperty(t)){var h=n[t]
for(var m in h)if(h.hasOwnProperty(m)){var v=h[m]
h[m]=v.replace(l,"$1 "+c+'="'+m+'" ')}var y=i(h.join(""),a)
for(p=0;p<y.length;++p){var g=y[p]
g.hasAttribute&&g.hasAttribute(c)&&(m=+g.getAttribute(c),g.removeAttribute(c),u(!d.hasOwnProperty(m)),d[m]=g,f+=1)}}return u(f===d.length),u(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){u(o.canUseDOM),u(t),u("html"!==e.tagName.toLowerCase())
var n=i(t,a)[0]
e.parentNode.replaceChild(n,e)}}
e.exports=p},function(e,t,n){"use strict"
var r=n(9),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({CompositionEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})]
e.exports=o},function(e,t,n){"use strict"
var r=n(7),o=n(25),i=n(35),a=n(12),s=n(9),u=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:s({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:s({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===u.topMouseOver&&(r.relatedTarget||r.fromElement))return null
if(e!==u.topMouseOut&&e!==u.topMouseOver)return null
var s
if(t.window===t)s=t
else{var d=t.ownerDocument
s=d?d.defaultView||d.parentWindow:window}var f,h
if(e===u.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||s):(f=s,h=t),f===h)return null
var m=f?a.getID(f):"",v=h?a.getID(h):"",y=i.getPooled(c.mouseLeave,m,r)
y.type="mouseleave",y.target=f,y.relatedTarget=h
var g=i.getPooled(c.mouseEnter,v,r)
return g.type="mouseenter",g.target=h,g.relatedTarget=f,o.accumulateEnterLeaveDispatches(y,g,m,v),p[0]=y,p[1]=g,p}}
e.exports=d},function(e,t,n){var r=n(13),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}}
e.exports=o},function(e,t,n){"use strict"
var r,o=n(24),i=n(6),a=o.injection.MUST_USE_ATTRIBUTE,s=o.injection.MUST_USE_PROPERTY,u=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE
if(i.canUseDOM){var f=document.implementation
r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|u,allowTransparency:a,alt:null,async:u,autoComplete:null,autoPlay:u,cellPadding:null,cellSpacing:null,charSet:a,checked:s|u,classID:a,className:r?a:s,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:s|u,coords:null,crossOrigin:null,data:null,dateTime:a,defer:u,dir:null,disabled:a|u,download:d,draggable:null,encType:null,form:a,formNoValidate:u,frameBorder:a,height:a,hidden:a|u,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:s,label:null,lang:null,list:a,loop:s|u,manifest:a,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:s|u,muted:s|u,name:null,noValidate:u,open:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:s|u,rel:null,required:u,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:a|u,selected:s|u,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:s,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:s|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|u,itemType:a,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}}
e.exports=h},function(e,t,n){"use strict"
var r=n(148),o=n(152),i={linkState:function(e){return new r(this.state[e],o.createStateKeySetter(this,e))}}
e.exports=i},function(e,t,n){"use strict"
var r=n(7),o=n(13),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target
a&&!a.onclick&&(a.onclick=o)}}}
e.exports=a},function(e,t,n){"use strict"
var r=n(31),o=n(2),i=r.createFactory(n(86)),a=r.createFactory(n(130)),s=r.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:r.PropTypes.string.isRequired,transitionEnter:r.PropTypes.bool,transitionLeave:r.PropTypes.bool},getDefaultProps:function(){return{transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return a({name:this.props.transitionName,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return i(o({},this.props,{childFactory:this._wrapChild}))}})
e.exports=s},function(e,t,n){"use strict"
var r=n(31),o=n(117),i=n(154),a=n(98),s=17,u=r.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode(),r=this.props.name+"-"+e,a=r+"-active",s=function(e){e&&e.target!==n||(o.removeClass(n,r),o.removeClass(n,a),i.removeEndEventListener(n,s),t&&t())}
i.addEndEventListener(n,s),o.addClass(n,r),this.queueClass(a)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,s))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(o.addClass.bind(o,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return a(this.props.children)}})
e.exports=u},function(e,t,n){"use strict"
var r=n(135),o=n(75),i=n(12),a=n(16),s=n(149),u=n(93),l=n(1),c=n(99),p=1,d=9,f={ReactReconcileTransaction:s,BackendIDOperations:r,unmountIDFromEnvironment:function(e){i.purgeID(e)},mountImageIntoNode:a.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(e,t,n){if(l(t&&(t.nodeType===p||t.nodeType===d)),n){if(o.canReuseMarkup(e,u(t)))return
l(t.nodeType!==d)}l(t.nodeType!==d),c(t,e)})}
e.exports=f},function(e,t,n){"use strict"
var r=n(100),o={shouldComponentUpdate:function(e,t){return!r(this.props,e)||!r(this.state,t)}}
e.exports=o},function(e,t,n){"use strict"
var r=n(33),o=n(10),i=n(11),a=n(3),s=n(15),u=n(29),l=a.createFactory(s.button.type),c=u({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),p=i.createClass({displayName:"ReactDOMButton",mixins:[r,o],render:function(){var e={}
for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&c[t]||(e[t]=this.props[t])
return l(e,this.props.children)}})
e.exports=p},function(e,t,n){"use strict"
var r=n(7),o=n(73),i=n(10),a=n(11),s=n(3),u=n(15),l=s.createFactory(u.form.type),c=a.createClass({displayName:"ReactDOMForm",mixins:[i,o],render:function(){return l(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}})
e.exports=c},function(e,t,n){"use strict"
var r=n(71),o=n(121),i=n(18),a=n(12),s=n(16),u=n(1),l=n(99),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:s.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,n){var r=a.getNode(e)
u(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)}),deletePropertyByID:s.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,n){var r=a.getNode(e)
u(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)}),updateStylesByID:s.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var n=a.getNode(e)
r.setValueForStyles(n,t)}),updateInnerHTMLByID:s.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var n=a.getNode(e)
l(n,t)}),updateTextContentByID:s.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var n=a.getNode(e)
o.updateTextContent(n,t)}),dangerouslyReplaceNodeWithMarkupByID:s.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var n=a.getNode(e)
o.dangerouslyReplaceNodeWithMarkup(n,t)}),dangerouslyProcessChildrenUpdates:s.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID)
o.processUpdates(e,t)})}
e.exports=p},function(e,t,n){"use strict"
var r=n(7),o=n(73),i=n(10),a=n(11),s=n(3),u=n(15),l=s.createFactory(u.img.type),c=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return l(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}})
e.exports=c},function(e,t,n){"use strict"
function r(){this.isMounted()&&this.forceUpdate()}var o=n(33),i=n(18),a=n(46),s=n(10),u=n(11),l=n(3),c=n(15),p=n(12),d=n(8),f=n(2),h=n(1),m=l.createFactory(c.input.type),v={},y=u.createClass({displayName:"ReactDOMInput",mixins:[o,a.Mixin,s],getInitialState:function(){var e=this.props.defaultValue
return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=f({},this.props)
e.defaultChecked=null,e.defaultValue=null
var t=a.getValue(this)
e.value=null!=t?t:this.state.initialValue
var n=a.getChecked(this)
return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,m(e,this.props.children)},componentDidMount:function(){var e=p.getID(this.getDOMNode())
v[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=p.getID(e)
delete v[t]},componentDidUpdate:function(){var e=this.getDOMNode()
null!=this.props.checked&&i.setValueForProperty(e,"checked",this.props.checked||!1)
var t=a.getValue(this)
null!=t&&i.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,n=a.getOnChange(this)
n&&(t=n.call(this,e)),d.asap(r,this)
var o=this.props.name
if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),s=i;s.parentNode;)s=s.parentNode
for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,c=u.length;c>l;l++){var f=u[l]
if(f!==i&&f.form===i.form){var m=p.getID(f)
h(m)
var y=v[m]
h(y),d.asap(r,y)}}}return t}})
e.exports=y},function(e,t,n){"use strict"
var r=n(10),o=n(11),i=n(3),a=n(15),s=(n(5),i.createFactory(a.option.type)),u=o.createClass({displayName:"ReactDOMOption",mixins:[r],componentWillMount:function(){},render:function(){return s(this.props,this.props.children)}})
e.exports=u},function(e,t,n){"use strict"
function r(){this.isMounted()&&(this.setState({value:this._pendingValue}),this._pendingValue=0)}function o(e,t){if(null!=e[t])if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.props.multiple,a=null!=t?t:e.state.value,s=e.getDOMNode().options
if(i)for(n={},r=0,o=a.length;o>r;++r)n[""+a[r]]=!0
else n=""+a
for(r=0,o=s.length;o>r;r++){var u=i?n.hasOwnProperty(s[r].value):s[r].value===n
u!==s[r].selected&&(s[r].selected=u)}}var a=n(33),s=n(46),u=n(10),l=n(11),c=n(3),p=n(15),d=n(8),f=n(2),h=c.createFactory(p.select.type),m=l.createClass({displayName:"ReactDOMSelect",mixins:[a,s.Mixin,u],propTypes:{defaultValue:o,value:o},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillMount:function(){this._pendingValue=null},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},render:function(){var e=f({},this.props)
return e.onChange=this._handleChange,e.value=null,h(e,this.props.children)},componentDidMount:function(){i(this,s.getValue(this))},componentDidUpdate:function(e){var t=s.getValue(this),n=!!e.multiple,r=!!this.props.multiple;(null!=t||n!==r)&&i(this,t)},_handleChange:function(e){var t,n=s.getOnChange(this)
n&&(t=n.call(this,e))
var o
if(this.props.multiple){o=[]
for(var i=e.target.options,a=0,u=i.length;u>a;a++)i[a].selected&&o.push(i[a].value)}else o=e.target.value
return this._pendingValue=o,d.asap(r,this),t}})
e.exports=m},function(e,t,n){"use strict"
function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate()
o.moveToElementText(e),o.setEndPoint("EndToStart",n)
var i=o.text.length,a=i+r
return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection()
if(!t||0===t.rangeCount)return null
var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,s=t.getRangeAt(0),u=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=u?0:s.toString().length,c=s.cloneRange()
c.selectNodeContents(e),c.setEnd(s.startContainer,s.startOffset)
var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange()
h.setStart(n,o),h.setEnd(i,a)
var m=h.collapsed
return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate()
"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function s(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r)
if(!n.extend&&o>i){var a=i
i=o,o=a}var s=l(e,o),u=l(e,i)
if(s&&u){var p=document.createRange()
p.setStart(s.node,s.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(u.node,u.offset)):(p.setEnd(u.node,u.offset),n.addRange(p))}}}var u=n(6),l=n(179),c=n(59),p=u.canUseDOM&&document.selection,d={getOffsets:p?o:i,setOffsets:p?a:s}
e.exports=d},function(e,t,n){"use strict"
function r(){this.isMounted()&&this.forceUpdate()}var o=n(33),i=n(18),a=n(46),s=n(10),u=n(11),l=n(3),c=n(15),p=n(8),d=n(2),f=n(1),h=(n(5),l.createFactory(c.textarea.type)),m=u.createClass({displayName:"ReactDOMTextarea",mixins:[o,a.Mixin,s],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children
null!=t&&(f(null==e),Array.isArray(t)&&(f(t.length<=1),t=t[0]),e=""+t),null==e&&(e="")
var n=a.getValue(this)
return{initialValue:""+(null!=n?n:e)}},render:function(){var e=d({},this.props)
return f(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,h(e,this.state.initialValue)},componentDidUpdate:function(){var e=a.getValue(this)
if(null!=e){var t=this.getDOMNode()
i.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,n=a.getOnChange(this)
return n&&(t=n.call(this,e)),p.asap(r,this),t}})
e.exports=m},function(e,t,n){"use strict"
function r(){this.reinitializeTransaction()}var o=n(8),i=n(36),a=n(2),s=n(13),u={initialize:s,close:function(){d.isBatchingUpdates=!1}},l={initialize:s,close:o.flushBatchedUpdates.bind(o)},c=[l,u]
a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}})
var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n){var r=d.isBatchingUpdates
d.isBatchingUpdates=!0,r?e(t,n):p.perform(e,null,t,n)}}
e.exports=d},function(e,t,n){"use strict"
function r(){x.EventEmitter.injectReactEventListener(M),x.EventPluginHub.injectEventPluginOrder(u),x.EventPluginHub.injectInstanceHandle(N),x.EventPluginHub.injectMount(T),x.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:R,EnterLeaveEventPlugin:l,ChangeEventPlugin:i,CompositionEventPlugin:s,MobileSafariClickEventPlugin:d,SelectEventPlugin:w,BeforeInputEventPlugin:o}),x.NativeComponent.injectGenericComponentClass(v),x.NativeComponent.injectComponentClasses({button:y,form:g,img:C,input:E,option:b,select:_,textarea:D,html:I("html"),head:I("head"),body:I("body")}),x.CompositeComponent.injectMixin(f),x.DOMProperty.injectDOMPropertyConfig(p),x.DOMProperty.injectDOMPropertyConfig(P),x.EmptyComponent.injectEmptyComponent("noscript"),x.Updates.injectReconcileTransaction(h.ReactReconcileTransaction),x.Updates.injectBatchingStrategy(m),x.RootIndex.injectCreateReactRootIndex(c.canUseDOM?a.createReactRootIndex:O.createReactRootIndex),x.Component.injectEnvironment(h)}var o=n(116),i=n(118),a=n(119),s=n(120),u=n(123),l=n(124),c=n(6),p=n(126),d=n(128),f=n(10),h=n(131),m=n(142),v=n(48),y=n(133),g=n(134),C=n(136),E=n(137),b=n(138),_=n(139),D=n(141),M=n(146),x=n(147),N=n(27),T=n(12),w=n(157),O=n(158),R=n(159),P=n(156),I=n(172)
e.exports={inject:r}},function(e){"use strict"
var t={guard:function(e){return e}}
e.exports=t},function(e,t,n){"use strict"
function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=n(30),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i)
r(a)}}
e.exports=i},function(e,t,n){"use strict"
function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r)
return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n)
for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o]
var a=p.getID(t)||""
v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window)
e(t)}var s=n(125),u=n(6),l=n(14),c=n(27),p=n(12),d=n(8),f=n(2),h=n(58),m=n(94)
f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler)
var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:u.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n
if(r)return s.listen(r,t,v.dispatchEvent.bind(null,e))},trapCapturedEvent:function(e,t,n){var r=n
if(r)return s.capture(r,t,v.dispatchEvent.bind(null,e))},monitorScrollValue:function(e){var t=a.bind(null,e)
s.listen(window,"scroll",t),s.listen(window,"resize",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t)
try{d.batchedUpdates(i,n)}finally{o.release(n)}}}}
e.exports=v},function(e,t,n){"use strict"
var r=n(24),o=n(30),i=n(19),a=n(11),s=n(34),u=n(26),l=n(77),c=n(16),p=n(84),d=n(8),f={Component:i.injection,CompositeComponent:a.injection,DOMProperty:r.injection,EmptyComponent:s.injection,EventPluginHub:o.injection,EventEmitter:u.injection,NativeComponent:l.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection}
e.exports=f},function(e,t,n){"use strict"
function r(e,t){this.value=e,this.requestChange=t}function o(e){var t={value:"undefined"==typeof e?i.PropTypes.any.isRequired:e.isRequired,requestChange:i.PropTypes.func.isRequired}
return i.PropTypes.shape(t)}var i=n(31)
r.PropTypes={link:o},e.exports=r},function(e,t,n){"use strict"
function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=u.getPooled()}var o=n(44),i=n(14),a=n(26),s=n(50),u=n(83),l=n(36),c=n(2),p={initialize:s.getSelectionInformation,close:s.restoreSelection},d={initialize:function(){var e=a.isEnabled()
return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,u.release(this.putListenerQueue),this.putListenerQueue=null}}
c(r.prototype,l.Mixin,v),i.addPoolingTo(r),e.exports=r},function(e,t,n){"use strict"
function r(e){c(i.isValidElement(e))
var t
try{var n=a.createReactRootID()
return t=u.getPooled(!1),t.perform(function(){var r=l(e,null),o=r.mountComponent(n,t,0)
return s.addChecksumToMarkup(o)},null)}finally{u.release(t)}}function o(e){c(i.isValidElement(e))
var t
try{var n=a.createReactRootID()
return t=u.getPooled(!0),t.perform(function(){var r=l(e,null)
return r.mountComponent(n,t,0)},null)}finally{u.release(t)}}var i=n(3),a=n(27),s=n(75),u=n(151),l=n(37),c=n(1)
e.exports={renderToString:r,renderToStaticMarkup:o}},function(e,t,n){"use strict"
function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=n(14),i=n(44),a=n(83),s=n(36),u=n(2),l=n(13),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}}
u(r.prototype,s.Mixin,f),o.addPoolingTo(r),e.exports=r},function(e){"use strict"
function t(e,t){var n={}
return function(r){n[t]=r,e.setState(n)}}var n={createStateSetter:function(e,t){return function(n,r,o,i,a,s){var u=t.call(e,n,r,o,i,a,s)
u&&e.setState(u)}},createStateKeySetter:function(e,n){var r=e.__keySetters||(e.__keySetters={})
return r[n]||(r[n]=t(e,n))}}
n.Mixin={createStateSetter:function(e){return n.createStateSetter(this,e)},createStateKeySetter:function(e){return n.createStateKeySetter(this,e)}},e.exports=n},function(e,t,n){"use strict"
var r=n(74),o={getChildMapping:function(e){return r.map(e,function(e){return e})},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{}
var r={},o=[]
for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i)
var a,s={}
for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var l=r[u][a]
s[r[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a])
return s}}
e.exports=o},function(e,t,n){"use strict"
function r(){var e=document.createElement("div"),t=e.style
"AnimationEvent"in window||delete s.animationend.animation,"TransitionEvent"in window||delete s.transitionend.transition
for(var n in s){var r=s[n]
for(var o in r)if(o in t){u.push(r[o])
break}}}function o(e,t,n){e.addEventListener(t,n,!1)}function i(e,t,n){e.removeEventListener(t,n,!1)}var a=n(6),s={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},u=[]
a.canUseDOM&&r()
var l={addEndEventListener:function(e,t){return 0===u.length?void window.setTimeout(t,0):void u.forEach(function(n){o(e,n,t)})},removeEndEventListener:function(e,t){0!==u.length&&u.forEach(function(n){i(e,n,t)})}}
e.exports=l},function(e,t,n){"use strict"
var r=n(127),o=n(31),i=n(132),a=n(129),s=n(86),u=n(8),l=n(174),c=n(88),p=n(186)
o.addons={CSSTransitionGroup:a,LinkedStateMixin:r,PureRenderMixin:i,TransitionGroup:s,batchedUpdates:u.batchedUpdates,classSet:l,cloneWithProps:c,update:p},e.exports=o},function(e,t,n){"use strict"
var r=n(24),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}}
e.exports=i},function(e,t,n){"use strict"
function r(e){if("selectionStart"in e&&s.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd}
if(window.getSelection){var t=window.getSelection()
return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange()
return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(!g&&null!=m&&m==l()){var t=r(m)
if(!y||!d(y,t)){y=t
var n=u.getPooled(h.select,v,e)
return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}}var i=n(7),a=n(25),s=n(50),u=n(21),l=n(91),c=n(95),p=n(9),d=n(100),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]}},m=null,v=null,y=null,g=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,y=null)
break
case f.topBlur:m=null,v=null,y=null
break
case f.topMouseDown:g=!0
break
case f.topContextMenu:case f.topMouseUp:return g=!1,o(r)
case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}}
e.exports=C},function(e){"use strict"
var t=Math.pow(2,53),n={createReactRootIndex:function(){return Math.ceil(Math.random()*t)}}
e.exports=n},function(e,t,n){"use strict"
var r=n(7),o=n(45),i=n(25),a=n(160),s=n(21),u=n(163),l=n(165),c=n(35),p=n(162),d=n(166),f=n(32),h=n(167),m=n(56),v=n(1),y=n(9),g=(n(5),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:y({onBlur:!0}),captured:y({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:y({onClick:!0}),captured:y({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:y({onContextMenu:!0}),captured:y({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:y({onCopy:!0}),captured:y({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:y({onCut:!0}),captured:y({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:y({onDoubleClick:!0}),captured:y({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:y({onDrag:!0}),captured:y({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:y({onDragEnd:!0}),captured:y({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:y({onDragEnter:!0}),captured:y({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:y({onDragExit:!0}),captured:y({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:y({onDragLeave:!0}),captured:y({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:y({onDragOver:!0}),captured:y({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:y({onDragStart:!0}),captured:y({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:y({onDrop:!0}),captured:y({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:y({onFocus:!0}),captured:y({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:y({onInput:!0}),captured:y({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:y({onKeyDown:!0}),captured:y({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:y({onKeyPress:!0}),captured:y({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:y({onKeyUp:!0}),captured:y({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:y({onLoad:!0}),captured:y({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:y({onError:!0}),captured:y({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:y({onMouseDown:!0}),captured:y({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:y({onMouseMove:!0}),captured:y({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:y({onMouseOut:!0}),captured:y({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:y({onMouseOver:!0}),captured:y({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:y({onMouseUp:!0}),captured:y({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:y({onPaste:!0}),captured:y({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:y({onReset:!0}),captured:y({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:y({onScroll:!0}),captured:y({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:y({onSubmit:!0}),captured:y({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:y({onTouchCancel:!0}),captured:y({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:y({onTouchEnd:!0}),captured:y({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:y({onTouchMove:!0}),captured:y({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:y({onTouchStart:!0}),captured:y({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:y({onWheel:!0}),captured:y({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel}
for(var b in E)E[b].dependencies=[b]
var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n)
r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e]
if(!o)return null
var y
switch(e){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:y=s
break
case g.topKeyPress:if(0===m(r))return null
case g.topKeyDown:case g.topKeyUp:y=l
break
case g.topBlur:case g.topFocus:y=u
break
case g.topClick:if(2===r.button)return null
case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:y=c
break
case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:y=p
break
case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:y=d
break
case g.topScroll:y=f
break
case g.topWheel:y=h
break
case g.topCopy:case g.topCut:case g.topPaste:y=a}v(y)
var C=y.getPooled(o,n,r)
return i.accumulateTwoPhaseDispatches(C),C}}
e.exports=_},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(21),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}
o.augmentClass(r,i),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(21),i={data:null}
o.augmentClass(r,i),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(35),i={dataTransfer:null}
o.augmentClass(r,i),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(32),i={relatedTarget:null}
o.augmentClass(r,i),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(21),i={data:null}
o.augmentClass(r,i),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(32),i=n(56),a=n(178),s=n(57),u={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:s,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}
o.augmentClass(r,u),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(32),i=n(57),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i}
o.augmentClass(r,a),e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){o.call(this,e,t,n)}var o=n(35),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}
o.augmentClass(r,i),e.exports=r},function(e){"use strict"
function t(e){for(var t=1,r=0,o=0;o<e.length;o++)t=(t+e.charCodeAt(o))%n,r=(r+t)%n
return t|r<<16}var n=65521
e.exports=t},function(e){function t(e){return e.replace(n,function(e,t){return t.toUpperCase()})}var n=/-(.)/g
e.exports=t},function(e,t,n){"use strict"
function r(e){return o(e.replace(i,"ms-"))}var o=n(169),i=/^-ms-/
e.exports=r},function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=n(185)
e.exports=o},function(e,t,n){"use strict"
function r(e){var t=i.createFactory(e),n=o.createClass({displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}})
return n}var o=n(11),i=n(3),a=n(1)
e.exports=r},function(e,t,n){function r(e){var t=e.match(c)
return t&&t[1].toLowerCase()}function o(e,t){var n=l
u(!!l)
var o=r(e),i=o&&s(o)
if(i){n.innerHTML=i[1]+e+i[2]
for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e
var p=n.getElementsByTagName("script")
p.length&&(u(t),a(p).forEach(t))
for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild)
return d}var i=n(6),a=n(171),s=n(92),u=n(1),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/
e.exports=o},function(e){function t(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}e.exports=t},function(e,t,n){"use strict"
function r(e,t){var n=null==t||"boolean"==typeof t||""===t
if(n)return""
var r=isNaN(t)
return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=n(70),i=o.isUnitlessNumber
e.exports=r},function(e){"use strict"
var t={}
e.exports=t},function(e,t,n){"use strict"
function r(e,t,n){var r=e,o=!r.hasOwnProperty(n)
if(o&&null!=t){var a,s=typeof t
a="string"===s?i(t):"number"===s?i(""+t):t,r[n]=a}}function o(e){if(null==e)return e
var t={}
return a(e,r,t),t}{var i=n(85),a=n(101)
n(5)}e.exports=o},function(e,t,n){"use strict"
function r(e){if(e.key){var t=i[e.key]||e.key
if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e)
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=n(56),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"}
e.exports=r},function(e){"use strict"
function t(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function n(e){for(;e;){if(e.nextSibling)return e.nextSibling
e=e.parentNode}}function r(e,r){for(var o=t(e),i=0,a=0;o;){if(3==o.nodeType){if(a=i+o.textContent.length,r>=i&&a>=r)return{node:o,offset:r-i}
i=a}o=t(n(o))}}e.exports=r},function(e){function t(e){return e.replace(n,"-$1").toLowerCase()}var n=/([A-Z])/g
e.exports=t},function(e,t,n){"use strict"
function r(e){return o(e).replace(i,"-ms-")}var o=n(180),i=/^ms-/
e.exports=r},function(e){function t(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}e.exports=t},function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=n(182)
e.exports=r},function(e){"use strict"
function t(e){e||(e="")
var t,n=arguments.length
if(n>1)for(var r=1;n>r;r++)t=arguments[r],t&&(e=(e?e+" ":"")+t)
return e}e.exports=t},function(e,t,n){function r(e){var t=e.length
if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i]
return r}var o=n(1)
e.exports=r},function(e,t,n){"use strict"
function r(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?a(new e.constructor,e):e}function o(e,t,n){u(Array.isArray(e))
var r=t[n]
u(Array.isArray(r))}function i(e,t){if(u("object"==typeof t),t.hasOwnProperty(d))return u(1===Object.keys(t).length),t[d]
var n=r(e)
if(t.hasOwnProperty(f)){var s=t[f]
u(s&&"object"==typeof s),u(n&&"object"==typeof n),a(n,t[f])}t.hasOwnProperty(l)&&(o(e,t,l),t[l].forEach(function(e){n.push(e)})),t.hasOwnProperty(c)&&(o(e,t,c),t[c].forEach(function(e){n.unshift(e)})),t.hasOwnProperty(p)&&(u(Array.isArray(e)),u(Array.isArray(t[p])),t[p].forEach(function(e){u(Array.isArray(e)),n.splice.apply(n,e)})),t.hasOwnProperty(h)&&(u("function"==typeof t[h]),n=t[h](n))
for(var m in t)v.hasOwnProperty(m)&&v[m]||(n[m]=i(e[m],t[m]))
return n}var a=n(2),s=n(9),u=n(1),l=s({$push:null}),c=s({$unshift:null}),p=s({$splice:null}),d=s({$set:null}),f=s({$merge:null}),h=s({$apply:null}),m=[l,c,p,d,f,h],v={}
m.forEach(function(e){v[e]=!0}),e.exports=i}])
__KA_module.exports = React;
this.React = React;
__KA_require("../../../javascript/corelibs-package/react-config-prod.js");
});
KAdefine("third_party/javascript-khansrc/underscore/underscore.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var n=this
var r=n._
var t={}
var e=Array.prototype,i=Object.prototype,u=Function.prototype
var a=e.push,f=e.slice,l=e.concat,c=i.toString,o=i.hasOwnProperty
var s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,y=e.every,m=e.some,d=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=u.bind
var j=function(n){if(n instanceof j)return n
if(!(this instanceof j))return new j(n)
this._wrapped=n}
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=j}exports._=j}else{n._=j}j.VERSION="1.4.4"
var A=j.each=j.forEach=function(n,r,e){if(n==null)return
if(s&&n.forEach===s){n.forEach(r,e)}else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++){if(r.call(e,n[i],i,n)===t)return}}else{for(var a in n){if(j.has(n,a)){if(r.call(e,n[a],a,n)===t)return}}}}
j.map=j.collect=function(n,r,t){var e=[]
if(n==null)return e
if(p&&n.map===p)return n.map(r,t)
A(n,function(n,i,u){e[e.length]=r.call(t,n,i,u)})
return e}
var O="Reduce of empty array with no initial value"
j.reduce=j.foldl=j.inject=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(v&&n.reduce===v){if(e)r=j.bind(r,e)
return i?n.reduce(r,t):n.reduce(r)}A(n,function(n,u,a){if(!i){t=n
i=true}else{t=r.call(e,t,n,u,a)}})
if(!i)throw new TypeError(O)
return t}
j.reduceRight=j.foldr=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(h&&n.reduceRight===h){if(e)r=j.bind(r,e)
return i?n.reduceRight(r,t):n.reduceRight(r)}var u=n.length
if(u!==+u){var a=j.keys(n)
u=a.length}A(n,function(f,l,c){l=a?a[--u]:--u
if(!i){t=n[l]
i=true}else{t=r.call(e,t,n[l],l,c)}})
if(!i)throw new TypeError(O)
return t}
j.find=j.detect=function(n,r,t){var e
E(n,function(n,i,u){if(r.call(t,n,i,u)){e=n
return true}})
return e}
j.filter=j.select=function(n,r,t){var e=[]
if(n==null)return e
if(g&&n.filter===g)return n.filter(r,t)
A(n,function(n,i,u){if(r.call(t,n,i,u))e[e.length]=n})
return e}
j.reject=function(n,r,t){return j.filter(n,function(n,e,i){return!r.call(t,n,e,i)},t)}
j.every=j.all=function(n,r,e){r||(r=j.identity)
var i=true
if(n==null)return i
if(y&&n.every===y)return n.every(r,e)
A(n,function(n,u,a){if(!(i=i&&r.call(e,n,u,a)))return t})
return!!i}
var E=j.some=j.any=function(n,r,e){r||(r=j.identity)
var i=false
if(n==null)return i
if(m&&n.some===m)return n.some(r,e)
A(n,function(n,u,a){if(i||(i=r.call(e,n,u,a)))return t})
return!!i}
j.contains=j.include=function(n,r){if(n==null)return false
if(d&&n.indexOf===d)return n.indexOf(r)!=-1
return E(n,function(n){return n===r})}
j.invoke=function(n,r){var t=f.call(arguments,2)
var e=j.isFunction(r)
return j.map(n,function(n){return(e?r:n[r]).apply(n,t)})}
j.pluck=function(n,r){return j.map(n,function(n){return n[r]})}
j.where=function(n,r,t){if(j.isEmpty(r))return t?null:[]
return j[t?"find":"filter"](n,function(n){for(var t in r){if(r[t]!==n[t])return false}return true})}
j.findWhere=function(n,r){return j.where(n,r,true)}
j.max=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.max.apply(Math,n)}if(!r&&j.isEmpty(n))return-Infinity
var e={computed:-Infinity,value:-Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a>=e.computed&&(e={value:n,computed:a})})
return e.value}
j.min=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.min.apply(Math,n)}if(!r&&j.isEmpty(n))return Infinity
var e={computed:Infinity,value:Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a<e.computed&&(e={value:n,computed:a})})
return e.value}
j.shuffle=function(n){var r
var t=0
var e=[]
A(n,function(n){r=j.random(t++)
e[t-1]=e[r]
e[r]=n})
return e}
var k=function(n){return j.isFunction(n)?n:function(r){return r[n]}}
j.sortBy=function(n,r,t){var e=k(r)
return j.pluck(j.map(n,function(n,r,i){return{value:n,index:r,criteria:e.call(t,n,r,i)}}).sort(function(n,r){var t=n.criteria
var e=r.criteria
if(t!==e){if(t>e||t===void 0)return 1
if(t<e||e===void 0)return-1}return n.index<r.index?-1:1}),"value")}
var I=function(n,r,t,e){var i={}
var u=k(r||j.identity)
A(n,function(r,a){var f=u.call(t,r,a,n)
e(i,f,r)})
return i}
j.groupBy=function(n,r,t){return I(n,r,t,function(n,r,t){(j.has(n,r)?n[r]:n[r]=[]).push(t)})}
j.countBy=function(n,r,t){return I(n,r,t,function(n,r){if(!j.has(n,r))n[r]=0
n[r]++})}
j.sortedIndex=function(n,r,t,e){t=t==null?j.identity:k(t)
var i=t.call(e,r)
var u=0,a=n.length
while(u<a){var f=u+a>>>1
t.call(e,n[f])<i?u=f+1:a=f}return u}
j.toArray=function(n){if(!n)return[]
if(j.isArray(n))return f.call(n)
if(n.length===+n.length)return j.map(n,j.identity)
return j.values(n)}
j.size=function(n){if(n==null)return 0
return n.length===+n.length?n.length:j.keys(n).length}
j.first=j.head=j.take=function(n,r,t){if(n==null)return void 0
return r!=null&&!t?f.call(n,0,r):n[0]}
j.initial=function(n,r,t){return f.call(n,0,n.length-(r==null||t?1:r))}
j.last=function(n,r,t){if(n==null)return void 0
if(r!=null&&!t){return f.call(n,Math.max(n.length-r,0))}else{return n[n.length-1]}}
j.rest=j.tail=j.drop=function(n,r,t){return f.call(n,r==null||t?1:r)}
j.compact=function(n){return j.filter(n,j.identity)}
var F=function(n,r,t){A(n,function(n){if(j.isArray(n)){r?a.apply(t,n):F(n,r,t)}else{t.push(n)}})
return t}
j.flatten=function(n,r){return F(n,r,[])}
j.without=function(n){return j.difference(n,f.call(arguments,1))}
j.uniq=j.unique=function(n,r,t,e){if(j.isFunction(r)){e=t
t=r
r=false}var i=t?j.map(n,t,e):n
var u=[]
var a=[]
A(i,function(t,e){if(r?!e||a[a.length-1]!==t:!j.contains(a,t)){a.push(t)
u.push(n[e])}})
return u}
j.union=function(){return j.uniq(l.apply(e,arguments))}
j.intersection=function(n){var r=f.call(arguments,1)
return j.filter(j.uniq(n),function(n){return j.every(r,function(r){return j.indexOf(r,n)>=0})})}
j.difference=function(n){var r=l.apply(e,f.call(arguments,1))
return j.filter(n,function(n){return!j.contains(r,n)})}
j.zip=function(){var n=f.call(arguments)
var r=j.max(j.pluck(n,"length"))
var t=new Array(r)
for(var e=0;e<r;e++){t[e]=j.pluck(n,""+e)}return t}
j.object=function(n,r){if(n==null)return{}
var t={}
for(var e=0,i=n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t}
j.indexOf=function(n,r,t){if(n==null)return-1
var e=0,i=n.length
if(t){if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else{e=j.sortedIndex(n,r)
return n[e]===r?e:-1}}if(d&&n.indexOf===d)return n.indexOf(r,t)
for(;e<i;e++)if(n[e]===r)return e
return-1}
j.lastIndexOf=function(n,r,t){if(n==null)return-1
var e=t!=null
if(b&&n.lastIndexOf===b){return e?n.lastIndexOf(r,t):n.lastIndexOf(r)}var i=e?t:n.length
while(i--)if(n[i]===r)return i
return-1}
j.range=function(n,r,t){if(arguments.length<=1){r=n||0
n=0}t=arguments[2]||1
var e=Math.max(Math.ceil((r-n)/t),0)
var i=0
var u=new Array(e)
while(i<e){u[i++]=n
n+=t}return u}
j.bind=function(n,r){if(n.bind===w&&w)return w.apply(n,f.call(arguments,1))
var t=f.call(arguments,2)
return function(){return n.apply(r,t.concat(f.call(arguments)))}}
j.partial=function(n){var r=f.call(arguments,1)
return function(){return n.apply(this,r.concat(f.call(arguments)))}}
j.bindAll=function(n){var r=f.call(arguments,1)
if(r.length===0)r=j.functions(n)
A(r,function(r){n[r]=j.bind(n[r],n)})
return n}
j.memoize=function(n,r){var t={}
r||(r=j.identity)
return function(){var e=r.apply(this,arguments)
return j.has(t,e)?t[e]:t[e]=n.apply(this,arguments)}}
j.delay=function(n,r){var t=f.call(arguments,2)
return setTimeout(function(){return n.apply(null,t)},r)}
j.defer=function(n){return j.delay.apply(j,[n,1].concat(f.call(arguments,1)))}
j.throttle=function(n,r){var t,e,i,u
var a=0
var f=function(){a=new Date
i=null
u=n.apply(t,e)}
return function(){var l=new Date
var c=r-(l-a)
t=this
e=arguments
if(c<=0){clearTimeout(i)
i=null
a=l
u=n.apply(t,e)}else if(!i){i=setTimeout(f,c)}return u}}
j.debounce=function(n,r,t){var e,i
return function(){var u=this,a=arguments
var f=function(){e=null
if(!t)i=n.apply(u,a)}
var l=t&&!e
clearTimeout(e)
e=setTimeout(f,r)
if(l)i=n.apply(u,a)
return i}}
j.once=function(n){var r=false,t
return function(){if(r)return t
r=true
t=n.apply(this,arguments)
n=null
return t}}
j.wrap=function(n,r){return function(){var t=[n]
a.apply(t,arguments)
return r.apply(this,t)}}
j.compose=function(){var n=arguments
return function(){var r=arguments
for(var t=n.length-1;t>=0;t--){r=[n[t].apply(this,r)]}return r[0]}}
j.after=function(n,r){if(n<=0)return r()
return function(){if(--n<1){return r.apply(this,arguments)}}}
j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object")
var r=[]
for(var t in n)if(j.has(n,t))r[r.length]=t
return r}
j.values=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push(n[t])
return r}
j.pairs=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push([t,n[t]])
return r}
j.invert=function(n){var r={}
for(var t in n)if(j.has(n,t))r[n[t]]=t
return r}
j.functions=j.methods=function(n){var r=[]
for(var t in n){if(j.isFunction(n[t]))r.push(t)}return r.sort()}
j.extend=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){n[t]=r[t]}}})
return n}
j.pick=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
A(t,function(t){if(t in n)r[t]=n[t]})
return r}
j.omit=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
for(var i in n){if(!j.contains(t,i))r[i]=n[i]}return r}
j.defaults=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){if(n[t]==null)n[t]=r[t]}}})
return n}
j.clone=function(n){if(!j.isObject(n))return n
return j.isArray(n)?n.slice():j.extend({},n)}
j.tap=function(n,r){r(n)
return n}
var R=function(n,r,t,e){if(n===r)return n!==0||1/n==1/r
if(n==null||r==null)return n===r
if(n instanceof j)n=n._wrapped
if(r instanceof j)r=r._wrapped
var i=c.call(n)
if(i!=c.call(r))return false
switch(i){case"[object String]":return n==String(r)
case"[object Number]":return n!=+n?r!=+r:n==0?1/n==1/r:n==+r
case"[object Date]":case"[object Boolean]":return+n==+r
case"[object RegExp]":return n.source==r.source&&n.global==r.global&&n.multiline==r.multiline&&n.ignoreCase==r.ignoreCase}if(typeof n!="object"||typeof r!="object")return false
var u=t.length
while(u--){if(t[u]==n)return e[u]==r}t.push(n)
e.push(r)
var a=0,f=true
if(i=="[object Array]"){a=n.length
f=a==r.length
if(f){while(a--){if(!(f=R(n[a],r[a],t,e)))break}}}else{var l=n.constructor,o=r.constructor
if(l!==o&&!(j.isFunction(l)&&l instanceof l&&j.isFunction(o)&&o instanceof o)){return false}for(var s in n){if(j.has(n,s)){a++
if(!(f=j.has(r,s)&&R(n[s],r[s],t,e)))break}}if(f){for(s in r){if(j.has(r,s)&&!a--)break}f=!a}}t.pop()
e.pop()
return f}
j.isEqual=function(n,r){return R(n,r,[],[])}
j.isEmpty=function(n){if(n==null)return true
if(j.isArray(n)||j.isString(n))return n.length===0
for(var r in n)if(j.has(n,r))return false
return true}
j.isElement=function(n){return!!(n&&n.nodeType===1)}
j.isArray=x||function(n){return c.call(n)=="[object Array]"}
j.isObject=function(n){return n===Object(n)}
A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(r){return c.call(r)=="[object "+n+"]"}})
if(!j.isArguments(arguments)){j.isArguments=function(n){return!!(n&&j.has(n,"callee"))}}if(typeof/./!=="function"){j.isFunction=function(n){return typeof n==="function"}}j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))}
j.isNaN=function(n){return j.isNumber(n)&&n!=+n}
j.isBoolean=function(n){return n===true||n===false||c.call(n)=="[object Boolean]"}
j.isNull=function(n){return n===null}
j.isUndefined=function(n){return n===void 0}
j.has=function(n,r){return o.call(n,r)}
j.noConflict=function(){n._=r
return this}
j.identity=function(n){return n}
j.times=function(n,r,t){var e=Array(n)
for(var i=0;i<n;i++)e[i]=r.call(t,i)
return e}
j.random=function(n,r){if(r==null){r=n
n=0}return n+Math.floor(Math.random()*(r-n+1))}
var S={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}}
S.unescape=j.invert(S.escape)
var M={escape:new RegExp("["+j.keys(S.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(S.unescape).join("|")+")","g")}
j.each(["escape","unescape"],function(n){j[n]=function(r){if(r==null)return""
return(""+r).replace(M[n],function(r){return S[n][r]})}})
j.result=function(n,r){if(n==null)return null
var t=n[r]
return j.isFunction(t)?t.call(n):t}
j.mixin=function(n){A(j.functions(n),function(r){var t=j[r]=n[r]
j.prototype[r]=function(){var n=[this._wrapped]
a.apply(n,arguments)
return D.call(this,t.apply(j,n))}})}
var N=0
j.uniqueId=function(n){var r=++N+""
return n?n+r:r}
j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
var T=/(.)^/
var q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"}
var B=/\\|'|\r|\n|\t|\u2028|\u2029/g
j.template=function(n,r,t){var e
t=j.defaults({},t,j.templateSettings)
var i=new RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g")
var u=0
var a="__p+='"
n.replace(i,function(r,t,e,i,f){a+=n.slice(u,f).replace(B,function(n){return"\\"+q[n]})
if(t){a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"}if(e){a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"}if(i){a+="';\n"+i+"\n__p+='"}u=f+r.length
return r})
a+="';\n"
if(!t.variable)a="with(obj||{}){\n"+a+"}\n"
a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n"
try{e=new Function(t.variable||"obj","_",a)}catch(f){f.source=a
throw f}if(r)return e(r,j)
var l=function(n){return e.call(this,n,j)}
l.source="function("+(t.variable||"obj")+"){\n"+a+"}"
return l}
j.chain=function(n){return j(n).chain()}
var D=function(n){return this._chain?j(n).chain():n}
j.mixin(j)
A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=e[n]
j.prototype[n]=function(){var t=this._wrapped
r.apply(t,arguments)
if((n=="shift"||n=="splice")&&t.length===0)delete t[0]
return D.call(this,t)}})
A(["concat","join","slice"],function(n){var r=e[n]
j.prototype[n]=function(){return D.call(this,r.apply(this._wrapped,arguments))}})
j.extend(j.prototype,{chain:function(){this._chain=true
return this},value:function(){return this._wrapped}})}).call(this)
__KA_module.exports = _;
this._ = _;
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/d3/index.js": "../../../third_party/javascript-khansrc/d3/d3.js", "javascript/node_modules/handlebars/index.js": "../../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js", "javascript/node_modules/moment/index.js": "../../../third_party/javascript-khansrc/moment-khansrc/moment.js", "javascript/node_modules/raven/index.js": "../../../third_party/javascript-khansrc/raven-js/raven.js", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/drag-target.jsx": "../../../third_party/javascript-khansrc/react-components/js/drag-target.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/sortable.jsx": "../../../third_party/javascript-khansrc/react-components/js/sortable.jsx", "javascript/node_modules/react-components/styles.js": "../../../third_party/javascript-khansrc/react-components/js/styles.js", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/react-components/window-drag.jsx": "../../../third_party/javascript-khansrc/react-components/js/window-drag.jsx", "javascript/node_modules/react-tween-state/index.js": "../../../third_party/javascript-khansrc/react-tween-state/index.js", "third_party/javascript-khansrc/localeplanet/icu.{{lang}}.js": "icu.en.js", "third_party/javascript-khansrc/react-compiled/react.{{dev_or_prod}}.js": "react.prod.js"});
; KAdefine.updatePathToPackageMap({"javascript/login-package/login.js": "e7cb0cd41d89.js", "javascript/login-package/signup-modal.jsx": "be5ded014107.js", "javascript/login-package/signup.js": "d254d5805556.js", "javascript/notifications-package/notifications.js": "e61af6c7698a.js", "javascript/react-guiders-package/guider.jsx": "426a8ba8e608.js", "javascript/typeahead-package/build-mission-source.js": "7986a8ec0000.js", "javascript/typeahead-package/search-bar.jsx": "55bdc1323b82.js", "javascript/typeahead-package/search-source.js": "39c2e7eb96d5.js", "javascript/typeahead-package/suggestion-source.js": "be4b3c01b6a1.js"});

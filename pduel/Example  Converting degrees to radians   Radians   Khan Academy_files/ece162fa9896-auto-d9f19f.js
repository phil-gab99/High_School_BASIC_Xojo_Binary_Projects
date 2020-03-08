KAdefine("javascript/shared-package/parse-query-string.js", function(require, module, exports) {
var parseQueryString=function(e){e=e||window.location.search.substring(1)
var r={},n,o=/\+/g,t=/([^&=]+)=?([^&]*)/g,i=function(e){return decodeURIComponent(e.replace(o," "))}
while(n=t.exec(e)){r[i(n[1])]=i(n[2])}return r}
module.exports=parseQueryString
});

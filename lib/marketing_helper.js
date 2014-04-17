/*! Cookies.js - 0.3.1; Copyright (c) 2013, Scott Hamper; http://www.opensource.org/licenses/MIT */
(function(e){"use strict";var a=function(b,d,c){return 1===arguments.length?a.get(b):a.set(b,d,c)};a._document=document;a._navigator=navigator;a.defaults={path:"/"};a.get=function(b){a._cachedDocumentCookie!==a._document.cookie&&a._renewCache();return a._cache[b]};a.set=function(b,d,c){c=a._getExtendedOptions(c);c.expires=a._getExpiresDate(d===e?-1:c.expires);a._document.cookie=a._generateCookieString(b,d,c);return a};a.expire=function(b,d){return a.set(b,e,d)};a._getExtendedOptions=function(b){return{path:b&& b.path||a.defaults.path,domain:b&&b.domain||a.defaults.domain,expires:b&&b.expires||a.defaults.expires,secure:b&&b.secure!==e?b.secure:a.defaults.secure}};a._isValidDate=function(b){return"[object Date]"===Object.prototype.toString.call(b)&&!isNaN(b.getTime())};a._getExpiresDate=function(b,d){d=d||new Date;switch(typeof b){case "number":b=new Date(d.getTime()+1E3*b);break;case "string":b=new Date(b)}if(b&&!a._isValidDate(b))throw Error("`expires` parameter cannot be converted to a valid Date instance"); return b};a._generateCookieString=function(b,a,c){b=encodeURIComponent(b);a=(a+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};b=b+"="+a+(c.path?";path="+c.path:"");b+=c.domain?";domain="+c.domain:"";b+=c.expires?";expires="+c.expires.toUTCString():"";return b+=c.secure?";secure":""};a._getCookieObjectFromString=function(b){var d={};b=b?b.split("; "):[];for(var c=0;c<b.length;c++){var f=a._getKeyValuePairFromCookieString(b[c]);d[f.key]===e&&(d[f.key]=f.value)}return d};a._getKeyValuePairFromCookieString= function(b){var a=b.indexOf("="),a=0>a?b.length:a;return{key:decodeURIComponent(b.substr(0,a)),value:decodeURIComponent(b.substr(a+1))}};a._renewCache=function(){a._cache=a._getCookieObjectFromString(a._document.cookie);a._cachedDocumentCookie=a._document.cookie};a._areEnabled=function(){var b="1"===a.set("cookies.js",1).get("cookies.js");a.expire("cookies.js");return b};a.enabled=a._areEnabled();"function"===typeof define&&define.amd?define(function(){return a}):"undefined"!==typeof exports?("undefined"!== typeof module&&module.exports&&(exports=module.exports=a),exports.Cookies=a):window.Cookies=a})();

/*! * querystring - https://github.com/jgallen23/querystring * copyright Greg Allen 2013 * MIT License */
var querystring={parse:function(a){var b={};if(a=void 0!==a?a:window.location.search,"string"==typeof a&&a.length>0){"?"===a[0]&&(a=a.substring(1)),a=a.split("&");for(var c=0,d=a.length;d>c;c++){var e,f,g=a[c],h=g.indexOf("=");h>=0?(e=g.substr(0,h),f=g.substr(h+1)):(e=g,f=""),f=decodeURIComponent(f),void 0===b[e]?b[e]=f:b[e]instanceof Array?b[e].push(f):b[e]=[b[e],f]}}return b},stringify:function(a){var b=[];if(a&&a.constructor===Object)for(var c in a)if(a[c]instanceof Array)for(var d=0,e=a[c].length;e>d;d++)b.push([encodeURIComponent(c),encodeURIComponent(a[c][d])].join("="));else b.push([encodeURIComponent(c),encodeURIComponent(a[c])].join("="));return b.join("&")}};

Cookies.defaults = {
    path: '/',
    expires: 60*60*24*30,
    domain: '.dapulse.com'
};

var qs, m_campaign, m_source, m_medium, m_content, m_retargeting, m_referrer, m_vertical;

qs = querystring.parse();
m_campaign = qs.marketing_campaign || qs.utm_campaign;
m_source = qs.marketing_source || qs.utm_source;
m_medium = qs.marketing_medium || qs.utm_medium;
m_content = qs.marketing_content || qs.utm_content;
m_retargeting = qs.marketing_retargeting || qs.utm_retargeting;
m_referrer = qs.utm_referrer || document.referrer;
m_vertical = qs.marketing_vertical;

if (!Cookies.get('m_campaign') && m_campaign) { Cookies.set('m_campaign', m_campaign); }
if (!Cookies.get('m_source') && m_source) { Cookies.set('m_source', m_source); }
if (!Cookies.get('m_medium') && m_medium) { Cookies.set('m_medium', m_medium); }
if (!Cookies.get('m_content') && m_content) { Cookies.set('m_content', m_content); }
if (!Cookies.get('m_retargeting') && m_retargeting) { Cookies.set('m_retargeting', m_retargeting); }
if (!Cookies.get('m_referrer') && m_referrer) { Cookies.set('m_referrer', m_referrer); }
if (!Cookies.get('m_vertical') && m_vertical) { Cookies.set('m_vertical', m_vertical); }
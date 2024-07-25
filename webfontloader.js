/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){var p="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this;function q(){p.Symbol||(p.Symbol=aa);q=function(){}}var ba=0;function aa(a){return"jscomp_symbol_"+a+ba++}function t(){q();p.Symbol.iterator||(p.Symbol.iterator=p.Symbol("iterator"));t=function(){}}
function ca(a){t();if(a[p.Symbol.iterator])return a[p.Symbol.iterator]();if(!(a instanceof Array||"string"==typeof a||a instanceof String))throw new TypeError(a+" is not iterable");var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}}function da(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return u.apply(null,arguments)}var v=Date.now||function(){return+new Date};function w(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var ga=!!window.FontFace;function x(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function z(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function A(a){a.parentNode&&a.parentNode.removeChild(a)}
function B(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function C(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){return a.o.location.hostname||a.a.location.hostname}function D(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=x(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;ga?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);z(a,"head",b)}
function E(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=x(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function F(){this.a=0;this.c=null}function G(a){a.a++;return function(){a.a--;ia(a)}}function ja(a,b){a.c=b;ia(a)}function ia(a){0==a.a&&a.c&&(a.c(),a.c=null)};function ka(a){this.a=a||"-"}ka.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function la(a){return ma(a)+" "+(a.f+"00")+" 300px "+na(a.c)}function na(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function I(a){return a.a+a.f}function ma(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function oa(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function pa(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new ka("-");this.j=!1!==b.events;this.g=!1!==b.classes}function qa(a){a.g&&B(a.f,[a.a.c("wf","loading")]);J(a,"loading")}function ra(a){if(a.g){var b=C(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));B(a.f,c,d)}J(a,"inactive")}function J(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,I(c));else a.h[b]()};function sa(){this.c={}}function ta(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function K(a,b){this.c=a;this.f=b;this.a=x(this.c,"span",{"aria-hidden":"true"},this.f)}function L(a){z(a.c,"body",a.a)}function M(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+na(a.c)+";"+("font-style:"+ma(a)+";font-weight:"+(a.f+"00")+";")};function ua(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}ua.prototype.start=function(){var a=this.c.o.document,b=this,c=v(),d=new Promise(function(d,e){function f(){v()-c>=b.f?e():a.fonts.load(la(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function va(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new K(this.c,this.s);this.h=new K(this.c,this.s);this.j=new K(this.c,this.s);this.m=new K(this.c,this.s);a=new H(this.a.c+",serif",I(this.a));a=M(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",I(this.a));a=M(a);this.h.a.style.cssText=a;a=new H("serif",I(this.a));a=M(a);this.j.a.style.cssText=a;a=new H("sans-serif",I(this.a));
a=M(a);this.m.a.style.cssText=a;L(this.g);L(this.h);L(this.j);L(this.m)}var N={D:"serif",C:"sans-serif"},O=null;function wa(){if(null===O){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);O=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return O}va.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=v();xa(this)};
function ya(a,b,c){for(var d in N)if(N.hasOwnProperty(d)&&b===a.f[N[d]]&&c===a.f[N[d]])return!0;return!1}function xa(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=wa()&&ya(a,b,c));d?v()-a.A>=a.w?wa()&&ya(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?P(a,a.v):P(a,a.B):za(a):P(a,a.v)}function za(a){setTimeout(u(function(){xa(this)},a),50)}function P(a,b){setTimeout(u(function(){A(this.g.a);A(this.h.a);A(this.j.a);A(this.m.a);b(this.a)},a),0)};function Q(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var R=null;Q.prototype.g=function(a){var b=this.a;b.g&&B(b.f,[b.a.c("wf",a.c,I(a).toString(),"active")],[b.a.c("wf",a.c,I(a).toString(),"loading"),b.a.c("wf",a.c,I(a).toString(),"inactive")]);J(b,"fontactive",a);this.m=!0;Aa(this)};
Q.prototype.h=function(a){var b=this.a;if(b.g){var c=C(b.f,b.a.c("wf",a.c,I(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,I(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,I(a).toString(),"inactive"));B(b.f,d,e)}J(b,"fontinactive",a);Aa(this)};function Aa(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&B(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),J(a,"active")):ra(a.a))};function S(a){this.f=a;this.a=new sa;this.j=0;this.g=this.h=!0}S.prototype.load=function(a){this.c=new w(this.f,a.context||this.f);this.h=!1!==a.events;this.g=!1!==a.classes;Ba(this,new pa(this.c,a),a)};S.prototype.m=function(a){this.c=new w(this.f,a.context||this.f);a=ta(this.a,a,this.c);for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c].f();e.length&&b.push.apply(b,[].concat(e instanceof Array?e:da(ca(e))))}return b};
function Ca(a,b,c,d,e){var f=0==--a.j;(a.g||a.h)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)ra(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,y=k;r.g&&B(r.f,[r.a.c("wf",y.c,I(y).toString(),"loading")]);J(r,"fontloading",y);r=null;if(null===R)if(window.FontFace){var y=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),Ja=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
R=y?42<parseInt(y[1],10):Ja?!1:!0}else R=!1;R?r=new ua(u(b.g,b),u(b.h,b),b.c,k,b.s,n):r=new va(u(b.g,b),u(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function Ba(a,b,c){var d=[],e=c.timeout;qa(b);var d=ta(a.a,c,a.c),f=new Q(a.c,b,e);a.j=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){Ca(a,f,b,d,c)})};function T(a,b){this.c=a;this.a=b}
T.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new H(k,h))):e.push(new H(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;E(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};T.prototype.f=function(){console.log(Error("Monotype does not support loading fonts by url."));return[""]};function U(a,b){this.c=a;this.a=b}U.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new F;b=0;for(c=d.length;b<c;b++)D(this.c,d[b],G(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new H(d[0],h[l]));else m.push(new H(d[0]));ja(g,function(){a(m,f)})};U.prototype.f=function(){return this.a.urls||[]};function Da(a,b){a?this.c=a:this.c=Ea;this.a=[];this.f=[];this.g=b||""}var Ea="https://fonts.googleapis.com/css";function Fa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function Ga(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function Ha(a){this.f=a;this.a=[];this.c={}}
var Ia={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ka={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},La={i:"i",italic:"i",n:"n",normal:"n"},
Ma=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Na(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ma.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":La[k];n=n[1];if(null==n||""==n)n="4";else var r=Ka[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Ia[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Ia[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function V(a,b){this.c=a;this.a=b}var Oa={Arimo:!0,Cousine:!0,Tinos:!0};V.prototype.load=function(a){var b=new F,c=this.c,d=new Da(this.a.api,this.a.text),e=this.a.families;Fa(d,e);var f=new Ha(e);Na(f);D(c,Ga(d),G(b));ja(b,function(){a(f.a,f.c,Oa)})};V.prototype.f=function(){var a=new Da(this.a.api,this.a.text),b=this.a.families;Fa(a,b);Na(new Ha(b));return[Ga(a)]};function W(a,b){this.c=a;this.a=b}W.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?E(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new H(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};
W.prototype.f=function(){console.log(Error("Typekit does not support loading fonts by url."));return[""]};function X(a,b){this.c=a;this.g=b;this.a=[]}X.prototype.load=function(a){var b=this.g.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new H(h.name,oa("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},E(this.c,(this.g.api||"https://f.fontdeck.com/s/css/js/")+ha(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};
X.prototype.f=function(){console.log(Error("Fontdeck does not support loading fonts by url."));return[""]};var Y=new S(window);Y.a.c.custom=function(a,b){return new U(b,a)};Y.a.c.fontdeck=function(a,b){return new X(b,a)};Y.a.c.monotype=function(a,b){return new T(b,a)};Y.a.c.typekit=function(a,b){return new W(b,a)};Y.a.c.google=function(a,b){return new V(b,a)};var Z={load:u(Y.load,Y),getFontApiUrl:u(Y.m,Y)};
"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&(Y.load(window.WebFontConfig),Y.m(window.WebFontConfig)));}());

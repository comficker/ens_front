(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{876:function(t,e,n){"use strict";function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}n.d(e,"a",(function(){return r})),r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(n){i=0;for(var r=(n=n.slice(0)).length;i<r;++i)n[i].apply(this,e)}return this},r.prototype.emitReserved=r.prototype.emit,r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},877:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n(879);function o(t,...e){return e.reduce(((e,n)=>(t.hasOwnProperty(n)&&(e[n]=t[n]),e)),{})}const c=setTimeout,h=clearTimeout;function l(t,e){e.useNativeTimers?(t.setTimeoutFn=c.bind(r.a),t.clearTimeoutFn=h.bind(r.a)):(t.setTimeoutFn=setTimeout.bind(r.a),t.clearTimeoutFn=clearTimeout.bind(r.a))}function d(t){return"string"==typeof t?function(t){let e=0,n=0;for(let i=0,r=t.length;i<r;i++)e=t.charCodeAt(i),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(i++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))}},878:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(880),o=n(876),c=n(877);class h extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class l extends o.a{constructor(t){super(),this.writable=!1,Object(c.b)(this,t),this.opts=t,this.query=t.query,this.readyState="",this.socket=t.socket}onError(t,e,n){return super.emitReserved("error",new h(t,e,n)),this}open(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(data){const t=Object(r.a)(data,this.socket.binaryType);this.onPacket(t)}onPacket(t){super.emitReserved("packet",t)}onClose(details){this.readyState="closed",super.emitReserved("close",details)}}},879:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")()},880:function(t,e,n){"use strict";n.d(e,"e",(function(){return R})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return E})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return A}));const r=Object.create(null);r.open="0",r.close="1",r.ping="2",r.pong="3",r.message="4",r.upgrade="5",r.noop="6";const o=Object.create(null);Object.keys(r).forEach((t=>{o[r[t]]=t}));const c={type:"error",data:"parser error"},h="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),l="function"==typeof ArrayBuffer,d=(data,t)=>{const e=new FileReader;return e.onload=function(){const content=e.result.split(",")[1];t("b"+content)},e.readAsDataURL(data)};var f=({type:t,data:data},e,n)=>{return h&&data instanceof Blob?e?n(data):d(data,n):l&&(data instanceof ArrayBuffer||(o=data,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(o):o&&o.buffer instanceof ArrayBuffer))?e?n(data):d(new Blob([data]),n):n(r[t]+(data||""));var o};const y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let i=0;i<y.length;i++)m[y.charCodeAt(i)]=i;const v="function"==typeof ArrayBuffer,k=(data,t)=>{if(v){const e=(t=>{let i,e,n,r,o,c=.75*t.length,h=t.length,p=0;"="===t[t.length-1]&&(c--,"="===t[t.length-2]&&c--);const l=new ArrayBuffer(c),d=new Uint8Array(l);for(i=0;i<h;i+=4)e=m[t.charCodeAt(i)],n=m[t.charCodeAt(i+1)],r=m[t.charCodeAt(i+2)],o=m[t.charCodeAt(i+3)],d[p++]=e<<2|n>>4,d[p++]=(15&n)<<4|r>>2,d[p++]=(3&r)<<6|63&o;return l})(data);return w(e,t)}return{base64:!0,data:data}},w=(data,t)=>"blob"===t&&data instanceof ArrayBuffer?new Blob([data]):data;var O=(t,e)=>{if("string"!=typeof t)return{type:"message",data:w(t,e)};const n=t.charAt(0);if("b"===n)return{type:"message",data:k(t.substring(1),e)};return o[n]?t.length>1?{type:o[n],data:t.substring(1)}:{type:o[n]}:c};const _=String.fromCharCode(30),E=(t,e)=>{const n=t.length,r=new Array(n);let o=0;t.forEach(((t,i)=>{f(t,!1,(t=>{r[i]=t,++o===n&&e(r.join(_))}))}))},A=(t,e)=>{const n=t.split(_),r=[];for(let i=0;i<n.length;i++){const t=O(n[i],e);if(r.push(t),"error"===t.type)break}return r},R=4},881:function(t,e,n){"use strict";function r(t){let e="";for(let i in t)t.hasOwnProperty(i)&&(e.length&&(e+="&"),e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return e}function o(t){let e={},n=t.split("&");for(let i=0,t=n.length;i<t;i++){let t=n[i].split("=");e[decodeURIComponent(t[0])]=decodeURIComponent(t[1])}return e}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},882:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));const r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),map={};let o,c=0,i=0;function h(t){let e="";do{e=r[t%64]+e,t=Math.floor(t/64)}while(t>0);return e}function l(){const t=h(+new Date);return t!==o?(c=0,o=t):t+"."+h(c++)}for(;i<64;i++)map[r[i]]=i},883:function(t,e,n){"use strict";var r=n(11),o=n(12),c=n(84),h=n(55),l=n(66),d=n(446),f=n(26),y=n(14),m=n(444),v=n(255),k=n(884),w=n(885),O=n(155),_=n(886),E=[],A=o(E.sort),R=o(E.push),C=y((function(){E.sort(void 0)})),T=y((function(){E.sort(null)})),B=v("sort"),x=!y((function(){if(O)return O<70;if(!(k&&k>3)){if(w)return!0;if(_)return _<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)E.push({k:t+n,v:e})}for(E.sort((function(a,b){return b.v-a.v})),n=0;n<E.length;n++)t=E[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:C||!T||!B||!x},{sort:function(t){void 0!==t&&c(t);var e=h(this);if(x)return void 0===t?A(e):A(e,t);var n,r,o=[],y=l(e);for(r=0;r<y;r++)r in e&&R(o,e[r]);for(m(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:f(e)>f(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<y;)d(e,r++);return e}})},884:function(t,e,n){var r=n(128).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},885:function(t,e,n){var r=n(128);t.exports=/MSIE|Trident/.test(r)},886:function(t,e,n){var r=n(128).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},887:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return y}));var r=n(878),o=n(881),c=n(882),h=n(877),l=n(888),d=n(880);const f="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class y extends r.a{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,n=f?{}:Object(h.c)(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=l.d&&!f?e?new l.a(t,e):new l.a(t):new l.a(t,e,n)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType||l.b,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(e){this.writable=!1;for(let i=0;i<e.length;i++){const n=e[i],r=i===e.length-1;Object(d.c)(n,this.supportsBinary,(data=>{const e={};if(!l.d&&(n.options&&(e.compress=n.options.compress),this.opts.perMessageDeflate)){("string"==typeof data?t.byteLength(data):data.length)<this.opts.perMessageDeflate.threshold&&(e.compress=!1)}try{l.d?this.ws.send(data):this.ws.send(data,e)}catch(t){}r&&Object(l.c)((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const e=this.opts.secure?"wss":"ws";let n="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=Object(c.a)()),this.supportsBinary||(t.b64=1);const r=Object(o.b)(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}check(){return!!l.a}}}).call(this,n(1).Buffer)},888:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return h})),n.d(e,"b",(function(){return l}));var r=n(879);const o="function"==typeof Promise&&"function"==typeof Promise.resolve?t=>Promise.resolve().then(t):(t,e)=>e(t,0),c=r.a.WebSocket||r.a.MozWebSocket,h=!0,l="arraybuffer"},889:function(t,e,n){"use strict";n.r(e),n.d(e,"protocol",(function(){return V})),n.d(e,"Manager",(function(){return G})),n.d(e,"Socket",(function(){return $})),n.d(e,"io",(function(){return Z})),n.d(e,"connect",(function(){return Z})),n.d(e,"default",(function(){return Z}));var r={};n.r(r),n.d(r,"protocol",(function(){return V})),n.d(r,"PacketType",(function(){return H})),n.d(r,"Encoder",(function(){return K})),n.d(r,"Decoder",(function(){return Y}));var o=n(878),c=n(882),h=n(881),l=n(880);let d=!1;try{d="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}const f=d;var y=n(879);function m(t){const e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||f))return new XMLHttpRequest}catch(t){}if(!e)try{return new(y.a[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}var v=n(876),k=n(877);function w(){}const O=null!=new m({xdomain:!1}).responseType;class _ extends o.a{constructor(t){if(super(t),this.polling=!1,"undefined"!=typeof location){const e="https:"===location.protocol;let n=location.port;n||(n=e?"443":"80"),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}const e=t&&t.forceBase64;this.supportsBinary=O&&!e}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let t=0;this.polling&&(t++,this.once("pollComplete",(function(){--t||e()}))),this.writable||(t++,this.once("drain",(function(){--t||e()})))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(data){Object(l.b)(data,this.socket.binaryType).forEach((t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,Object(l.d)(t,(data=>{this.doWrite(data,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){let t=this.query||{};const e=this.opts.secure?"https":"http";let n="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=Object(c.a)()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port);const r=Object(h.b)(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new E(this.uri(),t)}doWrite(data,t){const e=this.request({method:"POST",data:data});e.on("success",t),e.on("error",((t,e)=>{this.onError("xhr post error",t,e)}))}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",((t,e)=>{this.onError("xhr poll error",t,e)})),this.pollXhr=t}}class E extends v.a{constructor(t,e){super(),Object(k.b)(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.create()}create(){const t=Object(k.c)(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const e=this.xhr=new m(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&e.setRequestHeader(i,this.opts.extraHeaders[i])}}catch(t){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{4===e.readyState&&(200===e.status||1223===e.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"==typeof e.status?e.status:0)}),0))},e.send(this.data)}catch(t){return void this.setTimeoutFn((()=>{this.onError(t)}),0)}"undefined"!=typeof document&&(this.index=E.requestsCount++,E.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=w,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete E.requests[this.index],this.xhr=null}}onLoad(){const data=this.xhr.responseText;null!==data&&(this.emitReserved("data",data),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}if(E.requestsCount=0,E.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",A);else if("function"==typeof addEventListener){const t="onpagehide"in y.a?"pagehide":"unload";addEventListener(t,A,!1)}function A(){for(let i in E.requests)E.requests.hasOwnProperty(i)&&E.requests[i].abort()}const R={websocket:n(887).a,polling:_},C=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,T=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function B(t){const e=t,b=t.indexOf("["),n=t.indexOf("]");-1!=b&&-1!=n&&(t=t.substring(0,b)+t.substring(b,n).replace(/:/g,";")+t.substring(n,t.length));let r=C.exec(t||""),o={},i=14;for(;i--;)o[T[i]]=r[i]||"";return-1!=b&&-1!=n&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=function(t,path){const e=/\/{2,9}/g,n=path.replace(e,"/").split("/");"/"!=path.substr(0,1)&&0!==path.length||n.splice(0,1);"/"==path.substr(path.length-1,1)&&n.splice(n.length-1,1);return n}(0,o.path),o.queryKey=function(t,e){const data={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(data[e]=n)})),data}(0,o.query),o}class x extends v.a{constructor(t,e={}){super(),t&&"object"==typeof t&&(e=t,t=null),t?(t=B(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=B(e.host).host),Object(k.b)(this,e),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+"/","string"==typeof this.opts.query&&(this.opts.query=Object(h.a)(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",(()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())}),!1),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=l.e,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new R[t](n)}open(){let t;if(this.opts.rememberUpgrade&&x.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(t=>this.onClose("transport close",t)))}probe(t){let e=this.createTransport(t),n=!1;x.priorWebsocketSuccess=!1;const r=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(t=>{if(!n)if("pong"===t.type&&"probe"===t.data){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;x.priorWebsocketSuccess="websocket"===e.name,this.transport.pause((()=>{n||"closed"!==this.readyState&&(f(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}))}else{const t=new Error("probe error");t.transport=e.name,this.emitReserved("upgradeError",t)}})))};function o(){n||(n=!0,f(),e.close(),e=null)}const c=t=>{const n=new Error("probe error: "+t);n.transport=e.name,o(),this.emitReserved("upgradeError",n)};function h(){c("transport closed")}function l(){c("socket closed")}function d(t){e&&t.name!==e.name&&o()}const f=()=>{e.removeListener("open",r),e.removeListener("error",c),e.removeListener("close",h),this.off("close",l),this.off("upgrading",d)};e.once("open",r),e.once("error",c),e.once("close",h),this.once("close",l),this.once("upgrading",d),e.open()}onOpen(){if(this.readyState="open",x.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause){let i=0;const t=this.upgrades.length;for(;i<t;i++)this.probe(this.upgrades[i])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(data){this.emitReserved("handshake",data),this.id=data.sid,this.transport.query.sid=data.sid,this.upgrades=this.filterUpgrades(data.upgrades),this.pingInterval=data.pingInterval,this.pingTimeout=data.pingTimeout,this.maxPayload=data.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const data=this.writeBuffer[i].data;if(data&&(t+=Object(k.a)(data)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(t,e,n){return this.sendPacket("message",t,e,n),this}send(t,e,n){return this.sendPacket("message",t,e,n),this}sendPacket(t,data,e,n){if("function"==typeof data&&(n=data,data=void 0),"function"==typeof e&&(n=e,e=null),"closing"===this.readyState||"closed"===this.readyState)return;(e=e||{}).compress=!1!==e.compress;const r={type:t,data:data,options:e};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),n&&this.once("flush",n),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?n():t()})):this.upgrading?n():t()),this}onError(t){x.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let i=0;const n=t.length;for(;i<n;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}}x.protocol=l.e;x.protocol;const N="function"==typeof ArrayBuffer,S=Object.prototype.toString,L="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===S.call(Blob),j="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===S.call(File);function P(t){return N&&(t instanceof ArrayBuffer||(t=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer)(t))||L&&t instanceof Blob||j&&t instanceof File}function D(t,e){if(!t||"object"!=typeof t)return!1;if(Array.isArray(t)){for(let i=0,e=t.length;i<e;i++)if(D(t[i]))return!0;return!1}if(P(t))return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return D(t.toJSON(),!0);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&D(t[e]))return!0;return!1}function I(t){const e=[],n=t.data,r=t;return r.data=M(n,e),r.attachments=e.length,{packet:r,buffers:e}}function M(data,t){if(!data)return data;if(P(data)){const e={_placeholder:!0,num:t.length};return t.push(data),e}if(Array.isArray(data)){const e=new Array(data.length);for(let i=0;i<data.length;i++)e[i]=M(data[i],t);return e}if("object"==typeof data&&!(data instanceof Date)){const e={};for(const n in data)Object.prototype.hasOwnProperty.call(data,n)&&(e[n]=M(data[n],t));return e}return data}function F(t,e){return t.data=U(t.data,e),t.attachments=void 0,t}function U(data,t){if(!data)return data;if(data&&!0===data._placeholder){if("number"==typeof data.num&&data.num>=0&&data.num<t.length)return t[data.num];throw new Error("illegal attachments")}if(Array.isArray(data))for(let i=0;i<data.length;i++)data[i]=U(data[i],t);else if("object"==typeof data)for(const e in data)Object.prototype.hasOwnProperty.call(data,e)&&(data[e]=U(data[e],t));return data}const V=5;var H;!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(H||(H={}));class K{constructor(t){this.replacer=t}encode(t){return t.type!==H.EVENT&&t.type!==H.ACK||!D(t)?[this.encodeAsString(t)]:(t.type=t.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,this.encodeAsBinary(t))}encodeAsString(t){let e=""+t.type;return t.type!==H.BINARY_EVENT&&t.type!==H.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=I(t),n=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(n),r}}class Y extends v.a{constructor(t){super(),this.reviver=t}add(t){let e;if("string"==typeof t){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t),e.type===H.BINARY_EVENT||e.type===H.BINARY_ACK?(this.reconstructor=new z(e),0===e.attachments&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else{if(!P(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e))}}decodeString(t){let i=0;const p={type:Number(t.charAt(0))};if(void 0===H[p.type])throw new Error("unknown packet type "+p.type);if(p.type===H.BINARY_EVENT||p.type===H.BINARY_ACK){const e=i+1;for(;"-"!==t.charAt(++i)&&i!=t.length;);const n=t.substring(e,i);if(n!=Number(n)||"-"!==t.charAt(i))throw new Error("Illegal attachments");p.attachments=Number(n)}if("/"===t.charAt(i+1)){const e=i+1;for(;++i;){if(","===t.charAt(i))break;if(i===t.length)break}p.nsp=t.substring(e,i)}else p.nsp="/";const e=t.charAt(i+1);if(""!==e&&Number(e)==e){const e=i+1;for(;++i;){const e=t.charAt(i);if(null==e||Number(e)!=e){--i;break}if(i===t.length)break}p.id=Number(t.substring(e,i+1))}if(t.charAt(++i)){const e=this.tryParse(t.substr(i));if(!Y.isPayloadValid(p.type,e))throw new Error("invalid payload");p.data=e}return p}tryParse(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}static isPayloadValid(t,e){switch(t){case H.CONNECT:return"object"==typeof e;case H.DISCONNECT:return void 0===e;case H.CONNECT_ERROR:return"string"==typeof e||"object"==typeof e;case H.EVENT:case H.BINARY_EVENT:return Array.isArray(e)&&e.length>0;case H.ACK:case H.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class z{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const t=F(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function W(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const J=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class $ extends v.a{constructor(t,e,n){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[W(t,"open",this.onopen.bind(this)),W(t,"packet",this.onpacket.bind(this)),W(t,"error",this.onerror.bind(this)),W(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(J.hasOwnProperty(t))throw new Error('"'+t+'" is a reserved event name');e.unshift(t);const n={type:H.EVENT,data:e,options:{}};if(n.options.compress=!1!==this.flags.compress,"function"==typeof e[e.length-1]){const t=this.ids++,r=e.pop();this._registerAckCallback(t,r),n.id=t}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(t,e){const n=this.flags.timeout;if(void 0===n)return void(this.acks[t]=e);const r=this.io.setTimeoutFn((()=>{delete this.acks[t];for(let i=0;i<this.sendBuffer.length;i++)this.sendBuffer[i].id===t&&this.sendBuffer.splice(i,1);e.call(this,new Error("operation has timed out"))}),n);this.acks[t]=(...t)=>{this.io.clearTimeoutFn(r),e.apply(this,[null,...t])}}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){"function"==typeof this.auth?this.auth((data=>{this.packet({type:H.CONNECT,data:data})})):this.packet({type:H.CONNECT,data:this.auth})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case H.CONNECT:if(t.data&&t.data.sid){const e=t.data.sid;this.onconnect(e)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(t);break;case H.ACK:case H.BINARY_ACK:this.onack(t);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}}onevent(t){const e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t)}ack(t){const e=this;let n=!1;return function(...r){n||(n=!0,e.packet({type:H.ACK,id:t,data:r}))}}onack(t){const e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t){this.id=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach((t=>this.emitEvent(t))),this.receiveBuffer=[],this.sendBuffer.forEach((t=>{this.notifyOutgoingListeners(t),this.packet(t)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((t=>t())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function X(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}X.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},X.prototype.reset=function(){this.attempts=0},X.prototype.setMin=function(t){this.ms=t},X.prototype.setMax=function(t){this.max=t},X.prototype.setJitter=function(t){this.jitter=t};class G extends v.a{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&"object"==typeof t&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",this.opts=e,Object(k.b)(this,e),this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=e.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new X({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this._readyState="closed",this.uri=t;const o=e.parser||r;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=!1!==e.autoConnect,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}randomizationFactor(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new x(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=W(e,"open",(function(){n.onopen(),t&&t()})),o=W(e,"error",(e=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",e),t?t(e):n.maybeReconnectOnOpen()}));if(!1!==this._timeout){const t=this._timeout;0===t&&r();const n=this.setTimeoutFn((()=>{r(),e.close(),e.emit("error",new Error("timeout"))}),t);this.opts.autoUnref&&n.unref(),this.subs.push((function(){clearTimeout(n)}))}return this.subs.push(r),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(W(t,"ping",this.onping.bind(this)),W(t,"data",this.ondata.bind(this)),W(t,"error",this.onerror.bind(this)),W(t,"close",this.onclose.bind(this)),W(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(data){this.decoder.add(data)}ondecoded(t){this.emitReserved("packet",t)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n||(n=new $(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const t of e){if(this.nsps[t].active)return}this._close()}_packet(t){const e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach((t=>t())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn((()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),t.skipReconnect||t.open((e=>{e?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",e)):t.onreconnect()})))}),e);this.opts.autoUnref&&n.unref(),this.subs.push((function(){clearTimeout(n)}))}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Q={};function Z(t,e){"object"==typeof t&&(e=t,t=void 0);const n=function(t,path="",e){let n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==e?e.protocol+"//"+t:"https://"+t),n=B(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+path,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}(t,(e=e||{}).path||"/socket.io"),source=n.source,r=n.id,path=n.path,o=Q[r]&&path in Q[r].nsps;let c;return e.forceNew||e["force new connection"]||!1===e.multiplex||o?c=new G(source,e):(Q[r]||(Q[r]=new G(source,e)),c=Q[r]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(Z,{Manager:G,Socket:$,io:Z,connect:Z})}}]);
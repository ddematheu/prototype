(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i={width:"100px",height:"34px",color:"black",fontFamily:"Helvetica",fontStyle:"normal",fontWeight:"normal",fontSize:"28px",lineHeight:"32px",letterSpacing:"0.05em",zIndex:10},a={margin:"0",minHeight:"91%",width:"100%",paddingLeft:"3.4vw",paddingRight:"3.4vw",paddingTop:"2.92vh"},c={margin:"0",minHeight:"91%",width:"100%",paddingLeft:"7vw",paddingRight:"7vw",paddingTop:"2.92vh"},u={width:"74.13vw",maxWidth:"311px",color:"#8B8B8B",fontFamily:"Helvetica",fontStyle:"normal",fontWeight:"normal",fontSize:"16px",lineHeight:"20px",letterSpacing:"0.05em",zIndex:10,textAlign:"left",paddingTop:"10vh"},l={width:"74.13vw",maxWidth:"311px",color:"#8B8B8B",fontFamily:"Helvetica",fontStyle:"normal",fontWeight:"normal",fontSize:"16px",lineHeight:"20px",letterSpacing:"0.05em",zIndex:10,textAlign:"left",paddingTop:"4.85vh"},s={width:"74.13vw",maxWidth:"311px",marginTop:"4.47vh",color:"#8B8B8B",fontFamily:"Helvetica",fontStyle:"normal",fontWeight:"normal",fontSize:"16px",lineHeight:"20px",letterSpacing:"0.05em",zIndex:10,textAlign:"left"},f={width:"350px",height:"0px",marginTop:"4.47vh",border:"0.75px solid #000000"},p={width:"100%",height:"0px",marginTop:"4.47vh",border:"0.75px solid #000000"},d=n("6Uz4"),h=(n("PN8+"),n("jDJJ"),n("n5+u"),n("ioFf"),n("V+eJ"),n("91GP"),function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=!1;function v(e){var t=e.style,n=void 0===t?{}:t,i=y(e,["style"]),a=function(){var e=Object(r.useState)(b),t=e[0],n=e[1],o=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(r.useEffect)((function(){g()&&n(!0)}),[]),t}();return Object(r.useEffect)((function(){if(o)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=b();n(e)}}),[o]),o?t:null}();!m&&n.height&&(m=!0,console.warn("<ReactDiv100vh /> overrides the height property of the style prop"));var c=h(h({},n),{height:a?a+"px":"100vh"});return o.a.createElement("div",h({style:c},i))}function b(){var e;return g()?(null===(e=document.documentElement)||void 0===e?void 0:e.clientHeight)||window.innerHeight:null}function g(){return"undefined"!=typeof window&&"undefined"!=typeof document}var w=n("VeD8"),T=n("pQ8y");function E(e){var t=Object(r.useState)(701),n=t[0],h=t[1],y=Object(r.useState)(!1),m=y[0],b=y[1];return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){return h(window.innerWidth)})),h(window.innerWidth),b(!0)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,null,o.a.createElement(v,null,o.a.createElement(T.a,{in:m,timeout:1e3,classNames:"construction"},o.a.createElement("div",{style:n>700?a:c},o.a.createElement("div",{style:i},"Musa"),o.a.createElement("div",{style:n>700?l:u},o.a.createElement("br",null),"Página en construcción.",o.a.createElement("br",null),o.a.createElement("br",null),"Si desea contactarnos, por favor enviar un correo a ",o.a.createElement("br",null),o.a.createElement("br",null),"info@musaarquitectos.com"),o.a.createElement("div",{style:n>700?f:p}),o.a.createElement("div",{style:s},"Under construction.",o.a.createElement("br",null),o.a.createElement("br",null),"If you would like to contact us, please send an email to ",o.a.createElement("br",null),o.a.createElement("br",null),"info@musaarquitectos.com"))),o.a.createElement(d.a,{width:n}))))}var O=n("qhky");t.default=function(){return o.a.createElement("div",{id:"wrapper"},o.a.createElement(O.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Musa Arquitectos"),o.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),o.a.createElement(E,null))}},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!n.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],n.get(u.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(t[u]!==n[u])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],n[l[u]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"}))},jDJJ:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,i,a,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),y=n("MgzW"),m=n.n(y),v="bodyAttributes",b="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",O="href",S="http-equiv",A="innerHTML",C="itemprop",x="name",j="property",P="rel",k="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",H="defer",N="encodeSpecialCharacters",R="onChangeClientState",B="titleTemplate",F=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=Z(e,w.TITLE),n=Z(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,M);return t||r||void 0},V=function(e){return Z(e,R)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==E&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,p);var d={baseTag:le(w.BASE,n),linkTags:le(w.LINK,i),metaTags:le(w.META,a),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,s)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,h,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===A||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(b,o,r),link:pe(w.LINK,i,r),meta:pe(w.META,a,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,u,r),style:pe(w.STYLE,l,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},he=s()((function(e){return{baseTag:X([O,L],e),bodyAttributes:G(v,e),defer:Z(e,H),encode:Z(e,N),htmlAttributes:G(b,e),linkTags:Q(w.LINK,[P,O],e),metaTags:Q(w.META,[x,T,S,j,C],e),noscriptTags:Q(w.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:Q(w.SCRIPT,[k,A],e),styleTags:Q(w.STYLE,[E],e),title:J(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return z(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return _({},o,((t={})[r.type]=a,t.titleAttributes=_({},i),t));case w.BODY:return _({},o,{bodyAttributes:_({},i)});case w.HTML:return _({},o,{htmlAttributes:_({},i)})}return _({},o,((n={})[r.type]=_({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},W(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind,t.a=ye}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-tsx-503b3173f17740ba83d0.js.map
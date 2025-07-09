(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var D0={exports:{}},Ec={},I0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),LS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),IS=Symbol.for("react.strict_mode"),NS=Symbol.for("react.profiler"),US=Symbol.for("react.provider"),OS=Symbol.for("react.context"),FS=Symbol.for("react.forward_ref"),kS=Symbol.for("react.suspense"),BS=Symbol.for("react.memo"),zS=Symbol.for("react.lazy"),fm=Symbol.iterator;function VS(n){return n===null||typeof n!="object"?null:(n=fm&&n[fm]||n["@@iterator"],typeof n=="function"?n:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,O0={};function $o(n,e,t){this.props=n,this.context=e,this.refs=O0,this.updater=t||N0}$o.prototype.isReactComponent={};$o.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};$o.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function F0(){}F0.prototype=$o.prototype;function Fd(n,e,t){this.props=n,this.context=e,this.refs=O0,this.updater=t||N0}var kd=Fd.prototype=new F0;kd.constructor=Fd;U0(kd,$o.prototype);kd.isPureReactComponent=!0;var hm=Array.isArray,k0=Object.prototype.hasOwnProperty,Bd={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function z0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k0.call(e,i)&&!B0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:dl,type:n,key:s,ref:o,props:r,_owner:Bd.current}}function HS(n,e){return{$$typeof:dl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function zd(n){return typeof n=="object"&&n!==null&&n.$$typeof===dl}function GS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dm=/\/+/g;function ef(n,e){return typeof n=="object"&&n!==null&&n.key!=null?GS(""+n.key):e.toString(36)}function xu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case dl:case LS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ef(o,0):i,hm(r)?(t="",n!=null&&(t=n.replace(dm,"$&/")+"/"),xu(r,e,t,"",function(u){return u})):r!=null&&(zd(r)&&(r=HS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ef(s,a);o+=xu(s,e,t,l,r)}else if(l=VS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ef(s,a++),o+=xu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wl(n,e,t){if(n==null)return n;var i=[],r=0;return xu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function WS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},yu={transition:null},XS={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:yu,ReactCurrentOwner:Bd};function V0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:wl,forEach:function(n,e,t){wl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wl(n,function(){e++}),e},toArray:function(n){return wl(n,function(e){return e})||[]},only:function(n){if(!zd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=$o;We.Fragment=DS;We.Profiler=NS;We.PureComponent=Fd;We.StrictMode=IS;We.Suspense=kS;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;We.act=V0;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=U0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)k0.call(e,l)&&!B0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:dl,type:n.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(n){return n={$$typeof:OS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:US,_context:n},n.Consumer=n};We.createElement=z0;We.createFactory=function(n){var e=z0.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:FS,render:n}};We.isValidElement=zd;We.lazy=function(n){return{$$typeof:zS,_payload:{_status:-1,_result:n},_init:WS}};We.memo=function(n,e){return{$$typeof:BS,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=yu.transition;yu.transition={};try{n()}finally{yu.transition=e}};We.unstable_act=V0;We.useCallback=function(n,e){return fn.current.useCallback(n,e)};We.useContext=function(n){return fn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};We.useEffect=function(n,e){return fn.current.useEffect(n,e)};We.useId=function(){return fn.current.useId()};We.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return fn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};We.useRef=function(n){return fn.current.useRef(n)};We.useState=function(n){return fn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return fn.current.useTransition()};We.version="18.3.1";I0.exports=We;var Fe=I0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=Fe,YS=Symbol.for("react.element"),qS=Symbol.for("react.fragment"),$S=Object.prototype.hasOwnProperty,KS=jS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function H0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$S.call(e,i)&&!ZS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:YS,type:n,key:s,ref:o,props:r,_owner:KS.current}}Ec.Fragment=qS;Ec.jsx=H0;Ec.jsxs=H0;D0.exports=Ec;var be=D0.exports,G0={exports:{}},zn={},W0={exports:{}},X0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,q){var K=D.length;D.push(q);e:for(;0<K;){var oe=K-1>>>1,ye=D[oe];if(0<r(ye,q))D[oe]=q,D[K]=ye,K=oe;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],K=D.pop();if(K!==q){D[0]=K;e:for(var oe=0,ye=D.length,He=ye>>>1;oe<He;){var X=2*(oe+1)-1,Q=D[X],pe=X+1,H=D[pe];if(0>r(Q,K))pe<ye&&0>r(H,Q)?(D[oe]=H,D[pe]=K,oe=pe):(D[oe]=Q,D[X]=K,oe=X);else if(pe<ye&&0>r(H,K))D[oe]=H,D[pe]=K,oe=pe;else break e}}return q}function r(D,q){var K=D.sortIndex-q.sortIndex;return K!==0?K:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var q=t(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=D)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=t(u)}}function y(D){if(m=!1,v(D),!_)if(t(l)!==null)_=!0,z(C);else{var q=t(u);q!==null&&$(y,q.startTime-D)}}function C(D,q){_=!1,m&&(m=!1,d(R),R=-1),p=!0;var K=h;try{for(v(q),f=t(l);f!==null&&(!(f.expirationTime>q)||D&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var ye=oe(f.expirationTime<=q);q=n.unstable_now(),typeof ye=="function"?f.callback=ye:f===t(l)&&i(l),v(q)}else i(l);f=t(l)}if(f!==null)var He=!0;else{var X=t(u);X!==null&&$(y,X.startTime-q),He=!1}return He}finally{f=null,h=K,p=!1}}var E=!1,T=null,R=-1,M=5,S=-1;function L(){return!(n.unstable_now()-S<M)}function B(){if(T!==null){var D=n.unstable_now();S=D;var q=!0;try{q=T(!0,D)}finally{q?O():(E=!1,T=null)}}else E=!1}var O;if(typeof x=="function")O=function(){x(B)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,j=G.port2;G.port1.onmessage=B,O=function(){j.postMessage(null)}}else O=function(){g(B,0)};function z(D){T=D,E||(E=!0,O())}function $(D,q){R=g(function(){D(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,z(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var K=h;h=q;try{return D()}finally{h=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=h;h=D;try{return q()}finally{h=K}},n.unstable_scheduleCallback=function(D,q,K){var oe=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,D={id:c++,callback:q,priorityLevel:D,startTime:K,expirationTime:ye,sortIndex:-1},K>oe?(D.sortIndex=K,e(u,D),t(l)===null&&D===t(u)&&(m?(d(R),R=-1):m=!0,$(y,K-oe))):(D.sortIndex=ye,e(l,D),_||p||(_=!0,z(C))),D},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(D){var q=h;return function(){var K=h;h=q;try{return D.apply(this,arguments)}finally{h=K}}}})(X0);W0.exports=X0;var QS=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=Fe,Fn=QS;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,Ha={};function Ls(n,e){bo(n,e),bo(n+"Capture",e)}function bo(n,e){for(Ha[n]=e,n=0;n<e.length;n++)j0.add(e[n])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,eM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function tM(n){return vh.call(mm,n)?!0:vh.call(pm,n)?!1:eM.test(n)?mm[n]=!0:(pm[n]=!0,!1)}function nM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function iM(n,e,t,i){if(e===null||typeof e>"u"||nM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){qt[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];qt[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){qt[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){qt[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){qt[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){qt[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){qt[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){qt[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){qt[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Vd=/[\-:]([a-z])/g;function Hd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Vd,Hd);qt[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Vd,Hd);qt[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Vd,Hd);qt[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){qt[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});qt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){qt[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Gd(n,e,t,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iM(e,t,r,i)&&(t=null),i||r===null?tM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),to=Symbol.for("react.portal"),no=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),gm=Symbol.iterator;function ia(n){return n===null||typeof n!="object"?null:(n=gm&&n[gm]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,tf;function ya(n){if(tf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);tf=e&&e[1]||""}return`
`+tf+n}var nf=!1;function rf(n,e){if(!n||nf)return"";nf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{nf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ya(n):""}function rM(n){switch(n.tag){case 5:return ya(n.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return n=rf(n.type,!1),n;case 11:return n=rf(n.type.render,!1),n;case 1:return n=rf(n.type,!0),n;default:return""}}function Mh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case no:return"Fragment";case to:return"Portal";case xh:return"Profiler";case Wd:return"StrictMode";case yh:return"Suspense";case Sh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q0:return(n.displayName||"Context")+".Consumer";case Y0:return(n._context.displayName||"Context")+".Provider";case Xd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case jd:return e=n.displayName||null,e!==null?e:Mh(n.type)||"Memo";case pr:e=n._payload,n=n._init;try{return Mh(n(e))}catch{}}return null}function sM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function K0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oM(n){var e=K0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Cl(n){n._valueTracker||(n._valueTracker=oM(n))}function Z0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=K0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Uu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Eh(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _m(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q0(n,e){e=e.checked,e!=null&&Gd(n,"checked",e,!1)}function Th(n,e){Q0(n,e);var t=Fr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?wh(n,e.type,t):e.hasOwnProperty("defaultValue")&&wh(n,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function wh(n,e,t){(e!=="number"||Uu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Sa=Array.isArray;function _o(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ah(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Sa(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fr(t)}}function J0(n,e){var t=Fr(e.value),i=Fr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ym(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ev(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ev(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Rl,tv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Rl=Rl||document.createElement("div"),Rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ga(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aM=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(n){aM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ra[e]=Ra[n]})});function nv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ra.hasOwnProperty(n)&&Ra[n]?(""+e).trim():e+"px"}function iv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=nv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var lM=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(n,e){if(e){if(lM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function bh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function Yd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Lh=null,vo=null,xo=null;function Sm(n){if(n=gl(n)){if(typeof Lh!="function")throw Error(se(280));var e=n.stateNode;e&&(e=Rc(e),Lh(n.stateNode,n.type,e))}}function rv(n){vo?xo?xo.push(n):xo=[n]:vo=n}function sv(){if(vo){var n=vo,e=xo;if(xo=vo=null,Sm(n),e)for(n=0;n<e.length;n++)Sm(e[n])}}function ov(n,e){return n(e)}function av(){}var sf=!1;function lv(n,e,t){if(sf)return n(e,t);sf=!0;try{return ov(n,e,t)}finally{sf=!1,(vo!==null||xo!==null)&&(av(),sv())}}function Wa(n,e){var t=n.stateNode;if(t===null)return null;var i=Rc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var Dh=!1;if(Ki)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Dh=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Dh=!1}function uM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ba=!1,Ou=null,Fu=!1,Ih=null,cM={onError:function(n){ba=!0,Ou=n}};function fM(n,e,t,i,r,s,o,a,l){ba=!1,Ou=null,uM.apply(cM,arguments)}function hM(n,e,t,i,r,s,o,a,l){if(fM.apply(this,arguments),ba){if(ba){var u=Ou;ba=!1,Ou=null}else throw Error(se(198));Fu||(Fu=!0,Ih=u)}}function Ds(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function uv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(n){if(Ds(n)!==n)throw Error(se(188))}function dM(n){var e=n.alternate;if(!e){if(e=Ds(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Mm(r),n;if(s===i)return Mm(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function cv(n){return n=dM(n),n!==null?fv(n):null}function fv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=fv(n);if(e!==null)return e;n=n.sibling}return null}var hv=Fn.unstable_scheduleCallback,Em=Fn.unstable_cancelCallback,pM=Fn.unstable_shouldYield,mM=Fn.unstable_requestPaint,Ct=Fn.unstable_now,gM=Fn.unstable_getCurrentPriorityLevel,qd=Fn.unstable_ImmediatePriority,dv=Fn.unstable_UserBlockingPriority,ku=Fn.unstable_NormalPriority,_M=Fn.unstable_LowPriority,pv=Fn.unstable_IdlePriority,Tc=null,Ci=null;function vM(n){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Tc,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:SM,xM=Math.log,yM=Math.LN2;function SM(n){return n>>>=0,n===0?32:31-(xM(n)/yM|0)|0}var bl=64,Pl=4194304;function Ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ma(a):(s&=o,s!==0&&(i=Ma(s)))}else o=t&~r,o!==0?i=Ma(o):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function MM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=MM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Nh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function mv(){var n=bl;return bl<<=1,!(bl&4194240)&&(bl=64),n}function of(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function pl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function TM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function $d(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function gv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _v,Kd,vv,xv,yv,Uh=!1,Ll=[],wr=null,Ar=null,Cr=null,Xa=new Map,ja=new Map,gr=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(n,e){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function sa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=gl(e),e!==null&&Kd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function AM(n,e,t,i,r){switch(e){case"focusin":return wr=sa(wr,n,e,t,i,r),!0;case"dragenter":return Ar=sa(Ar,n,e,t,i,r),!0;case"mouseover":return Cr=sa(Cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Xa.set(s,sa(Xa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,sa(ja.get(s)||null,n,e,t,i,r)),!0}return!1}function Sv(n){var e=hs(n.target);if(e!==null){var t=Ds(e);if(t!==null){if(e=t.tag,e===13){if(e=uv(t),e!==null){n.blockedOn=e,yv(n.priority,function(){vv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Su(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Oh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ph=i,t.target.dispatchEvent(i),Ph=null}else return e=gl(t),e!==null&&Kd(e),n.blockedOn=t,!1;e.shift()}return!0}function wm(n,e,t){Su(n)&&t.delete(e)}function CM(){Uh=!1,wr!==null&&Su(wr)&&(wr=null),Ar!==null&&Su(Ar)&&(Ar=null),Cr!==null&&Su(Cr)&&(Cr=null),Xa.forEach(wm),ja.forEach(wm)}function oa(n,e){n.blockedOn===e&&(n.blockedOn=null,Uh||(Uh=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,CM)))}function Ya(n){function e(r){return oa(r,n)}if(0<Ll.length){oa(Ll[0],n);for(var t=1;t<Ll.length;t++){var i=Ll[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wr!==null&&oa(wr,n),Ar!==null&&oa(Ar,n),Cr!==null&&oa(Cr,n),Xa.forEach(e),ja.forEach(e),t=0;t<gr.length;t++)i=gr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gr.length&&(t=gr[0],t.blockedOn===null);)Sv(t),t.blockedOn===null&&gr.shift()}var yo=nr.ReactCurrentBatchConfig,zu=!0;function RM(n,e,t,i){var r=nt,s=yo.transition;yo.transition=null;try{nt=1,Zd(n,e,t,i)}finally{nt=r,yo.transition=s}}function bM(n,e,t,i){var r=nt,s=yo.transition;yo.transition=null;try{nt=4,Zd(n,e,t,i)}finally{nt=r,yo.transition=s}}function Zd(n,e,t,i){if(zu){var r=Oh(n,e,t,i);if(r===null)gf(n,e,i,Vu,t),Tm(n,i);else if(AM(r,n,e,t,i))i.stopPropagation();else if(Tm(n,i),e&4&&-1<wM.indexOf(n)){for(;r!==null;){var s=gl(r);if(s!==null&&_v(s),s=Oh(n,e,t,i),s===null&&gf(n,e,i,Vu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else gf(n,e,i,null,t)}}var Vu=null;function Oh(n,e,t,i){if(Vu=null,n=Yd(i),n=hs(n),n!==null)if(e=Ds(n),e===null)n=null;else if(t=e.tag,t===13){if(n=uv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Vu=n,null}function Mv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gM()){case qd:return 1;case dv:return 4;case ku:case _M:return 16;case pv:return 536870912;default:return 16}default:return 16}}var xr=null,Qd=null,Mu=null;function Ev(){if(Mu)return Mu;var n,e=Qd,t=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Mu=r.slice(n,1<i?1-i:void 0)}function Eu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Dl(){return!0}function Am(){return!1}function Vn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dl:Am,this.isPropagationStopped=Am,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=Vn(Ko),ml=xt({},Ko,{view:0,detail:0}),PM=Vn(ml),af,lf,aa,wc=xt({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==aa&&(aa&&n.type==="mousemove"?(af=n.screenX-aa.screenX,lf=n.screenY-aa.screenY):lf=af=0,aa=n),af)},movementY:function(n){return"movementY"in n?n.movementY:lf}}),Cm=Vn(wc),LM=xt({},wc,{dataTransfer:0}),DM=Vn(LM),IM=xt({},ml,{relatedTarget:0}),uf=Vn(IM),NM=xt({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),UM=Vn(NM),OM=xt({},Ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),FM=Vn(OM),kM=xt({},Ko,{data:0}),Rm=Vn(kM),BM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=VM[n])?!!e[n]:!1}function ep(){return HM}var GM=xt({},ml,{key:function(n){if(n.key){var e=BM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Eu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(n){return n.type==="keypress"?Eu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),WM=Vn(GM),XM=xt({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Vn(XM),jM=xt({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),YM=Vn(jM),qM=xt({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),$M=Vn(qM),KM=xt({},wc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ZM=Vn(KM),QM=[9,13,27,32],tp=Ki&&"CompositionEvent"in window,Pa=null;Ki&&"documentMode"in document&&(Pa=document.documentMode);var JM=Ki&&"TextEvent"in window&&!Pa,Tv=Ki&&(!tp||Pa&&8<Pa&&11>=Pa),Pm=" ",Lm=!1;function wv(n,e){switch(n){case"keyup":return QM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var io=!1;function e1(n,e){switch(n){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(Lm=!0,Pm);case"textInput":return n=e.data,n===Pm&&Lm?null:n;default:return null}}function t1(n,e){if(io)return n==="compositionend"||!tp&&wv(n,e)?(n=Ev(),Mu=Qd=xr=null,io=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tv&&e.locale!=="ko"?null:e.data;default:return null}}var n1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!n1[n.type]:e==="textarea"}function Cv(n,e,t,i){rv(i),e=Hu(e,"onChange"),0<e.length&&(t=new Jd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var La=null,qa=null;function i1(n){kv(n,0)}function Ac(n){var e=oo(n);if(Z0(e))return n}function r1(n,e){if(n==="change")return e}var Rv=!1;if(Ki){var cf;if(Ki){var ff="oninput"in document;if(!ff){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),ff=typeof Im.oninput=="function"}cf=ff}else cf=!1;Rv=cf&&(!document.documentMode||9<document.documentMode)}function Nm(){La&&(La.detachEvent("onpropertychange",bv),qa=La=null)}function bv(n){if(n.propertyName==="value"&&Ac(qa)){var e=[];Cv(e,qa,n,Yd(n)),lv(i1,e)}}function s1(n,e,t){n==="focusin"?(Nm(),La=e,qa=t,La.attachEvent("onpropertychange",bv)):n==="focusout"&&Nm()}function o1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(qa)}function a1(n,e){if(n==="click")return Ac(e)}function l1(n,e){if(n==="input"||n==="change")return Ac(e)}function u1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mi=typeof Object.is=="function"?Object.is:u1;function $a(n,e){if(mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!vh.call(e,r)||!mi(n[r],e[r]))return!1}return!0}function Um(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Om(n,e){var t=Um(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Um(t)}}function Pv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Pv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var n=window,e=Uu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Uu(n.document)}return e}function np(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function c1(n){var e=Lv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Pv(t.ownerDocument.documentElement,t)){if(i!==null&&np(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Om(t,s);var o=Om(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var f1=Ki&&"documentMode"in document&&11>=document.documentMode,ro=null,Fh=null,Da=null,kh=!1;function Fm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;kh||ro==null||ro!==Uu(i)||(i=ro,"selectionStart"in i&&np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&$a(Da,i)||(Da=i,i=Hu(Fh,"onSelect"),0<i.length&&(e=new Jd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ro)))}function Il(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var so={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},hf={},Dv={};Ki&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Cc(n){if(hf[n])return hf[n];if(!so[n])return n;var e=so[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Dv)return hf[n]=e[t];return n}var Iv=Cc("animationend"),Nv=Cc("animationiteration"),Uv=Cc("animationstart"),Ov=Cc("transitionend"),Fv=new Map,km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,e){Fv.set(n,e),Ls(e,[n])}for(var df=0;df<km.length;df++){var pf=km[df],h1=pf.toLowerCase(),d1=pf[0].toUpperCase()+pf.slice(1);Wr(h1,"on"+d1)}Wr(Iv,"onAnimationEnd");Wr(Nv,"onAnimationIteration");Wr(Uv,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(Ov,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Bm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,hM(i,e,void 0,n),n.currentTarget=null}function kv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,u),s=l}}}if(Fu)throw n=Ih,Fu=!1,Ih=null,n}function ct(n,e){var t=e[Gh];t===void 0&&(t=e[Gh]=new Set);var i=n+"__bubble";t.has(i)||(Bv(e,n,2,!1),t.add(i))}function mf(n,e,t){var i=0;e&&(i|=4),Bv(t,n,i,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Ka(n){if(!n[Nl]){n[Nl]=!0,j0.forEach(function(t){t!=="selectionchange"&&(p1.has(t)||mf(t,!1,n),mf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,mf("selectionchange",!1,e))}}function Bv(n,e,t,i){switch(Mv(e)){case 1:var r=RM;break;case 4:r=bM;break;default:r=Zd}t=r.bind(null,e,t,n),r=void 0,!Dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function gf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lv(function(){var u=s,c=Yd(t),f=[];e:{var h=Fv.get(n);if(h!==void 0){var p=Jd,_=n;switch(n){case"keypress":if(Eu(t)===0)break e;case"keydown":case"keyup":p=WM;break;case"focusin":_="focus",p=uf;break;case"focusout":_="blur",p=uf;break;case"beforeblur":case"afterblur":p=uf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=DM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=YM;break;case Iv:case Nv:case Uv:p=UM;break;case Ov:p=$M;break;case"scroll":p=PM;break;case"wheel":p=ZM;break;case"copy":case"cut":case"paste":p=FM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bm}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var x=u,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Wa(x,d),y!=null&&m.push(Za(x,y,v)))),g)break;x=x.return}0<m.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Ph&&(_=t.relatedTarget||t.fromElement)&&(hs(_)||_[Zi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?hs(_):null,_!==null&&(g=Ds(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=Cm,y="onMouseLeave",d="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(m=bm,y="onPointerLeave",d="onPointerEnter",x="pointer"),g=p==null?h:oo(p),v=_==null?h:oo(_),h=new m(y,x+"leave",p,t,c),h.target=g,h.relatedTarget=v,y=null,hs(c)===u&&(m=new m(d,x+"enter",_,t,c),m.target=v,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,d=_,x=0,v=m;v;v=Us(v))x++;for(v=0,y=d;y;y=Us(y))v++;for(;0<x-v;)m=Us(m),x--;for(;0<v-x;)d=Us(d),v--;for(;x--;){if(m===d||d!==null&&m===d.alternate)break t;m=Us(m),d=Us(d)}m=null}else m=null;p!==null&&zm(f,h,p,m,!1),_!==null&&g!==null&&zm(f,g,_,m,!0)}}e:{if(h=u?oo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=r1;else if(Dm(h))if(Rv)C=l1;else{C=o1;var E=s1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=a1);if(C&&(C=C(n,u))){Cv(f,C,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&wh(h,"number",h.value)}switch(E=u?oo(u):window,n){case"focusin":(Dm(E)||E.contentEditable==="true")&&(ro=E,Fh=u,Da=null);break;case"focusout":Da=Fh=ro=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,Fm(f,t,c);break;case"selectionchange":if(f1)break;case"keydown":case"keyup":Fm(f,t,c)}var T;if(tp)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else io?wv(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Tv&&t.locale!=="ko"&&(io||R!=="onCompositionStart"?R==="onCompositionEnd"&&io&&(T=Ev()):(xr=c,Qd="value"in xr?xr.value:xr.textContent,io=!0)),E=Hu(u,R),0<E.length&&(R=new Rm(R,n,null,t,c),f.push({event:R,listeners:E}),T?R.data=T:(T=Av(t),T!==null&&(R.data=T)))),(T=JM?e1(n,t):t1(n,t))&&(u=Hu(u,"onBeforeInput"),0<u.length&&(c=new Rm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=T))}kv(f,e)})}function Za(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Hu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wa(n,t),s!=null&&i.unshift(Za(n,s,r)),s=Wa(n,e),s!=null&&i.push(Za(n,s,r))),n=n.return}return i}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Wa(t,s),l!=null&&o.unshift(Za(t,l,a))):r||(l=Wa(t,s),l!=null&&o.push(Za(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var m1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function Vm(n){return(typeof n=="string"?n:""+n).replace(m1,`
`).replace(g1,"")}function Ul(n,e,t){if(e=Vm(e),Vm(n)!==e&&t)throw Error(se(425))}function Gu(){}var Bh=null,zh=null;function Vh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,v1=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(n){return Hm.resolve(null).then(n).catch(x1)}:Hh;function x1(n){setTimeout(function(){throw n})}function _f(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ya(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ya(e)}function Rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Gm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Zo,Qa="__reactProps$"+Zo,Zi="__reactContainer$"+Zo,Gh="__reactEvents$"+Zo,y1="__reactListeners$"+Zo,S1="__reactHandles$"+Zo;function hs(n){var e=n[Mi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Zi]||t[Mi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Gm(n);n!==null;){if(t=n[Mi])return t;n=Gm(n)}return e}n=t,t=n.parentNode}return null}function gl(n){return n=n[Mi]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function oo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function Rc(n){return n[Qa]||null}var Wh=[],ao=-1;function Xr(n){return{current:n}}function ht(n){0>ao||(n.current=Wh[ao],Wh[ao]=null,ao--)}function ut(n,e){ao++,Wh[ao]=n.current,n.current=e}var kr={},rn=Xr(kr),vn=Xr(!1),Ts=kr;function Po(n,e){var t=n.type.contextTypes;if(!t)return kr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function Wu(){ht(vn),ht(rn)}function Wm(n,e,t){if(rn.current!==kr)throw Error(se(168));ut(rn,e),ut(vn,t)}function zv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,sM(n)||"Unknown",r));return xt({},t,i)}function Xu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,Ts=rn.current,ut(rn,n),ut(vn,vn.current),!0}function Xm(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=zv(n,e,Ts),i.__reactInternalMemoizedMergedChildContext=n,ht(vn),ht(rn),ut(rn,n)):ht(vn),ut(vn,t)}var Hi=null,bc=!1,vf=!1;function Vv(n){Hi===null?Hi=[n]:Hi.push(n)}function M1(n){bc=!0,Vv(n)}function jr(){if(!vf&&Hi!==null){vf=!0;var n=0,e=nt;try{var t=Hi;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hi=null,bc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(n+1)),hv(qd,jr),r}finally{nt=e,vf=!1}}return null}var lo=[],uo=0,ju=null,Yu=0,Xn=[],jn=0,ws=null,Xi=1,ji="";function ss(n,e){lo[uo++]=Yu,lo[uo++]=ju,ju=n,Yu=e}function Hv(n,e,t){Xn[jn++]=Xi,Xn[jn++]=ji,Xn[jn++]=ws,ws=n;var i=Xi;n=ji;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xi=1<<32-hi(e)+r|t<<r|i,ji=s+n}else Xi=1<<s|t<<r|i,ji=n}function ip(n){n.return!==null&&(ss(n,1),Hv(n,1,0))}function rp(n){for(;n===ju;)ju=lo[--uo],lo[uo]=null,Yu=lo[--uo],lo[uo]=null;for(;n===ws;)ws=Xn[--jn],Xn[jn]=null,ji=Xn[--jn],Xn[jn]=null,Xi=Xn[--jn],Xn[jn]=null}var Un=null,In=null,dt=!1,li=null;function Gv(n,e){var t=Yn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function jm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Un=n,In=Rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Un=n,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ws!==null?{id:Xi,overflow:ji}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Yn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Un=n,In=null,!0):!1;default:return!1}}function Xh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jh(n){if(dt){var e=In;if(e){var t=e;if(!jm(n,e)){if(Xh(n))throw Error(se(418));e=Rr(t.nextSibling);var i=Un;e&&jm(n,e)?Gv(i,t):(n.flags=n.flags&-4097|2,dt=!1,Un=n)}}else{if(Xh(n))throw Error(se(418));n.flags=n.flags&-4097|2,dt=!1,Un=n}}}function Ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function Ol(n){if(n!==Un)return!1;if(!dt)return Ym(n),dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Vh(n.type,n.memoizedProps)),e&&(e=In)){if(Xh(n))throw Wv(),Error(se(418));for(;e;)Gv(n,e),e=Rr(e.nextSibling)}if(Ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){In=Rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}In=null}}else In=Un?Rr(n.stateNode.nextSibling):null;return!0}function Wv(){for(var n=In;n;)n=Rr(n.nextSibling)}function Lo(){In=Un=null,dt=!1}function sp(n){li===null?li=[n]:li.push(n)}var E1=nr.ReactCurrentBatchConfig;function la(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function Fl(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function qm(n){var e=n._init;return e(n._payload)}function Xv(n){function e(d,x){if(n){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function t(d,x){if(!n)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Dr(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,y){return x===null||x.tag!==6?(x=wf(v,d.mode,y),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,y){var C=v.type;return C===no?c(d,x,v.props.children,y,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pr&&qm(C)===x.type)?(y=r(x,v.props),y.ref=la(d,x,v),y.return=d,y):(y=Pu(v.type,v.key,v.props,null,d.mode,y),y.ref=la(d,x,v),y.return=d,y)}function u(d,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Af(v,d.mode,y),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function c(d,x,v,y,C){return x===null||x.tag!==7?(x=xs(v,d.mode,y,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function f(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=wf(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Al:return v=Pu(x.type,x.key,x.props,null,d.mode,v),v.ref=la(d,null,x),v.return=d,v;case to:return x=Af(x,d.mode,v),x.return=d,x;case pr:var y=x._init;return f(d,y(x._payload),v)}if(Sa(x)||ia(x))return x=xs(x,d.mode,v,null),x.return=d,x;Fl(d,x)}return null}function h(d,x,v,y){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Al:return v.key===C?l(d,x,v,y):null;case to:return v.key===C?u(d,x,v,y):null;case pr:return C=v._init,h(d,x,C(v._payload),y)}if(Sa(v)||ia(v))return C!==null?null:c(d,x,v,y,null);Fl(d,v)}return null}function p(d,x,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(x,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Al:return d=d.get(y.key===null?v:y.key)||null,l(x,d,y,C);case to:return d=d.get(y.key===null?v:y.key)||null,u(x,d,y,C);case pr:var E=y._init;return p(d,x,v,E(y._payload),C)}if(Sa(y)||ia(y))return d=d.get(v)||null,c(x,d,y,C,null);Fl(x,y)}return null}function _(d,x,v,y){for(var C=null,E=null,T=x,R=x=0,M=null;T!==null&&R<v.length;R++){T.index>R?(M=T,T=null):M=T.sibling;var S=h(d,T,v[R],y);if(S===null){T===null&&(T=M);break}n&&T&&S.alternate===null&&e(d,T),x=s(S,x,R),E===null?C=S:E.sibling=S,E=S,T=M}if(R===v.length)return t(d,T),dt&&ss(d,R),C;if(T===null){for(;R<v.length;R++)T=f(d,v[R],y),T!==null&&(x=s(T,x,R),E===null?C=T:E.sibling=T,E=T);return dt&&ss(d,R),C}for(T=i(d,T);R<v.length;R++)M=p(T,d,R,v[R],y),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?R:M.key),x=s(M,x,R),E===null?C=M:E.sibling=M,E=M);return n&&T.forEach(function(L){return e(d,L)}),dt&&ss(d,R),C}function m(d,x,v,y){var C=ia(v);if(typeof C!="function")throw Error(se(150));if(v=C.call(v),v==null)throw Error(se(151));for(var E=C=null,T=x,R=x=0,M=null,S=v.next();T!==null&&!S.done;R++,S=v.next()){T.index>R?(M=T,T=null):M=T.sibling;var L=h(d,T,S.value,y);if(L===null){T===null&&(T=M);break}n&&T&&L.alternate===null&&e(d,T),x=s(L,x,R),E===null?C=L:E.sibling=L,E=L,T=M}if(S.done)return t(d,T),dt&&ss(d,R),C;if(T===null){for(;!S.done;R++,S=v.next())S=f(d,S.value,y),S!==null&&(x=s(S,x,R),E===null?C=S:E.sibling=S,E=S);return dt&&ss(d,R),C}for(T=i(d,T);!S.done;R++,S=v.next())S=p(T,d,R,S.value,y),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?R:S.key),x=s(S,x,R),E===null?C=S:E.sibling=S,E=S);return n&&T.forEach(function(B){return e(d,B)}),dt&&ss(d,R),C}function g(d,x,v,y){if(typeof v=="object"&&v!==null&&v.type===no&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Al:e:{for(var C=v.key,E=x;E!==null;){if(E.key===C){if(C=v.type,C===no){if(E.tag===7){t(d,E.sibling),x=r(E,v.props.children),x.return=d,d=x;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pr&&qm(C)===E.type){t(d,E.sibling),x=r(E,v.props),x.ref=la(d,E,v),x.return=d,d=x;break e}t(d,E);break}else e(d,E);E=E.sibling}v.type===no?(x=xs(v.props.children,d.mode,y,v.key),x.return=d,d=x):(y=Pu(v.type,v.key,v.props,null,d.mode,y),y.ref=la(d,x,v),y.return=d,d=y)}return o(d);case to:e:{for(E=v.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{t(d,x);break}else e(d,x);x=x.sibling}x=Af(v,d.mode,y),x.return=d,d=x}return o(d);case pr:return E=v._init,g(d,x,E(v._payload),y)}if(Sa(v))return _(d,x,v,y);if(ia(v))return m(d,x,v,y);Fl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(d,x.sibling),x=r(x,v),x.return=d,d=x):(t(d,x),x=wf(v,d.mode,y),x.return=d,d=x),o(d)):t(d,x)}return g}var Do=Xv(!0),jv=Xv(!1),qu=Xr(null),$u=null,co=null,op=null;function ap(){op=co=$u=null}function lp(n){var e=qu.current;ht(qu),n._currentValue=e}function Yh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function So(n,e){$u=n,op=co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Jn(n){var e=n._currentValue;if(op!==n)if(n={context:n,memoizedValue:e,next:null},co===null){if($u===null)throw Error(se(308));co=n,$u.dependencies={lanes:0,firstContext:n}}else co=co.next=n;return e}var ds=null;function up(n){ds===null?ds=[n]:ds.push(n)}function Yv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,up(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qi(n,i)}function Qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var mr=!1;function cp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(n,t)}return r=i.interleaved,r===null?(e.next=e,up(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(n,t)}function Tu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$d(n,t)}}function $m(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ku(n,e,t,i){var r=n.updateQueue;mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(h=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=xt({},f,h);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cs|=o,n.lanes=o,n.memoizedState=f}}function Km(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var _l={},Ri=Xr(_l),Ja=Xr(_l),el=Xr(_l);function ps(n){if(n===_l)throw Error(se(174));return n}function fp(n,e){switch(ut(el,e),ut(Ja,n),ut(Ri,_l),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ch(e,n)}ht(Ri),ut(Ri,e)}function Io(){ht(Ri),ht(Ja),ht(el)}function $v(n){ps(el.current);var e=ps(Ri.current),t=Ch(e,n.type);e!==t&&(ut(Ja,n),ut(Ri,t))}function hp(n){Ja.current===n&&(ht(Ri),ht(Ja))}var mt=Xr(0);function Zu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xf=[];function dp(){for(var n=0;n<xf.length;n++)xf[n]._workInProgressVersionPrimary=null;xf.length=0}var wu=nr.ReactCurrentDispatcher,yf=nr.ReactCurrentBatchConfig,As=0,vt=null,Nt=null,Vt=null,Qu=!1,Ia=!1,tl=0,T1=0;function $t(){throw Error(se(321))}function pp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mi(n[t],e[t]))return!1;return!0}function mp(n,e,t,i,r,s){if(As=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=n===null||n.memoizedState===null?R1:b1,n=t(i,r),Ia){s=0;do{if(Ia=!1,tl=0,25<=s)throw Error(se(301));s+=1,Vt=Nt=null,e.updateQueue=null,wu.current=P1,n=t(i,r)}while(Ia)}if(wu.current=Ju,e=Nt!==null&&Nt.next!==null,As=0,Vt=Nt=vt=null,Qu=!1,e)throw Error(se(300));return n}function gp(){var n=tl!==0;return tl=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?vt.memoizedState=Vt=n:Vt=Vt.next=n,Vt}function ei(){if(Nt===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Nt.next;var e=Vt===null?vt.memoizedState:Vt.next;if(e!==null)Vt=e,Nt=n;else{if(n===null)throw Error(se(310));Nt=n,n={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Vt===null?vt.memoizedState=Vt=n:Vt=Vt.next=n}return Vt}function nl(n,e){return typeof e=="function"?e(n):e}function Sf(n){var e=ei(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Nt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((As&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,vt.lanes|=c,Cs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Cs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Mf(n){var e=ei(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Kv(){}function Zv(n,e){var t=vt,i=ei(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,_p(ex.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(t.flags|=2048,il(9,Jv.bind(null,t,i,r,e),void 0,null),Ht===null)throw Error(se(349));As&30||Qv(t,e,r)}return r}function Qv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Jv(n,e,t,i){e.value=t,e.getSnapshot=i,tx(e)&&nx(n)}function ex(n,e,t){return t(function(){tx(e)&&nx(n)})}function tx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mi(n,t)}catch{return!0}}function nx(n){var e=Qi(n,1);e!==null&&di(e,n,1,-1)}function Zm(n){var e=xi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:n},e.queue=n,n=n.dispatch=C1.bind(null,vt,n),[e.memoizedState,n]}function il(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ix(){return ei().memoizedState}function Au(n,e,t,i){var r=xi();vt.flags|=n,r.memoizedState=il(1|e,t,void 0,i===void 0?null:i)}function Pc(n,e,t,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&pp(i,o.deps)){r.memoizedState=il(e,t,s,i);return}}vt.flags|=n,r.memoizedState=il(1|e,t,s,i)}function Qm(n,e){return Au(8390656,8,n,e)}function _p(n,e){return Pc(2048,8,n,e)}function rx(n,e){return Pc(4,2,n,e)}function sx(n,e){return Pc(4,4,n,e)}function ox(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ax(n,e,t){return t=t!=null?t.concat([n]):null,Pc(4,4,ox.bind(null,e,n),t)}function vp(){}function lx(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ux(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function cx(n,e,t){return As&21?(mi(t,e)||(t=mv(),vt.lanes|=t,Cs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function w1(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=yf.transition;yf.transition={};try{n(!1),e()}finally{nt=t,yf.transition=i}}function fx(){return ei().memoizedState}function A1(n,e,t){var i=Lr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},hx(n))dx(e,t);else if(t=Yv(n,e,t,i),t!==null){var r=cn();di(t,n,i,r),px(t,e,i)}}function C1(n,e,t){var i=Lr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(hx(n))dx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Yv(n,e,r,i),t!==null&&(r=cn(),di(t,n,i,r),px(t,e,i))}}function hx(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function dx(n,e){Ia=Qu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function px(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$d(n,t)}}var Ju={readContext:Jn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},R1={readContext:Jn,useCallback:function(n,e){return xi().memoizedState=[n,e===void 0?null:e],n},useContext:Jn,useEffect:Qm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Au(4194308,4,ox.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Au(4194308,4,n,e)},useInsertionEffect:function(n,e){return Au(4,2,n,e)},useMemo:function(n,e){var t=xi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=xi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=A1.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=xi();return n={current:n},e.memoizedState=n},useState:Zm,useDebugValue:vp,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=Zm(!1),e=n[0];return n=w1.bind(null,n[1]),xi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=xi();if(dt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),Ht===null)throw Error(se(349));As&30||Qv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Qm(ex.bind(null,i,s,n),[n]),i.flags|=2048,il(9,Jv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=xi(),e=Ht.identifierPrefix;if(dt){var t=ji,i=Xi;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=tl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=T1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},b1={readContext:Jn,useCallback:lx,useContext:Jn,useEffect:_p,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:sx,useMemo:ux,useReducer:Sf,useRef:ix,useState:function(){return Sf(nl)},useDebugValue:vp,useDeferredValue:function(n){var e=ei();return cx(e,Nt.memoizedState,n)},useTransition:function(){var n=Sf(nl)[0],e=ei().memoizedState;return[n,e]},useMutableSource:Kv,useSyncExternalStore:Zv,useId:fx,unstable_isNewReconciler:!1},P1={readContext:Jn,useCallback:lx,useContext:Jn,useEffect:_p,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:sx,useMemo:ux,useReducer:Mf,useRef:ix,useState:function(){return Mf(nl)},useDebugValue:vp,useDeferredValue:function(n){var e=ei();return Nt===null?e.memoizedState=n:cx(e,Nt.memoizedState,n)},useTransition:function(){var n=Mf(nl)[0],e=ei().memoizedState;return[n,e]},useMutableSource:Kv,useSyncExternalStore:Zv,useId:fx,unstable_isNewReconciler:!1};function si(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function qh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Lc={isMounted:function(n){return(n=n._reactInternals)?Ds(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=Lr(n),s=qi(i,r);s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(di(e,n,r,i),Tu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=Lr(n),s=qi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(di(e,n,r,i),Tu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=Lr(n),r=qi(t,i);r.tag=2,e!=null&&(r.callback=e),e=br(n,r,i),e!==null&&(di(e,n,i,t),Tu(e,n,i))}};function Jm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$a(t,i)||!$a(r,s):!0}function mx(n,e,t){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=xn(e)?Ts:rn.current,i=e.contextTypes,s=(i=i!=null)?Po(n,r):kr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function eg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Lc.enqueueReplaceState(e,e.state,null)}function $h(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},cp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=xn(e)?Ts:rn.current,r.context=Po(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),Ku(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function No(n,e){try{var t="",i=e;do t+=rM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ef(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Kh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var L1=typeof WeakMap=="function"?WeakMap:Map;function gx(n,e,t){t=qi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){tc||(tc=!0,od=i),Kh(n,e)},t}function _x(n,e,t){t=qi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Kh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Kh(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function tg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new L1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=X1.bind(null,n,e,t),e.then(n,n))}function ng(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ig(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qi(-1,1),e.tag=2,br(t,e,1))),t.lanes|=1),n)}var D1=nr.ReactCurrentOwner,mn=!1;function ln(n,e,t,i){e.child=n===null?jv(e,null,t,i):Do(e,n.child,t,i)}function rg(n,e,t,i,r){t=t.render;var s=e.ref;return So(e,r),i=mp(n,e,t,i,s,r),t=gp(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(dt&&t&&ip(e),e.flags|=1,ln(n,e,i,r),e.child)}function sg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,vx(n,e,s,i,r)):(n=Pu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:$a,t(o,i)&&n.ref===e.ref)return Ji(n,e,r)}return e.flags|=1,n=Dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function vx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if($a(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Ji(n,e,r)}return Zh(n,e,t,i,r)}function xx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ho,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ut(ho,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ut(ho,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ut(ho,Pn),Pn|=i;return ln(n,e,r,t),e.child}function yx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Zh(n,e,t,i,r){var s=xn(t)?Ts:rn.current;return s=Po(e,s),So(e,r),t=mp(n,e,t,i,s,r),i=gp(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(dt&&i&&ip(e),e.flags|=1,ln(n,e,t,r),e.child)}function og(n,e,t,i,r){if(xn(t)){var s=!0;Xu(e)}else s=!1;if(So(e,r),e.stateNode===null)Cu(n,e),mx(e,t,i),$h(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Jn(u):(u=xn(t)?Ts:rn.current,u=Po(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&eg(e,o,i,u),mr=!1;var h=e.memoizedState;o.state=h,Ku(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||mr?(typeof c=="function"&&(qh(e,t,c,i),l=e.memoizedState),(a=mr||Jm(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:si(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=xn(t)?Ts:rn.current,l=Po(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&eg(e,o,i,l),mr=!1,h=e.memoizedState,o.state=h,Ku(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||vn.current||mr?(typeof p=="function"&&(qh(e,t,p,i),_=e.memoizedState),(u=mr||Jm(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Qh(n,e,t,i,s,r)}function Qh(n,e,t,i,r,s){yx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xm(e,t,!1),Ji(n,e,s);i=e.stateNode,D1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Do(e,n.child,null,s),e.child=Do(e,null,a,s)):ln(n,e,a,s),e.memoizedState=i.state,r&&Xm(e,t,!0),e.child}function Sx(n){var e=n.stateNode;e.pendingContext?Wm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Wm(n,e.context,!1),fp(n,e.containerInfo)}function ag(n,e,t,i,r){return Lo(),sp(r),e.flags|=256,ln(n,e,t,i),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function ed(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mx(n,e,t){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ut(mt,r&1),n===null)return jh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nc(o,i,0,null),n=xs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ed(t),e.memoizedState=Jh,n):xp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return I1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=xs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ed(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Jh,i}return s=n.child,n=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function xp(n,e){return e=Nc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function kl(n,e,t,i){return i!==null&&sp(i),Do(e,n.child,null,t),n=xp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function I1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ef(Error(se(422))),kl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),s=xs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Do(e,n.child,null,o),e.child.memoizedState=ed(o),e.memoizedState=Jh,s);if(!(e.mode&1))return kl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Ef(s,i,void 0),kl(n,e,o,i)}if(a=(o&n.childLanes)!==0,mn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(n,r),di(i,n,r,-1))}return wp(),i=Ef(Error(se(421))),kl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=j1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,In=Rr(r.nextSibling),Un=e,dt=!0,li=null,n!==null&&(Xn[jn++]=Xi,Xn[jn++]=ji,Xn[jn++]=ws,Xi=n.id,ji=n.overflow,ws=e),e=xp(e,i.children),e.flags|=4096,e)}function lg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Yh(n.return,e,t)}function Tf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ex(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(n,e,i.children,t),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lg(n,t,e);else if(n.tag===19)lg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ut(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Zu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Tf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Zu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Tf(e,!0,t,null,s);break;case"together":Tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ji(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Cs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function N1(n,e,t){switch(e.tag){case 3:Sx(e),Lo();break;case 5:$v(e);break;case 1:xn(e.type)&&Xu(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(qu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(mt,mt.current&1),e.flags|=128,null):t&e.child.childLanes?Mx(n,e,t):(ut(mt,mt.current&1),n=Ji(n,e,t),n!==null?n.sibling:null);ut(mt,mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Ex(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,xx(n,e,t)}return Ji(n,e,t)}var Tx,td,wx,Ax;Tx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};td=function(){};wx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ps(Ri.current);var s=null;switch(t){case"input":r=Eh(n,r),i=Eh(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Ah(n,r),i=Ah(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Gu)}Rh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ha.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ax=function(n,e,t,i){t!==i&&(e.flags|=4)};function ua(n,e){if(!dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function U1(n,e,t){var i=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return xn(e.type)&&Wu(),Kt(e),null;case 3:return i=e.stateNode,Io(),ht(vn),ht(rn),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ol(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(ud(li),li=null))),td(n,e),Kt(e),null;case 5:hp(e);var r=ps(el.current);if(t=e.type,n!==null&&e.stateNode!=null)wx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Kt(e),null}if(n=ps(Ri.current),Ol(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[Qa]=s,n=(e.mode&1)!==0,t){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)ct(Ea[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":_m(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":xm(i,s),ct("invalid",i)}Rh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,n),r=["children",""+a]):Ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(t){case"input":Cl(i),vm(i,s,!0);break;case"textarea":Cl(i),ym(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ev(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Mi]=e,n[Qa]=i,Tx(n,e,!1,!1),e.stateNode=n;e:{switch(o=bh(t,i),t){case"dialog":ct("cancel",n),ct("close",n),r=i;break;case"iframe":case"object":case"embed":ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)ct(Ea[r],n);r=i;break;case"source":ct("error",n),r=i;break;case"img":case"image":case"link":ct("error",n),ct("load",n),r=i;break;case"details":ct("toggle",n),r=i;break;case"input":_m(n,i),r=Eh(n,i),ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ct("invalid",n);break;case"textarea":xm(n,i),r=Ah(n,i),ct("invalid",n);break;default:r=i}Rh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ga(n,l):typeof l=="number"&&Ga(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",n):l!=null&&Gd(n,s,l,o))}switch(t){case"input":Cl(n),vm(n,i,!1);break;case"textarea":Cl(n),ym(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?_o(n,!!i.multiple,s,!1):i.defaultValue!=null&&_o(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Gu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(n&&e.stateNode!=null)Ax(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=ps(el.current),ps(Ri.current),Ol(e)){if(i=e.stateNode,t=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==t)&&(n=Un,n!==null))switch(n.tag){case 3:Ul(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ul(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return Kt(e),null;case 13:if(ht(mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(dt&&In!==null&&e.mode&1&&!(e.flags&128))Wv(),Lo(),e.flags|=98560,s=!1;else if(s=Ol(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Mi]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else li!==null&&(ud(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||mt.current&1?Ut===0&&(Ut=3):wp())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Io(),td(n,e),n===null&&Ka(e.stateNode.containerInfo),Kt(e),null;case 10:return lp(e.type._context),Kt(e),null;case 17:return xn(e.type)&&Wu(),Kt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ua(s,!1);else{if(Ut!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Zu(n),o!==null){for(e.flags|=128,ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ut(mt,mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ct()>Uo&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304)}else{if(!i)if(n=Zu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Kt(e),null}else 2*Ct()-s.renderingStartTime>Uo&&t!==1073741824&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,t=mt.current,ut(mt,i?t&1|2:t&1),e):(Kt(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function O1(n,e){switch(rp(e),e.tag){case 1:return xn(e.type)&&Wu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Io(),ht(vn),ht(rn),dp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return hp(e),null;case 13:if(ht(mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Lo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(mt),null;case 4:return Io(),null;case 10:return lp(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var Bl=!1,Jt=!1,F1=typeof WeakSet=="function"?WeakSet:Set,xe=null;function fo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function nd(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var ug=!1;function k1(n,e){if(Bh=zu,n=Lv(),np(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(zh={focusedElem:n,selectionRange:t},zu=!1,xe=e;xe!==null;)if(e=xe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,xe=n;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:si(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Mt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}return _=ug,ug=!1,_}function Na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&nd(e,t,s)}r=r.next}while(r!==i)}}function Dc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function id(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Cx(n){var e=n.alternate;e!==null&&(n.alternate=null,Cx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mi],delete e[Qa],delete e[Gh],delete e[y1],delete e[S1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rx(n){return n.tag===5||n.tag===3||n.tag===4}function cg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Gu));else if(i!==4&&(n=n.child,n!==null))for(rd(n,e,t),n=n.sibling;n!==null;)rd(n,e,t),n=n.sibling}function sd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(sd(n,e,t),n=n.sibling;n!==null;)sd(n,e,t),n=n.sibling}var Wt=null,oi=!1;function ar(n,e,t){for(t=t.child;t!==null;)bx(n,e,t),t=t.sibling}function bx(n,e,t){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Tc,t)}catch{}switch(t.tag){case 5:Jt||fo(t,e);case 6:var i=Wt,r=oi;Wt=null,ar(n,e,t),Wt=i,oi=r,Wt!==null&&(oi?(n=Wt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Wt.removeChild(t.stateNode));break;case 18:Wt!==null&&(oi?(n=Wt,t=t.stateNode,n.nodeType===8?_f(n.parentNode,t):n.nodeType===1&&_f(n,t),Ya(n)):_f(Wt,t.stateNode));break;case 4:i=Wt,r=oi,Wt=t.stateNode.containerInfo,oi=!0,ar(n,e,t),Wt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nd(t,e,o),r=r.next}while(r!==i)}ar(n,e,t);break;case 1:if(!Jt&&(fo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Mt(t,e,a)}ar(n,e,t);break;case 21:ar(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,ar(n,e,t),Jt=i):ar(n,e,t);break;default:ar(n,e,t)}}function fg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new F1),e.forEach(function(i){var r=Y1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ti(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,oi=!1;break e;case 3:Wt=a.stateNode.containerInfo,oi=!0;break e;case 4:Wt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Wt===null)throw Error(se(160));bx(s,o,r),Wt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Px(e,n),e=e.sibling}function Px(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(e,n),vi(n),i&4){try{Na(3,n,n.return),Dc(3,n)}catch(m){Mt(n,n.return,m)}try{Na(5,n,n.return)}catch(m){Mt(n,n.return,m)}}break;case 1:ti(e,n),vi(n),i&512&&t!==null&&fo(t,t.return);break;case 5:if(ti(e,n),vi(n),i&512&&t!==null&&fo(t,t.return),n.flags&32){var r=n.stateNode;try{Ga(r,"")}catch(m){Mt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Q0(r,s),bh(a,o);var u=bh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?iv(r,f):c==="dangerouslySetInnerHTML"?tv(r,f):c==="children"?Ga(r,f):Gd(r,c,f,u)}switch(a){case"input":Th(r,s);break;case"textarea":J0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_o(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?_o(r,!!s.multiple,s.defaultValue,!0):_o(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qa]=s}catch(m){Mt(n,n.return,m)}}break;case 6:if(ti(e,n),vi(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Mt(n,n.return,m)}}break;case 3:if(ti(e,n),vi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(m){Mt(n,n.return,m)}break;case 4:ti(e,n),vi(n);break;case 13:ti(e,n),vi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mp=Ct())),i&4&&fg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(u=Jt)||c,ti(e,n),Jt=u):ti(e,n),vi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(xe=n,c=n.child;c!==null;){for(f=xe=c;xe!==null;){switch(h=xe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Na(4,h,h.return);break;case 1:fo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Mt(i,t,m)}}break;case 5:fo(h,h.return);break;case 22:if(h.memoizedState!==null){dg(f);continue}}p!==null?(p.return=h,xe=p):dg(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nv("display",o))}catch(m){Mt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Mt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ti(e,n),vi(n),i&4&&fg(n);break;case 21:break;default:ti(e,n),vi(n)}}function vi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Rx(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=cg(n);sd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cg(n);rd(n,a,o);break;default:throw Error(se(161))}}catch(l){Mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function B1(n,e,t){xe=n,Lx(n)}function Lx(n,e,t){for(var i=(n.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Bl;var u=Jt;if(Bl=o,(Jt=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?pg(r):l!==null?(l.return=o,xe=l):pg(r);for(;s!==null;)xe=s,Lx(s),s=s.sibling;xe=r,Bl=a,Jt=u}hg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):hg(n)}}function hg(n){for(;xe!==null;){var e=xe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Km(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Jt||e.flags&512&&id(e)}catch(h){Mt(e,e.return,h)}}if(e===n){xe=null;break}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}}function dg(n){for(;xe!==null;){var e=xe;if(e===n){xe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,xe=t;break}xe=e.return}}function pg(n){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Dc(4,e)}catch(l){Mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{id(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{id(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===n){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var z1=Math.ceil,ec=nr.ReactCurrentDispatcher,yp=nr.ReactCurrentOwner,Zn=nr.ReactCurrentBatchConfig,Ke=0,Ht=null,It=null,jt=0,Pn=0,ho=Xr(0),Ut=0,rl=null,Cs=0,Ic=0,Sp=0,Ua=null,dn=null,Mp=0,Uo=1/0,zi=null,tc=!1,od=null,Pr=null,zl=!1,yr=null,nc=0,Oa=0,ad=null,Ru=-1,bu=0;function cn(){return Ke&6?Ct():Ru!==-1?Ru:Ru=Ct()}function Lr(n){return n.mode&1?Ke&2&&jt!==0?jt&-jt:E1.transition!==null?(bu===0&&(bu=mv()),bu):(n=nt,n!==0||(n=window.event,n=n===void 0?16:Mv(n.type)),n):1}function di(n,e,t,i){if(50<Oa)throw Oa=0,ad=null,Error(se(185));pl(n,t,i),(!(Ke&2)||n!==Ht)&&(n===Ht&&(!(Ke&2)&&(Ic|=t),Ut===4&&_r(n,jt)),yn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Uo=Ct()+500,bc&&jr()))}function yn(n,e){var t=n.callbackNode;EM(n,e);var i=Bu(n,n===Ht?jt:0);if(i===0)t!==null&&Em(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Em(t),e===1)n.tag===0?M1(mg.bind(null,n)):Vv(mg.bind(null,n)),v1(function(){!(Ke&6)&&jr()}),t=null;else{switch(gv(i)){case 1:t=qd;break;case 4:t=dv;break;case 16:t=ku;break;case 536870912:t=pv;break;default:t=ku}t=Bx(t,Dx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Dx(n,e){if(Ru=-1,bu=0,Ke&6)throw Error(se(327));var t=n.callbackNode;if(Mo()&&n.callbackNode!==t)return null;var i=Bu(n,n===Ht?jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ic(n,i);else{e=i;var r=Ke;Ke|=2;var s=Nx();(Ht!==n||jt!==e)&&(zi=null,Uo=Ct()+500,vs(n,e));do try{G1();break}catch(a){Ix(n,a)}while(!0);ap(),ec.current=s,Ke=r,It!==null?e=0:(Ht=null,jt=0,e=Ut)}if(e!==0){if(e===2&&(r=Nh(n),r!==0&&(i=r,e=ld(n,r))),e===1)throw t=rl,vs(n,0),_r(n,i),yn(n,Ct()),t;if(e===6)_r(n,i);else{if(r=n.current.alternate,!(i&30)&&!V1(r)&&(e=ic(n,i),e===2&&(s=Nh(n),s!==0&&(i=s,e=ld(n,s))),e===1))throw t=rl,vs(n,0),_r(n,i),yn(n,Ct()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:os(n,dn,zi);break;case 3:if(_r(n,i),(i&130023424)===i&&(e=Mp+500-Ct(),10<e)){if(Bu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Hh(os.bind(null,n,dn,zi),e);break}os(n,dn,zi);break;case 4:if(_r(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z1(i/1960))-i,10<i){n.timeoutHandle=Hh(os.bind(null,n,dn,zi),i);break}os(n,dn,zi);break;case 5:os(n,dn,zi);break;default:throw Error(se(329))}}}return yn(n,Ct()),n.callbackNode===t?Dx.bind(null,n):null}function ld(n,e){var t=Ua;return n.current.memoizedState.isDehydrated&&(vs(n,e).flags|=256),n=ic(n,e),n!==2&&(e=dn,dn=t,e!==null&&ud(e)),n}function ud(n){dn===null?dn=n:dn.push.apply(dn,n)}function V1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(n,e){for(e&=~Sp,e&=~Ic,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function mg(n){if(Ke&6)throw Error(se(327));Mo();var e=Bu(n,0);if(!(e&1))return yn(n,Ct()),null;var t=ic(n,e);if(n.tag!==0&&t===2){var i=Nh(n);i!==0&&(e=i,t=ld(n,i))}if(t===1)throw t=rl,vs(n,0),_r(n,e),yn(n,Ct()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,os(n,dn,zi),yn(n,Ct()),null}function Ep(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Uo=Ct()+500,bc&&jr())}}function Rs(n){yr!==null&&yr.tag===0&&!(Ke&6)&&Mo();var e=Ke;Ke|=1;var t=Zn.transition,i=nt;try{if(Zn.transition=null,nt=1,n)return n()}finally{nt=i,Zn.transition=t,Ke=e,!(Ke&6)&&jr()}}function Tp(){Pn=ho.current,ht(ho)}function vs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,_1(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wu();break;case 3:Io(),ht(vn),ht(rn),dp();break;case 5:hp(i);break;case 4:Io();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:lp(i.type._context);break;case 22:case 23:Tp()}t=t.return}if(Ht=n,It=n=Dr(n.current,null),jt=Pn=e,Ut=0,rl=null,Sp=Ic=Cs=0,dn=Ua=null,ds!==null){for(e=0;e<ds.length;e++)if(t=ds[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ds=null}return n}function Ix(n,e){do{var t=It;try{if(ap(),wu.current=Ju,Qu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qu=!1}if(As=0,Vt=Nt=vt=null,Ia=!1,tl=0,yp.current=null,t===null||t.return===null){Ut=1,rl=e,It=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ng(o);if(p!==null){p.flags&=-257,ig(p,o,a,s,e),p.mode&1&&tg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){tg(s,u,e),wp();break e}l=Error(se(426))}}else if(dt&&a.mode&1){var g=ng(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),ig(g,o,a,s,e),sp(No(l,a));break e}}s=l=No(l,a),Ut!==4&&(Ut=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=gx(s,l,e);$m(s,d);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pr===null||!Pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=_x(s,a,e);$m(s,y);break e}}s=s.return}while(s!==null)}Ox(t)}catch(C){e=C,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function Nx(){var n=ec.current;return ec.current=Ju,n===null?Ju:n}function wp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Ht===null||!(Cs&268435455)&&!(Ic&268435455)||_r(Ht,jt)}function ic(n,e){var t=Ke;Ke|=2;var i=Nx();(Ht!==n||jt!==e)&&(zi=null,vs(n,e));do try{H1();break}catch(r){Ix(n,r)}while(!0);if(ap(),Ke=t,ec.current=i,It!==null)throw Error(se(261));return Ht=null,jt=0,Ut}function H1(){for(;It!==null;)Ux(It)}function G1(){for(;It!==null&&!pM();)Ux(It)}function Ux(n){var e=kx(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?Ox(n):It=e,yp.current=null}function Ox(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=O1(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ut=6,It=null;return}}else if(t=U1(t,e,Pn),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);Ut===0&&(Ut=5)}function os(n,e,t){var i=nt,r=Zn.transition;try{Zn.transition=null,nt=1,W1(n,e,t,i)}finally{Zn.transition=r,nt=i}return null}function W1(n,e,t,i){do Mo();while(yr!==null);if(Ke&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(TM(n,s),n===Ht&&(It=Ht=null,jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||zl||(zl=!0,Bx(ku,function(){return Mo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var o=nt;nt=1;var a=Ke;Ke|=4,yp.current=null,k1(n,t),Px(t,n),c1(zh),zu=!!Bh,zh=Bh=null,n.current=t,B1(t),mM(),Ke=a,nt=o,Zn.transition=s}else n.current=t;if(zl&&(zl=!1,yr=n,nc=r),s=n.pendingLanes,s===0&&(Pr=null),vM(t.stateNode),yn(n,Ct()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(tc)throw tc=!1,n=od,od=null,n;return nc&1&&n.tag!==0&&Mo(),s=n.pendingLanes,s&1?n===ad?Oa++:(Oa=0,ad=n):Oa=0,jr(),null}function Mo(){if(yr!==null){var n=gv(nc),e=Zn.transition,t=nt;try{if(Zn.transition=null,nt=16>n?16:n,yr===null)var i=!1;else{if(n=yr,yr=null,nc=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,xe=n.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var c=xe;switch(c.tag){case 0:case 11:case 15:Na(8,c,s)}var f=c.child;if(f!==null)f.return=c,xe=f;else for(;xe!==null;){c=xe;var h=c.sibling,p=c.return;if(Cx(c),c===u){xe=null;break}if(h!==null){h.return=p,xe=h;break}xe=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var x=n.current;for(xe=x;xe!==null;){o=xe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,xe=v;else e:for(o=x;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(C){Mt(a,a.return,C)}if(a===o){xe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,xe=y;break e}xe=a.return}}if(Ke=r,jr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Tc,n)}catch{}i=!0}return i}finally{nt=t,Zn.transition=e}}return!1}function gg(n,e,t){e=No(t,e),e=gx(n,e,1),n=br(n,e,1),e=cn(),n!==null&&(pl(n,1,e),yn(n,e))}function Mt(n,e,t){if(n.tag===3)gg(n,n,t);else for(;e!==null;){if(e.tag===3){gg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=No(t,n),n=_x(e,n,1),e=br(e,n,1),n=cn(),e!==null&&(pl(e,1,n),yn(e,n));break}}e=e.return}}function X1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,Ht===n&&(jt&t)===t&&(Ut===4||Ut===3&&(jt&130023424)===jt&&500>Ct()-Mp?vs(n,0):Sp|=t),yn(n,e)}function Fx(n,e){e===0&&(n.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var t=cn();n=Qi(n,e),n!==null&&(pl(n,e,t),yn(n,t))}function j1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Fx(n,t)}function Y1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Fx(n,t)}var kx;kx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,N1(n,e,t);mn=!!(n.flags&131072)}else mn=!1,dt&&e.flags&1048576&&Hv(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cu(n,e),n=e.pendingProps;var r=Po(e,rn.current);So(e,t),r=mp(null,e,i,n,r,t);var s=gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,Xu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,$h(e,i,n,t),e=Qh(null,e,i,!0,s,t)):(e.tag=0,dt&&s&&ip(e),ln(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Cu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$1(i),n=si(i,n),r){case 0:e=Zh(null,e,i,n,t);break e;case 1:e=og(null,e,i,n,t);break e;case 11:e=rg(null,e,i,n,t);break e;case 14:e=sg(null,e,i,si(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Zh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),og(n,e,i,r,t);case 3:e:{if(Sx(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qv(n,e),Ku(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=No(Error(se(423)),e),e=ag(n,e,i,t,r);break e}else if(i!==r){r=No(Error(se(424)),e),e=ag(n,e,i,t,r);break e}else for(In=Rr(e.stateNode.containerInfo.firstChild),Un=e,dt=!0,li=null,t=jv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Lo(),i===r){e=Ji(n,e,t);break e}ln(n,e,i,t)}e=e.child}return e;case 5:return $v(e),n===null&&jh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Vh(i,r)?o=null:s!==null&&Vh(i,s)&&(e.flags|=32),yx(n,e),ln(n,e,o,t),e.child;case 6:return n===null&&jh(e),null;case 13:return Mx(n,e,t);case 4:return fp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Do(e,null,i,t):ln(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),rg(n,e,i,r,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(qu,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!vn.current){e=Ji(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Yh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Yh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,So(e,t),r=Jn(r),i=i(r),e.flags|=1,ln(n,e,i,t),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),sg(n,e,i,r,t);case 15:return vx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Cu(n,e),e.tag=1,xn(i)?(n=!0,Xu(e)):n=!1,So(e,t),mx(e,i,r),$h(e,i,r,t),Qh(null,e,i,!0,n,t);case 19:return Ex(n,e,t);case 22:return xx(n,e,t)}throw Error(se(156,e.tag))};function Bx(n,e){return hv(n,e)}function q1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,e,t,i){return new q1(n,e,t,i)}function Ap(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $1(n){if(typeof n=="function")return Ap(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Xd)return 11;if(n===jd)return 14}return 2}function Dr(n,e){var t=n.alternate;return t===null?(t=Yn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Pu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ap(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case no:return xs(t.children,r,s,e);case Wd:o=8,r|=8;break;case xh:return n=Yn(12,t,e,r|2),n.elementType=xh,n.lanes=s,n;case yh:return n=Yn(13,t,e,r),n.elementType=yh,n.lanes=s,n;case Sh:return n=Yn(19,t,e,r),n.elementType=Sh,n.lanes=s,n;case $0:return Nc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y0:o=10;break e;case q0:o=9;break e;case Xd:o=11;break e;case jd:o=14;break e;case pr:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Yn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function xs(n,e,t,i){return n=Yn(7,n,i,e),n.lanes=t,n}function Nc(n,e,t,i){return n=Yn(22,n,i,e),n.elementType=$0,n.lanes=t,n.stateNode={isHidden:!1},n}function wf(n,e,t){return n=Yn(6,n,null,e),n.lanes=t,n}function Af(n,e,t){return e=Yn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function K1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=of(0),this.expirationTimes=of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cp(n,e,t,i,r,s,o,a,l){return n=new K1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),n}function Z1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:to,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function zx(n){if(!n)return kr;n=n._reactInternals;e:{if(Ds(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(xn(t))return zv(n,t,e)}return e}function Vx(n,e,t,i,r,s,o,a,l){return n=Cp(t,i,!0,n,r,s,o,a,l),n.context=zx(null),t=n.current,i=cn(),r=Lr(t),s=qi(i,r),s.callback=e??null,br(t,s,r),n.current.lanes=r,pl(n,r,i),yn(n,i),n}function Uc(n,e,t,i){var r=e.current,s=cn(),o=Lr(r);return t=zx(t),e.context===null?e.context=t:e.pendingContext=t,e=qi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=br(r,e,o),n!==null&&(di(n,r,o,s),Tu(n,r,o)),o}function rc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _g(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Rp(n,e){_g(n,e),(n=n.alternate)&&_g(n,e)}function Q1(){return null}var Hx=typeof reportError=="function"?reportError:function(n){console.error(n)};function bp(n){this._internalRoot=n}Oc.prototype.render=bp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));Uc(n,e,null,null)};Oc.prototype.unmount=bp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Rs(function(){Uc(null,n,null,null)}),e[Zi]=null}};function Oc(n){this._internalRoot=n}Oc.prototype.unstable_scheduleHydration=function(n){if(n){var e=xv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gr.length&&e!==0&&e<gr[t].priority;t++);gr.splice(t,0,n),t===0&&Sv(n)}};function Pp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vg(){}function J1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=rc(o);s.call(u)}}var o=Vx(e,i,n,0,null,!1,!1,"",vg);return n._reactRootContainer=o,n[Zi]=o.current,Ka(n.nodeType===8?n.parentNode:n),Rs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=rc(l);a.call(u)}}var l=Cp(n,0,!1,null,null,!1,!1,"",vg);return n._reactRootContainer=l,n[Zi]=l.current,Ka(n.nodeType===8?n.parentNode:n),Rs(function(){Uc(e,l,t,i)}),l}function kc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=rc(o);a.call(l)}}Uc(e,o,n,r)}else o=J1(t,e,n,r,i);return rc(o)}_v=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ma(e.pendingLanes);t!==0&&($d(e,t|1),yn(e,Ct()),!(Ke&6)&&(Uo=Ct()+500,jr()))}break;case 13:Rs(function(){var i=Qi(n,1);if(i!==null){var r=cn();di(i,n,1,r)}}),Rp(n,1)}};Kd=function(n){if(n.tag===13){var e=Qi(n,134217728);if(e!==null){var t=cn();di(e,n,134217728,t)}Rp(n,134217728)}};vv=function(n){if(n.tag===13){var e=Lr(n),t=Qi(n,e);if(t!==null){var i=cn();di(t,n,e,i)}Rp(n,e)}};xv=function(){return nt};yv=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Lh=function(n,e,t){switch(e){case"input":if(Th(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rc(i);if(!r)throw Error(se(90));Z0(i),Th(i,r)}}}break;case"textarea":J0(n,t);break;case"select":e=t.value,e!=null&&_o(n,!!t.multiple,e,!1)}};ov=Ep;av=Rs;var eE={usingClientEntryPoint:!1,Events:[gl,oo,Rc,rv,sv,Ep]},ca={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tE={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=cv(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Tc=Vl.inject(tE),Ci=Vl}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;zn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(e))throw Error(se(200));return Z1(n,e,null,t)};zn.createRoot=function(n,e){if(!Pp(n))throw Error(se(299));var t=!1,i="",r=Hx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cp(n,1,!1,null,null,t,!1,i,r),n[Zi]=e.current,Ka(n.nodeType===8?n.parentNode:n),new bp(e)};zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=cv(e),n=n===null?null:n.stateNode,n};zn.flushSync=function(n){return Rs(n)};zn.hydrate=function(n,e,t){if(!Fc(e))throw Error(se(200));return kc(null,n,e,!0,t)};zn.hydrateRoot=function(n,e,t){if(!Pp(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Hx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Vx(e,null,n,1,t??null,r,!1,s,o),n[Zi]=e.current,Ka(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Oc(e)};zn.render=function(n,e,t){if(!Fc(e))throw Error(se(200));return kc(null,n,e,!1,t)};zn.unmountComponentAtNode=function(n){if(!Fc(n))throw Error(se(40));return n._reactRootContainer?(Rs(function(){kc(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1};zn.unstable_batchedUpdates=Ep;zn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Fc(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return kc(n,e,t,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function Gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gx)}catch(n){console.error(n)}}Gx(),G0.exports=zn;var nE=G0.exports,Wx,xg=nE;Wx=xg.createRoot,xg.hydrateRoot;const iE="modulepreload",rE=function(n){return"/BEATOREACT2/"+n},yg={},Sg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=rE(l),l in yg)return;yg[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":iE,u||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="165",bP={ROTATE:0,DOLLY:1,PAN:2},PP={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sE=0,Mg=1,oE=2,Xx=1,jx=2,Bi=3,Br=0,Sn=1,Wi=2,Ir=0,Eo=1,Eg=2,Tg=3,wg=4,aE=5,cs=100,lE=101,uE=102,cE=103,fE=104,hE=200,dE=201,pE=202,mE=203,cd=204,fd=205,gE=206,_E=207,vE=208,xE=209,yE=210,SE=211,ME=212,EE=213,TE=214,wE=0,AE=1,CE=2,sc=3,RE=4,bE=5,PE=6,LE=7,Yx=0,DE=1,IE=2,Nr=0,NE=1,UE=2,OE=3,FE=4,kE=5,BE=6,zE=7,Ag="attached",VE="detached",qx=300,Oo=301,Fo=302,hd=303,dd=304,Bc=306,pd=1e3,ms=1001,md=1002,gn=1003,HE=1004,Hl=1005,ui=1006,Cf=1007,gs=1008,zr=1009,GE=1010,WE=1011,oc=1012,$x=1013,ko=1014,wi=1015,zc=1016,Kx=1017,Zx=1018,Bo=1020,XE=35902,jE=1021,YE=1022,fi=1023,qE=1024,$E=1025,To=1026,zo=1027,Qx=1028,Jx=1029,KE=1030,ey=1031,ty=1033,Rf=33776,bf=33777,Pf=33778,Lf=33779,Cg=35840,Rg=35841,bg=35842,Pg=35843,Lg=36196,Dg=37492,Ig=37496,Ng=37808,Ug=37809,Og=37810,Fg=37811,kg=37812,Bg=37813,zg=37814,Vg=37815,Hg=37816,Gg=37817,Wg=37818,Xg=37819,jg=37820,Yg=37821,Df=36492,qg=36494,$g=36495,ZE=36283,Kg=36284,Zg=36285,Qg=36286,ac=2300,gd=2301,If=2302,Jg=2400,e_=2401,t_=2402,QE=2500,LP=0,DP=1,IP=2,JE=3200,eT=3201,ny=0,tT=1,vr="",ai="srgb",Yr="srgb-linear",Dp="display-p3",Vc="display-p3-linear",lc="linear",ft="srgb",uc="rec709",cc="p3",Os=7680,n_=519,nT=512,iT=513,rT=514,iy=515,sT=516,oT=517,aT=518,lT=519,_d=35044,i_="300 es",Yi=2e3,fc=2001;class Qo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let r_=1234567;const Fa=Math.PI/180,Vo=180/Math.PI;function pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Ip(n,e){return(n%e+e)%e}function uT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cT(n,e,t){return n!==e?(t-n)/(e-n):0}function ka(n,e,t){return(1-t)*n+t*e}function fT(n,e,t,i){return ka(n,e,1-Math.exp(-t*i))}function hT(n,e=1){return e-Math.abs(Ip(n,e*2)-e)}function dT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gT(n,e){return n+Math.random()*(e-n)}function _T(n){return n*(.5-Math.random())}function vT(n){n!==void 0&&(r_=n);let e=r_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xT(n){return n*Fa}function yT(n){return n*Vo}function ST(n){return(n&n-1)===0&&n!==0}function MT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ET(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function TT(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const NP={DEG2RAD:Fa,RAD2DEG:Vo,generateUUID:pi,clamp:Xt,euclideanModulo:Ip,mapLinear:uT,inverseLerp:cT,lerp:ka,damp:fT,pingpong:hT,smoothstep:dT,smootherstep:pT,randInt:mT,randFloat:gT,randFloatSpread:_T,seededRandom:vT,degToRad:xT,radToDeg:yT,isPowerOfTwo:ST,ceilPowerOfTwo:MT,floorPowerOfTwo:ET,setQuaternionFromProperEuler:TT,normalize:et,denormalize:ci};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],m=r[0],g=r[3],d=r[6],x=r[1],v=r[4],y=r[7],C=r[2],E=r[5],T=r[8];return s[0]=o*m+a*x+l*C,s[3]=o*g+a*v+l*E,s[6]=o*d+a*y+l*T,s[1]=u*m+c*x+f*C,s[4]=u*g+c*v+f*E,s[7]=u*d+c*y+f*T,s[2]=h*m+p*x+_*C,s[5]=h*g+p*v+_*E,s[8]=h*d+p*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nf.makeScale(e,t)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new Be;function ry(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wT(){const n=sl("canvas");return n.style.display="block",n}const s_={};function Np(n){n in s_||(s_[n]=!0,console.warn(n))}function AT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const o_=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),a_=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gl={[Yr]:{transfer:lc,primaries:uc,toReference:n=>n,fromReference:n=>n},[ai]:{transfer:ft,primaries:uc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vc]:{transfer:lc,primaries:cc,toReference:n=>n.applyMatrix3(a_),fromReference:n=>n.applyMatrix3(o_)},[Dp]:{transfer:ft,primaries:cc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(a_),fromReference:n=>n.applyMatrix3(o_).convertLinearToSRGB()}},CT=new Set([Yr,Vc]),tt={enabled:!0,_workingColorSpace:Yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!CT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Gl[e].toReference,r=Gl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Gl[n].primaries},getTransfer:function(n){return n===vr?lc:Gl[n].transfer}};function wo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class RT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=sl("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wo(t[i]/255)*255):t[i]=wo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bT=0;class sy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Of(r[o].image)):s.push(Of(r[o]))}else s=Of(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Of(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?RT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PT=0;class tn extends Qo{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=ms,r=ms,s=ui,o=gs,a=fi,l=zr,u=tn.DEFAULT_ANISOTROPY,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=pi(),this.name="",this.source=new sy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=qx;tn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,C=(d+1)/2,E=(c+h)/4,T=(f+m)/4,R=(_+g)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(f-m)/x,this.z=(h-c)/x,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LT extends Qo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends LT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oy extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DT extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==h||u!==p||c!==_){let g=1-a;const d=l*h+u*p+c*_+f*m,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,d*x);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}const y=a*x;if(l=l*g+h*y,u=u*g+p*y,c=c*g+_*y,f=f*g+m*y,g===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(l_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ff=new U,l_=new Jo;class ir{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Xl.subVectors(this.max,fa),ks.subVectors(e.a,fa),Bs.subVectors(e.b,fa),zs.subVectors(e.c,fa),lr.subVectors(Bs,ks),ur.subVectors(zs,Bs),Zr.subVectors(ks,zs);let t=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Zr.z,Zr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Zr.z,0,-Zr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Zr.y,Zr.x,0];return!kf(t,ks,Bs,zs,Xl)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,ks,Bs,zs,Xl))?!1:(jl.crossVectors(lr,ur),t=[jl.x,jl.y,jl.z],kf(t,ks,Bs,zs,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new U,new U,new U,new U,new U,new U,new U,new U],ni=new U,Wl=new ir,ks=new U,Bs=new U,zs=new U,lr=new U,ur=new U,Zr=new U,fa=new U,Xl=new U,jl=new U,Qr=new U;function kf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qr.fromArray(n,s);const a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),l=e.dot(Qr),u=t.dot(Qr),c=i.dot(Qr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const IT=new ir,ha=new U,Bf=new U;class rr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Bf)),this.expandByPoint(ha.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new U,zf=new U,Yl=new U,cr=new U,Vf=new U,ql=new U,Hf=new U;class vl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zf.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(zf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yl),a=cr.dot(this.direction),l=-cr.dot(Yl),u=cr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const m=1/c;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zf).addScaledVector(Yl,h),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){Vf.subVectors(t,e),ql.subVectors(i,e),Hf.crossVectors(Vf,ql);let o=this.direction.dot(Hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,e);const l=a*this.direction.dot(ql.crossVectors(cr,ql));if(l<0)return null;const u=a*this.direction.dot(Vf.cross(cr));if(u<0||l+u>o)return null;const c=-a*cr.dot(Hf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+m,t[1]=l*f,t[5]=m*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NT,e,UT)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),fr.crossVectors(i,Rn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),fr.crossVectors(i,Rn)),fr.normalize(),$l.crossVectors(Rn,fr),r[0]=fr.x,r[4]=$l.x,r[8]=Rn.x,r[1]=fr.y,r[5]=$l.y,r[9]=Rn.y,r[2]=fr.z,r[6]=$l.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],m=i[6],g=i[10],d=i[14],x=i[3],v=i[7],y=i[11],C=i[15],E=r[0],T=r[4],R=r[8],M=r[12],S=r[1],L=r[5],B=r[9],O=r[13],G=r[2],j=r[6],z=r[10],$=r[14],D=r[3],q=r[7],K=r[11],oe=r[15];return s[0]=o*E+a*S+l*G+u*D,s[4]=o*T+a*L+l*j+u*q,s[8]=o*R+a*B+l*z+u*K,s[12]=o*M+a*O+l*$+u*oe,s[1]=c*E+f*S+h*G+p*D,s[5]=c*T+f*L+h*j+p*q,s[9]=c*R+f*B+h*z+p*K,s[13]=c*M+f*O+h*$+p*oe,s[2]=_*E+m*S+g*G+d*D,s[6]=_*T+m*L+g*j+d*q,s[10]=_*R+m*B+g*z+d*K,s[14]=_*M+m*O+g*$+d*oe,s[3]=x*E+v*S+y*G+C*D,s[7]=x*T+v*L+y*j+C*q,s[11]=x*R+v*B+y*z+C*K,s[15]=x*M+v*O+y*$+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],m=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],m=e[13],g=e[14],d=e[15],x=f*g*u-m*h*u+m*l*p-a*g*p-f*l*d+a*h*d,v=_*h*u-c*g*u-_*l*p+o*g*p+c*l*d-o*h*d,y=c*m*u-_*f*u+_*a*p-o*m*p-c*a*d+o*f*d,C=_*f*l-c*m*l-_*a*h+o*m*h+c*a*g-o*f*g,E=t*x+i*v+r*y+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*T,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*g*s-_*h*s+_*r*p-t*g*p-c*r*d+t*h*d)*T,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*d-t*l*d)*T,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*d-t*f*d)*T,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*d+t*a*d)*T,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(c*m*r-_*f*r+_*i*h-t*m*h-c*i*g+t*f*g)*T,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*T,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,m=o*c,g=o*f,d=a*f,x=l*u,v=l*c,y=l*f,C=i.x,E=i.y,T=i.z;return r[0]=(1-(m+d))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+d))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(_+v)*T,r[9]=(g-x)*T,r[10]=(1-(h+m))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Vs.set(r[0],r[1],r[2]).length();const o=Vs.set(r[4],r[5],r[6]).length(),a=Vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const u=1/s,c=1/o,f=1/a;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Yi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Yi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Yi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,m;if(a===Yi)_=(o+s)*f,m=-2*f;else if(a===fc)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vs=new U,ii=new Ge,NT=new U(0,0,0),UT=new U(1,1,1),fr=new U,$l=new U,Rn=new U,u_=new Ge,c_=new Jo;class bi{constructor(e=0,t=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return u_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OT=0;const f_=new U,Hs=new Jo,Ui=new Ge,Kl=new U,da=new U,FT=new U,kT=new Jo,h_=new U(1,0,0),d_=new U(0,1,0),p_=new U(0,0,1),m_={type:"added"},BT={type:"removed"},Gs={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Rt extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new U,t=new bi,i=new Jo,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Be}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,t){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kl.copy(e):Kl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(da,Kl,this.up):Ui.lookAt(Kl,da,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BT),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,FT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,kT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new U(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new U,Oi=new U,Wf=new U,Fi=new U,Ws=new U,Xs=new U,g_=new U,Xf=new U,jf=new U,Yf=new U;class Ei{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Oi.subVectors(i,t),Wf.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(Oi),l=ri.dot(Wf),u=Oi.dot(Oi),c=Oi.dot(Wf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Oi.subVectors(e,t),ri.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ri.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,i),Xs.subVectors(s,i),Xf.subVectors(e,i);const l=Ws.dot(Xf),u=Xs.dot(Xf);if(l<=0&&u<=0)return t.copy(i);jf.subVectors(e,r);const c=Ws.dot(jf),f=Xs.dot(jf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ws,o);Yf.subVectors(e,s);const p=Ws.dot(Yf),_=Xs.dot(Yf);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Xs,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return g_.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(g_,a);const d=1/(g+m+h);return o=m*d,a=h*d,t.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function qf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Ip(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qf(o,s,e+1/3),this.g=qf(o,s,e),this.b=qf(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=ai){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const i=ay[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}copyLinearToSRGB(e){return this.r=Uf(e.r),this.g=Uf(e.g),this.b=Uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return tt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Xt(Qt.r*255,0,255))*65536+Math.round(Xt(Qt.g*255,0,255))*256+Math.round(Xt(Qt.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ai){tt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(Zl);const i=ka(hr.h,Zl.h,t),r=ka(hr.s,Zl.s,t),s=ka(hr.l,Zl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new je;je.NAMES=ay;let zT=0;class Is extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Eo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=fd,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ly extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new U,Ql=new Ye;class Qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_d,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Np("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_d&&(e.usage=this.usage),e}}class uy extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cy extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $i extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let VT=0;const Gn=new Ge,$f=new Rt,js=new U,bn=new ir,pa=new ir,zt=new U;class sr extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?cy:uy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(bn.min,pa.min),bn.expandByPoint(zt),zt.addVectors(bn.max,pa.max),bn.expandByPoint(zt)):(bn.expandByPoint(pa.min),bn.expandByPoint(pa.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)zt.fromBufferAttribute(a,u),l&&(js.fromBufferAttribute(e,u),zt.add(js)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new U,l[R]=new U;const u=new U,c=new U,f=new U,h=new Ye,p=new Ye,_=new Ye,m=new U,g=new U;function d(R,M,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(m.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),a[R].add(m),a[M].add(m),a[S].add(m),l[R].add(g),l[M].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,M=x.length;R<M;++R){const S=x[R],L=S.start,B=S.count;for(let O=L,G=L+B;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new U,y=new U,C=new U,E=new U;function T(R){C.fromBufferAttribute(r,R),E.copy(C);const M=a[R];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(E,M);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,M=x.length;R<M;++R){const S=x[R],L=S.start,B=S.count;for(let O=L,G=L+B;O<G;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Qn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new Ge,Jr=new vl,Jl=new rr,v_=new U,Ys=new U,qs=new U,$s=new U,Kf=new U,eu=new U,tu=new Ye,nu=new Ye,iu=new Ye,x_=new U,y_=new U,S_=new U,ru=new U,su=new U;class _n extends Rt{constructor(e=new sr,t=new ly){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){eu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Kf.fromBufferAttribute(f,e),o?eu.addScaledVector(Kf,c):eu.addScaledVector(Kf.sub(t),c))}t.add(eu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Jl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Jl,v_)===null||Jr.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(__.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(__),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const E=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);r=ou(this,d,e,i,u,c,f,E,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=ou(this,o,e,i,u,c,f,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const E=y,T=y+1,R=y+2;r=ou(this,d,e,i,u,c,f,E,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const x=g,v=g+1,y=g+2;r=ou(this,o,e,i,u,c,f,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function HT(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;su.copy(a),su.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(su);return u<t.near||u>t.far?null:{distance:u,point:su.clone(),object:n}}function ou(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ys),n.getVertexPosition(l,qs),n.getVertexPosition(u,$s);const c=HT(n,e,t,i,Ys,qs,$s,ru);if(c){r&&(tu.fromBufferAttribute(r,a),nu.fromBufferAttribute(r,l),iu.fromBufferAttribute(r,u),c.uv=Ei.getInterpolation(ru,Ys,qs,$s,tu,nu,iu,new Ye)),s&&(tu.fromBufferAttribute(s,a),nu.fromBufferAttribute(s,l),iu.fromBufferAttribute(s,u),c.uv1=Ei.getInterpolation(ru,Ys,qs,$s,tu,nu,iu,new Ye)),o&&(x_.fromBufferAttribute(o,a),y_.fromBufferAttribute(o,l),S_.fromBufferAttribute(o,u),c.normal=Ei.getInterpolation(ru,Ys,qs,$s,x_,y_,S_,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new U,materialIndex:0};Ei.getNormal(Ys,qs,$s,f.normal),c.face=f}return c}class xl extends sr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $i(u,3)),this.setAttribute("normal",new $i(c,3)),this.setAttribute("uv",new $i(f,2));function _(m,g,d,x,v,y,C,E,T,R,M){const S=y/T,L=C/R,B=y/2,O=C/2,G=E/2,j=T+1,z=R+1;let $=0,D=0;const q=new U;for(let K=0;K<z;K++){const oe=K*L-O;for(let ye=0;ye<j;ye++){const He=ye*S-B;q[m]=He*x,q[g]=oe*v,q[d]=G,u.push(q.x,q.y,q.z),q[m]=0,q[g]=0,q[d]=E>0?1:-1,c.push(q.x,q.y,q.z),f.push(ye/T),f.push(1-K/R),$+=1}}for(let K=0;K<R;K++)for(let oe=0;oe<T;oe++){const ye=h+oe+j*K,He=h+oe+j*(K+1),X=h+(oe+1)+j*(K+1),Q=h+(oe+1)+j*K;l.push(ye,He,Q),l.push(He,X,Q),D+=6}a.addGroup(p,D,M),p+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=Ho(n[t]);for(const r in i)e[r]=i[r]}return e}function GT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const WT={clone:Ho,merge:an};var XT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vr extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=GT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hy extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new U,M_=new Ye,E_=new Ye;class pn extends hy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,M_,E_),t.subVectors(E_,M_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class YT extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const s=new pn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const o=new pn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new pn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const l=new pn(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const u=new pn(Ks,Zs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dy extends tn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Oo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qT extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xl(5,5,5),s=new Vr({name:"CubemapFromEquirect",uniforms:Ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ir});s.uniforms.tEquirect.value=t;const o=new _n(r,s),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=ui),new YT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Zf=new U,$T=new U,KT=new Be;class as{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zf.subVectors(i,t).cross($T.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||KT.getNormalMatrix(e),r=this.coplanarPoint(Zf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new rr,au=new U;class Op{constructor(e=new as,t=new as,i=new as,r=new as,s=new as,o=new as){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],d=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,g-p,y-d).normalize(),i[1].setComponents(l+s,h+u,g+p,y+d).normalize(),i[2].setComponents(l+o,h+c,g+_,y+x).normalize(),i[3].setComponents(l-o,h-c,g-_,y-x).normalize(),i[4].setComponents(l-a,h-f,g-m,y-v).normalize(),t===Yi)i[5].setComponents(l+a,h+f,g+m,y+v).normalize();else if(t===fc)i[5].setComponents(a,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(au.x=r.normal.x>0?e.max.x:e.min.x,au.y=r.normal.y>0?e.max.y:e.min.y,au.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function py(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ZT(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(u,a),f.count===-1&&h.length===0&&n.bufferSubData(u,0,c),h.length!==0){for(let p=0,_=h.length;p<_;p++){const m=h[p];n.bufferSubData(u,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Hc extends sr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],m=[],g=[];for(let d=0;d<c;d++){const x=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;_.push(y,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+u*d,y=x+u*(d+1),C=x+1+u*(d+1),E=x+1+u*d;p.push(v,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new $i(_,3)),this.setAttribute("normal",new $i(m,3)),this.setAttribute("uv",new $i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var QT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ow=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Aw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rw="gl_FragColor = linearToOutputTexel( gl_FragColor );",bw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ww=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$w=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_C=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:QT,alphahash_pars_fragment:JT,alphamap_fragment:ew,alphamap_pars_fragment:tw,alphatest_fragment:nw,alphatest_pars_fragment:iw,aomap_fragment:rw,aomap_pars_fragment:sw,batching_pars_vertex:ow,batching_vertex:aw,begin_vertex:lw,beginnormal_vertex:uw,bsdfs:cw,iridescence_fragment:fw,bumpmap_pars_fragment:hw,clipping_planes_fragment:dw,clipping_planes_pars_fragment:pw,clipping_planes_pars_vertex:mw,clipping_planes_vertex:gw,color_fragment:_w,color_pars_fragment:vw,color_pars_vertex:xw,color_vertex:yw,common:Sw,cube_uv_reflection_fragment:Mw,defaultnormal_vertex:Ew,displacementmap_pars_vertex:Tw,displacementmap_vertex:ww,emissivemap_fragment:Aw,emissivemap_pars_fragment:Cw,colorspace_fragment:Rw,colorspace_pars_fragment:bw,envmap_fragment:Pw,envmap_common_pars_fragment:Lw,envmap_pars_fragment:Dw,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:Ww,envmap_vertex:Nw,fog_vertex:Uw,fog_pars_vertex:Ow,fog_fragment:Fw,fog_pars_fragment:kw,gradientmap_pars_fragment:Bw,lightmap_pars_fragment:zw,lights_lambert_fragment:Vw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Gw,lights_toon_fragment:Xw,lights_toon_pars_fragment:jw,lights_phong_fragment:Yw,lights_phong_pars_fragment:qw,lights_physical_fragment:$w,lights_physical_pars_fragment:Kw,lights_fragment_begin:Zw,lights_fragment_maps:Qw,lights_fragment_end:Jw,logdepthbuf_fragment:eA,logdepthbuf_pars_fragment:tA,logdepthbuf_pars_vertex:nA,logdepthbuf_vertex:iA,map_fragment:rA,map_pars_fragment:sA,map_particle_fragment:oA,map_particle_pars_fragment:aA,metalnessmap_fragment:lA,metalnessmap_pars_fragment:uA,morphinstance_vertex:cA,morphcolor_vertex:fA,morphnormal_vertex:hA,morphtarget_pars_vertex:dA,morphtarget_vertex:pA,normal_fragment_begin:mA,normal_fragment_maps:gA,normal_pars_fragment:_A,normal_pars_vertex:vA,normal_vertex:xA,normalmap_pars_fragment:yA,clearcoat_normal_fragment_begin:SA,clearcoat_normal_fragment_maps:MA,clearcoat_pars_fragment:EA,iridescence_pars_fragment:TA,opaque_fragment:wA,packing:AA,premultiplied_alpha_fragment:CA,project_vertex:RA,dithering_fragment:bA,dithering_pars_fragment:PA,roughnessmap_fragment:LA,roughnessmap_pars_fragment:DA,shadowmap_pars_fragment:IA,shadowmap_pars_vertex:NA,shadowmap_vertex:UA,shadowmask_pars_fragment:OA,skinbase_vertex:FA,skinning_pars_vertex:kA,skinning_vertex:BA,skinnormal_vertex:zA,specularmap_fragment:VA,specularmap_pars_fragment:HA,tonemapping_fragment:GA,tonemapping_pars_fragment:WA,transmission_fragment:XA,transmission_pars_fragment:jA,uv_pars_fragment:YA,uv_pars_vertex:qA,uv_vertex:$A,worldpos_vertex:KA,background_vert:ZA,background_frag:QA,backgroundCube_vert:JA,backgroundCube_frag:eC,cube_vert:tC,cube_frag:nC,depth_vert:iC,depth_frag:rC,distanceRGBA_vert:sC,distanceRGBA_frag:oC,equirect_vert:aC,equirect_frag:lC,linedashed_vert:uC,linedashed_frag:cC,meshbasic_vert:fC,meshbasic_frag:hC,meshlambert_vert:dC,meshlambert_frag:pC,meshmatcap_vert:mC,meshmatcap_frag:gC,meshnormal_vert:_C,meshnormal_frag:vC,meshphong_vert:xC,meshphong_frag:yC,meshphysical_vert:SC,meshphysical_frag:MC,meshtoon_vert:EC,meshtoon_frag:TC,points_vert:wC,points_frag:AC,shadow_vert:CC,shadow_frag:RC,sprite_vert:bC,sprite_frag:PC},fe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Si={basic:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:an([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:an([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:an([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:an([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:an([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:an([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:an([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:an([fe.lights,fe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Si.physical={uniforms:an([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const lu={r:0,b:0,g:0},ts=new bi,LC=new Ge;function DC(n,e,t,i,r,s,o){const a=new je(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function m(x){let v=!1;const y=_(x);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===Bc)?(c===void 0&&(c=new _n(new xl(1,1,1),new Vr({name:"BackgroundCubeMaterial",uniforms:Ho(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ts.copy(v.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(LC.makeRotationFromEuler(ts)),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ft,(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new _n(new Hc(2,2),new Vr({name:"BackgroundMaterial",uniforms:Ho(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(lu,fy(n)),i.buffers.color.setClear(lu.r,lu.g,lu.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:m,addToRenderList:g}}function IC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,B,O,G){let j=!1;const z=f(O,B,L);s!==z&&(s=z,u(s.object)),j=p(S,O,B,G),j&&_(S,O,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(S,L,B,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,B){const O=B.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let j=G[L.id];j===void 0&&(j={},G[L.id]=j);let z=j[O];return z===void 0&&(z=h(l()),j[O]=z),z}function h(S){const L=[],B=[],O=[];for(let G=0;G<t;G++)L[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,L,B,O){const G=s.attributes,j=L.attributes;let z=0;const $=B.getAttributes();for(const D in $)if($[D].location>=0){const K=G[D];let oe=j[D];if(oe===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function _(S,L,B,O){const G={},j=L.attributes;let z=0;const $=B.getAttributes();for(const D in $)if($[D].location>=0){let K=j[D];K===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),G[D]=oe,z++}s.attributes=G,s.attributesNum=z,s.index=O}function m(){const S=s.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function g(S){d(S,0)}function d(S,L){const B=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;B[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),G[S]!==L&&(n.vertexAttribDivisor(S,L),G[S]=L)}function x(){const S=s.newAttributes,L=s.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==S[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function v(S,L,B,O,G,j,z){z===!0?n.vertexAttribIPointer(S,L,B,G,j):n.vertexAttribPointer(S,L,B,O,G,j)}function y(S,L,B,O){m();const G=O.attributes,j=B.getAttributes(),z=L.defaultAttributeValues;for(const $ in j){const D=j[$];if(D.location>=0){let q=G[$];if(q===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const K=q.normalized,oe=q.itemSize,ye=e.get(q);if(ye===void 0)continue;const He=ye.buffer,X=ye.type,Q=ye.bytesPerElement,pe=X===n.INT||X===n.UNSIGNED_INT||q.gpuType===$x;if(q.isInterleavedBufferAttribute){const H=q.data,te=H.stride,ne=q.offset;if(H.isInstancedInterleavedBuffer){for(let ee=0;ee<D.locationSize;ee++)d(D.location+ee,H.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ee=0;ee<D.locationSize;ee++)g(D.location+ee);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ee=0;ee<D.locationSize;ee++)v(D.location+ee,oe/D.locationSize,X,K,te*Q,(ne+oe/D.locationSize*ee)*Q,pe)}else{if(q.isInstancedBufferAttribute){for(let H=0;H<D.locationSize;H++)d(D.location+H,q.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let H=0;H<D.locationSize;H++)g(D.location+H);n.bindBuffer(n.ARRAY_BUFFER,He);for(let H=0;H<D.locationSize;H++)v(D.location+H,oe/D.locationSize,X,K,oe*Q,oe/D.locationSize*H*Q,pe)}}else if(z!==void 0){const K=z[$];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(D.location,K);break;case 3:n.vertexAttrib3fv(D.location,K);break;case 4:n.vertexAttrib4fv(D.location,K);break;default:n.vertexAttrib1fv(D.location,K)}}}}x()}function C(){R();for(const S in i){const L=i[S];for(const B in L){const O=L[B];for(const G in O)c(O[G].object),delete O[G];delete L[B]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const B in L){const O=L[B];for(const G in O)c(O[G].object),delete O[G];delete L[B]}delete i[S.id]}function T(S){for(const L in i){const B=i[L];if(B[S.id]===void 0)continue;const O=B[S.id];for(const G in O)c(O[G].object),delete O[G];delete B[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function NC(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(u[p],c[p]);else{h.multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let m=0;m<f;m++)_+=c[m];for(let m=0;m<h.length;m++)t.update(_,i,h[m])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==fi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===zc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wi&&!T)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function OC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new as,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const x=s?0:i,v=x*4;let y=d.clippingState||null;l.value=y,y=c(_,h,v,p);for(let C=0;C!==v;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const d=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==m;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function FC(n){let e=new WeakMap;function t(o,a){return a===hd?o.mapping=Oo:a===dd&&(o.mapping=Fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hd||a===dd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new qT(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class my extends hy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const po=4,T_=[.125,.215,.35,.446,.526,.582],fs=20,Qf=new my,w_=new je;let Jf=null,eh=0,th=0,nh=!1;const ls=(1+Math.sqrt(5))/2,Qs=1/ls,A_=[new U(-ls,Qs,0),new U(ls,Qs,0),new U(-Qs,0,ls),new U(Qs,0,ls),new U(0,ls,-Qs),new U(0,ls,Qs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class C_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Jf=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,uu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:zc,format:fi,colorSpace:Yr,depthBuffer:!1},r=R_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kC(s)),this._blurMaterial=BC(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,Qf)}_sceneToCubeUV(e,t,i,r){const a=new pn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(w_),c.toneMapping=Nr,c.autoClear=!1;const p=new ly({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new _n(new xl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(w_),m=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;uu(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Oo||e.mapping===Fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=A_[(r-s-1)%A_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new _n(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fs-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):fs;g>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const d=[];let x=0;for(let T=0;T<fs;++T){const R=T/m,M=Math.exp(-R*R/2);d.push(M),T===0?x+=M:T<g&&(x+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-po?r-v+po:0),E=4*(this._cubeSize-y);uu(t,C,E,3*y,2*y),l.setRenderTarget(t),l.render(f,Qf)}}function kC(n){const e=[],t=[],i=[];let r=n;const s=n-po+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-po?l=T_[o-n+po-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,d=1,x=new Float32Array(m*_*p),v=new Float32Array(g*_*p),y=new Float32Array(d*_*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,R=E>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(M,m*_*E),v.set(h,g*_*E);const S=[E,E,E,E,E,E];y.set(S,d*_*E)}const C=new sr;C.setAttribute("position",new Qn(x,m)),C.setAttribute("uv",new Qn(v,g)),C.setAttribute("faceIndex",new Qn(y,d)),e.push(C),r>po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function R_(n,e,t){const i=new bs(n,e,t);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function BC(n,e,t){const i=new Float32Array(fs),r=new U(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function b_(){return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function P_(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hd||l===dd,c=l===Oo||l===Fo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new C_(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new C_(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function VC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Np("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HC(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const m=h.morphAttributes[_];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],E=x[v+1],T=x[v+2];h.push(C,E,E,T,T,C)}}else if(_!==void 0){const x=_.array;m=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,E=v+1,T=v+2;h.push(C,E,E,T,T,C)}}else return;const g=new(ry(h)?cy:uy)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function GC(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<_;g++)this.render(h[g]/o,p[g]);else{m.multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}}function f(h,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,m,0,_);let d=0;for(let x=0;x<_;x++)d+=p[x];for(let x=0;x<m.length;x++)t.update(d,i,m[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function WC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function XC(n,e,t){const i=new WeakMap,r=new lt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*C*4*f),T=new oy(E,y,C,f);T.type=wi,T.needsUpdate=!0;const R=v*4;for(let S=0;S<f;S++){const L=g[S],B=d[S],O=x[S],G=y*C*4*S;for(let j=0;j<L.count;j++){const z=j*R;p===!0&&(r.fromBufferAttribute(L,j),E[G+z+0]=r.x,E[G+z+1]=r.y,E[G+z+2]=r.z,E[G+z+3]=0),_===!0&&(r.fromBufferAttribute(B,j),E[G+z+4]=r.x,E[G+z+5]=r.y,E[G+z+6]=r.z,E[G+z+7]=0),m===!0&&(r.fromBufferAttribute(O,j),E[G+z+8]=r.x,E[G+z+9]=r.y,E[G+z+10]=r.z,E[G+z+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:T,size:new Ye(y,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<u.length;m++)p+=u[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function jC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class gy extends tn{constructor(e,t,i,r,s,o,a,l,u,c=To){if(c!==To&&c!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===To&&(i=ko),i===void 0&&c===zo&&(i=Bo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _y=new tn,vy=new gy(1,1);vy.compareFunction=iy;const xy=new oy,yy=new DT,Sy=new dy,L_=[],D_=[],I_=new Float32Array(16),N_=new Float32Array(9),U_=new Float32Array(4);function ea(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=L_[r];if(s===void 0&&(s=new Float32Array(r),L_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gc(n,e){let t=D_[e];t===void 0&&(t=new Int32Array(e),D_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function KC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function ZC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;U_.set(i),n.uniformMatrix2fv(this.addr,!1,U_),Ft(t,i)}}function QC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;N_.set(i),n.uniformMatrix3fv(this.addr,!1,N_),Ft(t,i)}}function JC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;I_.set(i),n.uniformMatrix4fv(this.addr,!1,I_),Ft(t,i)}}function eR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function nR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function iR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function rR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function oR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function aR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function lR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?vy:_y;t.setTexture2D(e||s,r)}function uR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yy,r)}function cR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sy,r)}function fR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xy,r)}function hR(n){switch(n){case 5126:return YC;case 35664:return qC;case 35665:return $C;case 35666:return KC;case 35674:return ZC;case 35675:return QC;case 35676:return JC;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return fR}}function dR(n,e){n.uniform1fv(this.addr,e)}function pR(n,e){const t=ea(e,this.size,2);n.uniform2fv(this.addr,t)}function mR(n,e){const t=ea(e,this.size,3);n.uniform3fv(this.addr,t)}function gR(n,e){const t=ea(e,this.size,4);n.uniform4fv(this.addr,t)}function _R(n,e){const t=ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vR(n,e){const t=ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xR(n,e){const t=ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yR(n,e){n.uniform1iv(this.addr,e)}function SR(n,e){n.uniform2iv(this.addr,e)}function MR(n,e){n.uniform3iv(this.addr,e)}function ER(n,e){n.uniform4iv(this.addr,e)}function TR(n,e){n.uniform1uiv(this.addr,e)}function wR(n,e){n.uniform2uiv(this.addr,e)}function AR(n,e){n.uniform3uiv(this.addr,e)}function CR(n,e){n.uniform4uiv(this.addr,e)}function RR(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_y,s[o])}function bR(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||yy,s[o])}function PR(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sy,s[o])}function LR(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xy,s[o])}function DR(n){switch(n){case 5126:return dR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return _R;case 35675:return vR;case 35676:return xR;case 5124:case 35670:return yR;case 35667:case 35671:return SR;case 35668:case 35672:return MR;case 35669:case 35673:return ER;case 5125:return TR;case 36294:return wR;case 36295:return AR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return LR}}class IR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hR(t.type)}}class NR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DR(t.type)}}class UR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function O_(n,e){n.seq.push(e),n.map[e.id]=e}function OR(n,e,t){const i=n.name,r=i.length;for(ih.lastIndex=0;;){const s=ih.exec(i),o=ih.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){O_(t,u===void 0?new IR(a,n,e):new NR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new UR(a),O_(t,f)),t=f}}}class Lu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);OR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function F_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FR=37297;let kR=0;function BR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zR(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===cc&&t===uc?i="LinearDisplayP3ToLinearSRGB":e===uc&&t===cc&&(i="LinearSRGBToLinearDisplayP3"),n){case Yr:case Vc:return[i,"LinearTransferOETF"];case ai:case Dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function k_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+BR(n.getShaderSource(e),o)}else return r}function VR(n,e){const t=zR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HR(n,e){let t;switch(e){case NE:t="Linear";break;case UE:t="Reinhard";break;case OE:t="OptimizedCineon";break;case FE:t="ACESFilmic";break;case BE:t="AgX";break;case zE:t="Neutral";break;case kE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function GR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function WR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function B_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(n){return n.replace(jR,qR)}const YR=new Map;function qR(n,e){let t=ke[e];if(t===void 0){const i=YR.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(t)}const $R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(n){return n.replace($R,KR)}function KR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function QR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Oo:case Fo:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yx:e="ENVMAP_BLENDING_MULTIPLY";break;case DE:e="ENVMAP_BLENDING_MIX";break;case IE:e="ENVMAP_BLENDING_ADD";break}return e}function tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZR(t),u=QR(t),c=JR(t),f=eb(t),h=tb(t),p=GR(t),_=WR(s),m=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ta).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ta).join(`
`),d.length>0&&(d+=`
`)):(g=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),d=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?ke.tonemapping_pars_fragment:"",t.toneMapping!==Nr?HR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,VR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=vd(o),o=B_(o,t),o=z_(o,t),a=vd(a),a=B_(a,t),a=z_(a,t),o=V_(o),a=V_(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+o,y=x+d+a,C=F_(r,r.VERTEX_SHADER,v),E=F_(r,r.FRAGMENT_SHADER,y);r.attachShader(m,C),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(L){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(E).trim();let j=!0,z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,C,E);else{const $=k_(r,C,"vertex"),D=k_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+$+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(z=!1);z&&(L.diagnostics={runnable:j,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:G,prefix:d}})}r.deleteShader(C),r.deleteShader(E),R=new Lu(r,m),M=XR(r,m)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(m,FR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=E,this}let ib=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sb(e),t.set(e,i)),i}}class sb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(n,e,t,i,r,s,o){const a=new Up,l=new rb,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,S,L,B,O){const G=B.fog,j=O.geometry,z=M.isMeshStandardMaterial?B.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),D=$&&$.mapping===Bc?$.image.height:null,q=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oe=K!==void 0?K.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let He,X,Q,pe;if(q){const it=Si[q];He=it.vertexShader,X=it.fragmentShader}else He=M.vertexShader,X=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const H=n.getRenderTarget(),te=O.isInstancedMesh===!0,ne=O.isBatchedMesh===!0,ee=!!M.map,b=!!M.matcap,ve=!!$,ce=!!M.aoMap,Ne=!!M.lightMap,Me=!!M.bumpMap,Oe=!!M.normalMap,Re=!!M.displacementMap,Ue=!!M.emissiveMap,bt=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,W=M.clearcoat>0,J=M.dispersion>0,ie=M.iridescence>0,re=M.sheen>0,Ae=M.transmission>0,he=w&&!!M.anisotropyMap,de=W&&!!M.clearcoatMap,ze=W&&!!M.clearcoatNormalMap,ae=W&&!!M.clearcoatRoughnessMap,Te=ie&&!!M.iridescenceMap,Xe=ie&&!!M.iridescenceThicknessMap,De=re&&!!M.sheenColorMap,me=re&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,qe=!!M.specularColorMap,Tt=!!M.specularIntensityMap,I=Ae&&!!M.transmissionMap,ge=Ae&&!!M.thicknessMap,Y=!!M.gradientMap,Z=!!M.alphaMap,ue=M.alphaTest>0,Ie=!!M.alphaHash,Ze=!!M.extensions;let wt=Nr;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(wt=n.toneMapping);const kt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:X,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ne,batchingColor:ne&&O._colorsTexture!==null,instancing:te,instancingColor:te&&O.instanceColor!==null,instancingMorph:te&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Yr,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:b,envMap:ve,envMapMode:ve&&$.mapping,envMapCubeUVHeight:D,aoMap:ce,lightMap:Ne,bumpMap:Me,normalMap:Oe,displacementMap:h&&Re,emissiveMap:Ue,normalMapObjectSpace:Oe&&M.normalMapType===tT,normalMapTangentSpace:Oe&&M.normalMapType===ny,metalnessMap:bt,roughnessMap:P,anisotropy:w,anisotropyMap:he,clearcoat:W,clearcoatMap:de,clearcoatNormalMap:ze,clearcoatRoughnessMap:ae,dispersion:J,iridescence:ie,iridescenceMap:Te,iridescenceThicknessMap:Xe,sheen:re,sheenColorMap:De,sheenRoughnessMap:me,specularMap:Ve,specularColorMap:qe,specularIntensityMap:Tt,transmission:Ae,transmissionMap:I,thicknessMap:ge,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Eo&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:ue,alphaHash:Ie,combine:M.combine,mapUv:ee&&m(M.map.channel),aoMapUv:ce&&m(M.aoMap.channel),lightMapUv:Ne&&m(M.lightMap.channel),bumpMapUv:Me&&m(M.bumpMap.channel),normalMapUv:Oe&&m(M.normalMap.channel),displacementMapUv:Re&&m(M.displacementMap.channel),emissiveMapUv:Ue&&m(M.emissiveMap.channel),metalnessMapUv:bt&&m(M.metalnessMap.channel),roughnessMapUv:P&&m(M.roughnessMap.channel),anisotropyMapUv:he&&m(M.anisotropyMap.channel),clearcoatMapUv:de&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ze&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(M.sheenRoughnessMap.channel),specularMapUv:Ve&&m(M.specularMap.channel),specularColorMapUv:qe&&m(M.specularColorMap.channel),specularIntensityMapUv:Tt&&m(M.specularIntensityMap.channel),transmissionMapUv:I&&m(M.transmissionMap.channel),thicknessMapUv:ge&&m(M.thicknessMap.channel),alphaMapUv:Z&&m(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Oe||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(ee||Z),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wi,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return kt.vertexUv1s=u.has(1),kt.vertexUv2s=u.has(2),kt.vertexUv3s=u.has(3),u.clear(),kt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),M.push(a.mask)}function y(M){const S=_[M.type];let L;if(S){const B=Si[S];L=WT.clone(B.uniforms)}else L=M.uniforms;return L}function C(M,S){let L;for(let B=0,O=c.length;B<O;B++){const G=c[B];if(G.cacheKey===S){L=G,++L.usedTimes;break}}return L===void 0&&(L=new nb(n,S,M,s),c.push(L)),L}function E(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:R}}function ab(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function G_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function W_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function a(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||lb),i.length>1&&i.sort(h||G_),r.length>1&&r.sort(h||G_)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ub(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new W_,n.set(i,[o])):r>=s.length?(o=new W_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hb=0;function db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pb(n){const e=new cb,t=fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new Ge,o=new Ge;function a(u){let c=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,m=0,g=0,d=0,x=0,v=0,y=0,C=0,E=0,T=0;u.sort(db);for(let M=0,S=u.length;M<S;M++){const L=u[M],B=L.color,O=L.intensity,G=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=B.r*O,f+=B.g*O,h+=B.b*O;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],O);T++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,D=t.get(L);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=L.shadow.matrix,x++}i.directional[p]=z,p++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=G,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[m]=z;const $=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,$.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[m]=$.matrix,L.castShadow){const D=t.get(L);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[m]=D,i.spotShadowMap[m]=j,y++}m++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=z,g++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const $=L.shadow,D=t.get(L);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=z,_++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(O),z.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[d]=z,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==m||R.rectAreaLength!==g||R.hemiLength!==d||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=m,R.rectAreaLength=g,R.hemiLength=d,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=T,i.version=hb++)}function l(u,c){let f=0,h=0,p=0,_=0,m=0;const g=c.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function X_(n){const e=new pb(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new X_(n),e.set(r,[a])):s>=o.length?(a=new X_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gb extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yb(n,e,t){let i=new Op;const r=new Ye,s=new Ye,o=new lt,a=new gb({depthPacking:eT}),l=new _b,u={},c=t.maxTextureSize,f={[Br]:Sn,[Sn]:Br,[Wi]:Wi},h=new Vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:vb,fragmentShader:xb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new sr;_.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new _n(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xx;let d=this.type;this.render=function(E,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ir),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=d!==Bi&&this.type===Bi,G=d===Bi&&this.type!==Bi;for(let j=0,z=E.length;j<z;j++){const $=E[j],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||O===!0||G===!0){const oe=this.type!==Bi?{minFilter:gn,magFilter:gn}:{};D.map!==null&&D.map.dispose(),D.map=new bs(r.x,r.y,oe),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const K=D.getViewportCount();for(let oe=0;oe<K;oe++){const ye=D.getViewport(oe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(o),D.updateMatrices($,oe),i=D.getFrustum(),y(T,R,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===Bi&&x(D,R),D.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,L)};function x(E,T){const R=e.update(m);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bs(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,R,h,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,R,p,m,null)}function v(E,T,R,M){let S=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=S.uuid,O=T.uuid;let G=u[B];G===void 0&&(G={},u[B]=G);let j=G[O];j===void 0&&(j=S.clone(),G[O]=j,T.addEventListener("dispose",C)),S=j}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Bi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=R}return S}function y(E,T,R,M,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Bi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=e.update(E),G=E.material;if(Array.isArray(G)){const j=O.groups;for(let z=0,$=j.length;z<$;z++){const D=j[z],q=G[D.materialIndex];if(q&&q.visible){const K=v(E,q,M,S);E.onBeforeShadow(n,E,T,R,O,K,D),n.renderBufferDirect(R,null,O,K,E,D),E.onAfterShadow(n,E,T,R,O,K,D)}}}else if(G.visible){const j=v(E,G,M,S);E.onBeforeShadow(n,E,T,R,O,j,null),n.renderBufferDirect(R,null,O,j,E,null),E.onAfterShadow(n,E,T,R,O,j,null)}}const B=E.children;for(let O=0,G=B.length;O<G;O++)y(B[O],T,R,M,S)}function C(E){E.target.removeEventListener("dispose",C);for(const R in u){const M=u[R],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Sb(n){function e(){let I=!1;const ge=new lt;let Y=null;const Z=new lt(0,0,0,0);return{setMask:function(ue){Y!==ue&&!I&&(n.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){I=ue},setClear:function(ue,Ie,Ze,wt,kt){kt===!0&&(ue*=wt,Ie*=wt,Ze*=wt),ge.set(ue,Ie,Ze,wt),Z.equals(ge)===!1&&(n.clearColor(ue,Ie,Ze,wt),Z.copy(ge))},reset:function(){I=!1,Y=null,Z.set(-1,0,0,0)}}}function t(){let I=!1,ge=null,Y=null,Z=null;return{setTest:function(ue){ue?pe(n.DEPTH_TEST):H(n.DEPTH_TEST)},setMask:function(ue){ge!==ue&&!I&&(n.depthMask(ue),ge=ue)},setFunc:function(ue){if(Y!==ue){switch(ue){case wE:n.depthFunc(n.NEVER);break;case AE:n.depthFunc(n.ALWAYS);break;case CE:n.depthFunc(n.LESS);break;case sc:n.depthFunc(n.LEQUAL);break;case RE:n.depthFunc(n.EQUAL);break;case bE:n.depthFunc(n.GEQUAL);break;case PE:n.depthFunc(n.GREATER);break;case LE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ue}},setLocked:function(ue){I=ue},setClear:function(ue){Z!==ue&&(n.clearDepth(ue),Z=ue)},reset:function(){I=!1,ge=null,Y=null,Z=null}}}function i(){let I=!1,ge=null,Y=null,Z=null,ue=null,Ie=null,Ze=null,wt=null,kt=null;return{setTest:function(it){I||(it?pe(n.STENCIL_TEST):H(n.STENCIL_TEST))},setMask:function(it){ge!==it&&!I&&(n.stencilMask(it),ge=it)},setFunc:function(it,gi,_i){(Y!==it||Z!==gi||ue!==_i)&&(n.stencilFunc(it,gi,_i),Y=it,Z=gi,ue=_i)},setOp:function(it,gi,_i){(Ie!==it||Ze!==gi||wt!==_i)&&(n.stencilOp(it,gi,_i),Ie=it,Ze=gi,wt=_i)},setLocked:function(it){I=it},setClear:function(it){kt!==it&&(n.clearStencil(it),kt=it)},reset:function(){I=!1,ge=null,Y=null,Z=null,ue=null,Ie=null,Ze=null,wt=null,kt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,d=null,x=null,v=null,y=null,C=null,E=new je(0,0,0),T=0,R=!1,M=null,S=null,L=null,B=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),j=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=z>=2);let D=null,q={};const K=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),ye=new lt().fromArray(K),He=new lt().fromArray(oe);function X(I,ge,Y,Z){const ue=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(I,Ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<Y;Ze++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ge+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Ie}const Q={};Q[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(sc),Me(!1),Oe(Mg),pe(n.CULL_FACE),ce(Ir);function pe(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function H(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function te(I,ge){return c[I]!==ge?(n.bindFramebuffer(I,ge),c[I]=ge,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ge),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function ne(I,ge){let Y=h,Z=!1;if(I){Y=f.get(ge),Y===void 0&&(Y=[],f.set(ge,Y));const ue=I.textures;if(Y.length!==ue.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Ze=ue.length;Ie<Ze;Ie++)Y[Ie]=n.COLOR_ATTACHMENT0+Ie;Y.length=ue.length,Z=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Z=!0);Z&&n.drawBuffers(Y)}function ee(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const b={[cs]:n.FUNC_ADD,[lE]:n.FUNC_SUBTRACT,[uE]:n.FUNC_REVERSE_SUBTRACT};b[cE]=n.MIN,b[fE]=n.MAX;const ve={[hE]:n.ZERO,[dE]:n.ONE,[pE]:n.SRC_COLOR,[cd]:n.SRC_ALPHA,[yE]:n.SRC_ALPHA_SATURATE,[vE]:n.DST_COLOR,[gE]:n.DST_ALPHA,[mE]:n.ONE_MINUS_SRC_COLOR,[fd]:n.ONE_MINUS_SRC_ALPHA,[xE]:n.ONE_MINUS_DST_COLOR,[_E]:n.ONE_MINUS_DST_ALPHA,[SE]:n.CONSTANT_COLOR,[ME]:n.ONE_MINUS_CONSTANT_COLOR,[EE]:n.CONSTANT_ALPHA,[TE]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(I,ge,Y,Z,ue,Ie,Ze,wt,kt,it){if(I===Ir){_===!0&&(H(n.BLEND),_=!1);return}if(_===!1&&(pe(n.BLEND),_=!0),I!==aE){if(I!==m||it!==R){if((g!==cs||v!==cs)&&(n.blendEquation(n.FUNC_ADD),g=cs,v=cs),it)switch(I){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eg:n.blendFunc(n.ONE,n.ONE);break;case Tg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,x=null,y=null,C=null,E.set(0,0,0),T=0,m=I,R=it}return}ue=ue||ge,Ie=Ie||Y,Ze=Ze||Z,(ge!==g||ue!==v)&&(n.blendEquationSeparate(b[ge],b[ue]),g=ge,v=ue),(Y!==d||Z!==x||Ie!==y||Ze!==C)&&(n.blendFuncSeparate(ve[Y],ve[Z],ve[Ie],ve[Ze]),d=Y,x=Z,y=Ie,C=Ze),(wt.equals(E)===!1||kt!==T)&&(n.blendColor(wt.r,wt.g,wt.b,kt),E.copy(wt),T=kt),m=I,R=!1}function Ne(I,ge){I.side===Wi?H(n.CULL_FACE):pe(n.CULL_FACE);let Y=I.side===Sn;ge&&(Y=!Y),Me(Y),I.blending===Eo&&I.transparent===!1?ce(Ir):ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):H(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Oe(I){I!==sE?(pe(n.CULL_FACE),I!==S&&(I===Mg?n.cullFace(n.BACK):I===oE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):H(n.CULL_FACE),S=I}function Re(I){I!==L&&(j&&n.lineWidth(I),L=I)}function Ue(I,ge,Y){I?(pe(n.POLYGON_OFFSET_FILL),(B!==ge||O!==Y)&&(n.polygonOffset(ge,Y),B=ge,O=Y)):H(n.POLYGON_OFFSET_FILL)}function bt(I){I?pe(n.SCISSOR_TEST):H(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+G-1),D!==I&&(n.activeTexture(I),D=I)}function w(I,ge,Y){Y===void 0&&(D===null?Y=n.TEXTURE0+G-1:Y=D);let Z=q[Y];Z===void 0&&(Z={type:void 0,texture:void 0},q[Y]=Z),(Z.type!==I||Z.texture!==ge)&&(D!==Y&&(n.activeTexture(Y),D=Y),n.bindTexture(I,ge||Q[I]),Z.type=I,Z.texture=ge)}function W(){const I=q[D];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){ye.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ye.copy(I))}function me(I){He.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function Ve(I,ge){let Y=l.get(ge);Y===void 0&&(Y=new WeakMap,l.set(ge,Y));let Z=Y.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(ge,I.name),Y.set(I,Z))}function qe(I,ge){const Z=l.get(ge).get(I);a.get(ge)!==Z&&(n.uniformBlockBinding(ge,Z,I.__bindingPointIndex),a.set(ge,Z))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,q={},c={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,d=null,x=null,v=null,y=null,C=null,E=new je(0,0,0),T=0,R=!1,M=null,S=null,L=null,B=null,O=null,ye.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:H,bindFramebuffer:te,drawBuffers:ne,useProgram:ee,setBlending:ce,setMaterial:Ne,setFlipSided:Me,setCullFace:Oe,setLineWidth:Re,setPolygonOffset:Ue,setScissorTest:bt,activeTexture:P,bindTexture:w,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Te,texImage3D:Xe,updateUBOMapping:Ve,uniformBlockBinding:qe,texStorage2D:ze,texStorage3D:ae,texSubImage2D:re,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:de,scissor:De,viewport:me,reset:Tt}}function Mb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return p?new OffscreenCanvas(P,w):sl("canvas")}function m(P,w,W){let J=1;const ie=bt(P);if((ie.width>W||ie.height>W)&&(J=W/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(J*ie.width),Ae=Math.floor(J*ie.height);f===void 0&&(f=_(re,Ae));const he=w?_(re,Ae):f;return he.width=re,he.height=Ae,he.getContext("2d").drawImage(P,0,0,re,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+Ae+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==gn&&P.minFilter!==ui}function d(P){n.generateMipmap(P)}function x(P,w,W,J,ie=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=w;if(w===n.RED&&(W===n.FLOAT&&(re=n.R32F),W===n.HALF_FLOAT&&(re=n.R16F),W===n.UNSIGNED_BYTE&&(re=n.R8)),w===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.R8UI),W===n.UNSIGNED_SHORT&&(re=n.R16UI),W===n.UNSIGNED_INT&&(re=n.R32UI),W===n.BYTE&&(re=n.R8I),W===n.SHORT&&(re=n.R16I),W===n.INT&&(re=n.R32I)),w===n.RG&&(W===n.FLOAT&&(re=n.RG32F),W===n.HALF_FLOAT&&(re=n.RG16F),W===n.UNSIGNED_BYTE&&(re=n.RG8)),w===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.RG8UI),W===n.UNSIGNED_SHORT&&(re=n.RG16UI),W===n.UNSIGNED_INT&&(re=n.RG32UI),W===n.BYTE&&(re=n.RG8I),W===n.SHORT&&(re=n.RG16I),W===n.INT&&(re=n.RG32I)),w===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),w===n.RGBA){const Ae=ie?lc:tt.getTransfer(J);W===n.FLOAT&&(re=n.RGBA32F),W===n.HALF_FLOAT&&(re=n.RGBA16F),W===n.UNSIGNED_BYTE&&(re=Ae===ft?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function v(P,w){let W;return P?w===null||w===ko||w===Bo?W=n.DEPTH24_STENCIL8:w===wi?W=n.DEPTH32F_STENCIL8:w===oc&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ko||w===Bo?W=n.DEPTH_COMPONENT24:w===wi?W=n.DEPTH_COMPONENT32F:w===oc&&(W=n.DEPTH_COMPONENT16),W}function y(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==gn&&P.minFilter!==ui?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){const w=P.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&c.delete(w)}function E(P){const w=P.target;w.removeEventListener("dispose",E),M(w)}function T(P){const w=i.get(P);if(w.__webglInit===void 0)return;const W=P.source,J=h.get(W);if(J){const ie=J[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(P),Object.keys(J).length===0&&h.delete(W)}i.remove(P)}function R(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const W=P.source,J=h.get(W);delete J[w.__cacheKey],o.memory.textures--}function M(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ie=0;ie<w.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(w.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=P.textures;for(let J=0,ie=W.length;J<ie;J++){const re=i.get(W[J]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(P)}let S=0;function L(){S=0}function B(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function O(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function G(P,w){const W=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(W,P,w);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+w)}function j(P,w){const W=i.get(P);if(P.version>0&&W.__version!==P.version){He(W,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+w)}function z(P,w){const W=i.get(P);if(P.version>0&&W.__version!==P.version){He(W,P,w);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+w)}function $(P,w){const W=i.get(P);if(P.version>0&&W.__version!==P.version){X(W,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+w)}const D={[pd]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[md]:n.MIRRORED_REPEAT},q={[gn]:n.NEAREST,[HE]:n.NEAREST_MIPMAP_NEAREST,[Hl]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[Cf]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},K={[nT]:n.NEVER,[lT]:n.ALWAYS,[iT]:n.LESS,[iy]:n.LEQUAL,[rT]:n.EQUAL,[aT]:n.GEQUAL,[sT]:n.GREATER,[oT]:n.NOTEQUAL};function oe(P,w){if(w.type===wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ui||w.magFilter===Cf||w.magFilter===Hl||w.magFilter===gs||w.minFilter===ui||w.minFilter===Cf||w.minFilter===Hl||w.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,D[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,D[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,D[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,q[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gn||w.minFilter!==Hl&&w.minFilter!==gs||w.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(P,w){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",C));const J=w.source;let ie=h.get(J);ie===void 0&&(ie={},h.set(J,ie));const re=O(w);if(re!==P.__cacheKey){ie[re]===void 0&&(ie[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[re].usedTimes++;const Ae=ie[P.__cacheKey];Ae!==void 0&&(ie[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(w)),P.__cacheKey=re,P.__webglTexture=ie[re].texture}return W}function He(P,w,W){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);const ie=ye(P,w),re=w.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+W);const Ae=i.get(re);if(re.version!==Ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const he=tt.getPrimaries(tt.workingColorSpace),de=w.colorSpace===vr?null:tt.getPrimaries(w.colorSpace),ze=w.colorSpace===vr||he===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ae=m(w.image,!1,r.maxTextureSize);ae=Ue(w,ae);const Te=s.convert(w.format,w.colorSpace),Xe=s.convert(w.type);let De=x(w.internalFormat,Te,Xe,w.colorSpace,w.isVideoTexture);oe(J,w);let me;const Ve=w.mipmaps,qe=w.isVideoTexture!==!0,Tt=Ae.__version===void 0||ie===!0,I=re.dataReady,ge=y(w,ae);if(w.isDepthTexture)De=v(w.format===zo,w.type),Tt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,Te,Xe,null));else if(w.isDataTexture)if(Ve.length>0){qe&&Tt&&t.texStorage2D(n.TEXTURE_2D,ge,De,Ve[0].width,Ve[0].height);for(let Y=0,Z=Ve.length;Y<Z;Y++)me=Ve[Y],qe?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,Te,Xe,me.data):t.texImage2D(n.TEXTURE_2D,Y,De,me.width,me.height,0,Te,Xe,me.data);w.generateMipmaps=!1}else qe?(Tt&&t.texStorage2D(n.TEXTURE_2D,ge,De,ae.width,ae.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Xe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,Te,Xe,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,De,Ve[0].width,Ve[0].height,ae.depth);for(let Y=0,Z=Ve.length;Y<Z;Y++)if(me=Ve[Y],w.format!==fi)if(Te!==null)if(qe){if(I)if(w.layerUpdates.size>0){for(const ue of w.layerUpdates){const Ie=me.width*me.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ue,me.width,me.height,1,Te,me.data.slice(Ie*ue,Ie*(ue+1)),0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ae.depth,Te,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,De,me.width,me.height,ae.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ae.depth,Te,Xe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,De,me.width,me.height,ae.depth,0,Te,Xe,me.data)}else{qe&&Tt&&t.texStorage2D(n.TEXTURE_2D,ge,De,Ve[0].width,Ve[0].height);for(let Y=0,Z=Ve.length;Y<Z;Y++)me=Ve[Y],w.format!==fi?Te!==null?qe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,Te,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,De,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,Te,Xe,me.data):t.texImage2D(n.TEXTURE_2D,Y,De,me.width,me.height,0,Te,Xe,me.data)}else if(w.isDataArrayTexture)if(qe){if(Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,De,ae.width,ae.height,ae.depth),I)if(w.layerUpdates.size>0){let Y;switch(Xe){case n.UNSIGNED_BYTE:switch(Te){case n.ALPHA:Y=1;break;case n.LUMINANCE:Y=1;break;case n.LUMINANCE_ALPHA:Y=2;break;case n.RGB:Y=3;break;case n.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${Te}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}const Z=ae.width*ae.height*Y;for(const ue of w.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,Te,Xe,ae.data.slice(Z*ue,Z*(ue+1)));w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Xe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,Te,Xe,ae.data);else if(w.isData3DTexture)qe?(Tt&&t.texStorage3D(n.TEXTURE_3D,ge,De,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Xe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,Te,Xe,ae.data);else if(w.isFramebufferTexture){if(Tt)if(qe)t.texStorage2D(n.TEXTURE_2D,ge,De,ae.width,ae.height);else{let Y=ae.width,Z=ae.height;for(let ue=0;ue<ge;ue++)t.texImage2D(n.TEXTURE_2D,ue,De,Y,Z,0,Te,Xe,null),Y>>=1,Z>>=1}}else if(Ve.length>0){if(qe&&Tt){const Y=bt(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ge,De,Y.width,Y.height)}for(let Y=0,Z=Ve.length;Y<Z;Y++)me=Ve[Y],qe?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Te,Xe,me):t.texImage2D(n.TEXTURE_2D,Y,De,Te,Xe,me);w.generateMipmaps=!1}else if(qe){if(Tt){const Y=bt(ae);t.texStorage2D(n.TEXTURE_2D,ge,De,Y.width,Y.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Xe,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,Te,Xe,ae);g(w)&&d(J),Ae.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function X(P,w,W){if(w.image.length!==6)return;const J=ye(P,w),ie=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);const re=i.get(ie);if(ie.version!==re.__version||J===!0){t.activeTexture(n.TEXTURE0+W);const Ae=tt.getPrimaries(tt.workingColorSpace),he=w.colorSpace===vr?null:tt.getPrimaries(w.colorSpace),de=w.colorSpace===vr||Ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let Z=0;Z<6;Z++)!ze&&!ae?Te[Z]=m(w.image[Z],!0,r.maxCubemapSize):Te[Z]=ae?w.image[Z].image:w.image[Z],Te[Z]=Ue(w,Te[Z]);const Xe=Te[0],De=s.convert(w.format,w.colorSpace),me=s.convert(w.type),Ve=x(w.internalFormat,De,me,w.colorSpace),qe=w.isVideoTexture!==!0,Tt=re.__version===void 0||J===!0,I=ie.dataReady;let ge=y(w,Xe);oe(n.TEXTURE_CUBE_MAP,w);let Y;if(ze){qe&&Tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ve,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){Y=Te[Z].mipmaps;for(let ue=0;ue<Y.length;ue++){const Ie=Y[ue];w.format!==fi?De!==null?qe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Ve,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Ie.width,Ie.height,De,me,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Ve,Ie.width,Ie.height,0,De,me,Ie.data)}}}else{if(Y=w.mipmaps,qe&&Tt){Y.length>0&&ge++;const Z=bt(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ae){qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te[Z].width,Te[Z].height,De,me,Te[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Te[Z].width,Te[Z].height,0,De,me,Te[Z].data);for(let ue=0;ue<Y.length;ue++){const Ze=Y[ue].image[Z].image;qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Ze.width,Ze.height,De,me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Ve,Ze.width,Ze.height,0,De,me,Ze.data)}}else{qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,me,Te[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,De,me,Te[Z]);for(let ue=0;ue<Y.length;ue++){const Ie=Y[ue];qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,De,me,Ie.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Ve,De,me,Ie.image[Z])}}}g(w)&&d(n.TEXTURE_CUBE_MAP),re.__version=ie.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,W,J,ie,re){const Ae=s.convert(W.format,W.colorSpace),he=s.convert(W.type),de=x(W.internalFormat,Ae,he,W.colorSpace);if(!i.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>re),Te=Math.max(1,w.height>>re);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,de,ae,Te,w.depth,0,Ae,he,null):t.texImage2D(ie,re,de,ae,Te,0,Ae,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Oe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,i.get(W).__webglTexture,0,Me(w)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,i.get(W).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(P,w,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,ie=J&&J.isDepthTexture?J.type:null,re=v(w.stencilBuffer,ie),Ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Me(w);Oe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,re,w.width,w.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,re,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,re,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,P)}else{const J=w.textures;for(let ie=0;ie<J.length;ie++){const re=J[ie],Ae=s.convert(re.format,re.colorSpace),he=s.convert(re.type),de=x(re.internalFormat,Ae,he,re.colorSpace),ze=Me(w);W&&Oe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,de,w.width,w.height):Oe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,ie=Me(w);if(w.depthTexture.format===To)Oe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(w.depthTexture.format===zo)Oe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function te(P){const w=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");H(w.__webglFramebuffer,P)}else if(W){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=n.createRenderbuffer(),pe(w.__webglDepthbuffer[J],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),pe(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(P,w,W){const J=i.get(P);w!==void 0&&Q(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&te(P)}function ee(P){const w=P.texture,W=i.get(P),J=i.get(w);P.addEventListener("dispose",E);const ie=P.textures,re=P.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),re){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let de=0;de<w.mipmaps.length;de++)W.__webglFramebuffer[he][de]=n.createFramebuffer()}else W.__webglFramebuffer[he]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)W.__webglFramebuffer[he]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let he=0,de=ie.length;he<de;he++){const ze=i.get(ie[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Oe(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const de=ie[he];W.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[he]);const ze=s.convert(de.format,de.colorSpace),ae=s.convert(de.type),Te=x(de.internalFormat,ze,ae,de.colorSpace,P.isXRRenderTarget===!0),Xe=Me(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Te,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,W.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),oe(n.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Q(W.__webglFramebuffer[he][de],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else Q(W.__webglFramebuffer[he],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,de=ie.length;he<de;he++){const ze=ie[he],ae=i.get(ze);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),oe(n.TEXTURE_2D,ze),Q(W.__webglFramebuffer,P,ze,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),g(ze)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),oe(he,w),w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Q(W.__webglFramebuffer[de],P,w,n.COLOR_ATTACHMENT0,he,de);else Q(W.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,he,0);g(w)&&d(he),t.unbindTexture()}P.depthBuffer&&te(P)}function b(P){const w=P.textures;for(let W=0,J=w.length;W<J;W++){const ie=w[W];if(g(ie)){const re=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(ie).__webglTexture;t.bindTexture(re,Ae),d(re),t.unbindTexture()}}}const ve=[],ce=[];function Ne(P){if(P.samples>0){if(Oe(P)===!1){const w=P.textures,W=P.width,J=P.height;let ie=n.COLOR_BUFFER_BIT;const re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(P),he=w.length>1;if(he)for(let de=0;de<w.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let de=0;de<w.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[de]);const ze=i.get(w[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,ie,n.NEAREST),l===!0&&(ve.length=0,ce.length=0,ve.push(n.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ve.push(re),ce.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let de=0;de<w.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[de]);const ze=i.get(w[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Me(P){return Math.min(r.maxSamples,P.samples)}function Oe(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Re(P){const w=o.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function Ue(P,w){const W=P.colorSpace,J=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Yr&&W!==vr&&(tt.getTransfer(W)===ft?(J!==fi||ie!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=ne,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Oe}function Eb(n,e){function t(i,r=vr){let s;const o=tt.getTransfer(r);if(i===zr)return n.UNSIGNED_BYTE;if(i===Kx)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zx)return n.UNSIGNED_SHORT_5_5_5_1;if(i===XE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===GE)return n.BYTE;if(i===WE)return n.SHORT;if(i===oc)return n.UNSIGNED_SHORT;if(i===$x)return n.INT;if(i===ko)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===zc)return n.HALF_FLOAT;if(i===jE)return n.ALPHA;if(i===YE)return n.RGB;if(i===fi)return n.RGBA;if(i===qE)return n.LUMINANCE;if(i===$E)return n.LUMINANCE_ALPHA;if(i===To)return n.DEPTH_COMPONENT;if(i===zo)return n.DEPTH_STENCIL;if(i===Qx)return n.RED;if(i===Jx)return n.RED_INTEGER;if(i===KE)return n.RG;if(i===ey)return n.RG_INTEGER;if(i===ty)return n.RGBA_INTEGER;if(i===Rf||i===bf||i===Pf||i===Lf)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cg||i===Rg||i===bg||i===Pg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lg||i===Dg||i===Ig)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lg||i===Dg)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ig)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ng||i===Ug||i===Og||i===Fg||i===kg||i===Bg||i===zg||i===Vg||i===Hg||i===Gg||i===Wg||i===Xg||i===jg||i===Yg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ng)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ug)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Og)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yg)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Df||i===qg||i===$g)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Df)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$g)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ZE||i===Kg||i===Zg||i===Qg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Tb extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cu extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(u,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vr({vertexShader:Ab,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class bb extends Qo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const m=new Rb,g=t.getContextAttributes();let d=null,x=null;const v=[],y=[],C=new Ye;let E=null;const T=new pn;T.layers.enable(1),T.viewport=new lt;const R=new pn;R.layers.enable(2),R.viewport=new lt;const M=[T,R],S=new Tb;S.layers.enable(1),S.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new rh,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new rh,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new rh,v[X]=Q),Q.getHandSpace()};function O(X){const Q=y.indexOf(X.inputSource);if(Q===-1)return;const pe=v[Q];pe!==void 0&&(pe.update(X.inputSource,X.frame,u||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let X=0;X<v.length;X++){const Q=y[X];Q!==null&&(y[X]=null,v[X].disconnect(Q))}L=null,B=null,m.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,x=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new bs(p.framebufferWidth,p.framebufferHeight,{format:fi,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,pe=null,H=null;g.depth&&(H=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=g.stencil?zo:To,pe=g.stencil?Bo:ko);const te={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new bs(h.textureWidth,h.textureHeight,{format:fi,type:zr,depthTexture:new gy(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(X){for(let Q=0;Q<X.removed.length;Q++){const pe=X.removed[Q],H=y.indexOf(pe);H>=0&&(y[H]=null,v[H].disconnect(pe))}for(let Q=0;Q<X.added.length;Q++){const pe=X.added[Q];let H=y.indexOf(pe);if(H===-1){for(let ne=0;ne<v.length;ne++)if(ne>=y.length){y.push(pe),H=ne;break}else if(y[ne]===null){y[ne]=pe,H=ne;break}if(H===-1)break}const te=v[H];te&&te.connect(pe)}}const z=new U,$=new U;function D(X,Q,pe){z.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const H=z.distanceTo($),te=Q.projectionMatrix.elements,ne=pe.projectionMatrix.elements,ee=te[14]/(te[10]-1),b=te[14]/(te[10]+1),ve=(te[9]+1)/te[5],ce=(te[9]-1)/te[5],Ne=(te[8]-1)/te[0],Me=(ne[8]+1)/ne[0],Oe=ee*Ne,Re=ee*Me,Ue=H/(-Ne+Me),bt=Ue*-Ne;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(bt),X.translateZ(Ue),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const P=ee+Ue,w=b+Ue,W=Oe-bt,J=Re+(H-bt),ie=ve*b/w*P,re=ce*b/w*P;X.projectionMatrix.makePerspective(W,J,ie,re,P,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;m.texture!==null&&(X.near=m.depthNear,X.far=m.depthFar),S.near=R.near=T.near=X.near,S.far=R.far=T.far=X.far,(L!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,B=S.far,T.near=L,T.far=B,R.near=L,R.far=B,T.updateProjectionMatrix(),R.updateProjectionMatrix(),X.updateProjectionMatrix());const Q=X.parent,pe=S.cameras;q(S,Q);for(let H=0;H<pe.length;H++)q(pe[H],Q);pe.length===2?D(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),K(X,S,Q)};function K(X,Q,pe){pe===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(S)};let oe=null;function ye(X,Q){if(c=Q.getViewerPose(u||o),_=Q,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let H=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let ne=0;ne<pe.length;ne++){const ee=pe[ne];let b=null;if(p!==null)b=p.getViewport(ee);else{const ce=f.getViewSubImage(h,ee);b=ce.viewport,ne===0&&(e.setRenderTargetTextures(x,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let ve=M[ne];ve===void 0&&(ve=new pn,ve.layers.enable(ne),ve.viewport=new lt,M[ne]=ve),ve.matrix.fromArray(ee.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ee.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(b.x,b.y,b.width,b.height),ne===0&&(S.matrix.copy(ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),H===!0&&S.cameras.push(ve)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")){const ne=f.getDepthInformation(pe[0]);ne&&ne.isValid&&ne.texture&&m.init(e,ne,r.renderState)}}for(let pe=0;pe<v.length;pe++){const H=y[pe],te=v[pe];H!==null&&te!==void 0&&te.update(H,Q,u||o)}oe&&oe(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const He=new py;He.setAnimationLoop(ye),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const ns=new bi,Pb=new Ge;function Lb(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,fy(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,ns.copy(y),ns.x*=-1,ns.y*=-1,ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(ns)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Db(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(_(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(x,C);const E=e.render.frame;s[x.id]!==E&&(h(x),s[x.id]=E)}function c(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),C=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],y=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,S=R.length;M<S;M++){const L=R[M];if(p(L,E,M,C)===!0){const B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let j=0;j<O.length;j++){const z=O[j],$=m(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,B+G,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,y,C){const E=x.value,T=v+"_"+y;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(x){const v=x.uniforms;let y=0;const C=16;for(let T=0,R=v.length;T<R;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,L=M.length;S<L;S++){const B=M[S],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,j=O.length;G<j;G++){const z=O[G],$=m(z),D=y%C;D!==0&&C-D<$.boundary&&(y+=C-D),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=$.storage}}}const E=y%C;return E>0&&(y+=C-E),x.__size=y,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Ib{constructor(e={}){const{canvas:t=wT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=Nr,this.toneMappingExposure=1;const v=this;let y=!1,C=0,E=0,T=null,R=-1,M=null;const S=new lt,L=new lt;let B=null;const O=new je(0);let G=0,j=t.width,z=t.height,$=1,D=null,q=null;const K=new lt(0,0,j,z),oe=new lt(0,0,j,z);let ye=!1;const He=new Op;let X=!1,Q=!1;const pe=new Ge,H=new U,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ee(){return T===null?$:1}let b=i;function ve(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lp}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",Z,!1),b===null){const N="webgl2";if(b=ve(N,A),b===null)throw ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,Ne,Me,Oe,Re,Ue,bt,P,w,W,J,ie,re,Ae,he,de,ze,ae,Te,Xe,De,me,Ve,qe;function Tt(){ce=new VC(b),ce.init(),me=new Eb(b,ce),Ne=new UC(b,ce,e,me),Me=new Sb(b),Oe=new WC(b),Re=new ab,Ue=new Mb(b,ce,Me,Re,Ne,me,Oe),bt=new FC(v),P=new zC(v),w=new ZT(b),Ve=new IC(b,w),W=new HC(b,w,Oe,Ve),J=new jC(b,W,w,Oe),Te=new XC(b,Ne,Ue),de=new OC(Re),ie=new ob(v,bt,P,ce,Ne,Ve,de),re=new Lb(v,Re),Ae=new ub,he=new mb(ce),ae=new DC(v,bt,P,Me,J,h,l),ze=new yb(v,J,Ne),qe=new Db(b,Oe,Ne,Me),Xe=new NC(b,ce,Oe),De=new GC(b,ce,Oe),Oe.programs=ie.programs,v.capabilities=Ne,v.extensions=ce,v.properties=Re,v.renderLists=Ae,v.shadowMap=ze,v.state=Me,v.info=Oe}Tt();const I=new bb(v,b);this.xr=I,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(j,z,!1))},this.getSize=function(A){return A.set(j,z)},this.setSize=function(A,N,k=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,z=N,t.width=Math.floor(A*$),t.height=Math.floor(N*$),k===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(j*$,z*$).floor()},this.setDrawingBufferSize=function(A,N,k){j=A,z=N,$=k,t.width=Math.floor(A*k),t.height=Math.floor(N*k),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,N,k,V){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,N,k,V),Me.viewport(S.copy(K).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,N,k,V){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,N,k,V),Me.scissor(L.copy(oe).multiplyScalar($).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){Me.setScissorTest(ye=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(A=!0,N=!0,k=!0){let V=0;if(A){let F=!1;if(T!==null){const le=T.texture.format;F=le===ty||le===ey||le===Jx}if(F){const le=T.texture.type,_e=le===zr||le===ko||le===oc||le===Bo||le===Kx||le===Zx,Se=ae.getClearColor(),Ee=ae.getClearAlpha(),Pe=Se.r,Le=Se.g,Ce=Se.b;_e?(p[0]=Pe,p[1]=Le,p[2]=Ce,p[3]=Ee,b.clearBufferuiv(b.COLOR,0,p)):(_[0]=Pe,_[1]=Le,_[2]=Ce,_[3]=Ee,b.clearBufferiv(b.COLOR,0,_))}else V|=b.COLOR_BUFFER_BIT}N&&(V|=b.DEPTH_BUFFER_BIT),k&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ae.dispose(),he.dispose(),Re.dispose(),bt.dispose(),P.dispose(),J.dispose(),Ve.dispose(),qe.dispose(),ie.dispose(),I.dispose(),I.removeEventListener("sessionstart",gi),I.removeEventListener("sessionend",_i),$r.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Oe.autoReset,N=ze.enabled,k=ze.autoUpdate,V=ze.needsUpdate,F=ze.type;Tt(),Oe.autoReset=A,ze.enabled=N,ze.autoUpdate=k,ze.needsUpdate=V,ze.type=F}function Z(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const N=A.target;N.removeEventListener("dispose",ue),Ie(N)}function Ie(A){Ze(A),Re.remove(A)}function Ze(A){const N=Re.get(A).programs;N!==void 0&&(N.forEach(function(k){ie.releaseProgram(k)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,k,V,F,le){N===null&&(N=te);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Se=CS(A,N,k,V,F);Me.setMaterial(V,_e);let Ee=k.index,Pe=1;if(V.wireframe===!0){if(Ee=W.getWireframeAttribute(k),Ee===void 0)return;Pe=2}const Le=k.drawRange,Ce=k.attributes.position;let Qe=Le.start*Pe,yt=(Le.start+Le.count)*Pe;le!==null&&(Qe=Math.max(Qe,le.start*Pe),yt=Math.min(yt,(le.start+le.count)*Pe)),Ee!==null?(Qe=Math.max(Qe,0),yt=Math.min(yt,Ee.count)):Ce!=null&&(Qe=Math.max(Qe,0),yt=Math.min(yt,Ce.count));const St=yt-Qe;if(St<0||St===1/0)return;Ve.setup(F,V,Se,k,Ee);let Cn,Je=Xe;if(Ee!==null&&(Cn=w.get(Ee),Je=De,Je.setIndex(Cn)),F.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*ee()),Je.setMode(b.LINES)):Je.setMode(b.TRIANGLES);else if(F.isLine){let we=V.linewidth;we===void 0&&(we=1),Me.setLineWidth(we*ee()),F.isLineSegments?Je.setMode(b.LINES):F.isLineLoop?Je.setMode(b.LINE_LOOP):Je.setMode(b.LINE_STRIP)}else F.isPoints?Je.setMode(b.POINTS):F.isSprite&&Je.setMode(b.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Je.renderInstances(Qe,St,F.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,sn=Math.min(k.instanceCount,we);Je.renderInstances(Qe,St,sn)}else Je.render(Qe,St)};function wt(A,N,k){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,El(A,N,k),A.side=Br,A.needsUpdate=!0,El(A,N,k),A.side=Wi):El(A,N,k)}this.compile=function(A,N,k=null){k===null&&(k=A),g=he.get(k),g.init(N),x.push(g),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),A!==k&&A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const V=new Set;return A.traverse(function(F){const le=F.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Se=le[_e];wt(Se,k,F),V.add(Se)}else wt(le,k,F),V.add(le)}),x.pop(),g=null,V},this.compileAsync=function(A,N,k=null){const V=this.compile(A,N,k);return new Promise(F=>{function le(){if(V.forEach(function(_e){Re.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){F(A);return}setTimeout(le,10)}ce.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let kt=null;function it(A){kt&&kt(A)}function gi(){$r.stop()}function _i(){$r.start()}const $r=new py;$r.setAnimationLoop(it),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(A){kt=A,I.setAnimationLoop(A),A===null?$r.stop():$r.start()},I.addEventListener("sessionstart",gi),I.addEventListener("sessionend",_i),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(N),N=I.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,N,T),g=he.get(A,x.length),g.init(N),x.push(g),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),He.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,X=de.init(this.clippingPlanes,Q),m=Ae.get(A,d.length),m.init(),d.push(m),I.enabled===!0&&I.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&Kc(le,N,-1/0,v.sortObjects)}Kc(A,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(D,q),ne=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,ne&&ae.addToRenderList(m,A),this.info.render.frame++,X===!0&&de.beginShadows();const k=g.state.shadowsArray;ze.render(k,A,N),X===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(g.setupLights(),N.isArrayCamera){const le=N.cameras;if(F.length>0)for(let _e=0,Se=le.length;_e<Se;_e++){const Ee=le[_e];om(V,F,A,Ee)}ne&&ae.render(A);for(let _e=0,Se=le.length;_e<Se;_e++){const Ee=le[_e];sm(m,A,Ee,Ee.viewport)}}else F.length>0&&om(V,F,A,N),ne&&ae.render(A),sm(m,A,N);T!==null&&(Ue.updateMultisampleRenderTarget(T),Ue.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,N),Ve.resetDefaultState(),R=-1,M=null,x.pop(),x.length>0?(g=x[x.length-1],X===!0&&de.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Kc(A,N,k,V){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||He.intersectsSprite(A)){V&&H.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const _e=J.update(A),Se=A.material;Se.visible&&m.push(A,_e,Se,k,H.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||He.intersectsObject(A))){const _e=J.update(A),Se=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),H.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),H.copy(_e.boundingSphere.center)),H.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Se)){const Ee=_e.groups;for(let Pe=0,Le=Ee.length;Pe<Le;Pe++){const Ce=Ee[Pe],Qe=Se[Ce.materialIndex];Qe&&Qe.visible&&m.push(A,_e,Qe,k,H.z,Ce)}}else Se.visible&&m.push(A,_e,Se,k,H.z,null)}}const le=A.children;for(let _e=0,Se=le.length;_e<Se;_e++)Kc(le[_e],N,k,V)}function sm(A,N,k,V){const F=A.opaque,le=A.transmissive,_e=A.transparent;g.setupLightsView(k),X===!0&&de.setGlobalState(v.clippingPlanes,k),V&&Me.viewport(S.copy(V)),F.length>0&&Ml(F,N,k),le.length>0&&Ml(le,N,k),_e.length>0&&Ml(_e,N,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function om(A,N,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new bs(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?zc:zr,minFilter:gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const le=g.state.transmissionRenderTarget[V.id],_e=V.viewport||S;le.setSize(_e.z,_e.w);const Se=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),ne?ae.render(k):v.clear();const Ee=v.toneMapping;v.toneMapping=Nr;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),X===!0&&de.setGlobalState(v.clippingPlanes,V),Ml(A,k,V),Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ce=0,Qe=N.length;Ce<Qe;Ce++){const yt=N[Ce],St=yt.object,Cn=yt.geometry,Je=yt.material,we=yt.group;if(Je.side===Wi&&St.layers.test(V.layers)){const sn=Je.side;Je.side=Sn,Je.needsUpdate=!0,am(St,k,V,Cn,Je,we),Je.side=sn,Je.needsUpdate=!0,Le=!0}}Le===!0&&(Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le))}v.setRenderTarget(Se),v.setClearColor(O,G),Pe!==void 0&&(V.viewport=Pe),v.toneMapping=Ee}function Ml(A,N,k){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,le=A.length;F<le;F++){const _e=A[F],Se=_e.object,Ee=_e.geometry,Pe=V===null?_e.material:V,Le=_e.group;Se.layers.test(k.layers)&&am(Se,N,k,Ee,Pe,Le)}}function am(A,N,k,V,F,le){A.onBeforeRender(v,N,k,V,F,le),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(v,N,k,V,A,le),F.transparent===!0&&F.side===Wi&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,v.renderBufferDirect(k,N,V,F,A,le),F.side=Br,F.needsUpdate=!0,v.renderBufferDirect(k,N,V,F,A,le),F.side=Wi):v.renderBufferDirect(k,N,V,F,A,le),A.onAfterRender(v,N,k,V,F,le)}function El(A,N,k){N.isScene!==!0&&(N=te);const V=Re.get(A),F=g.state.lights,le=g.state.shadowsArray,_e=F.state.version,Se=ie.getParameters(A,F.state,le,N,k),Ee=ie.getProgramCacheKey(Se);let Pe=V.programs;V.environment=A.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(A.isMeshStandardMaterial?P:bt).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",ue),Pe=new Map,V.programs=Pe);let Le=Pe.get(Ee);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===_e)return um(A,Se),Le}else Se.uniforms=ie.getUniforms(A),A.onBuild(k,Se,v),A.onBeforeCompile(Se,v),Le=ie.acquireProgram(Se,Ee),Pe.set(Ee,Le),V.uniforms=Se.uniforms;const Ce=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=de.uniform),um(A,Se),V.needsLights=bS(A),V.lightsStateVersion=_e,V.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function lm(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Lu.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function um(A,N){const k=Re.get(A);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function CS(A,N,k,V,F){N.isScene!==!0&&(N=te),Ue.resetTextureUnits();const le=N.fog,_e=V.isMeshStandardMaterial?N.environment:null,Se=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Yr,Ee=(V.isMeshStandardMaterial?P:bt).get(V.envMap||_e),Pe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,yt=!!k.morphAttributes.color;let St=Nr;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(St=v.toneMapping);const Cn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=Cn!==void 0?Cn.length:0,we=Re.get(V),sn=g.state.lights;if(X===!0&&(Q===!0||A!==M)){const Hn=A===M&&V.id===R;de.setState(V,A,Hn)}let rt=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==sn.state.version||we.outputColorSpace!==Se||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==Ee||V.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==de.numPlanes||we.numIntersection!==de.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==Ce||we.morphNormals!==Qe||we.morphColors!==yt||we.toneMapping!==St||we.morphTargetsCount!==Je)&&(rt=!0):(rt=!0,we.__version=V.version);let Di=we.currentProgram;rt===!0&&(Di=El(V,N,F));let Tl=!1,Kr=!1,Zc=!1;const Bt=Di.getUniforms(),or=we.uniforms;if(Me.useProgram(Di.program)&&(Tl=!0,Kr=!0,Zc=!0),V.id!==R&&(R=V.id,Kr=!0),Tl||M!==A){Bt.setValue(b,"projectionMatrix",A.projectionMatrix),Bt.setValue(b,"viewMatrix",A.matrixWorldInverse);const Hn=Bt.map.cameraPosition;Hn!==void 0&&Hn.setValue(b,H.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&Bt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Bt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Kr=!0,Zc=!0)}if(F.isSkinnedMesh){Bt.setOptional(b,F,"bindMatrix"),Bt.setOptional(b,F,"bindMatrixInverse");const Hn=F.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Bt.setValue(b,"boneTexture",Hn.boneTexture,Ue))}F.isBatchedMesh&&(Bt.setOptional(b,F,"batchingTexture"),Bt.setValue(b,"batchingTexture",F._matricesTexture,Ue),Bt.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&Bt.setValue(b,"batchingColorTexture",F._colorsTexture,Ue));const Qc=k.morphAttributes;if((Qc.position!==void 0||Qc.normal!==void 0||Qc.color!==void 0)&&Te.update(F,k,Di),(Kr||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,Bt.setValue(b,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(or.envMap.value=Ee,or.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(or.envMapIntensity.value=N.environmentIntensity),Kr&&(Bt.setValue(b,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&RS(or,Zc),le&&V.fog===!0&&re.refreshFogUniforms(or,le),re.refreshMaterialUniforms(or,V,$,z,g.state.transmissionRenderTarget[A.id]),Lu.upload(b,lm(we),or,Ue)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Lu.upload(b,lm(we),or,Ue),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Bt.setValue(b,"center",F.center),Bt.setValue(b,"modelViewMatrix",F.modelViewMatrix),Bt.setValue(b,"normalMatrix",F.normalMatrix),Bt.setValue(b,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Hn=V.uniformsGroups;for(let Jc=0,PS=Hn.length;Jc<PS;Jc++){const cm=Hn[Jc];qe.update(cm,Di),qe.bind(cm,Di)}}return Di}function RS(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function bS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,N,k){Re.get(A.texture).__webglTexture=N,Re.get(A.depthTexture).__webglTexture=k;const V=Re.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const k=Re.get(A);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,k=0){T=A,C=N,E=k;let V=!0,F=null,le=!1,_e=!1;if(A){const Ee=Re.get(A);Ee.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(b.FRAMEBUFFER,null),V=!1):Ee.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):Ee.__hasExternalTextures&&Ue.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(_e=!0);const Le=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?F=Le[N][k]:F=Le[N],le=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?F=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[k]:F=Le,S.copy(A.viewport),L.copy(A.scissor),B=A.scissorTest}else S.copy(K).multiplyScalar($).floor(),L.copy(oe).multiplyScalar($).floor(),B=ye;if(Me.bindFramebuffer(b.FRAMEBUFFER,F)&&V&&Me.drawBuffers(A,F),Me.viewport(S),Me.scissor(L),Me.setScissorTest(B),le){const Ee=Re.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ee.__webglTexture,k)}else if(_e){const Ee=Re.get(A.texture),Pe=N||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ee.__webglTexture,k||0,Pe)}R=-1},this.readRenderTargetPixels=function(A,N,k,V,F,le,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Me.bindFramebuffer(b.FRAMEBUFFER,Se);try{const Ee=A.texture,Pe=Ee.format,Le=Ee.type;if(!Ne.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-V&&k>=0&&k<=A.height-F&&b.readPixels(N,k,V,F,me.convert(Pe),me.convert(Le),le)}finally{const Ee=T!==null?Re.get(T).__webglFramebuffer:null;Me.bindFramebuffer(b.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,N,k,V,F,le,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Me.bindFramebuffer(b.FRAMEBUFFER,Se);try{const Ee=A.texture,Pe=Ee.format,Le=Ee.type;if(!Ne.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-V&&k>=0&&k<=A.height-F){const Ce=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ce),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(N,k,V,F,me.convert(Pe),me.convert(Le),0),b.flush();const Qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await AT(b,Qe,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,Ce),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le)}finally{b.deleteBuffer(Ce),b.deleteSync(Qe)}return le}}finally{const Ee=T!==null?Re.get(T).__webglFramebuffer:null;Me.bindFramebuffer(b.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(A,N=null,k=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const V=Math.pow(2,-k),F=Math.floor(A.image.width*V),le=Math.floor(A.image.height*V),_e=N!==null?N.x:0,Se=N!==null?N.y:0;Ue.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,_e,Se,F,le),Me.unbindTexture()},this.copyTextureToTexture=function(A,N,k=null,V=null,F=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let le,_e,Se,Ee,Pe,Le;k!==null?(le=k.max.x-k.min.x,_e=k.max.y-k.min.y,Se=k.min.x,Ee=k.min.y):(le=A.image.width,_e=A.image.height,Se=0,Ee=0),V!==null?(Pe=V.x,Le=V.y):(Pe=0,Le=0);const Ce=me.convert(N.format),Qe=me.convert(N.type);Ue.setTexture2D(N,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const yt=b.getParameter(b.UNPACK_ROW_LENGTH),St=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(b.UNPACK_SKIP_PIXELS),Je=b.getParameter(b.UNPACK_SKIP_ROWS),we=b.getParameter(b.UNPACK_SKIP_IMAGES),sn=A.isCompressedTexture?A.mipmaps[F]:A.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,sn.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,sn.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Se),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ee),A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Pe,Le,le,_e,Ce,Qe,sn.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Pe,Le,sn.width,sn.height,Ce,sn.data):b.texSubImage2D(b.TEXTURE_2D,F,Pe,Le,Ce,Qe,sn),b.pixelStorei(b.UNPACK_ROW_LENGTH,yt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,St),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Je),b.pixelStorei(b.UNPACK_SKIP_IMAGES,we),F===0&&N.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,N,k=null,V=null,F=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,A=arguments[2],N=arguments[3],F=arguments[4]||0);let le,_e,Se,Ee,Pe,Le,Ce,Qe,yt;const St=A.isCompressedTexture?A.mipmaps[F]:A.image;k!==null?(le=k.max.x-k.min.x,_e=k.max.y-k.min.y,Se=k.max.z-k.min.z,Ee=k.min.x,Pe=k.min.y,Le=k.min.z):(le=St.width,_e=St.height,Se=St.depth,Ee=0,Pe=0,Le=0),V!==null?(Ce=V.x,Qe=V.y,yt=V.z):(Ce=0,Qe=0,yt=0);const Cn=me.convert(N.format),Je=me.convert(N.type);let we;if(N.isData3DTexture)Ue.setTexture3D(N,0),we=b.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ue.setTexture2DArray(N,0),we=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const sn=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Di=b.getParameter(b.UNPACK_SKIP_PIXELS),Tl=b.getParameter(b.UNPACK_SKIP_ROWS),Kr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,St.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,St.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Le),A.isDataTexture||A.isData3DTexture?b.texSubImage3D(we,F,Ce,Qe,yt,le,_e,Se,Cn,Je,St.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(we,F,Ce,Qe,yt,le,_e,Se,Cn,St.data):b.texSubImage3D(we,F,Ce,Qe,yt,le,_e,Se,Cn,Je,St),b.pixelStorei(b.UNPACK_ROW_LENGTH,sn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Di),b.pixelStorei(b.UNPACK_SKIP_ROWS,Tl),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Kr),F===0&&N.generateMipmaps&&b.generateMipmap(we),Me.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,Me.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dp?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Vc?"display-p3":"srgb"}}class Nb extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class UP{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_d,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Np("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new U;class My{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new My(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const j_=new U,Y_=new lt,q_=new lt,Ub=new U,$_=new Ge,fu=new U,sh=new rr,K_=new Ge,oh=new vl;class OP extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ag,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ir),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fu),this.boundingBox.expandByPoint(fu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fu),this.boundingSphere.expandByPoint(fu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(r),e.ray.intersectsSphere(sh)!==!1&&(K_.copy(r).invert(),oh.copy(e.ray).applyMatrix4(K_),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ag?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===VE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Y_.fromBufferAttribute(r.attributes.skinIndex,e),q_.fromBufferAttribute(r.attributes.skinWeight,e),j_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=q_.getComponent(s);if(o!==0){const a=Y_.getComponent(s);$_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ub.copy(j_).applyMatrix4($_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ob extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ey extends tn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=gn,c=gn,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Z_=new Ge,Fb=new Ge;class Ty{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Fb;Z_.multiplyMatrices(a,t[s]),Z_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ty(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ey(t,e,e,fi,wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ob),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Q_ extends Qn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Ge,J_=new Ge,hu=[],e0=new ir,kb=new Ge,ma=new _n,ga=new rr;class FP extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Q_(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,kb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),e0.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(e0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),ga.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Js),J_.multiplyMatrices(i,Js),ma.matrixWorld=J_,ma.raycast(e,hu);for(let o=0,a=hu.length;o<a;o++){const l=hu[o];l.instanceId=s,l.object=this,t.push(l)}hu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Q_(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ey(new Float32Array(r*this.count),r,this.count,Qx,wi));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bb extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new U,dc=new U,t0=new Ge,_a=new vl,du=new rr,ah=new U,n0=new U;class wy extends Rt{constructor(e=new sr,t=new Bb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)hc.fromBufferAttribute(t,r-1),dc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=hc.distanceTo(dc);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),du.copy(i.boundingSphere),du.applyMatrix4(r),du.radius+=s,e.ray.intersectsSphere(du)===!1)return;t0.copy(r).invert(),_a.copy(e.ray).applyMatrix4(t0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const d=c.getX(m),x=c.getX(m+1),v=pu(this,e,_a,l,d,x);v&&t.push(v)}if(this.isLineLoop){const m=c.getX(_-1),g=c.getX(p),d=pu(this,e,_a,l,m,g);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const d=pu(this,e,_a,l,m,m+1);d&&t.push(d)}if(this.isLineLoop){const m=pu(this,e,_a,l,_-1,p);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pu(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(hc.fromBufferAttribute(o,r),dc.fromBufferAttribute(o,s),t.distanceSqToSegment(hc,dc,ah,n0)>i)return;ah.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ah);if(!(l<e.near||l>e.far))return{distance:l,point:n0.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const i0=new U,r0=new U;class kP extends wy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)i0.fromBufferAttribute(t,r),r0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+i0.distanceTo(r0);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BP extends wy{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zb extends Is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new Ge,xd=new vl,mu=new rr,gu=new U;class zP extends Rt{constructor(e=new sr,t=new zb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mu.copy(i.boundingSphere),mu.applyMatrix4(r),mu.radius+=s,e.ray.intersectsSphere(mu)===!1)return;s0.copy(r).invert(),xd.copy(e.ray).applyMatrix4(s0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,m=p;_<m;_++){const g=u.getX(_);gu.fromBufferAttribute(f,g),o0(gu,g,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,m=p;_<m;_++)gu.fromBufferAttribute(f,_),o0(gu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function o0(n,e,t,i,r,s,o){const a=xd.distanceSqToPoint(n);if(a<t){const l=new U;xd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class wa extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ny,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VP extends wa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _u(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hb(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function a0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Ay(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Wc{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gb extends Wc{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jg,endingEnd:Jg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case e_:s=e,a=2*t-i;break;case t_:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case e_:o=e,l=2*i-t;break;case t_:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),m=_*_,g=m*_,d=-h*g+2*h*m-h*_,x=(1+h)*g+(-1.5-2*h)*m+(-.5+h)*_+1,v=(-1-p)*g+(1.5+p)*m+.5*_,y=p*g-p*m;for(let C=0;C!==a;++C)s[C]=d*o[c+C]+x*o[u+C]+v*o[l+C]+y*o[f+C];return s}}class Wb extends Wc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let h=0;h!==a;++h)s[h]=o[u+h]*f+o[l+h]*c;return s}}class Xb extends Wc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_u(t,this.TimeBufferType),this.values=_u(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_u(e.times,Array),values:_u(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ac:t=this.InterpolantFactoryMethodDiscrete;break;case gd:t=this.InterpolantFactoryMethodLinear;break;case If:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ac;case this.InterpolantFactoryMethodLinear:return gd;case this.InterpolantFactoryMethodSmooth:return If}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Vb(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===If,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){const m=t[f+_];if(m!==t[h+_]||m!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=gd;class ta extends Li{constructor(e,t,i){super(e,t,i)}}ta.prototype.ValueTypeName="bool";ta.prototype.ValueBufferType=Array;ta.prototype.DefaultInterpolation=ac;ta.prototype.InterpolantFactoryMethodLinear=void 0;ta.prototype.InterpolantFactoryMethodSmooth=void 0;class Cy extends Li{}Cy.prototype.ValueTypeName="color";class pc extends Li{}pc.prototype.ValueTypeName="number";class jb extends Wc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)Jo.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Xc extends Li{InterpolantFactoryMethodLinear(e){return new jb(this.times,this.values,this.getValueSize(),e)}}Xc.prototype.ValueTypeName="quaternion";Xc.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends Li{constructor(e,t,i){super(e,t,i)}}na.prototype.ValueTypeName="string";na.prototype.ValueBufferType=Array;na.prototype.DefaultInterpolation=ac;na.prototype.InterpolantFactoryMethodLinear=void 0;na.prototype.InterpolantFactoryMethodSmooth=void 0;class mc extends Li{}mc.prototype.ValueTypeName="vector";class HP{constructor(e="",t=-1,i=[],r=QE){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(qb(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Li.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const c=Hb(l);l=a0(l,1,c),u=a0(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new pc(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let h=r[f];h||(r[f]=h=[]),h.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,_,m){if(p.length!==0){const g=[],d=[];Ay(p,g,d,_),g.length!==0&&m.push(new f(h,g,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const h=u[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let m=0;m<h[_].morphTargets.length;m++)p[h[_].morphTargets[m]]=-1;for(const m in p){const g=[],d=[];for(let x=0;x!==h[_].morphTargets.length;++x){const v=h[_];g.push(v.time),d.push(v.morphTarget===m?1:0)}r.push(new pc(".morphTargetInfluence["+m+"]",g,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(mc,p+".position",h,"pos",r),i(Xc,p+".quaternion",h,"rot",r),i(mc,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pc;case"vector":case"vector2":case"vector3":case"vector4":return mc;case"color":return Cy;case"quaternion":return Xc;case"bool":case"boolean":return ta;case"string":return na}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function qb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yb(n.type);if(n.times===void 0){const t=[],i=[];Ay(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Sr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class $b{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const Kb=new $b;class yl{constructor(e){this.manager=e!==void 0?e:Kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class Zb extends Error{constructor(e,t){super(e),this.response=t}}class GP extends yl{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Sr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:r});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ki[e],f=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let m=0;const g=new ReadableStream({start(d){x();function x(){f.read().then(({done:v,value:y})=>{if(v)d.close();else{m+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:p});for(let E=0,T=c.length;E<T;E++){const R=c[E];R.onProgress&&R.onProgress(C)}d.enqueue(y),x()}},v=>{d.error(v)})}}});return new Response(g)}else throw new Zb(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{Sr.add(e,u);const c=ki[e];delete ki[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=ki[e];if(c===void 0)throw this.manager.itemError(e),u;delete ki[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qb extends yl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Sr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=sl("img");function l(){c(),Sr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class WP extends yl{constructor(e){super(e)}load(e,t,i,r){const s=new tn,o=new Qb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class jc extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lh=new Ge,l0=new U,u0=new U;class kp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Op,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),u0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u0),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jb extends kp{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Vo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XP extends jc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Jb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const c0=new Ge,va=new U,uh=new U;class e2 extends kp{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),uh.copy(i.position),uh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(uh),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),c0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(c0)}}class jP extends jc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new e2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class t2 extends kp{constructor(){super(new my(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f0 extends jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new t2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n2 extends jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class YP{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qP extends yl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Sr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Sr.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Sr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Sr.add(e,l),s.manager.itemStart(e)}}class i2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=h0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=h0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function h0(){return(typeof performance>"u"?Date:performance).now()}const Bp="\\[\\]\\.:\\/",r2=new RegExp("["+Bp+"]","g"),zp="[^"+Bp+"]",s2="[^"+Bp.replace("\\.","")+"]",o2=/((?:WC+[\/:])*)/.source.replace("WC",zp),a2=/(WCOD+)?/.source.replace("WCOD",s2),l2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zp),u2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zp),c2=new RegExp("^"+o2+a2+l2+u2+"$"),f2=["material","materials","bones","map"];class h2{constructor(e,t,i){const r=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r2,"")}static parseTrackName(e){const t=c2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);f2.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=h2;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const d0=new Ge;class d2{constructor(e,t,i=0,r=1/0){this.ray=new vl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Up,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return d0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(d0),this}intersectObject(e,t=!0,i=[]){return yd(e,this,i,t),i.sort(p0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yd(e[r],this,i,t);return i.sort(p0),i}}function p0(n,e){return n.distance-e.distance}function yd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)yd(s[o],e,t,!0)}}class $P{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);function Vi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ry(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Go={duration:.5,overwrite:!1,delay:0},Vp,Yt,pt,qn=1e8,at=1/qn,Sd=Math.PI*2,p2=Sd/4,m2=0,by=Math.sqrt,g2=Math.cos,_2=Math.sin,Gt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},Hp=function(e){return typeof e>"u"},Pi=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},Gp=function(){return typeof window<"u"},vu=function(e){return Et(e)||Gt(e)},Py=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Md=/(?:-?\.?\d|\.)+/gi,Ly=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ch=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dy=/[+-]=-?[.\d]+/,Iy=/[^,'"\[\]\s]+/gi,v2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,yi,Ed,Wp,kn={},gc={},Ny,Uy=function(e){return(gc=Wo(e,kn))&&An},Xp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ol=function(e,t){return!t&&console.warn(e)},Oy=function(e,t){return e&&(kn[e]=t)&&gc&&(gc[e]=t)||kn},al=function(){return 0},x2={suppressEvents:!0,isStart:!0,kill:!1},Du={suppressEvents:!0,kill:!1},y2={suppressEvents:!0},jp={},Ur=[],Td={},Fy,Ln={},fh={},m0=30,Iu=[],Yp="",qp=function(e){var t=e[0],i,r;if(Pi(t)||Et(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Iu.length;r--&&!Iu[r].targetTest(t););i=Iu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new aS(e[r],i)))||e.splice(r,1);return e},ys=function(e){return e._gsap||qp($n(e))[0]._gsap},ky=function(e,t,i){return(i=e[t])&&Et(i)?e[t]():Hp(i)&&e.getAttribute&&e.getAttribute(t)||i},En=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Ao=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},S2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},_c=function(){var e=Ur.length,t=Ur.slice(0),i,r;for(Td={},Ur.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$p=function(e){return!!(e._initted||e._startAt||e.add)},By=function(e,t,i,r){Ur.length&&!Yt&&_c(),e.render(t,i,!!(Yt&&t<0&&$p(e))),Ur.length&&!Yt&&_c()},zy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Iy).length<2?t:Gt(e)?e.trim():e},Vy=function(e){return e},Bn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},M2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Wo=function(e,t){for(var i in t)e[i]=t[i];return e},g0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},vc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ba=function(e){var t=e.parent||gt,i=e.keyframes?M2(nn(e.keyframes)):Bn;if(Mn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},E2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Hy=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Yc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},T2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wd=function(e,t,i,r){return e._startAt&&(Yt?e._startAt.revert(Du):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},w2=function n(e){return!e||e._ts&&n(e.parent)},_0=function(e){return e._repeat?Xo(e._tTime,e=e.duration()+e._rDelay)*e:0},Xo=function(e,t){var i=Math.floor(e=Dt(e/t));return e&&i===e?i-1:i},xc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qc=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},$c=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qc(e),i._dirty||Ss(i,e)),e},Gy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=xc(e.rawTime(),t),(!t._dur||Sl(0,t.totalDuration(),i)-t._tTime>at)&&t.render(i,!0)),Ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-at}},Ti=function(e,t,i,r){return t.parent&&Hr(t),t._start=Dt((er(i)?i:i||e!==gt?Wn(e,i,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hy(e,t,"_first","_last",e._sort?"_start":0),Ad(t)||(e._recent=t),r||Gy(e,t),e._ts<0&&$c(e,e._tTime),e},Wy=function(e,t){return(kn.ScrollTrigger||Xp("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},Xy=function(e,t,i,r,s){if(Zp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fy!==Dn.frame)return Ur.push(e),e._lazy=[s,r],1},A2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Ad=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},C2=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&A2(e)&&!(!e._initted&&Ad(e))||(e._ts<0||e._dp._ts<0)&&!Ad(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Sl(0,e._tDur,t),c=Xo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Xo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Yt||r||e._zTime===at||!t&&e._zTime){if(!e._initted&&Xy(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?at:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&wd(e,t,i,!0),e._onUpdate&&!i&&Nn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hr(e,1),!i&&!Yt&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},R2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},jo=function(e,t,i,r){var s=e._repeat,o=Dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$c(e,e._tTime=e._tDur*a),e.parent&&qc(e),i||Ss(e.parent,e),e},v0=function(e){return e instanceof un?Ss(e):jo(e,e._dur)},b2={_start:0,endTime:al,totalDuration:al},Wn=function n(e,t,i){var r=e.labels,s=e._recent||b2,o=e.duration()>=qn?s.endTime(!1):e._dur,a,l,u;return Gt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(nn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},za=function(e,t,i){var r=er(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Lt(t[0],o,t[s+1])},qr=function(e,t){return e||e===0?t(e):t},Sl=function(e,t,i){return i<e?e:i>t?t:i},en=function(e,t){return!Gt(e)||!(t=v2.exec(e))?"":t[1]},P2=function(e,t,i){return qr(i,function(r){return Sl(e,t,r)})},Cd=[].slice,jy=function(e,t){return e&&Pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pi(e[0]))&&!e.nodeType&&e!==yi},L2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Gt(r)&&!t||jy(r,1)?(s=i).push.apply(s,$n(r)):i.push(r)})||i},$n=function(e,t,i){return pt&&!t&&pt.selector?pt.selector(e):Gt(e)&&!i&&(Ed||!Yo())?Cd.call((t||Wp).querySelectorAll(e),0):nn(e)?L2(e,i):jy(e)?Cd.call(e,0):e?[e]:[]},Rd=function(e){return e=$n(e)[0]||ol("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return $n(t,i.querySelectorAll?i:i===e?ol("Invalid scope")||Wp.createElement("div"):e)}},Yy=function(e){return e.sort(function(){return .5-Math.random()})},qy=function(e){if(Et(e))return e;var t=Pi(e)?e:{each:e},i=Ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Gt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var m=(_||t).length,g=o[m],d,x,v,y,C,E,T,R,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,qn])[1],!M){for(T=-qn;T<(T=_[M++].getBoundingClientRect().left)&&M<m;);M<m&&M--}for(g=o[m]=[],d=l?Math.min(M,m)*c-.5:r%M,x=M===qn?0:l?m*f/M-.5:r/M|0,T=0,R=qn,E=0;E<m;E++)v=E%M-d,y=x-(E/M|0),g[E]=C=u?Math.abs(u==="y"?y:v):by(v*v+y*y),C>T&&(T=C),C<R&&(R=C);r==="random"&&Yy(g),g.max=T-R,g.min=R,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(M>m?m-1:u?u==="y"?m/M:M:Math.max(M,m/M))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=en(t.amount||t.each)||0,i=i&&m<0?rS(i):i}return m=(g[h]-g.min)/g.max||0,Dt(g.b+(i?i(m):m)*g.v)+g.u}},bd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Dt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(er(i)?0:en(i))}},$y=function(e,t){var i=nn(e),r,s;return!i&&Pi(e)&&(r=i=e.radius||qn,e.values?(e=$n(e.values),(s=!er(e[0]))&&(r*=r)):e=bd(e.increment)),qr(t,i?Et(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=qn,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||er(o)?c:c+en(o)}:bd(e))},Ky=function(e,t,i,r){return qr(nn(e)?!t:i===!0?!!(i=0):!r,function(){return nn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},D2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},I2=function(e,t){return function(i){return e(parseFloat(i))+(t||en(i))}},N2=function(e,t,i){return Qy(e,t,0,1,i)},Zy=function(e,t,i){return qr(i,function(r){return e[~~t(r)]})},U2=function n(e,t,i){var r=t-e;return nn(e)?Zy(e,n(0,e.length),t):qr(i,function(s){return(r+(s-e)%r)%r+e})},O2=function n(e,t,i){var r=t-e,s=r*2;return nn(e)?Zy(e,n(0,e.length-1),t):qr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ll=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Iy:Md),i+=e.substr(t,r-t)+Ky(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Qy=function(e,t,i,r,s){var o=t-e,a=r-i;return qr(s,function(l){return i+((l-e)/o*a||0)})},F2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Gt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(h,~~_);return c[m](_-m)},i=t}else r||(e=Wo(nn(e)?[]:{},e));if(!c){for(l in t)Kp.call(a,e,l,"get",t[l]);s=function(_){return em(_,a)||(o?e.p:e)}}}return qr(i,s)},x0=function(e,t,i){var r=e.labels,s=qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Nn=function(e,t,i){var r=e.vars,s=r[t],o=pt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ur.length&&_c(),a&&(pt=a),c=l?s.apply(u,l):s.call(u),pt=o,c},Aa=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Nn(e,"onInterrupt"),e},go,Jy=[],eS=function(e){if(e)if(e=!e.name&&e.default||e,Gp()||e.headless){var t=e.name,i=Et(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:al,render:em,add:Kp,kill:J2,modifier:Q2,rawVars:0},o={targetTest:0,get:0,getSetter:Jp,aliases:{},register:0};if(Yo(),e!==r){if(Ln[t])return;Bn(r,Bn(vc(e,s),o)),Wo(r.prototype,Wo(s,vc(e,o))),Ln[r.prop=t]=r,e.targetTest&&(Iu.push(r),jp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Oy(t,r),e.register&&e.register(An,r,Tn)}else Jy.push(e)},ot=255,Ca={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},hh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ot+.5|0},tS=function(e,t,i){var r=e?er(e)?[e>>16,e>>8&ot,e&ot]:0:Ca.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ca[e])r=Ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Md),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=hh(l+1/3,s,o),r[1]=hh(l,s,o),r[2]=hh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Ly),i&&r.length<4&&(r[3]=1),r}else r=e.match(Md)||Ca.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ot,o=r[1]/ot,a=r[2]/ot,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},nS=function(e){var t=[],i=[],r=-1;return e.split(Or).forEach(function(s){var o=s.match(mo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},y0=function(e,t,i){var r="",s=(e+r).match(Or),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=tS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=nS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Or,"1").split(mo),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Or),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Or=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ca)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),k2=/hsl[a]?\(/,iS=function(e){var t=e.join(" "),i;if(Or.lastIndex=0,Or.test(t))return i=k2.test(t),e[1]=y0(e[1],i),e[0]=y0(e[0],i,nS(e[1])),!0},ul,Dn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function m(g){var d=n()-r,x=g===!0,v,y,C,E;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,v=C-o,(v>0||x)&&(E=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](C,h,E,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){Ny&&(!Ed&&Gp()&&(yi=Ed=window,Wp=yi.document||{},kn.gsap=An,(yi.gsapVersions||(yi.gsapVersions=[])).push(An.version),Uy(gc||yi.GreenSockGlobals||!yi.gsap&&yi||{}),Jy.forEach(eS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},ul=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ul=0,u=al},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,d,x){var v=d?function(y,C,E,T){g(y,C,E,T),f.remove(v)}:g;return f.remove(g),a[x?"unshift":"push"](v),Yo(),v},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Yo=function(){return!ul&&Dn.wake()},$e={},B2=/^[\d.\-M][\d.\-,\s]/,z2=/["']/g,V2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(z2,"").trim():+u,r=l.substr(a+1).trim();return t},H2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},G2=function(e){var t=(e+"").split("("),i=$e[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[V2(t[1])]:H2(e).split(",").map(zy)):$e._CE&&B2.test(e)?$e._CE("",e):i},rS=function(e){return function(t){return 1-e(1-t)}},sS=function n(e,t){for(var i=e._first,r;i;)i instanceof un?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ms=function(e,t){return e&&(Et(e)?e:$e[e]||G2(e))||t},Ns=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return En(e,function(a){$e[a]=kn[a]=s,$e[o=a.toLowerCase()]=i;for(var l in s)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=s[l]}),s},oS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Sd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*_2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:oS(a);return s=Sd/s,l.config=function(u,c){return n(e,u,c)},l},ph=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:oS(i);return r.config=function(s){return n(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ns(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Ns("Elastic",dh("in"),dh("out"),dh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ns("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ns("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ns("Circ",function(n){return-(by(1-n*n)-1)});Ns("Sine",function(n){return n===1?1:-g2(n*p2)+1});Ns("Back",ph("in"),ph("out"),ph());$e.SteppedEase=$e.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-at;return function(a){return((r*Sl(0,o,a)|0)+s)*i}}};Go.ease=$e["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Yp+=n+","+n+"Params,"});var aS=function(e,t){this.id=m2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ky,this.set=t?t.getSetter:Jp},cl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,jo(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),ul||Dn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,jo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Yo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,i),!s._dp||s.parent||Gy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===at||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),By(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Xo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?xc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-at?0:this._rts,this.totalTime(Sl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),qc(this),T2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ti(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=y2);var r=Yt;return Yt=i,$p(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Yt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,v0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,v0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),Mn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Mn(r)),this._dur||(this._zTime=-at),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-at)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Et(i)?i:Vy,a=function(){var u=r.then;r.then=null,Et(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Aa(this)},n}();Bn(cl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var un=function(n){Ry(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Mn(i.sortChildren),gt&&Ti(i.parent||gt,Vi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Wy(Vi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return za(0,arguments,this),this},t.from=function(r,s,o){return za(1,arguments,this),this},t.fromTo=function(r,s,o,a){return za(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return Ti(this,Lt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Lt(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ba(o).immediateRender=Mn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ba(a).immediateRender=Mn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Dt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,m,g,d,x,v,y,C,E,T;if(this!==gt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,d=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=Dt(c%g),c===l?(m=this._repeat,h=u):(C=Dt(c/g),m=~~C,m&&m===C&&(h=u,m--),h>u&&(h=u)),C=Xo(this._tTime,g),!a&&this._tTime&&C!==m&&this._tTime-C*g-this._dur<=0&&(C=m),E&&m&1&&(h=u-h,T=1),m!==C&&!this._lock){var R=E&&C&1,M=R===(E&&m&1);if(m<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(T?0:Dt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;sS(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=R2(this,Dt(a),Dt(h)),x&&(c-=h-(h=x._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!s&&!C&&(Nn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){x=0,_&&(c+=this._zTime=-at);break}}p=_}else{p=this._last;for(var S=r<0?r:h;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||Yt&&$p(p)),h!==this._time||!this._ts&&!d){x=0,_&&(c+=this._zTime=S?-at:at);break}}p=_}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-at)._zTime=h>=a?1:-1,this._ts))return this._start=y,qc(this),this.render(r,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Hr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Nn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(er(s)||(s=Wn(this,s,r)),!(r instanceof cl)){if(nn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Gt(r))return this.addLabel(r,s);if(Et(r))r=Lt.delayedCall(0,r);else return this}return this!==r?Ti(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Lt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Gt(r)?this.removeLabel(r):Et(r)?this.killTweensOf(r):(r.parent===this&&Yc(this,r),r===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Lt.delayedCall(0,s||al,o);return a.data="isPause",this._hasPause=1,Ti(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=$n(r),l=this._first,u=er(s),c;l;)l instanceof Lt?S2(l._targets,a)&&(u?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=Lt.to(o,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||at,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&jo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bn({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),x0(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),x0(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ss(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ss(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;jo(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(gt._ts&&(By(gt,xc(r,gt)),Fy=Dn.frame),Dn.frame>=m0){m0+=On.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&On.autoSleep&&Dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dn.sleep()}}},e}(cl);Bn(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var W2=function(e,t,i,r,s,o,a){var l=new Tn(this._pt,e,t,0,1,dS,null,s),u=0,c=0,f,h,p,_,m,g,d,x;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=ll(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),h=i.match(ch)||[];f=ch.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(g=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?Ao(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=ch.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Dy.test(r)||d)&&(l.e=0),this._pt=l,l},Kp=function(e,t,i,r,s,o,a,l,u,c){Et(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Et(f)?u?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Et(f)?u?$2:fS:Qp,_;if(Gt(r)&&(~r.indexOf("random(")&&(r=ll(r)),r.charAt(1)==="="&&(_=Ao(h,r)+(en(h)||0),(_||_===0)&&(r=_))),!c||h!==r||Pd)return!isNaN(h*r)&&r!==""?(_=new Tn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Z2:hS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Xp(t,r),W2.call(this,e,t,h,r,p,l||On.stringFilter,u))},X2=function(e,t,i,r,s){if(Et(e)&&(e=Va(e,s,t,i,r)),!Pi(e)||e.style&&e.nodeType||nn(e)||Py(e))return Gt(e)?Va(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Va(e[a],s,t,i,r);return o},lS=function(e,t,i,r,s,o){var a,l,u,c;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:X2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Tn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==go))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Mr,Pd,Zp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,d=e.parent,x=d&&d.data==="nested"?d.vars.targets:g,v=e._overwrite==="auto"&&!Vp,y=e.timeline,C,E,T,R,M,S,L,B,O,G,j,z,$;if(y&&(!h||!s)&&(s="none"),e._ease=Ms(s,Go.ease),e._yEase=f?rS(Ms(f===!0?s:f,Go.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(B=g[0]?ys(g[0]).harness:0,z=B&&r[B.prop],C=vc(r,jp),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?Du:x2),m._lazy=0),o){if(Hr(e._startAt=Lt.set(g,Bn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&Mn(l),startAt:null,delay:0,onUpdate:u&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!p)&&e._startAt.revert(Du),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),T=Bn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Mn(l),immediateRender:a,stagger:0,parent:d},C),z&&(T[B.prop]=z),Hr(e._startAt=Lt.set(g,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(Du):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Mn(l)||l&&!_,E=0;E<g.length;E++){if(M=g[E],L=M._gsap||qp(g)[E]._gsap,e._ptLookup[E]=G={},Td[L.id]&&Ur.length&&_c(),j=x===g?E:x.indexOf(M),B&&(O=new B).init(M,z||C,e,j,x)!==!1&&(e._pt=R=new Tn(e._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(D){G[D]=R}),O.priority&&(S=1)),!B||z)for(T in C)Ln[T]&&(O=lS(T,C,e,j,M,x))?O.priority&&(S=1):G[T]=R=Kp.call(e,M,T,"get",C[T],j,x,0,r.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),v&&e._pt&&(Mr=e,gt.killTweensOf(M,G,e.globalTime(t)),$=!e.parent,Mr=0),e._pt&&l&&(Td[L.id]=1)}S&&pS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&y.render(qn,!0,!0)},j2=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Pd=1,e.vars[t]="+=0",Zp(e,a),Pd=0,l?ol(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=At(i)+en(f.e)),f.b&&(f.b=c.s+en(f.b))},Y2=function(e,t){var i=e[0]?ys(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Wo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},q2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(nn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Va=function(e,t,i,r,s){return Et(e)?e.call(t,i,r,s):Gt(e)&&~e.indexOf("random(")?ll(e):e},uS=Yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cS={};En(uS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return cS[n]=1});var Lt=function(n){Ry(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ba(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=l.yoyoEase,x=r.parent||gt,v=(nn(i)||Py(i)?er(i[0]):"length"in r)?[i]:$n(i),y,C,E,T,R,M,S,L;if(a._targets=v.length?qp(v):ol("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||vu(u)||vu(c)){if(r=a.vars,y=a.timeline=new un({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Vi(a),y._start=0,h||vu(u)||vu(c)){if(T=v.length,S=h&&qy(h),Pi(h))for(R in h)~uS.indexOf(R)&&(L||(L={}),L[R]=h[R]);for(C=0;C<T;C++)E=vc(r,cS),E.stagger=0,d&&(E.yoyoEase=d),L&&Wo(E,L),M=v[C],E.duration=+Va(u,Vi(a),C,M,v),E.delay=(+Va(c,Vi(a),C,M,v)||0)-a._delay,!h&&T===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),y.to(M,E,S?S(C,M,v):0),y._ease=$e.none;y.duration()?u=c=0:a.timeline=0}else if(_){Ba(Bn(y.vars.defaults,{ease:"none"})),y._ease=Ms(_.ease||r.ease||"none");var B=0,O,G,j;if(nn(_))_.forEach(function(z){return y.to(v,z,">")}),y.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||q2(R,_[R],E,_.easeEach);for(R in E)for(O=E[R].sort(function(z,$){return z.t-$.t}),B=0,C=0;C<O.length;C++)G=O[C],j={ease:G.e,duration:(G.t-(C?O[C-1].t:0))/100*u},j[R]=G.v,y.to(v,j,B),B+=j.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Vp&&(Mr=Vi(a),gt.killTweensOf(v),Mr=0),Ti(x,Vi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Dt(x._time)&&Mn(f)&&w2(Vi(a))&&x.data!=="nested")&&(a._tTime=-at,a.render(Math.max(0,-c)||0)),g&&Wy(Vi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-at&&!c?l:r<at?0:r,h,p,_,m,g,d,x,v,y;if(!u)C2(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,v=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=Dt(f%m),f===l?(_=this._repeat,h=u):(g=Dt(f/m),_=~~g,_&&_===g?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(y=this._yEase,h=u-h),g=Xo(this._tTime,m),h===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(v&&this._yEase&&sS(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(Dt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Xy(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/u),this._from&&(this.ratio=x=1-x),!a&&f&&!s&&!g&&(Nn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&wd(this,r,s,o),Nn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&wd(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Hr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Nn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ul||Dn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Zp(this,u),c=this._ease(u/this._dur),j2(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):($c(this,0),this.parent||Hy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Mr&&Mr.vars.overwrite!==!0)._first||Aa(this),this.parent&&o!==this.timeline.totalDuration()&&jo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?$n(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,m,g,d;if((!s||s==="all")&&E2(a,l))return s==="all"&&(this._pt=0),Aa(this);for(f=this._op=this._op||[],s!=="all"&&(Gt(s)&&(m={},En(s,function(x){return m[x]=1}),s=m),s=Y2(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(m in _)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Yc(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Aa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return za(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return za(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return gt.killTweensOf(r,s,o)},e}(cl);Bn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(n){Lt[n]=function(){var e=new un,t=Cd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Qp=function(e,t,i){return e[t]=i},fS=function(e,t,i){return e[t](i)},$2=function(e,t,i,r){return e[t](r.fp,i)},K2=function(e,t,i){return e.setAttribute(t,i)},Jp=function(e,t){return Et(e[t])?fS:Hp(e[t])&&e.setAttribute?K2:Qp},hS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Z2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},em=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Q2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},J2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Yc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},eP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},pS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Tn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||hS,this.d=l||this,this.set=u||Qp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=eP,this.m=i,this.mt=s,this.tween=r},n}();En(Yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return jp[n]=1});kn.TweenMax=kn.TweenLite=Lt;kn.TimelineLite=kn.TimelineMax=un;gt=new un({sortChildren:!1,defaults:Go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=iS;var Es=[],Nu={},tP=[],S0=0,nP=0,mh=function(e){return(Nu[e]||tP).map(function(t){return t()})},Ld=function(){var e=Date.now(),t=[];e-S0>2&&(mh("matchMediaInit"),Es.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=yi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),mh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),S0=e,mh("matchMedia"))},mS=function(){function n(t,i){this.selector=i&&Rd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=nP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Et(i)&&(s=r,r=i,i=Et);var o=this,a=function(){var u=pt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Rd(s)),pt=o,f=r.apply(o,arguments),Et(f)&&o._r.push(f),pt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Et?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=pt;pt=null,i(this),pt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof un?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Lt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Es.length;o--;)Es[o].id===this.id&&Es.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),iP=function(){function n(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pi(i)||(i={matches:i});var o=new mS(0,s||this.scope),a=o.conditions={},l,u,c;pt&&!o.selector&&(o.selector=pt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=yi.matchMedia(i[u]),l&&(Es.indexOf(o)<0&&Es.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Ld):l.addEventListener("change",Ld)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return eS(r)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Gt(e)&&(e=$n(e)[0]);var s=ys(e||{}).get,o=i?Vy:zy;return i==="native"&&(i=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ln[a]&&Ln[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=$n(e),e.length>1){var r=e.map(function(c){return An.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Ln[t],a=ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;go._pt=0,f.init(e,i?c+i:c,go,0,[e]),f.render(1,f),go._pt&&em(1,go)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=An.to(e,Bn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ms(e.ease,Go.ease)),g0(Go,e||{})},config:function(e){return g0(On,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!kn[a]&&ol(t+" effect requires "+a+" plugin.")}),fh[t]=function(a,l,u){return i($n(a),Bn(l||{},s),u)},o&&(un.prototype[t]=function(a,l,u){return this.add(fh[t](a,Pi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){$e[e]=Ms(t)},parseEase:function(e,t){return arguments.length?Ms(e,t):$e},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new un(e),r,s;for(i.smoothChildTiming=Mn(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,r=gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&Ti(i,r,r._start-r._delay),r=s;return Ti(gt,i,0),i},context:function(e,t){return e?new mS(e,t):pt},matchMedia:function(e){return new iP(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ld()},addEventListener:function(e,t){var i=Nu[e]||(Nu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Nu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:U2,wrapYoyo:O2,distribute:qy,random:Ky,snap:$y,normalize:N2,getUnit:en,clamp:P2,splitColor:tS,toArray:$n,selector:Rd,mapRange:Qy,pipe:D2,unitize:I2,interpolate:F2,shuffle:Yy},install:Uy,effects:fh,ticker:Dn,updateRoot:un.updateRoot,plugins:Ln,globalTimeline:gt,core:{PropTween:Tn,globals:Oy,Tween:Lt,Timeline:un,Animation:cl,getCache:ys,_removeLinkedListItem:Yc,reverting:function(){return Yt},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Vp=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return yc[n]=Lt[n]});Dn.add(un.updateRoot);go=yc.to({},{duration:0});var rP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},sP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=rP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},gh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Gt(s)&&(l={},En(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}sP(a,s)}}}},An=yc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Yt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},gh("roundProps",bd),gh("modifiers"),gh("snap",$y))||yc;Lt.version=un.version=An.version="3.13.0";Ny=1;Gp()&&Yo();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var M0,Er,Co,tm,_s,E0,nm,oP=function(){return typeof window<"u"},tr={},us=180/Math.PI,Ro=Math.PI/180,eo=Math.atan2,T0=1e8,im=/([A-Z])/g,aP=/(left|right|width|margin|padding|x)/i,lP=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_S=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},hP=function(e,t,i){return e.style[t]=i},dP=function(e,t,i){return e.style.setProperty(t,i)},pP=function(e,t,i){return e._gsap[t]=i},mP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},gP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},_P=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},_t="transform",wn=_t+"Origin",vP=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Gi(r,a)}):this.tfm[e]=o.x?o[e]:Gi(r,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(_t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},vS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(im,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=nm(),(!s||!s.isStart)&&!i[_t]&&(vS(i),r.zOrigin&&i[wn]&&(i[wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xS=function(e,t){var i={target:e,props:[],revert:xP,save:vP};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yS,Id=function(e,t){var i=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return i&&i.style?i:Er.createElement(e)},Kn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(im,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,qo(t)||t,1)||""},w0="O,Moz,ms,Ms,Webkit".split(","),qo=function(e,t,i){var r=t||_s,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(w0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?w0[o]:"")+e},Nd=function(){oP()&&window.document&&(M0=window,Er=M0.document,Co=Er.documentElement,_s=Id("div")||{style:{}},Id("div"),_t=qo(_t),wn=_t+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yS=!!qo("perspective"),nm=An.core.reverting,tm=1)},A0=function(e){var t=e.ownerSVGElement,i=Id("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Co.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Co.removeChild(i),s},C0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},SS=function(e){var t,i;try{t=e.getBBox()}catch{t=A0(e),i=1}return t&&(t.width||t.height)||i||(t=A0(e)),t&&!t.width&&!t.x&&!t.y?{x:+C0(e,["x","cx","x1"])||0,y:+C0(e,["y","cy","y1"])||0,width:0,height:0}:t},MS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&SS(e))},Ps=function(e,t){if(t){var i=e.style,r;t in tr&&t!==wn&&(t=_t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(im,"-$1").toLowerCase())):i.removeAttribute(t)}},Tr=function(e,t,i,r,s,o){var a=new Tn(e._pt,t,i,0,1,o?_S:gS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},R0={deg:1,rad:1,turn:1},yP={grid:1,flex:1},Gr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=_s.style,l=aP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,m,g,d;if(r===o||!s||R0[r]||R0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&MS(e),(p||o==="%")&&(tr[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],At(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Er||!m.appendChild)&&(m=Er.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Dn.time&&!g.uncache)return At(s/g.width*f);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,_=e[c],x?e.style[t]=x:Ps(e,t)}else(p||o==="%")&&!yP[Kn(m,"display")]&&(a.position=Kn(e,"position")),m===e&&(a.position="static"),m.appendChild(_s),_=_s[c],m.removeChild(_s),a.position="absolute";return l&&p&&(g=ys(m),g.time=Dn.time,g.width=m[c]),At(h?_*s/f:_&&s?f/_*s:0)},Gi=function(e,t,i,r){var s;return tm||Nd(),t in Ai&&t!=="transform"&&(t=Ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=hl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Mc(Kn(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Sc[t]&&Sc[t](e,t,i)||Kn(e,t)||ky(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gr(e,t,s,i)+i:s},SP=function(e,t,i,r){if(!i||i==="none"){var s=qo(t,e,1),o=s&&Kn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Kn(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,dS),l=0,u=0,c,f,h,p,_,m,g,d,x,v,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Kn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Kn(e,t)||r,m?e.style[t]=m:Ps(e,t)),c=[i,r],iS(c),i=c[0],r=c[1],h=i.match(mo)||[],C=r.match(mo)||[],C.length){for(;f=mo.exec(r);)g=f[0],x=r.substring(l,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=Ao(p,g)+y),d=parseFloat(g),v=g.substr((d+"").length),l=mo.lastIndex-v.length,v||(v=v||On.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Gr(e,t,m,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?_S:gS;return Dy.test(r)&&(a.e=0),this._pt=a,a},b0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},MP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=b0[i]||i,t[1]=b0[r]||r,t.join(" ")},EP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],tr[a]&&(l=1,a=a==="transformOrigin"?wn:_t),Ps(i,a);l&&(Ps(i,_t),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",hl(i,1),o.uncache=1,vS(r)))}},Sc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,i,0,0,EP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},fl=[1,0,0,1,0,0],ES={},TS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},P0=function(e){var t=Kn(e,_t);return TS(t)?fl:t.substr(7).match(Ly).map(At)},rm=function(e,t){var i=e._gsap||ys(e),r=e.style,s=P0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fl:s):(s===fl&&!e.offsetParent&&e!==Co&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Co.appendChild(e)),s=P0(e),l?r.display=l:Ps(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ud=function(e,t,i,r,s,o){var a=e._gsap,l=s||rm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],d=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,C=parseFloat(v[1])||0,E,T,R,M;i?l!==fl&&(T=p*g-_*m)&&(R=y*(g/T)+C*(-m/T)+(m*x-g*d)/T,M=y*(-_/T)+C*(p/T)-(p*x-_*d)/T,y=R,C=M):(E=SS(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),C=E.y+(~(v[1]||v[0]).indexOf("%")?C/100*E.height:C)),r||r!==!1&&a.smooth?(d=y-u,x=C-c,a.xOffset=f+(d*p+x*m)-d,a.yOffset=h+(d*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[wn]="0px 0px",o&&(Tr(o,a,"xOrigin",u,y),Tr(o,a,"yOrigin",c,C),Tr(o,a,"xOffset",f,a.xOffset),Tr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},hl=function(e,t){var i=e._gsap||new aS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Kn(e,wn)||"0",c,f,h,p,_,m,g,d,x,v,y,C,E,T,R,M,S,L,B,O,G,j,z,$,D,q,K,oe,ye,He,X,Q;return c=f=h=m=g=d=x=v=y=0,p=_=1,i.svg=!!(e.getCTM&&MS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),T=rm(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Ud(e,$||u,!!$||i.originIsAbsolute,i.smooth!==!1,T)),C=i.xOrigin||0,E=i.yOrigin||0,T!==fl&&(L=T[0],B=T[1],O=T[2],G=T[3],c=j=T[4],f=z=T[5],T.length===6?(p=Math.sqrt(L*L+B*B),_=Math.sqrt(G*G+O*O),m=L||B?eo(B,L)*us:0,x=O||G?eo(O,G)*us+m:0,x&&(_*=Math.abs(Math.cos(x*Ro))),i.svg&&(c-=C-(C*L+E*O),f-=E-(C*B+E*G))):(Q=T[6],He=T[7],K=T[8],oe=T[9],ye=T[10],X=T[11],c=T[12],f=T[13],h=T[14],R=eo(Q,ye),g=R*us,R&&(M=Math.cos(-R),S=Math.sin(-R),$=j*M+K*S,D=z*M+oe*S,q=Q*M+ye*S,K=j*-S+K*M,oe=z*-S+oe*M,ye=Q*-S+ye*M,X=He*-S+X*M,j=$,z=D,Q=q),R=eo(-O,ye),d=R*us,R&&(M=Math.cos(-R),S=Math.sin(-R),$=L*M-K*S,D=B*M-oe*S,q=O*M-ye*S,X=G*S+X*M,L=$,B=D,O=q),R=eo(B,L),m=R*us,R&&(M=Math.cos(R),S=Math.sin(R),$=L*M+B*S,D=j*M+z*S,B=B*M-L*S,z=z*M-j*S,L=$,j=D),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=At(Math.sqrt(L*L+B*B+O*O)),_=At(Math.sqrt(z*z+Q*Q)),R=eo(j,z),x=Math.abs(R)>2e-4?R*us:0,y=X?1/(X<0?-X:X):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!TS(Kn(e,_t)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=At(p),i.scaleY=At(_),i.rotation=At(m)+a,i.rotationX=At(g)+a,i.rotationY=At(d)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[wn]=Mc(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?wP:yS?wS:TP,i.uncache=0,i},Mc=function(e){return(e=e.split(" "))[0]+" "+e[1]},_h=function(e,t,i){var r=en(t);return At(parseFloat(t)+parseFloat(Gr(e,"x",i+"px",r)))+r},TP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wS(e,t)},is="0deg",xa="0px",rs=") ",wS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,x=i.target,v=i.zOrigin,y="",C=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==is||c!==is)){var E=parseFloat(c)*Ro,T=Math.sin(E),R=Math.cos(E),M;E=parseFloat(f)*Ro,M=Math.cos(E),o=_h(x,o,T*M*-v),a=_h(x,a,-Math.sin(E)*-v),l=_h(x,l,R*M*-v+v)}g!==xa&&(y+="perspective("+g+rs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==xa||a!==xa||l!==xa)&&(y+=l!==xa||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),u!==is&&(y+="rotate("+u+rs),c!==is&&(y+="rotateY("+c+rs),f!==is&&(y+="rotateX("+f+rs),(h!==is||p!==is)&&(y+="skew("+h+", "+p+rs),(_!==1||m!==1)&&(y+="scale("+_+", "+m+rs),x.style[_t]=y||"translate(0, 0)"},wP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),C,E,T,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ro,u*=Ro,C=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=Ro,M=Math.tan(u-c),M=Math.sqrt(1+M*M),T*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,E*=M)),C=At(C),E=At(E),T=At(T),R=At(R)):(C=f,R=h,E=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Gr(p,"x",o,"px"),y=Gr(p,"y",a,"px")),(_||m||g||d)&&(v=At(v+_-(_*C+m*T)+g),y=At(y+m-(_*E+m*R)+d)),(r||s)&&(M=p.getBBox(),v=At(v+r/100*M.width),y=At(y+s/100*M.height)),M="matrix("+C+","+E+","+T+","+R+","+v+","+y+")",p.setAttribute("transform",M),x&&(p.style[_t]=M)},AP=function(e,t,i,r,s){var o=360,a=Gt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?us:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*T0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*T0)%o-~~(u/o)*o)),e._pt=h=new Tn(e._pt,t,i,r,u,uP),h.e=c,h.u="deg",e._props.push(i),h},L0=function(e,t){for(var i in t)e[i]=t[i];return e},CP=function(e,t,i){var r=L0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[_t]=t,a=hl(i,1),Ps(i,_t),i.setAttribute("transform",u)):(u=getComputedStyle(i)[_t],o[_t]=t,a=hl(i,1),o[_t]=u);for(l in tr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=en(u),_=en(c),f=p!==_?Gr(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new Tn(e._pt,a,l,f,h-f,Dd),e._pt.u=_||0,e._props.push(l));L0(a,r)};En("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Sc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return Gi(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,f)}});var AS={name:"css",register:Nd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,m,g,d,x,v,y,C,E,T,R;tm||Nd(),this.styles=this.styles||xS(e),R=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Ln[m]&&lS(m,t,i,r,e,s)))){if(p=typeof c,_=Sc[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=ll(c)),_)_(this,e,m,c,i)&&(T=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Or.lastIndex=0,Or.test(u)||(g=en(u),d=en(c)),d?g!==d&&(u=Gr(e,m,u,d)+d):g&&(c+=g),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Gt(u)&&~u.indexOf("random(")&&(u=ll(u)),en(u+"")||u==="auto"||(u+=On.units[m]||en(Gi(e,m))||""),(u+"").charAt(1)==="="&&(u=Gi(e,m))):u=Gi(e,m),h=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),f=parseFloat(c),m in Ai&&(m==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),Tr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Ai[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in tr,v){if(this.styles.save(m),p==="string"&&c.substring(0,6)==="var(--"&&(c=Kn(e,c.substring(4,c.indexOf(")"))),f=parseFloat(c)),y||(C=e._gsap,C.renderTransform&&!t.parseTransform||hl(e,t.parseTransform),E=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new Tn(this._pt,a,_t,0,1,C.renderTransform,C,0,-1),y.dep=1),m==="scale")this._pt=new Tn(this._pt,C,"scaleY",C.scaleY,(x?Ao(C.scaleY,x+f):f)-C.scaleY||0,Dd),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(wn,0,a[wn]),c=MP(c),C.svg?Ud(e,c,0,E,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&Tr(this,C,"zOrigin",C.zOrigin,d),Tr(this,a,m,Mc(u),Mc(c)));continue}else if(m==="svgOrigin"){Ud(e,c,1,E,0,this);continue}else if(m in ES){AP(this,C,m,h,x?Ao(h,x+c):c);continue}else if(m==="smoothOrigin"){Tr(this,C,"smooth",C.smooth,c);continue}else if(m==="force3D"){C[m]=c;continue}else if(m==="transform"){CP(this,c,e);continue}}else m in a||(m=qo(m)||m);if(v||(f||f===0)&&(h||h===0)&&!lP.test(c)&&m in a)g=(u+"").substr((h+"").length),f||(f=0),d=en(c)||(m in On.units?On.units[m]:g),g!==d&&(h=Gr(e,m,u,d)),this._pt=new Tn(this._pt,v?C:a,m,h,(x?Ao(h,x+f):f)-h,!v&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?fP:Dd),this._pt.u=d||0,g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=cP);else if(m in a)SP.call(this,e,m,u,x?x+c:c);else if(m in e)this.add(e,m,u||e[m],x?x+c:c,r,s);else if(m!=="parseTransform"){Xp(m,c);continue}v||(m in a?R.push(m,0,a[m]):typeof e[m]=="function"?R.push(m,2,e[m]()):R.push(m,1,u||e[m])),o.push(m)}}T&&pS(this)},render:function(e,t){if(t.tween._time||!nm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gi,aliases:Ai,getSetter:function(e,t,i){var r=Ai[t];return r&&r.indexOf(",")<0&&(t=r),t in tr&&t!==wn&&(e._gsap.x||Gi(e,"x"))?i&&E0===i?t==="scale"?mP:pP:(E0=i||{})&&(t==="scale"?gP:_P):e.style&&!Hp(e.style[t])?hP:~t.indexOf("-")?dP:Jp(e,t)},core:{_removeProperty:Ps,_getMatrix:rm}};An.utils.checkPrefix=qo;An.core.getStyleSaver=xS;(function(n,e,t,i){var r=En(n+","+e+","+t,function(s){tr[s]=1});En(e,function(s){On.units[s]="deg",ES[s]=1}),Ai[r[13]]=n+","+e,En(i,function(s){var o=s.split(":");Ai[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});An.registerPlugin(AS);var Od=An.registerPlugin(AS)||An;Od.core.Tween;const RP=()=>{const n=Fe.useRef(null),e=Fe.useRef(null),t=Fe.useRef(null),i=Fe.useRef(null),r=Fe.useRef(null),s=Fe.useRef(null);Fe.useRef(new i2);const[o,a]=Fe.useState("normal"),[l,u]=Fe.useState(null),[c,f]=Fe.useState({type:"configUpdate",chasis:"Gris",buttons:{},knobs:{}}),[h,p]=Fe.useState({chasis:[],buttons:[],knobs:[]}),[_,m]=Fe.useState(!1),[g,d]=Fe.useState(null),x=Fe.useRef(o),[v,y]=Fe.useState([]),[C,E]=Fe.useState([]),T={chasis:{Gris:{hex:"#808080"},Plata:{hex:"#C0C0C0"},Negro:{hex:"#1A1A1A"},Blanco:{hex:"#F5F5F5"},Dorado:{hex:"#FFD700"},Grafito:{hex:"#404040"},"Azul Noche":{hex:"#003366"},"Rojo Vino":{hex:"#722F37"},Titanio:{hex:"#878681"},Bronce:{hex:"#CD7F32"}},buttons:{Rojo:{hex:"#D00000"},Azul:{hex:"#0077FF"},Verde:{hex:"#1F7A1F"},Blanco:{hex:"#FFFFFF"},Negro:{hex:"#060606"},Amarillo:{hex:"#FFD700"},Naranja:{hex:"#FF7300"},Morado:{hex:"#6A0DAD"},Cian:{hex:"#00FFFF"},Magenta:{hex:"#FF00FF"}},knobs:{Rosa:{hex:"#FF007F"},Morado:{hex:"#6A0DAD"},Naranja:{hex:"#FF7300"},Verde:{hex:"#1F7A1F"},Turquesa:{hex:"#40E0D0"},Lima:{hex:"#AFFF33"},Índigo:{hex:"#4B0082"},Coral:{hex:"#FF7F50"},Cielo:{hex:"#87CEEB"},Menta:{hex:"#3EB489"}}},R={normal:{pos:new U(2,1,-.1),target:new U(0,-.5,-.1)},top:{pos:new U(1,2,-.6),target:new U(-.1,-.8,-.6)}},M=Fe.useRef(null),S=Fe.useRef(null),L=Fe.useRef(null);Fe.useRef(null),new U(1,2,-.6),new U(-.1,-.8,-.6);const B=Fe.useCallback(()=>{const H="3d58a487-8b74-2a0b-7e04-43fca04e5333",te="Paquete Pro",ne=c.chasis,ee=Object.values(c.buttons).join(", "),b=Object.values(c.knobs).join(", "),ve={productId:H,quantity:1,options:{choices:{"Tipo de Configuración":te},customTextFields:[{title:"Especificaciones",value:`Chasis: ${ne}, Botones: ${ee}, Knobs: ${b}`}]}};window.parent&&(window.parent.postMessage(ve,"*"),console.log("Datos del producto dinámico enviados al carrito de Wix:",ve)),m(!1)},[c]),O=Fe.useCallback(()=>{console.log("Enviando actualización de configuración:",c),window.parent&&window.parent.postMessage(c,"*")},[c]),G=Fe.useCallback((H,te)=>{const ne=new n2(16777215,1.5);H.add(ne);const ee=new f0(16777215,8.5);ee.position.set(5,5,5),ee.castShadow=!0,ee.shadow.mapSize.width=4096,ee.shadow.mapSize.height=4096,ee.shadow.camera.near=.5,ee.shadow.camera.far=20,ee.shadow.normalBias=.05,H.add(ee);const b=new f0(16777215,.01);b.position.set(-5,5,-5),H.add(b)},[]),j=Fe.useCallback(H=>{const te={chasis:[],buttons:[],knobs:[]},ne={type:"configUpdate",chasis:"Gris",buttons:{},knobs:{}};H.traverse(ee=>{var ve;if(!(ee instanceof _n))return;ee.castShadow=!0,ee.receiveShadow=!0;const b=typeof ee.name=="string"?ee.name.toLowerCase():"";if((b.includes("logo")||b.includes("beato")||b.includes("crearttech")||b.includes("custom midi"))&&ee.material&&"map"in ee.material&&ee.material.map&&(ee.material.transparent=!0,ee.material.alphaTest=.9),b.includes("cubechasis"))ee.material=new wa({color:T.chasis.Gris.hex,metalness:.9,roughness:.1}),te.chasis.push(ee),ne.chasis="Gris";else if(b.includes("boton")){const ce="Negro";ee.material=new wa({color:T.buttons[ce].hex,metalness:.4,roughness:.2}),te.buttons.push(ee),ne.buttons[ee.name]=ce}else if(b.includes("knob")&&(ve=ee.material)!=null&&ve.color){const ce=ee.material;if((ce.color.r+ce.color.g+ce.color.b)/3<.5){const Me="Rosa";ee.material=new wa({color:T.knobs[Me].hex,metalness:0,roughness:1}),te.knobs.push(ee),ne.knobs[ee.name]=Me}else ee.material=new wa({color:16777215})}}),p(te),f(ne)},[]),z=Fe.useCallback(H=>{const te=new ir().setFromObject(H),ne=te.getSize(new U),ee=te.getCenter(new U),ce=1.8/Math.max(ne.x,ne.y,ne.z);H.scale.set(ce,ce,ce),H.position.copy(ee).multiplyScalar(-ce),H.position.y-=ne.y/2*ce},[]),$=Fe.useCallback(async()=>{try{const{GLTFLoader:H}=await Sg(async()=>{const{GLTFLoader:ne}=await import("./GLTFLoader-DKP3Uvfr.js");return{GLTFLoader:ne}},[]);new H().load("./models/BEATO3.glb",ne=>{var ve;const ee=ne.scene;s.current=ee,j(ee),z(ee),(ve=e.current)==null||ve.add(ee),M.current||(M.current=ee.position.clone());const b=1842204;ee.traverse(ce=>{ce.isMesh&&(typeof ce.name=="string"&&ce.name.toLowerCase().includes("boton")||typeof ce.name=="string"&&ce.name.toLowerCase().includes("aro"))&&ce.material&&"color"in ce.material&&ce.material.color.setHex(b)}),s.current.traverse(ce=>{ce.isMesh&&console.log(ce.name)})},void 0,ne=>{console.error("ERROR AL CARGAR EL MODELO:",ne)})}catch(H){console.error("Error importing GLTFLoader:",H)}},[j,z]);Fe.useEffect(()=>{if(!n.current)return;const H=new Nb;H.background=null,e.current=H;const te=new Ib({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});te.setSize(n.current.clientWidth,n.current.clientHeight),te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.outputColorSpace=ai,te.shadowMap.enabled=!0,te.shadowMap.type=jx,t.current=te,n.current.appendChild(te.domElement);const ne=new pn(45,n.current.clientWidth/n.current.clientHeight,.1,200);ne.position.copy(R.normal.pos),i.current=ne,Sg(async()=>{const{OrbitControls:ve}=await import("./OrbitControls-CcFT5D0o.js");return{OrbitControls:ve}},[]).then(({OrbitControls:ve})=>{const ce=new ve(ne,te.domElement);ce.target.copy(R.normal.target),ce.enableDamping=!0,ce.minDistance=2,ce.maxDistance=5,r.current=ce}),G(H,te),$();let ee;const b=()=>{ee=requestAnimationFrame(b),r.current&&r.current.update(),te.render(H,ne)};return b(),()=>{ee&&cancelAnimationFrame(ee),n.current&&te.domElement&&n.current.removeChild(te.domElement),te.dispose()}},[G,$]),Fe.useEffect(()=>{const H=()=>{if(n.current&&i.current&&t.current){const te=n.current.clientWidth,ne=n.current.clientHeight;i.current.aspect=te/ne,i.current.updateProjectionMatrix(),t.current.setSize(te,ne)}};return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[]);const D=Fe.useCallback((H,te=0)=>{var ne;H&&((ne=H.material)!=null&&ne.emissive)&&H.material.emissive.setHex(te)},[]),q=Fe.useCallback(H=>{var ce;if(!i.current||!t.current)return;if(o==="chasis"){u(null),y([]);return}const te=new d2,ne=new Ye,ee=t.current.domElement.getBoundingClientRect();ne.x=(H.clientX-ee.left)/ee.width*2-1,ne.y=-((H.clientY-ee.top)/ee.height)*2+1,te.setFromCamera(ne,i.current);let b=[];if(o==="buttons"?b=h.buttons:o==="knobs"?b=h.knobs:o==="normal"&&(b=h.buttons),b.length===0)return;const ve=te.intersectObjects(b,!1);if(o==="buttons"&&h.buttons.forEach(Ne=>D(Ne,0)),l&&o!=="normal"&&D(l,0),ve.length>0){const Ne=ve[0].object;if(o==="normal")return;if(o==="buttons"&&H.shiftKey)v.length===0&&l&&l!==Ne?(y([l,Ne]),u(null),D(l,4473924),D(Ne,4473924)):(u(null),y(Me=>{if(Me.length===0)return D(Ne,4473924),[Ne];const Oe=Me.includes(Ne);let Re;return Oe?(Re=Me.filter(Ue=>Ue!==Ne),D(Ne,0)):(Re=[...Me,Ne],D(Ne,4473924)),Re.forEach(Ue=>D(Ue,4473924)),Re}));else if(y([]),o==="buttons"&&Ne.name.toLowerCase().includes("aro")){const Me=parseInt(((ce=Ne.name.match(/\d+/))==null?void 0:ce[0])||"1",10),Oe=h.buttons.find(Re=>Re.name.toLowerCase().includes("boton")&&Re.name.includes(Me.toString()));if(Oe)u(Oe),D(Oe,4473924);else{u(null);return}}else u(Ne),D(Ne,4473924)}else u(null),y([])},[o,h,l,D,v]);Fe.useCallback(H=>{if(!i.current||!r.current)return;const te=800,ne=Date.now(),ee=i.current.position.clone(),b=r.current.target.clone(),ve=H.pos.clone(),ce=H.target.clone();function Ne(){const Me=Date.now()-ne,Oe=Math.min(Me/te,1),Re=1-Math.pow(1-Oe,3);i.current.position.lerpVectors(ee,ve,Re),r.current.target.lerpVectors(b,ce,Re),r.current.update(),Oe<1&&requestAnimationFrame(Ne)}Ne()},[]);const K=Fe.useCallback(H=>{if(!s.current)return null;let te=null;return s.current.traverse(ne=>{if(ne instanceof _n&&ne.name.toLowerCase().includes("aro")){const ee=H.match(/\d+/),b=ne.name.match(/\d+/);ee&&b&&ee[0]===b[0]&&(te=ne)}}),te},[]),oe=Fe.useCallback(H=>{if(a(H),H==="chasis"&&h.chasis.length>0?u(h.chasis[0]):u(null),!i.current||!r.current)return;let te,ne;H==="normal"?(te=R.normal,ne=!0):(te=R.top,ne=!1),r.current.enabled=ne,Od.to(i.current.position,{duration:1.2,ease:"power3.inOut",...te.pos}),Od.to(r.current.target,{duration:1.2,ease:"power3.inOut",...te.target,onUpdate:()=>r.current.update()})},[h]),ye=Fe.useCallback((H,te)=>{if(o==="chasis"){h.chasis.forEach(b=>{b.material.color.set(te.hex)}),f(b=>({...b,chasis:H}));return}if(o==="buttons"&&v.length>0){const b={...c,buttons:{...c.buttons}};v.forEach(ve=>{ve.material.color.set(te.hex),b.buttons[ve.name]=H;const ce=K(ve.name);ce&&ce.material&&ce.material.color.set(te.hex)}),f(b),v.forEach(ve=>D(ve,0)),y([]);return}if(o==="knobs"&&C.length>0){const b={...c,knobs:{...c.knobs}};C.forEach(ve=>{ve.material.color.set(te.hex),b.knobs[ve.name]=H}),f(b),C.forEach(ve=>D(ve,0)),E([]);return}if(!l){alert("Primero haz clic en una pieza del controlador o selecciona una vista de edición.");return}l.material.color.set(te.hex);const ne={...c},ee=l.name;if(h.buttons.includes(l)){if(ne.buttons[ee]=H,ee.toLowerCase().includes("boton")){const b=K(ee);b&&b.material&&b.material.color.set(te.hex)}D(l,0)}else h.knobs.includes(l)&&(ne.knobs[ee]=H);f(ne)},[l,v,c,h,o,K,C]),He=Fe.useCallback(()=>{if(!t.current||!e.current||!i.current)return;const H=i.current.position.clone(),te=r.current?r.current.target.clone():null,ne=i.current.fov,ee=R.normal.pos.clone(),b=R.normal.target.clone();i.current.position.copy(ee),i.current.fov=35,i.current.updateProjectionMatrix(),r.current&&(r.current.target.copy(b),r.current.update()),setTimeout(()=>{t.current.render(e.current,i.current);const ve=t.current.domElement.toDataURL("image/png");d(ve),i.current.position.copy(H),i.current.fov=ne,i.current.updateProjectionMatrix(),r.current&&te&&(r.current.target.copy(te),r.current.update()),m(!0)},50)},[]),X=()=>{switch(o){case"chasis":return"ELIGE EL COLOR DEL CHASIS";case"buttons":return"PERSONALIZA LOS BOTONES";case"knobs":return"ESCOGE PARA LOS KNOBS";default:return"ELIGE UN COLOR"}},Q=()=>{switch(o){case"chasis":return T.chasis;case"buttons":return T.buttons;case"knobs":return T.knobs;default:return{}}};Fe.useEffect(()=>{O()},[O]),Fe.useEffect(()=>{x.current=o},[o]),Fe.useEffect(()=>{setTimeout(()=>{i.current&&r.current&&(S.current=i.current.position.clone(),L.current=r.current.target.clone())},100)},[]);const pe=[{id:"normal",icon:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5M12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17M12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z",title:"Vista General"},{id:"chasis",icon:`M4 4 Q2 4 2 8 L2 24 Q2 28 4 28 L28 28 Q30 28 30 24 L30 8 Q30 4 28 4 Z
    M8 8 A1.3 1.3 0 1 1 10.6 8 A1.3 1.3 0 1 1 8 8
    M12 8 A1.3 1.3 0 1 1 14.6 8 A1.3 1.3 0 1 1 12 8
    M16 8 A1.3 1.3 0 1 1 18.6 8 A1.3 1.3 0 1 1 16 8
    M20 8 A1.3 1.3 0 1 1 22.6 8 A1.3 1.3 0 1 1 20 8
    M5 15 A2 2 0 1 1 9 15 A2 2 0 1 1 5 15
    M11 15 A2 2 0 1 1 15 15 A2 2 0 1 1 11 15
    M17 15 A2 2 0 1 1 21 15 A2 2 0 1 1 17 15
    M23 15 A2 2 0 1 1 27 15 A2 2 0 1 1 23 15
    M5 22 A2 2 0 1 1 9 22 A2 2 0 1 1 5 22
    M11 22 A2 2 0 1 1 15 22 A2 2 0 1 1 11 22
    M17 22 A2 2 0 1 1 21 22 A2 2 0 1 1 17 22
    M23 22 A2 2 0 1 1 27 22 A2 2 0 1 1 23 22`,title:"Chasis",viewBox:"0 0 32 32"},{id:"buttons",icon:"M12 1.999c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10.001-10.002 10.001S1.998 17.524 1.998 12.001C1.998 6.477 6.476 1.999 12 1.999m0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5M11.996 6a5.998 5.998 0 1 1 0 11.996a5.998 5.998 0 0 1 0-11.996",title:"Botones"},{id:"knobs",icon:"M9.42 4.074a.56.56 0 0 0-.56.56v.93c0 .308.252.56.56.56s.56-.252.56-.56v-.93a.56.56 0 0 0-.56-.56M11.554 8.8a.5.5 0 0 1 0 .707l-1.78 1.78a.5.5 0 1 1-.708-.707l1.78-1.78a.5.5 0 0 1 .708 0 M9.42 15.444c-1.16 0-2.32-.44-3.2-1.32a4.527 4.527 0 0 1 0-6.39a4.527 4.527 0 0 1 6.39 0a4.527 4.527 0 0 1 0 6.39c-.88.88-2.03 1.32-3.19 1.32m0-1.1a3.41 3.41 0 1 0 0-6.82a3.41 3.41 0 0 0 0 6.82M6.757 5.2a.56.56 0 1 0-.965.567l.465.809l.005.006a.58.58 0 0 0 .478.262a.53.53 0 0 0 .276-.075a.566.566 0 0 0 .205-.753zm5.315.012a.55.55 0 0 1 .761-.206c.277.152.36.5.203.764l-.458.797a.56.56 0 0 1-.478.277a.564.564 0 0 1-.487-.834zm7.598 5.722a.5.5 0 0 1 .5-.5h2.52a.5.5 0 1 1 0 1h-2.52a.5.5 0 0 1-.5-.5 M22.69 15.454c2.49 0 4.52-2.03 4.52-4.52s-2.03-4.52-4.52-4.52s-4.52 2.03-4.52 4.52s2.03 4.52 4.52 4.52m0-1.11a3.41 3.41 0 1 1 0-6.82a3.41 3.41 0 0 1 0 6.82m-.56-9.7c0-.308.252-.56.56-.56s.56.252.56.56v.945a.566.566 0 0 1-.56.535a.56.56 0 0 1-.56-.56zm-2.103.566a.557.557 0 0 0-.763-.202a.566.566 0 0 0-.204.753l.468.815l.004.006a.58.58 0 0 0 .478.262a.53.53 0 0 0 .276-.075a.566.566 0 0 0 .205-.753zm6.086-.204a.55.55 0 0 0-.761.206l-.458.795a.55.55 0 0 0 .194.759c.1.067.217.078.282.078a.6.6 0 0 0 .478-.262l.005-.006l.463-.806a.55.55 0 0 0-.203-.764M11.93 22.636H9.42a.5.5 0 0 0 0 1h2.51a.5.5 0 1 0 0-1 M4.9 23.136c0 2.49 2.03 4.52 4.52 4.52s4.52-2.03 4.52-4.52s-2.03-4.52-4.52-4.52s-4.52 2.03-4.52 4.52m7.93 0a3.41 3.41 0 1 1-6.82 0a3.41 3.41 0 0 1 6.82 0m-3.41-6.86a.56.56 0 0 0-.56.56v.93c0 .308.252.56.56.56s.56-.252.56-.56v-.93a.56.56 0 0 0-.56-.56m-3.418.93a.566.566 0 0 1 .755.206l.464.807c.137.258.06.6-.205.753a.53.53 0 0 1-.276.074a.58.58 0 0 1-.478-.261l-.005-.007l-.468-.814a.566.566 0 0 1 .207-.755zm6.08.209a.55.55 0 0 1 .761-.206c.277.151.36.499.203.764l-.462.802a.567.567 0 0 1-.766.194a.55.55 0 0 1-.194-.76zm8.475 3.588a.5.5 0 0 1 .707 0l1.78 1.78a.5.5 0 0 1-.707.707l-1.78-1.78a.5.5 0 0 1 0-.707 M22.69 27.656c-1.16 0-2.32-.44-3.2-1.32a4.527 4.527 0 0 1 0-6.39a4.527 4.527 0 0 1 6.39 0a4.527 4.527 0 0 1 0 6.39c-.88.88-2.04 1.32-3.19 1.32m0-1.11a3.41 3.41 0 1 0 0-6.82a3.41 3.41 0 0 0 0 6.82 M22.13 16.836c0-.308.252-.56.56-.56s.56.252.56.56v.945a.57.57 0 0 1-.56.545a.56.56 0 0 1-.56-.56zm-2.103.576a.566.566 0 0 0-.755-.206l-.006.003a.565.565 0 0 0-.206.755l.468.814l.004.007a.58.58 0 0 0 .478.262a.53.53 0 0 0 .276-.074a.566.566 0 0 0 .205-.753zm6.086-.203a.55.55 0 0 0-.761.206l-.458.795a.55.55 0 0 0 .194.759a.5.5 0 0 0 .282.077a.6.6 0 0 0 .478-.261l.005-.007l.463-.805a.55.55 0 0 0-.203-.764 M1 5.75A4.75 4.75 0 0 1 5.75 1h20.52a4.75 4.75 0 0 1 4.75 4.75v20.48a4.75 4.75 0 0 1-4.75 4.75H5.75A4.75 4.75 0 0 1 1 26.23zM5.75 3A2.75 2.75 0 0 0 3 5.75v20.48a2.75 2.75 0 0 0 2.75 2.75h20.52a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 26.27 3z",title:"Knobs"}];return be.jsxs("div",{className:"w-full h-screen bg-black text-gray-200 overflow-hidden relative",children:[be.jsx("div",{className:"absolute top-6 left-32 z-10",children:be.jsxs("h1",{className:"text-2xl text-white font-bold leading-none m-0 text-shadow",children:["PERSONALIZA TU",be.jsxs("span",{className:"block relative",children:["CONTROLADOR",be.jsx("div",{className:"absolute left-0 bottom-0 h-1 w-3/5 bg-green-400 rounded-lg"})]})]})}),be.jsx("button",{className:"fixed top-6 left-6 z-50 px-5 py-2 bg-purple-400 text-black border border-purple-400 rounded font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:bg-yellow-200 hover:border-yellow-200 hover:-translate-y-0.5 hover:shadow-lg shadow-[0_0_8px_2px_#a259ff80,0_0_16px_4px_#0ff5]",onClick:()=>window.location.href="https://www.crearttech.com/",children:"Inicio"}),be.jsx("main",{className:"flex w-full h-full",children:be.jsx("div",{className:"flex-grow h-full bg-gradient-to-t from-gray-800 to-gray-400",children:be.jsx("div",{ref:n,className:"w-full h-full transition-all duration-300",onClick:q})})}),o==="normal"&&be.jsx("button",{onClick:He,className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 text-lg font-bold uppercase tracking-wide text-black bg-purple-400 border-none rounded cursor-pointer transition-all duration-200 shadow-lg hover:bg-yellow-200 hover:scale-105 hover:shadow-xl shadow-[0_0_8px_2px_#a259ff80,0_0_16px_4px_#0ff5]",children:"AÑADIR AL CARRITO"}),_&&be.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",children:be.jsxs("div",{className:"relative bg-[#3a4060] rounded-2xl shadow-2xl border-2 border-[#a259ff] p-4 md:py-4 md:px-8 w-full max-w-4xl mx-4 animate-fade-in",children:[be.jsx("button",{onClick:()=>m(!1),className:"absolute top-3 right-3 text-gray-400 hover:text-pink-400 text-2xl font-bold",children:"×"}),be.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-purple-400 mb-4 text-center tracking-widest",children:"PAGO SEGURO"}),be.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center mb-4",children:[be.jsx("div",{className:"w-full max-w-[320px] md:max-w-[380px] aspect-[4/3] flex items-center justify-center ml-16 md:ml-24",children:g&&be.jsx("img",{src:g,alt:"Controlador personalizado",className:"w-full h-full object-contain",style:{background:"none",boxShadow:"none",border:"none"}})}),be.jsxs("div",{className:"flex-1 mt-8 md:mt-0",children:[be.jsx("h3",{className:"text-xl font-semibold mb-2 text-cyan-400",children:"Tu configuración:"}),be.jsxs("ul",{className:"text-base space-y-1",children:[be.jsxs("li",{children:[be.jsx("b",{children:"Chasis:"})," ",c.chasis]}),be.jsxs("li",{children:[be.jsx("b",{children:"Botones:"})," ",Object.values(c.buttons).join(", ")||"Por defecto"]}),be.jsxs("li",{children:[be.jsx("b",{children:"Perillas:"})," ",Object.values(c.knobs).join(", ")||"Por defecto"]})]})]})]}),be.jsx("div",{className:"flex flex-col gap-4 mt-4",children:be.jsx("button",{className:"w-full py-3 rounded-lg bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-bold text-lg shadow-[0_0_12px_2px_#a259ff80] hover:scale-105 transition-all flex items-center justify-center gap-2",onClick:B,children:"AÑADIR Y VER EN CARRITO"})}),be.jsx("p",{className:"text-xs text-gray-400 mt-6 text-center",children:"Tu compra es 100% segura y protegida."})]})}),be.jsxs("div",{className:`fixed top-0 right-0 h-screen bg-gray-900 border-l border-gray-700 shadow-2xl transition-all duration-400 flex overflow-hidden ${o==="normal"?"w-28":"w-[480px]"}`,children:[be.jsx("div",{className:"w-28 p-6 flex-shrink-0",style:{paddingTop:"200px"},children:be.jsx("div",{className:"flex flex-col gap-2",children:pe.map(({id:H,icon:te,title:ne,viewBox:ee})=>be.jsx("button",{onClick:H==="faders"?void 0:()=>oe(H),className:`w-full aspect-square border rounded flex items-center justify-center p-3 transition-all duration-200 text-white ${o===H?"bg-[#a259ff] border-[#a259ff] shadow-[0_0_8px_2px_#a259ff80,0_0_16px_4px_#0ff5,0_0_2px_1px_#fff3]":"border-gray-600 bg-gray-800 bg-opacity-80 hover:bg-gray-600 hover:border-[#a259ff] hover:shadow-[0_0_4px_1px_#a259ff60,0_0_8px_2px_#0ff3]"}`,title:ne,disabled:H==="faders",style:H==="faders"?{cursor:"not-allowed"}:{},children:be.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:H==="chasis"||H==="knobs"?"0 0 32 32":H==="faders"?"0 0 256 256":"0 0 24 24",className:"w-4/5 h-4/5 mx-auto my-auto fill-white text-white",fill:"#fff",children:be.jsx("path",{d:te})})},H))})}),be.jsxs("div",{className:"flex-1 p-4 flex flex-col",children:[be.jsx("div",{className:`flex items-center pb-5 border-b border-gray-600 pl-0 ${o==="normal"?"justify-center items-center gap-0":"justify-center gap-2"}`,style:o==="normal"?{minHeight:"48px"}:{},children:o==="normal"?be.jsx("img",{src:"models/logo.png",alt:"Logo",className:"h-6 w-auto",style:{filter:"drop-shadow(0 0 8px #a259ff) drop-shadow(0 0 16px #0ff)"}}):be.jsxs(be.Fragment,{children:[be.jsx("img",{src:"models/logo.png",alt:"Logo",className:"h-8 w-auto",style:{filter:"drop-shadow(0 0 8px #a259ff) drop-shadow(0 0 16px #0ff)"}}),be.jsx("h2",{className:"m-0 font-bold tracking-widest text-xl md:text-3xl whitespace-normal break-words text-left",style:{fontFamily:"Orbitron, Arial, sans-serif",background:"linear-gradient(90deg, #a259ff 0%, #0ff 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:"0 0 12px #a259ff, 0 0 24px #0ff, 0 0 2px #fff",letterSpacing:"0.04em",marginLeft:"-0.25em",overflowWrap:"anywhere"},children:"ONFIGURADOR"})]})}),be.jsxs("div",{className:"mt-6",children:[be.jsx("p",{className:"font-black text-sm tracking-wide uppercase m-0 mb-3 text-gray-200 text-left",children:X()}),be.jsx("div",{className:"grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 p-1 md:p-2 rounded overflow-x-auto",style:{backgroundColor:"#5944D3"},children:Object.entries(Q()).map(([H,te])=>be.jsx("div",{className:"w-12 h-12 rounded-full cursor-pointer border-2 border-[#a259ff] shadow-[0_0_6px_1px_#a259ff55] transition-all duration-200 shadow-inner hover:scale-110",style:{backgroundColor:te.hex},title:H,onClick:()=>ye(H,te)},H))})]})]})]})]})};Wx(document.getElementById("root")).render(be.jsx(Fe.StrictMode,{children:be.jsx(RP,{})}));export{Ob as $,OP as A,Qn as B,je as C,f0 as D,_n as E,GP as F,kP as G,wy as H,FP as I,BP as J,zP as K,yl as L,VP as M,Hl as N,Rt as O,jP as P,Jo as Q,pd as R,ai as S,LP as T,cu as U,Ye as V,pn as W,NP as X,my as Y,Ty as Z,HP as _,IP as a,ac as a0,gd as a1,My as a2,tn as a3,mc as a4,pc as a5,Xc as a6,tt as a7,Br as a8,Wc as a9,ir as aa,rr as ab,Qo as ac,bP as ad,PP as ae,$P as af,vl as ag,as as ah,DP as b,YP as c,Yr as d,XP as e,Ge as f,U as g,Q_ as h,WP as i,qP as j,UP as k,gs as l,Cf as m,HE as n,ui as o,gn as p,md as q,ms as r,zb as s,Is as t,Bb as u,wa as v,Wi as w,ly as x,st as y,sr as z};

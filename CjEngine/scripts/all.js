if(!GLMAT_EPSILON){var GLMAT_EPSILON=1e-6}if(!GLMAT_ARRAY_TYPE){var GLMAT_ARRAY_TYPE=typeof Float32Array!=="undefined"?Float32Array:Array}var glMatrix={};glMatrix.setMatrixArrayType=function(e){GLMAT_ARRAY_TYPE=e};if(typeof exports!=="undefined"){exports.glMatrix=glMatrix}var vec2={};vec2.create=function(){var e=new GLMAT_ARRAY_TYPE(2);e[0]=0;e[1]=0;return e};vec2.clone=function(e){var t=new GLMAT_ARRAY_TYPE(2);t[0]=e[0];t[1]=e[1];return t};vec2.fromValues=function(e,t){var n=new GLMAT_ARRAY_TYPE(2);n[0]=e;n[1]=t;return n};vec2.copy=function(e,t){e[0]=t[0];e[1]=t[1];return e};vec2.set=function(e,t,n){e[0]=t;e[1]=n;return e};vec2.add=function(e,t,n){e[0]=t[0]+n[0];e[1]=t[1]+n[1];return e};vec2.subtract=function(e,t,n){e[0]=t[0]-n[0];e[1]=t[1]-n[1];return e};vec2.sub=vec2.subtract;vec2.multiply=function(e,t,n){e[0]=t[0]*n[0];e[1]=t[1]*n[1];return e};vec2.mul=vec2.multiply;vec2.divide=function(e,t,n){e[0]=t[0]/n[0];e[1]=t[1]/n[1];return e};vec2.div=vec2.divide;vec2.min=function(e,t,n){e[0]=Math.min(t[0],n[0]);e[1]=Math.min(t[1],n[1]);return e};vec2.max=function(e,t,n){e[0]=Math.max(t[0],n[0]);e[1]=Math.max(t[1],n[1]);return e};vec2.scale=function(e,t,n){e[0]=t[0]*n;e[1]=t[1]*n;return e};vec2.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)};vec2.dist=vec2.distance;vec2.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r};vec2.sqrDist=vec2.squaredDistance;vec2.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)};vec2.len=vec2.length;vec2.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n};vec2.sqrLen=vec2.squaredLength;vec2.negate=function(e,t){e[0]=-t[0];e[1]=-t[1];return e};vec2.normalize=function(e,t){var n=t[0],r=t[1];var i=n*n+r*r;if(i>0){i=1/Math.sqrt(i);e[0]=t[0]*i;e[1]=t[1]*i}return e};vec2.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};vec2.cross=function(e,t,n){var r=t[0]*n[1]-t[1]*n[0];e[0]=e[1]=0;e[2]=r;return e};vec2.lerp=function(e,t,n,r){var i=t[0],s=t[1];e[0]=i+r*(n[0]-i);e[1]=s+r*(n[1]-s);return e};vec2.transformMat2=function(e,t,n){var r=t[0],i=t[1];e[0]=n[0]*r+n[2]*i;e[1]=n[1]*r+n[3]*i;return e};vec2.transformMat2d=function(e,t,n){var r=t[0],i=t[1];e[0]=n[0]*r+n[2]*i+n[4];e[1]=n[1]*r+n[3]*i+n[5];return e};vec2.transformMat3=function(e,t,n){var r=t[0],i=t[1];e[0]=n[0]*r+n[3]*i+n[6];e[1]=n[1]*r+n[4]*i+n[7];return e};vec2.transformMat4=function(e,t,n){var r=t[0],i=t[1];e[0]=n[0]*r+n[4]*i+n[12];e[1]=n[1]*r+n[5]*i+n[13];return e};vec2.forEach=function(){var e=vec2.create();return function(t,n,r,i,s,o){var u,a;if(!n){n=2}if(!r){r=0}if(i){a=Math.min(i*n+r,t.length)}else{a=t.length}for(u=r;u<a;u+=n){e[0]=t[u];e[1]=t[u+1];s(e,e,o);t[u]=e[0];t[u+1]=e[1]}return t}}();vec2.str=function(e){return"vec2("+e[0]+", "+e[1]+")"};if(typeof exports!=="undefined"){exports.vec2=vec2}!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.p2=e()}}(function(){var e,t,n;return function r(e,t,n){function i(o,u){if(!t[o]){if(!e[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=t[o]={exports:{}};e[o][0].call(f.exports,function(t){var n=e[o][1][t];return i(n?n:t)},f,f.exports,r,e,t,n)}return t[o].exports}var s=typeof require=="function"&&require;for(var o=0;o<n.length;o++)i(n[o]);return i}({1:[function(e,t,n){(function(t,r,i,s,o,u,a,f,l){function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r=typeof e;if(t==="base64"&&r==="string"){e=j(e);while(e.length%4!==0){e=e+"="}}var s;if(r==="number")s=R(e);else if(r==="string")s=i.byteLength(e,t);else if(r==="object")s=R(e.length);else throw new Error("First argument needs to be a number, array or string.");var o;if(i._useTypedArrays){o=I(new Uint8Array(s))}else{o=this;o.length=s;o._isBuffer=true}var u;if(i._useTypedArrays&&typeof Uint8Array==="function"&&e instanceof Uint8Array){o._set(e)}else if(z(e)){for(u=0;u<s;u++){if(i.isBuffer(e))o[u]=e.readUInt8(u);else o[u]=e[u]}}else if(r==="string"){o.write(e,0,t)}else if(r==="number"&&!i._useTypedArrays&&!n){for(u=0;u<s;u++){o[u]=0}}return o}function p(e,t,n,r){n=Number(n)||0;var s=e.length-n;if(!r){r=s}else{r=Number(r);if(r>s){r=s}}var o=t.length;et(o%2===0,"Invalid hex string");if(r>o/2){r=o/2}for(var u=0;u<r;u++){var a=parseInt(t.substr(u*2,2),16);et(!isNaN(a),"Invalid hex string");e[n+u]=a}i._charsWritten=u*2;return u}function d(e,t,n,r){var s=i._charsWritten=K(X(t),e,n,r);return s}function v(e,t,n,r){var s=i._charsWritten=K(V(t),e,n,r);return s}function m(e,t,n,r){return v(e,t,n,r)}function g(e,t,n,r){var s=i._charsWritten=K(J(t),e,n,r);return s}function y(e,t,n,r){var s=i._charsWritten=K($(t),e,n,r);return s}function b(e,t,n){if(t===0&&n===e.length){return c.fromByteArray(e)}else{return c.fromByteArray(e.slice(t,n))}}function w(e,t,n){var r="";var i="";n=Math.min(e.length,n);for(var s=t;s<n;s++){if(e[s]<=127){r+=Q(i)+String.fromCharCode(e[s]);i=""}else{i+="%"+e[s].toString(16)}}return r+Q(i)}function E(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;i++)r+=String.fromCharCode(e[i]);return r}function S(e,t,n){return E(e,t,n)}function x(e,t,n){var r=e.length;if(!t||t<0)t=0;if(!n||n<0||n>r)n=r;var i="";for(var s=t;s<n;s++){i+=W(e[s])}return i}function T(e,t,n){var r=e.slice(t,n);var i="";for(var s=0;s<r.length;s+=2){i+=String.fromCharCode(r[s]+r[s+1]*256)}return i}function N(e,t,n,r){if(!r){et(typeof n==="boolean","missing or invalid endian");et(t!==undefined&&t!==null,"missing offset");et(t+1<e.length,"Trying to read beyond buffer length")}var i=e.length;if(t>=i)return;var s;if(n){s=e[t];if(t+1<i)s|=e[t+1]<<8}else{s=e[t]<<8;if(t+1<i)s|=e[t+1]}return s}function C(e,t,n,r){if(!r){et(typeof n==="boolean","missing or invalid endian");et(t!==undefined&&t!==null,"missing offset");et(t+3<e.length,"Trying to read beyond buffer length")}var i=e.length;if(t>=i)return;var s;if(n){if(t+2<i)s=e[t+2]<<16;if(t+1<i)s|=e[t+1]<<8;s|=e[t];if(t+3<i)s=s+(e[t+3]<<24>>>0)}else{if(t+1<i)s=e[t+1]<<16;if(t+2<i)s|=e[t+2]<<8;if(t+3<i)s|=e[t+3];s=s+(e[t]<<24>>>0)}return s}function k(e,t,n,r){if(!r){et(typeof n==="boolean","missing or invalid endian");et(t!==undefined&&t!==null,"missing offset");et(t+1<e.length,"Trying to read beyond buffer length")}var i=e.length;if(t>=i)return;var s=N(e,t,n,true);var o=s&32768;if(o)return(65535-s+1)*-1;else return s}function L(e,t,n,r){if(!r){et(typeof n==="boolean","missing or invalid endian");et(t!==undefined&&t!==null,"missing offset");et(t+3<e.length,"Trying to read beyond buffer length")}var i=e.length;if(t>=i)return;var s=C(e,t,n,true);var o=s&2147483648;if(o)return(4294967295-s+1)*-1;else return s}function A(e,t,n,r){if(!r){et(typeof n==="boolean","missing or invalid endian");et(t+3<e.length,"Trying to read beyond buffer length")}return h.read(e,t,n,23,4)}function O(e,t,n,r){if(!r){et(typeof n==="boolean","missing or invalid endian");et(t+7<e.length,"Trying to read beyond buffer length")}return h.read(e,t,n,52,8)}function M(e,t,n,r,i){if(!i){et(t!==undefined&&t!==null,"missing value");et(typeof r==="boolean","missing or invalid endian");et(n!==undefined&&n!==null,"missing offset");et(n+1<e.length,"trying to write beyond buffer length");G(t,65535)}var s=e.length;if(n>=s)return;for(var o=0,u=Math.min(s-n,2);o<u;o++){e[n+o]=(t&255<<8*(r?o:1-o))>>>(r?o:1-o)*8}}function _(e,t,n,r,i){if(!i){et(t!==undefined&&t!==null,"missing value");et(typeof r==="boolean","missing or invalid endian");et(n!==undefined&&n!==null,"missing offset");et(n+3<e.length,"trying to write beyond buffer length");G(t,4294967295)}var s=e.length;if(n>=s)return;for(var o=0,u=Math.min(s-n,4);o<u;o++){e[n+o]=t>>>(r?o:3-o)*8&255}}function D(e,t,n,r,i){if(!i){et(t!==undefined&&t!==null,"missing value");et(typeof r==="boolean","missing or invalid endian");et(n!==undefined&&n!==null,"missing offset");et(n+1<e.length,"Trying to write beyond buffer length");Y(t,32767,-32768)}var s=e.length;if(n>=s)return;if(t>=0)M(e,t,n,r,i);else M(e,65535+t+1,n,r,i)}function P(e,t,n,r,i){if(!i){et(t!==undefined&&t!==null,"missing value");et(typeof r==="boolean","missing or invalid endian");et(n!==undefined&&n!==null,"missing offset");et(n+3<e.length,"Trying to write beyond buffer length");Y(t,2147483647,-2147483648)}var s=e.length;if(n>=s)return;if(t>=0)_(e,t,n,r,i);else _(e,4294967295+t+1,n,r,i)}function H(e,t,n,r,i){if(!i){et(t!==undefined&&t!==null,"missing value");et(typeof r==="boolean","missing or invalid endian");et(n!==undefined&&n!==null,"missing offset");et(n+3<e.length,"Trying to write beyond buffer length");Z(t,3.4028234663852886e38,-3.4028234663852886e38)}var s=e.length;if(n>=s)return;h.write(e,t,n,r,23,4)}function B(e,t,n,r,i){if(!i){et(t!==undefined&&t!==null,"missing value");et(typeof r==="boolean","missing or invalid endian");et(n!==undefined&&n!==null,"missing offset");et(n+7<e.length,"Trying to write beyond buffer length");Z(t,1.7976931348623157e308,-1.7976931348623157e308)}var s=e.length;if(n>=s)return;h.write(e,t,n,r,52,8)}function j(e){if(e.trim)return e.trim();return e.replace(/^\s+|\s+$/g,"")}function I(e){e._isBuffer=true;e._get=e.get;e._set=e.set;e.get=F.get;e.set=F.set;e.write=F.write;e.toString=F.toString;e.toLocaleString=F.toString;e.toJSON=F.toJSON;e.copy=F.copy;e.slice=F.slice;e.readUInt8=F.readUInt8;e.readUInt16LE=F.readUInt16LE;e.readUInt16BE=F.readUInt16BE;e.readUInt32LE=F.readUInt32LE;e.readUInt32BE=F.readUInt32BE;e.readInt8=F.readInt8;e.readInt16LE=F.readInt16LE;e.readInt16BE=F.readInt16BE;e.readInt32LE=F.readInt32LE;e.readInt32BE=F.readInt32BE;e.readFloatLE=F.readFloatLE;e.readFloatBE=F.readFloatBE;e.readDoubleLE=F.readDoubleLE;e.readDoubleBE=F.readDoubleBE;e.writeUInt8=F.writeUInt8;e.writeUInt16LE=F.writeUInt16LE;e.writeUInt16BE=F.writeUInt16BE;e.writeUInt32LE=F.writeUInt32LE;e.writeUInt32BE=F.writeUInt32BE;e.writeInt8=F.writeInt8;e.writeInt16LE=F.writeInt16LE;e.writeInt16BE=F.writeInt16BE;e.writeInt32LE=F.writeInt32LE;e.writeInt32BE=F.writeInt32BE;e.writeFloatLE=F.writeFloatLE;e.writeFloatBE=F.writeFloatBE;e.writeDoubleLE=F.writeDoubleLE;e.writeDoubleBE=F.writeDoubleBE;e.fill=F.fill;e.inspect=F.inspect;e.toArrayBuffer=F.toArrayBuffer;return e}function q(e,t,n){if(typeof e!=="number")return n;e=~~e;if(e>=t)return t;if(e>=0)return e;e+=t;if(e>=0)return e;return 0}function R(e){e=~~Math.ceil(+e);return e<0?0:e}function U(e){return(Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"})(e)}function z(e){return U(e)||i.isBuffer(e)||e&&typeof e==="object"&&typeof e.length==="number"}function W(e){if(e<16)return"0"+e.toString(16);return e.toString(16)}function X(e){var t=[];for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var i=n;if(r>=55296&&r<=57343)n++;var s=encodeURIComponent(e.slice(i,n+1)).substr(1).split("%");for(var o=0;o<s.length;o++)t.push(parseInt(s[o],16))}}return t}function V(e){var t=[];for(var n=0;n<e.length;n++){t.push(e.charCodeAt(n)&255)}return t}function $(e){var t,n,r;var i=[];for(var s=0;s<e.length;s++){t=e.charCodeAt(s);n=t>>8;r=t%256;i.push(r);i.push(n)}return i}function J(e){return c.toByteArray(e)}function K(e,t,n,r){var i;for(var s=0;s<r;s++){if(s+n>=t.length||s>=e.length)break;t[s+n]=e[s]}return s}function Q(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function G(e,t){et(typeof e==="number","cannot write a non-number as a number");et(e>=0,"specified a negative value for writing an unsigned value");et(e<=t,"value is larger than maximum value for type");et(Math.floor(e)===e,"value has a fractional component")}function Y(e,t,n){et(typeof e==="number","cannot write a non-number as a number");et(e<=t,"value larger than maximum allowed value");et(e>=n,"value smaller than minimum allowed value");et(Math.floor(e)===e,"value has a fractional component")}function Z(e,t,n){et(typeof e==="number","cannot write a non-number as a number");et(e<=t,"value larger than maximum allowed value");et(e>=n,"value smaller than minimum allowed value")}function et(e,t){if(!e)throw new Error(t||"Failed assertion")}var c=e("base64-js");var h=e("ieee754");n.Buffer=i;n.SlowBuffer=i;n.INSPECT_MAX_BYTES=50;i.poolSize=8192;i._useTypedArrays=function(){if(typeof Uint8Array!=="function"||typeof ArrayBuffer!=="function")return false;try{var e=new Uint8Array(0);e.foo=function(){return 42};return 42===e.foo()&&typeof e.subarray==="function"}catch(t){return false}}();i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};i.isBuffer=function(e){return!!(e!==null&&e!==undefined&&e._isBuffer)};i.byteLength=function(e,t){var n;e=e+"";switch(t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=X(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=J(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=e.length*2;break;default:throw new Error("Unknown encoding")}return n};i.concat=function(e,t){et(U(e),"Usage: Buffer.concat(list, [totalLength])\n"+"list should be an Array.");if(e.length===0){return new i(0)}else if(e.length===1){return e[0]}var n;if(typeof t!=="number"){t=0;for(n=0;n<e.length;n++){t+=e[n].length}}var r=new i(t);var s=0;for(n=0;n<e.length;n++){var o=e[n];o.copy(r,s);s+=o.length}return r};i.prototype.write=function(e,t,n,r){if(isFinite(t)){if(!isFinite(n)){r=n;n=undefined}}else{var i=r;r=t;t=n;n=i}t=Number(t)||0;var s=this.length-t;if(!n){n=s}else{n=Number(n);if(n>s){n=s}}r=String(r||"utf8").toLowerCase();var o;switch(r){case"hex":o=p(this,e,t,n);break;case"utf8":case"utf-8":o=d(this,e,t,n);break;case"ascii":o=v(this,e,t,n);break;case"binary":o=m(this,e,t,n);break;case"base64":o=g(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=y(this,e,t,n);break;default:throw new Error("Unknown encoding")}return o};i.prototype.toString=function(e,t,n){var r=this;e=String(e||"utf8").toLowerCase();t=Number(t)||0;n=n!==undefined?Number(n):n=r.length;if(n===t)return"";var i;switch(e){case"hex":i=x(r,t,n);break;case"utf8":case"utf-8":i=w(r,t,n);break;case"ascii":i=E(r,t,n);break;case"binary":i=S(r,t,n);break;case"base64":i=b(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=T(r,t,n);break;default:throw new Error("Unknown encoding")}return i};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};i.prototype.copy=function(e,t,n,r){var i=this;if(!n)n=0;if(!r&&r!==0)r=this.length;if(!t)t=0;if(r===n)return;if(e.length===0||i.length===0)return;et(r>=n,"sourceEnd < sourceStart");et(t>=0&&t<e.length,"targetStart out of bounds");et(n>=0&&n<i.length,"sourceStart out of bounds");et(r>=0&&r<=i.length,"sourceEnd out of bounds");if(r>this.length)r=this.length;if(e.length-t<r-n)r=e.length-t+n;for(var s=0;s<r-n;s++)e[s+t]=this[s+n]};i.prototype.slice=function(e,t){var n=this.length;e=q(e,n,0);t=q(t,n,n);if(i._useTypedArrays){return I(this.subarray(e,t))}else{var r=t-e;var s=new i(r,undefined,true);for(var o=0;o<r;o++){s[o]=this[o+e]}return s}};i.prototype.get=function(e){console.log(".get() is deprecated. Access using array indexes instead.");return this.readUInt8(e)};i.prototype.set=function(e,t){console.log(".set() is deprecated. Access using array indexes instead.");return this.writeUInt8(e,t)};i.prototype.readUInt8=function(e,t){if(!t){et(e!==undefined&&e!==null,"missing offset");et(e<this.length,"Trying to read beyond buffer length")}if(e>=this.length)return;return this[e]};i.prototype.readUInt16LE=function(e,t){return N(this,e,true,t)};i.prototype.readUInt16BE=function(e,t){return N(this,e,false,t)};i.prototype.readUInt32LE=function(e,t){return C(this,e,true,t)};i.prototype.readUInt32BE=function(e,t){return C(this,e,false,t)};i.prototype.readInt8=function(e,t){if(!t){et(e!==undefined&&e!==null,"missing offset");et(e<this.length,"Trying to read beyond buffer length")}if(e>=this.length)return;var n=this[e]&128;if(n)return(255-this[e]+1)*-1;else return this[e]};i.prototype.readInt16LE=function(e,t){return k(this,e,true,t)};i.prototype.readInt16BE=function(e,t){return k(this,e,false,t)};i.prototype.readInt32LE=function(e,t){return L(this,e,true,t)};i.prototype.readInt32BE=function(e,t){return L(this,e,false,t)};i.prototype.readFloatLE=function(e,t){return A(this,e,true,t)};i.prototype.readFloatBE=function(e,t){return A(this,e,false,t)};i.prototype.readDoubleLE=function(e,t){return O(this,e,true,t)};i.prototype.readDoubleBE=function(e,t){return O(this,e,false,t)};i.prototype.writeUInt8=function(e,t,n){if(!n){et(e!==undefined&&e!==null,"missing value");et(t!==undefined&&t!==null,"missing offset");et(t<this.length,"trying to write beyond buffer length");G(e,255)}if(t>=this.length)return;this[t]=e};i.prototype.writeUInt16LE=function(e,t,n){M(this,e,t,true,n)};i.prototype.writeUInt16BE=function(e,t,n){M(this,e,t,false,n)};i.prototype.writeUInt32LE=function(e,t,n){_(this,e,t,true,n)};i.prototype.writeUInt32BE=function(e,t,n){_(this,e,t,false,n)};i.prototype.writeInt8=function(e,t,n){if(!n){et(e!==undefined&&e!==null,"missing value");et(t!==undefined&&t!==null,"missing offset");et(t<this.length,"Trying to write beyond buffer length");Y(e,127,-128)}if(t>=this.length)return;if(e>=0)this.writeUInt8(e,t,n);else this.writeUInt8(255+e+1,t,n)};i.prototype.writeInt16LE=function(e,t,n){D(this,e,t,true,n)};i.prototype.writeInt16BE=function(e,t,n){D(this,e,t,false,n)};i.prototype.writeInt32LE=function(e,t,n){P(this,e,t,true,n)};i.prototype.writeInt32BE=function(e,t,n){P(this,e,t,false,n)};i.prototype.writeFloatLE=function(e,t,n){H(this,e,t,true,n)};i.prototype.writeFloatBE=function(e,t,n){H(this,e,t,false,n)};i.prototype.writeDoubleLE=function(e,t,n){B(this,e,t,true,n)};i.prototype.writeDoubleBE=function(e,t,n){B(this,e,t,false,n)};i.prototype.fill=function(e,t,n){if(!e)e=0;if(!t)t=0;if(!n)n=this.length;if(typeof e==="string"){e=e.charCodeAt(0)}et(typeof e==="number"&&!isNaN(e),"value is not a number");et(n>=t,"end < start");if(n===t)return;if(this.length===0)return;et(t>=0&&t<this.length,"start out of bounds");et(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++){this[r]=e}};i.prototype.inspect=function(){var e=[];var t=this.length;for(var r=0;r<t;r++){e[r]=W(this[r]);if(r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}}return"<Buffer "+e.join(" ")+">"};i.prototype.toArrayBuffer=function(){if(typeof Uint8Array==="function"){if(i._useTypedArrays){return(new i(this)).buffer}else{var e=new Uint8Array(this.length);for(var t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}}else{throw new Error("Buffer.toArrayBuffer not supported in this browser")}};var F=i.prototype}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,"base64-js":2,buffer:1,ieee754:3}],2:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";(function(e){"use strict";function f(e){var t=e.charCodeAt(0);if(t===i)return 62;if(t===s)return 63;if(t<o)return-1;if(t<o+10)return t-o+26+26;if(t<a+26)return t-a;if(t<u+26)return t-u+26}function c(e){function c(e){u[l++]=e}var t,r,i,s,o,u;if(e.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var a=e.length;o="="===e.charAt(a-2)?2:"="===e.charAt(a-1)?1:0;u=new n(e.length*3/4-o);i=o>0?e.length-4:e.length;var l=0;for(t=0,r=0;t<i;t+=4,r+=3){s=f(e.charAt(t))<<18|f(e.charAt(t+1))<<12|f(e.charAt(t+2))<<6|f(e.charAt(t+3));c((s&16711680)>>16);c((s&65280)>>8);c(s&255)}if(o===2){s=f(e.charAt(t))<<2|f(e.charAt(t+1))>>4;c(s&255)}else if(o===1){s=f(e.charAt(t))<<10|f(e.charAt(t+1))<<4|f(e.charAt(t+2))>>2;c(s>>8&255);c(s&255)}return u}function h(e){function o(e){return l.charAt(e)}function u(e){return o(e>>18&63)+o(e>>12&63)+o(e>>6&63)+o(e&63)}var t,n=e.length%3,r="",i,s;for(t=0,s=e.length-n;t<s;t+=3){i=(e[t]<<16)+(e[t+1]<<8)+e[t+2];r+=u(i)}switch(n){case 1:i=e[e.length-1];r+=o(i>>2);r+=o(i<<4&63);r+="==";break;case 2:i=(e[e.length-2]<<8)+e[e.length-1];r+=o(i>>10);r+=o(i>>4&63);r+=o(i<<2&63);r+="=";break}return r}var n=typeof Uint8Array!=="undefined"?Uint8Array:Array;var r="0".charCodeAt(0);var i="+".charCodeAt(0);var s="/".charCodeAt(0);var o="0".charCodeAt(0);var u="a".charCodeAt(0);var a="A".charCodeAt(0);t.exports.toByteArray=c;t.exports.fromByteArray=h})()}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],3:[function(e,t,n){(function(e,t,r,i,s,o,u,a,f){n.read=function(e,t,n,r,i){var s,o,u=i*8-r-1,a=(1<<u)-1,f=a>>1,l=-7,c=n?i-1:0,h=n?-1:1,p=e[t+c];c+=h;s=p&(1<<-l)-1;p>>=-l;l+=u;for(;l>0;s=s*256+e[t+c],c+=h,l-=8);o=s&(1<<-l)-1;s>>=-l;l+=r;for(;l>0;o=o*256+e[t+c],c+=h,l-=8);if(s===0){s=1-f}else if(s===a){return o?NaN:(p?-1:1)*Infinity}else{o=o+Math.pow(2,r);s=s-f}return(p?-1:1)*o*Math.pow(2,s-r)};n.write=function(e,t,n,r,i,s){var o,u,a,f=s*8-i-1,l=(1<<f)-1,c=l>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:s-1,d=r?1:-1,v=t<0||t===0&&1/t<0?1:0;t=Math.abs(t);if(isNaN(t)||t===Infinity){u=isNaN(t)?1:0;o=l}else{o=Math.floor(Math.log(t)/Math.LN2);if(t*(a=Math.pow(2,-o))<1){o--;a*=2}if(o+c>=1){t+=h/a}else{t+=h*Math.pow(2,1-c)}if(t*a>=2){o++;a/=2}if(o+c>=l){u=0;o=l}else if(o+c>=1){u=(t*a-1)*Math.pow(2,i);o=o+c}else{u=t*Math.pow(2,c-1)*Math.pow(2,i);o=0}}for(;i>=8;e[n+p]=u&255,p+=d,u/=256,i-=8);o=o<<i|u;f+=i;for(;f>0;e[n+p]=o&255,p+=d,o/=256,f-=8);e[n+p-d]|=v*128}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/grunt-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],4:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(){}var e=t.exports={};e.nextTick=function(){var e=typeof window!=="undefined"&&window.setImmediate;var t=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;if(e){return function(e){return window.setImmediate(e)}}if(t){var n=[];window.addEventListener("message",function(e){var t=e.source;if((t===window||t===null)&&e.data==="process-tick"){e.stopPropagation();if(n.length>0){var r=n.shift();r()}}},true);return function(t){n.push(t);window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}();e.title="browser";e.browser=true;e.env={};e.argv=[];e.on=l;e.once=l;e.off=l;e.emit=l;e.binding=function(e){throw new Error("process.binding is not supported")};e.cwd=function(){return"/"};e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js","/../node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],5:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function h(){}var c=e("./Scalar");t.exports=h;h.lineInt=function(e,t,n){n=n||0;var r=[0,0];var i,s,o,u,a,f,l;i=e[1][1]-e[0][1];s=e[0][0]-e[1][0];o=i*e[0][0]+s*e[0][1];u=t[1][1]-t[0][1];a=t[0][0]-t[1][0];f=u*t[0][0]+a*t[0][1];l=i*a-u*s;if(!c.eq(l,0,n)){r[0]=(a*o-s*f)/l;r[1]=(i*f-u*o)/l}return r};h.segmentsIntersect=function(e,t,n,r){var i=t[0]-e[0];var s=t[1]-e[1];var o=r[0]-n[0];var u=r[1]-n[1];if(o*s-u*i==0)return false;var a=(i*(n[1]-e[1])+s*(e[0]-n[0]))/(o*s-u*i);var f=(o*(e[1]-n[1])+u*(n[0]-e[0]))/(u*i-o*s);return a>=0&&a<=1&&f>=0&&f<=1}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/poly-decomp/src/Line.js","/../node_modules/poly-decomp/src")},{"./Scalar":8,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],6:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(){}t.exports=l;l.area=function(e,t,n){return(t[0]-e[0])*(n[1]-e[1])-(n[0]-e[0])*(t[1]-e[1])};l.left=function(e,t,n){return l.area(e,t,n)>0};l.leftOn=function(e,t,n){return l.area(e,t,n)>=0};l.right=function(e,t,n){return l.area(e,t,n)<0};l.rightOn=function(e,t,n){return l.area(e,t,n)<=0};var c=[],h=[];l.collinear=function(e,t,n,r){if(!r)return l.area(e,t,n)==0;else{var i=c,s=h;i[0]=t[0]-e[0];i[1]=t[1]-e[1];s[0]=n[0]-t[0];s[1]=n[1]-t[1];var o=i[0]*s[0]+i[1]*s[1],u=Math.sqrt(i[0]*i[0]+i[1]*i[1]),a=Math.sqrt(s[0]*s[0]+s[1]*s[1]),f=Math.acos(o/(u*a));return f<r}};l.sqdist=function(e,t){var n=t[0]-e[0];var r=t[1]-e[1];return n*n+r*r}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/poly-decomp/src/Point.js","/../node_modules/poly-decomp/src")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],7:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(){this.vertices=[]}function g(e,t,n,r,i){i=i||0;var s=t[1]-e[1];var o=e[0]-t[0];var u=s*e[0]+o*e[1];var a=r[1]-n[1];var f=n[0]-r[0];var l=a*n[0]+f*n[1];var c=s*f-a*o;if(!p.eq(c,0,i))return[(f*u-o*l)/c,(s*l-a*u)/c];else return[0,0]}var c=e("./Line"),h=e("./Point"),p=e("./Scalar");t.exports=d;d.prototype.at=function(e){var t=this.vertices,n=t.length;return t[e<0?e%n+n:e%n]};d.prototype.first=function(){return this.vertices[0]};d.prototype.last=function(){return this.vertices[this.vertices.length-1]};d.prototype.clear=function(){this.vertices.length=0};d.prototype.append=function(e,t,n){if(typeof t=="undefined")throw new Error("From is not given!");if(typeof n=="undefined")throw new Error("To is not given!");if(n-1<t)throw new Error("lol1");if(n>e.vertices.length)throw new Error("lol2");if(t<0)throw new Error("lol3");for(var r=t;r<n;r++){this.vertices.push(e.vertices[r])}};d.prototype.makeCCW=function(){var e=0,t=this.vertices;for(var n=1;n<this.vertices.length;++n){if(t[n][1]<t[e][1]||t[n][1]==t[e][1]&&t[n][0]>t[e][0]){e=n}}if(!h.left(this.at(e-1),this.at(e),this.at(e+1))){this.reverse()}};d.prototype.reverse=function(){var e=[];for(var t=0,n=this.vertices.length;t!==n;t++){e.push(this.vertices.pop())}this.vertices=e};d.prototype.isReflex=function(e){return h.right(this.at(e-1),this.at(e),this.at(e+1))};var v=[],m=[];d.prototype.canSee=function(e,t){var n,r,i=v,s=m;if(h.leftOn(this.at(e+1),this.at(e),this.at(t))&&h.rightOn(this.at(e-1),this.at(e),this.at(t))){return false}r=h.sqdist(this.at(e),this.at(t));for(var o=0;o!==this.vertices.length;++o){if((o+1)%this.vertices.length===e||o===e)continue;if(h.leftOn(this.at(e),this.at(t),this.at(o+1))&&h.rightOn(this.at(e),this.at(t),this.at(o))){i[0]=this.at(e);i[1]=this.at(t);s[0]=this.at(o);s[1]=this.at(o+1);n=c.lineInt(i,s);if(h.sqdist(this.at(e),n)<r){return false}}}return true};d.prototype.copy=function(e,t,n){var r=n||new d;r.clear();if(e<t){for(var i=e;i<=t;i++)r.vertices.push(this.vertices[i])}else{for(var i=0;i<=t;i++)r.vertices.push(this.vertices[i]);for(var i=e;i<this.vertices.length;i++)r.vertices.push(this.vertices[i])}return r};d.prototype.getCutEdges=function(){var e=[],t=[],n=[],r=new d;var i=Number.MAX_VALUE;for(var s=0;s<this.vertices.length;++s){if(this.isReflex(s)){for(var o=0;o<this.vertices.length;++o){if(this.canSee(s,o)){t=this.copy(s,o,r).getCutEdges();n=this.copy(o,s,r).getCutEdges();for(var u=0;u<n.length;u++)t.push(n[u]);if(t.length<i){e=t;i=t.length;e.push([this.at(s),this.at(o)])}}}}}return e};d.prototype.decomp=function(){var e=this.getCutEdges();if(e.length>0)return this.slice(e);else return[this]};d.prototype.slice=function(e){if(e.length==0)return[this];if(e instanceof Array&&e.length&&e[0]instanceof Array&&e[0].length==2&&e[0][0]instanceof Array){var t=[this];for(var n=0;n<e.length;n++){var r=e[n];for(var i=0;i<t.length;i++){var s=t[i];var o=s.slice(r);if(o){t.splice(i,1);t.push(o[0],o[1]);break}}}return t}else{var r=e;var n=this.vertices.indexOf(r[0]);var i=this.vertices.indexOf(r[1]);if(n!=-1&&i!=-1){return[this.copy(n,i),this.copy(i,n)]}else{return false}}};d.prototype.isSimple=function(){var e=this.vertices;for(var t=0;t<e.length-1;t++){for(var n=0;n<t-1;n++){if(c.segmentsIntersect(e[t],e[t+1],e[n],e[n+1])){return false}}}for(var t=1;t<e.length-2;t++){if(c.segmentsIntersect(e[0],e[e.length-1],e[t],e[t+1])){return false}}return true};d.prototype.quickDecomp=function(e,t,n,r,i,s){i=i||100;s=s||0;r=r||25;e=typeof e!="undefined"?e:[];t=t||[];n=n||[];var o=[0,0],u=[0,0],a=[0,0];var f=0,l=0,c=0,p=0;var v=0,m=0,y=0;var b=new d,w=new d;var E=this,S=this.vertices;if(S.length<3)return e;s++;if(s>i){console.warn("quickDecomp: max level ("+i+") reached.");return e}for(var x=0;x<this.vertices.length;++x){if(E.isReflex(x)){t.push(E.vertices[x]);f=l=Number.MAX_VALUE;for(var T=0;T<this.vertices.length;++T){if(h.left(E.at(x-1),E.at(x),E.at(T))&&h.rightOn(E.at(x-1),E.at(x),E.at(T-1))){a=g(E.at(x-1),E.at(x),E.at(T),E.at(T-1));if(h.right(E.at(x+1),E.at(x),a)){c=h.sqdist(E.vertices[x],a);if(c<l){l=c;u=a;m=T}}}if(h.left(E.at(x+1),E.at(x),E.at(T+1))&&h.rightOn(E.at(x+1),E.at(x),E.at(T))){a=g(E.at(x+1),E.at(x),E.at(T),E.at(T+1));if(h.left(E.at(x-1),E.at(x),a)){c=h.sqdist(E.vertices[x],a);if(c<f){f=c;o=a;v=T}}}}if(m==(v+1)%this.vertices.length){a[0]=(u[0]+o[0])/2;a[1]=(u[1]+o[1])/2;n.push(a);if(x<v){b.append(E,x,v+1);b.vertices.push(a);w.vertices.push(a);if(m!=0){w.append(E,m,E.vertices.length)}w.append(E,0,x+1)}else{if(x!=0){b.append(E,x,E.vertices.length)}b.append(E,0,v+1);b.vertices.push(a);w.vertices.push(a);w.append(E,m,x+1)}}else{if(m>v){v+=this.vertices.length}p=Number.MAX_VALUE;if(v<m){return e}for(var T=m;T<=v;++T){if(h.leftOn(E.at(x-1),E.at(x),E.at(T))&&h.rightOn(E.at(x+1),E.at(x),E.at(T))){c=h.sqdist(E.at(x),E.at(T));if(c<p){p=c;y=T%this.vertices.length}}}if(x<y){b.append(E,x,y+1);if(y!=0){w.append(E,y,S.length)}w.append(E,0,x+1)}else{if(x!=0){b.append(E,x,S.length)}b.append(E,0,y+1);w.append(E,y,x+1)}}if(b.vertices.length<w.vertices.length){b.quickDecomp(e,t,n,r,i,s);w.quickDecomp(e,t,n,r,i,s)}else{w.quickDecomp(e,t,n,r,i,s);b.quickDecomp(e,t,n,r,i,s)}return e}}e.push(this);return e};d.prototype.removeCollinearPoints=function(e){var t=0;for(var n=this.vertices.length-1;this.vertices.length>3&&n>=0;--n){if(h.collinear(this.at(n-1),this.at(n),this.at(n+1),e)){this.vertices.splice(n%this.vertices.length,1);n--;t++}}return t}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/poly-decomp/src/Polygon.js","/../node_modules/poly-decomp/src")},{"./Line":5,"./Point":6,"./Scalar":8,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],8:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(){}t.exports=l;l.eq=function(e,t,n){n=n||0;return Math.abs(e-t)<n}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/poly-decomp/src/Scalar.js","/../node_modules/poly-decomp/src")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],9:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){t.exports={Polygon:e("./Polygon"),Point:e("./Point")}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/poly-decomp/src/index.js","/../node_modules/poly-decomp/src")},{"./Point":6,"./Polygon":7,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],10:[function(e,t,n){t.exports={name:"p2",version:"0.6.0",description:"A JavaScript 2D physics engine.",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["p2.js","p2","physics","engine","2d"],main:"./src/p2.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/p2.js.git"},bugs:{url:"https://github.com/schteppe/p2.js/issues"},licenses:[{type:"MIT"}],devDependencies:{grunt:"~0.4.0","grunt-contrib-jshint":"~0.9.2","grunt-contrib-nodeunit":"~0.1.2","grunt-contrib-uglify":"~0.4.0","grunt-contrib-watch":"~0.5.0","grunt-browserify":"~2.0.1","grunt-contrib-concat":"^0.4.0"},dependencies:{"poly-decomp":"0.1.0"}}},{}],11:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e){this.lowerBound=c.create();if(e&&e.lowerBound){c.copy(this.lowerBound,e.lowerBound)}this.upperBound=c.create();if(e&&e.upperBound){c.copy(this.upperBound,e.upperBound)}}var c=e("../math/vec2"),h=e("../utils/Utils");t.exports=p;var d=c.create();p.prototype.setFromPoints=function(e,t,n,r){var i=this.lowerBound,s=this.upperBound;if(typeof n!=="number"){n=0}if(n!==0){c.rotate(i,e[0],n)}else{c.copy(i,e[0])}c.copy(s,i);var o=Math.cos(n),u=Math.sin(n);for(var a=1;a<e.length;a++){var f=e[a];if(n!==0){var l=f[0],h=f[1];d[0]=o*l-u*h;d[1]=u*l+o*h;f=d}for(var p=0;p<2;p++){if(f[p]>s[p]){s[p]=f[p]}if(f[p]<i[p]){i[p]=f[p]}}}if(t){c.add(this.lowerBound,this.lowerBound,t);c.add(this.upperBound,this.upperBound,t)}if(r){this.lowerBound[0]-=r;this.lowerBound[1]-=r;this.upperBound[0]+=r;this.upperBound[1]+=r}};p.prototype.copy=function(e){c.copy(this.lowerBound,e.lowerBound);c.copy(this.upperBound,e.upperBound)};p.prototype.extend=function(e){var t=2;while(t--){var n=e.lowerBound[t];if(this.lowerBound[t]>n){this.lowerBound[t]=n}var r=e.upperBound[t];if(this.upperBound[t]<r){this.upperBound[t]=r}}};p.prototype.overlaps=function(e){var t=this.lowerBound,n=this.upperBound,r=e.lowerBound,i=e.upperBound;return(r[0]<=n[0]&&n[0]<=i[0]||t[0]<=i[0]&&i[0]<=n[0])&&(r[1]<=n[1]&&n[1]<=i[1]||t[1]<=i[1]&&i[1]<=n[1])}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/collision/AABB.js","/collision")},{"../math/vec2":33,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],12:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e){this.type=e;this.result=[];this.world=null;this.boundingVolumeType=p.AABB}var c=e("../math/vec2");var h=e("../objects/Body");t.exports=p;p.AABB=1;p.BOUNDING_CIRCLE=2;p.prototype.setWorld=function(e){this.world=e};p.prototype.getCollisionPairs=function(e){throw new Error("getCollisionPairs must be implemented in a subclass!")};var d=c.create();p.boundingRadiusCheck=function(e,t){c.sub(d,e.position,t.position);var n=c.squaredLength(d),r=e.boundingRadius+t.boundingRadius;return n<=r*r};p.aabbCheck=function(e,t){if(e.aabbNeedsUpdate){e.updateAABB()}if(t.aabbNeedsUpdate){t.updateAABB()}return e.aabb.overlaps(t.aabb)};p.prototype.boundingVolumeCheck=function(e,t){var n;switch(this.boundingVolumeType){case p.BOUNDING_CIRCLE:n=p.boundingRadiusCheck(e,t);break;case p.AABB:n=p.aabbCheck(e,t);break;default:throw new Error("Bounding volume type not recognized: "+this.boundingVolumeType)}return n};p.canCollide=function(e,t){if(e.type===h.STATIC&&t.type===h.STATIC){return false}if(e.type===h.KINEMATIC&&t.type===h.STATIC||e.type===h.STATIC&&t.type===h.KINEMATIC){return false}if(e.type===h.KINEMATIC&&t.type===h.KINEMATIC){return false}if(e.sleepState===h.SLEEPING&&t.sleepState===h.SLEEPING){return false}if(e.sleepState===h.SLEEPING&&t.type===h.STATIC||t.sleepState===h.SLEEPING&&e.type===h.STATIC){return false}return true};p.NAIVE=1;p.SAP=2}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/collision/Broadphase.js","/collision")},{"../math/vec2":33,"../objects/Body":34,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],13:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function g(e){d.apply(this);e=m.defaults(e,{xmin:-100,xmax:100,ymin:-100,ymax:100,nx:10,ny:10});this.xmin=e.xmin;this.ymin=e.ymin;this.xmax=e.xmax;this.ymax=e.ymax;this.nx=e.nx;this.ny=e.ny;this.binsizeX=(this.xmax-this.xmin)/this.nx;this.binsizeY=(this.ymax-this.ymin)/this.ny}var c=e("../shapes/Circle"),h=e("../shapes/Plane"),p=e("../shapes/Particle"),d=e("../collision/Broadphase"),v=e("../math/vec2"),m=e("../utils/Utils");t.exports=g;g.prototype=new d;g.prototype.getCollisionPairs=function(e){var t=[],n=e.bodies,r=n.length,i=this.binsizeX,s=this.binsizeY,o=this.nx,u=this.ny,a=this.xmin,f=this.ymin,l=this.xmax,c=this.ymax;var h=[],p=o*u;for(var v=0;v<p;v++){h.push([])}var m=o/(l-a);var g=u/(c-f);for(var v=0;v!==r;v++){var y=n[v];var b=y.aabb;var w=Math.max(b.lowerBound[0],a);var E=Math.max(b.lowerBound[1],f);var S=Math.min(b.upperBound[0],l);var x=Math.min(b.upperBound[1],c);var T=Math.floor(m*(w-a));var N=Math.floor(g*(E-f));var C=Math.floor(m*(S-a));var k=Math.floor(g*(x-f));for(var L=T;L<=C;L++){for(var A=N;A<=k;A++){var O=L;var M=A;var _=O*(u-1)+M;if(_>=0&&_<p){h[_].push(y)}}}}for(var v=0;v!==p;v++){var D=h[v];for(var L=0,P=D.length;L!==P;L++){var y=D[L];for(var A=0;A!==L;A++){var H=D[A];if(d.canCollide(y,H)&&this.boundingVolumeCheck(y,H)){t.push(y,H)}}}}return t}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/collision/GridBroadphase.js","/collision")},{"../collision/Broadphase":12,"../math/vec2":33,"../shapes/Circle":40,"../shapes/Particle":44,"../shapes/Plane":45,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],14:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function g(){v.call(this,v.NAIVE)}var c=e("../shapes/Circle"),h=e("../shapes/Plane"),p=e("../shapes/Shape"),d=e("../shapes/Particle"),v=e("../collision/Broadphase"),m=e("../math/vec2");t.exports=g;g.prototype=new v;g.prototype.getCollisionPairs=function(e){var t=e.bodies,n=this.result;n.length=0;for(var r=0,i=t.length;r!==i;r++){var s=t[r];for(var o=0;o<r;o++){var u=t[o];if(v.canCollide(s,u)&&this.boundingVolumeCheck(s,u)){n.push(s,u)}}}return n}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/collision/NaiveBroadphase.js","/collision")},{"../collision/Broadphase":12,"../math/vec2":33,"../shapes/Circle":40,"../shapes/Particle":44,"../shapes/Plane":45,"../shapes/Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],15:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function X(){this.contactEquations=[];this.frictionEquations=[];this.enableFriction=true;this.slipForce=10;this.frictionCoefficient=.3;this.surfaceVelocity=0;this.reuseObjects=true;this.reusableContactEquations=[];this.reusableFrictionEquations=[];this.restitution=0;this.stiffness=g.DEFAULT_STIFFNESS;this.relaxation=g.DEFAULT_RELAXATION;this.frictionStiffness=g.DEFAULT_STIFFNESS;this.frictionRelaxation=g.DEFAULT_RELAXATION;this.enableFrictionReduction=true;this.collidingBodiesLastStep=new m;this.contactSkinSize=.01}function V(e,t){c.set(e.vertices[0],-t.length*.5,-t.radius);c.set(e.vertices[1],t.length*.5,-t.radius);c.set(e.vertices[2],t.length*.5,t.radius);c.set(e.vertices[3],-t.length*.5,t.radius)}function nt(e,t,n,r){var i=Y,s=Z,o=et,u=tt,a=e,f=t.vertices,l=null;for(var d=0;d!==f.length+1;d++){var v=f[d%f.length],m=f[(d+1)%f.length];c.rotate(i,v,r);c.rotate(s,m,r);p(i,i,n);p(s,s,n);h(o,i,a);h(u,s,a);var g=c.crossLength(o,u);if(l===null){l=g}if(g*l<=0){return false}l=g}return true}var c=e("../math/vec2"),h=c.sub,p=c.add,d=c.dot,v=e("../utils/Utils"),m=e("../utils/TupleDictionary"),g=e("../equations/Equation"),y=e("../equations/ContactEquation"),b=e("../equations/FrictionEquation"),w=e("../shapes/Circle"),E=e("../shapes/Convex"),S=e("../shapes/Shape"),x=e("../objects/Body"),T=e("../shapes/Rectangle");t.exports=X;var N=c.fromValues(0,1);var C=c.fromValues(0,0),k=c.fromValues(0,0),L=c.fromValues(0,0),A=c.fromValues(0,0),O=c.fromValues(0,0),M=c.fromValues(0,0),_=c.fromValues(0,0),D=c.fromValues(0,0),P=c.fromValues(0,0),H=c.fromValues(0,0),B=c.fromValues(0,0),j=c.fromValues(0,0),F=c.fromValues(0,0),I=c.fromValues(0,0),q=c.fromValues(0,0),R=c.fromValues(0,0),U=c.fromValues(0,0),z=c.fromValues(0,0),W=[];X.prototype.collidedLastStep=function(e,t){var n=e.id|0,r=t.id|0;return!!this.collidingBodiesLastStep.get(n,r)};X.prototype.reset=function(){this.collidingBodiesLastStep.reset();var e=this.contactEquations;var t=e.length;while(t--){var n=e[t],r=n.bodyA.id,i=n.bodyB.id;this.collidingBodiesLastStep.set(r,i,true)}if(this.reuseObjects){var s=this.contactEquations,o=this.frictionEquations,u=this.reusableFrictionEquations,a=this.reusableContactEquations;v.appendArray(a,s);v.appendArray(u,o)}this.contactEquations.length=this.frictionEquations.length=0};X.prototype.createContactEquation=function(e,t,n,r){var i=this.reusableContactEquations.length?this.reusableContactEquations.pop():new y(e,t);i.bodyA=e;i.bodyB=t;i.shapeA=n;i.shapeB=r;i.restitution=this.restitution;i.firstImpact=!this.collidedLastStep(e,t);i.stiffness=this.stiffness;i.relaxation=this.relaxation;i.needsUpdate=true;i.enabled=true;i.offset=this.contactSkinSize;return i};X.prototype.createFrictionEquation=function(e,t,n,r){var i=this.reusableFrictionEquations.length?this.reusableFrictionEquations.pop():new b(e,t);i.bodyA=e;i.bodyB=t;i.shapeA=n;i.shapeB=r;i.setSlipForce(this.slipForce);i.frictionCoefficient=this.frictionCoefficient;i.relativeVelocity=this.surfaceVelocity;i.enabled=true;i.needsUpdate=true;i.stiffness=this.frictionStiffness;i.relaxation=this.frictionRelaxation;i.contactEquations.length=0;return i};X.prototype.createFrictionFromContact=function(e){var t=this.createFrictionEquation(e.bodyA,e.bodyB,e.shapeA,e.shapeB);c.copy(t.contactPointA,e.contactPointA);c.copy(t.contactPointB,e.contactPointB);c.rotate90cw(t.t,e.normalA);t.contactEquations.push(e);return t};X.prototype.createFrictionFromAverage=function(e){if(!e){throw new Error("numContacts == 0!")}var t=this.contactEquations[this.contactEquations.length-1];var n=this.createFrictionEquation(t.bodyA,t.bodyB,t.shapeA,t.shapeB);var r=t.bodyA;var i=t.bodyB;c.set(n.contactPointA,0,0);c.set(n.contactPointB,0,0);c.set(n.t,0,0);for(var s=0;s!==e;s++){t=this.contactEquations[this.contactEquations.length-1-s];if(t.bodyA===r){c.add(n.t,n.t,t.normalA);c.add(n.contactPointA,n.contactPointA,t.contactPointA);c.add(n.contactPointB,n.contactPointB,t.contactPointB)}else{c.sub(n.t,n.t,t.normalA);c.add(n.contactPointA,n.contactPointA,t.contactPointB);c.add(n.contactPointB,n.contactPointB,t.contactPointA)}n.contactEquations.push(t)}var o=1/e;c.scale(n.contactPointA,n.contactPointA,o);c.scale(n.contactPointB,n.contactPointB,o);c.normalize(n.t,n.t);c.rotate90cw(n.t,n.t);return n};X.prototype[S.LINE|S.CONVEX]=X.prototype.convexLine=function(e,t,n,r,i,s,o,u,a){if(a){return false}else{return 0}};X.prototype[S.LINE|S.RECTANGLE]=X.prototype.lineRectangle=function(e,t,n,r,i,s,o,u,a){if(a){return false}else{return 0}};var $=new T(1,1),J=c.create();X.prototype[S.CAPSULE|S.CONVEX]=X.prototype[S.CAPSULE|S.RECTANGLE]=X.prototype.convexCapsule=function(e,t,n,r,i,s,o,u,a){var f=J;c.set(f,s.length/2,0);c.rotate(f,f,u);c.add(f,f,o);var l=this.circleConvex(i,s,f,u,e,t,n,r,a,s.radius);c.set(f,-s.length/2,0);c.rotate(f,f,u);c.add(f,f,o);var h=this.circleConvex(i,s,f,u,e,t,n,r,a,s.radius);if(a&&(l||h)){return true}var p=$;V(p,s);var d=this.convexConvex(e,t,n,r,i,p,o,u,a);return d+l+h};X.prototype[S.CAPSULE|S.LINE]=X.prototype.lineCapsule=function(e,t,n,r,i,s,o,u,a){if(a){return false}else{return 0}};var K=c.create();var Q=c.create();var G=new T(1,1);X.prototype[S.CAPSULE|S.CAPSULE]=X.prototype.capsuleCapsule=function(e,t,n,r,i,s,o,u,a){var f;var l=K,h=Q;var p=0;for(var d=0;d<2;d++){c.set(l,(d===0?-1:1)*t.length/2,0);c.rotate(l,l,r);c.add(l,l,n);for(var v=0;v<2;v++){c.set(h,(v===0?-1:1)*s.length/2,0);c.rotate(h,h,u);c.add(h,h,o);if(this.enableFrictionReduction){f=this.enableFriction;this.enableFriction=false}var m=this.circleCircle(e,t,l,r,i,s,h,u,a,t.radius,s.radius);if(this.enableFrictionReduction){this.enableFriction=f}if(a&&m){return true}p+=m}}if(this.enableFrictionReduction){f=this.enableFriction;this.enableFriction=false}var g=G;V(g,t);var y=this.convexCapsule(e,g,n,r,i,s,o,u,a);if(this.enableFrictionReduction){this.enableFriction=f}if(a&&y){return true}p+=y;if(this.enableFrictionReduction){var f=this.enableFriction;this.enableFriction=false}V(g,s);var b=this.convexCapsule(i,g,o,u,e,t,n,r,a);if(this.enableFrictionReduction){this.enableFriction=f}if(a&&b){return true}p+=b;if(this.enableFrictionReduction){if(p&&this.enableFriction){this.frictionEquations.push(this.createFrictionFromAverage(p))}}return p};X.prototype[S.LINE|S.LINE]=X.prototype.lineLine=function(e,t,n,r,i,s,o,u,a){if(a){return false}else{return 0}};X.prototype[S.PLANE|S.LINE]=X.prototype.planeLine=function(e,t,n,r,i,s,o,u,a){var f=C,l=k,v=L,m=A,g=O,y=M,b=_,w=D,E=P,S=W,x=0;c.set(f,-s.length/2,0);c.set(l,s.length/2,0);c.rotate(v,f,u);c.rotate(m,l,u);p(v,v,o);p(m,m,o);c.copy(f,v);c.copy(l,m);h(g,l,f);c.normalize(y,g);c.rotate90cw(E,y);c.rotate(w,N,r);S[0]=f;S[1]=l;for(var T=0;T<S.length;T++){var H=S[T];h(b,H,n);var B=d(b,w);if(B<0){if(a){return true}var j=this.createContactEquation(e,i,t,s);x++;c.copy(j.normalA,w);c.normalize(j.normalA,j.normalA);c.scale(b,w,B);h(j.contactPointA,H,b);h(j.contactPointA,j.contactPointA,e.position);h(j.contactPointB,H,o);p(j.contactPointB,j.contactPointB,o);h(j.contactPointB,j.contactPointB,i.position);this.contactEquations.push(j);if(!this.enableFrictionReduction){if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(j))}}}}if(a){return false}if(!this.enableFrictionReduction){if(x&&this.enableFriction){this.frictionEquations.push(this.createFrictionFromAverage(x))}}return x};X.prototype[S.PARTICLE|S.CAPSULE]=X.prototype.particleCapsule=function(e,t,n,r,i,s,o,u,a){return this.circleLine(e,t,n,r,i,s,o,u,a,s.radius,0)};X.prototype[S.CIRCLE|S.LINE]=X.prototype.circleLine=function(e,t,n,r,i,s,o,u,a,f,l){var f=f||0,l=typeof l!=="undefined"?l:t.radius,v=C,m=k,g=L,y=A,b=O,w=M,E=_,S=D,x=P,T=H,N=B,q=j,R=F,U=I,z=W;c.set(S,-s.length/2,0);c.set(x,s.length/2,0);c.rotate(T,S,u);c.rotate(N,x,u);p(T,T,o);p(N,N,o);c.copy(S,T);c.copy(x,N);h(w,x,S);c.normalize(E,w);c.rotate90cw(b,E);h(q,n,S);var X=d(q,b);h(y,S,o);h(R,n,o);var V=l+f;if(Math.abs(X)<V){c.scale(v,b,X);h(g,n,v);c.scale(m,b,d(b,R));c.normalize(m,m);c.scale(m,m,f);p(g,g,m);var $=d(E,g);var J=d(E,S);var K=d(E,x);if($>J&&$<K){if(a){return true}var Q=this.createContactEquation(e,i,t,s);c.scale(Q.normalA,v,-1);c.normalize(Q.normalA,Q.normalA);c.scale(Q.contactPointA,Q.normalA,l);p(Q.contactPointA,Q.contactPointA,n);h(Q.contactPointA,Q.contactPointA,e.position);h(Q.contactPointB,g,o);p(Q.contactPointB,Q.contactPointB,o);h(Q.contactPointB,Q.contactPointB,i.position);this.contactEquations.push(Q);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(Q))}return 1}}z[0]=S;z[1]=x;for(var G=0;G<z.length;G++){var Y=z[G];h(q,Y,n);if(c.squaredLength(q)<Math.pow(V,2)){if(a){return true}var Q=this.createContactEquation(e,i,t,s);c.copy(Q.normalA,q);c.normalize(Q.normalA,Q.normalA);c.scale(Q.contactPointA,Q.normalA,l);p(Q.contactPointA,Q.contactPointA,n);h(Q.contactPointA,Q.contactPointA,e.position);h(Q.contactPointB,Y,o);c.scale(U,Q.normalA,-f);p(Q.contactPointB,Q.contactPointB,U);p(Q.contactPointB,Q.contactPointB,o);h(Q.contactPointB,Q.contactPointB,i.position);this.contactEquations.push(Q);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(Q))}return 1}}return 0};X.prototype[S.CIRCLE|S.CAPSULE]=X.prototype.circleCapsule=function(e,t,n,r,i,s,o,u,a){return this.circleLine(e,t,n,r,i,s,o,u,a,s.radius)};X.prototype[S.CIRCLE|S.CONVEX]=X.prototype[S.CIRCLE|S.RECTANGLE]=X.prototype.circleConvex=function(e,t,n,r,i,s,o,u,a,f){var f=typeof f==="number"?f:t.radius;var l=C,d=k,v=L,m=A,g=O,y=M,b=_,w=D,E=P,S=H,x=B,T=-1,N=null,U=j,z=F,W=I,X=q,V=R,$=false,J=Number.MAX_VALUE;var K=0;var Q=s.vertices;for(var G=0;G!==Q.length+1;G++){var Y=Q[G%Q.length],Z=Q[(G+1)%Q.length];c.rotate(l,Y,u);c.rotate(d,Z,u);p(l,l,o);p(d,d,o);h(v,d,l);c.normalize(m,v);c.rotate90cw(g,m);c.scale(W,g,-t.radius);p(W,W,n);if(nt(W,s,o,u)){c.sub(X,l,W);var et=Math.abs(c.dot(X,g));if(et<J){c.copy(V,W);J=et;c.scale(z,g,et);c.add(z,z,W);$=true}}}if($){if(a){return true}var tt=this.createContactEquation(e,i,t,s);c.sub(tt.normalA,V,n);c.normalize(tt.normalA,tt.normalA);c.scale(tt.contactPointA,tt.normalA,f);p(tt.contactPointA,tt.contactPointA,n);h(tt.contactPointA,tt.contactPointA,e.position);h(tt.contactPointB,z,o);p(tt.contactPointB,tt.contactPointB,o);h(tt.contactPointB,tt.contactPointB,i.position);this.contactEquations.push(tt);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(tt))}return 1}if(f>0){for(var G=0;G<Q.length;G++){var rt=Q[G];c.rotate(x,rt,u);p(x,x,o);h(S,x,n);if(c.squaredLength(S)<Math.pow(f,2)){if(a){return true}var tt=this.createContactEquation(e,i,t,s);c.copy(tt.normalA,S);c.normalize(tt.normalA,tt.normalA);c.scale(tt.contactPointA,tt.normalA,f);p(tt.contactPointA,tt.contactPointA,n);h(tt.contactPointA,tt.contactPointA,e.position);h(tt.contactPointB,x,o);p(tt.contactPointB,tt.contactPointB,o);h(tt.contactPointB,tt.contactPointB,i.position);this.contactEquations.push(tt);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(tt))}return 1}}}return 0};var Y=c.create(),Z=c.create(),et=c.create(),tt=c.create();X.prototype[S.PARTICLE|S.CONVEX]=X.prototype[S.PARTICLE|S.RECTANGLE]=X.prototype.particleConvex=function(e,t,n,r,i,s,o,u,a){var f=C,l=k,v=L,m=A,g=O,y=M,b=_,w=D,E=P,S=H,x=B,T=-1,N=null,W=j,X=F,V=I,$=q,J=R,K=U,Q=z,G=Number.MAX_VALUE;var Y=0,Z=false,et=s.vertices;if(!nt(n,s,o,u)){return 0}if(a){return true}var tt=null;for(var rt=0;rt!==et.length+1;rt++){var it=et[rt%et.length],st=et[(rt+1)%et.length];c.rotate(f,it,u);c.rotate(l,st,u);p(f,f,o);p(l,l,o);h(v,l,f);c.normalize(m,v);c.rotate90cw(g,m);h(S,n,f);var ot=d(S,g);h(y,f,o);h(b,n,o);c.sub(K,f,n);var ut=Math.abs(c.dot(K,g));if(ut<G){G=ut;c.scale(X,g,ut);c.add(X,X,n);c.copy(Q,g);Z=true}}if(Z){var at=this.createContactEquation(e,i,t,s);c.scale(at.normalA,Q,-1);c.normalize(at.normalA,at.normalA);c.set(at.contactPointA,0,0);p(at.contactPointA,at.contactPointA,n);h(at.contactPointA,at.contactPointA,e.position);h(at.contactPointB,X,o);p(at.contactPointB,at.contactPointB,o);h(at.contactPointB,at.contactPointB,i.position);this.contactEquations.push(at);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(at))}return 1}return 0};X.prototype[S.CIRCLE]=X.prototype.circleCircle=function(e,t,n,r,i,s,o,u,a,f,l){var d=C,f=f||t.radius,l=l||s.radius;h(d,n,o);var v=f+l;if(c.squaredLength(d)>Math.pow(v,2)){return 0}if(a){return true}var m=this.createContactEquation(e,i,t,s);h(m.normalA,o,n);c.normalize(m.normalA,m.normalA);c.scale(m.contactPointA,m.normalA,f);c.scale(m.contactPointB,m.normalA,-l);p(m.contactPointA,m.contactPointA,n);h(m.contactPointA,m.contactPointA,e.position);p(m.contactPointB,m.contactPointB,o);h(m.contactPointB,m.contactPointB,i.position);this.contactEquations.push(m);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(m))}return 1};X.prototype[S.PLANE|S.CONVEX]=X.prototype[S.PLANE|S.RECTANGLE]=X.prototype.planeConvex=function(e,t,n,r,i,s,o,u,a){var f=C,l=k,v=L;var m=0;c.rotate(l,N,r);for(var g=0;g!==s.vertices.length;g++){var y=s.vertices[g];c.rotate(f,y,u);p(f,f,o);h(v,f,n);if(d(v,l)<=0){if(a){return true}m++;var b=this.createContactEquation(e,i,t,s);h(v,f,n);c.copy(b.normalA,l);var w=d(v,b.normalA);c.scale(v,b.normalA,w);h(b.contactPointB,f,i.position);h(b.contactPointA,f,v);h(b.contactPointA,b.contactPointA,e.position);this.contactEquations.push(b);if(!this.enableFrictionReduction){if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(b))}}}}if(this.enableFrictionReduction){if(this.enableFriction&&m){this.frictionEquations.push(this.createFrictionFromAverage(m))}}return m};X.prototype[S.PARTICLE|S.PLANE]=X.prototype.particlePlane=function(e,t,n,r,i,s,o,u,a){var f=C,l=k;u=u||0;h(f,n,o);c.rotate(l,N,u);var p=d(f,l);if(p>0){return 0}if(a){return true}var v=this.createContactEquation(i,e,s,t);c.copy(v.normalA,l);c.scale(f,v.normalA,p);h(v.contactPointA,n,f);h(v.contactPointA,v.contactPointA,i.position);h(v.contactPointB,n,e.position);this.contactEquations.push(v);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(v))}return 1};X.prototype[S.CIRCLE|S.PARTICLE]=X.prototype.circleParticle=function(e,t,n,r,i,s,o,u,a){var f=C;h(f,o,n);if(c.squaredLength(f)>Math.pow(t.radius,2)){return 0}if(a){return true}var l=this.createContactEquation(e,i,t,s);c.copy(l.normalA,f);c.normalize(l.normalA,l.normalA);c.scale(l.contactPointA,l.normalA,t.radius);p(l.contactPointA,l.contactPointA,n);h(l.contactPointA,l.contactPointA,e.position);h(l.contactPointB,o,i.position);this.contactEquations.push(l);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(l))}return 1};var rt=new w(1),it=c.create(),st=c.create(),ot=c.create();X.prototype[S.PLANE|S.CAPSULE]=X.prototype.planeCapsule=function(e,t,n,r,i,s,o,u,a){var f=it,l=st,h=rt,d=ot;c.set(f,-s.length/2,0);c.rotate(f,f,u);p(f,f,o);c.set(l,s.length/2,0);c.rotate(l,l,u);p(l,l,o);h.radius=s.radius;var v;if(this.enableFrictionReduction){v=this.enableFriction;this.enableFriction=false}var m=this.circlePlane(i,h,f,0,e,t,n,r,a),g=this.circlePlane(i,h,l,0,e,t,n,r,a);if(this.enableFrictionReduction){this.enableFriction=v}if(a){return m||g}else{var y=m+g;if(this.enableFrictionReduction){if(y){this.frictionEquations.push(this.createFrictionFromAverage(y))}}return y}};X.prototype[S.CIRCLE|S.PLANE]=X.prototype.circlePlane=function(e,t,n,r,i,s,o,u,a){var f=e,l=t,v=n,m=i,g=s,y=o,b=u;b=b||0;var w=C,E=k,S=L;h(w,v,y);c.rotate(E,N,b);var x=d(E,w);if(x>l.radius){return 0}if(a){return true}var T=this.createContactEquation(m,f,s,t);c.copy(T.normalA,E);c.scale(T.contactPointB,T.normalA,-l.radius);p(T.contactPointB,T.contactPointB,v);h(T.contactPointB,T.contactPointB,f.position);c.scale(S,T.normalA,x);h(T.contactPointA,w,S);p(T.contactPointA,T.contactPointA,y);h(T.contactPointA,T.contactPointA,m.position);this.contactEquations.push(T);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(T))}return 1};X.prototype[S.CONVEX]=X.prototype[S.CONVEX|S.RECTANGLE]=X.prototype[S.RECTANGLE]=X.prototype.convexConvex=function(e,t,n,r,i,s,o,u,a,f){var l=C,v=k,m=L,g=A,y=O,b=M,w=_,E=D,S=P,x=0,f=typeof f==="number"?f:0;var T=X.findSeparatingAxis(t,n,r,s,o,u,l);if(!T){return 0}h(E,o,n);if(d(l,E)>0){c.scale(l,l,-1)}var N=X.getClosestEdge(t,r,l,true),H=X.getClosestEdge(s,u,l);if(N===-1||H===-1){return 0}for(var B=0;B<2;B++){var j=N,F=H,I=t,q=s,R=n,U=o,z=r,W=u,V=e,$=i;if(B===0){var J;J=j;j=F;F=J;J=I;I=q;q=J;J=R;R=U;U=J;J=z;z=W;W=J;J=V;V=$;$=J}for(var K=F;K<F+2;K++){var Q=q.vertices[(K+q.vertices.length)%q.vertices.length];c.rotate(v,Q,W);p(v,v,U);var G=0;for(var Y=j-1;Y<j+2;Y++){var Z=I.vertices[(Y+I.vertices.length)%I.vertices.length],et=I.vertices[(Y+1+I.vertices.length)%I.vertices.length];c.rotate(m,Z,z);c.rotate(g,et,z);p(m,m,R);p(g,g,R);h(y,g,m);c.rotate90cw(S,y);c.normalize(S,S);h(E,v,m);var tt=d(S,E);if(Y===j&&tt<=f||Y!==j&&tt<=0){G++}}if(G>=3){if(a){return true}var nt=this.createContactEquation(V,$,I,q);x++;var Z=I.vertices[j%I.vertices.length],et=I.vertices[(j+1)%I.vertices.length];c.rotate(m,Z,z);c.rotate(g,et,z);p(m,m,R);p(g,g,R);h(y,g,m);c.rotate90cw(nt.normalA,y);c.normalize(nt.normalA,nt.normalA);h(E,v,m);var tt=d(nt.normalA,E);c.scale(w,nt.normalA,tt);h(nt.contactPointA,v,R);h(nt.contactPointA,nt.contactPointA,w);p(nt.contactPointA,nt.contactPointA,R);h(nt.contactPointA,nt.contactPointA,V.position);h(nt.contactPointB,v,U);p(nt.contactPointB,nt.contactPointB,U);h(nt.contactPointB,nt.contactPointB,$.position);this.contactEquations.push(nt);if(!this.enableFrictionReduction){if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(nt))}}}}}if(this.enableFrictionReduction){if(this.enableFriction&&x){this.frictionEquations.push(this.createFrictionFromAverage(x))}}return x};var ut=c.fromValues(0,0);X.projectConvexOntoAxis=function(e,t,n,r,i){var s=null,o=null,u,a,f=ut;c.rotate(f,r,-n);for(var l=0;l<e.vertices.length;l++){u=e.vertices[l];a=d(u,f);if(s===null||a>s){s=a}if(o===null||a<o){o=a}}if(o>s){var h=o;o=s;s=h}var p=d(t,r);c.set(i,o+p,s+p)};var at=c.fromValues(0,0),ft=c.fromValues(0,0),lt=c.fromValues(0,0),ct=c.fromValues(0,0),ht=c.fromValues(0,0),pt=c.fromValues(0,0);X.findSeparatingAxis=function(e,t,n,r,i,s,o){var u=null,a=false,f=false,l=at,p=ft,d=lt,v=ct,m=ht,g=pt;if(e instanceof T&&r instanceof T){for(var y=0;y!==2;y++){var b=e,w=n;if(y===1){b=r;w=s}for(var E=0;E!==2;E++){if(E===0){c.set(v,0,1)}else if(E===1){c.set(v,1,0)}if(w!==0){c.rotate(v,v,w)}X.projectConvexOntoAxis(e,t,n,v,m);X.projectConvexOntoAxis(r,i,s,v,g);var S=m,x=g,N=false;if(m[0]>g[0]){x=m;S=g;N=true}var C=x[0]-S[1];a=C<=0;if(u===null||C>u){c.copy(o,v);u=C;f=a}}}}else{for(var y=0;y!==2;y++){var b=e,w=n;if(y===1){b=r;w=s}for(var E=0;E!==b.vertices.length;E++){c.rotate(p,b.vertices[E],w);c.rotate(d,b.vertices[(E+1)%b.vertices.length],w);h(l,d,p);c.rotate90cw(v,l);c.normalize(v,v);X.projectConvexOntoAxis(e,t,n,v,m);X.projectConvexOntoAxis(r,i,s,v,g);var S=m,x=g,N=false;if(m[0]>g[0]){x=m;S=g;N=true}var C=x[0]-S[1];a=C<=0;if(u===null||C>u){c.copy(o,v);u=C;f=a}}}}return f};var dt=c.fromValues(0,0),vt=c.fromValues(0,0),mt=c.fromValues(0,0);X.getClosestEdge=function(e,t,n,r){var i=dt,s=vt,o=mt;c.rotate(i,n,-t);if(r){c.scale(i,i,-1)}var u=-1,a=e.vertices.length,f=-1;for(var l=0;l!==a;l++){h(s,e.vertices[(l+1)%a],e.vertices[l%a]);c.rotate90cw(o,s);c.normalize(o,o);var p=d(o,i);if(u===-1||p>f){u=l%a;f=p}}return u};var gt=c.create(),yt=c.create(),bt=c.create(),wt=c.create(),Et=c.create(),St=c.create(),xt=c.create();X.prototype[S.CIRCLE|S.HEIGHTFIELD]=X.prototype.circleHeightfield=function(e,t,n,r,i,s,o,u,a,f){var l=s.data,f=f||t.radius,d=s.elementWidth,v=yt,m=gt,g=Et,y=xt,b=St,w=bt,E=wt;var S=Math.floor((n[0]-f-o[0])/d),x=Math.ceil((n[0]+f-o[0])/d);if(S<0){S=0}if(x>=l.length){x=l.length-1}var T=l[S],N=l[x];for(var C=S;C<x;C++){if(l[C]<N){N=l[C]}if(l[C]>T){T=l[C]}}if(n[1]-f>T){return a?false:0}if(n[1]+f<N){}var k=false;for(var C=S;C<x;C++){c.set(w,C*d,l[C]);c.set(E,(C+1)*d,l[C+1]);c.add(w,w,o);c.add(E,E,o);c.sub(b,E,w);c.rotate(b,b,Math.PI/2);c.normalize(b,b);c.scale(m,b,-f);c.add(m,m,n);c.sub(v,m,w);var L=c.dot(v,b);if(m[0]>=w[0]&&m[0]<E[0]&&L<=0){if(a){return true}k=true;c.scale(v,b,-L);c.add(g,m,v);c.copy(y,b);var A=this.createContactEquation(i,e,s,t);c.copy(A.normalA,y);c.scale(A.contactPointB,A.normalA,-f);p(A.contactPointB,A.contactPointB,n);h(A.contactPointB,A.contactPointB,e.position);c.copy(A.contactPointA,g);c.sub(A.contactPointA,A.contactPointA,i.position);this.contactEquations.push(A);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(A))}}}k=false;if(f>0){for(var C=S;C<=x;C++){c.set(w,C*d,l[C]);c.add(w,w,o);c.sub(v,n,w);if(c.squaredLength(v)<Math.pow(f,2)){if(a){return true}k=true;var A=this.createContactEquation(i,e,s,t);c.copy(A.normalA,v);c.normalize(A.normalA,A.normalA);c.scale(A.contactPointB,A.normalA,-f);p(A.contactPointB,A.contactPointB,n);h(A.contactPointB,A.contactPointB,e.position);h(A.contactPointA,w,o);p(A.contactPointA,A.contactPointA,o);h(A.contactPointA,A.contactPointA,i.position);this.contactEquations.push(A);if(this.enableFriction){this.frictionEquations.push(this.createFrictionFromContact(A))}}}}if(k){return 1}return 0};var Tt=c.create(),Nt=c.create(),Ct=c.create(),kt=new E([c.create(),c.create(),c.create(),c.create()]);X.prototype[S.RECTANGLE|S.HEIGHTFIELD]=X.prototype[S.CONVEX|S.HEIGHTFIELD]=X.prototype.convexHeightfield=function(e,t,n,r,i,s,o,u,a){var f=s.data,l=s.elementWidth,h=Tt,p=Nt,d=Ct,v=kt;var m=Math.floor((e.aabb.lowerBound[0]-o[0])/l),g=Math.ceil((e.aabb.upperBound[0]-o[0])/l);if(m<0){m=0}if(g>=f.length){g=f.length-1}var y=f[m],b=f[g];for(var w=m;w<g;w++){if(f[w]<b){b=f[w]}if(f[w]>y){y=f[w]}}if(e.aabb.lowerBound[1]>y){return a?false:0}var E=false;var S=0;for(var w=m;w<g;w++){c.set(h,w*l,f[w]);c.set(p,(w+1)*l,f[w+1]);c.add(h,h,o);c.add(p,p,o);var x=100;c.set(d,(p[0]+h[0])*.5,(p[1]+h[1]-x)*.5);c.sub(v.vertices[0],p,d);c.sub(v.vertices[1],h,d);c.copy(v.vertices[2],v.vertices[1]);c.copy(v.vertices[3],v.vertices[0]);v.vertices[2][1]-=x;v.vertices[3][1]-=x;S+=this.convexConvex(e,t,n,r,i,v,d,0,a)}return S}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/collision/Narrowphase.js","/collision")},{"../equations/ContactEquation":24,"../equations/Equation":25,"../equations/FrictionEquation":26,"../math/vec2":33,"../objects/Body":34,"../shapes/Circle":40,"../shapes/Convex":41,"../shapes/Rectangle":46,"../shapes/Shape":47,"../utils/TupleDictionary":51,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],16:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(){h.call(this,h.SAP);this.axisList=[];this.world=null;this.axisIndex=0;var e=this.axisList;this._addBodyHandler=function(t){e.push(t.body)};this._removeBodyHandler=function(t){var n=e.indexOf(t.body);if(n!==-1){e.splice(n,1)}}}var c=e("../utils/Utils"),h=e("../collision/Broadphase");t.exports=p;p.prototype=new h;p.prototype.setWorld=function(e){this.axisList.length=0;c.appendArray(this.axisList,e.bodies);e.off("addBody",this._addBodyHandler).off("removeBody",this._removeBodyHandler);e.on("addBody",this._addBodyHandler).on("removeBody",this._removeBodyHandler);this.world=e};p.sortAxisList=function(e,t){t=t|0;for(var n=1,r=e.length;n<r;n++){var i=e[n];for(var s=n-1;s>=0;s--){if(e[s].aabb.lowerBound[t]<=i.aabb.lowerBound[t]){break}e[s+1]=e[s]}e[s+1]=i}return e};p.prototype.getCollisionPairs=function(e){var t=this.axisList,n=this.result,r=this.axisIndex;n.length=0;var i=t.length;while(i--){var s=t[i];if(s.aabbNeedsUpdate){s.updateAABB()}}p.sortAxisList(t,r);for(var o=0,u=t.length|0;o!==u;o++){var a=t[o];for(var f=o+1;f<u;f++){var l=t[f];var c=l.aabb.lowerBound[r]<=a.aabb.upperBound[r];if(!c){break}if(h.canCollide(a,l)&&this.boundingVolumeCheck(a,l)){n.push(a,l)}}}return n}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/collision/SAPBroadphase.js","/collision")},{"../collision/Broadphase":12,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],17:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function h(e,t,n,r){this.type=n;r=c.defaults(r,{collideConnected:true,wakeUpBodies:true});this.equations=[];this.bodyA=e;this.bodyB=t;this.collideConnected=r.collideConnected;if(r.wakeUpBodies){if(e){e.wakeUp()}if(t){t.wakeUp()}}}t.exports=h;var c=e("../utils/Utils");h.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")};h.DISTANCE=1;h.GEAR=2;h.LOCK=3;h.PRISMATIC=4;h.REVOLUTE=5;h.prototype.setStiffness=function(e){var t=this.equations;for(var n=0;n!==t.length;n++){var r=t[n];r.stiffness=e;r.needsUpdate=true}};h.prototype.setRelaxation=function(e){var t=this.equations;for(var n=0;n!==t.length;n++){var r=t[n];r.relaxation=e;r.needsUpdate=true}}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constraints/Constraint.js","/constraints")},{"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],18:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function v(e,t,n){n=d.defaults(n,{localAnchorA:[0,0],localAnchorB:[0,0]});c.call(this,e,t,c.DISTANCE,n);this.localAnchorA=p.fromValues(n.localAnchorA[0],n.localAnchorA[1]);this.localAnchorB=p.fromValues(n.localAnchorB[0],n.localAnchorB[1]);var r=this.localAnchorA;var i=this.localAnchorB;this.distance=0;if(typeof n.distance==="number"){this.distance=n.distance}else{var s=p.create(),o=p.create(),u=p.create();p.rotate(s,r,e.angle);p.rotate(o,i,t.angle);p.add(u,t.position,o);p.sub(u,u,s);p.sub(u,u,e.position);this.distance=p.length(u)}var a;if(typeof n.maxForce==="undefined"){a=Number.MAX_VALUE}else{a=n.maxForce}var f=new h(e,t,-a,a);this.equations=[f];this.maxForce=a;var u=p.create();var l=p.create();var v=p.create();var m=this;f.computeGq=function(){var e=this.bodyA,t=this.bodyB,n=e.position,s=t.position;p.rotate(l,r,e.angle);p.rotate(v,i,t.angle);p.add(u,s,v);p.sub(u,u,l);p.sub(u,u,n);return p.length(u)-m.distance};this.setMaxForce(a);this.upperLimitEnabled=false;this.upperLimit=1;this.lowerLimitEnabled=false;this.lowerLimit=0;this.position=0}var c=e("./Constraint"),h=e("../equations/Equation"),p=e("../math/vec2"),d=e("../utils/Utils");t.exports=v;v.prototype=new c;var m=p.create();var g=p.create();var y=p.create();v.prototype.update=function(){var e=this.equations[0],t=this.bodyA,n=this.bodyB,r=this.distance,i=t.position,s=n.position,o=this.equations[0],u=e.G;p.rotate(g,this.localAnchorA,t.angle);p.rotate(y,this.localAnchorB,n.angle);p.add(m,s,y);p.sub(m,m,g);p.sub(m,m,i);this.position=p.length(m);var a=false;if(this.upperLimitEnabled){if(this.position>this.upperLimit){o.maxForce=0;o.minForce=-this.maxForce;this.distance=this.upperLimit;a=true}}if(this.lowerLimitEnabled){if(this.position<this.lowerLimit){o.maxForce=this.maxForce;o.minForce=0;this.distance=this.lowerLimit;a=true}}if((this.lowerLimitEnabled||this.upperLimitEnabled)&&!a){o.enabled=false;return}o.enabled=true;p.normalize(m,m);var f=p.crossLength(g,m),l=p.crossLength(y,m);u[0]=-m[0];u[1]=-m[1];u[2]=-f;u[3]=m[0];u[4]=m[1];u[5]=l};v.prototype.setMaxForce=function(e){var t=this.equations[0];t.minForce=-e;t.maxForce=e};v.prototype.getMaxForce=function(e){var t=this.equations[0];return t.maxForce}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constraints/DistanceConstraint.js","/constraints")},{"../equations/Equation":25,"../math/vec2":33,"../utils/Utils":52,"./Constraint":17,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],19:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function v(e,t,n){n=n||{};c.call(this,e,t,c.GEAR,n);this.ratio=typeof n.ratio==="number"?n.ratio:1;this.angle=typeof n.angle==="number"?n.angle:t.angle-this.ratio*e.angle;n.angle=this.angle;n.ratio=this.ratio;this.equations=[new p(e,t,n)];if(typeof n.maxTorque==="number"){this.setMaxTorque(n.maxTorque)}}var c=e("./Constraint"),h=e("../equations/Equation"),p=e("../equations/AngleLockEquation"),d=e("../math/vec2");t.exports=v;v.prototype=new c;v.prototype.update=function(){var e=this.equations[0];if(e.ratio!==this.ratio){e.setRatio(this.ratio)}e.angle=this.angle};v.prototype.setMaxTorque=function(e){this.equations[0].setMaxTorque(e)};v.prototype.getMaxTorque=function(e){return this.equations[0].maxForce}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constraints/GearConstraint.js","/constraints")},{"../equations/AngleLockEquation":23,"../equations/Equation":25,"../math/vec2":33,"./Constraint":17,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],20:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(e,t,n){n=n||{};c.call(this,e,t,c.LOCK,n);var r=typeof n.maxForce==="undefined"?Number.MAX_VALUE:n.maxForce;var i=n.localAngleB||0;var s=new p(e,t,-r,r),o=new p(e,t,-r,r),u=new p(e,t,-r,r);var a=h.create(),f=h.create(),l=this;s.computeGq=function(){h.rotate(a,l.localOffsetB,e.angle);h.sub(f,t.position,e.position);h.sub(f,f,a);return f[0]};o.computeGq=function(){h.rotate(a,l.localOffsetB,e.angle);h.sub(f,t.position,e.position);h.sub(f,f,a);return f[1]};var d=h.create(),v=h.create();u.computeGq=function(){h.rotate(d,l.localOffsetB,t.angle-l.localAngleB);h.scale(d,d,-1);h.sub(f,e.position,t.position);h.add(f,f,d);h.rotate(v,d,-Math.PI/2);h.normalize(v,v);return h.dot(f,v)};this.localOffsetB=h.create();if(n.localOffsetB){h.copy(this.localOffsetB,n.localOffsetB)}else{h.sub(this.localOffsetB,t.position,e.position);h.rotate(this.localOffsetB,this.localOffsetB,-e.angle)}this.localAngleB=0;if(typeof n.localAngleB==="number"){this.localAngleB=n.localAngleB}else{this.localAngleB=t.angle-e.angle}this.equations.push(s,o,u);this.setMaxForce(r)}var c=e("./Constraint"),h=e("../math/vec2"),p=e("../equations/Equation");t.exports=d;d.prototype=new c;d.prototype.setMaxForce=function(e){var t=this.equations;for(var n=0;n<this.equations.length;n++){t[n].maxForce=e;t[n].minForce=-e}};d.prototype.getMaxForce=function(){return this.equations[0].maxForce};var v=h.create();var m=h.create();var g=h.create();var y=h.fromValues(1,0);var b=h.fromValues(0,1);d.prototype.update=function(){var e=this.equations[0],t=this.equations[1],n=this.equations[2],r=this.bodyA,i=this.bodyB;h.rotate(v,this.localOffsetB,r.angle);h.rotate(m,this.localOffsetB,i.angle-this.localAngleB);h.scale(m,m,-1);h.rotate(g,m,Math.PI/2);h.normalize(g,g);e.G[0]=-1;e.G[1]=0;e.G[2]=-h.crossLength(v,y);e.G[3]=1;t.G[0]=0;t.G[1]=-1;t.G[2]=-h.crossLength(v,b);t.G[4]=1;n.G[0]=-g[0];n.G[1]=-g[1];n.G[3]=g[0];n.G[4]=g[1];n.G[5]=h.crossLength(m,g)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constraints/LockConstraint.js","/constraints")},{"../equations/Equation":25,"../math/vec2":33,"./Constraint":17,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],21:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function m(e,t,n){n=n||{};c.call(this,e,t,c.PRISMATIC,n);var r=d.fromValues(0,0),i=d.fromValues(1,0),s=d.fromValues(0,0);if(n.localAnchorA){d.copy(r,n.localAnchorA)}if(n.localAxisA){d.copy(i,n.localAxisA)}if(n.localAnchorB){d.copy(s,n.localAnchorB)}this.localAnchorA=r;this.localAnchorB=s;this.localAxisA=i;var o=this.maxForce=typeof n.maxForce!=="undefined"?n.maxForce:Number.MAX_VALUE;var u=new p(e,t,-o,o);var a=new d.create,f=new d.create,l=new d.create,m=new d.create;u.computeGq=function(){return d.dot(l,m)};u.updateJacobian=function(){var n=this.G,o=e.position,u=t.position;d.rotate(a,r,e.angle);d.rotate(f,s,t.angle);d.add(l,u,f);d.sub(l,l,o);d.sub(l,l,a);d.rotate(m,i,e.angle+Math.PI/2);n[0]=-m[0];n[1]=-m[1];n[2]=-d.crossLength(a,m)+d.crossLength(m,l);n[3]=m[0];n[4]=m[1];n[5]=d.crossLength(f,m)};this.equations.push(u);if(!n.disableRotationalLock){var g=new v(e,t,-o,o);this.equations.push(g)}this.position=0;this.velocity=0;this.lowerLimitEnabled=typeof n.lowerLimit!=="undefined"?true:false;this.upperLimitEnabled=typeof n.upperLimit!=="undefined"?true:false;this.lowerLimit=typeof n.lowerLimit!=="undefined"?n.lowerLimit:0;this.upperLimit=typeof n.upperLimit!=="undefined"?n.upperLimit:1;this.upperLimitEquation=new h(e,t);this.lowerLimitEquation=new h(e,t);this.upperLimitEquation.minForce=this.lowerLimitEquation.minForce=0;this.upperLimitEquation.maxForce=this.lowerLimitEquation.maxForce=o;this.motorEquation=new p(e,t);this.motorEnabled=false;this.motorSpeed=0;var y=this;var b=this.motorEquation;var w=b.computeGW;b.computeGq=function(){return 0};b.computeGW=function(){var e=this.G,t=this.bodyA,n=this.bodyB,r=t.velocity,i=n.velocity,s=t.angularVelocity,o=n.angularVelocity;return this.gmult(e,r,s,i,o)+y.motorSpeed}}var c=e("./Constraint"),h=e("../equations/ContactEquation"),p=e("../equations/Equation"),d=e("../math/vec2"),v=e("../equations/RotationalLockEquation");t.exports=m;m.prototype=new c;var g=d.create(),y=d.create(),b=d.create(),w=d.create(),E=d.create(),S=d.create();m.prototype.update=function(){var e=this.equations,t=e[0],n=this.upperLimit,r=this.lowerLimit,i=this.upperLimitEquation,s=this.lowerLimitEquation,o=this.bodyA,u=this.bodyB,a=this.localAxisA,f=this.localAnchorA,l=this.localAnchorB;t.updateJacobian();d.rotate(g,a,o.angle);d.rotate(w,f,o.angle);d.add(y,w,o.position);d.rotate(E,l,u.angle);d.add(b,E,u.position);var c=this.position=d.dot(b,g)-d.dot(y,g);if(this.motorEnabled){var h=this.motorEquation.G;h[0]=g[0];h[1]=g[1];h[2]=d.crossLength(g,E);h[3]=-g[0];h[4]=-g[1];h[5]=-d.crossLength(g,w)}if(this.upperLimitEnabled&&c>n){d.scale(i.normalA,g,-1);d.sub(i.contactPointA,y,o.position);d.sub(i.contactPointB,b,u.position);d.scale(S,g,n);d.add(i.contactPointA,i.contactPointA,S);if(e.indexOf(i)===-1){e.push(i)}}else{var p=e.indexOf(i);if(p!==-1){e.splice(p,1)}}if(this.lowerLimitEnabled&&c<r){d.scale(s.normalA,g,1);d.sub(s.contactPointA,y,o.position);d.sub(s.contactPointB,b,u.position);d.scale(S,g,r);d.sub(s.contactPointB,s.contactPointB,S);if(e.indexOf(s)===-1){e.push(s)}}else{var p=e.indexOf(s);if(p!==-1){e.splice(p,1)}}};m.prototype.enableMotor=function(){if(this.motorEnabled){return}this.equations.push(this.motorEquation);this.motorEnabled=true};m.prototype.disableMotor=function(){if(!this.motorEnabled){return}var e=this.equations.indexOf(this.motorEquation);this.equations.splice(e,1);this.motorEnabled=false};m.prototype.setLimits=function(e,t){if(typeof e==="number"){this.lowerLimit=e;this.lowerLimitEnabled=true}else{this.lowerLimit=e;this.lowerLimitEnabled=false}if(typeof t==="number"){this.upperLimit=t;this.upperLimitEnabled=true}else{this.upperLimit=t;this.upperLimitEnabled=false}}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constraints/PrismaticConstraint.js","/constraints")},{"../equations/ContactEquation":24,"../equations/Equation":25,"../equations/RotationalLockEquation":27,"../math/vec2":33,"./Constraint":17,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],22:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function E(e,t,n){n=n||{};c.call(this,e,t,c.REVOLUTE,n);var r=this.maxForce=typeof n.maxForce!=="undefined"?n.maxForce:Number.MAX_VALUE;this.pivotA=v.create();this.pivotB=v.create();if(n.worldPivot){v.sub(this.pivotA,n.worldPivot,e.position);v.sub(this.pivotB,n.worldPivot,t.position);v.rotate(this.pivotA,this.pivotA,-e.angle);v.rotate(this.pivotB,this.pivotB,-t.angle)}else{v.copy(this.pivotA,n.localPivotA);v.copy(this.pivotB,n.localPivotB)}var i=this.equations=[new h(e,t,-r,r),new h(e,t,-r,r)];var s=i[0];var o=i[1];var u=this;s.computeGq=function(){v.rotate(m,u.pivotA,e.angle);v.rotate(g,u.pivotB,t.angle);v.add(w,t.position,g);v.sub(w,w,e.position);v.sub(w,w,m);return v.dot(w,y)};o.computeGq=function(){v.rotate(m,u.pivotA,e.angle);v.rotate(g,u.pivotB,t.angle);v.add(w,t.position,g);v.sub(w,w,e.position);v.sub(w,w,m);return v.dot(w,b)};o.minForce=s.minForce=-r;o.maxForce=s.maxForce=r;this.motorEquation=new p(e,t);this.motorEnabled=false;this.angle=0;this.lowerLimitEnabled=false;this.upperLimitEnabled=false;this.lowerLimit=0;this.upperLimit=0;this.upperLimitEquation=new d(e,t);this.lowerLimitEquation=new d(e,t);this.upperLimitEquation.minForce=0;this.lowerLimitEquation.maxForce=0}var c=e("./Constraint"),h=e("../equations/Equation"),p=e("../equations/RotationalVelocityEquation"),d=e("../equations/RotationalLockEquation"),v=e("../math/vec2");t.exports=E;var m=v.create(),g=v.create(),y=v.fromValues(1,0),b=v.fromValues(0,1),w=v.create();E.prototype=new c;E.prototype.setLimits=function(e,t){if(typeof e==="number"){this.lowerLimit=e;this.lowerLimitEnabled=true}else{this.lowerLimit=e;this.lowerLimitEnabled=false}if(typeof t==="number"){this.upperLimit=t;this.upperLimitEnabled=true}else{this.upperLimit=t;this.upperLimitEnabled=false}};E.prototype.update=function(){var e=this.bodyA,t=this.bodyB,n=this.pivotA,r=this.pivotB,i=this.equations,s=i[0],o=i[1],u=i[0],a=i[1],f=this.upperLimit,l=this.lowerLimit,c=this.upperLimitEquation,h=this.lowerLimitEquation;var p=this.angle=t.angle-e.angle;if(this.upperLimitEnabled&&p>f){c.angle=f;if(i.indexOf(c)===-1){i.push(c)}}else{var d=i.indexOf(c);if(d!==-1){i.splice(d,1)}}if(this.lowerLimitEnabled&&p<l){h.angle=l;if(i.indexOf(h)===-1){i.push(h)}}else{var d=i.indexOf(h);if(d!==-1){i.splice(d,1)}}v.rotate(m,n,e.angle);v.rotate(g,r,t.angle);u.G[0]=-1;u.G[1]=0;u.G[2]=-v.crossLength(m,y);u.G[3]=1;u.G[4]=0;u.G[5]=v.crossLength(g,y);a.G[0]=0;a.G[1]=-1;a.G[2]=-v.crossLength(m,b);a.G[3]=0;a.G[4]=1;a.G[5]=v.crossLength(g,b)};E.prototype.enableMotor=function(){if(this.motorEnabled){return}this.equations.push(this.motorEquation);this.motorEnabled=true};E.prototype.disableMotor=function(){if(!this.motorEnabled){return}var e=this.equations.indexOf(this.motorEquation);this.equations.splice(e,1);this.motorEnabled=false};E.prototype.motorIsEnabled=function(){return!!this.motorEnabled};E.prototype.setMotorSpeed=function(e){if(!this.motorEnabled){return}var t=this.equations.indexOf(this.motorEquation);this.equations[t].relativeVelocity=e};E.prototype.getMotorSpeed=function(){if(!this.motorEnabled){return false}return this.motorEquation.relativeVelocity}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/constraints/RevoluteConstraint.js","/constraints")},{"../equations/Equation":25,"../equations/RotationalLockEquation":27,"../equations/RotationalVelocityEquation":28,"../math/vec2":33,"./Constraint":17,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],23:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t,n){n=n||{};c.call(this,e,t,-Number.MAX_VALUE,Number.MAX_VALUE);this.angle=n.angle||0;this.ratio=typeof n.ratio==="number"?n.ratio:1;this.setRatio(this.ratio)}var c=e("./Equation"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.constructor=p;p.prototype.computeGq=function(){return this.ratio*this.bodyA.angle-this.bodyB.angle+this.angle};p.prototype.setRatio=function(e){var t=this.G;t[2]=e;t[5]=-1;this.ratio=e};p.prototype.setMaxTorque=function(e){this.maxForce=e;this.minForce=-e}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/equations/AngleLockEquation.js","/equations")},{"../math/vec2":33,"./Equation":25,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],24:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t){c.call(this,e,t,0,Number.MAX_VALUE);this.contactPointA=h.create();this.penetrationVec=h.create();this.contactPointB=h.create();this.normalA=h.create();this.restitution=0;this.firstImpact=false;this.shapeA=null;this.shapeB=null}var c=e("./Equation"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.constructor=p;p.prototype.computeB=function(e,t,n){var r=this.bodyA,i=this.bodyB,s=this.contactPointA,o=this.contactPointB,u=r.position,a=i.position;var f=this.penetrationVec,l=this.normalA,c=this.G;var p=h.crossLength(s,l),d=h.crossLength(o,l);c[0]=-l[0];c[1]=-l[1];c[2]=-p;c[3]=l[0];c[4]=l[1];c[5]=d;h.add(f,a,o);h.sub(f,f,u);h.sub(f,f,s);var v,m;if(this.firstImpact&&this.restitution!==0){m=0;v=1/t*(1+this.restitution)*this.computeGW()}else{m=h.dot(l,f)+this.offset;v=this.computeGW()}var g=this.computeGiMf();var y=-m*e-v*t-n*g;return y}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/equations/ContactEquation.js","/equations")},{"../math/vec2":33,"./Equation":25,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],25:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(e,t,n,r){this.minForce=typeof n==="undefined"?-Number.MAX_VALUE:n;this.maxForce=typeof r==="undefined"?Number.MAX_VALUE:r;this.bodyA=e;this.bodyB=t;this.stiffness=d.DEFAULT_STIFFNESS;this.relaxation=d.DEFAULT_RELAXATION;this.G=new h.ARRAY_TYPE(6);for(var i=0;i<6;i++){this.G[i]=0}this.offset=0;this.a=0;this.b=0;this.epsilon=0;this.timeStep=1/60;this.needsUpdate=true;this.multiplier=0;this.relativeVelocity=0;this.enabled=true}t.exports=d;var c=e("../math/vec2"),h=e("../utils/Utils"),p=e("../objects/Body");d.prototype.constructor=d;d.DEFAULT_STIFFNESS=1e6;d.DEFAULT_RELAXATION=4;d.prototype.update=function(){var e=this.stiffness,t=this.relaxation,n=this.timeStep;this.a=4/(n*(1+4*t));this.b=4*t/(1+4*t);this.epsilon=4/(n*n*e*(1+4*t));this.needsUpdate=false};d.prototype.gmult=function(e,t,n,r,i){return e[0]*t[0]+e[1]*t[1]+e[2]*n+e[3]*r[0]+e[4]*r[1]+e[5]*i};d.prototype.computeB=function(e,t,n){var r=this.computeGW();var i=this.computeGq();var s=this.computeGiMf();return-i*e-r*t-s*n};var v=c.create(),m=c.create();d.prototype.computeGq=function(){var e=this.G,t=this.bodyA,n=this.bodyB,r=t.position,i=n.position,s=t.angle,o=n.angle;return this.gmult(e,v,s,m,o)+this.offset};d.prototype.computeGW=function(){var e=this.G,t=this.bodyA,n=this.bodyB,r=t.velocity,i=n.velocity,s=t.angularVelocity,o=n.angularVelocity;return this.gmult(e,r,s,i,o)+this.relativeVelocity};d.prototype.computeGWlambda=function(){var e=this.G,t=this.bodyA,n=this.bodyB,r=t.vlambda,i=n.vlambda,s=t.wlambda,o=n.wlambda;return this.gmult(e,r,s,i,o)};var g=c.create(),y=c.create();d.prototype.computeGiMf=function(){var e=this.bodyA,t=this.bodyB,n=e.force,r=e.angularForce,i=t.force,s=t.angularForce,o=e.invMassSolve,u=t.invMassSolve,a=e.invInertiaSolve,f=t.invInertiaSolve,l=this.G;c.scale(g,n,o);c.scale(y,i,u);return this.gmult(l,g,r*a,y,s*f)};d.prototype.computeGiMGt=function(){var e=this.bodyA,t=this.bodyB,n=e.invMassSolve,r=t.invMassSolve,i=e.invInertiaSolve,s=t.invInertiaSolve,o=this.G;return o[0]*o[0]*n+o[1]*o[1]*n+o[2]*o[2]*i+o[3]*o[3]*r+o[4]*o[4]*r+o[5]*o[5]*s};var b=c.create(),w=c.create(),E=c.create(),S=c.create(),x=c.create(),T=c.create();d.prototype.addToWlambda=function(e){var t=this.bodyA,n=this.bodyB,r=b,i=w,s=E,o=S,u=x,a=t.invMassSolve,f=n.invMassSolve,l=t.invInertiaSolve,h=n.invInertiaSolve,p=T,d=this.G;i[0]=d[0];i[1]=d[1];s[0]=d[3];s[1]=d[4];c.scale(r,i,a*e);c.add(t.vlambda,t.vlambda,r);t.wlambda+=l*d[2]*e;c.scale(r,s,f*e);c.add(n.vlambda,n.vlambda,r);n.wlambda+=h*d[5]*e};d.prototype.computeInvC=function(e){return 1/(this.computeGiMGt()+e)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/equations/Equation.js","/equations")},{"../math/vec2":33,"../objects/Body":34,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],26:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(e,t,n){h.call(this,e,t,-n,n);this.contactPointA=c.create();this.contactPointB=c.create();this.t=c.create();this.contactEquations=[];this.shapeA=null;this.shapeB=null;this.frictionCoefficient=.3}var c=e("../math/vec2"),h=e("./Equation"),p=e("../utils/Utils");t.exports=d;d.prototype=new h;d.prototype.constructor=d;d.prototype.setSlipForce=function(e){this.maxForce=e;this.minForce=-e};d.prototype.getSlipForce=function(){return this.maxForce};d.prototype.computeB=function(e,t,n){var r=this.bodyA,i=this.bodyB,s=this.contactPointA,o=this.contactPointB,u=this.t,a=this.G;a[0]=-u[0];a[1]=-u[1];a[2]=-c.crossLength(s,u);a[3]=u[0];a[4]=u[1];a[5]=c.crossLength(o,u);var f=this.computeGW(),l=this.computeGiMf();var h=-f*t-n*l;return h}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/equations/FrictionEquation.js","/equations")},{"../math/vec2":33,"../utils/Utils":52,"./Equation":25,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],27:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t,n){n=n||{};c.call(this,e,t,-Number.MAX_VALUE,Number.MAX_VALUE);this.angle=n.angle||0;var r=this.G;r[2]=1;r[5]=-1}var c=e("./Equation"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.constructor=p;var d=h.create(),v=h.create(),m=h.fromValues(1,0),g=h.fromValues(0,1);p.prototype.computeGq=function(){h.rotate(d,m,this.bodyA.angle+this.angle);h.rotate(v,g,this.bodyB.angle);return h.dot(d,v)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/equations/RotationalLockEquation.js","/equations")},{"../math/vec2":33,"./Equation":25,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],28:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t){c.call(this,e,t,-Number.MAX_VALUE,Number.MAX_VALUE);this.relativeVelocity=1;this.ratio=1}var c=e("./Equation"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.constructor=p;p.prototype.computeB=function(e,t,n){var r=this.G;r[2]=-1;r[5]=this.ratio;var i=this.computeGiMf();var s=this.computeGW();var o=-s*t-n*i;return o}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/equations/RotationalVelocityEquation.js","/equations")},{"../math/vec2":33,"./Equation":25,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],29:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){var l=function(){};t.exports=l;l.prototype={constructor:l,on:function(e,t,n){t.context=n||this;if(this._listeners===undefined){this._listeners={}}var r=this._listeners;if(r[e]===undefined){r[e]=[]}if(r[e].indexOf(t)===-1){r[e].push(t)}return this},has:function(e,t){if(this._listeners===undefined){return false}var n=this._listeners;if(t){if(n[e]!==undefined&&n[e].indexOf(t)!==-1){return true}}else{if(n[e]!==undefined){return true}}return false},off:function(e,t){if(this._listeners===undefined){return this}var n=this._listeners;var r=n[e].indexOf(t);if(r!==-1){n[e].splice(r,1)}return this},emit:function(e){if(this._listeners===undefined){return this}var t=this._listeners;var n=t[e.type];if(n!==undefined){e.target=this;for(var r=0,i=n.length;r<i;r++){var s=n[r];s.call(s.context,e)}}return this}}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/events/EventEmitter.js","/events")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],30:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t,n){n=n||{};if(!(e instanceof c)||!(t instanceof c)){throw new Error("First two arguments must be Material instances.")}this.id=p.idCounter++;this.materialA=e;this.materialB=t;this.friction=typeof n.friction!=="undefined"?Number(n.friction):.3;this.restitution=typeof n.restitution!=="undefined"?Number(n.restitution):0;this.stiffness=typeof n.stiffness!=="undefined"?Number(n.stiffness):h.DEFAULT_STIFFNESS;this.relaxation=typeof n.relaxation!=="undefined"?Number(n.relaxation):h.DEFAULT_RELAXATION;this.frictionStiffness=typeof n.frictionStiffness!=="undefined"?Number(n.frictionStiffness):h.DEFAULT_STIFFNESS;this.frictionRelaxation=typeof n.frictionRelaxation!=="undefined"?Number(n.frictionRelaxation):h.DEFAULT_RELAXATION;this.surfaceVelocity=typeof n.surfaceVelocity!=="undefined"?Number(n.surfaceVelocity):0;this.contactSkinSize=.005}var c=e("./Material");var h=e("../equations/Equation");t.exports=p;p.idCounter=0}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/material/ContactMaterial.js","/material")},{"../equations/Equation":25,"./Material":31,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],31:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(e){this.id=e||l.idCounter++}t.exports=l;l.idCounter=0}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/material/Material.js","/material")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],32:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){var l={};l.GetArea=function(e){if(e.length<6)return 0;var t=e.length-2;var n=0;for(var r=0;r<t;r+=2)n+=(e[r+2]-e[r])*(e[r+1]+e[r+3]);n+=(e[0]-e[t])*(e[t+1]+e[1]);return-n*.5};l.Triangulate=function(e){var t=e.length>>1;if(t<3)return[];var n=[];var r=[];for(var i=0;i<t;i++)r.push(i);var i=0;var s=t;while(s>3){var o=r[(i+0)%s];var u=r[(i+1)%s];var a=r[(i+2)%s];var f=e[2*o],c=e[2*o+1];var h=e[2*u],p=e[2*u+1];var d=e[2*a],v=e[2*a+1];var m=false;if(l._convex(f,c,h,p,d,v)){m=true;for(var g=0;g<s;g++){var y=r[g];if(y==o||y==u||y==a)continue;if(l._PointInTriangle(e[2*y],e[2*y+1],f,c,h,p,d,v)){m=false;break}}}if(m){n.push(o,u,a);r.splice((i+1)%s,1);s--;i=0}else if(i++>3*s)break}n.push(r[0],r[1],r[2]);return n};l._PointInTriangle=function(e,t,n,r,i,s,o,u){var a=o-n;var f=u-r;var l=i-n;var c=s-r;var h=e-n;var p=t-r;var d=a*a+f*f;var v=a*l+f*c;var m=a*h+f*p;var g=l*l+c*c;var y=l*h+c*p;var b=1/(d*g-v*v);var w=(g*m-v*y)*b;var E=(d*y-v*m)*b;return w>=0&&E>=0&&w+E<1};l._convex=function(e,t,n,r,i,s){return(t-r)*(i-n)+(n-e)*(s-r)>=0};t.exports=l}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/math/polyk.js","/math")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],33:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){var c=t.exports={};var h=e("../utils/Utils");c.crossLength=function(e,t){return e[0]*t[1]-e[1]*t[0]};c.crossVZ=function(e,t,n){c.rotate(e,t,-Math.PI/2);c.scale(e,e,n);return e};c.crossZV=function(e,t,n){c.rotate(e,n,Math.PI/2);c.scale(e,e,t);return e};c.rotate=function(e,t,n){if(n!==0){var r=Math.cos(n),i=Math.sin(n),s=t[0],o=t[1];e[0]=r*s-i*o;e[1]=i*s+r*o}else{e[0]=t[0];e[1]=t[1]}};c.rotate90cw=function(e,t){var n=t[0];var r=t[1];e[0]=r;e[1]=-n};c.toLocalFrame=function(e,t,n,r){c.copy(e,t);c.sub(e,e,n);c.rotate(e,e,-r)};c.toGlobalFrame=function(e,t,n,r){c.copy(e,t);c.rotate(e,e,r);c.add(e,e,n)};c.centroid=function(e,t,n,r){c.add(e,t,n);c.add(e,e,r);c.scale(e,e,1/3);return e};c.create=function(){var e=new h.ARRAY_TYPE(2);e[0]=0;e[1]=0;return e};c.clone=function(e){var t=new h.ARRAY_TYPE(2);t[0]=e[0];t[1]=e[1];return t};c.fromValues=function(e,t){var n=new h.ARRAY_TYPE(2);n[0]=e;n[1]=t;return n};c.copy=function(e,t){e[0]=t[0];e[1]=t[1];return e};c.set=function(e,t,n){e[0]=t;e[1]=n;return e};c.add=function(e,t,n){e[0]=t[0]+n[0];e[1]=t[1]+n[1];return e};c.subtract=function(e,t,n){e[0]=t[0]-n[0];e[1]=t[1]-n[1];return e};c.sub=c.subtract;c.multiply=function(e,t,n){e[0]=t[0]*n[0];e[1]=t[1]*n[1];return e};c.mul=c.multiply;c.divide=function(e,t,n){e[0]=t[0]/n[0];e[1]=t[1]/n[1];return e};c.div=c.divide;c.scale=function(e,t,n){e[0]=t[0]*n;e[1]=t[1]*n;return e};c.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)};c.dist=c.distance;c.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r};c.sqrDist=c.squaredDistance;c.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)};c.len=c.length;c.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n};c.sqrLen=c.squaredLength;c.negate=function(e,t){e[0]=-t[0];e[1]=-t[1];return e};c.normalize=function(e,t){var n=t[0],r=t[1];var i=n*n+r*r;if(i>0){i=1/Math.sqrt(i);e[0]=t[0]*i;e[1]=t[1]*i}return e};c.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};c.str=function(e){return"vec2("+e[0]+", "+e[1]+")"}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/math/vec2.js","/math")},{"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],34:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function m(e){e=e||{};v.call(this);this.id=++m._idCounter;this.world=null;this.shapes=[];this.shapeOffsets=[];this.shapeAngles=[];this.mass=e.mass||0;this.invMass=0;this.inertia=0;this.invInertia=0;this.invMassSolve=0;this.invInertiaSolve=0;this.fixedRotation=!!e.fixedRotation||false;this.position=c.fromValues(0,0);if(e.position){c.copy(this.position,e.position)}this.interpolatedPosition=c.fromValues(0,0);this.interpolatedAngle=0;this.previousPosition=c.fromValues(0,0);this.previousAngle=0;this.velocity=c.fromValues(0,0);if(e.velocity){c.copy(this.velocity,e.velocity)}this.vlambda=c.fromValues(0,0);this.wlambda=0;this.angle=e.angle||0;this.angularVelocity=e.angularVelocity||0;this.force=c.create();if(e.force){c.copy(this.force,e.force)}this.angularForce=e.angularForce||0;this.damping=typeof e.damping==="number"?e.damping:.1;this.angularDamping=typeof e.angularDamping==="number"?e.angularDamping:.1;this.type=m.STATIC;if(typeof e.type!=="undefined"){this.type=e.type}else if(!e.mass){this.type=m.STATIC}else{this.type=m.DYNAMIC}this.boundingRadius=0;this.aabb=new d;this.aabbNeedsUpdate=true;this.allowSleep=true;this.wantsToSleep=false;this.sleepState=m.AWAKE;this.sleepSpeedLimit=.2;this.sleepTimeLimit=1;this.gravityScale=1;this.timeLastSleepy=0;this.concavePath=null;this.lastDampingScale=1;this.lastAngularDampingScale=1;this.lastDampingTimeStep=-1;this._wakeUpAfterNarrowphase=false;this.updateMassProperties()}var c=e("../math/vec2"),h=e("poly-decomp"),p=e("../shapes/Convex"),d=e("../collision/AABB"),v=e("../events/EventEmitter");t.exports=m;m.prototype=new v;m._idCounter=0;m.prototype.updateSolveMassProperties=function(){if(this.sleepState===m.SLEEPING||this.type===m.KINEMATIC){this.invMassSolve=0;this.invInertiaSolve=0}else{this.invMassSolve=this.invMass;this.invInertiaSolve=this.invInertia}};m.prototype.setDensity=function(e){var t=this.getArea();this.mass=t*e;this.updateMassProperties()};m.prototype.getArea=function(){var e=0;for(var t=0;t<this.shapes.length;t++){e+=this.shapes[t].area}return e};m.prototype.getAABB=function(){if(this.aabbNeedsUpdate){this.updateAABB()}return this.aabb};var g=new d,y=c.create();m.prototype.updateAABB=function(){var e=this.shapes,t=this.shapeOffsets,n=this.shapeAngles,r=e.length,i=y,s=this.angle;for(var o=0;o!==r;o++){var u=e[o],a=n[o]+s;c.rotate(i,t[o],s);c.add(i,i,this.position);u.computeAABB(g,i,a);if(o===0){this.aabb.copy(g)}else{this.aabb.extend(g)}}this.aabbNeedsUpdate=false};m.prototype.updateBoundingRadius=function(){var e=this.shapes,t=this.shapeOffsets,n=e.length,r=0;for(var i=0;i!==n;i++){var s=e[i],o=c.length(t[i]),u=s.boundingRadius;if(o+u>r){r=o+u}}this.boundingRadius=r};m.prototype.addShape=function(e,t,n){n=n||0;if(t){t=c.fromValues(t[0],t[1])}else{t=c.fromValues(0,0)}this.shapes.push(e);this.shapeOffsets.push(t);this.shapeAngles.push(n);this.updateMassProperties();this.updateBoundingRadius();this.aabbNeedsUpdate=true};m.prototype.removeShape=function(e){var t=this.shapes.indexOf(e);if(t!==-1){this.shapes.splice(t,1);this.shapeOffsets.splice(t,1);this.shapeAngles.splice(t,1);this.aabbNeedsUpdate=true;return true}else{return false}};m.prototype.updateMassProperties=function(){if(this.type===m.STATIC||this.type===m.KINEMATIC){this.mass=Number.MAX_VALUE;this.invMass=0;this.inertia=Number.MAX_VALUE;this.invInertia=0}else{var e=this.shapes,t=e.length,n=this.mass/t,r=0;if(!this.fixedRotation){for(var i=0;i<t;i++){var s=e[i],o=c.squaredLength(this.shapeOffsets[i]),u=s.computeMomentOfInertia(n);r+=u+n*o}this.inertia=r;this.invInertia=r>0?1/r:0}else{this.inertia=Number.MAX_VALUE;this.invInertia=0}this.invMass=1/this.mass}};var b=c.create();m.prototype.applyForce=function(e,t){var n=b;c.sub(n,t,this.position);c.add(this.force,this.force,e);var r=c.crossLength(n,e);this.angularForce+=r};m.prototype.toLocalFrame=function(e,t){c.toLocalFrame(e,t,this.position,this.angle)};m.prototype.toWorldFrame=function(e,t){c.toGlobalFrame(e,t,this.position,this.angle)};m.prototype.fromPolygon=function(e,t){t=t||{};for(var n=this.shapes.length;n>=0;--n){this.removeShape(this.shapes[n])}var r=new h.Polygon;r.vertices=e;r.makeCCW();if(typeof t.removeCollinearPoints==="number"){r.removeCollinearPoints(t.removeCollinearPoints)}if(typeof t.skipSimpleCheck==="undefined"){if(!r.isSimple()){return false}}this.concavePath=r.vertices.slice(0);for(var n=0;n<this.concavePath.length;n++){var i=[0,0];c.copy(i,this.concavePath[n]);this.concavePath[n]=i}var s;if(t.optimalDecomp){s=r.decomp()}else{s=r.quickDecomp()}var o=c.create();for(var n=0;n!==s.length;n++){var u=new p(s[n].vertices);for(var a=0;a!==u.vertices.length;a++){var i=u.vertices[a];c.sub(i,i,u.centerOfMass)}c.scale(o,u.centerOfMass,1);u.updateTriangles();u.updateCenterOfMass();u.updateBoundingRadius();this.addShape(u,o)}this.adjustCenterOfMass();this.aabbNeedsUpdate=true;return true};var w=c.fromValues(0,0),E=c.fromValues(0,0),S=c.fromValues(0,0),x=c.fromValues(0,0);m.prototype.adjustCenterOfMass=function(){var e=E,t=S,n=x,r=0;c.set(t,0,0);for(var i=0;i!==this.shapes.length;i++){var s=this.shapes[i],o=this.shapeOffsets[i];c.scale(e,o,s.area);c.add(t,t,e);r+=s.area}c.scale(n,t,1/r);for(var i=0;i!==this.shapes.length;i++){var s=this.shapes[i],o=this.shapeOffsets[i];if(!o){o=this.shapeOffsets[i]=c.create()}c.sub(o,o,n)}c.add(this.position,this.position,n);for(var i=0;this.concavePath&&i<this.concavePath.length;i++){c.sub(this.concavePath[i],this.concavePath[i],n)}this.updateMassProperties();this.updateBoundingRadius()};m.prototype.setZeroForce=function(){c.set(this.force,0,0);this.angularForce=0};m.prototype.resetConstraintVelocity=function(){var e=this,t=e.vlambda;c.set(t,0,0);e.wlambda=0};m.prototype.addConstraintVelocity=function(){var e=this,t=e.velocity;c.add(t,t,e.vlambda);e.angularVelocity+=e.wlambda};m.prototype.applyDamping=function(e){if(this.type===m.DYNAMIC){if(e!==this.lastDampingTimeStep){this.lastDampingScale=Math.pow(1-this.damping,e);this.lastAngularDampingScale=Math.pow(1-this.angularDamping,e);this.lastDampingTimeStep=e}var t=this.velocity;c.scale(t,t,this.lastDampingScale);this.angularVelocity*=this.lastAngularDampingScale}};m.prototype.wakeUp=function(){var e=this.sleepState;this.sleepState=m.AWAKE;this.idleTime=0;if(e!==m.AWAKE){this.emit(m.wakeUpEvent)}};m.prototype.sleep=function(){this.sleepState=m.SLEEPING;this.angularVelocity=0;this.angularForce=0;c.set(this.velocity,0,0);c.set(this.force,0,0);this.emit(m.sleepEvent)};m.prototype.sleepTick=function(e,t,n){if(!this.allowSleep||this.type===m.SLEEPING){return}this.wantsToSleep=false;var r=this.sleepState,i=c.squaredLength(this.velocity)+Math.pow(this.angularVelocity,2),s=Math.pow(this.sleepSpeedLimit,2);if(i>=s){this.idleTime=0;this.sleepState=m.AWAKE}else{this.idleTime+=n;this.sleepState=m.SLEEPY}if(this.idleTime>this.sleepTimeLimit){if(!t){this.sleep()}else{this.wantsToSleep=true}}};m.prototype.getVelocityFromPosition=function(e,t){e=e||c.create();c.sub(e,this.position,this.previousPosition);c.scale(e,e,1/t);return e};m.prototype.getAngularVelocityFromPosition=function(e){return(this.angle-this.previousAngle)/e};m.prototype.overlaps=function(e){return this.world.overlapKeeper.bodiesAreOverlapping(this,e)};m.sleepyEvent={type:"sleepy"};m.sleepEvent={type:"sleep"};m.wakeUpEvent={type:"wakeup"};m.DYNAMIC=1;m.STATIC=2;m.KINEMATIC=4;m.AWAKE=0;m.SLEEPY=1;m.SLEEPING=2}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/objects/Body.js","/objects")},{"../collision/AABB":11,"../events/EventEmitter":29,"../math/vec2":33,"../shapes/Convex":41,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1,"poly-decomp":9}],35:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(e,t,n){n=n||{};h.call(this,e,t,n);this.localAnchorA=c.fromValues(0,0);this.localAnchorB=c.fromValues(0,0);if(n.localAnchorA){c.copy(this.localAnchorA,n.localAnchorA)}if(n.localAnchorB){c.copy(this.localAnchorB,n.localAnchorB)}if(n.worldAnchorA){this.setWorldAnchorA(n.worldAnchorA)}if(n.worldAnchorB){this.setWorldAnchorB(n.worldAnchorB)}var r=c.create();var i=c.create();this.getWorldAnchorA(r);this.getWorldAnchorB(i);var s=c.distance(r,i);this.restLength=typeof n.restLength==="number"?n.restLength:s}var c=e("../math/vec2");var h=e("./Spring");var p=e("../utils/Utils");t.exports=d;d.prototype=new h;d.prototype.setWorldAnchorA=function(e){this.bodyA.toLocalFrame(this.localAnchorA,e)};d.prototype.setWorldAnchorB=function(e){this.bodyB.toLocalFrame(this.localAnchorB,e)};d.prototype.getWorldAnchorA=function(e){this.bodyA.toWorldFrame(e,this.localAnchorA)};d.prototype.getWorldAnchorB=function(e){this.bodyB.toWorldFrame(e,this.localAnchorB)};var v=c.create(),m=c.create(),g=c.create(),y=c.create(),b=c.create(),w=c.create(),E=c.create(),S=c.create(),x=c.create();d.prototype.applyForce=function(){var e=this.stiffness,t=this.damping,n=this.restLength,r=this.bodyA,i=this.bodyB,s=v,o=m,u=g,a=y,f=x;var l=b,h=w,p=E,d=S;this.getWorldAnchorA(l);this.getWorldAnchorB(h);c.sub(p,l,r.position);c.sub(d,h,i.position);c.sub(s,h,l);var T=c.len(s);c.normalize(o,s);c.sub(u,i.velocity,r.velocity);c.crossZV(f,i.angularVelocity,d);c.add(u,u,f);c.crossZV(f,r.angularVelocity,p);c.sub(u,u,f);c.scale(a,o,-e*(T-n)-t*c.dot(u,o));c.sub(r.force,r.force,a);c.add(i.force,i.force,a);var N=c.crossLength(p,a);var C=c.crossLength(d,a);r.angularForce-=N;i.angularForce+=C}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/objects/LinearSpring.js","/objects")},{"../math/vec2":33,"../utils/Utils":52,"./Spring":37,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],36:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t,n){n=n||{};h.call(this,e,t,n);this.restAngle=typeof n.restAngle==="number"?n.restAngle:t.angle-e.angle}var c=e("../math/vec2");var h=e("./Spring");t.exports=p;p.prototype=new h;p.prototype.applyForce=function(){var e=this.stiffness,t=this.damping,n=this.restAngle,r=this.bodyA,i=this.bodyB,s=i.angle-r.angle,o=i.angularVelocity-r.angularVelocity;var u=-e*(s-n)-t*o*0;r.angularForce-=u;i.angularForce+=u}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/objects/RotationalSpring.js","/objects")},{"../math/vec2":33,"./Spring":37,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],37:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t,n){n=h.defaults(n,{stiffness:100,damping:1});this.stiffness=n.stiffness;this.damping=n.damping;this.bodyA=e;this.bodyB=t}var c=e("../math/vec2");var h=e("../utils/Utils");t.exports=p;p.prototype.applyForce=function(){}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/objects/Spring.js","/objects")},{"../math/vec2":33,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],38:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){t.exports={AABB:e("./collision/AABB"),AngleLockEquation:e("./equations/AngleLockEquation"),Body:e("./objects/Body"),Broadphase:e("./collision/Broadphase"),Capsule:e("./shapes/Capsule"),Circle:e("./shapes/Circle"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),ContactMaterial:e("./material/ContactMaterial"),Convex:e("./shapes/Convex"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventEmitter:e("./events/EventEmitter"),FrictionEquation:e("./equations/FrictionEquation"),GearConstraint:e("./constraints/GearConstraint"),GridBroadphase:e("./collision/GridBroadphase"),GSSolver:e("./solver/GSSolver"),Heightfield:e("./shapes/Heightfield"),Line:e("./shapes/Line"),LockConstraint:e("./constraints/LockConstraint"),Material:e("./material/Material"),Narrowphase:e("./collision/Narrowphase"),NaiveBroadphase:e("./collision/NaiveBroadphase"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),RevoluteConstraint:e("./constraints/RevoluteConstraint"),PrismaticConstraint:e("./constraints/PrismaticConstraint"),Rectangle:e("./shapes/Rectangle"),RotationalVelocityEquation:e("./equations/RotationalVelocityEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Spring:e("./objects/Spring"),LinearSpring:e("./objects/LinearSpring"),RotationalSpring:e("./objects/RotationalSpring"),Utils:e("./utils/Utils"),World:e("./world/World"),vec2:e("./math/vec2"),version:e("../package.json").version}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/p2.js","/")},{"../package.json":10,"./collision/AABB":11,"./collision/Broadphase":12,"./collision/GridBroadphase":13,"./collision/NaiveBroadphase":14,"./collision/Narrowphase":15,"./collision/SAPBroadphase":16,"./constraints/Constraint":17,"./constraints/DistanceConstraint":18,"./constraints/GearConstraint":19,"./constraints/LockConstraint":20,"./constraints/PrismaticConstraint":21,"./constraints/RevoluteConstraint":22,"./equations/AngleLockEquation":23,"./equations/ContactEquation":24,"./equations/Equation":25,"./equations/FrictionEquation":26,"./equations/RotationalVelocityEquation":28,"./events/EventEmitter":29,"./material/ContactMaterial":30,"./material/Material":31,"./math/vec2":33,"./objects/Body":34,"./objects/LinearSpring":35,"./objects/RotationalSpring":36,"./objects/Spring":37,"./shapes/Capsule":39,"./shapes/Circle":40,"./shapes/Convex":41,"./shapes/Heightfield":42,"./shapes/Line":43,"./shapes/Particle":44,"./shapes/Plane":45,"./shapes/Rectangle":46,"./shapes/Shape":47,"./solver/GSSolver":48,"./solver/Solver":49,"./utils/Utils":52,"./world/World":56,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],39:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t){this.length=e||1;this.radius=t||1;c.call(this,c.CAPSULE)}var c=e("./Shape"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.computeMomentOfInertia=function(e){var t=this.radius,n=this.length+t,r=t*2;return e*(r*r+n*n)/12};p.prototype.updateBoundingRadius=function(){this.boundingRadius=this.radius+this.length/2};p.prototype.updateArea=function(){this.area=Math.PI*this.radius*this.radius+this.radius*2*this.length};var d=h.create();p.prototype.computeAABB=function(e,t,n){var r=this.radius;h.set(d,this.length/2,0);if(n!==0){h.rotate(d,d,n)}h.set(e.upperBound,Math.max(d[0]+r,-d[0]+r),Math.max(d[1]+r,-d[1]+r));h.set(e.lowerBound,Math.min(d[0]-r,-d[0]-r),Math.min(d[1]-r,-d[1]-r));h.add(e.lowerBound,e.lowerBound,t);h.add(e.upperBound,e.upperBound,t)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Capsule.js","/shapes")},{"../math/vec2":33,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],40:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e){this.radius=e||1;c.call(this,c.CIRCLE)}var c=e("./Shape"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.computeMomentOfInertia=function(e){var t=this.radius;return e*t*t/2};p.prototype.updateBoundingRadius=function(){this.boundingRadius=this.radius};p.prototype.updateArea=function(){this.area=Math.PI*this.radius*this.radius};p.prototype.computeAABB=function(e,t,n){var r=this.radius;h.set(e.upperBound,r,r);h.set(e.lowerBound,-r,-r);if(t){h.add(e.lowerBound,e.lowerBound,t);h.add(e.upperBound,e.upperBound,t)}}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Circle.js","/shapes")},{"../math/vec2":33,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],41:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function v(e,t){this.vertices=[];this.axes=[];for(var n=0;n<e.length;n++){var r=h.create();h.copy(r,e[n]);this.vertices.push(r)}if(t){for(var n=0;n<t.length;n++){var i=h.create();h.copy(i,t[n]);this.axes.push(i)}}else{for(var n=0;n<e.length;n++){var s=e[n];var o=e[(n+1)%e.length];var u=h.create();h.sub(u,o,s);h.rotate90cw(u,u);h.normalize(u,u);this.axes.push(u)}}this.centerOfMass=h.fromValues(0,0);this.triangles=[];if(this.vertices.length){this.updateTriangles();this.updateCenterOfMass()}this.boundingRadius=0;c.call(this,c.CONVEX);this.updateBoundingRadius();this.updateArea();if(this.area<0){throw new Error("Convex vertices must be given in conter-clockwise winding.")}}var c=e("./Shape"),h=e("../math/vec2"),p=e("../math/polyk"),d=e("poly-decomp");t.exports=v;v.prototype=new c;var m=h.create();var g=h.create();v.prototype.projectOntoLocalAxis=function(e,t){var n=null,r=null,i,s,e=m;for(var o=0;o<this.vertices.length;o++){i=this.vertices[o];s=h.dot(i,e);if(n===null||s>n){n=s}if(r===null||s<r){r=s}}if(r>n){var u=r;r=n;n=u}h.set(t,r,n)};v.prototype.projectOntoWorldAxis=function(e,t,n,r){var i=g;this.projectOntoLocalAxis(e,r);if(n!==0){h.rotate(i,e,n)}else{i=e}var s=h.dot(t,i);h.set(r,r[0]+s,r[1]+s)};v.prototype.updateTriangles=function(){this.triangles.length=0;var e=[];for(var t=0;t<this.vertices.length;t++){var n=this.vertices[t];e.push(n[0],n[1])}var r=p.Triangulate(e);for(var t=0;t<r.length;t+=3){var i=r[t],s=r[t+1],o=r[t+2];this.triangles.push([i,s,o])}};var y=h.create(),b=h.create(),w=h.create(),E=h.create(),S=h.create(),x=h.create(),T=h.create(),N=h.create(),C=h.create();v.prototype.updateCenterOfMass=function(){var e=this.triangles,t=this.vertices,n=this.centerOfMass,r=y,i=C,s=w,o=E,u=S,a=x,f=T,l=N,c=b;h.set(n,0,0);var p=0;for(var d=0;d!==e.length;d++){var m=e[d],s=t[m[0]],o=t[m[1]],u=t[m[2]];h.centroid(r,s,o,u);var g=v.triangleArea(s,o,u);p+=g;h.scale(c,r,g);h.add(n,n,c)}h.scale(n,n,1/p)};v.prototype.computeMomentOfInertia=function(e){var t=0,n=0,r=this.vertices.length;for(var i=r-1,s=0;s<r;i=s,s++){var o=this.vertices[i];var u=this.vertices[s];var a=Math.abs(h.crossLength(o,u));var f=h.dot(u,u)+h.dot(u,o)+h.dot(o,o);t+=a*f;n+=a}return e/6*(t/n)};v.prototype.updateBoundingRadius=function(){var e=this.vertices,t=0;for(var n=0;n!==e.length;n++){var r=h.squaredLength(e[n]);if(r>t){t=r}}this.boundingRadius=Math.sqrt(t)};v.triangleArea=function(e,t,n){return((t[0]-e[0])*(n[1]-e[1])-(n[0]-e[0])*(t[1]-e[1]))*.5};v.prototype.updateArea=function(){this.updateTriangles();this.area=0;var e=this.triangles,t=this.vertices;for(var n=0;n!==e.length;n++){var r=e[n],i=t[r[0]],s=t[r[1]],o=t[r[2]];var u=v.triangleArea(i,s,o);this.area+=u}};v.prototype.computeAABB=function(e,t,n){e.setFromPoints(this.vertices,t,n,0)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Convex.js","/shapes")},{"../math/polyk":32,"../math/vec2":33,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1,"poly-decomp":9}],42:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(e,t){t=p.defaults(t,{maxValue:null,minValue:null,elementWidth:.1});if(t.minValue===null||t.maxValue===null){t.maxValue=e[0];t.minValue=e[0];for(var n=0;n!==e.length;n++){var r=e[n];if(r>t.maxValue){t.maxValue=r}if(r<t.minValue){t.minValue=r}}}this.data=e;this.maxValue=t.maxValue;this.minValue=t.minValue;this.elementWidth=t.elementWidth;c.call(this,c.HEIGHTFIELD)}var c=e("./Shape"),h=e("../math/vec2"),p=e("../utils/Utils");t.exports=d;d.prototype=new c;d.prototype.computeMomentOfInertia=function(e){return Number.MAX_VALUE};d.prototype.updateBoundingRadius=function(){this.boundingRadius=Number.MAX_VALUE};d.prototype.updateArea=function(){var e=this.data,t=0;for(var n=0;n<e.length-1;n++){t+=(e[n]+e[n+1])/2*this.elementWidth}this.area=t};d.prototype.computeAABB=function(e,t,n){e.upperBound[0]=this.elementWidth*this.data.length+t[0];e.upperBound[1]=this.maxValue+t[1];e.lowerBound[0]=t[0];e.lowerBound[1]=-Number.MAX_VALUE}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Heightfield.js","/shapes")},{"../math/vec2":33,"../utils/Utils":52,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],43:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e){this.length=e||1;c.call(this,c.LINE)}var c=e("./Shape"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.computeMomentOfInertia=function(e){return e*Math.pow(this.length,2)/12};p.prototype.updateBoundingRadius=function(){this.boundingRadius=this.length/2};var d=[h.create(),h.create()];p.prototype.computeAABB=function(e,t,n){var r=this.length/2;h.set(d[0],-r,0);h.set(d[1],r,0);e.setFromPoints(d,t,n,0)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Line.js","/shapes")},{"../math/vec2":33,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],44:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(){c.call(this,c.PARTICLE)}var c=e("./Shape"),h=e("../math/vec2");t.exports=p;p.prototype=new c;p.prototype.computeMomentOfInertia=function(e){return 0};p.prototype.updateBoundingRadius=function(){this.boundingRadius=0};p.prototype.computeAABB=function(e,t,n){h.copy(e.lowerBound,t);h.copy(e.upperBound,t)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Particle.js","/shapes")},{"../math/vec2":33,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],45:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(){c.call(this,c.PLANE)}var c=e("./Shape"),h=e("../math/vec2"),p=e("../utils/Utils");t.exports=d;d.prototype=new c;d.prototype.computeMomentOfInertia=function(e){return 0};d.prototype.updateBoundingRadius=function(){this.boundingRadius=Number.MAX_VALUE};d.prototype.computeAABB=function(e,t,n){var r=0,i=h.set;if(typeof n==="number"){r=n%(2*Math.PI)}if(r===0){i(e.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE);i(e.upperBound,Number.MAX_VALUE,0)}else if(r===Math.PI/2){i(e.lowerBound,0,-Number.MAX_VALUE);i(e.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)}else if(r===Math.PI){i(e.lowerBound,-Number.MAX_VALUE,0);i(e.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)}else if(r===3*Math.PI/2){i(e.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE);i(e.upperBound,0,Number.MAX_VALUE)}else{i(e.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE);i(e.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)}h.add(e.lowerBound,e.lowerBound,t);h.add(e.upperBound,e.upperBound,t)};d.prototype.updateArea=function(){this.area=Number.MAX_VALUE}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Plane.js","/shapes")},{"../math/vec2":33,"../utils/Utils":52,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],46:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function d(e,t){this.width=e||1;this.height=t||1;var n=[c.fromValues(-e/2,-t/2),c.fromValues(e/2,-t/2),c.fromValues(e/2,t/2),c.fromValues(-e/2,t/2)];var r=[c.fromValues(1,0),c.fromValues(0,1)];p.call(this,n,r);this.type=h.RECTANGLE}var c=e("../math/vec2"),h=e("./Shape"),p=e("./Convex");t.exports=d;d.prototype=new p([]);d.prototype.computeMomentOfInertia=function(e){var t=this.width,n=this.height;return e*(n*n+t*t)/12};d.prototype.updateBoundingRadius=function(){var e=this.width,t=this.height;this.boundingRadius=Math.sqrt(e*e+t*t)/2};var v=c.create(),m=c.create(),g=c.create(),y=c.create();d.prototype.computeAABB=function(e,t,n){e.setFromPoints(this.vertices,t,n,0)};d.prototype.updateArea=function(){this.area=this.width*this.height}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Rectangle.js","/shapes")},{"../math/vec2":33,"./Convex":41,"./Shape":47,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],47:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(e){this.type=e;this.id=l.idCounter++;this.boundingRadius=0;this.collisionGroup=1;this.collisionMask=1;if(e){this.updateBoundingRadius()}this.material=null;this.area=0;this.sensor=false;this.updateArea()}t.exports=l;l.idCounter=0;l.CIRCLE=1;l.PARTICLE=2;l.PLANE=4;l.CONVEX=8;l.LINE=16;l.RECTANGLE=32;l.CAPSULE=64;l.HEIGHTFIELD=128;l.prototype.computeMomentOfInertia=function(e){throw new Error("Shape.computeMomentOfInertia is not implemented in this Shape...")};l.prototype.updateBoundingRadius=function(){throw new Error("Shape.updateBoundingRadius is not implemented in this Shape...")};l.prototype.updateArea=function(){};l.prototype.computeAABB=function(e,t,n){}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/shapes/Shape.js","/shapes")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],48:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function v(e){h.call(this,e,h.GS);e=e||{};this.iterations=e.iterations||10;this.tolerance=e.tolerance||1e-10;this.arrayStep=30;this.lambda=new p.ARRAY_TYPE(this.arrayStep);this.Bs=new p.ARRAY_TYPE(this.arrayStep);this.invCs=new p.ARRAY_TYPE(this.arrayStep);this.useZeroRHS=false;this.frictionIterations=0;this.usedIterations=0}function m(e){var t=e.length;while(t--){e[t]=+0}}var c=e("../math/vec2"),h=e("./Solver"),p=e("../utils/Utils"),d=e("../equations/FrictionEquation");t.exports=v;v.prototype=new h;v.prototype.solve=function(e,t){this.sortEquations();var n=0,r=this.iterations,i=this.frictionIterations,s=this.equations,o=s.length,u=Math.pow(this.tolerance*o,2),a=t.bodies,f=t.bodies.length,l=c.add,h=c.set,g=this.useZeroRHS,y=this.lambda;this.usedIterations=0;if(o){for(var b=0;b!==f;b++){var w=a[b];w.updateSolveMassProperties()}}if(y.length<o){y=this.lambda=new p.ARRAY_TYPE(o+this.arrayStep);this.Bs=new p.ARRAY_TYPE(o+this.arrayStep);this.invCs=new p.ARRAY_TYPE(o+this.arrayStep)}m(y);var E=this.invCs,S=this.Bs,y=this.lambda;for(var b=0;b!==s.length;b++){var x=s[b];if(x.timeStep!==e||x.needsUpdate){x.timeStep=e;x.update()}S[b]=x.computeB(x.a,x.b,e);E[b]=x.computeInvC(x.epsilon)}var T,N,x,C,b,k;if(o!==0){for(b=0;b!==f;b++){var w=a[b];w.resetConstraintVelocity()}if(i){for(n=0;n!==i;n++){C=0;for(k=0;k!==o;k++){x=s[k];var L=v.iterateEquation(k,x,x.epsilon,S,E,y,g,e,n);C+=Math.abs(L)}this.usedIterations++;if(C*C<=u){break}}v.updateMultipliers(s,y,1/e);for(k=0;k!==o;k++){var A=s[k];if(A instanceof d){var O=0;for(var M=0;M!==A.contactEquations.length;M++){O+=A.contactEquations[M].multiplier}O*=A.frictionCoefficient/A.contactEquations.length;A.maxForce=O;A.minForce=-O}}}for(n=0;n!==r;n++){C=0;for(k=0;k!==o;k++){x=s[k];var L=v.iterateEquation(k,x,x.epsilon,S,E,y,g,e,n);C+=Math.abs(L)}this.usedIterations++;if(C*C<=u){break}}for(b=0;b!==f;b++){a[b].addConstraintVelocity()}v.updateMultipliers(s,y,1/e)}};v.updateMultipliers=function(e,t,n){var r=e.length;while(r--){e[r].multiplier=t[r]*n}};v.iterateEquation=function(e,t,n,r,i,s,o,u,a){var f=r[e],l=i[e],c=s[e],h=t.computeGWlambda();var p=t.maxForce,d=t.minForce;if(o){f=0}var v=l*(f-h-n*c);var m=c+v;if(m<d*u){v=d*u-c}else if(m>p*u){v=p*u-c}s[e]+=v;t.addToWlambda(v);return v}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/solver/GSSolver.js","/solver")},{"../equations/FrictionEquation":26,"../math/vec2":33,"../utils/Utils":52,"./Solver":49,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],49:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(e,t){e=e||{};h.call(this);this.type=t;this.equations=[];this.equationSortFunction=e.equationSortFunction||false}var c=e("../utils/Utils"),h=e("../events/EventEmitter");t.exports=p;p.prototype=new h;p.prototype.solve=function(e,t){throw new Error("Solver.solve should be implemented by subclasses!")};var d={bodies:[]};p.prototype.solveIsland=function(e,t){this.removeAllEquations();if(t.equations.length){this.addEquations(t.equations);d.bodies.length=0;t.getBodies(d.bodies);if(d.bodies.length){this.solve(e,d)}}};p.prototype.sortEquations=function(){if(this.equationSortFunction){this.equations.sort(this.equationSortFunction)}};p.prototype.addEquation=function(e){if(e.enabled){this.equations.push(e)}};p.prototype.addEquations=function(e){for(var t=0,n=e.length;t!==n;t++){var r=e[t];if(r.enabled){this.equations.push(r)}}};p.prototype.removeEquation=function(e){var t=this.equations.indexOf(e);if(t!==-1){this.equations.splice(t,1)}};p.prototype.removeAllEquations=function(){this.equations.length=0};p.GS=1;p.ISLAND=2}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/solver/Solver.js","/solver")},{"../events/EventEmitter":29,"../utils/Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],50:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function p(){this.overlappingShapesLastState=new c;this.overlappingShapesCurrentState=new c;this.recordPool=[];this.tmpDict=new c;this.tmpArray1=[]}function d(e,t,n,r){this.shapeA=t;this.shapeB=r;this.bodyA=e;this.bodyB=n}var c=e("./TupleDictionary");var h=e("./Utils");t.exports=p;p.prototype.tick=function(){var e=this.overlappingShapesLastState;var t=this.overlappingShapesCurrentState;var n=e.keys.length;while(n--){var r=e.keys[n];var i=e.getByKey(r);var s=t.getByKey(r);if(i&&!s){this.recordPool.push(i)}}e.reset();e.copy(t);t.reset()};p.prototype.setOverlapping=function(e,t,n,r){var i=this.overlappingShapesLastState;var s=this.overlappingShapesCurrentState;if(!s.get(t.id,r.id)){var o;if(this.recordPool.length){o=this.recordPool.pop();o.set(e,t,n,r)}else{o=new d(e,t,n,r)}s.set(t.id,r.id,o)}};p.prototype.getNewOverlaps=function(e){return this.getDiff(this.overlappingShapesLastState,this.overlappingShapesCurrentState,e)};p.prototype.getEndOverlaps=function(e){return this.getDiff(this.overlappingShapesCurrentState,this.overlappingShapesLastState,e)};p.prototype.bodiesAreOverlapping=function(e,t){var n=this.overlappingShapesCurrentState;var r=n.keys.length;while(r--){var i=n.keys[r];var s=n.data[i];if(s.bodyA===e&&s.bodyB===t||s.bodyA===t&&s.bodyB===e){return true}}return false};p.prototype.getDiff=function(e,t,n){var n=n||[];var r=e;var i=t;n.length=0;var s=i.keys.length;while(s--){var o=i.keys[s];var u=i.data[o];if(!u){throw new Error("Key "+o+" had no data!")}var a=r.data[o];if(!a){n.push(u)}}return n};p.prototype.isNewOverlap=function(e,t){var n=e.id|0,r=t.id|0;var i=this.overlappingShapesLastState;var s=this.overlappingShapesCurrentState;return!!!i.get(n,r)&&!!s.get(n,r)};p.prototype.getNewBodyOverlaps=function(e){this.tmpArray1.length=0;var t=this.getNewOverlaps(this.tmpArray1);return this.getBodyDiff(t,e)};p.prototype.getEndBodyOverlaps=function(e){this.tmpArray1.length=0;var t=this.getEndOverlaps(this.tmpArray1);return this.getBodyDiff(t,e)};p.prototype.getBodyDiff=function(e,t){t=t||[];var n=this.tmpDict;var r=e.length;while(r--){var i=e[r];n.set(i.bodyA.id|0,i.bodyB.id|0,i)}r=n.keys.length;while(r--){var i=n.getByKey(n.keys[r]);if(i){t.push(i.bodyA,i.bodyB)}}n.reset();return t};d.prototype.set=function(e,t,n,r){d.call(this,e,t,n,r)}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utils/OverlapKeeper.js","/utils")},{"./TupleDictionary":51,"./Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],51:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function h(){this.data={};this.keys=[]}var c=e("./Utils");t.exports=h;h.prototype.getKey=function(e,t){e=e|0;t=t|0;if((e|0)===(t|0)){return-1}return((e|0)>(t|0)?e<<16|t&65535:t<<16|e&65535)|0};h.prototype.getByKey=function(e){e=e|0;return this.data[e]};h.prototype.get=function(e,t){return this.data[this.getKey(e,t)]};h.prototype.set=function(e,t,n){if(!n){throw new Error("No data!")}var r=this.getKey(e,t);if(!this.data[r]){this.keys.push(r)}this.data[r]=n;return r};h.prototype.reset=function(){var e=this.data,t=this.keys;var n=t.length;while(n--){delete e[t[n]]}t.length=0};h.prototype.copy=function(e){this.reset();c.appendArray(this.keys,e.keys);var t=e.keys.length;while(t--){var n=e.keys[t];this.data[n]=e.data[n]}}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utils/TupleDictionary.js","/utils")},{"./Utils":52,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],52:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(){}t.exports=l;l.appendArray=function(e,t){if(t.length<15e4){e.push.apply(e,t)}else{for(var n=0,r=t.length;n!==r;++n){e.push(t[n])}}};l.splice=function(e,t,n){n=n||1;for(var r=t,i=e.length-n;r<i;r++){e[r]=e[r+n]}e.length=i};if(typeof P2_ARRAY_TYPE!=="undefined"){l.ARRAY_TYPE=P2_ARRAY_TYPE}else if(typeof Float32Array!=="undefined"){l.ARRAY_TYPE=Float32Array}else{l.ARRAY_TYPE=Array}l.extend=function(e,t){for(var n in t){e[n]=t[n]}};l.defaults=function(e,t){e=e||{};for(var n in t){if(!(n in e)){e[n]=t[n]}}return e}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utils/Utils.js","/utils")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],53:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function h(){this.equations=[];this.bodies=[]}var c=e("../objects/Body");t.exports=h;h.prototype.reset=function(){this.equations.length=this.bodies.length=0};var p=[];h.prototype.getBodies=function(e){var t=e||[],n=this.equations;p.length=0;for(var r=0;r!==n.length;r++){var i=n[r];if(p.indexOf(i.bodyA.id)===-1){t.push(i.bodyA);p.push(i.bodyA.id)}if(p.indexOf(i.bodyB.id)===-1){t.push(i.bodyB);p.push(i.bodyB.id)}}return t};h.prototype.wantsToSleep=function(){for(var e=0;e<this.bodies.length;e++){var t=this.bodies[e];if(t.type===c.DYNAMIC&&!t.wantsToSleep){return false}}return true};h.prototype.sleep=function(){for(var e=0;e<this.bodies.length;e++){var t=this.bodies[e];t.sleep()}return true}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/world/Island.js","/world")},{"../objects/Body":34,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],54:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function v(e){this._nodePool=[];this._islandPool=[];this.equations=[];this.islands=[];this.nodes=[];this.queue=[]}var c=e("../math/vec2"),h=e("./Island"),p=e("./IslandNode"),d=e("../objects/Body");t.exports=v;v.getUnvisitedNode=function(e){var t=e.length;for(var n=0;n!==t;n++){var r=e[n];if(!r.visited&&r.body.type===d.DYNAMIC){return r}}return false};v.prototype.visit=function(e,t,n){t.push(e.body);var r=e.equations.length;for(var i=0;i!==r;i++){var s=e.equations[i];if(n.indexOf(s)===-1){n.push(s)}}};v.prototype.bfs=function(e,t,n){var r=this.queue;r.length=0;r.push(e);e.visited=true;this.visit(e,t,n);while(r.length){var i=r.pop();var s;while(s=v.getUnvisitedNode(i.neighbors)){s.visited=true;this.visit(s,t,n);if(s.body.type===d.DYNAMIC){r.push(s)}}}};v.prototype.split=function(e){var t=e.bodies,n=this.nodes,r=this.equations;while(n.length){this._nodePool.push(n.pop())}for(var i=0;i!==t.length;i++){if(this._nodePool.length){var s=this._nodePool.pop();s.reset();s.body=t[i];n.push(s)}else{n.push(new p(t[i]))}}for(var o=0;o!==r.length;o++){var u=r[o],i=t.indexOf(u.bodyA),a=t.indexOf(u.bodyB),f=n[i],l=n[a];f.neighbors.push(l);l.neighbors.push(f);f.equations.push(u);l.equations.push(u)}var c=this.islands;while(c.length){var d=c.pop();d.reset();this._islandPool.push(d)}var m;while(m=v.getUnvisitedNode(n)){var d=this._islandPool.length?this._islandPool.pop():new h;this.bfs(m,d.bodies,d.equations);c.push(d)}return c}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/world/IslandManager.js","/world")},{"../math/vec2":33,"../objects/Body":34,"./Island":53,"./IslandNode":55,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],55:[function(e,t,n){(function(e,n,r,i,s,o,u,a,f){function l(e){this.body=e;this.neighbors=[];this.equations=[];this.visited=false}t.exports=l;l.prototype.reset=function(){this.equations.length=0;this.neighbors.length=0;this.visited=false;this.body=null}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/world/IslandNode.js","/world")},{"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}],56:[function(e,t,n){(function(n,r,i,s,o,u,a,f,l){function z(e){S.apply(this);e=e||{};this.springs=[];this.bodies=[];this.disabledBodyCollisionPairs=[];this.solver=e.solver||new c;this.narrowphase=new j(this);this.islandManager=new q;this.gravity=d.fromValues(0,-9.78);if(e.gravity){d.copy(this.gravity,e.gravity)}this.frictionGravity=d.length(this.gravity)||10;this.useWorldGravityAsFrictionGravity=true;this.useFrictionGravityOnZeroGravity=true;this.doProfiling=e.doProfiling||false;this.lastStepTime=0;this.broadphase=e.broadphase||new p;this.broadphase.setWorld(this);this.constraints=[];this.defaultMaterial=new C;this.defaultContactMaterial=new k(this.defaultMaterial,this.defaultMaterial);this.lastTimeStep=1/60;this.applySpringForces=true;this.applyDamping=true;this.applyGravity=true;this.solveConstraints=true;this.contactMaterials=[];this.time=0;this.stepping=false;this.bodiesToBeRemoved=[];this.fixedStepTime=0;this.islandSplit=typeof e.islandSplit!=="undefined"?!!e.islandSplit:false;this.emitImpactEvent=true;this._constraintIdCounter=0;this._bodyIdCounter=0;this.postStepEvent={type:"postStep"};this.addBodyEvent={type:"addBody",body:null};this.removeBodyEvent={type:"removeBody",body:null};this.addSpringEvent={type:"addSpring",spring:null};this.impactEvent={type:"impact",bodyA:null,bodyB:null,shapeA:null,shapeB:null,contactEquation:null};this.postBroadphaseEvent={type:"postBroadphase",pairs:null};this.sleepMode=z.NO_SLEEPING;this.beginContactEvent={type:"beginContact",shapeA:null,shapeB:null,bodyA:null,bodyB:null,contactEquations:[]};this.endContactEvent={type:"endContact",shapeA:null,shapeB:null,bodyA:null,bodyB:null};this.preSolveEvent={type:"preSolve",contactEquations:null,frictionEquations:null};this.overlappingShapesLastState={keys:[]};this.overlappingShapesCurrentState={keys:[]};this.overlapKeeper=new I}function it(e){if(!e){return e}return[e[0],e[1]]}function st(e,t){for(var n in t){e[n]=t[n]}}function ot(e){return{id:e.id,materialA:e.materialA.id,materialB:e.materialB.id,friction:e.friction,restitution:e.restitution,stiffness:e.stiffness,relaxation:e.relaxation,frictionStiffness:e.frictionStiffness,frictionRelaxation:e.frictionRelaxation}}var c=e("../solver/GSSolver"),h=e("../solver/Solver"),p=e("../collision/NaiveBroadphase"),d=e("../math/vec2"),v=e("../shapes/Circle"),m=e("../shapes/Rectangle"),g=e("../shapes/Convex"),y=e("../shapes/Line"),b=e("../shapes/Plane"),w=e("../shapes/Capsule"),E=e("../shapes/Particle"),S=e("../events/EventEmitter"),x=e("../objects/Body"),T=e("../shapes/Shape"),N=e("../objects/LinearSpring"),C=e("../material/Material"),k=e("../material/ContactMaterial"),L=e("../constraints/DistanceConstraint"),A=e("../constraints/Constraint"),O=e("../constraints/LockConstraint"),M=e("../constraints/RevoluteConstraint"),_=e("../constraints/PrismaticConstraint"),D=e("../constraints/GearConstraint"),P=e("../../package.json"),H=e("../collision/Broadphase"),B=e("../collision/SAPBroadphase"),j=e("../collision/Narrowphase"),F=e("../utils/Utils"),I=e("../utils/OverlapKeeper"),q=e("./IslandManager"),R=e("../objects/RotationalSpring");t.exports=z;if(typeof performance==="undefined"){performance={}}if(!performance.now){var U=Date.now();if(performance.timing&&performance.timing.navigationStart){U=performance.timing.navigationStart}performance.now=function(){return Date.now()-U}}z.prototype=new Object(S.prototype);z.NO_SLEEPING=1;z.BODY_SLEEPING=2;z.ISLAND_SLEEPING=4;z.prototype.addConstraint=function(e){this.constraints.push(e)};z.prototype.addContactMaterial=function(e){this.contactMaterials.push(e)};z.prototype.removeContactMaterial=function(e){var t=this.contactMaterials.indexOf(e);if(t!==-1){F.splice(this.contactMaterials,t,1)}};z.prototype.getContactMaterial=function(e,t){var n=this.contactMaterials;for(var r=0,i=n.length;r!==i;r++){var s=n[r];if(s.materialA.id===e.id&&s.materialB.id===t.id||s.materialA.id===t.id&&s.materialB.id===e.id){return s}}return false};z.prototype.removeConstraint=function(e){var t=this.constraints.indexOf(e);if(t!==-1){F.splice(this.constraints,t,1)}};var W=d.create(),X=d.create(),V=d.create(),$=d.create(),J=d.create(),K=d.create(),Q=d.create(),G=d.fromValues(0,0),Y=d.fromValues(0,0),Z=d.fromValues(0,0),et=d.fromValues(0,0);z.prototype.step=function(e,t,n){n=n||10;t=t||0;if(t===0){this.internalStep(e);this.time+=e}else{var r=Math.floor((this.time+t)/e)-Math.floor(this.time/e);r=Math.min(r,n);var i=performance.now();for(var s=0;s!==r;s++){this.internalStep(e);if(performance.now()-i>e*1e3){break}}this.time+=t;var o=this.time%e;var u=o/e;for(var a=0;a!==this.bodies.length;a++){var f=this.bodies[a];if(f.type!==x.STATIC&&f.sleepState!==x.SLEEPING){d.sub(et,f.position,f.previousPosition);d.scale(et,et,u);d.add(f.interpolatedPosition,f.position,et);f.interpolatedAngle=f.angle+(f.angle-f.previousAngle)*u}else{d.copy(f.interpolatedPosition,f.position);f.interpolatedAngle=f.angle}}}};var tt=[];z.prototype.internalStep=function(e){this.stepping=true;var t=this,n=this.doProfiling,r=this.springs.length,i=this.springs,s=this.bodies,o=this.gravity,u=this.solver,a=this.bodies.length,f=this.broadphase,l=this.narrowphase,c=this.constraints,h,p,v=J,m=K,g=Q,y=d.scale,b=d.add,w=d.rotate,E=this.islandManager;this.overlapKeeper.tick();this.lastTimeStep=e;if(n){h=performance.now()}if(this.useWorldGravityAsFrictionGravity){var S=d.length(this.gravity);if(S===0&&this.useFrictionGravityOnZeroGravity){}else{this.frictionGravity=S}}if(this.applyGravity){for(var T=0;T!==a;T++){var N=s[T],C=N.force;if(N.type!==x.DYNAMIC||N.sleepState===x.SLEEPING){continue}d.scale(g,o,N.mass*N.gravityScale);b(C,C,g)}}if(this.applySpringForces){for(var T=0;T!==r;T++){var k=i[T];k.applyForce()}}if(this.applyDamping){for(var T=0;T!==a;T++){var N=s[T];if(N.type===x.DYNAMIC){N.applyDamping(e)}}}var L=f.getCollisionPairs(this);var A=this.disabledBodyCollisionPairs;for(var T=A.length-2;T>=0;T-=2){for(var O=L.length-2;O>=0;O-=2){if(A[T]===L[O]&&A[T+1]===L[O+1]||A[T+1]===L[O]&&A[T]===L[O+1]){L.splice(O,2)}}}var M=c.length;for(T=0;T!==M;T++){var _=c[T];if(!_.collideConnected){for(var O=L.length-2;O>=0;O-=2){if(_.bodyA===L[O]&&_.bodyB===L[O+1]||_.bodyB===L[O]&&_.bodyA===L[O+1]){L.splice(O,2)}}}}this.postBroadphaseEvent.pairs=L;this.emit(this.postBroadphaseEvent);l.reset(this);for(var T=0,D=L.length;T!==D;T+=2){var P=L[T],H=L[T+1];for(var B=0,j=P.shapes.length;B!==j;B++){var I=P.shapes[B],q=P.shapeOffsets[B],R=P.shapeAngles[B];for(var U=0,W=H.shapes.length;U!==W;U++){var X=H.shapes[U],V=H.shapeOffsets[U],$=H.shapeAngles[U];var G=this.defaultContactMaterial;if(I.material&&X.material){var Y=this.getContactMaterial(I.material,X.material);if(Y){G=Y}}this.runNarrowphase(l,P,I,q,R,H,X,V,$,G,this.frictionGravity)}}}for(var T=0;T!==a;T++){var Z=s[T];if(Z._wakeUpAfterNarrowphase){Z.wakeUp();Z._wakeUpAfterNarrowphase=false}}if(this.has("endContact")){this.overlapKeeper.getEndOverlaps(tt);var et=this.endContactEvent;var U=tt.length;while(U--){var nt=tt[U];et.shapeA=nt.shapeA;et.shapeB=nt.shapeB;et.bodyA=nt.bodyA;et.bodyB=nt.bodyB;this.emit(et)}}var rt=this.preSolveEvent;rt.contactEquations=l.contactEquations;rt.frictionEquations=l.frictionEquations;this.emit(rt);var M=c.length;for(T=0;T!==M;T++){c[T].update()}if(l.contactEquations.length||l.frictionEquations.length||c.length){if(this.islandSplit){E.equations.length=0;F.appendArray(E.equations,l.contactEquations);F.appendArray(E.equations,l.frictionEquations);for(T=0;T!==M;T++){F.appendArray(E.equations,c[T].equations)}E.split(this);for(var T=0;T!==E.islands.length;T++){var it=E.islands[T];if(it.equations.length){u.solveIsland(e,it)}}}else{u.addEquations(l.contactEquations);u.addEquations(l.frictionEquations);for(T=0;T!==M;T++){u.addEquations(c[T].equations)}if(this.solveConstraints){u.solve(e,this)}u.removeAllEquations()}}for(var T=0;T!==a;T++){var Z=s[T];if(Z.sleepState!==x.SLEEPING&&Z.type!==x.STATIC){z.integrateBody(Z,e)}}for(var T=0;T!==a;T++){s[T].setZeroForce()}if(n){p=performance.now();t.lastStepTime=p-h}if(this.emitImpactEvent&&this.has("impact")){var st=this.impactEvent;for(var T=0;T!==l.contactEquations.length;T++){var ot=l.contactEquations[T];if(ot.firstImpact){st.bodyA=ot.bodyA;st.bodyB=ot.bodyB;st.shapeA=ot.shapeA;st.shapeB=ot.shapeB;st.contactEquation=ot;this.emit(st)}}}if(this.sleepMode===z.BODY_SLEEPING){for(T=0;T!==a;T++){s[T].sleepTick(this.time,false,e)}}else if(this.sleepMode===z.ISLAND_SLEEPING&&this.islandSplit){for(T=0;T!==a;T++){s[T].sleepTick(this.time,true,e)}for(var T=0;T<this.islandManager.islands.length;T++){var it=this.islandManager.islands[T];if(it.wantsToSleep()){it.sleep()}}}this.stepping=false;if(this.bodiesToBeRemoved.length){for(var T=0;T!==this.bodiesToBeRemoved.length;T++){this.removeBody(this.bodiesToBeRemoved[T])}this.bodiesToBeRemoved.length=0}this.emit(this.postStepEvent)};var nt=d.create();var rt=d.create();z.integrateBody=function(e,t){var n=e.invMass,r=e.force,i=e.position,s=e.velocity;d.copy(e.previousPosition,e.position);e.previousAngle=e.angle;if(!e.fixedRotation){e.angularVelocity+=e.angularForce*e.invInertia*t;e.angle+=e.angularVelocity*t}d.scale(nt,r,t*n);d.add(s,nt,s);d.scale(rt,s,t);d.add(i,i,rt);e.aabbNeedsUpdate=true};z.prototype.runNarrowphase=function(e,t,n,r,i,s,o,u,a,f,l){if(!((n.collisionGroup&o.collisionMask)!==0&&(o.collisionGroup&n.collisionMask)!==0)){return}d.rotate(G,r,t.angle);d.rotate(Y,u,s.angle);d.add(G,G,t.position);d.add(Y,Y,s.position);var c=i+t.angle;var h=a+s.angle;e.enableFriction=f.friction>0;e.frictionCoefficient=f.friction;var p;if(t.type===x.STATIC||t.type===x.KINEMATIC){p=s.mass}else if(s.type===x.STATIC||s.type===x.KINEMATIC){p=t.mass}else{p=t.mass*s.mass/(t.mass+s.mass)}e.slipForce=f.friction*l*p;e.restitution=f.restitution;e.surfaceVelocity=f.surfaceVelocity;e.frictionStiffness=f.frictionStiffness;e.frictionRelaxation=f.frictionRelaxation;e.stiffness=f.stiffness;e.relaxation=f.relaxation;e.contactSkinSize=f.contactSkinSize;var v=e[n.type|o.type],m=0;if(v){var g=n.sensor||o.sensor;var y=e.frictionEquations.length;if(n.type<o.type){m=v.call(e,t,n,G,c,s,o,Y,h,g)}else{m=v.call(e,s,o,Y,h,t,n,G,c,g)}var b=e.frictionEquations.length-y;if(m){if(t.allowSleep&&t.type===x.DYNAMIC&&t.sleepState===x.SLEEPING&&s.sleepState===x.AWAKE&&s.type!==x.STATIC){var w=d.squaredLength(s.velocity)+Math.pow(s.angularVelocity,2);var E=Math.pow(s.sleepSpeedLimit,2);if(w>=E*2){t._wakeUpAfterNarrowphase=true}}if(s.allowSleep&&s.type===x.DYNAMIC&&s.sleepState===x.SLEEPING&&t.sleepState===x.AWAKE&&t.type!==x.STATIC){var S=d.squaredLength(t.velocity)+Math.pow(t.angularVelocity,2);var T=Math.pow(t.sleepSpeedLimit,2);if(S>=T*2){s._wakeUpAfterNarrowphase=true}}this.overlapKeeper.setOverlapping(t,n,s,o);if(this.has("beginContact")&&this.overlapKeeper.isNewOverlap(n,o)){var N=this.beginContactEvent;N.shapeA=n;N.shapeB=o;N.bodyA=t;N.bodyB=s;N.contactEquations.length=0;if(typeof m==="number"){for(var C=e.contactEquations.length-m;C<e.contactEquations.length;C++){N.contactEquations.push(e.contactEquations[C])}}this.emit(N)}if(typeof m==="number"&&b>1){for(var C=e.frictionEquations.length-b;C<e.frictionEquations.length;C++){var k=e.frictionEquations[C];k.setSlipForce(k.getSlipForce()/b)}}}}};z.prototype.addSpring=function(e){this.springs.push(e);this.addSpringEvent.spring=e;this.emit(this.addSpringEvent)};z.prototype.removeSpring=function(e){var t=this.springs.indexOf(e);if(t!==-1){F.splice(this.springs,t,1)}};z.prototype.addBody=function(e){if(this.bodies.indexOf(e)===-1){this.bodies.push(e);e.world=this;this.addBodyEvent.body=e;this.emit(this.addBodyEvent)}};z.prototype.removeBody=function(e){if(this.stepping){this.bodiesToBeRemoved.push(e)}else{e.world=null;var t=this.bodies.indexOf(e);if(t!==-1){F.splice(this.bodies,t,1);this.removeBodyEvent.body=e;e.resetConstraintVelocity();this.emit(this.removeBodyEvent)}}};z.prototype.getBodyById=function(e){var t=this.bodies;for(var n=0;n<t.length;n++){var r=t[n];if(r.id===e){return r}}return false};z.prototype.disableBodyCollision=function(e,t){this.disabledBodyCollisionPairs.push(e,t)};z.prototype.enableBodyCollision=function(e,t){var n=this.disabledBodyCollisionPairs;for(var r=0;r<n.length;r+=2){if(n[r]===e&&n[r+1]===t||n[r+1]===e&&n[r]===t){n.splice(r,2);return}}};z.prototype.clear=function(){this.time=0;this.fixedStepTime=0;if(this.solver&&this.solver.equations.length){this.solver.removeAllEquations()}var e=this.constraints;for(var t=e.length-1;t>=0;t--){this.removeConstraint(e[t])}var n=this.bodies;for(var t=n.length-1;t>=0;t--){this.removeBody(n[t])}var r=this.springs;for(var t=r.length-1;t>=0;t--){this.removeSpring(r[t])}var i=this.contactMaterials;for(var t=i.length-1;t>=0;t--){this.removeContactMaterial(i[t])}z.apply(this)};z.prototype.clone=function(){var e=new z;e.fromJSON(this.toJSON());return e};var ut=d.create(),at=d.fromValues(0,0),ft=d.fromValues(0,0);z.prototype.hitTest=function(e,t,n){n=n||0;var r=new x({position:e}),i=new E,s=e,o=0,u=ut,a=at,f=ft;r.addShape(i);var l=this.narrowphase,c=[];for(var h=0,p=t.length;h!==p;h++){var m=t[h];for(var y=0,S=m.shapes.length;y!==S;y++){var T=m.shapes[y],N=m.shapeOffsets[y]||a,C=m.shapeAngles[y]||0;d.rotate(u,N,m.angle);d.add(u,u,m.position);var k=C+m.angle;if(T instanceof v&&l.circleParticle(m,T,u,k,r,i,s,o,true)||T instanceof g&&l.particleConvex(r,i,s,o,m,T,u,k,true)||T instanceof b&&l.particlePlane(r,i,s,o,m,T,u,k,true)||T instanceof w&&l.particleCapsule(r,i,s,o,m,T,u,k,true)||T instanceof E&&d.squaredLength(d.sub(f,u,e))<n*n){c.push(m)}}}return c};z.prototype.setGlobalEquationParameters=function(e){e=e||{};for(var t=0;t!==this.constraints.length;t++){var n=this.constraints[t];for(var r=0;r!==n.equations.length;r++){var i=n.equations[r];if(typeof e.stiffness!=="undefined"){i.stiffness=e.stiffness}if(typeof e.relaxation!=="undefined"){i.relaxation=e.relaxation}i.needsUpdate=true}}for(var t=0;t!==this.contactMaterials.length;t++){var n=this.contactMaterials[t];if(typeof e.stiffness!=="undefined"){n.stiffness=e.stiffness;n.frictionStiffness=e.stiffness}if(typeof e.relaxation!=="undefined"){n.relaxation=e.relaxation;n.frictionRelaxation=e.relaxation}}var n=this.defaultContactMaterial;if(typeof e.stiffness!=="undefined"){n.stiffness=e.stiffness;n.frictionStiffness=e.stiffness}if(typeof e.relaxation!=="undefined"){n.relaxation=e.relaxation;n.frictionRelaxation=e.relaxation}};z.prototype.setGlobalStiffness=function(e){this.setGlobalEquationParameters({stiffness:e})};z.prototype.setGlobalRelaxation=function(e){this.setGlobalEquationParameters({relaxation:e})}}).call(this,e("/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/world/World.js","/world")},{"../../package.json":10,"../collision/Broadphase":12,"../collision/NaiveBroadphase":14,"../collision/Narrowphase":15,"../collision/SAPBroadphase":16,"../constraints/Constraint":17,"../constraints/DistanceConstraint":18,"../constraints/GearConstraint":19,"../constraints/LockConstraint":20,"../constraints/PrismaticConstraint":21,"../constraints/RevoluteConstraint":22,"../events/EventEmitter":29,"../material/ContactMaterial":30,"../material/Material":31,"../math/vec2":33,"../objects/Body":34,"../objects/LinearSpring":35,"../objects/RotationalSpring":36,"../shapes/Capsule":39,"../shapes/Circle":40,"../shapes/Convex":41,"../shapes/Line":43,"../shapes/Particle":44,"../shapes/Plane":45,"../shapes/Rectangle":46,"../shapes/Shape":47,"../solver/GSSolver":48,"../solver/Solver":49,"../utils/OverlapKeeper":50,"../utils/Utils":52,"./IslandManager":54,"/Users/schteppe/git/p2.js/node_modules/grunt-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":4,buffer:1}]},{},[38])(38)});/*!
 * VERSION: 1.13.2
 * DATE: 2014-08-23
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.13.2",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,c,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0&&y!==n)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=c=!e||t||y===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),c=t.length,m=0;c>m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c-1&&l&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,c=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in c)for(l=c[_].target.parentNode;l;)l===t&&(n=n.concat(c[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var c=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){c(!0,t,e,i)},r.resumeAll=function(t,e,i){c(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,p=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i,s){var r=t._timeline._totalTime;(e||!this._forcingPlayhead)&&(t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_),this._forcingPlayhead&&t._timeline.seek(r))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.13.2",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=f(t)),n=n||0,u=0;t.length>u;u++)r.startAt&&(r.startAt=p(r.startAt)),c.to(t[u],e,p(r),u*n);return this.add(c,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(c,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,p=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==c&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.13.2",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,overwrite:i.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=c?(this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===f&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=f+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*f,w>this._cycle?x=!x:this._totalTime+=f,this._time=m,this._rawPrevTime=0===f?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:f,this.render(m,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?f+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.3",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec
}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=_gsScope._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.13.2",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,z=180/Math.PI,I={},E=document,L=E.createElement("div"),F=E.createElement("img"),N=a._internals={_specialProps:o},X=navigator.userAgent,U=function(){var t,e=X.indexOf("Android"),i=E.createElement("div");return u=-1!==X.indexOf("Safari")&&-1===X.indexOf("Chrome")&&(-1===e||Number(X.substr(e+8,1))>3),c=u&&6>Number(X.substr(X.indexOf("Version/")+8,1)),p=-1!==X.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X)&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},G=E.defaultView?E.defaultView.getComputedStyle:function(){},W=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||G(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},Q=N.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,p=L.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+W(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=Q(t,i,s,r,!0))}return c?-o:o},Z=N.calculateOffset=function(t,e,i){if("absolute"!==W(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=W(t,"margin"+s,i);return t["offset"+s]-(Q(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||G(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=Pe(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||G(t,null);--n>-1;)s-=parseFloat(W(t,"padding"+r[n],i,!0))||0,s-=parseFloat(W(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:z)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(N._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(N._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},N.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",C&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=N._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=N.Transform=function(){this.skewY=0},Pe=N.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,c,f,m,d,g,v=i?t._gsTransform||new be:new be,y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(W(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0,S=parseFloat(a.defaultTransformPerspective)||0;if(ye?r=W(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),r&&"none"!==r&&"matrix(1, 0, 0, 1, 0, 0)"!==r){for(n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var k=n[8],R=n[9],A=n[10],O=n[12],D=n[13],I=n[14];if(v.zOrigin&&(I=-v.zOrigin,O=k*I-n[12],D=R*I-n[13],I=A*I+v.zOrigin-n[14]),!i||s||null==v.rotationX){var E,L,F,N,X,U,Y,j=n[0],B=n[1],q=n[2],V=n[3],G=n[4],Q=n[5],Z=n[6],$=n[7],H=n[11],K=Math.atan2(Z,A),J=-b>K||K>b;v.rotationX=K*z,K&&(N=Math.cos(-K),X=Math.sin(-K),E=G*N+k*X,L=Q*N+R*X,F=Z*N+A*X,k=G*-X+k*N,R=Q*-X+R*N,A=Z*-X+A*N,H=$*-X+H*N,G=E,Q=L,Z=F),K=Math.atan2(k,j),v.rotationY=K*z,K&&(U=-b>K||K>b,N=Math.cos(-K),X=Math.sin(-K),E=j*N-k*X,L=B*N-R*X,F=q*N-A*X,R=B*X+R*N,A=q*X+A*N,H=V*X+H*N,j=E,B=L,q=F),K=Math.atan2(B,Q),v.rotation=K*z,K&&(Y=-b>K||K>b,N=Math.cos(-K),X=Math.sin(-K),j=j*N+G*X,L=B*N+Q*X,Q=B*-X+Q*N,Z=q*-X+Z*N,B=L),Y&&J?v.rotation=v.rotationX=0:Y&&U?v.rotation=v.rotationY=0:U&&J&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(j*j+B*B)*w+.5)/w,v.scaleY=(0|Math.sqrt(Q*Q+R*R)*w+.5)/w,v.scaleZ=(0|Math.sqrt(Z*Z+A*A)*w+.5)/w,v.skewX=0,v.perspective=H?1/(0>H?-H:H):0,v.x=O,v.y=D,v.z=I}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===W(t,"display",e))){var te=n.length>=6,ee=te?n[0]:1,ie=n[1]||0,se=n[2]||0,re=te?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(ee*ee+ie*ie),u=Math.sqrt(re*re+se*se),p=ee||ie?Math.atan2(ie,ee)*z:v.rotation||0,c=se||re?Math.atan2(se,re)*z+p:v.skewX||0,f=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(y?(_*=-1,c+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,c+=0>=c?180:-180)),d=(p-v.rotation)%180,g=(c-v.skewX)%180,(void 0===v.skewX||f>T||-T>f||m>T||-T>m||d>-x&&x>d&&false|d*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=c),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=S,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0)}else v={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,perspective:S,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=v),v.xPercent=v.yPercent=0,v},Se=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},ke=N.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P,S=this.data,k=this.t.style,R=S.rotation*M,A=S.scaleX,C=S.scaleY,O=S.scaleZ,D=S.x,z=S.y,I=S.z,E=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==O||E||I))return Re.call(this,t),void 0;if(p){var L=1e-4;L>A&&A>-L&&(A=O=2e-5),L>C&&C>-L&&(C=O=2e-5),!E||S.z||S.rotationX||S.rotationY||(E=0)}if(R||S.skewX)y=Math.cos(R),T=Math.sin(R),e=y,n=T,S.skewX&&(R-=S.skewX*M,y=Math.cos(R),T=Math.sin(R),"simple"===S.skewType&&(w=Math.tan(S.skewX*M),w=Math.sqrt(1+w*w),y*=w,T*=w)),i=-T,a=y;else{if(!(S.rotationY||S.rotationX||1!==O||E))return k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+z+"px,"+I+"px)"+(1!==A||1!==C?" scale("+A+","+C+")":""),void 0;e=a=1,i=n=0}u=1,s=r=o=h=l=_=c=f=m=0,d=E?-1/E:0,g=S.zOrigin,v=1e5,R=S.rotationY*M,R&&(y=Math.cos(R),T=Math.sin(R),l=u*-T,f=d*-T,s=e*T,o=n*T,u*=y,d*=y,e*=y,n*=y),R=S.rotationX*M,R&&(y=Math.cos(R),T=Math.sin(R),w=i*y+s*T,x=a*y+o*T,b=_*y+u*T,P=m*y+d*T,s=i*-T+s*y,o=a*-T+o*y,u=_*-T+u*y,d=m*-T+d*y,i=w,a=x,_=b,m=P),1!==O&&(s*=O,o*=O,u*=O,d*=O),1!==C&&(i*=C,a*=C,_*=C,m*=C),1!==A&&(e*=A,n*=A,l*=A,f*=A),g&&(c-=g,r=s*c,h=o*c,c=u*c+g),r=(w=(r+=D)-(r|=0))?(0|w*v+(0>w?-.5:.5))/v+r:r,h=(w=(h+=z)-(h|=0))?(0|w*v+(0>w?-.5:.5))/v+h:h,c=(w=(c+=I)-(c|=0))?(0|w*v+(0>w?-.5:.5))/v+c:c,k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|l*v)/v,(0|f*v)/v,(0|i*v)/v,(0|a*v)/v,(0|_*v)/v,(0|m*v)/v,(0|s*v)/v,(0|o*v)/v,(0|u*v)/v,(0|d*v)/v,r,h,c,E?1+-c/E:1].join(",")+")"},Re=N.set2DTransformRatio=function(t){var e,i,s,r,n,a=this.data,o=this.t,h=o.style,l=a.x,_=a.y;return a.rotationX||a.rotationY||a.z||a.force3D===!0||"auto"===a.force3D&&1!==t&&0!==t?(this.setRatio=ke,ke.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,s=1e5,r=a.scaleX*s,n=a.scaleY*s,h[ye]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix(":"matrix(")+(0|Math.cos(e)*r)/s+","+(0|Math.sin(e)*r)/s+","+(0|Math.sin(i)*-n)/s+","+(0|Math.cos(i)*n)/s+","+l+","+_+")"):h[ye]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix(":"matrix(")+a.scaleX+",0,0,"+a.scaleY+","+l+","+_+")",void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._transform)return n;var l,_,u,p,c,f,m,d=s._transform=Pe(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=ve.length,T=h,w={};if("string"==typeof T.transform&&ye)u=L.style,u[ye]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(L),l=Pe(L,null,!1),E.body.removeChild(L);else if("object"==typeof T){if(l={scaleX:se(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:se(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:se(T.scaleZ,d.scaleZ),x:se(T.x,d.x),y:se(T.y,d.y),z:se(T.z,d.z),xPercent:se(T.xPercent,d.xPercent),yPercent:se(T.yPercent,d.yPercent),perspective:se(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=se(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=se(T.y,d.yPercent)),l.rotation=re("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),xe&&(l.rotationX=re("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=re("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:re(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:re(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(xe&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=ve[y],p=l[i]-d[i],(p>v||-v>p||null!=I[i])&&(f=!0,n=new pe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,(p||xe&&c&&d.zOrigin)&&(ye?(f=!0,i=we,p=(p||W(t,i,r,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,xe?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):ee(p+"",d)),f&&(s._transformType=c||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=W(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Q(t,"borderLeft",c,v),w=Q(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=Q(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||G(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=W(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),F.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-F.width:t.offsetHeight-F.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(W(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,"borderTopWidth",r,!1,"0px")+" "+W(t,"borderTopStyle",r,!1,"solid")+" "+W(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Ae=function(t){var e,i=this.t,s=i.filter||W(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!W(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(W(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===W(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ae),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Oe=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Oe,a.pr=-11,i=!0,a.b=f,_=$(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=H(t,_,$(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var De=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=De,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=G(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=W(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(x,"zIndex",0)),"string"==typeof e&&(m=x.cssText,h=$(t,r),x.cssText=m+";"+e,h=H(t,h,$(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=W(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(x,"zIndex",0)),c&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?ke:ye?Re:Se,y.data=this._transform||Pe(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=W(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&_&&(_=Q(t,a,_,f),"%"===m?(_/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=Q(t,a,1,"em"):"px"!==m&&(u=Q(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);
return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||Pe(this._target,r,!0)};var Me=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Me,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var ze=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)ze(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||ze(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,ze(t,l,u),o.render(i,!0),ze(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&l.dispatchEvent("tick")};b.call(l),l.time=l.frame=0,l.tick=function(){d(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),d(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?j:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&k()-R>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var O=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=O.prototype=new A,n.constructor=O,n.kill()._gc=!1,n._first=n._last=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&G(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&G(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!F[i]||F[i]&&F[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.13.2",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],E={},L=D._internals={isArray:c,isSelector:M,lazyTweens:I},F=D._plugins={},N=L.tweenLookup={},X=0,U=L.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=A._rootFramesTimeline=new O,B=A._rootTimeline=new O,q=L.lazyRender=function(){var t=I.length;for(E={};--t>-1;)s=I[t],s&&s._lazy!==!1&&(s.render(s._lazy[0],s._lazy[1],!0),s._lazy=!1);I.length=0};B._startTime=a.time,j._startTime=a.frame,B._active=j._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=B._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+X++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},G=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||W(e,0,f),0===W(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},W=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;E[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&F.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(F[n]&&(h=new F[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&G(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(E[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,h,l;if((c(e)||M(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)
};var Q=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Q.prototype},!0);if(n=Q.prototype,Q.version="1.10.1",Q.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Q.API&&(F[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Q.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");/**
 * @license
 * pixi.js - v1.6.0
 * Copyright (c) 2012-2014, Mat Groves
 * http://goodboydigital.com/
 *
 * Compiled: 2014-07-18
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(){var a=this,b=b||{};b.WEBGL_RENDERER=0,b.CANVAS_RENDERER=1,b.VERSION="v1.6.1",b.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},b.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1},b._UID=0,"undefined"!=typeof Float32Array?(b.Float32Array=Float32Array,b.Uint16Array=Uint16Array):(b.Float32Array=Array,b.Uint16Array=Array),b.INTERACTION_FREQUENCY=30,b.AUTO_PREVENT_DEFAULT=!0,b.RAD_TO_DEG=180/Math.PI,b.DEG_TO_RAD=Math.PI/180,b.dontSayHello=!1,b.sayHello=function(a){if(!b.dontSayHello){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var c=["%c %c %c Pixi.js "+b.VERSION+" - "+a+"  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ","background: #ff66a5","background: #ff66a5","color: #ff66a5; background: #030307;","background: #ff66a5","background: #ffc3dc","background: #ff66a5","color: #ff2424; background: #fff","color: #ff2424; background: #fff","color: #ff2424; background: #fff"];console.log.apply(console,c)}else window.console&&console.log("Pixi.js "+b.VERSION+" - http://www.pixijs.com/");b.dontSayHello=!0}},b.Point=function(a,b){this.x=a||0,this.y=b||0},b.Point.prototype.clone=function(){return new b.Point(this.x,this.y)},b.Point.prototype.set=function(a,b){this.x=a||0,this.y=b||(0!==b?this.x:0)},b.Point.prototype.constructor=b.Point,b.Rectangle=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},b.Rectangle.prototype.clone=function(){return new b.Rectangle(this.x,this.y,this.width,this.height)},b.Rectangle.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=this.x;if(a>=c&&a<=c+this.width){var d=this.y;if(b>=d&&b<=d+this.height)return!0}return!1},b.Rectangle.prototype.constructor=b.Rectangle,b.EmptyRectangle=new b.Rectangle(0,0,0,0),b.Polygon=function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var c=[],d=0,e=a.length;e>d;d+=2)c.push(new b.Point(a[d],a[d+1]));a=c}this.points=a},b.Polygon.prototype.clone=function(){for(var a=[],c=0;c<this.points.length;c++)a.push(this.points[c].clone());return new b.Polygon(a)},b.Polygon.prototype.contains=function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c},b.Polygon.prototype.constructor=b.Polygon,b.Circle=function(a,b,c){this.x=a||0,this.y=b||0,this.radius=c||0},b.Circle.prototype.clone=function(){return new b.Circle(this.x,this.y,this.radius)},b.Circle.prototype.contains=function(a,b){if(this.radius<=0)return!1;var c=this.x-a,d=this.y-b,e=this.radius*this.radius;return c*=c,d*=d,e>=c+d},b.Circle.prototype.getBounds=function(){return new b.Rectangle(this.x-this.radius,this.y-this.radius,this.width,this.height)},b.Circle.prototype.constructor=b.Circle,b.Ellipse=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},b.Ellipse.prototype.clone=function(){return new b.Ellipse(this.x,this.y,this.width,this.height)},b.Ellipse.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=(a-this.x)/this.width,d=(b-this.y)/this.height;return c*=c,d*=d,1>=c+d},b.Ellipse.prototype.getBounds=function(){return new b.Rectangle(this.x-this.width,this.y-this.height,this.width,this.height)},b.Ellipse.prototype.constructor=b.Ellipse,b.Matrix=function(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0},b.Matrix.prototype.fromArray=function(a){this.a=a[0],this.b=a[1],this.c=a[3],this.d=a[4],this.tx=a[2],this.ty=a[5]},b.Matrix.prototype.toArray=function(a){this.array||(this.array=new Float32Array(9));var b=this.array;return a?(b[0]=this.a,b[1]=this.c,b[2]=0,b[3]=this.b,b[4]=this.d,b[5]=0,b[6]=this.tx,b[7]=this.ty,b[8]=1):(b[0]=this.a,b[1]=this.b,b[2]=this.tx,b[3]=this.c,b[4]=this.d,b[5]=this.ty,b[6]=0,b[7]=0,b[8]=1),b},b.identityMatrix=new b.Matrix,b.determineMatrixArrayType=function(){return"undefined"!=typeof Float32Array?Float32Array:Array},b.Matrix2=b.determineMatrixArrayType(),b.DisplayObject=function(){this.position=new b.Point,this.scale=new b.Point(1,1),this.pivot=new b.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.defaultCursor="pointer",this.worldTransform=new b.Matrix,this.color=[],this.dynamic=!0,this._sr=0,this._cr=1,this.filterArea=null,this._bounds=new b.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cacheIsDirty=!1},b.DisplayObject.prototype.constructor=b.DisplayObject,b.DisplayObject.prototype.setInteractive=function(a){this.interactive=a},Object.defineProperty(b.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(a){this._interactive=a,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(b.DisplayObject.prototype,"worldVisible",{get:function(){var a=this;do{if(!a.visible)return!1;a=a.parent}while(a);return!0}}),Object.defineProperty(b.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(a){this._mask&&(this._mask.isMask=!1),this._mask=a,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(b.DisplayObject.prototype,"filters",{get:function(){return this._filters},set:function(a){if(a){for(var b=[],c=0;c<a.length;c++)for(var d=a[c].passes,e=0;e<d.length;e++)b.push(d[e]);this._filterBlock={target:this,filterPasses:b}}this._filters=a}}),Object.defineProperty(b.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap!==a&&(a?this._generateCachedSprite():this._destroyCachedSprite(),this._cacheAsBitmap=a)}}),b.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var a=this.parent.worldTransform,b=this.worldTransform,c=this.pivot.x,d=this.pivot.y,e=this._cr*this.scale.x,f=-this._sr*this.scale.y,g=this._sr*this.scale.x,h=this._cr*this.scale.y,i=this.position.x-e*c-d*f,j=this.position.y-h*d-c*g,k=a.a,l=a.b,m=a.c,n=a.d;b.a=k*e+l*g,b.b=k*f+l*h,b.tx=k*i+l*j+a.tx,b.c=m*e+n*g,b.d=m*f+n*h,b.ty=m*i+n*j+a.ty,this.worldAlpha=this.alpha*this.parent.worldAlpha},b.DisplayObject.prototype.getBounds=function(a){return a=a,b.EmptyRectangle},b.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(b.identityMatrix)},b.DisplayObject.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0)},b.DisplayObject.prototype.generateTexture=function(a){var c=this.getLocalBounds(),d=new b.RenderTexture(0|c.width,0|c.height,a);return d.render(this,new b.Point(-c.x,-c.y)),d},b.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()},b.DisplayObject.prototype._renderCachedSprite=function(a){this._cachedSprite.worldAlpha=this.worldAlpha,a.gl?b.Sprite.prototype._renderWebGL.call(this._cachedSprite,a):b.Sprite.prototype._renderCanvas.call(this._cachedSprite,a)},b.DisplayObject.prototype._generateCachedSprite=function(){this._cacheAsBitmap=!1;var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.texture.resize(0|a.width,0|a.height);else{var c=new b.RenderTexture(0|a.width,0|a.height);this._cachedSprite=new b.Sprite(c),this._cachedSprite.worldTransform=this.worldTransform}var d=this._filters;this._filters=null,this._cachedSprite.filters=d,this._cachedSprite.texture.render(this,new b.Point(-a.x,-a.y)),this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._filters=d,this._cacheAsBitmap=!0},b.DisplayObject.prototype._destroyCachedSprite=function(){this._cachedSprite&&(this._cachedSprite.texture.destroy(!0),this._cachedSprite=null)},b.DisplayObject.prototype._renderWebGL=function(a){a=a},b.DisplayObject.prototype._renderCanvas=function(a){a=a},Object.defineProperty(b.DisplayObject.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(b.DisplayObject.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),b.DisplayObjectContainer=function(){b.DisplayObject.call(this),this.children=[]},b.DisplayObjectContainer.prototype=Object.create(b.DisplayObject.prototype),b.DisplayObjectContainer.prototype.constructor=b.DisplayObjectContainer,Object.defineProperty(b.DisplayObjectContainer.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(a){var b=this.getLocalBounds().width;this.scale.x=0!==b?a/(b/this.scale.x):1,this._width=a}}),Object.defineProperty(b.DisplayObjectContainer.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(a){var b=this.getLocalBounds().height;this.scale.y=0!==b?a/(b/this.scale.y):1,this._height=a}}),b.DisplayObjectContainer.prototype.addChild=function(a){return this.addChildAt(a,this.children.length)},b.DisplayObjectContainer.prototype.addChildAt=function(a,b){if(b>=0&&b<=this.children.length)return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),this.stage&&a.setStageReference(this.stage),a;throw new Error(a+" The index "+b+" supplied is out of bounds "+this.children.length)},b.DisplayObjectContainer.prototype.swapChildren=function(a,b){if(a!==b){var c=this.children.indexOf(a),d=this.children.indexOf(b);if(0>c||0>d)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[c]=b,this.children[d]=a}},b.DisplayObjectContainer.prototype.getChildAt=function(a){if(a>=0&&a<this.children.length)return this.children[a];throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")},b.DisplayObjectContainer.prototype.removeChild=function(a){return this.removeChildAt(this.children.indexOf(a))},b.DisplayObjectContainer.prototype.removeChildAt=function(a){var b=this.getChildAt(a);return this.stage&&b.removeStageReference(),b.parent=void 0,this.children.splice(a,1),b},b.DisplayObjectContainer.prototype.removeChildren=function(a,b){var c=a||0,d="number"==typeof b?b:this.children.length,e=d-c;if(e>0&&d>=e){for(var f=this.children.splice(c,e),g=0;g<f.length;g++){var h=f[g];this.stage&&h.removeStageReference(),h.parent=void 0}return f}throw new Error("Range Error, numeric values are outside the acceptable range")},b.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible&&(b.DisplayObject.prototype.updateTransform.call(this),!this._cacheAsBitmap))for(var a=0,c=this.children.length;c>a;a++)this.children[a].updateTransform()},b.DisplayObjectContainer.prototype.getBounds=function(a){if(0===this.children.length)return b.EmptyRectangle;if(a){var c=this.worldTransform;this.worldTransform=a,this.updateTransform(),this.worldTransform=c}for(var d,e,f,g=1/0,h=1/0,i=-1/0,j=-1/0,k=!1,l=0,m=this.children.length;m>l;l++){var n=this.children[l];n.visible&&(k=!0,d=this.children[l].getBounds(a),g=g<d.x?g:d.x,h=h<d.y?h:d.y,e=d.width+d.x,f=d.height+d.y,i=i>e?i:e,j=j>f?j:f)}if(!k)return b.EmptyRectangle;var o=this._bounds;return o.x=g,o.y=h,o.width=i-g,o.height=j-h,o},b.DisplayObjectContainer.prototype.getLocalBounds=function(){var a=this.worldTransform;this.worldTransform=b.identityMatrix;for(var c=0,d=this.children.length;d>c;c++)this.children[c].updateTransform();var e=this.getBounds();return this.worldTransform=a,e},b.DisplayObjectContainer.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d.setStageReference(a)}},b.DisplayObjectContainer.prototype.removeStageReference=function(){for(var a=0,b=this.children.length;b>a;a++){var c=this.children[a];c.removeStageReference()}this._interactive&&(this.stage.dirty=!0),this.stage=null},b.DisplayObjectContainer.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){if(this._cacheAsBitmap)return this._renderCachedSprite(a),void 0;var b,c;if(this._mask||this._filters){for(this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this._mask&&a.maskManager.popMask(this._mask,a),this._filters&&a.filterManager.popFilter(),a.spriteBatch.start()}else for(b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},b.DisplayObjectContainer.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){if(this._cacheAsBitmap)return this._renderCachedSprite(a),void 0;this._mask&&a.maskManager.pushMask(this._mask,a.context);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},b.Sprite=function(a){b.DisplayObjectContainer.call(this),this.anchor=new b.Point,this.texture=a,this._width=0,this._height=0,this.tint=16777215,this.blendMode=b.blendModes.NORMAL,a.baseTexture.hasLoaded?this.onTextureUpdate():(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},b.Sprite.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Sprite.prototype.constructor=b.Sprite,Object.defineProperty(b.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(b.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),b.Sprite.prototype.setTexture=function(a){this.texture=a,this.cachedTint=16777215},b.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height)},b.Sprite.prototype.getBounds=function(a){var b=this.texture.frame.width,c=this.texture.frame.height,d=b*(1-this.anchor.x),e=b*-this.anchor.x,f=c*(1-this.anchor.y),g=c*-this.anchor.y,h=a||this.worldTransform,i=h.a,j=h.c,k=h.b,l=h.d,m=h.tx,n=h.ty,o=i*e+k*g+m,p=l*g+j*e+n,q=i*d+k*g+m,r=l*g+j*d+n,s=i*d+k*f+m,t=l*f+j*d+n,u=i*e+k*f+m,v=l*f+j*e+n,w=-1/0,x=-1/0,y=1/0,z=1/0;y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,z=z>p?p:z,z=z>r?r:z,z=z>t?t:z,z=z>v?v:z,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w,x=p>x?p:x,x=r>x?r:x,x=t>x?t:x,x=v>x?v:x;var A=this._bounds;return A.x=y,A.width=w-y,A.y=z,A.height=x-z,this._currentBounds=A,A},b.Sprite.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){var b,c;if(this._mask||this._filters){var d=a.spriteBatch;for(this._filters&&(d.flush(),a.filterManager.pushFilter(this._filterBlock)),this._mask&&(d.stop(),a.maskManager.pushMask(this.mask,a),d.start()),d.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);d.stop(),this._mask&&a.maskManager.popMask(this._mask,a),this._filters&&a.filterManager.popFilter(),d.start()}else for(a.spriteBatch.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},b.Sprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){if(this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,a.context.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a.context),this.texture.valid){a.context.globalAlpha=this.worldAlpha,a.roundPixels?a.context.setTransform(this.worldTransform.a,this.worldTransform.c,this.worldTransform.b,this.worldTransform.d,0|this.worldTransform.tx,0|this.worldTransform.ty):a.context.setTransform(this.worldTransform.a,this.worldTransform.c,this.worldTransform.b,this.worldTransform.d,this.worldTransform.tx,this.worldTransform.ty),a.smoothProperty&&a.scaleMode!==this.texture.baseTexture.scaleMode&&(a.scaleMode=this.texture.baseTexture.scaleMode,a.context[a.smoothProperty]=a.scaleMode===b.scaleModes.LINEAR);var c=this.texture.trim?this.texture.trim.x-this.anchor.x*this.texture.trim.width:this.anchor.x*-this.texture.frame.width,d=this.texture.trim?this.texture.trim.y-this.anchor.y*this.texture.trim.height:this.anchor.y*-this.texture.frame.height;16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=b.CanvasTinter.getTintedTexture(this,this.tint)),a.context.drawImage(this.tintedTexture,0,0,this.texture.crop.width,this.texture.crop.height,c,d,this.texture.crop.width,this.texture.crop.height)):a.context.drawImage(this.texture.baseTexture.source,this.texture.crop.x,this.texture.crop.y,this.texture.crop.width,this.texture.crop.height,c,d,this.texture.crop.width,this.texture.crop.height)}for(var e=0,f=this.children.length;f>e;e++)this.children[e]._renderCanvas(a);this._mask&&a.maskManager.popMask(a.context)}},b.Sprite.fromFrame=function(a){var c=b.TextureCache[a];if(!c)throw new Error('The frameId "'+a+'" does not exist in the texture cache'+this);return new b.Sprite(c)},b.Sprite.fromImage=function(a,c,d){var e=b.Texture.fromImage(a,c,d);return new b.Sprite(e)},b.SpriteBatch=function(a){b.DisplayObjectContainer.call(this),this.textureThing=a,this.ready=!1},b.SpriteBatch.prototype=Object.create(b.DisplayObjectContainer.prototype),b.SpriteBatch.constructor=b.SpriteBatch,b.SpriteBatch.prototype.initWebGL=function(a){this.fastSpriteBatch=new b.WebGLFastSpriteBatch(a),this.ready=!0},b.SpriteBatch.prototype.updateTransform=function(){b.DisplayObject.prototype.updateTransform.call(this)},b.SpriteBatch.prototype._renderWebGL=function(a){!this.visible||this.alpha<=0||!this.children.length||(this.ready||this.initWebGL(a.gl),a.spriteBatch.stop(),a.shaderManager.setShader(a.shaderManager.fastShader),this.fastSpriteBatch.begin(this,a),this.fastSpriteBatch.render(this),a.spriteBatch.start())},b.SpriteBatch.prototype._renderCanvas=function(a){var c=a.context;c.globalAlpha=this.worldAlpha,b.DisplayObject.prototype.updateTransform.call(this);for(var d=this.worldTransform,e=!0,f=0;f<this.children.length;f++){var g=this.children[f];if(g.visible){var h=g.texture,i=h.frame;if(c.globalAlpha=this.worldAlpha*g.alpha,g.rotation%(2*Math.PI)===0)e&&(c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),e=!1),c.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width*g.scale.x+g.position.x+.5|0,g.anchor.y*-i.height*g.scale.y+g.position.y+.5|0,i.width*g.scale.x,i.height*g.scale.y);else{e||(e=!0),b.DisplayObject.prototype.updateTransform.call(g);var j=g.worldTransform;a.roundPixels?c.setTransform(j.a,j.c,j.b,j.d,0|j.tx,0|j.ty):c.setTransform(j.a,j.c,j.b,j.d,j.tx,j.ty),c.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width+.5|0,g.anchor.y*-i.height+.5|0,i.width,i.height)}}}},b.MovieClip=function(a){b.Sprite.call(this,a[0]),this.textures=a,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this.currentFrame=0,this.playing=!1},b.MovieClip.prototype=Object.create(b.Sprite.prototype),b.MovieClip.prototype.constructor=b.MovieClip,Object.defineProperty(b.MovieClip.prototype,"totalFrames",{get:function(){return this.textures.length}}),b.MovieClip.prototype.stop=function(){this.playing=!1},b.MovieClip.prototype.play=function(){this.playing=!0},b.MovieClip.prototype.gotoAndStop=function(a){this.playing=!1,this.currentFrame=a;var b=this.currentFrame+.5|0;this.setTexture(this.textures[b%this.textures.length])},b.MovieClip.prototype.gotoAndPlay=function(a){this.currentFrame=a,this.playing=!0},b.MovieClip.prototype.updateTransform=function(){if(b.Sprite.prototype.updateTransform.call(this),this.playing){this.currentFrame+=this.animationSpeed;var a=this.currentFrame+.5|0;this.currentFrame=this.currentFrame%this.textures.length,this.loop||a<this.textures.length?this.setTexture(this.textures[a%this.textures.length]):a>=this.textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())}},b.MovieClip.fromFrames=function(a){for(var c=[],d=0;d<a.length;d++)c.push(new b.Texture.fromFrame(a[d]));return new b.MovieClip(c)},b.MovieClip.fromImages=function(a){for(var c=[],d=0;d<a.length;d++)c.push(new b.Texture.fromImage(a[d]));return new b.MovieClip(c)},b.FilterBlock=function(){this.visible=!0,this.renderable=!0},b.Text=function(a,c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),b.Sprite.call(this,b.Texture.fromCanvas(this.canvas)),this.setText(a),this.setStyle(c)},b.Text.prototype=Object.create(b.Sprite.prototype),b.Text.prototype.constructor=b.Text,Object.defineProperty(b.Text.prototype,"width",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(b.Text.prototype,"height",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),b.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,a.wordWrapWidth=a.wordWrapWidth||100,a.dropShadow=a.dropShadow||!1,a.dropShadowAngle=a.dropShadowAngle||Math.PI/6,a.dropShadowDistance=a.dropShadowDistance||4,a.dropShadowColor=a.dropShadowColor||"black",this.style=a,this.dirty=!0},b.Text.prototype.setText=function(a){this.text=a.toString()||" ",this.dirty=!0},b.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.wordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,e=0;e<b.length;e++){var f=this.context.measureText(b[e]).width;c[e]=f,d=Math.max(d,f)}var g=d+this.style.strokeThickness;this.style.dropShadow&&(g+=this.style.dropShadowDistance),this.canvas.width=g+this.context.lineWidth;var h=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness,i=h*b.length;this.style.dropShadow&&(i+=this.style.dropShadowDistance),this.canvas.height=i,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="top";var j,k;if(this.style.dropShadow){this.context.fillStyle=this.style.dropShadowColor;var l=Math.sin(this.style.dropShadowAngle)*this.style.dropShadowDistance,m=Math.cos(this.style.dropShadowAngle)*this.style.dropShadowDistance;for(e=0;e<b.length;e++)j=this.style.strokeThickness/2,k=this.style.strokeThickness/2+e*h,"right"===this.style.align?j+=d-c[e]:"center"===this.style.align&&(j+=(d-c[e])/2),this.style.fill&&this.context.fillText(b[e],j+l,k+m)}for(this.context.fillStyle=this.style.fill,e=0;e<b.length;e++)j=this.style.strokeThickness/2,k=this.style.strokeThickness/2+e*h,"right"===this.style.align?j+=d-c[e]:"center"===this.style.align&&(j+=(d-c[e])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[e],j,k),this.style.fill&&this.context.fillText(b[e],j,k);this.updateTexture()},b.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.crop.width=this.texture.frame.width=this.canvas.width,this.texture.crop.height=this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height,this.requiresUpdate=!0},b.Text.prototype._renderWebGL=function(a){this.requiresUpdate&&(this.requiresUpdate=!1,b.updateWebGLTexture(this.texture.baseTexture,a.gl)),b.Sprite.prototype._renderWebGL.call(this,a)},b.Text.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),b.Sprite.prototype.updateTransform.call(this)},b.Text.prototype.determineFontHeight=function(a){var c=b.Text.heightCache[a];if(!c){var d=document.getElementsByTagName("body")[0],e=document.createElement("div"),f=document.createTextNode("M");e.appendChild(f),e.setAttribute("style",a+";position:absolute;top:0;left:0"),d.appendChild(e),c=e.offsetHeight,b.Text.heightCache[a]=c,d.removeChild(e)}return c},b.Text.prototype.wordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;0===g||i>e?(g>0&&(b+="\n"),b+=f[g],e=this.style.wordWrapWidth-h):(e-=i,b+=" "+f[g])}d<c.length-1&&(b+="\n")}return b},b.Text.prototype.destroy=function(a){this.context=null,this.canvas=null,this.texture.destroy(void 0===a?!0:a)},b.Text.heightCache={},b.BitmapText=function(a,c){b.DisplayObjectContainer.call(this),this._pool=[],this.setText(a),this.setStyle(c),this.updateText(),this.dirty=!1},b.BitmapText.prototype=Object.create(b.DisplayObjectContainer.prototype),b.BitmapText.prototype.constructor=b.BitmapText,b.BitmapText.prototype.setText=function(a){this.text=a||" ",this.dirty=!0},b.BitmapText.prototype.setStyle=function(a){a=a||{},a.align=a.align||"left",this.style=a;var c=a.font.split(" ");this.fontName=c[c.length-1],this.fontSize=c.length>=2?parseInt(c[c.length-2],10):b.BitmapText.fonts[this.fontName].size,this.dirty=!0,this.tint=a.tint},b.BitmapText.prototype.updateText=function(){for(var a=b.BitmapText.fonts[this.fontName],c=new b.Point,d=null,e=[],f=0,g=[],h=0,i=this.fontSize/a.size,j=0;j<this.text.length;j++){var k=this.text.charCodeAt(j);if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))g.push(c.x),f=Math.max(f,c.x),h++,c.x=0,c.y+=a.lineHeight,d=null;else{var l=a.chars[k];l&&(d&&l[d]&&(c.x+=l.kerning[d]),e.push({texture:l.texture,line:h,charCode:k,position:new b.Point(c.x+l.xOffset,c.y+l.yOffset)}),c.x+=l.xAdvance,d=k)}}g.push(c.x),f=Math.max(f,c.x);var m=[];for(j=0;h>=j;j++){var n=0;"right"===this.style.align?n=f-g[j]:"center"===this.style.align&&(n=(f-g[j])/2),m.push(n)}var o=this.children.length,p=e.length,q=this.tint||16777215;for(j=0;p>j;j++){var r=o>j?this.children[j]:this._pool.pop();r?r.setTexture(e[j].texture):r=new b.Sprite(e[j].texture),r.position.x=(e[j].position.x+m[e[j].line])*i,r.position.y=e[j].position.y*i,r.scale.x=r.scale.y=i,r.tint=q,r.parent||this.addChild(r)}for(;this.children.length>p;){var s=this.getChildAt(this.children.length-1);this._pool.push(s),this.removeChild(s)}this.textWidth=f*i,this.textHeight=(c.y+a.lineHeight)*i},b.BitmapText.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),b.DisplayObjectContainer.prototype.updateTransform.call(this)},b.BitmapText.fonts={},b.InteractionData=function(){this.global=new b.Point,this.target=null,this.originalEvent=null},b.InteractionData.prototype.getLocalPosition=function(a){var c=a.worldTransform,d=this.global,e=c.a,f=c.b,g=c.tx,h=c.c,i=c.d,j=c.ty,k=1/(e*i+f*-h);return new b.Point(i*k*d.x+-f*k*d.y+(j*f-g*i)*k,e*k*d.y+-h*k*d.x+(-j*e+g*h)*k)},b.InteractionData.prototype.constructor=b.InteractionData,b.InteractionManager=function(a){this.stage=a,this.mouse=new b.InteractionData,this.touchs={},this.tempPoint=new b.Point,this.mouseoverEnabled=!0,this.pool=[],this.interactiveItems=[],this.interactionDOMElement=null,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.last=0,this.currentCursorStyle="inherit",this.mouseOut=!1},b.InteractionManager.prototype.constructor=b.InteractionManager,b.InteractionManager.prototype.collectInteractiveSprite=function(a,b){for(var c=a.children,d=c.length,e=d-1;e>=0;e--){var f=c[e];f._interactive?(b.interactiveChildren=!0,this.interactiveItems.push(f),f.children.length>0&&this.collectInteractiveSprite(f,f)):(f.__iParent=null,f.children.length>0&&this.collectInteractiveSprite(f,b))}},b.InteractionManager.prototype.setTarget=function(a){this.target=a,null===this.interactionDOMElement&&this.setTargetDomElement(a.view)},b.InteractionManager.prototype.setTargetDomElement=function(a){this.removeEvents(),window.navigator.msPointerEnabled&&(a.style["-ms-content-zooming"]="none",a.style["-ms-touch-action"]="none"),this.interactionDOMElement=a,a.addEventListener("mousemove",this.onMouseMove,!0),a.addEventListener("mousedown",this.onMouseDown,!0),a.addEventListener("mouseout",this.onMouseOut,!0),a.addEventListener("touchstart",this.onTouchStart,!0),a.addEventListener("touchend",this.onTouchEnd,!0),a.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("mouseup",this.onMouseUp,!0)},b.InteractionManager.prototype.removeEvents=function(){this.interactionDOMElement&&(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]="",this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0),this.interactionDOMElement=null,window.removeEventListener("mouseup",this.onMouseUp,!0))},b.InteractionManager.prototype.update=function(){if(this.target){var a=Date.now(),c=a-this.last;if(c=c*b.INTERACTION_FREQUENCY/1e3,!(1>c)){this.last=a;var d=0;this.dirty&&this.rebuildInteractiveGraph();var e=this.interactiveItems.length,f="inherit",g=!1;for(d=0;e>d;d++){var h=this.interactiveItems[d];h.__hit=this.hitTest(h,this.mouse),this.mouse.target=h,h.__hit&&!g?(h.buttonMode&&(f=h.defaultCursor),h.interactiveChildren||(g=!0),h.__isOver||(h.mouseover&&h.mouseover(this.mouse),h.__isOver=!0)):h.__isOver&&(h.mouseout&&h.mouseout(this.mouse),h.__isOver=!1)}this.currentCursorStyle!==f&&(this.currentCursorStyle=f,this.interactionDOMElement.style.cursor=f)}}},b.InteractionManager.prototype.rebuildInteractiveGraph=function(){this.dirty=!1;for(var a=this.interactiveItems.length,b=0;a>b;b++)this.interactiveItems[b].interactiveChildren=!1;this.interactiveItems=[],this.stage.interactive&&this.interactiveItems.push(this.stage),this.collectInteractiveSprite(this.stage,this.stage)},b.InteractionManager.prototype.onMouseMove=function(a){this.dirty&&this.rebuildInteractiveGraph(),this.mouse.originalEvent=a||window.event;var b=this.interactionDOMElement.getBoundingClientRect();this.mouse.global.x=(a.clientX-b.left)*(this.target.width/b.width),this.mouse.global.y=(a.clientY-b.top)*(this.target.height/b.height);for(var c=this.interactiveItems.length,d=0;c>d;d++){var e=this.interactiveItems[d];e.mousemove&&e.mousemove(this.mouse)}},b.InteractionManager.prototype.onMouseDown=function(a){this.dirty&&this.rebuildInteractiveGraph(),this.mouse.originalEvent=a||window.event,b.AUTO_PREVENT_DEFAULT&&this.mouse.originalEvent.preventDefault();for(var c=this.interactiveItems.length,d=0;c>d;d++){var e=this.interactiveItems[d];if((e.mousedown||e.click)&&(e.__mouseIsDown=!0,e.__hit=this.hitTest(e,this.mouse),e.__hit&&(e.mousedown&&e.mousedown(this.mouse),e.__isDown=!0,!e.interactiveChildren)))break}},b.InteractionManager.prototype.onMouseOut=function(){this.dirty&&this.rebuildInteractiveGraph();var a=this.interactiveItems.length;this.interactionDOMElement.style.cursor="inherit";for(var b=0;a>b;b++){var c=this.interactiveItems[b];c.__isOver&&(this.mouse.target=c,c.mouseout&&c.mouseout(this.mouse),c.__isOver=!1)}this.mouseOut=!0,this.mouse.global.x=-1e4,this.mouse.global.y=-1e4},b.InteractionManager.prototype.onMouseUp=function(a){this.dirty&&this.rebuildInteractiveGraph(),this.mouse.originalEvent=a||window.event;
for(var b=this.interactiveItems.length,c=!1,d=0;b>d;d++){var e=this.interactiveItems[d];e.__hit=this.hitTest(e,this.mouse),e.__hit&&!c?(e.mouseup&&e.mouseup(this.mouse),e.__isDown&&e.click&&e.click(this.mouse),e.interactiveChildren||(c=!0)):e.__isDown&&e.mouseupoutside&&e.mouseupoutside(this.mouse),e.__isDown=!1}},b.InteractionManager.prototype.hitTest=function(a,c){var d=c.global;if(!a.worldVisible)return!1;var e=a instanceof b.Sprite,f=a.worldTransform,g=f.a,h=f.b,i=f.tx,j=f.c,k=f.d,l=f.ty,m=1/(g*k+h*-j),n=k*m*d.x+-h*m*d.y+(l*h-i*k)*m,o=g*m*d.y+-j*m*d.x+(-l*g+i*j)*m;if(c.target=a,a.hitArea&&a.hitArea.contains)return a.hitArea.contains(n,o)?(c.target=a,!0):!1;if(e){var p,q=a.texture.frame.width,r=a.texture.frame.height,s=-q*a.anchor.x;if(n>s&&s+q>n&&(p=-r*a.anchor.y,o>p&&p+r>o))return c.target=a,!0}for(var t=a.children.length,u=0;t>u;u++){var v=a.children[u],w=this.hitTest(v,c);if(w)return c.target=a,!0}return!1},b.InteractionManager.prototype.onTouchMove=function(a){this.dirty&&this.rebuildInteractiveGraph();var b,c=this.interactionDOMElement.getBoundingClientRect(),d=a.changedTouches,e=0;for(e=0;e<d.length;e++){var f=d[e];b=this.touchs[f.identifier],b.originalEvent=a||window.event,b.global.x=(f.clientX-c.left)*(this.target.width/c.width),b.global.y=(f.clientY-c.top)*(this.target.height/c.height),navigator.isCocoonJS&&(b.global.x=f.clientX,b.global.y=f.clientY);for(var g=0;g<this.interactiveItems.length;g++){var h=this.interactiveItems[g];h.touchmove&&h.__touchData&&h.__touchData[f.identifier]&&h.touchmove(b)}}},b.InteractionManager.prototype.onTouchStart=function(a){this.dirty&&this.rebuildInteractiveGraph();var c=this.interactionDOMElement.getBoundingClientRect();b.AUTO_PREVENT_DEFAULT&&a.preventDefault();for(var d=a.changedTouches,e=0;e<d.length;e++){var f=d[e],g=this.pool.pop();g||(g=new b.InteractionData),g.originalEvent=a||window.event,this.touchs[f.identifier]=g,g.global.x=(f.clientX-c.left)*(this.target.width/c.width),g.global.y=(f.clientY-c.top)*(this.target.height/c.height),navigator.isCocoonJS&&(g.global.x=f.clientX,g.global.y=f.clientY);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i];if((j.touchstart||j.tap)&&(j.__hit=this.hitTest(j,g),j.__hit&&(j.touchstart&&j.touchstart(g),j.__isDown=!0,j.__touchData=j.__touchData||{},j.__touchData[f.identifier]=g,!j.interactiveChildren)))break}}},b.InteractionManager.prototype.onTouchEnd=function(a){this.dirty&&this.rebuildInteractiveGraph();for(var b=this.interactionDOMElement.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var e=c[d],f=this.touchs[e.identifier],g=!1;f.global.x=(e.clientX-b.left)*(this.target.width/b.width),f.global.y=(e.clientY-b.top)*(this.target.height/b.height),navigator.isCocoonJS&&(f.global.x=e.clientX,f.global.y=e.clientY);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i];j.__touchData&&j.__touchData[e.identifier]&&(j.__hit=this.hitTest(j,j.__touchData[e.identifier]),f.originalEvent=a||window.event,(j.touchend||j.tap)&&(j.__hit&&!g?(j.touchend&&j.touchend(f),j.__isDown&&j.tap&&j.tap(f),j.interactiveChildren||(g=!0)):j.__isDown&&j.touchendoutside&&j.touchendoutside(f),j.__isDown=!1),j.__touchData[e.identifier]=null)}this.pool.push(f),this.touchs[e.identifier]=null}},b.Stage=function(a){b.DisplayObjectContainer.call(this),this.worldTransform=new b.Matrix,this.interactive=!0,this.interactionManager=new b.InteractionManager(this),this.dirty=!0,this.stage=this,this.stage.hitArea=new b.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(a)},b.Stage.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Stage.prototype.constructor=b.Stage,b.Stage.prototype.setInteractionDelegate=function(a){this.interactionManager.setTargetDomElement(a)},b.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},b.Stage.prototype.setBackgroundColor=function(a){this.backgroundColor=a||0,this.backgroundColorSplit=b.hex2rgb(this.backgroundColor);var c=this.backgroundColor.toString(16);c="000000".substr(0,6-c.length)+c,this.backgroundColorString="#"+c},b.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var c=0,d=["ms","moz","webkit","o"],e=0;e<d.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[d[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[e]+"CancelAnimationFrame"]||window[d[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=window.setTimeout(function(){a(b+d)},d);return c=b+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.requestAnimFrame=window.requestAnimationFrame,b.hex2rgb=function(a){return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]},b.rgb2hex=function(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),b.AjaxRequest=function(){var a=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new window.XMLHttpRequest:!1;for(var b=0;b<a.length;b++)try{return new window.ActiveXObject(a[b])}catch(c){}},b.canUseNewCanvasBlendModes=function(){var a=document.createElement("canvas");a.width=1,a.height=1;var b=a.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,1,1),b.globalCompositeOperation="multiply",b.fillStyle="#fff",b.fillRect(0,0,1,1),0===b.getImageData(0,0,1,1).data[0]},b.getNextPowerOfTwo=function(a){if(a>0&&0===(a&a-1))return a;for(var b=1;a>b;)b<<=1;return b},b.EventTarget=function(){var a={};this.addEventListener=this.on=function(b,c){void 0===a[b]&&(a[b]=[]),-1===a[b].indexOf(c)&&a[b].unshift(c)},this.dispatchEvent=this.emit=function(b){if(a[b.type]&&a[b.type].length)for(var c=a[b.type].length-1;c>=0;c--)a[b.type][c](b)},this.removeEventListener=this.off=function(b,c){if(void 0!==a[b]){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)}},this.removeAllEventListeners=function(b){var c=a[b];c&&(c.length=0)}},b.autoDetectRenderer=function(a,c,d,e,f){a||(a=800),c||(c=600);var g=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}();return g?new b.WebGLRenderer(a,c,d,e,f):new b.CanvasRenderer(a,c,d,e)},b.autoDetectRecommendedRenderer=function(a,c,d,e,f){a||(a=800),c||(c=600);var g=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}(),h=/Android/i.test(navigator.userAgent);return g&&!h?new b.WebGLRenderer(a,c,d,e,f):new b.CanvasRenderer(a,c,d,e)},b.PolyK={},b.PolyK.Triangulate=function(a){var c=!0,d=a.length>>1;if(3>d)return[];for(var e=[],f=[],g=0;d>g;g++)f.push(g);g=0;for(var h=d;h>3;){var i=f[(g+0)%h],j=f[(g+1)%h],k=f[(g+2)%h],l=a[2*i],m=a[2*i+1],n=a[2*j],o=a[2*j+1],p=a[2*k],q=a[2*k+1],r=!1;if(b.PolyK._convex(l,m,n,o,p,q,c)){r=!0;for(var s=0;h>s;s++){var t=f[s];if(t!==i&&t!==j&&t!==k&&b.PolyK._PointInTriangle(a[2*t],a[2*t+1],l,m,n,o,p,q)){r=!1;break}}}if(r)e.push(i,j,k),f.splice((g+1)%h,1),h--,g=0;else if(g++>3*h){if(!c)return window.console.log("PIXI Warning: shape too complex to fill"),[];for(e=[],f=[],g=0;d>g;g++)f.push(g);g=0,h=d,c=!1}}return e.push(f[0],f[1],f[2]),e},b.PolyK._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},b.PolyK._convex=function(a,b,c,d,e,f,g){return(b-d)*(e-c)+(c-a)*(f-d)>=0===g},b.initDefaultShaders=function(){},b.CompileVertexShader=function(a,c){return b._CompileShader(a,c,a.VERTEX_SHADER)},b.CompileFragmentShader=function(a,c){return b._CompileShader(a,c,a.FRAGMENT_SHADER)},b._CompileShader=function(a,b,c){var d=b.join("\n"),e=a.createShader(c);return a.shaderSource(e,d),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?e:(window.console.log(a.getShaderInfoLog(e)),null)},b.compileProgram=function(a,c,d){var e=b.CompileFragmentShader(a,d),f=b.CompileVertexShader(a,c),g=a.createProgram();return a.attachShader(g,f),a.attachShader(g,e),a.linkProgram(g),a.getProgramParameter(g,a.LINK_STATUS)||window.console.log("Could not initialise shaders"),g},b.PixiShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.textureCount=0,this.attributes=[],this.init()},b.PixiShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc||b.PixiShader.defaultVertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.dimensions=a.getUniformLocation(c,"dimensions"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(c,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];for(var d in this.uniforms)this.uniforms[d].uniformLocation=a.getUniformLocation(c,d);this.initUniforms(),this.program=c},b.PixiShader.prototype.initUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms){a=this.uniforms[c];var d=a.type;"sampler2D"===d?(a._init=!1,null!==a.value&&this.initSampler2D(a)):"mat2"===d||"mat3"===d||"mat4"===d?(a.glMatrix=!0,a.glValueLength=1,"mat2"===d?a.glFunc=b.uniformMatrix2fv:"mat3"===d?a.glFunc=b.uniformMatrix3fv:"mat4"===d&&(a.glFunc=b.uniformMatrix4fv)):(a.glFunc=b["uniform"+d],a.glValueLength="2f"===d||"2i"===d?2:"3f"===d||"3i"===d?3:"4f"===d||"4i"===d?4:1)}},b.PixiShader.prototype.initSampler2D=function(a){if(a.value&&a.value.baseTexture&&a.value.baseTexture.hasLoaded){var b=this.gl;if(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTextures[b.id]),a.textureData){var c=a.textureData,d=c.magFilter?c.magFilter:b.LINEAR,e=c.minFilter?c.minFilter:b.LINEAR,f=c.wrapS?c.wrapS:b.CLAMP_TO_EDGE,g=c.wrapT?c.wrapT:b.CLAMP_TO_EDGE,h=c.luminance?b.LUMINANCE:b.RGBA;if(c.repeat&&(f=b.REPEAT,g=b.REPEAT),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,!!c.flipY),c.width){var i=c.width?c.width:512,j=c.height?c.height:2,k=c.border?c.border:0;b.texImage2D(b.TEXTURE_2D,0,h,i,j,k,h,b.UNSIGNED_BYTE,null)}else b.texImage2D(b.TEXTURE_2D,0,h,b.RGBA,b.UNSIGNED_BYTE,a.value.baseTexture.source);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,d),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,e),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,f),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,g)}b.uniform1i(a.uniformLocation,this.textureCount),a._init=!0,this.textureCount++}},b.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;var a,c=this.gl;for(var d in this.uniforms)a=this.uniforms[d],1===a.glValueLength?a.glMatrix===!0?a.glFunc.call(c,a.uniformLocation,a.transpose,a.value):a.glFunc.call(c,a.uniformLocation,a.value):2===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y):3===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y,a.value.z):4===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y,a.value.z,a.value.w):"sampler2D"===a.type&&(a._init?(c.activeTexture(c["TEXTURE"+this.textureCount]),c.bindTexture(c.TEXTURE_2D,a.value.baseTexture._glTextures[c.id]||b.createWebGLTexture(a.value.baseTexture,c)),c.uniform1i(a.uniformLocation,this.textureCount),this.textureCount++):this.initSampler2D(a))},b.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},b.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"],b.PixiFastShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"],this.textureCount=0,this.init()},b.PixiFastShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.dimensions=a.getUniformLocation(c,"dimensions"),this.uMatrix=a.getUniformLocation(c,"uMatrix"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aPositionCoord=a.getAttribLocation(c,"aPositionCoord"),this.aScale=a.getAttribLocation(c,"aScale"),this.aRotation=a.getAttribLocation(c,"aRotation"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(c,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute],this.program=c},b.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},b.StripShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"],this.init()},b.StripShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.colorAttribute=a.getAttribLocation(c,"aColor"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.attributes=[this.aVertexPosition,this.aTextureCoord],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.PrimitiveShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"],this.init()},b.PrimitiveShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.tintColor=a.getUniformLocation(c,"tint"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.colorAttribute=a.getAttribLocation(c,"aColor"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},b.ComplexPrimitiveShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"],this.init()},b.ComplexPrimitiveShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.tintColor=a.getUniformLocation(c,"tint"),this.color=a.getUniformLocation(c,"color"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.ComplexPrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},b.WebGLGraphics=function(){},b.WebGLGraphics.renderGraphics=function(a,c){var d,e=c.gl,f=c.projection,g=c.offset,h=c.shaderManager.primitiveShader;a.dirty&&b.WebGLGraphics.updateGraphics(a,e);for(var i=a._webGL[e.id],j=0;j<i.data.length;j++)1===i.data[j].mode?(d=i.data[j],c.stencilManager.pushStencil(a,d,c),e.drawElements(e.TRIANGLE_FAN,4,e.UNSIGNED_SHORT,2*(d.indices.length-4)),c.stencilManager.popStencil(a,d,c),this.last=d.mode):(d=i.data[j],c.shaderManager.setShader(h),h=c.shaderManager.primitiveShader,e.uniformMatrix3fv(h.translationMatrix,!1,a.worldTransform.toArray(!0)),e.uniform2f(h.projectionVector,f.x,-f.y),e.uniform2f(h.offsetVector,-g.x,-g.y),e.uniform3fv(h.tintColor,b.hex2rgb(a.tint)),e.uniform1f(h.alpha,a.worldAlpha),e.bindBuffer(e.ARRAY_BUFFER,d.buffer),e.vertexAttribPointer(h.aVertexPosition,2,e.FLOAT,!1,24,0),e.vertexAttribPointer(h.colorAttribute,4,e.FLOAT,!1,24,8),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,d.indexBuffer),e.drawElements(e.TRIANGLE_STRIP,d.indices.length,e.UNSIGNED_SHORT,0))},b.WebGLGraphics.updateGraphics=function(a,c){var d=a._webGL[c.id];d||(d=a._webGL[c.id]={lastIndex:0,data:[],gl:c}),a.dirty=!1;var e;if(a.clearDirty){for(a.clearDirty=!1,e=0;e<d.data.length;e++){var f=d.data[e];f.reset(),b.WebGLGraphics.graphicsDataPool.push(f)}d.data=[],d.lastIndex=0}var g;for(e=d.lastIndex;e<a.graphicsData.length;e++){var h=a.graphicsData[e];h.type===b.Graphics.POLY?(h.fill&&h.points.length>6&&(h.points.length>10?(g=b.WebGLGraphics.switchMode(d,1),b.WebGLGraphics.buildComplexPoly(h,g)):(g=b.WebGLGraphics.switchMode(d,0),b.WebGLGraphics.buildPoly(h,g))),h.lineWidth>0&&(g=b.WebGLGraphics.switchMode(d,0),b.WebGLGraphics.buildLine(h,g))):(g=b.WebGLGraphics.switchMode(d,0),h.type===b.Graphics.RECT?b.WebGLGraphics.buildRectangle(h,g):h.type===b.Graphics.CIRC||h.type===b.Graphics.ELIP?b.WebGLGraphics.buildCircle(h,g):h.type===b.Graphics.RREC&&b.WebGLGraphics.buildRoundedRectangle(h,g)),d.lastIndex++}for(e=0;e<d.data.length;e++)g=d.data[e],g.dirty&&g.upload()},b.WebGLGraphics.switchMode=function(a,c){var d;return a.data.length?(d=a.data[a.data.length-1],(d.mode!==c||1===c)&&(d=b.WebGLGraphics.graphicsDataPool.pop()||new b.WebGLGraphicsData(a.gl),d.mode=c,a.data.push(d))):(d=b.WebGLGraphics.graphicsDataPool.pop()||new b.WebGLGraphicsData(a.gl),d.mode=c,a.data.push(d)),d.dirty=!0,d},b.WebGLGraphics.buildRectangle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3];if(a.fill){var i=b.hex2rgb(a.fillColor),j=a.fillAlpha,k=i[0]*j,l=i[1]*j,m=i[2]*j,n=c.points,o=c.indices,p=n.length/6;n.push(e,f),n.push(k,l,m,j),n.push(e+g,f),n.push(k,l,m,j),n.push(e,f+h),n.push(k,l,m,j),n.push(e+g,f+h),n.push(k,l,m,j),o.push(p,p,p+1,p+2,p+3,p+3)}if(a.lineWidth){var q=a.points;a.points=[e,f,e+g,f,e+g,f+h,e,f+h,e,f],b.WebGLGraphics.buildLine(a,c),a.points=q}},b.WebGLGraphics.buildRoundedRectangle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3],i=d[4],j=[];if(j.push(e,f+i),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e,f+h-i,e,f+h,e+i,f+h)),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e+g-i,f+h,e+g,f+h,e+g,f+h-i)),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e+g,f+i,e+g,f,e+g-i,f)),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e+i,f,e,f,e,f+i)),a.fill){var k=b.hex2rgb(a.fillColor),l=a.fillAlpha,m=k[0]*l,n=k[1]*l,o=k[2]*l,p=c.points,q=c.indices,r=p.length/6,s=b.PolyK.Triangulate(j),t=0;for(t=0;t<s.length;t+=3)q.push(s[t]+r),q.push(s[t]+r),q.push(s[t+1]+r),q.push(s[t+2]+r),q.push(s[t+2]+r);for(t=0;t<j.length;t++)p.push(j[t],j[++t],m,n,o,l)}if(a.lineWidth){var u=a.points;a.points=j,b.WebGLGraphics.buildLine(a,c),a.points=u}},b.WebGLGraphics.quadraticBezierCurve=function(a,b,c,d,e,f){function g(a,b,c){var d=b-a;return a+d*c}for(var h,i,j,k,l,m,n=20,o=[],p=0,q=0;n>=q;q++)p=q/n,h=g(a,c,p),i=g(b,d,p),j=g(c,e,p),k=g(d,f,p),l=g(h,j,p),m=g(i,k,p),o.push(l,m);return o},b.WebGLGraphics.buildCircle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3],i=40,j=2*Math.PI/i,k=0;if(a.fill){var l=b.hex2rgb(a.fillColor),m=a.fillAlpha,n=l[0]*m,o=l[1]*m,p=l[2]*m,q=c.points,r=c.indices,s=q.length/6;for(r.push(s),k=0;i+1>k;k++)q.push(e,f,n,o,p,m),q.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h,n,o,p,m),r.push(s++,s++);r.push(s-1)}if(a.lineWidth){var t=a.points;for(a.points=[],k=0;i+1>k;k++)a.points.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h);b.WebGLGraphics.buildLine(a,c),a.points=t}},b.WebGLGraphics.buildLine=function(a,c){var d=0,e=a.points;if(0!==e.length){if(a.lineWidth%2)for(d=0;d<e.length;d++)e[d]+=.5;var f=new b.Point(e[0],e[1]),g=new b.Point(e[e.length-2],e[e.length-1]);if(f.x===g.x&&f.y===g.y){e=e.slice(),e.pop(),e.pop(),g=new b.Point(e[e.length-2],e[e.length-1]);var h=g.x+.5*(f.x-g.x),i=g.y+.5*(f.y-g.y);e.unshift(h,i),e.push(h,i)}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=c.points,H=c.indices,I=e.length/2,J=e.length,K=G.length/6,L=a.lineWidth/2,M=b.hex2rgb(a.lineColor),N=a.lineAlpha,O=M[0]*N,P=M[1]*N,Q=M[2]*N;for(l=e[0],m=e[1],n=e[2],o=e[3],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(l-r,m-s,O,P,Q,N),G.push(l+r,m+s,O,P,Q,N),d=1;I-1>d;d++)l=e[2*(d-1)],m=e[2*(d-1)+1],n=e[2*d],o=e[2*d+1],p=e[2*(d+1)],q=e[2*(d+1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,t=-(o-q),u=n-p,F=Math.sqrt(t*t+u*u),t/=F,u/=F,t*=L,u*=L,x=-s+m-(-s+o),y=-r+n-(-r+l),z=(-r+l)*(-s+o)-(-r+n)*(-s+m),A=-u+q-(-u+o),B=-t+n-(-t+p),C=(-t+p)*(-u+o)-(-t+n)*(-u+q),D=x*B-A*y,Math.abs(D)<.1?(D+=10.1,G.push(n-r,o-s,O,P,Q,N),G.push(n+r,o+s,O,P,Q,N)):(j=(y*C-B*z)/D,k=(A*z-x*C)/D,E=(j-n)*(j-n)+(k-o)+(k-o),E>19600?(v=r-t,w=s-u,F=Math.sqrt(v*v+w*w),v/=F,w/=F,v*=L,w*=L,G.push(n-v,o-w),G.push(O,P,Q,N),G.push(n+v,o+w),G.push(O,P,Q,N),G.push(n-v,o-w),G.push(O,P,Q,N),J++):(G.push(j,k),G.push(O,P,Q,N),G.push(n-(j-n),o-(k-o)),G.push(O,P,Q,N)));for(l=e[2*(I-2)],m=e[2*(I-2)+1],n=e[2*(I-1)],o=e[2*(I-1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(n-r,o-s),G.push(O,P,Q,N),G.push(n+r,o+s),G.push(O,P,Q,N),H.push(K),d=0;J>d;d++)H.push(K++);H.push(K-1)}},b.WebGLGraphics.buildComplexPoly=function(a,c){var d=a.points.slice();if(!(d.length<6)){var e=c.indices;c.points=d,c.alpha=a.fillAlpha,c.color=b.hex2rgb(a.fillColor);for(var f,g,h=1/0,i=-1/0,j=1/0,k=-1/0,l=0;l<d.length;l+=2)f=d[l],g=d[l+1],h=h>f?f:h,i=f>i?f:i,j=j>g?g:j,k=g>k?g:k;d.push(h,j,i,j,i,k,h,k);var m=d.length/2;for(l=0;m>l;l++)e.push(l)}},b.WebGLGraphics.buildPoly=function(a,c){var d=a.points;if(!(d.length<6)){var e=c.points,f=c.indices,g=d.length/2,h=b.hex2rgb(a.fillColor),i=a.fillAlpha,j=h[0]*i,k=h[1]*i,l=h[2]*i,m=b.PolyK.Triangulate(d),n=e.length/6,o=0;for(o=0;o<m.length;o+=3)f.push(m[o]+n),f.push(m[o]+n),f.push(m[o+1]+n),f.push(m[o+2]+n),f.push(m[o+2]+n);for(o=0;g>o;o++)e.push(d[2*o],d[2*o+1],j,k,l,i)}},b.WebGLGraphics.graphicsDataPool=[],b.WebGLGraphicsData=function(a){this.gl=a,this.color=[0,0,0],this.points=[],this.indices=[],this.lastIndex=0,this.buffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.mode=1,this.alpha=1,this.dirty=!0},b.WebGLGraphicsData.prototype.reset=function(){this.points=[],this.indices=[],this.lastIndex=0},b.WebGLGraphicsData.prototype.upload=function(){var a=this.gl;this.glPoints=new Float32Array(this.points),a.bindBuffer(a.ARRAY_BUFFER,this.buffer),a.bufferData(a.ARRAY_BUFFER,this.glPoints,a.STATIC_DRAW),this.glIndicies=new Uint16Array(this.indices),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.glIndicies,a.STATIC_DRAW),this.dirty=!1},b.glContexts=[],b.WebGLRenderer=function(a,c,d,e,f,g){b.defaultRenderer||(b.sayHello("webGL"),b.defaultRenderer=this),this.type=b.WEBGL_RENDERER,this.transparent=!!e,this.preserveDrawingBuffer=g,this.width=a||800,this.height=c||600,this.view=d||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height,this.contextLost=this.handleContextLost.bind(this),this.contextRestoredLost=this.handleContextRestored.bind(this),this.view.addEventListener("webglcontextlost",this.contextLost,!1),this.view.addEventListener("webglcontextrestored",this.contextRestoredLost,!1),this.options={alpha:this.transparent,antialias:!!f,premultipliedAlpha:!!e,stencil:!0,preserveDrawingBuffer:g};var h=null;if(["experimental-webgl","webgl"].forEach(function(a){try{h=h||this.view.getContext(a,this.options)}catch(b){}},this),!h)throw new Error("This browser does not support webGL. Try using the canvas renderer"+this);this.gl=h,this.glContextId=h.id=b.WebGLRenderer.glContextId++,b.glContexts[this.glContextId]=h,b.blendModesWebGL||(b.blendModesWebGL=[],b.blendModesWebGL[b.blendModes.NORMAL]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.ADD]=[h.SRC_ALPHA,h.DST_ALPHA],b.blendModesWebGL[b.blendModes.MULTIPLY]=[h.DST_COLOR,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SCREEN]=[h.SRC_ALPHA,h.ONE],b.blendModesWebGL[b.blendModes.OVERLAY]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.DARKEN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.LIGHTEN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR_DODGE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR_BURN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.HARD_LIGHT]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SOFT_LIGHT]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.DIFFERENCE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.EXCLUSION]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.HUE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SATURATION]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.LUMINOSITY]=[h.ONE,h.ONE_MINUS_SRC_ALPHA]),this.projection=new b.Point,this.projection.x=this.width/2,this.projection.y=-this.height/2,this.offset=new b.Point(0,0),this.resize(this.width,this.height),this.contextLost=!1,this.shaderManager=new b.WebGLShaderManager(h),this.spriteBatch=new b.WebGLSpriteBatch(h),this.maskManager=new b.WebGLMaskManager(h),this.filterManager=new b.WebGLFilterManager(h,this.transparent),this.stencilManager=new b.WebGLStencilManager(h),this.blendModeManager=new b.WebGLBlendModeManager(h),this.renderSession={},this.renderSession.gl=this.gl,this.renderSession.drawCount=0,this.renderSession.shaderManager=this.shaderManager,this.renderSession.maskManager=this.maskManager,this.renderSession.filterManager=this.filterManager,this.renderSession.blendModeManager=this.blendModeManager,this.renderSession.spriteBatch=this.spriteBatch,this.renderSession.stencilManager=this.stencilManager,this.renderSession.renderer=this,h.useProgram(this.shaderManager.defaultShader.program),h.disable(h.DEPTH_TEST),h.disable(h.CULL_FACE),h.enable(h.BLEND),h.colorMask(!0,!0,!0,this.transparent)},b.WebGLRenderer.prototype.constructor=b.WebGLRenderer,b.WebGLRenderer.prototype.render=function(a){if(!this.contextLost){this.__stage!==a&&(a.interactive&&a.interactionManager.removeEvents(),this.__stage=a),b.WebGLRenderer.updateTextures(),a.updateTransform(),a._interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)));var c=this.gl;c.viewport(0,0,this.width,this.height),c.bindFramebuffer(c.FRAMEBUFFER,null),this.transparent?c.clearColor(0,0,0,0):c.clearColor(a.backgroundColorSplit[0],a.backgroundColorSplit[1],a.backgroundColorSplit[2],1),c.clear(c.COLOR_BUFFER_BIT),this.renderDisplayObject(a,this.projection),a.interactive?a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)):a._interactiveEventsAdded&&(a._interactiveEventsAdded=!1,a.interactionManager.setTarget(this))}},b.WebGLRenderer.prototype.renderDisplayObject=function(a,c,d){this.renderSession.blendModeManager.setBlendMode(b.blendModes.NORMAL),this.renderSession.drawCount=0,this.renderSession.currentBlendMode=9999,this.renderSession.projection=c,this.renderSession.offset=this.offset,this.spriteBatch.begin(this.renderSession),this.filterManager.begin(this.renderSession,d),a._renderWebGL(this.renderSession),this.spriteBatch.end()},b.WebGLRenderer.updateTextures=function(){var a=0;for(a=0;a<b.Texture.frameUpdates.length;a++)b.WebGLRenderer.updateTextureFrame(b.Texture.frameUpdates[a]);for(a=0;a<b.texturesToDestroy.length;a++)b.WebGLRenderer.destroyTexture(b.texturesToDestroy[a]);b.texturesToUpdate.length=0,b.texturesToDestroy.length=0,b.Texture.frameUpdates.length=0},b.WebGLRenderer.destroyTexture=function(a){for(var c=a._glTextures.length-1;c>=0;c--){var d=a._glTextures[c],e=b.glContexts[c];
e&&d&&e.deleteTexture(d)}a._glTextures.length=0},b.WebGLRenderer.updateTextureFrame=function(a){a._updateWebGLuvs()},b.WebGLRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b,this.gl.viewport(0,0,this.width,this.height),this.projection.x=this.width/2,this.projection.y=-this.height/2},b.createWebGLTexture=function(a,c){return a.hasLoaded&&(a._glTextures[c.id]=c.createTexture(),c.bindTexture(c.TEXTURE_2D,a._glTextures[c.id]),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultipliedAlpha),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a.source),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),a._powerOf2?(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.REPEAT),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.REPEAT)):(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)),c.bindTexture(c.TEXTURE_2D,null),a._dirty[c.id]=!1),a._glTextures[c.id]},b.updateWebGLTexture=function(a,c){a._glTextures[c.id]&&(c.bindTexture(c.TEXTURE_2D,a._glTextures[c.id]),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultipliedAlpha),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a.source),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),a._powerOf2?(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.REPEAT),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.REPEAT)):(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)),a._dirty[c.id]=!1)},b.WebGLRenderer.prototype.handleContextLost=function(a){a.preventDefault(),this.contextLost=!0},b.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(a){try{this.gl=this.view.getContext("webgl",this.options)}catch(c){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var d=this.gl;d.id=b.WebGLRenderer.glContextId++,this.shaderManager.setContext(d),this.spriteBatch.setContext(d),this.primitiveBatch.setContext(d),this.maskManager.setContext(d),this.filterManager.setContext(d),this.renderSession.gl=this.gl,d.disable(d.DEPTH_TEST),d.disable(d.CULL_FACE),d.enable(d.BLEND),d.colorMask(!0,!0,!0,this.transparent),this.gl.viewport(0,0,this.width,this.height);for(var e in b.TextureCache){var f=b.TextureCache[e].baseTexture;f._glTextures=[]}this.contextLost=!1},b.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLost),this.view.removeEventListener("webglcontextrestored",this.contextRestoredLost),b.glContexts[this.glContextId]=null,this.projection=null,this.offset=null,this.shaderManager.destroy(),this.spriteBatch.destroy(),this.primitiveBatch.destroy(),this.maskManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.spriteBatch=null,this.maskManager=null,this.filterManager=null,this.gl=null,this.renderSession=null},b.WebGLRenderer.glContextId=0,b.WebGLBlendModeManager=function(a){this.gl=a,this.currentBlendMode=99999},b.WebGLBlendModeManager.prototype.setBlendMode=function(a){if(this.currentBlendMode===a)return!1;this.currentBlendMode=a;var c=b.blendModesWebGL[this.currentBlendMode];return this.gl.blendFunc(c[0],c[1]),!0},b.WebGLBlendModeManager.prototype.destroy=function(){this.gl=null},b.WebGLMaskManager=function(a){this.maskStack=[],this.maskPosition=0,this.setContext(a),this.reverse=!1,this.count=0},b.WebGLMaskManager.prototype.setContext=function(a){this.gl=a},b.WebGLMaskManager.prototype.pushMask=function(a,c){var d=c.gl;a.dirty&&b.WebGLGraphics.updateGraphics(a,d),a._webGL[d.id].data.length&&c.stencilManager.pushStencil(a,a._webGL[d.id].data[0],c)},b.WebGLMaskManager.prototype.popMask=function(a,b){var c=this.gl;b.stencilManager.popStencil(a,a._webGL[c.id].data[0],b)},b.WebGLMaskManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},b.WebGLStencilManager=function(a){this.stencilStack=[],this.setContext(a),this.reverse=!0,this.count=0},b.WebGLStencilManager.prototype.setContext=function(a){this.gl=a},b.WebGLStencilManager.prototype.pushStencil=function(a,b,c){var d=this.gl;this.bindGraphics(a,b,c),0===this.stencilStack.length&&(d.enable(d.STENCIL_TEST),d.clear(d.STENCIL_BUFFER_BIT),this.reverse=!0,this.count=0),this.stencilStack.push(b);var e=this.count;d.colorMask(!1,!1,!1,!1),d.stencilFunc(d.ALWAYS,0,255),d.stencilOp(d.KEEP,d.KEEP,d.INVERT),1===b.mode?(d.drawElements(d.TRIANGLE_FAN,b.indices.length-4,d.UNSIGNED_SHORT,0),this.reverse?(d.stencilFunc(d.EQUAL,255-e,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)):(d.stencilFunc(d.EQUAL,e,255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)),d.drawElements(d.TRIANGLE_FAN,4,d.UNSIGNED_SHORT,2*(b.indices.length-4)),this.reverse?d.stencilFunc(d.EQUAL,255-(e+1),255):d.stencilFunc(d.EQUAL,e+1,255),this.reverse=!this.reverse):(this.reverse?(d.stencilFunc(d.EQUAL,e,255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)):(d.stencilFunc(d.EQUAL,255-e,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)),d.drawElements(d.TRIANGLE_STRIP,b.indices.length,d.UNSIGNED_SHORT,0),this.reverse?d.stencilFunc(d.EQUAL,e+1,255):d.stencilFunc(d.EQUAL,255-(e+1),255)),d.colorMask(!0,!0,!0,!0),d.stencilOp(d.KEEP,d.KEEP,d.KEEP),this.count++},b.WebGLStencilManager.prototype.bindGraphics=function(a,c,d){this._currentGraphics=a;var e,f=this.gl,g=d.projection,h=d.offset;1===c.mode?(e=d.shaderManager.complexPrimativeShader,d.shaderManager.setShader(e),f.uniformMatrix3fv(e.translationMatrix,!1,a.worldTransform.toArray(!0)),f.uniform2f(e.projectionVector,g.x,-g.y),f.uniform2f(e.offsetVector,-h.x,-h.y),f.uniform3fv(e.tintColor,b.hex2rgb(a.tint)),f.uniform3fv(e.color,c.color),f.uniform1f(e.alpha,a.worldAlpha*c.alpha),f.bindBuffer(f.ARRAY_BUFFER,c.buffer),f.vertexAttribPointer(e.aVertexPosition,2,f.FLOAT,!1,8,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,c.indexBuffer)):(e=d.shaderManager.primitiveShader,d.shaderManager.setShader(e),f.uniformMatrix3fv(e.translationMatrix,!1,a.worldTransform.toArray(!0)),f.uniform2f(e.projectionVector,g.x,-g.y),f.uniform2f(e.offsetVector,-h.x,-h.y),f.uniform3fv(e.tintColor,b.hex2rgb(a.tint)),f.uniform1f(e.alpha,a.worldAlpha),f.bindBuffer(f.ARRAY_BUFFER,c.buffer),f.vertexAttribPointer(e.aVertexPosition,2,f.FLOAT,!1,24,0),f.vertexAttribPointer(e.colorAttribute,4,f.FLOAT,!1,24,8),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,c.indexBuffer))},b.WebGLStencilManager.prototype.popStencil=function(a,b,c){var d=this.gl;if(this.stencilStack.pop(),this.count--,0===this.stencilStack.length)d.disable(d.STENCIL_TEST);else{var e=this.count;this.bindGraphics(a,b,c),d.colorMask(!1,!1,!1,!1),1===b.mode?(this.reverse=!this.reverse,this.reverse?(d.stencilFunc(d.EQUAL,255-(e+1),255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)):(d.stencilFunc(d.EQUAL,e+1,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)),d.drawElements(d.TRIANGLE_FAN,4,d.UNSIGNED_SHORT,2*(b.indices.length-4)),d.stencilFunc(d.ALWAYS,0,255),d.stencilOp(d.KEEP,d.KEEP,d.INVERT),d.drawElements(d.TRIANGLE_FAN,b.indices.length-4,d.UNSIGNED_SHORT,0),this.reverse?d.stencilFunc(d.EQUAL,e,255):d.stencilFunc(d.EQUAL,255-e,255)):(this.reverse?(d.stencilFunc(d.EQUAL,e+1,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)):(d.stencilFunc(d.EQUAL,255-(e+1),255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)),d.drawElements(d.TRIANGLE_STRIP,b.indices.length,d.UNSIGNED_SHORT,0),this.reverse?d.stencilFunc(d.EQUAL,e,255):d.stencilFunc(d.EQUAL,255-e,255)),d.colorMask(!0,!0,!0,!0),d.stencilOp(d.KEEP,d.KEEP,d.KEEP)}},b.WebGLStencilManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},b.WebGLShaderManager=function(a){this.maxAttibs=10,this.attribState=[],this.tempAttribState=[],this.shaderMap=[];for(var b=0;b<this.maxAttibs;b++)this.attribState[b]=!1;this.setContext(a)},b.WebGLShaderManager.prototype.setContext=function(a){this.gl=a,this.primitiveShader=new b.PrimitiveShader(a),this.complexPrimativeShader=new b.ComplexPrimitiveShader(a),this.defaultShader=new b.PixiShader(a),this.fastShader=new b.PixiFastShader(a),this.stripShader=new b.StripShader(a),this.setShader(this.defaultShader)},b.WebGLShaderManager.prototype.setAttribs=function(a){var b;for(b=0;b<this.tempAttribState.length;b++)this.tempAttribState[b]=!1;for(b=0;b<a.length;b++){var c=a[b];this.tempAttribState[c]=!0}var d=this.gl;for(b=0;b<this.attribState.length;b++)this.attribState[b]!==this.tempAttribState[b]&&(this.attribState[b]=this.tempAttribState[b],this.tempAttribState[b]?d.enableVertexAttribArray(b):d.disableVertexAttribArray(b))},b.WebGLShaderManager.prototype.setShader=function(a){return this._currentId===a._UID?!1:(this._currentId=a._UID,this.currentShader=a,this.gl.useProgram(a.program),this.setAttribs(a.attributes),!0)},b.WebGLShaderManager.prototype.destroy=function(){this.attribState=null,this.tempAttribState=null,this.primitiveShader.destroy(),this.defaultShader.destroy(),this.fastShader.destroy(),this.stripShader.destroy(),this.gl=null},b.WebGLSpriteBatch=function(a){this.vertSize=6,this.size=2e3;var b=4*this.size*this.vertSize,c=6*this.size;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.setContext(a),this.dirty=!0,this.textures=[],this.blendModes=[]},b.WebGLSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},b.WebGLSpriteBatch.prototype.begin=function(a){this.renderSession=a,this.shader=this.renderSession.shaderManager.defaultShader,this.start()},b.WebGLSpriteBatch.prototype.end=function(){this.flush()},b.WebGLSpriteBatch.prototype.render=function(a){var b=a.texture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=b.baseTexture);var c=b._uvs;if(c){var d,e,f,g,h=a.worldAlpha,i=a.tint,j=this.vertices,k=a.anchor.x,l=a.anchor.y;if(b.trim){var m=b.trim;e=m.x-k*m.width,d=e+b.crop.width,g=m.y-l*m.height,f=g+b.crop.height}else d=b.frame.width*(1-k),e=b.frame.width*-k,f=b.frame.height*(1-l),g=b.frame.height*-l;var n=4*this.currentBatchSize*this.vertSize,o=a.worldTransform,p=o.a,q=o.c,r=o.b,s=o.d,t=o.tx,u=o.ty;j[n++]=p*e+r*g+t,j[n++]=s*g+q*e+u,j[n++]=c.x0,j[n++]=c.y0,j[n++]=h,j[n++]=i,j[n++]=p*d+r*g+t,j[n++]=s*g+q*d+u,j[n++]=c.x1,j[n++]=c.y1,j[n++]=h,j[n++]=i,j[n++]=p*d+r*f+t,j[n++]=s*f+q*d+u,j[n++]=c.x2,j[n++]=c.y2,j[n++]=h,j[n++]=i,j[n++]=p*e+r*f+t,j[n++]=s*f+q*e+u,j[n++]=c.x3,j[n++]=c.y3,j[n++]=h,j[n++]=i,this.textures[this.currentBatchSize]=a.texture.baseTexture,this.blendModes[this.currentBatchSize]=a.blendMode,this.currentBatchSize++}},b.WebGLSpriteBatch.prototype.renderTilingSprite=function(a){var c=a.tilingTexture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=c.baseTexture),a._uvs||(a._uvs=new b.TextureUvs);var d=a._uvs;a.tilePosition.x%=c.baseTexture.width*a.tileScaleOffset.x,a.tilePosition.y%=c.baseTexture.height*a.tileScaleOffset.y;var e=a.tilePosition.x/(c.baseTexture.width*a.tileScaleOffset.x),f=a.tilePosition.y/(c.baseTexture.height*a.tileScaleOffset.y),g=a.width/c.baseTexture.width/(a.tileScale.x*a.tileScaleOffset.x),h=a.height/c.baseTexture.height/(a.tileScale.y*a.tileScaleOffset.y);d.x0=0-e,d.y0=0-f,d.x1=1*g-e,d.y1=0-f,d.x2=1*g-e,d.y2=1*h-f,d.x3=0-e,d.y3=1*h-f;var i=a.worldAlpha,j=a.tint,k=this.vertices,l=a.width,m=a.height,n=a.anchor.x,o=a.anchor.y,p=l*(1-n),q=l*-n,r=m*(1-o),s=m*-o,t=4*this.currentBatchSize*this.vertSize,u=a.worldTransform,v=u.a,w=u.c,x=u.b,y=u.d,z=u.tx,A=u.ty;k[t++]=v*q+x*s+z,k[t++]=y*s+w*q+A,k[t++]=d.x0,k[t++]=d.y0,k[t++]=i,k[t++]=j,k[t++]=v*p+x*s+z,k[t++]=y*s+w*p+A,k[t++]=d.x1,k[t++]=d.y1,k[t++]=i,k[t++]=j,k[t++]=v*p+x*r+z,k[t++]=y*r+w*p+A,k[t++]=d.x2,k[t++]=d.y2,k[t++]=i,k[t++]=j,k[t++]=v*q+x*r+z,k[t++]=y*r+w*q+A,k[t++]=d.x3,k[t++]=d.y3,k[t++]=i,k[t++]=j,this.textures[this.currentBatchSize]=c.baseTexture,this.blendModes[this.currentBatchSize]=a.blendMode,this.currentBatchSize++},b.WebGLSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader),this.dirty){this.dirty=!1,a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.colorAttribute,2,a.FLOAT,!1,c,16)}if(this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var d=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,d)}for(var e,f,g=0,h=0,i=null,j=this.renderSession.blendModeManager.currentBlendMode,k=0,l=this.currentBatchSize;l>k;k++)e=this.textures[k],f=this.blendModes[k],(i!==e||j!==f)&&(this.renderBatch(i,g,h),h=k,g=0,i=e,j=f,this.renderSession.blendModeManager.setBlendMode(j)),g++;this.renderBatch(i,g,h),this.currentBatchSize=0}},b.WebGLSpriteBatch.prototype.renderBatch=function(a,c,d){if(0!==c){var e=this.gl;e.bindTexture(e.TEXTURE_2D,a._glTextures[e.id]||b.createWebGLTexture(a,e)),a._dirty[e.id]&&b.updateWebGLTexture(this.currentBaseTexture,e),e.drawElements(e.TRIANGLES,6*c,e.UNSIGNED_SHORT,6*d*2),this.renderSession.drawCount++}},b.WebGLSpriteBatch.prototype.stop=function(){this.flush()},b.WebGLSpriteBatch.prototype.start=function(){this.dirty=!0},b.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null,this.indices=null,this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.indexBuffer),this.currentBaseTexture=null,this.gl=null},b.WebGLFastSpriteBatch=function(a){this.vertSize=10,this.maxSize=6e3,this.size=this.maxSize;var b=4*this.size*this.vertSize,c=6*this.maxSize;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.vertexBuffer=null,this.indexBuffer=null,this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.currentBlendMode=0,this.renderSession=null,this.shader=null,this.matrix=null,this.setContext(a)},b.WebGLFastSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW)},b.WebGLFastSpriteBatch.prototype.begin=function(a,b){this.renderSession=b,this.shader=this.renderSession.shaderManager.fastShader,this.matrix=a.worldTransform.toArray(!0),this.start()},b.WebGLFastSpriteBatch.prototype.end=function(){this.flush()},b.WebGLFastSpriteBatch.prototype.render=function(a){var b=a.children,c=b[0];if(c.texture._uvs){this.currentBaseTexture=c.texture.baseTexture,c.blendMode!==this.renderSession.blendModeManager.currentBlendMode&&(this.flush(),this.renderSession.blendModeManager.setBlendMode(c.blendMode));for(var d=0,e=b.length;e>d;d++)this.renderSprite(b[d]);this.flush()}},b.WebGLFastSpriteBatch.prototype.renderSprite=function(a){if(a.visible&&(a.texture.baseTexture===this.currentBaseTexture||(this.flush(),this.currentBaseTexture=a.texture.baseTexture,a.texture._uvs))){var b,c,d,e,f,g,h,i,j=this.vertices;if(b=a.texture._uvs,c=a.texture.frame.width,d=a.texture.frame.height,a.texture.trim){var k=a.texture.trim;f=k.x-a.anchor.x*k.width,e=f+a.texture.crop.width,h=k.y-a.anchor.y*k.height,g=h+a.texture.crop.height}else e=a.texture.frame.width*(1-a.anchor.x),f=a.texture.frame.width*-a.anchor.x,g=a.texture.frame.height*(1-a.anchor.y),h=a.texture.frame.height*-a.anchor.y;i=4*this.currentBatchSize*this.vertSize,j[i++]=f,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x0,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x1,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x2,j[i++]=b.y2,j[i++]=a.alpha,j[i++]=f,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x3,j[i++]=b.y3,j[i++]=a.alpha,this.currentBatchSize++,this.currentBatchSize>=this.size&&this.flush()}},b.WebGLFastSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.currentBaseTexture._glTextures[a.id]||b.createWebGLTexture(this.currentBaseTexture,a),a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var c=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,c)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},b.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()},b.WebGLFastSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y),a.uniformMatrix3fv(this.shader.uMatrix,!1,this.matrix);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aPositionCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.aScale,2,a.FLOAT,!1,c,16),a.vertexAttribPointer(this.shader.aRotation,1,a.FLOAT,!1,c,24),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,28),a.vertexAttribPointer(this.shader.colorAttribute,1,a.FLOAT,!1,c,36)},b.WebGLFilterManager=function(a,b){this.transparent=b,this.filterStack=[],this.offsetX=0,this.offsetY=0,this.setContext(a)},b.WebGLFilterManager.prototype.setContext=function(a){this.gl=a,this.texturePool=[],this.initShaderBuffers()},b.WebGLFilterManager.prototype.begin=function(a,b){this.renderSession=a,this.defaultShader=a.shaderManager.defaultShader;var c=this.renderSession.projection;this.width=2*c.x,this.height=2*-c.y,this.buffer=b},b.WebGLFilterManager.prototype.pushFilter=function(a){var c=this.gl,d=this.renderSession.projection,e=this.renderSession.offset;a._filterArea=a.target.filterArea||a.target.getBounds(),this.filterStack.push(a);var f=a.filterPasses[0];this.offsetX+=a._filterArea.x,this.offsetY+=a._filterArea.y;var g=this.texturePool.pop();g?g.resize(this.width,this.height):g=new b.FilterTexture(this.gl,this.width,this.height),c.bindTexture(c.TEXTURE_2D,g.texture);var h=a._filterArea,i=f.padding;h.x-=i,h.y-=i,h.width+=2*i,h.height+=2*i,h.x<0&&(h.x=0),h.width>this.width&&(h.width=this.width),h.y<0&&(h.y=0),h.height>this.height&&(h.height=this.height),c.bindFramebuffer(c.FRAMEBUFFER,g.frameBuffer),c.viewport(0,0,h.width,h.height),d.x=h.width/2,d.y=-h.height/2,e.x=-h.x,e.y=-h.y,this.renderSession.shaderManager.setShader(this.defaultShader),c.uniform2f(this.defaultShader.projectionVector,h.width/2,-h.height/2),c.uniform2f(this.defaultShader.offsetVector,-h.x,-h.y),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),a._glFilterTexture=g},b.WebGLFilterManager.prototype.popFilter=function(){var a=this.gl,c=this.filterStack.pop(),d=c._filterArea,e=c._glFilterTexture,f=this.renderSession.projection,g=this.renderSession.offset;if(c.filterPasses.length>1){a.viewport(0,0,d.width,d.height),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=0,this.vertexArray[1]=d.height,this.vertexArray[2]=d.width,this.vertexArray[3]=d.height,this.vertexArray[4]=0,this.vertexArray[5]=0,this.vertexArray[6]=d.width,this.vertexArray[7]=0,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=d.width/this.width,this.uvArray[5]=d.height/this.height,this.uvArray[6]=d.width/this.width,this.uvArray[7]=d.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray);var h=e,i=this.texturePool.pop();i||(i=new b.FilterTexture(this.gl,this.width,this.height)),i.resize(this.width,this.height),a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND);for(var j=0;j<c.filterPasses.length-1;j++){var k=c.filterPasses[j];a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,h.texture),this.applyFilterPass(k,d,d.width,d.height);var l=h;h=i,i=l}a.enable(a.BLEND),e=h,this.texturePool.push(i)}var m=c.filterPasses[c.filterPasses.length-1];this.offsetX-=d.x,this.offsetY-=d.y;var n=this.width,o=this.height,p=0,q=0,r=this.buffer;if(0===this.filterStack.length)a.colorMask(!0,!0,!0,!0);else{var s=this.filterStack[this.filterStack.length-1];d=s._filterArea,n=d.width,o=d.height,p=d.x,q=d.y,r=s._glFilterTexture.frameBuffer}f.x=n/2,f.y=-o/2,g.x=p,g.y=q,d=c._filterArea;var t=d.x-p,u=d.y-q;a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=t,this.vertexArray[1]=u+d.height,this.vertexArray[2]=t+d.width,this.vertexArray[3]=u+d.height,this.vertexArray[4]=t,this.vertexArray[5]=u,this.vertexArray[6]=t+d.width,this.vertexArray[7]=u,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=d.width/this.width,this.uvArray[5]=d.height/this.height,this.uvArray[6]=d.width/this.width,this.uvArray[7]=d.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray),a.viewport(0,0,n,o),a.bindFramebuffer(a.FRAMEBUFFER,r),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e.texture),this.applyFilterPass(m,d,n,o),this.renderSession.shaderManager.setShader(this.defaultShader),a.uniform2f(this.defaultShader.projectionVector,n/2,-o/2),a.uniform2f(this.defaultShader.offsetVector,-p,-q),this.texturePool.push(e),c._glFilterTexture=null},b.WebGLFilterManager.prototype.applyFilterPass=function(a,c,d,e){var f=this.gl,g=a.shaders[f.id];g||(g=new b.PixiShader(f),g.fragmentSrc=a.fragmentSrc,g.uniforms=a.uniforms,g.init(),a.shaders[f.id]=g),this.renderSession.shaderManager.setShader(g),f.uniform2f(g.projectionVector,d/2,-e/2),f.uniform2f(g.offsetVector,0,0),a.uniforms.dimensions&&(a.uniforms.dimensions.value[0]=this.width,a.uniforms.dimensions.value[1]=this.height,a.uniforms.dimensions.value[2]=this.vertexArray[0],a.uniforms.dimensions.value[3]=this.vertexArray[5]),g.syncUniforms(),f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer),f.vertexAttribPointer(g.aVertexPosition,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.uvBuffer),f.vertexAttribPointer(g.aTextureCoord,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.colorBuffer),f.vertexAttribPointer(g.colorAttribute,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),this.renderSession.drawCount++},b.WebGLFilterManager.prototype.initShaderBuffers=function(){var a=this.gl;this.vertexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertexArray,a.STATIC_DRAW),this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),a.bufferData(a.ARRAY_BUFFER,this.uvArray,a.STATIC_DRAW),this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]),a.bindBuffer(a.ARRAY_BUFFER,this.colorBuffer),a.bufferData(a.ARRAY_BUFFER,this.colorArray,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),a.STATIC_DRAW)},b.WebGLFilterManager.prototype.destroy=function(){var a=this.gl;this.filterStack=null,this.offsetX=0,this.offsetY=0;for(var b=0;b<this.texturePool.length;b++)this.texturePool[b].destroy();this.texturePool=null,a.deleteBuffer(this.vertexBuffer),a.deleteBuffer(this.uvBuffer),a.deleteBuffer(this.colorBuffer),a.deleteBuffer(this.indexBuffer)},b.FilterTexture=function(a,c,d,e){this.gl=a,this.frameBuffer=a.createFramebuffer(),this.texture=a.createTexture(),e=e||b.scaleModes.DEFAULT,a.bindTexture(a.TEXTURE_2D,this.texture),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,e===b.scaleModes.LINEAR?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,e===b.scaleModes.LINEAR?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.texture,0),this.renderBuffer=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,this.renderBuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,this.renderBuffer),this.resize(c,d)},b.FilterTexture.prototype.clear=function(){var a=this.gl;a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT)},b.FilterTexture.prototype.resize=function(a,b){if(this.width!==a||this.height!==b){this.width=a,this.height=b;var c=this.gl;c.bindTexture(c.TEXTURE_2D,this.texture),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,a,b,0,c.RGBA,c.UNSIGNED_BYTE,null),c.bindRenderbuffer(c.RENDERBUFFER,this.renderBuffer),c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_STENCIL,a,b)}},b.FilterTexture.prototype.destroy=function(){var a=this.gl;a.deleteFramebuffer(this.frameBuffer),a.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null},b.CanvasMaskManager=function(){},b.CanvasMaskManager.prototype.pushMask=function(a,c){c.save();var d=a.alpha,e=a.worldTransform;c.setTransform(e.a,e.c,e.b,e.d,e.tx,e.ty),b.CanvasGraphics.renderGraphicsMask(a,c),c.clip(),a.worldAlpha=d},b.CanvasMaskManager.prototype.popMask=function(a){a.restore()},b.CanvasTinter=function(){},b.CanvasTinter.getTintedTexture=function(a,c){var d=a.texture;c=b.CanvasTinter.roundColor(c);var e="#"+("00000"+(0|c).toString(16)).substr(-6);if(d.tintCache=d.tintCache||{},d.tintCache[e])return d.tintCache[e];var f=b.CanvasTinter.canvas||document.createElement("canvas");if(b.CanvasTinter.tintMethod(d,c,f),b.CanvasTinter.convertTintToImage){var g=new Image;g.src=f.toDataURL(),d.tintCache[e]=g}else d.tintCache[e]=f,b.CanvasTinter.canvas=null;return f},b.CanvasTinter.tintWithMultiply=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="multiply",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},b.CanvasTinter.tintWithOverlay=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.globalCompositeOperation="copy",d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},b.CanvasTinter.tintWithPerPixel=function(a,c,d){var e=d.getContext("2d"),f=a.frame;d.width=f.width,d.height=f.height,e.globalCompositeOperation="copy",e.drawImage(a.baseTexture.source,f.x,f.y,f.width,f.height,0,0,f.width,f.height);for(var g=b.hex2rgb(c),h=g[0],i=g[1],j=g[2],k=e.getImageData(0,0,f.width,f.height),l=k.data,m=0;m<l.length;m+=4)l[m+0]*=h,l[m+1]*=i,l[m+2]*=j;e.putImageData(k,0,0)},b.CanvasTinter.roundColor=function(a){var c=b.CanvasTinter.cacheStepsPerColorChannel,d=b.hex2rgb(a);return d[0]=Math.min(255,d[0]/c*c),d[1]=Math.min(255,d[1]/c*c),d[2]=Math.min(255,d[2]/c*c),b.rgb2hex(d)},b.CanvasTinter.cacheStepsPerColorChannel=8,b.CanvasTinter.convertTintToImage=!1,b.CanvasTinter.canUseMultiply=b.canUseNewCanvasBlendModes(),b.CanvasTinter.tintMethod=b.CanvasTinter.canUseMultiply?b.CanvasTinter.tintWithMultiply:b.CanvasTinter.tintWithPerPixel,b.CanvasRenderer=function(a,c,d,e){b.defaultRenderer||(b.sayHello("Canvas"),b.defaultRenderer=this),this.type=b.CANVAS_RENDERER,this.clearBeforeRender=!0,this.transparent=!!e,b.blendModesCanvas||(b.blendModesCanvas=[],b.canUseNewCanvasBlendModes()?(b.blendModesCanvas[b.blendModes.NORMAL]="source-over",b.blendModesCanvas[b.blendModes.ADD]="lighter",b.blendModesCanvas[b.blendModes.MULTIPLY]="multiply",b.blendModesCanvas[b.blendModes.SCREEN]="screen",b.blendModesCanvas[b.blendModes.OVERLAY]="overlay",b.blendModesCanvas[b.blendModes.DARKEN]="darken",b.blendModesCanvas[b.blendModes.LIGHTEN]="lighten",b.blendModesCanvas[b.blendModes.COLOR_DODGE]="color-dodge",b.blendModesCanvas[b.blendModes.COLOR_BURN]="color-burn",b.blendModesCanvas[b.blendModes.HARD_LIGHT]="hard-light",b.blendModesCanvas[b.blendModes.SOFT_LIGHT]="soft-light",b.blendModesCanvas[b.blendModes.DIFFERENCE]="difference",b.blendModesCanvas[b.blendModes.EXCLUSION]="exclusion",b.blendModesCanvas[b.blendModes.HUE]="hue",b.blendModesCanvas[b.blendModes.SATURATION]="saturation",b.blendModesCanvas[b.blendModes.COLOR]="color",b.blendModesCanvas[b.blendModes.LUMINOSITY]="luminosity"):(b.blendModesCanvas[b.blendModes.NORMAL]="source-over",b.blendModesCanvas[b.blendModes.ADD]="lighter",b.blendModesCanvas[b.blendModes.MULTIPLY]="source-over",b.blendModesCanvas[b.blendModes.SCREEN]="source-over",b.blendModesCanvas[b.blendModes.OVERLAY]="source-over",b.blendModesCanvas[b.blendModes.DARKEN]="source-over",b.blendModesCanvas[b.blendModes.LIGHTEN]="source-over",b.blendModesCanvas[b.blendModes.COLOR_DODGE]="source-over",b.blendModesCanvas[b.blendModes.COLOR_BURN]="source-over",b.blendModesCanvas[b.blendModes.HARD_LIGHT]="source-over",b.blendModesCanvas[b.blendModes.SOFT_LIGHT]="source-over",b.blendModesCanvas[b.blendModes.DIFFERENCE]="source-over",b.blendModesCanvas[b.blendModes.EXCLUSION]="source-over",b.blendModesCanvas[b.blendModes.HUE]="source-over",b.blendModesCanvas[b.blendModes.SATURATION]="source-over",b.blendModesCanvas[b.blendModes.COLOR]="source-over",b.blendModesCanvas[b.blendModes.LUMINOSITY]="source-over")),this.width=a||800,this.height=c||600,this.view=d||document.createElement("canvas"),this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0,this.maskManager=new b.CanvasMaskManager,this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null,roundPixels:!1},"imageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context&&(this.renderSession.smoothProperty="oImageSmoothingEnabled")},b.CanvasRenderer.prototype.constructor=b.CanvasRenderer,b.CanvasRenderer.prototype.render=function(a){b.texturesToUpdate.length=0,b.texturesToDestroy.length=0,a.updateTransform(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,navigator.isCocoonJS&&this.view.screencanvas&&(this.context.fillStyle="black",this.context.clear()),!this.transparent&&this.clearBeforeRender?(this.context.fillStyle=a.backgroundColorString,this.context.fillRect(0,0,this.width,this.height)):this.transparent&&this.clearBeforeRender&&this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(a),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),b.Texture.frameUpdates.length>0&&(b.Texture.frameUpdates.length=0)
},b.CanvasRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b},b.CanvasRenderer.prototype.renderDisplayObject=function(a,b){this.renderSession.context=b||this.context,a._renderCanvas(this.renderSession)},b.CanvasRenderer.prototype.renderStripFlat=function(a){var b=this.context,c=a.verticies,d=c.length/2;this.count++,b.beginPath();for(var e=1;d-2>e;e++){var f=2*e,g=c[f],h=c[f+2],i=c[f+4],j=c[f+1],k=c[f+3],l=c[f+5];b.moveTo(g,j),b.lineTo(h,k),b.lineTo(i,l)}b.fillStyle="#FF0000",b.fill(),b.closePath()},b.CanvasRenderer.prototype.renderStrip=function(a){var b=this.context,c=a.verticies,d=a.uvs,e=c.length/2;this.count++;for(var f=1;e-2>f;f++){var g=2*f,h=c[g],i=c[g+2],j=c[g+4],k=c[g+1],l=c[g+3],m=c[g+5],n=d[g]*a.texture.width,o=d[g+2]*a.texture.width,p=d[g+4]*a.texture.width,q=d[g+1]*a.texture.height,r=d[g+3]*a.texture.height,s=d[g+5]*a.texture.height;b.save(),b.beginPath(),b.moveTo(h,k),b.lineTo(i,l),b.lineTo(j,m),b.closePath(),b.clip();var t=n*r+q*p+o*s-r*p-q*o-n*s,u=h*r+q*j+i*s-r*j-q*i-h*s,v=n*i+h*p+o*j-i*p-h*o-n*j,w=n*r*j+q*i*p+h*o*s-h*r*p-q*o*j-n*i*s,x=k*r+q*m+l*s-r*m-q*l-k*s,y=n*l+k*p+o*m-l*p-k*o-n*m,z=n*r*m+q*l*p+k*o*s-k*r*p-q*o*m-n*l*s;b.transform(u/t,x/t,v/t,y/t,w/t,z/t),b.drawImage(a.texture.baseTexture.source,0,0),b.restore()}},b.CanvasBuffer=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=a,this.canvas.height=b},b.CanvasBuffer.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},b.CanvasBuffer.prototype.resize=function(a,b){this.width=this.canvas.width=a,this.height=this.canvas.height=b},b.CanvasGraphics=function(){},b.CanvasGraphics.renderGraphics=function(a,c){for(var d=a.worldAlpha,e="",f=0;f<a.graphicsData.length;f++){var g=a.graphicsData[f],h=g.points;if(c.strokeStyle=e="#"+("00000"+(0|g.lineColor).toString(16)).substr(-6),c.lineWidth=g.lineWidth,g.type===b.Graphics.POLY){c.beginPath(),c.moveTo(h[0],h[1]);for(var i=1;i<h.length/2;i++)c.lineTo(h[2*i],h[2*i+1]);h[0]===h[h.length-2]&&h[1]===h[h.length-1]&&c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}else if(g.type===b.Graphics.RECT)(g.fillColor||0===g.fillColor)&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fillRect(h[0],h[1],h[2],h[3])),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.strokeRect(h[0],h[1],h[2],h[3]));else if(g.type===b.Graphics.CIRC)c.beginPath(),c.arc(h[0],h[1],h[2],0,2*Math.PI),c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke());else if(g.type===b.Graphics.ELIP){var j=g.points,k=2*j[2],l=2*j[3],m=j[0]-k/2,n=j[1]-l/2;c.beginPath();var o=.5522848,p=k/2*o,q=l/2*o,r=m+k,s=n+l,t=m+k/2,u=n+l/2;c.moveTo(m,u),c.bezierCurveTo(m,u-q,t-p,n,t,n),c.bezierCurveTo(t+p,n,r,u-q,r,u),c.bezierCurveTo(r,u+q,t+p,s,t,s),c.bezierCurveTo(t-p,s,m,u+q,m,u),c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}else if(g.type===b.Graphics.RREC){var v=h[0],w=h[1],x=h[2],y=h[3],z=h[4],A=Math.min(x,y)/2|0;z=z>A?A:z,c.beginPath(),c.moveTo(v,w+z),c.lineTo(v,w+y-z),c.quadraticCurveTo(v,w+y,v+z,w+y),c.lineTo(v+x-z,w+y),c.quadraticCurveTo(v+x,w+y,v+x,w+y-z),c.lineTo(v+x,w+z),c.quadraticCurveTo(v+x,w,v+x-z,w),c.lineTo(v+z,w),c.quadraticCurveTo(v,w,v,w+z),c.closePath(),(g.fillColor||0===g.fillColor)&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}}},b.CanvasGraphics.renderGraphicsMask=function(a,c){var d=a.graphicsData.length;if(0!==d){d>1&&(d=1,window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));for(var e=0;1>e;e++){var f=a.graphicsData[e],g=f.points;if(f.type===b.Graphics.POLY){c.beginPath(),c.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)c.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&c.closePath()}else if(f.type===b.Graphics.RECT)c.beginPath(),c.rect(g[0],g[1],g[2],g[3]),c.closePath();else if(f.type===b.Graphics.CIRC)c.beginPath(),c.arc(g[0],g[1],g[2],0,2*Math.PI),c.closePath();else if(f.type===b.Graphics.ELIP){var i=f.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;c.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;c.moveTo(l,t),c.bezierCurveTo(l,t-p,s-o,m,s,m),c.bezierCurveTo(s+o,m,q,t-p,q,t),c.bezierCurveTo(q,t+p,s+o,r,s,r),c.bezierCurveTo(s-o,r,l,t+p,l,t),c.closePath()}else if(f.type===b.Graphics.RREC){var u=g[0],v=g[1],w=g[2],x=g[3],y=g[4],z=Math.min(w,x)/2|0;y=y>z?z:y,c.beginPath(),c.moveTo(u,v+y),c.lineTo(u,v+x-y),c.quadraticCurveTo(u,v+x,u+y,v+x),c.lineTo(u+w-y,v+x),c.quadraticCurveTo(u+w,v+x,u+w,v+x-y),c.lineTo(u+w,v+y),c.quadraticCurveTo(u+w,v,u+w-y,v),c.lineTo(u+y,v),c.quadraticCurveTo(u,v,u,v+y),c.closePath()}}}},b.Graphics=function(){b.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor="black",this.graphicsData=[],this.tint=16777215,this.blendMode=b.blendModes.NORMAL,this.currentPath={points:[]},this._webGL=[],this.isMask=!1,this.bounds=null,this.boundsPadding=10,this.dirty=!0},b.Graphics.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Graphics.prototype.constructor=b.Graphics,Object.defineProperty(b.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap=a,this._cacheAsBitmap?this._generateCachedSprite():(this.destroyCachedSprite(),this.dirty=!0)}}),b.Graphics.prototype.lineStyle=function(a,c,d){return this.currentPath.points.length||this.graphicsData.pop(),this.lineWidth=a||0,this.lineColor=c||0,this.lineAlpha=arguments.length<3?1:d,this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.graphicsData.push(this.currentPath),this},b.Graphics.prototype.moveTo=function(a,c){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.currentPath.points.push(a,c),this.graphicsData.push(this.currentPath),this},b.Graphics.prototype.lineTo=function(a,b){return this.currentPath.points.push(a,b),this.dirty=!0,this},b.Graphics.prototype.quadraticCurveTo=function(a,b,c,d){0===this.currentPath.points.length&&this.moveTo(0,0);var e,f,g=20,h=this.currentPath.points;0===h.length&&this.moveTo(0,0);for(var i=h[h.length-2],j=h[h.length-1],k=0,l=1;g>=l;l++)k=l/g,e=i+(a-i)*k,f=j+(b-j)*k,h.push(e+(a+(c-a)*k-e)*k,f+(b+(d-b)*k-f)*k);return this.dirty=!0,this},b.Graphics.prototype.bezierCurveTo=function(a,b,c,d,e,f){0===this.currentPath.points.length&&this.moveTo(0,0);for(var g,h,i,j,k,l=20,m=this.currentPath.points,n=m[m.length-2],o=m[m.length-1],p=0,q=1;l>q;q++)p=q/l,g=1-p,h=g*g,i=h*g,j=p*p,k=j*p,m.push(i*n+3*h*p*a+3*g*j*c+k*e,i*o+3*h*p*b+3*g*j*d+k*f);return this.dirty=!0,this},b.Graphics.prototype.arcTo=function(a,b,c,d,e){0===this.currentPath.points.length&&this.moveTo(a,b);var f=this.currentPath.points,g=f[f.length-2],h=f[f.length-1],i=h-b,j=g-a,k=d-b,l=c-a,m=Math.abs(i*l-j*k);if(1e-8>m||0===e)f.push(a,b);else{var n=i*i+j*j,o=k*k+l*l,p=i*k+j*l,q=e*Math.sqrt(n)/m,r=e*Math.sqrt(o)/m,s=q*p/n,t=r*p/o,u=q*l+r*j,v=q*k+r*i,w=j*(r+s),x=i*(r+s),y=l*(q+t),z=k*(q+t),A=Math.atan2(x-v,w-u),B=Math.atan2(z-v,y-u);this.arc(u+a,v+b,e,A,B,j*k>l*i)}return this.dirty=!0,this},b.Graphics.prototype.arc=function(a,b,c,d,e,f){var g=a+Math.cos(d)*c,h=b+Math.sin(d)*c,i=this.currentPath.points;if((0!==i.length&&i[i.length-2]!==g||i[i.length-1]!==h)&&(this.moveTo(g,h),i=this.currentPath.points),d===e)return this;!f&&d>=e?e+=2*Math.PI:f&&e>=d&&(d+=2*Math.PI);var j=f?-1*(d-e):e-d,k=Math.abs(j)/(2*Math.PI)*40;if(0===j)return this;for(var l=j/(2*k),m=2*l,n=Math.cos(l),o=Math.sin(l),p=k-1,q=p%1/p,r=0;p>=r;r++){var s=r+q*r,t=l+d+m*s,u=Math.cos(t),v=-Math.sin(t);i.push((n*u+o*v)*c+a,(n*-v+o*u)*c+b)}return this.dirty=!0,this},b.Graphics.prototype.drawPath=function(a){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.graphicsData.push(this.currentPath),this.currentPath.points=this.currentPath.points.concat(a),this.dirty=!0,this},b.Graphics.prototype.beginFill=function(a,b){return this.filling=!0,this.fillColor=a||0,this.fillAlpha=arguments.length<2?1:b,this},b.Graphics.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},b.Graphics.prototype.drawRect=function(a,c,d,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e],type:b.Graphics.RECT},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawRoundedRect=function(a,c,d,e,f){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e,f],type:b.Graphics.RREC},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawCircle=function(a,c,d){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,d],type:b.Graphics.CIRC},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawEllipse=function(a,c,d,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e],type:b.Graphics.ELIP},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this.bounds=null,this},b.Graphics.prototype.generateTexture=function(){var a=this.getBounds(),c=new b.CanvasBuffer(a.width,a.height),d=b.Texture.fromCanvas(c.canvas);return c.context.translate(-a.x,-a.y),b.CanvasGraphics.renderGraphics(this,c.context),d},b.Graphics.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._cacheAsBitmap)return this.dirty&&(this._generateCachedSprite(),b.updateWebGLTexture(this._cachedSprite.texture.baseTexture,a.gl),this.dirty=!1),this._cachedSprite.alpha=this.alpha,b.Sprite.prototype._renderWebGL.call(this._cachedSprite,a),void 0;if(a.spriteBatch.stop(),a.blendModeManager.setBlendMode(this.blendMode),this._mask&&a.maskManager.pushMask(this._mask,a),this._filters&&a.filterManager.pushFilter(this._filterBlock),this.blendMode!==a.spriteBatch.currentBlendMode){a.spriteBatch.currentBlendMode=this.blendMode;var c=b.blendModesWebGL[a.spriteBatch.currentBlendMode];a.spriteBatch.gl.blendFunc(c[0],c[1])}if(b.WebGLGraphics.renderGraphics(this,a),this.children.length){a.spriteBatch.start();for(var d=0,e=this.children.length;e>d;d++)this.children[d]._renderWebGL(a);a.spriteBatch.stop()}this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(this.mask,a),a.drawCount++,a.spriteBatch.start()}},b.Graphics.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){var c=a.context,d=this.worldTransform;this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a.context),c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),b.CanvasGraphics.renderGraphics(this,c);for(var e=0,f=this.children.length;f>e;e++)this.children[e]._renderCanvas(a);this._mask&&a.maskManager.popMask(a.context)}},b.Graphics.prototype.getBounds=function(a){this.bounds||this.updateBounds();var b=this.bounds.x,c=this.bounds.width+this.bounds.x,d=this.bounds.y,e=this.bounds.height+this.bounds.y,f=a||this.worldTransform,g=f.a,h=f.c,i=f.b,j=f.d,k=f.tx,l=f.ty,m=g*c+i*e+k,n=j*e+h*c+l,o=g*b+i*e+k,p=j*e+h*b+l,q=g*b+i*d+k,r=j*d+h*b+l,s=g*c+i*d+k,t=j*d+h*c+l,u=m,v=n,w=m,x=n;w=w>o?o:w,w=w>q?q:w,w=w>s?s:w,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,u=o>u?o:u,u=q>u?q:u,u=s>u?s:u,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v;var y=this._bounds;return y.x=w,y.width=u-w,y.y=x,y.height=v-x,y},b.Graphics.prototype.updateBounds=function(){for(var a,c,d,e,f,g=1/0,h=-1/0,i=1/0,j=-1/0,k=0;k<this.graphicsData.length;k++){var l=this.graphicsData[k],m=l.type,n=l.lineWidth;if(a=l.points,m===b.Graphics.RECT)c=a[0]-n/2,d=a[1]-n/2,e=a[2]+n,f=a[3]+n,g=g>c?c:g,h=c+e>h?c+e:h,i=i>d?c:i,j=d+f>j?d+f:j;else if(m===b.Graphics.CIRC||m===b.Graphics.ELIP)c=a[0],d=a[1],e=a[2]+n/2,f=a[3]+n/2,g=g>c-e?c-e:g,h=c+e>h?c+e:h,i=i>d-f?d-f:i,j=d+f>j?d+f:j;else for(var o=0;o<a.length;o+=2)c=a[o],d=a[o+1],g=g>c-n?c-n:g,h=c+n>h?c+n:h,i=i>d-n?d-n:i,j=d+n>j?d+n:j}var p=this.boundsPadding;this.bounds=new b.Rectangle(g-p,i-p,h-g+2*p,j-i+2*p)},b.Graphics.prototype._generateCachedSprite=function(){var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.buffer.resize(a.width,a.height);else{var c=new b.CanvasBuffer(a.width,a.height),d=b.Texture.fromCanvas(c.canvas);this._cachedSprite=new b.Sprite(d),this._cachedSprite.buffer=c,this._cachedSprite.worldTransform=this.worldTransform}this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._cachedSprite.buffer.context.translate(-a.x,-a.y),b.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context),this._cachedSprite.alpha=this.alpha},b.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(!0),this._cachedSprite=null},b.Graphics.POLY=0,b.Graphics.RECT=1,b.Graphics.CIRC=2,b.Graphics.ELIP=3,b.Graphics.RREC=4,b.Strip=function(a){b.DisplayObjectContainer.call(this),this.texture=a,this.uvs=new b.Float32Array([0,1,1,1,1,0,0,1]),this.verticies=new b.Float32Array([0,0,100,0,100,100,0,100]),this.colors=new b.Float32Array([1,1,1,1]),this.indices=new b.Uint16Array([0,1,2,3]),this.dirty=!0},b.Strip.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Strip.prototype.constructor=b.Strip,b.Strip.prototype._renderWebGL=function(a){!this.visible||this.alpha<=0||(a.spriteBatch.stop(),this._vertexBuffer||this._initWebGL(a),a.shaderManager.setShader(a.shaderManager.stripShader),this._renderStrip(a),a.spriteBatch.start())},b.Strip.prototype._initWebGL=function(a){var b=a.gl;this._vertexBuffer=b.createBuffer(),this._indexBuffer=b.createBuffer(),this._uvBuffer=b.createBuffer(),this._colorBuffer=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,this._vertexBuffer),b.bufferData(b.ARRAY_BUFFER,this.verticies,b.DYNAMIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,this._uvBuffer),b.bufferData(b.ARRAY_BUFFER,this.uvs,b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,this._colorBuffer),b.bufferData(b.ARRAY_BUFFER,this.colors,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this._indexBuffer),b.bufferData(b.ELEMENT_ARRAY_BUFFER,this.indices,b.STATIC_DRAW)},b.Strip.prototype._renderStrip=function(a){var c=a.gl,d=a.projection,e=a.offset,f=a.shaderManager.stripShader;c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.uniformMatrix3fv(f.translationMatrix,!1,this.worldTransform.toArray(!0)),c.uniform2f(f.projectionVector,d.x,-d.y),c.uniform2f(f.offsetVector,-e.x,-e.y),c.uniform1f(f.alpha,1),this.dirty?(this.dirty=!1,c.bindBuffer(c.ARRAY_BUFFER,this._vertexBuffer),c.bufferData(c.ARRAY_BUFFER,this.verticies,c.STATIC_DRAW),c.vertexAttribPointer(f.aVertexPosition,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this._uvBuffer),c.bufferData(c.ARRAY_BUFFER,this.uvs,c.STATIC_DRAW),c.vertexAttribPointer(f.aTextureCoord,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,this.texture.baseTexture._glTextures[c.id]||b.createWebGLTexture(this.texture.baseTexture,c)),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this._indexBuffer),c.bufferData(c.ELEMENT_ARRAY_BUFFER,this.indices,c.STATIC_DRAW)):(c.bindBuffer(c.ARRAY_BUFFER,this._vertexBuffer),c.bufferSubData(c.ARRAY_BUFFER,0,this.verticies),c.vertexAttribPointer(f.aVertexPosition,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this._uvBuffer),c.vertexAttribPointer(f.aTextureCoord,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,this.texture.baseTexture._glTextures[c.id]||b.createWebGLTexture(this.texture.baseTexture,c)),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this._indexBuffer)),c.drawElements(c.TRIANGLE_STRIP,this.indices.length,c.UNSIGNED_SHORT,0)},b.Strip.prototype._renderCanvas=function(a){var b=a.context,c=this.worldTransform;a.roundPixels?b.setTransform(c.a,c.c,c.b,c.d,0|c.tx,0|c.ty):b.setTransform(c.a,c.c,c.b,c.d,c.tx,c.ty);var d=this,e=d.verticies,f=d.uvs,g=e.length/2;this.count++;for(var h=0;g-2>h;h++){var i=2*h,j=e[i],k=e[i+2],l=e[i+4],m=e[i+1],n=e[i+3],o=e[i+5],p=(j+k+l)/3,q=(m+n+o)/3,r=j-p,s=m-q,t=Math.sqrt(r*r+s*s);j=p+r/t*(t+3),m=q+s/t*(t+3),r=k-p,s=n-q,t=Math.sqrt(r*r+s*s),k=p+r/t*(t+3),n=q+s/t*(t+3),r=l-p,s=o-q,t=Math.sqrt(r*r+s*s),l=p+r/t*(t+3),o=q+s/t*(t+3);var u=f[i]*d.texture.width,v=f[i+2]*d.texture.width,w=f[i+4]*d.texture.width,x=f[i+1]*d.texture.height,y=f[i+3]*d.texture.height,z=f[i+5]*d.texture.height;b.save(),b.beginPath(),b.moveTo(j,m),b.lineTo(k,n),b.lineTo(l,o),b.closePath(),b.clip();var A=u*y+x*w+v*z-y*w-x*v-u*z,B=j*y+x*l+k*z-y*l-x*k-j*z,C=u*k+j*w+v*l-k*w-j*v-u*l,D=u*y*l+x*k*w+j*v*z-j*y*w-x*v*l-u*k*z,E=m*y+x*o+n*z-y*o-x*n-m*z,F=u*n+m*w+v*o-n*w-m*v-u*o,G=u*y*o+x*n*w+m*v*z-m*y*w-x*v*o-u*n*z;b.transform(B/A,E/A,C/A,F/A,D/A,G/A),b.drawImage(d.texture.baseTexture.source,0,0),b.restore()}},b.Strip.prototype.onTextureUpdate=function(){this.updateFrame=!0},b.Rope=function(a,c){b.Strip.call(this,a),this.points=c,this.verticies=new b.Float32Array(4*c.length),this.uvs=new b.Float32Array(4*c.length),this.colors=new b.Float32Array(2*c.length),this.indices=new b.Uint16Array(2*c.length),this.refresh()},b.Rope.prototype=Object.create(b.Strip.prototype),b.Rope.prototype.constructor=b.Rope,b.Rope.prototype.refresh=function(){var a=this.points;if(!(a.length<1)){var b=this.uvs,c=a[0],d=this.indices,e=this.colors;this.count-=.2,b[0]=0,b[1]=0,b[2]=0,b[3]=1,e[0]=1,e[1]=1,d[0]=0,d[1]=1;for(var f,g,h,i=a.length,j=1;i>j;j++)f=a[j],g=4*j,h=j/(i-1),j%2?(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1):(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1),g=2*j,e[g]=1,e[g+1]=1,g=2*j,d[g]=g,d[g+1]=g+1,c=f}},b.Rope.prototype.updateTransform=function(){var a=this.points;if(!(a.length<1)){var c,d=a[0],e={x:0,y:0};this.count-=.2;for(var f,g,h,i,j,k=this.verticies,l=a.length,m=0;l>m;m++)f=a[m],g=4*m,c=m<a.length-1?a[m+1]:f,e.y=-(c.x-d.x),e.x=c.y-d.y,h=10*(1-m/(l-1)),h>1&&(h=1),i=Math.sqrt(e.x*e.x+e.y*e.y),j=this.texture.height/2,e.x/=i,e.y/=i,e.x*=j,e.y*=j,k[g]=f.x+e.x,k[g+1]=f.y+e.y,k[g+2]=f.x-e.x,k[g+3]=f.y-e.y,d=f;b.DisplayObjectContainer.prototype.updateTransform.call(this)}},b.Rope.prototype.setTexture=function(a){this.texture=a},b.TilingSprite=function(a,c,d){b.Sprite.call(this,a),this._width=c||100,this._height=d||100,this.tileScale=new b.Point(1,1),this.tileScaleOffset=new b.Point(1,1),this.tilePosition=new b.Point(0,0),this.renderable=!0,this.tint=16777215,this.blendMode=b.blendModes.NORMAL},b.TilingSprite.prototype=Object.create(b.Sprite.prototype),b.TilingSprite.prototype.constructor=b.TilingSprite,Object.defineProperty(b.TilingSprite.prototype,"width",{get:function(){return this._width},set:function(a){this._width=a}}),Object.defineProperty(b.TilingSprite.prototype,"height",{get:function(){return this._height},set:function(a){this._height=a}}),b.TilingSprite.prototype.setTexture=function(a){this.texture!==a&&(this.texture=a,this.refreshTexture=!0,this.cachedTint=16777215)},b.TilingSprite.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var c,d;for(this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),!this.tilingTexture||this.refreshTexture?(this.generateTilingTexture(!0),this.tilingTexture&&this.tilingTexture.needsUpdate&&(b.updateWebGLTexture(this.tilingTexture.baseTexture,a.gl),this.tilingTexture.needsUpdate=!1)):a.spriteBatch.renderTilingSprite(this),c=0,d=this.children.length;d>c;c++)this.children[c]._renderWebGL(a);a.spriteBatch.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.spriteBatch.start()}},b.TilingSprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var c=a.context;this._mask&&a.maskManager.pushMask(this._mask,c),c.globalAlpha=this.worldAlpha;var d,e,f=this.worldTransform;if(c.setTransform(f.a,f.c,f.b,f.d,f.tx,f.ty),!this.__tilePattern||this.refreshTexture){if(this.generateTilingTexture(!1),!this.tilingTexture)return;this.__tilePattern=c.createPattern(this.tilingTexture.baseTexture.source,"repeat")}this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]);var g=this.tilePosition,h=this.tileScale;for(g.x%=this.tilingTexture.baseTexture.width,g.y%=this.tilingTexture.baseTexture.height,c.scale(h.x,h.y),c.translate(g.x,g.y),c.fillStyle=this.__tilePattern,c.fillRect(-g.x+this.anchor.x*-this._width,-g.y+this.anchor.y*-this._height,this._width/h.x,this._height/h.y),c.scale(1/h.x,1/h.y),c.translate(-g.x,-g.y),this._mask&&a.maskManager.popMask(a.context),d=0,e=this.children.length;e>d;d++)this.children[d]._renderCanvas(a)}},b.TilingSprite.prototype.getBounds=function(){var a=this._width,b=this._height,c=a*(1-this.anchor.x),d=a*-this.anchor.x,e=b*(1-this.anchor.y),f=b*-this.anchor.y,g=this.worldTransform,h=g.a,i=g.c,j=g.b,k=g.d,l=g.tx,m=g.ty,n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=-1/0,w=-1/0,x=1/0,y=1/0;x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w;var z=this._bounds;return z.x=x,z.width=v-x,z.y=y,z.height=w-y,this._currentBounds=z,z},b.TilingSprite.prototype.onTextureUpdate=function(){},b.TilingSprite.prototype.generateTilingTexture=function(a){if(this.texture.baseTexture.hasLoaded){var c,d,e=this.texture,f=e.frame,g=f.width!==e.baseTexture.width||f.height!==e.baseTexture.height,h=!1;if(a?(c=b.getNextPowerOfTwo(f.width),d=b.getNextPowerOfTwo(f.height),(f.width!==c||f.height!==d)&&(h=!0)):g&&(c=f.width,d=f.height,h=!0),h){var i;this.tilingTexture&&this.tilingTexture.isTiling?(i=this.tilingTexture.canvasBuffer,i.resize(c,d),this.tilingTexture.baseTexture.width=c,this.tilingTexture.baseTexture.height=d,this.tilingTexture.needsUpdate=!0):(i=new b.CanvasBuffer(c,d),this.tilingTexture=b.Texture.fromCanvas(i.canvas),this.tilingTexture.canvasBuffer=i,this.tilingTexture.isTiling=!0),i.context.drawImage(e.baseTexture.source,e.crop.x,e.crop.y,e.crop.width,e.crop.height,0,0,c,d),this.tileScaleOffset.x=f.width/c,this.tileScaleOffset.y=f.height/d}else this.tilingTexture&&this.tilingTexture.isTiling&&this.tilingTexture.destroy(!0),this.tileScaleOffset.x=1,this.tileScaleOffset.y=1,this.tilingTexture=e;this.refreshTexture=!1,this.tilingTexture.baseTexture._powerOf2=!0}};var f={};f.BoneData=function(a,b){this.name=a,this.parent=b},f.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1},f.SlotData=function(a,b){this.name=a,this.boneData=b},f.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null},f.Bone=function(a,b){this.data=a,this.parent=b,this.setToSetupPose()},f.Bone.yDown=!1,f.Bone.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,updateWorldTransform:function(a,b){var c=this.parent;null!=c?(this.worldX=this.x*c.m00+this.y*c.m01+c.worldX,this.worldY=this.x*c.m10+this.y*c.m11+c.worldY,this.worldScaleX=c.worldScaleX*this.scaleX,this.worldScaleY=c.worldScaleY*this.scaleY,this.worldRotation=c.worldRotation+this.rotation):(this.worldX=this.x,this.worldY=this.y,this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY,this.worldRotation=this.rotation);var d=this.worldRotation*Math.PI/180,e=Math.cos(d),g=Math.sin(d);this.m00=e*this.worldScaleX,this.m10=g*this.worldScaleX,this.m01=-g*this.worldScaleY,this.m11=e*this.worldScaleY,a&&(this.m00=-this.m00,this.m01=-this.m01),b&&(this.m10=-this.m10,this.m11=-this.m11),f.Bone.yDown&&(this.m10=-this.m10,this.m11=-this.m11)},setToSetupPose:function(){var a=this.data;this.x=a.x,this.y=a.y,this.rotation=a.rotation,this.scaleX=a.scaleX,this.scaleY=a.scaleY}},f.Slot=function(a,b,c){this.data=a,this.skeleton=b,this.bone=c,this.setToSetupPose()},f.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,setAttachment:function(a){this.attachment=a,this._attachmentTime=this.skeleton.time},setAttachmentTime:function(a){this._attachmentTime=this.skeleton.time-a},getAttachmentTime:function(){return this.skeleton.time-this._attachmentTime},setToSetupPose:function(){var a=this.data;this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a;for(var b=this.skeleton.data.slots,c=0,d=b.length;d>c;c++)if(b[c]==a){this.setAttachment(a.attachmentName?this.skeleton.getAttachmentBySlotIndex(c,a.attachmentName):null);break}}},f.Skin=function(a){this.name=a,this.attachments={}},f.Skin.prototype={addAttachment:function(a,b,c){this.attachments[a+":"+b]=c},getAttachment:function(a,b){return this.attachments[a+":"+b]},_attachAll:function(a,b){for(var c in b.attachments){var d=c.indexOf(":"),e=parseInt(c.substring(0,d),10),f=c.substring(d+1),g=a.slots[e];if(g.attachment&&g.attachment.name==f){var h=this.getAttachment(e,f);h&&g.setAttachment(h)}}}},f.Animation=function(a,b,c){this.name=a,this.timelines=b,this.duration=c},f.Animation.prototype={apply:function(a,b,c){c&&this.duration&&(b%=this.duration);for(var d=this.timelines,e=0,f=d.length;f>e;e++)d[e].apply(a,b,1)},mix:function(a,b,c,d){c&&this.duration&&(b%=this.duration);for(var e=this.timelines,f=0,g=e.length;g>f;f++)e[f].apply(a,b,d)}},f.binarySearch=function(a,b,c){var d=0,e=Math.floor(a.length/c)-2;if(!e)return c;for(var f=e>>>1;;){if(a[(f+1)*c]<=b?d=f+1:e=f,d==e)return(d+1)*c;f=d+e>>>1}},f.linearSearch=function(a,b,c){for(var d=0,e=a.length-c;e>=d;d+=c)if(a[d]>b)return d;return-1},f.Curves=function(a){this.curves=[],this.curves.length=6*(a-1)},f.Curves.prototype={setLinear:function(a){this.curves[6*a]=0},setStepped:function(a){this.curves[6*a]=-1},setCurve:function(a,b,c,d,e){var f=.1,g=f*f,h=g*f,i=3*f,j=3*g,k=6*g,l=6*h,m=2*-b+d,n=2*-c+e,o=3*(b-d)+1,p=3*(c-e)+1,q=6*a,r=this.curves;r[q]=b*i+m*j+o*h,r[q+1]=c*i+n*j+p*h,r[q+2]=m*k+o*l,r[q+3]=n*k+p*l,r[q+4]=o*l,r[q+5]=p*l},getCurvePercent:function(a,b){b=0>b?0:b>1?1:b;var c=6*a,d=this.curves,e=d[c];if(!e)return b;if(-1==e)return 0;for(var f=d[c+1],g=d[c+2],h=d[c+3],i=d[c+4],j=d[c+5],k=e,l=f,m=8;;){if(k>=b){var n=k-e,o=l-f;return o+(l-o)*(b-n)/(k-n)}if(!m)break;m--,e+=g,f+=h,g+=i,h+=j,k+=e,l+=f}return l+(1-l)*(b-k)/(1-k)}},f.RotateTimeline=function(a){this.curves=new f.Curves(a),this.frames=[],this.frames.length=2*a},f.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(a,b,c){a*=2,this.frames[a]=b,this.frames[a+1]=c},apply:function(a,b,c){var d,e=this.frames;if(!(b<e[0])){var g=a.bones[this.boneIndex];if(b>=e[e.length-2]){for(d=g.data.rotation+e[e.length-1]-g.rotation;d>180;)d-=360;for(;-180>d;)d+=360;return g.rotation+=d*c,void 0}var h=f.binarySearch(e,b,2),i=e[h-1],j=e[h],k=1-(b-j)/(e[h-2]-j);for(k=this.curves.getCurvePercent(h/2-1,k),d=e[h+1]-i;d>180;)d-=360;for(;-180>d;)d+=360;for(d=g.data.rotation+(i+d*k)-g.rotation;d>180;)d-=360;for(;-180>d;)d+=360;g.rotation+=d*c}}},f.TranslateTimeline=function(a){this.curves=new f.Curves(a),this.frames=[],this.frames.length=3*a},f.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.x+=(e.data.x+d[d.length-2]-e.x)*c,e.y+=(e.data.y+d[d.length-1]-e.y)*c,void 0;var g=f.binarySearch(d,b,3),h=d[g-2],i=d[g-1],j=d[g],k=1-(b-j)/(d[g+-3]-j);k=this.curves.getCurvePercent(g/3-1,k),e.x+=(e.data.x+h+(d[g+1]-h)*k-e.x)*c,e.y+=(e.data.y+i+(d[g+2]-i)*k-e.y)*c}}},f.ScaleTimeline=function(a){this.curves=new f.Curves(a),this.frames=[],this.frames.length=3*a},f.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.scaleX+=(e.data.scaleX-1+d[d.length-2]-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+d[d.length-1]-e.scaleY)*c,void 0;var g=f.binarySearch(d,b,3),h=d[g-2],i=d[g-1],j=d[g],k=1-(b-j)/(d[g+-3]-j);k=this.curves.getCurvePercent(g/3-1,k),e.scaleX+=(e.data.scaleX-1+h+(d[g+1]-h)*k-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+i+(d[g+2]-i)*k-e.scaleY)*c}}},f.ColorTimeline=function(a){this.curves=new f.Curves(a),this.frames=[],this.frames.length=5*a},f.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/5},setFrame:function(a,b,c,d,e,f){a*=5,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d,this.frames[a+3]=e,this.frames[a+4]=f},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.slots[this.slotIndex];if(b>=d[d.length-5]){var g=d.length-1;return e.r=d[g-3],e.g=d[g-2],e.b=d[g-1],e.a=d[g],void 0}var h=f.binarySearch(d,b,5),i=d[h-4],j=d[h-3],k=d[h-2],l=d[h-1],m=d[h],n=1-(b-m)/(d[h-5]-m);n=this.curves.getCurvePercent(h/5-1,n);var o=i+(d[h+1]-i)*n,p=j+(d[h+2]-j)*n,q=k+(d[h+3]-k)*n,r=l+(d[h+4]-l)*n;1>c?(e.r+=(o-e.r)*c,e.g+=(p-e.g)*c,e.b+=(q-e.b)*c,e.a+=(r-e.a)*c):(e.r=o,e.g=p,e.b=q,e.a=r)}}},f.AttachmentTimeline=function(a){this.curves=new f.Curves(a),this.frames=[],this.frames.length=a,this.attachmentNames=[],this.attachmentNames.length=a},f.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length},setFrame:function(a,b,c){this.frames[a]=b,this.attachmentNames[a]=c},apply:function(a,b){var c=this.frames;if(!(b<c[0])){var d;d=b>=c[c.length-1]?c.length-1:f.binarySearch(c,b,1)-1;var e=this.attachmentNames[d];a.slots[this.slotIndex].setAttachment(e?a.getAttachmentBySlotIndex(this.slotIndex,e):null)}}},f.SkeletonData=function(){this.bones=[],this.slots=[],this.skins=[],this.animations=[]},f.SkeletonData.prototype={defaultSkin:null,findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return slot[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSkin:function(a){for(var b=this.skins,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findAnimation:function(a){for(var b=this.animations,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null}},f.Skeleton=function(a){this.data=a,this.bones=[];
for(var b=0,c=a.bones.length;c>b;b++){var d=a.bones[b],e=d.parent?this.bones[a.bones.indexOf(d.parent)]:null;this.bones.push(new f.Bone(d,e))}for(this.slots=[],this.drawOrder=[],b=0,c=a.slots.length;c>b;b++){var g=a.slots[b],h=this.bones[a.bones.indexOf(g.boneData)],i=new f.Slot(g,this,h);this.slots.push(i),this.drawOrder.push(i)}},f.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:!1,flipY:!1,updateWorldTransform:function(){for(var a=this.flipX,b=this.flipY,c=this.bones,d=0,e=c.length;e>d;d++)c[d].updateWorldTransform(a,b)},setToSetupPose:function(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()},setBonesToSetupPose:function(){for(var a=this.bones,b=0,c=a.length;c>b;b++)a[b].setToSetupPose()},setSlotsToSetupPose:function(){for(var a=this.slots,b=0,c=a.length;c>b;b++)a[b].setToSetupPose(b)},getRootBone:function(){return this.bones.length?this.bones[0]:null},findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},setSkinByName:function(a){var b=this.data.findSkin(a);if(!b)throw"Skin not found: "+a;this.setSkin(b)},setSkin:function(a){this.skin&&a&&a._attachAll(this,this.skin),this.skin=a},getAttachmentBySlotName:function(a,b){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a),b)},getAttachmentBySlotIndex:function(a,b){if(this.skin){var c=this.skin.getAttachment(a,b);if(c)return c}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(a,b):null},setAttachment:function(a,b){for(var c=this.slots,d=0,e=c.size;e>d;d++){var f=c[d];if(f.data.name==a){var g=null;if(b&&(g=this.getAttachment(d,b),null==g))throw"Attachment not found: "+b+", for slot: "+a;return f.setAttachment(g),void 0}}throw"Slot not found: "+a},update:function(a){time+=a}},f.AttachmentType={region:0},f.RegionAttachment=function(){this.offset=[],this.offset.length=8,this.uvs=[],this.uvs.length=8},f.RegionAttachment.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(a,b,c,d,e){var f=this.uvs;e?(f[2]=a,f[3]=d,f[4]=a,f[5]=b,f[6]=c,f[7]=b,f[0]=c,f[1]=d):(f[0]=a,f[1]=d,f[2]=a,f[3]=b,f[4]=c,f[5]=b,f[6]=c,f[7]=d)},updateOffset:function(){var a=this.width/this.regionOriginalWidth*this.scaleX,b=this.height/this.regionOriginalHeight*this.scaleY,c=-this.width/2*this.scaleX+this.regionOffsetX*a,d=-this.height/2*this.scaleY+this.regionOffsetY*b,e=c+this.regionWidth*a,f=d+this.regionHeight*b,g=this.rotation*Math.PI/180,h=Math.cos(g),i=Math.sin(g),j=c*h+this.x,k=c*i,l=d*h+this.y,m=d*i,n=e*h+this.x,o=e*i,p=f*h+this.y,q=f*i,r=this.offset;r[0]=j-m,r[1]=l+k,r[2]=j-q,r[3]=p+k,r[4]=n-q,r[5]=p+o,r[6]=n-m,r[7]=l+o},computeVertices:function(a,b,c,d){a+=c.worldX,b+=c.worldY;var e=c.m00,f=c.m01,g=c.m10,h=c.m11,i=this.offset;d[0]=i[0]*e+i[1]*f+a,d[1]=i[0]*g+i[1]*h+b,d[2]=i[2]*e+i[3]*f+a,d[3]=i[2]*g+i[3]*h+b,d[4]=i[4]*e+i[5]*f+a,d[5]=i[4]*g+i[5]*h+b,d[6]=i[6]*e+i[7]*f+a,d[7]=i[6]*g+i[7]*h+b}},f.AnimationStateData=function(a){this.skeletonData=a,this.animationToMixTime={}},f.AnimationStateData.prototype={defaultMix:0,setMixByName:function(a,b,c){var d=this.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;var e=this.skeletonData.findAnimation(b);if(!e)throw"Animation not found: "+b;this.setMix(d,e,c)},setMix:function(a,b,c){this.animationToMixTime[a.name+":"+b.name]=c},getMix:function(a,b){var c=this.animationToMixTime[a.name+":"+b.name];return c?c:this.defaultMix}},f.AnimationState=function(a){this.data=a,this.queue=[]},f.AnimationState.prototype={animationSpeed:1,current:null,previous:null,currentTime:0,previousTime:0,currentLoop:!1,previousLoop:!1,mixTime:0,mixDuration:0,update:function(a){if(this.currentTime+=a*this.animationSpeed,this.previousTime+=a,this.mixTime+=a,this.queue.length>0){var b=this.queue[0];this.currentTime>=b.delay&&(this._setAnimation(b.animation,b.loop),this.queue.shift())}},apply:function(a){if(this.current)if(this.previous){this.previous.apply(a,this.previousTime,this.previousLoop);var b=this.mixTime/this.mixDuration;b>=1&&(b=1,this.previous=null),this.current.mix(a,this.currentTime,this.currentLoop,b)}else this.current.apply(a,this.currentTime,this.currentLoop)},clearAnimation:function(){this.previous=null,this.current=null,this.queue.length=0},_setAnimation:function(a,b){this.previous=null,a&&this.current&&(this.mixDuration=this.data.getMix(this.current,a),this.mixDuration>0&&(this.mixTime=0,this.previous=this.current,this.previousTime=this.currentTime,this.previousLoop=this.currentLoop)),this.current=a,this.currentLoop=b,this.currentTime=0},setAnimationByName:function(a,b){var c=this.data.skeletonData.findAnimation(a);if(!c)throw"Animation not found: "+a;this.setAnimation(c,b)},setAnimation:function(a,b){this.queue.length=0,this._setAnimation(a,b)},addAnimationByName:function(a,b,c){var d=this.data.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;this.addAnimation(d,b,c)},addAnimation:function(a,b,c){var d={};if(d.animation=a,d.loop=b,!c||0>=c){var e=this.queue.length?this.queue[this.queue.length-1].animation:this.current;c=null!=e?e.duration-this.data.getMix(e,a)+(c||0):0}d.delay=c,this.queue.push(d)},isComplete:function(){return!this.current||this.currentTime>=this.current.duration}},f.SkeletonJson=function(a){this.attachmentLoader=a},f.SkeletonJson.prototype={scale:1,readSkeletonData:function(a){for(var b,c=new f.SkeletonData,d=a.bones,e=0,g=d.length;g>e;e++){var h=d[e],i=null;if(h.parent&&(i=c.findBone(h.parent),!i))throw"Parent bone not found: "+h.parent;b=new f.BoneData(h.name,i),b.length=(h.length||0)*this.scale,b.x=(h.x||0)*this.scale,b.y=(h.y||0)*this.scale,b.rotation=h.rotation||0,b.scaleX=h.scaleX||1,b.scaleY=h.scaleY||1,c.bones.push(b)}var j=a.slots;for(e=0,g=j.length;g>e;e++){var k=j[e];if(b=c.findBone(k.bone),!b)throw"Slot bone not found: "+k.bone;var l=new f.SlotData(k.name,b),m=k.color;m&&(l.r=f.SkeletonJson.toColor(m,0),l.g=f.SkeletonJson.toColor(m,1),l.b=f.SkeletonJson.toColor(m,2),l.a=f.SkeletonJson.toColor(m,3)),l.attachmentName=k.attachment,c.slots.push(l)}var n=a.skins;for(var o in n)if(n.hasOwnProperty(o)){var p=n[o],q=new f.Skin(o);for(var r in p)if(p.hasOwnProperty(r)){var s=c.findSlotIndex(r),t=p[r];for(var u in t)if(t.hasOwnProperty(u)){var v=this.readAttachment(q,u,t[u]);null!=v&&q.addAttachment(s,u,v)}}c.skins.push(q),"default"==q.name&&(c.defaultSkin=q)}var w=a.animations;for(var x in w)w.hasOwnProperty(x)&&this.readAnimation(x,w[x],c);return c},readAttachment:function(a,b,c){b=c.name||b;var d=f.AttachmentType[c.type||"region"];if(d==f.AttachmentType.region){var e=new f.RegionAttachment;return e.x=(c.x||0)*this.scale,e.y=(c.y||0)*this.scale,e.scaleX=c.scaleX||1,e.scaleY=c.scaleY||1,e.rotation=c.rotation||0,e.width=(c.width||32)*this.scale,e.height=(c.height||32)*this.scale,e.updateOffset(),e.rendererObject={},e.rendererObject.name=b,e.rendererObject.scale={},e.rendererObject.scale.x=e.scaleX,e.rendererObject.scale.y=e.scaleY,e.rendererObject.rotation=-e.rotation*Math.PI/180,e}throw"Unknown attachment type: "+d},readAnimation:function(a,b,c){var d,e,g,h,i,j,k,l=[],m=0,n=b.bones;for(var o in n)if(n.hasOwnProperty(o)){var p=c.findBoneIndex(o);if(-1==p)throw"Bone not found: "+o;var q=n[o];for(g in q)if(q.hasOwnProperty(g))if(i=q[g],"rotate"==g){for(e=new f.RotateTimeline(i.length),e.boneIndex=p,d=0,j=0,k=i.length;k>j;j++)h=i[j],e.setFrame(d,h.time,h.angle),f.SkeletonJson.readCurve(e,d,h),d++;l.push(e),m=Math.max(m,e.frames[2*e.getFrameCount()-2])}else{if("translate"!=g&&"scale"!=g)throw"Invalid timeline type for a bone: "+g+" ("+o+")";var r=1;for("scale"==g?e=new f.ScaleTimeline(i.length):(e=new f.TranslateTimeline(i.length),r=this.scale),e.boneIndex=p,d=0,j=0,k=i.length;k>j;j++){h=i[j];var s=(h.x||0)*r,t=(h.y||0)*r;e.setFrame(d,h.time,s,t),f.SkeletonJson.readCurve(e,d,h),d++}l.push(e),m=Math.max(m,e.frames[3*e.getFrameCount()-3])}}var u=b.slots;for(var v in u)if(u.hasOwnProperty(v)){var w=u[v],x=c.findSlotIndex(v);for(g in w)if(w.hasOwnProperty(g))if(i=w[g],"color"==g){for(e=new f.ColorTimeline(i.length),e.slotIndex=x,d=0,j=0,k=i.length;k>j;j++){h=i[j];var y=h.color,z=f.SkeletonJson.toColor(y,0),A=f.SkeletonJson.toColor(y,1),B=f.SkeletonJson.toColor(y,2),C=f.SkeletonJson.toColor(y,3);e.setFrame(d,h.time,z,A,B,C),f.SkeletonJson.readCurve(e,d,h),d++}l.push(e),m=Math.max(m,e.frames[5*e.getFrameCount()-5])}else{if("attachment"!=g)throw"Invalid timeline type for a slot: "+g+" ("+v+")";for(e=new f.AttachmentTimeline(i.length),e.slotIndex=x,d=0,j=0,k=i.length;k>j;j++)h=i[j],e.setFrame(d++,h.time,h.name);l.push(e),m=Math.max(m,e.frames[e.getFrameCount()-1])}}c.animations.push(new f.Animation(a,l,m))}},f.SkeletonJson.readCurve=function(a,b,c){var d=c.curve;d&&("stepped"==d?a.curves.setStepped(b):d instanceof Array&&a.curves.setCurve(b,d[0],d[1],d[2],d[3]))},f.SkeletonJson.toColor=function(a,b){if(8!=a.length)throw"Color hexidecimal length must be 8, recieved: "+a;return parseInt(a.substr(2*b,2),16)/255},f.Atlas=function(a,b){this.textureLoader=b,this.pages=[],this.regions=[];var c=new f.AtlasReader(a),d=[];d.length=4;for(var e=null;;){var g=c.readLine();if(null==g)break;if(g=c.trim(g),g.length)if(e){var h=new f.AtlasRegion;h.name=g,h.page=e,h.rotate="true"==c.readValue(),c.readTuple(d);var i=parseInt(d[0],10),j=parseInt(d[1],10);c.readTuple(d);var k=parseInt(d[0],10),l=parseInt(d[1],10);h.u=i/e.width,h.v=j/e.height,h.rotate?(h.u2=(i+l)/e.width,h.v2=(j+k)/e.height):(h.u2=(i+k)/e.width,h.v2=(j+l)/e.height),h.x=i,h.y=j,h.width=Math.abs(k),h.height=Math.abs(l),4==c.readTuple(d)&&(h.splits=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)],4==c.readTuple(d)&&(h.pads=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)],c.readTuple(d))),h.originalWidth=parseInt(d[0],10),h.originalHeight=parseInt(d[1],10),c.readTuple(d),h.offsetX=parseInt(d[0],10),h.offsetY=parseInt(d[1],10),h.index=parseInt(c.readValue(),10),this.regions.push(h)}else{e=new f.AtlasPage,e.name=g,e.format=f.Atlas.Format[c.readValue()],c.readTuple(d),e.minFilter=f.Atlas.TextureFilter[d[0]],e.magFilter=f.Atlas.TextureFilter[d[1]];var m=c.readValue();e.uWrap=f.Atlas.TextureWrap.clampToEdge,e.vWrap=f.Atlas.TextureWrap.clampToEdge,"x"==m?e.uWrap=f.Atlas.TextureWrap.repeat:"y"==m?e.vWrap=f.Atlas.TextureWrap.repeat:"xy"==m&&(e.uWrap=e.vWrap=f.Atlas.TextureWrap.repeat),b.load(e,g),this.pages.push(e)}else e=null}},f.Atlas.prototype={findRegion:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},dispose:function(){for(var a=this.pages,b=0,c=a.length;c>b;b++)this.textureLoader.unload(a[b].rendererObject)},updateUVs:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++){var e=b[c];e.page==a&&(e.u=e.x/a.width,e.v=e.y/a.height,e.rotate?(e.u2=(e.x+e.height)/a.width,e.v2=(e.y+e.width)/a.height):(e.u2=(e.x+e.width)/a.width,e.v2=(e.y+e.height)/a.height))}}},f.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6},f.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6},f.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2},f.AtlasPage=function(){},f.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0},f.AtlasRegion=function(){},f.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:!1,splits:null,pads:null},f.AtlasReader=function(a){this.lines=a.split(/\r\n|\r|\n/)},f.AtlasReader.prototype={index:0,trim:function(a){return a.replace(/^\s+|\s+$/g,"")},readLine:function(){return this.index>=this.lines.length?null:this.lines[this.index++]},readValue:function(){var a=this.readLine(),b=a.indexOf(":");if(-1==b)throw"Invalid line: "+a;return this.trim(a.substring(b+1))},readTuple:function(a){var b=this.readLine(),c=b.indexOf(":");if(-1==c)throw"Invalid line: "+b;for(var d=0,e=c+1;3>d;d++){var f=b.indexOf(",",e);if(-1==f){if(!d)throw"Invalid line: "+b;break}a[d]=this.trim(b.substr(e,f-e)),e=f+1}return a[d]=this.trim(b.substring(e)),d+1}},f.AtlasAttachmentLoader=function(a){this.atlas=a},f.AtlasAttachmentLoader.prototype={newAttachment:function(a,b,c){switch(b){case f.AttachmentType.region:var d=this.atlas.findRegion(c);if(!d)throw"Region not found in atlas: "+c+" ("+b+")";var e=new f.RegionAttachment(c);return e.rendererObject=d,e.setUVs(d.u,d.v,d.u2,d.v2,d.rotate),e.regionOffsetX=d.offsetX,e.regionOffsetY=d.offsetY,e.regionWidth=d.width,e.regionHeight=d.height,e.regionOriginalWidth=d.originalWidth,e.regionOriginalHeight=d.originalHeight,e}throw"Unknown attachment type: "+b}},f.Bone.yDown=!0,b.AnimCache={},b.Spine=function(a){if(b.DisplayObjectContainer.call(this),this.spineData=b.AnimCache[a],!this.spineData)throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+a);this.skeleton=new f.Skeleton(this.spineData),this.skeleton.updateWorldTransform(),this.stateData=new f.AnimationStateData(this.spineData),this.state=new f.AnimationState(this.stateData),this.slotContainers=[];for(var c=0,d=this.skeleton.drawOrder.length;d>c;c++){var e=this.skeleton.drawOrder[c],g=e.attachment,h=new b.DisplayObjectContainer;if(this.slotContainers.push(h),this.addChild(h),g instanceof f.RegionAttachment){var i=g.rendererObject.name,j=this.createSprite(e,g.rendererObject);e.currentSprite=j,e.currentSpriteName=i,h.addChild(j)}}},b.Spine.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Spine.prototype.constructor=b.Spine,b.Spine.prototype.updateTransform=function(){this.lastTime=this.lastTime||Date.now();var a=.001*(Date.now()-this.lastTime);this.lastTime=Date.now(),this.state.update(a),this.state.apply(this.skeleton),this.skeleton.updateWorldTransform();for(var c=this.skeleton.drawOrder,d=0,e=c.length;e>d;d++){var g=c[d],h=g.attachment,i=this.slotContainers[d];if(h instanceof f.RegionAttachment){if(h.rendererObject&&(!g.currentSpriteName||g.currentSpriteName!=h.name)){var j=h.rendererObject.name;if(void 0!==g.currentSprite&&(g.currentSprite.visible=!1),g.sprites=g.sprites||{},void 0!==g.sprites[j])g.sprites[j].visible=!0;else{var k=this.createSprite(g,h.rendererObject);i.addChild(k)}g.currentSprite=g.sprites[j],g.currentSpriteName=j}i.visible=!0;var l=g.bone;i.position.x=l.worldX+h.x*l.m00+h.y*l.m01,i.position.y=l.worldY+h.x*l.m10+h.y*l.m11,i.scale.x=l.worldScaleX,i.scale.y=l.worldScaleY,i.rotation=-(g.bone.worldRotation*Math.PI/180),i.alpha=g.a,g.currentSprite.tint=b.rgb2hex([g.r,g.g,g.b])}else i.visible=!1}b.DisplayObjectContainer.prototype.updateTransform.call(this)},b.Spine.prototype.createSprite=function(a,c){var d=b.TextureCache[c.name]?c.name:c.name+".png",e=new b.Sprite(b.Texture.fromFrame(d));return e.scale=c.scale,e.rotation=c.rotation,e.anchor.x=e.anchor.y=.5,a.sprites=a.sprites||{},a.sprites[c.name]=e,e},b.BaseTextureCache={},b.texturesToUpdate=[],b.texturesToDestroy=[],b.BaseTextureCacheIdGenerator=0,b.BaseTexture=function(a,c){if(b.EventTarget.call(this),this.width=100,this.height=100,this.scaleMode=c||b.scaleModes.DEFAULT,this.hasLoaded=!1,this.source=a,this.id=b.BaseTextureCacheIdGenerator++,this.premultipliedAlpha=!0,this._glTextures=[],this._dirty=[],a){if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,b.texturesToUpdate.push(this);else{var d=this;this.source.onload=function(){d.hasLoaded=!0,d.width=d.source.width,d.height=d.source.height;for(var a=0;a<d._glTextures.length;a++)d._dirty[a]=!0;d.dispatchEvent({type:"loaded",content:d})},this.source.onerror=function(){d.dispatchEvent({type:"error",content:d})}}this.imageUrl=null,this._powerOf2=!1}},b.BaseTexture.prototype.constructor=b.BaseTexture,b.BaseTexture.prototype.destroy=function(){this.imageUrl?(delete b.BaseTextureCache[this.imageUrl],delete b.TextureCache[this.imageUrl],this.imageUrl=null,this.source.src=null):this.source&&this.source._pixiId&&delete b.BaseTextureCache[this.source._pixiId],this.source=null,b.texturesToDestroy.push(this)},b.BaseTexture.prototype.updateSourceImage=function(a){this.hasLoaded=!1,this.source.src=null,this.source.src=a},b.BaseTexture.fromImage=function(a,c,d){var e=b.BaseTextureCache[a];if(void 0===c&&-1===a.indexOf("data:")&&(c=!0),!e){var f=new Image;c&&(f.crossOrigin=""),f.src=a,e=new b.BaseTexture(f,d),e.imageUrl=a,b.BaseTextureCache[a]=e}return e},b.BaseTexture.fromCanvas=function(a,c){a._pixiId||(a._pixiId="canvas_"+b.TextureCacheIdGenerator++);var d=b.BaseTextureCache[a._pixiId];return d||(d=new b.BaseTexture(a,c),b.BaseTextureCache[a._pixiId]=d),d},b.TextureCache={},b.FrameCache={},b.TextureCacheIdGenerator=0,b.Texture=function(a,c){if(b.EventTarget.call(this),this.noFrame=!1,c||(this.noFrame=!0,c=new b.Rectangle(0,0,1,1)),a instanceof b.Texture&&(a=a.baseTexture),this.baseTexture=a,this.frame=c,this.trim=null,this.valid=!1,this.scope=this,this._uvs=null,this.width=0,this.height=0,this.crop=new b.Rectangle(0,0,1,1),a.hasLoaded)this.noFrame&&(c=new b.Rectangle(0,0,a.width,a.height)),this.setFrame(c);else{var d=this;a.addEventListener("loaded",function(){d.onBaseTextureLoaded()})}},b.Texture.prototype.constructor=b.Texture,b.Texture.prototype.onBaseTextureLoaded=function(){var a=this.baseTexture;a.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new b.Rectangle(0,0,a.width,a.height)),this.setFrame(this.frame),this.scope.dispatchEvent({type:"update",content:this})},b.Texture.prototype.destroy=function(a){a&&this.baseTexture.destroy(),this.valid=!1},b.Texture.prototype.setFrame=function(a){if(this.noFrame=!1,this.frame=a,this.width=a.width,this.height=a.height,this.crop.x=a.x,this.crop.y=a.y,this.crop.width=a.width,this.crop.height=a.height,!this.trim&&(a.x+a.width>this.baseTexture.width||a.y+a.height>this.baseTexture.height))throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.valid=a&&a.width&&a.height&&this.baseTexture.source&&this.baseTexture.hasLoaded,this.trim&&(this.width=this.trim.width,this.height=this.trim.height,this.frame.width=this.trim.width,this.frame.height=this.trim.height),this.valid&&b.Texture.frameUpdates.push(this)},b.Texture.prototype._updateWebGLuvs=function(){this._uvs||(this._uvs=new b.TextureUvs);var a=this.crop,c=this.baseTexture.width,d=this.baseTexture.height;this._uvs.x0=a.x/c,this._uvs.y0=a.y/d,this._uvs.x1=(a.x+a.width)/c,this._uvs.y1=a.y/d,this._uvs.x2=(a.x+a.width)/c,this._uvs.y2=(a.y+a.height)/d,this._uvs.x3=a.x/c,this._uvs.y3=(a.y+a.height)/d},b.Texture.fromImage=function(a,c,d){var e=b.TextureCache[a];return e||(e=new b.Texture(b.BaseTexture.fromImage(a,c,d)),b.TextureCache[a]=e),e},b.Texture.fromFrame=function(a){var c=b.TextureCache[a];if(!c)throw new Error('The frameId "'+a+'" does not exist in the texture cache ');return c},b.Texture.fromCanvas=function(a,c){var d=b.BaseTexture.fromCanvas(a,c);return new b.Texture(d)},b.Texture.addTextureToCache=function(a,c){b.TextureCache[c]=a},b.Texture.removeTextureFromCache=function(a){var c=b.TextureCache[a];return delete b.TextureCache[a],delete b.BaseTextureCache[a],c},b.Texture.frameUpdates=[],b.TextureUvs=function(){this.x0=0,this.y0=0,this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.x3=0,this.y3=0},b.RenderTexture=function(a,c,d,e){if(b.EventTarget.call(this),this.width=a||100,this.height=c||100,this.frame=new b.Rectangle(0,0,this.width,this.height),this.crop=new b.Rectangle(0,0,this.width,this.height),this.baseTexture=new b.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTextures=[],this.baseTexture.scaleMode=e||b.scaleModes.DEFAULT,this.baseTexture.hasLoaded=!0,this.renderer=d||b.defaultRenderer,this.renderer.type===b.WEBGL_RENDERER){var f=this.renderer.gl;this.textureBuffer=new b.FilterTexture(f,this.width,this.height,this.baseTexture.scaleMode),this.baseTexture._glTextures[f.id]=this.textureBuffer.texture,this.render=this.renderWebGL,this.projection=new b.Point(this.width/2,-this.height/2)}else this.render=this.renderCanvas,this.textureBuffer=new b.CanvasBuffer(this.width,this.height),this.baseTexture.source=this.textureBuffer.canvas;this.valid=!0,b.Texture.frameUpdates.push(this)},b.RenderTexture.prototype=Object.create(b.Texture.prototype),b.RenderTexture.prototype.constructor=b.RenderTexture,b.RenderTexture.prototype.resize=function(a,c,d){(a!==this.width||c!==this.height)&&(this.width=this.frame.width=this.crop.width=a,this.height=this.frame.height=this.crop.height=c,d&&(this.baseTexture.width=this.width,this.baseTexture.height=this.height),this.renderer.type===b.WEBGL_RENDERER&&(this.projection.x=this.width/2,this.projection.y=-this.height/2),this.textureBuffer.resize(this.width,this.height))},b.RenderTexture.prototype.clear=function(){this.renderer.type===b.WEBGL_RENDERER&&this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer),this.textureBuffer.clear()},b.RenderTexture.prototype.renderWebGL=function(a,c,d){var e=this.renderer.gl;e.colorMask(!0,!0,!0,!0),e.viewport(0,0,this.width,this.height),e.bindFramebuffer(e.FRAMEBUFFER,this.textureBuffer.frameBuffer),d&&this.textureBuffer.clear();var f=a.children,g=a.worldTransform;a.worldTransform=b.RenderTexture.tempMatrix,a.worldTransform.d=-1,a.worldTransform.ty=-2*this.projection.y,c&&(a.worldTransform.tx=c.x,a.worldTransform.ty-=c.y);for(var h=0,i=f.length;i>h;h++)f[h].updateTransform();b.WebGLRenderer.updateTextures(),this.renderer.spriteBatch.dirty=!0,this.renderer.renderDisplayObject(a,this.projection,this.textureBuffer.frameBuffer),a.worldTransform=g,this.renderer.spriteBatch.dirty=!0},b.RenderTexture.prototype.renderCanvas=function(a,c,d){var e=a.children,f=a.worldTransform;a.worldTransform=b.RenderTexture.tempMatrix,c?(a.worldTransform.tx=c.x,a.worldTransform.ty=c.y):(a.worldTransform.tx=0,a.worldTransform.ty=0);for(var g=0,h=e.length;h>g;g++)e[g].updateTransform();d&&this.textureBuffer.clear();var i=this.textureBuffer.context;this.renderer.renderDisplayObject(a,i),i.setTransform(1,0,0,1,0,0),a.worldTransform=f},b.RenderTexture.tempMatrix=new b.Matrix,b.AssetLoader=function(a,c){b.EventTarget.call(this),this.assetURLs=a,this.crossorigin=c,this.loadersByType={jpg:b.ImageLoader,jpeg:b.ImageLoader,png:b.ImageLoader,gif:b.ImageLoader,webp:b.ImageLoader,json:b.JsonLoader,atlas:b.AtlasLoader,anim:b.SpineLoader,xml:b.BitmapFontLoader,fnt:b.BitmapFontLoader}},b.AssetLoader.prototype.constructor=b.AssetLoader,b.AssetLoader.prototype._getDataType=function(a){var b="data:",c=a.slice(0,b.length).toLowerCase();if(c===b){var d=a.slice(b.length),e=d.indexOf(",");if(-1===e)return null;var f=d.slice(0,e).split(";")[0];return f&&"text/plain"!==f.toLowerCase()?f.split("/").pop().toLowerCase():"txt"}return null},b.AssetLoader.prototype.load=function(){function a(a){b.onAssetLoaded(a.content)}var b=this;this.loadCount=this.assetURLs.length;for(var c=0;c<this.assetURLs.length;c++){var d=this.assetURLs[c],e=this._getDataType(d);e||(e=d.split("?").shift().split(".").pop().toLowerCase());var f=this.loadersByType[e];if(!f)throw new Error(e+" is an unsupported file type");var g=new f(d,this.crossorigin);g.addEventListener("loaded",a),g.load()}},b.AssetLoader.prototype.onAssetLoaded=function(a){this.loadCount--,this.dispatchEvent({type:"onProgress",content:this,loader:a}),this.onProgress&&this.onProgress(a),this.loadCount||(this.dispatchEvent({type:"onComplete",content:this}),this.onComplete&&this.onComplete())},b.JsonLoader=function(a,c){b.EventTarget.call(this),this.url=a,this.crossorigin=c,this.baseUrl=a.replace(/[^\/]*$/,""),this.loaded=!1},b.JsonLoader.prototype.constructor=b.JsonLoader,b.JsonLoader.prototype.load=function(){var a=this;window.XDomainRequest&&a.crossorigin?(this.ajaxRequest=new window.XDomainRequest,this.ajaxRequest.timeout=3e3,this.ajaxRequest.onerror=function(){a.onError()},this.ajaxRequest.ontimeout=function(){a.onError()},this.ajaxRequest.onprogress=function(){}):this.ajaxRequest=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),this.ajaxRequest.onload=function(){a.onJSONLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.send()},b.JsonLoader.prototype.onJSONLoaded=function(){if(!this.ajaxRequest.responseText)return this.onError(),void 0;if(this.json=JSON.parse(this.ajaxRequest.responseText),this.json.frames){var a=this,c=this.baseUrl+this.json.meta.image,d=new b.ImageLoader(c,this.crossorigin),e=this.json.frames;this.texture=d.texture.baseTexture,d.addEventListener("loaded",function(){a.onLoaded()});for(var g in e){var h=e[g].frame;if(h&&(b.TextureCache[g]=new b.Texture(this.texture,{x:h.x,y:h.y,width:h.w,height:h.h}),b.TextureCache[g].crop=new b.Rectangle(h.x,h.y,h.w,h.h),e[g].trimmed)){var i=e[g].sourceSize,j=e[g].spriteSourceSize;b.TextureCache[g].trim=new b.Rectangle(j.x,j.y,i.w,i.h)}}d.load()}else if(this.json.bones){var k=new f.SkeletonJson,l=k.readSkeletonData(this.json);b.AnimCache[this.url]=l,this.onLoaded()}else this.onLoaded()},b.JsonLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},b.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},b.AtlasLoader=function(a,c){b.EventTarget.call(this),this.url=a,this.baseUrl=a.replace(/[^\/]*$/,""),this.crossorigin=c,this.loaded=!1},b.AtlasLoader.constructor=b.AtlasLoader,b.AtlasLoader.prototype.load=function(){this.ajaxRequest=new b.AjaxRequest,this.ajaxRequest.onreadystatechange=this.onAtlasLoaded.bind(this),this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/json"),this.ajaxRequest.send(null)},b.AtlasLoader.prototype.onAtlasLoaded=function(){if(4===this.ajaxRequest.readyState)if(200===this.ajaxRequest.status||-1===window.location.href.indexOf("http")){this.atlas={meta:{image:[]},frames:[]};var a=this.ajaxRequest.responseText.split(/\r?\n/),c=-3,d=0,e=null,f=!1,g=0,h=0,i=this.onLoaded.bind(this);for(g=0;g<a.length;g++)if(a[g]=a[g].replace(/^\s+|\s+$/g,""),""===a[g]&&(f=g+1),a[g].length>0){if(f===g)this.atlas.meta.image.push(a[g]),d=this.atlas.meta.image.length-1,this.atlas.frames.push({}),c=-3;else if(c>0)if(c%7===1)null!=e&&(this.atlas.frames[d][e.name]=e),e={name:a[g],frame:{}};else{var j=a[g].split(" ");if(c%7===3)e.frame.x=Number(j[1].replace(",","")),e.frame.y=Number(j[2]);else if(c%7===4)e.frame.w=Number(j[1].replace(",","")),e.frame.h=Number(j[2]);else if(c%7===5){var k={x:0,y:0,w:Number(j[1].replace(",","")),h:Number(j[2])};k.w>e.frame.w||k.h>e.frame.h?(e.trimmed=!0,e.realSize=k):e.trimmed=!1}}c++}if(null!=e&&(this.atlas.frames[d][e.name]=e),this.atlas.meta.image.length>0){for(this.images=[],h=0;h<this.atlas.meta.image.length;h++){var l=this.baseUrl+this.atlas.meta.image[h],m=this.atlas.frames[h];this.images.push(new b.ImageLoader(l,this.crossorigin));for(g in m){var n=m[g].frame;n&&(b.TextureCache[g]=new b.Texture(this.images[h].texture.baseTexture,{x:n.x,y:n.y,width:n.w,height:n.h}),m[g].trimmed&&(b.TextureCache[g].realSize=m[g].realSize,b.TextureCache[g].trim.x=0,b.TextureCache[g].trim.y=0))}}for(this.currentImageId=0,h=0;h<this.images.length;h++)this.images[h].addEventListener("loaded",i);this.images[this.currentImageId].load()}else this.onLoaded()}else this.onError()},b.AtlasLoader.prototype.onLoaded=function(){this.images.length-1>this.currentImageId?(this.currentImageId++,this.images[this.currentImageId].load()):(this.loaded=!0,this.dispatchEvent({type:"loaded",content:this}))},b.AtlasLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},b.SpriteSheetLoader=function(a,c){b.EventTarget.call(this),this.url=a,this.crossorigin=c,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null,this.frames={}},b.SpriteSheetLoader.prototype.constructor=b.SpriteSheetLoader,b.SpriteSheetLoader.prototype.load=function(){var a=this,c=new b.JsonLoader(this.url,this.crossorigin);c.addEventListener("loaded",function(b){a.json=b.content.json,a.onLoaded()}),c.load()},b.SpriteSheetLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},b.ImageLoader=function(a,c){b.EventTarget.call(this),this.texture=b.Texture.fromImage(a,c),this.frames=[]},b.ImageLoader.prototype.constructor=b.ImageLoader,b.ImageLoader.prototype.load=function(){if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var a=this;this.texture.baseTexture.addEventListener("loaded",function(){a.onLoaded()})}},b.ImageLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},b.ImageLoader.prototype.loadFramedSpriteSheet=function(a,c,d){this.frames=[];for(var e=Math.floor(this.texture.width/a),f=Math.floor(this.texture.height/c),g=0,h=0;f>h;h++)for(var i=0;e>i;i++,g++){var j=new b.Texture(this.texture,{x:i*a,y:h*c,width:a,height:c});this.frames.push(j),d&&(b.TextureCache[d+"-"+g]=j)}if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var k=this;this.texture.baseTexture.addEventListener("loaded",function(){k.onLoaded()})}},b.BitmapFontLoader=function(a,c){b.EventTarget.call(this),this.url=a,this.crossorigin=c,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null},b.BitmapFontLoader.prototype.constructor=b.BitmapFontLoader,b.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new b.AjaxRequest;var a=this;this.ajaxRequest.onreadystatechange=function(){a.onXMLLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/xml"),this.ajaxRequest.send(null)},b.BitmapFontLoader.prototype.onXMLLoaded=function(){if(4===this.ajaxRequest.readyState&&(200===this.ajaxRequest.status||-1===window.location.protocol.indexOf("http"))){var a=this.ajaxRequest.responseXML;if(!a||/MSIE 9/i.test(navigator.userAgent)||navigator.isCocoonJS)if("function"==typeof window.DOMParser){var c=new DOMParser;a=c.parseFromString(this.ajaxRequest.responseText,"text/xml")}else{var d=document.createElement("div");d.innerHTML=this.ajaxRequest.responseText,a=d}var e=this.baseUrl+a.getElementsByTagName("page")[0].getAttribute("file"),f=new b.ImageLoader(e,this.crossorigin);this.texture=f.texture.baseTexture;var g={},h=a.getElementsByTagName("info")[0],i=a.getElementsByTagName("common")[0];g.font=h.getAttribute("face"),g.size=parseInt(h.getAttribute("size"),10),g.lineHeight=parseInt(i.getAttribute("lineHeight"),10),g.chars={};for(var j=a.getElementsByTagName("char"),k=0;k<j.length;k++){var l=parseInt(j[k].getAttribute("id"),10),m=new b.Rectangle(parseInt(j[k].getAttribute("x"),10),parseInt(j[k].getAttribute("y"),10),parseInt(j[k].getAttribute("width"),10),parseInt(j[k].getAttribute("height"),10));g.chars[l]={xOffset:parseInt(j[k].getAttribute("xoffset"),10),yOffset:parseInt(j[k].getAttribute("yoffset"),10),xAdvance:parseInt(j[k].getAttribute("xadvance"),10),kerning:{},texture:b.TextureCache[l]=new b.Texture(this.texture,m)}}var n=a.getElementsByTagName("kerning");for(k=0;k<n.length;k++){var o=parseInt(n[k].getAttribute("first"),10),p=parseInt(n[k].getAttribute("second"),10),q=parseInt(n[k].getAttribute("amount"),10);g.chars[p].kerning[o]=q}b.BitmapText.fonts[g.font]=g;var r=this;f.addEventListener("loaded",function(){r.onLoaded()}),f.load()}},b.BitmapFontLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},b.SpineLoader=function(a,c){b.EventTarget.call(this),this.url=a,this.crossorigin=c,this.loaded=!1},b.SpineLoader.prototype.constructor=b.SpineLoader,b.SpineLoader.prototype.load=function(){var a=this,c=new b.JsonLoader(this.url,this.crossorigin);
c.addEventListener("loaded",function(b){a.json=b.content.json,a.onLoaded()}),c.load()},b.SpineLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},b.AbstractFilter=function(a,b){this.passes=[this],this.shaders=[],this.dirty=!0,this.padding=0,this.uniforms=b||{},this.fragmentSrc=a||[]},b.AlphaMaskFilter=function(a){b.AbstractFilter.call(this),this.passes=[this],a.baseTexture._powerOf2=!0,this.uniforms={mask:{type:"sampler2D",value:a},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},a.baseTexture.hasLoaded?(this.uniforms.mask.value.x=a.width,this.uniforms.mask.value.y=a.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),a.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D mask;","uniform sampler2D uSampler;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   mapCords *= dimensions.xy / mapDimensions;","   vec4 original =  texture2D(uSampler, vTextureCoord);","   float maskAlpha =  texture2D(mask, mapCords).r;","   original *= maskAlpha;","   gl_FragColor =  original;","}"]},b.AlphaMaskFilter.prototype=Object.create(b.AbstractFilter.prototype),b.AlphaMaskFilter.prototype.constructor=b.AlphaMaskFilter,b.AlphaMaskFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.mask.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.mask.value.height,this.uniforms.mask.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(b.AlphaMaskFilter.prototype,"map",{get:function(){return this.uniforms.mask.value},set:function(a){this.uniforms.mask.value=a}}),b.ColorMatrixFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform mat4 matrix;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;","}"]},b.ColorMatrixFilter.prototype=Object.create(b.AbstractFilter.prototype),b.ColorMatrixFilter.prototype.constructor=b.ColorMatrixFilter,Object.defineProperty(b.ColorMatrixFilter.prototype,"matrix",{get:function(){return this.uniforms.matrix.value},set:function(a){this.uniforms.matrix.value=a}}),b.GrayFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={gray:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float gray;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);","}"]},b.GrayFilter.prototype=Object.create(b.AbstractFilter.prototype),b.GrayFilter.prototype.constructor=b.GrayFilter,Object.defineProperty(b.GrayFilter.prototype,"gray",{get:function(){return this.uniforms.gray.value},set:function(a){this.uniforms.gray.value=a}}),b.DisplacementFilter=function(a){b.AbstractFilter.call(this),this.passes=[this],a.baseTexture._powerOf2=!0,this.uniforms={displacementMap:{type:"sampler2D",value:a},scale:{type:"2f",value:{x:30,y:30}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},a.baseTexture.hasLoaded?(this.uniforms.mapDimensions.value.x=a.width,this.uniforms.mapDimensions.value.y=a.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),a.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D displacementMap;","uniform sampler2D uSampler;","uniform vec2 scale;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   vec2 matSample = texture2D(displacementMap, mapCords).xy;","   matSample -= 0.5;","   matSample *= scale;","   matSample /= mapDimensions;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);","   vec2 cord = vTextureCoord;","}"]},b.DisplacementFilter.prototype=Object.create(b.AbstractFilter.prototype),b.DisplacementFilter.prototype.constructor=b.DisplacementFilter,b.DisplacementFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height,this.uniforms.displacementMap.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(b.DisplacementFilter.prototype,"map",{get:function(){return this.uniforms.displacementMap.value},set:function(a){this.uniforms.displacementMap.value=a}}),Object.defineProperty(b.DisplacementFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(a){this.uniforms.scale.value=a}}),Object.defineProperty(b.DisplacementFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(a){this.uniforms.offset.value=a}}),b.PixelateFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:0},dimensions:{type:"4fv",value:new Float32Array([1e4,100,10,10])},pixelSize:{type:"2f",value:{x:10,y:10}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 testDim;","uniform vec4 dimensions;","uniform vec2 pixelSize;","uniform sampler2D uSampler;","void main(void) {","   vec2 coord = vTextureCoord;","   vec2 size = dimensions.xy/pixelSize;","   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;","   gl_FragColor = texture2D(uSampler, color);","}"]},b.PixelateFilter.prototype=Object.create(b.AbstractFilter.prototype),b.PixelateFilter.prototype.constructor=b.PixelateFilter,Object.defineProperty(b.PixelateFilter.prototype,"size",{get:function(){return this.uniforms.pixelSize.value},set:function(a){this.dirty=!0,this.uniforms.pixelSize.value=a}}),b.BlurXFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;","   gl_FragColor = sum;","}"]},b.BlurXFilter.prototype=Object.create(b.AbstractFilter.prototype),b.BlurXFilter.prototype.constructor=b.BlurXFilter,Object.defineProperty(b.BlurXFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.dirty=!0,this.uniforms.blur.value=1/7e3*a}}),b.BlurYFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;","   gl_FragColor = sum;","}"]},b.BlurYFilter.prototype=Object.create(b.AbstractFilter.prototype),b.BlurYFilter.prototype.constructor=b.BlurYFilter,Object.defineProperty(b.BlurYFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),b.BlurFilter=function(){this.blurXFilter=new b.BlurXFilter,this.blurYFilter=new b.BlurYFilter,this.passes=[this.blurXFilter,this.blurYFilter]},Object.defineProperty(b.BlurFilter.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(a){this.blurXFilter.blur=this.blurYFilter.blur=a}}),Object.defineProperty(b.BlurFilter.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(a){this.blurXFilter.blur=a}}),Object.defineProperty(b.BlurFilter.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(a){this.blurYFilter.blur=a}}),b.InvertFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);","}"]},b.InvertFilter.prototype=Object.create(b.AbstractFilter.prototype),b.InvertFilter.prototype.constructor=b.InvertFilter,Object.defineProperty(b.InvertFilter.prototype,"invert",{get:function(){return this.uniforms.invert.value},set:function(a){this.uniforms.invert.value=a}}),b.SepiaFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={sepia:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float sepia;","uniform sampler2D uSampler;","const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);","}"]},b.SepiaFilter.prototype=Object.create(b.AbstractFilter.prototype),b.SepiaFilter.prototype.constructor=b.SepiaFilter,Object.defineProperty(b.SepiaFilter.prototype,"sepia",{get:function(){return this.uniforms.sepia.value},set:function(a){this.uniforms.sepia.value=a}}),b.TwistFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={radius:{type:"1f",value:.5},angle:{type:"1f",value:5},offset:{type:"2f",value:{x:.5,y:.5}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float radius;","uniform float angle;","uniform vec2 offset;","void main(void) {","   vec2 coord = vTextureCoord - offset;","   float distance = length(coord);","   if (distance < radius) {","       float ratio = (radius - distance) / radius;","       float angleMod = ratio * ratio * angle;","       float s = sin(angleMod);","       float c = cos(angleMod);","       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);","   }","   gl_FragColor = texture2D(uSampler, coord+offset);","}"]},b.TwistFilter.prototype=Object.create(b.AbstractFilter.prototype),b.TwistFilter.prototype.constructor=b.TwistFilter,Object.defineProperty(b.TwistFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(a){this.dirty=!0,this.uniforms.offset.value=a}}),Object.defineProperty(b.TwistFilter.prototype,"radius",{get:function(){return this.uniforms.radius.value},set:function(a){this.dirty=!0,this.uniforms.radius.value=a}}),Object.defineProperty(b.TwistFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(a){this.dirty=!0,this.uniforms.angle.value=a}}),b.ColorStepFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={step:{type:"1f",value:5}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float step;","void main(void) {","   vec4 color = texture2D(uSampler, vTextureCoord);","   color = floor(color * step) / step;","   gl_FragColor = color;","}"]},b.ColorStepFilter.prototype=Object.create(b.AbstractFilter.prototype),b.ColorStepFilter.prototype.constructor=b.ColorStepFilter,Object.defineProperty(b.ColorStepFilter.prototype,"step",{get:function(){return this.uniforms.step.value},set:function(a){this.uniforms.step.value=a}}),b.DotScreenFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float angle;","uniform float scale;","float pattern() {","   float s = sin(angle), c = cos(angle);","   vec2 tex = vTextureCoord * dimensions.xy;","   vec2 point = vec2(","       c * tex.x - s * tex.y,","       s * tex.x + c * tex.y","   ) * scale;","   return (sin(point.x) * sin(point.y)) * 4.0;","}","void main() {","   vec4 color = texture2D(uSampler, vTextureCoord);","   float average = (color.r + color.g + color.b) / 3.0;","   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);","}"]},b.DotScreenFilter.prototype=Object.create(b.AbstractFilter.prototype),b.DotScreenFilter.prototype.constructor=b.DotScreenFilter,Object.defineProperty(b.DotScreenFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(a){this.dirty=!0,this.uniforms.scale.value=a}}),Object.defineProperty(b.DotScreenFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(a){this.dirty=!0,this.uniforms.angle.value=a}}),b.CrossHatchFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);","    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);","    if (lum < 1.00) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.75) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.50) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.3) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","}"]},b.CrossHatchFilter.prototype=Object.create(b.AbstractFilter.prototype),b.CrossHatchFilter.prototype.constructor=b.BlurYFilter,Object.defineProperty(b.CrossHatchFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),b.RGBSplitFilter=function(){b.AbstractFilter.call(this),this.passes=[this],this.uniforms={red:{type:"2f",value:{x:20,y:20}},green:{type:"2f",value:{x:-20,y:20}},blue:{type:"2f",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 red;","uniform vec2 green;","uniform vec2 blue;","uniform vec4 dimensions;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;","   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;","   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;","   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;","}"]},b.RGBSplitFilter.prototype=Object.create(b.AbstractFilter.prototype),b.RGBSplitFilter.prototype.constructor=b.RGBSplitFilter,Object.defineProperty(b.RGBSplitFilter.prototype,"angle",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports.PIXI=b):"undefined"!=typeof define&&define.amd?define(b):a.PIXI=b}).call(this);/*!
* @license SoundJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2013 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/

/**!
 * SoundJS FlashPlugin also includes swfobject (http://code.google.com/p/swfobject/)
 */

this.createjs=this.createjs||{},function(){var a=createjs.SoundJS=createjs.SoundJS||{};a.version="0.5.2",a.buildDate="Thu, 12 Dec 2013 23:33:37 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(){},b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b._listeners=null,b._captureListeners=null,b.initialize=function(){},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b){if("string"==typeof a){var c=this._listeners;if(!c||!c[a])return!1;a=new createjs.Event(a)}if(a.target=b||this,a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;a.currentTarget=this,a.eventPhase=b,a.removed=!1,e=e.slice();for(var f=0;c>f&&!a.immediatePropagationStopped;f++){var g=e[f];g.handleEvent?g.handleEvent(a):g(a),a.removed&&(this.off(a.type,g,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a,b,c){this.initialize(a,b,c)},b=a.prototype;b.type=null,b.target=null,b.currentTarget=null,b.eventPhase=0,b.bubbles=!1,b.cancelable=!1,b.timeStamp=0,b.defaultPrevented=!1,b.propagationStopped=!1,b.immediatePropagationStopped=!1,b.removed=!1,b.initialize=function(a,b,c){this.type=a,this.bubbles=b,this.cancelable=c,this.timeStamp=(new Date).getTime()},b.preventDefault=function(){this.defaultPrevented=!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";createjs.indexOf=function(a,b){for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1}}(),this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Sound cannot be instantiated"}function b(a,b){this.init(a,b)}function c(){this.isDefault=!0,this.addEventListener=this.removeEventListener=this.removeAllEventListeners=this.dispatchEvent=this.hasEventListener=this._listeners=this._interrupt=this._playFailed=this.pause=this.resume=this.play=this._beginPlaying=this._cleanUp=this.stop=this.setMasterVolume=this.setVolume=this.mute=this.setMute=this.getMute=this.setPan=this.getPosition=this.setPosition=this.playFailed=function(){return!1},this.getVolume=this.getPan=this.getDuration=function(){return 0},this.playState=a.PLAY_FAILED,this.toString=function(){return"[Sound Default Sound Instance]"}}function d(){}var e=a;e.DELIMITER="|",e.INTERRUPT_ANY="any",e.INTERRUPT_EARLY="early",e.INTERRUPT_LATE="late",e.INTERRUPT_NONE="none",e.PLAY_INITED="playInited",e.PLAY_SUCCEEDED="playSucceeded",e.PLAY_INTERRUPTED="playInterrupted",e.PLAY_FINISHED="playFinished",e.PLAY_FAILED="playFailed",e.SUPPORTED_EXTENSIONS=["mp3","ogg","mpeg","wav","m4a","mp4","aiff","wma","mid"],e.EXTENSION_MAP={m4a:"mp4"},e.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/,e.defaultInterruptBehavior=e.INTERRUPT_NONE,e.alternateExtensions=[],e._lastID=0,e.activePlugin=null,e._pluginsRegistered=!1,e._masterVolume=1,e._masterMute=!1,e._instances=[],e._idHash={},e._preloadHash={},e._defaultSoundInstance=null,e.addEventListener=null,e.removeEventListener=null,e.removeAllEventListeners=null,e.dispatchEvent=null,e.hasEventListener=null,e._listeners=null,createjs.EventDispatcher.initialize(e),e._sendFileLoadEvent=function(a){if(e._preloadHash[a])for(var b=0,c=e._preloadHash[a].length;c>b;b++){var d=e._preloadHash[a][b];if(e._preloadHash[a][b]=!0,e.hasEventListener("fileload")){var f=new createjs.Event("fileload");f.src=d.src,f.id=d.id,f.data=d.data,e.dispatchEvent(f)}}},e.getPreloadHandlers=function(){return{callback:createjs.proxy(e.initLoad,e),types:["sound"],extensions:e.SUPPORTED_EXTENSIONS}},e.registerPlugin=function(a){try{console.log("createjs.Sound.registerPlugin has been deprecated. Please use registerPlugins.")}catch(b){}return e._registerPlugin(a)},e._registerPlugin=function(a){return e._pluginsRegistered=!0,null==a?!1:a.isSupported()?(e.activePlugin=new a,!0):!1},e.registerPlugins=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(e._registerPlugin(d))return!0}return!1},e.initializeDefaultPlugins=function(){return null!=e.activePlugin?!0:e._pluginsRegistered?!1:e.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])?!0:!1},e.isReady=function(){return null!=e.activePlugin},e.getCapabilities=function(){return null==e.activePlugin?null:e.activePlugin._capabilities},e.getCapability=function(a){return null==e.activePlugin?null:e.activePlugin._capabilities[a]},e.initLoad=function(a,b,c,d,f){a=a.replace(f,"");var g=e.registerSound(a,c,d,!1,f);return null==g?!1:g},e.registerSound=function(a,c,d,f,g){if(!e.initializeDefaultPlugins())return!1;if(a instanceof Object&&(g=c,c=a.id,d=a.data,a=a.src),e.alternateExtensions.length)var h=e._parsePath2(a,"sound",c,d);else var h=e._parsePath(a,"sound",c,d);if(null==h)return!1;null!=g&&(a=g+a,h.src=g+h.src),null!=c&&(e._idHash[c]=h.src);var i=null;null!=d&&(isNaN(d.channels)?isNaN(d)||(i=parseInt(d)):i=parseInt(d.channels));var j=e.activePlugin.register(h.src,i);if(null!=j&&(null!=j.numChannels&&(i=j.numChannels),b.create(h.src,i),null!=d&&isNaN(d)?d.channels=h.data.channels=i||b.maxPerChannel():d=h.data=i||b.maxPerChannel(),null!=j.tag?h.tag=j.tag:j.src&&(h.src=j.src),null!=j.completeHandler&&(h.completeHandler=j.completeHandler),j.type&&(h.type=j.type)),0!=f)if(e._preloadHash[h.src]||(e._preloadHash[h.src]=[]),e._preloadHash[h.src].push({src:a,id:c,data:d}),1==e._preloadHash[h.src].length)e.activePlugin.preload(h.src,j);else if(1==e._preloadHash[h.src][0])return!0;return h},e.registerManifest=function(a,b){for(var c=[],d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.registerSound(a[d].src,a[d].id,a[d].data,a[d].preload,b);return c},e.removeSound=function(a,c){if(null==e.activePlugin)return!1;if(a instanceof Object&&(a=a.src),a=e._getSrcById(a),e.alternateExtensions.length)var d=e._parsePath2(a);else var d=e._parsePath(a);if(null==d)return!1;null!=c&&(d.src=c+d.src),a=d.src;for(var f in e._idHash)e._idHash[f]==a&&delete e._idHash[f];return b.removeSrc(a),delete e._preloadHash[a],e.activePlugin.removeSound(a),!0},e.removeManifest=function(a,b){for(var c=[],d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.removeSound(a[d].src,b);return c},e.removeAllSounds=function(){e._idHash={},e._preloadHash={},b.removeAll(),e.activePlugin.removeAllSounds()},e.loadComplete=function(a){if(e.alternateExtensions.length)var b=e._parsePath2(a,"sound");else var b=e._parsePath(a,"sound");return a=b?e._getSrcById(b.src):e._getSrcById(a),1==e._preloadHash[a][0]},e._parsePath=function(a,b,c,d){"string"!=typeof a&&(a=a.toString());var f=a.split(e.DELIMITER);if(f.length>1)try{console.log('createjs.Sound.DELIMITER "|" loading approach has been deprecated. Please use the new alternateExtensions property.')}catch(g){}for(var h={type:b||"sound",id:c,data:d},i=e.getCapabilities(),j=0,k=f.length;k>j;j++){var l=f[j],m=l.match(e.FILE_PATTERN);if(null==m)return!1;var n=m[4],o=m[5];if(i[o]&&createjs.indexOf(e.SUPPORTED_EXTENSIONS,o)>-1)return h.name=n,h.src=l,h.extension=o,h}return null},e._parsePath2=function(a,b,c,d){"string"!=typeof a&&(a=a.toString());var f=a.match(e.FILE_PATTERN);if(null==f)return!1;for(var g=f[4],h=f[5],i=e.getCapabilities(),j=0;!i[h];)if(h=e.alternateExtensions[j++],j>e.alternateExtensions.length)return null;a=a.replace("."+f[5],"."+h);var k={type:b||"sound",id:c,data:d};return k.name=g,k.src=a,k.extension=h,k},e.play=function(a,b,c,d,f,g,h){var i=e.createInstance(a),j=e._playInstance(i,b,c,d,f,g,h);return j||i.playFailed(),i},e.createInstance=function(c){if(!e.initializeDefaultPlugins())return e._defaultSoundInstance;if(c=e._getSrcById(c),e.alternateExtensions.length)var d=e._parsePath2(c,"sound");else var d=e._parsePath(c,"sound");var f=null;return null!=d&&null!=d.src?(b.create(d.src),f=e.activePlugin.create(d.src)):f=a._defaultSoundInstance,f.uniqueId=e._lastID++,f},e.setVolume=function(a){if(null==Number(a))return!1;if(a=Math.max(0,Math.min(1,a)),e._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterVolume(a)},e.getVolume=function(){return e._masterVolume},e.setMute=function(a){if(null==a||void 0==a)return!1;if(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a);return!0},e.getMute=function(){return this._masterMute},e.stop=function(){for(var a=this._instances,b=a.length;b--;)a[b].stop()},e._playInstance=function(a,b,c,d,f,g,h){if(b instanceof Object&&(c=b.delay,d=b.offset,f=b.loop,g=b.volume,h=b.pan,b=b.interrupt),b=b||e.defaultInterruptBehavior,null==c&&(c=0),null==d&&(d=a.getPosition()),null==f&&(f=0),null==g&&(g=a.volume),null==h&&(h=a.pan),0==c){var i=e._beginPlaying(a,b,d,f,g,h);if(!i)return!1}else{var j=setTimeout(function(){e._beginPlaying(a,b,d,f,g,h)},c);a._delayTimeoutId=j}return this._instances.push(a),!0},e._beginPlaying=function(a,c,d,e,f,g){if(!b.add(a,c))return!1;var h=a._beginPlaying(d,e,f,g);if(!h){var i=createjs.indexOf(this._instances,a);return i>-1&&this._instances.splice(i,1),!1}return!0},e._getSrcById=function(a){return null==e._idHash||null==e._idHash[a]?a:e._idHash[a]},e._playFinished=function(a){b.remove(a);var c=createjs.indexOf(this._instances,a);c>-1&&this._instances.splice(c,1)},createjs.Sound=a,b.channels={},b.create=function(a,c){var d=b.get(a);return null==d?(b.channels[a]=new b(a,c),!0):!1},b.removeSrc=function(a){var c=b.get(a);return null==c?!1:(c.removeAll(),delete b.channels[a],!0)},b.removeAll=function(){for(var a in b.channels)b.channels[a].removeAll();b.channels={}},b.add=function(a,c){var d=b.get(a.src);return null==d?!1:d.add(a,c)},b.remove=function(a){var c=b.get(a.src);return null==c?!1:(c.remove(a),!0)},b.maxPerChannel=function(){return f.maxDefault},b.get=function(a){return b.channels[a]};var f=b.prototype;f.src=null,f.max=null,f.maxDefault=100,f.length=0,f.init=function(a,b){this.src=a,this.max=b||this.maxDefault,-1==this.max&&(this.max=this.maxDefault),this._instances=[]},f.get=function(a){return this._instances[a]},f.add=function(a,b){return this.getSlot(b,a)?(this._instances.push(a),this.length++,!0):!1},f.remove=function(a){var b=createjs.indexOf(this._instances,a);return-1==b?!1:(this._instances.splice(b,1),this.length--,!0)},f.removeAll=function(){for(var a=this.length-1;a>=0;a--)this._instances[a].stop()},f.getSlot=function(b){for(var c,d,e=0,f=this.max;f>e;e++){if(c=this.get(e),null==c)return!0;(b!=a.INTERRUPT_NONE||c.playState==a.PLAY_FINISHED)&&(0!=e?c.playState==a.PLAY_FINISHED||c.playState==a.PLAY_INTERRUPTED||c.playState==a.PLAY_FAILED?d=c:(b==a.INTERRUPT_EARLY&&c.getPosition()<d.getPosition()||b==a.INTERRUPT_LATE&&c.getPosition()>d.getPosition())&&(d=c):d=c)}return null!=d?(d._interrupt(),this.remove(d),!0):!1},f.toString=function(){return"[Sound SoundChannel]"},a._defaultSoundInstance=new c,d.init=function(){var a=window.navigator.userAgent;d.isFirefox=a.indexOf("Firefox")>-1,d.isOpera=null!=window.opera,d.isChrome=a.indexOf("Chrome")>-1,d.isIOS=a.indexOf("iPod")>-1||a.indexOf("iPhone")>-1||a.indexOf("iPad")>-1,d.isAndroid=a.indexOf("Android")>-1,d.isBlackberry=a.indexOf("Blackberry")>-1},d.init(),createjs.Sound.BrowserDetect=d}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._init()}var b=a;b._capabilities=null,b.isSupported=function(){var a=createjs.Sound.BrowserDetect.isIOS||createjs.Sound.BrowserDetect.isAndroid||createjs.Sound.BrowserDetect.isBlackberry;return"file:"!=location.protocol||a||this._isFileXHRSupported()?(b._generateCapabilities(),null==b.context?!1:!0):!1},b._isFileXHRSupported=function(){var a=!0,b=new XMLHttpRequest;try{b.open("GET","fail.fail",!1)}catch(c){return a=!1}b.onerror=function(){a=!1},b.onload=function(){a=404==this.status||200==this.status||0==this.status&&""!=this.response};try{b.send()}catch(c){a=!1}return a},b._generateCapabilities=function(){if(null==b._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;if(window.webkitAudioContext)b.context=new webkitAudioContext;else{if(!window.AudioContext)return null;b.context=new AudioContext}b._compatibilitySetUp(),b.playEmptySound(),b._capabilities={panning:!0,volume:!0,tracks:-1};for(var c=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=c.length;f>e;e++){var g=c[e],h=d[g]||g;b._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}b.context.destination.numberOfChannels<2&&(b._capabilities.panning=!1),b.dynamicsCompressorNode=b.context.createDynamicsCompressor(),b.dynamicsCompressorNode.connect(b.context.destination),b.gainNode=b.context.createGain(),b.gainNode.connect(b.dynamicsCompressorNode)}},b._compatibilitySetUp=function(){if(!b.context.createGain){b.context.createGain=b.context.createGainNode;var a=b.context.createBufferSource();a.__proto__.start=a.__proto__.noteGrainOn,a.__proto__.stop=a.__proto__.noteOff,this._panningModel=0}},b.playEmptySound=function(){var a=this.context.createBuffer(1,1,22050),b=this.context.createBufferSource();b.buffer=a,b.connect(this.context.destination),b.start(0,0,0)};var c=a.prototype;c._capabilities=null,c._volume=1,c.context=null,c._panningModel="equalpower",c.dynamicsCompressorNode=null,c.gainNode=null,c._arrayBuffers=null,c._init=function(){this._capabilities=b._capabilities,this._arrayBuffers={},this.context=b.context,this.gainNode=b.gainNode,this.dynamicsCompressorNode=b.dynamicsCompressorNode},c.register=function(a){this._arrayBuffers[a]=!0;var b=new createjs.WebAudioPlugin.Loader(a,this);return{tag:b}},c.isPreloadStarted=function(a){return null!=this._arrayBuffers[a]},c.isPreloadComplete=function(a){return!(null==this._arrayBuffers[a]||1==this._arrayBuffers[a])},c.removeSound=function(a){delete this._arrayBuffers[a]},c.removeAllSounds=function(){this._arrayBuffers={}},c.addPreloadResults=function(a,b){this._arrayBuffers[a]=b},c._handlePreloadComplete=function(){createjs.Sound._sendFileLoadEvent(this.src)},c.preload=function(a){this._arrayBuffers[a]=!0;var b=new createjs.WebAudioPlugin.Loader(a,this);b.onload=this._handlePreloadComplete,b.load()},c.create=function(a){return this.isPreloadStarted(a)||this.preload(a),new createjs.WebAudioPlugin.SoundInstance(a,this)},c.setVolume=function(a){return this._volume=a,this._updateVolume(),!0},c._updateVolume=function(){var a=createjs.Sound._masterMute?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},c.getVolume=function(){return this._volume},c.setMute=function(){return this._updateVolume(),!0},c.toString=function(){return"[WebAudioPlugin]"},createjs.WebAudioPlugin=a}(),function(){"use strict";function a(a,b){this._init(a,b)}var b=a.prototype=new createjs.EventDispatcher;b.src=null,b.uniqueId=-1,b.playState=null,b._owner=null,b._offset=0,b._delay=0,b._volume=1;try{Object.defineProperty(b,"volume",{get:function(){return this._volume},set:function(a){return null==Number(a)?!1:(a=Math.max(0,Math.min(1,a)),this._volume=a,this._updateVolume(),void 0)}})}catch(c){}b._pan=0;try{Object.defineProperty(b,"pan",{get:function(){return this._pan},set:function(a){return this._owner._capabilities.panning&&null!=Number(a)?(a=Math.max(-1,Math.min(1,a)),this._pan=a,this.panNode.setPosition(a,0,-.5),void 0):!1}})}catch(c){}b._duration=0,b._remainingLoops=0,b._delayTimeoutId=null,b._soundCompleteTimeout=null,b.gainNode=null,b.panNode=null,b.sourceNode=null,b._sourceNodeNext=null,b._muted=!1,b._paused=!1,b._startTime=0,b._endedHandler=null,b._sendEvent=function(a){var b=new createjs.Event(a);this.dispatchEvent(b)},b._init=function(a,b){this._owner=b,this.src=a,this.gainNode=this._owner.context.createGain(),this.panNode=this._owner.context.createPanner(),this.panNode.panningModel=this._owner._panningModel,this.panNode.connect(this.gainNode),this._owner.isPreloadComplete(this.src)&&(this._duration=1e3*this._owner._arrayBuffers[this.src].duration),this._endedHandler=createjs.proxy(this._handleSoundComplete,this)},b._cleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._delayTimeoutId),clearTimeout(this._soundCompleteTimeout),this._startTime=0,null!=window.createjs&&createjs.Sound._playFinished(this)},b._cleanUpAudioNode=function(a){return a&&(a.stop(0),a.disconnect(this.panNode),a=null),a},b._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._paused=!1,this._sendEvent("interrupted")},b._handleSoundReady=function(){if(null!=window.createjs){if(1e3*this._offset>this.getDuration())return this.playFailed(),void 0;this._offset<0&&(this._offset=0),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._paused=!1,this.gainNode.connect(this._owner.gainNode);var a=this._owner._arrayBuffers[this.src].duration;this.sourceNode=this._createAndPlayAudioNode(this._owner.context.currentTime-a,this._offset),this._duration=1e3*a,this._startTime=this.sourceNode.startTime-this._offset,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(a-this._offset)),0!=this._remainingLoops&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._startTime,0))}},b._createAndPlayAudioNode=function(a,b){var c=this._owner.context.createBufferSource();return c.buffer=this._owner._arrayBuffers[this.src],c.connect(this.panNode),this._owner.context.currentTime,c.startTime=a+c.buffer.duration,c.start(c.startTime,b,c.buffer.duration-b),c},b.play=function(a,b,c,d,e,f){this._cleanUp(),createjs.Sound._playInstance(this,a,b,c,d,e,f)},b._beginPlaying=function(a,b,c,d){return null!=window.createjs&&this.src?(this._offset=a/1e3,this._remainingLoops=b,this.volume=c,this.pan=d,this._owner.isPreloadComplete(this.src)?(this._handleSoundReady(null),this._sendEvent("succeeded"),1):(this.playFailed(),void 0)):void 0},b.pause=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED?!1:(this._paused=!0,this._offset=this._owner.context.currentTime-this._startTime,this._cleanUpAudioNode(this.sourceNode),this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(),clearTimeout(this._delayTimeoutId),clearTimeout(this._soundCompleteTimeout),!0)},b.resume=function(){return this._paused?(this._handleSoundReady(null),!0):!1},b.stop=function(){return this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this._offset=0,!0},b.setVolume=function(a){return this.volume=a,!0},b._updateVolume=function(){var a=this._muted?0:this._volume;return a!=this.gainNode.gain.value?(this.gainNode.gain.value=a,!0):!1},b.getVolume=function(){return this.volume},b.setMute=function(a){return null==a||void 0==a?!1:(this._muted=a,this._updateVolume(),!0)},b.getMute=function(){return this._muted},b.setPan=function(a){return this.pan=a,this.pan!=a?!1:void 0},b.getPan=function(){return this.pan},b.getPosition=function(){if(this._paused||null==this.sourceNode)var a=this._offset;else var a=this._owner.context.currentTime-this._startTime;return 1e3*a},b.setPosition=function(a){return this._offset=a/1e3,this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._cleanUpAudioNode(this.sourceNode),this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout)),this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||this._handleSoundReady(null),!0},b.getDuration=function(){return this._duration},b._handleSoundComplete=function(){return this._offset=0,0!=this._remainingLoops?(this._remainingLoops--,this._sourceNodeNext?(this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._startTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._startTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)):this._handleSoundReady(null),this._sendEvent("loop"),void 0):(null!=window.createjs&&(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this._sendEvent("complete")),void 0)},b.playFailed=function(){null!=window.createjs&&(this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed"))},b.toString=function(){return"[WebAudioPlugin SoundInstance]"},createjs.WebAudioPlugin.SoundInstance=a}(),function(){"use strict";function a(a,b){this._init(a,b)}var b=a.prototype;b.request=null,b.owner=null,b.progress=-1,b.src=null,b.originalSrc=null,b.result=null,b.onload=null,b.onprogress=null,b.onError=null,b._init=function(a,b){this.src=a,this.originalSrc=a,this.owner=b},b.load=function(a){null!=a&&(this.src=a),this.request=new XMLHttpRequest,this.request.open("GET",this.src,!0),this.request.responseType="arraybuffer",this.request.onload=createjs.proxy(this.handleLoad,this),this.request.onError=createjs.proxy(this.handleError,this),this.request.onprogress=createjs.proxy(this.handleProgress,this),this.request.send()},b.handleProgress=function(a,b){this.progress=a/b,null!=this.onprogress&&this.onprogress({loaded:a,total:b,progress:this.progress})},b.handleLoad=function(){this.owner.context.decodeAudioData(this.request.response,createjs.proxy(this.handleAudioDecoded,this),createjs.proxy(this.handleError,this))},b.handleAudioDecoded=function(a){this.progress=1,this.result=a,this.src=this.originalSrc,this.owner.addPreloadResults(this.src,this.result),this.onload&&this.onload()},b.handleError=function(a){this.owner.removeSound(this.src),this.onerror&&this.onerror(a)},b.toString=function(){return"[WebAudioPlugin Loader]"},createjs.WebAudioPlugin.Loader=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._init()}var b=a;b.MAX_INSTANCES=30,b._AUDIO_READY="canplaythrough",b._AUDIO_ENDED="ended",b._AUDIO_SEEKED="seeked",b._AUDIO_STALLED="stalled",b._capabilities=null,b.enableIOS=!1,b.isSupported=function(){if(createjs.Sound.BrowserDetect.isIOS&&!b.enableIOS)return!1;b._generateCapabilities();var a=b.tag;return null==a||null==b._capabilities?!1:!0},b._generateCapabilities=function(){if(null==b._capabilities){var a=b.tag=document.createElement("audio");if(null==a.canPlayType)return null;b._capabilities={panning:!0,volume:!0,tracks:-1};for(var c=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=c.length;f>e;e++){var g=c[e],h=d[g]||g;b._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}}};var c=a.prototype;c._capabilities=null,c._audioSources=null,c.defaultNumChannels=2,c.loadedHandler=null,c._init=function(){this._capabilities=b._capabilities,this._audioSources={}},c.register=function(a,b){this._audioSources[a]=!0;for(var c=createjs.HTMLAudioPlugin.TagPool.get(a),d=null,e=b||this.defaultNumChannels,f=0;e>f;f++)d=this._createTag(a),c.add(d);if(d.id=a,this.loadedHandler=createjs.proxy(this._handleTagLoad,this),d.addEventListener&&d.addEventListener("canplaythrough",this.loadedHandler),null==d.onreadystatechange)d.onreadystatechange=this.loadedHandler;else{var g=d.onreadystatechange;d.onreadystatechange=function(){g(),this.loadedHandler()}}return{tag:d,numChannels:e}},c._handleTagLoad=function(a){a.target.removeEventListener&&a.target.removeEventListener("canplaythrough",this.loadedHandler),a.target.onreadystatechange=null,a.target.src!=a.target.id&&createjs.HTMLAudioPlugin.TagPool.checkSrc(a.target.id)},c._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},c.removeSound=function(a){delete this._audioSources[a],createjs.HTMLAudioPlugin.TagPool.remove(a)},c.removeAllSounds=function(){this._audioSources={},createjs.HTMLAudioPlugin.TagPool.removeAll()},c.create=function(a){if(!this.isPreloadStarted(a)){var b=createjs.HTMLAudioPlugin.TagPool.get(a),c=this._createTag(a);c.id=a,b.add(c),this.preload(a,{tag:c})}return new createjs.HTMLAudioPlugin.SoundInstance(a,this)},c.isPreloadStarted=function(a){return null!=this._audioSources[a]},c.preload=function(a,b){this._audioSources[a]=!0,new createjs.HTMLAudioPlugin.Loader(a,b.tag)},c.toString=function(){return"[HTMLAudioPlugin]"},createjs.HTMLAudioPlugin=a}(),function(){"use strict";function a(a,b){this._init(a,b)}var b=a.prototype=new createjs.EventDispatcher;b.src=null,b.uniqueId=-1,b.playState=null,b._owner=null,b.loaded=!1,b._offset=0,b._delay=0,b._volume=1;try{Object.defineProperty(b,"volume",{get:function(){return this._volume},set:function(a){null!=Number(a)&&(a=Math.max(0,Math.min(1,a)),this._volume=a,this._updateVolume())}})}catch(c){}b.pan=0,b._duration=0,b._remainingLoops=0,b._delayTimeoutId=null,b.tag=null,b._muted=!1,b._paused=!1,b._endedHandler=null,b._readyHandler=null,b._stalledHandler=null,b.loopHandler=null,b._init=function(a,b){this.src=a,this._owner=b,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleSoundReady,this),this._stalledHandler=createjs.proxy(this._handleSoundStalled,this),this.loopHandler=createjs.proxy(this.handleSoundLoop,this)},b._sendEvent=function(a){var b=new createjs.Event(a);this.dispatchEvent(b)},b._cleanUp=function(){var a=this.tag;if(null!=a){a.pause(),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this.loopHandler,!1);try{a.currentTime=0}catch(b){}createjs.HTMLAudioPlugin.TagPool.setInstance(this.src,a),this.tag=null}clearTimeout(this._delayTimeoutId),null!=window.createjs&&createjs.Sound._playFinished(this)},b._interrupt=function(){null!=this.tag&&(this.playState=createjs.Sound.PLAY_INTERRUPTED,this._cleanUp(),this._paused=!1,this._sendEvent("interrupted"))},b.play=function(a,b,c,d,e,f){this._cleanUp(),createjs.Sound._playInstance(this,a,b,c,d,e,f)},b._beginPlaying=function(a,b,c,d){if(null==window.createjs)return-1;var e=this.tag=createjs.HTMLAudioPlugin.TagPool.getInstance(this.src);return null==e?(this.playFailed(),-1):(e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._offset=a,this.volume=c,this.pan=d,this._updateVolume(),this._remainingLoops=b,4!==e.readyState?(e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),e.preload="auto",e.load()):this._handleSoundReady(null),this._sendEvent("succeeded"),1)},b._handleSoundStalled=function(){this._cleanUp(),this._sendEvent("failed")},b._handleSoundReady=function(){if(null!=window.createjs){if(this._duration=1e3*this.tag.duration,this.playState=createjs.Sound.PLAY_SUCCEEDED,this._paused=!1,this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._offset>=this.getDuration())return this.playFailed(),void 0;this._offset>0&&(this.tag.currentTime=.001*this._offset),-1==this._remainingLoops&&(this.tag.loop=!0),0!=this._remainingLoops&&(this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this.loopHandler,!1),this.tag.loop=!0),this.tag.play()}},b.pause=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||null==this.tag?!1:(this._paused=!0,this.tag.pause(),clearTimeout(this._delayTimeoutId),!0)},b.resume=function(){return this._paused&&null!=this.tag?(this._paused=!1,this.tag.play(),!0):!1},b.stop=function(){return this._offset=0,this.pause(),this.playState=createjs.Sound.PLAY_FINISHED,this._cleanUp(),!0},b.setMasterVolume=function(){return this._updateVolume(),!0},b.setVolume=function(a){return this.volume=a,!0},b._updateVolume=function(){if(null!=this.tag){var a=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;return a!=this.tag.volume&&(this.tag.volume=a),!0}return!1},b.getVolume=function(){return this.volume},b.setMasterMute=function(){return this._updateVolume(),!0},b.setMute=function(a){return null==a||void 0==a?!1:(this._muted=a,this._updateVolume(),!0)},b.getMute=function(){return this._muted},b.setPan=function(){return!1},b.getPan=function(){return 0},b.getPosition=function(){return null==this.tag?this._offset:1e3*this.tag.currentTime},b.setPosition=function(a){if(null==this.tag)this._offset=a;else{this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this.loopHandler,!1);try{this.tag.currentTime=.001*a}catch(b){return!1}this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this.loopHandler,!1)}return!0},b.getDuration=function(){return this._duration},b._handleSoundComplete=function(){this._offset=0,null!=window.createjs&&(this.playState=createjs.Sound.PLAY_FINISHED,this._cleanUp(),this._sendEvent("complete"))},b.handleSoundLoop=function(){this._offset=0,this._remainingLoops--,0==this._remainingLoops&&(this.tag.loop=!1,this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this.loopHandler,!1)),this._sendEvent("loop")},b.playFailed=function(){null!=window.createjs&&(this.playState=createjs.Sound.PLAY_FAILED,this._cleanUp(),this._sendEvent("failed"))},b.toString=function(){return"[HTMLAudioPlugin SoundInstance]"},createjs.HTMLAudioPlugin.SoundInstance=a}(),function(){"use strict";function a(a,b){this._init(a,b)}var b=a.prototype;b.src=null,b.tag=null,b.preloadTimer=null,b.loadedHandler=null,b._init=function(a,b){if(this.src=a,this.tag=b,this.preloadTimer=setInterval(createjs.proxy(this.preloadTick,this),200),this.loadedHandler=createjs.proxy(this.sendLoadedEvent,this),this.tag.addEventListener&&this.tag.addEventListener("canplaythrough",this.loadedHandler),null==this.tag.onreadystatechange)this.tag.onreadystatechange=createjs.proxy(this.sendLoadedEvent,this);else{var c=this.tag.onreadystatechange;this.tag.onreadystatechange=function(){c(),this.tag.onreadystatechange=createjs.proxy(this.sendLoadedEvent,this)}
}this.tag.preload="auto",this.tag.load()},b.preloadTick=function(){var a=this.tag.buffered,b=this.tag.duration;a.length>0&&a.end(0)>=b-1&&this.handleTagLoaded()},b.handleTagLoaded=function(){clearInterval(this.preloadTimer)},b.sendLoadedEvent=function(){this.tag.removeEventListener&&this.tag.removeEventListener("canplaythrough",this.loadedHandler),this.tag.onreadystatechange=null,createjs.Sound._sendFileLoadEvent(this.src)},b.toString=function(){return"[HTMLAudioPlugin Loader]"},createjs.HTMLAudioPlugin.Loader=a}(),function(){"use strict";function a(a){this._init(a)}var b=a;b.tags={},b.get=function(c){var d=b.tags[c];return null==d&&(d=b.tags[c]=new a(c)),d},b.remove=function(a){var c=b.tags[a];return null==c?!1:(c.removeAll(),delete b.tags[a],!0)},b.removeAll=function(){for(var a in b.tags)b.tags[a].removeAll();b.tags={}},b.getInstance=function(a){var c=b.tags[a];return null==c?null:c.get()},b.setInstance=function(a,c){var d=b.tags[a];return null==d?null:d.set(c)},b.checkSrc=function(a){var c=b.tags[a];return null==c?null:(c.checkSrcChange(),void 0)};var c=a.prototype;c.src=null,c.length=0,c.available=0,c.tags=null,c._init=function(a){this.src=a,this.tags=[]},c.add=function(a){this.tags.push(a),this.length++,this.available++},c.removeAll=function(){for(;this.length--;)delete this.tags[this.length];this.src=null,this.tags.length=0},c.get=function(){if(0==this.tags.length)return null;this.available=this.tags.length;var a=this.tags.pop();return null==a.parentNode&&document.body.appendChild(a),a},c.set=function(a){var b=createjs.indexOf(this.tags,a);-1==b&&this.tags.push(a),this.available=this.tags.length},c.checkSrcChange=function(){for(var a=this.tags.length-1,b=this.tags[a].src;a--;)this.tags[a].src=b},c.toString=function(){return"[HTMLAudioPlugin TagPool]"},createjs.HTMLAudioPlugin.TagPool=a}();var SG_Hooks = {
	documentLoaded 		: false,
	
	getLanguagesCalled 	: false,
	startCalled 		: false,
	levelUpCalled 		: false,
	gameOverCalled		: false,
	
	setOrientationHandlerCalled : false,
	setResizeHandlerCalled 		: false,

	getLanguage : function( supportedLanguages ){
		if( !SG_Hooks.documentLoaded ){
			throw "Softgames - getLanguage: Do not call getLanguage before document is fully loaded. use window.onload to start your game!";
		}
		else if( (Object.prototype.toString.call(supportedLanguages)).toLowerCase() != "[object array]" ){
			throw "Softgames - getLanguage: No supported languages given. Please call SG_Hooks.getLanguage(['en','es',...]) - Array of Strings required!";
		}
		
		var randomIndex = Math.floor(Math.random()*supportedLanguages.length);
		var randomLanguage = supportedLanguages[randomIndex];
		
		SG_log( "Softgames - getLanguage: '"+supportedLanguages.toString()+"' successfully initiated. Randomly chosen was '" + randomLanguage +"'" );
		SG_Hooks.getLanguagesCalled = true;
		
		return randomLanguage;
	},
	
	start : function(){
		if( !SG_Hooks.documentLoaded ){
			throw "Softgames - start: Do not call start() before document is fully loaded. use window.onload to start your game!";
		}
		SG_Hooks.startCalled = true;
	},
	
	levelUp : function(level, score){
		if( !SG_isNothing(level) && !SG_isInt(level) ){
			throw "Softgames - levelUp(level,score): The 'level'-parameter must be an integer '"+(typeof level)+"' given.";
		}

		// score is optional
		if( !SG_isNothing(score) && !SG_isInt(score) ){
			throw "Softgames - levelUp(level,score): The 'score'-parameter must be an integer, '"+(typeof score)+"' given.";
		}

		SG_log("Softgames - levelUp: call successful - level=" + level + ", score=" + score);
		SG_Hooks.levelUpCalled = true;
	},
	
	gameOver : function(level, score){
		if( !SG_isNothing(level) && !SG_isInt(level) ){
			throw "Softgames - gameOver(level,score): The 'level'-parameter must be an integer '"+(typeof level)+"' given.";
		}

		if( !SG_isNothing(score) && !SG_isInt(score) ){
			throw "Softgames - gameOver(level,score): The 'score'-parameter must be an integer, '"+(typeof score)+"' given.";
		}

		SG_log("Softgames - gameOver: call successful - level=" + level + ", score=" + score);
		SG_Hooks.gameOverCalled = true;
	},
	setOrientationHandler : function( f ){
		
		if( !SG_isFunction(f) ){
			throw "Softgames - setOrientationHandler: The 'f'-parameter must be a function, '"+(typeof f)+"' given.";
		}
		
		SG_log("Softgames - setOrientationHandler: call successful - orientationHandler=" + f);
		SG_Hooks.setOrientationHandlerCalled = true;
	},
	
	setResizeHandler: function ( f ){
		if( !SG_isFunction(f) ){
			throw "Softgames - setResizeHandler: The 'f'-parameter must be a function, '"+(typeof f)+"' given.";
		}
		
		SG_log("Softgames - setResizeHandler: call successful - resizeHandler=" + f);
		SG_Hooks.setResizeHandlerCalled = true;
	}
};

SG_isInt = function(i){ return i === +i && i === (i|0); }
SG_isNothing = function(v){ return v==='' || v === null || typeof v == "undefined" }
SG_isFunction = function(f){ return typeof f == 'function'; }
SG_log = function(s){console.log(s);}
SG_load = function(){ SG_Hooks.documentLoaded = true; }

SG_check = function(){
	var failed = false;
	
	SG_log( "-------- Checking integration of Softgames-Hooks --------" );
	if( !SG_Hooks.getLanguagesCalled ){
		SG_log("SG_Hooks.getLanguage was not called. You have to call SG_Hooks.getLanguage(['en','es',...]); *after* window.onload.");
		failed = true;
	}
	
	if( !SG_Hooks.setOrientationHandlerCalled ){
		SG_log("SG_Hooks.setOrientationHandler was not called. You have to provide a game-function, that handles changes of orientation for the game.");
		failed = true;
	}

	if( !SG_Hooks.setResizeHandlerCalled ){
		SG_log("SG_Hooks.setResizeHandler was not called. You have to provide a game-function, that handles changes of window-size for the game.");
		failed = true;
	}
	
	if( !SG_Hooks.startCalled ){
		SG_log("SG_Hooks.start was not called. You have to call SG_Hooks.start(); when player starts the game.");
		failed = true;
	}
	
	if( !SG_Hooks.levelUpCalled && !SG_Hooks.gameOverCalled ){
		SG_log("You have to call SG_Hooks.levelUp or SG_Hooks.gameOver when player leveled up or game is over.");
		failed = true;
	}
	
	if( failed ){
		SG_log( "-------- Check FAILED --------" );
		return false;
	}
	else{
		SG_log( "-------- Check PASSED --------" );
		return true;
	}
}
if(window.attachEvent){ window.attachEvent("onload",SG_load); } else{ window.addEventListener("load",SG_load,true); }
var ZSound = {
    available: false,
    loaded : false
};


ZSound.Init = function(manifest) {
    this.available = createjs.Sound.initializeDefaultPlugins();
    if (!this.available) return;

    var audioPath = "res/snd/";
    createjs.Sound.alternateExtensions = ["mp3"];
    ZSound.loaded = 0;
    ZSound.total = manifest.length;
    var handleLoad = function()
    {
        ZSound.loaded++;
        if ( ZSound.loaded == manifest.length) {
            if (ZSound.soundLoadedFunction) ZSound.soundLoadedFunction();
            this.loaded = true;
        }
    }
    createjs.Sound.addEventListener("fileload", handleLoad); // call handleLoad when each sound loads

    createjs.Sound.registerManifest(manifest, "res/snd/");

}

ZSound.PlayMusic = function(snd) {
    if (ZSound.loaded)
        ZSound.PlayMusicInner(snd);
    else soundLoadedFunction = function () {
        ZSound.PlayMusicInner(snd);
        ZSound.loaded = true;
    }
};

ZSound.UnMute = function () {
    if (this.available) return;
    this.available = true;

    createjs.Sound.setMute(false);

    /*if (this.musicInstance)
    {
        createjs.Sound.play(this.musicInstance);
    }*/
}

ZSound.Mute = function () {
    this.available = false;

    createjs.Sound.setMute(true);
    /*if (this.musicInstance)
    {
        createjs.Sound.stop(this.musicInstance);
    }*/
}


ZSound.PlayMusicInner = function(snd)
{

    if (this.musicInstanceName == snd && this.musicInstance) return;
    if (this.musicInstance)
    {
     createjs.Sound.stop(this.musicInstance);
    }

    try {
        this.musicInstanceName = snd;
        this.musicInstance = createjs.Sound.play(snd, {interrupt: createjs.Sound.INTERRUPT_NONE, loop:999999});
    } catch (e) {}
}


ZSound.Play = function(snd) {
    if (!this.available) return;
    try {
        createjs.Sound.play(snd, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    } catch (e) {}
};

/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
var PlayerData = function ()
{
   this.inst = this;
}

PlayerData.inst = new PlayerData();

PlayerData.inst.score = 0;/**
 * Created by KURWINDALLAS on 05.07.2014.
 */
LevelManager = function()
{



}

LevelManager.totalScore = function()
{
    var t = 0;
   for (var i =1; i <= 40; ++i)
   {
         var prevScore =
         dataStorage["lvlsc" + i.toString()];
        if (prevScore) t+= prevScore;

   }
    return t;
}

LevelManager.stars3score = [
    1910, //1
    2850, //2
    2770, //3
    2560, //4
    4650, //5
    3050, //6
    3060, //7
    3480, //8
    4760, //9
    2760, //10
    4940, //11
    6800, //12
    5890, //13
    4320, //14
    5400, //15
    4660, //16
    3780, //17
    6200, //18
    5230, //19
    6100, //20
    3520, //21
    4860, //22
    3500, //23
    3820, //24
    4410, //25
    3650, //26
    5820, //27
    4470, //28
    4210, //29
    5200, //30
    5040, //31
    2250, //32
    2370, //33
    3000, //34
    5380, //35
    5370, //36
    5290, //37
    3240, //38
    4770, //39
    3610
];


LevelManager.getStars = function (lev, totalScore)
{
    var score3stars = LevelManager.stars3score[lev - 1];
    if (totalScore >= score3stars) return 3; else
    {
        if (totalScore >= score3stars*0.95) return 2; else
        if (totalScore >= score3stars*0.85) return 1; else return 0;
    }
}

LevelManager.onComplete = function()
{
    if (!LevelManager.layer) LevelManager.layer = StageManager.inst.ol;
    CObj.AssignTexturesToObjects(LevelManager.objs, LevelManager.layer);

    var objlen = LevelManager.objs.length;
    for (var i = 0; i < objlen; ++i) {
        var foundConductor = false;
        var ccl = CObj.conductClips.length;
		
        for (var j = 0; j < ccl; ++j) {
            if (LevelManager.objs[i].clipSrc && LevelManager.objs[i].clipSrc.indexOf(CObj.conductClips[j]) >= 0) {
                LevelManager.objs[i].isConductor = true;
                break;
            }
        }
    }

    if (window.gameStage) {
        world.off("beginContact", gameStage.beginContact);
        world.off("endContact", gameStage.endContact);

        world.on("beginContact", gameStage.beginContact);
        world.on("endContact", gameStage.endContact);
        world.step(1 / 1000000);
    }

    for (var i = 0; i < LevelManager.objs.length; ++i)
    {
        LevelManager.objs[i].init();
    }

    //OPTIMIZATION ISSUE
    //LevelManager.objs = null;

    if (LevelManager.onVeryComplete) LevelManager.onVeryComplete();
}

LevelManager.loadLevel = function(str, onCompleteFunction, layer)
{
    var data = LevelManager.levels["levels/" + str + ".json"];
    LevelManager.objs = CObj.DeserializeArray(data);
    LevelManager.layer = layer;
    LevelManager.objs.sort(function (a, b) {
        if (a.layer == b.layer) {
          return 0;
          //  if (a.creationIndex < b.creationIndex) return -1; else return 1;
        }
        else if (a.layer < b.layer) return -1; else return 1;
    });

    var atlases = [];

    for (var i = 0; i < LevelManager.objs.length; ++i)
    {
        if ((LevelManager.objs[i].sAtlasName != undefined) && (LevelManager.objs[i].sAtlasName!="")&& atlases.indexOf(LevelManager.objs[i].sAtlasName) < 0)
        {
            if (window.iphone3)
                atlases.push(LevelManager.objs[i].sAtlasName + "_min"); else
            atlases.push(LevelManager.objs[i].sAtlasName);
        }
    }

    LevelManager.onVeryComplete = onCompleteFunction;

    var assetsToLoader = [];

    for (i = 0; i < atlases.length; ++i)
    {
        var path = "imgtps/" + atlases[i] ;
        var o = PIXI.BaseTextureCache[path + ".png"];
        if (!o)
        assetsToLoader.push(path+ ".json");
    }

    if (assetsToLoader.length > 0) {
        var loader = new PIXI.AssetLoader(assetsToLoader);
        loader.load();
        loader.onComplete = LevelManager.onComplete;
    } else LevelManager.onComplete();

}
LevelManager.inst = new LevelManager();
LevelManager.levels = {};/**
 * Created by Михаил on 27.06.2014.
 */

function rp(c)
{
    if (c && c.parent)
        c.parent.removeChild(c);
}

function extend(b,a, doDestroyTemp){
    var c=function(){};
    c.prototype=a.prototype;
    b.prototype=new c();
    b.prototype.constructor=b;b.superclass=a.prototype;
    //if (doDestroyTemp) c.destroy();
  }
/**
 * Created by Михаил on 24.06.2014.
 */


var StageManager = function() {

    this.fg = new PIXI.DisplayObjectContainer();
    this.bg = new PIXI.DisplayObjectContainer();
    this.ol = new PIXI.DisplayObjectContainer();
    this.guiLayer = new PIXI.DisplayObjectContainer();
    this.fontLayer = new PIXI.DisplayObjectContainer();
//add layers on stage
    this.bg.interactive = true;
    this.fg.interactive = false;
    this.ol.interactive = false;
    this.guiLayer.interactive = true;
    this.fontLayer.interactive = false;

    this.currentStage = null;
    this.transStart = 0;
    this.transTime = 600;
    this.doTrans = false;
  //  return this;
}

StageManager.inst = new StageManager();

StageManager.prototype.addLayersToStage = function()
{
    stage.addChild(this.bg);
    stage.addChild(this.ol);
    stage.addChild(this.fg);
    stage.addChild(this.guiLayer);
    stage.addChild(this.fontLayer);
}


StageManager.prototype.fadeBegin = function(newStage) {

        if (this.currentStage) {
            this.currentStage.onHide(newStage);
            this.currentStage.doProcess = false;
        }

        newStage.doProcess = true;
        newStage.onShow();
        this.fadeEnd(newStage);


    }

StageManager.prototype.soundplay = function() {
            //sound
     }

StageManager.prototype.fadeEnd = function(newStage){
        this.currentStage = newStage;
    }

StageManager.prototype.transEnd = function() {
    //
    }

StageManager.prototype.process = function() {
         if (this.currentStage && this.currentStage.doProcess){
             this.currentStage.process();
         }
     }

StageManager.prototype.openStage = function(newStage, trns){
        if (this.doTrans) return;

        if (this.currentStage)
        {
            if (!this.currentStage.doProcess) return;
            this.currentStage.doProcess = false;
            //transStart
            this.fadeBegin(newStage);
        } else
        {
            this.currentStage = newStage;
            this.currentStage.doProcess = true;
            newStage.onShow();
        }
        newStage.previousStage = this.currentStage;
    }

StageManager.prototype.deleteMC = function(_do) {
        _do.dispose();
        if (_do.parent)
            _do.parent.removeChild(_do);
        }

/**
 * Created by Михаил on 24.06.2014.
 */

function CustomStage() {

    this.visible = false;
    this.doProcess = true;
  }

CustomStage.prototype.process = function() {};
CustomStage.prototype.onRemove = function() {};
CustomStage.prototype.onHide = function(newStage) {};
CustomStage.prototype.onShow = function(){};
/**
 * Created by Михаил on 27.06.2014.
 */

function MainMenu() {
CustomStage.apply(this);
}

extend(MainMenu, CustomStage);

MainMenu.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);
    LevelManager.loadLevel("mainmenu", this.onShowContinue);

}

MainMenu.prototype.onShowContinue = function()
{
    window.loadedMenu = true;
    ZSound.PlayMusic("trackmenu");

    CObj.getById("totalscore").text = LevelManager.totalScore().toString();

    CObj.getById("bmore").click = window.openSponsorWindow;

    CObj.getById("credits").click = function()
    {
        StageManager.inst.openStage(credStage);
    }
    mainMenu.muteBtn = CObj.getById("mutebtn");

   mainMenu.muteBtn.click = function () {

       if (ZSound.available)
           ZSound.Mute(); else
           ZSound.UnMute();

       dataStorage.soundEnabled = ZSound.available;
       updateDS();
       gameStage.updateSoundBtn(mainMenu.muteBtn);
    }


    var objepic =CObj.getById("epictext");
    new TweenMax(objepic, 0.8, {delay: 0.3, x: 200, ease: Elastic.easeOut});
    new TweenMax(CObj.getById("grillertext"), 0.95, {delay: 0.3, x: 750, ease: Elastic.easeOut});
    new TweenMax(CObj.getById("chickentext"), 1.1, {delay: 0.3, y: 93.4, ease: Elastic.easeOut});

  //  window.addRotationText();
    CObj.getById("playgame").click = function (e) {
    /*    if (dataStorage.soundEnabled == undefined)
        {
            LevelManager.loadLevel("levelsoundcheck", mainMenu.soundCheckLoaded, SM.inst.fontLayer);
        } else*/
        StageManager.inst.openStage(levSel);
    }

    gameStage.updateSoundBtn(mainMenu.muteBtn);

}

MainMenu.prototype.soundCheckLoaded = function ()
{
    CObj.getById("layer").gfx.interactive = true;

    CObj.getById("byes").click = function()
    {
        dataStorage.soundEnabled = ZSound.available;
        updateDS();
        ZSound.UnMute();
        StageManager.inst.openStage(levSel);
    }

    CObj.getById("bno").click = function()
    {
        dataStorage.soundEnabled = ZSound.available;
        updateDS();
        ZSound.Mute();
        StageManager.inst.openStage(levSel);
    }
}

MainMenu.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();


}

MainMenu.prototype.process = function() {
    CObj.processAll();

  //  if (CObj.getById("totalscore"))
   // CObj.getById("totalscore").text = window.innerWidth+ " / " + window.innerHeight.toString();
}

/**
 * Created by Михаил on 27.06.2014.
 */

function LevSel() {
    CustomStage.apply(this);
}

extend(LevSel, CustomStage);

LevSel.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);

    ZSound.PlayMusic("trackmenu");


    LevelManager.loadLevel("levelselect", this.onShowContinue);
}

LevSel.prototype.onShowContinue = function()
{
    var lastCompleted = dataStorage.completedLevels;

    if (lastCompleted < 0) lastCompleted = 0;


    CObj.getById("btnmenu").click = function ()
    {
        StageManager.inst.openStage(mainMenu);
    }

  //  lastCompleted = 500;
    for (var i = 1; i <= 40; ++i){
        var btn = CObj.getById("btn"+ i.toString());
        btn.gfx.levelNum = i;
        btn.click = levelClick;
        btn.textField.visible = true;
        btn.lock = new PIXI.Sprite(PIXI.Texture.fromFrame("locklevel.png"));
        btn.lock.scale.x = 0.35;
        btn.lock.scale.y = 0.35;
        btn.lock.anchor.x = 0.5;
        btn.lock.anchor.y = 0.5;
        btn.lock.visible = false;
        btn.gfx.addChild(btn.lock);
        if (i > lastCompleted + 1)
        {
            btn.click = null;
            btn.gfx.tint = 0x999999;
            btn.textField.visible = false;
            btn.lock.visible = true;
        }
        var vspace = 22;
        var star1 = new CObj(btn.x-32, btn.y + vspace);
        star1.gfx = CObj.createMovieClip("star0001");
        star1.gfx.interactive = false;
        star1.gfx.scale.x = 0.4* window.addScale;
        star1.gfx.scale.y = 0.4* window.addScale;
        star1.gfx.anchor.x = 0.5;
        star1.gfx.anchor.x = 0.5;
        StageManager.inst.guiLayer.addChild(star1.gfx);
        var star2 = new CObj(btn.x, btn.y + vspace);
        star2.gfx = CObj.createMovieClip("star0001");
        star2.gfx.interactive = false;
        star2.gfx.scale.x = 0.4* window.addScale;
        star2.gfx.scale.y = 0.4* window.addScale;
        star2.gfx.anchor.x = 0.5;
        star2.gfx.anchor.x = 0.5;
        StageManager.inst.guiLayer.addChild(star2.gfx);
        var star3 = new CObj(btn.x + 32, btn.y + vspace);
        star3.gfx = CObj.createMovieClip("star0001");
        star3.gfx.interactive = false;
        star3.gfx.scale.x = 0.4* window.addScale;
        star3.gfx.scale.y = 0.4* window.addScale;
        star3.gfx.anchor.x = 0.5;
        star3.gfx.anchor.x = 0.5;
        StageManager.inst.guiLayer.addChild(star3.gfx);

        var stars =  dataStorage["lvlst" + i.toString()];
        if (!stars) stars = 0;
        if (stars == 1)
        {
           star1.gfx.gotoAndStop(1);
        }
        if (stars == 2)
        {
            star1.gfx.gotoAndStop(1);
            star2.gfx.gotoAndStop(1);
        }
        if (stars == 3)
        {
            star1.gfx.gotoAndStop(1);
            star2.gfx.gotoAndStop(1);
            star3.gfx.gotoAndStop(1);
        }
    }
}

function levelClick(evt){
    gameStage.currentLevel = evt.target.levelNum;
    StageManager.inst.openStage(gameStage);
}

LevSel.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

LevSel.prototype.process = function() {
    CObj.processAll();
}

/**
 * Created by KURWINDALLAS on 14.07.2014.
 */
/**
 * Created by Михаил on 26.06.2014.
 */
function GameStage() {
    this.invFR = 1 / FRAME_RATE;
}

extend(GameStage, CustomStage);


Object.defineProperty(GameStage.prototype, 'worldSpeed', {
    get: function () {
        return this._worldSpeed;
    },
    set: function (value) {
        this._worldSpeed = value;
        var objlen = CObj.objects.length;
        for (var i = 0; i < objlen; ++i)
        {
            //////////////////////////FAIL CHECK
            if (CObj.objects[i].gfx && CObj.checkType(CObj.objects[i].gfx, PIXI.MovieClip))
            {
                CObj.objects[i].gfx.animationSpeed = value * CObj.objects[i].fps / FRAME_RATE;
            }
        }
    }
});

GameStage.prototype.process = function()
{
    if (this.doPhys)
    world.step(this.invFR*this._worldSpeed);

    Generator.resetElectricity();

    if (Generator.gens) {
        var genLen = Generator.gens.length;
        if (Generator.gens)
            for (var i = 0; i < genLen; ++i) {
                Generator.gens[i].genProcess();
            }
    }
    var objLen = CObj.objects.length;
    for (var i = 0; i < objLen; ++i)
    {
        if (CObj.objects[i].isConductor && CObj.objects[i] != this.dragObject)
        CObj.objects[i].setElectricity(CObj.objects[i].sElectricity);
    }

    if (this.dragObject && this.dragObject.gfx)
    {
        if (this.dragObject.concount && this.dragObject.concount > 0)
        {
            this.canPut = false;
            if (this.dragObject.gfx.tint == 0xffffff)
            this.dragObject.gfx.tint = 0xff0000;
        }
            else
        {
            this.canPut = true;
            if (this.dragObject.gfx.tint != 0xffffff)
            this.dragObject.gfx.tint = 0xffffff;
        }
    }

    if (gameStage.preWinText)
    {
        gameStage.preWinText.text = Number(gameStage.preWinText.timeout).toFixed(2).toString();
    }

    CObj.processAll();
}

GameStage.prototype.onHide = function(newStage) {

    if (gameStage.winDelayedCall)
    {
        gameStage.winDelayedCall.kill(false);
        gameStage.winDelayedCall = null;
    }
    gameStage.losing = false;
    gameStage.scoreObj = null;
    gameStage.scoreTimeoutID.kill();
    gameStage.preWinText = null;

    TweenMax.killAll(true, true, true);
    CustomStage.prototype.onHide.call(this, null);
    this.toolContainer.parent.removeChild(this.toolContainer);
    CObj.destroyAll();
    gameStage.preWinText = null;

    gameStage.dragObject = null;

    stage.touchmove = null;
    stage.mousemove = null;
    stage.mousedown = null;
    stage.touchstart = null;
    stage.mouseup = null;
    stage.touchend = null;

    if (gameStage.pauseSprite) {
        gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
        gameStage.pauseTexture.destroy();
        gameStage.pauseTexture = null;
        gameStage.pauseSprite = null;
    }
}

GameStage.prototype.loseGame = function()
{
    if (gameStage.losing) return;
    gameStage.losing = true;

    SG_Hooks.gameOver(gameStage.currentLevel, PlayerData.inst.score);

    var c = new CObj(0, 0);
    c.gfx = new PIXI.Sprite(PIXI.Texture.fromFrame("FAIL.png"));
    c.gfx.width = SCR_WIDTH;
    c.gfx.height = SCR_HEIGHT;
    StageManager.inst.fg.addChild(c.gfx);

    var t = new CTextField(SCR_WIDTH / 2, SCR_HEIGHT
        / 2);
    t.fontFamily = 0;
    t.fontSize = 62;
    t.align = "center";
    t.tint = 0xEE0000;
    t.gfx = CTextField.createTextField(t);
    t.text = "Don't kill tomatoes!";
    t.updateGraphics();
    StageManager.inst.ol.addChild(t.gfx);

    if (gameStage.winDelayedCall)
    gameStage.winDelayedCall.kill();

    TweenMax.delayedCall(0.8, function() {StageManager.inst.openStage(gameStage);});
}

GameStage.prototype.beginContact = function(event)
{
    var b1=event.bodyA;
    var b2=event.bodyB;

    if (b1 == b2) return;

    if (b1.userData && !b2.userData.sensor)
    {
        b1.userData.onContactBegin(b2);
    }

    if (b2.userData && !b1.userData.sensor)
    {
        b2.userData.onContactBegin(b1);
    }
}

GameStage.prototype.endContact = function(event)
{
    var b1=event.bodyA;
    var b2=event.bodyB;
    if (b1.userData.sensor && b2.userData.sensor)
        return;

    if (b1.userData)
    {
        b1.userData.onContactEnd(b2);
    }

    if (b2.userData)
    {
        b2.userData.onContactEnd(b1);
    }

}

GameStage.prototype.addTool = function(obj){
    obj.x = -2000;
    obj.y = -2000;
    obj.body.sensor = true;
    obj.body.angularVelocity = 0;
    world.removeBody(obj.body);

    var tool = new PIXI.Sprite(PIXI.Texture.fromFrame("bgitem2.png"));
    tool.width = 100;
    tool.height = 100;
    StageManager.inst.lastTool = tool;

    this.secretIngridient = tool.width + 10;
    tool.x = 50 + this.toolContainer.children.length*(this.secretIngridient);
    tool.y = 50;

    var ico = new PIXI.Sprite(obj.gfx.texture);
    ico.rotation = obj.gfx.rotation;
    ico.anchor.x = 0.5;
    ico.anchor.y = 0.5;
    ico.width = obj.gfx.width;
    ico.height = obj.gfx.height;
    var totalScale = (1 / Math.max((ico.width + 17) / tool.width, (ico.height + 17) / tool.height)) / Math.max(tool.scale.x, tool.scale.y);
    ico.scale.x = obj.gfx.scale.x*totalScale;
    ico.scale.y = obj.gfx.scale.y*totalScale;
    tool.addChild(ico);

    tool.anchor.x = 0.5;
    tool.anchor.y = 0.5;
    tool.gameobject = obj;
    tool.interactive = true;

    this.toolContainer.addChild(tool);
}


GameStage.prototype.remGfx = function(obj)
{
    if (!obj) return;
    if (obj.parent)
    {
        obj.parent.removeChild(obj);
    }
}

GameStage.prototype.doLevelComplete = function()
{

    var tmc = CObj.getById("timeout");
    tmc.gfx.visible = true;
    tmc.timeout = 2;

    var objc = CObj.objects.length;
    for (var i = 0; i < objc; ++i)
    {
        if (CObj.checkType(CObj.objects[i], Notification))
        {
            Notification.removeNot(CObj.objects[i]);
        }
    }

    gameStage.preWinText = tmc;
    new TweenMax(tmc, 2, {timeout: 0., ease: Linear.easeNone});
    gameStage.winDelayedCall = TweenMax.delayedCall(2, LevelManager.loadLevel, ["levelwin", this.updateWindowLevWin, StageManager.inst.guiLayer]);
}

GameStage.prototype.updateWindowLevWin = function()
{


    ZSound.Play("levelWIN");

    gameStage.scoreTimeoutID.kill();
    gameStage.preWinText.destroy();
    gameStage.preWinText = null;
    gameStage.doPhys = false;
    CObj.getById("scorevalue").text = PlayerData.inst.score.toString();

    CObj.getById("icogrill").rotation = -0.16;
    new TweenMax(
    CObj.getById("icogrill"), 0.65, {repeat: -1, ease: Linear.easeNone, rotation: 0.16, yoyo: true});
    CObj.getById("grilledamount").text = "x " + gameStage.grilled;
    var scoregrilled = gameStage.grilled*350;
    CObj.getById("scoregrilled").text = scoregrilled.toString();

    var totalScore= PlayerData.inst.score + scoregrilled;
    CObj.getById("totalscore").text =  totalScore.toString();

    CObj.getById("bmore").click = window.openSponsorWindow;

    var stars = LevelManager.getStars(gameStage.currentLevel, totalScore);

    if (stars == 1)
    {
        CObj.getById("star1").gfx.gotoAndStop(1);
    } else
    if (stars == 2)
    {
        CObj.getById("star1").gfx.gotoAndStop(1);
        CObj.getById("star2").gfx.gotoAndStop(1);
    } else
    if (stars == 3)
    {
        CObj.getById("star1").gfx.gotoAndStop(1);
        CObj.getById("star2").gfx.gotoAndStop(1);
        CObj.getById("star3").gfx.gotoAndStop(1);
    } else

    PlayerData.inst.score = totalScore;

    SG_Hooks.levelUp(gameStage.currentLevel, totalScore);
    var prevStars =  dataStorage["lvlst" + gameStage.currentLevel.toString()];
    if (!prevStars) {

        prevStars = 0;
    }
    if (stars > prevStars)
    {
        dataStorage["lvlst" + gameStage.currentLevel.toString()] = stars;
        updateDS();
    }


    if (gameStage.currentLevel > dataStorage.completedLevels)
    {
        dataStorage.completedLevels = gameStage.currentLevel;
        var prevScore =
            dataStorage["lvlsc" + gameStage.currentLevel.toString()];


        if ((!prevScore) || prevScore == undefined || prevScore < PlayerData.inst.score)
        {
            dataStorage["lvlsc" + gameStage.currentLevel.toString()] = PlayerData.inst.score;
        }
        updateDS();
    }


    CObj.getById("bmenu").click = function () {
        StageManager.inst.openStage(mainMenu);
    }

        CObj.getById("bnext").click = function () {
        if (gameStage.currentLevel == 40)
        {
            SG_Hooks.gameOver(40, LevelManager.totalScore());
            StageManager.inst.openStage(winGameStage);


        } else {
            gameStage.currentLevel++;
            gameStage.doProcess = true;
            StageManager.inst.openStage(gameStage);
        }
    }
}

GameStage.prototype.removeFromToolsObject = function(obj)
{
    var len = gameStage.toolContainer.children.length;
    for (var i = 0; i < len; ++i)
    {
        if (gameStage.toolContainer.children[i].gameobject == obj)
        {
            break;
        }
    }

    if (i < len)
    {
        var ch = gameStage.toolContainer.children[i];
        ch.interactive = false;
        new TweenMax(ch, 0.33, {alpha: 0.5, y: ch.y - 100, onComplete: gameStage.remGfx, onCompleteParams: [ch]});
    }

    for (var j = i + 1; j < len; ++j)
    {
        ch = gameStage.toolContainer.children[j];
        new TweenMax(ch, 0.5, {x: ch.x - this.secretIngridient, ease: TweenMax.LINEAR});
    }
}


GameStage.prototype.addTools = function()
{
    for (var i = 0; i < CObj.objects.length; ++i)
    {
       if ((CObj.objects[i]).userData == 1)
       {
           this.addTool(CObj.objects[i]);
       }
    }
}

GameStage.prototype.updateScore = function()
{
    if (gameStage.scoreObj)
    gameStage.scoreObj.text = PlayerData.inst.score.toString();
}

GameStage.prototype.minusScore = function()
{
    if (!gameStage.doProcess) return;
    PlayerData.inst.score -= 15;
    gameStage.updateScore();

    gameStage.scoreTimeoutID = TweenMax.delayedCall(1., gameStage.minusScore);
}

GameStage.prototype.doKeyDown = function(evt) {
    evt = evt || window.event;
}

GameStage.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);



    SG_Hooks.start();


    window.addEventListener( "keypress", this.doKeyDown, false );

    if (this.currentLevel < 10)
    {
        ZSound.PlayMusic("track2");
    } else
    if (this.currentLevel < 20)
    {
        ZSound.PlayMusic("track3");
    } else
    if (this.currentLevel < 30)
    {
        ZSound.PlayMusic("track6");
    } else
    if (this.currentLevel < 40)
    {
        ZSound.PlayMusic("track4");
    }

    this.worldSpeed = 1;
    this.grilled = 0;
    this.doProcess = false;
    LevelManager.loadLevel("level" + this.currentLevel.toString(), this.onLevelLoaded);
}

GameStage.prototype.onLevelLoaded = function()
{

    var bgname = "BG2";
    if (gameStage.currentLevel > 26)
    {
        bgname = "BG3"
    } else
    if (gameStage.currentLevel > 13)
    {
        bgname = "BG4"
    }

    var bg = new CObj(SCR_WIDTH / 2, SCR_HEIGHT / 2, bgname);
    bg.gfx.parent.removeChild(bg.gfx);
    bg.gfx.width = SCR_WIDTH;
    bg.gfx.height = SCR_HEIGHT;
    StageManager.inst.ol.addChildAt(bg.gfx, 0);

    LevelManager.loadLevel("hud", gameStage.onLoadEnd, StageManager.inst.guiLayer);
}

GameStage.prototype.makePause = function() {
    gameStage.doPhys = false;


    CObj.getById("bresume").click = function () {
        while (LevelManager.objs.length > 0) {
            LevelManager.objs[0].destroy();
            LevelManager.objs.splice(0, 1);
        }
        LevelManager.objs = null;
        gameStage.doPhys = true;

        TweenMax.resumeAll();


        for (var i = 0; i < StageManager.inst.fontLayer.children.length; ++i) {
            StageManager.inst.fontLayer.children[i].visible = true;
        }

        gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
        gameStage.pauseTexture.destroy();
        gameStage.pauseTexture = null;
        gameStage.pauseSprite = null;
        CObj.getById("menu").gfx.mouseout(null);
    }

    CObj.getById("blevs").click = function () {
        StageManager.inst.openStage(levSel);
    }
}

GameStage.prototype.createPools = function()
{
    if (pool.Size("textParticle") == 0)
        pool.Fill("textParticle", 20, function() {
            var c = new CTextField(0, 0);
            c.fontFamily = 0;
            c.fontSize = 25;
            c.align = "center";

            c.gfx = CTextField.createTextField(c);
            c.gfx.scale.x *= window.addScale;
            c.gfx.scale.y *= window.addScale;
            return c;});

    if (pool.Size("coinCollect") == 0)
        pool.Fill("coinCollect", 15, function() {
            var c = CObj.createMovieClip("coinCollect");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            return c;});


    if (pool.Size("expl") == 0)
        pool.Fill("expl", 5, function() {
            var c = new CObj(0, 0);
            c.gfx = CObj.createMovieClip("expl");
            c.gfx.anchor.x = 0.5;
            c.gfx.anchor.y = 0.5;
            c.gfx.scale.x = 1.55;
            c.gfx.scale.y = 1.55;
            return c;});

    if (pool.Size("chickeneffect") == 0)
        pool.Fill("chickeneffect", 3, function() {
            var c =CObj.createMovieClip("chickeneffect");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            c.scale.x *= window.addScale;
            c.scale.y *= window.addScale;
            return c;});



    if (pool.Size("roundElectro") == 0)
        pool.Fill("roundElectro", 8, function() {
            return CObj.createMovieClip("ls2");});

    if (pool.Size("rectElectro") == 0)
        pool.Fill("rectElectro", 20, function() {
            return CObj.createMovieClip("33l");});
}

//NO "THIS" IN CURRENT CONTEXT
GameStage.prototype.onLoadEnd = function()
{
    gameStage.doProcess = true;
    gameStage.stepSize = gameStage.invFR;
    gameStage.doPhys = true;
    PlayerData.inst.score = 1000;
    CObj.getById("level").getText();
    CObj.getById("level").text += gameStage.currentLevel.toString();

    CObj.getById("logo").gfx.interactive = true;
    CObj.getById("logo").gfx.click = window.openSponsorWindow;
    CObj.getById("logo").gfx.tap =window.openSponsorWindow;
    gameStage.toolContainer = new PIXI.DisplayObjectContainer();
    StageManager.inst.fg.addChild(gameStage.toolContainer);
    gameStage.addTools();

    gameStage.scoreObj = CObj.getById("score");
    gameStage.worldSpeed = 1;

    gameStage.createPools();

    CObj.getById("restart").click = function () {
        StageManager.inst.openStage(gameStage);
    }

    var menuBtn = CObj.getById("menu");
    menuBtn.click = function () {
        if (! gameStage.doProcess) return;

        for (var i = 0; i < StageManager.inst.fontLayer.children.length; ++i)
        {
            StageManager.inst.fontLayer.children[i].visible = false;
        }
        TweenMax.pauseAll();
        gameStage.toolContainer.interactive = false;
        gameStage.pauseTexture = new PIXI.RenderTexture(SCR_WIDTH, SCR_HEIGHT);
        gameStage.pauseTexture.render(stage);
        gameStage.pauseSprite  = new PIXI.Sprite(gameStage.pauseTexture);
        gameStage.pauseSprite.tint = 0x99fffa;
        StageManager.inst.guiLayer.addChild(gameStage.pauseSprite);
        TweenMax.killTweensOf(menuBtn, true);
        LevelManager.loadLevel("levelmenu", gameStage.makePause, StageManager.inst.guiLayer);
    }


        CObj.getById("timeout").gfx.visible = false;
    CObj.getById("timeout").text = "";

    CObj.getById("levels").click = function () {
        StageManager.inst.openStage(levSel);
    }

    stage.touchmove = function (mouseData)
    {
        if (gameStage.dragObject) {
        var parentCoordsPosition = mouseData.getLocalPosition(stage);



            var px = parentCoordsPosition.x / SCR_SCALE;
        var py = parentCoordsPosition.y / SCR_SCALE;

            gameStage.dragObject.x = px;
            gameStage.dragObject.y = py;
            gameStage.dragObject.body.velocity[0] = 0;
            gameStage.dragObject.body.velocity[1] = 0;
            gameStage.dragObject.angularVelocity = 0;
        }}

    stage.mousemove = stage.touchmove;

    stage.touchstart = function (md) {

        if (gameStage.dragObject) return;
        var parentCoordsPosition = md.getLocalPosition(stage);
        parentCoordsPosition.x /= SCR_SCALE;
        parentCoordsPosition.y /= SCR_SCALE;
        for (var i = 0; i < gameStage.toolContainer.children.length; ++i)
        {
            var l2 = {x: gameStage.toolContainer.children[i].x + gameStage.toolContainer.x, y:gameStage.toolContainer.children[i].y + gameStage.toolContainer.y};

            var r = (gameStage.toolContainer.children[i].width / 2) + 15;
            var d = (l2.x - parentCoordsPosition.x)*(l2.x - parentCoordsPosition.x) + (l2.y - parentCoordsPosition.y)*(l2.y - parentCoordsPosition.y);
            if (d < r*r)
            {
                break;
            }
        }

        if (i >= gameStage.toolContainer.children.length) return;

        gameStage.dragObject = gameStage.toolContainer.children[i].gameobject;// this.gameobject;
        gameStage.dragObject.concount = 0;
        gameStage.dragObject.sensor = true;
        this.children[0].visible = false;
        gameStage.remGfx(gameStage.dragObject.gfx);
        StageManager.inst.fg.addChild(gameStage.dragObject.gfx);
        gameStage.dragObjectPrevMass = gameStage.dragObject.body.mass;
        gameStage.dragObject.body.mass = 0;
        gameStage.dragObject.x = stage.position.x;
        gameStage.dragObject.y = stage.position.y;
        gameStage.canPut = false;
        stage.touchmove(md);
        world.addBody(gameStage.dragObject.body);

    }

    stage.mousedown = stage.touchstart;

    stage.touchend = function (md) {

        if (gameStage.dragObject) {

            var t = CObj.getById("arrow1");
            if (t && gameStage.dragObject.id == "removeArrow")
            {
                new TweenMax(t.gfx, 0.6, {alpha: 0, onComplete: function (){t.destroy()} });

            }

            //PUT OBJECT
            gameStage.dragObject.sensor = false;

            if (gameStage.canPut) {
                gameStage.removeFromToolsObject(gameStage.dragObject);
                world.removeBody(gameStage.dragObject.body);
                world.step(1 / 10000000);
                world.addBody(gameStage.dragObject.body);

                gameStage.remGfx(gameStage.dragObject.gfx);
                StageManager.inst.ol.addChild(gameStage.dragObject.gfx);
                gameStage.dragObject.updateElectroGfx(gameStage.dragObject);
            } else {
                gameStage.dragObject.x = -3000;
                gameStage.dragObject.y = -3000;
                world.removeBody(gameStage.dragObject);

                var len = gameStage.toolContainer.children.length;
                for (var i = 0; i < len; ++i) {
                    if (gameStage.toolContainer.children[i].gameobject == gameStage.dragObject) {
                        break;
                    }
                }
                gameStage.toolContainer.children[i].children[0].visible = true;
            }

            gameStage.dragObject.body.mass = gameStage.dragObjectPrevMass;
            gameStage.dragObject = null;
        }
    }
    stage.mouseup = stage.touchend;

    gameStage.muteBtn = CObj.getById("mutebtn");


    gameStage.updateSoundBtn(gameStage.muteBtn);
    gameStage.muteBtn.click = function () {
        if (ZSound.available)
        ZSound.Mute(); else
        ZSound.UnMute();
        //ZSound.available = !ZSound.available;

        dataStorage.soundEnabled = ZSound.available;
        updateDS();
        gameStage.updateSoundBtn(gameStage.muteBtn);
    }


//    stage.interactive = true;

    gameStage.scoreTimeoutID = TweenMax.delayedCall(1., gameStage.minusScore);
    //    setTimeout(, 1000);
}

GameStage.prototype.updateSoundBtn = function(btn)
{
    if (ZSound.available)
        btn.gfx.gotoAndStop(0); else
        btn.gfx.gotoAndStop(1);
}
/**
 * Created by KURWINDALLAS on 21.08.2014.
 */
/**
 * Created by Михаил on 27.06.2014.
 */

function Credits() {
    CustomStage.apply(this);
}

extend(Credits, CustomStage);

Credits.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);

    LevelManager.loadLevel("credits", this.onShowContinue);
}

Credits.prototype.onShowContinue = function()
{
    credStage.doProcess = true;
    gameStage.createPools();

    var bgname = "BG2";

    var bg = new CObj(SCR_WIDTH / 2, SCR_HEIGHT / 2, bgname);
    bg.gfx.parent.removeChild(bg.gfx);
    bg.gfx.width = SCR_WIDTH;
    bg.gfx.height = SCR_HEIGHT;
    StageManager.inst.ol.addChildAt(bg.gfx, 0);



    var cd1 = CObj.getById("cd1");
    var cd2 = CObj.getById("cd2");
    var cd3 = CObj.getById("cd3");
    var cd4 = CObj.getById("cd4");
    cd1.gfx.alpha = 0.01;
    cd2.gfx.alpha = 0.01;
    cd3.gfx.alpha = 0.01;
    cd4.gfx.alpha = 0.01;
    cd1.gfx.scale.x = 0.01;
    cd2.gfx.scale.x = 0.01;
    cd3.gfx.scale.x = 0.01;
    cd4.gfx.scale.x = 0.01;
    cd1.gfx.scale.y = 0.01;
    cd2.gfx.scale.y = 0.01;
    cd3.gfx.scale.y = 0.01;
    cd4.gfx.scale.y = 0.01;

    var angle = 0.1;
    cd1.rotation = -angle;
    cd2.rotation = -angle;
    cd3.rotation = -angle;
    cd4.rotation = -angle;
    new TweenMax(cd1.gfx.scale, 0.7, {delay: 0.8, x: 1, y: 1});
    new TweenMax(cd1.gfx, 0.7, {delay: 0.8, alpha: 1.});
    new TweenMax(cd1, 0.7, {delay: 0.8, rotation: 0, yoyo:true, repeat: 2});

    new TweenMax( cd2.gfx.scale,0.7, {delay: 0.9, x: 1, y: 1});
    new TweenMax(cd2.gfx, 0.7, {delay: 0.9, alpha: 1.});
    new TweenMax(cd2, 0.7, {delay: 0.9, rotation: 0, yoyo:true, repeat: 2});

    new TweenMax(cd3.gfx.scale, 0.7, {delay: 0.8 + 2, x: 1, y: 1});
    new TweenMax(cd3.gfx, 0.7, {delay: 0.8 + 2, alpha: 1.});
    new TweenMax(cd3, 0.7, {delay: 0.8 + 2, rotation: 0, yoyo:true, repeat: 2});

    new TweenMax( cd4.gfx.scale,0.7, {delay: 0.9 + 2, x: 1, y: 1});
    new TweenMax(cd4.gfx, 0.7, {delay: 0.9 + 2, alpha: 1.});
    new TweenMax(cd4, 0.7, {delay: 0.9 + 2, rotation: 0, yoyo:true, repeat: 2});

    CObj.getById("bback").click = function()
    {
        StageManager.inst.openStage(mainMenu);

    }



    TweenMax.delayedCall(0.6, function() {CObj.getById("wall5").destroy();} );
}


Credits.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
    TweenMax.killAll();
}

Credits.prototype.process = function() {
    world.step(gameStage.invFR);

    Generator.resetElectricity();

    if (Generator.gens) {
        var genLen = Generator.gens.length;
        if (Generator.gens)
            for (var i = 0; i < genLen; ++i) {
                Generator.gens[i].genProcess();
            }
    }
    var objLen = CObj.objects.length;
    for (var i = 0; i < objLen; ++i)
    {
        if (CObj.objects[i].isConductor && CObj.objects[i] != this.dragObject)
            CObj.objects[i].setElectricity(CObj.objects[i].sElectricity);
    }
    CObj.processAll();
}

/**
 * Created by KURWINDALLAS on 14.07.2014.
 */
/**
 * Created by KURWINDALLAS on 09.09.2014.
 */
/**
 * Created by KURWINDALLAS on 21.08.2014.
 */
/**
 * Created by Михаил on 27.06.2014.
 */

function WinGame() {
    CustomStage.apply(this);
}

extend(WinGame, CustomStage);

WinGame.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);

    LevelManager.loadLevel("wingame", this.onShowContinue);
}

WinGame.prototype.onShowContinue = function()
{
    winGameStage.doProcess = true;


    var bgname = "BG2";
    var bg = new CObj(SCR_WIDTH / 2, SCR_HEIGHT / 2, bgname);
    bg.gfx.parent.removeChild(bg.gfx);
    bg.gfx.width = SCR_WIDTH;
    bg.gfx.height = SCR_HEIGHT;
    StageManager.inst.ol.addChildAt(bg.gfx, 0);



    CObj.getById("totalscore").text = LevelManager.totalScore().toString();

    CObj.getById("gomenu").click = function()
    {
        StageManager.inst.openStage(mainMenu);
    }
}

WinGame.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
    TweenMax.killAll();
}

WinGame.prototype.process = function() {
    world.step(gameStage.invFR);

    Generator.resetElectricity();

    if (Generator.gens) {
        var genLen = Generator.gens.length;
        if (Generator.gens)
            for (var i = 0; i < genLen; ++i) {
                Generator.gens[i].genProcess();
            }
    }
    var objLen = CObj.objects.length;
    for (var i = 0; i < objLen; ++i)
    {
        if (CObj.objects[i].isConductor && CObj.objects[i] != this.dragObject)
            CObj.objects[i].setElectricity(CObj.objects[i].sElectricity);
    }

    CObj.processAll();
}/**
 * Created by KURWINDALLAS on 16.07.2014.
 */
ZPool = function () {
    this.objects = {};
    ZPool.Inst = this;
    return this
};
ZPool.prototype.Fill = function (b, e, a) {


    if (this.objects[b] == undefined) {
        this.objects[b] = []
    }
    for (var c = 0; c < e; c++) {
        var d = a();
        d.poolName = b;
        this.objects[b].push(d)
    }
};
ZPool.prototype.Pop = function (a) {
    if (this.objects[a] == undefined) {
        console.warn("Error: not found '" + a + "' in pool.");
        return undefined
    }
    if (this.objects[a].length == 0) {
        console.warn("Error: pool empty. Element '" + a + "'");
        return undefined
    }
    return this.objects[a].pop()
};

ZPool.prototype.Size = function (a) {
    if (this.objects[a] == undefined) return 0; else
        return   this.objects[a].length;
}

ZPool.prototype.Push = function (a) {
    if (a.poolName == undefined) {
        console.warn("Error: Can't push unnamed element in pool.");
        return
    }
    this.objects[a.poolName].push(a)
};/**
 * Created by Михаил on 24.06.2014.
 */

////////////CObj
CObj = function(in_x,in_y,filename,in_body) {

    this.PublicFields = "allowRotation,drawAsTexture,userData,[Graphics],isClip,fps,autoPlay,scaleX,scaleY,offsetX,offsetY,offsetR;";

    this._isConductor = false;
    this.connected;
    this._x = 0;
    this._y = 0;
    this._sensor = false;
    this.vx = 0;
    this.vy = 0;
    this._body = null;
    this.baseDim = {};
    this._rotation = 0.;
    if (!CObj.objects) CObj.objects = [];
    CObj.objects.push(this);
    this.clipSrc = "";
    this.userData = null;
    this.oX = 0;
    this.oY = 0;
    if (this.offsetX == undefined) this.offsetX = 0;
    if (this.offsetY == undefined) this.offsetY = 0;
    if (this.offsetR == undefined) this.offsetR = 0;
    this.doRemove = false;
    if (filename) {
        var tex = PIXI.Texture.fromFrame(filename + ".png");
        this.gfx = new PIXI.Sprite(tex);

    //    this.gfx.setInteractive(true);
        this.gfx.gameobject = this;
        this.gfx.anchor.x = 0.5;
        this.gfx.anchor.y = 0.5;
        stage.addChild(this.gfx);
    }

    if (in_body) {
        this.body = in_body;
        CObj.setDefaultCG(this.body);
        this.body.position[0] = in_x;
        this.body.position[1] = in_y;
    }

    this.x = in_x;
    this.y = in_y;

    this.rotation = 0;
 };

CObj.updateGfxDelay = 0.3;

CObj.prototype.getText = function()
{
    var t = loc_texts[this.id];
    if (t)
    {
        this.text = CTextField.convertSpaces(t);
    }
}

CObj.prototype.init = function(){
    if (this.body && this.body.type == p2.Body.STATIC && this.isConductor)
    {
       var len = CObj.objects.length;
        for (var j = 0; j < len; ++j)
        {
            if (CObj.objects[j] == this || !CObj.objects[j].isConductor || !CObj.objects[j].body || CObj.objects[j].body.motionState != p2.Body.STATIC)
            continue;

            if (!this.connected) var inxConnect  = -1; else
            inxConnect = this.connected.indexOf(CObj.objects[j]);

            if (inxConnect >= 0) continue;

            this.body.type = p2.Body.DYNAMIC;
            for (var i = 0; i < this.body.shapes.length; ++i)
            {
                this.body.shapes[i].collisionGroup = world.cgDYNAMIC;
            }
            for (var i = 0; i < CObj.objects[j].body.shapes.length; ++i)
            {
                CObj.objects[j].body.shapes[i].collisionGroup = world.cgDYNAMIC;
            }

            world.step(1/ 10000000);
            if (this.body.overlaps(CObj.objects[j].body))
            {
                this.connected.push(CObj.objects[j]);
                CObj.objects[j].connected.push(this);
            }
            for (var i = 0; i < this.body.shapes.length; ++i)
            {
                this.body.shapes[i].collisionGroup = world.cgSTATIC;
            }
            for (var i = 0; i < CObj.objects[j].body.shapes.length; ++i)
            {
                CObj.objects[j].body.shapes[i].collisionGroup = world.cgSTATIC;
            }


            this.body.type = p2.Body.STATIC;
        }
   }
}

CObj.conductClips = ["tracktor", "tracktorwheel", "engine", "guiBGitem", "powerField0001", "propeller", "generatorRound", "bomb1", "tomato", "chest", "block1", "blockmetal", "balka1", "generator", "chickentestsmall", "mister chicken", "metalstatic"];

CObj.prototype.updateElectroGfx = function(obj){
    if (obj.sensor) return;

    TweenMax.delayedCall(CObj.updateGfxDelay, obj.updateElectroGfx, [obj]);
}


CObj.prototype.enableMotorConstraints = function (speed) {
    var len = world.constraints.length;
    for (var i = 0; i < len; ++i)
    {
        if ((world.constraints[i].bodyA == this.body || world.constraints[i].bodyB == this.body) && (world.constraints[i].motor)) {
            if (speed != null) {
                world.constraints[i].enableMotor();
                world.constraints[i].setMotorSpeed(speed);
            }else
            {
                world.constraints[i].motorEnabled = false;
                world.constraints[i].setMotorSpeed(0);
            }
        }
    }
}


CObj.prototype.findFirstConstraint = function () {
    var len = world.constraints.length;
    for (var i = 0; i < len; ++i)
    {
        if (world.constraints[i].bodyA == this.body || world.constraints[i].bodyB == this.body)
        return world.constraints[i];
    }
}

CObj.prototype.setElectricity = function(state){
    this.sElectricity = state;

    if (state)
    {
        if (this.setOffDelay)
        {
            this.setOffDelay.kill();
            this.setOffDelay = null;
        }
        if (!this.mcLightning) {
            if (Math.abs(this.baseDim.x - this.baseDim.y) < 0.45*Math.min(this.baseDim.x, this.baseDim.y))
                this.mcLightning = pool.Pop("roundElectro"); else
            this.mcLightning = pool.Pop("rectElectro");
            if (this.mcLightning) {
                this.mcLightning.anchor.x = 0.5;
                this.mcLightning.anchor.y = 0.5;
                this.mcLightning.animationSpeed = 20 / FRAME_RATE;
                this.mcLightning.gotoAndPlay(1);
                this.mcLightning.scale.x = 0.5+ this.baseDim.x / this.mcLightning.width;
                this.mcLightning.scale.y = 0.5+ this.baseDim.y / this.mcLightning.height;
                if (this.baseDim.x < this.baseDim.y)
                    this.mcLightning.rotation = Math.PI / 2;

                this.gfx.addChild(this.mcLightning);
            }
        } else this.mcLightning.visible = true;

        if (this.gfx)
            this.gfx.tint = 0xccccff;

        if (this.motorSpeed != undefined)
        {
            this.enableMotorConstraints(this.motorSpeed);
        }
    } else
    {
        if (this.motorSpeed != undefined) {
            this.enableMotorConstraints(null);
            this.body.angularVelocity = 0;
        }
        this.setOffDelay = TweenMax.delayedCall(0.1, this.setOffCallback, [this])

    }

}

CObj.prototype.setOffCallback = function (obj) {
    if (obj.mcLightning)
        obj.mcLightning.visible = false;

    if (obj.gfx)
        obj.gfx.tint = 0xffffff;
}

CObj.prototype.onContactBegin = function(b) {
        if (this == gameStage.dragObject)
        {
            if (!this.concount) this.concount = 0;
            this.concount++;
        } else {
            if (b.userData && this.isConductor) {
                this.connected.push(b.userData);
            }
        }
    }

CObj.prototype.onContactEnd = function(b){
        if (gameStage.dragObject && this == gameStage.dragObject)
        {
            this.concount--;
        } else {
            if (b.userData && this.isConductor) {
                var inx = this.connected.indexOf(b.userData);
                if (inx >= 0) {
                    this.connected.splice(inx, 1);
                }
            }
        }
    }

CObj.prototype.process = function(){
        this.updateGraphics();
};

CObj.prototype.move = function(){
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
    };

CObj.prototype.setVelocity = function(vx,vy) {
        this.vx = vx;
        this.vy = vy;
    };

CObj.prototype._destroy = function(){
    if (!this.doRemove) return;


    if (this.gfx && this.gfx.parent) this.gfx.parent.removeChild(this.gfx);
    this.gfx = null;

    if (this.mcLightning)
    {
        if (this.mcLightning.parent)
            this.mcLightning.parent.removeChild(this.mcLightning);
        pool.Push(this.mcLightning);
        this.mcLightning = null;
    }
    if (this.body)
        world.removeBody(this.body);
}

CObj.prototype.destroy = function(){
    if (this.poolName) return;
    this.doRemove = true;
};

CObj.getById = function(idstr){
    for (var i  = 0; i < CObj.objects.length; ++i)
    {
        if (CObj.objects[i].id == idstr) return CObj.objects[i];
    }
}

CObj.checkType = function(obj, constr){
     return (obj.constructor == constr);
}

CObj.destroyAll = function(){
    var len = CObj.objects.length;
    for (var i = 0; i < len; ++i)
    {
        CObj.objects[i].mechanicalDestroy = true;
        CObj.objects[i].destroy();
    }
    CObj.processAll();
}

CObj.prototype.updateGraphics = function(force){
    if (this.gfx && this.gfx.position) {

        this.gfx.rotation = this.rotation + this.offsetR;
        if (force || (this.prevRotation == undefined) || Math.abs(this.gfx.rotation - this.prevRotation) > 0.01) {
            var tcos = Math.cos(this.rotation);
            var tsin = Math.sin(this.rotation);
            this.oX = this.offsetX * tcos - this.offsetY*tsin;
            this.oY = this.offsetX * tsin + this.offsetY*tcos;
            this.prevRotation = this.gfx.rotation;
        }

        this.gfx.position.x = this.x + this.oX;
        this.gfx.position.y = this.y + this.oY;
    }
};

CObj.prototype.constructor = CObj;

Object.defineProperty(CObj.prototype, 'isConductor', {
    get: function () {
        return this._isConductor;
    },
    set: function (value) {
        this._isConductor = value;
        if (value && !this.connected)
        {
            TweenMax.delayedCall(CObj.updateGfxDelay, this.updateElectroGfx, [this]);
            this.connected = [];
        }
    }
});

Object.defineProperty(CObj.prototype, 'x', {
    get: function () {
        if (this.body) {return this.body.position[0]}
        else return this._x;
    },
    set: function (value) {
        if (this.body) {
            this.body.position[0] = value

        }
        else this._x = value;
        this.updateGraphics();
    }
});

CObj.processAll = function(){
    var len = CObj.objects.length;
    for (var i = 0; i < len; i++) {
        CObj.objects[i].process();

        if (CObj.objects[i].doRemove)
        {
            CObj.objects[i]._destroy();
            CObj.objects.splice(i, 1);
            i--;
            len--;
        }
    }
}

Object.defineProperty(CObj.prototype, 'sensor', {
    get: function () {
        return this._sensor;
    },
    set: function (value) {
        this._sensor = value;

        if (this._body)
        {
            var sl = this.body.shapes.length;
            for (var i = 0; i < sl; ++i)
                this.body.shapes[i].sensor = value;
        }
    }
});

Object.defineProperty(CObj.prototype, 'y', {
    get: function () {
        if (this.body) {
            return this.body.position[1]}
        else
        return this._y;

    },
    set: function (value) {
        if (this.body) {
            this.body.position[1] = value}
        else
        this._y = value;
        this.updateGraphics();
    }
});

Object.defineProperty(CObj.prototype, 'body', {
    get: function () {
        return this._body;
    },
    set: function (value) {
        if (this._body) {
            world.removeBody(this._body);
            this._body.userData = null;
        }
        if (value)
        {
            this._body = value;
            this._body.userData = this;
            world.addBody(this._body);
        }
      }
});

Object.defineProperty(CObj.prototype, 'rotation', {
    get: function () {
        if (this.body) {return this.body.angle}
        else return this._rotation;

    },
    set: function (value) {
        if (this.body) {this.body.angle = value}
        else this._rotation = value;

        this.updateGraphics();
    }
});

CObj.DeserializeArray = function(data){
var count = data.objects.length;
var objs = [];
    for (i = 0; i < count; i++) {
        if (data.objects[i].clip == "pussyatlas.png.bg") {
            continue;
        }
    objs.push(CObj.DeserializeCObj(data.objects[i]));
   }
    return objs;
}

CObj.ExtractFrameName = function(clipSrc) {
    //find first 0
    var idx = clipSrc.indexOf("0");
    if (idx == -1) return clipSrc;
    // remove all behind 0
    return clipSrc.substring(0, idx);
}

CObj.ExtractFrameNum = function(clipSrc) {
    //find first 0
    var idx = clipSrc.indexOf("0");
    if (idx == -1) return 0;
    var num  = clipSrc.substring(idx, clipSrc.length);
    var rinx = num.indexOf(".");
    if (~rinx) num = num.slice(0, -4);
    var frame = parseInt(num);
    if (isNaN(frame)) return 0; else return frame;
}

CObj.createMovieClip = function(name)
{
    var frameName = CObj.ExtractFrameName(name);
    var textures = [];
    var cinx = 0;
    var count = 0;
    for (var prop in PIXI.TextureCache) {
        if (name == prop) cinx = count;

        var frName = CObj.ExtractFrameName(prop);
        if (frName == frameName)
        {
           textures.push(PIXI.TextureCache[prop]);

            count ++;
        }
    }

    var img = new PIXI.MovieClip(textures);
    img.gotoAndStop(cinx);
    return img;
}

CObj.AssignTexturesToObjects = function (objs, layerToAdd){
    var count = objs.length;
    for (var i = 0; i < count; i++) if (objs[i].clipSrc != "" && objs[i].clipSrc != null) {
        var tex = null;
        if (objs[i].sAtlasName != "") {
            tex = PIXI.Texture.fromFrame(objs[i].clipSrc + ".png");//assets.getTextureAtlas(objs[i].sAtlasName).getTexture(objs[i].clipSrc);
        }
        else {
            var idx = objs[i].clipSrc.indexOf(".");
            if (idx == -1) tex = PIXI.Texture.fromFrame(objs[i].clipSrc + ".png"); else tex = PIXI.Texture.fromFrame(objs[i].clipSrc.substr(0, idx)  + ".png");
        }
        if (!tex) continue;
        var img = null;

        if (objs[i].isClip) {
            img = CObj.createMovieClip(objs[i].clipSrc);
            img.animationSpeed = objs[i].fps / FRAME_RATE;
            if (objs[i].autoPlay) {
                img.play();
            }
        } else {

            if (objs[i].drawAsTexture )
            {
                img = new PIXI.TilingSprite(tex, objs[i].baseDim.x, objs[i].baseDim.y)  ;
            } else
            {

                img = new PIXI.Sprite(tex);
            objs[i].isConductor = false;
            }
        }

            img.anchor.x = 0.5;
            img.anchor.y = 0.5;
            img.x = objs[i].x;
            img.y = objs[i].y;
            img.width = objs[i].baseDim.x + 2;
            img.height = objs[i].baseDim.y + 2;
            img.rotation = objs[i].rotation;

            img.scale.x = objs[i].scaleX*window.addScale;
            img.scale.y = objs[i].scaleY*window.addScale;
            img.width += 1;
            img.height += 1;

            objs[i].gfx = img;
            if (layerToAdd) layerToAdd.addChild(img);
    }
}

CObj.setBodyMass = function (b, density)
{
    var area = b.getArea();
    b.mass = area * density / 50;
}

CObj.getBodyFromJSON = function (d)
{

    var isStatic  = false;

    if (!CObj.steelMaterialHiFriction) {
        CObj.steelMaterialHiFriction = new p2.Material();
        CObj.mediumRestitution = new p2.Material();
        CObj.strongRestitution = new p2.Material();
        world.cgSTATIC = Math.pow(2,0);
        world.cgDYNAMIC = Math.pow(2,1);


        world.materials = [CObj.steelMaterialHiFriction, CObj.mediumRestitution, CObj.strongRestitution];
        world.defaultContactMaterial.friction = 0.5;
        world.setGlobalStiffness(50);
        world.defaultContactMaterial.stiffness = 50;

        world.addContactMaterial(
            new p2.ContactMaterial(CObj.mediumRestitution, CObj.mediumRestitution, {
                friction :2.5//,
                ///restitution : 1.2//,//,//,//,
               ,relaxation:70
            }));


        world.addContactMaterial(
            new p2.ContactMaterial(CObj.steelMaterialHiFriction, CObj.steelMaterialHiFriction, {
                friction : 3.4
                ,relaxation:4
                ,stiffness: 30000
            }));


        world.addContactMaterial(
            new p2.ContactMaterial(CObj.steelMaterialHiFriction, CObj.mediumRestitution, {
                friction : 0.4,
                stiffness: 1000,
                restitution : 0.4//,//,//,
             //   relaxation:50,
             //   stiffness: 100000
            }));

        world.addContactMaterial(
            new p2.ContactMaterial(CObj.steelMaterialHiFriction, CObj.strongRestitution, {
                restitution : 0.5,
                friction: 0.5//,
            }));

        world.addContactMaterial(
            new p2.ContactMaterial(CObj.mediumRestitution, CObj.strongRestitution, {
                restitution : 1.0,
                friction: 0.5//,
            }));
    }
    switch (d.body.type) {
        case "DYNAMIC" : isStatic = false; break;
        case "STATIC" : isStatic = true; break;
    }



    var ms = d.density;
    if (d.cls == "Chicken")
    {
        d.elasticity = 0.5;
        d.density = 1;
    }
    if (isStatic) ms = 0;
    var b = new p2.Body(
        {
            mass: ms,
            fixedRotation: !d.allowRotation
        }
    );
    b.motionState = isStatic?p2.Body.STATIC:p2.Body.DYNAMIC;

    var sCount = d.body.shapes.length;
    if (sCount != 0) {
        for (var i = 0; i < sCount; i++) {

            switch (d.body.shapes[i].type) {
                case "CIRCLE": {
                    var c  = new p2.Circle(d.body.shapes[i].radius);
                    break;
                }
                case "POLYGON": {
                    var verts  = d.body.shapes[i].localVerts;
                    var innerVerts = [];
                    for (j = 0; j < verts.length; j++) {
                        innerVerts.push([verts[j].x, verts[j].y]);
                    }
                    c = new p2.Convex(innerVerts);


                    break;
                }
            }

           /* if (isStatic)
            c.collisionGroup = world.cgSTATIC; else
            c.collisionGroup = world.cgDYNAMIC;

            c.collisionMask = world.cgSTATIC | world.cgDYNAMIC;
*/
             //shapesToAdd.push(c);
            if (c) b.addShape(c);

            if (o.elasticity < 0.2)
            {
                c.material = CObj.steelMaterialHiFriction;
            } else
            if (o.elasticity <= 0.5)
            {
                c.material = CObj.mediumRestitution;
            } else
                c.material = CObj.strongRestitution;

        }


    }//else trace("Warning. Body without shapes!");


    CObj.setDefaultCG(b);


    //b.mass = b.getArea() * d.density / 50;
    CObj.setBodyMass(b, d.density);

    return b;
}

CObj.setDefaultCG = function (b)
{
    if (b.motionState == p2.Body.STATIC || b.mass == 0)
        var cg = world.cgSTATIC; else
        var cg = world.cgDYNAMIC;

    for (var i = 0; i < b.shapes.length; ++i)
    {

        if (cg == world.cgSTATIC)
            b.shapes[i].collisionMask = world.cgDYNAMIC; else
            b.shapes[i].collisionMask = world.cgSTATIC | world.cgDYNAMIC;

        b.shapes[i].collisionGroup = cg;

    }
}

CObj.DeserializeCObj = function (d, dontCreateClips){

    var o = Deserialize(d);
    o.clipSrc = d.clip;
    //o.sAtlasName = d.sAtlasName;
    if (o.clipSrc) {
        var filename = d.clip;
        var idx = filename.lastIndexOf(".");
        // so if we have two dots, this is atlas
        if (filename.lastIndexOf(".", idx - 1) != -1) {
            // atlas texture
            var atlasFile = filename.substring(0, idx);
            o.sAtlasName = filename.substring(0, idx);

            o.clipSrc = filename.substring(idx + 1, filename.length);

            idx = o.sAtlasName.indexOf(".");
            if (idx != -1) {
                o.sAtlasName = o.sAtlasName.substr(0, idx);
            }
        }
    }

    // materials
    if (d.density != undefined) o.density = d.density;
    if (d.elasticity != undefined) o.elasticity = d.elasticity;
    if (d.friction != undefined) o.friction = d.friction;
    if (d.frictionStatic != undefined) o.frictionStatic = d.frictionStatic;
    if (d.frictionRolling != undefined) o.frictionRolling = d.frictionRolling;
    if (d.isSensor != undefined) o.isSensor = d.isSensor;

    if (d.layer) o.layer = d.layer;
    o.id = d.id;
    var i;
    var GLOBAL_MASS_COEF = 60.5;
    if (d.body) {
        o.body = CObj.getBodyFromJSON(d);

    }

    if (d.baseDim) {
        o.baseDim.x = d.baseDim.x;
        o.baseDim.y = d.baseDim.y;
    }

    var multiplier = 2;
    o.scaleX = d.scaleX / multiplier;
    o.scaleY = d.scaleY / multiplier;
    if (d.x != undefined) o.x = d.x;
    if (d.y != undefined) o.y = d.y;
    if (d.rotation != undefined) o.rotation = d.rotation;
    return o;
}

function Deserialize(d) {

    if ((d.cls != undefined) && (d.cls != "") && (d.cls != "ZEngine::ZObj")) {
        var cls = d.cls;

        if (cls.indexOf("::") != -1) cls = cls.split("::")[1];
        if (window[cls]) {
            if (cls == "ZObj") cls = "CObj"; else {
            }
            o = new window[cls]();
            o.cls = cls;
        } else o = new CObj();
    }
    else o = new CObj();

    if (o.PublicFields) {
            var lists = o.PublicFields.replace(" ", "").split(";");
            var i;
            var l;
            var lcount = lists.length;
            for (l = 0; l < lcount; l++) if (lists[l] !=  "") {
                var flist = lists[l].split(",");
                var fcount = flist.length;
                for (i = 0; i < fcount; i++) {
                    var field = flist[i];
                    if (field != "") {
                        if (field.substr(0, 1) == "[") continue;
                        if (d[field] != undefined) o[field] = d[field];
                    }
                }
            }
         }
    return o;
}/**
 * Created by KURWINDALLAS on 14.07.2014.
 */
extend(CBomb, CObj, true);

function CBomb(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.PublicFields += "power,";
    this.radiusMax = 300;
}

CBomb.prototype.explode = function()
{
    if (this.doRemove) return;
    var objlen = CObj.objects.length;
    var pp1 = new vec2.create();
    var pp2 = new vec2.create();
    ZSound.Play("rocketboom");

    var not = pool.Pop("expl");
    if (not) {
        not.x = this.x;
        not.y = this.y;
        not.gfx.animationSpeed = 0.85;
        not.gfx.gotoAndPlay(0);
        not.gfx.loop = false;

        not.gfx.scale.x = 1.55*window.addScale;
        not.gfx.scale.y = 1.55*window.addScale;
        not.updateGraphics();
        if (not.gfx.parent)
            not.gfx.parent.removeChild(not.gfx);

        StageManager.inst.ol.addChild(not.gfx);

        not.gfx.onComplete = function () {
            setTimeout( function() {
                not.gfx.parent.removeChild(not.gfx);
                pool.Push(not);
            }, 15, not);
        };
    }

    for (var i = 0; i < objlen; ++i)
    {
       if (CObj.objects[i].sensor || CObj.objects[i] == this || (!CObj.objects[i].body) || (CObj.objects[i].body.type != p2.Body.DYNAMIC)) continue;
       pp1[0] = this.x;
       pp1[1] = this.y;

       pp2[0] = CObj.objects[i].x;
       pp2[1] = CObj.objects[i].y;
       vec2.sub(pp1, pp1, pp2);

        var sl = vec2.sqrLen(pp1);
        var sr = this.radiusMax*this.radiusMax;
       if (sl > sr) continue;
        var len = Math.sqrt(sl);
        pp1[0] /= len;
        pp1[1] /= len;

        var powDist = 1 - (len + 2) / this.radiusMax;
        if (powDist < 0) powDist = 0;
        powDist = Math.pow(powDist, 1.4);
        vec2.scale(pp1, pp1, this.power*4500*(powDist));
         CObj.objects[i].body.force[0] -= pp1[0];
        CObj.objects[i].body.force[1] -= pp1[1];
    }

    this.destroy();
}

CBomb.prototype.setElectricity = function(state)
{
    CObj.prototype.setElectricity.call(this)
    if (state)this.explode();
}
/**
 * Created by KURWINDALLAS on 13.07.2014.
 */
extend(CButton, CObj, true);

function CButton(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align';
}


CButton.prototype.destroy = function()
{
    CObj.prototype.destroy.call(this);
    this.textField.parent.removeChild(this.textField);
    this.textField = null;
    this.click = null;
}

Object.defineProperty(CButton.prototype, 'click', {
    get: function () {
        return this._click;
    },
    set: function (value) {
        this._click = value;
        if (!value)
        {
            this.gfx.tap = null;
            this.gfx.click = null;
        } else
        if (this.gfx)
        {
            var intermediateFunc = function(evt)
            {
                ZSound.Play("CLICK");
                value(evt);
            }
            this.gfx.tap = intermediateFunc;
            this.gfx.click = intermediateFunc;
        }
    }
});

Object.defineProperty(CButton.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {
        this._text = value;
        if (this.gfx && this.textField) {
            var tf = this.textField;
            tf.text = value;
            tf.updateText();
            var b = tf.getLocalBounds();
            tf.x = -b.width / 2;
            tf.y = -b.height;
            this.updateGraphics(true);

        }
    }
});

CButton.prototype.updateGraphics=function()
{
    if (this.doRemove) return;
    CObj.prototype.updateGraphics.call(this);
    if (this.gfx) {
       // if (!window.iphone3) {
       //     this.textField.scale.x = this.gfx.scale.x;
        //    this.textField.scale.y = this.gfx.scale.y;
     //   }
        this.textField.x = this.gfx.x - this.textField.width / 2;// - this.gfx.width * 0.25;
        this.textField.y = this.gfx.y - this.textField.height*0.7;// + this.textField.height / 4;// - this.gfx.height * 0.25;
    }
}

CButton.prototype.init = function(){
    CObj.prototype.init.call(this);
    this.gfx.interactive = true;
    this.align = "center";
    this.fontSize = parseInt(this.fontSize);
    this.textField = CTextField.createTextField(this);
    this.getText();
    this.text = this.text;
    //this.text = this.text;

    if (this.isClip)
    this.gfx.gotoAndStop(0);
    var tf = this.textField;
    var f = this.gfx;
    this.baseScaleX = f.scale.x;
    this.baseScaleY = f.scale.y;
    var bsX = this.baseScaleX;
    var bsY = this.baseScaleY;
    this.updateGraphics();
       this.gfx.mouseover = function (evt) {
        TweenMax.killTweensOf(f.scale);
        new TweenMax(f.scale, 0.6, {y: bsY+0.2, ease: Elastic.easeOut} );
        new TweenMax(f.scale, 0.4, {x: bsX+0.2, ease: Elastic.easeOut} );
        new TweenMax(tf.scale, 0.6, {y: 1+0.2, ease: Elastic.easeOut} );
        new TweenMax(tf.scale, 0.4, {x: 1+0.2, ease: Elastic.easeOut} );

    }
    this.gfx.mouseout = function (evt) {
        if (f.currentFrame)
        f.gotoAndStop(1);
        new TweenMax(f.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut} );
        new TweenMax(tf.scale, 0.3, {x: 1, y: 1, ease: Elastic.easeOut} );
    }

    StageManager.inst.fontLayer.addChild(this.textField);

    //tf.tint = 0x6666FF;
}/**
 * Created by KURWINDALLAS on 12.07.2014.
 */


extend(ZCJoint, CObj, true);

function ZCJoint(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += "body1Id,body2Id,collideConnected,breakOnForce,angleConstraint,angleMin,angleMax,frequency,damping,rate,isStopped,";
}


ZCJoint.prototype.CreateMotor = function()
{
    if (!joint) return;
    if (Math.abs(rate) > 0.000001) {
        if (!motor)	motor = new MotorJoint(joint.body1, joint.body2, 2 * Math.PI * rate);
        if (isStopped) motor.rate = 0; else motor.rate = 2 * Math.PI * rate;
        motor.ignore = !collideConnected;
        motor.space = ZNape.Inst.World;
    }
}

ZCJoint.getFirstStatic = function () {
    var ol = CObj.objects.length;
    for (var i = 0; i < ol; ++i)
    {
        if (CObj.objects[i].body && CObj.objects[i].body.type == p2.Body.STATIC)
        {
            return CObj.objects[i].body;
        }

    }
}


ZCJoint.prototype.init = function()
{
    CObj.prototype.init.call(this);

    var bl  = world.hitTest([this.x, this.y], world.bodies, 3.);
    var b1, b2;
    var b2worldStatic = false;


    if (bl.length == 1) {
    b1 = bl[0];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (b1 != null) {
        if (b1.type != p2.Body.STATIC) {
            b2worldStatic = true;
            b2 = ZCJoint.getFirstStatic();
            this.joint = new p2.Constraint(b1, b2, {collideConnected: this.collideConnected, worldPivot: [this.x, this.y]});
            // b1.worldPointToLocal(Vec2.get(Position.x, Position.y)), Vec2.get(Position.x, Position.y));
        }
    }
} else
if (bl.length >= 2) {
    b1 = bl[0];
    b2 = bl[1];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (this.body2Id != "") b2 = CObj.getById(this.body2Id).body;
}



    if (!b2worldStatic) {
        b1.userData.onContactBegin(b2);
        b2.userData.onContactBegin(b1);
    }
    if (!b1) b1 = bl[0];
    if (!b2) b2 = bl[1];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (this.body2Id != "") b2 = CObj.getById(this.body2Id).body;



    if (b1 != null && b2 != null) {
        if (!(b1.type == p2.Body.STATIC && b2.type == p2.Body.STATIC)) {
            this.joint = new p2.RevoluteConstraint(b1, b2, {collideConnected: this.collideConnected, worldPivot: [this.x, this.y]});
        //    this.joint = new PivotJoint(b1, b2, b1.worldPointToLocal(Vec2.get(Position.x, Position.y)), b2.worldPointToLocal(Vec2.get(Position.x, Position.y)));
        }
    }


if (this.joint != null) {

    if (this.rate != 0) {
        if (b1.motionState != p2.Body.STATIC)
            b1.userData.motorSpeed = this.rate;

        if (b2.motionState != p2.Body.STATIC)
            b2.userData.motorSpeed = this.rate;

        this.joint.motor = true;
    }

    //if (UserData != "") joint.userData.obj = UserData;

 /*

    if (Math.abs(breakOnForce) > 0.00001) {
        joint.maxForce = breakOnForce;
        joint.breakUnderForce = true;
        joint.removeOnBreak = true;
    } else {
        joint.breakUnderForce = false;
    }

    //CreateMotor();
*/
    world.addConstraint(this.joint);
}

/*if (angleConstraint && b1 && b2) {
    var angle : Number = (b2.rotation - b1.rotation);
    angleJoint = new AngleJoint(b1, b2, angle + angleMin * ZMath.DEG_TO_RAD, angle + angleMax * ZMath.DEG_TO_RAD, 0);
    angleJoint.ratio = 1;
    angleJoint.stiff = false;
    // ********* cahnged, may cause bugs
    //angleJoint.stiff = Damping > 0.0001;
    angleJoint.frequency = frequency;
    angleJoint.damping = damping;
    if (Math.abs(breakOnForce) > 0.00001) {
        angleJoint.maxForce = breakOnForce;
        angleJoint.breakUnderForce = true;
        angleJoint.removeOnBreak = true;
    } else {
        angleJoint.breakUnderForce = false;
    }
    angleJoint.space = ZNape.Inst.World;
}
*/
b1 = null;
b2 = null;
}

/*
public function get rate():Number
{
    return _rate;
}

public function set rate(value:Number):void
{
    _rate = value;
CreateMotor();
}

public function get angleMin():Number
{
    return _angleMin;
}

public function set angleMin(value:Number):void
{
    _angleMin = value;
if (angleJoint) {
    var angle : Number = (angleJoint.body2.rotation - angleJoint.body1.rotation);
    angleJoint.jointMin = angle + _angleMin * ZMath.DEG_TO_RAD;
}
}

public function get angleMax():Number
{
    return _angleMax;
}

public function set angleMax(value:Number):void
{
    _angleMax = value;
if (angleJoint) {
    var angle : Number = (angleJoint.body2.rotation - angleJoint.body1.rotation);
    angleJoint.jointMax = angle + _angleMax * ZMath.DEG_TO_RAD;
}
}

public function get isStopped():Boolean
{
    return _isStopped;
}

public function set isStopped(value:Boolean):void
{
    _isStopped = value;
if (motor) {
    if (isStopped) motor.rate = 0; else motor.rate = 2 * Math.PI * _rate;
}
}

public function get angleConstraint():Boolean
{
    return _angleConstraint;
}

public function set angleConstraint(value:Boolean):void
{
    _angleConstraint = value;
if (angleJoint) angleJoint.active = angleConstraint;
}

public function get damping():Number
{
    return _damping;
}

public function set damping(value:Number):void
{
    _damping = value;
if (angleJoint) angleJoint.damping = _damping;
}

public function get frequency():Number
{
    return _frequency;
}

public function set frequency(value:Number):void
{
    _frequency = value;
if (angleJoint) angleJoint.frequency = _frequency;
}

public function get collideConnected():Boolean
{
    return _collideConnected;
}

public function set collideConnected(value:Boolean):void
{
    _collideConnected = value;
if (joint) joint.ignore = !_collideConnected;
if (motor) motor.ignore = !_collideConnected;
}

*//**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(CTextField, CObj, true);

function CTextField(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align,tint, ';
}

CTextField.prototype._destroy = function(){
    CObj.prototype._destroy.call(this);
}

Object.defineProperty(CTextField.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {
        this._text = value;
        if (this.gfx) {
            this.gfx.text = value;
            this.gfx.updateText();
            var b = this.gfx.getLocalBounds();

            if (this.align == "center")
            {
                this.offsetX = (-b.width / 2)*window.addScale;
            } else
            if (this.align == "right")
            {
                this.offsetX = (-b.width)*window.addScale;
            } else {
                this.offsetX = 0;
            }
            this.offsetY = -b.height;
            this.updateGraphics(true);
       }
    }
});

CTextField.hashCode = function (str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

CTextField.convertSpaces = function(a)
{
    var c = a.match(/==/g);
    if (c)
        breaks = c.length;

    return a.replace(/==/g, '\n');
}

CTextField.createTextField = function(obj) {
    var inx = 0;
    for (var s in PIXI.BitmapText.fonts) {
        if (!obj.fontFamily || inx == obj.fontFamily) {
            font = PIXI.BitmapText.fonts[s];
            break;
        }
        inx++;
    }
    if (obj.fontSize == undefined) obj.fontSize = 30/window.addScale;else
     obj.fontSize /= window.addScale;
    ///if (obj.fontSize < 60) obj.fontSize = 60;
    var fontParam = obj.fontSize + "px " + font.font;
    if (!obj.align || obj.align == "") obj.align = "left";

    var breaks = 0;
    if (obj.text) {
        obj.text = this.convertSpaces(obj.text);
    }

    var pt = new PIXI.BitmapText(obj.text, {font: fontParam, align: "center"});

    if (obj.tint != "0xffffff" && obj.tint != undefined)
    pt.tint = parseInt(obj.tint);
    pt.breaks = breaks;
    pt.fs = obj.fontSize;
    return pt;

}

CTextField.prototype.init = function(){
    CObj.prototype.init.call(this);

    this.gfx = CTextField.createTextField(this);
    this.gfx.scale.x *= window.addScale;
    this.gfx.scale.y *= window.addScale;
    this.text = this.text;
    this.getText();
/*    if (this.text)

        this.text = this.text;*/
    this.updateGraphics();

    StageManager.inst.fontLayer.addChild(this.gfx);
}/**
 * Created by KURWINDALLAS on 12.07.2014.
 */
extend(Chest, CObj, true);

function Chest(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.amount = 1000;
}

Chest.prototype.setElectricity = function(state){
    CObj.prototype.setElectricity.call(this, state);

    if (state && !this.preDestroy) {
        this.preDestroy = true;
        //this.destroy();
        PlayerData.inst.score += this.amount;
        gameStage.updateScore();

        Coin.generateTextParticle(this);

        ZSound.Play("unlock");
        var t = this;
        if (CObj.checkType(this.gfx, PIXI.MovieClip)) this.gfx.gotoAndStop(1);
        new TweenMax(this.gfx, 0.8, {alpha: 0, ease: Linear.easeNone, onComplete: function() {t.destroy();}});
        //TweenMax.delayedCall(0.25, function () {t.destroy();});
    }
    //this.destroy();
    this.sElectricity = state;
}
/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(Coin, CObj, true);

function Coin(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.amount = 100;
}

Coin.prototype.onContactBegin = function(b) {
    //  if (gameStage.dragObject && b.userData == gameStage.dragObject) return;
    if (b.userData != gameStage.dragObject && this.preDestroy == undefined)
    {
        this.preDestroy = true;
        this.onGet();
    }
}


Coin.prototype._destroy = function() {
    //  if (gameStage.dragObject && b.userData == gameStage.dragObject) return;
    CObj.prototype._destroy.call(this);
    //this.rotatingSprites.parent.removeChild(this.rotatingSprites);
}

Coin.generateTextParticle = function(cobj)
{
    var not = pool.Pop("textParticle");
    if (not) {
        not.x = cobj.x;
        not.y = cobj.y;
        not.gfx.alpha = 1;
        not.text = cobj.amount.toString();
        StageManager.inst.fontLayer.addChild(not.gfx);
        var totalTime = 0.85;

        new TweenMax(not.gfx, 0.3, {delay: totalTime - 0.3, alpha: 0, ease: Linear.easeIn});
        new TweenMax(not, totalTime, {y: not.y - 80, ease: Linear.easeIn, onComplete: function () {
            rp(not.gfx);
            pool.Push(not);
        }});
    }
}

Coin.prototype.onGet = function()
{
    PlayerData.inst.score += this.amount;
    gameStage.updateScore();

    var coinGfx = pool.Pop("coinCollect");
    if (!coinGfx)
    this.destroy(); else
    {
        rp(coinGfx);
        rp(this.gfx);
         StageManager.inst.ol.addChild(coinGfx);
        this.gfx = coinGfx;
        this.updateGraphics();
        var coin = this;
        coinGfx.animationSpeed = 0.6;
        coinGfx.loop = false;
        coinGfx.gotoAndPlay(0);
        this.gfx.onComplete = function () {
            setTimeout( function() {
                if (coin.gfx) pool.Push(coin.gfx);
                rp(coin.gfx);
                coin.gfx = null;
                coin.destroy();
            }, 15, coin);


        };

    }
    Coin.generateTextParticle(this);
    ZSound.Play("collectMoney");
}

Coin.prototype.process = function()
{
    CObj.prototype.process.call(this);
    this.rotatingSprites.rotation += 0.05*gameStage._worldSpeed;

    this.y = this.baseY + Math.sin(new Date() / 200. + ((this.baseY % 50) / 5))*6;
}

Coin.prototype.onContactEnd = function(b) {


}

Coin.prototype.init = function(state){
    CObj.prototype.init.call(this);
    this.sensor = true;
    this.body.mass = 0;
    this.gfx.width = 40;
    this.gfx.height = 40;
    this.baseY = this.y;
    this.rotatingSprites = new PIXI.Sprite(PIXI.Texture.fromFrame("monetabg.png"));
    this.rotatingSprites.scale.x = 0.95;
    this.rotatingSprites.scale.y = 0.95;
    this.rotatingSprites.anchor.x = 0.5;
    this.rotatingSprites.anchor.y = 0.5;
    this.gfx.addChild(this.rotatingSprites);
  //  this.gfx.gotoAndPlay(0);
    this.gfx.gotoAndPlay(Math.round(this.x / 50) % 8);
   // TweenMax.to();

}
/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(Tomato, CObj, true);

function Tomato(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

Tomato.prototype.process = function()
{
    CObj.prototype.process.call(this);

    //this.body.applyDamping(0.4);
   // this.body.angle *= 0.92;
}

Tomato.prototype.init = function()
{
    CObj.prototype.init.call(this);
    this.body.allowRotation = true;
}

Tomato.prototype.process = function()
{
    CObj.prototype.process.call(this);

    if (this.y > SCR_HEIGHT + 200)
    {
        this.mechanicalDestroy = false;
        this.destroy();

    }
    if (this.x > 0 && this.y > 0 && this.x < SCR_WIDTH && this.height < SCR_HEIGHT)
    {

    if (this.body.velocity[1] > 300 && !this.slowMo)
    {
    //    gameStage.stepSize = 0.001;
        new TweenMax(gameStage, 0.7, {worldSpeed: 0.12, yoyo: true, repeat: 1, ease: Quad.easeOut});

        this.slowMo = true;
    }
    }

}


Tomato.prototype.destroy = function()
{
    if (!this.mechanicalDestroy)
    {
        gameStage.loseGame();

    //  this.gfx

    var not = pool.Pop("expl");
    if (not) {
        not.x = this.x;
        not.y = this.y;
        not.gfx.animationSpeed = 0.85;
        not.gfx.gotoAndPlay(0);
        not.gfx.loop = false;

        not.gfx.scale.x = 1.55;
        not.gfx.scale.y = 1.55;
        not.updateGraphics();
        if (not.gfx.parent)
            not.gfx.parent.removeChild(not.gfx);

        StageManager.inst.ol.addChild(not.gfx);

        not.gfx.onComplete = function () {
            setTimeout( function() {
                not.gfx.parent.removeChild(not.gfx);
                pool.Push(not);
            }, 15, not);
        };
    }

    var g = this.gfx;
    var baseScaleX = g.scale.x;
    var baseScaleY = g.scale.y;
    new TweenMax(g.scale, 0.2, {y: 1.4*baseScaleY, x:0.6*baseScaleX});
    new TweenMax(g.scale, 0.15, {delay: 0.2, x: 1.4*baseScaleX, y: 0.6*baseScaleY});
    g.parent.removeChild(g);
    StageManager.inst.ol.addChild(g);
    new TweenMax(g, 0.07, {delay: 0.35 - 0.07,alpha: 0., onComplete: function() {g.parent.removeChild(g);} });
    new TweenMax(g, 0.35, { y: g.y - 35, rotation: g.rotation + 10.05,  ease: Linear.easeIn});

    this.gfx = null;
    }

    CObj.prototype.destroy.call(this);

}

Tomato.prototype.setElectricity = function(state){
    if (state && !this.preDestroy) {
        this.preDestroy = true;
        //this.destroy();
        var t = this;
        TweenMax.delayedCall(0.25, function () {t.destroy();});
    }
    CObj.prototype.setElectricity.call(this, state);
    //this.destroy();
 //   this.sElectricity = state;
}


/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(Chicken, CObj, true);

function Chicken(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    if (!Chicken.count) Chicken.count = 1; else
    Chicken.count++;
    this.amount = 200;
}

Chicken.prototype.process = function()
{
    CObj.prototype.process.call(this);

    if (this.y > SCR_HEIGHT + 200)
    {
    //    this.mechanicalDestroy = undefined;
        this.destroy();

    }
}


Chicken.prototype.destroy = function(){
    if (this.doRemove) return;


    Chicken.count--;
    if (this.mechanicalDestroy == undefined)
    {

        var deadChickenObj = {"drawAsTexture": false,
            "friction": 1,
            "offsetR": 0,
            "baseDim": {
                "y": 50,
                "x": 80
            },
            "allowRotation": true,
            "cls": "ZEngine::ZObj",
            "rotation": 0,
            "layer": 1,
            "density": 1,
            "elasticity": 0,
            "autoPlay": false,
            "isClip": false,
            "scaleX": 0.8,
            "actions": [],
            "offsetX": 0,
            "scaleY": 0.8,
            "offsetY": 0,
            "frictionStatic": 2,
            "body": {
                "shapes": [
                    {
                        "localVerts": [
                            {
                                "y": -1.9074413194729098,
                                "x": -44.43949885053283
                            },
                            {
                                "y": -21.574107986139566,
                                "x": -11.772832183866154
                            },
                            {
                                "y": 15.759225347193777,
                                "x": 17.560501149467175
                            },
                            {
                                "y": 28.425892013860434,
                                "x": 16.560501149467175
                            },
                            {
                                "y": 27.425892013860434,
                                "x": -33.77283218386616
                            }
                        ],
                        "localCOM": {
                            "y": 8.129663541695152,
                            "x": -13.782723371689402
                        },
                        "type": "POLYGON"
                    },
                    {
                        "localVerts": [
                            {
                                "y": -21.57410798613957,
                                "x": -11.772832183866154
                            },
                            {
                                "y": -18.57410798613957,
                                "x": 35.56050114946717
                            },
                            {
                                "y": 15.759225347193773,
                                "x": 17.560501149467175
                            }
                        ],
                        "localCOM": {
                            "y": -8.129663541695122,
                            "x": 13.782723371689395
                        },
                        "type": "POLYGON"
                    }
                ],
                "type": "DYNAMIC"
            },
            "frictionRolling": 0.001,
            "userData": "",
            "x": -131.56050114946717,
            "y": 261.57410798613955,
            "clip": "pussyatlas.png.chickendead",
            "fps": 30,
            "id": "",
            "isSensor": false
        }
        var newObj = CObj.DeserializeCObj(deadChickenObj, false);
        CObj.setBodyMass(newObj.body, 2);
        newObj.isConductor = false;
        newObj.gfx = new PIXI.Sprite(PIXI.Texture.fromFrame("chickendead.png"));
        newObj.gfx.anchor.x = 0.5;
        newObj.gfx.anchor.y = 0.63;
        newObj.gfx.scale.x = 0.65* window.addScale;
        newObj.gfx.scale.y = 0.65* window.addScale;
        newObj.x = this.x;
        newObj.y = this.y;
     //   world.removeBody(newObj.body);
        var shapes = [];
        for (var i = 0; i < newObj.body.shapes.length; ++i) {
            shapes.push(newObj.body.shapes[i]);
        }

       /* for (var i = 0; i < shapes.length; ++i) {
            newObj.body.removeShape(newObj.body.shapes[0]);
        }*/
        for (var i = 0; i < shapes.length; ++i) {
            shapes[i].collisionGroup = world.cgDYNAMIC;
            shapes[i].collisionMask = world.cgSTATIC;
       //     newObj.body.addShape(shapes[i]);
        }

    //    world.addBody(newObj.body);

        newObj.body.force[1]= - 18000;
        newObj.body.angularForce = 18000*(Math.random() - 0.5);

        PlayerData.inst.score += this.amount;
        gameStage.updateScore();

        Coin.generateTextParticle(this);
        gameStage.grilled ++;
        StageManager.inst.ol.addChildAt(newObj.gfx, 1);
        if (Chicken.count == 0 && gameStage.doProcess)
        {
            if (!gameStage.losing)
            gameStage.doLevelComplete();
        }
    }

    CObj.prototype.destroy.call(this);
}

Chicken.prototype.destroyFX = function() {
    var t = this;
    var chickenEffect = pool.Pop("chickeneffect");
  //  return;
    if (chickenEffect) {
    this.gfx.parent.removeChild(this.gfx);

    this.gfx = chickenEffect;
    this.gfx.scale.x = 0.95*window.addScale;
    this.gfx.scale.y = 0.95*window.addScale;
    this.updateGraphics();

    if (!this.gfx.parent)
        StageManager.inst.ol.addChildAt(chickenEffect, StageManager.inst.ol.children.length - 2);

    this.gfx.animationSpeed = 0.5;
    this.gfx.gotoAndPlay(0);
    }
    TweenMax.to(this.gfx.scale, 0.1, {x: 0.75* window.addScale, y: 0.75* window.addScale, yoyo:true, repeat:6});
    TweenMax.delayedCall(0.6, function () {
        if (t.gfx) {
            rp(t.gfx);
            pool.Push(t.gfx);
            t.gfx = null;
        }   t.destroy();

    });
}

Chicken.prototype.setElectricity = function(state){
    CObj.prototype.setElectricity.call(this);
    if (state && !this.preDestroy) {
        this.destroyFX();
        this.preDestroy = true;
        ZSound.Play("electro1");
    }
    //this.destroy();
    this.sElectricity = state;
}
extend(LiveObj, CObj, true);

function LiveObj(in_x,in_y,textname,in_maxHp,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.maxHp = in_maxHp;
    this._hp = in_maxHp;
        this.gfx.click = function(mouseData){

        this.gameobject.takeDamage(30);
    }
}

    LiveObj.prototype.takeDamage = function (dmg){
        this.hp -= dmg;
}

    LiveObj.prototype.destroy = function(){
        CObj.prototype.destroy.call(this);
    }

Object.defineProperty(LiveObj.prototype, 'hp' , {
    set: function (value) {

        if (value >= this.maxHp) {

            this._hp = this.maxHp;
        }
        else
        {
            this._hp = value;
            if (value <= 0)  this.destroy();
        }
        //
    },
    get: function () {
        return this._hp;
    }
});


/**
 * Created by KURWINDALLAS on 08.07.2014.
 */
extend(Generator, CObj, true);

function Generator(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.isConductor = true;
    if (!Generator.gens) Generator.gens = [];
    Generator.gens.push(this);
}


Generator.prototype.destroy = function () {
   if (this.doRemove) return;

   Generator.gens.splice(Generator.gens.indexOf(this), 1);

   CObj.prototype.destroy.call(this);
}

Generator.electrifyNeighbours = function(obj)
{
    //if (!obj.isConductor) return;
    if (!obj.connected) return;

    obj.sElectricity  = true;
    for (var i = 0; i < obj.connected.length; ++i)
    {
        if (!obj.connected[i].sElectricity && obj.connected[i].isConductor)
        {
            Generator.electrifyNeighbours(obj.connected[i]);
        }
    }
}

Generator.prototype.genProcess = function () {
    Generator.electrifyNeighbours(this);
}


Generator.resetElectricity = function()
{
    var objlen = CObj.objects.length;
    for (var i = 0; i < objlen; ++i)
    {
        if (CObj.objects[i].body)
        {

            CObj.objects[i].sElectricity = false;
        }
    }
}
/**
 * Created by KURWINDALLAS on 16.07.2014.
 */
extend(PanelSpeed, CObj, true);

function PanelSpeed(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'panelSpeed';
}

PanelSpeed.prototype.init = function ()
{
    var mat = new p2.Material();
    for (var i = 0; i < world.materials.length; ++i)
    {
        var cm = new p2.ContactMaterial(mat, world.materials[i],
            {
                surfaceVelocity: this.panelSpeed
            });
        world.addContactMaterial(cm);
    }

    var sl = this.body.shapes.length;
    for (i = 0; i < sl; ++i)
    {
        this.body.shapes[i].material = mat;
    }


    CObj.prototype.init.call(this);
}/**
 * Created by KURWINDALLAS on 20.07.2014.
 */
/**
 * Created by KURWINDALLAS on 16.07.2014.
 */
extend(Propeller, CObj, true);

function Propeller(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'power, direction, ';
}




Propeller.prototype.setElectricity = function(state){
    if (state) this.gfx.play(); else
        this.gfx.stop();
    CObj.prototype.setElectricity.call(this, state);
    //this.destroy();
    //   this.sElectricity = state;
}


Propeller.prototype.destroy = function ()
{
    if (this.doRemove) return;
    this.sensorObj.destroy();
    this.sensorObj.bodiesToPush
    this.sensorObj.owner = null;
    this.sensorObj = null;

    CObj.prototype.destroy.call(this);
}

Propeller.prototype.process = function()
{
    if (this.doRemove) return;

    CObj.prototype.process.call(this);

    this.sensorObj.x = this.x;
    this.sensorObj.y = this.y;
    this.sensorObj.rotation = this.rotation;
}

Propeller.prototype.init = function()
{
    var body = new p2.Body({mass: 1});
    var w = 240;
    var h = 90;
    var h2 = 18;
    var dir;
    if (this.gfx.scale.x > 0) dir = -1; else
        dir = 1;

    if (dir > 0)
    var v = [[0,-h2],[w, -h], [w, h], [0, h2]];
    else v = [[0,-h2],[0,h2],[-w, h], [-w, -h]];
    var shape = new p2.Convex(v);//new p2.Rectangle(w, h);

    body.addShape(shape);
    this.sensorObj = new CObj(this.x, this.y, null, body);
    this.sensorObj.dir = dir;
    var ownerBody = this.body;
    this.sensorObj.owner = this;
    this.sensorObj.bodiesToPush = [];
    this.sensorObj.sensor = true;
    this.sensorObj.body.mass = 0;
     gameStage.sensorObjBody = this.sensorObj.body;
   this.sensorObj.forcePower = 1250 / 20 * this.power;

    this.sensorObj.process = function()
    {
        if (this.doRemove) return;
        CObj.prototype.process.call(this);

        if (!this.owner.sElectricity) return;

        for (var i = 0; i < this.bodiesToPush.length;++i)
        {
            var angle = this.rotation + Math.PI / 2 * (this.dir - 1);
            var mc = Math.cos(angle);
            var ms = Math.sin(angle);
            var d = vec2.dist(this.bodiesToPush[i].position, this.body.position);
            var pow = 1 - Math.pow(d / 400, 1.8);
            this.bodiesToPush[i].applyForce([this.forcePower*pow*mc, this.forcePower*pow*ms], [this.bodiesToPush[i].position[0], this.bodiesToPush[i].position[1]]);
        }
    }

    this.sensorObj.onContactBegin = function(b)
    {
        if (b.motionState == p2.Body.STATIC) return;
        if (b == ownerBody) return;
        this.bodiesToPush.push(b);
    }

    this.sensorObj.onContactEnd = function(b)
    {
        if (b == ownerBody) return;

        var inx = this.bodiesToPush.indexOf(b);
        if (inx >= 0)
            this.bodiesToPush.splice(inx, 1);
    }

    CObj.prototype.init.call(this);
}/**
 * Created by KURWINDALLAS on 24.07.2014.
 */
extend(PowerField, CObj, true);

function PowerField(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

PowerField.prototype.destroy = function ()
{
    if (this.doRemove) return;

    CObj.prototype.destroy.call(this);
}

/*
PowerField.prototype.init = function()
{
    CObj.prototype.init.call(this);
}

 */

PowerField.prototype.setElectricity = function(state)
{

    CObj.prototype.setElectricity.call(this, state);

    if (!this.gfx) return;

    if (!this.sElectricity){
        if (this.gfx.currentFrame > 1) {
            this.gfx.loop = false;
            this.gfx.gotoAndStop(0);
        }
            for (var i = 0; i < this.body.shapes.length; ++i) {
                this.body.shapes[i].collisionMask = 8;
            }

    } else {
        if (!this.firstRun)
        {
            this.firstRun = true;
        } else {
            if (this.gfx.currentFrame != 6) {
                this.gfx.loop = false;
                this.gfx.play();
            }
            for (var i = 0; i < this.body.shapes.length; ++i) {
                this.body.shapes[i].collisionMask = world.cgDYNAMIC;
            }

        }
    }


}/**
 * Created by KURWINDALLAS on 29.07.2014.
 */
/**
 * Created by KURWINDALLAS on 13.07.2014.
 */
extend(Notification, CObj, true);

function Notification(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align,destroyAfter, ';
}


Notification.prototype.destroy = function()
{
    if (this.doRemove) return;

    CObj.prototype.destroy.call(this);
    this.textField.parent.removeChild(this.textField);
    this.textField = null;
    this.click = null;
}

Object.defineProperty(Notification.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {
        this._text = value;
        if (this.gfx && this.textField) {
            var tf = this.textField;
            tf.setText(value);
            tf.updateText();
            var b = tf.getLocalBounds();
            tf.x = -b.width / 2;
            tf.y = -b.height;
            this.updateGraphics();
        }
    }
});

Notification.prototype.updateGraphics=function()
{
    if (this.doRemove) return;
    CObj.prototype.updateGraphics.call(this);
    if (this.gfx) {

       // var b = this.gfx.getLocalBounds();
     //   this.textField.x = this.gfx.x - this.textField.width / 2;// - this.gfx.width * 0.25;
      //  this.textField.y = this.gfx.y - this.textField.height + this.textField.fs*this.textField.breaks;// - this.gfx.height * 0.25;

        if (!window.iphone3) {
        //    this.textField.scale.x = this.gfx.scale.x;
        //    this.textField.scale.y = this.gfx.scale.y;
        }
    }
}


Notification.removeNot = function(obj) {
    if (obj.doRemove) return;
    if (obj.preRemove) return;
    obj.preRemove = true;
    new TweenMax(obj.textField, 0.6, {alpha: 0});
    new TweenMax(obj.gfx, 0.6, {alpha: 0, onComplete: function (){obj.destroy();}});
}

Notification.prototype.init = function(){
    CObj.prototype.init.call(this);
    this.gfx.interactive = true;
    this.align = "left";
    this.fontSize = 20;//parseInt(this.fontSize);
    this.textField = CTextField.createTextField(this);
    this.gfx.addChild(this.textField);
    this.getText();
    this.text = this.text;

    var f = this.gfx;
    this.baseScaleX = f.scale.x;
    this.baseScaleY = f.scale.y;
    var bsX = this.baseScaleX;
    var bsY = this.baseScaleY;
    this.updateGraphics();
    var dis = this;
    this.gfx.click = function (){
        Notification.removeNot(dis);
    };
    this.gfx.tap = this.gfx.click;
    TweenMax.delayedCall(this.destroyAfter / 1000., Notification.removeNot, [dis]);
    this.rotation = -0.05;
    new TweenMax(this, 0.7, {rotation: 0.05, ease: Linear.easeNone, yoyo: true, repeat: -1});
    new TweenMax(this.gfx.scale, 0.7, {x: this.gfx.scale.x + 0.06, y: this.gfx.scale.y + 0.06, yoyo: true, repeat: -1});

}/**
 * Created by KURWINDALLAS on 29.07.2014.
 */
extend(CNotArrow, CObj, true);

function CNotArrow(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'objectsToPoint, ';
}


CNotArrow.prototype.process = function()
{
    var dx = this.x - this.basePositionX;
    var dy = this.y - this.basePositionY;
    var d = Math.sqrt(dx*dx + dy*dy);
    if (d != 0) {
        dx /= d;
        dy /= d;
        this.rotation = Math.atan2(dx, dy);
    }
   this.x = this.left;
   this.y = this.top;

    CObj.prototype.process.call(this);
}

CNotArrow.prototype.init = function()
{
    this.gfx = new PIXI.DisplayObjectContainer();
    this.updateGraphics();
    var v = new PIXI.Sprite(PIXI.Texture.fromFrame("arrow1.png"));
    v.anchor.x = 0.5;
    v.anchor.y = 0;
    new TweenMax(v, 2, {y: v.y - 15, yoyo: true, repeat: -1});
    this.gfx.addChild(v);
    StageManager.inst.fg.addChild(this.gfx);

    this.basePositionX = this.x;
    this.basePositionY = this.y;

    var objectsToPoint = this.objectsToPoint.split(";");
    var objList = [];
    var obj;
    for (var i = 0; i < objectsToPoint.length; ++i)
    {
        obj = CObj.getById(objectsToPoint[i]);
        if (obj) objList.push({left: obj.x, top: obj.y});

    }
    this.left = objList[0].left;
    this.top = objList[0].top;
    this.x = objList[0].left;
    this.y = objList[0].top;
    new TweenMax(this, 3, {  bezier:
   {
       curviness:1,
       values:objList
   },  ease: Linear.easeNone, repeat: -1, yoyo: true});
}

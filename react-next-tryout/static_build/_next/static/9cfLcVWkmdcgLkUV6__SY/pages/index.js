(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var r=n("o0o1"),o=n.n(r);function i(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(f){return void n(f)}c.done?e(a):Promise.resolve(a).then(r,o)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=n("q1tI"),p=n.n(l),h=n("YFqc"),v=n.n(h),y=n("vcXL"),d=n.n(y),m=p.a.createElement;var b=function(){return m(p.a.Fragment,null,m("p",null,"TestComp1"))},w=p.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var k=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(f,t);var e,n,r,a=g(f);function f(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),a.apply(this,arguments)}return e=f,n=[{key:"render",value:function(){return w("div",null,w("div",null,this.props.title),w("div",null,w(b,null),w("img",{src:this.props.imageUrl}),w(v.a,{href:"/page1"},w("a",null,"page1"))))}}],r=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d()("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",{title:n.title,imageUrl:n.url});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function c(t){i(u,r,o,c,a,"next",t)}function a(t){i(u,r,o,c,a,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}()}],n&&u(e.prototype,n),r&&u(e,r),f}(l.Component)},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk");function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var f=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var l,p=s(n("q1tI")),h=n("QmWs"),v=n("g/15"),y=f(n("nOHt")),d=n("elyg");function m(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var b=new Map,w=window.IntersectionObserver,g={};function k(){return l||(w?l=new w((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var _=function(t){i(n,t);var e=a(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var u=t(o,i);return e=o,n=i,r=u,u}}((function(t,e){return{href:(0,d.addBasePath)(m(t)),as:e?(0,d.addBasePath)(m(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),u=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var a=window.location.pathname;u=(0,h.resolve)(a,u),c=c?(0,h.resolve)(a,c):u,t.preventDefault();var f=o.props.scroll;null==f&&(f=c.indexOf("#")<0),y.default[o.props.replace?"replace":"push"](u,c,{shallow:o.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();y.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),u={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),p.default.cloneElement(i,u)}}]),n}(p.Component);e.default=_},"m0L+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["m0L+",0,2,1]]]);
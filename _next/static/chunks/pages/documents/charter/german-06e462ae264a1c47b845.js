_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"2xcp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents/charter/german",function(){return n("RQVa")}])},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},RQVa:function(e,t,n){"use strict";n.r(t);var r=n("fV6B");t.default=Object(r.a)("/documents/charter/german/2019/")},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),u=n("elyg"),i=n("nOHt"),a=n("vNVm"),f={};function s(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",l=c.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,u.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),p=l.href,d=l.as,y=e.children,v=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof y&&(y=c.default.createElement("a",null,y));var O=c.Children.only(y),j=O&&"object"===typeof O&&O.ref,g=(0,a.useIntersection)({rootMargin:"200px"}),w=r(g,2),_=w[0],E=w[1],R=c.default.useCallback((function(e){_(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,_]);(0,c.useEffect)((function(){var e=E&&t&&(0,u.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,E,m,t,n]);var x={ref:R,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:a,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,p,d,v,b,h,m)},onMouseEnter:function(e){(0,u.isLocalURL)(p)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var M="undefined"!==typeof m?m:n&&n.locale,L=(0,u.getDomainLocale)(d,M,n&&n.locales,n&&n.domainLocales);x.href=L||(0,u.addBasePath)((0,u.addLocale)(d,M,n&&n.defaultLocale))}return c.default.cloneElement(O,x)};t.default=l},fV6B:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("nKUr"),o=n("1OyB"),c=n("vuIU"),u=n("Ji7U"),i=n("md7G"),a=n("foSv"),f=n("nOHt"),s=n("g4pe"),l=n.n(s),p=n("YFqc"),d=n.n(p),y=n("q1tI");function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(a.a)(e);if(t){var o=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}function b(e){return Object(f.withRouter)(function(t){Object(u.a)(i,t);var n=v(i);function i(){return Object(o.a)(this,i),n.apply(this,arguments)}return Object(c.a)(i,[{key:"componentDidMount",value:function(){this.props.router.replace(e)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)("title",{children:"Redirecting \u2026"}),Object(r.jsx)("meta",{name:"robots",content:"noindex"})]}),Object(r.jsx)(d.a,{href:e,children:Object(r.jsx)("a",{children:"Click here to be redirected"})})]})}}]),i}(y.Component))}},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var o=n("JX7q");function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,c.useRef)(),f=(0,c.useState)(!1),s=r(f,2),l=s[0],p=s[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||l||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,u=r.elements;return u.set(e,t),c.observe(e),function(){u.delete(e),c.unobserve(e),0===u.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,c.useEffect)((function(){i||l||(0,u.default)((function(){return p(!0)}))}),[l]),[d,l]};var c=n("q1tI"),u=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var a=new Map},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}},[["2xcp",0,2,1]]]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{7814:function(d,b,a){"use strict";var e=a(9088),c=a(7686),f=a.n(c);b.Z=function(){return(0,e.jsx)("span",{className:f().dots,"aria-hidden":!0})}},6250:function(e,b,a){"use strict";a.r(b),a.d(b,{LAYOUT:function(){return r},"default":function(){return s}});var f=a(9088),c=a(9081),g=a.n(c),h=a(2866),i=a(2962),j=a(8855),d=a(8713),k=a.n(d),l=a(6082);function m(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var n=function(b){var c,d,q=b.filePath,e=b.renderer,r=void 0===e?"canvas":e,g=b.loop,s=void 0===g||g,h=b.autoplay,t=void 0===h||h,n=b.className,o=b.rootMargin,x=(0,j.useRef)(null),y=(0,j.useRef)(null),z=(0,j.useRef)(!1),p=(c=(0,l.YD)({rootMargin:void 0===o?"15%":o}),d=2,function(a){if(Array.isArray(a))return a}(c)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(c,d)||function(a,c){if(a){if("string"==typeof a)return m(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return m(a,c)}}(c,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=p[0],v=p[1],w=(0,j.useCallback)(function(a){x.current=a,u(a)},[u]);return(0,j.useEffect)(function(){!z.current&&v?(z.current=!0,a.e(47).then(a.t.bind(a,8343,23)).then(function(a){y.current=a.loadAnimation({container:x.current,renderer:r,loop:s,autoplay:t,path:q,rendererSettings:{preserveAspectRatio:"xMidYMid meet"}}),y.current.addEventListener("data_ready",function(){x.current.classList.add(k().isLoaded)})})):y.current&&(v?y.current.play():y.current.pause())},[v,r,q,s,t]),(0,j.useEffect)(function(){return function(){y.current&&y.current.destroy()}},[]),(0,f.jsx)("div",{className:(0,i.cn)(k().lottie,void 0===n?null:n),ref:w})},o=a(7814),p=a(2093),q=a(6155),r={horizontal:"horizontal",vertical:"vertical",verticalMirrored:"verticalMirrored"},s=function(a){var c=a.title,b=a.description,d=a.cta,e=void 0===d?null:d,j=a.lottieJson,k=void 0===j?null:j,l=a.layout,m=void 0===l?r.horizontal:l,s=a.isDark,t=a.index;return(0,f.jsx)("div",{className:(0,i.cn)(g().textAnimation,m===r.verticalMirrored&&g().vertical,g()[m],void 0!==s&&s&&g().isDark),children:(0,f.jsxs)("div",{className:(0,i.cn)("container",g().container),children:[(0,f.jsx)(q.Z,{distance:60,rotate:10,children:k&&(0,f.jsx)(n,{filePath:k,className:g().lottie,rootMargin:0===(void 0===t?null:t)?"-13%":"15%"})}),(0,f.jsxs)("div",{className:g().text,children:[c&&(0,f.jsxs)("h2",{className:(0,i.cn)("hm-50 hd-80",g().title),children:[(0,f.jsx)(o.Z,{}),c]}),(0,f.jsxs)("div",{className:g().content,children:[Array.isArray(b)?(0,f.jsx)(p.ZP,{className:(0,i.cn)("pm-16 hd-20",g().description),blocks:b,noStyle:!0}):(0,f.jsx)("p",{className:(0,i.cn)("pm-16 hd-20",g().description),children:b}),e&&(0,f.jsx)(h.Z,{variant:h.W.rounded,link:e,className:g().cta,inverted:!0})]})]})]})})}},7686:function(a){a.exports={dots:"dots_dots__nGOi0",isDark:"dots_isDark__c91rd"}},8713:function(a){a.exports={lottie:"lottie_lottie__mmQqj",isLoaded:"lottie_isLoaded__Mqaoj"}},9081:function(a){a.exports={textAnimation:"textAnimation_textAnimation__pxWgX",text:"textAnimation_text__pUfgJ",vertical:"textAnimation_vertical__1CnsZ",verticalMirrored:"textAnimation_verticalMirrored__sph8h",lottie:"textAnimation_lottie__h0_i3",horizontal:"textAnimation_horizontal__qZ_3o",content:"textAnimation_content__Coh_a",title:"textAnimation_title__OmZSo",description:"textAnimation_description__O86UP",cta:"textAnimation_cta__2fSHv",container:"textAnimation_container__4JKKL"}}}])
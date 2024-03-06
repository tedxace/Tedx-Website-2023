"use strict";(self.webpackChunktedx_ace=self.webpackChunktedx_ace||[]).push([[338],{5338:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(9439),i=n(2791),a=n(8858),s=n(3791),o=n(9806),c=n(1632),l=n(184),u=function(e){var t=e.details.speaker,n=t.image,r=t.name,i=t.position,a=t.text,s=t.list;return(0,l.jsxs)("article",{className:"flex flex-col gap-4 md:gap-10 w-full h-full md:grid md:grid-cols-[1fr_1fr] overflow-hidden",children:[(0,l.jsx)("div",{className:"grid place-items-center",children:(0,l.jsx)("img",{src:n,alt:r,className:"w-[50%] object-cover h-full rounded-md md:w-auto drop-shadow-2xl"})}),(0,l.jsxs)("div",{className:"flex flex-col items-center gap-3 md:gap-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-lg sm:text-xl md:text-2xl lg:text-4xl text-tedx-white/90 font-bold text-center",children:r}),(0,l.jsx)("p",{className:"text-base text-md md:text-lg lg:text-xl text-tedx-white/50 font-semibold text-center",children:i})]}),null===a||void 0===a?void 0:a.map((function(e,t){return(0,l.jsx)("p",{className:"text-xs sm:text-sm md:text-md py-1 lg:text-lg px-3",children:e},t)})),(0,l.jsx)("ul",{className:"list-disc pl-4 md:pl-10 text-xs py-2 sm:text-sm md:text-md lg:text-lg",children:null===s||void 0===s?void 0:s.map((function(e,t){return(0,l.jsx)("li",{children:e},t)}))})]})]})},d={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},f=function(e){var t=e.details,n=e.handleClose;return(0,l.jsx)(a.E.section,{className:"fixed top-0 left-0 h-screen z-[999] w-full grid place-items-center bg-tedx-dark/80 overflow-hidden",onClick:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,l.jsxs)(a.E.article,{className:"bg-tedx-blue/60 w-[90%] relative h-[70%] sm:h-[80%] p-2 md:p-4 md:w-[80%] md:h-[70%] grid place-items-center rounded-lg",onClick:function(e){return e.stopPropagation()},variants:d,initial:"hidden",animate:"visible",exit:"exit",children:[(0,l.jsx)(u,{details:t}),(0,l.jsx)(a.E.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:n,className:"absolute top-5 right-5",children:(0,l.jsx)(o.G,{className:"h-8 w-8",icon:c.YIN})})]})})},m=function(e){var t=e.speakers,n=(0,i.useState)(!1),c=(0,r.Z)(n,2),u=c[0],d=c[1],m=(0,i.useState)(!1),p=(0,r.Z)(m,2),h=p[0],x=p[1],v=(0,i.useState)({}),g=(0,r.Z)(v,2),y=g[0],w=g[1],j=function(){d(!1)};return(0,i.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<3&&x(!0)}),[null===t||void 0===t?void 0:t.length]),(0,l.jsxs)("section",{className:"relative",children:[(0,l.jsx)("header",{id:"speakers",className:" ".concat(h?"h-auto":""),children:(0,l.jsx)("h2",{className:"text-center uppercase my-0 p-0 ".concat(h?"text-md md:text-lg":"text-xl md:text-2xl lg:text-3xl font-bold"),children:h?"Heads":"Speakers"})}),(0,l.jsx)("article",{className:"flex flex-wrap md:px-24 lg-px-32 justify-center gap-3 items-center py-10",children:null===t||void 0===t?void 0:t.map((function(e){var t=e.name,n=e.image,r=e.position,i=e.social;return(0,l.jsxs)(a.E.section,{whileHover:{scale:1.02},onTap:{scale:.98},className:"group flex flex-col justify-center items-center clip md:clip-path-speakerPolygon cursor-pointer bg-tedx-blue/30 bg-clip-border gap-y-2 ".concat(h?"px-12 py-2":"p-2"," transition-opacity duration-200 hover:opacity-100 opacity-100 md:opacity-80 border-transparent border-b-2 hover:border-tedx-white rounded-md md:w-[40vh] w-[25vh] h-[25vh] min-w-[300px] min-h-[300px]  md:h-[40vh] overflow-hidden"),onClick:function(t){t.stopPropagation(),u?j():d(!0),w({speaker:e})},children:[(0,l.jsx)("img",{loading:"lazy",src:n,alt:t,className:"h-full max-h-[220px] w-full md:w-[150px] object-contain md:h-[150px] lg:h-[200px] lg:w-[200px] ease-in-out ".concat(h?"rounded-full":"rounded-none")}),(0,l.jsx)("h3",{className:"transition-transform text-center text-sm md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0",children:t}),h?(0,l.jsx)(a.E.a,{href:i[1],className:"relative w-full flex justify-center items-center rounded-full",rel:"noreferrer",target:"_blank",whileHover:{scale:1.02},children:(0,l.jsx)(o.G,{className:"md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 duration-200",icon:i[0]})}):null,(0,l.jsx)("h4",{className:"visible md:invisible group-hover:visible text-xs sm:text-sm md:text-lg text-center w-[90%] md:w-[".concat(h?"80%":"60%","]"),children:r})]},t)}))}),(0,l.jsx)("footer",{children:h?null:(0,l.jsx)(s.M,{initial:!1,mode:"wait",children:u&&(0,l.jsx)(f,{details:y,handleClose:j})})})]})}},3791:function(e,t,n){n.d(t,{M:function(){return b}});var r=n(3433),i=n(9439),a=n(2791),s=n(8938),o=n(2199);function c(){var e=(0,a.useRef)(!1);return(0,o.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var l=n(7762),u=n(131),d=n(9829),f=n(5671),m=n(3144),p=n(136),h=n(7277),x=function(e){(0,p.Z)(n,e);var t=(0,h.Z)(n);function n(){return(0,f.Z)(this,n),t.apply(this,arguments)}return(0,m.Z)(n,[{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){var n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return this.props.children}}]),n}(a.Component);function v(e){var t=e.children,n=e.isPresent,r=(0,a.useId)(),i=(0,a.useRef)(null),s=(0,a.useRef)({width:0,height:0,top:0,left:0});return(0,a.useInsertionEffect)((function(){var e=s.current,t=e.width,a=e.height,o=e.top,c=e.left;if(!n&&i.current&&t&&a){i.current.dataset.motionPopId=r;var l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(a,"px !important;\n            top: ").concat(o,"px !important;\n            left: ").concat(c,"px !important;\n          }\n        ")),function(){document.head.removeChild(l)}}}),[n]),a.createElement(x,{isPresent:n,childRef:i,sizeRef:s},a.cloneElement(t,{ref:i}))}var g=function(e){var t=e.children,n=e.initial,r=e.isPresent,i=e.onExitComplete,s=e.custom,o=e.presenceAffectsLayout,c=e.mode,f=(0,d.h)(y),m=(0,a.useId)(),p=(0,a.useMemo)((function(){return{id:m,initial:n,isPresent:r,custom:s,onExitComplete:function(e){f.set(e,!0);var t,n=(0,l.Z)(f.values());try{for(n.s();!(t=n.n()).done;){if(!t.value)return}}catch(r){n.e(r)}finally{n.f()}i&&i()},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),o?void 0:[r]);return(0,a.useMemo)((function(){f.forEach((function(e,t){return f.set(t,!1)}))}),[r]),a.useEffect((function(){!r&&!f.size&&i&&i()}),[r]),"popLayout"===c&&(t=a.createElement(v,{isPresent:r},t)),a.createElement(u.O.Provider,{value:p},t)};function y(){return new Map}var w=n(7497);var j=function(e){return e.key||""};var b=function(e){var t=e.children,n=e.custom,l=e.initial,u=void 0===l||l,d=e.onExitComplete,f=e.exitBeforeEnter,m=e.presenceAffectsLayout,p=void 0===m||m,h=e.mode,x=void 0===h?"sync":h;f&&(x="wait");var v=function(){var e=c(),t=(0,a.useState)(0),n=(0,i.Z)(t,2),r=n[0],o=n[1],l=(0,a.useCallback)((function(){e.current&&o(r+1)}),[r]);return[(0,a.useCallback)((function(){return s.Z_.postRender(l)}),[l]),r]}(),y=(0,i.Z)(v,1)[0],b=(0,a.useContext)(w.p).forceRender;b&&(y=b);var E,k=c(),N=function(e){var t=[];return a.Children.forEach(e,(function(e){(0,a.isValidElement)(e)&&t.push(e)})),t}(t),C=N,P=new Set,R=(0,a.useRef)(C),Z=(0,a.useRef)(new Map).current,L=(0,a.useRef)(!0);if((0,o.L)((function(){L.current=!1,function(e,t){e.forEach((function(e){var n=j(e);t.set(n,e)}))}(N,Z),R.current=C})),E=function(){L.current=!0,Z.clear(),P.clear()},(0,a.useEffect)((function(){return function(){return E()}}),[]),L.current)return a.createElement(a.Fragment,null,C.map((function(e){return a.createElement(g,{key:j(e),isPresent:!0,initial:!!u&&void 0,presenceAffectsLayout:p,mode:x},e)})));C=(0,r.Z)(C);for(var z=R.current.map(j),S=N.map(j),I=z.length,M=0;M<I;M++){var A=z[M];-1===S.indexOf(A)&&P.add(A)}return"wait"===x&&P.size&&(C=[]),P.forEach((function(e){if(-1===S.indexOf(e)){var t=Z.get(e);if(t){var r=z.indexOf(e);C.splice(r,0,a.createElement(g,{key:j(t),isPresent:!1,onExitComplete:function(){Z.delete(e),P.delete(e);var t=R.current.findIndex((function(t){return t.key===e}));if(R.current.splice(t,1),!P.size){if(R.current=N,!1===k.current)return;y(),d&&d()}},custom:n,presenceAffectsLayout:p,mode:x},t))}}})),C=C.map((function(e){var t=e.key;return P.has(t)?e:a.createElement(g,{key:j(e),isPresent:!0,presenceAffectsLayout:p,mode:x},e)})),a.createElement(a.Fragment,null,P.size?C:C.map((function(e){return(0,a.cloneElement)(e)})))}}}]);
//# sourceMappingURL=338.0094e932.chunk.js.map
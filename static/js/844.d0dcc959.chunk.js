"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[844],{4832:function(n,e,t){t.d(e,{Z:function(){return v}});var r,a,i,c=t(168),o=t(6031),u=o.ZP.ul(r||(r=(0,c.Z)([""]))),s=t(6871),p=t(501),f=o.ZP.li(a||(a=(0,c.Z)([""]))),l=(0,o.ZP)(p.OL)(i||(i=(0,c.Z)(["\n  font-size: 14px;\n  color: black;\n\n  :hover {\n    font-size: 16px;\n    font-weight: 700;\n  }\n"]))),h=t(184),d=function(n){var e=n.id,t=n.title,r=(0,s.TH)();return(0,h.jsx)(f,{children:(0,h.jsx)(l,{to:"/movies/".concat(e),state:{from:r},children:t})})},v=function(n){var e=n.moviesArr;return(0,h.jsx)(u,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,h.jsx)(d,{title:t,id:e},e)}))})}},5315:function(n,e,t){t.d(e,{Hx:function(){return v},Y5:function(){return h},bI:function(){return l},hV:function(){return f},xc:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c),u=t(5562),s="https://api.themoviedb.org/3",p="3aee21951118aea271842c595cb04969",f=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/trending/movie/day?api_key=").concat(p));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),u.Notify.failure(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/search/movie?api_key=").concat(p,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),u.Notify.failure(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(p));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),u.Notify.failure(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(p));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),u.Notify.failure(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(p));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),u.Notify.failure(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},1844:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,c,o=t(2982),u=t(5861),s=t(885),p=t(7757),f=t.n(p),l=t(5562),h=t(5315),d=t(2791),v=t(501),x=t(5705),y=t(9e3),m=t(168),g=t(6031),b=(0,g.ZP)(x.l0)(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=(0,g.ZP)(x.gN)(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=g.ZP.button(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),k=g.ZP.span(c||(c=(0,m.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),_=t(184),j=function(n){var e=n.onSubmit,t=n.query;return(0,_.jsx)(x.J9,{initialValues:{search:null!==t&&void 0!==t?t:""},onSubmit:function(n){var t=n.search;return e(t)},children:(0,_.jsxs)(b,{children:[(0,_.jsxs)(Z,{type:"submit",children:[(0,_.jsx)(y.Vph,{size:24}),(0,_.jsx)(k,{children:"Search"})]}),(0,_.jsx)(w,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},N=t(4832),P=function(){var n=(0,d.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,v.lr)(),i=(0,s.Z)(a,2),c=i[0],p=i[1],x=c.get("query");(0,d.useEffect)((function(){if(x){var n=function(){var n=(0,u.Z)(f().mark((function n(e){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.bI)(e);case 2:if(0!==(t=n.sent).length){n.next=7;break}return r([]),l.Notify.info("Sorry, We find nothing, try another auery"),n.abrupt("return");case 7:r((0,o.Z)(t));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(x)}}),[x]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{onSubmit:function(n){n?n!==x?p({query:n}):l.Notify.info("You have already completed this search"):l.Notify.info("Please, input search query")},query:x}),t.length>0&&(0,_.jsx)(N.Z,{moviesArr:t})]})}}}]);
//# sourceMappingURL=844.d0dcc959.chunk.js.map
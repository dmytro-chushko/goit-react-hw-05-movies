"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[589],{4589:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n,a,c,u,s=r(5861),i=r(885),o=r(7757),f=r.n(o),p=r(5315),v=r(2791),h=r(6871),l=r(168),d=r(6031),x=d.ZP.ul(n||(n=(0,l.Z)([""]))),m=d.ZP.li(a||(a=(0,l.Z)([""]))),w=d.ZP.p(c||(c=(0,l.Z)([""]))),y=d.ZP.span(u||(u=(0,l.Z)(["\n  font-weight: 700;\n"]))),g=r(184),k=function(e){var t=e.author,r=e.content;return(0,g.jsxs)(m,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(y,{children:"Author:"})," ",t]}),(0,g.jsx)(w,{children:r})]})},Z=function(e){var t=e.reviewsArr;return(0,g.jsx)(x,{children:t.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,g.jsx)(k,{author:t,content:r},n)}))})},_=function(){var e=(0,h.UO)().movieId,t=(0,v.useState)([]),r=(0,i.Z)(t,2),n=r[0],a=r[1],c=(0,v.useState)("resolved"),u=(0,i.Z)(c,2),o=u[0],l=u[1];return(0,v.useEffect)((function(){var t=function(){var e=(0,s.Z)(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Hx)(t);case 2:if(0!==(r=e.sent).length){e.next=6;break}return l("rejected"),e.abrupt("return");case 6:a(r),l("resolved");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t(e)}),[e]),"rejected"===o?"We don't have any reviews for this movie":"resolved"===o?(0,g.jsx)(Z,{reviewsArr:n}):void 0}},5315:function(e,t,r){r.d(t,{Hx:function(){return d},Y5:function(){return h},bI:function(){return v},hV:function(){return p},xc:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u),i=r(5562),o="https://api.themoviedb.org/3",f="3aee21951118aea271842c595cb04969",p=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/trending/movie/day?api_key=").concat(f));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),i.Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/search/movie?api_key=").concat(f,"&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),i.Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/movie/").concat(t,"?api_key=").concat(f));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),i.Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(f));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),i.Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(f));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),i.Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=589.82f4f9ea.chunk.js.map
(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=n(1),l=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}))},m=n(4),s=n.n(m),p=n(7),f=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,a,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=rjZPECTloxHfg4Fp6VAlzzL11xEH3fSD"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.img,n=t.title,a=t.url;return r.a.createElement("div",{className:"card animate__animated animate__bounce"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null,n))},g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),1e3)}))}),[e]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__bounce"},t),u&&r.a.createElement("p",null,"Cargando ..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(d,{key:e.id,img:e})}))))},E=function(e){var t=Object(a.useState)(["Goku"]),n=Object(i.a)(t,2),c=n[0],u=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GiftExpertApp"),r.a.createElement(o,{setCategories:u}),r.a.createElement("hr",null),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};n(15);u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.63b4ddcd.chunk.js.map
(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{23:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(33),r=a.n(s),i=a(4),o=a.n(i),l=a(13),d=a(8),j=(a(23),a(6)),u=a(22),p=function(e,t){if("FETCH_DATA"===t.type){var a=!1;t.payload.nextUrl||(a=!0);var n=[].concat(Object(u.a)(e.data),Object(u.a)(t.payload.pokemons));return Object(j.a)(Object(j.a)({},e),{},{data:n,isLoading:!1,nextUrl:t.payload.nextUrl,isOver:a,isError:!1,isLoadMore:!1})}return"RESET_POKEMONS"===t.type?Object(j.a)(Object(j.a)({},e),{},{filterResult:null,isLoading:!1,isSearching:!1,isError:!1,isLoadMore:!1}):"FILTERING"===t.type?Object(j.a)(Object(j.a)({},e),{},{filterResult:[t.payload],isSearching:!1,isError:!1}):"SEARCHING"===t.type?Object(j.a)(Object(j.a)({},e),{},{filterResult:[],isSearching:!0}):"START_LOAD"===t.type?Object(j.a)(Object(j.a)({},e),{},{isLoadMore:!0}):"NOT_FOUND"===t.type?Object(j.a)(Object(j.a)({},e),{},{filterResult:[],isSearching:!1,isError:1}):Object(j.a)({},e)},b=a(11),m=a.n(b),f=(a(60),a(61),a(0)),O=function(e){var t=e.type;return Object(f.jsx)("div",{className:"badge badge--".concat(t),children:t})},h=a(12),x=function(e){var t=e.pokemon,a=t.types.map((function(e,t){return Object(f.jsx)(O,{type:e},t)}));return Object(f.jsx)(h.b,{to:"/".concat(t.id),children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"card__img",children:Object(f.jsx)("img",{src:t.img,alt:t.name})}),Object(f.jsx)("span",{className:"card__id",children:"#".concat(t.id)}),Object(f.jsx)("h3",{className:"card__title",children:t.name}),Object(f.jsx)("div",{className:"card__types",children:a})]})})},v=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],s=a[1],r=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight&&s(!0)};return Object(n.useEffect)((function(){return document.addEventListener("scroll",r),function(){document.removeEventListener("scroll",r)}}),[]),Object(n.useEffect)((function(){c&&e()}),[c]),[c,s]},g=(a(68),a(69),function(e){var t=e.className;return Object(f.jsx)("div",{className:"loading loading--".concat(t),children:Object(f.jsxs)("div",{className:"pokeball",children:[Object(f.jsx)("div",{className:"pokeball__top"}),Object(f.jsx)("div",{className:"pokeball__bottom"}),Object(f.jsx)("div",{className:"pokeball__line"}),Object(f.jsx)("div",{className:"pokeball__middle"})]})})}),_=function(e){var t=e.pokeList,a=e.fetchData,n=e.isOver,c=e.isLoadMore,s=v((function(){n||a(),i(!1)})),r=Object(d.a)(s,2),i=(r[0],r[1]),o=t.map((function(e){return Object(f.jsx)(x,{pokemon:e},e.id)}));return Object(f.jsxs)("div",{className:"dictionary",children:[Object(f.jsx)("div",{className:"dictionary__content",children:o}),Object(f.jsx)("div",{className:"dictionary__row",children:c&&!n?Object(f.jsx)(g,{className:"small"}):""})]})},y=(a(70),a.p+"static/media/pokemon.c12eb752.png"),N=function(){return console.log("ha"),Object(f.jsx)("a",{href:"/pokedex",children:Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("img",{src:y,alt:"Pokemon"})})})},k=(a(71),function(e){var t=e.getFilter,a=Object(n.useRef)(null);return Object(f.jsx)("div",{className:"search",children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a.current.value.toLowerCase())},children:[Object(f.jsx)("input",{className:"search__input",type:"text",placeholder:"Id or name",ref:a}),Object(f.jsx)("button",{className:"search__button",type:"submit",children:Object(f.jsx)("i",{className:"fas fa-search"})})]})})}),E=(a(72),a.p+"static/media/pokeballOpen.1dac896f.png"),w=function(){return Object(f.jsx)("div",{className:"err",children:Object(f.jsxs)("div",{className:"err__content",children:[Object(f.jsx)("div",{className:"err__img",children:Object(f.jsx)("img",{src:E,alt:"Pokeball"})}),Object(f.jsx)("div",{className:"err__text",children:Object(f.jsx)("h2",{children:"POKEMON NOT FOUND!"})})]})})},S=(a(73),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?c(!0):c(!1)};return Object(n.useEffect)((function(){return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}}),[]),Object(f.jsx)(f.Fragment,{children:a?Object(f.jsx)("button",{className:"scroll-top",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},children:Object(f.jsx)("i",{className:"fas fa-angle-double-up"})}):""})}),L=(a(74),a(2)),T=function(){var e,t=Object(L.g)().id,a=Object(n.useState)({name:"",id:0,dis:[],ad:[],types:[],imgDefault:"",imgFemale:"",height:0,weight:0}),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)("loading"),j=Object(d.a)(i,2),u=j[0],p=j[1],b=Object(n.useState)(0),h=Object(d.a)(b,2),x=h[0],v=h[1],_=Object(n.useState)([]),y=Object(d.a)(_,2),k=(y[0],y[1]),E=function(e){return e/10},w=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://pokeapi.co/api/v2/pokemon/"+t);case 2:return a=e.sent,n={id:a.data.id,name:a.data.name,img:a.data.sprites.front_default,types:a.data.types.map((function(e){return e.type.name}))},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(o.a.mark((function e(){var a,n,c,s,i,d,j,u,b,f,O,h,x,v,g,_,y,N;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://pokeapi.co/api/v2/pokemon/"+t);case 2:return a=e.sent,n=a.data.types.length,c=a.data.species.url,e.next=7,m.a.get(c);case 7:return s=e.sent,e.next=10,m.a.get(s.data.evolution_chain.url);case 10:return i=e.sent,e.next=13,w(i.data.chain.species.name);case 13:d=e.sent,j=i.data.chain.evolves_to,d.lv2=[],j.forEach(function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.species.name);case 2:a=e.sent,n=t.evolves_to,a.lv3=[],n.forEach(function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.species.name);case 2:n=e.sent,a.lv3.push(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d.lv2.push(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=[],b=[],f=[],O=0;case 21:if(!(O<n)){e.next=33;break}return e.next=24,m.a.get(a.data.types[O].type.url);case 24:(h=e.sent).data.damage_relations.double_damage_from.forEach((function(e){b.push(e.name)})),h.data.damage_relations.no_damage_to.forEach((function(e){b.push(e.name)})),h.data.damage_relations.double_damage_to.forEach((function(e){f.push(e.name)})),h.data.damage_relations.no_damage_from.forEach((function(e){f.push(e.name)})),u.push(a.data.types[O].type);case 30:O++,e.next=21;break;case 33:for(x=b.length-1;x>=0;x--)for(v=f.length-1;v>=0;v--)b[x]===f[v]&&(b.splice(x,1),f.splice(v,1));for(g=b.length-1;g>=0;g--)for(_=0;_<u.length;_++)b[g]===u[_].name&&b.splice(g,1);for(y=f.length-1;y>=0;y--)for(N=0;N<u.length;N++)f[y]===u[N].name&&f.splice(y,1);r({name:a.data.name,id:a.data.id,types:u,dis:Array.from(new Set(b)),ad:Array.from(new Set(f)),imgDefault:a.data.sprites.front_default,imgFemale:a.data.sprites.front_female,height:a.data.height,weight:a.data.weight}),k(d),p("done");case 39:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=8;break;case 4:e.prev=4,e.t1=e.catch(0),console.log(e.t1),p("error");case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[]),"error"===u?Object(f.jsx)(L.a,{to:"/error/404"}):"loading"===u?Object(f.jsx)(g,{className:"big"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{}),Object(f.jsx)("main",{children:Object(f.jsx)("div",{className:"main",style:{padding:0},children:Object(f.jsxs)("div",{className:"pokedetail",children:[Object(f.jsxs)("div",{className:"pokedetail__name",children:[Object(f.jsxs)("h1",{children:[s.name,Object(f.jsxs)("span",{children:["#",s.id]})]}),s.imgFemale?Object(f.jsxs)("select",{defaultValue:0,onChange:function(e){console.log(parseInt(e.target.value)),v(parseInt(e.target.value))},children:[Object(f.jsx)("option",{value:0,children:"Male"}),Object(f.jsx)("option",{value:1,children:"Female"})]}):""]}),Object(f.jsxs)("div",{className:"pokedetail__info",children:[Object(f.jsx)("div",{className:"avatar",children:Object(f.jsx)("img",{alt:s.name,src:x?s.imgFemale:s.imgDefault})}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsxs)("div",{className:"info__size",children:[Object(f.jsxs)("h3",{children:["Weight: ",Object(f.jsxs)("span",{children:[E(s.weight),"kg"]})]}),Object(f.jsxs)("h3",{children:["Height: ",Object(f.jsxs)("span",{children:[E(s.height),"m"]})]})]}),Object(f.jsxs)("div",{className:"info__type",children:[Object(f.jsx)("h3",{children:"Type: "}),"  ",(e=s.types,e.map((function(e,t){return Object(f.jsx)(O,{type:e.name},t)})))]}),Object(f.jsxs)("div",{className:"info__type",children:[Object(f.jsx)("h3",{children:"Advantage: "})," ",function(e){var t=[];return e.forEach((function(e,a){t.push(Object(f.jsx)(O,{type:e},a))})),t}(s.ad)]}),Object(f.jsxs)("div",{className:"info__type",children:[Object(f.jsx)("h3",{children:"Disavantage: "})," ",function(e){var t=[];return e.forEach((function(e,a){t.push(Object(f.jsx)(O,{type:e},a))})),t}(s.dis)]})]})]})]})})})]})},R=(a(75),a.p+"static/media/pokeball404.de8d4812.png"),F=function(){return Object(f.jsxs)("div",{className:"error",children:[Object(f.jsxs)("div",{className:"error__404",children:[Object(f.jsx)("span",{children:"4"}),Object(f.jsx)("img",{src:R,alt:"O"}),Object(f.jsx)("span",{children:"4"})]}),Object(f.jsxs)("div",{className:"error__content",children:[Object(f.jsx)("h2",{children:"Uh-oh!"}),Object(f.jsx)("p",{children:"You look lost on your journey!"})]}),Object(f.jsx)("div",{className:"error__btn",children:Object(f.jsx)(h.b,{to:"/",children:Object(f.jsxs)("button",{className:"btn",children:[Object(f.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Go back home"]})})})]})},D="https://pokeapi.co/api/v2/pokemon/",A={filterResult:null,isLoading:!0,data:[],nextUrl:D,isOver:!1,isSearching:!1,isLoadMore:!0,isError:1,isOpenPokedex:!1};var M=function(){var e=Object(n.useReducer)(p,A),t=Object(d.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.filterResult){e.next=18;break}return e.prev=1,c({type:"START_LOAD"}),e.next=5,m.a.get(a.nextUrl);case 5:return t=e.sent,n=t.data,s=n.results.map((function(e){return m.a.get(e.url)})),e.next=10,Promise.all(s);case 10:r=e.sent,i=r.map((function(e){var t=e.data.types.map((function(e){return e.type.name}));return{id:e.data.id,name:e.data.name,types:t,img:e.data.sprites.front_default}})),c({type:"FETCH_DATA",payload:{pokemons:i,nextUrl:n.next}}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return s(),function(){}}),[]),a.isLoading?Object(f.jsx)(g,{className:"big"}):2===a.isError?Object(f.jsx)(L.a,{to:"/error/404"}):Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(h.a,{basename:"/",children:Object(f.jsxs)(L.d,{children:[Object(f.jsxs)(L.b,{exact:!0,path:"/",children:[Object(f.jsx)(N,{}),Object(f.jsx)(S,{}),Object(f.jsx)(k,{getFilter:function(e){c({type:"SEARCHING"}),setTimeout(Object(l.a)(o.a.mark((function t(){var a,n,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=4;break}c({type:"RESET_POKEMONS"}),t.next=17;break;case 4:return t.prev=4,t.next=7,m.a.get(D+e);case 7:a=t.sent,n=a.data,s=n.types.map((function(e){return e.type.name})),r={id:n.id,name:n.name,types:s,img:n.sprites.front_default},c({type:"FILTERING",payload:r}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),c({type:"NOT_FOUND"});case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),1e3)}}),Object(f.jsx)("main",{children:Object(f.jsx)("div",{className:"main",children:a.isSearching?Object(f.jsx)(g,{className:"small"}):1===a.isError?Object(f.jsx)(w,{}):Object(f.jsx)(_,{isOver:!!a.filterResult||a.isOver,pokeList:a.filterResult?a.filterResult:a.data,fetchData:s,isLoadMore:a.isLoadMore})})})]}),Object(f.jsx)(L.b,{exact:!0,path:"/:id",children:Object(f.jsx)(T,{})}),Object(f.jsxs)(L.b,{path:"*",children:[Object(f.jsx)(N,{}),Object(f.jsx)(F,{})]})]})})})};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ecc1d166.chunk.js.map
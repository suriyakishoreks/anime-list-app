(this["webpackJsonpanime-list-app"]=this["webpackJsonpanime-list-app"]||[]).push([[0],[,,,,,,,,function(A,e,t){A.exports={landscapeCarousel:"LandscapeCarousel_landscapeCarousel__vK5tS",fadein:"LandscapeCarousel_fadein__2ORpq",poster:"LandscapeCarousel_poster__3vfQH",textContent:"LandscapeCarousel_textContent__CIRoD",title:"LandscapeCarousel_title__1_Ggt",synopsis:"LandscapeCarousel_synopsis__1nhAO",genre:"LandscapeCarousel_genre__331ev",btn:"LandscapeCarousel_btn__IrIZj",leftbtn:"LandscapeCarousel_leftbtn__2dfq6",rightbtn:"LandscapeCarousel_rightbtn__2JEoW",arrow:"LandscapeCarousel_arrow__3B8u3"}},,,,function(A,e,t){A.exports={row:"PortraitCarousel_row__3zFou",rowContent:"PortraitCarousel_rowContent__16zFZ",poster:"PortraitCarousel_poster__uzJJx",img:"PortraitCarousel_img__2mdOd",btn:"PortraitCarousel_btn__1NSlf",leftbtn:"PortraitCarousel_leftbtn__Tyja-",rightbtn:"PortraitCarousel_rightbtn__rWa11",arrow:"PortraitCarousel_arrow__1keGu"}},,,,,,function(A,e,t){A.exports={listing:"Listing_listing__1vMPz",listingContent:"Listing_listingContent__2ldQr",poster:"Listing_poster__oF1CS",img:"Listing_img__2U0Y1"}},function(A,e,t){A.exports={mainSection:"App_mainSection__KTABL",subMenu:"App_subMenu__L5ckY",header:"App_header__3OA0g",mainContent:"App_mainContent__lEd28"}},,,function(A,e,t){A.exports={searchBar:"SearchBar_searchBar__1eMKi",searchField:"SearchBar_searchField__3F3x-",searchButton:"SearchBar_searchButton__2_iRW"}},,,,,function(A,e,t){A.exports={logo:"Header_logo__1PObw",menu:"Header_menu__2hvRr"}},function(A,e,t){A.exports={error:"NoMatch_error__3wRtL"}},function(A,e,t){A.exports={anime:"Anime_anime__1meNi"}},function(A,e,t){A.exports={mainContent:"MainContent_mainContent__1Gfsa"}},function(A,e,t){A.exports={subMenu:"SubMenu_subMenu__3qlu2"}},function(A,e,t){A.exports={seasonFilter:"SeasonFilter_seasonFilter__1Ix4T"}},function(A,e,t){A.exports={genreFilter:"GenreFilter_genreFilter__2pZyv"}},function(A,e,t){A.exports={sortingFilter:"SortingFilter_sortingFilter__1YeCP"}},,,,,,,,,function(A,e,t){},,,,,function(A,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),r=t(20),c=t.n(r),s=t(35),i=t(11),o="UPDATE_CURRENTMOVIES",u="UPDATE_MOVIE",l="UPDATE_SEARCH",f="API_UPDATE",b="CLEAR_SEARCH",j=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],d={search:"",clearSearch:0,movie:null,currentMovies:[],movieList:[]};var g=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(i.a)(Object(i.a)({},A),{},{clearSearch:e.payload});case l:return Object(i.a)(Object(i.a)({},A),{},{search:e.payload});case u:return Object(i.a)(Object(i.a)({},A),{},{movie:e.payload});case o:return Object(i.a)(Object(i.a)({},A),{},{currentMovies:e.payload});case f:return Object(i.a)(Object(i.a)({},A),{},{movieList:e.payload});default:return Object(i.a)({},A)}},p=Object(s.a)(g),v=t(14),O=(t(43),t(16)),m=t(5);function h(A){return{type:l,payload:A}}var C=t(2),B=t(22),E=t.n(B),Q=t.p+"static/media/search.9e58d37c.svg",x=t(1);function I(){var A=Object(C.f)(),e=Object(v.c)((function(A){return A.search})),t=Object(v.c)((function(A){return A.clearSearch})),a=Object(v.b)(),r=Object(n.useState)(e),c=Object(m.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){a(h(s)),s.length>2&&A.push("/listing/search")}),400);return function(){clearTimeout(e)}}),[s]),Object(n.useEffect)((function(){i(""),a(h(s))}),[t]),Object(x.jsxs)("div",{className:E.a.searchBar,children:[Object(x.jsx)("input",{className:E.a.searchField,type:"text",placeholder:"Search for Animes",onChange:function(A){i(A.target.value)},value:s,name:"search",id:"search",autoComplete:"off"}),Object(x.jsx)("button",{tabIndex:"-1",className:E.a.searchButton,children:Object(x.jsx)("img",{src:Q,alt:"Search Icon"})})]})}var _=t(27),N=t.n(_);function P(){return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)("h1",{className:N.a.logo,children:"Anime List"}),Object(x.jsx)(O.b,{className:N.a.menu,to:"/",children:"Home"}),Object(x.jsx)("div",{children:Object(x.jsx)(I,{})})]})}var X=t(9),w=t.n(X),T=t(13),F=t(12),y=t.n(F),R="data:image/png;base64,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",D="data:image/png;base64,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";function L(A){return S.apply(this,arguments)}function S(){return(S=Object(T.a)(w.a.mark((function A(e){var t,n;return w.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch(e);case 3:return t=A.sent,console.log(t.status),A.next=7,t.json();case 7:return n=A.sent,A.abrupt("return",n);case 11:return A.prev=11,A.t0=A.catch(0),console.log(A.t0),A.abrupt("return",[]);case 15:case"end":return A.stop()}}),A,null,[[0,11]])})))).apply(this,arguments)}function U(A){var e=A.endPoint,t=Object(C.f)(),a=Object(n.useState)(!1),r=Object(m.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)([]),o=Object(m.a)(i,2),u=o[0],l=o[1],f=Object(n.useState)(.7*window.innerWidth),b=Object(m.a)(f,2),j=b[0],d=b[1],g=Object(n.useRef)(null);function p(){d(.7*window.innerWidth)}function v(A){"left"===A?g.current.scroll({left:g.current.scrollLeft-.7*j,behavior:"smooth"}):g.current.scroll({left:g.current.scrollLeft+.7*j,behavior:"smooth"})}return Object(n.useEffect)((function(){return window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}})),Object(n.useEffect)((function(){function A(){return(A=Object(T.a)(w.a.mark((function A(){var t;return w.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,L(e.url);case 2:t=A.sent,l(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[e.url,e.path]),0===u.length?null:Object(x.jsxs)("div",{className:y.a.row,onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},children:[Object(x.jsx)("h2",{children:e.id}),Object(x.jsxs)("div",{ref:g,className:y.a.rowContent,children:[c&&Object(x.jsx)("button",{className:"".concat(y.a.leftbtn," ").concat(y.a.btn),onClick:function(){v("left")},children:Object(x.jsx)("img",{className:y.a.arrow,src:R,alt:"Left Arrow"})}),u.map((function(A){return Object(x.jsx)("div",{onClick:function(){var e;e=A.mal_id,t.push("/anime/".concat(e))},className:y.a.poster,children:Object(x.jsx)("img",{className:y.a.img,src:A.image_url,alt:"img"})},A.mal_id)})),c&&Object(x.jsx)("button",{className:"".concat(y.a.rightbtn," ").concat(y.a.btn),onClick:function(){v("right")},children:Object(x.jsx)("img",{className:y.a.arrow,src:D,alt:"Right Arrow"})})]})]})}var Z=t(8),H=t.n(Z),W=t.p+"static/media/tag.f71f94a8.svg";function M(A){var e=A.endPoint,t=Object(C.f)(),a=Object(n.useState)(!1),r=Object(m.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)([]),o=Object(m.a)(i,2),u=o[0],l=o[1],f=Object(n.useState)(0),b=Object(m.a)(f,2),j=b[0],d=b[1];function g(A){d((function(e){var t=0;return"left"===A?t=e-1>0?e-1:u.length-1:"right"===A&&(t=e+1<u.length?e+1:0),t}))}return Object(n.useEffect)((function(){function A(){return(A=Object(T.a)(w.a.mark((function A(){var t;return w.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,L(e.url);case 2:t=A.sent,l(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[e.url,e.path]),Object(n.useEffect)((function(){var A=setTimeout((function(){d((function(A){return A+1<u.length?A+1:0}))}),5e3);return function(){return clearTimeout(A)}}),[u,j]),0===u.length?null:Object(x.jsxs)("div",{className:H.a.landscapeCarousel,onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},children:[c&&Object(x.jsx)("button",{className:"".concat(H.a.leftbtn," ").concat(H.a.btn),onClick:function(){g("left")},children:Object(x.jsx)("img",{className:H.a.arrow,src:R,alt:"Left Arrow"})}),Object(x.jsx)("img",{className:H.a.poster,src:u[j].image_url,alt:"test"}),Object(x.jsxs)("div",{className:H.a.textContent,onClick:function(){var A;A=u[j].mal_id,t.push("/anime/".concat(A))},children:[Object(x.jsx)("h3",{className:H.a.title,children:u[j].title}),Object(x.jsx)("p",{className:H.a.synopsis,children:u[j].synopsis.length>350?"".concat(u[j].synopsis.slice(0,350),"..."):u[j].synopsis}),Object(x.jsxs)("p",{className:H.a.genre,children:[Object(x.jsx)("img",{src:W,alt:"tag"})," \xa0",u[j].genres.map((function(A,e){return Object(x.jsx)("span",{children:"".concat(A.name,", ")},e)})),u[j].explicit_genres.map((function(A,e){return Object(x.jsx)("span",{children:"".concat(A.name,", ")},e)})),"Anime"]})]}),c&&Object(x.jsx)("button",{className:"".concat(H.a.rightbtn," ").concat(H.a.btn),onClick:function(){g("right")},children:Object(x.jsx)("img",{className:H.a.arrow,src:D,alt:"Right Arrow"})})]},u[j].mal_id)}var q=function(){var A=new Date,e=j[A.getDay()];return{id:"Airing Today",url:"https://api.jikan.moe/v3/schedule/".concat(e),path:e}},G=function(){return{id:"Top Airing",url:"https://api.jikan.moe/v3/top/anime/1/airing",path:"top"}},z=function(){return{id:"Upcoming Anime",url:"https://api.jikan.moe/v3/season/later",path:"anime"}};function k(){var A=Object(v.b)();return Object(n.useEffect)((function(){var e;A((e=1e3*Math.random(),{type:b,payload:e}))}),[]),Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(M,{endPoint:q()}),Object(x.jsx)(U,{endPoint:G()}),Object(x.jsx)(U,{endPoint:z()})]})}var J=t(18),Y=t.n(J);function V(){var A=Object(C.f)(),e=(Object(C.g)().id,Object(n.useState)([])),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(z()),s=Object(m.a)(c,2),i=s[0];s[1];return Object(n.useEffect)((function(){function A(){return(A=Object(T.a)(w.a.mark((function A(){var e;return w.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,L(i.url);case 2:e=A.sent,r(e[i.path]?e[i.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[i.url,i.path]),0===a.length?Object(x.jsx)("h3",{children:"No Results found!"}):Object(x.jsxs)("div",{className:Y.a.listing,children:[Object(x.jsx)("h2",{children:i.id}),Object(x.jsx)("div",{className:Y.a.listingContent,children:a.map((function(e){return Object(x.jsx)("div",{onClick:function(){!function(e){A.push("/anime/".concat(e))}(e.mal_id)},className:Y.a.poster,children:Object(x.jsx)("img",{className:Y.a.img,src:e.image_url,alt:"img"})},e.mal_id)}))})]})}var K=t(28),$=t.n(K);function AA(){var A=Object(C.f)();return Object(x.jsxs)("div",{className:$.a.error,children:[Object(x.jsx)("h4",{children:"The Page you requested is not available."}),Object(x.jsx)("button",{onClick:function(){A.push("/")},children:"Home"})]})}var eA=t(29),tA=t.n(eA);function nA(){Object(C.g)().id;return Object(x.jsx)("div",{className:tA.a.anime})}var aA=t(30),rA=t.n(aA);function cA(){return Object(x.jsx)(n.Fragment,{children:Object(x.jsx)("div",{className:rA.a.mainContent,children:Object(x.jsxs)(C.c,{children:[Object(x.jsx)(C.a,{exact:!0,path:"/",children:Object(x.jsx)(k,{})}),Object(x.jsx)(C.a,{path:"/anime/:id",children:Object(x.jsx)(nA,{})}),Object(x.jsx)(C.a,{path:"/listing/:id",children:Object(x.jsx)(V,{})}),Object(x.jsx)(C.a,{path:"*",children:Object(x.jsx)(AA,{})})]})})})}var sA=t(31),iA=t.n(sA),oA=t(32),uA=t.n(oA);function lA(){return Object(x.jsx)("div",{className:uA.a.seasonFilter})}var fA=t(33),bA=t.n(fA);function jA(){return Object(x.jsx)("div",{className:bA.a.genreFilter})}var dA=t(34),gA=t.n(dA);function pA(){return Object(x.jsx)("div",{className:gA.a.sortingFilter})}function vA(){return Object(x.jsxs)("div",{className:iA.a.subMenu,children:[Object(x.jsx)(lA,{}),Object(x.jsx)(jA,{}),Object(x.jsx)(pA,{})]})}var OA=t(19),mA=t.n(OA);function hA(){return Object(x.jsx)(n.Fragment,{children:Object(x.jsxs)(O.a,{children:[Object(x.jsxs)("div",{className:mA.a.mainSection,children:[Object(x.jsx)("div",{className:mA.a.header,children:Object(x.jsx)(P,{})}),Object(x.jsx)("div",{className:mA.a.mainContent,children:Object(x.jsx)(cA,{})})]}),Object(x.jsx)("div",{className:mA.a.subMenu,children:Object(x.jsx)(vA,{})})]})})}c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(v.a,{store:p,children:Object(x.jsx)(hA,{})})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.1b7c5e00.chunk.js.map
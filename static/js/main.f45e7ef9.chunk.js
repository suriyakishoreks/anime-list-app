(this["webpackJsonpanime-list-app"]=this["webpackJsonpanime-list-app"]||[]).push([[0],[,,,,,,,,function(A,e,t){A.exports={anime:"Anime_anime__1meNi",leftContainer:"Anime_leftContainer__1edQp",poster:"Anime_poster__-Sb9B",rightContainer:"Anime_rightContainer__1dBw0",synopsis:"Anime_synopsis__2Buhj",contentHeading:"Anime_contentHeading__1qLT6",contentCardOuter:"Anime_contentCardOuter__P6miH",contentCardInner:"Anime_contentCardInner__WRmYE",relatedList:"Anime_relatedList__2zWYo",relatedItem:"Anime_relatedItem__2jmAR",recommendationsPoster:"Anime_recommendationsPoster__2qHkk"}},,,,function(A,e,t){A.exports={landscapeCarousel:"LandscapeCarousel_landscapeCarousel__vK5tS",fadein:"LandscapeCarousel_fadein__2ORpq",poster:"LandscapeCarousel_poster__3vfQH",textContent:"LandscapeCarousel_textContent__CIRoD",title:"LandscapeCarousel_title__1_Ggt",synopsis:"LandscapeCarousel_synopsis__1nhAO",genre:"LandscapeCarousel_genre__331ev",btn:"LandscapeCarousel_btn__IrIZj",leftbtn:"LandscapeCarousel_leftbtn__2dfq6",rightbtn:"LandscapeCarousel_rightbtn__2JEoW",arrow:"LandscapeCarousel_arrow__3B8u3"}},,function(A,e,t){A.exports={row:"PortraitCarousel_row__3zFou",rowContent:"PortraitCarousel_rowContent__16zFZ",poster:"PortraitCarousel_poster__uzJJx",img:"PortraitCarousel_img__2mdOd",btn:"PortraitCarousel_btn__1NSlf",leftbtn:"PortraitCarousel_leftbtn__Tyja-",rightbtn:"PortraitCarousel_rightbtn__rWa11",arrow:"PortraitCarousel_arrow__1keGu"}},,function(A,e,t){A.exports={animeCard:"AnimeCard_animeCard__1de5y",scoreCard:"AnimeCard_scoreCard__2_wkJ",heading:"AnimeCard_heading__1j999",rating:"AnimeCard_rating__2zy-X",score:"AnimeCard_score__1otm9",details:"AnimeCard_details__2eYUF",genre:"AnimeCard_genre__1rSd2"}},,,function(A,e,t){A.exports={header:"AnimeHeader_header__2sy87",titleSection:"AnimeHeader_titleSection__3ziT_",title:"AnimeHeader_title__3Vq2D",titleEnglish:"AnimeHeader_titleEnglish__1J81J",infoSection:"AnimeHeader_infoSection__2Ugyd"}},function(A,e,t){A.exports={seasonFilter:"SeasonFilter_seasonFilter__1Ix4T",filterContainer:"SeasonFilter_filterContainer__3UQPz",filterDetail:"SeasonFilter_filterDetail__1t_sk",button:"SeasonFilter_button__6_02W"}},,,function(A,e,t){A.exports={logo:"Header_logo__1PObw",section:"Header_section__yC4XD",menuIcon:"Header_menuIcon__2z5kh"}},function(A,e,t){A.exports={title:"Listing_title__3QWvu",listing:"Listing_listing__1vMPz",poster:"Listing_poster__oF1CS",img:"Listing_img__2U0Y1"}},function(A,e,t){A.exports={scheduleFilter:"ScheduleFilter_scheduleFilter__N5krW",scheduleContainer:"ScheduleFilter_scheduleContainer__1dCxx",scheduleText:"ScheduleFilter_scheduleText__2rwg5",scheduleButton:"ScheduleFilter_scheduleButton__3j1A1"}},function(A,e,t){A.exports={mainSection:"App_mainSection__KTABL",subMenu:"App_subMenu__L5ckY",header:"App_header__3OA0g",mainContent:"App_mainContent__lEd28"}},,,,function(A,e,t){A.exports={searchBar:"SearchBar_searchBar__1eMKi",searchField:"SearchBar_searchField__3F3x-",searchButton:"SearchBar_searchButton__2_iRW"}},function(A,e,t){A.exports={genreFilter:"GenreFilter_genreFilter__2pZyv",titleContainer:"GenreFilter_titleContainer__2RAic",genreFilterInner:"GenreFilter_genreFilterInner__2YYld"}},function(A,e,t){A.exports={ratingFilter:"RatingFilter_ratingFilter__13oBs",titleContainer:"RatingFilter_titleContainer__bG94R",ratingContainer:"RatingFilter_ratingContainer__1TcsK"}},,,,,function(A,e,t){A.exports={subMenu:"SubMenu_subMenu__3qlu2",subMenuInner:"SubMenu_subMenuInner__1auhc"}},function(A,e,t){A.exports={container:"CheckBox_container__vBEmC",selected:"CheckBox_selected__3T2MO"}},function(A,e,t){A.exports={error:"NoMatch_error__3wRtL"}},function(A,e,t){A.exports={mainContent:"MainContent_mainContent__1Gfsa"}},function(A,e,t){A.exports={dropDown:"DropDown_dropDown__fUgUO"}},,,,,,,,,,function(A,e,t){},,,,,function(A,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(27),i=t.n(r),c=t(43),s=t(6),o="UPDATE_GENRE_FILTER",l="UPDATE_RATING_FILTER",u="UPDATE_SEARCH_FILTER",d="CLEAR_FILTER",j="INITIALIZE_FILTER",f="SET_WINDOW_VIEW",b="SET_MENU_STATUS",m="DESKTOP_VIEW",h="MOBILE_VIEW";function p(A){return A>1180?m:A>740?"INTERMEDIATE_VIEW":A>460?"TABLET_VIEW":h}var O={winter:{title:"Winter",id:"winter"},spring:{title:"Spring",id:"spring"},summer:{title:"Summer",id:"summer"},fall:{title:"Fall",id:"fall"}},g={0:{title:"Sunday",id:"sunday"},1:{title:"Monday",id:"monday"},2:{title:"Tuesday",id:"tuesday"},3:{title:"Wednesday",id:"wednesday"},4:{title:"Thursday",id:"thursday"},5:{title:"Friday",id:"friday"},6:{title:"Saturday",id:"saturday"}};function v(){for(var A=(new Date).getFullYear(),e={},t=Number(A);t>=1990;t--)e[t]={title:t,id:t};return e}var _={g:{title:"All Age",id:"g"},pg:{title:"Children",id:"pg"},pg13:{title:"Thirteen  +",id:"pg13"},r17:{title:"Seventeen +",id:"r17"},r:{title:"R +",id:"r"}},C={action:{title:"Action",id:1},adventure:{title:"Adventure",id:2},cars:{title:"Cars",id:3},comedy:{title:"Comedy",id:4},avanteGarde:{title:"Avante Garde",id:5},demons:{title:"Demons",id:6},mystery:{title:"Mystery",id:7},drama:{title:"Drama",id:8},ecchi:{title:"Ecchi",id:9},fantasy:{title:"Fantasy",id:10},game:{title:"Game",id:11},historical:{title:"Historical",id:13},horror:{title:"Horror",id:14},kids:{title:"Kids",id:15},martialArts:{title:"Martial Arts",id:17},mecha:{title:"Mecha",id:18},music:{title:"Music",id:19},parody:{title:"Parody",id:20},samurai:{title:"Samurai",id:21},romance:{title:"Romance",id:22},school:{title:"School",id:23},sciFi:{title:"Sci Fi",id:24},shoujo:{title:"Shoujo",id:25},shonen:{title:"Shounen",id:27},space:{title:"Space",id:29},sports:{title:"Sports",id:30},superPower:{title:"Super Power",id:31},vampire:{title:"Vampire",id:32},harem:{title:"Harem",id:35},sliceOfLife:{title:"Slice Of Life",id:36},superNatural:{title:"Supernatural",id:37},military:{title:"Military",id:38},police:{title:"Police",id:39},psychological:{title:"Psychological",id:40},suspense:{title:"Suspense",id:41},seinen:{title:"Seinen",id:42},josei:{title:"Josei",id:43},awardWinning:{title:"Award Winning",id:46},gourmet:{title:"Gourmet",id:47},workLife:{title:"Work Life",id:48}},x={searchQuery:"",pageNo:"1",orderBy:"members",sort:"desc",genre:"",rating:""},E={searchFilter:"",genreFilter:{filterSet:new Set,value:""},ratingFilter:{filterSet:new Set,value:""},clearFilter:!1,initializeFilter:!1,windowViewType:p(window.innerWidth),isMenuOpen:!1};var B=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(s.a)(Object(s.a)({},A),{},{clearFilter:e.payload});case u:return Object(s.a)(Object(s.a)({},A),{},{searchFilter:e.payload});case l:return Object(s.a)(Object(s.a)({},A),{},{ratingFilter:e.payload});case o:return Object(s.a)(Object(s.a)({},A),{},{genreFilter:e.payload});case j:return Object(s.a)(Object(s.a)({},A),{},{initializeFilter:e.payload});case f:return Object(s.a)(Object(s.a)({},A),{},{windowViewType:e.payload});case b:return Object(s.a)(Object(s.a)({},A),{},{isMenuOpen:e.payload});default:return Object(s.a)({},A)}},Q=Object(c.a)(B),I=t(3),N=(t(51),t(17));function w(A){return{type:u,payload:A}}function y(A){return{type:o,payload:A}}function S(A){return{type:l,payload:A}}var F=t(5),T=t(2),P=t(30),X=t.n(P),D=t.p+"static/media/search.9e58d37c.svg",R=t(0);function L(){var A=Object(T.f)(),e=Object(I.c)((function(A){return A.clearFilter})),t=Object(I.c)((function(A){return A.genreFilter})),a=Object(I.c)((function(A){return A.ratingFilter})),r=Object(I.b)(),i=Object(n.useState)(""),c=Object(F.a)(i,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){r(w(s)),(s.length>2||t.value||a.value)&&A.push("/listing/search?q=".concat(s,"&genre=").concat(t.value,"&rating=").concat(a.value))}),400);return function(){clearTimeout(e)}}),[s]),Object(n.useEffect)((function(){o(""),r(w(""))}),[e]),Object(R.jsxs)("div",{className:X.a.searchBar,children:[Object(R.jsx)("input",{className:X.a.searchField,type:"text",placeholder:"Search for Animes",onChange:function(A){o(A.target.value)},value:s,name:"search",id:"search",autoComplete:"off"}),Object(R.jsx)("button",{tabIndex:"-1",className:X.a.searchButton,children:Object(R.jsx)("img",{src:D,alt:"Search Icon"})})]})}var W=t.p+"static/media/menu.0a00e1e0.svg",k=t.p+"static/media/close.59f3bebe.svg",H=t(23),U=t.n(H);function M(){var A=Object(I.b)(),e=Object(I.c)((function(A){return A.windowViewType})),t=Object(I.c)((function(A){return A.isMenuOpen}));function a(e){A({type:b,payload:e})}return Object(R.jsxs)(n.Fragment,{children:[Object(R.jsx)(N.b,{className:U.a.logo,to:"/",children:"Anime List"}),Object(R.jsxs)("div",{className:U.a.section,children:[Object(R.jsx)(L,{}),e!==m&&(t?Object(R.jsx)("img",{className:U.a.menuIcon,onClick:function(){a(!1)},src:k,alt:"menuClose"}):Object(R.jsx)("img",{className:U.a.menuIcon,onClick:function(){a(!0)},src:W,alt:"menuOpen"}))]})]})}var q=t(7),Z=t.n(q),G=t(15),z=t(14),J=t.n(z),Y="data:image/png;base64,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",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA5nAAAOZwGPiYJxAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAfhQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe7yhUAAAAKd0Uk5TAAECAwQGBwgJCgsMDg8QERIUFRYXGRobHh8gISQlJygpKissLS8wMjQ2Nzg7PD4/QEFFRkdISUxOUVVWV1hZW1xdYGFlZmdoa2xtbm9yd3t/gIKDhoeIjI6Pk5WWmJqbnZ+gpaiqq6ytr7Cys7W2t7i5uru8vb6/wMPGysvMzdDR0tPU1tfY2dvf4eLj5OXm5+jp6uvs7e7v8PLz9PX29/j5+vv8/f6Ucmt/AAAG8ElEQVR42u3c+ZfNBRzG8RlEYdCeZRqhReuEFKVEm0pRTLvKUkYbI1pQKaWNLGmSlJmGz7/Zr3XOMHNOJ2fm+7yeP+Hzfp1zz733e29Ly8jahHufe/3dfYf7jn2+/c11y9paLGlXrOw+Xf9c/84npztLyuZsO1uD7JM7nSZh0zcOmr+q6r0bnafpm/TSmTr/zm26xokavZlf1oX303xHavDu+rmG2p8POVNj91h/DWNdY1yqmVtXw9uWcW7VxK2v4e4tAqL7E5Den4D0/gSk9ycgvT8B6f0JSO9PQHp/AtL7E5Den4D0/gSk9ycgvT8B6f0JSO9PwGjd01UEBG/BQBEQvPbeKgJy1/Z1FQHB21xFQPBuqSIgeT1FQPI6qwhI3qdFQPJuryIgeV1FQPS+KgKSN6OKgOQ9UQREb2sREL09RUD0vi8CotdXBCRvahUByesoAqJ3XREQvfFFQPZ6CcjegSIgeruLgOi9XARE754iIPttwO8EZG9bERC9R4qA6F15moDsdRUB0Zv6KwHZe7YIiN7EowRkb2kRkL3nCcheazcB2Zu0n4DszTxCQPY6CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIaOhmE0AAAQQQQAABBBBAAAGZAo4SQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAaN1NxBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAHNFXCMAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIICAZm4OAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEDB6BRwngAACCCCAAAIIIIAAAhI3lwACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAC/ts2uHm4gKfcPFvAwAI3zxbQ2+7m2QL2j3XzbAErnTxbwA/jnTxbwGoXzxZwYrKLZwtY5eDZAra7d7aAM5PcO1vAEufOFvCGa2cL+M6xR+TmXSwB/a2OnS3gcrfOFjDXqbMFeCpg5Ar45WIAeNihR+ru67sYAB506Oj+1enS0f2rw6mj+1ebW0f3/8Oto/vXAceO7l8vunZ0/7rbuaP7n/Qb0ej+tdm9o/vXMgeP7n/QK0B0/7rfxaP7f+ZxoOj+tcjJo/u/7+TR/b+d6ubJ/U/6Iji6/9nFbp7c318DhPdf6+b6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6a+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++ru5/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/qb/qa/6W/6m/6mv+lv+pv+pr/pb/rrr7/++uuvv/76669/zhbqH73rT+qfvCkH9U/e2B79o/eC/tGbPaB/9Lr1j96t+mfvI/2j16l/9l7VP3s/6h+9m/XP3lr9s7dP/+yd0j96E/XP3iz9s3eH/tlbqn/2VuifvcX6Z+8m/bN3lf7ZGzOgf/YO6Z+9Tfpn7wH9sze5X//s9eifvVX6Z29Kr/7Ze0b/7F16WP/sPap/9sZ9o3/25p3SP3tLzumfvTX6Z6/1bf2zd9ku/cM/Ddilf7iAD/UnQH8C9A8WsFN/AvQnQP9gAT36Z29Cj/4E6B8tYIf+BOhPgP7BArbrT4D+0QI+GGb/NW7VzI17ZTj5z6xwqcbu8aF/N3zkNmdq8DpPDNF/77WO1OjN2Hqh/KfXT3Cipm/+7vPl/+u1q50nYQv3DJZ/YHO706Rs1uqP//1fcr9tWT7NWaI2bXnXxh1fHO87tPedDWsXXeIg//f+BmieZkzoaEKrAAAAAElFTkSuQmCC";function K(A){return $.apply(this,arguments)}function $(){return($=Object(G.a)(Z.a.mark((function A(e){var t,n,a,r=arguments;return Z.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:null,A.prev=1,A.next=4,fetch(e,{signal:t});case 4:return n=A.sent,console.log(n.status),A.next=8,n.json();case 8:return a=A.sent,A.abrupt("return",a);case 12:return A.prev=12,A.t0=A.catch(1),console.log(A.t0),A.abrupt("return",[]);case 16:case"end":return A.stop()}}),A,null,[[1,12]])})))).apply(this,arguments)}function AA(A){var e,t=A.endPoint,a=Object(n.useRef)(null),r=Object(T.f)(),i=Object(n.useState)(!1),c=Object(F.a)(i,2),s=c[0],o=c[1],l=Object(n.useState)([]),u=Object(F.a)(l,2),d=u[0],j=u[1],f=Object(n.useState)(null===(e=a.current)||void 0===e?void 0:e.offsetWidth),b=Object(F.a)(f,2),m=b[0],h=b[1];function p(){var A;h(null===(A=a.current)||void 0===A?void 0:A.offsetWidth)}function O(A){"left"===A?a.current.scroll({left:a.current.scrollLeft-.85*m,behavior:"smooth"}):a.current.scroll({left:a.current.scrollLeft+.85*m,behavior:"smooth"})}return Object(n.useEffect)((function(){var A;return window.addEventListener("resize",p),h(null===(A=a.current)||void 0===A?void 0:A.offsetWidth),function(){return window.removeEventListener("resize",p)}}),[a.current]),Object(n.useEffect)((function(){function A(){return(A=Object(G.a)(Z.a.mark((function A(){var e;return Z.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,K(t.url);case 2:e=A.sent,j(e[t.path]?e[t.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[t.url,t.path]),0===d.length?null:Object(R.jsxs)("div",{className:J.a.row,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[Object(R.jsx)("h2",{children:t.id}),Object(R.jsxs)("div",{ref:a,className:J.a.rowContent,children:[s&&Object(R.jsx)("button",{className:"".concat(J.a.leftbtn," ").concat(J.a.btn),onClick:function(){O("left")},children:Object(R.jsx)("img",{className:J.a.arrow,src:Y,alt:"Left Arrow"})}),d.map((function(A){return Object(R.jsx)("div",{onClick:function(){var e;e=A.mal_id,r.push("/anime/".concat(e))},className:J.a.poster,children:Object(R.jsx)("img",{className:J.a.img,src:A.image_url,alt:"img"})},A.mal_id)})),s&&Object(R.jsx)("button",{className:"".concat(J.a.rightbtn," ").concat(J.a.btn),onClick:function(){O("right")},children:Object(R.jsx)("img",{className:J.a.arrow,src:V,alt:"Right Arrow"})})]})]})}var eA=t(12),tA=t.n(eA),nA=t.p+"static/media/tag.f71f94a8.svg";function aA(A){var e=A.endPoint,t=Object(I.c)((function(A){return A.windowViewType})),a=Object(T.f)(),r=Object(n.useState)(!1),i=Object(F.a)(r,2),c=i[0],s=i[1],o=Object(n.useState)([]),l=Object(F.a)(o,2),u=l[0],d=l[1],j=Object(n.useState)(0),f=Object(F.a)(j,2),b=f[0],m=f[1];function p(A){m((function(e){var t=0;return"left"===A?t=e-1>0?e-1:u.length-1:"right"===A&&(t=e+1<u.length?e+1:0),t}))}return Object(n.useEffect)((function(){function A(){return(A=Object(G.a)(Z.a.mark((function A(){var t;return Z.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,K(e.url);case 2:t=A.sent,d(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[e.url,e.path]),Object(n.useEffect)((function(){var A=setTimeout((function(){m((function(A){return A+1<u.length?A+1:0}))}),5e3);return function(){return clearTimeout(A)}}),[u,b]),0===u.length?null:Object(R.jsxs)("div",{className:tA.a.landscapeCarousel,onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},children:[c&&Object(R.jsx)("button",{className:"".concat(tA.a.leftbtn," ").concat(tA.a.btn),onClick:function(){p("left")},children:Object(R.jsx)("img",{className:tA.a.arrow,src:Y,alt:"Left Arrow"})}),Object(R.jsx)("img",{className:tA.a.poster,src:u[b].image_url,alt:"test"}),Object(R.jsxs)("div",{className:tA.a.textContent,onClick:function(){var A;A=u[b].mal_id,a.push("/anime/".concat(A))},children:[Object(R.jsx)("h3",{className:tA.a.title,children:u[b].title}),Object(R.jsx)("p",{className:tA.a.synopsis,children:u[b].synopsis.length>(t===h?200:350)?"".concat(u[b].synopsis.slice(0,t===h?200:350),"..."):u[b].synopsis}),Object(R.jsxs)("p",{className:tA.a.genre,children:[Object(R.jsx)("img",{src:nA,alt:"tag"})," \xa0",u[b].genres.map((function(A,e){return Object(R.jsx)("span",{children:"".concat(A.name,", ")},e)})),u[b].explicit_genres.map((function(A,e){return Object(R.jsx)("span",{children:"".concat(A.name,", ")},e)})),"Anime"]})]}),c&&Object(R.jsx)("button",{className:"".concat(tA.a.rightbtn," ").concat(tA.a.btn),onClick:function(){p("right")},children:Object(R.jsx)("img",{className:tA.a.arrow,src:V,alt:"Right Arrow"})})]},u[b].mal_id)}var rA=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?"https://api.jikan.moe/v3/anime/".concat(A,"/").concat(e):"https://api.jikan.moe/v3/anime/".concat(A)},iA=function(A,e){return{id:"".concat(A.title," ").concat(e.title),url:"https://api.jikan.moe/v3/season/".concat(e.id,"/").concat(A.id),path:"anime"}},cA=function(A){return{id:"Anime on ".concat(A.title),url:"https://api.jikan.moe/v3/schedule/".concat(A.id),path:A.id}},sA=function(A){return{id:"Search Results",url:"https://api.jikan.moe/v3/search/anime?q=".concat(A.searchQuery,"&page=").concat(A.pageNo,"&order_by=").concat(A.orderBy,"&sort=").concat(A.sort,"&genre=").concat(A.genre,"&rated=").concat(A.rating),path:"results"}},oA=function(){var A=new Date,e=g[A.getDay()].id;return{id:"Airing Today",url:"https://api.jikan.moe/v3/schedule/".concat(e),path:e}},lA=function(){return{id:"Top Airing",url:"https://api.jikan.moe/v3/top/anime/1/airing",path:"top"}},uA=function(){return{id:"Upcoming Anime",url:"https://api.jikan.moe/v3/season/later",path:"anime"}};function dA(){var A=Object(I.c)((function(A){return A.clearFilter})),e=Object(I.b)();return Object(n.useEffect)((function(){e({type:d,payload:!A})}),[]),Object(R.jsxs)(n.Fragment,{children:[Object(R.jsx)(aA,{endPoint:oA()}),Object(R.jsx)(AA,{endPoint:lA()}),Object(R.jsx)(AA,{endPoint:uA()})]})}var jA=t(24),fA=t.n(jA);function bA(){var A=Object(T.f)(),e=Object(T.g)(),t=Object(I.c)((function(A){return A.searchFilter})),a=Object(T.h)().id,r=Object(n.useState)(null),i=Object(F.a)(r,2),c=i[0],s=i[1],o=Object(n.useState)([]),l=Object(F.a)(o,2),u=l[0],d=l[1],j=Object(n.useState)("Results"),f=Object(F.a)(j,2),b=f[0],m=f[1];return Object(n.useEffect)((function(){var A=new AbortController;function e(){return(e=Object(G.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t.url,A.signal);case 2:n=e.sent,d(n[t.path]?n[t.path]:[]),A=null;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=setTimeout((function(){c&&function(A){e.apply(this,arguments)}(c)}),500);return function(){var e;null===(e=A)||void 0===e||e.abort(),clearTimeout(t)}}),[c]),Object(n.useEffect)((function(){var n=new URLSearchParams(e.search);"search"!==a||!(t.length<=2||n.get("q").length<=2)||n.get("rating")||n.get("genre")||A.push("/")}),[a,t,e]),Object(n.useEffect)((function(){var A=new URLSearchParams(e.search);if("season"===a){var t=A.get("year"),n=A.get("season"),r=v(),i=iA(O[n],r[t]);s(i),m(i.id)}else if("schedule"===a){var c=A.get("day"),o=cA(c=g[c]);s(o),m(o.id)}else if("search"===a){var l=x;l.searchQuery=A.get("q").length>2?A.get("q"):"",l.rating=A.get("rating"),l.genre=A.get("genre");var u=sA(l);s(u),m(u.id)}}),[a,e]),0===u.length?Object(R.jsx)("h3",{children:"No Results found!"}):Object(R.jsxs)(n.Fragment,{children:[Object(R.jsx)("h2",{className:fA.a.title,children:b}),Object(R.jsx)("div",{className:fA.a.listing,children:u.map((function(e){return Object(R.jsx)("div",{onClick:function(){!function(e){A.push("/anime/".concat(e))}(e.mal_id)},className:fA.a.poster,children:Object(R.jsx)("img",{className:fA.a.img,src:e.image_url,alt:"img"})},e.mal_id)}))})]})}var mA=t(39),hA=t.n(mA);function pA(){var A=Object(T.f)();return Object(R.jsxs)("div",{className:hA.a.error,children:[Object(R.jsx)("h4",{children:"The Page you requested is not available."}),Object(R.jsx)("button",{onClick:function(){A.push("/")},children:"Home"})]})}var OA=t(16),gA=t.n(OA);function vA(A){var e,t,n=A.anime;return Object(R.jsxs)("div",{className:gA.a.animeCard,children:[Object(R.jsxs)("div",{className:gA.a.scoreCard,children:[Object(R.jsx)("p",{className:gA.a.heading,children:"Score"}),Object(R.jsxs)("p",{className:gA.a.rating,children:[Object(R.jsx)("span",{className:gA.a.score,children:n.score})," \xa0by ",n.scored_by," users"]})]}),Object(R.jsx)("p",{className:gA.a.details,children:n.rating}),Object(R.jsx)("p",{className:gA.a.details,children:n.status}),null===(e=n.genres)||void 0===e?void 0:e.map((function(A){return Object(R.jsx)("div",{className:gA.a.genre,children:A.name},A.mal_id)})),null===(t=n.explicit_genres)||void 0===t?void 0:t.map((function(A){return Object(R.jsx)("div",{className:gA.a.genre,children:A.name},A.mal_id)}))]})}var _A=t(19),CA=t.n(_A);function xA(A){var e=A.anime;return Object(R.jsxs)("div",{className:CA.a.header,children:[Object(R.jsxs)("div",{className:CA.a.titleSection,children:[Object(R.jsx)("p",{className:CA.a.title,children:e.title}),Object(R.jsx)("p",{className:CA.a.titleEnglish,children:e.title_english})]}),Object(R.jsxs)("div",{className:CA.a.infoSection,children:[Object(R.jsx)("p",{children:e.premiered}),Object(R.jsxs)("p",{children:[e.episodes," episodes"]})]})]})}var EA=t(8),BA=t.n(EA);function QA(){var A=Object(T.h)().id,e=Object(n.useState)({}),t=Object(F.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),c=Object(F.a)(i,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(G.a)(Z.a.mark((function A(e){var t,n;return Z.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,K(rA(e));case 2:return t=A.sent,A.next=5,K(rA(e,"recommendations"));case 5:n=A.sent,r(t||{}),o(n&&n.recommendations?n.recommendations:[]);case 8:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(A){e.apply(this,arguments)}(A)}),[A]),Object(R.jsxs)("div",{className:BA.a.anime,children:[Object(R.jsxs)("div",{className:BA.a.leftContainer,children:[Object(R.jsx)("img",{className:BA.a.poster,src:a.image_url,alt:"Poster"}),Object(R.jsx)(vA,{anime:a})]}),Object(R.jsxs)("div",{className:BA.a.rightContainer,children:[Object(R.jsx)(xA,{anime:a}),Object(R.jsx)("p",{className:BA.a.synopsis,children:a.synopsis}),Object(R.jsx)(IA,{anime:a}),Object(R.jsx)(NA,{recommendations:s})]})]})}function IA(A){var e,t,a=A.anime;return Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{className:BA.a.contentHeading,children:"Related Anime"}),Object(R.jsx)("div",{className:BA.a.contentCardOuter,children:Object(R.jsx)("div",{className:BA.a.contentCardInner,style:{WebkitJustifyContent:"flex-start"},children:Object(R.jsx)("ul",{className:BA.a.relatedList,children:null===(e=Object.keys(null!==(t=a.related)&&void 0!==t?t:{}))||void 0===e?void 0:e.map((function(A){var e,t;return Object(R.jsx)(n.Fragment,{children:null===(e=a.related)||void 0===e||null===(t=e[A])||void 0===t?void 0:t.map((function(e){return"anime"===e.type?Object(R.jsx)("li",{children:Object(R.jsx)(N.b,{className:BA.a.relatedItem,to:"/anime/".concat(e.mal_id),children:"".concat(e.name," (").concat(A,")")})},e.mal_id):null}))},A)}))})})})]})}function NA(A){var e=A.recommendations,t=Object(T.f)();return Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{className:BA.a.contentHeading,children:"Recommendations"}),Object(R.jsx)("div",{className:BA.a.contentCardOuter,children:Object(R.jsx)("div",{className:BA.a.contentCardInner,style:{maxHeight:"400px"},children:e.map((function(A){return Object(R.jsxs)("div",{className:BA.a.recommendationsPoster,onClick:function(){var e;e=A.mal_id,t.push("/anime/".concat(e))},children:[Object(R.jsx)("img",{src:A.image_url,alt:"poster"}),Object(R.jsx)("div",{children:A.recommendation_count})]},A.mal_id)}))})})]})}var wA=t(40),yA=t.n(wA);function SA(){return Object(R.jsx)(n.Fragment,{children:Object(R.jsx)("div",{className:yA.a.mainContent,children:Object(R.jsxs)(T.c,{children:[Object(R.jsx)(T.a,{exact:!0,path:"/",children:Object(R.jsx)(dA,{})}),Object(R.jsx)(T.a,{path:"/anime/:id",children:Object(R.jsx)(QA,{})}),Object(R.jsx)(T.a,{path:"/listing/:id",children:Object(R.jsx)(bA,{})}),Object(R.jsx)(T.a,{path:"*",children:Object(R.jsx)(pA,{})})]})})})}var FA=t(37),TA=t.n(FA),PA=t(41),XA=t.n(PA);function DA(A){var e=A.active,t=A.setActive,n=A.dropDownKeys,a=A.dropDownList,r=A.containerWidth;return Object(R.jsx)("div",{className:XA.a.dropDown,children:Object(R.jsx)("select",{value:e,onChange:function(A){var e=A.target.value;t(e)},style:{width:r},children:n.map((function(A){return Object(R.jsx)("option",{value:A,children:a[A].title},a[A].id)}))})})}var RA=t(20),LA=t.n(RA);function WA(){var A=Object(T.f)(),e=Object(n.useState)("fall"),t=Object(F.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("2021"),c=Object(F.a)(i,2),s=c[0],o=c[1];return Object(R.jsxs)("div",{className:LA.a.seasonFilter,children:[Object(R.jsxs)("div",{className:LA.a.filterContainer,children:[Object(R.jsxs)("div",{className:LA.a.filterDetail,children:[Object(R.jsx)("h5",{children:"Season"}),Object(R.jsx)(DA,{active:a,setActive:function(A){r(A)},containerWidth:"100px",dropDownKeys:Object.keys(O),dropDownList:O})]}),Object(R.jsxs)("div",{className:LA.a.filterDetail,children:[Object(R.jsx)("h5",{children:"Year"}),Object(R.jsx)(DA,{active:s,setActive:function(A){o(A)},containerWidth:"100px",dropDownKeys:Object.keys(v()).sort((function(A,e){return e-A})),dropDownList:v()})]})]}),Object(R.jsx)("button",{onClick:function(){A.push("/listing/season?season=".concat(a,"&year=").concat(s))},className:LA.a.button,children:"Go"})]})}var kA=t(42),HA=t(38),UA=t.n(HA);function MA(A){var e=A.value,t=A.setSelected,n=A.selected,a=A.id;return Object(R.jsx)("div",{className:"".concat(UA.a.container," ").concat(n.has(a)?UA.a.selected:""),onClick:function(){t(a)},children:e})}var qA=t(31),ZA=t.n(qA);function GA(){var A=Object(T.f)(),e=Object(I.c)((function(A){return A.searchFilter})),t=Object(I.c)((function(A){return A.ratingFilter})),a=Object(I.c)((function(A){return A.clearFilter})),r=Object(I.b)(),i=Object(n.useState)(new Set),c=Object(F.a)(i,2),s=c[0],o=c[1];function l(n){var a=new Set(Object(kA.a)(s));if(a.has(n))a.delete(n),o(a);else{if(4===a.size)return;a.add(n),o(a)}var i="";a.forEach((function(A){i="".concat(i).concat(i?",".concat(A):A)})),r(y({filterSet:a,value:i})),A.push("/listing/search?q=".concat(e,"&genre=").concat(i,"&rating=").concat(t.value))}return Object(n.useEffect)((function(){o(new Set),r(y({filterSet:new Set,value:""}))}),[a]),Object(R.jsxs)("div",{className:ZA.a.genreFilter,children:[Object(R.jsx)("div",{className:ZA.a.titleContainer,children:Object(R.jsx)("h5",{children:"Genre"})}),Object(R.jsx)("div",{className:ZA.a.genreFilterInner,children:Object.keys(C).map((function(A){return Object(R.jsx)(MA,{id:C[A].id,value:C[A].title,setSelected:l,selected:s},A)}))})]})}var zA=t(32),JA=t.n(zA);function YA(){var A=Object(T.f)(),e=Object(I.c)((function(A){return A.searchFilter})),t=Object(I.c)((function(A){return A.genreFilter})),a=Object(I.c)((function(A){return A.clearFilter})),r=Object(I.b)(),i=Object(n.useState)(new Set),c=Object(F.a)(i,2),s=c[0],o=c[1];function l(n){var a=new Set;s.has(n)||a.add(n),o(a);var i="";a.forEach((function(A){i="".concat(i).concat(i?",".concat(A):A)})),r(S({filterSet:a,value:i})),A.push("/listing/search?q=".concat(e,"&genre=").concat(t.value,"&rating=").concat(i))}return Object(n.useEffect)((function(){o(new Set),r(S({filterSet:new Set,value:""}))}),[a]),Object(R.jsxs)("div",{className:JA.a.ratingFilter,children:[Object(R.jsx)("div",{className:JA.a.titleContainer,children:Object(R.jsx)("h5",{children:"Rating"})}),Object(R.jsx)("div",{className:JA.a.ratingContainer,children:Object.keys(_).map((function(A){return Object(R.jsx)(MA,{id:_[A].id,value:_[A].title,setSelected:l,selected:s},A)}))})]})}var VA=t(25),KA=t.n(VA);function $A(){var A=Object(T.f)(),e=Object(n.useState)(0),t=Object(F.a)(e,2),a=t[0],r=t[1];return Object(R.jsxs)("div",{className:KA.a.scheduleFilter,children:[Object(R.jsx)("h5",{children:"Schedule"}),Object(R.jsxs)("div",{className:KA.a.scheduleContainer,children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("p",{className:KA.a.scheduleText,children:"Day of the week :"}),Object(R.jsx)(DA,{active:a,setActive:function(A){r(A)},containerWidth:"150px",dropDownKeys:Object.keys(g),dropDownList:g})]}),Object(R.jsx)("button",{onClick:function(){A.push("/listing/schedule?day=".concat(a))},className:KA.a.scheduleButton,children:"Go"})]})]})}function Ae(){return Object(R.jsx)("div",{className:TA.a.subMenu,children:Object(R.jsxs)("div",{className:TA.a.subMenuInner,children:[Object(R.jsx)(WA,{}),Object(R.jsx)(GA,{}),Object(R.jsx)(YA,{}),Object(R.jsx)($A,{})]})})}var ee=t(26),te=t.n(ee);function ne(){var A=Object(I.c)((function(A){return A.windowViewType})),e=Object(I.b)();function t(){var A;e((A=p(window.innerWidth),{type:f,payload:A}))}return Object(n.useEffect)((function(){return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(n.useEffect)((function(){console.log(A,window.innerWidth)}),[A]),Object(R.jsx)(n.Fragment,{children:Object(R.jsxs)(N.a,{basename:"/anime-list-app",children:[Object(R.jsxs)("div",{className:te.a.mainSection,children:[Object(R.jsx)("div",{className:te.a.header,children:Object(R.jsx)(M,{})}),Object(R.jsx)("div",{className:te.a.mainContent,children:Object(R.jsx)(SA,{})})]}),Object(R.jsx)("div",{className:te.a.subMenu,children:Object(R.jsx)(Ae,{})})]})})}i.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(I.a,{store:Q,children:Object(R.jsx)(ne,{})})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.f45e7ef9.chunk.js.map
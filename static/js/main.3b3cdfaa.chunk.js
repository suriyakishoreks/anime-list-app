(this["webpackJsonpanime-list-app"]=this["webpackJsonpanime-list-app"]||[]).push([[0],[,,,,,,,function(A,e,t){A.exports={anime:"Anime_anime__1meNi",leftContainer:"Anime_leftContainer__1edQp",poster:"Anime_poster__-Sb9B",rightContainer:"Anime_rightContainer__1dBw0",synopsis:"Anime_synopsis__2Buhj",contentHeading:"Anime_contentHeading__1qLT6",contentCardOuter:"Anime_contentCardOuter__P6miH",contentCardInner:"Anime_contentCardInner__WRmYE",relatedList:"Anime_relatedList__2zWYo",relatedItem:"Anime_relatedItem__2jmAR",recommendationsPoster:"Anime_recommendationsPoster__2qHkk"}},,,,,function(A,e,t){A.exports={landscapeCarousel:"LandscapeCarousel_landscapeCarousel__vK5tS",fadein:"LandscapeCarousel_fadein__2ORpq",poster:"LandscapeCarousel_poster__3vfQH",textContent:"LandscapeCarousel_textContent__CIRoD",title:"LandscapeCarousel_title__1_Ggt",synopsis:"LandscapeCarousel_synopsis__1nhAO",genre:"LandscapeCarousel_genre__331ev",btn:"LandscapeCarousel_btn__IrIZj",leftbtn:"LandscapeCarousel_leftbtn__2dfq6",rightbtn:"LandscapeCarousel_rightbtn__2JEoW",arrow:"LandscapeCarousel_arrow__3B8u3"}},,function(A,e,t){A.exports={row:"PortraitCarousel_row__3zFou",rowContent:"PortraitCarousel_rowContent__16zFZ",poster:"PortraitCarousel_poster__uzJJx",img:"PortraitCarousel_img__2mdOd",btn:"PortraitCarousel_btn__1NSlf",leftbtn:"PortraitCarousel_leftbtn__Tyja-",rightbtn:"PortraitCarousel_rightbtn__rWa11",arrow:"PortraitCarousel_arrow__1keGu"}},,function(A,e,t){A.exports={animeCard:"AnimeCard_animeCard__1de5y",scoreCard:"AnimeCard_scoreCard__2_wkJ",heading:"AnimeCard_heading__1j999",rating:"AnimeCard_rating__2zy-X",score:"AnimeCard_score__1otm9",details:"AnimeCard_details__2eYUF",genre:"AnimeCard_genre__1rSd2"}},,,function(A,e,t){A.exports={header:"AnimeHeader_header__2sy87",titleSection:"AnimeHeader_titleSection__3ziT_",title:"AnimeHeader_title__3Vq2D",titleEnglish:"AnimeHeader_titleEnglish__1J81J",infoSection:"AnimeHeader_infoSection__2Ugyd"}},function(A,e,t){A.exports={seasonFilter:"SeasonFilter_seasonFilter__1Ix4T",filterContainer:"SeasonFilter_filterContainer__3UQPz",filterDetail:"SeasonFilter_filterDetail__1t_sk",button:"SeasonFilter_button__6_02W"}},,,function(A,e,t){A.exports={title:"Listing_title__3QWvu",listing:"Listing_listing__1vMPz",poster:"Listing_poster__oF1CS",img:"Listing_img__2U0Y1"}},function(A,e,t){A.exports={scheduleFilter:"ScheduleFilter_scheduleFilter__N5krW",scheduleContainer:"ScheduleFilter_scheduleContainer__1dCxx",scheduleText:"ScheduleFilter_scheduleText__2rwg5",scheduleButton:"ScheduleFilter_scheduleButton__3j1A1"}},function(A,e,t){A.exports={mainSection:"App_mainSection__KTABL",subMenu:"App_subMenu__L5ckY",header:"App_header__3OA0g",mainContent:"App_mainContent__lEd28"}},,,,function(A,e,t){A.exports={searchBar:"SearchBar_searchBar__1eMKi",searchField:"SearchBar_searchField__3F3x-",searchButton:"SearchBar_searchButton__2_iRW"}},function(A,e,t){A.exports={genreFilter:"GenreFilter_genreFilter__2pZyv",titleContainer:"GenreFilter_titleContainer__2RAic",genreFilterInner:"GenreFilter_genreFilterInner__2YYld"}},function(A,e,t){A.exports={ratingFilter:"RatingFilter_ratingFilter__13oBs",titleContainer:"RatingFilter_titleContainer__bG94R",ratingContainer:"RatingFilter_ratingContainer__1TcsK"}},,,,,function(A,e,t){A.exports={subMenu:"SubMenu_subMenu__3qlu2",subMenuInner:"SubMenu_subMenuInner__1auhc"}},function(A,e,t){A.exports={container:"CheckBox_container__vBEmC",selected:"CheckBox_selected__3T2MO"}},function(A,e,t){A.exports={logo:"Header_logo__1PObw"}},function(A,e,t){A.exports={error:"NoMatch_error__3wRtL"}},function(A,e,t){A.exports={mainContent:"MainContent_mainContent__1Gfsa"}},function(A,e,t){A.exports={dropDown:"DropDown_dropDown__fUgUO"}},,,,,,,,,,function(A,e,t){},,,,,function(A,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(26),i=t.n(r),c=t(43),s=t(9),o="UPDATE_GENRE_FILTER",l="UPDATE_RATING_FILTER",d="UPDATE_SEARCH_FILTER",u="CLEAR_FILTER",j="INITIALIZE_FILTER",f="SET_WINDOW_VIEW";function b(A){return A>1190?"DESKTOP_VIEW":A>740?"INTERMEDIATE_VIEW":"MOBILE_VIEW"}var m={winter:{title:"Winter",id:"winter"},spring:{title:"Spring",id:"spring"},summer:{title:"Summer",id:"summer"},fall:{title:"Fall",id:"fall"}},h={0:{title:"Sunday",id:"sunday"},1:{title:"Monday",id:"monday"},2:{title:"Tuesday",id:"tuesday"},3:{title:"Wednesday",id:"wednesday"},4:{title:"Thursday",id:"thursday"},5:{title:"Friday",id:"friday"},6:{title:"Saturday",id:"saturday"}};function p(){for(var A=(new Date).getFullYear(),e={},t=Number(A);t>=1990;t--)e[t]={title:t,id:t};return e}var v={g:{title:"All Age",id:"g"},pg:{title:"Children",id:"pg"},pg13:{title:"Thirteen  +",id:"pg13"},r17:{title:"Seventeen +",id:"r17"},r:{title:"R +",id:"r"},rx:{title:"RX",id:"rx"}},O={action:{title:"Action",id:1},adventure:{title:"Adventure",id:2},cars:{title:"Cars",id:3},comedy:{title:"Comedy",id:4},avanteGarde:{title:"Avante Garde",id:5},demons:{title:"Demons",id:6},mystery:{title:"Mystery",id:7},drama:{title:"Drama",id:8},ecchi:{title:"Ecchi",id:9},fantasy:{title:"Fantasy",id:10},game:{title:"Game",id:11},hentai:{title:"Hentai",id:12},historical:{title:"Historical",id:13},horror:{title:"Horror",id:14},kids:{title:"Kids",id:15},martialArts:{title:"Martial Arts",id:17},mecha:{title:"Mecha",id:18},music:{title:"Music",id:19},parody:{title:"Parody",id:20},samurai:{title:"Samurai",id:21},romance:{title:"Romance",id:22},school:{title:"School",id:23},sciFi:{title:"Sci Fi",id:24},shoujo:{title:"Shoujo",id:25},girlsLove:{title:"Girls Love",id:26},shonen:{title:"Shounen",id:27},boysLove:{title:"Boys Love",id:28},space:{title:"Space",id:29},sports:{title:"Sports",id:30},superPower:{title:"Super Power",id:31},vampire:{title:"Vampire",id:32},harem:{title:"Harem",id:35},sliceOfLife:{title:"Slice Of Life",id:36},superNatural:{title:"Supernatural",id:37},military:{title:"Military",id:38},police:{title:"Police",id:39},psychological:{title:"Psychological",id:40},suspense:{title:"Suspense",id:41},seinen:{title:"Seinen",id:42},josei:{title:"Josei",id:43},awardWinning:{title:"Award Winning",id:46},gourmet:{title:"Gourmet",id:47},workLife:{title:"Work Life",id:48},erotica:{title:"Erotica",id:49}},g={searchQuery:"",pageNo:"1",orderBy:"members",sort:"desc",genre:"",rating:""},_={searchFilter:"",genreFilter:{filterSet:new Set,value:""},ratingFilter:{filterSet:new Set,value:""},clearFilter:!1,initializeFilter:!1,windowViewType:b(window.innerWidth)};var C=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(s.a)(Object(s.a)({},A),{},{clearFilter:e.payload});case d:return Object(s.a)(Object(s.a)({},A),{},{searchFilter:e.payload});case l:return Object(s.a)(Object(s.a)({},A),{},{ratingFilter:e.payload});case o:return Object(s.a)(Object(s.a)({},A),{},{genreFilter:e.payload});case j:return Object(s.a)(Object(s.a)({},A),{},{initializeFilter:e.payload});case f:return Object(s.a)(Object(s.a)({},A),{},{windowViewType:e.payload});default:return Object(s.a)({},A)}},x=Object(c.a)(C),E=t(5),B=(t(51),t(17));var Q=t(4),I=t(2),N=t(29),y=t.n(N),w=t.p+"static/media/search.9e58d37c.svg",F=t(0);function S(){var A=Object(I.f)(),e=Object(E.c)((function(A){return A.clearFilter})),t=Object(E.b)(),a=Object(n.useState)(""),r=Object(Q.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){t({type:d,payload:i}),i.length>2&&A.push("/listing/search")}),400);return function(){clearTimeout(e)}}),[i]),Object(n.useEffect)((function(){c("")}),[e]),Object(F.jsxs)("div",{className:y.a.searchBar,children:[Object(F.jsx)("input",{className:y.a.searchField,type:"text",placeholder:"Search for Animes",onChange:function(A){c(A.target.value)},value:i,name:"search",id:"search",autoComplete:"off"}),Object(F.jsx)("button",{tabIndex:"-1",className:y.a.searchButton,children:Object(F.jsx)("img",{src:w,alt:"Search Icon"})})]})}var P=t(38),T=t.n(P);function X(){return Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)(B.b,{className:T.a.logo,to:"/",children:"Anime List"}),Object(F.jsx)("div",{children:Object(F.jsx)(S,{})})]})}var D=t(6),L=t.n(D),R=t(15),W=t(14),k=t.n(W),H="data:image/png;base64,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",U="data:image/png;base64,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";function M(A){return Z.apply(this,arguments)}function Z(){return(Z=Object(R.a)(L.a.mark((function A(e){var t,n,a,r=arguments;return L.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:null,A.prev=1,A.next=4,fetch(e,{signal:t});case 4:return n=A.sent,console.log(n.status),A.next=8,n.json();case 8:return a=A.sent,A.abrupt("return",a);case 12:return A.prev=12,A.t0=A.catch(1),console.log(A.t0),A.abrupt("return",[]);case 16:case"end":return A.stop()}}),A,null,[[1,12]])})))).apply(this,arguments)}function G(A){var e,t=A.endPoint,a=Object(n.useRef)(null),r=Object(I.f)(),i=Object(n.useState)(!1),c=Object(Q.a)(i,2),s=c[0],o=c[1],l=Object(n.useState)([]),d=Object(Q.a)(l,2),u=d[0],j=d[1],f=Object(n.useState)(null===(e=a.current)||void 0===e?void 0:e.offsetWidth),b=Object(Q.a)(f,2),m=b[0],h=b[1];function p(){var A;h(null===(A=a.current)||void 0===A?void 0:A.offsetWidth)}function v(A){"left"===A?a.current.scroll({left:a.current.scrollLeft-.85*m,behavior:"smooth"}):a.current.scroll({left:a.current.scrollLeft+.85*m,behavior:"smooth"})}return Object(n.useEffect)((function(){var A;return window.addEventListener("resize",p),h(null===(A=a.current)||void 0===A?void 0:A.offsetWidth),function(){return window.removeEventListener("resize",p)}}),[a.current]),Object(n.useEffect)((function(){function A(){return(A=Object(R.a)(L.a.mark((function A(){var e;return L.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,M(t.url);case 2:e=A.sent,j(e[t.path]?e[t.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[t.url,t.path]),0===u.length?null:Object(F.jsxs)("div",{className:k.a.row,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[Object(F.jsx)("h2",{children:t.id}),Object(F.jsxs)("div",{ref:a,className:k.a.rowContent,children:[s&&Object(F.jsx)("button",{className:"".concat(k.a.leftbtn," ").concat(k.a.btn),onClick:function(){v("left")},children:Object(F.jsx)("img",{className:k.a.arrow,src:H,alt:"Left Arrow"})}),u.map((function(A){return Object(F.jsx)("div",{onClick:function(){var e;e=A.mal_id,r.push("/anime/".concat(e))},className:k.a.poster,children:Object(F.jsx)("img",{className:k.a.img,src:A.image_url,alt:"img"})},A.mal_id)})),s&&Object(F.jsx)("button",{className:"".concat(k.a.rightbtn," ").concat(k.a.btn),onClick:function(){v("right")},children:Object(F.jsx)("img",{className:k.a.arrow,src:U,alt:"Right Arrow"})})]})]})}var q=t(12),z=t.n(q),J=t.p+"static/media/tag.f71f94a8.svg";function Y(A){var e=A.endPoint,t=Object(I.f)(),a=Object(n.useState)(!1),r=Object(Q.a)(a,2),i=r[0],c=r[1],s=Object(n.useState)([]),o=Object(Q.a)(s,2),l=o[0],d=o[1],u=Object(n.useState)(0),j=Object(Q.a)(u,2),f=j[0],b=j[1];function m(A){b((function(e){var t=0;return"left"===A?t=e-1>0?e-1:l.length-1:"right"===A&&(t=e+1<l.length?e+1:0),t}))}return Object(n.useEffect)((function(){function A(){return(A=Object(R.a)(L.a.mark((function A(){var t;return L.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,M(e.url);case 2:t=A.sent,d(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[e.url,e.path]),Object(n.useEffect)((function(){var A=setTimeout((function(){b((function(A){return A+1<l.length?A+1:0}))}),5e3);return function(){return clearTimeout(A)}}),[l,f]),0===l.length?null:Object(F.jsxs)("div",{className:z.a.landscapeCarousel,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},children:[i&&Object(F.jsx)("button",{className:"".concat(z.a.leftbtn," ").concat(z.a.btn),onClick:function(){m("left")},children:Object(F.jsx)("img",{className:z.a.arrow,src:H,alt:"Left Arrow"})}),Object(F.jsx)("img",{className:z.a.poster,src:l[f].image_url,alt:"test"}),Object(F.jsxs)("div",{className:z.a.textContent,onClick:function(){var A;A=l[f].mal_id,t.push("/anime/".concat(A))},children:[Object(F.jsx)("h3",{className:z.a.title,children:l[f].title}),Object(F.jsx)("p",{className:z.a.synopsis,children:l[f].synopsis.length>350?"".concat(l[f].synopsis.slice(0,350),"..."):l[f].synopsis}),Object(F.jsxs)("p",{className:z.a.genre,children:[Object(F.jsx)("img",{src:J,alt:"tag"})," \xa0",l[f].genres.map((function(A,e){return Object(F.jsx)("span",{children:"".concat(A.name,", ")},e)})),l[f].explicit_genres.map((function(A,e){return Object(F.jsx)("span",{children:"".concat(A.name,", ")},e)})),"Anime"]})]}),i&&Object(F.jsx)("button",{className:"".concat(z.a.rightbtn," ").concat(z.a.btn),onClick:function(){m("right")},children:Object(F.jsx)("img",{className:z.a.arrow,src:U,alt:"Right Arrow"})})]},l[f].mal_id)}var V=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?"https://api.jikan.moe/v3/anime/".concat(A,"/").concat(e):"https://api.jikan.moe/v3/anime/".concat(A)},K=function(A,e){return{id:"".concat(A.title," ").concat(e.title),url:"https://api.jikan.moe/v3/season/".concat(e.id,"/").concat(A.id),path:"anime"}},$=function(A){return{id:"Anime on ".concat(A.title),url:"https://api.jikan.moe/v3/schedule/".concat(A.id),path:A.id}},AA=function(A){return{id:"Search Results",url:"https://api.jikan.moe/v3/search/anime?q=".concat(A.searchQuery,"&page=").concat(A.pageNo,"&order_by=").concat(A.orderBy,"&sort=").concat(A.sort,"&genre=").concat(A.genre,"&rated=").concat(A.rating),path:"results"}},eA=function(){var A=new Date,e=h[A.getDay()].id;return{id:"Airing Today",url:"https://api.jikan.moe/v3/schedule/".concat(e),path:e}},tA=function(){return{id:"Top Airing",url:"https://api.jikan.moe/v3/top/anime/1/airing",path:"top"}},nA=function(){return{id:"Upcoming Anime",url:"https://api.jikan.moe/v3/season/later",path:"anime"}};function aA(){var A=Object(E.c)((function(A){return A.clearFilter})),e=Object(E.b)();return Object(n.useEffect)((function(){e({type:u,payload:!A})}),[]),Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)(Y,{endPoint:eA()}),Object(F.jsx)(G,{endPoint:tA()}),Object(F.jsx)(G,{endPoint:nA()})]})}var rA=t(23),iA=t.n(rA);function cA(){var A=Object(I.f)(),e=Object(I.g)(),t=Object(I.h)().id,a=Object(n.useState)(null),r=Object(Q.a)(a,2),i=r[0],c=r[1],s=Object(n.useState)([]),o=Object(Q.a)(s,2),l=o[0],d=o[1],u=Object(n.useState)("Results"),j=Object(Q.a)(u,2),f=j[0],b=j[1];return Object(n.useEffect)((function(){var A=new AbortController;function e(){return(e=Object(R.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t.url,A.signal);case 2:n=e.sent,d(n[t.path]?n[t.path]:[]),A=null;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i&&function(A){e.apply(this,arguments)}(i),function(){var e;return null===(e=A)||void 0===e?void 0:e.abort()}}),[i]),Object(n.useEffect)((function(){var A=new URLSearchParams(e.search);if("season"===t){var n=A.get("year"),a=A.get("season"),r=p(),i=K(m[a],r[n]);c(i),b(i.id)}else if("schedule"===t){var s=A.get("day"),o=$(s=h[s]);c(o),b(o.id)}else if("search"===t){var l=g;l.searchQuery=A.get("q"),l.rating=A.get("rating"),l.genre=A.get("genre");var d=AA(l);c(d),b(d.id)}}),[t,e]),0===l.length?Object(F.jsx)("h3",{children:"No Results found!"}):Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)("h2",{className:iA.a.title,children:f}),Object(F.jsx)("div",{className:iA.a.listing,children:l.map((function(e){return Object(F.jsx)("div",{onClick:function(){!function(e){A.push("/anime/".concat(e))}(e.mal_id)},className:iA.a.poster,children:Object(F.jsx)("img",{className:iA.a.img,src:e.image_url,alt:"img"})},e.mal_id)}))})]})}var sA=t(39),oA=t.n(sA);function lA(){var A=Object(I.f)();return Object(F.jsxs)("div",{className:oA.a.error,children:[Object(F.jsx)("h4",{children:"The Page you requested is not available."}),Object(F.jsx)("button",{onClick:function(){A.push("/")},children:"Home"})]})}var dA=t(16),uA=t.n(dA);function jA(A){var e,t,n=A.anime;return Object(F.jsxs)("div",{className:uA.a.animeCard,children:[Object(F.jsxs)("div",{className:uA.a.scoreCard,children:[Object(F.jsx)("p",{className:uA.a.heading,children:"Score"}),Object(F.jsxs)("p",{className:uA.a.rating,children:[Object(F.jsx)("span",{className:uA.a.score,children:n.score})," \xa0by ",n.scored_by," users"]})]}),Object(F.jsx)("p",{className:uA.a.details,children:n.rating}),Object(F.jsx)("p",{className:uA.a.details,children:n.status}),null===(e=n.genres)||void 0===e?void 0:e.map((function(A){return Object(F.jsx)("div",{className:uA.a.genre,children:A.name},A.mal_id)})),null===(t=n.explicit_genres)||void 0===t?void 0:t.map((function(A){return Object(F.jsx)("div",{className:uA.a.genre,children:A.name},A.mal_id)}))]})}var fA=t(19),bA=t.n(fA);function mA(A){var e=A.anime;return Object(F.jsxs)("div",{className:bA.a.header,children:[Object(F.jsxs)("div",{className:bA.a.titleSection,children:[Object(F.jsx)("p",{className:bA.a.title,children:e.title}),Object(F.jsx)("p",{className:bA.a.titleEnglish,children:e.title_english})]}),Object(F.jsxs)("div",{className:bA.a.infoSection,children:[Object(F.jsx)("p",{children:e.premiered}),Object(F.jsxs)("p",{children:[e.episodes," episodes"]})]})]})}var hA=t(7),pA=t.n(hA);function vA(){var A=Object(I.h)().id,e=Object(n.useState)({}),t=Object(Q.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),c=Object(Q.a)(i,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(R.a)(L.a.mark((function A(e){var t,n;return L.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,M(V(e));case 2:return t=A.sent,A.next=5,M(V(e,"recommendations"));case 5:n=A.sent,r(t||{}),o(n&&n.recommendations?n.recommendations:[]);case 8:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(A){e.apply(this,arguments)}(A)}),[A]),Object(F.jsxs)("div",{className:pA.a.anime,children:[Object(F.jsxs)("div",{className:pA.a.leftContainer,children:[Object(F.jsx)("img",{className:pA.a.poster,src:a.image_url,alt:"Poster"}),Object(F.jsx)(jA,{anime:a})]}),Object(F.jsxs)("div",{className:pA.a.rightContainer,children:[Object(F.jsx)(mA,{anime:a}),Object(F.jsx)("p",{className:pA.a.synopsis,children:a.synopsis}),Object(F.jsx)(OA,{anime:a}),Object(F.jsx)(gA,{recommendations:s})]})]})}function OA(A){var e,t,a=A.anime;return Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{className:pA.a.contentHeading,children:"Related Anime"}),Object(F.jsx)("div",{className:pA.a.contentCardOuter,children:Object(F.jsx)("div",{className:pA.a.contentCardInner,style:{WebkitJustifyContent:"flex-start"},children:Object(F.jsx)("ul",{className:pA.a.relatedList,children:null===(e=Object.keys(null!==(t=a.related)&&void 0!==t?t:{}))||void 0===e?void 0:e.map((function(A){var e,t;return Object(F.jsx)(n.Fragment,{children:null===(e=a.related)||void 0===e||null===(t=e[A])||void 0===t?void 0:t.map((function(e){return"anime"===e.type?Object(F.jsx)("li",{children:Object(F.jsx)(B.b,{className:pA.a.relatedItem,to:"/anime/".concat(e.mal_id),children:"".concat(e.name," (").concat(A,")")})},e.mal_id):null}))},A)}))})})})]})}function gA(A){var e=A.recommendations,t=Object(I.f)();return Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{className:pA.a.contentHeading,children:"Recommendations"}),Object(F.jsx)("div",{className:pA.a.contentCardOuter,children:Object(F.jsx)("div",{className:pA.a.contentCardInner,style:{maxHeight:"400px"},children:e.map((function(A){return Object(F.jsxs)("div",{className:pA.a.recommendationsPoster,onClick:function(){var e;e=A.mal_id,t.push("/anime/".concat(e))},children:[Object(F.jsx)("img",{src:A.image_url,alt:"poster"}),Object(F.jsx)("div",{children:A.recommendation_count})]},A.mal_id)}))})})]})}var _A=t(40),CA=t.n(_A);function xA(){var A=Object(I.f)(),e=Object(E.c)((function(A){return A.searchFilter})),t=Object(E.c)((function(A){return A.genreFilter})),a=Object(E.c)((function(A){return A.ratingFilter}));return Object(n.useEffect)((function(){t.value||a.value||e?A.push("/listing/search?q=".concat(e,"&genre=").concat(t.value,"&rating=").concat(a.value)):t.value&&a.value&&e||A.push("/")}),[t,a,e]),Object(F.jsx)(n.Fragment,{children:Object(F.jsx)("div",{className:CA.a.mainContent,children:Object(F.jsxs)(I.c,{children:[Object(F.jsx)(I.a,{exact:!0,path:"/",children:Object(F.jsx)(aA,{})}),Object(F.jsx)(I.a,{path:"/anime/:id",children:Object(F.jsx)(vA,{})}),Object(F.jsx)(I.a,{path:"/listing/:id",children:Object(F.jsx)(cA,{})}),Object(F.jsx)(I.a,{path:"*",children:Object(F.jsx)(lA,{})})]})})})}var EA=t(36),BA=t.n(EA),QA=t(41),IA=t.n(QA);function NA(A){var e=A.active,t=A.setActive,n=A.dropDownKeys,a=A.dropDownList,r=A.containerWidth;return Object(F.jsx)("div",{className:IA.a.dropDown,children:Object(F.jsx)("select",{value:e,onChange:function(A){var e=A.target.value;t(e)},style:{width:r},children:n.map((function(A){return Object(F.jsx)("option",{value:A,children:a[A].title},a[A].id)}))})})}var yA=t(20),wA=t.n(yA);function FA(){var A=Object(I.f)(),e=Object(n.useState)("fall"),t=Object(Q.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("2021"),c=Object(Q.a)(i,2),s=c[0],o=c[1];return Object(F.jsxs)("div",{className:wA.a.seasonFilter,children:[Object(F.jsxs)("div",{className:wA.a.filterContainer,children:[Object(F.jsxs)("div",{className:wA.a.filterDetail,children:[Object(F.jsx)("h5",{children:"Season"}),Object(F.jsx)(NA,{active:a,setActive:function(A){r(A)},containerWidth:"100px",dropDownKeys:Object.keys(m),dropDownList:m})]}),Object(F.jsxs)("div",{className:wA.a.filterDetail,children:[Object(F.jsx)("h5",{children:"Year"}),Object(F.jsx)(NA,{active:s,setActive:function(A){o(A)},containerWidth:"100px",dropDownKeys:Object.keys(p()).sort((function(A,e){return e-A})),dropDownList:p()})]})]}),Object(F.jsx)("button",{onClick:function(){A.push("/listing/season?season=".concat(a,"&year=").concat(s))},className:wA.a.button,children:"Go"})]})}var SA=t(42),PA=t(37),TA=t.n(PA);function XA(A){var e=A.value,t=A.setSelected,n=A.selected,a=A.id;return Object(F.jsx)("div",{className:"".concat(TA.a.container," ").concat(n.has(a)?TA.a.selected:""),onClick:function(){t(a)},children:e})}var DA=t(30),LA=t.n(DA);function RA(){var A=Object(E.c)((function(A){return A.clearFilter})),e=Object(E.b)(),t=Object(n.useState)(new Set),a=Object(Q.a)(t,2),r=a[0],i=a[1];function c(A){var t=new Set(Object(SA.a)(r));if(4!==t.size){t.has(A)?(t.delete(A),i(t)):(t.add(A),i(t));var n="";t.forEach((function(A){n="".concat(n).concat(n?",".concat(A):A)})),e({type:o,payload:{filterSet:t,value:n}})}}return Object(n.useEffect)((function(){i(new Set)}),[A]),Object(F.jsxs)("div",{className:LA.a.genreFilter,children:[Object(F.jsx)("div",{className:LA.a.titleContainer,children:Object(F.jsx)("h5",{children:"Genre"})}),Object(F.jsx)("div",{className:LA.a.genreFilterInner,children:Object.keys(O).map((function(A){return Object(F.jsx)(XA,{id:O[A].id,value:O[A].title,setSelected:c,selected:r},A)}))})]})}var WA=t(31),kA=t.n(WA);function HA(){var A=Object(E.c)((function(A){return A.clearFilter})),e=Object(E.b)(),t=Object(n.useState)(new Set),a=Object(Q.a)(t,2),r=a[0],i=a[1];function c(A){var t=new Set;r.has(A)||t.add(A),i(t);var n="";t.forEach((function(A){n="".concat(n).concat(n?",".concat(A):A)})),e({type:l,payload:{filterSet:t,value:n}})}return Object(n.useEffect)((function(){i(new Set)}),[A]),Object(F.jsxs)("div",{className:kA.a.ratingFilter,children:[Object(F.jsx)("div",{className:kA.a.titleContainer,children:Object(F.jsx)("h5",{children:"Rating"})}),Object(F.jsx)("div",{className:kA.a.ratingContainer,children:Object.keys(v).map((function(A){return Object(F.jsx)(XA,{id:v[A].id,value:v[A].title,setSelected:c,selected:r},A)}))})]})}var UA=t(24),MA=t.n(UA);function ZA(){var A=Object(I.f)(),e=Object(n.useState)(0),t=Object(Q.a)(e,2),a=t[0],r=t[1];return Object(F.jsxs)("div",{className:MA.a.scheduleFilter,children:[Object(F.jsx)("h5",{children:"Schedule"}),Object(F.jsxs)("div",{className:MA.a.scheduleContainer,children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{className:MA.a.scheduleText,children:"Day of the week :"}),Object(F.jsx)(NA,{active:a,setActive:function(A){r(A)},containerWidth:"150px",dropDownKeys:Object.keys(h),dropDownList:h})]}),Object(F.jsx)("button",{onClick:function(){A.push("/listing/schedule?day=".concat(a))},className:MA.a.scheduleButton,children:"Go"})]})]})}function GA(){return Object(F.jsx)("div",{className:BA.a.subMenu,children:Object(F.jsxs)("div",{className:BA.a.subMenuInner,children:[Object(F.jsx)(FA,{}),Object(F.jsx)(RA,{}),Object(F.jsx)(HA,{}),Object(F.jsx)(ZA,{})]})})}var qA=t(25),zA=t.n(qA);function JA(){var A=Object(E.c)((function(A){return A.windowViewType})),e=Object(E.b)();function t(){var A;e((A=b(window.innerWidth),{type:f,payload:A}))}return Object(n.useEffect)((function(){return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(n.useEffect)((function(){console.log(A)}),[A]),Object(F.jsx)(n.Fragment,{children:Object(F.jsxs)(B.a,{basename:"/anime-list-app",children:[Object(F.jsxs)("div",{className:zA.a.mainSection,children:[Object(F.jsx)("div",{className:zA.a.header,children:Object(F.jsx)(X,{})}),Object(F.jsx)("div",{className:zA.a.mainContent,children:Object(F.jsx)(xA,{})})]}),Object(F.jsx)("div",{className:zA.a.subMenu,children:Object(F.jsx)(GA,{})})]})})}i.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(E.a,{store:x,children:Object(F.jsx)(JA,{})})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.3b3cdfaa.chunk.js.map
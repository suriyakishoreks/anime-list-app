(this["webpackJsonpanime-list-app"]=this["webpackJsonpanime-list-app"]||[]).push([[0],[,,,,,,function(A,e,t){A.exports={anime:"Anime_anime__1meNi",leftContainer:"Anime_leftContainer__1edQp",poster:"Anime_poster__-Sb9B",rightContainer:"Anime_rightContainer__1dBw0",synopsis:"Anime_synopsis__2Buhj",contentHeading:"Anime_contentHeading__1qLT6",contentCardOuter:"Anime_contentCardOuter__P6miH",contentCardInner:"Anime_contentCardInner__WRmYE",relatedList:"Anime_relatedList__2zWYo",relatedItem:"Anime_relatedItem__2jmAR",recommendationsPoster:"Anime_recommendationsPoster__2qHkk"}},,,,function(A,e,t){A.exports={landscapeCarousel:"LandscapeCarousel_landscapeCarousel__vK5tS",fadein:"LandscapeCarousel_fadein__2ORpq",poster:"LandscapeCarousel_poster__3vfQH",textContent:"LandscapeCarousel_textContent__CIRoD",title:"LandscapeCarousel_title__1_Ggt",synopsis:"LandscapeCarousel_synopsis__1nhAO",genre:"LandscapeCarousel_genre__331ev",btn:"LandscapeCarousel_btn__IrIZj",leftbtn:"LandscapeCarousel_leftbtn__2dfq6",rightbtn:"LandscapeCarousel_rightbtn__2JEoW",arrow:"LandscapeCarousel_arrow__3B8u3"}},,,function(A,e,t){A.exports={row:"PortraitCarousel_row__3zFou",rowContent:"PortraitCarousel_rowContent__16zFZ",poster:"PortraitCarousel_poster__uzJJx",img:"PortraitCarousel_img__2mdOd",btn:"PortraitCarousel_btn__1NSlf",leftbtn:"PortraitCarousel_leftbtn__Tyja-",rightbtn:"PortraitCarousel_rightbtn__rWa11",arrow:"PortraitCarousel_arrow__1keGu"}},,function(A,e,t){A.exports={animeCard:"AnimeCard_animeCard__1de5y",scoreCard:"AnimeCard_scoreCard__2_wkJ",heading:"AnimeCard_heading__1j999",rating:"AnimeCard_rating__2zy-X",score:"AnimeCard_score__1otm9",details:"AnimeCard_details__2eYUF",genre:"AnimeCard_genre__1rSd2"}},,,,function(A,e,t){A.exports={header:"AnimeHeader_header__2sy87",titleSection:"AnimeHeader_titleSection__3ziT_",title:"AnimeHeader_title__3Vq2D",titleEnglish:"AnimeHeader_titleEnglish__1J81J",infoSection:"AnimeHeader_infoSection__2Ugyd"}},function(A,e,t){A.exports={seasonFilter:"SeasonFilter_seasonFilter__1Ix4T",filterContainer:"SeasonFilter_filterContainer__3UQPz",filterDetail:"SeasonFilter_filterDetail__1t_sk",button:"SeasonFilter_button__6_02W"}},,,function(A,e,t){A.exports={title:"Listing_title__3QWvu",listing:"Listing_listing__1vMPz",poster:"Listing_poster__oF1CS",img:"Listing_img__2U0Y1"}},function(A,e,t){A.exports={scheduleFilter:"ScheduleFilter_scheduleFilter__N5krW",scheduleContainer:"ScheduleFilter_scheduleContainer__1dCxx",scheduleText:"ScheduleFilter_scheduleText__2rwg5",scheduleButton:"ScheduleFilter_scheduleButton__3j1A1"}},function(A,e,t){A.exports={mainSection:"App_mainSection__KTABL",subMenu:"App_subMenu__L5ckY",header:"App_header__3OA0g",mainContent:"App_mainContent__lEd28"}},,,,function(A,e,t){A.exports={searchBar:"SearchBar_searchBar__1eMKi",searchField:"SearchBar_searchField__3F3x-",searchButton:"SearchBar_searchButton__2_iRW"}},function(A,e,t){A.exports={genreFilter:"GenreFilter_genreFilter__2pZyv",titleContainer:"GenreFilter_titleContainer__2RAic",genreFilterInner:"GenreFilter_genreFilterInner__2YYld"}},function(A,e,t){A.exports={ratingFilter:"RatingFilter_ratingFilter__13oBs",titleContainer:"RatingFilter_titleContainer__bG94R",ratingContainer:"RatingFilter_ratingContainer__1TcsK"}},,,,,function(A,e,t){A.exports={subMenu:"SubMenu_subMenu__3qlu2",subMenuInner:"SubMenu_subMenuInner__1auhc"}},function(A,e,t){A.exports={container:"CheckBox_container__vBEmC",selected:"CheckBox_selected__3T2MO"}},,function(A,e,t){A.exports={logo:"Header_logo__1PObw"}},function(A,e,t){A.exports={error:"NoMatch_error__3wRtL"}},function(A,e,t){A.exports={mainContent:"MainContent_mainContent__1Gfsa"}},function(A,e,t){A.exports={dropDown:"DropDown_dropDown__fUgUO"}},,,,,,,,,function(A,e,t){},,,,,function(A,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),i=t(26),r=t.n(i),c=t(43),s=t(12),o="UPDATE_CURRENTMOVIES",l="UPDATE_MOVIE",d="UPDATE_SEARCH",u="API_UPDATE",j="CLEAR_SEARCH",b={winter:{title:"Winter",id:"winter"},spring:{title:"Spring",id:"spring"},summer:{title:"Summer",id:"summer"},fall:{title:"Fall",id:"fall"}},m={0:{title:"Sunday",id:"sunday"},1:{title:"Monday",id:"monday"},2:{title:"Tuesday",id:"tuesday"},3:{title:"Wednesday",id:"wednesday"},4:{title:"Thursday",id:"thursday"},5:{title:"Friday",id:"friday"},6:{title:"Saturday",id:"saturday"}};function f(){for(var A=(new Date).getFullYear(),e={},t=Number(A);t>=1990;t--)e[t]={title:t,id:t};return e}var h={g:{title:"All Age",id:"g"},pg:{title:"Children",id:"pg"},pg13:{title:"Thirteen  +",id:"pg13"},r17:{title:"Seventeen +",id:"r17"},r:{title:"R +",id:"r"},rx:{title:"RX",id:"rx"}},p={action:{title:"Action",id:1},adventure:{title:"Adventure",id:2},cars:{title:"Cars",id:3},comedy:{title:"Comedy",id:4},avanteGarde:{title:"Avante Garde",id:5},demons:{title:"Demons",id:6},mystery:{title:"Mystery",id:7},drama:{title:"Drama",id:8},ecchi:{title:"Ecchi",id:9},fantasy:{title:"Fantasy",id:10},game:{title:"Game",id:11},hentai:{title:"Hentai",id:12},historical:{title:"Historical",id:13},horror:{title:"Horror",id:14},kids:{title:"Kids",id:15},martialArts:{title:"Martial Arts",id:17},mecha:{title:"Mecha",id:18},music:{title:"Music",id:19},parody:{title:"Parody",id:20},samurai:{title:"Samurai",id:21},romance:{title:"Romance",id:22},school:{title:"School",id:23},sciFi:{title:"Sci Fi",id:24},shoujo:{title:"Shoujo",id:25},girlsLove:{title:"Girls Love",id:26},shonen:{title:"Shounen",id:27},boysLove:{title:"Boys Love",id:28},space:{title:"Space",id:29},sports:{title:"Sports",id:30},superPower:{title:"Super Power",id:31},vampire:{title:"Vampire",id:32},harem:{title:"Harem",id:35},sliceOfLife:{title:"Slice Of Life",id:36},superNatural:{title:"Supernatural",id:37},military:{title:"Military",id:38},police:{title:"Police",id:39},psychological:{title:"Psychological",id:40},suspense:{title:"Suspense",id:41},seinen:{title:"Seinen",id:42},josei:{title:"Josei",id:43},awardWinning:{title:"Award Winning",id:46},gourmet:{title:"Gourmet",id:47},workLife:{title:"Work Life",id:48},erotica:{title:"Erotica",id:49}},O={search:"",clearSearch:0,movie:null,currentMovies:[],movieList:[]};var v=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(s.a)(Object(s.a)({},A),{},{clearSearch:e.payload});case d:return Object(s.a)(Object(s.a)({},A),{},{search:e.payload});case l:return Object(s.a)(Object(s.a)({},A),{},{movie:e.payload});case o:return Object(s.a)(Object(s.a)({},A),{},{currentMovies:e.payload});case u:return Object(s.a)(Object(s.a)({},A),{},{movieList:e.payload});default:return Object(s.a)({},A)}},g=Object(c.a)(v),_=t(17),C=(t(51),t(16)),x=t(4);function B(A){return{type:d,payload:A}}var E=t(2),Q=t(29),N=t.n(Q),I=t.p+"static/media/search.9e58d37c.svg",y=t(0);function w(){var A=Object(E.f)(),e=Object(_.c)((function(A){return A.search})),t=Object(_.c)((function(A){return A.clearSearch})),a=Object(_.b)(),i=Object(n.useState)(e),r=Object(x.a)(i,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){a(B(c)),c.length>2&&A.push("/listing/search")}),400);return function(){clearTimeout(e)}}),[c]),Object(n.useEffect)((function(){s(""),a(B(c))}),[t]),Object(y.jsxs)("div",{className:N.a.searchBar,children:[Object(y.jsx)("input",{className:N.a.searchField,type:"text",placeholder:"Search for Animes",onChange:function(A){s(A.target.value)},value:c,name:"search",id:"search",autoComplete:"off"}),Object(y.jsx)("button",{tabIndex:"-1",className:N.a.searchButton,children:Object(y.jsx)("img",{src:I,alt:"Search Icon"})})]})}var S=t(39),P=t.n(S);function F(){return Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)(C.b,{className:P.a.logo,to:"/",children:"Anime List"}),Object(y.jsx)("div",{children:Object(y.jsx)(w,{})})]})}var X=t(5),T=t.n(X),D=t(14),L=t(13),R=t.n(L),W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA5nAAAOZwGPiYJxAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAgRQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkWHPVAAAAKt0Uk5TAAECAwQFBgcICQsMDg8QERIUFRYZGh4fICEkJScoKSorLC0vNDU2Nzo7Pj9AQUVGR0hKTE5PUVJUVVZYWVpbXF1fYWVmZ2hrbG1vcnN0d3h6e4CChIaHiIyOj5OUlZeam56foKGlp6iqq6ytrq+wsbK0tba3uLm6u76/wMPFxsrLzdDR0tPU1tfY2drc4OLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+jCJtLAAABw1JREFUeNrt3ft31wMcx/HGrJGUS4ouMuQ2k/slhDDXXCv3S6HI5tZKbsktIsRkKpfUZvX+J/3KOdXmnDVfn9fj9RfsvJ+Pc3bO9vl+P1Om2DFex+JHnnvjo++Gd32ycc2qpTMdJGozl677tf6+0ffuO9tZUjZ37WgdZlsud5qEnfHsn3WEbV7kPE1f58p9dZStn+NEjd6sLXX0DXU7UoN3wc4aayN3OVNjd/P+GseeaXepZm55jW8bOt2qiXuwxrsBAqL7E5Den4D0/gSk9ycgvT8B6f0JSO9PQHp/AtL7E5Den4D0/gSk9ycgvT8B6f0JSO9fNTDVLZP7V73smNH9qx5yzuj+degaB03uX/Vbl5Mm96/60qPC0f2r7nDV6P6180R3Te5ftdxho/vX7lOcNrl/Va/bRvevAceN7l8Hpjlvcv+qa903un+94MDR/etrF47uXwecOLp/la+TzO5f/iWY3b8WO3N0/7rNnaP71/UOHd2/LnLp6P7le2Sz+5fPB2T3H3Lr6P71gWNH9/fxkPD+/hAY3n+Hc0f3r6fdO7p/eZdIdv93HTy6f13o4tH9+1w8uv/oAidP7l+PO3l0/03Hu3ly/+0+GBrdf+88N0/uP+y14tn9r3Zz/U1/09/0N/1Nf9Pf9Df9TX/T3/Q3/U1/09/0N/1Nf9Pf9Df9TX/T3/Q3/U1/09/0N/1Nf9Pf9Df9TX/T3/TXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/3119/0N/1Nf9Pf9Df9TX/T3/Q3/U1/09/0N/1Nf9Pf9Df9TX/T3/Q3/U1/09/0N/1Nf9Pf9Df9TX/T3/Q3/U1//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/3dXH/T3/Q3/U1/09/0N/1Nf9Pf9Df9TX/T3/Q3/U1/09/0N/1Nf9Pf9Df9TX/T3/Q3/U1/09/0N/1Nf9Pf9Df99ddff/31119//fXXP2e9+kevZ1T/5M3bo3/yZnylf/Te1j96i/WPXttW/aN3o/7Ra9+uf/SW6J+9tfpHr32v/tG7TP/sPaF/9rbpn70/9I/edP2zN1//7HXrn72b9M/erZMB4Ocuh27V9UzKr4BdBLTquoqA6J1aBESvbYSA7O2oyRJwrmO34lYXAdG7rgiI3rRhArK3sQiI3t1FQPROHiIge/cXAdHr/JaA7C0rAqLXvo2A7C34hYDsXXmQgOw9UARk70UCstfxOgEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABzd4JBBBAAAEEEEAAAQQQQAABBBBAAAHHXMBCRyfACDACjAAjwBIF/EhAiwnoJ4AAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCPg3As5xdAKslQT0EUAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQMCEbJAAAowAI8AIMAKMACPACDACjAAjwAgwAowA+w8EvEYAAQQQQAABBBAwWQIWODoBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaATbyA9QQQQAABBBBAAAEEEDAp+4EAAowAI8AIMAIsU8B8RyfACDACrEXWTgABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAARMs4CxHzxbw6TRHzxbQ1+bo2QIec/MWE/DqJAu4wc2zBQye5ObZAh528mwBe2Y4ebaAVS6eLWDf6S6eLWCZg2cL6HfvbAG/T3XvbAFXOHe2gKdcO1vAZsfOFrDNrbMF7HbqcAEdTp0t4EyXzhbg6dBwATPdOVrAsCtnC/jGkbMFbHHjbAHrnThbQK8LZwuY48DRAj533mwBngoNF3Cx40YL+NBpswV0u2y0gE3umi3gfGeNFrDWUaMFfDHdTZMF7J7roskCRnvc838o4JUJA3Cva0YLWOmW0QL0zxagf7YA/bMF6J8tQP9sAfpnC9A/W4D+2QL0zxagf7YA/bMF6J8tQP9sAfpnC9C/mQLWjbP/Crdq5o5bNZ78I3e6VGN3y/4x+/90qTM1eIu+H6P/Z14T2+zNeunQUfIfeNJLYhu/8946Uv6Da2Y7T8Iuef+w+fsXOk3KZt/zzsg/6u/ru/00Z4na9CUrVm/4eHB459Y3n3/0qs4W++n+AuiAnTwSHALgAAAAAElFTkSuQmCC",k="data:image/png;base64,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";function H(A){return U.apply(this,arguments)}function U(){return(U=Object(D.a)(T.a.mark((function A(e){var t,n;return T.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch(e);case 3:return t=A.sent,console.log(t.status),A.next=7,t.json();case 7:return n=A.sent,A.abrupt("return",n);case 11:return A.prev=11,A.t0=A.catch(0),console.log(A.t0),A.abrupt("return",[]);case 15:case"end":return A.stop()}}),A,null,[[0,11]])})))).apply(this,arguments)}function M(A){var e=A.endPoint,t=Object(E.f)(),a=Object(n.useState)(!1),i=Object(x.a)(a,2),r=i[0],c=i[1],s=Object(n.useState)([]),o=Object(x.a)(s,2),l=o[0],d=o[1],u=Object(n.useState)(.7*window.innerWidth),j=Object(x.a)(u,2),b=j[0],m=j[1],f=Object(n.useRef)(null);function h(){m(.7*window.innerWidth)}function p(A){"left"===A?f.current.scroll({left:f.current.scrollLeft-.7*b,behavior:"smooth"}):f.current.scroll({left:f.current.scrollLeft+.7*b,behavior:"smooth"})}return Object(n.useEffect)((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}})),Object(n.useEffect)((function(){function A(){return(A=Object(D.a)(T.a.mark((function A(){var t;return T.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,H(e.url);case 2:t=A.sent,d(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[e.url,e.path]),0===l.length?null:Object(y.jsxs)("div",{className:R.a.row,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},children:[Object(y.jsx)("h2",{children:e.id}),Object(y.jsxs)("div",{ref:f,className:R.a.rowContent,children:[r&&Object(y.jsx)("button",{className:"".concat(R.a.leftbtn," ").concat(R.a.btn),onClick:function(){p("left")},children:Object(y.jsx)("img",{className:R.a.arrow,src:W,alt:"Left Arrow"})}),l.map((function(A){return Object(y.jsx)("div",{onClick:function(){var e;e=A.mal_id,t.push("/anime/".concat(e))},className:R.a.poster,children:Object(y.jsx)("img",{className:R.a.img,src:A.image_url,alt:"img"})},A.mal_id)})),r&&Object(y.jsx)("button",{className:"".concat(R.a.rightbtn," ").concat(R.a.btn),onClick:function(){p("right")},children:Object(y.jsx)("img",{className:R.a.arrow,src:k,alt:"Right Arrow"})})]})]})}var Z=t(10),G=t.n(Z),q=t.p+"static/media/tag.f71f94a8.svg";function z(A){var e=A.endPoint,t=Object(E.f)(),a=Object(n.useState)(!1),i=Object(x.a)(a,2),r=i[0],c=i[1],s=Object(n.useState)([]),o=Object(x.a)(s,2),l=o[0],d=o[1],u=Object(n.useState)(0),j=Object(x.a)(u,2),b=j[0],m=j[1];function f(A){m((function(e){var t=0;return"left"===A?t=e-1>0?e-1:l.length-1:"right"===A&&(t=e+1<l.length?e+1:0),t}))}return Object(n.useEffect)((function(){function A(){return(A=Object(D.a)(T.a.mark((function A(){var t;return T.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,H(e.url);case 2:t=A.sent,d(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[e.url,e.path]),Object(n.useEffect)((function(){var A=setTimeout((function(){m((function(A){return A+1<l.length?A+1:0}))}),5e3);return function(){return clearTimeout(A)}}),[l,b]),0===l.length?null:Object(y.jsxs)("div",{className:G.a.landscapeCarousel,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},children:[r&&Object(y.jsx)("button",{className:"".concat(G.a.leftbtn," ").concat(G.a.btn),onClick:function(){f("left")},children:Object(y.jsx)("img",{className:G.a.arrow,src:W,alt:"Left Arrow"})}),Object(y.jsx)("img",{className:G.a.poster,src:l[b].image_url,alt:"test"}),Object(y.jsxs)("div",{className:G.a.textContent,onClick:function(){var A;A=l[b].mal_id,t.push("/anime/".concat(A))},children:[Object(y.jsx)("h3",{className:G.a.title,children:l[b].title}),Object(y.jsx)("p",{className:G.a.synopsis,children:l[b].synopsis.length>350?"".concat(l[b].synopsis.slice(0,350),"..."):l[b].synopsis}),Object(y.jsxs)("p",{className:G.a.genre,children:[Object(y.jsx)("img",{src:q,alt:"tag"})," \xa0",l[b].genres.map((function(A,e){return Object(y.jsx)("span",{children:"".concat(A.name,", ")},e)})),l[b].explicit_genres.map((function(A,e){return Object(y.jsx)("span",{children:"".concat(A.name,", ")},e)})),"Anime"]})]}),r&&Object(y.jsx)("button",{className:"".concat(G.a.rightbtn," ").concat(G.a.btn),onClick:function(){f("right")},children:Object(y.jsx)("img",{className:G.a.arrow,src:k,alt:"Right Arrow"})})]},l[b].mal_id)}var J=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?"https://api.jikan.moe/v3/anime/".concat(A,"/").concat(e):"https://api.jikan.moe/v3/anime/".concat(A)},Y=function(A,e){return{id:"".concat(A.title," ").concat(e.title),url:"https://api.jikan.moe/v3/season/".concat(e.id,"/").concat(A.id),path:"anime"}},K=function(A){return{id:"Anime on ".concat(A.title),url:"https://api.jikan.moe/v3/schedule/".concat(A.id),path:A.id}},V=function(){var A=new Date,e=m[A.getDay()].id;return{id:"Airing Today",url:"https://api.jikan.moe/v3/schedule/".concat(e),path:e}},$=function(){return{id:"Top Airing",url:"https://api.jikan.moe/v3/top/anime/1/airing",path:"top"}},AA=function(){return{id:"Upcoming Anime",url:"https://api.jikan.moe/v3/season/later",path:"anime"}};function eA(){var A=Object(_.b)();return Object(n.useEffect)((function(){var e;A((e=1e3*Math.random(),{type:j,payload:e}))}),[]),Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)(z,{endPoint:V()}),Object(y.jsx)(M,{endPoint:$()}),Object(y.jsx)(M,{endPoint:AA()})]})}var tA=t(23),nA=t.n(tA);function aA(){var A=Object(E.f)(),e=Object(E.g)(),t=Object(E.h)().id,a=Object(n.useState)([]),i=Object(x.a)(a,2),r=i[0],c=i[1],s=Object(n.useState)("Results"),o=Object(x.a)(s,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){function A(A){return n.apply(this,arguments)}function n(){return(n=Object(D.a)(T.a.mark((function A(e){var t;return T.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,H(e.url);case 2:t=A.sent,c(t[e.path]?t[e.path]:[]);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}var a=new URLSearchParams(e.search);if("season"===t){var i=a.get("year"),r=a.get("season"),s=f(),o=Y(b[r],s[i]);A(o),d(o.id)}else if("schedule"===t){var l=a.get("day"),u=K(l=m[l]);A(u),d(u.id)}}),[t,e]),0===r.length?Object(y.jsx)("h3",{children:"No Results found!"}):Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)("h2",{className:nA.a.title,children:l}),Object(y.jsx)("div",{className:nA.a.listing,children:r.map((function(e){return Object(y.jsx)("div",{onClick:function(){!function(e){A.push("/anime/".concat(e))}(e.mal_id)},className:nA.a.poster,children:Object(y.jsx)("img",{className:nA.a.img,src:e.image_url,alt:"img"})},e.mal_id)}))})]})}var iA=t(40),rA=t.n(iA);function cA(){var A=Object(E.f)();return Object(y.jsxs)("div",{className:rA.a.error,children:[Object(y.jsx)("h4",{children:"The Page you requested is not available."}),Object(y.jsx)("button",{onClick:function(){A.push("/")},children:"Home"})]})}var sA=t(15),oA=t.n(sA);function lA(A){var e,t,n=A.anime;return Object(y.jsxs)("div",{className:oA.a.animeCard,children:[Object(y.jsxs)("div",{className:oA.a.scoreCard,children:[Object(y.jsx)("p",{className:oA.a.heading,children:"Score"}),Object(y.jsxs)("p",{className:oA.a.rating,children:[Object(y.jsx)("span",{className:oA.a.score,children:n.score})," \xa0by ",n.scored_by," users"]})]}),Object(y.jsx)("p",{className:oA.a.details,children:n.rating}),Object(y.jsx)("p",{className:oA.a.details,children:n.status}),null===(e=n.genres)||void 0===e?void 0:e.map((function(A){return Object(y.jsx)("div",{className:oA.a.genre,children:A.name},A.mal_id)})),null===(t=n.explicit_genres)||void 0===t?void 0:t.map((function(A){return Object(y.jsx)("div",{className:oA.a.genre,children:A.name},A.mal_id)}))]})}var dA=t(19),uA=t.n(dA);function jA(A){var e=A.anime;return Object(y.jsxs)("div",{className:uA.a.header,children:[Object(y.jsxs)("div",{className:uA.a.titleSection,children:[Object(y.jsx)("p",{className:uA.a.title,children:e.title}),Object(y.jsx)("p",{className:uA.a.titleEnglish,children:e.title_english})]}),Object(y.jsxs)("div",{className:uA.a.infoSection,children:[Object(y.jsx)("p",{children:e.premiered}),Object(y.jsxs)("p",{children:[e.episodes," episodes"]})]})]})}var bA=t(6),mA=t.n(bA);function fA(){var A=Object(E.h)().id,e=Object(n.useState)({}),t=Object(x.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),c=Object(x.a)(r,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(D.a)(T.a.mark((function A(e){var t,n;return T.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,H(J(e));case 2:return t=A.sent,A.next=5,H(J(e,"recommendations"));case 5:n=A.sent,i(t||{}),o(n&&n.recommendations?n.recommendations:[]);case 8:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(A){e.apply(this,arguments)}(A)}),[A]),Object(y.jsxs)("div",{className:mA.a.anime,children:[Object(y.jsxs)("div",{className:mA.a.leftContainer,children:[Object(y.jsx)("img",{className:mA.a.poster,src:a.image_url,alt:"Poster"}),Object(y.jsx)(lA,{anime:a})]}),Object(y.jsxs)("div",{className:mA.a.rightContainer,children:[Object(y.jsx)(jA,{anime:a}),Object(y.jsx)("p",{className:mA.a.synopsis,children:a.synopsis}),Object(y.jsx)(hA,{anime:a}),Object(y.jsx)(pA,{recommendations:s})]})]})}function hA(A){var e,t,a=A.anime;return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{className:mA.a.contentHeading,children:"Related Anime"}),Object(y.jsx)("div",{className:mA.a.contentCardOuter,children:Object(y.jsx)("div",{className:mA.a.contentCardInner,style:{WebkitJustifyContent:"flex-start"},children:Object(y.jsx)("ul",{className:mA.a.relatedList,children:null===(e=Object.keys(null!==(t=a.related)&&void 0!==t?t:{}))||void 0===e?void 0:e.map((function(A){var e,t;return Object(y.jsx)(n.Fragment,{children:null===(e=a.related)||void 0===e||null===(t=e[A])||void 0===t?void 0:t.map((function(e){return"anime"===e.type?Object(y.jsx)("li",{children:Object(y.jsx)(C.b,{className:mA.a.relatedItem,to:"/anime/".concat(e.mal_id),children:"".concat(e.name," (").concat(A,")")})},e.mal_id):null}))},A)}))})})})]})}function pA(A){var e=A.recommendations,t=Object(E.f)();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{className:mA.a.contentHeading,children:"Recommendations"}),Object(y.jsx)("div",{className:mA.a.contentCardOuter,children:Object(y.jsx)("div",{className:mA.a.contentCardInner,style:{maxHeight:"400px"},children:e.map((function(A){return Object(y.jsxs)("div",{className:mA.a.recommendationsPoster,onClick:function(){var e;e=A.mal_id,t.push("/anime/".concat(e))},children:[Object(y.jsx)("img",{src:A.image_url,alt:"poster"}),Object(y.jsx)("div",{children:A.recommendation_count})]},A.mal_id)}))})})]})}var OA=t(41),vA=t.n(OA);function gA(){return Object(y.jsx)(n.Fragment,{children:Object(y.jsx)("div",{className:vA.a.mainContent,children:Object(y.jsxs)(E.c,{children:[Object(y.jsx)(E.a,{exact:!0,path:"/",children:Object(y.jsx)(eA,{})}),Object(y.jsx)(E.a,{path:"/anime/:id",children:Object(y.jsx)(fA,{})}),Object(y.jsx)(E.a,{path:"/listing/:id",children:Object(y.jsx)(aA,{})}),Object(y.jsx)(E.a,{path:"*",children:Object(y.jsx)(cA,{})})]})})})}var _A=t(36),CA=t.n(_A),xA=t(42),BA=t.n(xA);function EA(A){var e=A.active,t=A.setActive,n=A.dropDownKeys,a=A.dropDownList,i=A.containerWidth;return Object(y.jsx)("div",{className:BA.a.dropDown,children:Object(y.jsx)("select",{value:e,onChange:function(A){var e=A.target.value;t(e)},style:{width:i},children:n.map((function(A){return Object(y.jsx)("option",{value:A,children:a[A].title},a[A].id)}))})})}var QA=t(20),NA=t.n(QA);function IA(){var A=Object(E.f)(),e=Object(n.useState)("fall"),t=Object(x.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)("2021"),c=Object(x.a)(r,2),s=c[0],o=c[1];return Object(y.jsxs)("div",{className:NA.a.seasonFilter,children:[Object(y.jsxs)("div",{className:NA.a.filterContainer,children:[Object(y.jsxs)("div",{className:NA.a.filterDetail,children:[Object(y.jsx)("h5",{children:"Season"}),Object(y.jsx)(EA,{active:a,setActive:function(A){i(A)},containerWidth:"100px",dropDownKeys:Object.keys(b),dropDownList:b})]}),Object(y.jsxs)("div",{className:NA.a.filterDetail,children:[Object(y.jsx)("h5",{children:"Year"}),Object(y.jsx)(EA,{active:s,setActive:function(A){o(A)},containerWidth:"100px",dropDownKeys:Object.keys(f()).sort((function(A,e){return e-A})),dropDownList:f()})]})]}),Object(y.jsx)("button",{onClick:function(){A.push("/listing/season?season=".concat(a,"&year=").concat(s))},className:NA.a.button,children:"Go"})]})}var yA=t(38),wA=t(37),SA=t.n(wA);function PA(A){var e=A.value,t=A.setSelected,n=A.selected,a=A.id;return Object(y.jsx)("div",{className:"".concat(SA.a.container," ").concat(n.has(a)?SA.a.selected:""),onClick:function(){t(a)},children:e})}var FA=t(30),XA=t.n(FA);function TA(){var A=Object(n.useState)(new Set),e=Object(x.a)(A,2),t=e[0],a=e[1];function i(A){t.has(A)?a((function(e){return e.delete(A),console.log(e),new Set(Object(yA.a)(e))})):a((function(e){return e.add(A),console.log(e),new Set(Object(yA.a)(e))}))}return Object(y.jsxs)("div",{className:XA.a.genreFilter,children:[Object(y.jsx)("div",{className:XA.a.titleContainer,children:Object(y.jsx)("h5",{children:"Genre"})}),Object(y.jsx)("div",{className:XA.a.genreFilterInner,children:Object.keys(p).map((function(A){return Object(y.jsx)(PA,{id:p[A].id,value:p[A].title,setSelected:i,selected:t},A)}))})]})}var DA=t(31),LA=t.n(DA);function RA(){var A=Object(n.useState)(new Set),e=Object(x.a)(A,2),t=e[0],a=e[1];function i(A){var e=new Set;t.has(A)||e.add(A),a(e)}return Object(y.jsxs)("div",{className:LA.a.ratingFilter,children:[Object(y.jsx)("div",{className:LA.a.titleContainer,children:Object(y.jsx)("h5",{children:"Rating"})}),Object(y.jsx)("div",{className:LA.a.ratingContainer,children:Object.keys(h).map((function(A){return Object(y.jsx)(PA,{id:h[A].id,value:h[A].title,setSelected:i,selected:t},A)}))})]})}var WA=t(24),kA=t.n(WA);function HA(){var A=Object(E.f)(),e=Object(n.useState)(0),t=Object(x.a)(e,2),a=t[0],i=t[1];return Object(y.jsxs)("div",{className:kA.a.scheduleFilter,children:[Object(y.jsx)("h5",{children:"Schedule"}),Object(y.jsxs)("div",{className:kA.a.scheduleContainer,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{className:kA.a.scheduleText,children:"Day of the week :"}),Object(y.jsx)(EA,{active:a,setActive:function(A){i(A)},containerWidth:"150px",dropDownKeys:Object.keys(m),dropDownList:m})]}),Object(y.jsx)("button",{onClick:function(){A.push("/listing/schedule?day=".concat(a))},className:kA.a.scheduleButton,children:"Go"})]})]})}function UA(){return Object(y.jsx)("div",{className:CA.a.subMenu,children:Object(y.jsxs)("div",{className:CA.a.subMenuInner,children:[Object(y.jsx)(IA,{}),Object(y.jsx)(TA,{}),Object(y.jsx)(RA,{}),Object(y.jsx)(HA,{})]})})}var MA=t(25),ZA=t.n(MA);function GA(){return Object(y.jsx)(n.Fragment,{children:Object(y.jsxs)(C.a,{basename:"/anime-list-app",children:[Object(y.jsxs)("div",{className:ZA.a.mainSection,children:[Object(y.jsx)("div",{className:ZA.a.header,children:Object(y.jsx)(F,{})}),Object(y.jsx)("div",{className:ZA.a.mainContent,children:Object(y.jsx)(gA,{})})]}),Object(y.jsx)("div",{className:ZA.a.subMenu,children:Object(y.jsx)(UA,{})})]})})}r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(_.a,{store:g,children:Object(y.jsx)(GA,{})})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.476f0ec3.chunk.js.map
(this.webpackJsonpgym=this.webpackJsonpgym||[]).push([[0],{34:function(e,n,t){e.exports=t(47)},39:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(18),o=t.n(c),i=(t(39),t(1)),u=t(2);function l(){var e=Object(i.a)([""]);return l=function(){return e},e}function s(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  /* background-color: blue; */\n  /* max-width: 50vw; */\n"]);return s=function(){return e},e}var f=u.a.nav(s());u.a.nav(l());function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createElement("linearGradient",{id:"EIPc0qTNCX0EujYwtxKaXa",x1:12.066,x2:34.891,y1:.066,y2:22.891,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{offset:.237,stopColor:"#3bc9f3"}),a.a.createElement("stop",{offset:.85,stopColor:"#1591d8"})),h=a.a.createElement("path",{fill:"url(#EIPc0qTNCX0EujYwtxKaXa)",d:"M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"}),b=a.a.createElement("linearGradient",{id:"EIPc0qTNCX0EujYwtxKaXb",x1:12.066,x2:34.891,y1:12.066,y2:34.891,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{offset:.237,stopColor:"#3bc9f3"}),a.a.createElement("stop",{offset:.85,stopColor:"#1591d8"})),E=a.a.createElement("path",{fill:"url(#EIPc0qTNCX0EujYwtxKaXb)",d:"M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"}),g=a.a.createElement("linearGradient",{id:"EIPc0qTNCX0EujYwtxKaXc",x1:12.066,x2:34.891,y1:24.066,y2:46.891,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{offset:.237,stopColor:"#3bc9f3"}),a.a.createElement("stop",{offset:.85,stopColor:"#1591d8"})),v=a.a.createElement("path",{fill:"url(#EIPc0qTNCX0EujYwtxKaXc)",d:"M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"}),O=function(e){var n=e.svgRef,t=e.title,r=m(e,["svgRef","title"]);return a.a.createElement("svg",d({viewBox:"0 0 48 48",width:"48px",height:"48px",ref:n},r),t?a.a.createElement("title",null,t):null,p,h,b,E,g,v)},x=a.a.forwardRef((function(e,n){return a.a.createElement(O,d({svgRef:n},e))})),w=(t.p,t(16));function j(){var e=Object(i.a)(["\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: white;\n  position: absolute;\n  left: 0;\n  z-index: -1;\n"]);return j=function(){return e},e}function y(){var e=Object(i.a)(["\n  margin-top: 25%;\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return e},e}function k(){var e=Object(i.a)(["\n  height: 100px;\n  /* background-color: #f7fafb; */\n  background-color: black;\n  /* color: #3598cc; */\n  text-align: center;\n  line-height: 100px;\n  font-size: 20px;\n  color: white;\n  border: none;\n  margin-bottom: 10px;\n  &:focus {\n    outline: none;\n  }\n"]);return k=function(){return e},e}var C=Object(u.a)(w.b)(k()),S=u.a.div(y()),M=u.a.div(j());function A(){var e=Object(i.a)(["\n  height: 100px;\n  /* background-color: #f7fafb; */\n  background-color: black;\n  /* color: #3598cc; */\n  font-size: 20px;\n  color: white;\n  border: none;\n  margin-bottom: 10px;\n  &:focus {\n    outline: none;\n  }\n"]);return A=function(){return e},e}u.a.button(A());var H=t(10),N={SHOW_OR_HIDE_MENU:"SHOW_OR_HIDE_MENU"},_=function(e){return{type:N.SHOW_OR_HIDE_MENU,payload:e}},R=Object(H.b)(null,(function(e){return{showMenuChangeAction:function(n){return e(_(n))}}}))((function(e){var n=e.showMenuChangeAction,t=function(){n(!1)};return a.a.createElement(M,null,a.a.createElement(S,null,[{id:1,name:"Arrange Training",path:"/arrangetraining"},{id:2,name:"History",path:"/history"},{id:3,name:"View Training",path:"/viewtraining"},{id:4,name:"Start",path:"/",exact:!0}].map((function(e){return a.a.createElement(C,{exact:!!e.exact&&e.exact,to:e.path,key:e.id,onClick:t},e.name)}))))})),T=t(9),I=Object(T.a)([function(e){return e.menu}],(function(e){return e.showMenu})),z=function(e){return e.stopwatch},U=Object(T.a)([z],(function(e){return e.stopwatchActive})),W=Object(T.a)([z],(function(e){return e.seriesSeconds})),X=Object(T.a)([z],(function(e){return e.workoutSeconds})),P=Object(T.a)([z],(function(e){return e.restSeconds})),V=Object(T.a)([z],(function(e){return e.seriesMinutes})),G=Object(T.a)([z],(function(e){return e.workoutMinutes})),D=Object(T.a)([z],(function(e){return e.restMinutes})),K="SHOW_OR_HIDE_STOPWATCH",q="SERIES_SECONDS_CHANGE",Y="WORKOUT_SECONDS_CHANGE",B="REST_SECONDS_CHANGE",J="SERIES_MINUTES_CHANGE",F="WORKOUT_MINUTES_CHANGE",L="REST_MINUTES_CHANGE",Q=function(e){return{type:K,payload:e}},Z=Object(H.b)((function(e){return{showMenu:I(e),stopwatchActive:U(e)}}),(function(e){return{showMenuChangeAction:function(n){return e(_(n))},showStopwatchChangeAction:function(n){return e(Q(n))}}}))((function(e){var n=e.showMenu,t=e.showMenuChangeAction,r=(e.stopwatchActive,e.showStopwatchChangeAction);return a.a.createElement(f,null,a.a.createElement(x,{onClick:function(){t(!n),r(!1)}}),n&&a.a.createElement(R,null))})),$=t(5);function ee(){var e=Object(i.a)(["\n  /* background-color: gray; */\n  margin-top: 80px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n  z-index: 2;\n  background-color: gray;\n  position: absolute;\n  min-width: 100vw;\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return te=function(){return e},e}var re=u.a.div(te()),ae=u.a.div(ne()),ce=u.a.div(ee());function oe(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: black;\n  justify-content: flex-end;\n  /* z-index: 5; */\n"]);return oe=function(){return e},e}var ie=u.a.div(oe());function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function le(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var se=a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:"b",x1:269.78,x2:227.12,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#a00",offset:0}),a.a.createElement("stop",{stopColor:"#a00",stopOpacity:0,offset:1}))),fe=a.a.createElement("g",{transform:"translate(-62.197 -339.88)"},a.a.createElement("g",{transform:"matrix(.41873 0 0 .41873 1.204 280.4)"},a.a.createElement("g",{fill:"#4d4d4d"},a.a.createElement("path",{d:"m333.05 281.97a93.692 93.692 0 1 1 -187.38 0 93.692 93.692 0 1 1 187.38 0z"}),a.a.createElement("path",{d:"m232.12 175.17h14.474a3.5355 3.5355 0 0 1 3.5355 3.5355v11.396a3.5355 3.5355 0 0 1 -3.5355 3.5355h-14.474a3.5355 3.5355 0 0 1 -3.5355 -3.5355v-11.396a3.5355 3.5355 0 0 1 3.5355 -3.5355"}),a.a.createElement("path",{d:"m231.98 162.84h14.754a8.9357 8.9357 0 0 1 8.9357 8.9357 8.9357 8.9357 0 0 1 -8.9357 8.9357h-14.754a8.9357 8.9357 0 0 1 -8.9357 -8.9357 8.9357 8.9357 0 0 1 8.9357 -8.9357"})),a.a.createElement("path",{d:"m234.84 145.62h10.465a18.775 11.696 0 0 1 18.775 11.696v1.2311a18.775 11.696 0 0 1 -18.775 11.696h-10.465a18.775 11.696 0 0 1 -18.775 -11.696v-1.2311a18.775 11.696 0 0 1 18.775 -11.696",fill:"none",stroke:"#4d4d4d",strokeLinejoin:"round",strokeWidth:7.1328}),a.a.createElement("path",{d:"m317.49 281.97a78.135 78.135 0 1 1 -156.27 0 78.135 78.135 0 1 1 156.27 0z",fill:"#fff"}),a.a.createElement("path",{id:"a",d:"m238.29 208.96h2.1213a3.5355 3.5355 0 0 1 3.5355 3.5355v11.314a3.5355 3.5355 0 0 1 -3.5355 3.5355h-2.1213a3.5355 3.5355 0 0 1 -3.5355 -3.5355v-11.314a3.5355 3.5355 0 0 1 3.5355 -3.5355",fill:"#4d4d4d"}),a.a.createElement("use",{transform:"translate(0 125.87)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(0 -1 1 0 -42.436 521.32)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(0 -1 1 0 81.308 521.32)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("g",{fill:"#808080"},a.a.createElement("use",{transform:"matrix(.25365 .14645 -.21784 .37731 257.75 108.97)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(.14645 .25365 -.37731 .21784 340.68 141.55)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(.25365 -.14645 -.21784 -.37731 257.75 453.16)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(.14645 -.25365 -.37731 -.21784 340.68 420.58)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(-.25365 -.14645 .21784 -.37731 221.03 453.16)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(-.14645 -.25365 .37731 -.21784 138.11 420.58)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(-.25365 .14645 .21784 .37731 221.03 109.4)",width:744.09448,height:1052.3622,xlinkHref:"#a"}),a.a.createElement("use",{transform:"matrix(-.14645 .25365 .37731 .21784 138.11 141.98)",width:744.09448,height:1052.3622,xlinkHref:"#a"})),a.a.createElement("path",{d:"m239.63 229.68c-1.932 0.00758-3.893 0.11091-5.8729 0.32402-0.61141 0.02061-1.16 0.38112-1.4216 0.93414s-0.1922 1.2058 0.17972 1.6915 0.98408 0.72289 1.5862 0.61456c14.978-1.6122 28.266 2.9071 39.146 13.325 0.40517 0.47159 1.0429 0.67227 1.6451 0.51768s1.0645-0.63765 1.1924-1.2461-0.10064-1.2367-0.58961-1.6208c-10.068-9.6404-22.341-14.594-35.865-14.541z",fill:"url(#b)"}),a.a.createElement("path",{d:"m244.39 239.3c-0.81369 0.11915-1.4119 0.82464-1.3965 1.6469s0.63969 1.5048 1.4573 1.5934c8.3278 1.0765 15.002 4.1284 21.284 9.7004 0.67666 0.59838 1.7103 0.53491 2.3087-0.14176s0.53491-1.7103-0.14176-2.3087c-6.7094-5.9512-14.131-9.3405-23.026-10.49-0.1611-0.02424-0.32493-0.02424-0.48603 0z",fill:"url(#b)"}),a.a.createElement("path",{d:"m238.32 220.83c-5.4159 0.14775-10.922 1.0387-16.404 2.6732-0.59108 0.14115-1.0549 0.59876-1.2041 1.1879s0.04104 1.2123 0.49373 1.6178 1.093 0.52605 1.6622 0.3131c20.871-6.2233 41.629-1.0229 57.109 14.298 0.64311 0.63752 1.6813 0.63299 2.3188-0.01012s0.63299-1.6813-0.01013-2.3188c-12.197-12.071-27.718-18.204-43.966-17.761z",fill:"url(#b)"}),a.a.createElement("path",{d:"m294.16 196.88-3.182 12.607 12.374 9.5459 11.942-6.9801c0-6.1872-15.831-16.94-21.135-15.172z",fill:"#4d4d4d",fillRule:"evenodd"}),a.a.createElement("path",{d:"m294.03 237.32c-1.0946-1.2567-67.806 52.861-67.806 52.861l2.537 3.1854s66.364-54.79 65.269-56.047z",fill:"#1a1a1a",fillRule:"evenodd"}))),de=function(e){var n=e.svgRef,t=e.title,r=le(e,["svgRef","title"]);return a.a.createElement("svg",ue({viewBox:"0 0 78.46241 97.815857",ref:n},r),t?a.a.createElement("title",null,t):null,se,fe)},me=a.a.forwardRef((function(e,n){return a.a.createElement(de,ue({svgRef:n},e))}));t.p;function pe(){var e=Object(i.a)(["\n  max-height: 37px;\n  max-width: 37x;\n  min-height: 37px;\n  min-width: 37px;\n  /* background-color: pink; */\n"]);return pe=function(){return e},e}function he(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return he=function(){return e},e}var be=u.a.div(he()),Ee=u.a.div(pe());function ge(){var e=Object(i.a)(["\n  font-size: 30px;\n"]);return ge=function(){return e},e}function ve(){var e=Object(i.a)(["\n  background-color: black;\n  color: white;\n  font-size: 30px;\n  border: none;\n  margin-bottom: 2px;\n  &:focus {\n    outline: none;\n  }\n\n  min-height: 40px;\n  min-width: 40px;\n  margin-left: 40px;\n  margin-right: 40px;\n"]);return ve=function(){return e},e}function Oe(){var e=Object(i.a)([""]);return Oe=function(){return e},e}function xe(){var e=Object(i.a)([""]);return xe=function(){return e},e}function we(){var e=Object(i.a)(["\n  display: flex;\n"]);return we=function(){return e},e}function je(){var e=Object(i.a)(["\n  margin-bottom: 50px;\n  max-width: 50%;\n  /* background-color: pink; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return je=function(){return e},e}function ye(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  margin-top: 50px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  /* background-color: green; */\n  width: 100%;\n  align-items: center;\n"]);return ye=function(){return e},e}function ke(){var e=Object(i.a)(["\n  min-height: 100vh;\n  min-width: 100vw;\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  background-color: white;\n"]);return ke=function(){return e},e}var Ce=u.a.div(ke()),Se=u.a.div(ye()),Me=u.a.div(je()),Ae=u.a.div(we()),He=u.a.div(xe()),Ne=u.a.p(Oe()),_e=u.a.button(ve()),Re=u.a.span(ge()),Te=Object(H.b)((function(e){return{seriesSeconds:W(e),workoutSeconds:X(e),restSeconds:P(e),seriesMinutes:V(e),workoutMinutes:G(e),restMinutes:D(e)}}),(function(e){return{seriesChangeValueAction:function(n){return e(function(e){return{type:q,payload:e}}(n))},restChangeValueAction:function(n){return e(function(e){return{type:B,payload:e}}(n))},workoutChangeValueAction:function(n){return e(function(e){return{type:Y,payload:e}}(n))},seriesChangeValueActionMinutes:function(n){return e(function(e){return{type:J,payload:e}}(n))},workoutChangeValueActionMinutes:function(n){return e(function(e){return{type:F,payload:e}}(n))},restChangeValueActionMinutes:function(n){return e(function(e){return{type:L,payload:e}}(n))}}}))((function(e){var n=e.seriesSeconds,t=e.workoutSeconds,r=e.restSeconds,c=(e.seriesMinutes,e.workoutMinutes),o=e.restMinutes,i=e.seriesChangeValueAction,u=e.restChangeValueAction,l=e.workoutChangeValueAction,s=(e.seriesChangeValueActionMinutes,e.workoutChangeValueActionMinutes),f=e.restChangeValueActionMinutes,d=function(e){"substract"===e?i(--n):"add"===e&&i(++n)},m=function(e){"workout-substract"===e?t>0?l(--t):0===t&&(s(--c),l(t=59)):"workout-add"===e?t<59?l(++t):t>=59&&(l(t=0),s(++c)):"rest-substract"===e?r>0?u(--r):0===r&&(f(--o),u(r=59)):"rest-add"===e&&(r<59?u(++r):r>=59&&(u(r=0),f(++o)))},p=function(){console.log("interwal wystartowal"),t>0?l(--t):0===t&&(s(--c),l(t=59))};return a.a.createElement(Ce,null,a.a.createElement(Se,null,a.a.createElement(Me,null,a.a.createElement(Ne,null,"SERIES"),a.a.createElement(Ae,null,a.a.createElement(He,null,a.a.createElement(_e,{onClick:d.bind(void 0,"substract")},"-")),a.a.createElement(Re,null," ",n," "),a.a.createElement(He,null,a.a.createElement(_e,{onClick:d.bind(void 0,"add")}," ","+"," ")))),a.a.createElement(Me,null,a.a.createElement(Ne,null,"WORKOUT"),a.a.createElement(Ae,null,a.a.createElement(He,null,a.a.createElement(_e,{onClick:m.bind(void 0,"workout-substract")},"-")),a.a.createElement(Re,null," ","".concat(c<10?"0"+c:c),":","".concat(t<10?"0"+t:t)),a.a.createElement(He,null,a.a.createElement(_e,{onClick:m.bind(void 0,"workout-add")},"+")))),a.a.createElement(Me,null,a.a.createElement(Ne,null,"REST"),a.a.createElement(Ae,null,a.a.createElement(He,null,a.a.createElement(_e,{onClick:m.bind(void 0,"rest-substract")},"-")),a.a.createElement(Re,null," ","".concat(o<10?"0"+o:o),":","".concat(r<10?"0"+r:r)),a.a.createElement(He,null,a.a.createElement(_e,{onClick:m.bind(void 0,"rest-add")},"+")))),a.a.createElement(_e,{onClick:function(){setInterval(p,1e3)}},"Start")))})),Ie=Object(H.b)((function(e){return{stopwatchActive:U(e)}}),(function(e){return{showStopwatchChangeAction:function(n){return e(Q(n))},showMenuChangeAction:function(n){return e(_(n))}}}))((function(e){var n=e.stopwatchActive,t=e.showStopwatchChangeAction,r=e.showMenuChangeAction;return a.a.createElement(be,null,a.a.createElement(Ee,null,a.a.createElement(me,{onClick:function(){t(!n),r(!1)}})),n&&a.a.createElement(Te,null))})),ze=function(){return a.a.createElement(ie,null,a.a.createElement(Ie,null),a.a.createElement(Z,null))},Ue=t(20),We=t(21),Xe="SET_EXERCISE_ACTION",Pe="SET_TRAINING_ACTION",Ve="NUMBER_CHANGE",Ge=function(e){return e.arrangeTraining},De=Object(T.a)([Ge],(function(e){return e.currentWorkout})),Ke=Object(T.a)([Ge],(function(e){return e.number}));function qe(){var e=Object(i.a)([""]);return qe=function(){return e},e}function Ye(){var e=Object(i.a)(["\n  margin-left: 4px;\n  margin-right: 4px;\n  margin-top: 8px;\n  display: block;\n  height: 40px;\n  width: 120px;\n  background-color: black;\n  font-size: 15px;\n  color: white;\n  border: none;\n  margin-bottom: 10px;\n  &:focus {\n    outline: none;\n  }\n"]);return Ye=function(){return e},e}function Be(){var e=Object(i.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 50px;\n  display: flex;\n"]);return Be=function(){return e},e}function Je(){var e=Object(i.a)([""]);return Je=function(){return e},e}function Fe(){var e=Object(i.a)(["\n  background-color: #e9e9e9;\n  height: 35px;\n  width: 250px;\n  margin-bottom: 10px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"]);return Fe=function(){return e},e}function Le(){var e=Object(i.a)([""]);return Le=function(){return e},e}function Qe(){var e=Object(i.a)(["\n  margin-left: 7px;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(i.a)([""]);return $e=function(){return e},e}function en(){var e=Object(i.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 290px;\n  /* background-color: red; */\n"]);return en=function(){return e},e}function nn(){var e=Object(i.a)(["\n  /* background-color: red; */\n"]);return nn=function(){return e},e}var tn=u.a.div(nn()),rn=u.a.div(en()),an=u.a.div($e()),cn=u.a.div(Ze()),on=u.a.div(Qe()),un=(u.a.form(Le()),u.a.input(Fe())),ln=(u.a.textarea(Je()),u.a.div(Be())),sn=u.a.button(Ye()),fn=(u.a.p(qe()),Object(H.b)((function(e){return{currentWorkout:De(e),number:Ke(e)}}),(function(e){return{setExerciseAction:function(n){return e(function(e){return{type:Xe,payload:e}}(n))},numberChange:function(n){return e(function(e){return{type:Ve,payload:e}}(n))}}}))((function(e){var n=e.currentWorkout,t=e.number,c=e.setExerciseAction,o=e.numberChange,i=Object(r.useState)(""),u=Object(We.a)(i,2),l=u[0],s=u[1],f=Object(r.useState)(""),d=Object(We.a)(f,2),m=d[0],p=d[1],h=Object(r.useState)(""),b=Object(We.a)(h,2),E=b[0],g=b[1],v=function(e,n){"exercise-name"===e?s(n.target.value):"repetitions"===e?p(n.target.value):"weight"===e&&g(n.target.value)},O=Object(Ue.a)(n).map((function(e){return a.a.createElement(cn,{key:e.id},a.a.createElement(on,null,e.exerciseName),a.a.createElement(on,null,e.repetitions,"x"),a.a.createElement(on,null,e.weight,"kg"))}));return a.a.createElement(tn,null,a.a.createElement(an,null,O),a.a.createElement(rn,null,a.a.createElement(un,{onChange:v.bind(void 0,"exercise-name"),type:"menu",placeholder:"exercise name"}),a.a.createElement(un,{onChange:v.bind(void 0,"repetitions"),type:"number",placeholder:"repetitions"}),a.a.createElement(un,{onChange:v.bind(void 0,"weight"),type:"number",placeholder:"weight"})),a.a.createElement(ln,null,a.a.createElement(sn,{onClick:function(e){e.preventDefault(),c({id:t+1,exerciseName:l,repetitions:m,weight:E}),o(t+1)}},"Set Exercise"),a.a.createElement(sn,null,"Set Training")))})));function dn(){var e=Object(i.a)([""]);return dn=function(){return e},e}u.a.div(dn());var mn=function(){return a.a.createElement("div",null,"Check out your progress history!")};function pn(){var e=Object(i.a)([""]);return pn=function(){return e},e}u.a.div(pn());var hn=function(){return a.a.createElement("div",null,"Welcome to the best training application!")};function bn(){var e=Object(i.a)([""]);return bn=function(){return e},e}u.a.div(bn());var En=function(){return a.a.createElement("div",null,"View your current training!")},gn=(t(46),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null,a.a.createElement(ae,null,a.a.createElement(ze,null)),a.a.createElement(ce,null,a.a.createElement($.a,{path:"/",component:hn,exact:!0}),a.a.createElement($.a,{path:"/arrangetraining",component:fn}),a.a.createElement($.a,{path:"/history",component:mn}),a.a.createElement($.a,{path:"/viewtraining",component:En}))))}),vn=t(14),On=t(33),xn=t.n(On),wn=t(4),jn={showMenu:!0},yn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case N.SHOW_OR_HIDE_MENU:return Object(wn.a)(Object(wn.a)({},e),{},{showMenu:n.payload});default:return e}},kn={stopwatchActive:!1,seriesMinutes:0,workoutMinutes:1,restMinutes:3,seriesSeconds:0,workoutSeconds:56,restSeconds:57},Cn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K:return Object(wn.a)(Object(wn.a)({},e),{},{stopwatchActive:n.payload});case q:return Object(wn.a)(Object(wn.a)({},e),{},{seriesSeconds:n.payload});case Y:return Object(wn.a)(Object(wn.a)({},e),{},{workoutSeconds:n.payload});case B:return Object(wn.a)(Object(wn.a)({},e),{},{restSeconds:n.payload});case J:return Object(wn.a)(Object(wn.a)({},e),{},{seriesMinutes:n.payload});case F:return Object(wn.a)(Object(wn.a)({},e),{},{workoutMinutes:n.payload});case L:return Object(wn.a)(Object(wn.a)({},e),{},{restMinutes:n.payload});default:return e}},Sn={number:8,currentWorkout:[{id:1,exerciseName:"Przysiad",repetitions:"12",weight:"100"},{id:2,exerciseName:"Martwy Ci\u0105g",repetitions:"10",weight:"120"}]},Mn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Xe:return Object(wn.a)(Object(wn.a)({},e),{},{currentWorkout:[].concat(Object(Ue.a)(e.currentWorkout),[n.payload])});case Pe:return Object(wn.a)({},e);case Ve:return Object(wn.a)(Object(wn.a)({},e),{},{number:n.payload});default:return e}},An=Object(vn.c)({menu:yn,stopwatch:Cn,arrangeTraining:Mn}),Hn=[xn.a],Nn=Object(vn.d)(An,vn.a.apply(void 0,Hn));o.a.render(a.a.createElement(H.a,{store:Nn},a.a.createElement(w.a,null,a.a.createElement(gn,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b3b6476c.chunk.js.map
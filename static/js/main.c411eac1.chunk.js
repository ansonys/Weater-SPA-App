(this["webpackJsonpWeather-SPA-App"]=this["webpackJsonpWeather-SPA-App"]||[]).push([[0],{19:function(e,t,n){},42:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(20),s=n.n(i),o=(n(42),n(19),n(71)),j=n(73),l=n(74),d=n(72),b=n(16),h=n(4),p=n(32);function u(e){var t=Object(c.useState)(""),n=Object(p.a)(t,2),a=n[0],i=n[1];return Object(r.jsxs)("div",{style:{paddingTop:"5vh",textAlign:"center"},children:[Object(r.jsx)("form",{onSubmit:function(e){!function(){var e="https://api.openweathermap.org/data/2.5/weather?APPID=9b7ab6a64645f6c6b2aa462f817e4083&lang=ja&units=metric&q="+a+",jp;",t=new XMLHttpRequest;t.open("GET",e),t.send(),t.onreadystatechange=function(){4===t.readyState&&200===t.status&&function(e){var t=JSON.parse(e),n=t.weather[0].description,r=t.name,c=t.main.temp;"\u539a\u3044\u96f2"!==n&&"\u96f2"!==n&&"\u66c7\u308a\u304c\u3061"!==n&&"\u8584\u3044\u96f2"!==n||(n="\u66c7\u308a");if(!a)return;var i=document.createElement("p"),s=document.getElementById("parent-div"),o=document.createTextNode("\u73fe\u5728\u306e"+r+"\u306e\u5929\u6c17\u306f"+n+"\u3067\u3001\u6c17\u6e29\u306f"+c+"\u5ea6\u3067\u3059\u3002");i.appendChild(o),s.insertBefore(i,s.firstChild)}(t.responseText)}}(),e.preventDefault()},children:Object(r.jsxs)("label",{children:[e.name,":",Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){i(e.target.value)},style:{height:"5vh",outline:"none"},placeholder:"\u4f8b: \u5927\u962a\u5e02"}),Object(r.jsx)("input",{type:"submit",value:"\u8abf\u3079\u308b",style:{height:"5vh",cursor:"pointer"}})]})}),Object(r.jsx)("button",{onClick:function(){var e=document.getElementById("parent-div");e.hasChildNodes()&&e.removeChild(e.firstChild)},children:"\u5929\u6c17\u4e88\u5831\u3092\u524a\u9664\u3059\u308b"}),Object(r.jsx)("div",{id:"parent-div"})]})}var O=n(29),x=n(30),v=n(34),m=n(33),f=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{style:{paddingTop:"13vh"},children:Object(r.jsxs)("h2",{children:["\u4eca\u306e\u5929\u6c17\u306f\uff1f\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002",Object(r.jsx)("br",{}),"\u7a7a\u6b04\u306b\u90fd\u5e02\u3084\u5e02\u3092\u5165\u529b\u3059\u308b\u3068\u3001\u4eca\u306e\u5929\u6c17\u3084\u6c17\u6e29\u304c\u308f\u304b\u308a\u307e\u3059\u3002"]})})}}]),n}(c.Component);function g(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{}),Object(r.jsx)(u,{name:"\u5e02\u3084\u90fd\u5e02\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"})]})}var C=n.p+"static/media/TwitterIcon.7571acbc.PNG",E=n(31),y=n.n(E);function N(){return Object(r.jsxs)("div",{className:"profile-container",children:[Object(r.jsxs)("h2",{children:["PR",Object(r.jsx)(y.a,{className:"profileicon"}),"FILE"]}),Object(r.jsxs)("div",{className:"profile-context",children:[Object(r.jsx)("img",{className:"twittericon",src:C}),Object(r.jsxs)("p",{children:["SHUJI'S PORTFOLIO\u3078\u3088\u3046\u3053\u305d\u30022000\u5e74\u751f\u307e\u308c\u306e20\u6b73\u3067\u3059\u3002",Object(r.jsx)("br",{}),"\u73fe\u5728\u306f\u72ec\u5b66\u30672020\u5e749\u6708\u304b\u3089\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u306e\u8ee2\u8077\u3092\u76ee\u6307\u3057\u3001",Object(r.jsx)("br",{}),"HTML,CSS,JavaScript,React,Python\u3092\u72ec\u5b66\u3067\u52c9\u5f37\u3057\u3066\u304a\u308a\u307e\u3059\u3002",Object(r.jsx)("br",{}),"\u524d\u8077\u3067\u306fSES\u306e\u4f1a\u793e\u3067\u306fCCNA,LPIC\u306e\u5b66\u7fd2\u3092\u884c\u3044\u307e\u3057\u305f\u3002"]})]})]})}var I=Object(o.a)((function(e){return{div:{position:"fixed",zIndex:1e3,width:"100%",margin:0,backgroundColor:"rgba(0,0,0,0.4)",minHeight:"auto"},title:{flexGrow:1,color:"white"},logo:{cursor:"pointer",color:"#8EC5FC",padding:5,"&:hover":{color:"rgba(255,255,255,0.7)"},"&:visited":{borderBottom:"1px solid white"}},profile:{cursor:"pointer",color:"#FFDEE9",float:"right","&:hover":{color:"rgba(255,255,255,0.7)"}}}}));var S=function(){var e=I();return Object(r.jsxs)(b.a,{children:[Object(r.jsxs)("div",{className:e.div,children:[Object(r.jsx)(d.a,{}),Object(r.jsx)(j.a,{className:e.toolbar,children:Object(r.jsxs)(l.a,{variant:"h6",className:e.title,children:[Object(r.jsx)(b.b,{to:"/",className:e.logo,children:"HOME"}),Object(r.jsx)(b.b,{to:"/PROFILE",className:e.profile,children:"PROFILE"})]})})]}),Object(r.jsx)(h.a,{exact:!0,path:"/",children:Object(r.jsx)(g,{})}),Object(r.jsx)(h.a,{path:"/PROFILE",children:Object(r.jsx)(N,{})})]})};var w=function(){return Object(r.jsx)(b.a,{children:Object(r.jsx)("div",{className:"App",style:{height:"100vh",backgroundColor:"#8EC5FC",backgroundImage:"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"},children:Object(r.jsx)(S,{})})})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c411eac1.chunk.js.map
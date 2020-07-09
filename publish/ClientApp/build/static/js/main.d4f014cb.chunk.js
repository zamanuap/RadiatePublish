(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);a(26);var n=a(1),l=a.n(n),r=a(6),c=a.n(r),m=a(43),i=a(8),o=a(9),s=a(11),u=a(10),E=a(12),d=a(44),p=a(16),f=a.n(p),b=a(22),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={forecasts:[],loading:!0},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?l.a.createElement("p",null,l.a.createElement("em",null,"Loading...")):t.renderForecastsTable(this.state.forecasts);return l.a.createElement("div",null,l.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),l.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({forecasts:a,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return l.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Temp. (C)"),l.a.createElement("th",null,"Temp. (F)"),l.a.createElement("th",null,"Summary"))),l.a.createElement("tbody",null,e.map(function(e){return l.a.createElement("tr",{key:e.date},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.temperatureC),l.a.createElement("td",null,e.temperatureF),l.a.createElement("td",null,e.summary))})))}}]),t}(n.Component);h.displayName=h.name;var g=a(13),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={currentCount:0},a.incrementCounter=a.incrementCounter.bind(Object(g.a)(a)),a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Counter"),l.a.createElement("p",null,"This is a simple example of a React component."),l.a.createElement("p",{"aria-live":"polite"},"Current count: ",l.a.createElement("strong",null,this.state.currentCount)),l.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),t}(n.Component);v.displayName=v.name;a(32);var N=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"This is Home page"))},y=a(5),j=a(2),k=function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),a=t[0],r=t[1],c=function(){return r(function(e){return!e})};return l.a.createElement(j.e,{isOpen:a,toggle:c},l.a.createElement(j.g,{caret:!0,tag:"span","data-toggle":"dropdown","aria-expanded":a},"About"),l.a.createElement(j.f,null,l.a.createElement("div",{onClick:c},"Introduction"),l.a.createElement("div",{onClick:c},"Mission"),l.a.createElement("div",{onClick:c},"Vision")))},x=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"This is Projects"))},w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"This is Gallery"))},C=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"This is News"))},O=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"This is Contact"))},A=a(42),S=Object(n.createContext)(),T=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),r=a[0],c=a[1];return l.a.createElement(S.Provider,{value:{userIsLogged:r,loggedIn:function(e){c(e),console.log("login clicked",r)}}},e.children)},D=function(){Object(n.useContext)(S).loggedIn;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"}),l.a.createElement("div",{style:{border:"1px solid #dce0dd",borderRadius:5,padding:10},className:"col-6"},l.a.createElement("h2",null,"Log In"),l.a.createElement(j.h,{className:"form"},l.a.createElement(j.b,null,l.a.createElement(j.i,null,l.a.createElement(j.k,null,"User Name"),l.a.createElement(j.j,{type:"text",name:"name",id:"name",placeholder:"User name"}))),l.a.createElement(j.b,null,l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"examplePassword"},"Password"),l.a.createElement(j.j,{type:"password",name:"password",id:"examplePassword",placeholder:"********"}))),l.a.createElement("div",{className:"clearfix",style:{padding:".5rem"}},l.a.createElement(A.a,{to:"/volunteer"},l.a.createElement("button",{className:"btn btn-secondary float-left"},"Submit")),l.a.createElement(A.a,{to:"/register",className:"float-right"},"Not registered. Register here."))))))},L=(a(35),a(36),function(){var e=Object(n.useContext)(S),t=e.userIsLogged,a=e.loggedIn,r=Object(n.useState)({collapsed:!0}),c=Object(y.a)(r,2);c[0],c[1];return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"brand-title"},"Brand Name"),l.a.createElement("div",{className:"nav-links"},l.a.createElement("ul",{className:"top-list"},l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/"},"Home",l.a.createElement("i",{className:"fa fa-caret"}))),l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/gallery"},"Gallery")),l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/news"},"News")),l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/gallery"},"Gallery")),t?l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/volunteer"},"Volunteer"),l.a.createElement("ul",{className:"bottom-list"},l.a.createElement("li",null,l.a.createElement(A.a,{className:"sub-link",to:"/member-register"},"Member Registration")),l.a.createElement("li",null,l.a.createElement(A.a,{className:"sub-link",to:"/",onClick:function(){return a(!1)}},"Logout")))):l.a.createElement("li",null,l.a.createElement(A.a,{className:"main-link",to:"/login"},"Login")))))}),I=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-8"},l.a.createElement("h4",null,"Volunteer Registration Form"),l.a.createElement("p",{style:{color:"blue"}},"For member registration contact with a volunteer"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-8",style:{borderRadius:5,border:"1px solid #dee3e0",padding:10,marginTop:10}},l.a.createElement(j.h,null,l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:6},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"firstName"},"First Name"),l.a.createElement(j.j,{type:"text",name:"lastName",id:"firstName"}))),l.a.createElement(j.b,{md:6},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"lastName"},"Last Name"),l.a.createElement(j.j,{type:"text",name:"lastName",id:"lastName"})))),l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"age"},"Age"),l.a.createElement(j.j,{type:"text",name:"age",id:"age"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"designation"},"Designation"),l.a.createElement(j.j,{type:"text",name:"designation",id:"designation"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"startDate"},"Start Date"),l.a.createElement(j.j,{type:"text",name:"startDate",id:"startDate"})))),l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleAddress"},"Address"),l.a.createElement(j.j,{type:"text",name:"address",id:"exampleAddress"})),l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:5},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleCity"},"City"),l.a.createElement(j.j,{type:"text",name:"city",id:"exampleCity"}))),l.a.createElement(j.b,{md:5},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleState"},"State"),l.a.createElement(j.j,{type:"text",name:"state",id:"exampleState"}))),l.a.createElement(j.b,{md:2},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleZip"},"Zip"),l.a.createElement(j.j,{type:"text",name:"zip",id:"exampleZip"})))),l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"email"},"Email"),l.a.createElement(j.j,{type:"email",name:"email",id:"email"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"mobile"},"Mobile No."),l.a.createElement(j.j,{type:"text",name:"mobile",id:"mobile"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"whatsApp"},"Whatsapp No."),l.a.createElement(j.j,{type:"text",name:"whatsApp",id:"whatsApp"})))),l.a.createElement(j.a,null,"Submit")))))},F=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"This is Donate"))},R=(a(37),function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-8"},l.a.createElement("h4",null,"Member Registration Form"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-8",style:{borderRadius:5,border:"1px solid #dee3e0",padding:10,marginTop:10}},l.a.createElement(j.h,null,l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:6},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"firstName"},"First Name"),l.a.createElement(j.j,{type:"text",name:"lastName",id:"firstName"}))),l.a.createElement(j.b,{md:6},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"lastName"},"Last Name"),l.a.createElement(j.j,{type:"text",name:"lastName",id:"lastName"})))),l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"age"},"Age"),l.a.createElement(j.j,{type:"text",name:"age",id:"age"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"designation"},"Designation"),l.a.createElement(j.j,{type:"text",name:"designation",id:"designation"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"startDate"},"Start Date"),l.a.createElement(j.j,{type:"text",name:"startDate",id:"startDate"})))),l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleAddress"},"Address"),l.a.createElement(j.j,{type:"text",name:"address",id:"exampleAddress"})),l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:5},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleCity"},"City"),l.a.createElement(j.j,{type:"text",name:"city",id:"exampleCity"}))),l.a.createElement(j.b,{md:5},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleState"},"State"),l.a.createElement(j.j,{type:"text",name:"state",id:"exampleState"}))),l.a.createElement(j.b,{md:2},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"exampleZip"},"Zip"),l.a.createElement(j.j,{type:"text",name:"zip",id:"exampleZip"})))),l.a.createElement(j.q,{form:!0},l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"email"},"Email"),l.a.createElement(j.j,{type:"email",name:"email",id:"email"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"mobile"},"Mobile No."),l.a.createElement(j.j,{type:"text",name:"mobile",id:"mobile"}))),l.a.createElement(j.b,{md:4},l.a.createElement(j.i,null,l.a.createElement(j.k,{for:"whatsApp"},"Whatsapp No."),l.a.createElement(j.j,{type:"text",name:"whatsApp",id:"whatsApp"})))),l.a.createElement(j.a,null,"Submit")))))}),W=function(){return(0,Object(n.useContext)(S).loggedIn)(!0),l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"This is volunteer page"))},q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T,null,l.a.createElement(L,null),l.a.createElement(d.a,{exact:!0,path:"/",component:N}),l.a.createElement(d.a,{path:"/about",component:k}),l.a.createElement(d.a,{path:"/projects",component:x}),l.a.createElement(d.a,{path:"/gallery",component:w}),l.a.createElement(d.a,{path:"/news",component:C}),l.a.createElement(d.a,{path:"/contact-us",component:O}),l.a.createElement(d.a,{path:"/login",component:D}),l.a.createElement(d.a,{path:"/volunteer",component:W}),l.a.createElement(d.a,{path:"/register",component:I}),l.a.createElement(d.a,{path:"/member-register",component:R}),l.a.createElement(d.a,{path:"/donate",component:F})))}}]),t}(n.Component);q.displayName=q.name;var M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=document.getElementsByTagName("base")[0].getAttribute("href"),B=document.getElementById("root");c.a.render(l.a.createElement(m.a,{basename:Z},l.a.createElement(q,null)),B),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");M?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):P(e)})}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.d4f014cb.chunk.js.map
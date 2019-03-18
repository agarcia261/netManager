(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(78)},35:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),i=n.n(o),l=(n(35),n(9)),c=n(10),s=n(12),u=n(11),m=n(13),d=n(80),h=n(81),p=n(17),f=n(14),E=n.n(f),v=n(18),g=n.n(v),b=n(8),w=n.n(b);n(72);var y=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"title"},"Current Mirror(s)"),r.a.createElement("table",{class:"highlight responsive-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Router"),r.a.createElement("th",null,"Sap or IP Filter"),r.a.createElement("th",null,"Created on"),r.a.createElement("th",null,"Expiration"),r.a.createElement("th",null,"Time Left"),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,e.mirrorArr.map(function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.router),r.a.createElement("td",null,t.sap),r.a.createElement("td",null,w()(t.createdOn).format("LLLL")),r.a.createElement("td",null,w()(t.expiration).format("LLLL")," "),r.a.createElement("td",null,w()(t.expiration).fromNow()),r.a.createElement("td",null,r.a.createElement("button",{className:"btn-floating  waves-light right grey",onClick:function(){return e.deleteMirror(t._id)},type:"submit",name:"action"},r.a.createElement("i",{className:"material-icons "},"delete"))))}))))},N=(n(73),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={router:"",sap:"",expiration:"",mirrorArr:[]},n.handleDateTimePicker=function(e,t){return n.setState(Object(p.a)({},t,e.toDate()))},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(p.a)({},a,r))},n.loadMirrors=function(){E.a.get("/api/mirror").then(function(e){return n.setState({mirrorArr:e.data})}).catch(function(e){return console.log(e)})},n.deleteMirror=function(e){E.a.delete("/api/mirror/"+e).then(function(e){return n.setState({mirrorArr:e.data})}).catch(function(e){return console.log(e)})},n.handleFormSubmit=function(e){e.preventDefault();var t={router:n.state.router,sap:n.state.sap,expiration:n.state.expiration};return console.log(t),E.a.post("/api/mirror",t).then(function(e){return n.setState({newMirror:e.data})}).catch(function(e){return console.log(e)}).then(n.setState({router:"",sap:"",expiration:""}))},n.valid=function(e){return e.isAfter(g.a.moment().subtract(1,"day"))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadMirrors()}},{key:"componentDidUpdate",value:function(){this.loadMirrors()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row content-container"},r.a.createElement("h3",{className:"title"},"Add A New Mirror"),r.a.createElement("form",{className:"col s12 form-class",id:"add-mirror",onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12m m3"},r.a.createElement("input",{placeholder:"",id:"router-input",type:"text",name:"router",value:this.state.router,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"router"},"Router")),r.a.createElement("div",{className:"input-field col s12 m3"},r.a.createElement("input",{placeholder:" ",id:"mirror-sap",type:"text",name:"sap",value:this.state.sap,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"sap"},"Sap or IP-Filter")),r.a.createElement("div",{className:"input col s12 m3"},r.a.createElement("label",{className:"dateTimeLabel",htmlFor:"expiration"},"Expiration"),r.a.createElement(g.a,{onChange:function(t){return e.handleDateTimePicker(t,"expiration")},value:this.state.expiration,isValidDate:this.valid,inputProps:{readOnly:!1}})),r.a.createElement("button",{type:"submit",className:"btn-floating btn-large scale-transition"},r.a.createElement("i",{className:"material-icons"},"add")))),r.a.createElement("div",null,this.state.mirrorArr.length?r.a.createElement(y,{mirrorArr:this.state.mirrorArr,deleteMirror:this.deleteMirror}):r.a.createElement("h3",null,"No Current Mirrors")))}}]),t}(a.Component)),k=(n(74),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/mirror",component:N})))}}]),t}(a.Component)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):O(e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.8bd7c55d.chunk.js.map
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{11:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),s=n.n(a),i=(n(25),n(5)),o=n(6),j=n(8),h=n(7),l=(n(11),n(9)),b=n(2),p=n(1),u=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"About Page"}),Object(p.jsx)("main",{children:Object(p.jsx)("p",{children:"This section contains information about..."})})]})}}]),n}(c.a.Component),d=n.p+"static/media/logo.6ce24c58.svg",O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{className:"App-link",href:"https://github.com/nick-nsc/react-app",target:"_blank",rel:"noopener noreferrer",children:"Find the repo header here"})]})})}}]),n}(c.a.Component),f=n(18),x=n.n(f),m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).Sketch=function(e){var t,n=new Array(5);e.setup=function(){e.createCanvas(710,400),t=e.height/4,e.background(204);for(var r=0;r<n.length;r++)n[r]=e.PI},e.draw=function(){e.push(),e.translate(e.width/2,e.height/2);for(var r=0;r<n.length;r++){var c=0;e.stroke(0,0,e.float(r)/n.length*255,50),e.fill(0,0,255,25),c=5*(1-e.float(r)/n.length);var a=t/(r+1);e.rotate(n[r]),e.push(),e.translate(0,a),e.ellipse(0,0,c,c),e.pop(),e.translate(0,a),n[r]=(n[r]+(.005+.005*r*1))%e.TWO_PI}e.pop()}},r.myRef=c.a.createRef(),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new x.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return Object(p.jsxs)("div",{name:"projects-frame",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Example p5.js sketch"})}),Object(p.jsx)("div",{ref:this.myRef,style:{"margin-top":"50px"}}),Object(p.jsxs)("div",{children:["Credits: Created by ",Object(p.jsx)("a",{href:"http://lukedubois.com/",target:"_blank",rel:"noreferrer",children:"R. Luke DuBois"}),"."]})]})}}]),n}(c.a.Component),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{children:Object(p.jsxs)("nav",{className:"Navigation-bar",children:[Object(p.jsx)(l.b,{to:"/",children:"Home"}),Object(p.jsx)(l.b,{to:"/projects",children:"Projects"}),Object(p.jsx)(l.b,{to:"/about",children:"About"})]})}),Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/",component:O}),Object(p.jsx)(b.a,{exact:!0,path:"/projects",component:m}),Object(p.jsx)(b.a,{exact:!0,path:"/about",component:u})]})]})}}]),n}(c.a.Component);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(v,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a2209cc9.chunk.js.map
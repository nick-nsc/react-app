(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(19),r=n.n(s),i=(n(26),n(5)),o=n(6),l=n(8),h=n(7),j=(n(12),n(9)),p=n(2),b=n(1),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"About Page"}),Object(b.jsx)("main",{children:Object(b.jsx)("p",{children:"This section contains information about..."})})]})}}]),n}(c.a.Component),d=n.p+"static/media/logo.6ce24c58.svg",O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"App-link",href:"https://github.com/nick-nsc/react-app",target:"_blank",rel:"noopener noreferrer",children:"Find the repo here"})]})})}}]),n}(c.a.Component),f=n(11),m=n(15),x=n.n(m),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).Sketch=function(e){var t,n=new Array(5);e.setup=function(){e.createCanvas(710,400),t=e.height/4,e.background(204);for(var a=0;a<n.length;a++)n[a]=e.PI},e.draw=function(){e.push(),e.translate(e.width/2,e.height/2);for(var a=0;a<n.length;a++){var c=0;e.stroke(0,0,e.float(a)/n.length*255,50),e.fill(0,0,255,25),c=5*(1-e.float(a)/n.length);var s=t/(a+1);e.rotate(n[a]),e.push(),e.translate(0,s),e.ellipse(0,0,c,c),e.pop(),e.translate(0,s),n[a]=(n[a]+(.005+.005*a*1))%e.TWO_PI}e.pop()}},a.state={p5instance:""},a.pauseplay_handleClick=a.pauseplay_handleClick.bind(Object(f.a)(a)),a.reset_handleClick=a.reset_handleClick.bind(Object(f.a)(a)),a.myRef=c.a.createRef(),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new x.a(this.Sketch,this.myRef.current),this.setState({p5instance:this.myP5})}},{key:"pauseplay_handleClick",value:function(){this.state.p5instance._loop?this.state.p5instance.noLoop():this.state.p5instance.loop();var e=this.state.p5instance;this.setState({p5instance:e})}},{key:"reset_handleClick",value:function(){this.state.p5instance.remove(),this.myP5=new x.a(this.Sketch,this.myRef.current),this.setState({p5instance:this.myP5})}},{key:"render",value:function(){return Object(b.jsxs)("div",{name:"projects-frame",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Example p5.js sketch"})}),Object(b.jsx)("div",{ref:this.myRef,style:{marginTop:"50px"}}),Object(b.jsxs)("div",{children:["Credits: Created by ",Object(b.jsx)("a",{href:"http://lukedubois.com/",target:"_blank",rel:"noreferrer",children:"R. Luke DuBois"}),"."]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{name:"pauseplay",onClick:this.pauseplay_handleClick,children:!0===this.state.p5instance._loop?"Pause":"Play"}),Object(b.jsx)("button",{name:"reset",onClick:this.reset_handleClick,children:"Reset"})]})}}]),n}(c.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"Navigation-bar",children:[Object(b.jsx)(j.b,{to:"/",children:"Home"}),Object(b.jsx)(j.b,{to:"/projects",children:"Projects"}),Object(b.jsx)(j.b,{to:"/about",children:"About"})]})}),Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",component:O}),Object(b.jsx)(p.a,{exact:!0,path:"/projects",component:k}),Object(b.jsx)(p.a,{exact:!0,path:"/about",component:u})]})]})}}]),n}(c.a.Component);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(v,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.76c1ff24.chunk.js.map
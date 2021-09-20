(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(19),s=n.n(i),r=(n(27),n(5)),o=n(6),l=n(8),h=n(7),j=(n(12),n(9)),p=n(2),b=n(0),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"About Page"}),Object(b.jsx)("main",{children:Object(b.jsx)("p",{children:"This section contains information about..."})})]})}}]),n}(a.a.Component),d=n.p+"static/media/logo.6ce24c58.svg",O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"App-link",href:"https://github.com/nick-nsc/react-app",target:"_blank",rel:"noopener noreferrer",children:"Find the repo here"})]})})}}]),n}(a.a.Component),x=n(22),m=(n(29),["description"]),f=function(e){var t=e.description;Object(x.a)(e,m);return Object(b.jsxs)("div",{className:"Sidebar",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"p5.js"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/projects/spirograph",children:"Spirograph"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/projects/bezier_animation",children:"Animated Bezier curve"})})]}),Object(b.jsx)("li",{children:"Vega.js"}),Object(b.jsx)("li",{children:"Other"})]})]})},y=n(10),k=n(11),v=n.n(k),g=function(e){var t,n=new Array(5);e.setup=function(){e.createCanvas(710,400),t=e.height/4,e.background(200);for(var c=0;c<n.length;c++)n[c]=e.PI},e.draw=function(){e.push(),e.translate(e.width/2,e.height/2);for(var c=0;c<n.length;c++){var a=0;e.stroke(0,0,e.float(c)/n.length*255,50),e.fill(0,0,255,25),a=5*(1-e.float(c)/n.length);var i=t/(c+1);e.rotate(n[c]),e.push(),e.translate(0,i),e.ellipse(0,0,a,a),e.pop(),e.translate(0,i),n[c]=(n[c]+(.005+.005*c*1))%e.TWO_PI}e.pop()}},C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={p5instance:""},c.pauseplay_handleClick=c.pauseplay_handleClick.bind(Object(y.a)(c)),c.reset_handleClick=c.reset_handleClick.bind(Object(y.a)(c)),c.myRef=a.a.createRef(),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new v.a(g,this.myRef.current),this.setState({p5instance:this.myP5})}},{key:"pauseplay_handleClick",value:function(){this.state.p5instance._loop?this.state.p5instance.noLoop():this.state.p5instance.loop();var e=this.state.p5instance;this.setState({p5instance:e})}},{key:"reset_handleClick",value:function(){this.state.p5instance.remove(),this.myP5=new v.a(g,this.myRef.current),this.setState({p5instance:this.myP5})}},{key:"render",value:function(){return Object(b.jsxs)("main",{style:{marginLeft:"10%"},children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Spirograph"})}),Object(b.jsx)("div",{ref:this.myRef}),Object(b.jsxs)("div",{children:["Credits: Created by ",Object(b.jsx)("a",{href:"http://lukedubois.com/",target:"_blank",rel:"noreferrer",children:"R. Luke DuBois"}),"."]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{name:"pauseplay",onClick:this.pauseplay_handleClick,children:!0===this.state.p5instance._loop?"Pause":"Play"}),Object(b.jsx)("button",{name:"reset",onClick:this.reset_handleClick,children:"Reset"})]})}}]),n}(a.a.Component),_=function(e){var t,n,c,a,i,s,r,o=.005,l=0;function h(){t=e.createVector(e.width/4,e.height/2),c=e.createVector(3*e.width/4,e.height/2),a=t,i=n,s=e.createVector(n.x-t.x,n.y-t.y),r=e.createVector(c.x-n.x,c.y-n.y),e.background(200),e.push(),e.stroke(255,0,0),e.strokeWeight(3),e.line(t.x,t.y,n.x,n.y),e.line(n.x,n.y,c.x,c.y),e.pop(),e.push(),e.fill(0),e.ellipse(t.x,t.y,15,15),e.fill(0,0,255),e.ellipse(n.x,n.y,15,15),e.fill(0),e.ellipse(c.x,c.y,15,15),e.pop()}e.setup=function(){e.createCanvas(700,500),e.frameRate(30),t=e.createVector(e.width/4,3*e.height/4),n=e.createVector(e.width/2,e.height/4),c=e.createVector(3*e.width/4,3*e.height/4),h()},e.draw=function(){l<=1&&(e.push(),e.stroke(0,100),e.line(a.x,a.y,i.x,i.y),e.pop(),e.push(),e.fill(0,200,0,200),e.noStroke(),e.ellipse(a.x+(i.x-a.x)*l,a.y+(i.y-a.y)*l,8,8),e.pop(),a.x+=o*s.x,a.y+=o*s.y,i.x+=o*r.x,i.y+=o*r.y,l+=o)},e.mouseClicked=function(){e.mouseX>0&&e.mouseX<=e.width&&e.mouseY>0&&e.mouseY<=e.height&&(n.x=e.mouseX,n.y=e.mouseY,h(e.mouseX,e.mouseY),l=0)}},w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={p5instance:""},c.pauseplay_handleClick=c.pauseplay_handleClick.bind(Object(y.a)(c)),c.reset_handleClick=c.reset_handleClick.bind(Object(y.a)(c)),c.myRef=a.a.createRef(),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new v.a(_,this.myRef.current),this.setState({p5instance:this.myP5})}},{key:"pauseplay_handleClick",value:function(){this.state.p5instance._loop?this.state.p5instance.noLoop():this.state.p5instance.loop();var e=this.state.p5instance;this.setState({p5instance:e})}},{key:"reset_handleClick",value:function(){this.state.p5instance.remove(),this.myP5=new v.a(_,this.myRef.current),this.setState({p5instance:this.myP5})}},{key:"render",value:function(){return Object(b.jsxs)("main",{style:{marginLeft:"10%"},children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Animated Bezier curve"})}),Object(b.jsx)("div",{ref:this.myRef}),Object(b.jsxs)("div",{children:["Created by ",Object(b.jsx)("a",{href:"http://github.com/nick-nsc/",target:"_blank",rel:"noreferrer",children:"nick-nsc"}),"."]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{name:"pauseplay",onClick:this.pauseplay_handleClick,children:!0===this.state.p5instance._loop?"Pause":"Play"}),Object(b.jsx)("button",{name:"reset",onClick:this.reset_handleClick,children:"Reset"})]})}}]),n}(a.a.Component),P=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{name:"projects-frame",children:[Object(b.jsx)(f,{description:"Content",l1:"test",l2:"test2"}),Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/projects/spirograph",component:C}),Object(b.jsx)(p.b,{exact:!0,path:"/projects/bezier_animation",component:w}),Object(b.jsx)(p.a,{from:"/projects",to:"/projects/spirograph"})]})]})}}]),n}(a.a.Component),R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"Navigation-bar",children:[Object(b.jsx)(j.b,{to:"/",children:"Home"}),Object(b.jsx)(j.b,{to:"/projects",children:"Projects"}),Object(b.jsx)(j.b,{to:"/about",children:"About"})]})}),Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/",component:O}),Object(b.jsx)(p.b,{path:"/projects",component:P}),Object(b.jsx)(p.b,{exact:!0,path:"/about",component:u})]})]})}}]),n}(a.a.Component);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.116b9ef5.chunk.js.map
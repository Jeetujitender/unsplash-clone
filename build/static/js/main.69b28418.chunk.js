(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),o=a(2),i=a.n(o),l=a(7),u=a(3),m=a(4),p=a(6),h=a(5),f=(a(25),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.submit(e.state.term)},e}return Object(m.a)(a,[{key:"inputClick",value:function(){console.log("user click the text")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"text",name:"keysearch",className:"search",placeholder:"Search for photos",value:this.state.term,onClick:this.inputClick,onChange:function(t){return e.setState({term:t.target.value})}}),r.a.createElement("button",{class:"searchButton",onClick:this.onFormSubmit},"Search"),r.a.createElement("p",null,r.a.createElement("span",{className:"searchKeyword"},this.state.term),r.a.createElement("br",null),r.a.createElement("span",{className:"total"},this.props.total," images has been found")," ")))}}]),a}(r.a.Component)),b=(a(26),function(e){var t=e.images.map((function(e){return r.a.createElement("img",{alt:e.desription,key:e.id,src:e.urls.regular})}));return r.a.createElement("div",{className:"flex"}," ",t)}),g=(a(27),a(18)),d=a.n(g).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID qeVa8iaJe8B91_oGEYKSGPJ7_3LJOKcFBEqV9DsRgbs"}}),v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={image:[],totalimages:0,search:"",items:4},e.onsubmit=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({items:4}),e.setState({search:a}),t.next=4,d.get("/search/photos",{params:{query:a,per_page:e.state.items}});case 4:n=t.sent,e.setState({totalimages:n.data.total}),e.setState({image:n.data.results}),console.log(n.data.results);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.loadmore=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({items:e.state.items+4}),t.next=3,d.get("/search/photos",{params:{query:e.state.search,page:1,per_page:e.state.items}});case 3:a=t.sent,e.setState({totalimages:a.data.total}),e.setState({image:a.data.results});case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(f,{total:this.state.totalimages,submit:this.onsubmit}),r.a.createElement(b,{images:this.state.image}),r.a.createElement("button",{className:"loadmoreButton",onClick:this.loadmore},"Load more"))}}]),a}(r.a.Component);c.a.render(r.a.createElement(v,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.69b28418.chunk.js.map
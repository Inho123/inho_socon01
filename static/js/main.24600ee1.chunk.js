(this.webpackJsonpsocon01=this.webpackJsonpsocon01||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},36:function(e,t,a){},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),c=(a(36),a(7)),i=a(1);a(37);var l=function(){return r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two pus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"- George Orwell, 1984"))},m=a(14),u=a.n(m),v=a(28),p=a(9),d=a(10),f=a(13),E=a(12),h=a(29),y=a.n(h);a(56);var g=function(e){var t=e.title,a=e.year,n=e.summary,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:o,genres:s}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},t),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180)))))},b=(a(62),function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{id:e.id,key:e.id,title:e.title,year:e.year,summary:e.summary,genres:e.genres,poster:e.medium_cover_image})}))))}}]),a}(r.a.Component));a(63);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))},_=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var j=function(e){return console.log(e),r.a.createElement(c.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie-detail",component:_}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.24600ee1.chunk.js.map
(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{24:function(t,e,n){t.exports=n(51)},29:function(t,e,n){},30:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(15),r=n.n(c),i=(n(29),n(16)),u=n(17),l=n(18),s=n(23),m=n(22),h=(n(30),n(19)),d=n.n(h),f=n(20),w=n(21),b=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).componentDidMount=function(){a.getQuote()},a.getQuote=function(){d.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){var e=t.data.quotes,n=e[Math.floor(Math.random()*e.length)];a.setState({quote:n.quote,author:n.author})}))},a.getNewQuote=function(){a.getQuote()},a.state={quote:"",author:""},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.author,n=t.quote;return o.a.createElement("div",{id:"wrapper"},o.a.createElement("h1",{className:"title"},"Random Quote App"),o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text"},o.a.createElement("p",null,n)),o.a.createElement("div",{id:"author"},o.a.createElement("h5",null,e)),o.a.createElement("div",{id:"buttons"},o.a.createElement("a",Object(i.a)({id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(n," ").concat(e),target:"_blank",title:"Post this quote on twitter!"},"id","tweet-quote"),o.a.createElement("span",null,o.a.createElement(f.a,{className:"fab fa-twitter twitter-icon",icon:w.a}))),o.a.createElement("button",{id:"new-quote",className:"button",onClick:this.getNewQuote},"New Quote"))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.98477df4.chunk.js.map
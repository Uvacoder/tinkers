import"./modulepreload-polyfill.b7f2da20.js";import{Q as t,a}from"./index.a6bd87ba.js";t({joke:"",modal:!1,get showQuote(){return this.joke.length>0},hideModal(){this.modal=!1},fetchNewJoke(){let o=this;a.get("https://api.humorapi.com/jokes/random?api-key=c1be3de018d14210981b291d6e2b3dde").then(function(e){o.joke=e.data.joke}).catch(function(e){o.modal=!0,console.log(e)})}}).mount();
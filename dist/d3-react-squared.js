/*! Thanks to all the providers of the components. See the respectivegithub pages for their licenses. */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3"),require("react")):"function"==typeof define&&define.amd?define(["d3","react"],e):"object"==typeof exports?exports["d3-react-squared"]=e(require("d3"),require("react")):t["d3-react-squared"]=e(t.d3,t.react)}(this,function(t,e){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=function(t,e,r){for(var n=!0;n;){var i=t,o=e,s=r;a=l=u=void 0,n=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,o);if(void 0!==a){if("value"in a)return a.value;var u=a.get;return void 0===u?void 0:u.call(s)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;t=l,e=o,r=s,n=!0}},c=r(5),p=i(c),f=r(14),d=i(f),h=r(15),y=i(h),v=r(1),m=r(28),g=i(m),b=r(4),x=r(20),_=n(x),w=v.combineReducers(_),j=v.applyMiddleware(g["default"])(v.createStore),O=j(w),P=function(t){function e(){o(this,e),l(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return s(e,t),u(e,[{key:"render",value:function(){var t=this,e=this.props.component;if(!e)return p["default"].createElement(b.Provider,{store:O},function(){return p["default"].createElement(d["default"],a({},t.props,{dispatch:O.dispatch}))});var r=function(){var r=y["default"](e);return{v:p["default"].createElement(b.Provider,{store:O},function(){return p["default"].createElement(r,a({},t.props,{dispatch:O.dispatch}))})}}();return"object"==typeof r?r.v:void 0}}]),e}(c.Component);e["default"]=P,P.defaultProps={component:0},P.propTypes={component:c.PropTypes.object},t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(9),o=n(i),s=r(31),a=n(s),u=r(30),l=n(u),c=r(29),p=n(c),f=r(10),d=n(f);e.createStore=o["default"],e.combineReducers=a["default"],e.bindActionCreators=l["default"],e.applyMiddleware=p["default"],e.compose=d["default"]},function(e,r){e.exports=t},function(t,e){function r(){l=!1,s.length?u=s.concat(u):c=-1,u.length&&n()}function n(){if(!l){var t=setTimeout(r);l=!0;for(var e=u.length;e;){for(s=u,u=[];++c<e;)s[c].run();c=-1,e=u.length}s=null,l=!1,clearTimeout(t)}}function i(t,e){this.fun=t,this.array=e}function o(){}var s,a=t.exports={},u=[],l=!1,c=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new i(t,e)),1!==u.length||l||setTimeout(n,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=o,a.addListener=o,a.once=o,a.off=o,a.removeListener=o,a.removeAllListeners=o,a.emit=o,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(5),o=n(i),s=r(21),a=n(s),u=a["default"](o["default"]),l=u.Provider,c=u.connect;e.Provider=l,e.connect=c},function(t,r){t.exports=e},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function i(t){return{type:s.SET_EVENT,event:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setEvent=i;var o=r(7),s=n(o)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="SET_EVENT";e.SET_EVENT=r},function(t,e){"use strict";function r(t){return t.shape({subscribe:t.func.isRequired,dispatch:t.func.isRequired,getState:t.func.isRequired})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){function r(){return c}function n(t){return p.push(t),function(){var e=p.indexOf(t);p.splice(e,1)}}function i(t){if(!s["default"](t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,c=l(c,t)}finally{f=!1}return p.slice().forEach(function(t){return t()}),t}function o(){return l}function u(t){l=t,i({type:a.INIT})}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var l=t,c=e,p=[],f=!1;return i({type:a.INIT}),{dispatch:i,subscribe:n,getState:r,getReducer:o,replaceReducer:u}}e.__esModule=!0,e["default"]=i;var o=r(11),s=n(o),a={INIT:"@@redux/INIT"};e.ActionTypes=a},function(t,e){"use strict";function r(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return e.reduceRight(function(t,e){return e(t)})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";function r(t){if(!t||"object"!=typeof t)return!1;var e="function"==typeof t.constructor?Object.getPrototypeOf(t):Object.prototype;if(null===e)return!0;var r=e.constructor;return"function"==typeof r&&r instanceof r&&n(r)===n(Object)}e.__esModule=!0,e["default"]=r;var n=function(t){return Function.prototype.toString.call(t)};t.exports=e["default"]},function(t,e){"use strict";function r(t,e){return Object.keys(t).reduce(function(r,n){return r[n]=e(t[n],n),r},{})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(t,e,r){for(var n=!0;n;){var i=t,o=e,s=r;a=l=u=void 0,n=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,o);if(void 0!==a){if("value"in a)return a.value;var u=a.get;return void 0===u?void 0:u.call(s)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;t=l,e=o,r=s,n=!0}},u=r(5),l=n(u),c=r(2),p=n(c),f=r(16),d=r(18),h=r(17),y=function(t){function e(){i(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.state={chartObject:{},lastEvent:0,chartStyle:{display:"block",position:"relative",width:"100%",paddingBottom:"50%",verticalAlign:"middle",overflow:"hidden"}}}return o(e,t),s(e,[{key:"componentDidMount",value:function(){this.createNewChart.call(this,this.props.chartType,this.props)}},{key:"componentWillReceiveProps",value:function(t){var e=this.state,r=e.chartObject,n=e.chartStyle,i=e.lastEvent,o=this.props,s=o.chartType,a=o.paddingBottom,u=o.eventData;console.log("cWRP"),console.log(this.props),console.log(a),console.log(t.paddingBottom),r.mainFunction&&t.chartType===s?t.eventData.timeStamp<=i&&r.updateFunction(t.data,t.params):this.createNewChart.call(this,t.chartType,t),a!==t.paddingBottom&&this.setState({chartStyle:Object.assign({},n,{paddingBottom:t.paddingBottom})}),t.eventData.timeStamp>i&&(this.setState({lastEvent:u.timeStamp}),this.incomingEvent(t.eventData,["default"]))}},{key:"shouldComponentUpdate",value:function(t){return t.eventData.timeStamp<=this.state.lastEvent}},{key:"componentWillUnmount",value:function(){var t=this.state.chartObject;t.destroyFunction&&t.destroyFunction()}},{key:"incomingEvent",value:function(t){var e=t.data,r=t.event,n=t.eventGroup,i=this.props,o=i.highlightListen,s=i.highlight,a=this.state.chartObject,u=o,l=n.filter(function(t){return-1!==u.indexOf(t)});l.length&&s&&a.onEvent&&a.onEvent({d:e,e:r})}},{key:"createNewChart",value:function(t,e){var r=this.props,n=r.paddingBottom,i=r.setEvent;p["default"].select(l["default"].findDOMNode(this)).select("#d3graphSVG").remove();var o=void 0;switch(t){case"bar":o=Object.create(f.barChart);break;case"line":o=Object.create(h.lineChart);break;case"pie":o=Object.create(d.pieChart);break;case"custom":o=Object.create(e.chartModule);break;default:o=Object.create(f.barChart)}o.setEvent=i,this.setState({chartObject:o,chartStyle:Object.assign({},this.state.chartStyle,{paddingBottom:n})}),o.mainFunction(p["default"].select(l["default"].findDOMNode(this)),e.data,e.params,this)}},{key:"handleChartEvent",value:function(t,e){var r=this.props,n=r.onChartEvent,i=r.highlightEmit;r.setEvent;n&&n(t,e);var o={data:t,event:e,eventGroup:i};this.props.setEvent(o)}},{key:"render",value:function(){return console.log("render"),console.log(this.state),console.log(this.props),l["default"].createElement("div",{style:this.state.chartStyle})}}]),e}(u.Component);e["default"]=y,y.defaultProps={params:{},chartType:"bar",paddingBottom:"100%",chartModule:f.barChart,data:[],highlight:!0,highlightEmit:["default"],highlightListen:["default"]},y.propTypes={chartModule:u.PropTypes.object,chartType:u.PropTypes.string,data:u.PropTypes.array,eventData:u.PropTypes.object.isRequired,highlight:u.PropTypes.bool,highlightEmit:u.PropTypes.array,highlightListen:u.PropTypes.array,onChartEvent:u.PropTypes.func,paddingBottom:u.PropTypes.string,params:u.PropTypes.object,setEvent:u.PropTypes.func.isRequired},t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){return{eventData:t.d3ReactSquared}}function s(t){return a.bindActionCreators(c,t)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=r(4),l=r(6),c=i(l),p=r(13),f=n(p);e["default"]=u.connect(o,s)(f["default"]),t.exports=e["default"]},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function i(t){return{eventData:t.d3ReactSquared}}function o(t){return s.bindActionCreators(l,t)}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),a=r(4),u=r(6),l=n(u);e["default"]=function(t){return a.connect(i,o)(t)},t.exports=e["default"]},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),i={defaultParams:{size:1e3,aspectRatio:1,labelSize:1,col1:"green",col2:"red",defaultDuration:500,rx:5,ry:5,yLabel:"Value",colorType:"gradient",colorArray:n.scale.category20().range(),tooltip:function(t){return"<div>ID: "+t.id+"<br/>Value: "+t.value+"</div>"}},mainFunction:function(t,e,r,i){var o=this;this.reactComp=i,o.par=Object.assign({},this.defaultParams,r),this.size=this.par.size;var s=this.par.labelSize;this.fontSize=s*this.size/100,this.margin={top:this.size/100,right:this.size/50,bottom:this.fontSize+this.size/100,left:40*(1+s/10)},this.width=this.size-this.margin.left-this.margin.right,this.height=this.size*this.par.aspectRatio-this.margin.top-this.margin.bottom,this.fullWidth=this.size,this.fullHeight=this.size*this.par.aspectRatio,this.x=n.scale.ordinal().rangeRoundBands([0,this.width],.1),this.y=n.scale.linear().range([this.height,0]),this.xAxis=n.svg.axis().scale(this.x).innerTickSize(this.size/250).outerTickSize(this.size/250).tickPadding(this.size/250).orient("bottom"),this.yAxis=n.svg.axis().scale(this.y).innerTickSize(this.size/250).outerTickSize(this.size/250).tickPadding(this.size/250).tickFormat(n.format("s")).orient("left"),this.svg=t.append("svg").attr("id","d3graphSVG").style("display","inline-block").style("position","absolute").attr("preserveAspectRatio","xMinYMin slice").attr("viewBox","0 0 "+this.fullWidth+" "+this.fullHeight).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.x.domain(e.map(function(t){return t.id})),this.yMax=n.max(e,function(t){return t.value})||100,this.y.domain([0,this.yMax]),this.xAx=this.svg.append("g").attr("class","x axis").style("stroke-width",this.par.size/1e3+"px").style("font-size",this.fontSize+"px").style("font-family","sans-serif").attr("transform","translate(0,"+this.height+")").call(this.xAxis),this.yAx=this.svg.append("g").attr("class","y axis").style("stroke-width",this.par.size/1e3+"px").style("font-size",this.fontSize+"px").style("font-family","sans-serif").call(this.yAxis),this.yAx.append("text").attr("transform","rotate(-90)").attr("y",this.fontSize/2).attr("dy",".71em").style("text-anchor","end").text(o.par.yLabel),this.tooltip=n.select("body").append("div").style("background","rgba(238, 238, 238, 0.85)").style("padding","5px").style("border-radius","5px").style("border-color","#999").style("border-width","2px").style("border-style","solid").style("pointer-events","none").style("position","absolute").style("z-index","10").style("opacity",0),this.updateFunction(e,r)},destroyFunction:function(){this.tooltip.remove()},updateFunction:function(t,e){var r=this,i=this;i.par=Object.assign({},this.defaultParams,e),i.colFunc=this.colorFunction(i.par),this.x.domain(t.map(function(t){return t.id})),this.yMax=n.max(t,function(t){return t.value})||100,this.y.domain([0,this.yMax]),this.yAx.transition().duration(i.par.defaultDuration).call(this.yAxis),this.xAx.transition().duration(i.par.defaultDuration).call(this.xAxis),this.svg.selectAll(".axis line").style("fill","none").style("stroke","#000").style("shape-rendering","crispEdges"),this.svg.selectAll(".axis path").style("fill","none").style("stroke","#000").style("shape-rendering","crispEdges"),this.join=this.svg.selectAll(".bar").data(t,function(t){return t.id}),this.join.transition().duration(i.par.defaultDuration).attr("y",function(t){return i.y(t.value)}).attr("height",function(t){return i.height-i.y(t.value)}).attr("width",i.x.rangeBand()).attr("x",function(t){return i.x(t.id)}).style("fill",function(t,e){return i.colFunc(t,e)}),this.join.enter().append("rect").attr("width",0).attr("height",0).attr("y",0).attr("rx",i.par.rx).attr("ry",i.par.ry).style("stroke","transparent").style("stroke-width","2px").on("mouseover",function(t){i.mouseoverBar.call(i,t,r)}).on("mouseout",function(t){i.mouseoutBar.call(i,t,r)}).on("mousemove",function(t){i.mousemoveBar.call(i,t,r)}).transition().duration(i.par.defaultDuration).attr("class","bar bar").attr("id",function(t){return"bar-"+t.id}).attr("x",function(t){return i.x(t.id)}).attr("width",i.x.rangeBand()).attr("y",function(t){return i.y(t.value)}).attr("height",function(t){return i.height-i.y(t.value)}).style("fill",function(t,e){return i.colFunc(t,e)}),this.join.exit().transition().duration(i.par.defaultDuration).attr("width",0).attr("height",0).remove()},onEvent:function(t){var e=this,r=t.d,n=t.e;switch(n){case"mouseover":this.svg.selectAll(".bar").style("fill-opacity",.15).style("stroke-opacity",0).style("stroke-width","5px").style("stroke",function(t,r){return e.colFunc(t,r)}),this.svg.selectAll("#bar-"+r.id).style("fill-opacity",.5).style("stroke-opacity",1);break;case"mouseout":this.svg.selectAll(".bar").style("fill-opacity",1).style("stroke","transparent").style("stroke-width","2px").style("stroke-opacity",1)}},colorFunction:function(t){var e=this;if("gradient"===t.colorType)return function(r){return n.interpolateHsl(t.col1,t.col2)(r.value/e.yMax)};if("category"!==t.colorType)return function(){return"gray"};var r=function(){var e=t.colorArray;return{v:function(t,r){return e[r]}}}();return"object"==typeof r?r.v:void 0},mouseoverBar:function(t){this.reactComp.handleChartEvent(t,"mouseover"),this.tooltip.html(this.par.tooltip(t)).style("opacity",1).style("top",n.event.pageY-10+"px").style("left",n.event.pageX+10+"px")},mouseoutBar:function(t){this.reactComp.handleChartEvent(t,"mouseout"),this.tooltip.style("opacity",0)},mousemoveBar:function(){this.tooltip.style("top",n.event.pageY+"px").style("left",n.event.pageX+10+"px")}};e.barChart=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),i={defaultParams:{defaultDuration:500,size:1e3,aspectRatio:.5,labelSize:1,yLabel:"Value",xLabel:"Value",colorArray:n.scale.category20().range(),strokeWidth:3,yAxisPlacement:"left",xMax:-(1/0),yMax:-(1/0),xMin:1/0,yMin:1/0,interpolate:"linear",tooltip:function(t){return"<div>ID: "+t.id+"</div>"}},mainFunction:function(t,e,r,i){var o=this;this.reactComp=i,o.par=Object.assign({},this.defaultParams,r),this.size=this.par.size;var s=this.par.labelSize;this.fontSize=s*this.size/100;var a=1,u=1;"left"===this.par.yAxisPlacement?a=5*(1+s/2):u=5*(1+s/2),this.margin={top:this.size/20,right:u*this.size/100,bottom:this.fontSize+this.size/20,left:a*this.size/100},this.width=this.size-this.margin.left-this.margin.right,this.height=this.size*this.par.aspectRatio-this.margin.top-this.margin.bottom,this.fullWidth=this.size,this.fullHeight=this.size*this.par.aspectRatio,this.x=n.scale.linear().range([0,this.width]),this.y=n.scale.linear().range([this.height,0]),this.xAxis=n.svg.axis().scale(this.x).innerTickSize(this.size/250).outerTickSize(this.size/250).tickPadding(this.size/250).orient("bottom"),this.yAxis=n.svg.axis().scale(this.y).innerTickSize(this.size/250).outerTickSize(this.size/250).tickPadding(this.size/250).orient(o.par.yAxisPlacement),this.vb=t.append("svg").attr("id","d3graphSVG").style("display","inline-block").style("position","absolute").attr("preserveAspectRatio","xMinYMin slice").attr("viewBox","0 0 "+this.fullWidth+" "+this.fullHeight),this.svg=this.vb.append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.tooltip=n.select("body").append("div").style("background","rgba(238, 238, 238, 0.85)").style("padding","5px").style("border-radius","5px").style("border-color","#999").style("border-width","2px").style("border-style","solid").style("pointer-events","none").style("position","absolute").style("z-index","10").style("opacity",0),this.xAx=this.svg.append("g").attr("class","x axis").style("stroke-width",this.par.size/1e3+"px").style("font-size",this.fontSize+"px").style("font-family","sans-serif").attr("transform","translate(0,"+this.height+")").call(this.xAxis),this.xAx.append("text").attr("x","left"===o.par.yAxisPlacement?this.width:0).attr("y",-this.fontSize/2).style("text-anchor","left"===o.par.yAxisPlacement?"end":"start").text(o.par.xLabel),this.yAx=this.svg.append("g").attr("class","y axis").style("stroke-width",this.par.size/1e3+"px").style("font-size",this.fontSize+"px").style("font-family","sans-serif").attr("transform","translate("+("left"===o.par.yAxisPlacement?0:1)*this.width+", 0)").call(this.yAxis),this.yAx.append("text").attr("transform","rotate(-90)").attr("y","left"===o.par.yAxisPlacement?this.fontSize/2:-this.fontSize).attr("dy",".71em").style("text-anchor","end").text(o.par.yLabel),this.updateFunction(e,r)},destroyFunction:function(){this.tooltip.remove()},updateFunction:function(t,e){var r=this,i=this;i.par=Object.assign({},this.defaultParams,e),this.line=n.svg.line().interpolate(i.par.interpolate).x(function(t){return r.x(t.x)}).y(function(t){return r.y(t.y)});var o=i.par,s=o.xMax,a=o.yMax,u=o.xMin,l=o.yMin;t.map(function(t){t.values.map(function(t){s=Math.max(t.x,s),a=Math.max(t.y,a),u=Math.min(t.x,u),l=Math.min(t.y,l)})}),s===-(1/0)&&u===1/0&&(s=u=0),a===-(1/0)&&l===1/0&&(a=l=0),this.x.domain([u,s]),this.y.domain([l,a]),this.xAx.transition().duration(i.par.defaultDuration).call(this.xAxis),this.yAx.transition().duration(i.par.defaultDuration).call(this.yAxis),this.svg.select(".y.axis").transition().duration(i.par.defaultDuration).call(this.yAxis),this.svg.select(".x.axis").transition().duration(i.par.defaultDuration).call(this.xAxis),this.svg.selectAll(".axis line").style("fill","none").style("stroke","#000").style("shape-rendering","crispEdges"),this.svg.selectAll(".axis path").style("fill","none").style("stroke","#000").style("shape-rendering","crispEdges"),this.joinLine=this.svg.selectAll(".lineGroup").data(t,function(t){return t.id}),this.lineGroup=this.joinLine.enter().append("g").attr("class","lineGroup"),this.joinLine.select("path").transition().duration(i.par.defaultDuration).attr("d",function(t){return r.line(t.values)}),this.lineGroup.append("path").attr("class","line").attr("id",function(t){return"line"+t.id}).style("fill","none").style("stroke",function(t,e){return i.par.colorArray[e]}).style("stroke-width",i.par.strokeWidth).style("stroke-linecap","round").on("mouseover",function(t){return r.mouseoverLine.call(i,t,r)}).on("mouseout",function(t){return r.mouseoutLine.call(i,t,r)}).on("mousemove",function(t){return r.mousemoveLine.call(i,t,r)}).attr("d",function(t){return r.line(t.values)}).style("opacity",0).transition().duration(i.par.defaultDuration).style("opacity",1),this.joinLine.exit().transition().duration(i.par.defaultDuration).style("opacity",0).remove()},onEvent:function(t){var e=this,r=t.d,n=t.e;switch(n){case"mouseover":this.svg.selectAll(".line").style("stroke-width",e.par.strokeWidth),this.svg.select("#line"+r.id).style("stroke-width",3*e.par.strokeWidth);break;case"mouseout":this.svg.selectAll(".line").style("stroke-width",e.par.strokeWidth)}},mouseoverLine:function(t){this.reactComp.handleChartEvent(t,"mouseover"),this.svg.select("#line"+t.id).style("stroke-width",3*this.par.strokeWidth),this.tooltip.html(this.par.tooltip(t)).style("opacity",1).style("top",n.event.pageY-10+"px").style("left",n.event.pageX+10+"px")},mouseoutLine:function(t){this.reactComp.handleChartEvent(t,"mouseout"),this.svg.select("#line"+t.id).transition().duration(this.par.defaultDuration).style("stroke-width",this.par.strokeWidth),this.tooltip.style("opacity",0)},mousemoveLine:function(){this.tooltip.style("top",n.event.pageY+"px").style("left",+!this.par.debugMode*n.event.pageX+10+"px")}};e.lineChart=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),i={defaultParams:{size:1e3,col1:"green",col2:"red",defaultDuration:500,innerRadius:0,cornerRadius:5,colorType:"gradient",colorArray:n.scale.category20().range(),tooltip:function(t){return"<div>ID: "+t.id+"<br/>Value: "+t.value+"</div>"}},mainFunction:function(t,e,r,i){this.reactComp=i,this.par=Object.assign({},this.defaultParams,r);var o=this.par.size,s=o-20,a=o-20,u=Math.min(s,a)/2,l=o,c=o;this.arc=n.svg.arc().outerRadius(u-10),this.pie=n.layout.pie().sort(null).value(function(t){return t.value}),this.svg=t.append("svg").attr("id","d3graphSVG").style("display","inline-block").style("position","absolute").attr("preserveAspectRatio","xMinYMin slice").attr("viewBox","0 0 "+l+" "+c).append("g").attr("transform","translate("+s/2+","+a/2+")"),this.tooltip=n.select("body").append("div").style("background","rgba(238, 238, 238, 0.85)").style("padding","5px").style("border-radius","5px").style("border-color","#999").style("border-width","2px").style("border-style","solid").style("pointer-events","none").style("position","absolute").style("z-index","10").style("opacity",0),this.updateFunction(e,r)},destroyFunction:function(){this.tooltip.remove()},tweenFunc:function(t,e){var r=n.interpolate(this._current||t,t);return this._current=r(0),function(t){return e.arc(r(t))}},updateFunction:function(t,e){var r=this,i=this;this.par=Object.assign({},this.defaultParams,e),this.colFunc=this.colorFunction(this.par),this.arc.innerRadius(this.par.innerRadius).cornerRadius(this.par.cornerRadius),this.join=this.svg.selectAll(".pie").data(this.pie(t),function(t){return t.data.id}),this.angMax=n.max(this.pie(t).map(function(t){return t.endAngle-t.startAngle})),this.join.transition().duration(500).attrTween("d",function(t){return i.tweenFunc.apply(this,[t,i])}).style("fill",function(t,e){return i.colFunc(t,e)}),this.join.enter().append("path").attr("class","pie pie-sector").attr("id",function(t){return"pie-sector-"+t.data.id}).style("stroke","white").style("stroke-width","2px").attr("d",this.arc).each(function(t){r._current=t}).style("fill",function(t,e){return i.colFunc(t,e)}).on("mouseover",function(t){i.mouseoverSector.call(i,t,r)}).on("mouseout",function(t){i.mouseoutSector.call(i,t,r)}).on("mousemove",function(t){i.mousemoveSector.call(i,t,r)}),this.join.exit().remove()},colorFunction:function(){var t=this;if("gradient"===this.par.colorType)return function(e){return n.interpolateHsl(t.par.col1,t.par.col2)((e.endAngle-e.startAngle)/t.angMax)};if("category"!==t.par.colorType)return function(){return"gray"};var e=function(){var e=t.par.colorArray;return{v:function(t,r){return e[r]}}}();return"object"==typeof e?e.v:void 0},onEvent:function(t){var e=this,r=t.d,n=t.e;switch(n){case"mouseover":this.svg.selectAll(".pie-sector").style("fill-opacity",.15).style("stroke-opacity",0).style("stroke-width","5px").style("stroke",function(t,r){return e.colFunc(t,r)}),this.svg.selectAll("#pie-sector-"+r.id).style("fill-opacity",.5).style("stroke-opacity",1);break;case"mouseout":this.svg.selectAll(".pie-sector").style("fill-opacity",1).style("stroke","white").style("stroke-width","2px").style("stroke-opacity",1)}},mouseoverSector:function(t){this.reactComp.handleChartEvent(t.data,"mouseover"),this.tooltip.html(this.par.tooltip(t.data)).style("opacity",1).style("top",n.event.pageY-10+"px").style("left",n.event.pageX+10+"px")},mouseoutSector:function(t){this.reactComp.handleChartEvent(t.data,"mouseout"),this.tooltip.style("opacity",0)},mousemoveSector:function(){this.tooltip.style("top",n.event.pageY+"px").style("left",n.event.pageX+10+"px")}};e.pieChart=i},function(t,e,r){"use strict";function n(t,e){switch(void 0===t&&(t=o),e.type){case i.SET_EVENT:var r=e.event,n=r.data,s=r.event,a=r.eventGroup,u=(new Date).getTime(),l=Object.assign({},t,{data:n,event:s,eventGroup:a,timeStamp:u});return l;default:return t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n;var i=r(7),o={data:{},eventGroup:[],event:"",timeStamp:0};t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t["default"]:t}Object.defineProperty(e,"__esModule",{value:!0});var i=r(19);e.d3ReactSquared=n(i)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){var e=s["default"](t),r=u["default"](t);return{Provider:e,connect:r}}e.__esModule=!0,e["default"]=i;var o=r(23),s=n(o),a=r(22),u=n(a);t.exports=e["default"]},function(t,e,r){(function(n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t.displayName||t.name||"Component"}function u(t){var e=t.Component,r=t.PropTypes,i=f["default"](r);return function(r,u,p){function f(t,e){var r=t.getState(),n=S?b(r,e):b(r);return x["default"](v["default"](n),"`mapStateToProps` must return an object. Instead received %s.",n),n}function d(t,e){var r=t.dispatch,n=E?P(r,e):P(r);return x["default"](v["default"](n),"`mapDispatchToProps` must return an object. Instead received %s.",n),n}function y(t,e,r){var n=k(t,e,r);return x["default"](v["default"](n),"`mergeProps` must return an object. Instead received %s.",n),n}var m=Boolean(r),b=r||_,P=v["default"](u)?g["default"](u):u||w,k=p||j,S=b.length>1,E=P.length>1,M=O++;return function(r){var u=function(e){function n(t,r){o(this,n),e.call(this,t,r),this.version=M,this.store=t.store||r.store,x["default"](this.store,'Could not find "store" in either the context or '+('props of "'+this.constructor.displayName+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+this.constructor.displayName+'".')),this.stateProps=f(this.store,t),this.dispatchProps=d(this.store,t),this.state={props:this.computeNextState()}}return s(n,e),n.prototype.shouldComponentUpdate=function(t,e){return!h["default"](this.state.props,e.props)},l(n,null,[{key:"displayName",value:"Connect("+a(r)+")",enumerable:!0},{key:"WrappedComponent",value:r,enumerable:!0},{key:"contextTypes",value:{store:i},enumerable:!0},{key:"propTypes",value:{store:i},enumerable:!0}]),n.prototype.computeNextState=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0];return y(this.stateProps,this.dispatchProps,t)},n.prototype.updateStateProps=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0],e=f(this.store,t);return h["default"](e,this.stateProps)?!1:(this.stateProps=e,!0)},n.prototype.updateDispatchProps=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0],e=d(this.store,t);return h["default"](e,this.dispatchProps)?!1:(this.dispatchProps=e,!0)},n.prototype.updateState=function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0],e=this.computeNextState(t);h["default"](e,this.state.props)||this.setState({props:e})},n.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},n.prototype.trySubscribe=function(){m&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},n.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},n.prototype.componentDidMount=function(){this.trySubscribe()},n.prototype.componentWillReceiveProps=function(t){h["default"](t,this.props)||(S&&this.updateStateProps(t),E&&this.updateDispatchProps(t),this.updateState(t))},n.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},n.prototype.handleChange=function(){this.updateStateProps()&&this.updateState()},n.prototype.getWrappedInstance=function(){return this.refs.wrappedInstance},n.prototype.render=function(){return t.createElement(r,c({ref:"wrappedInstance"},this.state.props))},n}(e);return("undefined"!=typeof n&&"undefined"!=typeof n.env&&"production"!==n.env.NODE_ENV||"undefined"!=typeof __DEV__&&__DEV__)&&(u.prototype.componentWillUpdate=function(){this.version!==M&&(this.version=M,this.trySubscribe(),this.updateStateProps(),this.updateDispatchProps(),this.updateState())}),u}}}e.__esModule=!0;var l=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=u;var p=r(8),f=i(p),d=r(25),h=i(d),y=r(24),v=i(y),m=r(26),g=i(m),b=r(27),x=i(b),_=function(){
return{}},w=function(t){return{dispatch:t}},j=function(t,e,r){return c({},r,t,e)},O=0;t.exports=e["default"]}).call(e,r(3))},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){var e=t.version;if("string"!=typeof e)return!0;var r=e.split("."),n=parseInt(r[0],10),i=parseInt(r[1],10);return 0===n&&13===i}function a(t){function e(){d||f||(d=!0,console.error("With React 0.14 and later versions, you no longer need to wrap <Provider> child into a function."))}function r(){!d&&f&&(d=!0,console.error("With React 0.13, you need to wrap <Provider> child into a function. This restriction will be removed with React 0.14."))}var n=t.Component,a=t.PropTypes,l=t.Children,p=c["default"](a),f=s(t),d=!1;return function(t){function n(e,r){i(this,n),t.call(this,e,r),this.state={store:e.store}}return o(n,t),n.prototype.getChildContext=function(){return{store:this.state.store}},u(n,null,[{key:"childContextTypes",value:{store:p.isRequired},enumerable:!0},{key:"propTypes",value:{store:p.isRequired,children:(f?a.func:a.element).isRequired},enumerable:!0}]),n.prototype.componentWillReceiveProps=function(t){var e=this.state.store,r=t.store;if(e!==r){var n=r.getReducer();e.replaceReducer(n)}},n.prototype.render=function(){var t=this.props.children;return"function"==typeof t?(e(),t=t()):r(),l.only(t)},n}(n)}e.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e["default"]=a;var l=r(8),c=n(l);t.exports=e["default"]},function(t,e){"use strict";function r(t){if(!t||"object"!=typeof t)return!1;var e="function"==typeof t.constructor?Object.getPrototypeOf(t):Object.prototype;if(null===e)return!0;var r=e.constructor;return"function"==typeof r&&r instanceof r&&n(r)===n(Object)}e.__esModule=!0,e["default"]=r;var n=function(t){return Function.prototype.toString.call(t)};t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(t===e)return!0;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var i=Object.prototype.hasOwnProperty,o=0;o<r.length;o++)if(!i.call(e,r[o])||t[r[o]]!==e[r[o]])return!1;return!0}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return function(e){return i.bindActionCreators(t,e)}}e.__esModule=!0,e["default"]=n;var i=r(1);t.exports=e["default"]},function(t,e,r){(function(e){"use strict";var r=function(t,r,n,i,o,s,a,u){if("production"!==e.env.NODE_ENV&&void 0===r)throw new Error("invariant requires an error message argument");if(!t){var l;if(void 0===r)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,o,s,a,u],p=0;l=new Error("Invariant Violation: "+r.replace(/%s/g,function(){return c[p++]}))}throw l.framesToPop=1,l}};t.exports=r}).call(e,r(3))},function(t,e){"use strict";function r(t){var e=t.dispatch,r=t.getState;return function(t){return function(n){return"function"==typeof n?n(e,r):t(n)}}}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return function(t){return function(r,n){var i=t(r,n),s=i.dispatch,u=[],l={getState:i.getState,dispatch:function(t){return s(t)}};return u=e.map(function(t){return t(l)}),s=a["default"].apply(void 0,u.concat([i.dispatch])),o({},i,{dispatch:s})}}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e["default"]=i;var s=r(10),a=n(s);t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){return function(){return e(t.apply(void 0,arguments))}}function o(t,e){if("function"==typeof t)return i(t,e);if("object"!=typeof t||null==t)throw new Error("bindActionCreators expected an object or a function, instead received "+typeof t+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');return a["default"](t,function(t){return i(t,e)})}e.__esModule=!0,e["default"]=o;var s=r(12),a=n(s);t.exports=e["default"]},function(t,e,r){(function(n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var r=e&&e.type,n=r&&'"'+r.toString()+'"'||"an action";return'Reducer "'+t+'" returned undefined handling '+n+". To ignore an action, you must explicitly return the previous state."}function s(t,e){var r=Object.keys(e);if(0===r.length)return void console.error("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");if(!c["default"](t))return void console.error('initialState has unexpected type of "'+{}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1]+'". Expected initialState to be an object with the following '+('keys: "'+r.join('", "')+'"'));var n=Object.keys(t).filter(function(t){return r.indexOf(t)<0});n.length>0&&console.error("Unexpected "+(n.length>1?"keys":"key")+" "+('"'+n.join('", "')+'" in initialState will be ignored. ')+('Expected to find one of the known reducer keys instead: "'+r.join('", "')+'"'))}function a(t){var e=h["default"](t,function(t){return"function"==typeof t});Object.keys(e).forEach(function(t){var r=e[t];if("undefined"==typeof r(void 0,{type:u.ActionTypes.INIT}))throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var n=Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof r(void 0,{type:n}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+u.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")});var r,i=f["default"](e,function(){return void 0});return function(t,a){void 0===t&&(t=i);var u=f["default"](e,function(e,r){var n=e(t[r],a);if("undefined"==typeof n)throw new Error(o(r,a));return n});return("undefined"!=typeof n&&"undefined"!=typeof n.env&&"production"!==n.env.NODE_ENV||"undefined"!=typeof __DEV__&&__DEV__)&&(r||(s(t,u),r=!0)),u}}e.__esModule=!0,e["default"]=a;var u=r(9),l=r(11),c=i(l),p=r(12),f=i(p),d=r(32),h=i(d);t.exports=e["default"]}).call(e,r(3))},function(t,e){"use strict";function r(t,e){return Object.keys(t).reduce(function(r,n){return e(t[n])&&(r[n]=t[n]),r},{})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]}])});
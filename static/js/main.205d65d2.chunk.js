(this["webpackJsonpfrontend-compilation"]=this["webpackJsonpfrontend-compilation"]||[]).push([[0],{14:function(e,t,n){e.exports={container:"timer_container__3rvBK",Clock:"timer_Clock__30wcv",title:"timer_title__1igLM",timer:"timer_timer__1Dcby",button:"timer_button__3eHdR","break-label":"timer_break-label__Buq_s","session-label":"timer_session-label__1epwg"}},33:function(e,t,n){e.exports={page:"qGenerator_page__2HX8g",quoteBox:"qGenerator_quoteBox__3Wh7a",text:"qGenerator_text__3I-0G",fadein:"qGenerator_fadein__YlShx",author:"qGenerator_author__2ooRm",newQuote:"qGenerator_newQuote__q4sEX",fa:"qGenerator_fa__WQ-Fc",fa_twitter:"qGenerator_fa_twitter__3xB5l"}},35:function(e,t,n){e.exports={container:"Calculator_container__OXd_x",calculator:"Calculator_calculator__1xz3f",display:"Calculator_display__3Ejce",calculation:"Calculator_calculation__Nc6A6",press:"Calculator_press__3Szwu",square:"Calculator_square__3X_v7",clear:"Calculator_clear__1DnYA",zero:"Calculator_zero__uY-71",equals:"Calculator_equals__12vI3"}},38:function(e,t,n){e.exports={container:"drum-machine_container__xtWDB","drum-machine":"drum-machine_drum-machine__2BlbO",board:"drum-machine_board__1Xlfe","drum-pad":"drum-machine_drum-pad__1ZXvY",display:"drum-machine_display__3ve_Y",controls:"drum-machine_controls__feNMQ","MuiSlider-root":"drum-machine_MuiSlider-root__2MIrs","MuiTypography-body1":"drum-machine_MuiTypography-body1__qVQey"}},47:function(e,t,n){e.exports={page:"MarkdowntoHTML_page__3f0eP",container:"MarkdowntoHTML_container__3vd0a",editor:"MarkdowntoHTML_editor__3q8X2",preview:"MarkdowntoHTML_preview__3TQYL"}},87:function(e,t,n){},88:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a,i,s,r,c,o,l=n(0),u=n.n(l),d=n(66),h=n.n(d),b=(n(87),n(88),n(27)),m=n(76),p=n(45),j=n(37),f=j.a.nav(a||(a=Object(b.a)(["\nbackground: #000000;\nheight: 85px;\ndisplay: flex;\njustify-content: center;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n/* Third Nav */\n/* justify-content: flex-start; */\n"]))),v=Object(j.a)(p.b)(i||(i=Object(b.a)(["\ncolor: #aaaaaa;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #FFFF00;\n}\n"]))),O=Object(j.a)(m.a)(s||(s=Object(b.a)(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"]))),x=j.a.div(r||(r=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n/* Second Nav */\n/* margin-right: 24px; */\n/* Third Nav */\n/* width: 100vw;\nwhite-space: nowrap; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),_=(j.a.nav(c||(c=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 24px;\n/* Third Nav */\n/* justify-content: flex-end;\nwidth: 100vw; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),Object(j.a)(p.b)(o||(o=Object(b.a)(["\nborder-radius: 4px;\nbackground: #808080;\npadding: 10px 22px;\ncolor: #000000;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n/* Second Nav */\nmargin-left: 24px;\n&:hover {\n\ttransition: all 0.2s ease-in-out;\n\tbackground: #fff;\n\tcolor: #808080;\n}\n"]))),n(1)),k=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(f,{children:[Object(_.jsx)(O,{}),Object(_.jsxs)(x,{children:[Object(_.jsx)(v,{to:"/frontend-compilation/",activeStyle:!0,children:"Home"}),Object(_.jsx)(v,{to:"/frontend-compilation/drum",activeStyle:!0,children:"Drum"}),Object(_.jsx)(v,{to:"/frontend-compilation/quote",activeStyle:!0,children:"Quote Generator"}),Object(_.jsx)(v,{to:"/frontend-compilation/calc",activeStyle:!0,children:"Calculator"}),Object(_.jsx)(v,{to:"/frontend-compilation/markdown",activeStyle:!0,children:"Markdown to HTML"}),Object(_.jsx)(v,{to:"/frontend-compilation/timer",activeStyle:!0,children:"Timer"})]})]})})},y=n(12),g=n(15),C=n(63),S=n(23),w=n(24),N=n(26),M=n(25),T=n(35),q=n.n(T),I=[[{AC:"clear"},{"/":"divide"},{"*":"multiply"}],[{7:"seven"},{8:"eight"},{9:"nine"},{"-":"subtract"}],[{4:"four"},{5:"five"},{6:"six"},{"+":"add"}],[{1:"one"},{2:"two"},{3:"three"},{"=":"equals"}],[{0:"zero"},{".":"decimal"}]],L=function(e){return"+"===e||"*"===e||"/"===e||"-"===e},A=function(e){return Object(_.jsx)("button",{className:q.a[e.id]+" "+q.a.square,onClick:e.onClick,children:"*"===e.value?"x":e.value})},B=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"renderSquare",value:function(e){var t=this,n=Object.keys(e)[0];return Object(_.jsx)(A,{value:n,id:e[n],onClick:function(){return t.props.onClick(n)}})}},{key:"render",value:function(){var e,t=[],n=Object(C.a)(this.props.squares);try{for(n.s();!(e=n.n()).done;){var a,i=e.value,s=Object(C.a)(i);try{for(s.s();!(a=s.n()).done;){var r=a.value;t.push(this.renderSquare(r))}}catch(c){s.e(c)}finally{s.f()}}}catch(c){n.e(c)}finally{n.f()}return Object(_.jsx)("div",{className:q.a.press,children:t})}}]),n}(u.a.Component),Q=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={grid:I,display:"0",calculation:"",inputs:["0"],result:!1},a.handleClick=a.handleClick.bind(Object(g.a)(a)),a}return Object(w.a)(n,[{key:"handleClick",value:function(e){if("0"===this.state.display){if("0"===e||"AC"===e)return;L(e)||"."==e?this.setState((function(t){return{inputs:t.inputs.concat([e]),display:t.display+e,calculation:"0"+e}})):this.setState((function(t){return{inputs:[e],display:e,calculation:e}}))}else{if("."==e&&this.state.inputs.lastIndexOf(".")>=function(e){var t=Math.max(e.lastIndexOf("+"),e.lastIndexOf("-"),e.lastIndexOf("*"),e.lastIndexOf("/"));return-1==t?e.includes(".")?-1:e.length:t}(this.state.inputs))return;if("="===e)try{var t=(n=this.state.inputs,new Function("return "+n.join(""))());this.setState((function(e){return{display:String(t),calculation:e.calculation+"="+String(t),inputs:[String(t)],result:!0}}))}catch(a){this.setState({display:"Error"})}else"AC"===e?this.setState({inputs:["0"],display:"0",calculation:"",result:!1}):L(this.state.inputs[this.state.inputs.length-1])&&L(e)&&"-"!==e&&!this.state.result?this.setState({inputs:this.state.inputs.slice(0,this.state.inputs.length-1).concat([e]),display:this.state.display.slice(0,-1)+e,calculation:this.state.calculation.slice(0,-1)+e}):this.state.result?(this.setState({result:!1}),L(e)?this.setState((function(e){return{calculation:e.display}})):L(e)||"."==e?this.setState((function(t){return{inputs:["0"].concat([e]),display:"0"+e,calculation:"0"+e}})):this.setState({inputs:[e],display:e,calculation:e})):this.setState((function(t){return{inputs:t.inputs.concat([e]),display:t.display+e,calculation:t.calculation+e}}))}var n}},{key:"render",value:function(){var e=this;return console.log(this.state),Object(_.jsx)("div",{className:q.a.container,children:Object(_.jsxs)("div",{className:q.a.calculator,children:[Object(_.jsx)("div",{className:q.a.calculation,children:this.state.calculation}),Object(_.jsx)("div",{className:q.a.display,children:this.state.display}),Object(_.jsx)(B,{squares:this.state.grid,onClick:function(t){return e.handleClick(t)}})]})})}}]),n}(u.a.Component),H=n(13),F=n(38),z=n.n(F),D=n(75),P=n(124),E=n(122),G=n(120),R=n(119),X=n.p+"static/media/bass.cbe998cb.mp3",Y=n.p+"static/media/closed-hihat.395f033e.mp3",V=n.p+"static/media/cymbal-crash.a855bbbf.mp3",W=n.p+"static/media/cymbal-scrape.1a764715.mp3",U=n.p+"static/media/floor-tom.37328fc6.mp3",J=n.p+"static/media/medium-tom.1fd14687.mp3",Z=n.p+"static/media/open-hihat.9dd64439.mp3",K=n.p+"static/media/snare.bedcdb90.mp3",$=n.p+"static/media/sticks.26a3b56c.mp3",ee=n(123),te={Q:["bass",X],W:["closed_hihat",Y],E:["cymbal_crash",V],A:["cymbal_scrape",W],S:["floor_tom",U],D:["medium_tom",J],Z:["open_hihat",Z],X:["snare",K],C:["sticks",$]},ne=D.a(),ae=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)(P.a,{id:"continuous-slider",gutterBottom:!0,children:"Volume"}),Object(_.jsx)(E.a,{container:!0,spacing:2,children:Object(_.jsx)(E.a,{item:!0,xs:!0,children:Object(_.jsx)(G.a,{value:e.value,onChange:e.onChange,"aria-label":"Volume",min:0,max:100,valueLabelDisplay:"auto"})})})]})},ie=function(e){return Object(_.jsx)("button",{className:z.a["drum-pad"],id:e.value,onClick:e.onClick,children:e.keypress})},se=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"renderPad",value:function(e){var t=this;return Object(_.jsx)(ie,{value:e[1][0],keypress:e[0],onClick:function(){return t.props.onClick(e[1][0],e[1][1])}},e[1][0])}},{key:"render",value:function(){for(var e=[],t=0,n=Object.entries(this.props.board);t<n.length;t++){var a=Object(H.a)(n[t],2),i=a[0],s=a[1];e.push(this.renderPad([i,s]))}return Object(_.jsx)("div",{className:z.a.board,children:e})}}]),n}(u.a.Component),re=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={board:te,display:"",on:!1,volume:40},a.handlePress=a.handlePress.bind(Object(g.a)(a)),a.handleClick=a.handleClick.bind(Object(g.a)(a)),a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleVolumeChange=a.handleVolumeChange.bind(Object(g.a)(a)),a}return Object(w.a)(n,[{key:"handlePress",value:function(e){if(this.state.on){var t=this.state.board[e.key.toUpperCase()];if(t){this.setState({display:t[0]});var n=new Audio(t[1]);n.volume=this.state.volume/100,n.play().catch((function(e){console.log("Audio unable to load "+e)}))}}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handlePress,!1)}},{key:"handleChange",value:function(){this.setState((function(e){return{on:!e.on,display:""}}))}},{key:"handleVolumeChange",value:function(e,t){this.setState({volume:t})}},{key:"handleClick",value:function(e,t){if(this.state.on){this.setState({display:e});var n=new Audio(t);n.volume=this.state.volume/100,n.play().catch((function(e){console.log("Audio failed to load: "+e)}))}}},{key:"render",value:function(){var e=this;return Object(_.jsx)("div",{className:z.a.container,children:Object(_.jsxs)("div",{className:z.a["drum-machine"],children:[Object(_.jsx)(se,{board:this.state.board,onClick:function(t,n){return e.handleClick(t,n)}}),Object(_.jsxs)("div",{className:z.a.controls,children:[Object(_.jsx)(P.a,{component:"div",children:Object(_.jsxs)(E.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(_.jsx)(E.a,{item:!0,children:"Off"}),Object(_.jsx)(E.a,{item:!0,children:Object(_.jsx)(ee.a,{theme:ne,children:Object(_.jsx)(R.a,{onChange:this.handleChange,name:"switch"})})}),Object(_.jsx)(E.a,{item:!0,children:"On"})]})}),Object(_.jsx)("div",{className:z.a.display,children:this.state.display}),Object(_.jsx)(ae,{value:this.state.volume,onChange:function(t,n){return e.handleVolumeChange(t,n)}})]})]})})}}]),n}(u.a.Component),ce=n(47),oe=n.n(ce),le=n(73),ue=n.n(le),de=n(74),he=n.n(de);function be(e){return{__html:ue.a.sanitize(he()(e,{gfm:!0,breaks:!0}),{USE_PROFILES:{html:!0}})}}function me(e){return Object(_.jsx)("textarea",{className:oe.a.editor,value:e.input,onChange:e.onChange})}function pe(e){return Object(_.jsx)("div",{className:oe.a.preview,dangerouslySetInnerHTML:e.text})}var je=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",output:{__html:""}},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.setState((function(e){return{output:be(e.input)}}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({input:t,output:be(t)})}},{key:"render",value:function(){var e=this;return Object(_.jsx)("div",{className:oe.a.page,children:Object(_.jsxs)("div",{className:oe.a.container,children:[Object(_.jsx)(me,{input:this.state.input,onChange:function(t){return e.handleChange(t)}}),Object(_.jsx)(pe,{text:this.state.output})]})})}}]),n}(u.a.Component),fe=n(14),ve=n.n(fe),Oe=n.p+"static/media/beep.2af29179.mp3",xe=function(e){return new Date(1e3*e).toISOString().substring(14,19)},_e=function(e){return Object(_.jsxs)("div",{className:ve.a.adjustment,children:[Object(_.jsx)("button",{className:ve.a["".concat(e.label,"-decrement")]+" "+ve.a.button,onClick:function(){return e.onClick(e.label,"dec")},children:"\u2193"}),Object(_.jsx)("span",{className:ve.a["".concat(e.label,"-length")],children:xe(e.time)}),Object(_.jsx)("button",{className:ve.a["".concat(e.label,"-increment")]+" "+ve.a.button,onClick:function(){return e.onClick(e.label,"inc")},children:"\u2191"})]})},ke=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).audio=new Audio(Oe),a.state={break:300,session:1500,setting:"Session",belowMinute:!1,start:!1},a.sessionTimer=a.state.session,a.breakTimer=a.state.break,a.handleClick=a.handleClick.bind(Object(g.a)(a)),a.handleSession=a.handleSession.bind(Object(g.a)(a)),a.handleStart=a.handleStart.bind(Object(g.a)(a)),a.handleReset=a.handleReset.bind(Object(g.a)(a)),a}return Object(w.a)(n,[{key:"handleClick",value:function(e,t){if("break"===e)if("inc"===t){if(3600===this.state.break)return;this.setState({break:this.state.break+60}),this.breakTimer+=60}else{if(60===this.state.break)return;this.setState({break:this.state.break-60}),this.breakTimer-=60}else if("inc"===t){if(3600===this.state.session)return;this.setState({session:this.state.session+60}),this.sessionTimer+=60}else{if(60===this.state.session)return;this.setState({session:this.state.session-60}),this.sessionTimer-=60}}},{key:"handleReset",value:function(){this.audio.load(),this.setState({break:300,session:1500,setting:"Session",belowMinute:!1,start:!1}),this.sessionTimer=1500,this.breakTimer=300}},{key:"handleStart",value:function(){var e=this;this.setState({start:!this.state.start},(function(){"Session"===e.state.setting&&e.state.start?e.handleSession():e.handleBreak()}))}},{key:"handleSession",value:function(){var e=this,t=setInterval((function(){e.state.start?e.setState((function(e){return{session:e.session-1}})):clearInterval(t),e.state.session<60&&e.setState({belowMinute:!0}),e.state.session<=0&&(clearInterval(t),e.audio.play(),e.setState({setting:"Break",session:e.sessionTimer,belowMinute:!1}),e.handleBreak())}),1e3)}},{key:"handleBreak",value:function(){var e=this,t=setInterval((function(){e.state.start?e.setState((function(e){return{break:e.break-1}})):clearInterval(t),e.state.break<60&&e.setState({belowMinute:!0}),e.state.break<=0&&(clearInterval(t),e.audio.play(),e.setState({setting:"Session",break:e.breakTimer,belowMinute:!1}),e.handleSession())}),1e3)}},{key:"render",value:function(){var e=this.state.belowMinute?"#8B0000":"#000000";return Object(_.jsx)("div",{className:ve.a.container,children:Object(_.jsxs)("div",{className:ve.a.Clock,children:[Object(_.jsx)("div",{className:ve.a.title,children:"25 + 5 Clock"}),Object(_.jsxs)("div",{className:ve.a["break-label"],children:["Break Length",Object(_.jsx)(_e,{time:this.breakTimer,onClick:this.handleClick,label:"break"})]}),Object(_.jsxs)("div",{className:ve.a["session-label"],children:["Session Length",Object(_.jsx)(_e,{time:this.sessionTimer,onClick:this.handleClick,label:"session"})]}),Object(_.jsxs)("div",{className:ve.a.timer,style:{color:e},children:[Object(_.jsx)("div",{className:ve.a["timer-label"],children:this.state.setting}),Object(_.jsx)("div",{className:ve.a["time-left"],children:"Session"===this.state.setting?xe(this.state.session):xe(this.state.break)})]}),Object(_.jsx)("button",{className:ve.a.start_stop+" "+ve.a.button,onClick:this.handleStart,children:"Start/Stop"}),Object(_.jsx)("button",{className:ve.a.reset+" "+ve.a.button,onClick:this.handleReset,children:"Reset"})]})})}}]),n}(u.a.Component),ye=n(48),ge=n.n(ye),Ce=n(64),Se=n(33),we=n.n(Se),Ne=["#420420","#008080","#8a2be2","#047806","#000080"],Me=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={author:"",content:"",index:0},a.randomQuote=a.randomQuote.bind(Object(g.a)(a)),a}return Object(w.a)(n,[{key:"randomQuote",value:function(){var e=Object(Ce.a)(ge.a.mark((function e(){var t,n;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState((function(e){return{author:n.author,content:n.content,index:(e.index+1)%Ne.length}}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(Ce.a)(ge.a.mark((function e(){var t,n;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({author:n.author,content:n.content});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Ne[this.state.index];return Object(_.jsx)("div",{className:we.a.page,style:{backgroundColor:e},children:Object(_.jsxs)("div",{className:we.a.quoteBox,children:[Object(_.jsx)("blockquote",{className:we.a.text,style:{color:e},children:this.state.content}),Object(_.jsxs)("cite",{className:we.a.author,style:{color:e},children:["- ",this.state.author]}),Object(_.jsx)("button",{className:we.a.newQuote,style:{backgroundColor:e},onClick:this.randomQuote,children:"New Quote"}),Object(_.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:we.a.twitter_share_button+" "+we.a.fa+we.a.fa_twitter,"data-show-count":"false",children:"Tweet"}),Object(_.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})]})})}}]),n}(u.a.Component);var Te=function(){return Object(_.jsxs)(p.a,{children:[Object(_.jsx)(k,{}),Object(_.jsxs)(y.c,{children:[Object(_.jsx)(y.a,{path:"/frontend-compilation/",exact:!0,component:re}),Object(_.jsx)(y.a,{path:"/frontend-compilation/drum",component:re}),Object(_.jsx)(y.a,{path:"/frontend-compilation/quote",component:Me}),Object(_.jsx)(y.a,{path:"/frontend-compilation/calc",component:Q}),Object(_.jsx)(y.a,{path:"/frontend-compilation/markdown",component:je}),Object(_.jsx)(y.a,{path:"/frontend-compilation/timer",component:ke})]})]})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};n(97);h.a.render(Object(_.jsx)(u.a.StrictMode,{children:Object(_.jsx)(Te,{})}),document.getElementById("root")),qe()}},[[98,1,2]]]);
//# sourceMappingURL=main.205d65d2.chunk.js.map
(this["webpackJsonpmy-dnd"]=this["webpackJsonpmy-dnd"]||[]).push([[0],{16:function(e,a,t){e.exports=t(56)},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var r,n=t(0),c=t.n(n),l=t(14),s=t.n(l),i=(t(21),t(6)),o=t(1),m=(t(22),t(23),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"WelcomeScreen-header"},c.a.createElement("h1",null,"This will be Legendary!"),c.a.createElement("h2",null,"Now choose honestly"),c.a.createElement("ul",{className:"UserType-list"},c.a.createElement("li",null,c.a.createElement("button",{onClick:e.userTypeSelect,value:"DM"},"I AM THE ALMIGHTY DUNGEON MASTER!")),c.a.createElement("li",null,c.a.createElement("button",{onClick:e.userTypeSelect,value:"player"},"I am but a humble adventurer")))))}),u=(t(24),function(e,a){var t=Object(n.useState)(!1),r=Object(o.a)(t,2),c=r[0],l=r[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(null),h=Object(o.a)(d,2),p=h[0],E=h[1],f=new Headers;f.append("Accept","application/json");return Object(n.useEffect)((function(){var t=new AbortController;return function(e,a){var t=Object(o.a)(e,2),r=t[0],n=t[1];l(!0),fetch(r,{method:"GET",headers:f,signal:a.signal}).then((function(e){return e.json()})).then((function(e){if(1===e.count)fetch("https://cors-anywhere.herokuapp.com/"+e.results[0].url,{method:"GET",headers:f,mode:"cors",signal:a.signal}).then((function(e){return e.json()})).then((function(e){l(!1),E(e)})).catch((function(e){console.log("2: "+e),l(!1),u(e)}));else if(e.count>1){var t,r=e.results.find((function(e){return e.name===n}));r?(t=r.url,fetch("https://cors-anywhere.herokuapp.com/https://dnd5eapi.co"+t,{method:"GET",headers:f,mode:"cors",signal:a.signal}).then((function(e){return e.json()})).then((function(e){l(!1),E(e)})).catch((function(e){console.log("2: "+e),l(!1),u(e)}))):(console.log("Nothing found. Make sure you use the right resource"),l(!1))}else console.log("Nothing found. Make sure you use the right resource"),l(!1)})).catch((function(e){console.log("1: "+e),l(!1),u(e)}))}(function(){var t="",r=[];a?(a.split(" ").forEach((function(e){var a=e.charAt(0).toUpperCase()+e.substring(1);r.push(a)})),t="https://cors-anywhere.herokuapp.com/https://dnd5eapi.co/api/"+e+"/?name="+r.join("+")):t="https://cors-anywhere.herokuapp.com/https://dnd5eapi.co/api/"+e;return[t,r.join(" ")]}(),t),function(){t.abort()}}),[e,a]),[p,m,c]}),d=(t(25),function(e){var a=null,t=null;return a=e.data.higher_level?c.a.createElement("div",{className:"higher-level"},c.a.createElement("h1",null,"Higher Levels"),c.a.createElement("hr",null),e.data.higher_level.map((function(a){return c.a.createElement("p",{className:"spell-text",key:e.data.desc.indexOf(a)},a.replace(/\xe2\u20ac\u2122/gi,"'"))}))):null,t=e.data.level<=0?"Cantrip":1===e.data.level?"1st level":2===e.data.level?"2nd level":3===e.data.level?"3rd level":e.data.level+"th level",e.data.index&&"Spells"===e.selectedResource?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"spell-card-holder"},c.a.createElement("div",{className:"spell-card"},c.a.createElement("h1",{className:"spell-name"},e.data.name),c.a.createElement("p",{className:"spell-school"},e.data.school.name,"   ",t),c.a.createElement("div",{className:"spell-stats"},c.a.createElement("p",null,c.a.createElement("b",null,"Casting Time:")," ",e.data.casting_time),c.a.createElement("p",null,c.a.createElement("b",null,"Range:")," ",e.data.range),c.a.createElement("p",null,c.a.createElement("b",null,"Components:")," ",e.data.components.join(", ")),c.a.createElement("p",null,c.a.createElement("b",null,"Duration:")," ",e.data.duration),c.a.createElement("p",null,c.a.createElement("b",null,"Classes:")," ",e.data.classes.map((function(e){return e.name})).join(", "))),c.a.createElement("div",{className:"spell-text"},e.data.desc.map((function(a){return c.a.createElement("p",{key:e.data.desc.indexOf(a)},a.replace(/\xe2\u20ac\u2122/gi,"'"))}))),a))):"Spells"!==e.selectedResource?c.a.createElement("h1",null,'Feature not fully developed yet. Please use "Spells".'):c.a.createElement("p",null,"Please search for spells using spell name. Examples coming in later version.")}),h=t(15);t(50);r={border:"20px solid red",borderImage:"url(mapBorder.png) 38 round",marginTop:"20px",maxWidth:"90%"};var p="",E=function(e){return p="",function(e){var a=new Image;a.onload=function(){return p=e},a.onerror=function(){return p=""},a.src=e}(e.maps[e.selectedMap].src_large),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"img-magnifier-container"},c.a.createElement(h.GlassMagnifier,{imageSrc:e.maps[e.selectedMap].src,largeImageSrc:p,imageAlt:e.maps[e.selectedMap].alt,style:r,magnifierOffsetX:-20,magnifierOffsetY:-20}),c.a.createElement("p",{className:"map-description"},e.maps[e.selectedMap].desc)))},f=function(e){var a=e.ability,t=e.abilityMod,r=e.stil,n=e.data;return c.a.createElement("div",{className:r+"-abilities"},c.a.createElement("h2",{className:r+"-ability"}," ",a," "),c.a.createElement("p",{className:r+"-ability-score",id:a}," ",n[a]," "),c.a.createElement("p",{className:r+"-ability-modifier",id:a+"Mod"}," ",n[t]," "))},v=function(e){var a=e.stat,t=e.statProficiency,r=e.data,n=a.replace(/\s+/g,""),l=t.replace(/\s+/g,"");return c.a.createElement("div",{className:"round"},c.a.createElement("input",{className:"character-stat-proficiency",type:"checkbox",readOnly:!0,checked:r[l]}),c.a.createElement("label",{id:n+"-label"}),c.a.createElement("span",{className:"character-stat",id:n},r[n]),c.a.createElement("span",{className:"character-stat-text"}," ",a))},g=function(e){var a,t=e.stat,r=e.statProficiency,n=e.data,l=t.replace(/\s+/g,"");return"string"===typeof r&&(a=r.replace(/\s+/g,"")),n[a]||!0===r?c.a.createElement("p",null,t," ",n[l]," "):null},y={border:"20px solid red",borderImage:"url(portraitBorder.png) 100 round"},N=document.getElementsByClassName("portrait");window.matchMedia("(max-width: 700px)").addListener((function(e){e.matches?[].forEach.call(N,(function(e){e.style.borderImage="",e.style.border="1px transparent"})):[].forEach.call(N,(function(e){e.style.border="20px solid red",e.style.borderImage="url(portraitBorder.png) 100 round"}))}));var b=["Strength","Dexterity","Constitution","intelligence","Wisdom","Charisma"],S=["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight Of Hand","Stealth","Survival"],P=function(e){var a=[],t=[];return e.data.PictureURL&&e.data.Class&&(a=e.data.PictureURL.split(", "),t=e.data.Class.split(" ")),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-holder"},c.a.createElement("div",{className:"character-card"},c.a.createElement("div",{className:"character-header"},c.a.createElement("h1",null,e.data.Name),c.a.createElement("p",null,e.data.Race," ",e.data.Gender," ",t[0]," "),c.a.createElement("p",null,e.data.Backstory," - ",e.data.Alignment),c.a.createElement("p",null,t[0]," level ",t[1]," (",e.data.Experience," EXP)")),c.a.createElement("div",{className:"character-body"},c.a.createElement("div",{className:"character-left"},c.a.createElement("div",{className:"character-ability-scores"},b.map((function(a){return c.a.createElement(f,{ability:a,abilityMod:a+"Mod",data:e.data,stil:"character",key:a+" "+e.data.Name})})))),c.a.createElement("div",{className:"character-middle"},c.a.createElement("div",{className:"character-saves"},b.map((function(a){return c.a.createElement(v,{stat:a+"Save",statProficiency:a+"SaveProficiency",data:e.data,key:a+"Save "+e.data.Name})}))),c.a.createElement("div",{className:"character-skills"},S.map((function(a){return c.a.createElement(v,{stat:a,statProficiency:a+"Proficiency",data:e.data,key:a+" "+e.data.Name})}))),c.a.createElement("div",{className:"character-skills"},c.a.createElement(v,{stat:"passivePerception",statProficiency:"PerceptionProficiency",data:e.data,key:"passPerception "+e.data.Name}))),c.a.createElement("div",{className:"character-right"},c.a.createElement("div",{className:"character-armor"},c.a.createElement("h3",{className:"character-armor-title"},"AC"),c.a.createElement("p",{className:"character-armor-class"},e.data.AC)),c.a.createElement("div",{className:"character-health"},c.a.createElement("h3",{className:"character-health-title"},"Max HP"),c.a.createElement("p",{className:"character-health-points"},e.data.HPValue)),c.a.createElement("div",{className:"character-initiative"},c.a.createElement("h3",{className:"character-initiative-title"},"Init"),c.a.createElement("p",{className:"character-initiative-mod"},e.data.Initiative)),c.a.createElement("div",{className:"character-speed"},c.a.createElement("h3",{className:"character-speed-title"},"Speed"),c.a.createElement("p",{className:"character-speed-value"},e.data.Speed)),c.a.createElement("div",{id:"desc"},e.data.Description))),c.a.createElement("div",{className:"character-footer"},c.a.createElement("div",{className:"character-personality"},c.a.createElement("h3",null,"Personality"),c.a.createElement("p",{className:"character-personality-trait"},e.data.Personality),c.a.createElement("p",{className:"character-personality-ideals"},e.data.Ideals),c.a.createElement("p",{className:"character-personality-bonds"},e.data.Bonds),c.a.createElement("p",{className:"character-personality-flaws"},e.data.Flaws)),c.a.createElement("div",{className:"character-images"},a.map((function(e){return c.a.createElement("img",{className:"portrait",key:a.indexOf(e),src:e,alt:"Not found.",style:y})})))))))},k=(t(51),function(e){var a=["Strength","Dexterity","Constitution","intelligence","Wisdom","Charisma"],t=["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight Of Hand","Stealth","Survival"],r=function(a,t){return c.a.createElement(g,{stat:a,statProficiency:a+"Proficiency",data:e.data[t][0],key:a+"Proficiency "+e.data[t][0].Name})},n=function(n){return c.a.createElement(c.a.Fragment,{key:"Character "+n+" out of "+e.data.length},c.a.createElement("div",{className:"summary-item"},c.a.createElement("h1",{className:"summary-name"},e.data[n][0].Name),a.map((function(a){return function(a,t){return c.a.createElement(f,{ability:a,abilityMod:a+"Mod",data:e.data[t][0],stil:"summary",key:a+e.data[t][0].Name})}(a,n)})),c.a.createElement("div",{className:"summary-proficiencies"},a.map((function(e){return r(e+" Save",n)})),t.map((function(e){return r(e,n)})),c.a.createElement(g,{stat:"passivePerception",statProficiency:!0,data:e.data[n][0],key:"passPerception "+e.data[n][0].Name}))))};return c.a.createElement(c.a.Fragment,null,e.data.map((function(e,a){return n(a)})))}),j=(t(52),t(53),t(10));t(54);function C(e){var a=Object(j.a)(),t=a.register,r=a.handleSubmit,n=a.errors;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:r((function(a){e.onNewCharacter(a.url,a.api,a.name)}))},c.a.createElement("label",null,"Add New Character:"),c.a.createElement("input",{className:"search-element",type:"url",placeholder:"Dicecloud URL",name:"url",ref:t({required:!0})}),n.url&&c.a.createElement("p",{className:"input-error"},"Your input is required"),c.a.createElement("input",{className:"search-element",type:"text",placeholder:"Dicecloud API",name:"api",ref:t({required:!0})}),n.api&&c.a.createElement("p",{className:"input-error"},"Your input is required"),c.a.createElement("input",{className:"search-element",type:"text",placeholder:"Character Name",name:"name",ref:t({required:!0})}),n.name&&c.a.createElement("p",{className:"input-error"},"Your input is required"),c.a.createElement("input",{className:"my-button",type:"submit"})),c.a.createElement("ul",{className:"delete-list"},e.characters.map((function(a,t){return c.a.createElement("li",{key:t},a.name+" ",c.a.createElement("button",{className:"delete",onClick:e.onRemoveCharacter,value:a.name}," Remove "))})),c.a.createElement("li",{key:"removeAll"},c.a.createElement("button",{className:"delete",onClick:e.onRemoveCharacter,value:"REMOVE-ALL"},"Remove All Characters"))))}var M=function(e){var a=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),i=s[0],m=s[1],u=[];e.length>1?u=e.map((function(e){return"https://dicecloud.com/vmix-character/".concat(e.id,"?key=").concat(e.APIkey)})):1===e.length?u[0]="https://dicecloud.com/vmix-character/".concat(e[0].id,"?key=").concat(e[0].APIkey):u=null;var d=new Headers;return d.append("Accept","application/json"),Object(n.useEffect)((function(){var a=new AbortController;return 0===e.length?console.log("No character selected."):(c(!0),Promise.all(u.map((function(e){return fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",headers:d,mode:"cors",signal:a.signal}).then((function(e){return e.json()}))}))).then((function(e){c(!1),m(e||new Error("Failed for reasons"))})).catch((function(e){console.log(e),c(!1)}))),function(){a.abort()}}),[e]),[r,i]}(e.selectedChar),t=Object(o.a)(a,2),r=t[0],l=t[1],s=c.a.createElement("p",null,"Loading characters...");return 0===e.characters.length?s=c.a.createElement("h1",null,"Please add a character using the form below..."):null===e.selectedChar?s=c.a.createElement("h1",null,"Please select a character above."):!r&&l&&l.length>0&&(s=l.length>1?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"summary-parent"},c.a.createElement(k,{data:l}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{data:l[0][0]}))),s},w=function(e){var a=u(e.selectedResource,e.query),t=Object(o.a)(a,3),r=t[0],n=t[1],l=t[2],s=c.a.createElement("p",null,"Loading ",e.selectedResource);return l||!r||n?n&&console.log(n):s=c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{selectedResource:e.selectedResource,data:r})),s},O=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{maps:e.maps,selectedMap:e.selectedMap}))},R=function(e){var a=M,t=w,r=O,n=Object(j.a)(),l=n.register,s=n.handleSubmit,i=null,o=null;return"DM"===e.playgroundType?(o=e.characters.map((function(e){return e.id})),i=c.a.createElement("option",{key:"summary",value:o,"data-array":!0},"Character Summary")):i=null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main-header"},c.a.createElement("h1",null,"You are a ",e.playgroundType,"!"),c.a.createElement("button",{onClick:e.onReturn,value:""},"Return")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"flex-item"},c.a.createElement("div",{className:"flex-item-header"},c.a.createElement("select",{id:"characterSelector",onChange:e.onCharSelect,"data-value":e.selectedChar.id,className:"select-css"},e.characters.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id,"data-array":!1},e.name)})),i)),c.a.createElement("div",{className:"character-container"},c.a.createElement(a,{selectedChar:e.selectedChar,characters:e.characters})),c.a.createElement("div",{className:"add-character"},c.a.createElement(C,{onNewCharacter:e.onNewCharacter,onRemoveCharacter:e.onRemoveCharacter,characters:e.characters}))),c.a.createElement("div",{className:"flex-item"},c.a.createElement("div",{className:"flex-item-header"},c.a.createElement("form",{onSubmit:s((function(a){e.onResourceSelect(a.resource),e.onQuery(a.query)}))},c.a.createElement("select",{className:"select-css",name:"resource",ref:l},e.resources.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))),c.a.createElement("div",null,c.a.createElement("input",{className:"search",type:"input",name:"query",placeholder:"Spell Name",ref:l}),c.a.createElement("input",{className:"my-button",type:"submit",value:"Search"})))),c.a.createElement("div",{className:"spell-container"},c.a.createElement(t,{selectedResource:e.selectedResource,query:e.query}))),c.a.createElement("div",{className:"flex-item"},c.a.createElement("div",{className:"flex-item-header"},c.a.createElement("select",{onChange:e.onMapSelect,value:e.selectedMap,className:"select-css"},e.maps.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement("div",{className:"map-container"},c.a.createElement(r,{maps:e.maps,selectedMap:e.selectedMap})))),c.a.createElement("button",{className:"my-button bottom",onClick:e.onReturn,value:""},"Return"))},A=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([{id:"mLdzKAN7AAGt3qPP2",APIkey:"QRryrEJEF27FDcPsZgWZZvhHhf5a3t",name:"Harley Merlin"},{id:"f7rZWpSiorNDNv5Qp",APIkey:"QRryrEJEF27FDcPsZgWZZvhHhf5a3t",name:"Shrek"},{id:"xS8JoRmvpsnjm529p",APIkey:"QRryrEJEF27FDcPsZgWZZvhHhf5a3t",name:"Draud"}]),s=Object(o.a)(l,2),u=s[0],d=s[1],h=Object(n.useState)(["Spells","Equipment","Proficiencies"]),p=Object(o.a)(h,2),E=p[0],f=(p[1],Object(n.useState)([{id:0,name:"World Map",src:"./WorldMap.jpg",src_large:"./WorldMap_large.jpg",alt:"The world map of Miradonia",desc:"Miradonia consists of two main continents. It is populated by a variety of races and monsters. "},{id:1,name:"Regional Map",src:"./RegionalMap.jpg",src_large:"./RegionalMap_large.jpg",alt:"The region map of Mistwood",desc:"The region of Mistwood holds the main travel route between the north and south. The Mist Woods themselves are the homeland for many wood elves, while the Knife Edge Mountains is the home to some smaller groups of Dwarves. Elesgate is the capital of the region, being a natural stop for any who travel north-south. The Silver River connects Elesgate to Martslock which functions as the main port. Work in progress..."}])),v=Object(o.a)(f,2),g=v[0],y=(v[1],Object(n.useState)([{id:"mLdzKAN7AAGt3qPP2",APIkey:"QRryrEJEF27FDcPsZgWZZvhHhf5a3t",name:"Harley Merlin"}])),N=Object(o.a)(y,2),b=N[0],S=N[1],P=Object(n.useState)("Spells"),k=Object(o.a)(P,2),j=k[0],C=k[1],M=Object(n.useState)("Eldritch Blast"),w=Object(o.a)(M,2),O=w[0],A=w[1],x=Object(n.useState)(0),I=Object(o.a)(x,2),F=I[0],T=I[1],D=function(e){var a=e.target.value;r(a)},H=c.a.createElement("div",{className:"footer"},c.a.createElement("h5",null,"Created by Ole Kristian S\xe6vareid"),c.a.createElement("p",null,"Project goal is to experiment with React & React Hooks and create something useful for Dungeons & Dragons players and Dungeon Masters using Dicecloud.com")),W=c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{userTypeSelect:D,userType:t}),H);return t&&(W=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main"},c.a.createElement(R,{playgroundType:t,onReturn:D,onNewCharacter:function(e,a,t){var r=e.match(/character\/\w*\//g)[0].split("/")[1],n=[];if(u.some((function(e){return e.id===r}))){var c=u[u.findIndex((function(e){return e.id===r}))].name;console.log("Character already exists under the name: "+c),window.alert("Character already exists under the name: "+c)}else{var l=[].concat(Object(i.a)(u),[{id:r,APIkey:a,name:t}]);d(l),n[0]=l.find((function(e){return e.id===r})),S(n),document.getElementById("characterSelector").value=r}},onRemoveCharacter:function(e){if("REMOVE-ALL"===e.target.value)d([]),S([]);else{var a=u.filter((function(a){return a.name!==e.target.value}));d(a);var t=!0;if(b.length>1)S(a);else if(b&&(t=!a.some((function(e){return e.id===b.id}))),t&&a.length>0){var r=[a[0]];S(r),console.log(a)}else S([])}},characters:u,selectedChar:b,onCharSelect:function(e){var a,t=[];(a=e.target.value.split(",")).length>1?t=u:t[0]=u.find((function(e){return e.id===a[0]})),S(t)},resources:E,selectedResource:j,onResourceSelect:function(e){C(e)},maps:g,selectedMap:F,onMapSelect:function(e){var a=e.target.value;T(a)},query:O,onQuery:function(e){A(e)}})),H)),W};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5fda2b20.chunk.js.map
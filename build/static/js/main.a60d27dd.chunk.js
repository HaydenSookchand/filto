(this.webpackJsonpfilto=this.webpackJsonpfilto||[]).push([[0],[,,,,,function(t,e,a){},,,,,,function(t,e,a){},,,,,,function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),c=a(6),r=a.n(c),o=(a(11),a(3)),s=a(2),A=a.p+"static/media/original.62a2c28d.png",l=a.p+"static/media/blur.5aff437f.png",u=a.p+"static/media/sepia.b2e58983.png",d=a.p+"static/media/vintage.cafbd75e.png",v=a.p+"static/media/kodachrome.b2087c5c.png",g=a.p+"static/media/technicolor.348215c0.png",f=a.p+"static/media/add.103212e2.png",b=(a(5),a(0)),h=function(t){var e=t.addFilter,a=t.openFile,i=t.addFilterStrength,c=t.isBlur,r=Object(n.useState)(.5),s=Object(o.a)(r,2),h=s[0],j=s[1];return Object(b.jsxs)("div",{className:"filters ",id:"filters",children:[Object(b.jsx)("img",{alt:"original",onClick:function(){return e("original")},src:A,className:"filterButton"}),Object(b.jsx)("img",{alt:"blur",onClick:function(){return e("blur")},src:l,className:"filterButton"}),Object(b.jsx)("img",{alt:"sepia",onClick:function(){return e("sepia")},src:u,className:"filterButton"}),Object(b.jsx)("img",{alt:"vintage",onClick:function(){return e("vintage")},src:d,className:"filterButton"}),Object(b.jsx)("img",{alt:"technicolor",onClick:function(){return e("technicolor")},src:g,className:"filterButton"}),Object(b.jsx)("img",{alt:"kodachrome",onClick:function(){return e("kodachrome")},src:v,className:"filterButton"}),Object(b.jsx)("img",{alt:"add",onClick:a,src:f,className:"filterButton"}),c?Object(b.jsxs)("div",{id:"filterStrength",className:"filterStrength",children:[Object(b.jsx)("input",{type:"range",className:"custom-range",value:h,step:"0.1",min:"0.1",max:"1.0",onChange:function(t){return j((e=t).target.value),void i(e.target.value);var e}}),Object(b.jsxs)("h4",{children:["Filter Strength ",h]})]}):null]})},j=function(t){var e=t.downloadImage;return Object(b.jsxs)("div",{id:"download-buttons",children:[Object(b.jsx)("div",{onClick:function(){return e("png")},className:"btn downloadPngBtn",children:"Download PNG"}),Object(b.jsx)("div",{onClick:function(){return e("jpeg")},className:"btn downloadJpgBtn",children:"Download JPG"})]})},p=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),a=e[0],i=e[1],c=Object(n.useState)(""),r=Object(o.a)(c,2),A=r[0],l=r[1],u=Object(n.useState)(!1),d=Object(o.a)(u,2),v=d[0],g=d[1];Object(n.useEffect)((function(){i(f())}),[]),Object(n.useEffect)((function(){w()}),[A]);var f=function(){return new s.fabric.Canvas("canvas",{height:225,width:300,backgroundColor:"black"})},p=function(){document.getElementById("uploadButton").click()},m=function(){a&&(a.selection=!1,a.forEachObject((function(t){t.selectable=!1})))},w=function(){var t=document.getElementById("target"),e=new s.fabric.Image(t);e.scaleToHeight(225),e.scaleToWidth(300),a&&(a._objects=[],a.add(e))};return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("img",{alt:"logo",id:"logo",src:"data:image/png;base64,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",className:"logo"}),Object(b.jsx)("canvas",{id:"canvas"}),Object(b.jsx)("input",{type:"file",onChange:function(t){if(f(),t.target.files&&t.target.files[0]){var e=new FileReader;e.onload=function(e){l(URL.createObjectURL(t.target.files[0])),setTimeout((function(){w(),m()}),500)},e.readAsDataURL(t.target.files[0])}},className:"uploadButton",id:"uploadButton",style:{display:"none"}}),Object(b.jsx)("img",{alt:"uploadedimage",style:{display:"none"},id:"target",src:A}),A?Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{addFilter:function(t){var e="",n=a._objects[0];if(g(!1),n){switch(n.filters=[],t){case"blur":g(!0),e=new s.fabric.Image.filters.Blur({blur:.5});break;case"sepia":e=new s.fabric.Image.filters.Sepia;break;case"vintage":e=new s.fabric.Image.filters.Vintage;break;case"kodachrome":e=new s.fabric.Image.filters.Kodachrome;break;case"technicolor":e=new s.fabric.Image.filters.Technicolor;break;default:n.filters=[],n.applyFilters(),a.renderAll()}e&&(n.filters.push(e),n.applyFilters(),a.renderAll())}else alert("Please add an Image")},openFile:p,addFilterStrength:function(t){var e=a._objects[0];e.filters[0].blur=t,e.applyFilters(),a.renderAll()},isBlur:v}),Object(b.jsx)(j,{downloadImage:function(t){if(a){var e=a.toDataURL({format:t}).replace("image/"+t,"image/octet-stream"),n=document.createElement("a");n.download="filto."+t,n.href=e,n.click()}}})]}):Object(b.jsx)("div",{onClick:p,className:"btn startBtn",children:"Choose Image"})]})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a60d27dd.chunk.js.map
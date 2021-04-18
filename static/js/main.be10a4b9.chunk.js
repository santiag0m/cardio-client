(this["webpackJsonpcardio-client"]=this["webpackJsonpcardio-client"]||[]).push([[0],{67:function(e,a,n){e.exports=n(81)},72:function(e,a,n){},73:function(e,a,n){},81:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=n(9),r=n.n(o),s=(n(72),n(73),n(57)),l=n(37),c=n(51),d=n(47),m=n(113),u=n(123),p=n(117),f=n(118),g=n(119),h=n(120),y=n(125),b=n(124);function _(e){var a,n=e.field,o=e.formUpdate,r=e.className,s=e.useSpanish,c=Object(t.useState)(n.default),d=Object(l.a)(c,2),_=d[0],v=d[1],C=s?n.spanish_name:n.field_name,E=function(e){v(e.target.value)};return Object(t.useEffect)((function(){o(n.field_name,_)}),[n,_]),a=void 0===n.options?"checkbox"!==n.type?i.a.createElement(m.a,{style:{width:"100%"}},i.a.createElement(u.a,{type:n.type,label:C,onChange:E})):i.a.createElement(m.a,{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},i.a.createElement(p.a,{component:"legend"},C),i.a.createElement(f.a,{component:"label",container:!0,alignItems:"center",justify:"center",spacing:1,style:{width:"150px"}},i.a.createElement(f.a,{item:!0},"No"),i.a.createElement(f.a,{item:!0},i.a.createElement(g.a,{checked:_,onChange:function(e){v(e.target.checked)},name:"checkedC"})),i.a.createElement(f.a,{item:!0},s?"Si":"Yes"))):i.a.createElement(m.a,{key:n.field_name,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}},i.a.createElement(p.a,{id:"-label"},C),i.a.createElement(h.a,{onChange:E,value:_,style:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"52%",marginRight:"2%"}},n.options.map((function(e,a){return i.a.createElement(y.a,{value:e,control:i.a.createElement(b.a,null),label:s?n.spanish_options[a]:e,key:e,labelPlacement:"start"})})))),i.a.createElement("div",{className:r},a)}var v=n(121),C=n(84),E=n(83),x=n(122),k=n(56),w=n.n(k),S=Object(v.a)((function(e){return{root:{display:"flex",flexDirection:"column",width:"60%",maxWidth:"1000px",alignItems:"center",padding:"5%",backgroundColor:"white",borderRadius:"25px",marginTop:"3%",marginBottom:"5%"},formControl:{margin:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%"},formGroup:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignSelf:"center",margin:"32px 0 0 0",borderRadius:"3px",width:"80%"},field:{margin:"6px",padding:"6px",backgroundColor:"rgba(230, 232, 235, 0.2)",borderRadius:"5px",widht:"80%"},submitButton:{alignSelf:"center",width:"50%"}}}));var j=[{field_name:"Age",spanish_name:"Edad",type:"number",default:null,group:"Demographics"},{field_name:"BMI",spanish_name:"IMC",type:"number",default:null,group:"Demographics"},{field_name:"Sex",spanish_name:"Sexo",type:"category",options:["Female","Male"],spanish_options:["Femenino","Masculino"],default:"",group:"Demographics"},{field_name:"LVEF",spanish_name:"Fracci\xf3n de Eyecci\xf3n",type:"number",default:null,group:"Laboratory"},{field_name:"Hematocrit",spanish_name:"Hematocrito",type:"number",default:null,group:"Laboratory"},{field_name:"Creatinine",spanish_name:"Creatinina",type:"number",default:null,group:"Laboratory"},{field_name:"Coronary Arteries Blocked",spanish_name:"Vasos Coronarios Enfermos",type:"number",default:null,group:"Comorbidities"},{field_name:"Hypertension",spanish_name:"Hipertensi\xf3n",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Diabetes",spanish_name:"Diabetes",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Peripheral Artery Disease",spanish_name:"Enfermedad Arterial Perif\xe9rica",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Stroke",spanish_name:"Enfermedad Cerebro Vascular",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Heart failure",spanish_name:"Insuficiencia Card\xedaca",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Arrhythmia",spanish_name:"Arritmia",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Dialysis",spanish_name:"Di\xe1lisis",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"Endocarditis",spanish_name:"Endocarditis Infecciosa",type:"checkbox",default:!1,group:"Comorbidities"},{field_name:"COPD",spanish_name:"Enfermedad Pulmonar Cr\xf3nica",type:"category",options:["No","Mild","Moderate","Severe"],spanish_options:["No","Leve","Moderada","Severa"],default:"",group:"Comorbidities"},{field_name:"Aortic valve insufficiency",spanish_name:"Insuficiencia A\xf3rtica",type:"category",options:["No","Trivial","Mild","Moderate","Severe"],spanish_options:["No","Trivial","Leve","Moderada","Severa"],default:"",group:"Comorbidities"},{field_name:"Mitral valve regurgitation",spanish_name:"Insuficiencia Mitral",type:"category",options:["No","Trivial","Mild","Moderate","Severe"],spanish_options:["No","Trivial","Leve","Moderada","Severa"],default:"",group:"Comorbidities"},{field_name:"Tricuspid valve regurgitation",spanish_name:"Insuficiencia Tricusp\xeddea",type:"category",options:["No","Trivial","Mild","Moderate","Severe"],spanish_options:["No","Trivial","Leve","Moderada","Severa"],default:"",group:"Comorbidities"},{field_name:"Reanimation",spanish_name:"Resucitaci\xf3n",type:"checkbox",default:!1,group:"Procedure"},{field_name:"Cardiogenic Shock",spanish_name:"Schock Cardiog\xe9nico",type:"checkbox",default:!1,group:"Procedure"},{field_name:"Urgency upon admission",spanish_name:"Urgencia en admisi\xf3n",type:"category",options:["Elective","Urgent","Emergency","Emergency - Rescue"],spanish_options:["Electiva","Urgente","Emergencia","Emergencia - Rescate"],default:"",group:"Procedure"},{field_name:"Weight of procedure",spanish_name:"Peso del procedimiento",type:"category",options:["Isolated CABG","Isolated non-CABG","Two procedures","Three or more procedures"],spanish_options:["Aislado (Baip\xe1s Coronario)","Aislado (No Baip\xe1s Coronario)","Dos procedimientos","Tres o m\xe1s procedimientos"],default:"",group:"Procedure"}];function N(e){var a=Object(d.a)({},e);for(var n in a)null!==a[n]&&void 0!==a[n]&&""!==a[n]||delete a[n];return a}function M(){var e,a={},n=Object(c.a)(j);try{for(n.s();!(e=n.n()).done;){var o=e.value;a[o.field_name]=o.default}}catch(A){n.e(A)}finally{n.f()}var r=S(),u=Object(t.useState)(a),f=Object(l.a)(u,2),g=f[0],h=f[1],y=Object(t.useState)(!0),b=Object(l.a)(y,2),v=b[0],k=b[1],M=v?"Calculadora de Riesgo de Mortalidad\nen Cirug\xeda Cardiovascular":"Cardiac Surgery Mortality Risk Calculator",D=Object(t.useCallback)((function(e,a){!function(e,a,n,t){var i=Object(d.a)({},n);i[e]=a,t(i),console.log(i)}(e,a,g,h)}),[g,h]);function O(e){var a,n=j.filter((function(a){return a.group===e}));switch(e){case"Comorbidities":a="Comorbilidades";break;case"Procedure":a="Procedimiento";break;case"Demographics":a="Demogr\xe1ficos";break;case"Laboratory":a="Laboratorio";break;default:a=""}return i.a.createElement(C.a,{key:e,className:r.formGroup},i.a.createElement("fieldset",{style:{border:"1px solid gray",borderRadius:"3px",width:"100%"}},i.a.createElement("legend",null,v?a:e),n.map((function(e){return function(e){return i.a.createElement(_,{key:e.field_name,field:e,formUpdate:D,className:r.field,useSpanish:v})}(e)}))))}var I=new Set(j.map((function(e){return e.group}))),T=(I=Object(s.a)(I)).map((function(e){return O(e)}));return i.a.createElement("div",{className:r.root},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%"}},i.a.createElement(p.a,{component:"legend"},v?"English":"Espa\xf1ol"),i.a.createElement(E.a,{"aria-label":"language",onClick:function(){k(!v)}},i.a.createElement(w.a,null))),i.a.createElement("h1",{width:"100%"},M),i.a.createElement(m.a,{className:r.formControl},T),i.a.createElement(x.a,{variant:"outlined",color:"primary",onClick:function(){fetch("https://ayef8zx40j.execute-api.us-east-1.amazonaws.com/dev/",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(N(g))}).then((function(e){return e.json()})).then((function(e){if(console.log(e),void 0!==e.risk_score){var a=(100*parseFloat(e.risk_score)).toFixed(2);alert(v?"El puntaje de riesgo es: "+a+"%":"The risk score is: "+a+"%")}else alert(e.message)})),console.log(JSON.stringify(g))},className:r.submitButton,disabled:!function(){var e=JSON.stringify(g),a=JSON.stringify(N(g));return console.log(e,a),console.log(e===a),e===a}()},"submit"))}var D=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.be10a4b9.chunk.js.map
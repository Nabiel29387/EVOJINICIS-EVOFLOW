"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[235],{3235:function(e,t,l){l.d(t,{Z:function(){return ae}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"gaInput"},[e.xxKey&&e.xxToggle.show?t("DCheckbox",e._b({on:{updateKey:e.toggleXX}},"DCheckbox",e.xxToggle,!1)):e._e(),t(e.comp,e._b({directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],tag:"component",on:{updateKey:e.updateKey}},"component",e.option,!1))],1)},s=[],a=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("v-select",{class:{"text-notice":!e.localVal&&e.required},attrs:{label:e.label,items:e.items,multiple:e.multiple,disabled:e.disabled,required:e.required,rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")],placeholder:"none",dense:""},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}})],1):e._e()},r=[],o={name:"DSelect",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String,required:!0},show:{default:!1},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useTextValue:{type:String,default:""},def:{},items:{default(){return[]}}},computed:{localVal:{get(){return this.multiple?Array.isArray(this.value)?this.value:[this.value]:!this.multiple&&Array.isArray(this.value)?this.value[0]:this.value},set(e){if(this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e}),this.useTextValue&&!this.multiple){const t=this.items.find((t=>t.value===e));this.$emit("updateKey",{oKey:this.useTextValue,val:t.text})}}}}},n=o,u=l(1001),d=(0,u.Z)(n,a,r,!1,null,"99d18606",null),c=d.exports,p=l(5528),h=function(){var e=this,t=e._self._c;return e.show?t("div",[t("v-text-field",{class:{"text-notice":!e.localVal&&e.required},attrs:{disabled:e.disabled,label:e.label,type:e.type,min:e.min,max:e.max,step:e.step,dense:"",required:e.required,prefix:e.prefix,rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")]},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}})],1):e._e()},f=[],y={name:"DText",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String,required:!0},show:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},default:{default:""},type:{type:String,default:"text"},min:{type:Number},max:{type:Number},step:{type:Number},prefix:{default:""}},computed:{localVal:{get(){return this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}}}},m=y,K=(0,u.Z)(m,h,f,!1,null,"691b9f6d",null),v=K.exports,x=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("v-textarea",{class:{"text-notice":!e.localVal&&e.required},attrs:{disabled:e.disabled,label:e.label,rows:e.rows,dense:"",required:e.required,rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")]},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}})],1):e._e()},g=[],b={name:"DTextarea",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String,required:!0},show:{default:!1},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},default:{default:""},rows:{type:Number,default:3}},computed:{localVal:{get(){return this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}}}},S=b,V=(0,u.Z)(S,x,g,!1,null,"6073630a",null),$=V.exports,q=function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"dpCheck"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.localVal,expression:"localVal"}],attrs:{type:"checkbox",id:e.refKey,disabled:e.disabled,required:e.required},domProps:{value:e.refKey,checked:Array.isArray(e.localVal)?e._i(e.localVal,e.refKey)>-1:e.localVal},on:{change:function(t){var l=e.localVal,i=t.target,s=!!i.checked;if(Array.isArray(l)){var a=e.refKey,r=e._i(l,a);i.checked?r<0&&(e.localVal=l.concat([a])):r>-1&&(e.localVal=l.slice(0,r).concat(l.slice(r+1)))}else e.localVal=s}}}),t("label",{attrs:{for:e.refKey}},[e._v(e._s(e.label)+" "),e.required?t("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e()])]):e._e()},w=[],D={name:"DCheckBox",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String},show:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},default:{type:Boolean},xx:{type:Boolean,default:!1}},computed:{refKey(){return this.oKey||this.fKey},localVal:{get(){return this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}}}},I=D,_=(0,u.Z)(I,q,w,!1,null,"13ef1206",null),k=_.exports,B=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.localVal,expression:"localVal"}],attrs:{type:"checkbox",id:e.oKey||e.fKey,disabled:e.disabled,required:e.required},domProps:{value:e.oKey||e.fKey,checked:Array.isArray(e.localVal)?e._i(e.localVal,e.oKey||e.fKey)>-1:e.localVal},on:{change:function(t){var l=e.localVal,i=t.target,s=!!i.checked;if(Array.isArray(l)){var a=e.oKey||e.fKey,r=e._i(l,a);i.checked?r<0&&(e.localVal=l.concat([a])):r>-1&&(e.localVal=l.slice(0,r).concat(l.slice(r+1)))}else e.localVal=s}}}),t("label",{attrs:{for:e.oKey||e.fKey}},[e._v(e._s(e.label))])]):e._e()},A=[],C={name:"DPill",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String},show:{default:!1},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},default:{default:""}},computed:{localVal:{get(){return this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}},items(){return this.list}}},T=C,N=(0,u.Z)(T,B,A,!1,null,"74c247ac",null),z=N.exports,F=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("v-select",{class:{"text-notice":!e.localVal&&e.required},attrs:{label:e.label,items:e.items,multiple:e.multiple,disabled:e.disabled,required:e.required,rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")],placeholder:"none",dense:""},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}})],1):e._e()},L=[],Z={name:"DSelect",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String,required:!0},show:{default:!1},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useTextValue:{type:String,default:""},default:{}},computed:{localVal:{get(){return this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}},selected(){return this.$store.getters["dp/selected"]},filters(){return this.$store.getters["dp/filters"]},bores(){return this.$store.getters["dp/bores"]},filteredBores(){const{nSize:e}=this.selected,{spec:t,size:l,pClass:i}=this.filters;if(!e)return[];if("BS EN 1092-1:2007"===t)return[{value:"BS",text:"BS"}];if("SEMPRA"===t&&i<=300)return[{value:"SM",text:"SM"}];if("SEVAL"===t)return[{value:"SV",text:"SV"}];if("AWWA"===t)return[{value:i,text:i}];if("API"===t)return[{value:"API",text:"API"}];if("JIS"===t)return[{value:"JIS",text:"JIS"}];const s=l.replace(/(A|B)/,"");return this.bores.filter((e=>e.spec===t&&e.size===s))||[]},items(){const e={value:"User Defined",text:"User Defined"};let t=[];return t=this.filteredBores.length<2?this.filteredBores:Array.isArray(this.selected.nSize)&&this.selected.nSize.length>1?this.filteredBores.map((e=>({value:e.bore,text:`${e.bore}`}))):this.filteredBores.map((e=>({value:e.bore,text:`${e.flangeID.toFixed(3)}" (${(25.4*e.flangeID).toFixed(1)}mm) :: ${e.bore}`,...e}))).sort(((e,t)=>Number(e.flangeID)-Number(t.flangeID))),t.unshift(e),t}}},R=Z,P=(0,u.Z)(R,F,L,!1,null,"4abbef94",null),M=P.exports,E=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("v-select",{class:{"text-notice":!e.localVal&&e.required},attrs:{label:e.label,items:e.items,multiple:e.multiple,disabled:e.disabled,required:e.required,rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")],placeholder:"none",dense:""},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}})],1):e._e()},O=[],J=l(3576),U={name:"DSelect",mixins:[J.Z],emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String,required:!0},show:{default:!1},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useTextValue:{type:String,default:""},default:{}},computed:{localVal:{get(){return this.multiple?Array.isArray(this.value)?this.value:this.value?[this.value]:[]:!this.multiple&&Array.isArray(this.value)?this.value[0]:this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}},specs(){return this.$store.getters["dp/specs"]},selected(){return this.$store.getters["dp/selected"]},filters(){return this.$store.getters["dp/filters"]},filterList(){const{spec:e}=this.filters;return this.specs.filter((t=>t.spec===e))},items(){return this.filterList.map((e=>({value:e.size,text:this.fraction(e.size),sort:parseFloat(e.size.toString().replace("DN",""))}))).sort(((e,t)=>e.sort-t.sort))}}},X=U,W=(0,u.Z)(X,E,O,!1,null,null,null),Y=W.exports,j=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("v-select",{class:{"text-notice":!e.localVal&&e.required},attrs:{label:e.label,items:e.items,multiple:e.multiple,disabled:e.disabled,required:e.required,rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")],placeholder:"none",dense:""},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}})],1):e._e()},G=[],H={name:"DSelect",mixins:[J.Z],emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String,required:!0},show:{default:!1},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},useTextValue:{type:String,default:""},default:{}},computed:{localVal:{get(){return this.multiple?Array.isArray(this.value)?this.value:[this.value]:!this.multiple&&Array.isArray(this.value)?this.value[0]:this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}},specs(){return this.$store.getters["dp/specs"]},selected(){return this.$store.getters["dp/selected"]},filters(){return this.$store.getters["dp/filters"]},filterList(){const{spec:e,size:t}=this.filters;return this.specs.filter((l=>l.spec===e&&l.size===t))},items(){return this.filterList.map((e=>({value:e.pClass,text:e.pClass,sort:parseFloat(e.pClass.toString().replace(/[T|PN]/,""))}))).sort(((e,t)=>e.sort-t.sort))}}},Q=H,ee=(0,u.Z)(Q,j,G,!1,null,null,null),te=ee.exports,le={name:"gaInput",components:{DSelect:c,DRadio:p.Z,DText:v,DTextarea:$,DCheckbox:k,DPill:z,DFBore:M,DFSize:Y,DFClass:te},props:{gaInput:{type:Object}},destroyed(){const{oKey:e,xxKey:t,fKey:l,default:i}=this.gaInput;this.$store.dispatch("dp/rmvKey",{oKey:e,fKey:l,xxKey:t,default:i})},mounted(){const{oKey:e,xxKey:t,fKey:l,default:i}=this.gaInput;this.$store.dispatch("dp/addKey",{oKey:e,fKey:l,xxKey:t,default:i})},watch:{itemLen:{handler:"validateList",immediate:!0}},computed:{shouldValidate(){return!0},hasError(){return!0},comp(){return"bore"===this.gaInput.type?"DFBore":"nSize"===this.gaInput.type?"DFSize":"pClass"===this.gaInput.type?"DFClass":"checkbox"===this.gaInput.type?"DCheckbox":"textarea"===this.gaInput.type?"DTextarea":"select"===this.gaInput.type&&this.itemLen<3?"DRadio":"select"===this.gaInput.type?"DSelect":"switch"===this.gaInput.type?"DPill":"radio"===this.gaInput.type?"DRadio":"DText"},selected(){return this.$store.getters["dp/selected"]},disable(){return this.$store.getters["dp/disable"]},visible(){return this.$store.getters["dp/visible"]},filters(){return this.$store.getters["dp/filters"]},showADV(){return this.filters.showADV},specs(){return this.$store.getters["dp/specs"]},bores(){return this.$store.getters["dp/bores"]},xxKey(){return this.gaInput.xxKey||!1},conditionCheck(){if(!this.gaInput.conditions)return!0;for(const{oKey:e,fKey:t,xxKey:l,val:i,$in:s}of this.gaInput.conditions){const a=this.selected[e]||this.filters[t]||this.selected.xx[l];if(!1!==i){if(!a)return!1;if(s){if(-1===s.indexOf(a))return!1}else if(i){if(i!==a)return!1}else;}else if(a)return!1}return!0},xxToggle(){return{value:"undefined"!==typeof this.selected.xx[this.xxKey],oKey:this.gaInput.xxKey,label:`:: ${this.gaInput.label}`,hidden:this.filters.editLen>1,show:void 0!==this.selected.xx[this.xxKey]||this.showADV&&this.conditionCheck,xxKey:this.gaInput.xxKey,xx:!0}},show(){return(!this.xxKey||"undefined"!==typeof this.selected.xx[this.xxKey])&&this.conditionCheck},items(){const{filterKeys:e,list:t=[]}=this.gaInput;return e?t.filter((t=>{if(t.hidden)return!1;for(const{fKey:l,$lt:i,$gt:s,$in:a,fReq:r,lReq:o,oKey:n,oVal:u}of e){const e=this.filters[n]||this.selected[n],d=this.filters[l],c=o&&!t[l]?"":t[l];if((!n||e===u)&&(d!==c&&(d||!r)&&(c||"ANY"!==d))){if(!c&&o)return!1;if(c!==d){if(s){if(d>c)return!1;continue}if(i){if(c<d)return!1;continue}if(a){if(-1===c.indexOf(d))return!1;continue}return!1}}}return!0})):t.filter((e=>!e.hidden))},itemLen(){return this.items.length},multiple(){if(!this.gaInput.multipleIf)return!1;for(const{fKey:e,oKey:t,xxKey:l,value:i,$in:s}of this.gaInput.multipleIf){const a=this.filters[e]||this.filters[t]||this.selected.xx[l];if(!a)return!1;if(s){if(-1===s.indexOf(a))return!1}else if(i){if(i!==a)return!1}else;}return!0},option(){const{oKey:e,xxKey:t,fKey:l,disabled:i}=this.gaInput,s=this.selected.xx[t]||this.selected[e]||this.filters[l];return{...this.gaInput,value:this.show?s:"",oKey:e||t,fKey:l,show:this.show,items:this.items,disabled:i||this.disable[e]||this.disable[l]||this.filters.editLen>1&&void 0!==t,multiple:this.multiple}}},methods:{updateKey({oKey:e,val:t}){const{oKey:l,xxKey:i,fKey:s,fVal:a,list:r,overwrite:o}=this.gaInput,n=r?r.find((e=>e.value===t)):null,u=n?n.overwrite:o,d=n?n.fVal:a;this.$store.dispatch("dp/setSelectKey",{val:t,oKey:e||l,xxKey:i,fVal:d,fKey:s,overwrite:u})},toggleXX({oKey:e,val:t}){const{oKey:l,xxKey:i,fKey:s,default:a}=this.gaInput;this.$store.dispatch("dp/setSelectKey",{oKey:e||l,toggle:t,xxKey:i,fKey:s,default:a})},validateList(){const{oKey:e,list:t}=this.gaInput;if(!t)return;const l=this.selected[e];if(e&&"nSize"!==e&&"pClass"!==e&&"dims"!==e)if(1===this.itemLen){const t=this.items[0],i=t.value||t;("dims"===e||l!==i)&&this.$store.dispatch("dp/setSelectKey",{oKey:e,val:i})}else 0===this.itemLen&&""!==l?this.$store.dispatch("dp/setSelectKey",{oKey:e,val:""}):this.items.find((e=>e.value===l))||this.$store.dispatch("dp/setSelectKey",{oKey:e,val:""})}}},ie=le,se=(0,u.Z)(ie,i,s,!1,null,null,null),ae=se.exports},5528:function(e,t,l){l.d(t,{Z:function(){return u}});var i=function(){var e=this,t=e._self._c;return e.show&&!e.hidden?t("div",[t("div",{staticClass:"radio-title"},[e._v(e._s(e.label)+" "),e.required?t("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e()]),t("div",{staticClass:"radio-list"},[t("v-text-field",{staticStyle:{display:"none"},attrs:{rules:[!!e.required&&(e=>!!e||"Can not be blank to continue!")]},model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}}),e._l(e.items,(function(l){return t("div",{key:`r-${e.refKey}-${e.val(l)}`},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.localVal,expression:"localVal"}],attrs:{type:"radio",name:e.refKey,id:`${e.refKey}-${e.val(l)}`,disabled:e.disabled,required:e.required},domProps:{value:e.val(l),checked:e._q(e.localVal,e.val(l))},on:{change:function(t){e.localVal=e.val(l)}}}),t("label",{attrs:{for:`${e.refKey}-${e.val(l)}`}},[e._v(e._s(l.text||l))])])}))],2)]):e._e()},s=[],a={name:"DRadio",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String},show:{default:!0},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},default:{default:""},items:{default(){return[]}}},computed:{refKey(){return this.oKey||this.fKey},localVal:{get(){return this.value},set(e){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:e})}}},methods:{val(e){return void 0===e.value?e:e.value}}},r=a,o=l(1001),n=(0,o.Z)(r,i,s,!1,null,"a5f13338",null),u=n.exports},3576:function(e,t){const l=(e,t)=>t?l(t,e%t):Math.abs(e);t["Z"]={methods:{handleStringID:(e,t,l="0")=>{if(!e)return"";if("Inventory"===e)return"Inventory";let i=e.length;const s=10;let a=0,r="",o=0,n=!1,u="",d="";while(!n&&i>0)isNaN(parseInt(e.charAt(o),10))?o++:n=!0,i--;if(o>0&&(u=e.slice(0,parseInt(o,10)).replace(/0/g,"")),d=e.slice(o).replace(/^(0+)/g,""),t){a=s-o-d.length;for(let e=0;e<a;e++)r+=l}return u.toUpperCase()+r+d},qtyIncrement:({product:e,boltSize:t,sleeveM:l})=>"isoTube"===e?"MM"===l?3:isNaN(t)?3.28:6:1,numberFormat:(e,t)=>e?isNaN(e)?e:parseFloat(e).toFixed(t).replace(/\B(?=(\d{3})+(?!\d))/g,","):e,fraction(e,t=!0){if(-1!==toString(e).indexOf("M"))return e;const i=e.toString().split(".");let s=0;const a=16;let r=!1,o=!1;const n=t?'"':"";if(i[0]>0&&(r=i[0]),i[1]&&i[1]>=0&&!isNaN(i[1])){const e=parseFloat(`0.${i[1]}`),t=parseInt(1e4*e,10),n=1e4/a,u=t%n;o=u>200?(t-t%n)/n+1:(t-t%n)/n,s=l(o,a),o===a&&(r++,o=!1)}return r&&o?`${r}-${o/s}/${a/s}${n}`:r&&!o?r+n:s>0?`${o/s}/${a/s}${n}`:e},greaterThan(e,t){return e>0&&t>0&&e>t},formatDate(e){const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},dt(e){const t=new Date(e),l=t.getFullYear();let i=t.getMonth()+1;i<10&&(i=`0${i}`);let s=t.getDate();s<10&&(s=`0${s}`);let a=t.getMinutes();a<10&&(a=`0${a}`);let r=t.getHours();return r<10&&(r=`0${r}`),{date:`${l}-${i}-${s}`,time:`${r}:${a}`}},copyByID(e){const t=document.getElementById(e);this.selectElementText(t);const l=this.copySelectionText();l&&this.$store.dispatch("alert/success",{message:"copied ready to paste",title:e})},copyTD(e){const t=e.target||e.srcElement;this.selectElementText(t);const l=this.copySelectionText();l&&(t.style.color="green",this.$store.dispatch("alert/success",{message:"copied ready to paste",title:t.innerText}))},selectElementText(e){const t=document.createRange();t.selectNodeContents(e);const l=window.getSelection();l.removeAllRanges(),l.addRange(t)},copySelectionText(){try{return document.execCommand("copy")}catch(e){return!1}},trqData(e){const t=e.trq;if(!t){if(!e.d)return!1;if(!e.d.brand)return!1;if(e.d.brand.minGasketStress)return{error:{type:"Code Update",exp:"Torque Calculation was moved to the server to enable customization of k-factor and bolt type ... to get torque to show: select all, then edit items, then click green check mark ... note price may update to newest value ... to customize k-factor or bolt type click Show Customization Options in item edit"}}}if(t&&t.error)return!1;if(!t.values)return!1;const{values:l,results:i,torqueDisclaimer:s}=t;let a="Raised Face";i[a]||(a="Ring Type Joint"),i[a]||(a="Seal Area"),"API"===e.q.spec?(a="Ring Type Joint",i[a]||(a="Kamm")):(i.Kamm&&(a="Kamm"),i[a]&&i[a].min||(a="Full Face"));const r=i[a];return!!r&&{trqR:r,trqV:l,trqC:a,torqueDisclaimer:s}}}}}}]);
//# sourceMappingURL=235.8dbf6516.js.map
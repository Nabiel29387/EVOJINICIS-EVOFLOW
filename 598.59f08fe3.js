"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[598],{5528:function(t,e,s){s.d(e,{Z:function(){return u}});var o=function(){var t=this,e=t._self._c;return t.show&&!t.hidden?e("div",[e("div",{staticClass:"radio-title"},[t._v(t._s(t.label)+" "),t.required?e("span",{staticStyle:{color:"red"}},[t._v("*")]):t._e()]),e("div",{staticClass:"radio-list"},[e("v-text-field",{staticStyle:{display:"none"},attrs:{rules:[!!t.required&&(t=>!!t||"Can not be blank to continue!")]},model:{value:t.localVal,callback:function(e){t.localVal=e},expression:"localVal"}}),t._l(t.items,(function(s){return e("div",{key:`r-${t.refKey}-${t.val(s)}`},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localVal,expression:"localVal"}],attrs:{type:"radio",name:t.refKey,id:`${t.refKey}-${t.val(s)}`,disabled:t.disabled,required:t.required},domProps:{value:t.val(s),checked:t._q(t.localVal,t.val(s))},on:{change:function(e){t.localVal=t.val(s)}}}),e("label",{attrs:{for:`${t.refKey}-${t.val(s)}`}},[t._v(t._s(s.text||s))])])}))],2)]):t._e()},i=[],r={name:"DRadio",emits:["updateKey"],props:{value:{},oKey:{type:String},fKey:{type:String},label:{type:String},show:{default:!0},hidden:{default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},default:{default:""},items:{default(){return[]}}},computed:{refKey(){return this.oKey||this.fKey},localVal:{get(){return this.value},set(t){this.$emit("updateKey",{oKey:this.oKey,fKey:this.fKey,val:t})}}},methods:{val(t){return void 0===t.value?t:t.value}}},n=r,a=s(1001),l=(0,a.Z)(n,o,i,!1,null,"a5f13338",null),u=l.exports},2128:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var o=function(){var t=this,e=t._self._c;return t.quotesError?e("APgShade",{attrs:{error:t.quotesError}}):e("div",{attrs:{id:"vq"}},[t.quoteModel?e("PrintBook",{attrs:{show:t.viewBook,quote:t.quoteModel,settings:t.bookSettings},on:{toggleValue:t.toggleValue}}):t._e(),t.quoteModel&&t.quoteModel.status?e("div",{staticClass:"vq-status-popup",class:{hide:!t.statusUpdate},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.statusUpdate=!1}}},[e("QStatusActions",{staticClass:"vq-status-content",attrs:{header:!0,quote:t.quoteModel,"current-status":t.quoteModel.status},on:{closeStatusUpdate:function(e){t.statusUpdate=!1}}})],1):t._e(),e("div",{staticClass:"vq-options"},[e("contextNav",{attrs:{buttons:t.buttons},on:{pushToggle:t.toggleValue}})],1),e("div",{staticClass:"vq-lists"},[e("QuoteList",{attrs:{load:"expired",selectedUser:t.selectedUser,title:"EXPIRED","sub-title":"30 days since last customer contact","empty-msg":"No Quotes have Expired"},on:{quoteAction:t.quoteAction}}),e("QuoteList",{attrs:{load:"new",selectedUser:t.selectedUser,title:"NEW","sub-title":"to be sent to Customer","empty-msg":"You have no New Quotes"},on:{quoteAction:t.quoteAction}}),e("QuoteList",{attrs:{load:"pending",selectedUser:t.selectedUser,title:"PENDING","sub-title":"waiting for Response/PO","empty-msg":"There are no Pending Quotes"},on:{quoteAction:t.quoteAction}}),e("QuoteList",{attrs:{load:"inProcess",selectedUser:t.selectedUser,title:"IN PROCESS","sub-title":"to be entered to Syteline","empty-msg":"No Quotes with a PO"},on:{quoteAction:t.quoteAction}}),e("QuoteList",{attrs:{load:"inProduction",selectedUser:t.selectedUser,title:"IN PRODUCTION","sub-title":"to be shipped","empty-msg":"No Quotes/Orders in Production"},on:{quoteAction:t.quoteAction}}),e("QuoteList",{attrs:{load:"shipped",selectedUser:t.selectedUser,title:"SHIPPED","sub-title":"most recently shipped","empty-msg":"No Quotes/Orders have Shipped"},on:{quoteAction:t.quoteAction}}),t.roleINV?e("QuoteList",{attrs:{load:"verifyMat",title:"VERIFY MATERIAL","sub-title":"material needs to be verified","empty-msg":"no quotes need bom"},on:{quoteAction:t.quoteAction}}):t._e()],1)],1)},i=[],r=s(3576),n=s(1037),a=s(629),l=function(){var t=this,e=t._self._c;return e("v-slide-y-transition",{attrs:{mode:"out-in"}},[e("div",{staticClass:"q-list"},[e("div",{staticClass:"q-list-title"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"q-list-subTitle"},[t._v(" "+t._s(t.subTitle)+" ")]),t.quotes&&0!==t.quotes.length?t._l(t.quotes,(function(s){return e("QCard",{key:s._id,attrs:{quote:s},on:{quoteAction:t.quoteAction}})})):e("v-alert",{attrs:{value:!0,color:"info",icon:"info",outline:""}},[t._v(" "+t._s(t.emptyMsgLn1)),e("br"),t._v(" "+t._s(t.emptyMsgLn2)+" ")]),e("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loadingMore,expression:"loadingMore"}],attrs:{color:"primary",indeterminate:!0}}),t.showLoadMoreBtn?e("v-btn",{attrs:{flat:"",small:""},on:{click:t.loadMore}},[t._v(" load more ")]):t._e()],2)])},u=[],d=s(995),c={name:"QList",components:{QCard:d.Z},props:{load:{type:String,default:""},title:{type:String,default:"Quote List"},subTitle:{type:String,default:"Status"},emptyMsg:{type:String,default:"no quotes in the list"},loading:{type:Boolean,default:!1},selectedUser:{type:String,default:""}},data(){return{pagination:{sortBy:"createdAt",descending:!0},limit:5}},created(){this.loadQuotes()},computed:{...(0,a.rn)("quotes",["status"]),...(0,a.Se)("quotes",["quotesExpired","quotesNew","quotesPending","quotesInProcess","quotesInProduction","quotesShipped","needVerifyBOM","needVerifyMaterial"]),emptyMsgArr(){return this.emptyMsg.split("<br>")},emptyMsgLn1(){return this.emptyMsgArr[0]},emptyMsgLn2(){return this.emptyMsgArr[1]},showLoadMoreBtn(){if("verifyBom"===this.load)return!1;if("verifyMat"===this.load)return!1;if(this.loadingMore)return!1;if(!this.load)return!1;const t=this.quotes.length;return!(t<5)&&!(t<this.limit)},loadingMore(){return!!this.status[`loading_${this.load}`]},quotes(){return"expired"===this.load?this.quotesExpired(this.limit):"new"===this.load?this.quotesNew(this.limit):"pending"===this.load?this.quotesPending(this.limit):"inProcess"===this.load?this.quotesInProcess(this.limit):"inProduction"===this.load?this.quotesInProduction(this.limit):"shipped"===this.load?this.quotesShipped(this.limit):"verifyBom"===this.load?this.needVerifyBOM(this.limit):"verifyMat"===this.load?this.needVerifyMaterial(this.limit):[]},listSize(){return this.quotes.length}},methods:{...(0,a.nv)("quotes",["loadMoreQuotes"]),quoteAction(t,e){this.$emit("quoteAction",t,e)},loadQuotes(){this.selectedUser&&this.loadMoreQuotes({user_id:this.selectedUser,load:this.load})},loadMore(){this.selectedUser&&(this.limit+=10,this.loadMoreQuotes({user_id:this.selectedUser,load:this.load,skip:this.quotes.length,limit:10}))}}},h=c,p=s(1001),m=(0,p.Z)(h,l,u,!1,null,null,null),g=m.exports,q=s(862),v={name:"ListQuotes",components:{QuoteList:g,PrintBook:n.Z,QStatusActions:q.Z},mixins:[r.Z],props:{user_id:{type:String}},data(){return{viewBook:!1,statusUpdate:!1,bookSettings:{include:["drawings"]},selectedUser:""}},watch:{user_id:{handler:"setUserQuotes",immediate:!0}},created(){document.title="GA - quote list"},computed:{auth_id(){return this.$store.getters["account/auth_id"]},roleINV(){return this.$store.getters["account/roleINV"]},roleUsers(){return this.$store.getters["account/roleUsers"]},status(){return this.$store.getters["users/status"]},curUser_id(){return this.$store.getters["users/curUser_id"]},...(0,a.rn)("quotes",["loadingQuotes","status","quotesError","quotes"]),...(0,a.rn)("quote",{quoteModel:"quote"}),usersList(){return[]},...(0,a.Se)("quotes",["quotesExpired","quotesNew","quotesPending","quotesInProcess","quotesInProduction","quotesShipped","needVerifyBOM","needVerifyMaterial"]),buttons(){const t=[];return 0===t.length&&(this.selectedUser===this.auth_id&&t.push({text:"New Quote",icon:"library_add",to:{name:"estimator"}}),this.roleUsers&&t.push({text:"Back to List of Users",icon:"arrow_back",color:"gray",small:!0,to:{name:"users"}})),t}},methods:{...(0,a.nv)("account",["logout"]),setUserQuotes(){this.user_id?this.selectedUser=this.user_id:this.selectedUser=this.auth_id,this.getUsersQuotes(this.selectedUser)},quoteAction(t,e){this.getQuote(e),this.toggleValue(t)},toggleValue(t){"viewDrawings"===t?(this.bookSettings.include=["drawings"],this.viewBook=!this.viewBook):"viewQuote"===t?(this.bookSettings.include=["quote"],this.viewBook=!this.viewBook):"copyPaste"===t?(this.bookSettings.include=["copyPaste"],this.viewBook=!this.viewBook):"BOM"===t?(this.bookSettings.include=["BOM"],this.viewBook=!this.viewBook):"verifyMaterial"===t?(this.bookSettings.include=["verifyMaterial"],this.viewBook=!this.viewBook):void 0!==this[t]&&(this[t]=!this[t])},...(0,a.nv)("quotes",["getUsersQuotes"]),...(0,a.nv)("quote",["getQuote"])}},y=v,f=(0,p.Z)(y,o,i,!1,null,null,null),b=f.exports},3576:function(t,e){const s=(t,e)=>e?s(e,t%e):Math.abs(t);e["Z"]={methods:{handleStringID:(t,e,s="0")=>{if(!t)return"";if("Inventory"===t)return"Inventory";let o=t.length;const i=10;let r=0,n="",a=0,l=!1,u="",d="";while(!l&&o>0)isNaN(parseInt(t.charAt(a),10))?a++:l=!0,o--;if(a>0&&(u=t.slice(0,parseInt(a,10)).replace(/0/g,"")),d=t.slice(a).replace(/^(0+)/g,""),e){r=i-a-d.length;for(let t=0;t<r;t++)n+=s}return u.toUpperCase()+n+d},qtyIncrement:({product:t,boltSize:e,sleeveM:s})=>"isoTube"===t?"MM"===s?3:isNaN(e)?3.28:6:1,numberFormat:(t,e)=>t?isNaN(t)?t:parseFloat(t).toFixed(e).replace(/\B(?=(\d{3})+(?!\d))/g,","):t,fraction(t,e=!0){if(-1!==toString(t).indexOf("M"))return t;const o=t.toString().split(".");let i=0;const r=16;let n=!1,a=!1;const l=e?'"':"";if(o[0]>0&&(n=o[0]),o[1]&&o[1]>=0&&!isNaN(o[1])){const t=parseFloat(`0.${o[1]}`),e=parseInt(1e4*t,10),l=1e4/r,u=e%l;a=u>200?(e-e%l)/l+1:(e-e%l)/l,i=s(a,r),a===r&&(n++,a=!1)}return n&&a?`${n}-${a/i}/${r/i}${l}`:n&&!a?n+l:i>0?`${a/i}/${r/i}${l}`:t},greaterThan(t,e){return t>0&&e>0&&t>e},formatDate(t){const e=new Date(t);return`${e.toLocaleDateString()} ${e.toLocaleTimeString()}`},dt(t){const e=new Date(t),s=e.getFullYear();let o=e.getMonth()+1;o<10&&(o=`0${o}`);let i=e.getDate();i<10&&(i=`0${i}`);let r=e.getMinutes();r<10&&(r=`0${r}`);let n=e.getHours();return n<10&&(n=`0${n}`),{date:`${s}-${o}-${i}`,time:`${n}:${r}`}},copyByID(t){const e=document.getElementById(t);this.selectElementText(e);const s=this.copySelectionText();s&&this.$store.dispatch("alert/success",{message:"copied ready to paste",title:t})},copyTD(t){const e=t.target||t.srcElement;this.selectElementText(e);const s=this.copySelectionText();s&&(e.style.color="green",this.$store.dispatch("alert/success",{message:"copied ready to paste",title:e.innerText}))},selectElementText(t){const e=document.createRange();e.selectNodeContents(t);const s=window.getSelection();s.removeAllRanges(),s.addRange(e)},copySelectionText(){try{return document.execCommand("copy")}catch(t){return!1}},trqData(t){const e=t.trq;if(!e){if(!t.d)return!1;if(!t.d.brand)return!1;if(t.d.brand.minGasketStress)return{error:{type:"Code Update",exp:"Torque Calculation was moved to the server to enable customization of k-factor and bolt type ... to get torque to show: select all, then edit items, then click green check mark ... note price may update to newest value ... to customize k-factor or bolt type click Show Customization Options in item edit"}}}if(e&&e.error)return!1;if(!e.values)return!1;const{values:s,results:o,torqueDisclaimer:i}=e;let r="Raised Face";o[r]||(r="Ring Type Joint"),o[r]||(r="Seal Area"),"API"===t.q.spec?(r="Ring Type Joint",o[r]||(r="Kamm")):(o.Kamm&&(r="Kamm"),o[r]&&o[r].min||(r="Full Face"));const n=o[r];return!!n&&{trqR:n,trqV:s,trqC:r,torqueDisclaimer:i}}}}}}]);
//# sourceMappingURL=598.59f08fe3.js.map
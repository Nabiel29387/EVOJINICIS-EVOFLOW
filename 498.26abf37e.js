"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[498],{7498:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("v-slide-y-transition",{attrs:{mode:"out-in"}},[e("div",{staticClass:"div-center"},[null===t.status||t.status.loggedOut?e("v-form",{on:{submit:function(e){return e.preventDefault(),t.login({username:t.username,password:t.password})}}},[e("v-text-field",{attrs:{rules:t.notEmptyRules,label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("v-text-field",{attrs:{rules:t.notEmptyRules,label:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("v-btn",{attrs:{type:"submit",disabled:!t.valid}},[t._v(" Login ")])],1):t._e(),t.status.loginPending?e("ga-spinner"):t._e(),t.status.loginPending?e("div",[e("h3",[t._v("working...")])]):t._e(),t.status.loggedIn?e("v-btn",{attrs:{type:"submit"},on:{click:t.logout}},[t._v(" Log out ")]):t._e()],1)])},a=[],r={name:"GaLogin",data:()=>({username:"",password:"",notEmptyRules:[t=>""!==t||"Cannot be empty."]}),created(){document.title="GA - login",this.status.loggedIn&&this.$router.push("/estimator")},computed:{status(){return this.$store.getters["account/status"]||{}},valid(){return this.username&&this.password}},methods:{login(t){return this.$store.dispatch("account/login",t)},logout(){return this.$store.dispatch("account/logout")}}},u=r,o=s(1001),i=(0,o.Z)(u,n,a,!1,null,"3877a6d0",null),l=i.exports}}]);
//# sourceMappingURL=498.26abf37e.js.map
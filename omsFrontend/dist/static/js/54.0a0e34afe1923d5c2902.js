webpackJsonp([54],{uxAV:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("8TIX"),o=t("vMJZ"),u={components:{sesectHosts:s.default},data:function(){return{ruleForm:{usergroups:"",hosts:[]},rules:{usergroups:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},groups:[]}},created:function(){this.getGroups()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$emit("formdata",r.ruleForm),r.ruleForm={usergroups:"",hosts:""}})},resetForm:function(e){this.$refs[e].resetFields()},getHosts:function(e){this.ruleForm.hosts=e},getGroups:function(){var e=this;Object(o.d)().then(function(r){e.groups=r.data})}}},l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户组",prop:"usergroups"}},[t("el-select",{attrs:{placeholder:"请选择用户组"},model:{value:e.ruleForm.usergroups,callback:function(r){e.$set(e.ruleForm,"usergroups",r)},expression:"ruleForm.usergroups"}},e._l(e.groups,function(e){return t("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[t("sesect-hosts",{attrs:{selecthost:e.ruleForm.hosts},on:{gethosts:e.getHosts}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},n=[],i={render:l,staticRenderFns:n},a=i,m=t("VU/8"),c=m(u,a,!1,null,null,null);r.default=c.exports}});
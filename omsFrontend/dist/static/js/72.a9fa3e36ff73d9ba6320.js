webpackJsonp([72],{"3YSA":function(e,t,a){var r=a("pztO");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("3d92983c",r,!0)},pztO:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},vnal:function(e,t,a){"use strict";function r(e){a("3YSA")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("jtw6"),o=a("QmSG"),s={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:o.pagesize,pageformat:o.pageformat,listQuery:{limit:o.LIMIT,offset:"",search:""},ruleForm:{name:"",key:"",secret:"",type:"",desc:""},addForm:!1,editForm:!1,rowdata:{},Dns_Types:["dnspod","godaddy"]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(l.b)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},addGroupSubmit:function(){var e=this;Object(l.g)(this.ruleForm).then(function(){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroup:function(e){this.rowdata=e,this.editForm=!0},editGroupSubmit:function(){var e=this;Object(l.j)(this.rowdata.id,this.rowdata).then(function(){e.$message({message:"恭喜你，修改成功",type:"success"}),e.fetchData(),e.editForm=!1}).catch(function(t){e.$message.error("修改失败"),console.log(t)})},deleteGroup:function(e){var t=this;Object(l.a)(e).then(function(e){t.$message({message:"恭喜你，删除成功",type:"success"}),t.fetchData()}).catch(function(e){t.$message.error("删除失败"),console.log(e)})},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*o.LIMIT,this.fetchData()}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addForm=!0}}},[e._v("新建")])],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"key",label:"key"}}),e._v(" "),a("el-table-column",{attrs:{prop:"secret",label:"secret"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){e.editGroup(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteGroup(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key",prop:"key"}},[a("el-input",{model:{value:e.ruleForm.key,callback:function(t){e.$set(e.ruleForm,"key",t)},expression:"ruleForm.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"secret",prop:"secret"}},[a("el-input",{model:{value:e.ruleForm.secret,callback:function(t){e.$set(e.ruleForm,"secret",t)},expression:"ruleForm.secret"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.Dns_Types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})})),e._v(" "),a("el-input",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addGroupSubmit("ruleForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("el-form",{ref:"rowdata",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.rowdata.name,callback:function(t){e.$set(e.rowdata,"name",t)},expression:"rowdata.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key",prop:"key"}},[a("el-input",{model:{value:e.rowdata.key,callback:function(t){e.$set(e.rowdata,"key",t)},expression:"rowdata.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"secret",prop:"secret"}},[a("el-input",{model:{value:e.rowdata.secret,callback:function(t){e.$set(e.rowdata,"secret",t)},expression:"rowdata.secret"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.rowdata.type,callback:function(t){e.$set(e.rowdata,"type",t)},expression:"rowdata.type"}},e._l(e.Dns_Types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{model:{value:e.rowdata.desc,callback:function(t){e.$set(e.rowdata,"desc",t)},expression:"rowdata.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editGroupSubmit("rowdata")}}},[e._v("立即更新")])],1)],1)],1)],1)},i=[],c={render:n,staticRenderFns:i},u=c,p=a("VU/8"),d=r,m=p(s,u,!1,d,null,null);t.default=m.exports}});
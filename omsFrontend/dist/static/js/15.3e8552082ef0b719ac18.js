webpackJsonp([15,27],{Bj4U:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}",""])},"CH+q":function(e,t,r){"use strict";function s(e){r("kZiB")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("Dd8w"),a=r.n(l),i=r("ZTLr"),o=r("QmSG"),n=r("GGwe"),c=r("NYxO"),u={components:{addWorkticket:n.default},data:function(){return{loading:!0,radio:"",tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:o.LIMIT,offset:"",ticket_status:"",pagesize:[10,25,50,100],addForm:!1,rowdata:{ticket_status:0,action_user:sessionStorage.getItem("username")},TICKET_STATUS:{0:{text:"未接收",type:"info"},1:{text:"正在处理",type:"success"},2:{text:"已解决",type:"danger"}},LEVEL:{1:{text:"A",type:"danger"},2:{text:"B",type:"warning"},3:{text:"C",type:"success"},4:{text:"D",type:"info"},5:{text:"E",type:""}},listQuery:{ticketid:"",create_user:"",content:""},workticketlist_btn_add:!1,workticketlist_btn_edit:!1}},computed:a()({},Object(c.b)(["role","elements"])),created:function(){this.fetchData(),this.workticketlist_btn_add=this.elements["workticketlist:btn_add"],this.workticketlist_btn_edit=this.elements["workticketlist:btn_edit"]},methods:{fetchData:function(){var e=this,t={limit:this.limit,offset:this.offset,content__contains:this.listQuery.content,ticket_status:this.ticket_status,ticketid:this.listQuery.ticketid,create_user__username:this.listQuery.create_user};Object(i.f)(null,t).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count,e.loading=!1})},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.limit=e,this.fetchData()},handleCurrentChange:function(e){this.offset=e-1,this.fetchData()},statusChange:function(e){this.ticket_status=e,this.fetchData()}}},d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("div",{staticClass:"head-lavel"},[r("div",{staticClass:"table-button"},[r("router-link",{attrs:{to:"addworkticket"}},["super"===e.role||e.workticketlist_btn_add?r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[e._v("新建工单")]):e._e()],1),e._v(" "),r("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:e.statusChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{label:"0"}},[e._v("未接收")]),e._v(" "),r("el-radio",{attrs:{label:"1"}},[e._v("正在处理")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("已解决")]),e._v(" "),r("el-radio",{attrs:{label:""}},[e._v("全部")])],1)],1),e._v(" "),r("div",{staticClass:"table-search"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"工单发起人"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.create_user,callback:function(t){e.$set(e.listQuery,"create_user",t)},expression:"listQuery.create_user"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单编号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.ticketid,callback:function(t){e.$set(e.listQuery,"ticketid",t)},expression:"listQuery.ticketid"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单内容"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.content,callback:function(t){e.$set(e.listQuery,"content",t)},expression:"listQuery.content"}}),e._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"title",label:"工单编号"},scopedSlots:e._u([{key:"default",fn:function(t){return"super"===e.role||e.workticketlist_btn_edit?[r("div",{staticStyle:{"text-align":"center",color:"rgb(52,91,225)"},attrs:{slot:"reference"},slot:"reference"},[r("router-link",{attrs:{to:"editworkticket/"+t.row.id}},[e._v("\n                                  "+e._s(t.row.ticketid)+"\n                              ")])],1)]:void 0}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),e._v(" "),r("el-table-column",{attrs:{prop:"create_user",label:"工单创建人"}}),e._v(" "),r("el-table-column",{attrs:{prop:"level",label:"工单等级",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:e.LEVEL[t.row.level].type}},[e._v("\n                                  "+e._s(e.LEVEL[t.row.level].text)+"\n                              ")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"ticket_status",label:"工单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:e.TICKET_STATUS[t.row.ticket_status].type}},[e._v("\n                                  "+e._s(e.TICKET_STATUS[t.row.ticket_status].text)+"\n                              ")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"action_user",label:"当前处理人"}})],1)],1),e._v(" "),r("div",{staticClass:"table-footer"},[r("div",{staticClass:"table-pagination"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])])],1)},p=[],f={render:d,staticRenderFns:p},m=f,h=r("VU/8"),_=s,g=h(u,m,!1,_,null,null);t.default=g.exports},GGwe:function(e,t,r){"use strict";function s(e){r("JsEt")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("BO1k"),a=r.n(l),i=r("mvHQ"),o=r.n(i),n=r("ZTLr"),c=r("EMXe"),u=r("nSkA"),d=r("vMJZ"),p=r("QmSG"),f={components:{ElButton:c.a},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{title:"",type:"",content:"",create_user:sessionStorage.getItem("username"),level:2,action_user:"",follower:"",create_group:""},rules:{title:[{required:!0,message:"请输入工单标题",trigger:"blur"}],action_user:[{required:!0,message:"请选择指派者",trigger:"change"}],follower:[{required:!0,type:"array",message:"请选择工单跟踪者",trigger:"change"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:null,enclosureForm:{ticket:"",create_user:sessionStorage.getItem("username"),file:"",create_group:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},img_file:{},formDataList:[],ws_stream:"/salt/sendmail/",ws:"",to_list:[],cc_list:[]}},created:function(){this.getTicketUsers(),this.wsInit(),this.getEmail("aaa")},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(n.k)(t.ruleForm).then(function(e){"ok"===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"}),t.enclosureFile&&(t.enclosureForm.file=t.enclosureFile,t.enclosureForm.ticket=e.data.id,Object(n.i)(t.enclosureForm)),t.getEmail(t.ruleForm.action_user,t.ruleForm.follower);var r={to_list:t.to_list,cc_list:t.cc_list,sub:t.ruleForm.title,context:t.ruleForm.content};console.log(r),t.ws.send(o()(r)),t.$router.push("/worktickets/workticket")})})},resetForm:function(e){this.$refs[e].resetFields()},getTicketUsers:function(){var e=this;Object(d.f)().then(function(t){e.users=t.data.results})},handleSuccess:function(e,t){var r=this,s=this.afterFileUpload(t);Object(u.c)(s).then(function(e){r.enclosureFile=e.data.filepath,"ok"===e.statusText&&(r.count+=1,r.$message({type:"success",message:"恭喜你，上传成功"}))}).catch(function(e){r.$message.error("上传失败"),r.$refs.upload.clearFiles(),console.log(e)})},imgAdd:function(e,t){var r=this.$refs.md,s=new FormData;s.append("username",this.enclosureForm.create_user),s.append("file",t),s.append("create_time",this.afterFileUpload(t)),s.append("type",t.type),s.append("archive",this.route_path[1]),Object(u.c)(s).then(function(t){r.$imglst2Url([[e,t.data.file]])})},afterFileUpload:function(e){var t=new Date(e.lastModified);return t.getFullYear().toString()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+t.getDate()+t.getHours()+t.getMinutes()+t.getSeconds()},getEmail:function(e,t){var r=this,s={username:e};Object(d.f)(s).then(function(e){var t=e.data.results[0];r.to_list.push(t.email)});var l=!0,i=!1,o=void 0;try{for(var n,c=a()(t);!(l=(n=c.next()).done);l=!0){var u=n.value,p={username:u};Object(d.f)(p).then(function(e){var t=e.data.results[0];r.cc_list.push(t.email)})}}catch(e){i=!0,o=e}finally{try{!l&&c.return&&c.return()}finally{if(i)throw o}}},wsInit:function(){var e=this,t=this;t.ws=new WebSocket(p.ws_url+t.ws_stream),t.ws.readyState===WebSocket.OPEN&&t.ws.onopen(),t.ws.onmessage=function(t){e.$message({type:t.code,message:t.msg})}}}},m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{placeholder:"请选择指派人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"跟踪者",prop:"follower"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择跟踪者"},model:{value:e.ruleForm.follower,callback:function(t){e.$set(e.ruleForm,"follower",t)},expression:"ruleForm.follower"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{default_open:"edit",code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("div",[r("hr",{staticClass:"heng"}),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-success":e.handleSuccess,"file-list":e.fileList,disabled:e.count>0}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>0},slot:"trigger"},[e._v("\n              上传文件\n            ")]),e._v("\n            (可以不用上传)\n            "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过500kb，"),r("a",{staticStyle:{color:"red"}},[e._v("添加工单页面只能上传1个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},h=[],_={render:m,staticRenderFns:h},g=_,v=r("VU/8"),b=s,k=v(f,g,!1,b,null,null);t.default=k.exports},JcDe:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".heng{margin:20px 0;height:1px;border:0;background-color:rgba(174,127,255,.38);color:#29e11c}.addticket{margin:50px;width:80%}",""])},JsEt:function(e,t,r){var s=r("JcDe");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("aeff6efc",s,!0)},kZiB:function(e,t,r){var s=r("Bj4U");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("1aef4df6",s,!0)}});
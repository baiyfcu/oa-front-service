(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a202ba"],{"129e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"姓名"}},[a("a-input",{attrs:{placeholder:"请输入姓名信息",readonly:""},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"发放期间"}},[a("a-range-picker",{model:{value:e.queryParam.time,callback:function(t){e.$set(e.queryParam,"time",t)},expression:"queryParam.time"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{staticStyle:{"margin-left":"0px",float:"left"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px",float:"left"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("a-col",{attrs:{md:24,sm:24}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:e.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("div",[a("a-table",{attrs:{columns:e.columns,dataSource:e.wageList,pagination:!0,scroll:{x:16e3,y:800}},scopedSlots:e._u([{key:"type",fn:function(t,s){return a("a",{},[a("a-menu-item",[a("a",{attrs:{"data-info":JSON.stringify(s)},on:{click:function(t){return e.handleDetailWG(s)}}},[a("span",{domProps:{innerHTML:e._s(s.name)}})])])],1)}}])})],1)]],2)],1)},n=[],i=(a("7f7f"),a("96cf"),a("3b8d")),r=a("da05"),o=a("290c"),l=a("261e"),d=a("0fea"),c=a("5d2d"),u=a("ca00"),_=a("c1df"),m=[{title:"姓名",width:150,align:"center",key:"name",dataIndex:"name",slots:{title:"name"}},{title:"发放期间",width:200,align:"center",key:"wages_date",dataIndex:"wages_date",slots:{title:"wages_date"}},{title:"入职时间",width:200,align:"center",key:"join_time",dataIndex:"join_time",slots:{title:"join_time"}},{title:"身份证号",width:300,align:"center",key:"id_card",dataIndex:"id_card",slots:{title:"id_card"}},{title:"应出勤天数",width:200,align:"center",key:"work_date",dataIndex:"work_date",slots:{title:"work_date"}},{title:"计薪天数",width:200,align:"center",key:"salary_date",dataIndex:"salary_date",slots:{title:"salary_date"},scopedSlots:{customRender:"salary_date"}},{title:"岗位层级",width:200,align:"center",key:"job_level",dataIndex:"job_level",slots:{title:"job_level"},scopedSlots:{customRender:"job_level"}},{title:"工资类别",width:200,align:"center",key:"salary_type",dataIndex:"salary_type",slots:{title:"salary_type"},scopedSlots:{customRender:"salary_type"}},{title:"岗位工资标准",width:200,align:"center",key:"wage_standard",dataIndex:"wage_standard",slots:{title:"wage_standard"},scopedSlots:{customRender:"wage_standard"}},{title:"基本工资",width:150,align:"center",key:"basic_salary",dataIndex:"basic_salary",slots:{title:"basic_salary"},scopedSlots:{customRender:"basic_salary"}},{title:"绩效工资",width:150,align:"center",key:"perform_salary",dataIndex:"perform_salary",slots:{title:"perform_salary"},scopedSlots:{customRender:"perform_salary"}},{title:"季度/月度绩效工资考核兑现金额",width:500,align:"center",key:"quar_mon_perform_salary",dataIndex:"quar_mon_perform_salary",slots:{title:"quar_mon_perform_salary"},scopedSlots:{customRender:"quar_mon_perform_salary"}},{title:"月实付工资",width:250,align:"center",key:"paid_wages",dataIndex:"paid_wages",slots:{title:"paid_wages"},scopedSlots:{customRender:"paid_wages"}},{title:"应发工资 (财务)",width:250,align:"center",key:"payable_salary",dataIndex:"payable_salary",slots:{title:"payable_salary"},scopedSlots:{customRender:"payable_salary"}},{title:"保密费",width:150,align:"center",key:"secret_salary",dataIndex:"secret_salary",slots:{title:"secret_salary"},scopedSlots:{customRender:"secret_salary"}},{title:"餐费补贴",width:150,align:"center",key:"meal_subsidy",dataIndex:"meal_subsidy",slots:{title:"meal_subsidy"},scopedSlots:{customRender:"meal_subsidy"}},{title:"通讯补贴",width:150,align:"center",key:"commun_subsidy",dataIndex:"commun_subsidy",slots:{title:"commun_subsidy"},scopedSlots:{customRender:"commun_subsidy"}},{title:"交通补贴",width:150,align:"center",key:"transport_subsidy",dataIndex:"transport_subsidy",slots:{title:"transport_subsidy"},scopedSlots:{customRender:"transport_subsidy"}},{title:"节日费",width:150,align:"center",key:"festival_fee",dataIndex:"festival_fee",slots:{title:"festival_fee"},scopedSlots:{customRender:"festival_fee"}},{title:"独生子女补贴",width:250,align:"center",key:"one_child_allowance",dataIndex:"one_child_allowance",slots:{title:"one_child_allowance"},scopedSlots:{customRender:"one_child_allowance"}},{title:"工龄补贴",width:150,align:"center",key:"service_year_allowance",dataIndex:"service_year_allowance",slots:{title:"service_year_allowance"},scopedSlots:{customRender:"service_year_allowance"}},{title:"异地津贴",width:150,align:"center",key:"off_site_allowance",dataIndex:"off_site_allowance",slots:{title:"off_site_allowance"},scopedSlots:{customRender:"off_site_allowance"}},{title:"加班补贴",width:150,align:"center",key:"overtime_allowance",dataIndex:"overtime_allowance",slots:{title:"overtime_allowance"},scopedSlots:{customRender:"overtime_allowance"}},{title:"其他补贴",width:150,align:"center",key:"other_allowance",dataIndex:"other_allowance",slots:{title:"other_allowance"},scopedSlots:{customRender:"other_allowance"}},{title:"岗位津贴",width:150,align:"center",key:"post_allowance",dataIndex:"post_allowance",slots:{title:"post_allowance"},scopedSlots:{customRender:"post_allowance"}},{title:"奖励",width:150,align:"center",key:"reward",dataIndex:"reward",slots:{title:"reward"},scopedSlots:{customRender:"reward"}},{title:"补贴合计",width:150,align:"center",key:"total_subsidy",dataIndex:"total_subsidy",slots:{title:"total_subsidy"},scopedSlots:{customRender:"total_subsidy"}},{title:"补发工资",width:150,align:"center",key:"reissue_wage",dataIndex:"reissue_wage",slots:{title:"reissue_wage"},scopedSlots:{customRender:"reissue_wage"}},{title:"罚款",width:150,align:"center",key:"fines",dataIndex:"fines",slots:{title:"fines"},scopedSlots:{customRender:"fines"}},{title:"考勤扣款",width:150,align:"center",key:"attendance_deduction",dataIndex:"attendance_deduction",slots:{title:"attendance_deduction"},scopedSlots:{customRender:"attendance_deduction"}},{title:"其它扣款",width:150,align:"center",key:"other_deductions",dataIndex:"other_deductions",slots:{title:"other_deductions"},scopedSlots:{customRender:"other_deductions"}},{title:"扣款合计",width:150,align:"center",key:"total_deductions",dataIndex:"total_deductions",slots:{title:"total_deductions"},scopedSlots:{customRender:"total_deductions"}},{title:"养老保险",width:150,align:"center",key:"old_age_insurance",dataIndex:"old_age_insurance",slots:{title:"old_age_insurance"},scopedSlots:{customRender:"old_age_insurance"}},{title:"失业保险",width:150,align:"center",key:"unemploy_insurance",dataIndex:"unemploy_insurance",slots:{title:"unemploy_insurance"},scopedSlots:{customRender:"unemploy_insurance"}},{title:"医疗保险",width:150,align:"center",key:"medicare",dataIndex:"medicare",slots:{title:"medicare"},scopedSlots:{customRender:"medicare"}},{title:"社保合计",width:150,align:"center",key:"total_social_security",dataIndex:"total_social_security",slots:{title:"total_social_security"},scopedSlots:{customRender:"total_social_security"}},{title:"住房公积金",width:200,align:"center",key:"provident_fund",dataIndex:"provident_fund",slots:{title:"provident_fund"},scopedSlots:{customRender:"provident_fund"}},{title:"社保公积金合计",width:250,align:"center",key:"social_security_provident_fund",dataIndex:"social_security_provident_fund",slots:{title:"social_security_provident_fund"},scopedSlots:{customRender:"social_security_provident_fund"}},{title:"提前发放应计税收入",width:300,align:"center",key:"taxable_income_in_advance",dataIndex:"taxable_income_in_advance",slots:{title:"taxable_income_in_advance"},scopedSlots:{customRender:"taxable_income_in_advance"}},{title:"计税工资",width:150,align:"center",key:"taxable_wages",dataIndex:"taxable_wages",slots:{title:"taxable_wages"},scopedSlots:{customRender:"taxable_wages"}},{title:"个税起征点",width:200,align:"center",key:"tax_threshold",dataIndex:"tax_threshold",slots:{title:"tax_threshold"},scopedSlots:{customRender:"tax_threshold"}},{title:"本月个人所得税",width:250,align:"center",key:"tax",dataIndex:"tax",slots:{title:"tax"},scopedSlots:{customRender:"tax"}},{title:"税后服务费",width:200,align:"center",key:"after_tax_charge",dataIndex:"after_tax_charge",slots:{title:"after_tax_charge"},scopedSlots:{customRender:"after_tax_charge"}},{title:"体检费",width:150,align:"center",key:"medicare_fee",dataIndex:"medicare_fee",slots:{title:"medicare_fee"},scopedSlots:{customRender:"medicare_fee"}},{title:"工会经费",width:150,align:"center",key:"union_funds",dataIndex:"union_funds",slots:{title:"union_funds"},scopedSlots:{customRender:"union_funds"}},{title:"税后补扣",width:150,align:"center",key:"after_tax_deduction",dataIndex:"after_tax_deduction",slots:{title:"after_tax_deduction"},scopedSlots:{customRender:"after_tax_deduction"}},{title:"扣款合计",width:150,align:"center",key:"total_tax_deduction",dataIndex:"total_tax_deduction",slots:{title:"total_tax_deduction"},scopedSlots:{customRender:"total_tax_deduction"}},{title:"税后补发",width:150,align:"center",key:"after_tax_reissue",dataIndex:"after_tax_reissue",slots:{title:"after_tax_reissue"},scopedSlots:{customRender:"after_tax_reissue"}},{title:"子女教育累计(专项扣除)",width:350,align:"center",key:"children_education",dataIndex:"children_education",slots:{title:"children_education"},scopedSlots:{customRender:"children_education"}},{title:"继续教育累计(专项扣除)",width:350,align:"center",key:"continuing_education",dataIndex:"continuing_education",slots:{title:"continuing_education"},scopedSlots:{customRender:"continuing_education"}},{title:"住房贷款利息累计(专项扣除)",width:400,align:"center",key:"house_loans",dataIndex:"house_loans",slots:{title:"house_loans"},scopedSlots:{customRender:"house_loans"}},{title:"住房租金累计(专项扣除)",width:350,align:"center",key:"house_rent",dataIndex:"house_rent",slots:{title:"house_rent"},scopedSlots:{customRender:"house_rent"}},{title:"赡养老人累计(专项扣除)",width:350,align:"center",key:"elderly_support",dataIndex:"elderly_support",slots:{title:"elderly_support"},scopedSlots:{customRender:"elderly_support"}},{title:"1月至当月专项扣除累计",width:350,align:"center",key:"total_special_deductions",dataIndex:"total_special_deductions",slots:{title:"total_special_deductions"},scopedSlots:{customRender:"total_special_deductions"}},{title:"1月至当月个税起点累计",width:350,align:"center",key:"total_tax_threshold",dataIndex:"total_tax_threshold",slots:{title:"total_tax_threshold"},scopedSlots:{customRender:"total_tax_threshold"}},{title:"1月至当月计税工资累计",width:350,align:"center",key:"total_taxable_wages",dataIndex:"total_taxable_wages",slots:{title:"total_taxable_wages"},scopedSlots:{customRender:"total_taxable_wages"}},{title:"1月至当月应缴个人所得税累计",width:400,align:"center",key:"total_personal_tax",dataIndex:"total_personal_tax",slots:{title:"total_personal_tax"},scopedSlots:{customRender:"total_personal_tax"}},{title:"1月至上月已缴个人所得税累计",width:400,align:"center",key:"total_paid_tax",dataIndex:"total_paid_tax",slots:{title:"total_paid_tax"},scopedSlots:{customRender:"total_paid_tax"}},{title:"银行卡号",width:300,align:"center",key:"bank_no",dataIndex:"bank_no",slots:{title:"bank_no"},scopedSlots:{customRender:"bank_no"}},{title:"手机号",width:200,align:"center",key:"phone",dataIndex:"phone",slots:{title:"phone"},scopedSlots:{customRender:"phone"}},{title:"备注",width:600,align:"center",key:"comment",dataIndex:"comment",slots:{title:"comment"},scopedSlots:{customRender:"comment"}},{title:"社保说明",width:600,align:"center",key:"social_security_description",dataIndex:"social_security_description",slots:{title:"social_security_description"},scopedSlots:{customRender:"social_security_description"}},{title:"公积金说明",width:600,align:"center",key:"provident_fund_description",dataIndex:"provident_fund_description",slots:{title:"provident_fund_description"},scopedSlots:{customRender:"provident_fund_description"}},{title:"社保备注",width:500,align:"center",key:"social_security_remarks",dataIndex:"social_security_remarks",slots:{title:"social_security_remarks"},scopedSlots:{customRender:"social_security_remarks"}},{title:"公积金备注",width:500,align:"center",key:"provident_fund_remark",dataIndex:"provident_fund_remark",slots:{title:"provident_fund_remark"},scopedSlots:{customRender:"provident_fund_remark"}},{title:"专项扣除备注",width:400,align:"center",key:"special_deductions_remarks",dataIndex:"special_deductions_remarks",slots:{title:"special_deductions_remarks"},scopedSlots:{customRender:"special_deductions_remarks"}},{title:"离职还扣",width:300,align:"center",key:"departure_deduction",dataIndex:"departure_deduction",slots:{title:"departure_deduction"},scopedSlots:{customRender:"departure_deduction"}}],p={name:"WageManage",components:{ATextarea:l["a"],ARow:o["a"],ACol:r["b"]},props:{reBizCode:{type:String,default:""}},data:function(){return{columns:m,previewVisible:!1,previewImage:"",wageList:[],queryParam:{},spinning:!1}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=c["c"]("cur_user"),this.queryParam=c["c"]("system_wage_manage_user@".concat(t.username)),u["k"](this.queryParam.name)&&(this.queryParam.name=t.realname),""!=this.queryParam&&null!=this.queryParam&&"{}"!=JSON.stringify(this.queryParam)){e.next=9;break}return this.queryParam={},e.next=7,this.getDate();case 7:e.next=12;break;case 9:return!u["k"](this.queryParam.time)&&this.queryParam.time.length>0&&(this.queryParam.time[0]=u["i"](this.queryParam.time[0],"yyyy-MM-dd"),this.queryParam.time[1]=u["i"](this.queryParam.time[1],"yyyy-MM-dd"),this.queryParam.time=[_(this.queryParam.time[0],"YYYY-MM-DD"),_(this.queryParam.time[1],"YYYY-MM-DD")]),e.next=12,this.searchQuery();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.searchQuery();case 2:this.wageList=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDetailWF:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,s,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=JSON.parse(JSON.stringify(t)),s=c["c"]("cur_user"),n="知会"==a["type"]?"notify":"workflow",i="/workflow/wageinfo?id=".concat(a.id,"&time=").concat(a.time,"&user=").concat(s.username,"&type=").concat(n),this.$router.push(i);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c["c"]("cur_user"),a=t["username"],this.queryParam.name=t["realname"],e.next=5,d["vb"](a,this.queryParam);case 5:return this.wageList=e.sent,c["d"]("system_wage_manage_user@".concat(t.username),JSON.stringify(this.queryParam),3600),e.abrupt("return",this.wageList);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchReset:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryParam={};case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},y=p,h=(a("4374"),a("2877")),w=Object(h["a"])(y,s,n,!1,null,"03fba50a",null);t["default"]=w.exports},4374:function(e,t,a){"use strict";var s=a("bffe"),n=a.n(s);n.a},bffe:function(e,t,a){}}]);
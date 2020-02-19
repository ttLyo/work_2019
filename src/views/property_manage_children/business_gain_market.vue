<template>
  <div class="animated fadeIn">
    <Row>
      <Col  :lg="6">
		<div>
			<Tree @on-select-change="tree_select" :data="tree" class="tree"></Tree>
		</div>
      </Col>
      <Col :lg="18">
        <Button type="primary" style="margin-left:10px" @click="show_up=true">上传</Button>
        <Button type="info" style="margin-left:10px" @click="show('table')">表格</Button>
        <Button type="info" style="margin-left:10px" @click="show('echart')">图表</Button>
        <Button type="error" style="margin-left:10px" @click="remove">删除</Button>
        <Select v-model="table_index" @on-change="change_time" style="width:200px">
            <Option v-for="item in all_file" :key="item.id" :value="item.index">{{item.date.slice(0,7)}}</Option>
        </Select>
        <Table v-if="show_type=='table'" :columns="columns" :data="table_data_show" height=610 border></Table>
		<chart v-if="show_type=='echart'" ref="echart" :options="option2" class="echarts1"></chart>  
      </Col>
    </Row>
    <Modal fullscreen
      v-model="show_up"
	  @on-ok="upload"
      title="Common Modal dialog box title">
            <input type="file" id="file" @change="file1"/>
            <DatePicker v-model="time" type="month"/>
            <!-- <Button type="info" style="margin-left:10px" @click="upload">确认上传</Button> -->
			<div id="box">
				<h1 style="text-align:center">营业收入明细表-分市场</h1>
				<h6 style="text-align:center">{{file.author}} {{file.time}}</h6>
					<table id="tb_3" cellspacing="0">
						<tr style="display:none"><td colspan="10" t="s" id="sjs-A1"><span contenteditable="true">营业收入明细表-分市场</span></td><td><span contenteditable="true"></span></td></tr>
						<tr style="display:none"><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-J2"><span contenteditable="true">会铁通月0402表</span></td><td><span contenteditable="true"></span></td></tr>
						<tr style="display:none"><td t="s" id="sjs-A3"><span contenteditable="true">{{file.author}}</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-D3"><span contenteditable="true">{{file.time}}</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-J3"><span contenteditable="true">金额单位：元</span></td><td><span contenteditable="true"></span></td></tr>
						<tr><td rowspan="2" t="s" id="sjs-A4"><span contenteditable="true">项&nbsp;&nbsp;&nbsp;&nbsp;目</span></td><td rowspan="2" t="s" id="sjs-B4"><span contenteditable="true">行次</span></td><td colspan="8" t="s" id="sjs-C4"><span contenteditable="true">本年累计数</span></td></tr>
						<tr><td t="s" id="sjs-C5"><span contenteditable="true">家庭客户</span></td><td t="s" id="sjs-D5"><span contenteditable="true">中国移动</span></td><td t="s" id="sjs-E5"><span contenteditable="true">中国电信</span></td><td t="s" id="sjs-F5"><span contenteditable="true">中国联通</span></td><td t="s" id="sjs-G5"><span contenteditable="true">中国铁路总公司</span></td><td t="s" id="sjs-H5"><span contenteditable="true">中国铁塔</span></td><td t="s" id="sjs-I5"><span contenteditable="true">地铁公司</span></td><td t="s" id="sjs-J5"><span contenteditable="true">其他</span></td></tr>
						<tr style="display:none"><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-C6"><span contenteditable="true">辅助核算为【C1】【客户类型】【01】【0201】【0202】【0203】【0206】【0205】【0207】【0298】</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td></tr>
						<tr><td t="s" id="sjs-A7"><span contenteditable="true">营业收入总计</span></td><td t="s" id="sjs-B7"><span contenteditable="true">1</span></td><td t="n" id="sjs-C7"><span contenteditable="true"> 
						{{file.business_gain_total.family}}
						</span></td><td t="n" id="sjs-D7"><span contenteditable="true">
						{{file.business_gain_total.mobile}}
						</span></td><td t="n" id="sjs-E7"><span contenteditable="true"> 
						{{file.business_gain_total.telecom}}
						</span></td><td t="n" id="sjs-F7"><span contenteditable="true"> 
						{{file.business_gain_total.unicom}}
						</span></td><td t="n" id="sjs-G7"><span contenteditable="true"> 
						{{file.business_gain_total.railway}}
						</span></td><td t="n" id="sjs-H7"><span contenteditable="true"> 
						{{file.business_gain_total.tower}}
						</span></td><td t="n" id="sjs-I7"><span contenteditable="true">
						{{file.business_gain_total.metro}}
						</span></td><td t="n" id="sjs-J7"><span contenteditable="true"> 
						{{file.business_gain_total.other}}
						</span></td></tr>
						<tr><td t="s" id="sjs-A8"><span contenteditable="true">一、网络管理技术服务收入</span></td><td t="s" id="sjs-B8"><span contenteditable="true">2</span></td><td t="n" id="sjs-C8"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family}}
					</span></td><td t="n" id="sjs-D8"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.mobile}}
					</span></td><td t="n" id="sjs-E8"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.telecom}}
					</span></td><td t="n" id="sjs-F8"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.unicom}}
					</span></td><td t="n" id="sjs-G8"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.railway}}
					</span></td><td t="n" id="sjs-H8"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.tower}}
					</span></td><td t="n" id="sjs-I8"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.metro}}
					</span></td><td t="n" id="sjs-J8"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A9"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、家庭客户管理技术服务</span></td><td t="s" id="sjs-B9"><span contenteditable="true">3</span></td><td t="n" id="sjs-C9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.family}}
					</span></td><td t="n" id="sjs-D9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.mobile}}
					</span></td><td t="n" id="sjs-E9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.telecom}}
					</span></td><td t="n" id="sjs-F9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.unicom}}
					</span></td><td t="n" id="sjs-G9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.railway}}
					</span></td><td t="n" id="sjs-H9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.tower}}
					</span></td><td t="n" id="sjs-I9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.metro}}
					</span></td><td t="n" id="sjs-J9"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A10"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）开通调试服务</span></td><td t="s" id="sjs-B10"><span contenteditable="true">4</span></td><td t="n" id="sjs-C10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.family}}
					</span></td><td t="n" id="sjs-D10"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.mobile}}
						</span></td><td t="n" id="sjs-E10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.telecom}}
					</span></td><td t="n" id="sjs-F10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.unicom}}
					</span></td><td t="n" id="sjs-G10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.railway}}
					</span></td><td t="n" id="sjs-H10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.tower}}
					</span></td><td t="n" id="sjs-I10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.metro}}
					</span></td><td t="n" id="sjs-J10"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A11"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）技术服务</span></td><td t="s" id="sjs-B11"><span contenteditable="true">5</span></td><td t="n" id="sjs-C11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.family}}
					</span></td><td t="n" id="sjs-D11"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.mobile}}
					</span></td><td t="n" id="sjs-E11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.telecom}}
					</span></td><td t="n" id="sjs-F11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.unicom}}
					</span></td><td t="n" id="sjs-G11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.railway}}
					</span></td><td t="n" id="sjs-H11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.tower}}
					</span></td><td t="n" id="sjs-I11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.metro}}
					</span></td><td t="n" id="sjs-J11"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A12"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、集团客户管理技术服务</span></td><td t="s" id="sjs-B12"><span contenteditable="true">6</span></td><td t="n" id="sjs-C12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.family}}
					</span></td><td t="n" id="sjs-D12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.mobile}}
					</span></td><td t="n" id="sjs-E12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.telecom}}
					</span></td><td t="n" id="sjs-F12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.unicom}}
					</span></td><td t="n" id="sjs-G12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.railway}}
					</span></td><td t="n" id="sjs-H12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.tower}}
					</span></td><td t="n" id="sjs-I12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.metro}}
					</span></td><td t="n" id="sjs-J12"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A13"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）开通调试服务</span></td><td t="s" id="sjs-B13"><span contenteditable="true">7</span></td><td t="n" id="sjs-C13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.family}}
					</span></td><td t="n" id="sjs-D13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.mobile}}
					</span></td><td t="n" id="sjs-E13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.telecom}}
					</span></td><td t="n" id="sjs-F13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.unicom}}
					</span></td><td t="n" id="sjs-G13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.railway}}
					</span></td><td t="n" id="sjs-H13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.tower}}
					</span></td><td t="n" id="sjs-I13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.metro}}
					</span></td><td t="n" id="sjs-J13"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A14"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）技术服务</span></td><td t="s" id="sjs-B14"><span contenteditable="true">8</span></td><td t="n" id="sjs-C14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.family}}
					</span></td><td t="n" id="sjs-D14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.mobile}}
					</span></td><td t="n" id="sjs-E14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.telecom}}
					</span></td><td t="n" id="sjs-F14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.unicom}}
					</span></td><td t="n" id="sjs-G14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.railway}}
					</span></td><td t="n" id="sjs-H14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.tower}}
					</span></td><td t="n" id="sjs-I14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.metro}}
					</span></td><td t="n" id="sjs-J14"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A15"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、基站管理技术服务</span></td><td t="s" id="sjs-B15"><span contenteditable="true">9</span></td><td t="n" id="sjs-C15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.family}}
					</span></td><td t="n" id="sjs-D15"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.mobile}} 
					</span></td><td t="n" id="sjs-E15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.telecom}}
					</span></td><td t="n" id="sjs-F15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.unicom}}
					</span></td><td t="n" id="sjs-G15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.railway}}
					</span></td><td t="n" id="sjs-H15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.tower}}
					</span></td><td t="n" id="sjs-I15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.metro}}
					</span></td><td t="n" id="sjs-J15"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A16"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、光缆管理技术服务</span></td><td t="s" id="sjs-B16"><span contenteditable="true">10</span></td><td t="n" id="sjs-C16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.family}}
					</span></td><td t="n" id="sjs-D16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.mobile}}
					</span></td><td t="n" id="sjs-E16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.telecom}}
					</span></td><td t="n" id="sjs-F16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.unicom}}
					</span></td><td t="n" id="sjs-G16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.railway}}
					</span></td><td t="n" id="sjs-H16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.tower}}
					</span></td><td t="n" id="sjs-I16"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.metro}}
					</span></td><td t="n" id="sjs-J16"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A17"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、WLAN管理技术服务</span></td><td t="s" id="sjs-B17"><span contenteditable="true">11</span></td><td t="n" id="sjs-C17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.family}}
					</span></td><td t="n" id="sjs-D17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.mobile}}
					</span></td><td t="n" id="sjs-E17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.telecom}}
					</span></td><td t="n" id="sjs-F17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.unicom}}
					</span></td><td t="n" id="sjs-G17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.railway}}
					</span></td><td t="n" id="sjs-H17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.tower}}
					</span></td><td t="n" id="sjs-I17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.metro}}
					</span></td><td t="n" id="sjs-J17"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A18"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;6、铁塔管理技术服务</span></td><td t="s" id="sjs-B18"><span contenteditable="true">12</span></td><td t="n" id="sjs-C18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.family}}
					</span></td><td t="n" id="sjs-D18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.mobile}}
					</span></td><td t="n" id="sjs-E18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.telecom}}
					</span></td><td t="n" id="sjs-F18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.unicom}}
					</span></td><td t="n" id="sjs-G18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.railway}}
					</span></td><td t="n" id="sjs-H18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.tower}}
					</span></td><td t="n" id="sjs-I18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.metro}}
					</span></td><td t="n" id="sjs-J18"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A19"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;7、IDC管理技术服务</span></td><td t="s" id="sjs-B19"><span contenteditable="true">13</span></td><td t="n" id="sjs-C19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.family}}
					</span></td><td t="n" id="sjs-D19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.mobile}}
					</span></td><td t="n" id="sjs-E19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.telecom}}
					</span></td><td t="n" id="sjs-F19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.unicom}}
					</span></td><td t="n" id="sjs-G19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.railway}}
					</span></td><td t="n" id="sjs-H19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.tower}}
					</span></td><td t="n" id="sjs-I19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.metro}}
					</span></td><td t="n" id="sjs-J19"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A20"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;8、网络优化技术服务</span></td><td t="s" id="sjs-B20"><span contenteditable="true">14</span></td><td t="n" id="sjs-C20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.family}}
					</span></td><td t="n" id="sjs-D20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.mobile}}
					</span></td><td t="n" id="sjs-E20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.telecom}}
					</span></td><td t="n" id="sjs-F20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.unicom}}
					</span></td><td t="n" id="sjs-G20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.railway}}
					</span></td><td t="n" id="sjs-H20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.tower}}
					</span></td><td t="n" id="sjs-I20"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.metro}}
					</span></td><td t="n" id="sjs-J20"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.network_optimize.other}}
						</span></td></tr>
						<tr><td t="s" id="sjs-A21"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;9、网络资源核查与数据维护技术服务</span></td><td t="s" id="sjs-B21"><span contenteditable="true">15</span></td><td t="n" id="sjs-C21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.family}}
					</span></td><td t="n" id="sjs-D21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.mobile}}
					</span></td><td t="n" id="sjs-E21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.telecom}}
					</span></td><td t="n" id="sjs-F21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.unicom}}
					</span></td><td t="n" id="sjs-G21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.railway}}
					</span></td><td t="n" id="sjs-H21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.tower}}
					</span></td><td t="n" id="sjs-I21"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.metro}}
					</span></td><td t="n" id="sjs-J21"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.other}}
						</span></td></tr>
						<tr><td t="s" id="sjs-A22"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;10、能家居组网服务</span></td><td t="s" id="sjs-B22"><span contenteditable="true">16</span></td><td t="n" id="sjs-C22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.family}}
					</span></td><td t="n" id="sjs-D22"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.mobile}}
					</span></td><td t="n" id="sjs-E22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.telecom}}
					</span></td><td t="n" id="sjs-F22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.unicom}}
					</span></td><td t="n" id="sjs-G22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.railway}}
					</span></td><td t="n" id="sjs-H22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.tower}}
					</span></td><td t="n" id="sjs-I22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.metro}}
					</span></td><td t="n" id="sjs-J22"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A23"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;11、智能产品维修服务</span></td><td t="s" id="sjs-B23"><span contenteditable="true">17</span></td><td t="n" id="sjs-C23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.family}}
					</span></td><td t="n" id="sjs-D23"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.mobile}}
					</span></td><td t="n" id="sjs-E23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.telecom}}
					</span></td><td t="n" id="sjs-F23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.unicom}}
					</span></td><td t="n" id="sjs-G23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.railway}}
					</span></td><td t="n" id="sjs-H23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.tower}}
					</span></td><td t="n" id="sjs-I23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.metro}}
					</span></td><td t="n" id="sjs-J23"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A24"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;12、室分管理技术服务</span></td><td t="s" id="sjs-B24"><span contenteditable="true">18</span></td><td t="n" id="sjs-C24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.family}}
					</span></td><td t="n" id="sjs-D24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.mobile}}
					</span></td><td t="n" id="sjs-E24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.telecom}}
					</span></td><td t="n" id="sjs-F24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.unicom}}
					</span></td><td t="n" id="sjs-G24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.railway}}
					</span></td><td t="n" id="sjs-H24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.tower}}
					</span></td><td t="n" id="sjs-I24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.metro}}
					</span></td><td t="n" id="sjs-J24"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A25"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;13、其他网络管理技术服务</span></td><td t="s" id="sjs-B25"><span contenteditable="true">19</span></td><td t="n" id="sjs-C25"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.family}}
					</span></td><td t="n" id="sjs-D25"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.mobile}}
						</span></td><td t="n" id="sjs-E25"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.telecom}}
					</span></td><td t="n" id="sjs-F25"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.unicom}}
						</span></td><td t="n" id="sjs-G25"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.railway}}
					</span></td><td t="n" id="sjs-H25"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.tower}}
					</span></td><td t="n" id="sjs-I25"><span contenteditable="true">
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.metro}}
					</span></td><td t="n" id="sjs-J25"><span contenteditable="true"> 
						{{file.business_gain_total.network_manage_technology_service_cost.other_manage.other}}
						</span></td></tr>
						<tr><td t="s" id="sjs-A26"><span contenteditable="true">二、工程建设与服务收入</span></td><td t="s" id="sjs-B26"><span contenteditable="true">20</span></td><td t="n" id="sjs-C26"><span contenteditable="true">
						{{file.business_gain_total.project_service.family}}
					</span></td><td t="n" id="sjs-D26"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.mobile}} 
						</span></td><td t="n" id="sjs-E26"><span contenteditable="true">
						{{file.business_gain_total.project_service.telecom}}
					</span></td><td t="n" id="sjs-F26"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.unicom}}
						</span></td><td t="n" id="sjs-G26"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.railway}}
						</span></td><td t="n" id="sjs-H26"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.tower}}
						</span></td><td t="n" id="sjs-I26"><span contenteditable="true">
						{{file.business_gain_total.project_service.metro}}
					</span></td><td t="n" id="sjs-J26"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.other}}
						</span></td></tr>
						<tr><td t="s" id="sjs-A27"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、工程建设</span></td><td t="s" id="sjs-B27"><span contenteditable="true">21</span></td><td t="n" id="sjs-C27"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.family}}
					</span></td><td t="n" id="sjs-D27"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.mobile}}
						</span></td><td t="n" id="sjs-E27"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.telecom}}
					</span></td><td t="n" id="sjs-F27"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.unicom}} 
						</span></td><td t="n" id="sjs-G27"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.railway}}
						</span></td><td t="n" id="sjs-H27"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.tower}}
						</span></td><td t="n" id="sjs-I27"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.metro}}
					</span></td><td t="n" id="sjs-J27"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.other}}
						</span></td></tr>
						<tr><td t="s" id="sjs-A28"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）工程建设-集客</span></td><td t="s" id="sjs-B28"><span contenteditable="true">22</span></td><td t="n" id="sjs-C28"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_group.family}}
					</span></td><td t="n" id="sjs-D28"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.project_group.mobile}}
					</span></td><td t="n" id="sjs-E28"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_group.telecom}}
					</span></td><td t="n" id="sjs-F28"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_group.unicom}}
					</span></td><td t="n" id="sjs-G28"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_group.railway}}
					</span></td><td t="n" id="sjs-H28"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_group.tower}}
					</span></td><td t="n" id="sjs-I28"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_group.metro}}
					</span></td><td t="n" id="sjs-J28"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.project_group.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A29"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）工程建设-家客</span></td><td t="s" id="sjs-B29"><span contenteditable="true">23</span></td><td t="n" id="sjs-C29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.family}}
					</span></td><td t="n" id="sjs-D29"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.project_family.mobile}}
						</span></td><td t="n" id="sjs-E29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.telecom}}
					</span></td><td t="n" id="sjs-F29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.unicom}}
					</span></td><td t="n" id="sjs-G29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.railway}}
					</span></td><td t="n" id="sjs-H29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.tower}}
					</span></td><td t="n" id="sjs-I29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.metro}}
					</span></td><td t="n" id="sjs-J29"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_family.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A30"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）工程建设-传输管线业务</span></td><td t="s" id="sjs-B30"><span contenteditable="true">24</span></td><td t="n" id="sjs-C30"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_transfer_pipe.family}}
					</span></td><td t="n" id="sjs-D30"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.project_transfer_pipe.mobile}} 
					</span></td><td t="n" id="sjs-E30"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_transfer_pipe.telecom}}
					</span></td><td t="n" id="sjs-F30"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_transfer_pipe.unicom}}
					</span></td><td t="n" id="sjs-G30"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.project_transfer_pipe.railway}}
					</span></td><td t="n" id="sjs-H30"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_transfer_pipe.tower}}
					</span></td><td t="n" id="sjs-I30"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.project_transfer_pipe.metro}}
					</span></td><td t="n" id="sjs-J30"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.project_transfer_pipe.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A31"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）设备安装及配套服务</span></td><td t="s" id="sjs-B31"><span contenteditable="true">25</span></td><td t="n" id="sjs-C31"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.equipment_install.family}}
					</span></td><td t="n" id="sjs-D31"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.equipment_install.mobile}}
					</span></td><td t="n" id="sjs-E31"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.equipment_install.telecom}}
					</span></td><td t="n" id="sjs-F31"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.equipment_install.unicom}}
					</span></td><td t="n" id="sjs-G31"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.equipment_install.railway}}
					</span></td><td t="n" id="sjs-H31"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.equipment_install.tower}}
					</span></td><td t="n" id="sjs-I31"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.equipment_install.metro}}
					</span></td><td t="n" id="sjs-J31"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.equipment_install.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A32"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）室分业务</span></td><td t="s" id="sjs-B32"><span contenteditable="true">26</span></td><td t="n" id="sjs-C32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.family}}
					</span></td><td t="n" id="sjs-D32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.mobile}}
					</span></td><td t="n" id="sjs-E32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.telecom}}
					</span></td><td t="n" id="sjs-F32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.unicom}}
					</span></td><td t="n" id="sjs-G32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.railway}}
					</span></td><td t="n" id="sjs-H32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.tower}}
					</span></td><td t="n" id="sjs-I32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.metro}}
					</span></td><td t="n" id="sjs-J32"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.room_diliver.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A33"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）WLAN业务</span></td><td t="s" id="sjs-B33"><span contenteditable="true">27</span></td><td t="n" id="sjs-C33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.family}}
					</span></td><td t="n" id="sjs-D33"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.project.WLAN.mobile}}
					</span></td><td t="n" id="sjs-E33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.telecom}}
					</span></td><td t="n" id="sjs-F33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.unicom}}
					</span></td><td t="n" id="sjs-G33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.railway}}
					</span></td><td t="n" id="sjs-H33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.tower}}
					</span></td><td t="n" id="sjs-I33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.metro}}
					</span></td><td t="n" id="sjs-J33"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.WLAN.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A34"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（7）ICT业务</span></td><td t="s" id="sjs-B34"><span contenteditable="true">28</span></td><td t="n" id="sjs-C34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.family}}
					</span></td><td t="n" id="sjs-D34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.mobile}}
					</span></td><td t="n" id="sjs-E34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.telecom}}
					</span></td><td t="n" id="sjs-F34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.unicom}}
					</span></td><td t="n" id="sjs-G34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.railway}}
					</span></td><td t="n" id="sjs-H34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.tower}}
					</span></td><td t="n" id="sjs-I34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.metro}}
					</span></td><td t="n" id="sjs-J34"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.ICT.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A35"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（8）IDC业务</span></td><td t="s" id="sjs-B35"><span contenteditable="true">29</span></td><td t="n" id="sjs-C35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.family}}
					</span></td><td t="n" id="sjs-D35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.mobile}}
					</span></td><td t="n" id="sjs-E35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.telecom}}
					</span></td><td t="n" id="sjs-F35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.unicom}}
					</span></td><td t="n" id="sjs-G35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.railway}}
					</span></td><td t="n" id="sjs-H35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.tower}}
					</span></td><td t="n" id="sjs-I35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.metro}}
					</span></td><td t="n" id="sjs-J35"><span contenteditable="true">
						{{file.business_gain_total.project_service.project.IDC.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A36"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（9）其他</span></td><td t="s" id="sjs-B36"><span contenteditable="true">30</span></td><td t="n" id="sjs-C36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.family}}
					</span></td><td t="n" id="sjs-D36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.mobile}}
					</span></td><td t="n" id="sjs-E36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.telecom}}
					</span></td><td t="n" id="sjs-F36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.unicom}}
					</span></td><td t="n" id="sjs-G36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.railway}}
					</span></td><td t="n" id="sjs-H36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.tower}}
					</span></td><td t="n" id="sjs-I36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.metro}}
					</span></td><td t="n" id="sjs-J36"><span contenteditable="true">
						{{file.business_gain_total.project_service.project._other.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A37"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、设计服务</span></td><td t="s" id="sjs-B37"><span contenteditable="true">31</span></td><td t="n" id="sjs-C37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.family}}
					</span></td><td t="n" id="sjs-D37"><span contenteditable="true"> 
						{{file.business_gain_total.project_service.design_service.mobile}} 
					</span></td><td t="n" id="sjs-E37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.telecom}}
					</span></td><td t="n" id="sjs-F37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.unicom}}
					</span></td><td t="n" id="sjs-G37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.railway}}
					</span></td><td t="n" id="sjs-H37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.tower}}
					</span></td><td t="n" id="sjs-I37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.metro}}
					</span></td><td t="n" id="sjs-J37"><span contenteditable="true">
						{{file.business_gain_total.project_service.design_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A38"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、工程管理服务</span></td><td t="s" id="sjs-B38"><span contenteditable="true">32</span></td><td t="n" id="sjs-C38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.family}}
					</span></td><td t="n" id="sjs-D38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.mobile}}
					</span></td><td t="n" id="sjs-E38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.telecom}}
					</span></td><td t="n" id="sjs-F38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.unicom}}
					</span></td><td t="n" id="sjs-G38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.railway}}
					</span></td><td t="n" id="sjs-H38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.tower}}
					</span></td><td t="n" id="sjs-I38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.metro}}
					</span></td><td t="n" id="sjs-J38"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A39"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、工程监理服务</span></td><td t="s" id="sjs-B39"><span contenteditable="true">33</span></td><td t="n" id="sjs-C39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.family}}
					</span></td><td t="n" id="sjs-D39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.mobile}}
					</span></td><td t="n" id="sjs-E39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.telecom}}
					</span></td><td t="n" id="sjs-F39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.unicom}}
					</span></td><td t="n" id="sjs-G39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.railway}}
					</span></td><td t="n" id="sjs-H39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.tower}}
					</span></td><td t="n" id="sjs-I39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.metro}}
					</span></td><td t="n" id="sjs-J39"><span contenteditable="true">
						{{file.business_gain_total.project_service.project_watch.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A40"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、其他</span></td><td t="s" id="sjs-B40"><span contenteditable="true">34</span></td><td t="n" id="sjs-C40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.family}}
					</span></td><td t="n" id="sjs-D40"><span contenteditable="true"> 
						{{file.business_gain_total.project_service._other.mobile}}
					</span></td><td t="n" id="sjs-E40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.telecom}}
					</span></td><td t="n" id="sjs-F40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.unicom}}
					</span></td><td t="n" id="sjs-G40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.railway}}
					</span></td><td t="n" id="sjs-H40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.tower}}
					</span></td><td t="n" id="sjs-I40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.metro}}
					</span></td><td t="n" id="sjs-J40"><span contenteditable="true">
						{{file.business_gain_total.project_service._other.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A41"><span contenteditable="true">三、市场营销服务收入</span></td><td t="s" id="sjs-B41"><span contenteditable="true">35</span></td><td t="n" id="sjs-C41"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.family}}
					</span></td><td t="n" id="sjs-D41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.mobile}}
					</span></td><td t="n" id="sjs-E41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.telecom}}
					</span></td><td t="n" id="sjs-F41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.unicom}}
					</span></td><td t="n" id="sjs-G41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.railway}}
					</span></td><td t="n" id="sjs-H41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.tower}}
					</span></td><td t="n" id="sjs-I41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.metro}}
					</span></td><td t="n" id="sjs-J41"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A42"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、代售业务</span></td><td t="s" id="sjs-B42"><span contenteditable="true">36</span></td><td t="n" id="sjs-C42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.family}}
					</span></td><td t="n" id="sjs-D42"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.mobile}}
					</span></td><td t="n" id="sjs-E42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.telecom}}
					</span></td><td t="n" id="sjs-F42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.unicom}}
					</span></td><td t="n" id="sjs-G42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.railway}}
					</span></td><td t="n" id="sjs-H42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.tower}}
					</span></td><td t="n" id="sjs-I42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.metro}}
					</span></td><td t="n" id="sjs-J42"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A43"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）家庭业务</span></td><td t="s" id="sjs-B43"><span contenteditable="true">37</span></td><td t="n" id="sjs-C43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.family}}
					</span></td><td t="n" id="sjs-D43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.mobile}}
					</span></td><td t="n" id="sjs-E43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.telecom}}
					</span></td><td t="n" id="sjs-F43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.unicom}}
					</span></td><td t="n" id="sjs-G43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.railway}}
					</span></td><td t="n" id="sjs-H43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.tower}}
					</span></td><td t="n" id="sjs-I43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.metro}}
					</span></td><td t="n" id="sjs-J43"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._family.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A44"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）个人业务</span></td><td t="s" id="sjs-B44"><span contenteditable="true">38</span></td><td t="n" id="sjs-C44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.family}}
					</span></td><td t="n" id="sjs-D44"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.mobile}}
					</span></td><td t="n" id="sjs-E44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.telecom}}
					</span></td><td t="n" id="sjs-F44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.unicom}}
					</span></td><td t="n" id="sjs-G44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.railway}}
					</span></td><td t="n" id="sjs-H44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.tower}}
					</span></td><td t="n" id="sjs-I44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.metro}}
					</span></td><td t="n" id="sjs-J44"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.person.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A45"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）集客业务</span></td><td t="s" id="sjs-B45"><span contenteditable="true">39</span></td><td t="n" id="sjs-C45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.family}}
					</span></td><td t="n" id="sjs-D45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.mobile}}
					</span></td><td t="n" id="sjs-E45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.telecom}}
					</span></td><td t="n" id="sjs-F45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.unicom}}
					</span></td><td t="n" id="sjs-G45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.railway}}
					</span></td><td t="n" id="sjs-H45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.tower}}
					</span></td><td t="n" id="sjs-I45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.metro}}
					</span></td><td t="n" id="sjs-J45"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A46"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：ICT业务</span></td><td t="s" id="sjs-B46"><span contenteditable="true">40</span></td><td t="n" id="sjs-C46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.family}}
					</span></td><td t="n" id="sjs-D46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.mobile}}
					</span></td><td t="n" id="sjs-E46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.telecom}}
					</span></td><td t="n" id="sjs-F46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.unicom}}
					</span></td><td t="n" id="sjs-G46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.railway}}
					</span></td><td t="n" id="sjs-H46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.tower}}
					</span></td><td t="n" id="sjs-I46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.metro}}
					</span></td><td t="n" id="sjs-J46"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A47"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中小企业拓保</span></td><td t="s" id="sjs-B47"><span contenteditable="true">41</span></td><td t="n" id="sjs-C47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.family}}
					</span></td><td t="n" id="sjs-D47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.mobile}}
					</span></td><td t="n" id="sjs-E47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.telecom}}
					</span></td><td t="n" id="sjs-F47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.unicom}}
					</span></td><td t="n" id="sjs-G47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.railway}}
					</span></td><td t="n" id="sjs-H47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.tower}}
					</span></td><td t="n" id="sjs-I47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.metro}}
					</span></td><td t="n" id="sjs-J47"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A48"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息化服务</span></td><td t="s" id="sjs-B48"><span contenteditable="true">42</span></td><td t="n" id="sjs-C48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.family}}
					</span></td><td t="n" id="sjs-D48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.mobile}}
					</span></td><td t="n" id="sjs-E48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.telecom}}
					</span></td><td t="n" id="sjs-F48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.unicom}}
					</span></td><td t="n" id="sjs-G48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.railway}}
					</span></td><td t="n" id="sjs-H48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.tower}}
					</span></td><td t="n" id="sjs-I48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.metro}}
					</span></td><td t="n" id="sjs-J48"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A49"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）互联网业务</span></td><td t="s" id="sjs-B49"><span contenteditable="true">43</span></td><td t="n" id="sjs-C49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.family}}
					</span></td><td t="n" id="sjs-D49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.mobile}}
					</span></td><td t="n" id="sjs-E49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.telecom}}
					</span></td><td t="n" id="sjs-F49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.unicom}}
					</span></td><td t="n" id="sjs-G49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.railway}}
					</span></td><td t="n" id="sjs-H49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.tower}}
					</span></td><td t="n" id="sjs-I49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.metro}}
					</span></td><td t="n" id="sjs-J49"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A50"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）运营服务</span></td><td t="s" id="sjs-B50"><span contenteditable="true">44</span></td><td t="n" id="sjs-C50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.family}}
					</span></td><td t="n" id="sjs-D50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.mobile}}
					</span></td><td t="n" id="sjs-E50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.telecom}}
					</span></td><td t="n" id="sjs-F50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.unicom}}
					</span></td><td t="n" id="sjs-G50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.railway}}
					</span></td><td t="n" id="sjs-H50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.tower}}
					</span></td><td t="n" id="sjs-I50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.metro}}
					</span></td><td t="n" id="sjs-J50"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A51"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）其他</span></td><td t="s" id="sjs-B51"><span contenteditable="true">45</span></td><td t="n" id="sjs-C51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.family}}
					</span></td><td t="n" id="sjs-D51"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.mobile}}
					</span></td><td t="n" id="sjs-E51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.telecom}}
					</span></td><td t="n" id="sjs-F51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.unicom}}
					</span></td><td t="n" id="sjs-G51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.railway}}
					</span></td><td t="n" id="sjs-H51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.tower}}
					</span></td><td t="n" id="sjs-I51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.metro}}
					</span></td><td t="n" id="sjs-J51"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.sell_service._other.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A52"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、服务支撑业务</span></td><td t="s" id="sjs-B52"><span contenteditable="true">46</span></td><td t="n" id="sjs-C52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.family}}
					</span></td><td t="n" id="sjs-D52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.mobile}}
					</span></td><td t="n" id="sjs-E52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.telecom}}
					</span></td><td t="n" id="sjs-F52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.unicom}}
					</span></td><td t="n" id="sjs-G52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.railway}}
					</span></td><td t="n" id="sjs-H52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.tower}}
					</span></td><td t="n" id="sjs-I52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.metro}}
					</span></td><td t="n" id="sjs-J52"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A53"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）中小企业一体化支撑服务</span></td><td t="s" id="sjs-B53"><span contenteditable="true">47</span></td><td t="n" id="sjs-C53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.family}}
					</span></td><td t="n" id="sjs-D53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.mobile}}
					</span></td><td t="n" id="sjs-E53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.telecom}}
					</span></td><td t="n" id="sjs-F53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.unicom}}
					</span></td><td t="n" id="sjs-G53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.railway}}
					</span></td><td t="n" id="sjs-H53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.tower}}
					</span></td><td t="n" id="sjs-I53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.metro}}
					</span></td><td t="n" id="sjs-J53"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A54"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）集客项目一体化支撑服务</span></td><td t="s" id="sjs-B54"><span contenteditable="true">48</span></td><td t="n" id="sjs-C54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.family}}
					</span></td><td t="n" id="sjs-D54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.mobile}}
					</span></td><td t="n" id="sjs-E54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.telecom}}
					</span></td><td t="n" id="sjs-F54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.unicom}}
					</span></td><td t="n" id="sjs-G54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.railway}}
					</span></td><td t="n" id="sjs-H54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.tower}}
					</span></td><td t="n" id="sjs-I54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.metro}}
					</span></td><td t="n" id="sjs-J54"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A55"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）ICT业务</span></td><td t="s" id="sjs-B55"><span contenteditable="true">49</span></td><td t="n" id="sjs-C55"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.family}}
					</span></td><td t="n" id="sjs-D55"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.mobile}}
					</span></td><td t="n" id="sjs-E55"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.telecom}}
					</span></td><td t="n" id="sjs-F55"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.unicom}}
					</span></td><td t="n" id="sjs-G55"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.railway}}
					</span></td><td t="n" id="sjs-H55"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.tower}}
					</span></td><td t="n" id="sjs-I55"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.metro}}
					</span></td><td t="n" id="sjs-J55"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A56"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:系统集成</span></td><td t="s" id="sjs-B56"><span contenteditable="true">50</span></td><td t="n" id="sjs-C56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.family}}
					</span></td><td t="n" id="sjs-D56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.mobile}}
					</span></td><td t="n" id="sjs-E56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.telecom}}
					</span></td><td t="n" id="sjs-F56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.unicom}}
					</span></td><td t="n" id="sjs-G56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.railway}}
					</span></td><td t="n" id="sjs-H56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.tower}}
					</span></td><td t="n" id="sjs-I56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.metro}}
					</span></td><td t="n" id="sjs-J56"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A57"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;维保</span></td><td t="s" id="sjs-B57"><span contenteditable="true">51</span></td><td t="n" id="sjs-C57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.family}}
					</span></td><td t="n" id="sjs-D57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.mobile}}
					</span></td><td t="n" id="sjs-E57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.telecom}}
					</span></td><td t="n" id="sjs-F57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.unicom}}
					</span></td><td t="n" id="sjs-G57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.railway}}
					</span></td><td t="n" id="sjs-H57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.tower}}
					</span></td><td t="n" id="sjs-I57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.metro}}
					</span></td><td t="n" id="sjs-J57"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A58"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）IDC业务</span></td><td t="s" id="sjs-B58"><span contenteditable="true">52</span></td><td t="n" id="sjs-C58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.family}}
					</span></td><td t="n" id="sjs-D58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.mobile}}
					</span></td><td t="n" id="sjs-E58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.telecom}}
					</span></td><td t="n" id="sjs-F58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.unicom}}
					</span></td><td t="n" id="sjs-G58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.railway}}
					</span></td><td t="n" id="sjs-H58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.tower}}
					</span></td><td t="n" id="sjs-I58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.metro}}
					</span></td><td t="n" id="sjs-J58"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A59"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）云计算</span></td><td t="s" id="sjs-B59"><span contenteditable="true">53</span></td><td t="n" id="sjs-C59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.family}}
					</span></td><td t="n" id="sjs-D59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.mobile}}
					</span></td><td t="n" id="sjs-E59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.telecom}}
					</span></td><td t="n" id="sjs-F59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.unicom}}
					</span></td><td t="n" id="sjs-G59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.railway}}
					</span></td><td t="n" id="sjs-H59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.tower}}
					</span></td><td t="n" id="sjs-I59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.metro}}
					</span></td><td t="n" id="sjs-J59"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A60"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）大数据</span></td><td t="s" id="sjs-B60"><span contenteditable="true">54</span></td><td t="n" id="sjs-C60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.family}}
					</span></td><td t="n" id="sjs-D60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.mobile}}
					</span></td><td t="n" id="sjs-E60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.telecom}}
					</span></td><td t="n" id="sjs-F60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.unicom}}
					</span></td><td t="n" id="sjs-G60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.railway}}
					</span></td><td t="n" id="sjs-H60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.tower}}
					</span></td><td t="n" id="sjs-I60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.metro}}
					</span></td><td t="n" id="sjs-J60"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A61"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（7）其他</span></td><td t="s" id="sjs-B61"><span contenteditable="true">55</span></td><td t="n" id="sjs-C61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.family}}
					</span></td><td t="n" id="sjs-D61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.mobile}}
					</span></td><td t="n" id="sjs-E61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.telecom}}
					</span></td><td t="n" id="sjs-F61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.unicom}}
					</span></td><td t="n" id="sjs-G61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.railway}}
					</span></td><td t="n" id="sjs-H61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.tower}}
					</span></td><td t="n" id="sjs-I61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.metro}}
					</span></td><td t="n" id="sjs-J61"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.service_support._other.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A62"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、存量业务</span></td><td t="s" id="sjs-B62"><span contenteditable="true">56</span></td><td t="n" id="sjs-C62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.family}}
					</span></td><td t="n" id="sjs-D62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.mobile}}
					</span></td><td t="n" id="sjs-E62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.telecom}}
					</span></td><td t="n" id="sjs-F62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.unicom}}
					</span></td><td t="n" id="sjs-G62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.railway}}
					</span></td><td t="n" id="sjs-H62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.tower}}
					</span></td><td t="n" id="sjs-I62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.metro}}
					</span></td><td t="n" id="sjs-J62"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A63"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）自有用户业务</span></td><td t="s" id="sjs-B63"><span contenteditable="true">57</span></td><td t="n" id="sjs-C63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.family}}
					</span></td><td t="n" id="sjs-D63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.mobile}}
					</span></td><td t="n" id="sjs-E63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.telecom}}
					</span></td><td t="n" id="sjs-F63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.unicom}}
					</span></td><td t="n" id="sjs-G63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.railway}}
					</span></td><td t="n" id="sjs-H63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.tower}}
					</span></td><td t="n" id="sjs-I63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.metro}}
					</span></td><td t="n" id="sjs-J63"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A64"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：语音业务</span></td><td t="s" id="sjs-B64"><span contenteditable="true">58</span></td><td t="n" id="sjs-C64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.family}}
					</span></td><td t="n" id="sjs-D64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.mobile}}
					</span></td><td t="n" id="sjs-E64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.telecom}}
					</span></td><td t="n" id="sjs-F64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.unicom}}
					</span></td><td t="n" id="sjs-G64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.railway}}
					</span></td><td t="n" id="sjs-H64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.tower}}
					</span></td><td t="n" id="sjs-I64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.metro}}
					</span></td><td t="n" id="sjs-J64"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A65"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据业务</span></td><td t="s" id="sjs-B65"><span contenteditable="true">59</span></td><td t="n" id="sjs-C65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.family}}
					</span></td><td t="n" id="sjs-D65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.mobile}}
					</span></td><td t="n" id="sjs-E65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.telecom}}
					</span></td><td t="n" id="sjs-F65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.unicom}}
					</span></td><td t="n" id="sjs-G65"><span contenteditable="true"> 
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.railway}}
					</span></td><td t="n" id="sjs-H65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.tower}}
					</span></td><td t="n" id="sjs-I65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.metro}}
					</span></td><td t="n" id="sjs-J65"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A66"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资源出租业务</span></td><td t="s" id="sjs-B66"><span contenteditable="true">60</span></td><td t="n" id="sjs-C66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.family}}
					</span></td><td t="n" id="sjs-D66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.mobile}}
					</span></td><td t="n" id="sjs-E66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.telecom}}
					</span></td><td t="n" id="sjs-F66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.unicom}}
					</span></td><td t="n" id="sjs-G66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.railway}}
					</span></td><td t="n" id="sjs-H66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.tower}}
					</span></td><td t="n" id="sjs-I66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.metro}}
					</span></td><td t="n" id="sjs-J66"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A67"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：合建</span></td><td t="s" id="sjs-B67"><span contenteditable="true">61</span></td><td t="n" id="sjs-C67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.family}}
					</span></td><td t="n" id="sjs-D67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.mobile}}
					</span></td><td t="n" id="sjs-E67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.telecom}}
					</span></td><td t="n" id="sjs-F67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.unicom}}
					</span></td><td t="n" id="sjs-G67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.railway}}
					</span></td><td t="n" id="sjs-H67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.tower}}
					</span></td><td t="n" id="sjs-I67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.metro}}
					</span></td><td t="n" id="sjs-J67"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A68"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网内结算</span></td><td t="s" id="sjs-B68"><span contenteditable="true">62</span></td><td t="n" id="sjs-C68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.family}}
					</span></td><td t="n" id="sjs-D68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.mobile}}
					</span></td><td t="n" id="sjs-E68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.telecom}}
					</span></td><td t="n" id="sjs-F68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.unicom}}
					</span></td><td t="n" id="sjs-G68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.railway}}
					</span></td><td t="n" id="sjs-H68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.tower}}
					</span></td><td t="n" id="sjs-I68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.metro}}
					</span></td><td t="n" id="sjs-J68"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A69"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网间结算</span></td><td t="s" id="sjs-B69"><span contenteditable="true">63</span></td><td t="n" id="sjs-C69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.family}}
					</span></td><td t="n" id="sjs-D69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.mobile}}
					</span></td><td t="n" id="sjs-E69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.telecom}}
					</span></td><td t="n" id="sjs-F69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.unicom}}
					</span></td><td t="n" id="sjs-G69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.railway}}
					</span></td><td t="n" id="sjs-H69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.tower}}
					</span></td><td t="n" id="sjs-I69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.metro}}
					</span></td><td t="n" id="sjs-J69"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A70"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-B70"><span contenteditable="true">64</span></td><td t="n" id="sjs-C70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.family}}
					</span></td><td t="n" id="sjs-D70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.mobile}}
					</span></td><td t="n" id="sjs-E70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.telecom}}
					</span></td><td t="n" id="sjs-F70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.unicom}}
					</span></td><td t="n" id="sjs-G70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.railway}}
					</span></td><td t="n" id="sjs-H70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.tower}}
					</span></td><td t="n" id="sjs-I70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.metro}}
					</span></td><td t="n" id="sjs-J70"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business._other.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A71"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）资源使用费</span></td><td t="s" id="sjs-B71"><span contenteditable="true">65</span></td><td t="n" id="sjs-C71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.family}}
					</span></td><td t="n" id="sjs-D71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.mobile}}
					</span></td><td t="n" id="sjs-E71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.telecom}}
					</span></td><td t="n" id="sjs-F71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.unicom}}
					</span></td><td t="n" id="sjs-G71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.railway}}
					</span></td><td t="n" id="sjs-H71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.tower}}
					</span></td><td t="n" id="sjs-I71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.metro}}
					</span></td><td t="n" id="sjs-J71"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A72"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）用户转网补偿</span></td><td t="s" id="sjs-B72"><span contenteditable="true">66</span></td><td t="n" id="sjs-C72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.family}}
					</span></td><td t="n" id="sjs-D72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.mobile}}
					</span></td><td t="n" id="sjs-E72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.telecom}}
					</span></td><td t="n" id="sjs-F72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.unicom}}
					</span></td><td t="n" id="sjs-G72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.railway}}
					</span></td><td t="n" id="sjs-H72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.tower}}
					</span></td><td t="n" id="sjs-I72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.metro}}
					</span></td><td t="n" id="sjs-J72"><span contenteditable="true">
						{{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A73"><span contenteditable="true">四、计量及网络检测收入</span></td><td t="s" id="sjs-B73"><span contenteditable="true">67</span></td><td t="n" id="sjs-C73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.family}}
					</span></td><td t="n" id="sjs-D73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.mobile}}
					</span></td><td t="n" id="sjs-E73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.telecom}}
					</span></td><td t="n" id="sjs-F73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.unicom}}
					</span></td><td t="n" id="sjs-G73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.railway}}
					</span></td><td t="n" id="sjs-H73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.tower}}
					</span></td><td t="n" id="sjs-I73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.metro}}
					</span></td><td t="n" id="sjs-J73"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A74"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、仪表计量检测服务</span></td><td t="s" id="sjs-B74"><span contenteditable="true">68</span></td><td t="n" id="sjs-C74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.family}}
					</span></td><td t="n" id="sjs-D74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.mobile}}
					</span></td><td t="n" id="sjs-E74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.telecom}}
					</span></td><td t="n" id="sjs-F74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.unicom}}
					</span></td><td t="n" id="sjs-G74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.railway}}
					</span></td><td t="n" id="sjs-H74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.tower}}
					</span></td><td t="n" id="sjs-I74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.metro}}
					</span></td><td t="n" id="sjs-J74"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.instrument_measure.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A75"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、5G网络检测服务</span></td><td t="s" id="sjs-B75"><span contenteditable="true">69</span></td><td t="n" id="sjs-C75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.family}}
					</span></td><td t="n" id="sjs-D75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.mobile}}
					</span></td><td t="n" id="sjs-E75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.telecom}}
					</span></td><td t="n" id="sjs-F75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.unicom}}
					</span></td><td t="n" id="sjs-G75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.railway}}
					</span></td><td t="n" id="sjs-H75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.tower}}
					</span></td><td t="n" id="sjs-I75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.metro}}
					</span></td><td t="n" id="sjs-J75"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A76"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、无线网络质量检测服务</span></td><td t="s" id="sjs-B76"><span contenteditable="true">70</span></td><td t="n" id="sjs-C76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.family}}
					</span></td><td t="n" id="sjs-D76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.mobile}}
					</span></td><td t="n" id="sjs-E76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.telecom}}
					</span></td><td t="n" id="sjs-F76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.unicom}}
					</span></td><td t="n" id="sjs-G76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.railway}}
					</span></td><td t="n" id="sjs-H76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.tower}}
					</span></td><td t="n" id="sjs-I76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.metro}}
					</span></td><td t="n" id="sjs-J76"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A77"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、互联网网络质量检测服务</span></td><td t="s" id="sjs-B77"><span contenteditable="true">71</span></td><td t="n" id="sjs-C77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.family}}
					</span></td><td t="n" id="sjs-D77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.mobile}}
					</span></td><td t="n" id="sjs-E77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.telecom}}
					</span></td><td t="n" id="sjs-F77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.unicom}}
					</span></td><td t="n" id="sjs-G77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.railway}}
					</span></td><td t="n" id="sjs-H77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.tower}}
					</span></td><td t="n" id="sjs-I77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.metro}}
					</span></td><td t="n" id="sjs-J77"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_measure.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A78"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、物联网设备检测服务</span></td><td t="s" id="sjs-B78"><span contenteditable="true">72</span></td><td t="n" id="sjs-C78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.family}}
					</span></td><td t="n" id="sjs-D78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.mobile}}
					</span></td><td t="n" id="sjs-E78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.telecom}}
					</span></td><td t="n" id="sjs-F78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.unicom}}
					</span></td><td t="n" id="sjs-G78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.railway}}
					</span></td><td t="n" id="sjs-H78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.tower}}
					</span></td><td t="n" id="sjs-I78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.metro}}
					</span></td><td t="n" id="sjs-J78"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A79"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;6、其他检测服务</span></td><td t="s" id="sjs-B79"><span contenteditable="true">73</span></td><td t="n" id="sjs-C79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.family}}
					</span></td><td t="n" id="sjs-D79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.mobile}}
					</span></td><td t="n" id="sjs-E79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.telecom}}
					</span></td><td t="n" id="sjs-F79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.unicom}}
					</span></td><td t="n" id="sjs-G79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.railway}}
					</span></td><td t="n" id="sjs-H79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.tower}}
					</span></td><td t="n" id="sjs-I79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.metro}}
					</span></td><td t="n" id="sjs-J79"><span contenteditable="true">
						{{file.business_gain_total.measure_and_network_test_gain.other_measure.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A80"><span contenteditable="true">五、其他收入</span></td><td t="s" id="sjs-B80"><span contenteditable="true">74</span></td><td t="n" id="sjs-C80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.family}}
					</span></td><td t="n" id="sjs-D80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.mobile}}
					</span></td><td t="n" id="sjs-E80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.telecom}}
					</span></td><td t="n" id="sjs-F80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.unicom}}
					</span></td><td t="n" id="sjs-G80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.railway}}
					</span></td><td t="n" id="sjs-H80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tower}}
					</span></td><td t="n" id="sjs-I80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.metro}}
					</span></td><td t="n" id="sjs-J80"><span contenteditable="true">
						{{file.business_gain_total.other_gain.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A81"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、销售通信商品</span></td><td t="s" id="sjs-B81"><span contenteditable="true">75</span></td><td t="n" id="sjs-C81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.family}}
					</span></td><td t="n" id="sjs-D81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.mobile}}
					</span></td><td t="n" id="sjs-E81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.telecom}}
					</span></td><td t="n" id="sjs-F81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.unicom}}
					</span></td><td t="n" id="sjs-G81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.railway}}
					</span></td><td t="n" id="sjs-H81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.tower}}
					</span></td><td t="n" id="sjs-I81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.metro}}
					</span></td><td t="n" id="sjs-J81"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_terminal_and_good.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A82"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、销售通信设备</span></td><td t="s" id="sjs-B82"><span contenteditable="true">76</span></td><td t="n" id="sjs-C82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.family}}
					</span></td><td t="n" id="sjs-D82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.mobile}}
					</span></td><td t="n" id="sjs-E82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.telecom}}
					</span></td><td t="n" id="sjs-F82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.unicom}}
					</span></td><td t="n" id="sjs-G82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.railway}}
					</span></td><td t="n" id="sjs-H82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.tower}}
					</span></td><td t="n" id="sjs-I82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.metro}}
					</span></td><td t="n" id="sjs-J82"><span contenteditable="true">
						{{file.business_gain_total.other_gain.sell_equipment.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A83"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、租赁业务</span></td><td t="s" id="sjs-B83"><span contenteditable="true">77</span></td><td t="n" id="sjs-C83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.family}}
					</span></td><td t="n" id="sjs-D83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.mobile}}
					</span></td><td t="n" id="sjs-E83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.telecom}}
					</span></td><td t="n" id="sjs-F83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.unicom}}
					</span></td><td t="n" id="sjs-G83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.railway}}
					</span></td><td t="n" id="sjs-H83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.tower}}
					</span></td><td t="n" id="sjs-I83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.metro}}
					</span></td><td t="n" id="sjs-J83"><span contenteditable="true">
						{{file.business_gain_total.other_gain.rent_business.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A84"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、软件服务</span></td><td t="s" id="sjs-B84"><span contenteditable="true">78</span></td><td t="n" id="sjs-C84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.family}}
					</span></td><td t="n" id="sjs-D84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.mobile}}
					</span></td><td t="n" id="sjs-E84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.telecom}}
					</span></td><td t="n" id="sjs-F84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.unicom}}
					</span></td><td t="n" id="sjs-G84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.railway}}
					</span></td><td t="n" id="sjs-H84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.tower}}
					</span></td><td t="n" id="sjs-I84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.metro}}
					</span></td><td t="n" id="sjs-J84"><span contenteditable="true">
						{{file.business_gain_total.other_gain.software_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A85"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、物业管理</span></td><td t="s" id="sjs-B85"><span contenteditable="true">79</span></td><td t="n" id="sjs-C85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.family}}
					</span></td><td t="n" id="sjs-D85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.mobile}}
					</span></td><td t="n" id="sjs-E85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.telecom}}
					</span></td><td t="n" id="sjs-F85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.unicom}}
					</span></td><td t="n" id="sjs-G85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.railway}}
					</span></td><td t="n" id="sjs-H85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.tower}}
					</span></td><td t="n" id="sjs-I85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.metro}}
					</span></td><td t="n" id="sjs-J85"><span contenteditable="true">
						{{file.business_gain_total.other_gain.tenement_manage.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A86"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;6、物流服务</span></td><td t="s" id="sjs-B86"><span contenteditable="true">80</span></td><td t="n" id="sjs-C86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.family}}
					</span></td><td t="n" id="sjs-D86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.mobile}}
					</span></td><td t="n" id="sjs-E86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.telecom}}
					</span></td><td t="n" id="sjs-F86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.unicom}}
					</span></td><td t="n" id="sjs-G86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.railway}}
					</span></td><td t="n" id="sjs-H86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.tower}}
					</span></td><td t="n" id="sjs-I86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.metro}}
					</span></td><td t="n" id="sjs-J86"><span contenteditable="true">
						{{file.business_gain_total.other_gain.physica_distribution_service.other}}
					</span></td></tr>
						<tr><td t="s" id="sjs-A87"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;7、其他</span></td><td t="s" id="sjs-B87"><span contenteditable="true">81</span></td><td t="n" id="sjs-C87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.family}}
					</span></td><td t="n" id="sjs-D87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.mobile}}
					</span></td><td t="n" id="sjs-E87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.telecom}}
					</span></td><td t="n" id="sjs-F87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.unicom}}
					</span></td><td t="n" id="sjs-G87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.railway}}
					</span></td><td t="n" id="sjs-H87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.tower}}
					</span></td><td t="n" id="sjs-I87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.metro}}
					</span></td><td t="n" id="sjs-J87"><span contenteditable="true">
						{{file.business_gain_total.other_gain._other.other}}
					</span></td></tr>
					</table>
			</div>
		</Modal>
  </div>
</template>
<style scoped>
  .echarts1 {
    height: 610px;
    width: 100%;
    border-radius: 5px;
  }
</style>
<script>
    import store from '../../store'
    import * as util from '../../util'
	import {read_business_gain} from "../../read_business_gain_market.js"
	var project={
		business_gain_total:{
			value:0,name:"营业收入总计",
			network_manage_technology_service_cost:{
				value:0,name:"一、网络管理技术服务收入",
				family_customer_manage:{
					value:0,name:"1、家庭客户管理技术服务",
					open_dubug_service:{value:0,name:"（1）开通调试服务"},
					technology_service:{value:0,name:"（2）技术服务"}
				},
				group_customer_manage:{
					value:0,name:"2、集团客户管理技术服务",
					open_dubug_service:{value:0,name:"（1）开通调试服务"},
					technology_service:{value:0,name:"（2）技术服务"}
				},
				base_station_manage:{value:0,name:"3、基站管理技术服务"},
				optical_cable_manage:{value:0,name:"4、光缆管理技术服务"},
				WLAN_manage:{value:0,name:"5、WLAN管理技术服务"},
				iron_tower_manage:{value:0,name:"6、铁塔管理技术服务"},
				IDC_manage:{value:0,name:"7、IDC管理技术服务"},
				network_optimize:{value:0,name:"8、网络优化技术服务"},
				network_resource_check_and_maintain:{value:0,name:"9、网络资源核查与数据维护技术服务"},
				family_group_network_service:{value:0,name:"10、能家居组网服务"},
				intellectual_product_fix:{value:0,name:"11、智能产品维修服务"},
				room_diliver_manage:{value:0,name:"12、室分管理技术服务"},
				other_manage:{value:0,name:"13、其他网络管理技术服务"}
			},
			project_service:{
				value:0,name:"二、工程建设与服务收入",
				project:{
					value:0,name:"1、工程建设",
					project_group:{value:0,name:"（1）工程建设-集客"},
					project_family:{value:0,name:"（2）工程建设-家客"},
					project_transfer_pipe:{value:0,name:"（3）工程建设-传输管线业务"},
					equipment_install:{value:0,name:"（4）设备安装及配套服务"},
					room_diliver:{value:0,name:"（5）室分业务"},
					WLAN:{value:0,name:"（6）WLAN业务"},
					ICT:{value:0,name:"（7）ICT业务"},
					IDC:{value:0,name:"（8）IDC业务"},
					_other:{value:0,name:"（9）其他"}
				},
				design_service:{value:0,name:"2、设计服务"},
				project_manage:{value:0,name:"3、工程管理服务"},
				project_watch:{value:0,name:"4、工程监理服务"},
				_other:{value:0,name:"5、其他"}
			},
			market_bussiness_service_gain:{
				value:0,name:"三、市场营销服务收入",
				sell_service:{
					value:0,name:"1、代售业务",
					_family:{value:0,name:"（1）家庭业务"},
					person:{value:0,name:"（2）个人业务"},
					group:{
						value:0,name:"（3）集客业务",
						ICT:{value:0,name:"其中：ICT业务"},
						medium_small_company:{value:0,name:"中小企业拓保"},
						infomatization_service:{value:0,name:"信息化服务"}
					},
					intnet_business:{value:0,name:"（4）互联网业务"},
					oprate_service:{value:0,name:"（5）运营服务"},
					_other:{value:0,name:"（6）其他"}
				},
				service_support:{
					value:0,name:"2、服务支撑业务",
					medium_small_company_support:{value:0,name:"（1）中小企业一体化支撑服务"},
					group_support:{value:0,name:"（2）集客项目一体化支撑服务"},
					ICT:{
						value:0,name:"（3）ICT业务",
						system_integration:{value:0,name:"其中:系统集成"},
						maintain_insurance:{value:0,name:"维保"}
					},
					IDC:{value:0,name:"（4）IDC业务"},
					cloud_comput:{value:0,name:"（5）云计算"},
					big_data:{value:0,name:"（6）大数据"},
					_other:{value:0,name:"（7）其他"}
				},
				store_business:{
					value:0,name:"3、存量业务",
					self_user_business:{
						value:0,name:"（1）自有用户业务",
						voice:{value:0,name:"其中：语音业务"},
						data:{value:0,name:"数据业务"},
						resource_rent:{
							value:0,name:"资源出租业务",
							cooparate_build:{value:0,name:"其中：合建"}
						},
						in_network:{value:0,name:"网内结算"},
						between_network:{value:0,name:"网间结算"},
						_other:{value:0,name:"其他"}
					},
					resource_using_fee:{value:0,name:"（2）资源使用费"},
					user_change_compensation:{value:0,name:"（3）用户转网补偿"}
				}
			},
			measure_and_network_test_gain:{
				value:0,name:"四、计量及网络检测收入",
				instrument_measure:{value:0,name:"1、仪表计量检测服务"},
				network_5G_measure:{value:0,name:"2、5G网络检测服务"},
				wireless_network_measure:{value:0,name:"3、无线网络质量检测服务"},
				intnet_measure:{value:0,name:"4、互联网网络质量检测服务"},
				intnet_of_thing_measure:{value:0,name:"5、物联网设备检测服务"},
				other_measure:{value:0,name:"6、其他检测服务"}
			},
			other_gain:{
				value:0,name:"五、其他收入",
				sell_terminal_and_good:{value:0,name:"1、销售通信商品"},
				sell_equipment:{value:0,name:"2、销售通信设备"},
				rent_business:{value:0,name:"3、租赁业务"},
				software_service:{value:0,name:"4、软件服务"},
				tenement_manage:{value:0,name:"5、物业管理"},
				physica_distribution_service:{value:0,name:"6、物流服务"},
				_other:{value:0,name:"7、其他"}
			}
		}
	}
    export default {
        data () {
            return {
                time:"",//上传用
                table_index:0,
                all_file:[],
				show_up:false,
				tree:[],
				columns:[
					{
					title: '索引',
					key: 'index',
					width:35,
					},
					{
					title: '项目',
					key: 'name',
					minWidth:130
					},
					{
					title: '层次',
					key: 'level',
					width:35,
					},
					{
					title: '家庭客户',
					key: 'family',
					width:60,
					sortable:true,
					},
					{
					title: '中国移动',
					key: 'mobile',
					width:60,
					sortable:true,
					},
					{
					title: '中国电信',
					key: 'telecom',
					width:60,
					sortable:true,
					},
					{
					title: '中国联通',
					key: 'unicom',
					width:60,
					sortable:true,
					},
					{
					title: '中国铁路总公司',
					key: 'railway',
					width:90,
					sortable:true,
					},
					{
					title: '中国铁塔',
					key: 'tower',
					width:60,
					sortable:true,
					},
					{
					title: '地铁公司',
					key: 'metro',
					width:60,
					sortable:true,
					},
					{
					title: '其他',
					key: 'other',
					width:60,
					sortable:true,
					},
				],
				index:0,
				table_data:[],
				table_data_show:[],
                file:{
                        author:"",
                        time:"",
                        business_gain_total:{
                            family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"营业收入总计",
                            network_manage_technology_service_cost:{
                                family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"一、网络管理技术服务收入",
                                family_customer_manage:{
                                    family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"1、家庭客户管理技术服务",
                                    open_dubug_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    technology_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                },
                                group_customer_manage:{
                                    family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                    open_dubug_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    technology_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                },
                                base_station_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                optical_cable_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                WLAN_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                iron_tower_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                IDC_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                network_optimize:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                network_resource_check_and_maintain:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                family_group_network_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                intellectual_product_fix:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                room_diliver_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                other_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                            },
                            project_service:{
                                family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                project:{
                                    family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                    project_group:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    project_family:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    project_transfer_pipe:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    equipment_install:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    room_diliver:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    WLAN:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    ICT:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    IDC:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    _other:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                },
                                design_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                project_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                project_watch:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                _other:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                            },
                            market_bussiness_service_gain:{
                                family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                sell_service:{
                                    family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                    _family:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    person:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    group:{
                                        family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                        ICT:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        medium_small_company:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        infomatization_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                    },
                                    intnet_business:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    oprate_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    _other:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                },
                                service_support:{
                                    family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                    medium_small_company_support:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                   group_support:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    ICT:{
                                        family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                        system_integration:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        maintain_insurance:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                    },
                                    IDC:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    cloud_comput:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    big_data:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    _other:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                },
                                store_business:{
                                    family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                    self_user_business:{
                                        family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                        voice:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        data:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        resource_rent:{
                                            family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                            cooparate_build:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                        },
                                        in_network:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        between_network:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                        _other:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                    },
                                    resource_using_fee:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                    user_change_compensation:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                                }
                            },
                            measure_and_network_test_gain:{
                                family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                instrument_measure:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                network_5G_measure:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                wireless_network_measure:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                intnet_measure:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                intnet_of_thing_measure:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                other_measure:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                            },
                            other_gain:{
                                family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:"",
                                sell_terminal_and_good:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                sell_equipment:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                rent_business:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                software_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                tenement_manage:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                physica_distribution_service:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""},
                                _other:{family:0,mobile:0,telecom:0,unicom:0,railway:0,tower:0,metro:0,other:0,name:""}
                            }
                        }
				},
				show_type:'table',
				now_node:[],
				option2 : {
					title: {
						text: '',
						textStyle:{
							color:'white'
						}
					},
					backgroundColor: "#344b58",
					"tooltip": {
						"trigger": "axis",
						"axisPointer": {
							"type": "shadow",
							textStyle: {
								color: "#fff"
							}

						},
					},
					"legend": {
						// x: '2%',
						top: '3%',
						left:"2%",
						padding:5,
						textStyle: {
							color: '#90979c',
						},
						"data": ['机台移动率', '目标值']
					},
					
					"xAxis": [{
						"type": "category",
						"axisLine": {
							lineStyle: {
								color: '#90979c'
							}
						},
						"splitLine": {
							"show": false
						},
						"axisTick": {
							"show": false
						},
						"splitArea": {
							"show": false
						},
						"axisLabel": {
							"interval": 0,
							"rotate": -20,

						},
						"data": [],
					}],
					"yAxis": [{
						"type": "value",
						"splitLine": {
							"show": false
						},
						"axisLine": {
							lineStyle: {
								color: '#90979c'
							}
						},
						// "axisTick": {
						//     "show": true
						// },
						"axisLabel": {
							"interval": 0,
						},
						"splitArea": {
							"show": false
						},

					}],
					"series": [{
							// "name": "机台移动率",
							"type": "bar",
							"barMaxWidth": 35,
							"barGap": "10%",
							"itemStyle": {
								"normal": {
									"color": "rgba(255,144,128,1)",
									"label": {
										"show": true,
										"textStyle": {
											"color": "#fff"
										},
										"position": "top",
									}
								}
							},
							"data": [],
						},
					]
				},
        　　}
      },
        methods: {
            upload(){
                var elt = document.getElementById('tb_3');
                var data = XLSX.utils.table_to_book(elt, {sheet:"sheet1"}).Sheets.sheet1
                data = read_business_gain(data)
                util._fetch('finance/','POST',{"data":data,"table_name":"营业收入明细表-分市场","date":this.time})
                .then(res=>{
                    console.log(res)
                    this.init()
                    this.$Message.success("成功")
				})
				document.getElementById("file").value=''
            },
            get_blank(e){
                for(let i in e){
                    if(e[i]!=" ")return i
                }
                return 0
            },
            file1(e){
                console.log("aa")
                var that = this
                //拿到所导入文件的名字
                let fileName = e.target.files[0]
                //定义reader，存放文件读取方法
                let reader = new FileReader()
                //启动函数
                reader.readAsBinaryString(fileName)
                //onload在文件被读取时自动触发
                reader.onload = function(e) {
                    // console.log(e)
                    let workbook = XLSX.read(e.target.result, {type: 'binary'})
                    // console.log(workbook.Sheets)
                    var f
                    for(let i in workbook.Sheets){
                        f = workbook.Sheets[i]
                        break
                    }
                    for(let i in f){
                        if(i=='!margins'||i=='!ref')continue
                        if(typeof(f[i].h)=='string'){
                            f[i].h = f[i].h.replace(/\s/g,"|_|")
                            f[i].h = f[i].h.replace(/\t/g,"|_||_||_|")
                        }
                    }
                    that.file=read_business_gain(f)
					that.index=1
					// that.table_data = that.create_table(that.file,project,0)
					// that.table_data_show = that.create_table(that.file,project,0)
					// that.tree_select(that.now_node)
                    // document.getElementById("box").innerHTML = XLSX.utils.sheet_to_html(f, {editable:true})
                    // .replace(/<table/g, '<table id="tb_3" cellspacing="0" border="1"')
                    // .replace(/\|_\|/g, '&nbsp;')
                    // console.log(XLSX.utils.sheet_to_html(f, {editable:true})
                    // .replace(/<table/g, '<table id="tb_3" cellspacing="0" border="1"')
                    // .replace(/\|_\|/g, '&nbsp;'))
                    // that.file = read(f)
                };
            },
			create_tree(data){
				let tree=[]
				for(let i in data){
					if(i=='value'||i=='name')continue
					this.index++
					let p_temp={
						title: data[i].name ?
						data[i].name +'['+this.index+']'
						: 
						i +'['+this.index+']',
						expand:true,
						code:i,
						index:this.index,
						children:this.create_tree(data[i]),
					}
					tree.push(p_temp)
				}
				return tree
			},
			create_table(data,project1,level) {
				let temp=[]
				let xlist=['family','mobile','telecom','unicom','railway','tower','metro','_other','name','value']
				for(let i in project1){
					if(i=='value'||i=='name')continue
					// console.log(i)
					temp.push({
						"name":project1[i].name,
						"level":level,
						"index":this.index,
						"family":data[i].family,
						"mobile":data[i].mobile,
						"telecom":data[i].telecom,
						"unicom":data[i].unicom,
						"railway":data[i].railway,
						"tower":data[i].tower,
						"metro":data[i].metro,
						"other":data[i].other,
						"cellClassName":this.get_cell_class(level)
						})
					this.index++
					// console.log(data[i])
					if(project1[i].name){
						// console.log(data[i].name)
						temp=temp.concat(this.create_table(data[i],project1[i],level+1)) 
					}
				}
				return temp
			},
			tree_select(e){
				this.now_node=e
				if(e.length==0){
					this.table_data_show=this.table_data
					this.update_echart(this.table_data[0])
					return
				}
				// console.log(this.table_data)
				let list=[]
				let index=e[0].index-1
				let lv=this.table_data[index].level
				this.update_echart(this.table_data[index])
				do{
					list.push(this.table_data[index])
					index++
				}while(index<this.table_data.length&&this.table_data[index].level>lv)
				// console.log(list)
				this.table_data_show=list
			},
			get_cell_class(level){
				return {
					name:'space'+level
				}
			},
			show(e){
				this.show_type=e
			},
			update_echart(e){
      			this.option2.title.text=this.now_node[0]?this.now_node[0].title:this.tree[0].title
				let temp=[]
				for(let i in e){
					if(i=='index'||i=='name'||i=='level')continue
					temp.push(e[i])
				}
				this.option2.series[0].data=temp
			},
            change_time(e){
                this.table_data = this.all_file[e].data
				this.table_data_show = this.all_file[e].data
				let index = this.now_node[0].index-1
				this.update_echart(this.table_data[index])
            },
            init(){
                util._fetch('finance/OperatingIncomeMarket','get')
                .then(res=>{
					console.log(res)
					if(res.length<=0)return
                    let dates = []
                    for(let i of res){
                        dates.unshift(i.date.slice(0,7))
                    }
                    this.file = JSON.parse(res[0].data.replace(/'/g,'"'))
                    this.index= 1
                    this.table_data = this.create_table(this.file,project,0)
                    this.table_data_show = this.table_data
					this.update_echart(this.table_data_show[0])
                    new Promise(()=>{
                        let index_table = 0
                        this.all_file = []
                        for(let i of res){
                            this.index= 1
                            let file = JSON.parse(i.data.replace(/'/g,'"'))
                            i.data = this.create_table(file,project,0)
                            i.index = index_table
                            index_table++
                            this.all_file.push(i)
                        }
                        console.log("111",this.all_file)
                    })
                })
            },
            remove(){
                this.$Modal.confirm({
                    title:"提示",
                    content:"确认删除"+this.all_file[this.table_index].date.slice(0,7)+"的表格数据吗，删除无法恢复",
                    onOk:()=>{
                        util._fetch('finance/OperatingIncomeMarket?id='+this.all_file[this.table_index].id,'delete')
                        .then(res=>{
                            console.log(res)
                            if(typeof(res)=='Array'){
                                this.$Message.success("删除成功")
                            }
                            else{
                                this.$Message.success("错误")
                            }
                            this.init()
                        })
                    }
                })
                
            }
        },
        mounted(){
			this.tree=this.create_tree(project)
			this.now_node=[this.tree[0]]
			let temp=[]
			for(let i of this.columns.slice(3)){
				temp.push(i.title)
			}
			// console.log(this.tree)
			this.option2.xAxis[0].data=temp
			this.init()
        }
       
    }
</script>
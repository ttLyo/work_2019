<template>
  <div class="animated fadeIn">
    <Row>
      <Col  :lg="7">
        <div>
            <Tree @on-select-change="tree_select" :data="tree" class="tree"></Tree>
        </div>
      </Col>
      <Col :lg="17">
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
            <!-- <Button type="info" style="margin-left:10px" @click="upload">确认上传</Button> -->
            <DatePicker v-model="time" type="month"/>
            <!-- @on-change="set_up_time" -->
            <div id="box">
                <h1 style="text-align:center">营业收入明细表</h1>
                <h6 style="text-align:center">{{file.author}} {{file.time}}</h6>
                <table id="tb_3" cellspacing="0">
                    <tr style="display:none"><td colspan="4" t="s" id="sjs-A1"><span contenteditable="true">营业收入明细表</span></td><td><span contenteditable="true"></span></td></tr>
                    <tr style="display:none"><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-D2"><span contenteditable="true">会铁通月0401表</span></td><td><span contenteditable="true"></span></td></tr>
                    <tr style="display:none"><td t="s" id="sjs-A3"><span contenteditable="true">{{file.author}}</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-D3"><span contenteditable="true">{{file.time}}</span></td><td><span contenteditable="true"></span></td></tr>
                    <tr><td t="s" id="sjs-A4"><span contenteditable="true">栏次</span></td><td t="s" id="sjs-B4"><span contenteditable="true">行次</span></td><td t="s" id="sjs-C4"><span contenteditable="true">本月数</span></td><td t="s" id="sjs-D4"><span contenteditable="true">本年累计</span></td><td t="s" id="sjs-E4"><span contenteditable="true">报表科目</span></td></tr>
                    <tr><td t="s" id="sjs-A5"><span contenteditable="true">营业收入总计</span></td><td t="s" id="sjs-B5"><span contenteditable="true">1</span></td><td t="n" id="sjs-C5"><span contenteditable="true"> 
                        {{file.business_gain_total.m}}
                        </span></td><td t="n" id="sjs-D5"><span contenteditable="true"> 
                        {{file.business_gain_total.y}} 
                        </span></td><td t="s" id="sjs-E5"><span contenteditable="true">KTT0401Z001</span></td></tr>

                    <tr><td t="s" id="sjs-A6"><span contenteditable="true">一、网络管理技术服务收入</span></td><td t="s" id="sjs-B6"><span contenteditable="true">2</span></td><td t="n" id="sjs-C6"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.m}} 
                        </span></td><td t="n" id="sjs-D6"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.y}} 
                        </span></td><td t="s" id="sjs-E6"><span contenteditable="true">KTT0401Z002</span></td></tr>

                    <tr><td t="s" id="sjs-A7"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、家庭客户管理技术服务</span></td><td t="s" id="sjs-B7"><span contenteditable="true">3</span></td><td t="n" id="sjs-C7"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.m}} 
                        </span></td><td t="n" id="sjs-D7"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.y}}
                        </span></td><td t="s" id="sjs-E7"><span contenteditable="true">KTT0401Z003</span></td></tr>

                    <tr><td t="s" id="sjs-A8"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）开通调试服务</span></td><td t="s" id="sjs-B8"><span contenteditable="true">4</span></td><td t="n" id="sjs-C8"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.m}}
                        </span></td><td t="n" id="sjs-D8"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.open_dubug_service.y}}
                        </span></td><td t="s" id="sjs-E8"><span contenteditable="true">KTT0401Z004</span></td></tr>

                    <tr><td t="s" id="sjs-A9"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）技术服务</span></td><td t="s" id="sjs-B9"><span contenteditable="true">5</span></td><td t="n" id="sjs-C9"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.m}}
                        </span></td><td t="n" id="sjs-D9"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_customer_manage.technology_service.y}}
                        </span></td><td t="s" id="sjs-E9"><span contenteditable="true">KTT0401Z005</span></td></tr>

                    <tr><td t="s" id="sjs-A10"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、集团客户管理技术服务</span></td><td t="s" id="sjs-B10"><span contenteditable="true">6</span></td><td t="n" id="sjs-C10"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.m}} 
                        </span></td><td t="n" id="sjs-D10"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.y}}
                        </span></td><td t="s" id="sjs-E10"><span contenteditable="true">KTT0401Z006</span></td></tr>

                    <tr><td t="s" id="sjs-A11"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）开通调试服务</span></td><td t="s" id="sjs-B11"><span contenteditable="true">7</span></td><td t="n" id="sjs-C11"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.m}} 
                        </span></td><td t="n" id="sjs-D11"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.open_dubug_service.y}}
                        </span></td><td t="s" id="sjs-E11"><span contenteditable="true">KTT0401Z007</span></td></tr>
                    <tr><td t="s" id="sjs-A12"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）技术服务</span></td><td t="s" id="sjs-B12"><span contenteditable="true">8</span></td><td t="n" id="sjs-C12"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.m}}
                        </span></td><td t="n" id="sjs-D12"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.group_customer_manage.technology_service.y}}
                        </span></td><td t="s" id="sjs-E12"><span contenteditable="true">KTT0401Z008</span></td></tr>

                    <tr><td t="s" id="sjs-A13"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、基站管理技术服务</span></td><td t="s" id="sjs-B13"><span contenteditable="true">9</span></td><td t="n" id="sjs-C13"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.m}} 
                        </span></td><td t="n" id="sjs-D13"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.base_station_manage.y}}
                        </span></td><td t="s" id="sjs-E13"><span contenteditable="true">KTT0401Z009</span></td></tr>

                    <tr><td t="s" id="sjs-A14"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、光缆管理技术服务</span></td><td t="s" id="sjs-B14"><span contenteditable="true">10</span></td><td t="n" id="sjs-C14"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.m}} 
                        </span></td><td t="n" id="sjs-D14"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.optical_cable_manage.y}}
                        </span></td><td t="s" id="sjs-E14"><span contenteditable="true">KTT0401Z010</span></td></tr>

                    <tr><td t="s" id="sjs-A15"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、WLAN管理技术服务</span></td><td t="s" id="sjs-B15"><span contenteditable="true">11</span></td><td t="n" id="sjs-C15"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.m}} 
                        </span></td><td t="n" id="sjs-D15"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.WLAN_manage.y}} 
                        </span></td><td t="s" id="sjs-E15"><span contenteditable="true">KTT0401Z011</span></td></tr>

                    <tr><td t="s" id="sjs-A16"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;6、铁塔管理技术服务</span></td><td t="s" id="sjs-B16"><span contenteditable="true">12</span></td><td t="n" id="sjs-C16"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.m}} 
                        </span></td><td t="n" id="sjs-D16"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.iron_tower_manage.y}} 
                        </span></td><td t="s" id="sjs-E16"><span contenteditable="true">KTT0401Z012</span></td></tr>

                    <tr><td t="s" id="sjs-A17"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;7、IDC管理技术服务</span></td><td t="s" id="sjs-B17"><span contenteditable="true">13</span></td><td t="n" id="sjs-C17"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.m}} 
                        </span></td><td t="n" id="sjs-D17"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.IDC_manage.y}} 
                        </span></td><td t="s" id="sjs-E17"><span contenteditable="true">KTT0401Z013</span></td></tr>

                    <tr><td t="s" id="sjs-A18"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;8、网络优化技术服务</span></td><td t="s" id="sjs-B18"><span contenteditable="true">14</span></td><td t="n" id="sjs-C18"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.network_optimize.m}} 
                        </span></td><td t="n" id="sjs-D18"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.network_optimize.y}} 
                        </span></td><td t="s" id="sjs-E18"><span contenteditable="true">KTT0401Z014</span></td></tr>

                    <tr><td t="s" id="sjs-A19"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;9、网络资源核查与数据维护技术服务</span></td><td t="s" id="sjs-B19"><span contenteditable="true">15</span></td><td t="n" id="sjs-C19"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.m}} 
                        </span></td><td t="n" id="sjs-D19"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.network_resource_check_and_maintain.y}} 
                        </span></td><td t="s" id="sjs-E19"><span contenteditable="true">KTT0401Z015</span></td></tr>

                    <tr><td t="s" id="sjs-A20"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;10、能家居组网服务</span></td><td t="s" id="sjs-B20"><span contenteditable="true">16</span></td><td t="n" id="sjs-C20"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.m}} 
                        </span></td><td t="n" id="sjs-D20"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.family_group_network_service.y}} 
                        </span></td><td t="s" id="sjs-E20"><span contenteditable="true">KTT0401Z067</span></td></tr>

                    <tr><td t="s" id="sjs-A21"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;11、智能产品维修服务</span></td><td t="s" id="sjs-B21"><span contenteditable="true">17</span></td><td t="n" id="sjs-C21"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.m}} 
                        </span></td><td t="n" id="sjs-D21"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.intellectual_product_fix.y}} 
                        </span></td><td t="s" id="sjs-E21"><span contenteditable="true">KTT0401Z068</span></td></tr>

                    <tr><td t="s" id="sjs-A22"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;12、室分管理技术服务</span></td><td t="s" id="sjs-B22"><span contenteditable="true">18</span></td><td t="n" id="sjs-C22"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.m}} 
                        </span></td><td t="n" id="sjs-D22"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.room_diliver_manage.y}} 
                        </span></td><td t="s" id="sjs-E22"><span contenteditable="true">KTT0401Z069</span></td></tr>
                    <tr><td t="s" id="sjs-A23"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;13、其他网络管理技术服务</span></td><td t="s" id="sjs-B23"><span contenteditable="true">19</span></td><td t="n" id="sjs-C23"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.other_manage.m}}
                        </span></td><td t="n" id="sjs-D23"><span contenteditable="true"> 
                        {{file.business_gain_total.network_manage_technology_service_cost.other_manage.y}}
                        </span></td><td t="s" id="sjs-E23"><span contenteditable="true">KTT0401Z016</span></td></tr>

                    <tr><td t="s" id="sjs-A24"><span contenteditable="true">二、工程建设与服务收入</span></td><td t="s" id="sjs-B24"><span contenteditable="true">20</span></td><td t="n" id="sjs-C24"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.m}}
                        </span></td><td t="n" id="sjs-D24"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.y}}
                        </span></td><td t="s" id="sjs-E24"><span contenteditable="true">KTT0401Z017</span></td></tr>

                    <tr><td t="s" id="sjs-A25"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、工程建设</span></td><td t="s" id="sjs-B25"><span contenteditable="true">21</span></td><td t="n" id="sjs-C25"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.m}}
                        </span></td><td t="n" id="sjs-D25"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.y}}
                        </span></td><td t="s" id="sjs-E25"><span contenteditable="true">KTT0401Z018</span></td></tr>

                    <tr><td t="s" id="sjs-A26"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）工程建设-集客</span></td><td t="s" id="sjs-B26"><span contenteditable="true">22</span></td><td t="n" id="sjs-C26"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.project_group.m}}
                        </span></td><td t="n" id="sjs-D26"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.project_group.y}}
                        </span></td><td t="s" id="sjs-E26"><span contenteditable="true">KTT0401Z01801</span></td></tr>

                    <tr><td t="s" id="sjs-A27"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）工程建设-家客</span></td><td t="s" id="sjs-B27"><span contenteditable="true">23</span></td><td t="n" id="sjs-C27"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.project_family.m}}
                        </span></td><td t="n" id="sjs-D27"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.project_family.y}}
                        </span></td><td t="s" id="sjs-E27"><span contenteditable="true">KTT0401Z01802</span></td></tr>

                    <tr><td t="s" id="sjs-A28"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）工程建设-传输管线业务</span></td><td t="s" id="sjs-B28"><span contenteditable="true">24</span></td><td t="n" id="sjs-C28"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.project_transfer_pipe.m}}
                        </span></td><td t="n" id="sjs-D28"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.project_transfer_pipe.y}}
                        </span></td><td t="s" id="sjs-E28"><span contenteditable="true">KTT0401Z01803</span></td></tr>

                    <tr><td t="s" id="sjs-A29"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）设备安装及配套服务</span></td><td t="s" id="sjs-B29"><span contenteditable="true">25</span></td><td t="n" id="sjs-C29"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.equipment_install.m}}
                        </span></td><td t="n" id="sjs-D29"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.equipment_install.y}}
                        </span></td><td t="s" id="sjs-E29"><span contenteditable="true">KTT0401Z01804</span></td></tr>

                    <tr><td t="s" id="sjs-A30"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）室分业务</span></td><td t="s" id="sjs-B30"><span contenteditable="true">26</span></td><td t="n" id="sjs-C30"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.room_diliver.m}}
                        </span></td><td t="n" id="sjs-D30"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.room_diliver.y}}
                        </span></td><td t="s" id="sjs-E30"><span contenteditable="true">KTT0401Z01805</span></td></tr>

                    <tr><td t="s" id="sjs-A31"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）WLAN业务</span></td><td t="s" id="sjs-B31"><span contenteditable="true">27</span></td><td t="n" id="sjs-C31"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.WLAN.m}}
                        </span></td><td t="n" id="sjs-D31"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.WLAN.y}}
                        </span></td><td t="s" id="sjs-E31"><span contenteditable="true">KTT0401Z01806</span></td></tr>

                    <tr><td t="s" id="sjs-A32"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（7）ICT业务</span></td><td t="s" id="sjs-B32"><span contenteditable="true">28</span></td><td t="n" id="sjs-C32"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.ICT.m}}
                        </span></td><td t="n" id="sjs-D32"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.ICT.y}}
                        </span></td><td t="s" id="sjs-E32"><span contenteditable="true">KTT0401Z01807</span></td></tr>

                    <tr><td t="s" id="sjs-A33"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（8）IDC业务</span></td><td t="s" id="sjs-B33"><span contenteditable="true">29</span></td><td t="n" id="sjs-C33"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.IDC.m}}
                        </span></td><td t="n" id="sjs-D33"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.IDC.y}}
                        </span></td><td t="s" id="sjs-E33"><span contenteditable="true">KTT0401Z01808</span></td></tr>
                    <tr><td t="s" id="sjs-A34"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（9）其他</span></td><td t="s" id="sjs-B34"><span contenteditable="true">30</span></td><td t="n" id="sjs-C34"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.other.m}}
                        </span></td><td t="n" id="sjs-D34"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project.other.y}}
                        </span></td><td t="s" id="sjs-E34"><span contenteditable="true">KTT0401Z01809</span></td></tr>

                    <tr><td t="s" id="sjs-A35"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、设计服务</span></td><td t="s" id="sjs-B35"><span contenteditable="true">31</span></td><td t="n" id="sjs-C35"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.design_service.m}}
                        </span></td><td t="n" id="sjs-D35"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.design_service.y}}
                        </span></td><td t="s" id="sjs-E35"><span contenteditable="true">KTT0401Z019</span></td></tr>
                    <tr><td t="s" id="sjs-A36"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、工程管理服务</span></td><td t="s" id="sjs-B36"><span contenteditable="true">32</span></td><td t="n" id="sjs-C36"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project_manage.m}}
                        </span></td><td t="n" id="sjs-D36"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project_manage.y}}
                        </span></td><td t="s" id="sjs-E36"><span contenteditable="true">KTT0401Z021</span></td></tr>
                    <tr><td t="s" id="sjs-A37"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、工程监理服务</span></td><td t="s" id="sjs-B37"><span contenteditable="true">33</span></td><td t="n" id="sjs-C37"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project_watch.m}}
                        </span></td><td t="n" id="sjs-D37"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.project_watch.y}}
                        </span></td><td t="s" id="sjs-E37"><span contenteditable="true">KTT0401Z070</span></td></tr>

                    <tr><td t="s" id="sjs-A38"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、其他</span></td><td t="s" id="sjs-B38"><span contenteditable="true">34</span></td><td t="n" id="sjs-C38"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.other.m}}
                        </span></td><td t="n" id="sjs-D38"><span contenteditable="true"> 
                        {{file.business_gain_total.project_service.other.y}}
                        </span></td><td t="s" id="sjs-E38"><span contenteditable="true">KTT0401Z022</span></td></tr>

                    <tr><td t="s" id="sjs-A39"><span contenteditable="true">三、市场营销服务收入</span></td><td t="s" id="sjs-B39"><span contenteditable="true">35</span></td><td t="n" id="sjs-C39"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.m}}
                        </span></td><td t="n" id="sjs-D39"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.y}}
                        </span></td><td t="s" id="sjs-E39"><span contenteditable="true">KTT0401Z023</span></td></tr>

                    <tr><td t="s" id="sjs-A40"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、代售业务</span></td><td t="s" id="sjs-B40"><span contenteditable="true">36</span></td><td t="n" id="sjs-C40"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.m}}
                        </span></td><td t="n" id="sjs-D40"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.y}}
                        </span></td><td t="s" id="sjs-E40"><span contenteditable="true">KTT0401Z024</span></td></tr>
                    <tr><td t="s" id="sjs-A41"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）家庭业务</span></td><td t="s" id="sjs-B41"><span contenteditable="true">37</span></td><td t="n" id="sjs-C41"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.family.m}}
                        </span></td><td t="n" id="sjs-D41"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.family.y}}
                        </span></td><td t="s" id="sjs-E41"><span contenteditable="true">KTT0401Z025</span></td></tr>

                    <tr><td t="s" id="sjs-A42"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）个人业务</span></td><td t="s" id="sjs-B42"><span contenteditable="true">38</span></td><td t="n" id="sjs-C42"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.person.m}}
                        </span></td><td t="n" id="sjs-D42"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.person.y}}
                        </span></td><td t="s" id="sjs-E42"><span contenteditable="true">KTT0401Z026</span></td></tr>
                    <tr><td t="s" id="sjs-A43"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）集客业务</span></td><td t="s" id="sjs-B43"><span contenteditable="true">39</span></td><td t="n" id="sjs-C43"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.m}}
                        </span></td><td t="n" id="sjs-D43"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.y}}
                        </span></td><td t="s" id="sjs-E43"><span contenteditable="true">KTT0401Z027</span></td></tr>

                    <tr><td t="s" id="sjs-A44"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：ICT业务</span></td><td t="s" id="sjs-B44"><span contenteditable="true">40</span></td><td t="n" id="sjs-C44"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.m}}
                        </span></td><td t="n" id="sjs-D44"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.ICT.y}}
                        </span></td><td t="s" id="sjs-E44"><span contenteditable="true">KTT0401Z028</span></td></tr>

                    <tr><td t="s" id="sjs-A45"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中小企业拓保</span></td><td t="s" id="sjs-B45"><span contenteditable="true">41</span></td><td t="n" id="sjs-C45"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.m}}
                        </span></td><td t="n" id="sjs-D45"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.medium_small_company.y}}
                        </span></td><td t="s" id="sjs-E45"><span contenteditable="true">KTT0401Z029</span></td></tr>

                    <tr><td t="s" id="sjs-A46"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息化服务</span></td><td t="s" id="sjs-B46"><span contenteditable="true">42</span></td><td t="n" id="sjs-C46"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.m}}
                        </span></td><td t="n" id="sjs-D46"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.group.infomatization_service.y}}
                        </span></td><td t="s" id="sjs-E46"><span contenteditable="true">KTT0401Z071</span></td></tr>

                    <tr><td t="s" id="sjs-A47"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）互联网业务</span></td><td t="s" id="sjs-B47"><span contenteditable="true">43</span></td><td t="n" id="sjs-C47"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.m}}
                        </span></td><td t="n" id="sjs-D47"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.intnet_business.y}}
                        </span></td><td t="s" id="sjs-E47"><span contenteditable="true">KTT0401Z030</span></td></tr>

                    <tr><td t="s" id="sjs-A48"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）运营服务</span></td><td t="s" id="sjs-B48"><span contenteditable="true">44</span></td><td t="n" id="sjs-C48"><span contenteditable="true"> 
                    {{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.m}}
                        </span></td><td t="n" id="sjs-D48"><span contenteditable="true"> 
                    {{file.business_gain_total.market_bussiness_service_gain.sell_service.oprate_service.y}}
                        </span></td><td t="s" id="sjs-E48"><span contenteditable="true">KTT0401Z072</span></td></tr>

                    <tr><td t="s" id="sjs-A49"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）其他</span></td><td t="s" id="sjs-B49"><span contenteditable="true">45</span></td><td t="n" id="sjs-C49"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.other.m}}
                        </span></td><td t="n" id="sjs-D49"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.sell_service.other.y}}
                        </span></td><td t="s" id="sjs-E49"><span contenteditable="true">KTT0401Z031</span></td></tr>

                    <tr><td t="s" id="sjs-A50"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、服务支撑业务</span></td><td t="s" id="sjs-B50"><span contenteditable="true">46</span></td><td t="n" id="sjs-C50"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.m}}
                        </span></td><td t="n" id="sjs-D50"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.y}}
                        </span></td><td t="s" id="sjs-E50"><span contenteditable="true">KTT0401Z032</span></td></tr>

                    <tr><td t="s" id="sjs-A51"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）中小企业一体化支撑服务</span></td><td t="s" id="sjs-B51"><span contenteditable="true">47</span></td><td t="n" id="sjs-C51"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.m}}
                        </span></td><td t="n" id="sjs-D51"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.medium_small_company_support.y}}
                        </span></td><td t="s" id="sjs-E51"><span contenteditable="true">KTT0401Z033</span></td></tr>

                    <tr><td t="s" id="sjs-A52"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）集客项目一体化支撑服务</span></td><td t="s" id="sjs-B52"><span contenteditable="true">48</span></td><td t="n" id="sjs-C52"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.m}}
                        </span></td><td t="n" id="sjs-D52"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.group_support.y}}
                        </span></td><td t="s" id="sjs-E52"><span contenteditable="true">KTT0401Z034</span></td></tr>

                    <tr><td t="s" id="sjs-A53"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）ICT业务</span></td><td t="s" id="sjs-B53"><span contenteditable="true">49</span></td><td t="n" id="sjs-C53"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.m}}
                        </span></td><td t="n" id="sjs-D53"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.y}}
                        </span></td><td t="s" id="sjs-E53"><span contenteditable="true">KTT0401Z035</span></td></tr>

                    <tr><td t="s" id="sjs-A54"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:系统集成</span></td><td t="s" id="sjs-B54"><span contenteditable="true">50</span></td><td t="n" id="sjs-C54"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.m}}
                        </span></td><td t="n" id="sjs-D54"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.system_integration.y}}
                        </span></td><td t="s" id="sjs-E54"><span contenteditable="true">KTT0401Z036</span></td></tr>

                    <tr><td t="s" id="sjs-A55"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;维保</span></td><td t="s" id="sjs-B55"><span contenteditable="true">51</span></td><td t="n" id="sjs-C55"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.m}}
                        </span></td><td t="n" id="sjs-D55"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.ICT.maintain_insurance.y}}
                        </span></td><td t="s" id="sjs-E55"><span contenteditable="true">KTT0401Z037</span></td></tr>

                    <tr><td t="s" id="sjs-A56"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）IDC业务</span></td><td t="s" id="sjs-B56"><span contenteditable="true">52</span></td><td t="n" id="sjs-C56"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.m}}
                        </span></td><td t="n" id="sjs-D56"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.IDC.y}}
                        </span></td><td t="s" id="sjs-E56"><span contenteditable="true">KTT0401Z038</span></td></tr>

                    <tr><td t="s" id="sjs-A57"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）云计算</span></td><td t="s" id="sjs-B57"><span contenteditable="true">53</span></td><td t="n" id="sjs-C57"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.m}}
                        </span></td><td t="n" id="sjs-D57"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.cloud_comput.y}}
                        </span></td><td t="s" id="sjs-E57"><span contenteditable="true">KTT0401Z039</span></td></tr>

                    <tr><td t="s" id="sjs-A58"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（6）大数据</span></td><td t="s" id="sjs-B58"><span contenteditable="true">54</span></td><td t="n" id="sjs-C58"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.m}}
                        </span></td><td t="n" id="sjs-D58"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.big_data.y}}
                        </span></td><td t="s" id="sjs-E58"><span contenteditable="true">KTT0401Z040</span></td></tr>

                    <tr><td t="s" id="sjs-A59"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（7）其他</span></td><td t="s" id="sjs-B59"><span contenteditable="true">55</span></td><td t="n" id="sjs-C59"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.other.m}}
                        </span></td><td t="n" id="sjs-D59"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.service_support.other.y}}
                        </span></td><td t="s" id="sjs-E59"><span contenteditable="true">KTT0401Z041</span></td></tr>

                    <tr><td t="s" id="sjs-A60"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、存量业务</span></td><td t="s" id="sjs-B60"><span contenteditable="true">56</span></td><td t="n" id="sjs-C60"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.m}}
                        </span></td><td t="n" id="sjs-D60"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.y}}
                        </span></td><td t="s" id="sjs-E60"><span contenteditable="true">KTT0401Z042</span></td></tr>

                    <tr><td t="s" id="sjs-A61"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）自有用户业务</span></td><td t="s" id="sjs-B61"><span contenteditable="true">57</span></td><td><span contenteditable="true">
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.m}}
                        </span></td><td t="n" id="sjs-D61"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.y}}
                        </span></td><td t="s" id="sjs-E61"><span contenteditable="true">KTT0401Z043</span></td></tr>

                    <tr><td t="s" id="sjs-A62"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：语音业务</span></td><td t="s" id="sjs-B62"><span contenteditable="true">58</span></td><td t="n" id="sjs-C62"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.m}}
                        </span></td><td t="n" id="sjs-D62"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.voice.y}}
                        </span></td><td t="s" id="sjs-E62"><span contenteditable="true">KTT0401Z044</span></td></tr>

                    <tr><td t="s" id="sjs-A63"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据业务</span></td><td t="s" id="sjs-B63"><span contenteditable="true">59</span></td><td t="n" id="sjs-C63"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.m}}
                        </span></td><td t="n" id="sjs-D63"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.data.y}}
                        </span></td><td t="s" id="sjs-E63"><span contenteditable="true">KTT0401Z045</span></td></tr>

                    <tr><td t="s" id="sjs-A64"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资源出租业务</span></td><td t="s" id="sjs-B64"><span contenteditable="true">60</span></td><td t="n" id="sjs-C64"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.m}}
                        </span></td><td t="n" id="sjs-D64"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.y}}
                        </span></td><td t="s" id="sjs-E64"><span contenteditable="true">KTT0401Z046</span></td></tr>

                    <tr><td t="s" id="sjs-A65"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：合建</span></td><td t="s" id="sjs-B65"><span contenteditable="true">61</span></td><td t="n" id="sjs-C65"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.m}}
                        </span></td><td t="n" id="sjs-D65"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.resource_rent.cooparate_build.y}}
                        </span></td><td t="s" id="sjs-E65"><span contenteditable="true">KTT0401Z047</span></td></tr>

                    <tr><td t="s" id="sjs-A66"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网内结算</span></td><td t="s" id="sjs-B66"><span contenteditable="true">62</span></td><td t="n" id="sjs-C66"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.m}}
                        </span></td><td t="n" id="sjs-D66"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.in_network.y}}
                        </span></td><td t="s" id="sjs-E66"><span contenteditable="true">KTT0401Z048</span></td></tr>

                    <tr><td t="s" id="sjs-A67"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网间结算</span></td><td t="s" id="sjs-B67"><span contenteditable="true">63</span></td><td t="n" id="sjs-C67"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.m}}
                        </span></td><td t="n" id="sjs-D67"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.between_network.y}}
                        </span></td><td t="s" id="sjs-E67"><span contenteditable="true">KTT0401Z049</span></td></tr>

                    <tr><td t="s" id="sjs-A68"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-B68"><span contenteditable="true">64</span></td><td t="n" id="sjs-C68"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.other.m}}
                        </span></td><td t="n" id="sjs-D68"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.self_user_business.other.y}}
                        </span></td><td t="s" id="sjs-E68"><span contenteditable="true">KTT0401Z050</span></td></tr>

                    <tr><td t="s" id="sjs-A69"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）资源使用费</span></td><td t="s" id="sjs-B69"><span contenteditable="true">65</span></td><td t="n" id="sjs-C69"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.m}}
                        </span></td><td t="n" id="sjs-D69"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.resource_using_fee.y}}
                        </span></td><td t="s" id="sjs-E69"><span contenteditable="true">KTT0401Z051</span></td></tr>

                    <tr><td t="s" id="sjs-A70"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）用户转网补偿</span></td><td t="s" id="sjs-B70"><span contenteditable="true">66</span></td><td t="n" id="sjs-C70"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.m}}
                        </span></td><td t="n" id="sjs-D70"><span contenteditable="true"> 
                        {{file.business_gain_total.market_bussiness_service_gain.store_business.user_change_compensation.y}}
                        </span></td><td t="s" id="sjs-E70"><span contenteditable="true">KTT0401Z052</span></td></tr>

                    <tr><td t="s" id="sjs-A71"><span contenteditable="true">四、计量及网络检测收入</span></td><td t="s" id="sjs-B71"><span contenteditable="true">67</span></td><td t="n" id="sjs-C71"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.m}}
                        </span></td><td t="n" id="sjs-D71"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.y}}
                        </span></td><td t="s" id="sjs-E71"><span contenteditable="true">KTT0401Z053</span></td></tr>

                    <tr><td t="s" id="sjs-A72"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、仪表计量检测服务</span></td><td t="s" id="sjs-B72"><span contenteditable="true">68</span></td><td t="n" id="sjs-C72"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.instrument_measure.m}}
                        </span></td><td t="n" id="sjs-D72"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.instrument_measure.y}}
                        </span></td><td t="s" id="sjs-E72"><span contenteditable="true">KTT0401Z054</span></td></tr>

                    <tr><td t="s" id="sjs-A73"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、5G网络检测服务</span></td><td t="s" id="sjs-B73"><span contenteditable="true">69</span></td><td t="n" id="sjs-C73"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.m}}
                        </span></td><td t="n" id="sjs-D73"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.network_5G_measure.y}}
                        </span></td><td t="s" id="sjs-E73"><span contenteditable="true">KTT0401Z055</span></td></tr>

                    <tr><td t="s" id="sjs-A74"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、无线网络质量检测服务</span></td><td t="s" id="sjs-B74"><span contenteditable="true">70</span></td><td t="n" id="sjs-C74"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.m}}
                        </span></td><td t="n" id="sjs-D74"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.wireless_network_measure.y}}
                        </span></td><td t="s" id="sjs-E74"><span contenteditable="true">KTT0401Z056</span></td></tr>

                    <tr><td t="s" id="sjs-A75"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、互联网网络质量检测服务</span></td><td t="s" id="sjs-B75"><span contenteditable="true">71</span></td><td t="n" id="sjs-C75"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.intnet_measure.m}}
                        </span></td><td t="n" id="sjs-D75"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.intnet_measure.y}}
                        </span></td><td t="s" id="sjs-E75"><span contenteditable="true">KTT0401Z057</span></td></tr>
                        
                    <tr><td t="s" id="sjs-A76"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、物联网设备检测服务</span></td><td t="s" id="sjs-B76"><span contenteditable="true">72</span></td><td t="n" id="sjs-C76"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.m}}
                        </span></td><td t="n" id="sjs-D76"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.intnet_of_thing_measure.y}}
                        </span></td><td t="s" id="sjs-E76"><span contenteditable="true">KTT0401Z058</span></td></tr>
                    <tr><td t="s" id="sjs-A77"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;6、其他检测服务</span></td><td t="s" id="sjs-B77"><span contenteditable="true">73</span></td><td t="n" id="sjs-C77"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.other_measure.m}}
                        </span></td><td t="n" id="sjs-D77"><span contenteditable="true"> 
                        {{file.business_gain_total.measure_and_network_test_gain.other_measure.y}}
                        </span></td><td t="s" id="sjs-E77"><span contenteditable="true">KTT0401Z059</span></td></tr>

                    <tr><td t="s" id="sjs-A78"><span contenteditable="true">五、其他收入</span></td><td t="s" id="sjs-B78"><span contenteditable="true">74</span></td><td t="n" id="sjs-C78"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.m}}
                        </span></td><td t="n" id="sjs-D78"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.y}}
                        </span></td><td t="s" id="sjs-E78"><span contenteditable="true">KTT0401Z060</span></td></tr>

                    <tr><td t="s" id="sjs-A79"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;1、销售终端和商品</span></td><td t="s" id="sjs-B79"><span contenteditable="true">75</span></td><td t="n" id="sjs-C79"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.sell_terminal_and_good.m}}
                        </span></td><td t="n" id="sjs-D79"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.sell_terminal_and_good.y}}
                        </span></td><td t="s" id="sjs-E79"><span contenteditable="true">KTT0401Z061</span></td></tr>

                    <tr><td t="s" id="sjs-A80"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;2、销售设备</span></td><td t="s" id="sjs-B80"><span contenteditable="true">76</span></td><td t="n" id="sjs-C80"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.sell_equipment.m}}
                        </span></td><td t="n" id="sjs-D80"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.sell_equipment.y}}
                        </span></td><td t="s" id="sjs-E80"><span contenteditable="true">KTT0401Z062</span></td></tr>

                    <tr><td t="s" id="sjs-A81"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;3、租赁业务</span></td><td t="s" id="sjs-B81"><span contenteditable="true">77</span></td><td t="n" id="sjs-C81"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.rent_business.m}}
                        </span></td><td t="n" id="sjs-D81"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.rent_business.y}}
                        </span></td><td t="s" id="sjs-E81"><span contenteditable="true">KTT0401Z063</span></td></tr>
                    <tr><td t="s" id="sjs-A82"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;4、软件服务</span></td><td t="s" id="sjs-B82"><span contenteditable="true">78</span></td><td t="n" id="sjs-C82"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.software_service.m}}
                        </span></td><td t="n" id="sjs-D82"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.software_service.y}}
                        </span></td><td t="s" id="sjs-E82"><span contenteditable="true">KTT0401Z064</span></td></tr>

                    <tr><td t="s" id="sjs-A83"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;5、物业管理</span></td><td t="s" id="sjs-B83"><span contenteditable="true">79</span></td><td t="n" id="sjs-C83"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.tenement_manage.m}}
                        </span></td><td t="n" id="sjs-D83"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.tenement_manage.y}}
                        </span></td><td t="s" id="sjs-E83"><span contenteditable="true">KTT0401Z065</span></td></tr>
                    <tr><td t="s" id="sjs-A84"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;6、物流服务</span></td><td t="s" id="sjs-B84"><span contenteditable="true">80</span></td><td t="n" id="sjs-C84"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.physica_distribution_service.m}}
                        </span></td><td t="n" id="sjs-D84"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.physica_distribution_service.y}}
                        </span></td><td t="s" id="sjs-E84"><span contenteditable="true">KTT0401Z073</span></td></tr>
                    <tr><td t="s" id="sjs-A85"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;7、其他</span></td><td t="s" id="sjs-B85"><span contenteditable="true">81</span></td><td t="n" id="sjs-C85"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.other.m}}
                        </span></td><td t="n" id="sjs-D85"><span contenteditable="true"> 
                        {{file.business_gain_total.other_gain.other.y}}
                        </span></td><td t="s" id="sjs-E85"><span contenteditable="true">KTT0401Z066</span></td></tr>

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
    import {read_business_gain} from "../../read_business_gain.js"
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
                    other:{value:0,name:"（9）其他"}
                },
                design_service:{value:0,name:"2、设计服务"},
                project_manage:{value:0,name:"3、工程管理服务"},
                project_watch:{value:0,name:"4、工程监理服务"},
                other:{value:0,name:"5、其他"}
            },
            market_bussiness_service_gain:{
                value:0,name:"三、市场营销服务收入",
                sell_service:{
                    value:0,name:"1、代售业务",
                    family:{value:0,name:"（1）家庭业务"},
                    person:{value:0,name:"（2）个人业务"},
                    group:{
                        value:0,name:"（3）集客业务",
                        ICT:{value:0,name:"其中：ICT业务"},
                        medium_small_company:{value:0,name:"中小企业拓保"},
                        infomatization_service:{value:0,name:"信息化服务"}
                    },
                    intnet_business:{value:0,name:"（4）互联网业务"},
                    oprate_service:{value:0,name:"（5）运营服务"},
                    other:{value:0,name:"（6）其他"}
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
                    other:{value:0,name:"（7）其他"}
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
                        other:{value:0,name:"其他"}
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
                other:{value:0,name:"7、其他"}
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
				index:0,
				table_data:[],
				table_data_show:[],
				show_type:'table',
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
					title: '本月数',
					key: 'month',
					width:150,
					sortable:true,
					},
					{
					title: '本年累计',
					key: 'year',
					width:150,
					sortable:true,
					},
				],
                file:{
                        author:"",
                        time:"",
                        business_gain_total:{
                            m:0,y:0,
                            network_manage_technology_service_cost:{
                                m:0,y:0,
                                family_customer_manage:{
                                    m:0,y:0,
                                    open_dubug_service:{m:0,y:0},
                                    technology_service:{m:0,y:0}
                                },
                                group_customer_manage:{
                                    m:0,y:0,
                                    open_dubug_service:{m:0,y:0},
                                    technology_service:{m:0,y:0}
                                },
                                base_station_manage:{m:0,y:0},
                                optical_cable_manage:{m:0,y:0},
                                WLAN_manage:{m:0,y:0},
                                iron_tower_manage:{m:0,y:0},
                                IDC_manage:{m:0,y:0},
                                network_optimize:{m:0,y:0},
                                network_resource_check_and_maintain:{m:0,y:0},
                                family_group_network_service:{m:0,y:0},
                                intellectual_product_fix:{m:0,y:0},
                                room_diliver_manage:{m:0,y:0},
                                other_manage:{m:0,y:0}
                            },
                            project_service:{
                                m:0,y:0,
                                project:{
                                    m:0,y:0,
                                    project_group:{m:0,y:0},
                                    project_family:{m:0,y:0},
                                    project_transfer_pipe:{m:0,y:0},
                                    equipment_install:{m:0,y:0},
                                    room_diliver:{m:0,y:0},
                                    WLAN:{m:0,y:0},
                                    ICT:{m:0,y:0},
                                    IDC:{m:0,y:0},
                                    other:{m:0,y:0}
                                },
                                design_service:{m:0,y:0},
                                project_manage:{m:0,y:0},
                                project_watch:{m:0,y:0},
                                other:{m:0,y:0}
                            },
                            market_bussiness_service_gain:{
                                m:0,y:0,
                                sell_service:{
                                    m:0,y:0,
                                    family:{m:0,y:0},
                                    person:{m:0,y:0},
                                    group:{
                                        m:0,y:0,
                                        ICT:{m:0,y:0},
                                        medium_small_company:{m:0,y:0},
                                        infomatization_service:{m:0,y:0}
                                    },
                                    intnet_business:{m:0,y:0},
                                    oprate_service:{m:0,y:0},
                                    other:{m:0,y:0}
                                },
                                service_support:{
                                    m:0,y:0,
                                    medium_small_company_support:{m:0,y:0},
                                    group_support:{m:0,y:0},
                                    ICT:{
                                        m:0,y:0,
                                        system_integration:{m:0,y:0},
                                        maintain_insurance:{m:0,y:0}
                                    },
                                    IDC:{m:0,y:0},
                                    cloud_comput:{m:0,y:0},
                                    big_data:{m:0,y:0},
                                    other:{m:0,y:0}
                                },
                                store_business:{
                                    m:0,y:0,
                                    self_user_business:{
                                        m:0,y:0,
                                        voice:{m:0,y:0},
                                        data:{m:0,y:0},
                                        resource_rent:{
                                            m:0,y:0,
                                            cooparate_build:{m:0,y:0}
                                        },
                                        in_network:{m:0,y:0},
                                        between_network:{m:0,y:0},
                                        other:{m:0,y:0}
                                    },
                                    resource_using_fee:{m:0,y:0},
                                    user_change_compensation:{m:0,y:0}
                                }
                            },
                            measure_and_network_test_gain:{
                                m:0,y:0,
                                instrument_measure:{m:0,y:0},
                                network_5G_measure:{m:0,y:0},
                                wireless_network_measure:{m:0,y:0},
                                intnet_measure:{m:0,y:0},
                                intnet_of_thing_measure:{m:0,y:0},
                                other_measure:{m:0,y:0}
                            },
                            other_gain:{
                                m:0,y:0,
                                sell_terminal_and_good:{m:0,y:0},
                                sell_equipment:{m:0,y:0},
                                rent_business:{m:0,y:0},
                                software_service:{m:0,y:0},
                                tenement_manage:{m:0,y:0},
                                physica_distribution_service:{m:0,y:0},
                                other:{m:0,y:0}
                            }
                        }
                },
				option2 : {
                    title:{
                        text:"",
                        textStyle:{
                            color:"white"
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
                        top: '1%',
                        right:"2%",
                        padding:5,
                        textStyle: {
                            color: '#90979c',
                            fontSize:"20px"
                        },
                        "data": ['本月数', '本年累计']
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
							"name": "本月数",
							"type": "line",
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
						{
							"name": "本年累计",
							"type": "line",
							// symbolSize:10,
							// symbol:'circle',
							"itemStyle": {
								"opacity":0,
								"normal": {
									"color": "rgba(252,230,48,1)",
									"label": {
										"show": true,
										"textStyle": {
											"color": "#fff"
										},
										"position": "top",
									}
								}
							},
							"data": []
						},
					]
				},
        　　}
      },
        methods: {
			show(e){
				this.show_type=e
            },
            upload(){
                var elt = document.getElementById('tb_3');
                var data = XLSX.utils.table_to_book(elt, {sheet:"sheet1"}).Sheets.sheet1
                data = read_business_gain(data)
                util._fetch('finance/','POST',{"data":data,"table_name":"营业收入明细表","date":this.time})
                .then(res=>{
                    console.log(res)
                    this.init()
                    this.$Message.success("成功")
                })
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
                    //workbook存放excel的所有基本信息
                    // console.log(e)
                    let workbook = XLSX.read(e.target.result, {type: 'binary'})
                    // console.log(workbook.Sheets)
                    var f
                    for(let i in workbook.Sheets){
                        f = workbook.Sheets[i]
                        break
                    }
                    that.file = read_business_gain(f)
                    // that.index=1
                    // that.table_data = that.create_table(that.file,project,0)
                    // that.table_data_show = that.create_table(that.file,project,0)
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
						"month":data[i].m,
						"year":data[i].y,
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
				if(e.length==0){
					this.table_data_show=this.table_data
				    this.update_echart(this.table_data[0])
					return
				}
				// console.log(e)
				let list=[]
				let index=e[0].index-1
                let lv=this.table_data[index].level
                // console.log(index)
                // console.log(this.table_data)
				this.update_echart(this.table_data[index])
				do{
					list.push(this.table_data[index])
					index++
				}while(this.table_data[index]&&this.table_data[index].level>lv)
				// console.log(list)
				this.table_data_show=list
			},
			get_cell_class(level){
				return {
					name:'space'+level
				}
			},
			update_echart(e){
                console.log(e)
				let temp_m=[]
                let temp_y=[]
                for(let i of this.all_file){
                console.log(i)
                    temp_m.push(i.data[e.index-1].month)
                    temp_y.push(i.data[e.index-1].year)
                }
                console.log(temp_m)
                console.log(temp_y)
                this.option2.title.text = e.name 
				this.option2.series[0].data=temp_m
				this.option2.series[1].data=temp_y
            },
            change_time(e){
                this.table_data = this.all_file[e].data
                this.table_data_show = this.all_file[e].data
            },
            init(){
                util._fetch('finance/OperatingIncome','get')
                .then(res=>{
                    console.log(res)
                    let dates = []
                    for(let i of res){
                        dates.unshift(i.date.slice(0,7))
                    }
                    this.option2.xAxis[0].data = dates
                    // console.log(this.option2.xAxis[0])
                    // this.all_file = res
                    this.file = JSON.parse(res[0].data.replace(/'/g,'"'))
                    this.table_data = this.create_table(this.file,project,0)
                    this.table_data_show = this.table_data
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
                        util._fetch('finance/OperatingIncome?id='+this.all_file[this.table_index].id,'delete')
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
            this.init()
			this.tree=this.create_tree(project)
			this.index=1
        }
       
    }
</script>
<template>
  <div class="animated fadeIn">
    <Row>
      <Col  :lg="5">
      <div>
        <Tree @on-select-change="tree_select" :data="tree" class="tree"></Tree>
      </div>
        
      </Col>
      <Col :lg="19">
        <!-- <input type="file" id="file" @change="file1" /> -->
        <Button type="info" style="margin-left:10px" @click="show_up=true">上传</Button>
        <Button type="error" style="margin-left:10px" @click="remove">删除</Button>
        <Select v-model="table_index" @on-change="change_time" style="width:200px">
            <Option v-for="item in all_file" :key="item.id" :value="item.index">{{item.date.slice(0,7)}}</Option>
        </Select>
        <Table :columns="columns" :data="table_data_show" height=610 border></Table>
      </Col>
    </Row>
    <Modal fullscreen
      v-model="show_up"
      @on-ok="upload">
        <input type="file" id="file" @change="file1" />
            <DatePicker v-model="time" type="month"/>
        <div id="box">
              <h1 style="text-align:center">网络管理技术服务收支利情况表</h1>
              <h6 style="text-align:center">{{file.author}} {{file.time}}</h6>
              <table id="tb_3" cellspacing="0">
          <tr style="display:none"><td><span ></span></td><td colspan="17" t="s" id="sjs-B1"><span >网络管理技术服务收支利情况表</span></td><td><span ></span></td><td><span ></span></td></tr><tr style="display:none"><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td t="s" id="sjs-R2"><span >会铁通月1001表</span></td><td><span ></span></td><td><span ></span></td></tr><tr style="display:none"><td t="s" id="sjs-A3"><span >编制单位：中移铁通有限公司内蒙古分公司(合并)</span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td t="s" id="sjs-H3"><span >2019年6月</span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td><span ></span></td><td t="s" id="sjs-R3"><span >金额单位：元</span></td><td><span ></span></td><td><span ></span></td></tr><tr><td colspan="2" t="s" id="sjs-A4"><span >项    目</span></td><td t="s" id="sjs-C4"><span >行次</span></td><td t="s" id="sjs-D4"><span >家庭客户管理技术服务</span></td><td t="s" id="sjs-E4"><span >集团客户管理技术服务</span></td><td t="s" id="sjs-F4"><span >基站管理技术服务</span></td><td t="s" id="sjs-G4"><span >光缆管理技术服务</span></td><td t="s" id="sjs-H4"><span >WLAN管理技术服务</span></td><td t="s" id="sjs-I4"><span >铁塔管理技术服务</span></td><td t="s" id="sjs-J4"><span >IDC管理技术服务</span></td><td t="s" id="sjs-K4"><span >网络优化技术服务</span></td><td t="s" id="sjs-L4"><span >网络资源核查与数据维护技术服务</span></td><td t="s" id="sjs-M4"><span >智能家居组网服务</span></td><td t="s" id="sjs-N4"><span >智能产品维修服务</span></td><td t="s" id="sjs-O4"><span >室分管理技术服务</span></td><td t="s" id="sjs-P4"><span >其他网络管理技术服务</span></td><td t="s" id="sjs-Q4"><span >网络管理技术服务共用直接成本</span></td><td t="s" id="sjs-R4"><span >合计</span></td></tr><tr><td colspan="2" t="s" id="sjs-A5"><span ><span style="font-size:11;">栏</span><span style="font-size:11;">    </span><span style="font-size:11;">次</span></span></td><td t="s" id="sjs-C5"><span >——</span></td><td t="s" id="sjs-D5"><span >1</span></td><td t="s" id="sjs-E5"><span >2</span></td><td t="s" id="sjs-F5"><span >3</span></td><td t="s" id="sjs-G5"><span >4</span></td><td t="s" id="sjs-H5"><span >5</span></td><td t="s" id="sjs-I5"><span >6</span></td><td t="s" id="sjs-J5"><span >7</span></td><td t="s" id="sjs-K5"><span >8</span></td><td t="s" id="sjs-L5"><span >9</span></td><td t="s" id="sjs-M5"><span >10</span></td><td t="s" id="sjs-N5"><span >11</span></td><td t="s" id="sjs-O5"><span >12</span></td><td t="s" id="sjs-P5"><span >13</span></td><td t="s" id="sjs-Q5"><span >14</span></td><td t="s" id="sjs-R5"><span >15</span></td></tr><tr><td t="s" id="sjs-A6"><span >收入</span></td><td t="s" id="sjs-B6"><span >一、收入</span></td><td t="s" id="sjs-C6"><span >1</span></td>
              <td t="n" :id="'sjs-'+item+'6'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].income.business_income.value}}  
                </span>
              </td>
          </tr><tr><td rowspan="44" t="s" id="sjs-A7"><span >网络管理技术服务直接成本费用支出</span></td><td t="s" id="sjs-B7"><span >二、成本费用总额</span></td><td t="s" id="sjs-C7"><span >2</span></td>
              <td t="n" :id="'sjs-'+item+'7'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.value}}  
                </span>
              </td> 
          </tr><tr><td t="s" id="sjs-B8"><span >（一）营业成本</span></td><td t="s" id="sjs-C8"><span >3</span></td>
              <td t="n" :id="'sjs-'+item+'8'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.value}}  
                </span>
              </td> 
          </tr><tr><td t="s" id="sjs-B9"><span >1、职工薪酬</span></td><td t="s" id="sjs-C9"><span >4</span></td>
              <td t="n" :id="'sjs-'+item+'9'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.staff_emolument.value}}  
                </span>
              </td> 
          </tr><tr><td t="s" id="sjs-B10"><span >   其中：工资</span></td><td t="s" id="sjs-C10"><span >5</span></td>
              <td t="n" :id="'sjs-'+item+'10'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.staff_emolument.emolument.value}}  
                </span>
              </td>
          </tr><tr><td t="s" id="sjs-B11"><span >         工资附加费</span></td><td t="s" id="sjs-C11"><span >6</span></td>
              <td t="n" :id="'sjs-'+item+'11'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.staff_emolument.emolument_extra.value}}  
                </span>
              </td>
          </tr><tr><td t="s" id="sjs-B12"><span >         劳务费</span></td><td t="s" id="sjs-C12"><span >7</span></td>
              <td t="n" :id="'sjs-'+item+'12'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.staff_emolument.service_fee.value}}  
                </span>
              </td>
          </tr><tr><td t="s" id="sjs-B13"><span >2、折旧费</span></td><td t="s" id="sjs-C13"><span >8</span></td>
              <td t="n" :id="'sjs-'+item+'13'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.depreciation.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B14"><span >3、维修费</span></td><td t="s" id="sjs-C14"><span >9</span></td>
              <td t="n" :id="'sjs-'+item+'14'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.fix_cost.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B15"><span >4、低值易耗品摊销</span></td><td t="s" id="sjs-C15"><span >10</span></td>
              <td t="n" :id="'sjs-'+item+'15'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.low_value_depreciation_amortize.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B16"><span >   其中：仪器仪表摊销(核算口径）</span></td><td t="s" id="sjs-C16"><span >11</span></td>
              <td t="n" :id="'sjs-'+item+'16'" v-for="(item,index) in list" :key="item">
                <span >
                  {{file.business[index].cost.total_cost.business_cost.low_value_depreciation_amortize.instrument.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B17"><span >5、水电取暖费</span></td><td t="s" id="sjs-C17"><span >12</span></td>
              <td t="n" :id="'sjs-'+item+'17'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.water_electric_warm.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B18"><span ><span style="font-size:11;">6、动力</span><span style="font-size:11;">费</span></span></td><td t="s" id="sjs-C18"><span >13</span></td>
              <td t="n" :id="'sjs-'+item+'18'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.power.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B19"><span ><span style="font-size:11;">7、</span><span style="font-size:11;">业务用品费</span></span></td><td t="s" id="sjs-C19"><span >14</span></td>
              <td t="n" :id="'sjs-'+item+'19'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.business_articles.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B20"><span >8、车辆运行费</span></td><td t="s" id="sjs-C20"><span >15</span></td>
              <td t="n" :id="'sjs-'+item+'20'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.car_drive.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B21"><span >9、邮寄通信运杂费</span></td><td t="s" id="sjs-C21"><span >16</span></td>
              <td t="n" :id="'sjs-'+item+'21'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.post_communicate.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B22"><span ><span style="font-size:11;">10、</span><span style="font-size:11;">保险费</span></span></td><td t="s" id="sjs-C22"><span >17</span></td>
              <td t="n" :id="'sjs-'+item+'22'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.insurance.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B23"><span ><span style="font-size:11;">11、</span><span style="font-size:11;">差旅费</span></span></td><td t="s" id="sjs-C23"><span >18</span></td>
              <td t="n" :id="'sjs-'+item+'23'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.trip_fee.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B24"><span ><span style="font-size:11;">1</span><span style="font-size:11;">2、图书资料费</span></span></td><td t="s" id="sjs-C24"><span >19</span></td>
              <td t="n" :id="'sjs-'+item+'24'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.book_document_fee.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B25"><span >13、物业管理费</span></td><td t="s" id="sjs-C25"><span >20</span></td>
              <td t="n" :id="'sjs-'+item+'25'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.tenement_manage_cost.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B26"><span ><span style="font-size:11;">1</span><span style="font-size:11;">4、办公费</span></span></td><td t="s" id="sjs-C26"><span >21</span></td>
              <td t="n" :id="'sjs-'+item+'26'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.officail_work.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B27"><span ><span style="font-size:11;">1</span><span style="font-size:11;">5、会议费</span></span></td><td t="s" id="sjs-C27"><span >22</span></td>
              <td t="n" :id="'sjs-'+item+'27'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.meeting.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B28"><span ><span style="font-size:11;">1</span><span style="font-size:11;">6、业务外包费</span></span></td><td t="s" id="sjs-C28"><span >23</span></td>
              <td t="n" :id="'sjs-'+item+'28'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.business_outsourcing.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B29"><span ><span style="font-size:11;">1</span><span style="font-size:11;">7、安全保护费</span></span></td><td t="s" id="sjs-C29"><span >24</span></td>
              <td t="n" :id="'sjs-'+item+'29'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.safety_protect.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B30"><span ><span style="font-size:11;">1</span><span style="font-size:11;">8、交通费</span></span></td><td t="s" id="sjs-C30"><span >25</span></td>
              <td t="n" :id="'sjs-'+item+'30'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.traffic.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B31"><span ><span style="font-size:11;">1</span><span style="font-size:11;">9、</span><span style="font-size:11;">租赁费</span></span></td><td t="s" id="sjs-C31"><span >26</span></td>
              <td t="n" :id="'sjs-'+item+'31'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.rent.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B32"><span >    其中：房屋租赁费</span></td><td t="s" id="sjs-C32"><span >27</span></td>
              <td t="n" :id="'sjs-'+item+'32'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.rent.house_rent.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B33"><span ><span style="font-size:11;">          </span><span style="font-size:11;">车辆租赁费</span></span></td><td t="s" id="sjs-C33"><span >28</span></td>
              <td t="n" :id="'sjs-'+item+'33'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.rent.car_rent.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B34"><span >20、材料费</span></td><td t="s" id="sjs-C34"><span >29</span></td>
              <td t="n" :id="'sjs-'+item+'34'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.material.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B35"><span >21、业务技术支撑费</span></td><td t="s" id="sjs-C35"><span >30</span></td>
              <td t="n" :id="'sjs-'+item+'35'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.business_technology_support.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B36"><span >22、使用权资产折旧费</span></td><td t="s" id="sjs-C36"><span >31</span></td>
              <td t="n" :id="'sjs-'+item+'36'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.using_right_property_depreciation.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B37"><span >    其中：房屋使用权资产折旧费</span></td><td t="s" id="sjs-C37"><span >32</span></td>
              <td t="n" :id="'sjs-'+item+'37'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.using_right_property_depreciation.house_using_right.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B38"><span >          场地使用权资产折旧</span></td><td t="s" id="sjs-C38"><span >33</span></td>
              <td t="n" :id="'sjs-'+item+'38'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.using_right_property_depreciation.groud_using_right.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B39"><span >23、非租赁使用费</span></td><td t="s" id="sjs-C39"><span >34</span></td>
              <td t="n" :id="'sjs-'+item+'39'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.non_rent_using_fee.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B40"><span >    其中：场地服务</span></td><td t="s" id="sjs-C40"><span >35</span></td>
              <td t="n" :id="'sjs-'+item+'40'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.non_rent_using_fee.groud_service.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B41"><span >          车辆服务</span></td><td t="s" id="sjs-C41"><span >36</span></td>
              <td t="n" :id="'sjs-'+item+'41'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.non_rent_using_fee.car_service.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B42"><span >24、其他</span></td><td t="s" id="sjs-C42"><span >37</span></td>
              <td t="n" :id="'sjs-'+item+'42'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B43"><span >（二）税金及附加</span></td><td t="s" id="sjs-C43"><span >38</span></td>
              <td t="n" :id="'sjs-'+item+'43'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.tax_and_extra.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B44"><span >（三）销售费用</span></td><td t="s" id="sjs-C44"><span >39</span></td>
              <td t="n" :id="'sjs-'+item+'44'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.sell_cost.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B45"><span >（四）管理费用</span></td><td t="s" id="sjs-C45"><span >40</span></td>
              <td t="n" :id="'sjs-'+item+'45'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.manage_cost.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B46"><span ><span style="font-size:11;">     其中：</span><span style="font-size:11;">1、职工薪酬</span></span></td><td t="s" id="sjs-C46"><span >41</span></td>
              <td t="n" :id="'sjs-'+item+'46'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.manage_cost.staff_emolument.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B47"><span >           其中：工资</span></td><td t="s" id="sjs-C47"><span >42</span></td>
              <td t="n" :id="'sjs-'+item+'47'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.manage_cost.staff_emolument.emolument.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B48"><span ><span style="font-size:11;">            </span><span style="font-size:11;">     工资附加费</span></span></td><td t="s" id="sjs-C48"><span >43</span></td>
              <td t="n" :id="'sjs-'+item+'48'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.manage_cost.staff_emolument.emolument_extra.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B49"><span ><span style="font-size:11;">         </span><span style="font-size:11;"> </span><span style="font-size:11;">   </span><span style="font-size:11;">    劳务费</span></span></td><td t="s" id="sjs-C49"><span >44</span></td>
              <td t="n" :id="'sjs-'+item+'4'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.manage_cost.staff_emolument.service_fee.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-B50"><span >           2、折旧费</span></td><td t="s" id="sjs-C50"><span >45</span></td>
              <td t="n" :id="'sjs-'+item+'51'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].cost.total_cost.business_cost.other.manage_cost.depreciation.value}}  
                </span>
              </td>
            </tr><tr><td t="s" id="sjs-A51"><span >利润</span></td><td t="s" id="sjs-B51"><span >三、营业利润</span></td><td t="s" id="sjs-C51"><span >46</span></td>
              <td t="n" :id="'sjs-'+item+'51'" v-for="(item,index) in list" :key="item">
                <span contenteditable="true">
                  {{file.business[index].profit.business_profit.value}}  
                </span>
              </td>
            </tr>
              </table>
        </div>
      </Modal>
  </div>
</template>

<script>
import store from "../../store";
import * as util from "../../util";
import { read_net_manage_bus } from "../../read_net_manage_bus";
var project={
        business_type:"",
        income:{
            name:"收入",
            business_income:{value:0,name:"一、收入"}
        },
        cost:{
            name:"支出",
            total_cost:{
                value:0,name:"二、成本费用总额",
                business_cost:{
                    value:0,name:"（一）营业成本",
                    staff_emolument:{
                        value:0,name:"1、职工薪酬",
                        emolument:{value:0,name:"其中：工资"},
                        emolument_extra:{value:0,name:"工资附加费"},
                        service_fee:{value:0,name:"劳务费"}
                    },
                    depreciation:{value:0,name:"2、折旧费"},
                    fix_cost:{value:0,name:"3、维修费"},
                    low_value_depreciation_amortize:{
                        value:0,name:"4、低值易耗品摊销",
                        instrument:{value:0,name:"其中：仪器仪表摊销(核算口径）"}
                    },
                    water_electric_warm:{value:0,name:"5、水电取暖费"},
                    power:{value:0,name:"6、动力费"},
                    business_articles:{value:0,name:"7、业务用品费"},
                    car_drive:{value:0,name:"8、车辆运行费"},
                    post_communicate:{value:0,name:"9、邮寄通信运杂费"},
                    insurance:{value:0,name:"10、保险费"},
                    trip_fee:{value:0,name:"11、差旅费"},
                    book_document_fee:{value:0,name:"12、图书资料费"},
                    tenement_manage_cost:{value:0,name:"13、物业管理费"},
                    officail_work:{value:0,name:"14、办公费"},
                    meeting:{value:0,name:"15、会议费"},
                    business_outsourcing:{value:0,name:"16、业务外包费"},
                    safety_protect:{value:0,name:"17、安全保护费"},
                    traffic:{value:0,name:"18、交通费"},
                    rent:{
                        value:0,name:"19、租赁费",
                        house_rent:{value:0,name:"其中：房屋租赁费"},
                        car_rent:{value:0,name:"车辆租赁费"}
                    },
                    material:{value:0,name:"20、材料费"},
                    business_technology_support:{value:0,name:"21、业务技术支撑费"},
                    using_right_property_depreciation:{
                        value:0,name:"22、使用权资产折旧费",
                        house_using_right:{value:0,name:"其中：房屋使用权资产折旧费"},
                        groud_using_right:{value:0,name:"场地使用权资产折旧"},
                    },
                    non_rent_using_fee:{
                        value:0,name:"23、非租赁使用费",
                        groud_service:{value:0,name:"其中：场地服务"},
                        car_service:{value:0,name:"车辆服务"},
                    },
                    other:{
                        value:0,name:"24、其他",
                        tax_and_extra:{value:0,name:"（二）税金及附加"},
                        sell_cost:{value:0,name:"（三）销售费用"},
                        manage_cost:{
                            value:0,name:"（四）管理费用",
                            staff_emolument:{
                                value:0,name:"其中：1、职工薪酬",
                                emolument:{value:0,name:"其中：工资"},
                                emolument_extra:{value:0,name:"工资附加费"},
                                service_fee:{value:0,name:"劳务费"}
                            },
                            depreciation:{value:0,name:"2、折旧费"},
                        },

                    }
                }
            },
        },
        profit:{
            name:"利润",
            business_profit:{value:0,name:"三、营业利润"}
        }
    }
export default {
  data() {
    return {
      time:"",//上传用
      table_index:0,
      all_file:[],
      file: {
        author:"",
        time:"",
        business:[],//x轴
      },
      list:['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'],
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
          minWidth:200
        },
        {
          title: '层次',
          key: 'level',
          width:35,
        },
        {
          title: '家庭客户管理技术服务',
          key: 'family',
          width:60,
          sortable:true,
        },
        {
          title: '集团客户管理技术服务',
          key: 'group',
          width:60,
          sortable:true,
        },
        {
          title: '基站管理技术服务',
          key: 'base_station',
          width:60,
          sortable:true,
        },
        {
          title: '光缆管理技术服务',
          key: 'optical_cable',
          width:90,
          sortable:true,
        },
        {
          title: 'WLAN管理技术服务',
          key: 'WLAN',
          width:60,
          sortable:true,
        },
        {
          title: '铁塔管理技术服务',
          key: 'tower',
          width:60,
          sortable:true,
        },
        {
          title: 'IDC管理技术服务',
          key: 'IDC',
          width:60,
          sortable:true,
        },
        {
          title: '网络优化技术服务',
          key: 'net_improve',
          width:60,
          sortable:true,
        },
        {
          title: '网络资源核查与数据维护技术服务',
          key: 'net_source',
          width:60,
          sortable:true,
        },
        {
          title: '智能家居组网服务',
          key: 'house',
          width:60,
          sortable:true,
        },
        {
          title: '智能产品维修服务',
          key: 'production',
          width:60,
          sortable:true,
        },
        {
          title: '室分管理技术服务',
          key: 'room',
          width:60,
          sortable:true,
        },
        {
          title: '其他网络管理技术服务',
          key: 'other',
          width:60,
          sortable:true,
        },
        {
          title: '网络管理技术服务共用直接成本',
          key: 'net_manage',
          width:60,
          sortable:true,
        },
        {
          title: '合计',
          key: 'total',
          width:60,
          sortable:true,
        },
      ],
      index:0,
      table_data:[],
      table_data_show:[],
    };
  },
  methods: {
    upload() {
      var elt = document.getElementById("tb_3");
      var data = XLSX.utils.table_to_book(elt, { sheet: "sheet1" }).Sheets
        .sheet1;
      data = read_net_manage_bus(data);
      util._fetch('finance/','POST',{"data":data,"table_name":"网络管理技术服务收支利情况表-分业务","date":this.time})
      .then(res=>{
          console.log(res)
          this.init()
          this.$Message.success("成功")
      })
    },
    get_blank(e) {
      for (let i in e) {
        if (e[i] != " ") return i;
      }
      return 0;
    },
    file1(e) {
      var that = this;
      //拿到所导入文件的名字
      let fileName = e.target.files[0];
      console.log(e.target.files);
      this.file.name = e.target.files[0].name.slice(0, -5);
      //定义reader，存放文件读取方法
      let reader = new FileReader();
      //启动函数
      reader.readAsBinaryString(fileName);
      //onload在文件被读取时自动触发
      reader.onload = function(e) {
        //workbook存放excel的所有基本信息
        // console.log(e)
        let workbook = XLSX.read(e.target.result, { type: "binary" });
        // console.log(workbook.Sheets)
        var f;
        for (let i in workbook.Sheets) {
          f = workbook.Sheets[i];
          break;
        }
        // for(let i in f){
        //     if(i=='!margins'||i=='!ref')continue
        //     if(typeof(f[i].h)=='string'){
        //         f[i].h = f[i].h.replace(/\s/g,"|_|")
        //         f[i].h = f[i].h.replace(/\t/g,"|_||_||_|")
        //     }
        // }
        // document.getElementById("box").innerHTML += XLSX.utils
        //   .sheet_to_html(f, { editable: true })
        //   .replace(/<table/g, '<table id="tb_3" cellspacing="0" border="1"')
        //   .replace(/\|_\|/g, "&nbsp;");
        that.file = read_net_manage_bus(f);
        // that.create_table()
        // console.log(this.file)
        // console.log("1111",read_business_gain(XLSX.utils.table_to_book(document.getElementById('tb_3')).Sheets.Sheet1))
        // console.log(
        //   XLSX.utils
        //     .sheet_to_html(f, { editable: true })
        //     .replace(/<table/g, '<table id="tb_3" cellspacing="0"')
        //     .replace(/\|_\|/g, "&nbsp;")
        // );
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
          code:data[i],
          index:this.index,
          children:this.create_tree(data[i]),
        }
        tree.push(p_temp)
      }
      return tree
    },
    create_list(data,level) {
        let temp=[]
        for(let i in data){
          if(i=='business_type'||i=='name'||i=='value')continue
          if(i!='income'&&i!='cost'&&i!='profit'){
            temp.push({
              "value":data[i].value,
              "name":data[i].name,
              "level":level,
              })
              
            // if(data.value==undefined)console.log(i)
          }
          if(data[i].name){
            temp=temp.concat(this.create_list(data[i],level+1)) 
          }
        }
            
        // console.log(temp)
        return temp
    },
    create_table(file){
      let data_list=[]
      for(let i of file.business){
        data_list.push(this.create_list(i,0))
      }
      let temp_table_data=[]
      for(let i in data_list[0]){
        let item={
          "family":data_list[0][i].value,
          "group":data_list[1][i].value,
          "base_station":data_list[2][i].value,
          "optical_cable":data_list[3][i].value,
          "WLAN":data_list[4][i].value,
          "tower":data_list[5][i].value,
          "IDC":data_list[6][i].value,
          "net_improve":data_list[7][i].value,
          "net_source":data_list[8][i].value,
          "house":data_list[9][i].value,
          "production":data_list[10][i].value,
          "room":data_list[11][i].value,
          "other":data_list[12][i].value,
          "net_manage":data_list[13][i].value,
          "total":data_list[14][i].value,
          "index":parseInt(i)+1,
          "name":data_list[1][i].name,
          "level":data_list[1][i].level,
          "cellClassName":this.get_cell_class(data_list[1][i].level)
        }
        temp_table_data.push(item)
      }
      // console.log(temp_table_data)
      return temp_table_data
    },
    get_cell_class(level){
      return {
        name:'space'+level
      }
    },
    tree_select(e){
      if(e.length==0){
        this.table_data_show=this.table_data
        return
      }
      // console.log(e)
      let list=[]
      let index=e[0].index-1
      let lv=this.table_data[index].level
      do{
        list.push(this.table_data[index])
        index++
      }while(this.table_data[index].level>lv)
      // console.log(list)
      this.table_data_show=list
    },
    change_time(e){
        this.table_data = this.all_file[e].data
        this.table_data_show = this.all_file[e].data
    },
    init(){
        util._fetch('finance/NetworkManagementService','get')
        .then(res=>{
            console.log(res)
            // let dates = []
            // for(let i of res){
            //     dates.unshift(i.date.slice(0,7))
            // }
            // this.option2.xAxis[0].data = dates
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
                util._fetch('finance/NetworkManagementService?id='+this.all_file[this.table_index].id,'delete')
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
  mounted() {
    for(let i of this.list){
      this.file.business.push(JSON.parse(JSON.stringify(project)))
    }
    // this.table_data = this.create_table(this.file)
    // this.table_data_show = this.table_data
    this.init()
    // console.log(this.file.business[0].income)
    this.tree=[
      {
        title:"收入",
        expand:true,
        code:"income",
        index:1,
        children:this.create_tree(project.income)
      },
      {
        title:"市场营销服务直接成本费用支出",
        expand:true,
        code:"cost",
        index:2,
        children:this.create_tree(project.cost,0)
      },
      {
        title:"利润",
        expand:true,
        code:"profit",
        index:this.index,
        children:this.create_tree(project.profit,)
      },
    ]
  }
};
</script>
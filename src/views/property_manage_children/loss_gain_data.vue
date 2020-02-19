<template>
  <div class="animated fadeIn">
    <Row>
      <Col :sm="24" :md="24" :lg="24">
        <div class="con">
            <input type="file" id="file" @change="file1"/>
             <Button type="info" style="margin-left:10px" @click="upload">确认上传</Button>
        </div>
        <div id="box">
            <h1 style="text-align:center">损益数据表</h1>
            <h6 style="text-align:center">{{file.author}} {{file.time}}</h6>
            <table id="tb_3" cellspacing="0">
                <tr style="display:none"><td><span></span></td>
                <td><span></span></td>
                <td><span></span></td> 
                <td t="s" id="sjs-D1"><span>损益数据表</span></td>
                <td><span></span></td><td><span></span></td>
                <td><span></span></td>
                <td t="s" id="sjs-H1"><span>损益数据表</span></td>
                <td><span></span></td><td><span></span></td>
                <td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td></tr>
                <tr style="display:none"><td t="s" id="sjs-A3"><span contenteditable="true">{{file.author}}</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-H3"><span contenteditable="true">{{file.time}}</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="s" id="sjs-K3"><span contenteditable="true">金额单位：元</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td></tr>
                <tr><td t="s" id="sjs-A4"><span contenteditable="true">项目</span></td><td t="s" id="sjs-B4"><span contenteditable="true">行次</span></td><td t="s" id="sjs-C4"><span contenteditable="true">本月数</span></td><td t="s" id="sjs-D4"><span contenteditable="true">本年累计数</span></td><td t="s" id="sjs-E4"><span contenteditable="true">本月数</span></td><td t="s" id="sjs-F4"><span contenteditable="true">本年累计</span></td><td t="s" id="sjs-G4"><span contenteditable="true">报表科目</span></td><td t="s" id="sjs-H4"><span contenteditable="true">项目</span></td><td t="s" id="sjs-I4"><span contenteditable="true">行次</span></td><td t="s" id="sjs-J4"><span contenteditable="true">本月数</span></td><td t="s" id="sjs-K4"><span contenteditable="true">本年累计数</span></td><td t="s" id="sjs-L4"><span contenteditable="true">本月数</span></td><td t="s" id="sjs-M4"><span contenteditable="true">本年累计</span></td><td t="s" id="sjs-N4"><span contenteditable="true">报表科目</span></td></tr>
                <tr><td t="s" id="sjs-A5"><span contenteditable="true">一、营业收入</span></td><td t="s" id="sjs-B5"><span contenteditable="true">1</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E5"><span contenteditable="true">
                    {{file.business_income.m}}
                    </span></td><td t="n" id="sjs-F5"><span contenteditable="true">
                    {{file.business_income.y}}
                    </span></td><td t="s" id="sjs-G5"><span contenteditable="true">KTT02Z001</span></td><td t="s" id="sjs-H5"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：职工福利费</span></td><td t="s" id="sjs-I5"><span contenteditable="true">116</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L5"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.m}}
                    </span></td><td t="n" id="sjs-M5"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.y}}
                    </span></td><td t="s" id="sjs-N5"><span contenteditable="true">KTT02Z100</span></td></tr>
                <tr><td t="s" id="sjs-A6"><span contenteditable="true">&nbsp;&nbsp;&nbsp;（一）主营业务收入</span></td><td t="s" id="sjs-B6"><span contenteditable="true">2</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E6"><span contenteditable="true">
                    {{file.business_income.main.m}}
                    </span></td><td t="n" id="sjs-F6"><span contenteditable="true">
                    {{file.business_income.main.y}}
                    </span></td><td t="s" id="sjs-G6"><span contenteditable="true">KTT02Z002</span></td><td t="s" id="sjs-H6"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：货币性福利</span></td><td t="s" id="sjs-I6"><span contenteditable="true">117</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L6"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.moneyness.m}}
                    </span></td><td t="n" id="sjs-M6"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.moneyness.y}}
                    </span></td><td t="s" id="sjs-N6"><span contenteditable="true">KTT02Z101</span></td></tr>
                <tr><td t="s" id="sjs-A7"><span contenteditable="true">&nbsp;&nbsp;&nbsp;（二）其他业务收入</span></td><td t="s" id="sjs-B7"><span contenteditable="true">3</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E7"><span contenteditable="true">
                    {{file.business_income.other.m}}
                    </span></td><td t="n" id="sjs-F7"><span contenteditable="true">
                    {{file.business_income.other.y}}
                    </span></td><td t="s" id="sjs-G7"><span contenteditable="true">KTT02Z003</span></td><td t="s" id="sjs-H7"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非货币性福利</span></td><td t="s" id="sjs-I7"><span contenteditable="true">118</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L7"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.m}}
                    </span></td><td t="n" id="sjs-M7"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.y}}
                    </span></td><td t="s" id="sjs-N7"><span contenteditable="true">KTT02Z102</span></td></tr>
                <tr><td t="s" id="sjs-A8"><span contenteditable="true">二、营业成本</span></td><td t="s" id="sjs-B8"><span contenteditable="true">4</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E8"><span contenteditable="true">
                    {{file.business_cost.m}}
                    </span></td><td t="n" id="sjs-F8"><span contenteditable="true">
                    {{file.business_cost.y}}
                    </span></td><td t="s" id="sjs-G8"><span contenteditable="true">KTT02Z004</span></td><td t="s" id="sjs-H8"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：使用权资产折旧费</span></td><td t="s" id="sjs-I8"><span contenteditable="true">119</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L8"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.using_right_property_depreciation.m}}
                    </span></td><td t="n" id="sjs-M8"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.using_right_property_depreciation.y}}
                    </span></td><td t="s" id="sjs-N8"><span contenteditable="true">KTT02Z165</span></td></tr>
                <tr><td t="s" id="sjs-A9"><span contenteditable="true">&nbsp;（一）主营业务成本</span></td><td t="s" id="sjs-B9"><span contenteditable="true">5</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E9"><span contenteditable="true">
                    {{file.business_cost.main.m}}
                    </span></td><td t="n" id="sjs-F9"><span contenteditable="true">
                    {{file.business_cost.main.y}}
                    </span></td><td t="s" id="sjs-G9"><span contenteditable="true">KTT02Z005</span></td><td t="s" id="sjs-H9"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;折旧费</span></td><td t="s" id="sjs-I9"><span contenteditable="true">120</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L9"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.depreciation.m}}
                    </span></td><td t="n" id="sjs-M9"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.depreciation.y}}
                    </span></td><td t="s" id="sjs-N9"><span contenteditable="true">KTT02Z166</span></td></tr>
                <tr><td t="s" id="sjs-A10"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：1、职工薪酬</span></td><td t="s" id="sjs-B10"><span contenteditable="true">6</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E10"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.m}}
                    </span></td><td t="n" id="sjs-F10"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.y}}
                    </span></td><td t="s" id="sjs-G10"><span contenteditable="true">KTT02Z006</span></td><td t="s" id="sjs-H10"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;租赁费</span></td><td t="s" id="sjs-I10"><span contenteditable="true">121</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L10"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.rent.m}}
                    </span></td><td t="n" id="sjs-M10"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.welfare.non_moneyness.rent.y}}
                    </span></td><td t="s" id="sjs-N10"><span contenteditable="true">KTT02Z167</span></td></tr>
                <tr><td t="s" id="sjs-A11"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：工资</span></td><td t="s" id="sjs-B11"><span contenteditable="true">7</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E11"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument.m}}
                    </span></td><td t="n" id="sjs-F11"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument.y}}
                    </span></td><td t="s" id="sjs-G11"><span contenteditable="true">KTT02Z007</span></td><td t="s" id="sjs-H11"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住房公积金</span></td><td t="s" id="sjs-I11"><span contenteditable="true">122</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L11"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.house_fund.m}}
                    </span></td><td t="n" id="sjs-M11"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.house_fund.y}}
                    </span></td><td t="s" id="sjs-N11"><span contenteditable="true">KTT02Z103</span></td></tr>
                <tr><td t="s" id="sjs-A12"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳务费</span></td><td t="s" id="sjs-B12"><span contenteditable="true">8</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E12"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.service_fee.m}}
                    </span></td><td t="n" id="sjs-F12"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.service_fee.y}}
                    </span></td><td t="s" id="sjs-G12"><span contenteditable="true">KTT02Z008</span></td><td t="s" id="sjs-H12"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社会保险费</span></td><td t="s" id="sjs-I12"><span contenteditable="true">123</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L12"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.social_insurance.m}}
                    </span></td><td t="n" id="sjs-M12"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.social_insurance.y}}
                    </span></td><td t="s" id="sjs-N12"><span contenteditable="true">KTT02Z104</span></td></tr>
                <tr><td t="s" id="sjs-A13"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工资附加费合计</span></td><td t="s" id="sjs-B13"><span contenteditable="true">9</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E13"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.m}}
                    </span></td><td t="n" id="sjs-F13"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.y}}
                    </span></td><td t="s" id="sjs-G13"><span contenteditable="true">KTT02Z009</span></td><td t="s" id="sjs-H13"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：企业年金</span></td><td t="s" id="sjs-I13"><span contenteditable="true">124</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L13"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.social_insurance.enterprise_year_fund.m}}
                    </span></td><td t="n" id="sjs-M13"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.social_insurance.enterprise_year_fund.y}}
                    </span></td><td t="s" id="sjs-N13"><span contenteditable="true">KTT02Z105</span></td></tr>
                <tr><td t="s" id="sjs-A14"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：职工福利费</span></td><td t="s" id="sjs-B14"><span contenteditable="true">10</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E14"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.m}}
                    </span></td><td t="n" id="sjs-F14"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.y}}
                    </span></td><td t="s" id="sjs-G14"><span contenteditable="true">KTT02Z010</span></td><td t="s" id="sjs-H14"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工会经费</span></td><td t="s" id="sjs-I14"><span contenteditable="true">125</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L14"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.union_fund.m}}
                    </span></td><td t="n" id="sjs-M14"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.union_fund.y}}
                    </span></td><td t="s" id="sjs-N14"><span contenteditable="true">KTT02Z106</span></td></tr>
                <tr><td t="s" id="sjs-A15"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：货币性福利</span></td><td t="s" id="sjs-B15"><span contenteditable="true">11</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E15"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.moneyness.m}}
                    </span></td><td t="n" id="sjs-F15"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.moneyness.y}}
                    </span></td><td t="s" id="sjs-G15"><span contenteditable="true">KTT02Z011</span></td><td t="s" id="sjs-H15"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职工教育经费</span></td><td t="s" id="sjs-I15"><span contenteditable="true">126</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L15"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.staff_education.m}}
                    </span></td><td t="n" id="sjs-M15"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.staff_education.y}}
                    </span></td><td t="s" id="sjs-N15"><span contenteditable="true">KTT02Z107</span></td></tr>
                <tr><td t="s" id="sjs-A16"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非货币性福利</span></td><td t="s" id="sjs-B16"><span contenteditable="true">12</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E16"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.m}}
                    </span></td><td t="n" id="sjs-F16"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.y}}
                    </span></td><td t="s" id="sjs-G16"><span contenteditable="true">KTT02Z012</span></td><td t="s" id="sjs-H16"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳动保护费</span></td><td t="s" id="sjs-I16"><span contenteditable="true">127</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L16"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.work_protect.m}}
                    </span></td><td t="n" id="sjs-M16"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.work_protect.y}}
                    </span></td><td t="s" id="sjs-N16"><span contenteditable="true">KTT02Z108</span></td></tr>
                <tr><td t="s" id="sjs-A17"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：使用权资产折旧费</span></td><td t="s" id="sjs-B17"><span contenteditable="true">13</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E17"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.using_right_property_depreciation.m}}
                    </span></td><td t="n" id="sjs-F17"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.using_right_property_depreciation.y}}
                    </span></td><td t="s" id="sjs-G17"><span contenteditable="true">KTT02Z143</span></td><td t="s" id="sjs-H17"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-I17"><span contenteditable="true">128</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L17"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.other.m}}
                    </span></td><td t="n" id="sjs-M17"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.other.y}}
                    </span></td><td t="s" id="sjs-N17"><span contenteditable="true">KTT02Z109</span></td></tr>
                <tr><td t="s" id="sjs-A18"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;折旧费</span></td><td t="s" id="sjs-B18"><span contenteditable="true">14</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E18"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.depreciation.m}}
                    </span></td><td t="n" id="sjs-F18"><span contenteditable="true">
				    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.depreciation.y}}
                    </span></td><td t="s" id="sjs-G18"><span contenteditable="true">KTT02Z144</span></td><td t="s" id="sjs-H18"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辞退福利</span></td><td t="s" id="sjs-I18"><span contenteditable="true">129</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L18"><span contenteditable="true">
				    {{file.manage_fee.staff_emolument.dismiss_welfare.m}}
                    </span></td><td t="n" id="sjs-M18"><span contenteditable="true">
				    {{file.manage_fee.staff_emolument.dismiss_welfare.y}}
                    </span></td><td t="s" id="sjs-N18"><span contenteditable="true">KTT02Z110</span></td></tr>
                <tr><td t="s" id="sjs-A19"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;租赁费</span></td><td t="s" id="sjs-B19"><span contenteditable="true">15</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E19"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.rent.m}}
                    </span></td><td t="n" id="sjs-F19"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.welfare.non_moneyness.rent.y}}
                    </span></td><td t="s" id="sjs-G19"><span contenteditable="true">KTT02Z145</span></td><td t="s" id="sjs-H19"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）折旧费</span></td><td t="s" id="sjs-I19"><span contenteditable="true">130</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L19"><span contenteditable="true">
                    {{file.manage_fee.depreciation.m}}
                    </span></td><td t="n" id="sjs-M19"><span contenteditable="true">
                    {{file.manage_fee.depreciation.y}}
                    </span></td><td t="s" id="sjs-N19"><span contenteditable="true">KTT02Z111</span></td></tr>
                <tr><td t="s" id="sjs-A20"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住房公积金</span></td><td t="s" id="sjs-B20"><span contenteditable="true">16</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E20"><span contenteditable="true">
					{{file.business_cost.main.staff_emolument.emolument_extra.house_fund.m}}
				 </span></td><td t="n" id="sjs-F20"><span contenteditable="true">
					{{file.business_cost.main.staff_emolument.emolument_extra.house_fund.y}}
				 </span></td><td t="s" id="sjs-G20"><span contenteditable="true">KTT02Z013</span></td><td t="s" id="sjs-H20"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）无形资产摊销费</span></td><td t="s" id="sjs-I20"><span contenteditable="true">131</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L20"><span contenteditable="true">
                    {{file.manage_fee.intangible_assets_amortize.m}}
                    </span></td><td t="n" id="sjs-M20"><span contenteditable="true">
                    {{file.manage_fee.intangible_assets_amortize.y}}
                    </span></td><td t="s" id="sjs-N20"><span contenteditable="true">KTT02Z112</span></td></tr>
                <tr><td t="s" id="sjs-A21"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社会保险费</span></td><td t="s" id="sjs-B21"><span contenteditable="true">17</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E21"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.social_insurance.m}}
                    </span></td><td t="n" id="sjs-F21"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.social_insurance.y}}
                    </span></td><td t="s" id="sjs-G21"><span contenteditable="true">KTT02Z014</span></td><td t="s" id="sjs-H21"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：土地使用权</span></td><td t="s" id="sjs-I21"><span contenteditable="true">132</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L21"><span contenteditable="true">
					{{file.manage_fee.intangible_assets_amortize.land_using_right.m}}
				    </span></td><td t="n" id="sjs-M21"><span contenteditable="true">
					{{file.manage_fee.intangible_assets_amortize.land_using_right.y}}
				    </span></td><td t="s" id="sjs-N21"><span contenteditable="true">KTT02Z113</span></td></tr>
                <tr><td t="s" id="sjs-A22"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：企业年金</span></td><td t="s" id="sjs-B22"><span contenteditable="true">18</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E22"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.social_insurance.enterprise_year_fund.m}}
                    </span></td><td t="n" id="sjs-F22"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.social_insurance.enterprise_year_fund.y}}
                    </span></td><td t="s" id="sjs-G22"><span contenteditable="true">KTT02Z015</span></td><td t="s" id="sjs-H22"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件</span></td><td t="s" id="sjs-I22"><span contenteditable="true">133</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L22"><span contenteditable="true">
                    {{file.manage_fee.intangible_assets_amortize.softwore.m}}
                    </span></td><td t="n" id="sjs-M22"><span contenteditable="true">
                    {{file.manage_fee.intangible_assets_amortize.softwore.y}}
                    </span></td><td t="s" id="sjs-N22"><span contenteditable="true">KTT02Z114</span></td></tr>
                <tr><td t="s" id="sjs-A23"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工会经费</span></td><td t="s" id="sjs-B23"><span contenteditable="true">19</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E23"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.union_fund.m}}
                    </span></td><td t="n" id="sjs-F23"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.union_fund.y}}
                    </span></td><td t="s" id="sjs-G23"><span contenteditable="true">KTT02Z016</span></td><td t="s" id="sjs-H23"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）&nbsp;维修费</span></td><td t="s" id="sjs-I23"><span contenteditable="true">134</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L23"><span contenteditable="true">
					{{file.manage_fee.fix_cost.m}}
				    </span></td><td t="n" id="sjs-M23"><span contenteditable="true">
                    {{file.manage_fee.fix_cost.y}}
                    </span></td><td t="s" id="sjs-N23"><span contenteditable="true">KTT02Z115</span></td></tr>
                <tr><td t="s" id="sjs-A24"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职工教育经费</span></td><td t="s" id="sjs-B24"><span contenteditable="true">20</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E24"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.staff_education.m}}
                    </span></td><td t="n" id="sjs-F24"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.staff_education.y}}
                    </span></td><td t="s" id="sjs-G24"><span contenteditable="true">KTT02Z017</span></td><td t="s" id="sjs-H24"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：房屋维修费</span></td><td t="s" id="sjs-I24"><span contenteditable="true">135</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L24"><span contenteditable="true">
					{{file.manage_fee.fix_cost.house_fix.m}}
				    </span></td><td t="n" id="sjs-M24"><span contenteditable="true">
					{{file.manage_fee.fix_cost.house_fix.y}}
				    </span></td><td t="s" id="sjs-N24"><span contenteditable="true">KTT02Z116</span></td></tr>
                <tr><td t="s" id="sjs-A25"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳动保护费</span></td><td t="s" id="sjs-B25"><span contenteditable="true">21</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E25"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.work_protect.m}}
                    </span></td><td t="n" id="sjs-F25"><span contenteditable="true">
                    {{file.business_cost.main.staff_emolument.emolument_extra.work_protect.y}}
                    </span></td><td t="s" id="sjs-G25"><span contenteditable="true">KTT02Z018</span></td><td t="s" id="sjs-H25"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆维修费</span></td><td t="s" id="sjs-I25"><span contenteditable="true">136</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L25"><span contenteditable="true">
					{{file.manage_fee.fix_cost.car_fix.m}}
				    </span></td><td t="n" id="sjs-M25"><span contenteditable="true">
					{{file.manage_fee.fix_cost.car_fix.y}}
				    </span></td><td t="s" id="sjs-N25"><span contenteditable="true">KTT02Z117</span></td></tr>
                <tr><td t="s" id="sjs-A26"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-B26"><span contenteditable="true">22</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E26"><span contenteditable="true">
					{{file.business_cost.main.staff_emolument.emolument_extra.other.m}}
				    </span></td><td t="n" id="sjs-F26"><span contenteditable="true">
					{{file.business_cost.main.staff_emolument.emolument_extra.other.y}}
				    </span></td><td t="s" id="sjs-G26"><span contenteditable="true">KTT02Z019</span></td><td t="s" id="sjs-H26"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设备维修费</span></td><td t="s" id="sjs-I26"><span contenteditable="true">137</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L26"><span contenteditable="true">
					{{file.manage_fee.fix_cost.equipment_fix.m}}
				    </span></td><td t="n" id="sjs-M26"><span contenteditable="true">
					{{file.manage_fee.fix_cost.equipment_fix.y}}
				    </span></td><td t="s" id="sjs-N26"><span contenteditable="true">KTT02Z118</span></td></tr>
                <tr><td t="s" id="sjs-A27"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、折旧费</span></td><td t="s" id="sjs-B27"><span contenteditable="true">23</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E27"><span contenteditable="true">
					{{file.business_cost.main.depreciation.m}}
				    </span></td><td t="n" id="sjs-F27"><span contenteditable="true">
					{{file.business_cost.main.depreciation.y}}
				    </span></td><td t="s" id="sjs-G27"><span contenteditable="true">KTT02Z020</span></td><td t="s" id="sjs-H27"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）低值易耗品摊销</span></td><td t="s" id="sjs-I27"><span contenteditable="true">138</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L27"><span contenteditable="true">
					{{file.manage_fee.low_value_depreciation_amortize.m}}
				    </span></td><td t="n" id="sjs-M27"><span contenteditable="true">
					{{file.manage_fee.low_value_depreciation_amortize.y}}
				    </span></td><td t="s" id="sjs-N27"><span contenteditable="true">KTT02Z119</span></td></tr>
                <tr><td t="s" id="sjs-A28"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、维修费</span></td><td t="s" id="sjs-B28"><span contenteditable="true">24</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E28"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.m}}
                    </span></td><td t="n" id="sjs-F28"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.y}}
                    </span></td><td t="s" id="sjs-G28"><span contenteditable="true">KTT02Z021</span></td><td t="s" id="sjs-H28"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）办公费</span></td><td t="s" id="sjs-I28"><span contenteditable="true">139</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L28"><span contenteditable="true">
                    {{file.manage_fee.officail_work.m}}
                    </span></td><td t="n" id="sjs-M28"><span contenteditable="true">
                    {{file.manage_fee.officail_work.y}}
                    </span></td><td t="s" id="sjs-N28"><span contenteditable="true">KTT02Z120</span></td></tr>
                <tr><td t="s" id="sjs-A29"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：房屋维修费</span></td><td t="s" id="sjs-B29"><span contenteditable="true">25</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E29"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.house_fix.m}}
                    </span></td><td t="n" id="sjs-F29"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.house_fix.y}}
                    </span></td><td t="s" id="sjs-G29"><span contenteditable="true">KTT02Z022</span></td><td t="s" id="sjs-H29"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七）差旅费</span></td><td t="s" id="sjs-I29"><span contenteditable="true">140</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L29"><span contenteditable="true">
                    {{file.manage_fee.trip_fee.m}}
                    </span></td><td t="n" id="sjs-M29"><span contenteditable="true">
                    {{file.manage_fee.trip_fee.y}}
                    </span></td><td t="s" id="sjs-N29"><span contenteditable="true">KTT02Z121</span></td></tr>
                <tr><td t="s" id="sjs-A30"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆维修费</span></td><td t="s" id="sjs-B30"><span contenteditable="true">26</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E30"><span contenteditable="true">
					{{file.business_cost.main.fix_cost.car_fix.m}}
				    </span></td><td t="n" id="sjs-F30"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.car_fix.y}}
                    </span></td><td t="s" id="sjs-G30"><span contenteditable="true">KTT02Z023</span></td><td t="s" id="sjs-H30"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（八）业务招待费</span></td><td t="s" id="sjs-I30"><span contenteditable="true">141</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L30"><span contenteditable="true">
                    {{file.manage_fee.business_service_fee.m}}
                    </span></td><td t="n" id="sjs-M30"><span contenteditable="true">
                    {{file.manage_fee.business_service_fee.y}}
                    </span></td><td t="s" id="sjs-N30"><span contenteditable="true">KTT02Z122</span></td></tr>
                <tr><td t="s" id="sjs-A31"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设备维修费</span></td><td t="s" id="sjs-B31"><span contenteditable="true">27</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E31"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.equipment_fix.m}}
                    </span></td><td t="n" id="sjs-F31"><span contenteditable="true">
                    {{file.business_cost.main.fix_cost.equipment_fix.y}}
                    </span></td><td t="s" id="sjs-G31"><span contenteditable="true">KTT02Z024</span></td><td t="s" id="sjs-H31"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（九）绿化清卫费</span></td><td t="s" id="sjs-I31"><span contenteditable="true">142</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L31"><span contenteditable="true">
					{{file.manage_fee.afforest_sanitation.m}}
				    </span></td><td t="n" id="sjs-M31"><span contenteditable="true">
                    {{file.manage_fee.afforest_sanitation.y}}
                    </span></td><td t="s" id="sjs-N31"><span contenteditable="true">KTT02Z123</span></td></tr>
                <tr><td t="s" id="sjs-A32"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他维修费</span></td><td t="s" id="sjs-B32"><span contenteditable="true">28</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E32"><span contenteditable="true">
					{{file.business_cost.main.fix_cost.other_fix.m}}
				    </span></td><td t="n" id="sjs-F32"><span contenteditable="true">
					{{file.business_cost.main.fix_cost.other_fix.y}}
				    </span></td><td t="s" id="sjs-G32"><span contenteditable="true">KTT02Z025</span></td><td t="s" id="sjs-H32"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十）&nbsp;租赁费</span></td><td t="s" id="sjs-I32"><span contenteditable="true">143</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L32"><span contenteditable="true">
					{{file.manage_fee.rent.m}}
				    </span></td><td t="n" id="sjs-M32"><span contenteditable="true">
                    {{file.manage_fee.rent.y}}
                    </span></td><td t="s" id="sjs-N32"><span contenteditable="true">KTT02Z168</span></td></tr>
                <tr><td t="s" id="sjs-A33"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、低值易耗品摊销</span></td><td t="s" id="sjs-B33"><span contenteditable="true">29</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E33"><span contenteditable="true">
					{{file.business_cost.main.low_value_depreciation_amortize.m}}
				    </span></td><td t="n" id="sjs-F33"><span contenteditable="true">
					{{file.business_cost.main.low_value_depreciation_amortize.y}}
				    </span></td><td t="s" id="sjs-G33"><span contenteditable="true">KTT02Z026</span></td><td t="s" id="sjs-H33"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：房屋租赁费</span></td><td t="s" id="sjs-I33"><span contenteditable="true">144</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L33"><span contenteditable="true">
					{{file.manage_fee.rent.house_rent.m}}
				    </span></td><td t="n" id="sjs-M33"><span contenteditable="true">
                    {{file.manage_fee.rent.house_rent.y}}
                    </span></td><td t="s" id="sjs-N33"><span contenteditable="true">KTT02Z169</span></td></tr>
                <tr><td t="s" id="sjs-A34"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：仪器仪表摊销</span></td><td t="s" id="sjs-B34"><span contenteditable="true">30</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E34"><span contenteditable="true">
					{{file.business_cost.main.low_value_depreciation_amortize.instrument.m}}
				    </span></td><td t="n" id="sjs-F34"><span contenteditable="true">
					{{file.business_cost.main.low_value_depreciation_amortize.instrument.y}}
				    </span></td><td t="s" id="sjs-G34"><span contenteditable="true">KTT02Z027</span></td><td t="s" id="sjs-H34"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆租赁费</span></td><td t="s" id="sjs-I34"><span contenteditable="true">145</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L34"><span contenteditable="true">
					{{file.manage_fee.rent.car_rent.m}}
				    </span></td><td t="n" id="sjs-M34"><span contenteditable="true">
					{{file.manage_fee.rent.car_rent.m}}
				    </span></td><td t="s" id="sjs-N34"><span contenteditable="true">KTT02Z170</span></td></tr>
                <tr><td t="s" id="sjs-A35"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、电路及网元租赁费</span></td><td t="s" id="sjs-B35"><span contenteditable="true">31</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E35"><span contenteditable="true">
					{{file.business_cost.main.circuit_network_rent.m}}
				    </span></td><td t="n" id="sjs-F35"><span contenteditable="true">
					{{file.business_cost.main.circuit_network_rent.y}}
				    </span></td><td t="s" id="sjs-G35"><span contenteditable="true">KTT02Z028</span></td><td t="s" id="sjs-H35"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十一）物业管理费</span></td><td t="s" id="sjs-I35"><span contenteditable="true">146</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L35"><span contenteditable="true">
					{{file.manage_fee.tenement_manage_cost.m}}
				    </span></td><td t="n" id="sjs-M35"><span contenteditable="true">
					{{file.manage_fee.tenement_manage_cost.y}}
				    </span></td><td t="s" id="sjs-N35"><span contenteditable="true">KTT02Z127</span></td></tr>
                <tr><td t="s" id="sjs-A36"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：电路租赁费</span></td><td t="s" id="sjs-B36"><span contenteditable="true">32</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E36"><span contenteditable="true">
                    {{file.business_cost.main.circuit_network_rent.circuit_rent.m}}
                    </span></td><td t="n" id="sjs-F36"><span contenteditable="true">
                    {{file.business_cost.main.circuit_network_rent.circuit_rent.y}}
                    </span></td><td t="s" id="sjs-G36"><span contenteditable="true">KTT02Z146</span></td><td t="s" id="sjs-H36"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十二）水费</span></td><td t="s" id="sjs-I36"><span contenteditable="true">147</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L36"><span contenteditable="true">
                    {{file.manage_fee.water_fee.m}}
                    </span></td><td t="n" id="sjs-M36"><span contenteditable="true">
                    {{file.manage_fee.water_fee.y}}
                    </span></td><td t="s" id="sjs-N36"><span contenteditable="true">KTT02Z128</span></td></tr>
                <tr><td t="s" id="sjs-A37"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互联网出口</span></td><td t="s" id="sjs-B37"><span contenteditable="true">33</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E37"><span contenteditable="true">
					{{file.business_cost.main.circuit_network_rent.network_rent.m}}
				    </span></td><td t="n" id="sjs-F37"><span contenteditable="true">
                    {{file.business_cost.main.circuit_network_rent.network_rent.y}}
                    </span></td><td t="s" id="sjs-G37"><span contenteditable="true">KTT02Z147</span></td><td t="s" id="sjs-H37"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十三）电费</span></td><td t="s" id="sjs-I37"><span contenteditable="true">148</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L37"><span contenteditable="true">
                    {{file.manage_fee.electric_fee.m}}
                    </span></td><td t="n" id="sjs-M37"><span contenteditable="true">
                    {{file.manage_fee.electric_fee.y}}
                    </span></td><td t="s" id="sjs-N37"><span contenteditable="true">KTT02Z129</span></td></tr>
                <tr><td t="s" id="sjs-A38"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-B38"><span contenteditable="true">34</span></td><td t="s" id="sjs-C38"><span contenteditable="true">改名</span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E38"><span contenteditable="true">
					{{file.business_cost.main.circuit_network_rent.other.m}}
				    </span></td><td t="n" id="sjs-F38"><span contenteditable="true">
					{{file.business_cost.main.circuit_network_rent.other.y}}
				    </span></td><td t="s" id="sjs-G38"><span contenteditable="true">KTT02Z148</span></td><td t="s" id="sjs-H38"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十四）取暖费</span></td><td t="s" id="sjs-I38"><span contenteditable="true">149</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L38"><span contenteditable="true">
					{{file.manage_fee.warm_fee.m}}
				    </span></td><td t="n" id="sjs-M38"><span contenteditable="true">
					{{file.manage_fee.warm_fee.y}}
				 </span></td><td t="s" id="sjs-N38"><span contenteditable="true">KTT02Z130</span></td></tr>
                <tr><td t="s" id="sjs-A39"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、水电取暖费</span></td><td t="s" id="sjs-B39"><span contenteditable="true">35</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E39"><span contenteditable="true">
                    {{file.business_cost.main.water_electric_warm.m}}
                    </span></td><td t="n" id="sjs-F39"><span contenteditable="true">
                    {{file.business_cost.main.water_electric_warm.y}}
                    </span></td><td t="s" id="sjs-G39"><span contenteditable="true">KTT02Z032</span></td><td t="s" id="sjs-H39"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十五）车辆运行费</span></td><td t="s" id="sjs-I39"><span contenteditable="true">150</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L39"><span contenteditable="true">
                    {{file.manage_fee.car_drive.m}}
                    </span></td><td t="n" id="sjs-M39"><span contenteditable="true">
                    {{file.manage_fee.car_drive.y}}
                    </span></td><td t="s" id="sjs-N39"><span contenteditable="true">KTT02Z131</span></td></tr>
                <tr><td t="s" id="sjs-A40"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7、动力费</span></td><td t="s" id="sjs-B40"><span contenteditable="true">36</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E40"><span contenteditable="true">
					{{file.business_cost.main.power.m}}
				    </span></td><td t="n" id="sjs-F40"><span contenteditable="true">
					{{file.business_cost.main.power.y}}
				    </span></td><td t="s" id="sjs-G40"><span contenteditable="true">KTT02Z033</span></td><td t="s" id="sjs-H40"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十六）财产保险费</span></td><td t="s" id="sjs-I40"><span contenteditable="true">151</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L40"><span contenteditable="true">
					{{file.manage_fee.property_insurance.m}}
				    </span></td><td t="n" id="sjs-M40"><span contenteditable="true">
					{{file.manage_fee.property_insurance.y}}
				    </span></td><td t="s" id="sjs-N40"><span contenteditable="true">KTT02Z132</span></td></tr>
                <tr><td t="s" id="sjs-A41"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8、业务用品费</span></td><td t="s" id="sjs-B41"><span contenteditable="true">37</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E41"><span contenteditable="true">
                    {{file.business_cost.main.business_articles.m}}
                    </span></td><td t="n" id="sjs-F41"><span contenteditable="true">
                    {{file.business_cost.main.business_articles.y}}
                    </span></td><td t="s" id="sjs-G41"><span contenteditable="true">KTT02Z034</span></td><td t="s" id="sjs-H41"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十七）邮寄通信运杂费</span></td><td t="s" id="sjs-I41"><span contenteditable="true">152</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L41"><span contenteditable="true">
                    {{file.manage_fee.post_communicate.m}}
                    </span></td><td t="n" id="sjs-M41"><span contenteditable="true">
                    {{file.manage_fee.post_communicate.y}}
                    </span></td><td t="s" id="sjs-N41"><span contenteditable="true">KTT02Z133</span></td></tr>
                <tr><td t="s" id="sjs-A42"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9、车辆运行费</span></td><td t="s" id="sjs-B42"><span contenteditable="true">38</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E42"><span contenteditable="true">
                    {{file.business_cost.main.car_drive.m}}
                    </span></td><td t="n" id="sjs-F42"><span contenteditable="true">
                    {{file.business_cost.main.car_drive.y}}
                    </span></td><td t="s" id="sjs-G42"><span contenteditable="true">KTT02Z035</span></td><td t="s" id="sjs-H42"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(十八）会议费</span></td><td t="s" id="sjs-I42"><span contenteditable="true">153</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L42"><span contenteditable="true">
					{{file.manage_fee.meeting.m}}
				    </span></td><td t="n" id="sjs-M42"><span contenteditable="true">
                    {{file.manage_fee.meeting.y}}
                    </span></td><td t="s" id="sjs-N42"><span contenteditable="true">KTT02Z134</span></td></tr>
                <tr><td t="s" id="sjs-A43"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10、邮寄通信运杂费</span></td><td t="s" id="sjs-B43"><span contenteditable="true">39</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E43"><span contenteditable="true">
					{{file.business_cost.main.post_communicate.m}}
				    </span></td><td t="n" id="sjs-F43"><span contenteditable="true">
					{{file.business_cost.main.post_communicate.y}}
				    </span></td><td t="s" id="sjs-G43"><span contenteditable="true">KTT02Z036</span></td><td t="s" id="sjs-H43"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十九）警卫费</span></td><td t="s" id="sjs-I43"><span contenteditable="true">154</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L43"><span contenteditable="true">
					{{file.manage_fee.guard.m}}
				    </span></td><td t="n" id="sjs-M43"><span contenteditable="true">
					{{file.manage_fee.guard.y}}
				    </span></td><td t="s" id="sjs-N43"><span contenteditable="true">KTT02Z135</span></td></tr>
                <tr><td t="s" id="sjs-A44"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11、保险费</span></td><td t="s" id="sjs-B44"><span contenteditable="true">40</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E44"><span contenteditable="true">
					{{file.business_cost.main.insurance.m}}
				    </span></td><td t="n" id="sjs-F44"><span contenteditable="true">
					{{file.business_cost.main.insurance.y}}
				    </span></td><td t="s" id="sjs-G44"><span contenteditable="true">KTT02Z037</span></td><td t="s" id="sjs-H44"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二十）党团活动费</span></td><td t="s" id="sjs-I44"><span contenteditable="true">155</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L44"><span contenteditable="true">
                    {{file.manage_fee.party_group_activity.m}}
                    </span></td><td t="n" id="sjs-M44"><span contenteditable="true">
                    {{file.manage_fee.party_group_activity.y}}
                    </span></td><td t="s" id="sjs-N44"><span contenteditable="true">KTT02Z136</span></td></tr>
                <tr><td t="s" id="sjs-A45"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12、差旅费</span></td><td t="s" id="sjs-B45"><span contenteditable="true">41</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E45"><span contenteditable="true">
					{{file.business_cost.main.trip_fee.m}}
				    </span></td><td t="n" id="sjs-F45"><span contenteditable="true">
					{{file.business_cost.main.trip_fee.y}}
				    </span></td><td t="s" id="sjs-G45"><span contenteditable="true">KTT02Z038</span></td><td t="s" id="sjs-H45"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二十一）交通费</span></td><td t="s" id="sjs-I45"><span contenteditable="true">156</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L45"><span contenteditable="true">
					{{file.manage_fee.traffic.m}}
				    </span></td><td t="n" id="sjs-M45"><span contenteditable="true">
					{{file.manage_fee.traffic.y}}
				    </span></td><td t="s" id="sjs-N45"><span contenteditable="true">KTT02Z137</span></td></tr>
                <tr><td t="s" id="sjs-A46"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13、图书资料费</span></td><td t="s" id="sjs-B46"><span contenteditable="true">42</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E46"><span contenteditable="true">
					{{file.business_cost.main.book_document_fee.m}}
				    </span></td><td t="n" id="sjs-F46"><span contenteditable="true">
					{{file.business_cost.main.book_document_fee.y}}
				    </span></td><td t="s" id="sjs-G46"><span contenteditable="true">KTT02Z039</span></td><td t="s" id="sjs-H46"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二十二）&nbsp;&nbsp;使用权资产折旧费</span></td><td t="s" id="sjs-I46"><span contenteditable="true">157</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L46"><span contenteditable="true">
					{{file.manage_fee.using_right_property_depreciation.m}}
				    </span></td><td t="n" id="sjs-M46"><span contenteditable="true">
					{{file.manage_fee.using_right_property_depreciation.y}}
				    </span></td><td t="s" id="sjs-N46"><span contenteditable="true">KTT02Z171</span></td></tr>
                <tr><td t="s" id="sjs-A47"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14、物业管理费</span></td><td t="s" id="sjs-B47"><span contenteditable="true">43</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E47"><span contenteditable="true">
					{{file.business_cost.main.tenement_manage_cost.m}}
				    </span></td><td t="n" id="sjs-F47"><span contenteditable="true">
					{{file.business_cost.main.tenement_manage_cost.y}}
				    </span></td><td t="s" id="sjs-G47"><span contenteditable="true">KTT02Z040</span></td><td t="s" id="sjs-H47"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：房屋使用权资产折旧费</span></td><td t="s" id="sjs-I47"><span contenteditable="true">158</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L47"><span contenteditable="true">
					{{file.manage_fee.using_right_property_depreciation.house_using_right.m}}
				    </span></td><td t="n" id="sjs-M47"><span contenteditable="true">
					{{file.manage_fee.using_right_property_depreciation.house_using_right.y}}
				    </span></td><td t="s" id="sjs-N47"><span contenteditable="true">KTT02Z172</span></td></tr>
                <tr><td t="s" id="sjs-A48"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15、办公费</span></td><td t="s" id="sjs-B48"><span contenteditable="true">44</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E48"><span contenteditable="true">
					{{file.business_cost.main.officail_work.m}}
				    </span></td><td t="n" id="sjs-F48"><span contenteditable="true">
					{{file.business_cost.main.officail_work.y}}
				    </span></td><td t="s" id="sjs-G48"><span contenteditable="true">KTT02Z041</span></td><td t="s" id="sjs-H48"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;场地使用权资产折旧</span></td><td t="s" id="sjs-I48"><span contenteditable="true">159</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L48"><span contenteditable="true">
					{{file.manage_fee.using_right_property_depreciation.groud_using_right.m}}
				    </span></td><td t="n" id="sjs-M48"><span contenteditable="true">
					{{file.manage_fee.using_right_property_depreciation.groud_using_right.y}}
				    </span></td><td t="s" id="sjs-N48"><span contenteditable="true">KTT02Z173</span></td></tr>
                <tr><td t="s" id="sjs-A49"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16、会议费</span></td><td t="s" id="sjs-B49"><span contenteditable="true">45</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E49"><span contenteditable="true">
					{{file.business_cost.main.meeting.m}}
				    </span></td><td t="n" id="sjs-F49"><span contenteditable="true">
                    {{file.business_cost.main.meeting.y}}
                    </span></td><td t="s" id="sjs-G49"><span contenteditable="true">KTT02Z042</span></td><td t="s" id="sjs-H49"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二十三）非租赁使用费</span></td><td t="s" id="sjs-I49"><span contenteditable="true">160</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L49"><span contenteditable="true">
					{{file.manage_fee.non_rent_using_fee.m}}
				    </span></td><td t="n" id="sjs-M49"><span contenteditable="true">
					{{file.manage_fee.non_rent_using_fee.y}}
				    </span></td><td t="s" id="sjs-N49"><span contenteditable="true">KTT02Z174</span></td></tr>
                <tr><td t="s" id="sjs-A50"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17、业务外包费</span></td><td t="s" id="sjs-B50"><span contenteditable="true">46</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E50"><span contenteditable="true">
                    {{file.business_cost.main.business_outsourcing.m}}
                    </span></td><td t="n" id="sjs-F50"><span contenteditable="true">
                    {{file.business_cost.main.business_outsourcing.y}}
                    </span></td><td t="s" id="sjs-G50"><span contenteditable="true">KTT02Z043</span></td><td t="s" id="sjs-H50"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二十四）咨询费</span></td><td t="s" id="sjs-I50"><span contenteditable="true">161</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L50"><span contenteditable="true">
                    {{file.manage_fee.consult_fee.m}}
                    </span></td><td t="n" id="sjs-M50"><span contenteditable="true">
                    {{file.manage_fee.consult_fee.y}}
                    </span></td><td t="s" id="sjs-N50"><span contenteditable="true">KTT02Z175</span></td></tr>
                <tr><td t="s" id="sjs-A51"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18、安全保护费</span></td><td t="s" id="sjs-B51"><span contenteditable="true">47</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E51"><span contenteditable="true">
                    {{file.business_cost.main.safety_protect.m}}
                    </span></td><td t="n" id="sjs-F51"><span contenteditable="true">
                    {{file.business_cost.main.safety_protect.y}}
                    </span></td><td t="s" id="sjs-G51"><span contenteditable="true">KTT02Z044</span></td><td t="s" id="sjs-H51"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二十五）其他</span></td><td t="s" id="sjs-I51"><span contenteditable="true">162</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L51"><span contenteditable="true">
                    {{file.manage_fee.other.m}}
                    </span></td><td t="n" id="sjs-M51"><span contenteditable="true">
                    {{file.manage_fee.other.m}}
                    </span></td><td t="s" id="sjs-N51"><span contenteditable="true">KTT02Z176</span></td></tr>
                <tr><td t="s" id="sjs-A52"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19、交通费</span></td><td t="s" id="sjs-B52"><span contenteditable="true">48</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E52"><span contenteditable="true">
					{{file.business_cost.main.traffic.m}}
				    </span></td><td t="n" id="sjs-F52"><span contenteditable="true">
					{{file.business_cost.main.traffic.y}}
				    </span></td><td t="s" id="sjs-G52"><span contenteditable="true">KTT02Z045</span></td><td t="s" id="sjs-H52"><span contenteditable="true">六、研发费用</span></td><td t="s" id="sjs-I52"><span contenteditable="true">163</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L52"><span contenteditable="true">
					{{file.research_develop_cost.m}}
				    </span></td><td t="n" id="sjs-M52"><span contenteditable="true">
					{{file.research_develop_cost.y}}
				    </span></td><td t="s" id="sjs-N52"><span contenteditable="true">KTT02Z177</span></td></tr>
                <tr><td t="s" id="sjs-A53"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20、系统集成费</span></td><td t="s" id="sjs-B53"><span contenteditable="true">49</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E53"><span contenteditable="true">
					{{file.business_cost.main.system_integration.m}}
				    </span></td><td t="n" id="sjs-F53"><span contenteditable="true">
					{{file.business_cost.main.system_integration.y}}
				    </span></td><td t="s" id="sjs-G53"><span contenteditable="true">KTT02Z046</span></td><td t="s" id="sjs-H53"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）职工薪酬</span></td><td t="s" id="sjs-I53"><span contenteditable="true">164</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L53"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.m}}
				    </span></td><td t="n" id="sjs-M53"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.y}}
				    </span></td><td t="s" id="sjs-N53"><span contenteditable="true">KTT02Z178</span></td></tr>
                <tr><td t="s" id="sjs-A54"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21、租赁费</span></td><td t="s" id="sjs-B54"><span contenteditable="true">50</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E54"><span contenteditable="true">
					{{file.business_cost.main.rent.m}}
				    </span></td><td t="n" id="sjs-F54"><span contenteditable="true">
					{{file.business_cost.main.rent.y}}
				    </span></td><td t="s" id="sjs-G54"><span contenteditable="true">KTT02Z149</span></td><td t="s" id="sjs-H54"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：工资</span></td><td t="s" id="sjs-I54"><span contenteditable="true">165</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L54"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.emolument.m}}
				    </span></td><td t="n" id="sjs-M54"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.emolument.y}}
				    </span></td><td t="s" id="sjs-N54"><span contenteditable="true">KTT02Z179</span></td></tr>
                <tr><td t="s" id="sjs-A55"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：房屋租赁费</span></td><td t="s" id="sjs-B55"><span contenteditable="true">51</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E55"><span contenteditable="true">
					{{file.business_cost.main.rent.house_rent.m}}
				    </span></td><td t="n" id="sjs-F55"><span contenteditable="true">
					{{file.business_cost.main.rent.house_rent.y}}
				    </span></td><td t="s" id="sjs-G55"><span contenteditable="true">KTT02Z150</span></td><td t="s" id="sjs-H55"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;福利费</span></td><td t="s" id="sjs-I55"><span contenteditable="true">166</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L55"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.welfare.m}}
				    </span></td><td t="n" id="sjs-M55"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.welfare.y}}
				    </span></td><td t="s" id="sjs-N55"><span contenteditable="true">KTT02Z180</span></td></tr>
                <tr><td t="s" id="sjs-A56"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆租赁费</span></td><td t="s" id="sjs-B56"><span contenteditable="true">52</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E56"><span contenteditable="true">
					{{file.business_cost.main.rent.car_rent.m}}
				    </span></td><td t="n" id="sjs-F56"><span contenteditable="true">
					{{file.business_cost.main.rent.car_rent.y}}
				    </span></td><td t="s" id="sjs-G56"><span contenteditable="true">KTT02Z151</span></td><td t="s" id="sjs-H56"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：使用权资产折旧</span></td><td t="s" id="sjs-I56"><span contenteditable="true">167</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L56"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.welfare.using_right_property_depreciation.m}}
				    </span></td><td t="n" id="sjs-M56"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.welfare.using_right_property_depreciation.y}}
				    </span></td><td t="s" id="sjs-N56"><span contenteditable="true">KTT02Z181</span></td></tr>
                <tr><td t="s" id="sjs-A57"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22、材料费</span></td><td t="s" id="sjs-B57"><span contenteditable="true">53</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E57"><span contenteditable="true">
					{{file.business_cost.main.material.m}}
				    </span></td><td t="n" id="sjs-F57"><span contenteditable="true">
					{{file.business_cost.main.material.y}}
				    </span></td><td t="s" id="sjs-G57"><span contenteditable="true">KTT02Z050</span></td><td t="s" id="sjs-H57"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职工保险</span></td><td t="s" id="sjs-I57"><span contenteditable="true">168</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L57"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.insurance.m}}
				    </span></td><td t="n" id="sjs-M57"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.insurance.y}}
				    </span></td><td t="s" id="sjs-N57"><span contenteditable="true">KTT02Z182</span></td></tr>
                <tr><td t="s" id="sjs-A58"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23、业务技术支撑费</span></td><td t="s" id="sjs-B58"><span contenteditable="true">54</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E58"><span contenteditable="true">
					{{file.business_cost.main.business_technology_support.m}}
				    </span></td><td t="n" id="sjs-F58"><span contenteditable="true">
					{{file.business_cost.main.business_technology_support.y}}
				    </span></td><td t="s" id="sjs-G58"><span contenteditable="true">KTT02Z051</span></td><td t="s" id="sjs-H58"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：企业年金</span></td><td t="s" id="sjs-I58"><span contenteditable="true">169</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L58"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.insurance.enterprise_year_fund.m}}
				    </span></td><td t="n" id="sjs-M58"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.insurance.enterprise_year_fund.y}}
				    </span></td><td t="s" id="sjs-N58"><span contenteditable="true">KTT02Z183</span></td></tr>
                <tr><td t="s" id="sjs-A59"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24、无形资产摊销费</span></td><td t="s" id="sjs-B59"><span contenteditable="true">55</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E59"><span contenteditable="true">
					{{file.business_cost.main.intangible_assets_amortize.m}}
				    </span></td><td t="n" id="sjs-F59"><span contenteditable="true">
					{{file.business_cost.main.intangible_assets_amortize.y}}
				    </span></td><td t="s" id="sjs-G59"><span contenteditable="true">KTT02Z052</span></td><td t="s" id="sjs-H59"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳务费</span></td><td t="s" id="sjs-I59"><span contenteditable="true">170</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L59"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.service_fee.m}}
				    </span></td><td t="n" id="sjs-M59"><span contenteditable="true">
					{{file.research_develop_cost.staff_emolument.service_fee.y}}
				    </span></td><td t="s" id="sjs-N59"><span contenteditable="true">KTT02Z184</span></td></tr>
                <tr><td t="s" id="sjs-A60"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：土地使用权</span></td><td t="s" id="sjs-B60"><span contenteditable="true">56</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E60"><span contenteditable="true">
					{{file.business_cost.main.intangible_assets_amortize.land_using_right.m}}
				    </span></td><td t="n" id="sjs-F60"><span contenteditable="true">
					{{file.business_cost.main.intangible_assets_amortize.land_using_right.y}}
				    </span></td><td t="s" id="sjs-G60"><span contenteditable="true">KTT02Z053</span></td><td t="s" id="sjs-H60"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）&nbsp;动力费</span></td><td t="s" id="sjs-I60"><span contenteditable="true">171</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L60"><span contenteditable="true">
					{{file.research_develop_cost.power.m}}
				    </span></td><td t="n" id="sjs-M60"><span contenteditable="true">
					{{file.research_develop_cost.power.y}}
				    </span></td><td t="s" id="sjs-N60"><span contenteditable="true">KTT02Z185</span></td></tr>
                <tr><td t="s" id="sjs-A61"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25、客服外包费</span></td><td t="s" id="sjs-B61"><span contenteditable="true">57</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E61"><span contenteditable="true">
					{{file.business_cost.main.service_outsourcing.m}}
				    </span></td><td t="n" id="sjs-F61"><span contenteditable="true">
					{{file.business_cost.main.service_outsourcing.y}}
				    </span></td><td t="s" id="sjs-G61"><span contenteditable="true">KTT02Z054</span></td><td t="s" id="sjs-H61"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）&nbsp;低值易耗品摊销</span></td><td t="s" id="sjs-I61"><span contenteditable="true">172</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L61"><span contenteditable="true">
					{{file.research_develop_cost.low_value_depreciation_amortize.m}}
				    </span></td><td t="n" id="sjs-M61"><span contenteditable="true">
					{{file.research_develop_cost.low_value_depreciation_amortize.y}}
				    </span></td><td t="s" id="sjs-N61"><span contenteditable="true">KTT02Z186</span></td></tr>
                <tr><td t="s" id="sjs-A62"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26、网内结算支出</span></td><td t="s" id="sjs-B62"><span contenteditable="true">58</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E62"><span contenteditable="true">
					{{file.business_cost.main.in_network_settle_account_fee.m}}
				    </span></td><td t="n" id="sjs-F62"><span contenteditable="true">
					{{file.business_cost.main.in_network_settle_account_fee.y}}
				    </span></td><td t="s" id="sjs-G62"><span contenteditable="true">KTT02Z055</span></td><td t="s" id="sjs-H62"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）&nbsp;维修费</span></td><td t="s" id="sjs-I62"><span contenteditable="true">173</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L62"><span contenteditable="true">
					{{file.research_develop_cost.fix_cost.m}}
				    </span></td><td t="n" id="sjs-M62"><span contenteditable="true">
					{{file.research_develop_cost.fix_cost.y}}
				    </span></td><td t="s" id="sjs-N62"><span contenteditable="true">KTT02Z187</span></td></tr>
                <tr><td t="s" id="sjs-A63"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27、网间结算支出</span></td><td t="s" id="sjs-B63"><span contenteditable="true">59</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E63"><span contenteditable="true">
					{{file.business_cost.main.between_network_settle_account_fee.m}}
				    </span></td><td t="n" id="sjs-F63"><span contenteditable="true">
					{{file.business_cost.main.between_network_settle_account_fee.y}}
				    </span></td><td t="s" id="sjs-G63"><span contenteditable="true">KTT02Z056</span></td><td t="s" id="sjs-H63"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）&nbsp;折旧费</span></td><td t="s" id="sjs-I63"><span contenteditable="true">174</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L63"><span contenteditable="true">
					{{file.research_develop_cost.depreciation.m}}
				    </span></td><td t="n" id="sjs-M63"><span contenteditable="true">
					{{file.research_develop_cost.depreciation.y}}
				    </span></td><td t="s" id="sjs-N63"><span contenteditable="true">KTT02Z188</span></td></tr>
                <tr><td t="s" id="sjs-A64"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28、资源占用费</span></td><td t="s" id="sjs-B64"><span contenteditable="true">60</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E64"><span contenteditable="true">
					{{file.business_cost.main.resource_using.m}}
				    </span></td><td t="n" id="sjs-F64"><span contenteditable="true">
					{{file.business_cost.main.resource_using.y}}
				    </span></td><td t="s" id="sjs-G64"><span contenteditable="true">KTT02Z057</span></td><td t="s" id="sjs-H64"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）&nbsp;&nbsp;使用权资产折旧费</span></td><td t="s" id="sjs-I64"><span contenteditable="true">175</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L64"><span contenteditable="true">
					{{file.research_develop_cost.using_right_property_depreciation.m}}
				    </span></td><td t="n" id="sjs-M64"><span contenteditable="true">
					{{file.research_develop_cost.using_right_property_depreciation.y}}
				    </span></td><td t="s" id="sjs-N64"><span contenteditable="true">KTT02Z189</span></td></tr>
                <tr><td t="s" id="sjs-A65"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29、ICT业务成本</span></td><td t="s" id="sjs-B65"><span contenteditable="true">61</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E65"><span contenteditable="true">
					{{file.business_cost.main.TCT_fee.m}}
				    </span></td><td t="n" id="sjs-F65"><span contenteditable="true">
					{{file.business_cost.main.TCT_fee.y}}
				    </span></td><td t="s" id="sjs-G65"><span contenteditable="true">KTT02Z058</span></td><td t="s" id="sjs-H65"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七）&nbsp;租赁费</span></td><td t="s" id="sjs-I65"><span contenteditable="true">176</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L65"><span contenteditable="true">
					{{file.research_develop_cost.rent.m}}
				    </span></td><td t="n" id="sjs-M65"><span contenteditable="true">
					{{file.research_develop_cost.rent.y}}
				    </span></td><td t="s" id="sjs-N65"><span contenteditable="true">KTT02Z190</span></td></tr>
                <tr><td t="s" id="sjs-A66"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30、安全生产费&nbsp;</span></td><td t="s" id="sjs-B66"><span contenteditable="true">62</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E66"><span contenteditable="true">
					{{file.business_cost.main.safety_product_fee.m}}
				    </span></td><td t="n" id="sjs-F66"><span contenteditable="true">
					{{file.business_cost.main.safety_product_fee.y}}
				    </span></td><td t="s" id="sjs-G66"><span contenteditable="true">KTT02Z060</span></td><td t="s" id="sjs-H66"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（八）&nbsp;&nbsp;&nbsp;无形资产摊销</span></td><td t="s" id="sjs-I66"><span contenteditable="true">177</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L66"><span contenteditable="true">
					{{file.research_develop_cost.intangible_assets_amortize.m}}
				    </span></td><td t="n" id="sjs-M66"><span contenteditable="true">
					{{file.research_develop_cost.intangible_assets_amortize.y}}
				    </span></td><td t="s" id="sjs-N66"><span contenteditable="true">KTT02Z191</span></td></tr>
                <tr><td t="s" id="sjs-A67"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31、使用权资产折旧费</span></td><td t="s" id="sjs-B67"><span contenteditable="true">63</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E67"><span contenteditable="true">
                    {{file.business_cost.main.using_right_property_depreciation.m}}
                    </span></td><td t="n" id="sjs-F67"><span contenteditable="true">
                    {{file.business_cost.main.using_right_property_depreciation.y}}
                    </span></td><td t="s" id="sjs-G67"><span contenteditable="true">KTT02Z152</span></td><td t="s" id="sjs-H67"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（九）&nbsp;&nbsp;&nbsp;委托合作研发费</span></td><td t="s" id="sjs-I67"><span contenteditable="true">178</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L67"><span contenteditable="true">
					{{file.research_develop_cost.entrust_cooperate_fee.m}}
				    </span></td><td t="n" id="sjs-M67"><span contenteditable="true">
					{{file.research_develop_cost.entrust_cooperate_fee.y}}
				    </span></td><td t="s" id="sjs-N67"><span contenteditable="true">KTT02Z192</span></td></tr>
                <tr><td t="s" id="sjs-A68"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：房屋使用权资产折旧费</span></td><td t="s" id="sjs-B68"><span contenteditable="true">64</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E68"><span contenteditable="true">
                    {{file.business_cost.main.using_right_property_depreciation.house_using_right.m}}
                    </span></td><td t="n" id="sjs-F68"><span contenteditable="true">
                    {{file.business_cost.main.using_right_property_depreciation.house_using_right.y}}
                    </span></td><td t="s" id="sjs-G68"><span contenteditable="true">KTT02Z153</span></td><td t="s" id="sjs-H68"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十）&nbsp;&nbsp;&nbsp;新产品设计费</span></td><td t="s" id="sjs-I68"><span contenteditable="true">179</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L68"><span contenteditable="true">
					{{file.research_develop_cost.new_production_design.m}}
				    </span></td><td t="n" id="sjs-M68"><span contenteditable="true">
					{{file.research_develop_cost.new_production_design.y}}
				    </span></td><td t="s" id="sjs-N68"><span contenteditable="true">KTT02Z193</span></td></tr>
                <tr><td t="s" id="sjs-A69"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;场地使用权资产折旧</span></td><td t="s" id="sjs-B69"><span contenteditable="true">65</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E69"><span contenteditable="true">
					{{file.business_cost.main.using_right_property_depreciation.groud_using_right.m}}
				    </span></td><td t="n" id="sjs-F69"><span contenteditable="true">
					{{file.business_cost.main.using_right_property_depreciation.groud_using_right.y}}
				    </span></td><td t="s" id="sjs-G69"><span contenteditable="true">KTT02Z154</span></td><td t="s" id="sjs-H69"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十一）试验试制费</span></td><td t="s" id="sjs-I69"><span contenteditable="true">180</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L69"><span contenteditable="true">
					{{file.research_develop_cost.experiment_try.m}}
				    </span></td><td t="n" id="sjs-M69"><span contenteditable="true">
					{{file.research_develop_cost.experiment_try.y}}
				    </span></td><td t="s" id="sjs-N69"><span contenteditable="true">KTT02Z194</span></td></tr>
                <tr><td t="s" id="sjs-A70"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32、非租赁使用费</span></td><td t="s" id="sjs-B70"><span contenteditable="true">66</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E70"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.m}}
				    </span></td><td t="n" id="sjs-F70"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.y}}
				    </span></td><td t="s" id="sjs-G70"><span contenteditable="true">KTT02Z155</span></td><td t="s" id="sjs-H70"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十二）&nbsp;差旅费</span></td><td t="s" id="sjs-I70"><span contenteditable="true">181</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L70"><span contenteditable="true">
					{{file.research_develop_cost.trip_fee.m}}
				    </span></td><td t="n" id="sjs-M70"><span contenteditable="true">
					{{file.research_develop_cost.trip_fee.y}}
				    </span></td><td t="s" id="sjs-N70"><span contenteditable="true">KTT02Z195</span></td></tr>
                <tr><td t="s" id="sjs-A71"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：场地服务</span></td><td t="s" id="sjs-B71"><span contenteditable="true">67</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E71"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.groud_service.m}}
				    </span></td><td t="n" id="sjs-F71"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.groud_service.y}}
				    </span></td><td t="s" id="sjs-G71"><span contenteditable="true">KTT02Z156</span></td><td t="s" id="sjs-H71"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十三）会议费</span></td><td t="s" id="sjs-I71"><span contenteditable="true">182</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L71"><span contenteditable="true">
					{{file.research_develop_cost.meeting.m}}
				    </span></td><td t="n" id="sjs-M71"><span contenteditable="true">
					{{file.research_develop_cost.meeting.y}}
				    </span></td><td t="s" id="sjs-N71"><span contenteditable="true">KTT02Z196</span></td></tr>
                <tr><td t="s" id="sjs-A72"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆服务</span></td><td t="s" id="sjs-B72"><span contenteditable="true">68</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E72"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.car_service.m}}
				    </span></td><td t="n" id="sjs-F72"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.car_service.y}}
				    </span></td><td t="s" id="sjs-G72"><span contenteditable="true">KTT02Z157</span></td><td t="s" id="sjs-H72"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（十四）&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-I72"><span contenteditable="true">183</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L72"><span contenteditable="true">
					{{file.research_develop_cost.other.m}}
				    </span></td><td t="n" id="sjs-M72"><span contenteditable="true">
					{{file.research_develop_cost.other.y}}
				    </span></td><td t="s" id="sjs-N72"><span contenteditable="true">KTT02Z197</span></td></tr>
                <tr><td t="s" id="sjs-A73"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设备服务</span></td><td t="s" id="sjs-B73"><span contenteditable="true">69</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E73"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.equipment_service.m}}
				    </span></td><td t="n" id="sjs-F73"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.equipment_service.y}}
				    </span></td><td t="s" id="sjs-G73"><span contenteditable="true">KTT02Z158</span></td><td t="s" id="sjs-H73"><span contenteditable="true">七、财务费用</span></td><td t="s" id="sjs-I73"><span contenteditable="true">184</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L73"><span contenteditable="true">
                    {{file.finance_cost.m}}
                    </span></td><td t="n" id="sjs-M73"><span contenteditable="true">
                    {{file.finance_cost.y}}
                    </span></td><td t="s" id="sjs-N73"><span contenteditable="true">KTT02Z139</span></td></tr>
                <tr><td t="s" id="sjs-A74"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他服务</span></td><td t="s" id="sjs-B74"><span contenteditable="true">70</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E74"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.other_service.m}}
				    </span></td><td t="n" id="sjs-F74"><span contenteditable="true">
					{{file.business_cost.main.non_rent_using_fee.other_service.y}}
				    </span></td><td t="s" id="sjs-G74"><span contenteditable="true">KTT02Z159</span></td><td t="s" id="sjs-H74"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）&nbsp;利息收入</span></td><td t="s" id="sjs-I74"><span contenteditable="true">185</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L74"><span contenteditable="true">
                    {{file.finance_cost.interest_income.m}}
                    </span></td><td t="n" id="sjs-M74"><span contenteditable="true">
                    {{file.finance_cost.interest_income.y}}
                    </span></td><td t="s" id="sjs-N74"><span contenteditable="true">KTT02Z140</span></td></tr>
                <tr><td t="s" id="sjs-A75"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33、电路及网元服务费</span></td><td t="s" id="sjs-B75"><span contenteditable="true">71</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E75"><span contenteditable="true">
					{{file.business_cost.main.circuit_network_service.m}}
				    </span></td><td t="n" id="sjs-F75"><span contenteditable="true">
                    {{file.business_cost.main.circuit_network_service.y}}
                    </span></td><td t="s" id="sjs-G75"><span contenteditable="true">KTT02Z160</span></td><td t="s" id="sjs-H75"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）&nbsp;利息支出</span></td><td t="s" id="sjs-I75"><span contenteditable="true">186</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L75"><span contenteditable="true">
                    {{file.finance_cost.interest_disburse.m}}
                    </span></td><td t="n" id="sjs-M75"><span contenteditable="true">
                    {{file.finance_cost.interest_disburse.y}}
                    </span></td><td t="s" id="sjs-N75"><span contenteditable="true">KTT02Z141</span></td></tr>
                <tr><td t="s" id="sjs-A76"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34、其他</span></td><td t="s" id="sjs-B76"><span contenteditable="true">72</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E76"><span contenteditable="true">
                    {{file.business_cost.main.other.m}}
                    </span></td><td t="n" id="sjs-F76"><span contenteditable="true">
                    {{file.business_cost.main.other.y}}
                    </span></td><td t="s" id="sjs-G76"><span contenteditable="true">KTT02Z061</span></td><td t="s" id="sjs-H76"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）&nbsp;银行手续费</span></td><td t="s" id="sjs-I76"><span contenteditable="true">187</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L76"><span contenteditable="true">
                    {{file.finance_cost.bank_handle.m}}
                    </span></td><td t="n" id="sjs-M76"><span contenteditable="true">
                    {{file.finance_cost.bank_handle.y}}
                    </span></td><td t="s" id="sjs-N76"><span contenteditable="true">KTT02Z198</span></td></tr>
                <tr><td t="s" id="sjs-A77"><span contenteditable="true">&nbsp;&nbsp;（二）其他业务成本</span></td><td t="s" id="sjs-B77"><span contenteditable="true">73</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E77"><span contenteditable="true">
                    {{file.business_cost.other.m}}
                    </span></td><td t="n" id="sjs-F77"><span contenteditable="true">
                    {{file.business_cost.other.y}}
                    </span></td><td t="s" id="sjs-G77"><span contenteditable="true">KTT02Z062</span></td><td t="s" id="sjs-H77"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）租赁融资成本</span></td><td t="s" id="sjs-I77"><span contenteditable="true">188</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L77"><span contenteditable="true">
                    {{file.finance_cost.rent_financing_cost.m}}
                    </span></td><td t="n" id="sjs-M77"><span contenteditable="true">
                    {{file.finance_cost.rent_financing_cost.y}}
                    </span></td><td t="s" id="sjs-N77"><span contenteditable="true">KTT02Z199</span></td></tr>
                <tr><td t="s" id="sjs-A78"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：1、职工薪酬</span></td><td t="s" id="sjs-B78"><span contenteditable="true">74</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E78"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.m}}
				    </span></td><td t="n" id="sjs-F78"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.y}}
				    </span></td><td t="s" id="sjs-G78"><span contenteditable="true">KTT02Z063</span></td><td t="s" id="sjs-H78"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）汇兑损益</span></td><td t="s" id="sjs-I78"><span contenteditable="true">189</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L78"><span contenteditable="true">
					{{file.finance_cost.exchange_gain_or_loss.m}}
				    </span></td><td t="n" id="sjs-M78"><span contenteditable="true">
					{{file.finance_cost.exchange_gain_or_loss.y}}
				    </span></td><td t="s" id="sjs-N78"><span contenteditable="true">KTT02Z200</span></td></tr>
                <tr><td t="s" id="sjs-A79"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：工资</span></td><td t="s" id="sjs-B79"><span contenteditable="true">75</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E79"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument.m}}
				    </span></td><td t="n" id="sjs-F79"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument.y}}
				    </span></td><td t="s" id="sjs-G79"><span contenteditable="true">KTT02Z064</span></td><td t="s" id="sjs-H79"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）其他</span></td><td t="s" id="sjs-I79"><span contenteditable="true">190</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L79"><span contenteditable="true">
					{{file.finance_cost.other.m}}
				    </span></td><td t="n" id="sjs-M79"><span contenteditable="true">
					{{file.finance_cost.other.y}}
				    </span></td><td t="s" id="sjs-N79"><span contenteditable="true">KTT02Z201</span></td></tr>
                <tr><td t="s" id="sjs-A80"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳务费</span></td><td t="s" id="sjs-B80"><span contenteditable="true">76</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E80"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.service_fee.m}}
				    </span></td><td t="n" id="sjs-F80"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.service_fee.y}}
				    </span></td><td t="s" id="sjs-G80"><span contenteditable="true">KTT02Z065</span></td><td t="s" id="sjs-H80"><span contenteditable="true">八、资产减值损失</span></td><td t="s" id="sjs-I80"><span contenteditable="true">191</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L80"><span contenteditable="true">
					{{file.property_decrease_loss.m}}
				    </span></td><td t="n" id="sjs-M80"><span contenteditable="true">
					{{file.property_decrease_loss.y}}
				    </span></td><td t="s" id="sjs-N80"><span contenteditable="true">KTT02Z202</span></td></tr>
                <tr><td t="s" id="sjs-A81"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工资附加费合计</span></td><td t="s" id="sjs-B81"><span contenteditable="true">77</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E81"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.m}}
				    </span></td><td t="n" id="sjs-F81"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.y}}
				    </span></td><td t="s" id="sjs-G81"><span contenteditable="true">KTT02Z066</span></td><td t="s" id="sjs-H81"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预付账款</span></td><td t="s" id="sjs-I81"><span contenteditable="true">192</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L81"><span contenteditable="true">
					{{file.property_decrease_loss.prepayment.m}}
				    </span></td><td t="n" id="sjs-M81"><span contenteditable="true">
					{{file.property_decrease_loss.prepayment.y}}
				    </span></td><td t="s" id="sjs-N81"><span contenteditable="true">KTT02Z203</span></td></tr>
                <tr><td t="s" id="sjs-A82"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：职工福利费</span></td><td t="s" id="sjs-B82"><span contenteditable="true">78</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E82"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.m}}
				    </span></td><td t="n" id="sjs-F82"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.y}}
				    </span></td><td t="s" id="sjs-G82"><span contenteditable="true">KTT02Z067</span></td><td t="s" id="sjs-H82"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存货</span></td><td t="s" id="sjs-I82"><span contenteditable="true">193</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L82"><span contenteditable="true">
					{{file.property_decrease_loss.inventory.m}}
				    </span></td><td t="n" id="sjs-M82"><span contenteditable="true">
					{{file.property_decrease_loss.inventory.y}}
				    </span></td><td t="s" id="sjs-N82"><span contenteditable="true">KTT02Z204</span></td></tr>
                <tr><td t="s" id="sjs-A83"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：货币性福利</span></td><td t="s" id="sjs-B83"><span contenteditable="true">79</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E83"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.moneyness.m}}
				    </span></td><td t="n" id="sjs-F83"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.moneyness.y}}
				    </span></td><td t="s" id="sjs-G83"><span contenteditable="true">KTT02Z068</span></td><td t="s" id="sjs-H83"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期股权投资</span></td><td t="s" id="sjs-I83"><span contenteditable="true">194</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L83"><span contenteditable="true">
					{{file.property_decrease_loss.long_time_stock_rights.m}}
				    </span></td><td t="n" id="sjs-M83"><span contenteditable="true">
					{{file.property_decrease_loss.long_time_stock_rights.y}}
				    </span></td><td t="s" id="sjs-N83"><span contenteditable="true">KTT02Z205</span></td></tr>
                <tr><td t="s" id="sjs-A84"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非货币性福利</span></td><td t="s" id="sjs-B84"><span contenteditable="true">80</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E84"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.m}}
				    </span></td><td t="n" id="sjs-F84"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.y}}
				    </span></td><td t="s" id="sjs-G84"><span contenteditable="true">KTT02Z069</span></td><td t="s" id="sjs-H84"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产</span></td><td t="s" id="sjs-I84"><span contenteditable="true">195</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L84"><span contenteditable="true">
					{{file.property_decrease_loss.fixed_asserts.m}}
				    </span></td><td t="n" id="sjs-M84"><span contenteditable="true">
					{{file.property_decrease_loss.fixed_asserts.y}}
				    </span></td><td t="s" id="sjs-N84"><span contenteditable="true">KTT02Z206</span></td></tr>
                <tr><td t="s" id="sjs-A85"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：使用权资产折旧费</span></td><td t="s" id="sjs-B85"><span contenteditable="true">81</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E85"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.using_right_property_depreciation.m}}
				    </span></td><td t="n" id="sjs-F85"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.using_right_property_depreciation.y}}
				    </span></td><td t="s" id="sjs-G85"><span contenteditable="true">KTT02Z161</span></td><td t="s" id="sjs-H85"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无形资产</span></td><td t="s" id="sjs-I85"><span contenteditable="true">196</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L85"><span contenteditable="true">
					{{file.property_decrease_loss.intangible_assets.m}}
				    </span></td><td t="n" id="sjs-M85"><span contenteditable="true">
					{{file.property_decrease_loss.intangible_assets.y}}
				    </span></td><td t="s" id="sjs-N85"><span contenteditable="true">KTT02Z207</span></td></tr>
                <tr><td t="s" id="sjs-A86"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;折旧费</span></td><td t="s" id="sjs-B86"><span contenteditable="true">82</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E86"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.depreciation.m}}
				    </span></td><td t="n" id="sjs-F86"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.depreciation.y}}
				    </span></td><td t="s" id="sjs-G86"><span contenteditable="true">KTT02Z162</span></td><td t="s" id="sjs-H86"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在建工程</span></td><td t="s" id="sjs-I86"><span contenteditable="true">197</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L86"><span contenteditable="true">
					{{file.property_decrease_loss.building_project.m}}
				    </span></td><td t="n" id="sjs-M86"><span contenteditable="true">
					{{file.property_decrease_loss.building_project.y}}
				    </span></td><td t="s" id="sjs-N86"><span contenteditable="true">KTT02Z208</span></td></tr>
                <tr><td t="s" id="sjs-A87"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;租赁费</span></td><td t="s" id="sjs-B87"><span contenteditable="true">83</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E87"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.rent.m}}
				    </span></td><td t="n" id="sjs-F87"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.welfare.non_moneyness.rent.y}}
				    </span></td><td t="s" id="sjs-G87"><span contenteditable="true">KTT02Z163</span></td><td t="s" id="sjs-H87"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工程物资</span></td><td t="s" id="sjs-I87"><span contenteditable="true">198</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L87"><span contenteditable="true">
					{{file.property_decrease_loss.project_material.m}}
				    </span></td><td t="n" id="sjs-M87"><span contenteditable="true">
					{{file.property_decrease_loss.project_material.y}}
				    </span></td><td t="s" id="sjs-N87"><span contenteditable="true">KTT02Z209</span></td></tr>
                <tr><td t="s" id="sjs-A88"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住房公积金</span></td><td t="s" id="sjs-B88"><span contenteditable="true">84</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E88"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.house_fund.m}}
				    </span></td><td t="n" id="sjs-F88"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.house_fund.y}}
				    </span></td><td t="s" id="sjs-G88"><span contenteditable="true">KTT02Z070</span></td><td t="s" id="sjs-H88"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-I88"><span contenteditable="true">199</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L88"><span contenteditable="true">
					{{file.property_decrease_loss.other.m}}
				    </span></td><td t="n" id="sjs-M88"><span contenteditable="true">
					{{file.property_decrease_loss.other.y}}
				    </span></td><td t="s" id="sjs-N88"><span contenteditable="true">KTT02Z210</span></td></tr>
                <tr><td t="s" id="sjs-A89"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社会保险费</span></td><td t="s" id="sjs-B89"><span contenteditable="true">85</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E89"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.social_insurance.m}}
				    </span></td><td t="n" id="sjs-F89"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.social_insurance.y}}
				    </span></td><td t="s" id="sjs-G89"><span contenteditable="true">KTT02Z071</span></td><td t="s" id="sjs-H89"><span contenteditable="true">九、信用减值损失</span></td><td t="s" id="sjs-I89"><span contenteditable="true">200</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L89"><span contenteditable="true">
                    {{file.credit_decrease_loss.m}}
                    </span></td><td t="n" id="sjs-M89"><span contenteditable="true">
                    {{file.credit_decrease_loss.y}}
                    </span></td><td t="s" id="sjs-N89"><span contenteditable="true">KTT02Z211</span></td></tr>
                <tr><td t="s" id="sjs-A90"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职工教育经费</span></td><td t="s" id="sjs-B90"><span contenteditable="true">86</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E90"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.staff_education.m}}
				    </span></td><td t="n" id="sjs-F90"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.staff_education.y}}
				    </span></td><td t="s" id="sjs-G90"><span contenteditable="true">KTT02Z072</span></td><td t="s" id="sjs-H90"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收账款</span></td><td t="s" id="sjs-I90"><span contenteditable="true">201</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L90"><span contenteditable="true">
                    {{file.credit_decrease_loss.receivables.m}}
                    </span></td><td t="n" id="sjs-M90"><span contenteditable="true">
                    {{file.credit_decrease_loss.receivables.y}}
                    </span></td><td t="s" id="sjs-N90"><span contenteditable="true">KTT02Z212</span></td></tr>
                <tr><td t="s" id="sjs-A91"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工会经费</span></td><td t="s" id="sjs-B91"><span contenteditable="true">87</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E91"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.union_fund.m}}
				    </span></td><td t="n" id="sjs-F91"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.union_fund.y}}
				    </span></td><td t="s" id="sjs-G91"><span contenteditable="true">KTT02Z073</span></td><td t="s" id="sjs-H91"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他应收款</span></td><td t="s" id="sjs-I91"><span contenteditable="true">202</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L91"><span contenteditable="true">
					{{file.credit_decrease_loss.other_receivables.m}}
				    </span></td><td t="n" id="sjs-M91"><span contenteditable="true">
					{{file.credit_decrease_loss.other_receivables.y}}
				    </span></td><td t="s" id="sjs-N91"><span contenteditable="true">KTT02Z213</span></td></tr>
                <tr><td t="s" id="sjs-A92"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳动保护费</span></td><td t="s" id="sjs-B92"><span contenteditable="true">88</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E92"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.work_protect.m}}
				    </span></td><td t="n" id="sjs-F92"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.work_protect.y}}
				    </span></td><td t="s" id="sjs-G92"><span contenteditable="true">KTT02Z074</span></td><td t="s" id="sjs-H92"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;债权投资</span></td><td t="s" id="sjs-I92"><span contenteditable="true">203</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L92"><span contenteditable="true">
					{{file.credit_decrease_loss.creditor_right_investment.m}}
				    </span></td><td t="n" id="sjs-M92"><span contenteditable="true">
					{{file.credit_decrease_loss.creditor_right_investment.y}}
				    </span></td><td t="s" id="sjs-N92"><span contenteditable="true">KTT02Z214</span></td></tr>
                <tr><td t="s" id="sjs-A93"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-B93"><span contenteditable="true">89</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E93"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.other.m}}
				    </span></td><td t="n" id="sjs-F93"><span contenteditable="true">
					{{file.business_cost.other.staff_emolument.emolument_extra.other.y}}
				    </span></td><td t="s" id="sjs-G93"><span contenteditable="true">KTT02Z075</span></td><td t="s" id="sjs-H93"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</span></td><td t="s" id="sjs-I93"><span contenteditable="true">204</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L93"><span contenteditable="true">
					{{file.credit_decrease_loss.other.m}}
				    </span></td><td t="n" id="sjs-M93"><span contenteditable="true">
					{{file.credit_decrease_loss.other.y}}
				    </span></td><td t="s" id="sjs-N93"><span contenteditable="true">KTT02Z215</span></td></tr>
                <tr><td t="s" id="sjs-A94"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、折旧费</span></td><td t="s" id="sjs-B94"><span contenteditable="true">90</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E94"><span contenteditable="true">
					{{file.business_cost.other.depreciation.m}}
				    </span></td><td t="n" id="sjs-F94"><span contenteditable="true">
					{{file.business_cost.other.depreciation.y}}
				    </span></td><td t="s" id="sjs-G94"><span contenteditable="true">KTT02Z076</span></td><td t="s" id="sjs-H94"><span contenteditable="true">十、公允价值变动损益（损失以‘-’号填列）</span></td><td t="s" id="sjs-I94"><span contenteditable="true">205</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L94"><span contenteditable="true">
					{{file.fair_value_change.m}}
				    </span></td><td t="n" id="sjs-M94"><span contenteditable="true">
					{{file.fair_value_change.y}}
				    </span></td><td t="s" id="sjs-N94"><span contenteditable="true">KTT02160</span></td></tr>
                <tr><td t="s" id="sjs-A95"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、销售终端和商品</span></td><td t="s" id="sjs-B95"><span contenteditable="true">91</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E95"><span contenteditable="true">
                    {{file.business_cost.other.sell_terminal_commodity.m}}
                    </span></td><td t="n" id="sjs-F95"><span contenteditable="true">
					{{file.business_cost.other.sell_terminal_commodity.y}}
				    </span></td><td t="s" id="sjs-G95"><span contenteditable="true">KTT02Z077</span></td><td t="s" id="sjs-H95"><span contenteditable="true">十一、投资收益（损失以‘-’号填列）</span></td><td t="s" id="sjs-I95"><span contenteditable="true">206</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L95"><span contenteditable="true">
					{{file.investment_gain.m}}
				    </span></td><td t="n" id="sjs-M95"><span contenteditable="true">
					{{file.investment_gain.y}}
				    </span></td><td t="s" id="sjs-N95"><span contenteditable="true">KTT02161</span></td></tr>
                <tr><td t="s" id="sjs-A96"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：手机终端</span></td><td t="s" id="sjs-B96"><span contenteditable="true">92</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E96"><span contenteditable="true">
                    {{file.business_cost.other.sell_terminal_commodity.cellphone.m}}
                    </span></td><td t="n" id="sjs-F96"><span contenteditable="true">
                    {{file.business_cost.other.sell_terminal_commodity.cellphone.y}}
                    </span></td><td t="s" id="sjs-G96"><span contenteditable="true">KTT02Z078</span></td><td t="s" id="sjs-H96"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：&nbsp;&nbsp;&nbsp;&nbsp;银行理财收益</span></td><td t="s" id="sjs-I96"><span contenteditable="true">207</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L96"><span contenteditable="true">
					{{file.investment_gain.bank_money_manage_gain.m}}
				    </span></td><td t="n" id="sjs-M96"><span contenteditable="true">
					{{file.investment_gain.bank_money_manage_gain.y}}
				    </span></td><td t="s" id="sjs-N96"><span contenteditable="true">KTT02Z216</span></td></tr>
                <tr><td t="s" id="sjs-A97"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、销售设备</span></td><td t="s" id="sjs-B97"><span contenteditable="true">93</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E97"><span contenteditable="true">
					{{file.business_cost.other.sell_equipment.m}}
				    </span></td><td t="n" id="sjs-F97"><span contenteditable="true">
                    {{file.business_cost.other.sell_equipment.y}}
                    </span></td><td t="s" id="sjs-G97"><span contenteditable="true">KTT02Z079</span></td><td t="s" id="sjs-H97"><span contenteditable="true">十二、资产处置收益（损失以‘-’号填列）</span></td><td t="s" id="sjs-I97"><span contenteditable="true">208</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L97"><span contenteditable="true">
					{{file.property_dispose_gain.m}}
				    </span></td><td t="n" id="sjs-M97"><span contenteditable="true">
					{{file.property_dispose_gain.y}}
				    </span></td><td t="s" id="sjs-N97"><span contenteditable="true">KTT02254</span></td></tr>
                <tr><td t="s" id="sjs-A98"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、租赁业务成本</span></td><td t="s" id="sjs-B98"><span contenteditable="true">94</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E98"><span contenteditable="true">
					{{file.business_cost.other.rent_business_cost.m}}
				    </span></td><td t="n" id="sjs-F98"><span contenteditable="true">
					{{file.business_cost.other.rent_business_cost.y}}
				    </span></td><td t="s" id="sjs-G98"><span contenteditable="true">KTT02Z080</span></td><td t="s" id="sjs-H98"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;其中：非流动资产处置收益</span></td><td t="s" id="sjs-I98"><span contenteditable="true">209</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L98"><span contenteditable="true">
					{{file.property_dispose_gain.non_current_assets_dispose_gain.m}}
				    </span></td><td t="n" id="sjs-M98"><span contenteditable="true">
					{{file.property_dispose_gain.non_current_assets_dispose_gain.y}}
				    </span></td><td t="s" id="sjs-N98"><span contenteditable="true">KTT02255</span></td></tr>
                <tr><td t="s" id="sjs-A99"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：使用权资产折旧费</span></td><td t="s" id="sjs-B99"><span contenteditable="true">95</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E99"><span contenteditable="true">
					{{file.business_cost.other.rent_business_cost.using_right_property_depreciation.m}}
				    </span></td><td t="n" id="sjs-F99"><span contenteditable="true">
					{{file.business_cost.other.rent_business_cost.using_right_property_depreciation.y}}
				    </span></td><td t="s" id="sjs-G99"><span contenteditable="true">KTT02Z164</span></td><td t="s" id="sjs-H99"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：&nbsp;固定资产处置收益</span></td><td t="s" id="sjs-I99"><span contenteditable="true">210</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L99"><span contenteditable="true">
					{{file.property_dispose_gain.non_current_assets_dispose_gain.fixed_dispose_assets_gain.m}}
				    </span></td><td t="n" id="sjs-M99"><span contenteditable="true">
					{{file.property_dispose_gain.non_current_assets_dispose_gain.fixed_dispose_assets_gain.m}}
				    </span></td><td t="s" id="sjs-N99"><span contenteditable="true">KTT02256</span></td></tr>
                <tr><td t="s" id="sjs-A100"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、软件服务成本</span></td><td t="s" id="sjs-B100"><span contenteditable="true">96</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E100"><span contenteditable="true">
					{{file.business_cost.other.softwore_service_cost.m}}
				    </span></td><td t="n" id="sjs-F100"><span contenteditable="true">
                    {{file.business_cost.other.softwore_service_cost.y}}
                    </span></td><td t="s" id="sjs-G100"><span contenteditable="true">KTT02Z081</span></td><td t="s" id="sjs-H100"><span contenteditable="true">十三、其他收益</span></td><td t="s" id="sjs-I100"><span contenteditable="true">211</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L100"><span contenteditable="true">
					{{file.other_gain.m}}
				    </span></td><td t="n" id="sjs-M100"><span contenteditable="true">
					{{file.other_gain.m}}
				    </span></td><td t="s" id="sjs-N100"><span contenteditable="true">KTT02250</span></td></tr>
                <tr><td t="s" id="sjs-A101"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7、物业管理成本</span></td><td t="s" id="sjs-B101"><span contenteditable="true">97</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E101"><span contenteditable="true">
					{{file.business_cost.other.tenement_manage_cost.m}}
				    </span></td><td t="n" id="sjs-F101"><span contenteditable="true">
					{{file.business_cost.other.tenement_manage_cost.y}}
				    </span></td><td t="s" id="sjs-G101"><span contenteditable="true">KTT02Z082</span></td><td t="s" id="sjs-H101"><span contenteditable="true">十四、营业利润</span></td><td t="s" id="sjs-I101"><span contenteditable="true">212</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L101"><span contenteditable="true">
                    {{file.business_profit.m}}
                    </span></td><td t="n" id="sjs-M101"><span contenteditable="true">
                    {{file.business_profit.y}}
                    </span></td><td t="s" id="sjs-N101"><span contenteditable="true">KTT02162</span></td></tr>
                <tr><td t="s" id="sjs-A102"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8、物流服务</span></td><td t="s" id="sjs-B102"><span contenteditable="true">98</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E102"><span contenteditable="true">
					{{file.business_cost.other.physica_distribution_service.m}}
				    </span></td><td t="n" id="sjs-F102"><span contenteditable="true">
					{{file.business_cost.other.physica_distribution_service.y}}
				    </span></td><td t="s" id="sjs-G102"><span contenteditable="true">KTT02Z219</span></td><td t="s" id="sjs-H102"><span contenteditable="true">十五、营业外收入</span></td><td t="s" id="sjs-I102"><span contenteditable="true">213</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L102"><span contenteditable="true">
                    {{file.business_out_profit.m}}
                    </span></td><td t="n" id="sjs-M102"><span contenteditable="true">
                    {{file.business_out_profit.y}}
                    </span></td><td t="s" id="sjs-N102"><span contenteditable="true">KTT02163</span></td></tr>
                <tr><td t="s" id="sjs-A103"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8、其他</span></td><td t="s" id="sjs-B103"><span contenteditable="true">99</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E103"><span contenteditable="true">
					{{file.business_cost.other.other.m}}
				    </span></td><td t="n" id="sjs-F103"><span contenteditable="true">
                    {{file.business_cost.other.other.y}}
                    </span></td><td t="s" id="sjs-G103"><span contenteditable="true">KTT02Z083</span></td><td t="s" id="sjs-H103"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;其中：非流动资产处置利得</span></td><td t="s" id="sjs-I103"><span contenteditable="true">214</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L103"><span contenteditable="true">
					{{file.business_out_profit.non_current_assets_dispose_gain.m}}
				    </span></td><td t="n" id="sjs-M103"><span contenteditable="true">
					{{file.business_out_profit.non_current_assets_dispose_gain.y}}
				    </span></td><td t="s" id="sjs-N103"><span contenteditable="true">KTT02164</span></td></tr>
                <tr><td t="s" id="sjs-A104"><span contenteditable="true">三、税金及附加</span></td><td t="s" id="sjs-B104"><span contenteditable="true">100</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E104"><span contenteditable="true">
                    {{file.tax_and_extra.m}}
                    </span></td><td t="n" id="sjs-F104"><span contenteditable="true">
                    {{file.tax_and_extra.y}}
                    </span></td><td t="s" id="sjs-G104"><span contenteditable="true">KTT02Z084</span></td><td t="s" id="sjs-H104"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：&nbsp;处置固定资产利得</span></td><td t="s" id="sjs-I104"><span contenteditable="true">215</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L104"><span contenteditable="true">
					{{file.business_out_profit.non_current_assets_dispose_gain.dispose_fixed_assets_gain.m}}
				    </span></td><td t="n" id="sjs-M104"><span contenteditable="true">
					{{file.business_out_profit.non_current_assets_dispose_gain.dispose_fixed_assets_gain.y}}
				    </span></td><td t="s" id="sjs-N104"><span contenteditable="true">KTT02165</span></td></tr>
                <tr><td t="s" id="sjs-A105"><span contenteditable="true">四、销售费用</span></td><td t="s" id="sjs-B105"><span contenteditable="true">101</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E105"><span contenteditable="true">
                    {{file.sell_fee.m}}
                    </span></td><td t="n" id="sjs-F105"><span contenteditable="true">
                    {{file.sell_fee.y}}
                    </span></td><td t="s" id="sjs-G105"><span contenteditable="true">KTT02Z085</span></td><td t="s" id="sjs-H105"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;政府补助</span></td><td t="s" id="sjs-I105"><span contenteditable="true">216</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L105"><span contenteditable="true">
					{{file.business_out_profit.government_subsidy.m}}
				    </span></td><td t="n" id="sjs-M105"><span contenteditable="true">
					{{file.business_out_profit.government_subsidy.y}}
				    </span></td><td t="s" id="sjs-N105"><span contenteditable="true">KTT02Z217</span></td></tr>
                <tr><td t="s" id="sjs-A106"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;其中:（一）展览费</span></td><td t="s" id="sjs-B106"><span contenteditable="true">102</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E106"><span contenteditable="true">
					{{file.sell_fee.exhibition_fee.m}}
				    </span></td><td t="n" id="sjs-F106"><span contenteditable="true">
					{{file.sell_fee.exhibition_fee.y}}
				    </span></td><td t="s" id="sjs-G106"><span contenteditable="true">KTT02Z086</span></td><td t="s" id="sjs-H106"><span contenteditable="true">十六、营业外支出</span></td><td t="s" id="sjs-I106"><span contenteditable="true">217</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L106"><span contenteditable="true">
                    {{file.business_out_cost.m}}
                    </span></td><td t="n" id="sjs-M106"><span contenteditable="true">
                    {{file.business_out_cost.y}}
                    </span></td><td t="s" id="sjs-N106"><span contenteditable="true">KTT02166</span></td></tr>
                <tr><td t="s" id="sjs-A107"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）广告费</span></td><td t="s" id="sjs-B107"><span contenteditable="true">103</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E107"><span contenteditable="true">
					{{file.sell_fee.advertisement_fee.m}}
				    </span></td><td t="n" id="sjs-F107"><span contenteditable="true">
					{{file.sell_fee.advertisement_fee.y}}
				    </span></td><td t="s" id="sjs-G107"><span contenteditable="true">KTT02Z087</span></td><td t="s" id="sjs-H107"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：非流动资产处置净损失</span></td><td t="s" id="sjs-I107"><span contenteditable="true">218</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L107"><span contenteditable="true">
                    {{file.business_out_cost.non_current_assets_dispose_loss.m}}
                    </span></td><td t="n" id="sjs-M107"><span contenteditable="true">
                    {{file.business_out_cost.non_current_assets_dispose_loss.y}}
                    </span></td><td t="s" id="sjs-N107"><span contenteditable="true">KTT02167</span></td></tr>
                <tr><td t="s" id="sjs-A108"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）业务宣传费</span></td><td t="s" id="sjs-B108"><span contenteditable="true">104</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E108"><span contenteditable="true">
                    {{file.sell_fee.business_publicity.m}}
                    </span></td><td t="n" id="sjs-F108"><span contenteditable="true">
                    {{file.sell_fee.business_publicity.y}}
                    </span></td><td t="s" id="sjs-G108"><span contenteditable="true">KTT02Z088</span></td><td t="s" id="sjs-H108"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：处置固定资产净损失</span></td><td t="s" id="sjs-I108"><span contenteditable="true">219</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L108"><span contenteditable="true">
					{{file.business_out_cost.non_current_assets_dispose_loss.dispose_fixed_assets_loss.m}}
				    </span></td><td t="n" id="sjs-M108"><span contenteditable="true">
					{{file.business_out_cost.non_current_assets_dispose_loss.dispose_fixed_assets_loss.y}}
				    </span></td><td t="s" id="sjs-N108"><span contenteditable="true">KTT02168</span></td></tr>
                <tr><td t="s" id="sjs-A109"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）促销费</span></td><td t="s" id="sjs-B109"><span contenteditable="true">105</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E109"><span contenteditable="true">
					{{file.sell_fee.promotion_fee.m}}
				    </span></td><td t="n" id="sjs-F109"><span contenteditable="true">
					{{file.sell_fee.promotion_fee.y}}
				    </span></td><td t="s" id="sjs-G109"><span contenteditable="true">KTT02Z089</span></td><td t="s" id="sjs-H109"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产盘亏</span></td><td t="s" id="sjs-I109"><span contenteditable="true">220</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L109"><span contenteditable="true">
                    {{file.business_out_cost.fixed_asserts_loss.m}}
                    </span></td><td t="n" id="sjs-M109"><span contenteditable="true">
                    {{file.business_out_cost.fixed_asserts_loss.y}}
                    </span></td><td t="s" id="sjs-N109"><span contenteditable="true">KTT0216901</span></td></tr>
                <tr><td t="s" id="sjs-A110"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）社会渠道手续费</span></td><td t="s" id="sjs-B110"><span contenteditable="true">106</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E110"><span contenteditable="true">
					{{file.sell_fee.social_channel_handle_fee.m}}
				    </span></td><td t="n" id="sjs-F110"><span contenteditable="true">
                    {{file.sell_fee.social_channel_handle_fee.y}}
                    </span></td><td t="s" id="sjs-G110"><span contenteditable="true">KTT02Z090</span></td><td t="s" id="sjs-H110"><span contenteditable="true">十七、利润总额</span></td><td t="s" id="sjs-I110"><span contenteditable="true">221</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L110"><span contenteditable="true">
					{{file.profit_total.m}}
				    </span></td><td t="n" id="sjs-M110"><span contenteditable="true">
                    {{file.profit_total.y}}
                    </span></td><td t="s" id="sjs-N110"><span contenteditable="true">KTT02170</span></td></tr>
                <tr><td t="s" id="sjs-A111"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）社会渠道服务费</span></td><td t="s" id="sjs-B111"><span contenteditable="true">107</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E111"><span contenteditable="true">
					{{file.sell_fee.social_channel_service_fee.m}}
				    </span></td><td t="n" id="sjs-F111"><span contenteditable="true">
                    {{file.sell_fee.social_channel_service_fee.y}}
                    </span></td><td t="s" id="sjs-G111"><span contenteditable="true">KTT02Z091</span></td><td t="s" id="sjs-H111"><span contenteditable="true">十八、所得税费用</span></td><td t="s" id="sjs-I111"><span contenteditable="true">222</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L111"><span contenteditable="true">
					{{file.income_tax_fee.m}}
				    </span></td><td t="n" id="sjs-M111"><span contenteditable="true">
					{{file.income_tax_fee.y}}
				    </span></td><td t="s" id="sjs-N111"><span contenteditable="true">KTT02171</span></td></tr>
                <tr><td t="s" id="sjs-A112"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七)&nbsp;营销外包费</span></td><td t="s" id="sjs-B112"><span contenteditable="true">108</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E112"><span contenteditable="true">
					{{file.sell_fee.market_outsourcing_fee.m}}
				    </span></td><td t="n" id="sjs-F112"><span contenteditable="true">
                    {{file.sell_fee.market_outsourcing_fee.y}}
                    </span></td><td t="s" id="sjs-G112"><span contenteditable="true">KTT02Z092</span></td><td t="s" id="sjs-H112"><span contenteditable="true">十九、净利润</span></td><td t="s" id="sjs-I112"><span contenteditable="true">223</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L112"><span contenteditable="true">
					{{file.retained_profits.m}}
				    </span></td><td t="n" id="sjs-M112"><span contenteditable="true">
					{{file.retained_profits.y}}
				    </span></td><td t="s" id="sjs-N112"><span contenteditable="true">KTT02172</span></td></tr>
                <tr><td t="s" id="sjs-A113"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(八)&nbsp;欠缴催缴费</span></td><td t="s" id="sjs-B113"><span contenteditable="true">109</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E113"><span contenteditable="true">
					{{file.sell_fee.arreara_urge_fee.m}}
				    </span></td><td t="n" id="sjs-F113"><span contenteditable="true">
					{{file.sell_fee.arreara_urge_fee.y}}
				    </span></td><td t="s" id="sjs-G113"><span contenteditable="true">KTT02Z093</span></td><td t="s" id="sjs-H113"><span contenteditable="true">二十、少数股东收益</span></td><td t="s" id="sjs-I113"><span contenteditable="true">224</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L113"><span contenteditable="true">
					{{file.minority_stockholder_gain.m}}
				    </span></td><td t="n" id="sjs-M113"><span contenteditable="true">
					{{file.minority_stockholder_gain.y}}
				    </span></td><td t="s" id="sjs-N113"><span contenteditable="true">KTT02173</span></td></tr>
                <tr><td t="s" id="sjs-A114"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（九）客户服务费</span></td><td t="s" id="sjs-B114"><span contenteditable="true">110</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E114"><span contenteditable="true">
					{{file.sell_fee.custommer_service.m}}
				    </span></td><td t="n" id="sjs-F114"><span contenteditable="true">
					{{file.sell_fee.custommer_service.m}}
				    </span></td><td t="s" id="sjs-G114"><span contenteditable="true">KTT02Z094</span></td><td t="s" id="sjs-H114"><span contenteditable="true">二十一、归属于母公司的净利润</span></td><td t="s" id="sjs-I114"><span contenteditable="true">225</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L114"><span contenteditable="true">
					{{file.retained_profits_belong_to_parent_company.m}}
				    </span></td><td t="n" id="sjs-M114"><span contenteditable="true">
					{{file.retained_profits_belong_to_parent_company.y}}
				    </span></td><td t="s" id="sjs-N114"><span contenteditable="true">KTT02174</span></td></tr>
                <tr><td t="s" id="sjs-A115"><span contenteditable="true">五、管理费用</span></td><td t="s" id="sjs-B115"><span contenteditable="true">111</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E115"><span contenteditable="true">
                    {{file.manage_fee.m}}
                    </span></td><td t="n" id="sjs-F115"><span contenteditable="true">
                    {{file.manage_fee.y}}
                    </span></td><td t="s" id="sjs-G115"><span contenteditable="true">KTT02Z218</span></td><td t="s" id="sjs-H115"><span contenteditable="true">二十二、补充指标：</span></td><td t="s" id="sjs-I115"><span contenteditable="true">226</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L115"><span contenteditable="true">
					{{file.supplement_target.m}}
				    </span></td><td t="n" id="sjs-M115"><span contenteditable="true">
					{{file.supplement_target.y}}
				    </span></td><td t="s" id="sjs-N115"><span contenteditable="true">KTT02175</span></td></tr>
                <tr><td t="s" id="sjs-A116"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：（一）职工薪酬</span></td><td t="s" id="sjs-B116"><span contenteditable="true">112</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E116"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.m}}
                    </span></td><td t="n" id="sjs-F116"><span contenteditable="true">
					{{file.manage_fee.staff_emolument.y}}
				    </span></td><td t="s" id="sjs-G116"><span contenteditable="true">KTT02Z096</span></td><td t="s" id="sjs-H116"><span contenteditable="true">1、增加值</span></td><td t="s" id="sjs-I116"><span contenteditable="true">227</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L116"><span contenteditable="true">
					{{file.supplement_target.value_add.m}}
				    </span></td><td t="n" id="sjs-M116"><span contenteditable="true">
					{{file.supplement_target.value_add.y}}
				    </span></td><td t="s" id="sjs-N116"><span contenteditable="true">KTT02176</span></td></tr>
                <tr><td t="s" id="sjs-A117"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：工资</span></td><td t="s" id="sjs-B117"><span contenteditable="true">113</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E117"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument.m}}
                    </span></td><td t="n" id="sjs-F117"><span contenteditable="true">
					{{file.manage_fee.staff_emolument.emolument.y}}
				    </span></td><td t="s" id="sjs-G117"><span contenteditable="true">KTT02Z097</span></td><td t="s" id="sjs-H117"><span contenteditable="true">2、收回已核销坏帐</span></td><td t="s" id="sjs-I117"><span contenteditable="true">228</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L117"><span contenteditable="true">
					{{file.supplement_target.take_back_canceled_bill.m}}
				    </span></td><td t="n" id="sjs-M117"><span contenteditable="true">
					{{file.supplement_target.take_back_canceled_bill.y}}
				    </span></td><td t="s" id="sjs-N117"><span contenteditable="true">KTT02177</span></td></tr>
                <tr><td t="s" id="sjs-A118"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劳务费</span></td><td t="s" id="sjs-B118"><span contenteditable="true">114</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E118"><span contenteditable="true">
					{{file.manage_fee.staff_emolument.service_fee.m}}
				    </span></td><td t="n" id="sjs-F118"><span contenteditable="true">
					{{file.manage_fee.staff_emolument.service_fee.y}}
				    </span></td><td t="s" id="sjs-G118"><span contenteditable="true">KTT02Z098</span></td><td t="s" id="sjs-H118"><span contenteditable="true">3、营业外支出—非常损失中属于固定资产的部分</span></td><td t="s" id="sjs-I118"><span contenteditable="true">229</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-L118"><span contenteditable="true">
					{{file.supplement_target.business_out_cost_abnormal_cost_belong_to_fixed_asset.m}}
				    </span></td><td t="n" id="sjs-M118"><span contenteditable="true">
					{{file.supplement_target.business_out_cost_abnormal_cost_belong_to_fixed_asset.y}}
				    </span></td><td t="s" id="sjs-N118"><span contenteditable="true">KTT02178</span></td></tr>
                <tr><td t="s" id="sjs-A119"><span contenteditable="true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工资附加费合计</span></td><td t="s" id="sjs-B119"><span contenteditable="true">115</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td t="n" id="sjs-E119"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.m}}
                    </span></td><td t="n" id="sjs-F119"><span contenteditable="true">
                    {{file.manage_fee.staff_emolument.emolument_extra.y}}
                    </span></td><td t="s" id="sjs-G119"><span contenteditable="true">KTT02Z099</span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td><td><span contenteditable="true"></span></td></tr>
            </table>
        </div>
        <!-- <Table :columns="sys_m" :data="sys_m_data_show" :loading="loading"  @on-select="select"  @on-current-change="select" ref="selection" highlight-row border></Table> -->
        <!-- <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="total" :current="page" show-elevator :page-size="15" @on-change="get_info"></Page>
            </div>
            <div style="float: left;">
            </div>
        </div> -->
      </Col>
    </Row>
  </div>
</template>
<script>
    import store from '../../store'
    import * as util from '../../util'
    import {read} from "../../read.js"
    export default {
        data () {
            return {
                file:{
                    author:"",
                    time:"",
                    business_income:{
                        m:0,y:0,
                        main:{m:0,y:0},
                        other:{m:0,y:0}
                    },
                    business_cost:{
                        m:0,y:0,
                        main:{
                            m:0,y:0,
                            staff_emolument:{
                                m:0,y:0,
                                emolument:{m:0,y:0},
                                service_fee:{m:0,y:0},
                                emolument_extra:{
                                    m:0,y:0,
                                    welfare:{
                                        m:0,y:0,
                                        moneyness:{m:0,y:0},
                                        non_moneyness:{
                                            m:0,y:0,
                                            using_right_property_depreciation:{m:0,y:0},
                                            depreciation:{m:0,y:0},
                                            rent:{m:0,y:0}
                                        }
                                    },
                                    house_fund:{m:0,y:0},
                                    social_insurance:{
                                        m:0,y:0,
                                        enterprise_year_fund:{m:0,y:0},
                                    },
                                    union_fund:{m:0,y:0},
                                    staff_education:{m:0,y:0},
                                    work_protect:{m:0,y:0},
                                    other:{m:0,y:0}
                                }
                            },
                            depreciation:{m:0,y:0},
                            fix_cost:{
                                m:0,y:0,
                                house_fix:{m:0,y:0},
                                car_fix:{m:0,y:0},
                                equipment_fix:{m:0,y:0},
                                other_fix:{m:0,y:0}
                            },
                            low_value_depreciation_amortize:{
                                m:0,y:0,
                                instrument:{m:0,y:0}
                            },
                            circuit_network_rent:{
                                m:0,y:0,
                                circuit_rent:{m:0,y:0},
                                network_rent:{m:0,y:0},
                                other:{m:0,y:0}
                            },
                            water_electric_warm:{m:0,y:0},
                            power:{m:0,y:0},
                            business_articles:{m:0,y:0},
                            car_drive:{m:0,y:0},
                            post_communicate:{m:0,y:0},
                            insurance:{m:0,y:0},
                            trip_fee:{m:0,y:0},
                            book_document_fee:{m:0,y:0},
                            tenement_manage_cost:{m:0,y:0},
                            officail_work:{m:0,y:0},
                            meeting:{m:0,y:0},
                            business_outsourcing:{m:0,y:0},
                            safety_protect:{m:0,y:0},
                            traffic:{m:0,y:0},
                            system_integration:{m:0,y:0},
                            rent:{
                                m:0,y:0,
                                house_rent:{m:0,y:0},
                                car_rent:{m:0,y:0}
                            },
                            material:{m:0,y:0},
                            business_technology_support:{m:0,y:0},
                            intangible_assets_amortize:{
                                m:0,y:0,
                                land_using_right:{m:0,y:0}
                            },
                            service_outsourcing:{m:0,y:0},
                            in_network_settle_account_fee:{m:0,y:0},
                            between_network_settle_account_fee:{m:0,y:0},
                            resource_using:{m:0,y:0},
                            TCT_fee:{m:0,y:0},
                            safety_product_fee:{m:0,y:0},
                            using_right_property_depreciation:{
                                m:0,y:0,
                                house_using_right:{m:0,y:0},
                                groud_using_right:{m:0,y:0},
                            },
                            non_rent_using_fee:{
                                m:0,y:0,
                                groud_service:{m:0,y:0},
                                car_service:{m:0,y:0},
                                equipment_service:{m:0,y:0},
                                other_service:{m:0,y:0}
                            },
                            circuit_network_service:{m:0,y:0},
                            other:{m:0,y:0}
                        },
                        other:{
                            m:0,y:0,
                            staff_emolument:{
                                m:0,y:0,
                                emolument:{m:0,y:0},
                                service_fee:{m:0,y:0},
                                emolument_extra:{
                                    m:0,y:0,
                                    welfare:{
                                        m:0,y:0,
                                        moneyness:{m:0,y:0},
                                        non_moneyness:{
                                            m:0,y:0,
                                            using_right_property_depreciation:{m:0,y:0},
                                            depreciation:{m:0,y:0},
                                            rent:{m:0,y:0}
                                        }
                                    },
                                    house_fund:{m:0,y:0},
                                    social_insurance:{m:0,y:0},
                                    union_fund:{m:0,y:0},
                                    staff_education:{m:0,y:0},
                                    work_protect:{m:0,y:0},
                                    other:{m:0,y:0}
                                }
                            },
                            depreciation:{m:0,y:0},
                            sell_terminal_commodity:{
                                m:0,y:0,
                                cellphone:{m:0,y:0}
                            },
                            sell_equipment:{m:0,y:0},
                            rent_business_cost:{
                                m:0,y:0,
                                using_right_property_depreciation:{m:0,y:0}
                            },
                            softwore_service_cost:{m:0,y:0},
                            tenement_manage_cost:{m:0,y:0},
                            physica_distribution_service:{m:0,y:0},
                            other:{m:0,y:0}
                        }
                    },
                    tax_and_extra:{m:0,y:0},
                    sell_fee:{
                        m:0,y:0,
                        exhibition_fee:{m:0,y:0},
                        advertisement_fee:{m:0,y:0},
                        business_publicity:{m:0,y:0},
                        promotion_fee:{m:0,y:0},
                        social_channel_handle_fee:{m:0,y:0},
                        social_channel_service_fee:{m:0,y:0},
                        market_outsourcing_fee:{m:0,y:0},
                        arreara_urge_fee:{m:0,y:0},
                        custommer_service:{m:0,y:0}
                    },
                    manage_fee:{
                        m:0,y:0,
                        staff_emolument:{
                            m:0,y:0,
                            emolument:{m:0,y:0},
                            service_fee:{m:0,y:0},
                            emolument_extra:{
                                m:0,y:0,
                                welfare:{
                                    m:0,y:0,
                                    moneyness:{m:0,y:0},
                                    non_moneyness:{
                                        m:0,y:0,
                                        using_right_property_depreciation:{m:0,y:0},
                                        depreciation:{m:0,y:0},
                                        rent:{m:0,y:0}
                                    }
                                },
                                house_fund:{m:0,y:0},
                                social_insurance:{
                                    m:0,y:0,
                                    enterprise_year_fund:{m:0,y:0},
                                },
                                union_fund:{m:0,y:0},
                                staff_education:{m:0,y:0},
                                work_protect:{m:0,y:0},
                                other:{m:0,y:0}
                            },
                            dismiss_welfare:{m:0,y:0},
                        },
                        depreciation:{m:0,y:0},
                        intangible_assets_amortize:{
                            m:0,y:0,
                            land_using_right:{m:0,y:0},
                            softwore:{m:0,y:0}
                        },
                        fix_cost:{
                            m:0,y:0,
                            house_fix:{m:0,y:0},
                            car_fix:{m:0,y:0},
                            equipment_fix:{m:0,y:0},
                        },
                        low_value_depreciation_amortize:{m:0,y:0},
                        officail_work:{m:0,y:0},
                        trip_fee:{m:0,y:0},
                        business_service_fee:{m:0,y:0},
                        afforest_sanitation:{m:0,y:0},
                        rent:{
                            m:0,y:0,
                            house_rent:{m:0,y:0},
                            car_rent:{m:0,y:0}
                        },
                        tenement_manage_cost:{m:0,y:0},
                        water_fee:{m:0,y:0},
                        electric_fee:{m:0,y:0},
                        warm_fee:{m:0,y:0},
                        car_drive:{m:0,y:0},
                        property_insurance:{m:0,y:0},
                        post_communicate:{m:0,y:0},
                        meeting:{m:0,y:0},
                        guard:{m:0,y:0},
                        party_group_activity:{m:0,y:0},
                        traffic:{m:0,y:0},
                        using_right_property_depreciation:{
                            m:0,y:0,
                            house_using_right:{m:0,y:0},
                            groud_using_right:{m:0,y:0}
                        },
                        non_rent_using_fee:{m:0,y:0},
                        consult_fee:{m:0,y:0},
                        other:{m:0,y:0}
                    },
                    research_develop_cost:{
                        m:0,y:0,
                        staff_emolument:{
                            m:0,y:0,
                            emolument:{m:0,y:0},
                            welfare:{
                                m:0,y:0,
                                using_right_property_depreciation:{m:0,y:0},
                            },
                            insurance:{
                                m:0,y:0,
                                enterprise_year_fund:{m:0,y:0},
                            },
                            service_fee:{m:0,y:0},
                        },
                        power:{m:0,y:0},
                        low_value_depreciation_amortize:{m:0,y:0},
                        fix_cost:{m:0,y:0},
                        depreciation:{m:0,y:0},
                        using_right_property_depreciation:{m:0,y:0},
                        rent:{m:0,y:0},
                        intangible_assets_amortize:{m:0,y:0},
                        entrust_cooperate_fee:{m:0,y:0},
                        new_production_design:{m:0,y:0},
                        experiment_try:{m:0,y:0},
                        trip_fee:{m:0,y:0},
                        meeting:{m:0,y:0},
                        other:{m:0,y:0}
                    },
                    finance_cost:{
                        m:0,y:0,
                        interest_income:{m:0,y:0},
                        interest_disburse:{m:0,y:0},
                        bank_handle:{m:0,y:0},
                        rent_financing_cost:{m:0,y:0},
                        exchange_gain_or_loss:{m:0,y:0},
                        other:{m:0,y:0}
                    },
                    property_decrease_loss:{
                        m:0,y:0,
                        prepayment:{m:0,y:0},
                        inventory:{m:0,y:0},
                        long_time_stock_rights:{m:0,y:0},
                        fixed_asserts:{m:0,y:0},
                        intangible_assets:{m:0,y:0},
                        building_project:{m:0,y:0},
                        project_material:{m:0,y:0},
                        other:{m:0,y:0}
                    },
                    credit_decrease_loss:{
                        m:0,y:0,
                        receivables:{m:0,y:0},
                        other_receivables:{m:0,y:0},
                        creditor_right_investment:{m:0,y:0},
                        other:{m:0,y:0}
                    },
                    fair_value_change:{m:0,y:0},
                    investment_gain:{
                        m:0,y:0,
                        bank_money_manage_gain:{m:0,y:0}
                    },
                    property_dispose_gain:{
                        m:0,y:0,
                        non_current_assets_dispose_gain:{
                            m:0,y:0,
                            fixed_dispose_assets_gain:{m:0,y:0}
                        },
                    },
                    other_gain:{m:0,y:0},
                    business_profit:{m:0,y:0},
                    business_out_profit:{
                        m:0,y:0,
                        non_current_assets_dispose_gain:{
                            m:0,y:0,
                            dispose_fixed_assets_gain:{m:0,y:0}
                        },
                        government_subsidy:{m:0,y:0}
                    },
                    business_out_cost:{
                        m:0,y:0,
                        non_current_assets_dispose_loss:{
                            m:0,y:0,
                            dispose_fixed_assets_loss:{m:0,y:0}
                        },
                        fixed_asserts_loss:{m:0,y:0}
                    },
                    profit_total:{m:0,y:0},
                    income_tax_fee:{m:0,y:0},
                    retained_profits:{m:0,y:0},
                    minority_stockholder_gain:{m:0,y:0},
                    retained_profits_belong_to_parent_company:{m:0,y:0},
                    supplement_target:{
                        m:0,y:0,
                        value_add:{m:0,y:0},
                        take_back_canceled_bill:{m:0,y:0},
                        business_out_cost_abnormal_cost_belong_to_fixed_asset:{m:0,y:0}
                    }
                },
        　　}
      },
        methods: {
            upload(){
                var elt = document.getElementById('tb_3');
                var data = XLSX.utils.table_to_book(elt, {sheet:"sheet1"}).Sheets.sheet1
                read(data)
                this.$Message.success("成功")
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
                    // for(let i in f){
                    //     if(i=='!margins'||i=='!ref')continue
                    //     if(typeof(f[i].h)=='string'){
                    //         f[i].h = f[i].h.replace(/\s/g,"|_|")
                    //         f[i].h = f[i].h.replace(/\t/g,"|_||_||_|")
                    //     }
                    // }
                    that.file = read(f)
                    // document.getElementById("box").innerHTML = XLSX.utils.sheet_to_html(f, {editable:true})
                    // .replace(/<table/g, '<table id="tb_3" cellspacing="0" border="1"')
                    // .replace(/\|_\|/g, '&nbsp;')
                    // console.log(XLSX.utils.sheet_to_html(f, {editable:true})
                    // .replace(/<table/g, '<table id="tb_3" cellspacing="0" border="1"')
                    // .replace(/\|_\|/g, '&nbsp;'))
                };
            },
        },
        mounted(){
            // this.get_option()
            // this.get_info()
            // var table = document.getElementsByTagName("table")[0];
            // util.cc(this.sys_m,table,1,0)   
            // document.getElementById("file").addEventListener("change",file)
        }
       
    }
</script>
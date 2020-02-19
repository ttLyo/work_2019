<template>
  <div class="animated fadeIn">
    <Row>
      <!-- <Col  :lg="6">
		<div>
			<Tree  :data="tree" class="tree"></Tree>
		</div>
      </Col> -->
      <Col :lg="24">
        <input type="file" id="file" @change="file1"/>
        <Button type="info" style="margin-left:10px" @click="upload">确认上传</Button>
            <DatePicker v-model="time" type="month"/>
        <Button type="error" style="margin-left:10px" @click="remove">删除</Button>
        <Select v-model="table_index" @on-change="change_time" style="width:200px">
            <Option v-for="item in all_file" :key="item.id" :value="item.index">{{item.date.slice(0,7)}}</Option>
        </Select>
        <div id="box">
          <h1 style="text-align:center">在建工程及转固情况表</h1>
          <h6 style="text-align:center">{{file.author}} {{file.time}}</h6>
          <table id="tb_3" cellspacing="0">
            <tr style="display:none">
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td t="s" id="sjs-G1">
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
            <tr style="display:none">
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td t="s" id="sjs-M2">
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
            <tr style="display:none">
              <td t="s" id="sjs-A3">
                <span contenteditable="true">编制单位：中移铁通有限公司内蒙古分公司(合并)</span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td t="s" id="sjs-D3">
                <span contenteditable="true">2019年6月</span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td t="s" id="sjs-M3">
                <span contenteditable="true">金额单位：元</span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
            <tr>
              <td rowspan="2" t="s" id="sjs-A4">
                <span contenteditable="true">项 目</span>
              </td>
              <td rowspan="2" t="s" id="sjs-B4">
                <span contenteditable="true">行次</span>
              </td>
              <td rowspan="2" t="s" id="sjs-C4">
                <span contenteditable="true">计划金额</span>
              </td>
              <td colspan="2" t="s" id="sjs-D4">
                <span contenteditable="true">年初余额</span>
              </td>
              <td colspan="4" t="s" id="sjs-F4">
                <span contenteditable="true">本年增加</span>
              </td>
              <td colspan="2" t="s" id="sjs-J4">
                <span contenteditable="true">本年减少</span>
              </td>
              <td colspan="2" t="s" id="sjs-L4">
                <span contenteditable="true">期末余额</span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-D5">
                <span contenteditable="true">金额</span>
              </td>
              <td t="s" id="sjs-E5">
                <span contenteditable="true">其中：利息资本化金额</span>
              </td>
              <td t="s" id="sjs-F5">
                <span contenteditable="true">金额</span>
              </td>
              <td t="s" id="sjs-G5">
                <span contenteditable="true">其中：固定资产转回</span>
              </td>
              <td t="s" id="sjs-H5">
                <span contenteditable="true">其中：利用铜退资产取得的光缆价值</span>
              </td>
              <td t="s" id="sjs-I5">
                <span contenteditable="true">其中:利息资本化金额</span>
              </td>
              <td t="s" id="sjs-J5">
                <span contenteditable="true">金额</span>
              </td>
              <td t="s" id="sjs-K5">
                <span contenteditable="true">其中：转增固定资产</span>
              </td>
              <td t="s" id="sjs-L5">
                <span contenteditable="true">金额</span>
              </td>
              <td t="s" id="sjs-M5">
                <span contenteditable="true">其中：利息资本化金额</span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-A6">
                <span contenteditable="true">栏 次</span>
              </td>
              <td t="s" id="sjs-B6">
                <span contenteditable="true">——</span>
              </td>
              <td t="s" id="sjs-C6">
                <span contenteditable="true">1</span>
              </td>
              <td t="s" id="sjs-D6">
                <span contenteditable="true">2</span>
              </td>
              <td t="s" id="sjs-E6">
                <span contenteditable="true">3</span>
              </td>
              <td t="s" id="sjs-F6">
                <span contenteditable="true">4</span>
              </td>
              <td t="s" id="sjs-G6">
                <span contenteditable="true">5</span>
              </td>
              <td t="s" id="sjs-H6">
                <span contenteditable="true">6</span>
              </td>
              <td t="s" id="sjs-I6">
                <span contenteditable="true">7</span>
              </td>
              <td t="s" id="sjs-J6">
                <span contenteditable="true">8</span>
              </td>
              <td t="s" id="sjs-K6">
                <span contenteditable="true">9</span>
              </td>
              <td t="s" id="sjs-L6">
                <span contenteditable="true">10</span>
              </td>
              <td t="s" id="sjs-M6">
                <span contenteditable="true">11</span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-A7">
                <span contenteditable="true">在建工程合计</span>
              </td>
              <td t="s" id="sjs-B7">
                <span contenteditable="true">1</span>
              </td>
              <td t="n" id="sjs-C7">
                <span contenteditable="true">{{file.building_project_total.plan.value}}</span>
              </td>
              <td t="n" id="sjs-D7">
                <span contenteditable="true">{{file.building_project_total.year_begin.sum.value}}</span>
              </td>
              <td t="n" id="sjs-E7">
                <span contenteditable="true">{{file.building_project_total.year_begin.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-F7">
                <span contenteditable="true">{{file.building_project_total.year_add.sum.value}}</span>
              </td>
              <td t="n" id="sjs-G7">
                <span contenteditable="true">{{file.building_project_total.year_add.sum.fixed_assert_back.value}}</span>
              </td>
              <td t="n" id="sjs-H7">
                <span contenteditable="true">{{file.building_project_total.year_add.sum.fixed_assert_back.copper_back.value}}</span>
              </td>
              <td t="n" id="sjs-I7">
                <span contenteditable="true">{{file.building_project_total.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-J7">
                <span contenteditable="true">{{file.building_project_total.year_decrease.sum.value}}</span>
              </td>
              <td t="n" id="sjs-K7">
                <span contenteditable="true">{{file.building_project_total.year_decrease.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-L7">
                <span contenteditable="true">{{file.building_project_total.end_reasult.sum.value}}</span>
              </td>
              <td t="n" id="sjs-M7">
                <span contenteditable="true">{{file.building_project_total.end_reasult.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-N7">
                <span contenteditable="true">1604</span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-A8">
                <span contenteditable="true">一、基建工程</span>
              </td>
              <td t="s" id="sjs-B8">
                <span contenteditable="true">2</span>
              </td>
              <td t="n" id="sjs-C8">
                <span contenteditable="true">{{file.building_project_total.base_project.plan.value}}</span>
              </td>
              <td t="n" id="sjs-D8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_begin.sum.value}}</span>
              </td>
              <td t="n" id="sjs-E8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_begin.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-F8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_add.sum.value}}</span>
              </td>
              <td t="n" id="sjs-G8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_add.sum.fixed_assert_back.value}}</span>
              </td>
              <td t="n" id="sjs-H8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_add.sum.fixed_assert_back.copper_back.value}}</span>
              </td>
              <td t="n" id="sjs-I8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-J8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_decrease.sum.value}}</span>
              </td>
              <td t="n" id="sjs-K8">
                <span contenteditable="true">{{file.building_project_total.base_project.year_decrease.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-L8">
                <span contenteditable="true">{{file.building_project_total.base_project.end_reasult.sum.value}}</span>
              </td>
              <td t="n" id="sjs-M8">
                <span contenteditable="true">{{file.building_project_total.base_project.end_reasult.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-N8">
                <span contenteditable="true">160401</span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-A9">
                <span contenteditable="true">二、更改工程</span>
              </td>
              <td t="s" id="sjs-B9">
                <span contenteditable="true">3</span>
              </td>
              <td t="n" id="sjs-C9">
                <span contenteditable="true">{{file.building_project_total.change_project.plan.value}}</span>
              </td>
              <td t="n" id="sjs-D9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_begin.sum.value}}</span>
              </td>
              <td t="n" id="sjs-E9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_begin.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-F9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_add.sum.value}}</span>
              </td>
              <td t="n" id="sjs-G9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_add.sum.fixed_assert_back.value}}</span>
              </td>
              <td t="n" id="sjs-H9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_add.sum.fixed_assert_back.copper_back.value}}</span>
              </td>
              <td t="n" id="sjs-I9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-J9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_decrease.sum.value}}</span>
              </td>
              <td t="n" id="sjs-K9">
                <span contenteditable="true">{{file.building_project_total.change_project.year_decrease.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-L9">
                <span contenteditable="true">{{file.building_project_total.change_project.end_reasult.sum.value}}</span>
              </td>
              <td t="n" id="sjs-M9">
                <span contenteditable="true">{{file.building_project_total.change_project.end_reasult.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-N9">
                <span contenteditable="true">160402</span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-A10">
                <span contenteditable="true">三、合作建设工程</span>
              </td>
              <td t="s" id="sjs-B10">
                <span contenteditable="true">4</span>
              </td>
              <td t="n" id="sjs-C10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.plan.value}}</span>
              </td>
              <td t="n" id="sjs-D10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_begin.sum.value}}</span>
              </td>
              <td t="n" id="sjs-E10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_begin.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-F10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_add.sum.value}}</span>
              </td>
              <td t="n" id="sjs-G10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_add.sum.fixed_assert_back.value}}</span>
              </td>
              <td t="n" id="sjs-H10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_add.sum.fixed_assert_back.copper_back.value}}</span>
              </td>
              <td t="n" id="sjs-I10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-J10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_decrease.sum.value}}</span>
              </td>
              <td t="n" id="sjs-K10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.year_decrease.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-L10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.end_reasult.sum.value}}</span>
              </td>
              <td t="n" id="sjs-M10">
                <span contenteditable="true">{{file.building_project_total.cooprate_project.end_reasult.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-N10">
                <span contenteditable="true">160403</span>
              </td>
            </tr>
            <tr>
              <td t="s" id="sjs-A11">
                <span contenteditable="true">四、其他工程</span>
              </td>
              <td t="s" id="sjs-B11">
                <span contenteditable="true">5</span>
              </td>
              <td t="n" id="sjs-C11">
                <span contenteditable="true">{{file.building_project_total.other_project.plan.value}}</span>
              </td>
              <td t="n" id="sjs-D11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_begin.sum.value}}</span>
              </td>
              <td t="n" id="sjs-E11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_begin.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-F11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_add.sum.value}}</span>
              </td>
              <td t="n" id="sjs-G11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_add.sum.fixed_assert_back.value}}</span>
              </td>
              <td t="n" id="sjs-H11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_add.sum.fixed_assert_back.copper_back.value}}</span>
              </td>
              <td t="n" id="sjs-I11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-J11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_decrease.sum.value}}</span>
              </td>
              <td t="n" id="sjs-K11">
                <span contenteditable="true">{{file.building_project_total.other_project.year_decrease.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-L11">
                <span contenteditable="true">{{file.building_project_total.other_project.end_reasult.sum.value}}</span>
              </td>
              <td t="n" id="sjs-M11">
                <span contenteditable="true">{{file.building_project_total.other_project.end_reasult.sum.interest_capitalization.value}}</span>
              </td>
              <td t="n" id="sjs-N11">
                <span contenteditable="true">160498</span>
              </td>
            </tr>
            <tr style="display:none">
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
              <td>
                <span contenteditable="true"></span>
              </td>
            </tr>
          </table>
        </div>
        <!-- <Table :columns="columns" :data="table_data_show" height=610 border></Table> -->
      </Col>
    </Row>
    <Modal fullscreen
      v-model="show_up"
      title="Common Modal dialog box title">
    </Modal>
  </div>
</template>

<script>
import store from "../../store";
import * as util from "../../util";
import { read_building_project } from "../../read_building_project.js";
export default {
  data() {
    return {
        time:"",//上传用
        table_index:0,
        all_file:[],
				show_up:false,
				tree:[
          {
            title:"在建工程合计",
            expand:true,
            children:[
              {
                title:"一、基建工程",
                expand:true,
              },
              {
                title:"二、更改工程",
                expand:true,
              },
              {
                title:"三、合作建设工程",
                expand:true,
              },
              {
                title:"四、其他工程",
                expand:true,
              },
            ]
          }
        ],
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
            title: '计划金额',
            key: 'mobile',
            width:60,
            sortable:true,
					},
					{
            title: '年初余额',
            children:[
              {
                title:"金额",
                key:"a"
              },
              {
                title:"其中：利息资本化金额",
                key:"b"
              },
            ],
					},
					{
            title: '本年增加',
            children:[
              {
                title:"金额",
                key:"a"
              },
              {
                title:"其中：固定资产转回",
                key:"b"
              },
              {
                title:"其中：利用铜退资产取得的光缆价值",
                key:"b"
              },
              {
                title:"利息资本化金额",
                key:"b"
              },
            ],
					},
					{
            title: '本年减少',
            children:[
              {
                title:"金额",
                key:"a"
              },
              {
                title:"其中：转增固定资产",
                key:"b"
              },
            ],
					},
					{
            title: '期末余额',
            children:[
              {
                title:"金额",
                key:"a"
              },
              {
                title:"其中：利息资本化金额",
                key:"b"
              },
            ],
					},
				],
				index:0,
				table_data:[],
				table_data_show:[],
        file: {
          name: "",
          author: "",
          time: "",
          building_project_total: {
            plan: { value: 0 },
            year_begin: {
              sum: { value: 0, interest_capitalization: { value: 0 } }
            },
            year_add: {
              sum: {
                value: 0,
                fixed_assert_back: {
                  value: 0,
                  copper_back: { value: 0, interest_capitalization: { value: 0 } }
                }
              }
            },
            year_decrease: {
              sum: { value: 0, interest_capitalization: { value: 0 } }
            },
            end_reasult: {
              sum: { value: 0, interest_capitalization: { value: 0 } }
            },
            base_project: {
              plan: { value: 0 },
              year_begin: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              year_add: {
                sum: {
                  value: 0,
                  fixed_assert_back: {
                    value: 0,
                    copper_back: {
                      value: 0,
                      interest_capitalization: { value: 0 }
                    }
                  }
                }
              },
              year_decrease: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              end_reasult: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              }
            },
            change_project: {
              plan: { value: 0 },
              year_begin: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              year_add: {
                sum: {
                  value: 0,
                  fixed_assert_back: {
                    value: 0,
                    copper_back: {
                      value: 0,
                      interest_capitalization: { value: 0 }
                    }
                  }
                }
              },
              year_decrease: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              end_reasult: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              }
            },
            cooprate_project: {
              plan: { value: 0 },
              year_begin: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              year_add: {
                sum: {
                  value: 0,
                  fixed_assert_back: {
                    value: 0,
                    copper_back: {
                      value: 0,
                      interest_capitalization: { value: 0 }
                    }
                  }
                }
              },
              year_decrease: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              end_reasult: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              }
            },
            other_project: {
              plan: { value: 0 },
              year_begin: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              year_add: {
                sum: {
                  value: 0,
                  fixed_assert_back: {
                    value: 0,
                    copper_back: {
                      value: 0,
                      interest_capitalization: { value: 0 }
                    }
                  }
                }
              },
              year_decrease: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              },
              end_reasult: {
                sum: { value: 0, interest_capitalization: { value: 0 } }
              }
            }
          }
        }
    };
  },
  methods: {
    upload() {
      var elt = document.getElementById("tb_3");
      var data = XLSX.utils.table_to_book(elt, { sheet: "sheet1" }).Sheets.sheet1;
      data = read_building_project(data);
      util._fetch('finance/','POST',{"data":data,"table_name":"在建工程及转固情况表","date":this.time})
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
        that.file = read_building_project(f);
        // console.log(this.file)
        // console.log("1111",read_business_gain(XLSX.utils.table_to_book(document.getElementById('tb_3')).Sheets.Sheet1))
        // console.log(
        //   XLSX.utils
        //     .sheet_to_html(f, { editable: true })
        //     .replace(/<table/g, '<table id="tb_3" cellspacing="0" border="1"')
        //     .replace(/\|_\|/g, "&nbsp;")
        // );
      };
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
    get_cell_class(level){
      return {
        name:'space'+level
      }
    },
    init(){
      util._fetch('finance/CIP','get')
      .then(res=>{
        console.log(res)
        if(res.length<=0)return
        this.file = JSON.parse(res[0].data.replace(/'/g,'"'))
         new Promise(()=>{
            let index_table = 0
            this.all_file = []
            for(let i of res){
                this.index= 1
                i.data = JSON.parse(i.data.replace(/'/g,'"'))

                i.index = index_table
                index_table++
                this.all_file.push(i)
            }
            console.log("111",this.all_file)
        })
      })
    },
    change_time(e){
        // this.table_data = this.all_file[e].data
        // this.table_data_show = this.all_file[e].data
        this.file = this.all_file[e].data
    },
    remove(){
        this.$Modal.confirm({
            title:"提示",
            content:"确认删除"+this.all_file[this.table_index].date.slice(0,7)+"的表格数据吗，删除无法恢复",
            onOk:()=>{
                util._fetch('finance/CIP?id='+this.all_file[this.table_index].id,'delete')
                .then(res=>{
                    console.log(res)
                    if(typeof(res)=='object'){
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
    this.init()
  }
};
</script>
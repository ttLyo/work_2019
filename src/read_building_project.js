var data = {
    author: "",
    time: "",
    building_project_total: {
        plan: {value: 0}, year_begin: { sum: { value: 0, interest_capitalization: {value: 0} } }, year_add: { sum: { value: 0, fixed_assert_back: { value: 0, copper_back: { value: 0, interest_capitalization: {value: 0} } } } }, year_decrease: { sum:{ value: 0, interest_capitalization: {value: 0} }}, end_reasult: { sum:{ value: 0, interest_capitalization: {value: 0} } },
        base_project: { plan: {value: 0}, year_begin: { sum: { value: 0, interest_capitalization: {value: 0} } }, year_add: { sum: { value: 0, fixed_assert_back: { value: 0, copper_back: { value: 0, interest_capitalization: {value: 0} } } } }, year_decrease: { sum:{ value: 0, interest_capitalization: {value: 0} } }, end_reasult: { sum:{ value: 0, interest_capitalization: {value: 0} } } },
        change_project: { plan: {value: 0}, year_begin: { sum: { value: 0, interest_capitalization: {value: 0} } }, year_add: { sum: { value: 0, fixed_assert_back: { value: 0, copper_back: { value: 0, interest_capitalization: {value: 0} } } } }, year_decrease: { sum:{ value: 0, interest_capitalization: {value: 0} } }, end_reasult: { sum:{ value: 0, interest_capitalization: {value: 0} } } },
        cooprate_project: { plan: {value: 0}, year_begin: { sum: { value: 0, interest_capitalization: {value: 0} } }, year_add: { sum: { value: 0, fixed_assert_back: { value: 0, copper_back: { value: 0, interest_capitalization: {value: 0} } } } }, year_decrease: { sum:{ value: 0, interest_capitalization: {value: 0} } }, end_reasult: { sum:{ value: 0, interest_capitalization: {value: 0} } } },
        other_project: { plan: {value: 0}, year_begin: { sum: { value: 0, interest_capitalization: {value: 0} } }, year_add: { sum: { value: 0, fixed_assert_back: { value: 0, copper_back: { value: 0, interest_capitalization: {value: 0} } } } }, year_decrease: { sum:{ value: 0, interest_capitalization: {value: 0} } }, end_reasult: { sum:{ value: 0, interest_capitalization: {value: 0} } } },
    }
}
import {set} from './set'
function read_building_project(f){
    data.author = f.A3.v
    data.time = f.D3.v
    let f1=data.building_project_total
    f1.plan.value=set(f,'C7')
    f1.year_begin.sum.value=set(f,'D7')
    f1.year_begin.sum.interest_capitalization.value=set(f,'E7')
    f1.year_add.sum.value=set(f,'F7')
    f1.year_add.sum.fixed_assert_back.value=set(f,'G7')
    f1.year_add.sum.fixed_assert_back.copper_back.value=set(f,'H7')
    f1.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value=set(f,'I7')
    f1.year_decrease.sum.value=set(f,'J7')
    f1.year_decrease.sum.interest_capitalization.value=set(f,'K7')
    f1.end_reasult.sum.value=set(f,'L7')
    f1.end_reasult.sum.interest_capitalization.value=set(f,'M7')
    
    let f2=data.building_project_total.base_project
    f2.plan.value=set(f,'C8')
    f2.year_begin.sum.value=set(f,'D8')
    f2.year_begin.sum.interest_capitalization.value=set(f,'E8')
    f2.year_add.sum.value=set(f,'F8')
    f2.year_add.sum.fixed_assert_back.value=set(f,'G8')
    f2.year_add.sum.fixed_assert_back.copper_back.value=set(f,'H8')
    f2.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value=set(f,'I8')
    f2.year_decrease.sum.value=set(f,'J8')
    f2.year_decrease.sum.interest_capitalization.value=set(f,'K8')
    f2.end_reasult.sum.value=set(f,'L8')
    f2.end_reasult.sum.interest_capitalization.value=set(f,'M8')

    let f3=data.building_project_total.change_project
    f3.plan.value=set(f,'C9')
    f3.year_begin.sum.value=set(f,'D9')
    f3.year_begin.sum.interest_capitalization.value=set(f,'E9')
    f3.year_add.sum.value=set(f,'F9')
    f3.year_add.sum.fixed_assert_back.value=set(f,'G9')
    f3.year_add.sum.fixed_assert_back.copper_back.value=set(f,'H9')
    f3.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value=set(f,'I9')
    f3.year_decrease.sum.value=set(f,'J9')
    f3.year_decrease.sum.interest_capitalization.value=set(f,'K9')
    f3.end_reasult.sum.value=set(f,'L9')
    f3.end_reasult.sum.interest_capitalization.value=set(f,'M9')

    let f4=data.building_project_total.cooprate_project
    f4.plan.value=set(f,'C10')
    f4.year_begin.sum.value=set(f,'D10')
    f4.year_begin.sum.interest_capitalization.value=set(f,'E10')
    f4.year_add.sum.value=set(f,'F10')
    f4.year_add.sum.fixed_assert_back.value=set(f,'G10')
    f4.year_add.sum.fixed_assert_back.copper_back.value=set(f,'H10')
    f4.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value=set(f,'I10')
    f4.year_decrease.sum.value=set(f,'J10')
    f4.year_decrease.sum.interest_capitalization.value=set(f,'K10')
    f4.end_reasult.sum.value=set(f,'L10')
    f4.end_reasult.sum.interest_capitalization.value=set(f,'M10')

    let f5=data.building_project_total.other_project
    f5.plan.value=set(f,'C11')
    f5.year_begin.sum.value=set(f,'D11')
    f5.year_begin.sum.interest_capitalization.value=set(f,'E11')
    f5.year_add.sum.value=set(f,'F11')
    f5.year_add.sum.fixed_assert_back.value=set(f,'G11')
    f5.year_add.sum.fixed_assert_back.copper_back.value=set(f,'H11')
    f5.year_add.sum.fixed_assert_back.copper_back.interest_capitalization.value=set(f,'I11')
    f5.year_decrease.sum.value=set(f,'J11')
    f5.year_decrease.sum.interest_capitalization.value=set(f,'K11')
    f5.end_reasult.sum.value=set(f,'L11')
    f5.end_reasult.sum.interest_capitalization.value=set(f,'M11')
    console.log(data)
    return data
}
export {read_building_project}
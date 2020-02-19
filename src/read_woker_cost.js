var data={
    author:"",
    time:"",
    business:[],//x轴
}
var project={
        business_type:"",
        woker_cost_total:{value:0},
        emolument:{value:0},
        staff_wealfare:{
            value:0,
            money:{value:0},
            non_money:{value:0}
        },
        social_insurance:{
            value:0,
            base_old_insurance:{value:0},
            base_medical_insurance:{value:0},
            enterprise_year_fund:{value:0},
            add_medical_insurance:{value:0},
            lost_work_insurance:{value:0},
            work_injure_insurance:{value:0},
            pregnancy_insurance:{value:0},
            other_staff_insurance:{value:0}
        },
        house_func:{value:0},
        union_fund:{value:0},
        staff_education:{value:0},
        service_fee:{
            value:0,
            emolument:{value:0},
            social_insurance:{value:0},
            house_func:{value:0},
            manage_tax:{value:0},
            other:{value:0}
        },
        work_protect:{value:0},
        dismiss_welfare:{value:0},
        stock_pay:{value:0},
        other_staff_emolument:{value:0}
    }
var list=['D','E','F','G','H','I','J']
import {set} from './set'
function read_net_manage_bus(f){
    data.author=set(f,'4')
    for(let i of list){
        let temp=JSON.parse(JSON.stringify(project))
        temp.business_type=set(f,i+'4')
        temp.woker_cost_total.value=set(f,i+'6')
        temp.staff_wealfare.value=set(f,i+'6')
        temp.staff_wealfare.money.value=set(f,i+'6')
        temp.staff_wealfare.non_money.value=set(f,i+'6')
        temp.social_insurance.value=set(f,i+'6')
        temp.social_insurance.base_old_insurance.value=set(f,i+'6')
        temp.social_insurance.base_medical_insurance.value=set(f,i+'6')
        temp.social_insurance.enterprise_year_fund.value=set(f,i+'6')
        temp.social_insurance.add_medical_insurance.value=set(f,i+'6')
        temp.social_insurance.lost_work_insurance.value=set(f,i+'6')
        temp.social_insurance.work_injure_insurance.value=set(f,i+'6')
        temp.social_insurance.pregnancy_insurance.value=set(f,i+'6')
        temp.social_insurance.other_staff_insurance.value=set(f,i+'6')
        temp.house_func.value=set(f,i+'6')
        temp.union_fund.value=set(f,i+'6')
        temp.service_fee.value=set(f,i+'6')
        temp.service_fee.emolument.value=set(f,i+'6')
        temp.service_fee.social_insurance.value=set(f,i+'6')
        temp.service_fee.manage_tax.house_func.value=set(f,i+'6')
        temp.service_fee.other.value=set(f,i+'6')
        temp.work_protect.value=set(f,i+'6')
        temp.dismiss_welfare.value=set(f,i+'6')
        temp.stock_pay.value=set(f,i+'6')
        temp.other_staff_emolument.value=set(f,i+'6')
        data.business.push(temp)
    }   
    console.log(data)
    return data
}
export {read_net_manage_bus}
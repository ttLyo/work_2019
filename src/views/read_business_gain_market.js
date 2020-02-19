var data={
    author:"",
    time:"",
    market:[],
    
}
var project={
    market:"",
    business_gain_total:{
        value:0,
        network_manage_technology_service_cost:{
            value:0,
            family_customer_manage:{
                value:0,
                open_dubug_service:{value:0},
                technology_service:{value:0}
            },
            group_customer_manage:{
                value:0,
                open_dubug_service:{value:0},
                technology_service:{value:0}
            },
            base_station_manage:{value:0},
            optical_cable_manage:{value:0},
            WLAN_manage:{value:0},
            iron_tower_manage:{value:0},
            IDC_manage:{value:0},
            network_optimize:{value:0},
            network_resource_check_and_maintain:{value:0},
            family_group_network_service:{value:0},
            intellectual_product_fix:{value:0},
            room_diliver_manage:{value:0},
            other_manage:{value:0}
        },
        project_service:{
            value:0,
            project:{
                value:0,
                project_group:{value:0},
                project_family:{value:0},
                project_transfer_pipe:{value:0},
                equipment_install:{value:0},
                room_diliver:{value:0},
                WLAN:{value:0},
                ICT:{value:0},
                IDC:{value:0},
                other:{value:0}
            },
            design_service:{value:0},
            project_manage:{value:0},
            project_watch:{value:0},
            other:{value:0}
        },
        market_bussiness_service_gain:{
            value:0,
            sell_service:{
                value:0,
                family:{value:0},
                person:{value:0},
                group:{
                    value:0,
                    ICT:{value:0},
                    medium_small_company:{value:0},
                    infomatization_service:{value:0}
                },
                intnet_business:{value:0},
                oprate_service:{value:0},
                other:{value:0}
            },
            service_support:{
                value:0,
                medium_small_company_support:{value:0},
                group_support:{value:0},
                ICT:{
                    value:0,
                    system_integration:{value:0},
                    maintain_insurance:{value:0}
                },
                IDC:{value:0},
                cloud_comput:{value:0},
                big_data:{value:0},
                other:{value:0}
            },
            store_business:{
                value:0,
                self_user_business:{
                    value:0,
                    voice:{value:0},
                    data:{value:0},
                    resource_rent:{
                        value:0,
                        cooparate_build:{value:0}
                    },
                    in_network:{value:0},
                    between_network:{value:0},
                    other:{value:0}
                },
                resource_using_fee:{value:0},
                user_change_compensation:{value:0}
            }
        },
        measure_and_network_test_gain:{
            value:0,
            instrument_measure:{value:0},
            network_5G_measure:{value:0},
            wireless_network_measure:{value:0},
            intnet_measure:{value:0},
            intnet_of_thing_measure:{value:0},
            other_measure:{value:0}
        },
        other_gain:{
            value:0,
            sell_terminal_and_good:{value:0},
            sell_equipment:{value:0},
            rent_business:{value:0},
            software_service:{value:0},
            tenement_manage:{value:0},
            physica_distribution_service:{value:0},
            other:{value:0}
        }
    }
}
var list=['C','D','E','F','G','H','I','J']
import {set} from './set'
function read_business_gain(f){
    console.log(f)

    data.author = f.A3.v
    data.time = f.D3.v 
    for(let i of list) {
        let temp=JSON.parse(JSON.stringify(project))
        temp.market = set(f,i+'5')
        temp.business_gain_total.value = set(f,i+'7')
        var f1 = temp.business_gain_total.network_manage_technology_service_cost
        // console.log(f1)
        f1.value=set(f,i+'8')
        f1.family_customer_manage.value=set(f,i+'9')
        f1.family_customer_manage.open_dubug_service.value=set(f,i+'10')
        f1.family_customer_manage.technology_service.value=set(f,i+'11')
        f1.group_customer_manage.value=set(f,i+'12')
        f1.group_customer_manage.open_dubug_service.value=set(f,i+'13')
        f1.group_customer_manage.technology_service.value=set(f,i+'14')
        f1.base_station_manage.value=set(f,i+'15')
        f1.optical_cable_manage.value=set(f,i+'16')
        f1.WLAN_manage.value=set(f,i+'17')
        f1.iron_tower_manage.value=set(f,i+'18')
        f1.IDC_manage.value=set(f,i+'19')
        f1.network_optimize.value=set(f,i+'20')
        f1.network_resource_check_and_maintain.value=set(f,i+'21')
        f1.family_group_network_service.value=set(f,i+'22')
        f1.intellectual_product_fix.value=set(f,i+'23')
        f1.room_diliver_manage.value=set(f,i+'24')
        f1.other_manage.value=set(f,i+'25')
        var f2 = temp.business_gain_total.project_service
        // console.log(f2)
        f2.value=set(f,i+'26')
        f2.project.value=set(f,i+'27')
        f2.project.project_group.value=set(f,i+'28')
        f2.project.project_family.value=set(f,i+'29')
        f2.project.project_transfer_pipe.value=set(f,i+'30')
        f2.project.equipment_install.value=set(f,i+'31')
        f2.project.room_diliver.value=set(f,i+'32')
        f2.project.WLAN.value=set(f,i+'33')
        f2.project.ICT.value=set(f,i+'34')
        f2.project.IDC.value=set(f,i+'35')
        f2.project.other.value=set(f,i+'36')
        f2.design_service.value=set(f,i+'37')
        f2.project_manage.value=set(f,i+'38')
        f2.project_watch.value=set(f,i+'39')
        f2.other.value=set(f,i+'40')
        var f3 = temp.business_gain_total.valuearket_bussiness_service_gain
        // console.log(f3)
        f3.value=set(f,i+'41')
        f3.sell_service.value=set(f,i+'42')
        f3.sell_service.family.value=set(f,i+'43')
        f3.sell_service.person.value=set(f,i+'44')
        f3.sell_service.group.value=set(f,i+'45')
        f3.sell_service.group.ICT.value=set(f,i+'46')
        f3.sell_service.group.valueedium_small_company.value=set(f,i+'47')
        f3.sell_service.group.infomatization_service.value=set(f,i+'48')
        f3.sell_service.intnet_business.value=set(f,i+'49')
        f3.sell_service.oprate_service.value=set(f,i+'50')
        f3.sell_service.other.value=set(f,i+'51')
        f3.service_support.value=set(f,i+'52')
        f3.service_support.valueedium_small_company_support.value=set(f,i+'53')
        f3.service_support.group_support.value=set(f,i+'54')
        f3.service_support.ICT.value=set(f,i+'55')
        f3.service_support.ICT.system_integration.value=set(f,i+'56')
        f3.service_support.ICT.valueaintain_insurance.value=set(f,i+'57')
        f3.service_support.IDC.value=set(f,i+'58')
        f3.service_support.cloud_comput.value=set(f,i+'59')
        f3.service_support.big_data.value=set(f,i+'60')
        f3.service_support.other.value=set(f,i+'61')
        f3.store_business.value=set(f,i+'62')
        f3.store_business.self_user_business.value=set(f,i+'63')
        f3.store_business.self_user_business.voice.value=set(f,i+'64')
        f3.store_business.self_user_business.data.value=set(f,i+'65')
        f3.store_business.self_user_business.resource_rent.value=set(f,i+'66')
        f3.store_business.self_user_business.resource_rent.cooparate_build.value=set(f,i+'67')
        f3.store_business.self_user_business.in_network.value=set(f,i+'68')
        f3.store_business.self_user_business.between_network.value=set(f,i+'69')
        f3.store_business.self_user_business.other.value=set(f,i+'70')
        f3.store_business.resource_using_fee.value=set(f,i+'71')
        f3.store_business.user_change_compensation.value=set(f,i+'72')
        var f4 = temp.business_gain_total.valueeasure_and_network_test_gain
        // console.log(f4)
        f4.value=set(f,i+'73')
        f4.instrument_measure.value=set(f,i+'74')
        f4.network_5G_measure.value=set(f,i+'75')
        f4.wireless_network_measure.value=set(f,i+'76')
        f4.intnet_measure.value=set(f,i+'77')
        f4.intnet_of_thing_measure.value=set(f,i+'78')
        f4.other_measure.value=set(f,i+'79')
        var f5 = temp.business_gain_total.other_gain
        // console.log(f5)
        f5.value=set(f,i+'80')
        f5.sell_terminal_and_good.value=set(f,i+'81')
        f5.sell_equipment.value=set(f,i+'82')
        f5.rent_business.value=set(f,i+'83')
        f5.software_service.value=set(f,i+'84')
        f5.tenement_manage.value=set(f,i+'85')
        f5.physica_distribution_service.value=set(f,i+'86')
        f5.other.value=set(f,i+'87')
        data.market.push(temp)
    }
    
    console.log(data)
    return data
}
export {read_business_gain}
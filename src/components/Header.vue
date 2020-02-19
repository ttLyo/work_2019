<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <!-- <a class="navbar-brand" ></a> -->
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
     
    </ul>

      <!-- <ul class="nav navbar-nav d-md-down-none">
        
        <li class="nav-item header-item">
            <router-link tag="div" to='/'  style="height:55px;" class="nav-link">
              <p><Icon type="compose" size='30' color="#2d8cf0"></Icon></p>
              <p  style="color:white"> 留言管理 </p>
            </router-link> 
          </li>
          <li class="nav-item header-item">
          
            <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
                <p><Icon type="stats-bars" size='30' color="#2d8cf0"></Icon></p>
                <p  style="color:white"> 浏览排行 </p>
            </router-link> 


        </li>

        <li class="nav-item header-item">

          <Dropdown>
        <router-link tag="div" to='/'  style="height:55px;" class="nav-link">
              <p><Icon type="android-cloud" size='30' color="#2d8cf0"></Icon></p>
              <p  style="color:white"> 云服务器 </p>
          </router-link>
          <DropdownMenu slot="list">
              <DropdownItem>Linux</DropdownItem>
              <DropdownItem>Mac OS X</DropdownItem>
              <DropdownItem>Windows</DropdownItem>
              
              <DropdownItem>Core OS</DropdownItem>
          </DropdownMenu>
          </Dropdown>



        </li>


          <li class="nav-item header-item">
        

          <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
              <p><Icon type="trophy" size='30' color="#2d8cf0"></Icon></p>
              <p  style="color:white"> 销量排行 </p>
          </router-link> 


        </li>



      
      </ul> -->
      <!-- <li> -->
      <!-- <ol class="breadcrumb">
            <li class="breadcrumb-item"  v-for="(item, index) in list">
              <span class="active" v-if="isLast(index)">{{ showName(item) }}</span>
              <router-link :to="item.path" v-else-if="item.path!==''">{{ showName(item) }}</router-link>

              <a href="#/" v-else-if="item.path===''">{{ showName(item) }}</a>
            </li>
          </ol> -->
     
         
      <!-- </li> -->


    <ul class="nav navbar-nav ml-auto">
      
      <!-- <li class="nav-item d-md-down-none">
        <a class="nav-link" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li> -->


      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <!-- <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o"> -->
          <span class="d-md-down-none" id="name">admin</span>
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp" @click="check_update=true"><Icon type="alert"></Icon>修改密码</p>
            </Dropdown-item>

            <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>注销</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown>

 
      <li class="nav-item d-md-down-none">
        <!-- <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a> -->
      </li>
    </ul>
     <Modal v-model="check_update" title="修改" width="570">
        <div style="text-align:center">
            <Form inline :model="data">
                <FormItem label='邮箱' style="margin:5px 0 10px 5px;width:80%">
                    <Input style="width:70%;" v-model="data.email" />
                </FormItem>
                <FormItem label='密码' style="margin:5px 0 10px 5px;width:80%">
                    <Input style="width:70%;" type="password" v-model="data.password" />
                </FormItem>
                <FormItem label="确认密码" style="margin:5px 0 10px 5px;width:80%">
                    <Input style="width:70%;left:-11px" type="password" v-model="data.password_check"/>
                </FormItem>
                <br/>
            </Form>
        </div>
        <div slot="footer">
            <Button type="default"  @click="check_update=false;">取消</Button>
            <Button type="primary"  @click="update">确定</Button>
        </div>
    </Modal>
  </navbar>
  
</template>
<script>

import navbar from './Navbar'
import store from '../store'

export default {
  name: 'header',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    separator: String
  },
  components: {
    navbar,
    
  },
  data(){
    return{
      check_update:false,
      data:{
        password:"",
        password_check:"",
        email:store.getters.name
      }
    }
  },
  methods: {
    isLast (index) {

      return index === this.list.length - 1
    },
    showName (item) {
      //console.log(this.list)
      if (item.meta && item.meta.label) {
        item = item.meta && item.meta.label
      }
      if (item.name) {
        item = item.name
      }
      return item
    },
    Logout(e){
          if(e)e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    update(){
        if(this.data.password!=this.data.password_check||this.data.password==''){
          this.$Message.error("密码不一致或为空")
          return
        }
        let d = JSON.parse(JSON.stringify(this.data))
        delete d.password_check
         fetch("https://cjsearch.ziqiang.net.cn/myadmin/esadmin/",{
           method:"put",
           headers:{
            "content-type":"application/json",
            "Authentication":localStorage.getItem("Authentication")
           },
           body:JSON.stringify(d)
         }).then(res=>{
           console.log(res)
           if(res.status==200){
             this.$Message.success("修改成功")
             this.Logout()
           }
         }).catch(res=>{
           this.$Message.error("修改失败，错误信息："+res)
           console.log(res)
         })
    },
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  },

    mounted(){
      document.getElementById("name").innerHTML = store.getters.name
        // console.log(store.getters)
    }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    width: 130px;
    /*background-color: #20a8d8;*/
    /*background-color: white;*/

    height: 55px;
    
    
  }
  .header-item a{
        color:white !important;

  }

</style>

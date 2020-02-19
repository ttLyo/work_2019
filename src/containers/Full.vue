<template>
  <div class="app">
    <AppHeader :list="list" />
    <div class="app-body">
      <Sidebar/>
      <main class="main">
        <!-- <breadcrumb :list="list"/> -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <!-- <AppAside/> -->
    </div>
    <!-- <AppFooter/> -->
  </div>
</template>
<style>
    .ivu-table td{
        height: 30px;
    }
    .ivu-table th{
      /* overflow:hidden; */
      /* text-overflow:clip; */
      /* white-space:normal; */
    }
    .ivu-table-cell {
        padding-left: 4px;
        padding-right: 0px;
        /* white-space: nowrap; */
    }
    .ivu-table-cell:hover {
        overflow:visible;
    }
    .ivu-table-sort{
      display: none;
    }
    .tree{
      overflow-y: scroll;
      height:640px
    }
    .ivu-table .space1 {
        padding-left: 0px
    }
    .ivu-table .space2 {
        padding-left: 10px
    }
    .ivu-table .space3 {
        padding-left: 20px
    }
    .ivu-table .space4 {
        padding-left: 40px
    }
    .ivu-table .space5 {
        padding-left: 60px
    }
    .ivu-table .space6 {
        padding-left: 75px
    }
    .ivu-table .space7 {
        padding-left: 85px
    }
</style>
<script>
import AppHeader from '../components/Header'
import Sidebar from '../components/Sidebar'
// import AppAside from '../components/Aside'
// import AppFooter from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    // AppAside,
    // AppFooter,
    Breadcrumb
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>

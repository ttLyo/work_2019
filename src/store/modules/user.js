import { loginByEmail, logout, getInfo } from 'api/login';
import Cookies from 'js-cookie';
let list = ['SYS','BAS']
function get_right(){

}
const user = {
  state: {
    user: '',
    status: '',
    email: '',
    code: '',
    uid: '',
    auth_type: '',
    token: Cookies.get('Admin-Token'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    right:[],//自己写的垃圾东西  存用户可访问得模块列表
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
      // console.log("1",name)
    },
    SET_RIGHT: (state, right) => {
      state.right = right;//对又是自己写的垃圾东西
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },

  actions: {
    // 邮箱登录
    LoginByEmail({ commit }, userInfo) {
      const email = userInfo.email.trim();
      return new Promise((resolve, reject) => {//
        loginByEmail(email, userInfo.password).then(res => res.text()).then(response => {
          const data = JSON.parse(response);
          // console.log("GG")
          // console.log(response);
          if(data.token){
            Cookies.set('Admin-Token', data.token);
            //console.log(data.token)
            // console.log(data.usrYhmc)
            commit('SET_TOKEN', data.token);
            commit('SET_EMAIL', email);
            resolve();
          }
          else{
            reject("请求错误")
          }
          
        }).catch(error => {
          console.log(error)
          reject(error);
        });
      });
    },


    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => res.text()).then(res => {
          const data = JSON.parse(res);
          // console.log(res)
          commit('SET_ROLES', [data.role]);
          commit('SET_UID', data.name);
          commit('SET_NAME', data.name);
          
          //commit('SET_AVATAR', data.avatar);
          // commit('SET_UID', "001");
          // commit('SET_INTRODUCTION',  "我是超级管理员");
          resolve([data.role]);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 第三方验证登录
    LoginByThirdparty({ commit, state }, code) {
      return new Promise((resolve, reject) => {
        commit('SET_CODE', code);
        loginByThirdparty(state.status, state.email, state.code, state.auth_type).then(response => {
          commit('SET_TOKEN', response.data.token);
          Cookies.set('Admin-Token', response.data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },


    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          Cookies.remove('Admin-Token');
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        Cookies.remove('Admin-Token');
        alert("has logout");
        resolve();
      });
    },

    // 动态修改权限
    ChangeRole({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_ROLES', [role]);
        commit('SET_TOKEN', role);
        Cookies.set('Admin-Token', role);
        resolve();
      })
    }
  }
};

export default user;

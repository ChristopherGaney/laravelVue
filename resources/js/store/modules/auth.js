import { jwtDecrypt } from "../../shared/jwtHelper";
import { tokenAlive } from "../../shared/jwtHelper";

const state = () => ({
  authData: {
    token: "",
    refreshToken: "",
    tokenExp: "",
    userId: "",
    userName: "",
  },
  loginStatus:"",
});
 
const getters = {
    getAuthData(state){
      return state.authData;
    },
    getLoginStatus(state){
      return state.loginStatus;
    },
    isTokenActive(state) {
      if (!state.authData.tokenExp) {
        return false;
      }
      return tokenAlive(state.authData.tokenExp);
    }
};

const headers = { 'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json' };
const actions = {
    async login({ commit }, payload) {
    	console.dir(payload);
      const response = await axios
        .post("http://localhost:3000/auth/login", payload, {headers})
        .catch((err) => {
          console.log(err);
        });
      if (response && response.data) {
        console.dir(response.data);
        commit("saveTokenData", response.data);
        commit("setLoginStatus", "success");
      } else {
        commit("setLoginStatus", "failed");
      }
  }
};
 
const mutations = {
    saveTokenData(state, data) {
 
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
 
    const jwtDecodedValue = jwtDecrypt(data.access_token);
    const newTokenData = {
      token: data.access_token,
      refreshToken: data.refresh_token,
      tokenExp: jwtDecodedValue.exp,
      userId: jwtDecodedValue.sub,
      userName: jwtDecodedValue.userName,
    };
    state.authData = newTokenData;
    console.dir(state.authData); 
  },
  setLoginStatus(state, value){
     state.loginStatus = value;
  }
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
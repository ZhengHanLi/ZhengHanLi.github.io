import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    designatedDate:null,
    setList:[],
    foodList:[],
    userList:[],
    orderLists:[{}]
  },
  getters: {
    Get_UserList(state)
    {
      return state.userList
    },
    Get_FoodList(state)
    {
      return state.foodList
    },
    Get_SetList(state)
    {
      return state.setList
    },
    Get_OrderList(state)
    {
      return state.orderLists.filter(element => {
        console.log(element.foodDate+" "+state.designatedDate  )
          return element.foodDate==state.designatedDate 

      });
       
    }
  },
  mutations: {
    Add_User(state,data)
    {
      state.userList.push(data);
    },
    Add_Food(state,data)
    {
      state.foodList.push(data);
    },
    Add_SetList(state,data)
    {
      state.setList.push(data);
    },
    Add_OrderList(state,data)
    {
      state.orderLists.push(data);
    },
    designatedDate(state,data)
    {
      state.designatedDate=data
    },
    UpdateUserInfo(state,data)
    {
      let index=data.id;
      let userName=data.userName;
      state.userList[index]={"userName":userName}
    },
    DeleteUserInfo(state,data)
    {

      state.userList.splice(data,1)
    },
    UpdateFoodInfo(state,data)
    {
      let index=data.id;
      let foodName=data.foodName;
      let foodUrl=data.foodUrl;
      state.foodList[index]={"foodName":foodName,"foodUrl":foodUrl}
    },
    DeleteFoodInfo(state,data)
    {

      state.foodList.splice(data,1)
    },
    DeleteSetFoodInfo(state,data)
    {

      state.setList.splice(data,1)
    }

  },
  actions: {
  },
  modules: {
  }
})

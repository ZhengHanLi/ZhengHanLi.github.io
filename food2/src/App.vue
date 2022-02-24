<template>
  <div id="app">
    <div class="header">
      <label for="menu_control" class="menu_btn"> <span>選單</span> </label>
      <input type="checkbox" id="menu_control" v-model="isCheck">
      <nav>
        <router-link to="/OrderFood">點餐</router-link> 
        <router-link to="/SetFood">設定餐點</router-link> 
        <router-link to="/FoodSetting">食物設定</router-link> 
        <router-link to="/UsersSetting">人員設定</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      isCheck:false
    }
  }
}

</script>


<style>
.header{
  height:50px;
  background-color: gray;
  position: relative;
}


nav{
  width: 50%;
  height: calc(100vh - 50px);
  position: absolute;
  top:50px;
  left:-100%;
  background-color: #282923;
  transition: 0.4s;
}

nav a{
  display: block;
  padding: 18px 10px;
  text-decoration: none;
  color:#a6e22c;
  border-bottom: 1px solid #a6e22c

}

nav a:hover{
  background-color: rgb(84, 66, 133);
}

#menu_control{
  position: absolute;
  display: none;
}

#menu_control:checked + nav{
  left:0  
}


.menu_btn{
  width: 40px;
  height: 40px;
  background-color: #000;
  display: inline-block;
  left: 10px;
  top:5px;
  position: absolute;

}

.menu_btn span  {
  opacity: 0;
  overflow: hidden;
  display: block;
  width: 1px;
  height: 1px;
}

.menu_btn::before  {
  content: '|';
  position: absolute;
  height: 2px;
  left: 2px;
  width: 36px;
  background-color: #aaa;
  top:0;
  bottom: 0;
  margin: auto;
  box-shadow: 0px 8px 0px #aaa,0px -8px 0px #aaa;
}



@media screen and (min-width:760px){
  .header{
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    margin: auto;
    max-width: 1440px;
  }

  nav{
    position: relative;
    left:0px;
    height: 50px;
    display: flex;
    left:0;
    top:0;
    background-color: transparent;
  }

  nav a{
    border-bottom: none;
    color:black;
    display: inline-block;
    width: 80px;
    text-align: center;
    /* color:#000; */
  }

  nav a:hover{
  background-color: rgb(107, 107, 107);
  }

  .menu_btn{
    display: none;
  }

}

</style>

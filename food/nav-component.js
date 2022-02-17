Vue.component("nav-component",{
    data:function(){
        return{
            buttonList:[
                {text:'RD點餐',value:'order.htm'},
                {text:'RD設定餐點',value:'#'},
                {text:'PM點餐',value:'#'},
                {text:'PM設定餐點',value:'#'},
                {text:'食物設定',value:'food.htm'},
                {text:'人員設定',value:'users.htm'},
            ]
        }
    },
    template:`
    <div class="header">
        <label for="menu_control" class="menu_btn"> <span>選單</span> </label>
        <input type="checkbox" id="menu_control">
        <nav>
            <a  v-for='item of buttonList' :href="item.value">{{item.text}}</a>
        </nav>

    </div>
    `


})
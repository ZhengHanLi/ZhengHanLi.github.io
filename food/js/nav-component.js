Vue.component("nav-component",{
    data:function(){
        return{
            isCheck:false,
            buttonList:[
                {text:'點餐',value:'order'},
                {text:'設定餐點',value:'set'},
                {text:'食物設定',value:'food-setting'},
                {text:'人員設定',value:'users-setting'},
            ]
        }
    },
    template:`
    <div class="header">
        <label for="menu_control" class="menu_btn"> <span>選單</span> </label>
        <input type="checkbox" id="menu_control" v-model="isCheck">
        <nav>
            <a  v-for='item of buttonList' @click="navSet(item.value)" >{{item.text}}</a>
        </nav>

    </div>
    `,
    methods:{
        navSet:function(val){
            this.$emit("nav-info",val);
            this.isCheck=false;
        }

    }


})
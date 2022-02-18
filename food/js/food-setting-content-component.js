Vue.component("food-setting-content-component",{
    data:function(){
        return{
            editItem:null,
            editFood:"",
            editUrl:"",
        }
    },
    props:["lists"],
    template:`
    <div class="content">
        <ul>
            <li v-for="item of lists">
                <template v-if="editItem==null">
                    <div>
                        <span>{{item.foodName}}</span>
                        <span>{{item.foodUrl}}</span>     
                        <button>刪除</button>
                        <button @click="editHandler(item)">修改</button> 
                    </div>

                </template>
                <template v-else-if="editItem!=item">
                    <div>
                        <span>{{item.foodName}}</span>
                        <span>{{item.foodUrl}}</span>      
                    </div>
                </template>
                <template v-else>
                    <div>
                        <input type="text" v-model="editFood">
                        <input type="text" v-model="editUrl">
                        <button @click="completeHandler(item)">完成</button>
                        <button @click="cancelHandler()">取消</button>
                    </div>

                </template>

            </li>
        </ul>
    </div>
    
    `,
    methods:{
        editHandler:function(item){
            this.editItem=item;
            this.editFood=item.foodName
            this.editUrl=item.foodUrl
        },
        cancelHandler:function()
        {
            this.editItem=null
            this.editFood=""
            this.editUrl=""
        },
        completeHandler:function(item)
        {
            this.$emit("updateInfo",{ "foodName":this.editFood,"foodUrl":this.editUrl})

            this.editItem=null
            this.editFood=""
            this.editUrl=""
        },
    }


})
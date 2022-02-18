Vue.component("users-setting-content-component",{
    data:function(){
        return{
            editItem:null,
            editUser:"",
        }
    },
    props:["lists"],
    template:`
    <div class="content">
        <ul>
            <li v-for="item of lists">
                <template v-if="editItem==null">
                    <div>
                        <span>{{item.userName}}</span>
                        <button>刪除</button>
                        <button @click="editHandler(item)">修改</button> 
                    </div>

                </template>
                <template v-else-if="editItem!=item">
                    <div>
                        <span>{{item.userName}}</span>
                    </div>
                </template>
                <template v-else>
                    <div>
                        <input type="text" v-model="editUser">
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
            this.editUser=item.userName
        },
        cancelHandler:function()
        {
            this.editItem=null
            this.editUser=""
        },
        completeHandler:function(item)
        {
            this.$emit("updateInfo",{ "userName":this.editUser})

            this.editItem=null
            this.editUser=""
        },
    }


})
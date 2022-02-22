
<template>
    <div>
        <input type="text" placeholder="人員名稱" v-model.trim="name">
        <button @click="inputHandler">新增</button>    


        <div class="content">
            <ul>
                <li v-for="(item,index) of Get_UserList" :key="index">
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
        
    </div>
</template>

<script>
    export default{
        // name:"UserSetView",
        data(){
            return{
                "name":"",
                "editItem":null
            }
        },
        computed:{
            Get_UserList()
            {
                return this.$store.getters['Get_UserList']
            }
        },
        methods:{
            inputHandler(){
                if( !this.name )  return
                this.$store.commit('Add_User',{"userName":this.name})
                this.name=""
            }
        },
        
    }
</script>

<style>

</style>
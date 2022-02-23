
<template>

    <div class="userContent">
        <input type="text" placeholder="人員名稱" v-model.trim="name">
        <button @click="inputHandler">新增</button>    

        <ul>
            <li v-for="(item,index) of Get_UserList" :key="index">
                <template v-if="editItem==null">
                    <div>
                        <span >{{item.userName}}</span>
                        <button @click="deleteHandler(index)">刪除</button>
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
                        <button @click="completeHandler(index)">完成</button>
                        <button @click="cancelHandler()">取消</button>
                    </div>

                </template>

            </li>
        </ul>
    </div>

</template>

<script>
    export default{
        // name:"UserSetView",
        data(){
            return{
                "name":"",
                "editItem":null,
                "editUser":""
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
            },
            editHandler(item){
                this.editItem=item;
                this.editUser=item.userName
            },
            cancelHandler()
            {
                this.editItem=null
                this.editUser=""
            },
            completeHandler(index)
            {
                this.$store.commit("UpdateUserInfo",{ "id":index,"userName":this.editUser} )
                this.cancelHandler()
            },
            deleteHandler(index)
            {
                if( !confirm("確定要刪除?")) return
                this.$store.commit("DeleteUserInfo",index )
            }
        },
        
    }
</script>

<style scoped>
    .userContent{
        margin: 10px auto;
        max-width: 1440px;
    }

    ul span,
    ul input
    {
        display: inline-block;
        width: 200px;
    }

    ul button{
        display: inline-block;
    }

    ul button{
        border-radius: 100px;
    }

    ul li{
        padding: 5px;
    }

</style>
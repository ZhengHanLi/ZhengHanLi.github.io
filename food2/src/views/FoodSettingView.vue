<template>
    <div>
        <div class="foodContent">
            <div class="add-btn">
                <input type="text" placeholder="餐點名稱" v-model.trim="foodName">
                <input type="text" placeholder="網址" v-model.trim="foodUrl" >  
                <button @click="inputHandler">新增</button>    
            </div>

            <ul>
                <li v-for="(item,index) of Get_FoodList" :key="index">
                    <template v-if="editItem==null">
                        <div>
                            <span>{{item.foodName}}</span>
                            <span>{{item.foodUrl}}</span>     
                            <button @click="deleteHandler(index)">刪除</button>
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
                            <input type="text" v-model="editfoodName">
                            <input type="text" v-model="editfoodUrl">
                            <button @click="completeHandler(index)">完成</button>
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
        data(){
            return{
                "foodName":"",
                "foodUrl":"",
                "editItem":null,
                "editfoodName":"",
                "editfoodUrl":""
            }
        },
        computed:{
            Get_FoodList(){
                return this.$store.getters['Get_FoodList']
            }
        },
        methods:{
            inputHandler()
            {
                if( !this.foodName || !this.foodUrl )
                    return;
                // this.$emit('addlist', { "foodName":this.food,"foodUrl":this.url}); 
                this.$store.commit('Add_Food',{"foodName":this.foodName,"foodUrl":this.foodUrl})
                this.foodName=this.foodUrl=''
            },
            editHandler(item){
                this.editItem=item;
                this.editfoodName=item.foodName
                this.editfoodUrl=item.foodUrl
            },
            cancelHandler()
            {
                this.editItem=null
                this.editfoodName=""
                this.editfoodUrl=""
            },
            completeHandler(index)
            {
                this.$store.commit("UpdateFoodInfo",{ "id":index,"foodName":this.editfoodName,"foodUrl":this.editfoodUrl} )
                this.cancelHandler()
            },
            deleteHandler(index)
            {
                if( !confirm("確定要刪除?")) return
                this.$store.commit("DeleteFoodInfo",index )
            }
        }
    }
</script>


<style scoped>
    .foodContent{
        margin: 10px auto;
        max-width: 1440px;
    }

    ul span,
    ul input
    {
        display: inline-block;
        width: 150px;
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


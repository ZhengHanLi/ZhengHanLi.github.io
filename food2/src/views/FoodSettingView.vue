<template>
    <div>
        <div class="add-btn">
            <input type="text" placeholder="餐點名稱" v-model.trim="foodName">
            <input type="text" placeholder="網址" v-model.trim="foodUrl" >  
            <button @click="inputHandler">新增</button>    
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) of Get_FoodList" :key="index">
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
    </div>  
</template>    

<script>
    export default{
        data(){
            return{
                "foodName":"",
                "foodUrl":"",
                "editItem":null
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
            }
        }
    }
</script>



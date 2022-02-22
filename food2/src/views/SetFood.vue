
<template>
    <div>
        <div>
            <div>
                <input type="date" id="assignDate">
                <select name="" id="foodSel" v-model='selected'>
                    <option disabled value="">Please select one</option>
                    <option v-for="(food,index) of Get_FoodList " :value="food" :key="index">{{food.foodName}}</option>
                </select>
                <button @click="inputHandler">新增</button>    
            </div>
            <div class="line"></div>
        </div> 


        <div class="content">
            <ul>
                <li v-for="(item,index) of Get_SetList" :key="index">
    
                    <div>
                        <span>{{item.foodDate}}</span>
                        <span>{{item.foodName}}</span>
                        <button @click="deleteSet(item)" >刪除</button>
                    </div>
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
                selected:undefined
            }
        },
        mounted(){
            var today = new Date();
            var yyyy = today.getFullYear();
            var mm = today.getMonth()+1; //January is 0!
            var dd = today.getDate();

            if(dd<10){dd='0'+dd} 
            if(mm<10){mm='0'+mm} 
            today = yyyy+'-'+mm+'-'+dd;

            document.getElementById("assignDate").value=today;
        },
        computed:{
            Get_FoodList(){
                return this.$store.getters['Get_FoodList']
            },
            Get_SetList(){
                return this.$store.getters['Get_SetList']
            },
            Get_UserList(){
                return this.$store.getters['Get_UserList']
            }
        },
        methods:{
            inputHandler:function(){
                if( !this.selected )
                    return false;
                let assignedDate=document.getElementById("assignDate").value
                this.$store.commit('Add_SetList',{"foodName":this.selected.foodName,"foodUrl":this.selected.foodUrl,"foodDate":assignedDate })


                let userAry=[]
                this.Get_UserList.forEach(user => {
                    userAry.push(
                        JSON.parse(JSON.stringify(
                            { 
                                "userName":user.userName,
                                "userFood":""
                            }
                        ))
                    )
                });
                this.$store.commit('Add_OrderList',{"foodName":this.selected.foodName,"foodUrl":this.selected.foodUrl,"foodDate":assignedDate,"userList":userAry })
                this.selected=undefined

            }

        }
        
    }
</script>

<style>

</style>
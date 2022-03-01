
<template>

    <div class="setFoodContent">
        <div>
            <input type="date" id="assignDate">
            <select name="" id="foodSel" v-model='selected'>
                <option disabled value="">Please select one</option>
                <option v-for="(food,index) of Get_FoodList " :value="food" :key="index">{{food.foodName}}</option>
            </select>
            <button @click="inputHandler">新增</button>    
        </div>
        <div class="line"></div>

        <div class="content">
            <ul>
                <li v-for="(item,index) of Get_SetList" :key="index">
    
                    <div>
                        <span>{{item.foodDate}}</span>
                        <span>{{item.foodName}}</span>
                        <button @click="deleteHandler(index)" >刪除</button>
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
            inputHandler()
            {
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
                                "userFood":"",
                                "foodDate":assignedDate
                            }
                        ))
                    )
                });
                this.$store.commit('Add_OrderList',{"foodName":this.selected.foodName,"foodUrl":this.selected.foodUrl,"foodDate":assignedDate,"userList":userAry })
                this.selected=undefined

            },
            deleteHandler(index)
            {
                if( !confirm("確定要刪除?")) return
                this.$store.commit("DeleteSetFoodInfo",index )
            }

        }
        
    }
</script>

<style scoped>
    .setFoodContent{
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
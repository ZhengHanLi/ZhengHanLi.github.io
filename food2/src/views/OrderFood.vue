<template>
    <div class='foodContent'>

            <div>
                指定日期輸入：<input type="date" id="assignDate">
                <button @click="AssignList()">查詢</button>
            </div>
            <div class="line"></div>

            <table>
                <caption>
                    <span>店名:{{Get_OrderList[0].foodName}}</span>
                    <span>網址:<a :href="Get_OrderList[0].foodUrl" target="_blank">{{Get_OrderList[0].foodUrl}}</a>  </span>
                </caption>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>食物</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) of Get_OrderList[0].userList" :key="index">
                        <td>{{item.userName}}</td>
                        <td><input type="text" v-model="item.userFood" ></td>
                    </tr>
                </tbody>
            </table>



    </div>
</template>

<script>
    export default{
        data(){
            return{

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
            Get_OrderList(){
                console.log(this.$store.getters['Get_OrderList'][0].foodName)
                return this.$store.getters['Get_OrderList']
            }
        },
        methods:{
            AssignList(){
                let assignedDate=document.getElementById("assignDate").value
                // this.$emit("search-infor",assignedDate )
                this.$store.commit('designatedDate',assignedDate)
            }

        }
    }
</script>


<style scoped>
.foodContent{
    margin: auto;
    max-width: 1440px;
}

table{
    margin-top: 10px;
    width:100%;
    
}

table td{
    text-align: center;
    
}

table caption {
    border-bottom: 2px solid #000;
}

table caption span{
    margin: 20px;
}

</style>
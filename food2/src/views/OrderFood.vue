<template>
    <div class='foodContent'>

            <div>
                指定日期輸入：<input type="date" id="assignDate">
                <button @click="AssignList()">查詢</button>
            </div>

            <div class="storeInfo">
                店名:{{Get_OrderList[0].foodName}}  網址:<a :href="Get_OrderList[0].foodUrl" target="_blank">{{Get_OrderList[0].foodUrl}}</a>  
            </div>
            <div class='titleInfo'>
                <div class='title1'>
                    姓名
                </div>
                <div class='title2'>
                    食物
                </div>
            </div>


            <div class='userSet' v-for="(item,index) of Get_OrderList[0].userList" :key="index">
                <div class='foodvalue1'>
                    {{item.userName}}
                </div>
                <div class='foodvalue2'>
                    <input type="text" v-model="item.userFood" >
                </div>
            </div>





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

.foodContent .storeInfo{
    text-align: center;
    border-bottom: 2px solid;
}

.titleInfo{
    width: 100%;
    box-sizing: content-box;
    display: flex;
}

.titleInfo .title1{
    border-right: 1px solid;
}

.titleInfo .title1,
.titleInfo .title2{
    width: 50%;
    text-align: center;
    background-color: rgb(73, 70, 70);
    color: #fff;
}

.userSet{
    margin-bottom: 8px;
    display: flex;
}



.userSet:nth-child(even){
    /* background-color: rgb(189, 183, 183); */
}

.userSet:nth-child(odd){
    background-color: rgb(211, 203, 203);
}

.userSet .foodvalue1{
    width: 50%;
    text-align: center;
    /* border: 1px solid; */
}


.userSet .foodvalue2{
    width: 50%;
    text-align: left;
    padding-left: 25px;
}

.userSet .foodvalue2 input{
    width: 95%;
   
    border-radius: 7px;
}

</style>
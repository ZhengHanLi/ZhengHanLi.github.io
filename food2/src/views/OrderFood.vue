<template>
    <div class='OrderfoodWrap'>
        <div>
            指定日期輸入：<input type="date" id="assignDate">
            <button @click="AssignList()">查詢</button>
        </div>

        <div class="storeInfo">
            店名:{{Get_OrderList[0].foodName}}  網址:<a :href="Get_OrderList[0].foodUrl" target="_blank">{{Get_OrderList[0].foodUrl}}</a>  
        </div>

        <div class='content'>

            <div class="titleSection">
                <div class='title0'>
                    
                </div>
                <div class='title1'>
                    姓名
                </div>
                <div class='title2'>
                    食物
                </div>
                <div class='title3'>
                    日期1
                </div>
            </div>
        

            <div class='userSet' v-for="(item,index) of Get_OrderList[0].userList" :key="index">
                <div class='foodvalue0'>
                    {{index+1}}
                </div>
                <div class='foodvalue1'>
                    {{item.userName}}
                </div>
                <div class='foodvalue2'>
                    <input type="text" v-model="item.userFood" >
                </div>
                <div class='foodvalue3'>
                    {{item.foodDate}}
                </div>
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
.OrderfoodWrap{
    max-width: 1440px;
    margin: auto;
}

.OrderfoodWrap .storeInfo{
    text-align: center;
    /* border-bottom: 2px solid; */
    margin-bottom: 10px;
}

.content{
    width: 100%;
    box-sizing: content-box;
    display: inline-block;
    border: 1px solid #00bcd4 ;
    padding: 5px;
}

.content .titleSection{
    width: 100%;
    height: 30px;
    display: flex;
    background-color: #00bcd4;
    color: #fff;
    text-align: center;
    align-items: center;
    font: small-caps bold 18px sans-serif;
}

.titleSection .title1{
    border-right: 1px solid;
    border-left: 1px solid;
}




.titleSection .title0{
  width: 10%;
}

.titleSection .title1
{
    width: 30%;

}
.titleSection .title2{
    width: 50%;
    
}
.titleSection .title3{
    width: 10%;
    border-left: 1px solid #fff;
}
/* 
*/
.userSet{
    margin-bottom: 8px;
    display: flex;
    text-align: center;
}



.userSet:nth-child(even){
    /* background-color: rgb(189, 183, 183); */
}

.userSet:nth-child(odd){
    background-color: rgb(211, 203, 203);
}

.userSet .foodvalue0{
    width: 10%;
}
.userSet .foodvalue1{
    width: 30%;
    /* border: 1px solid; */
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
}


.userSet .foodvalue2{
    width: 50%;
    text-align: left;
    /* padding-left: 25px; */
}

.userSet .foodvalue2 input{
    width: 90%;
    border-radius: 7px;

}

.userSet .foodvalue3{
    width: 10%;
    border-left: 1px solid #fff;
}

</style>
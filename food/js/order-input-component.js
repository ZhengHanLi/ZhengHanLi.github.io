Vue.component("order-input-component",{
    data: function (){
        return{

        }
    },

    template:`
    <div>
        <div>
            指定日期輸入：<input type="date" id="assignDate"><button @click="AssignList()">查詢</button>
        </div>
        <div class="line"></div>
    </div>
    `,
    created:function(){

    },
    mounted:function(){
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = today.getMonth()+1; //January is 0!
        var dd = today.getDate();

        if(dd<10){dd='0'+dd} 
        if(mm<10){mm='0'+mm} 
        today = yyyy+'-'+mm+'-'+dd;

        document.getElementById("assignDate").value=today;
    },
    methods:{
        AssignList:function(){
            let assignedDate=document.getElementById("assignDate").value
            this.$emit("search-infor",assignedDate )
        }

    }



})